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
        return coll.insert({_id: 26904,str: "Group Belgium",num: 80433,date: new Date("2018-09-06T02:07:44.740Z"),array: [68468,{_id: 26905,str: "project parsing",num: 84209,date: new Date("2018-09-06T08:53:30.255Z"),obj: {_id: 26906,str: "Sleek",num: 91516,date: new Date("2018-09-05T22:26:53.115Z"),array: [79017],obj: {}}},new Date("2018-09-06T05:36:14.307Z"),"Industrial Refined Fresh Shoes",new Date("2018-09-06T09:55:11.950Z"),"payment",new Date("2018-09-05T21:48:01.549Z"),[],53903,"Brunei Darussalam Granite Credit Card Account",5432],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 26907,str: "e-enable violet Tasty",num: 31834,date: new Date("2018-09-06T09:08:42.432Z"),array: [3193,"Product Chair","transitional Uganda Shilling Rue",55872,{_id: 26908,str: "deposit",num: 96197,date: new Date("2018-09-05T22:33:43.009Z"),obj: {_id: 26909,num: 10839,date: new Date("2018-09-06T17:08:29.952Z"),array: [],obj: {_id: 26910,str: "Chief red website"}}},new Date("2018-09-06T00:53:13.272Z"),45656,"Producer",new Date("2018-09-06T16:49:22.484Z"),new Date("2018-09-06T06:54:00.751Z"),new Date("2018-09-06T07:13:33.324Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 26911,str: "indigo Metal",num: 3071,date: new Date("2018-09-06T00:50:49.795Z"),array: ["Associate Sausages",22333,58336,new Date("2018-09-06T18:01:39.955Z"),new Date("2018-09-06T04:24:49.780Z"),{_id: 26912,str: "Soft Generic Steel Towels Intelligent",num: 53130,date: new Date("2018-09-06T17:34:46.196Z"),array: [45431,"Bahrain Savings Account Networked"],obj: {_id: 26913,str: "Fiji Dollar Right-sized",num: 14066,date: new Date("2018-09-06T01:13:22.712Z"),array: []}},new Date("2018-09-06T11:20:02.874Z"),[],79852],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 26914,str: "Practical SMTP green",num: 68968,date: new Date("2018-09-06T07:54:31.031Z"),array: ["Wooden Strategist integrated",74848,new Date("2018-09-05T22:04:05.082Z"),new Date("2018-09-06T13:13:12.411Z"),[new Date("2018-09-05T21:24:14.058Z"),new Date("2018-09-06T12:23:34.951Z"),[],[],"killer Direct Texas",["world-class e-business Music"],"Rest tan Frozen"],{_id: 26915,str: "Costa Rica Open-source Chicken",num: 27464,date: new Date("2018-09-06T08:47:06.410Z"),array: [],obj: {}},9007]});
    },

    function(coll) {
        return coll.insert({_id: 26916,str: "transform web-readiness Andorra",date: new Date("2018-09-05T23:21:47.049Z"),array: [new Date("2018-09-05T20:12:52.701Z"),"GB Berkshire Assimilated",42806,54581,49233,new Date("2018-09-06T09:37:29.822Z"),82615,["pixel methodology"],"Kuwaiti Dinar Legacy Concrete",new Date("2018-09-06T01:19:10.155Z"),[new Date("2018-09-06T18:31:57.785Z"),74317,{_id: 26917,str: "Licensed pink",num: 51158,date: new Date("2018-09-06T16:57:32.389Z"),obj: {}}],{_id: 26918,str: "matrix Rubber",num: 23013,date: new Date("2018-09-06T15:52:57.010Z"),array: [],obj: {}},{_id: 26919,str: "asymmetric",num: 14448,date: new Date("2018-09-06T07:39:32.192Z"),array: [],obj: {_id: 26920,num: 76845,date: new Date("2018-09-05T23:59:35.081Z"),array: [],obj: {_id: 26921,num: 64226,date: new Date("2018-09-06T05:06:19.584Z"),array: ["Paradigm",new Date("2018-09-06T09:27:40.256Z")]}}}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 26922,str: "coherent back up seamless",num: 27949,date: new Date("2018-09-06T13:28:05.371Z"),array: ["wireless","payment Plastic",new Date("2018-09-06T06:47:35.549Z"),34428,new Date("2018-09-06T05:28:52.687Z"),[],64655,"Consultant",15747,"Saint Helena Pound Handcrafted Wooden Fish Cedi","paradigms capacity",43172],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 26923,str: "Rufiyaa calculate Dynamic",num: 71638,date: new Date("2018-09-06T07:12:40.985Z"),array: [],obj: {_id: 26924,num: 39372,date: new Date("2018-09-06T04:37:23.309Z"),array: [[new Date("2018-09-06T17:54:41.192Z"),new Date("2018-09-06T02:29:34.059Z")],[new Date("2018-09-06T00:29:01.408Z")],40997,85817,new Date("2018-09-06T11:56:19.006Z"),"reboot Branch front-end","matrix quantifying vortals",81371,79151,"multi-byte",[],"Handmade"],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 26925,str: "viral",num: 21681,date: new Date("2018-09-06T03:07:23.858Z"),array: [],obj: {_id: 26926,str: "parsing bypassing",num: 51450,array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 26927,str: "Fantastic Concrete Soap Stravenue application",num: 24650,date: new Date("2018-09-06T03:14:18.350Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 26928,str: "Massachusetts Soft",num: 42811,date: new Date("2018-09-05T20:31:03.948Z"),array: [],obj: {_id: 26929,str: "networks Fresh Exclusive",num: 4313,date: new Date("2018-09-06T13:03:05.390Z"),array: ["quantify embrace eyeballs",72436,new Date("2018-09-06T10:00:24.853Z"),{_id: 26930,str: "Crossroad primary transmitting",num: 22937,array: [],obj: {}},"Rustic Plastic Computer Shoes Mauritius Rupee",93331,new Date("2018-09-06T02:59:24.882Z"),"grey withdrawal Investment Account",new Date("2018-09-06T15:29:01.306Z"),{_id: 26931,date: new Date("2018-09-06T05:57:27.405Z")},new Date("2018-09-05T23:06:40.412Z"),["Borders"],[23601,53983,"Associate Falkland Islands (Malvinas)",[]]],obj: {_id: 26932,str: "Alley Synergized 4th generation",num: 93822,array: [],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 26933,str: "Quality-focused Colombia Money Market Account",num: 24432,date: new Date("2018-09-06T15:53:37.295Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 26934,str: "disintermediate",date: new Date("2018-09-06T12:05:29.808Z"),array: [99351,"parsing",new Date("2018-09-06T18:53:01.630Z"),{_id: 26935,str: "Shoes Oval Product",num: 32302,date: new Date("2018-09-06T14:08:03.116Z"),array: [new Date("2018-09-06T03:07:15.041Z"),"synergies Gorgeous Plastic Table","back-end Home Indian Rupee Ngultrum",{_id: 26936,str: "Chips Central African Republic communities",num: 72199,date: new Date("2018-09-06T08:13:47.653Z"),array: [new Date("2018-09-06T16:48:10.584Z")],obj: {}}],obj: {_id: 26937,num: 3468,array: [],obj: {}}},88569,new Date("2018-09-06T11:04:17.200Z"),[],39241,8400,{_id: 26938,date: new Date("2018-09-06T10:07:52.376Z")},"interface parse",new Date("2018-09-05T20:30:40.771Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 26939,str: "Small Concrete Bacon firewall Forges",num: 48269,date: new Date("2018-09-06T10:36:59.993Z"),array: ["Steel withdrawal Indiana","content-based Beauty",new Date("2018-09-05T21:54:04.154Z"),62525,new Date("2018-09-06T06:42:43.416Z"),"Buckinghamshire National",37607,[[],35862],new Date("2018-09-05T22:17:35.295Z"),90939,{_id: 26940,str: "Refined",date: new Date("2018-09-06T06:20:08.487Z"),array: [],obj: {}},"Antarctica (the territory South of 60 deg S) Officer optimize"],obj: {_id: 26941,num: 71276,date: new Date("2018-09-06T15:26:37.614Z"),array: [],obj: {_id: 26942,str: "Bulgaria Yemeni Rial programming",num: 68451,date: new Date("2018-09-06T07:26:43.200Z"),array: [[new Date("2018-09-06T10:09:11.972Z")]],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 26943,str: "Optimization Cambridgeshire robust",num: 64388,date: new Date("2018-09-05T21:16:31.693Z"),array: [],obj: {_id: 26944,str: "Rapid Savings Account",num: 39148,array: ["card",new Date("2018-09-05T23:44:21.801Z"),{_id: 26945,str: "hierarchy Borders Principal",date: new Date("2018-09-05T22:31:47.785Z"),obj: {}},new Date("2018-09-06T07:52:01.476Z"),43500,"Right-sized Savings Account Brand",new Date("2018-09-06T16:28:13.038Z"),{_id: 26946,str: "invoice system engine Fresh",num: 97300,date: new Date("2018-09-06T08:53:26.118Z"),array: [],obj: {}},63477,[5826],"Turnpike mindshare",new Date("2018-09-06T03:07:00.195Z")],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 26947,str: "Buckinghamshire SMTP",num: 11775,date: new Date("2018-09-06T03:01:47.646Z"),array: [new Date("2018-09-05T21:46:47.465Z"),8535,"salmon",{_id: 26948,str: "bandwidth Paraguay e-markets",num: 31191,array: [],obj: {_id: 26949,str: "Gloves",num: 13065,date: new Date("2018-09-06T14:26:37.990Z"),obj: {}}},76140,new Date("2018-09-06T19:32:38.710Z"),{_id: 26950,str: "Senior",num: 49725,date: new Date("2018-09-06T00:08:58.355Z"),array: [],obj: {_id: 26951,str: "haptic virtual",array: ["Concrete morph"]}},"Reverse-engineered Agent",82164,new Date("2018-09-05T22:02:19.583Z"),["Forward",83379,[]],new Date("2018-09-06T13:13:02.629Z"),{_id: 26952,date: new Date("2018-09-06T16:17:42.192Z"),obj: {}}]});
    },

    function(coll) {
        return coll.insert({_id: 26953,str: "Gorgeous Street",num: 1145,date: new Date("2018-09-05T20:25:38.782Z"),array: [70378,new Date("2018-09-06T08:23:46.980Z"),new Date("2018-09-06T00:22:07.883Z"),"Music","service-desk object-oriented calculating","connecting Tools mesh",{_id: 26954,date: new Date("2018-09-06T06:33:56.367Z"),array: [59955],obj: {_id: 26955,num: 72804,date: new Date("2018-09-06T09:05:39.556Z"),obj: {}}},{_id: 26956,str: "SSL",num: 69581,array: []},new Date("2018-09-06T09:31:40.852Z"),1822,65713,new Date("2018-09-06T05:04:22.750Z"),"USB",[]],obj: {_id: 26957,str: "copying azure",num: 78788,date: new Date("2018-09-06T17:54:05.262Z"),array: [{_id: 26958,str: "mobile Quality-focused",num: 8849,date: new Date("2018-09-06T00:17:17.680Z"),obj: {}},[]],obj: {_id: 26959,str: "extend Buckinghamshire Computer",date: new Date("2018-09-06T04:04:23.367Z")}}});
    },

    function(coll) {
        return coll.insert({_id: 26960,str: "program supply-chains",num: 72798,date: new Date("2018-09-06T10:18:26.940Z"),array: [new Date("2018-09-06T09:23:15.772Z"),new Date("2018-09-06T14:53:39.015Z"),"deposit payment SQL",{_id: 26961,str: "Bulgaria",num: 63400,date: new Date("2018-09-06T17:37:42.578Z"),array: [new Date("2018-09-06T00:53:36.872Z")],obj: {}},83401,"multi-byte Landing driver",75143,"payment Morocco","Wooden XML","Borders",[]],obj: {_id: 26962,num: 92831,date: new Date("2018-09-06T09:15:27.826Z"),obj: {_id: 26963,str: "plug-and-play withdrawal orchid",num: 19421,array: [],obj: {_id: 26964,str: "driver background",date: new Date("2018-09-06T19:24:51.017Z"),array: [45806,75378,new Date("2018-09-06T10:33:16.592Z"),19221,[]],obj: {_id: 26965,num: 73070,array: []}}}}});
    },

    function(coll) {
        return coll.insert({_id: 26966,str: "Unbranded Metal Chair",date: new Date("2018-09-06T00:40:27.236Z"),obj: {_id: 26967,str: "Assistant",num: 37968,date: new Date("2018-09-06T14:13:28.214Z"),array: [],obj: {_id: 26968,num: 46626,date: new Date("2018-09-06T00:15:13.676Z")}}});
    },

    function(coll) {
        return coll.insert({_id: 26969,str: "Music",num: 15497,date: new Date("2018-09-06T12:46:07.671Z"),array: [90220,new Date("2018-09-06T04:59:10.585Z"),"Games",84657,[new Date("2018-09-05T22:36:28.133Z"),{_id: 26970,num: 32,date: new Date("2018-09-06T12:31:28.046Z"),array: ["installation Ranch"],obj: {_id: 26971,str: "Cotton Maryland user-facing",num: 75216,array: [{_id: 26972,str: "Director Intelligent Soft Mouse",date: new Date("2018-09-06T13:18:54.055Z"),array: [],obj: {_id: 26973,date: new Date("2018-09-05T23:27:22.152Z"),obj: {}}}],obj: {}}}],80101,"olive",new Date("2018-09-06T04:12:46.298Z"),{_id: 26974,num: 12271},"Chief Personal Loan Account","withdrawal Wyoming",[]]});
    },

    function(coll) {
        return coll.insert({_id: 26975,str: "Texas",num: 32759,date: new Date("2018-09-05T22:04:29.417Z"),obj: {_id: 26976,num: 66894,date: new Date("2018-09-06T03:03:45.894Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 26977,str: "TCP Ball",num: 20273,date: new Date("2018-09-06T12:16:48.895Z"),array: [96425,"Honduras expedite THX",[new Date("2018-09-06T10:53:48.141Z")],new Date("2018-09-06T08:06:12.081Z"),97370,[],{_id: 26978,str: "Handcrafted Steel Towels Gloves",num: 30430,date: new Date("2018-09-06T02:34:55.796Z"),array: [{_id: 26979,str: "Senior Wisconsin digital",num: 28767,array: [],obj: {}}],obj: {_id: 26980,num: 79215,date: new Date("2018-09-06T10:21:38.133Z"),array: [],obj: {}}},"quantifying invoice utilize",new Date("2018-09-06T04:37:17.380Z"),{_id: 26981,str: "Circle",obj: {}},"Senior sky blue Pass","Computers bifurcated",5032,"vertical Generic Fresh"],obj: {_id: 26982,str: "New Hampshire",date: new Date("2018-09-06T11:58:37.680Z"),array: [],obj: {_id: 26983,str: "Chief benchmark driver",date: new Date("2018-09-06T00:22:38.084Z"),array: [[new Date("2018-09-06T17:30:26.747Z")],31446,{_id: 26984,num: 58365,array: [],obj: {}},46985]}}});
    },

    function(coll) {
        return coll.insert({_id: 26985,str: "AI",num: 70835,date: new Date("2018-09-06T10:50:06.518Z"),array: ["Optimized",new Date("2018-09-06T12:25:14.209Z"),new Date("2018-09-05T23:49:51.401Z"),83396,"indexing navigate Paradigm","Buckinghamshire payment",new Date("2018-09-06T13:11:13.591Z"),new Date("2018-09-05T21:59:37.699Z"),{_id: 26986,str: "Investment Account Sleek Granite Salad",num: 357,date: new Date("2018-09-06T03:00:19.550Z"),obj: {_id: 26987,str: "Soap",num: 64607,date: new Date("2018-09-05T21:36:10.078Z"),array: [],obj: {_id: 26988,array: [[],"deposit conglomeration"],obj: {}}}},[97354],new Date("2018-09-06T18:03:58.219Z"),8918],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 26989,str: "River",num: 84297,date: new Date("2018-09-06T14:15:03.016Z"),array: [99474,"info-mediaries Refined Credit Card Account",new Date("2018-09-06T10:41:52.652Z"),[],"vertical users technologies",15130,{_id: 26990,num: 88028,date: new Date("2018-09-06T03:35:12.546Z"),array: ["violet Avon"],obj: {}},new Date("2018-09-05T21:35:04.229Z"),41490,[],"cultivate Corporate",new Date("2018-09-06T19:00:02.938Z")],obj: {_id: 26991,str: "Configurable Refined Papua New Guinea",num: 78780,array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 26992,str: "Andorra Industrial",num: 74076,date: new Date("2018-09-06T10:31:12.807Z"),array: [],obj: {_id: 26993,str: "whiteboard Developer",num: 79988,date: new Date("2018-09-06T06:21:59.458Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 26994,str: "synergies adapter",num: 12681,date: new Date("2018-09-06T10:47:12.100Z"),obj: {_id: 26995,str: "unleash Sleek Michigan",num: 35702,date: new Date("2018-09-05T23:24:13.906Z"),array: [],obj: {_id: 26996,str: "Fresh Generic Rubber Sausages Regional",array: [71627,"Home Loan Account Usability",new Date("2018-09-06T08:13:16.732Z"),[40209],new Date("2018-09-06T04:49:23.256Z"),new Date("2018-09-05T22:53:50.657Z"),"copy copy",[],"Strategist",[],{_id: 26997,num: 31490,date: new Date("2018-09-05T22:35:49.927Z"),array: [94187,52263],obj: {}},new Date("2018-09-05T23:27:20.843Z"),66968,"portals"],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 26998,num: 2766,date: new Date("2018-09-06T00:23:11.031Z"),array: [new Date("2018-09-06T06:19:02.229Z"),new Date("2018-09-05T20:39:46.037Z"),"deposit",54114,{_id: 26999,str: "Kids Congo programming",num: 90127,date: new Date("2018-09-05T20:24:26.504Z"),array: ["Oklahoma transmitting Road",new Date("2018-09-06T01:53:44.899Z")],obj: {_id: 27000,str: "Liechtenstein",num: 26253,date: new Date("2018-09-06T03:17:50.148Z"),array: [],obj: {}}},new Date("2018-09-06T03:43:38.409Z"),83782,{_id: 27001,str: "Mauritania Generic Principal",num: 76024,obj: {_id: 27002,date: new Date("2018-09-05T22:23:09.018Z"),array: []}},11477,new Date("2018-09-06T15:48:18.907Z"),"Fiji","Direct"]});
    },

    function(coll) {
        return coll.insert({_id: 27003,str: "Music tangible Clothing",num: 74637,date: new Date("2018-09-06T10:26:41.572Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 27004,str: "Bedfordshire end-to-end",num: 93654,date: new Date("2018-09-05T21:31:20.518Z")});
    },

    function(coll) {
        return coll.insert({_id: 27005,str: "Metal Manager Cloned",num: 91271,date: new Date("2018-09-05T20:14:22.470Z"),array: ["knowledge user Liaison",{_id: 27006,str: "transmitting",num: 45192,date: new Date("2018-09-06T15:48:23.419Z"),array: ["Optimization best-of-breed",new Date("2018-09-06T19:36:49.517Z"),36964,7652],obj: {}},{_id: 27007,str: "Crossroad Regional",num: 53485,date: new Date("2018-09-06T14:50:15.649Z"),obj: {_id: 27008,date: new Date("2018-09-06T06:14:55.184Z"),array: [],obj: {}}},new Date("2018-09-06T05:14:40.723Z"),new Date("2018-09-06T16:47:52.655Z"),94678],obj: {_id: 27009,str: "Moroccan Dirham",num: 55118,date: new Date("2018-09-06T07:21:24.623Z"),array: ["Total multi-byte Salad",[],69117],obj: {_id: 27010,num: 33979,array: []}}});
    },

    function(coll) {
        return coll.insert({_id: 27011,str: "Tuna Sleek",num: 17086,date: new Date("2018-09-06T03:56:13.978Z"),obj: {_id: 27012,num: 30609,array: []}});
    },

    function(coll) {
        return coll.insert({_id: 27013,str: "Yuan Renminbi",num: 92376,obj: {_id: 27014,str: "plug-and-play XSS Rwanda Franc",date: new Date("2018-09-06T03:59:43.937Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 27015,str: "back up protocol",num: 48564,date: new Date("2018-09-05T23:10:42.257Z"),array: [],obj: {_id: 27016,str: "Granite Nebraska SDD",num: 48451,date: new Date("2018-09-05T20:26:58.760Z"),array: ["Kids Facilitator Corporate","Books input",{_id: 27017,str: "Peso Uruguayo Uruguay Peso en Unidades Indexadas",num: 29322,date: new Date("2018-09-05T22:06:34.646Z"),array: [],obj: {_id: 27018,num: 79219,date: new Date("2018-09-06T01:17:24.191Z"),array: [new Date("2018-09-06T04:03:55.051Z"),74781,"Architect background"],obj: {}}},new Date("2018-09-06T17:36:16.846Z"),24171,28091,[],{_id: 27019,str: "Berkshire",date: new Date("2018-09-06T00:24:50.064Z"),obj: {}},33704,new Date("2018-09-06T13:06:10.027Z"),88978]}});
    },

    function(coll) {
        return coll.insert({_id: 27020,str: "Gorgeous",num: 90758,date: new Date("2018-09-05T23:20:07.659Z"),array: ["PCI","tan",48202,new Date("2018-09-06T17:31:24.903Z"),"Kroon integrate reboot",new Date("2018-09-06T03:07:49.871Z"),67890,[new Date("2018-09-06T06:24:07.489Z")],{_id: 27021,str: "repurpose",num: 77555,date: new Date("2018-09-06T00:09:05.126Z"),array: []},"attitude Buckinghamshire",65796,{_id: 27022,str: "Generic Metal Pants",date: new Date("2018-09-06T02:02:25.760Z"),array: [35419],obj: {_id: 27023,str: "Hawaii",num: 1947,date: new Date("2018-09-06T06:19:39.949Z"),array: [],obj: {_id: 27024,num: 64877,date: new Date("2018-09-06T17:03:46.143Z"),obj: {}}}},"PNG","Baby Cambridgeshire Sports"]});
    },

    function(coll) {
        return coll.insert({_id: 27025,str: "Delaware Tasty",num: 48801,date: new Date("2018-09-05T19:56:18.727Z"),array: [{_id: 27026,str: "Corporate Frozen architectures",num: 80026,array: [],obj: {}},new Date("2018-09-06T08:41:31.192Z"),44340,"Decentralized Chief Direct","capability Mall pixel",[],new Date("2018-09-06T08:30:15.934Z"),78671,"Kansas Plastic Soft",{_id: 27027,num: 49623,date: new Date("2018-09-06T05:34:02.413Z"),array: [],obj: {_id: 27028,str: "mint green",num: 59209,date: new Date("2018-09-06T01:07:13.002Z"),obj: {}}}]});
    },

    function(coll) {
        return coll.insert({_id: 27029,str: "Mauritania",num: 6311,date: new Date("2018-09-06T10:14:37.393Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 27030,str: "invoice Missouri",num: 5450,date: new Date("2018-09-06T16:23:00.579Z"),array: [91275,"synthesizing Maryland",new Date("2018-09-06T07:33:19.380Z"),[],new Date("2018-09-06T15:03:24.623Z"),new Date("2018-09-06T15:50:33.974Z"),{_id: 27031,str: "e-tailers Alley",num: 66295,date: new Date("2018-09-06T08:31:07.935Z"),array: [61540],obj: {}},40225,"Nebraska olive","THX Rubber",[]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 27032,str: "Bedfordshire Auto Loan Account",num: 38540,date: new Date("2018-09-05T23:13:54.926Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 27033,str: "Mouse Credit Card Account",num: 40848,date: new Date("2018-09-06T04:01:29.311Z"),array: [20009,new Date("2018-09-06T12:18:51.576Z"),"copy Games",28089,new Date("2018-09-05T22:53:04.530Z"),"optimize HDD",new Date("2018-09-06T07:20:45.942Z"),new Date("2018-09-06T19:29:26.033Z"),"Assistant Rustic Frozen Ball",54415],obj: {_id: 27034,str: "Bacon",date: new Date("2018-09-06T18:24:02.535Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 27035,str: "Jersey",num: 63312,date: new Date("2018-09-06T03:39:57.111Z"),array: [],obj: {_id: 27036,str: "overriding Buckinghamshire",num: 14147,date: new Date("2018-09-06T01:48:07.431Z"),array: ["Front-line system UIC-Franc",new Date("2018-09-06T09:05:48.981Z"),"schemas",{_id: 27037,str: "Saudi Riyal input Movies",date: new Date("2018-09-06T04:09:21.820Z"),array: [],obj: {}},19330,"intangible",5127,[47052],new Date("2018-09-06T01:10:57.445Z"),new Date("2018-09-05T23:29:31.005Z"),new Date("2018-09-06T18:08:27.851Z"),"Assimilated Music Tennessee",new Date("2018-09-06T04:12:49.810Z")],obj: {_id: 27038,str: "Arkansas",date: new Date("2018-09-06T05:04:31.159Z"),array: [{_id: 27039,num: 79458,date: new Date("2018-09-06T14:12:37.484Z")},"Applications web services",[],{_id: 27040,num: 61084,array: [40702],obj: {_id: 27041,array: [],obj: {}}}],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 27042,str: "time-frame",num: 41061,date: new Date("2018-09-06T13:48:19.145Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 27043,str: "withdrawal hardware",num: 35028,date: new Date("2018-09-06T15:56:58.465Z"),array: ["multi-byte","schemas",85624,new Date("2018-09-06T12:02:28.228Z"),new Date("2018-09-06T03:16:26.259Z"),{_id: 27044,str: "experiences",date: new Date("2018-09-06T07:33:55.038Z"),array: []},"Lakes Taiwan Drive",55952,18754,36860,new Date("2018-09-06T09:41:29.151Z"),new Date("2018-09-06T01:34:01.088Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 27045,str: "Associate",num: 53623,date: new Date("2018-09-06T12:45:10.794Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 27046,str: "markets Lakes transmit",num: 20038,date: new Date("2018-09-06T15:14:59.511Z"),array: [3578,new Date("2018-09-06T05:31:49.139Z"),[[{_id: 27047,str: "supply-chains navigating",num: 93080,date: new Date("2018-09-06T05:12:21.073Z"),array: [],obj: {}},"withdrawal AI"],new Date("2018-09-06T03:23:55.648Z"),{_id: 27048,num: 88557,date: new Date("2018-09-06T15:38:01.461Z"),array: [],obj: {}}],76944,"1080p Ford Gloves","Berkshire",{_id: 27049,str: "New Hampshire payment",date: new Date("2018-09-06T00:32:02.863Z"),array: [],obj: {}},new Date("2018-09-06T14:27:03.122Z"),4903,"Orchestrator",30703,[]]});
    },

    function(coll) {
        return coll.insert({_id: 27050,str: "Avon protocol",num: 9576,date: new Date("2018-09-06T18:40:40.997Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 27051,str: "panel",date: new Date("2018-09-06T09:02:23.444Z"),array: ["backing up Right-sized",91577,new Date("2018-09-06T10:52:22.127Z"),"Connecticut Clothing copying",[73825,18169],"Applications Forint",[],{_id: 27052,str: "cross-platform alarm Generic Granite Keyboard",num: 6153,date: new Date("2018-09-06T03:44:15.862Z"),array: [new Date("2018-09-06T01:17:52.801Z"),59201,"Rustic Fresh Gloves",{_id: 27053,str: "invoice",num: 21118,date: new Date("2018-09-06T01:16:20.802Z"),array: [],obj: {}}]},"Personal Loan Account directional Buckinghamshire",86110,new Date("2018-09-05T22:56:15.391Z"),new Date("2018-09-06T05:23:04.268Z")],obj: {_id: 27054,str: "monitor hack",num: 37547,obj: {_id: 27055,str: "connect calculating Rubber",date: new Date("2018-09-06T14:49:25.390Z"),array: [],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 27056,num: 20440,date: new Date("2018-09-06T15:25:29.156Z"),array: [new Date("2018-09-05T21:09:45.442Z"),"quantify","Credit Card Account metrics projection",53555,11065,{_id: 27057,str: "Cambridgeshire target",num: 7268,date: new Date("2018-09-06T14:04:32.881Z"),array: [],obj: {_id: 27058,str: "alarm invoice visualize",date: new Date("2018-09-06T10:10:19.257Z"),array: [new Date("2018-09-06T00:06:59.852Z"),75099,"bus Baby","clicks-and-mortar"],obj: {}}},[],47764,[],new Date("2018-09-06T14:51:19.671Z")]});
    },

    function(coll) {
        return coll.insert({_id: 27059,str: "COM navigate",num: 50371,date: new Date("2018-09-05T21:58:39.433Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 27060,str: "pixel Music",date: new Date("2018-09-06T07:44:34.452Z"),array: ["transmit","FTP",51880,new Date("2018-09-06T01:26:15.772Z"),new Date("2018-09-06T15:54:50.672Z"),"convergence metrics",{_id: 27061,str: "Cambridgeshire Generic Soft Fish",num: 69843,date: new Date("2018-09-05T20:54:41.740Z"),obj: {}},74196,[new Date("2018-09-06T18:05:48.737Z"),35232,37305],"Personal Loan Account Indian Rupee bi-directional",new Date("2018-09-06T09:43:17.790Z")],obj: {_id: 27062,str: "gold",num: 74282,date: new Date("2018-09-06T18:08:59.950Z"),obj: {_id: 27063,str: "portals envisioneer",num: 73937,array: [],obj: {_id: 27064,str: "Specialist Savings Account target",date: new Date("2018-09-06T13:48:00.338Z"),array: []}}}});
    },

    function(coll) {
        return coll.insert({_id: 27065,date: new Date("2018-09-05T23:54:22.514Z"),array: ["overriding",12107,48928,8321,{_id: 27066,str: "withdrawal",num: 34994,date: new Date("2018-09-06T06:54:50.210Z"),array: [new Date("2018-09-05T20:26:00.988Z"),12887,new Date("2018-09-06T08:21:14.646Z"),new Date("2018-09-06T12:44:39.537Z")],obj: {_id: 27067,str: "Fresh transform",num: 17149,array: [],obj: {_id: 27068,str: "Architect harness",num: 76121,date: new Date("2018-09-06T01:37:38.215Z"),obj: {_id: 27069,date: new Date("2018-09-06T16:50:16.880Z"),array: [],obj: {}}}}},"users",{_id: 27070,str: "Rustic Soft Gloves",num: 29849,date: new Date("2018-09-06T10:12:03.015Z"),obj: {}},[[],new Date("2018-09-06T18:07:40.422Z")],"Sausages Unbranded Metal Bacon",[{_id: 27071,str: "Dynamic cohesive",date: new Date("2018-09-06T04:50:16.213Z"),array: [],obj: {_id: 27072,num: 39022,array: []}}],new Date("2018-09-06T08:52:35.071Z")]});
    },

    function(coll) {
        return coll.insert({_id: 27073,str: "Cross-group",num: 56104,date: new Date("2018-09-06T09:06:53.115Z"),array: [],obj: {_id: 27074,str: "generate",num: 7150,date: new Date("2018-09-06T02:29:46.701Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 27075,str: "transmitter Legacy",num: 21133,date: new Date("2018-09-06T16:31:18.056Z"),array: [],obj: {_id: 27076,str: "hack Security",num: 29605,date: new Date("2018-09-06T19:54:51.704Z"),array: [13057,72363,new Date("2018-09-06T14:32:57.667Z"),"yellow tan","extensible program",{_id: 27077,str: "card",num: 83741,date: new Date("2018-09-06T06:05:31.024Z"),obj: {_id: 27078,num: 87973,array: [new Date("2018-09-06T04:25:45.336Z"),[]]}},34979,new Date("2018-09-06T05:23:48.945Z"),84599,{_id: 27079,str: "Coordinator Pants compress",num: 79405,array: ["Utah redundant Handcrafted Metal Gloves",new Date("2018-09-06T11:33:09.319Z"),47194,new Date("2018-09-06T05:59:57.186Z")],obj: {}},[],{_id: 27080,str: "Fish",num: 84080,date: new Date("2018-09-06T17:42:22.387Z"),obj: {}}],obj: {_id: 27081,date: new Date("2018-09-06T12:03:10.620Z"),array: [],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 27082,num: 79069,date: new Date("2018-09-06T12:38:48.960Z"),array: ["Tasty Granite Tuna",64676,new Date("2018-09-06T19:47:08.472Z"),{_id: 27083,str: "Auto Loan Account",num: 78368,date: new Date("2018-09-06T05:49:43.321Z"),array: [48187,new Date("2018-09-06T12:48:23.365Z")],obj: {_id: 27084,str: "Buckinghamshire",num: 20024,date: new Date("2018-09-06T13:33:59.806Z"),array: [],obj: {}}},{_id: 27085,str: "Rustic withdrawal",date: new Date("2018-09-06T13:25:46.148Z"),array: ["zero tolerance Designer Pizza","parsing"],obj: {_id: 27086,str: "Fresh",num: 68541,obj: {}}},"Cambridgeshire",76607,93360,new Date("2018-09-06T04:15:56.188Z"),34145,[new Date("2018-09-06T17:37:45.595Z")],new Date("2018-09-06T11:29:13.590Z"),new Date("2018-09-06T07:28:50.767Z")],obj: {_id: 27087,num: 29267,obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 27088,str: "Tasty cyan Ball",num: 51343,date: new Date("2018-09-06T17:51:56.669Z"),array: [],obj: {_id: 27089,str: "Home Loan Account Maryland",num: 93588,array: [],obj: {_id: 27090,str: "e-markets Streamlined Missouri",date: new Date("2018-09-06T10:19:11.102Z"),array: [new Date("2018-09-06T07:40:14.370Z"),new Date("2018-09-06T05:41:10.551Z"),"FTP payment","framework",3668,{_id: 27091,num: 2791,date: new Date("2018-09-06T08:32:05.228Z"),array: [72410,new Date("2018-09-05T20:33:10.564Z"),"Villages"],obj: {}},30939,new Date("2018-09-06T09:26:39.143Z"),31651,"Baby",{_id: 27092,str: "HTTP Checking Account application",num: 10579,date: new Date("2018-09-06T12:54:57.397Z"),array: [68186,new Date("2018-09-06T05:52:53.531Z")]}]}}});
    },

    function(coll) {
        return coll.insert({_id: 27093,num: 69385,date: new Date("2018-09-06T16:23:14.736Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 27094,str: "Stravenue",num: 95136,date: new Date("2018-09-06T08:01:54.696Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 27095,str: "Grass-roots",num: 9745,date: new Date("2018-09-06T10:26:31.249Z"),array: [[new Date("2018-09-06T16:05:49.506Z")],"aggregate",71666,new Date("2018-09-06T09:43:25.757Z"),"process improvement Pula",new Date("2018-09-06T05:21:33.853Z"),82877,"Squares monetize Savings Account",{_id: 27096,date: new Date("2018-09-06T13:22:02.805Z"),array: [],obj: {_id: 27097,str: "Money Market Account distributed customer loyalty",num: 22503,date: new Date("2018-09-06T13:32:11.226Z"),array: ["Bacon Som mobile"],obj: {}}},[],new Date("2018-09-06T15:55:51.284Z"),[],87859],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 27098,str: "withdrawal",num: 86969,date: new Date("2018-09-06T10:38:59.602Z"),array: [],obj: {_id: 27099,str: "Concrete",num: 23187,date: new Date("2018-09-06T06:59:10.517Z"),array: [45904,new Date("2018-09-06T07:50:01.800Z"),"Usability",82310,new Date("2018-09-05T21:33:49.769Z"),73896,"orchid hacking","neural open-source payment",[new Date("2018-09-06T10:42:55.849Z")],new Date("2018-09-05T20:33:42.344Z"),"Wyoming",{_id: 27100,str: "Communications",num: 51064,date: new Date("2018-09-06T00:26:32.041Z"),array: [],obj: {}},"Florida Colombian Peso Unidad de Valor Real database",[]],obj: {_id: 27101,str: "Refined synthesizing mint green",date: new Date("2018-09-06T02:37:54.390Z"),array: ["out-of-the-box interface",{_id: 27102,array: [85553],obj: {}}]}}});
    },

    function(coll) {
        return coll.insert({_id: 27103,str: "Solutions",num: 30203,date: new Date("2018-09-06T11:22:38.571Z"),array: [82480,"repurpose Gloves Fresh",7050,new Date("2018-09-06T00:54:32.807Z"),1495,"salmon Gorgeous facilitate","COM generate Borders",[new Date("2018-09-06T03:35:45.920Z"),[new Date("2018-09-06T09:54:58.235Z"),"enhance Team-oriented grey",7960,82156],{_id: 27104,date: new Date("2018-09-06T02:06:49.591Z"),array: [],obj: {}},68944,"Metrics"]],obj: {_id: 27105,str: "Forks digital",num: 72804}});
    },

    function(coll) {
        return coll.insert({_id: 27106,str: "Computer cutting-edge",num: 54110,date: new Date("2018-09-06T09:42:50.631Z"),array: [new Date("2018-09-06T04:25:38.136Z"),new Date("2018-09-06T08:17:10.719Z"),"payment",new Date("2018-09-06T14:13:02.216Z"),60794,98575,["vortals Refined",{_id: 27107,num: 45193,obj: {}},"Nuevo Sol deposit"],[],73344,new Date("2018-09-06T04:37:46.208Z"),[]],obj: {_id: 27108,str: "Executive extensible",num: 71005,date: new Date("2018-09-06T11:39:17.270Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 27109,str: "Tools",num: 28954,date: new Date("2018-09-06T12:59:08.928Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 27110,str: "Money Market Account",num: 66907,date: new Date("2018-09-06T13:26:55.901Z"),array: ["Personal Loan Account European Unit of Account 9(E.U.A.-9) Delaware",new Date("2018-09-06T04:06:19.269Z"),71821,new Date("2018-09-06T02:25:20.033Z"),new Date("2018-09-06T13:55:16.379Z"),new Date("2018-09-06T11:44:52.109Z"),13583,37962,64500,"challenge",{_id: 27111,str: "engineer",num: 23648,date: new Date("2018-09-06T07:15:11.179Z"),array: [],obj: {_id: 27112,num: 88476,date: new Date("2018-09-06T08:17:41.294Z")}}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 27113,str: "Buckinghamshire",num: 7804,array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 27114,str: "mint green Ohio",num: 72693,date: new Date("2018-09-06T08:08:36.836Z"),array: [31008,new Date("2018-09-05T22:53:11.262Z"),"withdrawal Lek",new Date("2018-09-06T18:41:55.519Z"),"Frozen",34938,[],24710,{_id: 27115,str: "exploit synthesize Auto Loan Account",num: 36175,date: new Date("2018-09-06T13:49:44.340Z"),array: [],obj: {_id: 27116,str: "Fresh",date: new Date("2018-09-06T13:58:21.847Z"),array: [new Date("2018-09-05T21:46:42.814Z"),[],72693,{_id: 27117,num: 44118},"Rubber policy Buckinghamshire"],obj: {}}},[75120],new Date("2018-09-06T19:29:25.984Z")],obj: {_id: 27118,str: "withdrawal Somali Shilling e-enable",num: 85161,date: new Date("2018-09-06T15:27:55.501Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 27119,str: "platforms wireless",num: 78203,date: new Date("2018-09-06T00:22:23.926Z"),array: [85470,"black",98985,new Date("2018-09-06T01:15:30.547Z"),"port",new Date("2018-09-06T05:32:56.062Z"),32055,"European Monetary Unit (E.M.U.-6) Buckinghamshire Virginia",new Date("2018-09-05T22:23:32.920Z"),48424,[],41873,"e-business"]});
    },

    function(coll) {
        return coll.insert({_id: 27120,str: "Response Directives",num: 29558,date: new Date("2018-09-06T01:51:59.831Z"),array: [new Date("2018-09-06T03:50:42.476Z"),32270,["Ergonomic Group Towels",44736,new Date("2018-09-06T02:23:42.435Z")],62018,"Orchard cross-media contextually-based",{_id: 27121,str: "Strategist withdrawal Kroon",num: 49036,date: new Date("2018-09-05T21:43:52.632Z"),obj: {}},new Date("2018-09-06T07:49:27.036Z"),92410],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 27122,str: "recontextualize New Hampshire",num: 12628,array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 27123,str: "compress scalable tertiary",num: 65521,date: new Date("2018-09-06T15:00:10.338Z"),array: [new Date("2018-09-05T20:48:38.612Z"),[40685,new Date("2018-09-06T05:35:16.532Z"),new Date("2018-09-06T02:24:16.725Z"),"Gourde US Dollar"],{_id: 27124,str: "Borders",num: 76010,array: [],obj: {_id: 27125,str: "Falkland Islands Pound SMS Planner",num: 5009,date: new Date("2018-09-06T08:45:35.807Z")}},"Advanced",78056,[],[],{_id: 27126,str: "Assurance",num: 72204,date: new Date("2018-09-06T14:10:03.611Z"),array: ["Kansas connecting"],obj: {}},41978],obj: {_id: 27127,str: "user-centric",array: []}});
    },

    function(coll) {
        return coll.insert({_id: 27128,str: "New Zealand visualize",num: 28613,date: new Date("2018-09-06T01:49:39.762Z"),array: [],obj: {_id: 27129,num: 88990,date: new Date("2018-09-05T21:35:26.380Z"),array: [new Date("2018-09-06T11:44:10.299Z"),"facilitate green",53466,[],new Date("2018-09-06T02:50:32.560Z"),80804,"withdrawal Health",55747,37876,"exploit Ergonomic Concrete Bike instruction set",new Date("2018-09-06T08:51:14.475Z")],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 27130,str: "Shoes e-services Savings Account",num: 19015,date: new Date("2018-09-06T18:59:27.266Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 27131,str: "Lane THX",num: 21254,date: new Date("2018-09-06T01:07:35.767Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 27132,str: "Analyst XML copy",num: 4834,array: [],obj: {_id: 27133,str: "deposit 24/365",date: new Date("2018-09-06T00:23:54.769Z"),array: [new Date("2018-09-06T04:45:34.598Z"),new Date("2018-09-05T21:18:43.434Z"),new Date("2018-09-05T20:53:25.183Z"),80690,{_id: 27134,num: 96386,date: new Date("2018-09-06T09:52:43.445Z"),obj: {_id: 27135,str: "Junctions",num: 92719,date: new Date("2018-09-06T06:51:18.806Z"),array: ["New Zealand New Zealand"],obj: {}}},68237,"Sleek Soft Chicken open-source Streets",{_id: 27136,str: "multi-byte Mauritius Regional",num: 18070,array: [],obj: {}},[],"efficient Iowa",new Date("2018-09-06T18:30:17.759Z"),"eyeballs Unbranded Wooden Hat"]}});
    },

    function(coll) {
        return coll.insert({_id: 27137,num: 47599,array: ["RSS Technician Automated",62546,new Date("2018-09-05T21:31:17.030Z"),56857,"Pants monitor Facilitator",71950,new Date("2018-09-05T22:27:34.701Z"),9366,{_id: 27138,str: "Refined",num: 92761,array: [],obj: {}},["Savings Account SQL Field"],new Date("2018-09-06T10:25:39.377Z"),new Date("2018-09-06T15:45:09.414Z"),8288,new Date("2018-09-06T12:23:17.707Z")],obj: {_id: 27139,str: "Bedfordshire",num: 15038,date: new Date("2018-09-06T03:18:17.877Z"),array: [new Date("2018-09-06T14:10:22.486Z"),{_id: 27140,str: "innovative synthesize",num: 37566,date: new Date("2018-09-06T10:47:38.818Z"),obj: {}}],obj: {_id: 27141,date: new Date("2018-09-06T19:00:19.981Z"),array: []}}});
    },

    function(coll) {
        return coll.insert({_id: 27142,str: "quantify SDD Consultant",num: 88274,date: new Date("2018-09-05T22:35:36.452Z"),array: ["orchestration hierarchy",new Date("2018-09-06T12:55:26.116Z"),{_id: 27143,str: "azure Handmade",num: 7830,date: new Date("2018-09-06T07:46:51.794Z"),array: ["transitional Alaska Gorgeous"],obj: {}},74965,"British Indian Ocean Territory (Chagos Archipelago) Ameliorated",46501,new Date("2018-09-06T03:38:59.132Z"),new Date("2018-09-06T15:42:23.812Z"),new Date("2018-09-06T10:38:42.351Z"),[],{_id: 27144,num: 20162,date: new Date("2018-09-06T01:35:39.009Z"),obj: {}}],obj: {_id: 27145,str: "innovative",num: 53556,date: new Date("2018-09-06T05:08:25.073Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 27146,str: "Jewelery",num: 87371,date: new Date("2018-09-05T20:11:59.508Z"),array: [],obj: {_id: 27147,str: "Nauru",num: 98670,date: new Date("2018-09-05T22:47:39.276Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 27148,str: "Architect experiences",num: 18694,array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 27149,num: 35380,date: new Date("2018-09-06T17:46:30.043Z"),array: [],obj: {_id: 27150,str: "Automotive",date: new Date("2018-09-06T14:11:53.624Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 27151,str: "connect",num: 96290,date: new Date("2018-09-05T21:40:39.603Z"),array: ["lavender synthesizing",63099,37075,[],new Date("2018-09-06T18:20:05.255Z"),{_id: 27152,num: 27273,date: new Date("2018-09-06T03:45:35.080Z"),array: [{_id: 27153,str: "synergize Vietnam Saint Lucia",num: 13518,date: new Date("2018-09-06T17:26:50.340Z"),obj: {_id: 27154,str: "Montana",num: 60804,date: new Date("2018-09-06T19:45:22.793Z"),array: [],obj: {_id: 27155,date: new Date("2018-09-06T08:28:32.923Z"),array: ["TCP Berkshire hacking",59706,"Pants reboot"]}}}]},new Date("2018-09-06T09:35:21.078Z"),new Date("2018-09-05T22:46:56.654Z"),new Date("2018-09-06T17:33:33.366Z"),new Date("2018-09-06T17:47:45.707Z"),"hack Buckinghamshire Lead",new Date("2018-09-06T11:29:02.307Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 27156,str: "compressing input optimize",num: 23685,date: new Date("2018-09-06T14:19:38.837Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 27157,str: "Frozen Investment Account",date: new Date("2018-09-05T21:43:47.631Z"),array: [new Date("2018-09-05T23:01:32.096Z"),[{_id: 27158,str: "Organic Credit Card Account",num: 94454,date: new Date("2018-09-06T04:14:47.999Z"),obj: {_id: 27159,str: "Music Metal",num: 23575,date: new Date("2018-09-06T03:09:08.215Z"),array: [],obj: {_id: 27160,num: 27566,date: new Date("2018-09-05T22:43:28.477Z"),obj: {_id: 27161,str: "Steel programming functionalities",num: 42824,date: new Date("2018-09-06T10:30:02.334Z"),array: [],obj: {}}}}},89527,84178,"digital"],[[],new Date("2018-09-06T13:44:07.971Z"),new Date("2018-09-06T18:57:10.806Z")],new Date("2018-09-06T06:37:08.736Z"),"Multi-tiered Beauty",{_id: 27162,array: []},new Date("2018-09-06T06:37:37.701Z"),"input alarm Won",67586],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 27163,str: "Central North Carolina",num: 2621,date: new Date("2018-09-06T17:44:22.554Z"),obj: {_id: 27164,str: "neural parallelism Avon",num: 98998,date: new Date("2018-09-06T07:08:23.008Z"),array: [79053,new Date("2018-09-06T18:07:03.687Z"),"Steel compressing","Baby",new Date("2018-09-06T10:02:41.572Z"),[],new Date("2018-09-06T00:00:36.727Z"),63285,13759,"coherent",new Date("2018-09-06T18:40:52.902Z")]}});
    },

    function(coll) {
        return coll.insert({_id: 27165,str: "B2C mobile Pants",num: 99084,date: new Date("2018-09-06T15:44:05.210Z"),array: ["mesh Lock",{_id: 27166,str: "Mississippi Steel",num: 54040,date: new Date("2018-09-06T05:59:01.360Z"),array: ["orchestration Refined",new Date("2018-09-06T16:31:09.580Z"),new Date("2018-09-06T19:09:02.364Z"),new Date("2018-09-06T17:41:07.232Z")],obj: {}},23726,{_id: 27167,str: "Wooden",num: 10764,date: new Date("2018-09-06T11:11:26.133Z"),array: [],obj: {_id: 27168,num: 5759,obj: {}}},[],81872,"Auto Loan Account","deposit compressing",27554,new Date("2018-09-06T11:40:33.774Z")],obj: {_id: 27169,str: "clicks-and-mortar",date: new Date("2018-09-06T14:10:51.913Z"),array: ["architecture Bermudian Dollar (customarily known as Bermuda Dollar) incremental"]}});
    },

    function(coll) {
        return coll.insert({_id: 27170,str: "Internal",num: 5544,array: [new Date("2018-09-06T04:38:09.296Z"),{_id: 27171,num: 23114,date: new Date("2018-09-06T17:36:10.935Z"),array: [],obj: {}},82229,"Ergonomic innovate",[],"black Idaho Clothing",89327,new Date("2018-09-06T09:34:14.536Z"),"Gateway",[]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 27172,str: "generating SMS bypass",num: 89751,obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 27173,str: "Program Response",num: 51789,date: new Date("2018-09-06T18:23:15.838Z"),array: [new Date("2018-09-06T17:21:31.089Z"),[],"Officer array","Dynamic ROI",66691,new Date("2018-09-06T05:59:43.705Z"),new Date("2018-09-06T01:15:47.450Z"),"card Avon Pass",22603,new Date("2018-09-06T07:24:17.282Z"),55394,25842],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 27174,str: "grey navigate",num: 13477,date: new Date("2018-09-06T17:35:26.518Z"),array: ["teal bandwidth Electronics",new Date("2018-09-06T18:48:46.102Z"),new Date("2018-09-05T23:58:54.695Z"),[47634,[],new Date("2018-09-06T11:01:56.683Z"),"Integration",[],"neural","Sleek mesh"],40722,"invoice Team-oriented Coordinator",{_id: 27175,str: "Avon JBOD Bolivar Fuerte",num: 28743,array: [],obj: {}},57256,{_id: 27176,str: "dedicated navigating",date: new Date("2018-09-06T06:48:36.463Z")}]});
    },

    function(coll) {
        return coll.insert({_id: 27177,str: "core",num: 79078,date: new Date("2018-09-06T01:32:05.462Z")});
    },

    function(coll) {
        return coll.insert({_id: 27178,str: "policy action-items",num: 53794,date: new Date("2018-09-06T02:25:14.479Z"),array: [],obj: {_id: 27179,str: "utilize olive California",date: new Date("2018-09-06T13:26:46.788Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 27180,str: "back-end Tuna",date: new Date("2018-09-06T10:31:32.761Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 27181,str: "architect Minnesota",num: 16722,date: new Date("2018-09-06T14:00:38.823Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 27182,str: "Directives",num: 11753,date: new Date("2018-09-06T03:17:20.369Z"),array: [new Date("2018-09-06T05:50:10.584Z"),76245,[],"Brand XML asynchronous",{_id: 27183,str: "bleeding-edge compressing Arkansas",date: new Date("2018-09-06T06:45:54.133Z"),array: [],obj: {_id: 27184,num: 44284,date: new Date("2018-09-06T06:52:48.536Z"),obj: {}}},"Trinidad and Tobago Dollar Crest",new Date("2018-09-06T17:50:47.307Z"),14525,98243,67265,"Concrete Assurance Awesome",new Date("2018-09-06T13:53:47.976Z")]});
    },

    function(coll) {
        return coll.insert({_id: 27185,str: "Associate invoice Keyboard",num: 88039,date: new Date("2018-09-05T23:42:51.689Z"),obj: {_id: 27186,str: "Tasty Concrete Bike withdrawal",num: 51164,date: new Date("2018-09-06T10:55:49.261Z"),array: [new Date("2018-09-06T11:41:43.232Z"),4135,new Date("2018-09-05T22:41:39.890Z"),"Avon",[],"embrace quantifying","Plastic",{_id: 27187,str: "monetize Human Rubber",num: 72022,array: [new Date("2018-09-06T03:25:17.625Z"),30519,[],new Date("2018-09-06T03:50:10.765Z"),7433],obj: {}},"red system",14084,26549],obj: {_id: 27188,str: "Village Marketing",num: 15017,date: new Date("2018-09-06T07:10:53.493Z"),array: ["Creek Rwanda cross-media"],obj: {_id: 27189,array: [new Date("2018-09-05T20:07:09.478Z")],obj: {}}}}});
    },

    function(coll) {
        return coll.insert({_id: 27190,str: "Burundi monitor",date: new Date("2018-09-06T04:22:33.111Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 27191,str: "Steel Fantastic Cotton Computer",num: 48761,date: new Date("2018-09-06T00:53:03.173Z"),array: [new Date("2018-09-05T23:32:40.717Z"),"National Savings Account","Walks",new Date("2018-09-06T17:01:19.648Z"),61701,55125,[],51267,"Central",new Date("2018-09-06T02:27:45.287Z"),{_id: 27192,num: 60851,date: new Date("2018-09-05T23:43:06.074Z"),array: [new Date("2018-09-06T12:55:38.223Z")],obj: {}},[],31907],obj: {_id: 27193,str: "SQL",date: new Date("2018-09-05T23:24:57.346Z"),array: [],obj: {_id: 27194,str: "Small payment",num: 90877,date: new Date("2018-09-06T05:59:41.182Z"),obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 27195,str: "District red",num: 84324,date: new Date("2018-09-06T12:42:51.088Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 27196,str: "zero defect",num: 71561,date: new Date("2018-09-06T06:37:31.950Z"),array: [new Date("2018-09-06T06:17:00.019Z"),28090,"Fields bypass e-business","Digitized SDD",39209,"Specialist",new Date("2018-09-06T13:02:27.952Z"),"demand-driven cyan","Developer black",{_id: 27197,num: 38382,date: new Date("2018-09-06T15:50:54.793Z"),obj: {}},new Date("2018-09-06T16:58:50.592Z"),70712],obj: {_id: 27198,num: 4537,date: new Date("2018-09-06T07:27:06.406Z"),array: [],obj: {_id: 27199,str: "Practical Wooden Shoes Borders",date: new Date("2018-09-06T07:52:00.521Z"),array: [],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 27200,str: "seize engage GB",num: 14704,date: new Date("2018-09-06T01:54:11.273Z"),array: ["Front-line content-based client-driven",new Date("2018-09-06T19:35:54.597Z"),[],"solutions back up Cambridgeshire",85199,new Date("2018-09-06T11:55:52.297Z"),14825,"back-end deposit mindshare",54582,"Prairie","Practical Islands",39272],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 27201,str: "Intelligent",num: 33020,date: new Date("2018-09-06T09:59:47.255Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 27202,str: "Toys",num: 21848,date: new Date("2018-09-06T18:21:11.275Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 27203,str: "program bypassing Pants",num: 70821,date: new Date("2018-09-06T11:26:44.374Z"),array: [51986,new Date("2018-09-06T18:00:18.746Z"),"New Taiwan Dollar",89075,new Date("2018-09-06T10:56:30.464Z"),"interface Small",20694,new Date("2018-09-06T00:24:48.338Z"),{_id: 27204,str: "JBOD Unbranded",num: 87640,date: new Date("2018-09-06T16:13:53.859Z"),array: [],obj: {_id: 27205,date: new Date("2018-09-06T01:41:59.993Z"),array: [],obj: {}}}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 27206,str: "invoice Pennsylvania",num: 39610,date: new Date("2018-09-06T15:16:44.383Z"),array: [],obj: {_id: 27207,str: "Buckinghamshire solutions",num: 40277,date: new Date("2018-09-06T03:27:29.189Z"),array: [new Date("2018-09-06T16:20:57.425Z"),new Date("2018-09-06T04:32:37.110Z"),42759,"Practical Soft Chips","circuit TCP Shoes",[],[9977,new Date("2018-09-06T01:31:08.854Z"),38658],new Date("2018-09-06T10:28:36.574Z"),"Integration Buckinghamshire Turks and Caicos Islands",{_id: 27208,str: "communities Cambridgeshire",num: 18949,date: new Date("2018-09-06T17:10:34.436Z"),array: [{_id: 27209,date: new Date("2018-09-06T07:50:11.829Z"),array: [79884],obj: {_id: 27210,str: "TCP Chair Borders",num: 22797,date: new Date("2018-09-06T05:56:48.149Z"),array: []}}],obj: {}},"calculate",new Date("2018-09-06T14:38:13.683Z")],obj: {_id: 27211,num: 6500,obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 27212,str: "Exclusive",num: 93504,array: ["navigating",84430,new Date("2018-09-06T17:31:33.100Z"),"holistic azure Strategist",[new Date("2018-09-06T08:12:07.175Z"),new Date("2018-09-06T15:06:23.111Z"),[],[]],77466,85514,35691,"deliver Rustic Wooden Shirt",{_id: 27213,str: "enterprise cyan Idaho",num: 40046,date: new Date("2018-09-06T12:56:57.930Z"),obj: {}},"Generic Plastic Salad Incredible mint green",new Date("2018-09-06T08:42:12.302Z")],obj: {_id: 27214,str: "withdrawal",num: 71757,date: new Date("2018-09-06T16:49:08.046Z"),array: [new Date("2018-09-06T09:09:27.883Z")]}});
    },

    function(coll) {
        return coll.insert({_id: 27215,str: "secondary",date: new Date("2018-09-06T01:28:07.874Z"),array: [63244,"SMS Shoes Customer",new Date("2018-09-06T07:15:19.465Z"),"National deposit Sports",new Date("2018-09-06T13:56:21.456Z"),{_id: 27216,str: "Loop cross-platform Pizza",num: 32331,date: new Date("2018-09-06T08:38:40.507Z"),array: [],obj: {_id: 27217,num: 68434,date: new Date("2018-09-06T01:46:02.957Z"),array: [],obj: {}}},1556,74899,[20970,new Date("2018-09-05T21:45:22.252Z"),"Future Guadeloupe Buckinghamshire",new Date("2018-09-06T13:52:34.137Z")],{_id: 27218,str: "Tuna Producer reboot",num: 17917,date: new Date("2018-09-06T06:25:43.780Z"),array: ["payment Oval",[],{_id: 27219,str: "Decentralized calculating",num: 45572}],obj: {}}],obj: {_id: 27220,str: "application",num: 72305,date: new Date("2018-09-06T15:25:23.309Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 27221,str: "Investor Delaware",num: 11954,date: new Date("2018-09-05T21:37:38.442Z"),array: [],obj: {_id: 27222,str: "Georgia",num: 19766,array: [93999,"District Rubber",85508,new Date("2018-09-05T21:13:29.147Z"),new Date("2018-09-06T08:31:54.004Z"),"Licensed Frozen Sausages PCI",new Date("2018-09-05T20:57:54.951Z"),new Date("2018-09-06T16:48:20.118Z"),{_id: 27223,str: "interactive vortals",num: 470,date: new Date("2018-09-06T03:57:04.344Z"),array: [],obj: {}},"generating Ukraine Peso Uruguayo Uruguay Peso en Unidades Indexadas",[],78321],obj: {_id: 27224,str: "payment parse",num: 58036}}});
    },

    function(coll) {
        return coll.insert({_id: 27225,str: "haptic",num: 13447,date: new Date("2018-09-06T06:29:39.505Z"),array: [],obj: {_id: 27226,date: new Date("2018-09-06T15:41:16.365Z"),array: [new Date("2018-09-05T21:46:48.312Z"),"Personal Loan Account mesh","New Jersey hack deposit",52898,33998],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 27227,str: "programming backing up",num: 26002,date: new Date("2018-09-05T20:38:54.288Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 27228,str: "deposit Licensed Czech Republic",num: 30161,date: new Date("2018-09-06T12:24:04.786Z")});
    },

    function(coll) {
        return coll.insert({_id: 27229,str: "experiences copying Pataca",num: 30888,date: new Date("2018-09-06T03:48:52.735Z"),array: [75087,new Date("2018-09-06T07:29:29.692Z"),87028,new Date("2018-09-06T16:19:57.045Z"),"engineer Comoro Franc Home","Cambridgeshire Principal",[],[85834],new Date("2018-09-05T23:53:09.803Z"),"withdrawal panel Forint",[],"strategize"],obj: {_id: 27230,str: "fuchsia",date: new Date("2018-09-06T19:51:23.259Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 27231,str: "Pataca",num: 21201,date: new Date("2018-09-06T07:35:37.403Z"),array: [new Date("2018-09-06T10:55:06.082Z"),63709,"orchestrate virtual",18122,"generate Rubber",new Date("2018-09-06T18:41:55.963Z"),new Date("2018-09-06T08:33:46.939Z"),[],{_id: 27232,str: "pixel",num: 34521,date: new Date("2018-09-06T01:24:19.740Z"),obj: {_id: 27233,str: "Practical Steel Shirt Incredible Steel Shirt application",array: [new Date("2018-09-06T01:28:40.259Z"),"Pizza"],obj: {}}},97358,"Grove Fresh Practical Plastic Salad",24457]});
    },

    function(coll) {
        return coll.insert({_id: 27234,str: "Table HTTP Face to face",num: 65439,date: new Date("2018-09-06T15:09:56.903Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 27235,num: 58420,date: new Date("2018-09-06T04:02:42.542Z"),array: [40172,"Global neural whiteboard",new Date("2018-09-06T06:02:10.280Z"),6113,6783,[[]],new Date("2018-09-06T07:09:58.584Z"),new Date("2018-09-06T05:38:12.439Z"),"Avon visionary",{_id: 27236,str: "protocol",num: 19022,date: new Date("2018-09-06T12:18:42.177Z"),array: [{_id: 27237,str: "transmitting",num: 50208,array: [[],"Bermudian Dollar (customarily known as Bermuda Dollar) quantifying"],obj: {_id: 27238,str: "indigo Frozen Personal Loan Account",num: 549,date: new Date("2018-09-05T23:04:47.965Z"),array: [],obj: {}}}]},58510,new Date("2018-09-06T12:59:18.575Z"),37719]});
    },

    function(coll) {
        return coll.insert({_id: 27239,str: "maroon",num: 54057,date: new Date("2018-09-05T22:41:03.181Z"),array: ["static",{_id: 27240,str: "invoice",num: 19300,date: new Date("2018-09-06T05:20:03.803Z"),array: [new Date("2018-09-06T12:52:17.960Z"),64344,"Industrial"],obj: {_id: 27241,str: "haptic Cape Verde",num: 45019,date: new Date("2018-09-06T16:14:08.933Z"),array: []}},new Date("2018-09-06T01:55:06.179Z"),"Convertible Marks",76610,{_id: 27242,num: 26434,array: []},new Date("2018-09-06T09:29:42.282Z"),22637,[],"Springs Plastic",[],new Date("2018-09-06T18:23:48.560Z"),new Date("2018-09-06T16:40:57.339Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 27243,str: "local area network Table New Mexico",num: 35854,date: new Date("2018-09-06T10:41:48.751Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 27244,str: "e-tailers Central",num: 33280,date: new Date("2018-09-06T02:55:48.280Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 27245,str: "virtual Moroccan Dirham Money Market Account",num: 94080,date: new Date("2018-09-06T00:00:50.057Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 27246,str: "AGP",num: 7933,date: new Date("2018-09-06T10:34:53.064Z"),array: [],obj: {_id: 27247,str: "Sleek wireless",array: [new Date("2018-09-06T07:23:16.430Z"),new Date("2018-09-06T09:44:35.722Z"),"SMTP Personal Loan Account mobile",54090,{_id: 27248,str: "Unbranded Steel Gloves Handcrafted policy",num: 6104,date: new Date("2018-09-06T10:29:56.427Z"),array: [],obj: {}},new Date("2018-09-06T05:32:48.004Z"),7521,{_id: 27249,str: "sky blue",num: 50038,date: new Date("2018-09-06T04:32:11.320Z"),array: [82878,"bandwidth Cotton RAM","Rest Licensed",new Date("2018-09-06T07:46:03.838Z")]},[42016,"transmitter Central Connecticut"],new Date("2018-09-06T01:53:38.328Z")]}});
    },

    function(coll) {
        return coll.insert({_id: 27250,num: 5373,date: new Date("2018-09-06T01:12:25.148Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 27251,str: "Senior Shoes",num: 26660,date: new Date("2018-09-05T22:29:26.906Z"),array: ["motivating override Borders",48738,"utilisation Personal Loan Account",38158,new Date("2018-09-06T12:17:34.235Z"),[[]],"Ergonomic Fresh Shirt",23983,{_id: 27252,str: "Plastic Aruban Guilder",num: 78792,obj: {_id: 27253,num: 75479,array: [new Date("2018-09-06T17:36:05.784Z"),new Date("2018-09-06T09:24:10.427Z"),12704]}},{_id: 27254,str: "Meadow 24/7",date: new Date("2018-09-06T00:42:48.828Z"),obj: {_id: 27255,str: "rich",num: 25311,date: new Date("2018-09-06T04:36:53.767Z"),array: []}},[],"Senior GB online"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 27256,str: "Rustic Chair",num: 39391,date: new Date("2018-09-06T07:33:56.925Z"),array: [new Date("2018-09-06T07:58:13.464Z"),"Home Loan Account COM strategic",80751,{_id: 27257,str: "mobile programming technologies",num: 56637,date: new Date("2018-09-05T23:32:41.219Z"),obj: {}},new Date("2018-09-06T15:36:28.053Z"),new Date("2018-09-05T21:19:32.694Z"),"Armenian Dram Turkmenistan Shoes",[],"multimedia","virtual generating content"],obj: {_id: 27258,str: "leverage maroon",num: 18064,date: new Date("2018-09-06T05:10:11.580Z"),array: [new Date("2018-09-06T05:24:45.721Z"),new Date("2018-09-06T01:22:54.175Z"),{_id: 27259,num: 93039,array: [],obj: {}},"Incredible Concrete Chips cultivate interface"],obj: {_id: 27260,str: "Chief silver",num: 49255,date: new Date("2018-09-06T05:14:14.638Z"),array: [71686],obj: {_id: 27261,str: "Brunei Dollar",date: new Date("2018-09-06T08:26:53.331Z"),array: [64695,[],35480,86368]}}}});
    },

    function(coll) {
        return coll.insert({_id: 27262,str: "Small Granite Tuna Bypass",num: 29960,date: new Date("2018-09-05T22:29:36.913Z"),array: [],obj: {_id: 27263,num: 41100,date: new Date("2018-09-05T22:04:11.736Z"),array: ["Lithuania integrate",new Date("2018-09-06T17:11:44.860Z"),new Date("2018-09-06T16:25:33.612Z"),"Automotive deposit executive",65780,["Analyst XML Internal",{_id: 27264,num: 98637,date: new Date("2018-09-06T14:54:08.235Z"),obj: {}},{_id: 27265,str: "Belize",num: 39230,array: [],obj: {}},90705,new Date("2018-09-06T06:52:47.170Z"),new Date("2018-09-06T01:11:54.879Z")],new Date("2018-09-06T07:24:05.581Z"),67888,83552,61130,[]]}});
    },

    function(coll) {
        return coll.insert({_id: 27266,str: "Forward bluetooth installation",num: 8759,date: new Date("2018-09-06T01:51:09.134Z"),array: [new Date("2018-09-06T07:32:51.636Z"),new Date("2018-09-06T10:15:32.471Z"),17330,new Date("2018-09-06T02:56:51.885Z"),"compressing",{_id: 27267,str: "1080p web-enabled",num: 66674,date: new Date("2018-09-06T06:34:30.887Z"),obj: {_id: 27268,str: "integrate",num: 34817,date: new Date("2018-09-06T12:16:48.032Z"),array: []}},[],new Date("2018-09-05T22:12:30.310Z"),41525,30348,48250],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 27269,str: "visualize solid state",num: 47399,date: new Date("2018-09-05T23:03:43.592Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 27270,num: 13372,date: new Date("2018-09-06T04:11:07.402Z"),array: [new Date("2018-09-06T14:59:28.642Z"),90214,new Date("2018-09-05T23:58:06.265Z"),new Date("2018-09-05T22:57:01.583Z"),67881,"TCP online transmitter",["Buckinghamshire",new Date("2018-09-06T07:40:28.410Z")],"Personal Loan Account Borders Global",{_id: 27271,str: "Auto Loan Account Coordinator Plastic",num: 6542,date: new Date("2018-09-06T14:16:59.967Z"),array: [],obj: {}},"Credit Card Account methodologies generate"],obj: {_id: 27272,str: "Chair Flat",num: 72319,date: new Date("2018-09-06T10:17:24.514Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 27273,str: "Democratic People's Republic of Korea Credit Card Account Grass-roots",date: new Date("2018-09-06T10:41:48.059Z"),array: [],obj: {_id: 27274,str: "vortals violet Drive",num: 14142,date: new Date("2018-09-05T20:42:04.259Z"),array: [87559,new Date("2018-09-06T07:27:53.079Z"),32809,"Toys e-services Technician",77908,"Handcrafted Drive upward-trending","compress Sleek",[],new Date("2018-09-06T00:35:04.345Z"),[{_id: 27275,str: "Greenland deposit",num: 53116,date: new Date("2018-09-06T17:20:21.592Z"),obj: {}},{_id: 27276,str: "Electronics Grocery Synchronised",date: new Date("2018-09-06T06:34:44.148Z"),obj: {}}],75608,new Date("2018-09-06T01:20:55.253Z")]}});
    },

    function(coll) {
        return coll.insert({_id: 27277,num: 3925,date: new Date("2018-09-06T04:30:36.604Z"),array: [],obj: {_id: 27278,str: "Orchestrator Innovative synthesize",num: 65545,date: new Date("2018-09-06T01:46:54.413Z"),array: ["Savings Account Assimilated",new Date("2018-09-06T05:07:30.552Z"),5630,"Michigan Baby Iowa",{_id: 27279,str: "Borders",date: new Date("2018-09-06T09:16:34.779Z")},"seamless visualize",[77060,new Date("2018-09-06T02:09:51.626Z"),[]],new Date("2018-09-06T19:30:45.374Z"),{_id: 27280,str: "Wooden Producer",num: 61984,array: [],obj: {}}]}});
    },

    function(coll) {
        return coll.insert({_id: 27281,str: "gold",num: 93336,date: new Date("2018-09-06T00:00:55.671Z"),array: [8671,new Date("2018-09-06T01:05:19.939Z"),new Date("2018-09-05T21:08:03.534Z"),96785,{_id: 27282,str: "back-end expedite",num: 86649,date: new Date("2018-09-06T05:05:25.013Z"),array: ["maroon Agent",[]],obj: {}},[],70879,"Progressive","Kwacha Health",new Date("2018-09-06T05:28:44.931Z"),9135,{_id: 27283,str: "connect Wallis and Futuna",num: 37478,date: new Date("2018-09-06T12:01:33.011Z"),array: [45681],obj: {_id: 27284,str: "Green Response",num: 96212,obj: {}}}]});
    },

    function(coll) {
        return coll.insert({_id: 27285,str: "Investor hacking",num: 84814,date: new Date("2018-09-06T12:25:58.722Z"),array: [],obj: {_id: 27286,num: 64781,date: new Date("2018-09-06T03:55:19.337Z"),array: [36664,"Implementation withdrawal adapter",new Date("2018-09-06T03:35:21.530Z"),[],73313,new Date("2018-09-06T05:03:26.191Z"),"strategy",[],new Date("2018-09-06T19:23:44.661Z"),79745,16268,"Nevada"],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 27287,str: "Technician hack Causeway",num: 94286,date: new Date("2018-09-06T07:59:55.350Z"),array: [],obj: {_id: 27288,str: "digital Metal Courts",date: new Date("2018-09-06T07:29:46.446Z"),array: ["supply-chains content Checking Account","Practical Tools Leone","Mobility compress bleeding-edge",11710,[],new Date("2018-09-06T08:46:03.525Z"),[71579],{_id: 27289,str: "innovate SMTP eyeballs",num: 68978,array: [new Date("2018-09-05T23:07:50.476Z"),6389,[157,{_id: 27290,num: 77270,obj: {}},{_id: 27291,str: "Island",num: 34160,date: new Date("2018-09-06T03:06:00.100Z"),array: [],obj: {_id: 27292,date: new Date("2018-09-06T11:36:43.023Z")}},new Date("2018-09-06T08:26:59.563Z")],"Wallis and Futuna","Borders Norway"],obj: {_id: 27293,str: "payment feed",date: new Date("2018-09-05T21:29:03.761Z"),array: []}},new Date("2018-09-06T09:56:32.151Z")],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 27294,str: "mission-critical Chips",num: 72846,date: new Date("2018-09-06T00:57:18.760Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 27295,str: "Liaison e-enable Digitized",num: 78408,date: new Date("2018-09-06T03:53:03.746Z"),array: [95026,new Date("2018-09-06T12:53:01.807Z"),20522,"system Checking Account SMS",[],"Glen clear-thinking",10067,new Date("2018-09-06T19:33:24.436Z"),61589,new Date("2018-09-06T01:51:15.657Z"),new Date("2018-09-06T11:04:33.402Z")],obj: {_id: 27296,str: "Forward calculate alarm",num: 94206,date: new Date("2018-09-06T04:21:54.443Z"),array: [[],{_id: 27297,str: "Savings Account",date: new Date("2018-09-06T02:34:01.316Z"),array: [new Date("2018-09-05T23:02:59.460Z"),"Focused Station","microchip Mobility Ports"]}],obj: {_id: 27298,str: "Boliviano Mvdol",num: 22501,date: new Date("2018-09-06T02:19:12.255Z"),array: [],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 27299,str: "schemas",num: 95100,date: new Date("2018-09-06T03:15:10.654Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 27300,str: "models Keyboard",num: 7158,date: new Date("2018-09-06T08:56:23.441Z"),array: [],obj: {_id: 27301,str: "Checking Account withdrawal",num: 38050,date: new Date("2018-09-06T00:32:32.166Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 27302,str: "Fresh magenta",num: 81283,date: new Date("2018-09-06T03:54:18.549Z"),array: [new Date("2018-09-06T01:00:19.700Z"),47829,new Date("2018-09-06T09:55:40.008Z"),"Chips Malagasy Ariary bluetooth",[new Date("2018-09-06T06:08:28.777Z"),[],49534],{_id: 27303,str: "Generic Cotton Gloves SQL Ghana",num: 17678,date: new Date("2018-09-06T01:06:34.398Z"),array: ["Industrial Keyboard"],obj: {_id: 27304,str: "data-warehouse",num: 81313,date: new Date("2018-09-05T23:25:00.767Z"),array: [],obj: {_id: 27305,date: new Date("2018-09-06T05:28:11.502Z"),obj: {}}}},new Date("2018-09-06T04:51:56.571Z"),87096,"Georgia",[],{_id: 27306,str: "approach deposit Coordinator",obj: {}},"red Synergized",66077]});
    },

    function(coll) {
        return coll.insert({_id: 27307,str: "Unbranded Metal Bacon",num: 53624,date: new Date("2018-09-05T20:54:49.316Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 27308,str: "Salad Generic",num: 2127,date: new Date("2018-09-06T18:38:41.091Z"),array: ["Keyboard","Agent website Tasty",new Date("2018-09-06T16:24:23.037Z"),92550,{_id: 27309,str: "Analyst",array: [],obj: {_id: 27310,str: "multi-byte web-readiness invoice",num: 75792,date: new Date("2018-09-05T22:30:46.491Z"),array: [],obj: {}}},new Date("2018-09-06T05:02:16.044Z"),{_id: 27311,str: "digital",num: 27306,date: new Date("2018-09-05T23:47:01.905Z")},4930,58114,"Customer ROI Burkina Faso","sensor"]});
    },

    function(coll) {
        return coll.insert({_id: 27312,str: "needs-based Mission",num: 89041,date: new Date("2018-09-06T00:03:16.523Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 27313,str: "Saudi Riyal budgetary management Lead",num: 25871,date: new Date("2018-09-06T08:56:23.005Z"),obj: {_id: 27314,str: "protocol",num: 30031,date: new Date("2018-09-06T04:03:30.971Z"),array: ["calculate grey",{_id: 27315,str: "1080p Licensed Fresh Car Applications",num: 2622,array: []},90893,"Fresh Engineer",new Date("2018-09-05T19:57:18.792Z"),new Date("2018-09-06T17:02:06.914Z"),12892,[],64769,"Road",[]],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 27316,str: "Extended Cambridgeshire interface",num: 39521,date: new Date("2018-09-06T13:13:35.126Z"),array: [],obj: {_id: 27317,num: 19267,date: new Date("2018-09-06T16:16:26.378Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 27318,str: "protocol communities parsing",num: 80790,date: new Date("2018-09-06T07:27:27.278Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 27319,str: "azure proactive",num: 69144,date: new Date("2018-09-06T13:02:03.666Z"),obj: {_id: 27320,str: "Vanuatu Granite",num: 49738,date: new Date("2018-09-06T02:45:47.833Z"),array: [[27104,16756,new Date("2018-09-06T05:14:35.923Z"),91744],"program 24/7","infomediaries",[],new Date("2018-09-06T07:04:00.349Z"),1908,new Date("2018-09-06T03:39:24.489Z"),47173,{_id: 27321,str: "Awesome Plastic Tuna Handmade",num: 4362,date: new Date("2018-09-06T04:30:58.048Z"),array: ["override Salad","Plastic"],obj: {_id: 27322,str: "interface",num: 34281,date: new Date("2018-09-06T04:07:24.956Z"),array: [],obj: {}}}],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 27323,str: "SMTP disintermediate",num: 2846,date: new Date("2018-09-06T12:18:24.260Z"),array: [{_id: 27324,str: "Engineer",num: 31144,date: new Date("2018-09-06T02:41:07.292Z"),array: [new Date("2018-09-05T20:40:44.247Z"),"SQL"],obj: {_id: 27325,array: [],obj: {}}},91545,27328,["Throughway Focused"],"withdrawal",{_id: 27326,str: "back-end Central Markets",obj: {_id: 27327,str: "Home Loan Account protocol",num: 58389,date: new Date("2018-09-06T13:35:39.824Z"),obj: {}}},24230,new Date("2018-09-06T11:44:22.783Z"),{_id: 27328,num: 14832,date: new Date("2018-09-06T16:23:44.160Z"),array: []},new Date("2018-09-06T05:41:36.152Z"),{_id: 27329,str: "Granite firewall",num: 72557,date: new Date("2018-09-05T20:57:58.707Z"),obj: {}},2859],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 27330,str: "Applications",num: 10457,date: new Date("2018-09-06T00:41:04.414Z"),array: ["Automotive system",[],new Date("2018-09-05T23:14:51.923Z"),94873,[],98757,"Avon",new Date("2018-09-06T12:07:42.380Z"),"Heard Island and McDonald Islands Bedfordshire"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 27331,str: "circuit",num: 24880,date: new Date("2018-09-06T15:12:12.027Z"),array: [],obj: {_id: 27332,str: "Auto Loan Account Fresh Director",num: 19257,date: new Date("2018-09-06T17:09:42.228Z"),array: [{_id: 27333,str: "Sleek hard drive",date: new Date("2018-09-06T10:56:34.069Z"),array: []},new Date("2018-09-06T08:08:57.715Z"),30152,new Date("2018-09-06T17:07:47.699Z"),"Dynamic frame",{_id: 27334,str: "Licensed pink",num: 38782,obj: {}},new Date("2018-09-06T06:18:35.480Z"),"Streamlined",12418,"platforms index",86014,1361],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 27335,str: "Synchronised Planner Dale",num: 21424,date: new Date("2018-09-06T10:34:10.416Z"),array: [new Date("2018-09-05T23:01:15.682Z"),"Sports Shoes card",{_id: 27336,str: "program deploy",num: 57650,array: [new Date("2018-09-06T16:34:11.642Z"),82931,"Grocery Configurable Samoa",new Date("2018-09-05T21:18:06.538Z"),"Factors",60817,47095,new Date("2018-09-06T16:05:32.736Z"),[]],obj: {_id: 27337,num: 51208,date: new Date("2018-09-06T11:12:05.880Z"),array: [],obj: {}}},"Ergonomic Steel Pants withdrawal Pakistan Rupee",[]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 27338,str: "Afghanistan",num: 79958,date: new Date("2018-09-05T20:17:01.201Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 27339,str: "Chair Computers collaboration",num: 34495,array: [50426,new Date("2018-09-06T15:33:40.529Z"),4814,{_id: 27340,str: "GB Operations",num: 35678,date: new Date("2018-09-06T08:24:14.569Z"),array: ["Mongolia",[],19655]},"Executive interactive","online Maine Synergized",[new Date("2018-09-05T21:26:10.468Z"),26252],new Date("2018-09-06T18:39:09.262Z"),new Date("2018-09-06T04:21:40.781Z"),47777,[],{_id: 27341,str: "Checking Account Dominican Republic",date: new Date("2018-09-06T04:19:39.698Z"),obj: {}}]});
    },

    function(coll) {
        return coll.insert({_id: 27342,str: "Soft Team-oriented",num: 47829,date: new Date("2018-09-05T21:38:50.343Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 27343,str: "Bacon Money Market Account override",num: 26178,date: new Date("2018-09-06T06:53:01.890Z"),array: [new Date("2018-09-06T12:19:49.199Z"),63813,[],"brand Savings Account",new Date("2018-09-06T02:59:35.526Z"),"Communications Bacon payment","parsing",85595,new Date("2018-09-06T15:05:41.122Z")],obj: {_id: 27344,str: "generating",num: 64712,date: new Date("2018-09-06T18:06:32.356Z")}});
    },

    function(coll) {
        return coll.insert({_id: 27345,str: "Product",num: 77813,date: new Date("2018-09-06T18:07:53.454Z"),array: ["Robust HDD Saudi Riyal",new Date("2018-09-06T18:35:37.952Z"),82243,17923,"program Awesome","Unbranded Rubber Gloves Table","fuchsia regional XSS",new Date("2018-09-06T01:25:43.942Z"),{_id: 27346,str: "revolutionize Andorra",num: 37559,date: new Date("2018-09-05T20:12:22.223Z"),array: [],obj: {_id: 27347,str: "Multi-tiered Licensed Soft Fish index",date: new Date("2018-09-06T19:43:57.288Z"),array: [[],"pixel quantify",new Date("2018-09-06T04:49:42.979Z"),{_id: 27348,num: 61008,date: new Date("2018-09-06T10:30:19.917Z"),array: [new Date("2018-09-06T07:07:26.780Z"),[],76607],obj: {}}]}}],obj: {_id: 27349,str: "Refined Steel Mouse Regional Massachusetts",num: 99051,obj: {_id: 27350,str: "Games Ergonomic Granite Chair San Marino",date: new Date("2018-09-06T10:04:53.024Z")}}});
    },

    function(coll) {
        return coll.insert({_id: 27351,str: "Ball Awesome",num: 11090,date: new Date("2018-09-06T13:35:41.587Z"),array: [{_id: 27352,str: "Port cultivate Focused",num: 44946,date: new Date("2018-09-06T09:59:00.608Z"),array: ["Uruguay Small Steel Bacon Guernsey",73003,new Date("2018-09-05T21:22:35.909Z"),new Date("2018-09-06T01:35:29.229Z")],obj: {}},76919,[],{_id: 27353,str: "Avon North Carolina",num: 30355,array: [76977],obj: {_id: 27354,array: [],obj: {}}},"payment Handcrafted Metal Hat Functionality",51110,new Date("2018-09-06T07:10:59.508Z"),{_id: 27355,str: "Money Market Account",num: 7669,date: new Date("2018-09-06T01:47:38.167Z")},[],"Auto Loan Account Money Market Account Ergonomic",{_id: 27356,str: "Montserrat metrics Summit",array: [["ADP"],new Date("2018-09-06T08:34:11.959Z")],obj: {_id: 27357,num: 57719,date: new Date("2018-09-06T03:57:33.714Z"),array: [],obj: {}}}]});
    },

    function(coll) {
        return coll.insert({_id: 27358,str: "indigo Generic Frozen Tuna cross-platform",num: 51437,array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 27359,str: "Regional Concrete Frozen",num: 2572,date: new Date("2018-09-06T04:47:55.633Z"),array: [[],[],new Date("2018-09-06T19:51:33.746Z"),"multi-byte optical Liaison",new Date("2018-09-05T21:58:24.825Z"),36881,"Agent Kids",68828,52035,87938],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 27360,str: "Mouse Configurable monetize",num: 53803,date: new Date("2018-09-06T02:14:03.318Z"),obj: {_id: 27361,num: 77105,date: new Date("2018-09-06T18:36:47.030Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 27362,str: "Director Tanzanian Shilling Lempira",num: 67471,date: new Date("2018-09-05T23:17:11.845Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 27363,str: "Product",num: 9747,date: new Date("2018-09-06T16:55:20.614Z"),array: [58589,85585,new Date("2018-09-06T09:53:38.486Z"),new Date("2018-09-06T19:13:04.158Z"),"Program Montserrat SAS",new Date("2018-09-06T14:57:03.340Z"),59066,[61818,"Ball withdrawal strategize",new Date("2018-09-06T06:57:13.067Z"),[],"Personal Loan Account Cambridgeshire Guarani"],[],"Berkshire Unbranded Fresh Pants"],obj: {_id: 27364,str: "Cheese Springs platforms",date: new Date("2018-09-06T09:09:27.773Z"),array: [[67251,[]]],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 27365,str: "Cambridgeshire",num: 579,date: new Date("2018-09-06T14:36:24.446Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 27366,str: "West Virginia Table Handmade Steel Cheese",num: 17991,date: new Date("2018-09-06T18:18:53.482Z"),array: [],obj: {_id: 27367,num: 22834,date: new Date("2018-09-06T04:13:25.140Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 27368,str: "Facilitator deposit payment",num: 13288,date: new Date("2018-09-06T04:39:31.978Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 27369,str: "synthesizing Wooden",num: 80529,array: [],obj: {_id: 27370,str: "interfaces bricks-and-clicks",num: 35436,date: new Date("2018-09-06T13:36:03.222Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 27371,str: "interface bypass exuding",num: 95589,date: new Date("2018-09-06T09:02:03.592Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 27372,str: "Netherlands AGP",num: 34303,date: new Date("2018-09-06T16:09:20.412Z"),array: [],obj: {_id: 27373,str: "input Direct",num: 5105,date: new Date("2018-09-06T00:30:19.283Z"),array: [[],92353,{_id: 27374,num: 22722,date: new Date("2018-09-06T14:18:17.778Z"),array: [],obj: {_id: 27375,str: "CSS Roads",date: new Date("2018-09-06T10:23:21.921Z"),array: [],obj: {}}},"grow card turn-key",new Date("2018-09-06T06:09:36.393Z"),{_id: 27376,str: "Administrator Auto Loan Account",num: 16027,date: new Date("2018-09-06T16:03:56.884Z"),obj: {}},{_id: 27377,str: "Malagasy Ariary North Dakota Guam",num: 3140,date: new Date("2018-09-06T11:56:30.006Z"),obj: {}},79444]}});
    },

    function(coll) {
        return coll.insert({_id: 27378,str: "e-business",num: 15553,array: [38576,new Date("2018-09-06T05:23:43.172Z"),47714,"Bacon quantify programming","Tactics",new Date("2018-09-06T04:51:46.602Z"),6207,"synthesize SMS",new Date("2018-09-06T09:18:27.666Z"),"Chicken HDD",[],{_id: 27379,str: "hack quantify",num: 60542,date: new Date("2018-09-06T08:54:07.083Z"),array: [{_id: 27380,str: "Islands Hong Kong",num: 79191,array: [[],new Date("2018-09-05T20:33:56.179Z")],obj: {_id: 27381,str: "metrics Avon",date: new Date("2018-09-06T13:05:09.553Z"),array: ["magnetic",30457,{_id: 27382,date: new Date("2018-09-06T06:16:35.163Z"),obj: {}}],obj: {_id: 27383,date: new Date("2018-09-06T05:48:36.863Z"),array: ["initiatives"]}}},[]],obj: {_id: 27384,str: "architectures architecture",num: 96077,date: new Date("2018-09-06T13:52:27.550Z"),array: [],obj: {}}}]});
    },

    function(coll) {
        return coll.insert({_id: 27385,str: "USB PNG",num: 90992,date: new Date("2018-09-06T06:27:24.660Z"),array: [],obj: {_id: 27386,str: "Ergonomic Handmade",num: 95905,array: [new Date("2018-09-06T04:56:58.040Z"),[],32942,17207,{_id: 27387,str: "Officer",num: 89170,date: new Date("2018-09-06T10:07:37.487Z"),array: [],obj: {_id: 27388,date: new Date("2018-09-06T14:05:17.637Z"),array: [62178,[],"Internal"],obj: {_id: 27389,str: "firewall",num: 54006,date: new Date("2018-09-05T20:06:13.945Z")}}},88973,{_id: 27390,date: new Date("2018-09-06T12:03:15.499Z")},"eco-centric",[],new Date("2018-09-06T10:54:08.391Z"),"product enhance","incentivize collaborative",new Date("2018-09-06T00:32:21.041Z"),{_id: 27391,date: new Date("2018-09-06T11:19:27.968Z"),obj: {}}],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 27392,str: "calculating",num: 3405,date: new Date("2018-09-06T14:46:46.323Z"),array: [66441,99144,new Date("2018-09-06T06:35:28.127Z"),"Advanced",[],"Consultant payment",11261,36510,{_id: 27393,str: "Borders hard drive GB",num: 14971,date: new Date("2018-09-06T18:49:56.538Z"),array: [],obj: {_id: 27394,date: new Date("2018-09-06T06:21:25.898Z"),array: [],obj: {_id: 27395,str: "invoice",num: 99273,date: new Date("2018-09-06T11:11:16.076Z"),array: [[new Date("2018-09-06T03:46:23.864Z"),"multi-byte"],{_id: 27396,num: 55076,obj: {_id: 27397,str: "Road",num: 62582,date: new Date("2018-09-06T18:59:35.600Z"),array: []}},"Freeway wireless"]}}},77047,["Direct North Dakota"]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 27398,num: 34667,date: new Date("2018-09-06T11:57:16.874Z"),array: [new Date("2018-09-05T23:20:13.024Z"),39023,new Date("2018-09-06T17:08:22.284Z"),{_id: 27399,str: "Cotton Cotton",date: new Date("2018-09-05T22:31:00.131Z"),array: [],obj: {}},{_id: 27400,num: 95075,date: new Date("2018-09-06T16:23:37.282Z"),array: [46038,"programming Handmade exploit",new Date("2018-09-06T01:18:07.437Z"),"Outdoors Electronics invoice",58938,[]],obj: {_id: 27401,str: "Implementation",num: 82056,date: new Date("2018-09-06T02:35:57.787Z"),array: [],obj: {_id: 27402,str: "Metal Shoes",num: 45534,array: ["Auto Loan Account",[new Date("2018-09-06T09:17:17.824Z"),new Date("2018-09-06T11:58:44.734Z"),"Plains enhance Global"]]}}}],obj: {_id: 27403,str: "El Salvador Colon US Dollar",array: ["green",26389,"circuit Som programming",new Date("2018-09-05T23:40:09.766Z")],obj: {_id: 27404,str: "data-warehouse black Awesome Plastic Chips",num: 66989,date: new Date("2018-09-06T18:05:22.842Z")}}});
    },

    function(coll) {
        return coll.insert({_id: 27405,str: "Shoes",num: 75257,date: new Date("2018-09-06T17:35:17.774Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 27406,str: "monitor Multi-layered Auto Loan Account",num: 62344,date: new Date("2018-09-06T18:46:00.572Z"),array: [],obj: {_id: 27407,str: "UAE Dirham Libyan Dinar neural-net",num: 84048,array: [{_id: 27408,str: "directional Gorgeous Metal Keyboard",num: 8350,date: new Date("2018-09-06T10:15:46.060Z"),obj: {_id: 27409,str: "Producer",num: 84221,date: new Date("2018-09-06T18:46:52.230Z"),array: [],obj: {_id: 27410,array: [new Date("2018-09-06T16:10:46.140Z"),new Date("2018-09-06T19:54:12.853Z")],obj: {}}}},"National Brand Oregon",19215,54293,[],"Oregon implementation Fork",24555,"full-range",{_id: 27411,date: new Date("2018-09-06T14:45:54.585Z"),array: [new Date("2018-09-06T18:25:55.685Z"),"redefine Enterprise-wide Intuitive"]},[],new Date("2018-09-06T02:19:18.250Z"),{_id: 27412,str: "back-end Lead",num: 55484,date: new Date("2018-09-06T09:42:28.697Z")}]}});
    },

    function(coll) {
        return coll.insert({_id: 27413,str: "Street",num: 14762,date: new Date("2018-09-06T05:20:39.002Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 27414,str: "Tasty Music actuating",num: 14666,date: new Date("2018-09-05T23:16:50.662Z"),array: [66847,new Date("2018-09-05T20:58:59.955Z"),new Date("2018-09-06T08:54:08.623Z"),[{_id: 27415,str: "Unbranded Wooden Chips override",date: new Date("2018-09-06T12:29:32.988Z"),array: [],obj: {}},new Date("2018-09-06T16:00:13.677Z"),"yellow Plastic"],"Usability Steel",69061,"Clothing North Dakota",53701,new Date("2018-09-05T20:28:59.751Z"),[{_id: 27416,str: "matrix synthesizing",num: 38424,date: new Date("2018-09-06T11:13:15.070Z"),array: [],obj: {_id: 27417,num: 83074,obj: {}}},"hard drive Product Home"],97181,new Date("2018-09-06T03:09:01.177Z"),65835],obj: {_id: 27418,str: "Salad SSL",num: 4657,date: new Date("2018-09-06T03:49:04.903Z")}});
    },

    function(coll) {
        return coll.insert({_id: 27419,num: 15759,array: [],obj: {_id: 27420,str: "customer loyalty Car functionalities",num: 3337,date: new Date("2018-09-05T20:36:16.336Z"),array: [],obj: {_id: 27421,str: "Executive experiences",num: 92245,date: new Date("2018-09-06T14:34:05.175Z"),array: [43607,new Date("2018-09-05T22:55:44.232Z"),"Ethiopia withdrawal Swedish Krona",43787,87176,"Assistant National Bedfordshire",new Date("2018-09-06T18:52:20.534Z"),"solid state",new Date("2018-09-06T16:02:32.797Z"),"intuitive",new Date("2018-09-05T20:09:52.073Z"),{_id: 27422,date: new Date("2018-09-05T21:54:27.991Z"),obj: {}},"Guinea"],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 27423,str: "Ridge lavender high-level",num: 77049,date: new Date("2018-09-06T10:25:30.503Z"),array: [new Date("2018-09-06T17:21:32.318Z"),[],"Forward Baht Checking Account",{_id: 27424,str: "Cuban Peso Peso Convertible Directives Optional",num: 90584,date: new Date("2018-09-06T07:05:03.952Z"),array: [95165,"Keyboard",68083,new Date("2018-09-06T12:13:54.559Z")],obj: {}},"Mills transmitting",{_id: 27425,str: "Sleek Rubber Car Isle of Man Vatu",num: 76727,array: [76233,[],"North Carolina"],obj: {_id: 27426,num: 96805,obj: {}}},51586,81052,["infrastructure"],new Date("2018-09-06T14:18:40.726Z"),[]],obj: {_id: 27427,str: "encompassing Home",num: 97229,date: new Date("2018-09-06T00:16:20.254Z"),array: [],obj: {_id: 27428,num: 8373,array: []}}});
    },

    function(coll) {
        return coll.insert({_id: 27429,str: "Rustic Rubber Shirt card",num: 28230,date: new Date("2018-09-06T08:17:30.064Z"),array: [{_id: 27430,str: "Car multi-byte",num: 69452,date: new Date("2018-09-06T13:34:36.623Z"),array: [],obj: {_id: 27431,date: new Date("2018-09-06T07:46:40.479Z"),array: [26979,8379],obj: {}}},new Date("2018-09-06T10:37:24.323Z"),65886,["Ameliorated"],new Date("2018-09-05T21:36:30.511Z"),77050,{_id: 27432,str: "overriding",date: new Date("2018-09-06T01:53:44.993Z"),obj: {}},"violet programming","hacking Centers",{_id: 27433,num: 50196,array: [],obj: {_id: 27434,num: 69852,date: new Date("2018-09-06T13:20:31.458Z"),array: []}},[],"Up-sized bypassing Awesome"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 27435,str: "parse implementation",num: 99393,date: new Date("2018-09-06T00:14:05.223Z"),array: [{_id: 27436,str: "extend Customer-focused Iowa",num: 20211,date: new Date("2018-09-06T01:10:03.608Z"),array: ["bypassing",[]],obj: {}},new Date("2018-09-06T12:25:20.868Z"),new Date("2018-09-06T08:20:36.821Z"),"Borders invoice",{_id: 27437,str: "Arizona ivory",num: 35948,array: [],obj: {}},87210,new Date("2018-09-06T07:04:21.021Z"),46396,46978,"deliverables","District recontextualize",new Date("2018-09-06T16:41:01.550Z")],obj: {_id: 27438,date: new Date("2018-09-06T00:35:36.997Z")}});
    },

    function(coll) {
        return coll.insert({_id: 27439,str: "seamless Pennsylvania",num: 85879,date: new Date("2018-09-06T03:18:56.133Z"),array: [],obj: {_id: 27440,str: "wireless",date: new Date("2018-09-06T15:30:37.591Z"),array: [{_id: 27441,str: "SMTP middleware",num: 17670,date: new Date("2018-09-06T09:15:39.800Z"),obj: {}},55032,new Date("2018-09-05T20:09:25.304Z"),29592,new Date("2018-09-06T05:19:24.226Z"),"foreground synergize fuchsia",38442,[],new Date("2018-09-06T14:32:47.798Z"),{_id: 27442,str: "virtual asynchronous",array: [],obj: {}},"index Forges interactive",57634],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 27443,str: "back up",num: 29647,date: new Date("2018-09-06T02:04:03.838Z"),array: [],obj: {_id: 27444,str: "card",num: 13323,date: new Date("2018-09-06T07:51:21.321Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 27445,str: "transitional Factors Electronics",num: 73199,date: new Date("2018-09-06T05:55:40.899Z"),obj: {_id: 27446,num: 19489,date: new Date("2018-09-06T06:35:21.140Z"),array: [71430,"Virtual cutting-edge Analyst",new Date("2018-09-06T11:45:16.065Z"),"Jewelery",99599,new Date("2018-09-06T08:11:05.407Z"),new Date("2018-09-06T07:28:17.776Z"),"North Korean Won Buckinghamshire",{_id: 27447,str: "Gorgeous",array: [],obj: {}},73959,90211,"encryption"],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 27448,str: "salmon primary enable",num: 64182,date: new Date("2018-09-06T14:24:07.389Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 27449,str: "Licensed New Caledonia",num: 68687,date: new Date("2018-09-06T08:56:59.544Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 27450,str: "compressing static",num: 59638,date: new Date("2018-09-06T15:07:49.849Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 27451,str: "Handmade Steel Fish",num: 85826,date: new Date("2018-09-06T05:31:46.830Z"),array: [],obj: {_id: 27452,str: "orchid Internal Switchable",num: 52215,date: new Date("2018-09-06T00:07:39.229Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 27453,str: "Metal",num: 9856,date: new Date("2018-09-06T06:40:10.545Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 27454,str: "programming ubiquitous",num: 45867,date: new Date("2018-09-06T06:25:41.744Z"),array: [new Date("2018-09-06T06:04:28.992Z"),[93287],"Customer","black neural Cotton",57648,"calculate Bahamian Dollar",new Date("2018-09-06T06:55:35.946Z"),"cutting-edge Accountability",{_id: 27455,num: 15486,date: new Date("2018-09-06T08:05:33.676Z"),array: [],obj: {_id: 27456,str: "Tasty Concrete Shirt Colorado",num: 83584,date: new Date("2018-09-06T02:51:26.099Z"),array: [],obj: {_id: 27457,num: 16433,array: [],obj: {}}}},24615,79263,{_id: 27458,str: "Practical",num: 2499,array: [{_id: 27459,str: "evolve",date: new Date("2018-09-05T20:30:37.756Z"),array: [new Date("2018-09-06T12:18:41.276Z"),new Date("2018-09-05T21:54:41.030Z")],obj: {}},new Date("2018-09-06T14:18:55.897Z")]},[],99418]});
    },

    function(coll) {
        return coll.insert({_id: 27460,str: "Roads",num: 15007,date: new Date("2018-09-06T03:45:34.413Z"),array: [98468,new Date("2018-09-06T04:54:04.731Z"),{_id: 27461,str: "web services",num: 9819,date: new Date("2018-09-06T03:46:28.286Z"),array: [new Date("2018-09-06T09:09:38.820Z"),"core compelling",78462]},"paradigms info-mediaries generating",60503,"killer Investment Account Small",new Date("2018-09-06T17:35:34.142Z"),{_id: 27462,str: "Chips green Officer",date: new Date("2018-09-06T07:21:12.655Z"),array: [],obj: {_id: 27463,str: "HTTP EXE Computers",date: new Date("2018-09-05T22:55:09.323Z"),array: []}},new Date("2018-09-06T11:50:46.906Z"),15840,"Ball"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 27464,str: "primary Product Money Market Account",num: 96647,date: new Date("2018-09-06T12:00:08.264Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 27465,str: "repurpose US Dollar",date: new Date("2018-09-06T18:45:11.533Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 27466,num: 56960,date: new Date("2018-09-06T10:09:42.355Z"),array: [39037,[new Date("2018-09-06T14:28:38.720Z"),[5206],new Date("2018-09-06T19:54:26.696Z"),"Bedfordshire","Small Wooden Car Ranch"],9899,new Date("2018-09-06T14:40:59.892Z"),61002,"Horizontal Bond Markets Units European Composite Unit (EURCO)",[],{_id: 27467,str: "white integrated Streets",num: 90361,date: new Date("2018-09-06T07:09:43.057Z"),obj: {}},"Oman SDD Toys",[]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 27468,str: "virtual",num: 81004,date: new Date("2018-09-06T02:19:34.793Z"),array: [97767,new Date("2018-09-06T15:39:15.046Z"),[new Date("2018-09-06T13:39:36.440Z"),[],"Denmark"],"blue",new Date("2018-09-05T21:05:35.193Z"),"deposit Investor haptic",47997,["Assurance withdrawal",{_id: 27469,str: "synthesizing payment Extensions",date: new Date("2018-09-06T06:09:24.330Z"),obj: {}},new Date("2018-09-06T13:50:21.223Z")],64016,{_id: 27470,str: "Internal",num: 58712,date: new Date("2018-09-06T04:54:14.832Z")},"Product compressing solution-oriented","paradigms"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 27471,str: "Streets New Zealand Dollar",num: 61854,date: new Date("2018-09-05T20:35:33.181Z"),array: [],obj: {_id: 27472,num: 33050,date: new Date("2018-09-06T12:19:49.019Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 27473,str: "24/7",num: 48900,date: new Date("2018-09-06T15:39:02.907Z"),array: [new Date("2018-09-06T01:30:33.432Z"),[],95109,75661,"1080p Tasty Iranian Rial","Borders port",3295,[],new Date("2018-09-06T18:30:28.191Z"),{_id: 27474,str: "portal Fantastic Wooden Chips Global",num: 499,date: new Date("2018-09-06T10:31:51.702Z"),array: [[],"Yemeni Rial Salad","Heard Island and McDonald Islands array Manor","Consultant",new Date("2018-09-06T10:05:17.474Z")],obj: {}},new Date("2018-09-06T02:36:21.134Z")],obj: {_id: 27475,str: "Loop compressing lime",num: 93304,date: new Date("2018-09-06T19:24:16.523Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 27476,str: "paradigm navigate Graphical User Interface",num: 77900,date: new Date("2018-09-06T18:58:47.257Z"),array: [[],"panel rich",97141,new Date("2018-09-06T11:47:52.780Z"),"customized","Directives neural-net Rustic Fresh Salad",new Date("2018-09-06T17:34:34.212Z"),44807,{_id: 27477,str: "Adaptive front-end Directives",num: 71648,date: new Date("2018-09-06T03:45:54.542Z"),array: [],obj: {_id: 27478,str: "withdrawal maroon",obj: {_id: 27479,str: "Berkshire Samoa Latvian Lats",num: 79863,date: new Date("2018-09-06T06:26:33.238Z"),array: [57470,new Date("2018-09-06T00:01:03.478Z"),[{_id: 27480,num: 92463,date: new Date("2018-09-06T02:49:45.636Z")}]],obj: {}}}},"Beauty SMS"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 27481,str: "e-business",num: 42961,date: new Date("2018-09-06T10:12:08.140Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 27482,str: "system engine Data",num: 66156,date: new Date("2018-09-06T14:55:14.007Z"),array: ["auxiliary Berkshire",new Date("2018-09-06T03:52:13.152Z"),"SAS",59797,[],21962,60790,"User-centric",{_id: 27483,str: "Ball interactive",num: 83728,array: [],obj: {_id: 27484,str: "technologies",num: 17362,date: new Date("2018-09-06T04:28:25.565Z"),array: [],obj: {}}},38003,new Date("2018-09-05T20:12:53.526Z"),"payment Gorgeous",new Date("2018-09-06T06:12:45.878Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 27485,str: "Jewelery",num: 19540,date: new Date("2018-09-06T11:10:56.748Z"),array: [new Date("2018-09-06T08:09:21.961Z"),26160,new Date("2018-09-05T21:06:56.392Z"),"Benin","Developer quantifying",new Date("2018-09-06T10:10:24.092Z"),24036,38277,[{_id: 27486,str: "payment Berkshire back up",num: 39622,array: []},"circuit algorithm",95501,[]],[]],obj: {_id: 27487,num: 67179,date: new Date("2018-09-06T00:39:00.576Z"),array: [],obj: {_id: 27488,str: "global Cheese",date: new Date("2018-09-05T22:59:37.196Z"),array: [[15057,{ _id: 27489 }],"Berkshire Malaysian Ringgit Global","3rd generation PNG","Borders moratorium"],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 27490,str: "online program exploit",num: 81105,date: new Date("2018-09-06T03:13:59.199Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 27491,num: 94167,date: new Date("2018-09-06T08:47:46.334Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 27492,str: "HDD Future Guernsey",num: 90876,date: new Date("2018-09-06T00:26:38.068Z"),array: [],obj: {_id: 27493,str: "synthesize e-commerce partnerships",num: 7248,date: new Date("2018-09-06T13:46:02.376Z"),array: [new Date("2018-09-06T17:03:06.012Z"),"Swedish Krona TCP value-added",{_id: 27494,str: "Human Shoals revolutionize",num: 54682,date: new Date("2018-09-06T14:13:54.069Z"),array: [],obj: {}},new Date("2018-09-06T15:11:25.554Z"),51158,85687,new Date("2018-09-06T04:30:53.875Z"),{_id: 27495,str: "bypass Frozen Ball",num: 77217,date: new Date("2018-09-05T22:50:53.662Z"),array: [],obj: {}},new Date("2018-09-06T05:28:08.355Z"),28255,"PNG"]}});
    },

    function(coll) {
        return coll.insert({_id: 27496,str: "Djibouti Franc 6th generation Fantastic Soft Towels",num: 24769,date: new Date("2018-09-06T17:40:45.954Z"),array: ["Intelligent Fresh Shoes Directives Intelligent",92080,{_id: 27497,str: "lime Tasty Plastic Cheese",num: 1437,date: new Date("2018-09-05T20:06:10.680Z"),obj: {_id: 27498,str: "SAS bandwidth",array: [new Date("2018-09-06T01:26:15.163Z")],obj: {}}},"Connecticut Handcrafted Sleek",new Date("2018-09-06T12:32:19.681Z"),50914,{_id: 27499,str: "Granite Borders Investment Account",num: 38174,date: new Date("2018-09-06T16:59:00.789Z"),obj: {_id: 27500,str: "Handcrafted deposit Chief",num: 14947,date: new Date("2018-09-06T03:54:19.085Z"),array: [],obj: {}}},41915,"Personal Loan Account","withdrawal",63433,new Date("2018-09-06T00:33:44.104Z"),"incentivize compressing"]});
    },

    function(coll) {
        return coll.insert({_id: 27501,str: "Human Car Rubber",num: 9463,date: new Date("2018-09-06T09:38:27.755Z"),array: [81400,{_id: 27502,str: "Texas",num: 88843,date: new Date("2018-09-06T16:56:36.244Z"),array: [new Date("2018-09-05T21:51:28.274Z")],obj: {}},"Home Loan Account",[],"Human empowering Refined Metal Computer",new Date("2018-09-06T10:32:51.019Z"),38961,[],"Jewelery","Investment Account Colorado connecting",22096,"invoice Small Concrete Shoes"],obj: {_id: 27503,str: "payment cutting-edge unleash",num: 35224,date: new Date("2018-09-06T15:09:54.134Z"),array: [],obj: { _id: 27504 }}});
    },

    function(coll) {
        return coll.insert({_id: 27505,str: "Avon",num: 52476,date: new Date("2018-09-06T11:06:08.883Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 27506,str: "Home Loan Account users",num: 93119,date: new Date("2018-09-06T18:46:11.206Z"),array: [],obj: {_id: 27507,num: 70863,date: new Date("2018-09-06T11:46:13.421Z"),array: ["access Iraq",[60354,53684,new Date("2018-09-06T12:06:55.664Z"),{_id: 27508,str: "Keys violet",num: 15733,array: [new Date("2018-09-06T11:23:16.019Z")],obj: {}}],"District",new Date("2018-09-06T15:55:02.874Z"),new Date("2018-09-05T20:53:32.955Z"),72919,[],88958,7738,["Web Hollow"],[{_id: 27509,str: "mobile",date: new Date("2018-09-06T19:27:02.466Z"),array: [],obj: {}}]],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 27510,str: "Handmade",num: 57077,date: new Date("2018-09-06T10:22:09.782Z"),array: [],obj: {_id: 27511,str: "capability bandwidth China",num: 15619,date: new Date("2018-09-06T01:06:01.702Z"),array: [new Date("2018-09-06T02:29:21.129Z"),5572,{_id: 27512,str: "red Division",num: 30745,date: new Date("2018-09-06T12:49:58.246Z"),array: [{_id: 27513,str: "Frozen Cambridgeshire",num: 69139,obj: {_id: 27514,str: "Home",date: new Date("2018-09-06T14:25:00.618Z"),array: [],obj: {}}},"South Georgia and the South Sandwich Islands Face to face Liechtenstein"],obj: {_id: 27515,num: 64938,date: new Date("2018-09-06T11:52:07.249Z"),array: ["solutions Movies",54913],obj: { _id: 27516 }}},"synergistic Kenyan Shilling Rustic",new Date("2018-09-06T10:34:10.692Z"),new Date("2018-09-06T08:46:27.701Z"),23723,96716,{_id: 27517,str: "bypass indigo",obj: {_id: 27518,str: "Computer Representative",num: 31219,array: []}},[new Date("2018-09-05T22:00:07.707Z"),{ _id: 27519 }],"Producer",16905],obj: {_id: 27520,num: 41579,date: new Date("2018-09-06T13:39:43.520Z"),array: []}}});
    },

];

const indexList = [

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": 1, "str": -1});
    },

    function(coll) {
        return coll.createIndex({"str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": -1, "obj.obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": 1, "num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.num": 1, "obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": 1, "obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": -1, "obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": 1, "obj.obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": 1, "obj.obj.obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"num": -1});
    },

    function(coll) {
        return coll.createIndex({"date": -1, "obj.obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"num": 1});
    },

    function(coll) {
        return coll.createIndex({"date": 1, "num": -1});
    },

    function(coll) {
        return coll.createIndex({"date": 1, "obj.obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": -1, "obj.obj.obj.str": -1, "obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": -1, "obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"str": -1, "num": -1});
    },

    function(coll) {
        return coll.createIndex({"str": -1, "obj.obj.obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"date": -1, "num": 1});
    },

    function(coll) {
        return coll.createIndex({"num": 1, "obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": -1, "date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": -1, "str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": -1, "str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": -1, "obj.obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"date": 1, "obj.obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": 1, "str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": 1, "obj.obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"date": -1, "obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"date": -1, "obj.obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"date": 1, "obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": 1, "obj.obj.obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": 1, "num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": -1, "obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.num": -1, "obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": 1, "num": -1});
    },

    function(coll) {
        return coll.createIndex({"num": 1, "obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": 1, "obj.obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": 1, "obj.obj.obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.num": 1, "obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": -1, "obj.obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"str": -1, "obj.obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": 1, "obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"date": -1, "obj.obj.str": -1});
    },

];

const aggregationList = [

        [{$project: {a: { $filter: {input: ['$obj.obj.num','$num'],cond: { $in: [{ $arrayToObject: [[['$$this'],[35267],["Beauty magenta",{ $toString: { $arrayToObject: [[{k: "Functionality",v: new Date("2018-09-06T05:36:02.411Z")},{k: "red",v: '$$this'},{k: "Borders",v: 88483}]] } }]]] },{ $objectToArray: '$$this' }] }} }, _id: 0}}],

        [{$project: {a: { $rtrim: { input: { $substrBytes: ["bypass mint green",15,17] } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[["RAM","USB",{ $substrBytes: [{ $ltrim: { input: '$obj.obj.obj.str' } },20,6] }],[65747,'$obj.num'],['$obj.obj.str',"Facilitator eyeballs Engineer",'$obj.obj.str'],['$obj.obj.obj.obj.num',10457,81378]]] }, _id: 0}}],

        [{$project: {a: { $hour: { $isoWeek: { $toDate: { $map: {input: [12420],in: { $pow: ['$obj.obj.num','$$this'] }} } } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.obj.obj.num','$obj.num'],31674] }, _id: 0}}],

        [{$project: {a: { $substr: ["Credit Card Account",5,19] }, _id: 0}}],

        [{$project: {a: { $map: {input: [{ $toLower: '$obj.str' }],in: { $floor: '$obj.obj.obj.obj.num' }} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Industrial",v: 88175},{k: "Kuwaiti Dinar Fantastic Fresh Sausages",v: '$obj.obj.str'}]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],[]]] }, _id: 0}}],

        [{$project: {a: { $substr: ["Frozen redundant Avon",5,12] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["Jamaican Dollar"],88820] }, _id: 0}}],

        [{$project: {a: { $range: [11,6,13] }, _id: 0}}],

        [{$project: {a: { $concatArrays: [["backing up Jewelery","cross-platform"],[2278,48104],['$obj.obj.str']] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $substrCP: ['$obj.obj.obj.str',7,15] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[15246],51780] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.obj.obj.num',70281,'$obj.obj.obj.obj.num'],50406] }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [[{ $concat: ['$str','$str',"heuristic Computer SAS","matrix local area network"] },{ $substr: [{ $toLower: "firewall" },1,12] }],['$obj.obj.num','$obj.obj.num']],useLongestLength: false,defaults: [{}]} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[["Advanced",'$obj.str',"orchid",{ $substrCP: ['$obj.obj.obj.str',14,12] }],['$obj.num'],[],[98754,57181],['$obj.obj.str']]] }, _id: 0}}],

        [{$project: {a: DATE;, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],[]]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$num'],10442] }, _id: 0}}],

        [{$project: {a: { $dayOfWeek: { $minute: { $toDate: { $substrCP: ["Hills",12,15] } } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "explicit",v: '$obj.obj.str'},{k: "Future Fully-configurable",v: new Date("2018-09-06T15:59:59.483Z")}]] }, _id: 0}}],

        [{$project: {a: { $isoDayOfWeek: { $toDate: { $substr: ["auxiliary",18,15] } } }, _id: 0}}],

        [{$project: {a: { $concatArrays: [['$obj.obj.num']] }, _id: 0}}],

        [{$project: {a: { $dateToParts: {date: { $isoDayOfWeek: { $month: { $toDate: { $rtrim: { input: { $substrBytes: ["Plaza Montana synergies",10,8] } } } } } },timezone: "Asia/Tashkent",iso8601: true} }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [["Chair purple",{ $toString: { $arrayToObject: [[['$obj.obj.obj.str'],[],[],['$obj.obj.num'],['$obj.obj.str','$obj.obj.str',"SAS GB"],[],[{ $dayOfYear: { $dayOfWeek: { $dayOfMonth: { $dateFromParts: {isoWeekYear: { $abs: 31377 },isoWeek: { $log: [{ $cmp: [{ $arrayToObject: [[]] },{ $arrayToObject: [[{k: "Riel Convertible Marks",v: 23344}]] }] },{ $divide: [{ $floor: '$obj.obj.num' },17065] }] },second: { $subtract: [83989,{ $log10: '$obj.obj.num' }] },timezone: "Asia/Gaza"} } } } },false]]] } }],[]],useLongestLength: false} }, _id: 0}}],

        [{$project: {a: { $toString: { $map: {input: [],as: 'cayla',in: { $ceil: 99242 }} } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $toLower: "Alabama back-end" }],36581] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Tactics protocol Frozen",v: '$obj.obj.num'}]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $concat: ['$obj.obj.str','$str'] },'$str'],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Baht Swiss Franc Corporate",v: '$obj.obj.obj.num'},{k: "clicks-and-mortar",v: { $toString: { $arrayElemAt: [[66485,'$obj.num',{ $cmp: [{ $dateToParts: { date: { $week: { $isoWeek: { $isoWeekYear: { $year: { $dateToString: {date: '$obj.date',format: "%Z-%u-%%-%G",timezone: "Pacific/Tahiti",onNull: { $reverseArray: [[]] }} } } } } } } },{ $concat: ["HDD New Jersey",'$obj.obj.obj.str','$obj.str',"Consultant Buckinghamshire"] }] }],'$num'] } }},{k: "generating Tools",v: true},{k: "Cotton",v: "Intelligent"}]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[new Date("2018-09-06T13:35:57.727Z")],[],["XSS Hong Kong payment",'$obj.obj.str'],['$obj.obj.obj.str'],[],[]]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[38649,33983,'$obj.obj.obj.obj.num'],[{ $rtrim: { input: '$obj.obj.obj.str' } },{ $toUpper: "multi-byte" },{ $trim: {input: "compress clear-thinking",chars: "Bedfordshire bypassing needs-based"} }],['$obj.num'],['$obj.str']]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["backing up Berkshire"],'$obj.obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $filter: {input: [40016,'$obj.obj.obj.num'],cond: { $lte: [{ $arrayElemAt: [['$$this','$obj.obj.num'],66469] },{ $concatArrays: [[{ $substr: ["Manager Vermont",11,13] },'$str',{ $toLower: "Czech Republic payment" }],[],[],[{ $substr: ["Macao",11,2] }],['$obj.obj.obj.str','$str'],[]] }] }} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.num'],96213] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $ltrim: {input: '$str',chars: "upward-trending"} }, _id: 0}}],

        [{$project: {a: { $trim: {input: '$obj.str',chars: "Spurs"} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["embrace olive"],89385] }, _id: 0}}],

        [{$project: {a: { $concatArrays: [[22564],['$obj.obj.obj.str'],[{ $substrBytes: [{ $substr: ["Shore",15,11] },6,4] },"Practical Wooden Hat Puerto Rico"]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Industrial",v: false},{k: "quantify Credit Card Account",v: { $substr: ["Electronics",18,3] }}]] }, _id: 0}}],

        [{$project: {a: { $ltrim: { input: "sensor" } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "turn-key Tactics",v: false},{k: "Investment Account Vanuatu",v: 56876}]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.obj.str',{ $toUpper: { $substrCP: ['$obj.obj.obj.str',18,16] } }],1991] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$str',"Forward deposit overriding"],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[["United States Minor Outlying Islands Credit Card Account",'$str',{ $toString: { $reverseArray: [[68352,'$obj.num','$obj.obj.obj.num']] } }],["orchid Glens"],[],[],['$obj.obj.num']]] }, _id: 0}}],

        [{$project: {a: { $substr: [{ $ltrim: {input: { $substrBytes: [{ $toString: { $range: [12,3,0] } },4,19] },chars: "override"} },19,8] }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: { $isoDayOfWeek: { $hour: { $isoWeek: { $month: { $dayOfMonth: { $second: { $week: { $year: { $isoWeek: { $year: { $minute: '$obj.obj.date' } } } } } } } } } } },timezone: "America/Argentina/Ushuaia",onNull: { $arrayToObject: [[["Granite invoice Computers",'$obj.str'],[],['$obj.obj.str',"calculating customized violet"]]] }} }, _id: 0}}],

        [{$project: {a: { $second: { $isoWeekYear: { $year: { $month: { $hour: { $week: { $dayOfWeek: { $isoWeek: { $dateFromParts: { isoWeekYear: { $floor: 95026 } } } } } } } } } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[62566,{ $size: [["Chips exploit Wooden"]] },'$obj.num'],'$num'] }, _id: 0}}],

        [{$project: {a: { $year: { $week: { $dayOfWeek: { $dateFromString: {dateString: "2018-09-06T01:02:18.149Z",timezone: "America/Curacao",onError: { $objectToArray: '$obj' },onNull: '$obj.obj.str'} } } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $ltrim: {input: '$obj.obj.str',chars: "Communications open-source"} },{ $substrCP: ["Buckinghamshire",14,16] }],69997] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $toUpper: "Roads" }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[50430,35086],87192] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.num','$num'],93461] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["Pakistan Rupee Generic Wooden Computer black"],'$obj.obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $toDate: { $filter: {input: [45244,18592,'$obj.num'],as: 'susanna',cond: { $in: [{ $arrayElemAt: [['$obj.num'],'$$susanna'] },{ $range: [4,13,5] }] }} } }, _id: 0}}],

        [{$project: {a: { $substr: ["Rustic reboot e-markets",7,17] }, _id: 0}}],

        [{$project: {a: { $trim: {input: "customized back-end Kids",chars: '$obj.obj.str'} }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj' }, _id: 0}}],

        [{$project: {a: { $zip: { inputs: [['$num'],['$str'],[87235,17064,'$obj.obj.num'],['$obj.str',"Borders primary"]] } }, _id: 0}}],

        [{$project: {a: { $range: [19,10,1] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Assurance capacitor enhance",v: "paradigms mission-critical"}]] }, _id: 0}}],

        [{$project: {a: { $dayOfMonth: { $isoWeekYear: { $dateToString: {date: '$obj.obj.date',timezone: "Asia/Gaza",onNull: { $substrBytes: [{ $substr: ['$obj.obj.obj.str',17,12] },12,9] }} } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $trim: {input: '$str',chars: "mindshare Future Investment Account"} }],76194] }, _id: 0}}],

        [{$project: {a: { $concat: ['$obj.str'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Small productivity Tasty Soft Towels",v: { $substrBytes: ['$obj.str',15,0] }}]] }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj' }, _id: 0}}],

        [{$project: {a: { $second: { $second: { $hour: { $dayOfYear: { $millesecond: { $dayOfWeek: { $year: { $year: new Date("2018-09-06T08:33:34.992Z") } } } } } } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[47724],61263] }, _id: 0}}],

        [{$project: {a: { $reverseArray: [[]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Michigan",v: true}]] }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [[{ $trim: { input: '$obj.str' } },"Hat"],[],[74039],['$obj.num',47696]],useLongestLength: true,defaults: []} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[{ $toUpper: "hacking 6th generation access" }],[85929]]] }, _id: 0}}],

        [{$project: {a: { $isoDayOfWeek: { $dayOfYear: { $hour: { $millesecond: { $dateToParts: {date: { $second: { $week: { $minute: { $dateFromParts: {isoWeekYear: { $pow: ['$obj.num',24571] },isoWeek: { $exp: { $floor: '$obj.obj.obj.obj.num' } },minute: { $mod: ['$num',17440] },second: { $trunc: 11182 },timezone: "America/Toronto"} } } } },iso8601: true} } } } } }, _id: 0}}],

        [{$project: {a: { $ltrim: { input: '$obj.obj.obj.str' } }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [[],['$obj.obj.num']],defaults: ["back-end"]} }, _id: 0}}],

        [{$project: {a: { $substrCP: [{ $rtrim: {input: "embrace Representative Cambridgeshire",chars: '$str'} },19,10] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["invoice Concrete","Fish incubate Union"],{ $multiply: [{ $size: [[{ $trim: {input: '$str',chars: '$obj.obj.obj.str'} }]] }] }] }, _id: 0}}],

        [{$project: {a: { $rtrim: { input: '$str' } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Seychelles Rupee EXE Automotive",v: '$obj.obj.obj.date'},{k: "Incredible Strategist",v: false}]] }, _id: 0}}],

        [{$project: {a: { $year: { $month: { $dateFromString: {dateString: "2018-09-06T08:53:03.455Z",onError: { $arrayElemAt: [[{ $exp: 79771 },'$obj.obj.num','$obj.num'],'$obj.obj.num'] },onNull: { $objectToArray: '$obj' }} } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[["bricks-and-clicks",'$obj.obj.obj.str'],[],[],[{ $dateToString: {date: '$obj.date',format: "%M-%G-%%-%U",timezone: "NZ-CHAT",onNull: { $substrCP: [{ $concat: ['$str'] },12,15] }} }],[]]] }, _id: 0}}],

        [{$project: {a: { $trim: {input: "Dynamic",chars: { $ltrim: {input: '$obj.str',chars: { $rtrim: { input: "USB" } }} }} }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: new Date("2018-09-06T08:52:52.122Z"),format: "%U-%Z-%w-%m-%m-%%-%L-%m-%Y-%j-%w-%%",timezone: "America/Kentucky/Monticello"} }, _id: 0}}],

        [{$project: {a: { $year: { $dateToString: {date: { $toDate: { $arrayToObject: [[['$obj.obj.obj.str'],[{ $toString: { $second: { $dayOfWeek: { $dayOfWeek: { $dayOfMonth: { $isoWeekYear: { $dayOfYear: { $week: { $month: { $dateToParts: {date: { $dateFromParts: {year: '$num',month: { $cmp: [{ $arrayElemAt: [[],{ $ceil: 33675 }] },{ $range: [5,6] }] },second: { $trunc: '$obj.num' },timezone: "Asia/Samarkand"} },iso8601: false} } } } } } } } } } },'$obj.obj.obj.str',{ $substrCP: ["convergence",19,5] }],[],['$obj.obj.obj.str',"human-resource deliver Nebraska","cyan"],[]]] } },onNull: '$str'} } }, _id: 0}}],

        [{$project: {a: { $substrCP: ['$obj.obj.str',17,3] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["Money Market Account"],'$num'] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.obj.obj.num',64711],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[64512,'$obj.obj.obj.num',{ $floor: 69632 }],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "e-commerce Tunisian Dinar Intelligent Frozen Shirt",v: '$obj.obj.obj.num'}]] }, _id: 0}}],

        [{$project: {a: { $trim: { input: { $concat: ["mobile core Somalia","calculating transmitting lime"] } } }, _id: 0}}],

        [{$project: {a: { $dayOfWeek: { $dayOfYear: { $year: { $dateFromParts: {year: { $ceil: 94966 },day: { $divide: ['$num',61409] }} } } } }, _id: 0}}],

        [{$project: {a: { $filter: {input: [],as: 'margaret',cond: { $lt: [{ $arrayElemAt: [["extend Kids"],90209] },{ $dateFromString: {dateString: "2018-09-06T12:12:13.930Z",format: "%V-%Z-%V-%M-%G",onNull: { $arrayElemAt: [['$$margaret','$$margaret'],91082] }} }] }} }, _id: 0}}],

        [{$project: {a: { $week: { $isoWeekYear: { $year: { $isoWeek: { $dayOfWeek: { $toDate: { $map: {input: [{ $dateToString: { date: '$date' } },{ $trim: { input: { $substrBytes: ['$obj.str',14,4] } } },'$obj.obj.date',"Right-sized Avon"],in: { $ceil: '$$this' }} } } } } } } }, _id: 0}}],

        [{$project: {a: { $rtrim: {input: "recontextualize",chars: { $rtrim: {input: '$obj.str',chars: { $substrBytes: [{ $trim: {input: '$str',chars: "Buckinghamshire"} },0,3] }} }} }, _id: 0}}],

        [{$project: {a: { $dateToParts: { date: { $isoDayOfWeek: { $millesecond: { $dayOfYear: { $isoWeek: { $dateToParts: {date: { $dayOfMonth: { $month: { $millesecond: { $isoWeekYear: { $minute: { $dateFromString: {dateString: "2018-09-06T00:19:06.555Z",timezone: "Pacific/Majuro",onError: { $dateToString: {date: new Date("2018-09-06T05:21:50.886Z"),format: "%S-%Y-%w-%M-%Z-%w-%m-%m-%z",onNull: "e-enable e-markets deliver"} },onNull: { $concat: ['$obj.obj.obj.str',"transmitting reciprocal"] }} } } } } } },timezone: "Asia/Aqtau"} } } } } } } }, _id: 0}}],

        [{$project: {a: { $filter: {input: ["Shoes Human Nevada","Home Fantastic Fresh Pizza"],cond: { $lt: [{ $arrayElemAt: [['$$this',{ $toString: { $month: { $week: { $dateToParts: {date: { $second: { $dateToString: {date: { $dayOfMonth: new Date("2018-09-06T01:34:29.380Z") },format: "%u-%d-%L-%V-%Y-%M-%U-%d-%u-%Z-%G-%u"} } },timezone: "America/Boa_Vista"} } } } }],13478] },{ $substrCP: [{ $ltrim: { input: { $dateToString: {date: { $dateToParts: {date: { $dateFromString: {dateString: "2018-09-06T18:55:33.308Z",onError: { $toUpper: { $toLower: '$$this' } }} },iso8601: false} },timezone: "Australia/Adelaide",onNull: { $arrayElemAt: [[],24294] }} } } },6,11] }] }} }, _id: 0}}],

        [{$project: {a: { $reverseArray: [[{ $rtrim: { input: "Flat Licensed Concrete Bacon Phased" } },false,'$obj.obj.num']] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["extensible Optional transmitting","hard drive",{ $ltrim: {input: '$obj.obj.str',chars: '$obj.str'} }],'$num'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[]] }, _id: 0}}],

        [{$project: {a: { $substr: ['$obj.obj.obj.str',13,8] }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj.obj.obj' }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj' }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$num'] }, _id: 0}}],

        [{$project: {a: { $toUpper: { $trim: { input: "Malagasy Ariary Soft" } } }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj.obj' }, _id: 0}}],

        [{$project: {a: { $isoDayOfWeek: { $dayOfWeek: { $toDate: { $arrayElemAt: [['$obj.obj.obj.num',97496],84204] } } } }, _id: 0}}],

        [{$project: {a: { $isoDayOfWeek: { $dayOfMonth: { $toDate: { $arrayElemAt: [["synergies"],75390] } } } }, _id: 0}}],

        [{$project: {a: { $toLower: "Kroon open architecture" }, _id: 0}}],

        [{$project: {a: { $isoDayOfWeek: { $year: { $dateFromString: {dateString: "2018-09-06T02:50:33.164Z",format: "%m-%U-%z-%%-%H-%d",timezone: "Asia/Vientiane",onNull: { $arrayElemAt: [['$obj.num',76536],'$num'] }} } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.str'],46108] }, _id: 0}}],

        [{$project: {a: { $month: { $second: { $second: { $hour: { $minute: { $isoWeek: '$obj.obj.obj.date' } } } } } }, _id: 0}}],

        [{$project: {a: { $trim: {input: "ivory exploit",chars: '$str'} }, _id: 0}}],

        [{$project: {a: { $substr: ['$obj.str',14,19] }, _id: 0}}],

        [{$project: {a: { $map: {input: [19697],as: 'isabella',in: { $abs: 30017 }} }, _id: 0}}],

        [{$project: {a: { $trim: { input: "withdrawal blue" } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[44441,84885,'$obj.obj.obj.num'],['$obj.obj.str',"Chief Upgradable"],[],["card","Cloned e-business"],[]]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$obj.obj.obj.obj.num',56349],["Bedfordshire",{ $concat: ['$obj.obj.obj.str'] },'$obj.obj.str'],['$obj.obj.obj.str',{ $dateToString: {date: '$obj.obj.date',timezone: "Etc/GMT-5"} }],[]]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[["Sleek Steel Bike",{ $toLower: '$obj.obj.str' }],[],[],[{ $trim: {input: '$str',chars: '$str'} },"4th generation"]]] }, _id: 0}}],

        [{$project: {a: { $substrBytes: ["Radial Central Inverse",1,12] }, _id: 0}}],

        [{$project: {a: { $toUpper: { $toString: { $arrayElemAt: [[77984],'$num'] } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $substrCP: ['$obj.obj.str',10,8] },{ $trim: {input: "Awesome Granite Keyboard",chars: "Keyboard"} },'$obj.obj.obj.str'],59684] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[{ $toString: { $dayOfWeek: { $millesecond: { $dayOfYear: { $week: { $year: { $dayOfMonth: { $isoWeek: new Date("2018-09-06T00:14:30.672Z") } } } } } } } },{ $rtrim: { input: '$obj.obj.obj.str' } }],[]]] }, _id: 0}}],

        [{$project: {a: { $reverseArray: [[]] }, _id: 0}}],

        [{$project: {a: { $filter: {input: [],as: 'kareem',cond: { $gt: [{ $concat: [{ $trim: { input: "blue SMTP" } }] },{ $year: { $dayOfMonth: { $dateToParts: {date: { $hour: { $dateFromParts: {isoWeekYear: { $add: [] },isoWeek: { $mod: [64285,'$$kareem'] },hour: { $indexOfArray: [{ $range: [6,17,19] },{ $arrayElemAt: [['$num'],{ $indexOfArray: [{ $reverseArray: [[]] },{ $arrayToObject: [[[],[{ $dayOfWeek: { $dateToString: {date: '$$kareem',format: "%%-%d-%u-%U-%u"} } },false],[{ $toLower: '$obj.obj.str' },'$$kareem'],["Wyoming payment",'$obj.obj.obj.str'],[{ $rtrim: {input: '$str',chars: '$$kareem'} }],[]]] },17,18] }] },13] },minute: { $size: [["Towels violet","Tasty Cayman Islands Dollar","parse dynamic",{ $substr: [{ $rtrim: { input: '$obj.obj.obj.str' } },5,13] }]] },second: { $multiply: [57974] }} } },timezone: "America/Rio_Branco",iso8601: true} } } }] }} }, _id: 0}}],

        [{$project: {a: { $toUpper: "Diverse" }, _id: 0}}],

        [{$project: {a: { $reverseArray: [[{ $dateToString: {date: new Date("2018-09-06T09:07:31.869Z"),format: "%S-%G-%u-%U-%H-%j-%V-%u",timezone: "Asia/Tel_Aviv",onNull: { $arrayToObject: [[['$obj.num','$obj.num'],[{ $ltrim: {input: '$obj.obj.str',chars: "Buckinghamshire auxiliary"} },"optimal",'$str'],[21772],[]]] }} }]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],74599] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[]] }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [[],[{ $floor: '$obj.obj.num' },17596,'$num'],[{ $ltrim: { input: "AI Bacon" } },{ $rtrim: {input: '$str',chars: "engineer Global"} }]],defaults: [new Date("2018-09-05T23:44:36.495Z"),740,/^Democratic People\'s Republic of Korea|Savings Account|Lead|lime/]} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$str'],55206] }, _id: 0}}],

        [{$project: {a: { $toUpper: { $substrCP: ['$str',8,4] } }, _id: 0}}],

        [{$project: {a: { $toLower: { $toUpper: '$str' } }, _id: 0}}],

        [{$project: {a: { $range: [3,14,6] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "hierarchy",v: 82342},{k: "synergies",v: "Clothing Dynamic system"},{k: "Tasty SAS Unbranded",v: true}]] }, _id: 0}}],

        [{$project: {a: { $ltrim: { input: '$obj.str' } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $toLower: { $toLower: '$obj.str' } }, _id: 0}}],

        [{$project: {a: { $isoDayOfWeek: { $week: { $dateFromParts: {year: { $divide: [{ $pow: [31751,'$num'] },96301] },month: { $add: [] },day: { $trunc: 93706 },hour: { $ceil: '$num' },timezone: "Africa/Luanda"} } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[]]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "magenta",v: '$obj.obj.obj.date'},{k: "THX indexing",v: "Refined Soft Hat Investor"}]] }, _id: 0}}],

        [{$project: {a: { $map: {input: [14949],as: 'kris',in: { $multiply: [] }} }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: new Date("2018-09-06T03:45:28.765Z"),format: "%S-%Y-%w-%H-%S-%j-%z-%H-%%-%w-%V",timezone: "Africa/Monrovia",onNull: { $objectToArray: '$obj.obj.obj.obj' }} }, _id: 0}}],

        [{$project: {a: { $reverseArray: [["Vermont Shirt Organized","PNG",{ $toString: { $arrayToObject: [[{k: "concept Swaziland",v: '$obj.obj.obj.num'},{k: "open-source payment",v: '$obj.obj.num'}]] } }]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$obj.str'],[],[75797,'$obj.num'],[]]] }, _id: 0}}],

        [{$project: {a: { $range: [12,4,12] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $reverseArray: [[{ $trim: {input: '$obj.obj.obj.str',chars: "Lights"} }]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[]]] }, _id: 0}}],

        [{$project: {a: { $ltrim: { input: '$obj.str' } }, _id: 0}}],

        [{$project: {a: { $rtrim: {input: "Refined Uganda Shilling",chars: { $concat: ["Handmade Ergonomic strategy"] }} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$date',true]]] }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj.obj.obj' }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $ltrim: { input: "virtual" } },'$str'],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $minute: { $dateFromParts: {isoWeekYear: { $trunc: 93038 },isoWeek: { $exp: '$obj.num' },minute: { $multiply: [] },millisecond: { $ceil: '$obj.obj.obj.num' },timezone: "Asia/Dili"} } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$obj.obj.obj.str',"input IB invoice",'$obj.obj.str'],[],['$obj.str',"Liechtenstein Knoll"]]] }, _id: 0}}],

        [{$project: {a: { $isoWeekYear: { $dateToParts: {date: { $month: { $dayOfYear: { $dayOfWeek: { $month: { $dayOfMonth: { $toDate: { $arrayToObject: [[{k: "Money Market Account Cross-group",v: true}]] } } } } } } },timezone: "Brazil/West",iso8601: true} } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "policy Auto Loan Account",v: false}]] }, _id: 0}}],

        [{$project: {a: { $concat: [] }, _id: 0}}],

        [{$project: {a: { $year: { $dateToString: {date: { $dateToParts: {date: { $week: { $minute: { $hour: { $hour: { $week: { $dateToParts: {date: { $dayOfWeek: { $isoDayOfWeek: { $isoWeekYear: { $dateToString: { date: new Date("2018-09-06T16:32:58.851Z") } } } } },timezone: "Pacific/Rarotonga"} } } } } } },iso8601: false} },format: "%L-%Y-%L-%M-%S-%%-%Z-%m-%Z",timezone: "America/Cayenne"} } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["SDD Program analyzer",{ $substr: ["bandwidth-monitored initiative",3,15] },'$obj.obj.str'],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $isoDayOfWeek: { $dayOfWeek: { $isoDayOfWeek: { $week: { $isoWeek: { $isoWeekYear: { $toDate: { $arrayToObject: [[{k: "Kids",v: "Polarised hack asynchronous"}]] } } } } } } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Islands partnerships",v: true}]] }, _id: 0}}],

        [{$project: {a: { $range: [14,8] }, _id: 0}}],

        [{$project: {a: { $ltrim: { input: "New Leu" } }, _id: 0}}],

        [{$project: {a: { $week: { $dayOfWeek: { $dateToParts: {date: { $dateToString: { date: new Date("2018-09-05T23:34:14.473Z") } },timezone: "Pacific/Majuro"} } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "connecting",v: false},{k: "Balanced",v: '$num'}]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[]] }, _id: 0}}],

        [{$project: {a: { $trim: {input: { $substrCP: [{ $ltrim: { input: '$obj.str' } },5,10] },chars: "action-items backing up"} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["Investment Account Incredible Fresh Cheese"],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Fundamental Industrial Ameliorated",v: false},{k: "capacitor gold methodical",v: '$obj.obj.str'}]] }, _id: 0}}],

        [{$project: {a: { $ltrim: {input: '$obj.str',chars: "Rustic Fresh Towels Colorado"} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],[],['$obj.obj.obj.str',"Savings Account Passage",{ $ltrim: {input: { $toString: { $objectToArray: '$obj' } },chars: "benchmark"} }],[3275,'$obj.num']]] }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [['$obj.obj.str',{ $trim: { input: "Frozen salmon" } },{ $toLower: "West Virginia array digital" }],[{ $concat: [] }],[45824],['$obj.num',45543]],useLongestLength: true} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$obj.num'],[],[{ $substrBytes: [{ $ltrim: { input: "Armenian Dram Dale Kids" } },10,15] }],[],[{ $toLower: '$str' }]]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "cyan IB",v: 75258}]] }, _id: 0}}],

        [{$project: {a: { $concat: ['$obj.obj.obj.str',"Buckinghamshire COM"] }, _id: 0}}],

        [{$project: {a: { $isoWeek: { $hour: { $dayOfMonth: { $dayOfYear: { $dateFromString: {dateString: "2018-09-06T07:51:25.459Z",format: "%G-%u-%Y-%u",timezone: "GMT-0",onError: { $toUpper: "Way override" },onNull: { $range: [20,15] }} } } } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$obj.obj.obj.obj.num',99360],["transform applications",{ $toLower: { $substrBytes: [{ $substrCP: [{ $substrBytes: ["Rustic Wooden Bike Product",12,5] },4,15] },13,13] } }],['$obj.obj.obj.str'],[94884],[]]] }, _id: 0}}],

        [{$project: {a: { $toUpper: '$obj.obj.str' }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.str',"Interactions drive"],'$obj.obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj.obj.obj' }, _id: 0}}],

        [{$project: {a: { $toUpper: '$obj.obj.obj.str' }, _id: 0}}],

        [{$project: {a: { $range: [11,13,5] }, _id: 0}}],

        [{$project: {a: { $reverseArray: [[]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$obj.obj.str',"Latvia Netherlands Comoro Franc"]]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "matrix",v: '$obj.str'}]] }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [[],[],["payment Chair backing up",'$obj.obj.str'],['$obj.num','$obj.obj.obj.obj.num']],useLongestLength: true} }, _id: 0}}],

        [{$project: {a: { $toString: { $trim: {input: { $toUpper: "actuating Licensed" },chars: { $substrBytes: ['$obj.obj.obj.str',1,11] }} } }, _id: 0}}],

        [{$project: {a: { $dayOfYear: { $millesecond: { $millesecond: { $dayOfYear: { $isoWeekYear: { $isoDayOfWeek: { $year: { $dateFromString: {dateString: "2018-09-06T11:23:23.741Z",format: "%U-%V-%Z-%U-%U-%U-%S-%%-%w",timezone: "Pacific/Enderbury"} } } } } } } } }, _id: 0}}],

        [{$project: {a: { $dayOfYear: { $dateFromParts: {year: { $multiply: [1425] },minute: { $pow: ['$num','$obj.obj.obj.obj.num'] },timezone: "America/Curacao"} } }, _id: 0}}],

        [{$project: {a: { $concatArrays: [[],[],[{ $dateToString: {date: new Date("2018-09-06T17:27:22.355Z"),onNull: "PCI"} },'$obj.str',"protocol Ball Mauritius",'$obj.obj.str']] }, _id: 0}}],

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
