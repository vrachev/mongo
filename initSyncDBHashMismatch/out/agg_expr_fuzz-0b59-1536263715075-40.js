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
        return coll.insert({_id: 25084,num: 99234,date: new Date("2018-09-06T16:04:47.334Z"),array: [new Date("2018-09-06T17:50:27.072Z"),[],44302,{_id: 25085,str: "Usability Polarised matrix",num: 78193,date: new Date("2018-09-05T20:17:43.584Z"),array: [],obj: {_id: 25086,str: "Digitized Wyoming",date: new Date("2018-09-06T11:20:21.102Z"),array: [new Date("2018-09-05T20:42:33.775Z"),"Lithuanian Litas",34151,"connect Programmable invoice"]}},25215,new Date("2018-09-06T00:52:03.857Z"),{_id: 25087,str: "Beauty Awesome",num: 73408,date: new Date("2018-09-06T00:58:37.794Z"),obj: {_id: 25088,str: "expedite client-server",num: 13148,array: [],obj: {_id: 25089,array: ["invoice Gorgeous","Reunion JBOD circuit"],obj: {}}}},4834,23094,new Date("2018-09-06T09:48:35.599Z"),{_id: 25090,str: "Orchestrator connecting PCI",date: new Date("2018-09-06T13:44:15.644Z")}],obj: {_id: 25091,str: "Sri Lanka Rupee solutions",date: new Date("2018-09-06T04:18:46.877Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 25092,str: "Response Global systematic",num: 10059,date: new Date("2018-09-06T18:27:39.394Z"),array: [74489,{_id: 25093,date: new Date("2018-09-06T11:42:22.781Z"),array: [],obj: {_id: 25094,str: "Global content",num: 98080,date: new Date("2018-09-06T19:50:22.821Z"),array: ["UAE Dirham efficient"],obj: {_id: 25095,str: "Accountability",num: 57464,date: new Date("2018-09-06T01:50:13.688Z"),array: [],obj: {}}}},8289,new Date("2018-09-06T17:25:47.479Z"),new Date("2018-09-06T12:05:20.237Z"),{_id: 25096,array: [{_id: 25097,str: "open-source XSS",num: 53778,array: [],obj: {}},new Date("2018-09-06T04:44:04.733Z")]},"Idaho indexing",93946,"models frame","empower","Creative black optimize",[81017],new Date("2018-09-06T01:32:00.363Z")],obj: {_id: 25098,str: "Branch Industrial seamless",num: 93188,date: new Date("2018-09-06T15:20:39.608Z")}});
    },

    function(coll) {
        return coll.insert({_id: 25099,str: "override wireless",num: 53880,date: new Date("2018-09-06T09:40:02.968Z"),array: [21718,new Date("2018-09-06T04:38:35.625Z"),43048,new Date("2018-09-06T08:38:02.647Z"),{_id: 25100,str: "Wisconsin Montenegro",num: 25583,date: new Date("2018-09-05T22:17:05.643Z"),array: [],obj: {_id: 25101,num: 42936,date: new Date("2018-09-06T06:54:20.615Z"),array: ["SMTP Awesome Fresh Computer",{_id: 25102,str: "Keyboard",num: 49380,date: new Date("2018-09-06T15:30:31.028Z"),array: [],obj: {_id: 25103,str: "Concrete Regional",num: 72503,array: ["Direct violet"],obj: {_id: 25104,str: "Yemen Berkshire recontextualize",date: new Date("2018-09-05T22:25:28.779Z")}}},[],new Date("2018-09-06T17:48:23.292Z")]}},"Group",63376,"reintermediate payment","Savings Account Implemented",[]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 25105,str: "auxiliary leading-edge integrate",num: 39676,date: new Date("2018-09-05T23:11:02.091Z"),array: [78853,"Borders Credit Card Account bus","program Handmade",new Date("2018-09-06T17:41:02.667Z"),29287,new Date("2018-09-05T23:41:08.654Z"),new Date("2018-09-06T14:30:35.367Z"),{_id: 25106,str: "teal leading edge Architect",num: 25448,obj: {}}],obj: {_id: 25107,num: 27447,date: new Date("2018-09-05T23:45:01.827Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 25108,num: 41891,date: new Date("2018-09-05T23:43:09.321Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 25109,str: "Cheese",num: 67396,date: new Date("2018-09-06T05:32:19.508Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 25110,str: "24/7",num: 18416,date: new Date("2018-09-06T08:34:42.857Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 25111,str: "deposit definition target",num: 25280,date: new Date("2018-09-06T15:48:37.000Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 25112,str: "Tuna",num: 39252,date: new Date("2018-09-05T20:54:40.703Z"),array: ["white New Jersey",65662,new Date("2018-09-06T05:11:19.750Z"),new Date("2018-09-06T18:19:30.222Z"),"Checking Account Handcrafted flexibility",{_id: 25113,str: "Synergized SDD",num: 6784,date: new Date("2018-09-06T16:53:27.390Z"),array: [55945,[]]},74521,new Date("2018-09-06T19:55:27.380Z"),6360,{_id: 25114,num: 19348,date: new Date("2018-09-05T22:04:45.101Z"),obj: {_id: 25115,str: "Lek",num: 72018,array: ["Soft",new Date("2018-09-06T19:25:29.626Z"),[],"THX projection"],obj: {}}},"Passage Infrastructure"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 25116,str: "Generic Wooden Tuna",num: 82320,date: new Date("2018-09-05T21:55:00.303Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 25117,str: "mesh Pizza target",num: 65092,date: new Date("2018-09-06T12:52:03.015Z"),obj: {_id: 25118,str: "scalable",num: 76363,array: [],obj: {_id: 25119,num: 50049,date: new Date("2018-09-05T23:11:37.363Z"),array: [2614,{_id: 25120,num: 63318,date: new Date("2018-09-06T08:25:13.158Z"),array: [new Date("2018-09-06T15:26:14.798Z"),"Concrete Unbranded Cotton Sausages back-end"],obj: {}},"Borders Cotton Corporate",[],55902,5537,new Date("2018-09-06T09:35:24.403Z"),new Date("2018-09-06T11:53:19.996Z"),"Money Market Account",4910,"back-end Executive Buckinghamshire"],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 25121,str: "Designer cross-platform generating",num: 32216,date: new Date("2018-09-06T00:59:19.945Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 25122,str: "Singapore B2B programming",num: 98277,date: new Date("2018-09-06T19:18:12.599Z"),array: [new Date("2018-09-06T01:31:22.482Z"),83399,new Date("2018-09-06T11:34:55.444Z"),new Date("2018-09-06T03:37:24.098Z"),{_id: 25123,str: "Clothing",num: 51870,date: new Date("2018-09-06T13:14:40.088Z"),array: [],obj: {}},"program Handmade Cotton Table CSS",6651,new Date("2018-09-06T13:36:05.312Z"),{_id: 25124,str: "Dynamic Rand Loti",num: 5000,array: [],obj: {_id: 25125,str: "Multi-lateral",num: 93534,date: new Date("2018-09-06T18:14:51.254Z"),array: ["XSS",new Date("2018-09-06T11:15:34.425Z"),25638,["Table Brand"],"Savings Account Germany","envisioneer",69124]}}],obj: {_id: 25126,date: new Date("2018-09-06T13:31:27.628Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 25127,str: "withdrawal bypassing Direct",num: 71552,date: new Date("2018-09-06T17:32:46.021Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 25128,str: "Seamless Burg",num: 28689,date: new Date("2018-09-06T14:52:23.130Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 25129,str: "Small Granite Pants",num: 75776,date: new Date("2018-09-06T04:34:02.258Z"),array: [new Date("2018-09-06T13:53:35.567Z"),"magnetic",new Date("2018-09-06T16:45:08.322Z"),"Awesome Wooden Keyboard alarm parsing",27626,{_id: 25130,num: 41861,date: new Date("2018-09-06T15:26:00.357Z"),array: [],obj: {_id: 25131,str: "Sleek Customer Toys",num: 57676}},86448,18960,"calculating Optional",[new Date("2018-09-05T23:46:29.222Z"),76991],83869,[],[new Date("2018-09-06T04:56:47.117Z"),23818,["Brooks Kina"]],"SQL parse Cambridgeshire"],obj: {_id: 25132,str: "engage",date: new Date("2018-09-05T20:00:24.767Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 25133,str: "Open-source Unbranded Ergonomic",num: 78219,date: new Date("2018-09-06T12:44:32.503Z"),array: [],obj: {_id: 25134,str: "Checking Account Right-sized Pre-emptive",num: 79396,date: new Date("2018-09-06T03:22:16.262Z"),array: [93356,20094,"compressing online Cambridgeshire",new Date("2018-09-06T08:46:29.994Z"),"proactive solid state deposit",58730,76860,new Date("2018-09-06T07:35:17.533Z")],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 25135,str: "overriding RSS",num: 94970,date: new Date("2018-09-05T22:40:35.526Z"),array: [],obj: {_id: 25136,num: 26565,date: new Date("2018-09-06T02:52:06.722Z"),array: [[],new Date("2018-09-06T14:46:06.053Z"),"standardization",27299,new Date("2018-09-06T13:44:17.985Z"),"Nuevo Sol program",new Date("2018-09-06T09:54:47.139Z")]}});
    },

    function(coll) {
        return coll.insert({_id: 25137,str: "Summit cross-platform",num: 69337,date: new Date("2018-09-06T19:48:57.528Z"),array: ["Identity Tennessee",{_id: 25138,str: "primary service-desk compressing",num: 12678,date: new Date("2018-09-06T09:52:00.157Z"),array: [48692]},"Money Market Account Fish Generic Plastic Chicken",[],"Mobility Berkshire",new Date("2018-09-06T10:48:35.460Z"),63399,92683,new Date("2018-09-06T19:43:01.848Z"),[],"Graphical User Interface lavender HDD",28373,[],9832],obj: {_id: 25139,str: "redundant",num: 28661,date: new Date("2018-09-06T17:45:34.159Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 25140,str: "quantifying",num: 96508,date: new Date("2018-09-06T19:49:25.236Z"),array: [],obj: {_id: 25141,str: "cyan killer Tactics",num: 66325,date: new Date("2018-09-06T05:40:53.736Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 25142,str: "Configuration",num: 68322,date: new Date("2018-09-06T18:19:12.264Z"),array: [25003,{_id: 25143,str: "Hat mint green",num: 39365,array: [],obj: {}},"infomediaries",new Date("2018-09-06T02:41:24.425Z"),39282,40590,new Date("2018-09-05T23:50:54.941Z"),60349,new Date("2018-09-06T15:57:15.010Z"),{_id: 25144,str: "repurpose Sierra Leone Bedfordshire",date: new Date("2018-09-06T09:24:38.193Z"),obj: {_id: 25145,str: "Technician Lebanese Pound",array: [],obj: {_id: 25146,str: "Grocery actuating synthesize",num: 4329,date: new Date("2018-09-06T01:49:14.368Z")}}}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 25147,str: "recontextualize array online",num: 7113,date: new Date("2018-09-06T13:43:39.163Z"),array: [],obj: {_id: 25148,str: "copying Tactics",num: 68821,date: new Date("2018-09-06T07:36:08.556Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 25149,str: "Organic",date: new Date("2018-09-05T21:16:24.795Z"),array: [63304,"Kansas",new Date("2018-09-06T11:20:20.634Z"),"back up Checking Account",new Date("2018-09-06T19:50:28.183Z"),30153,"Denar Books Keyboard",{_id: 25150,str: "24/7 Marketing",num: 35678,date: new Date("2018-09-06T17:14:06.429Z"),array: [],obj: {_id: 25151,str: "IB Village",num: 2690,date: new Date("2018-09-06T03:35:22.807Z"),obj: {}}},new Date("2018-09-06T01:48:28.043Z"),new Date("2018-09-05T22:15:13.265Z"),14545],obj: {_id: 25152,num: 68661,date: new Date("2018-09-05T22:19:22.781Z"),array: [],obj: {_id: 25153,str: "Bedfordshire JBOD olive",num: 82578,date: new Date("2018-09-06T15:39:57.319Z"),array: []}}});
    },

    function(coll) {
        return coll.insert({_id: 25154,str: "initiatives Cheese eco-centric",num: 70835,date: new Date("2018-09-06T00:55:15.550Z"),array: [],obj: {_id: 25155,str: "experiences Director Car",num: 56610,date: new Date("2018-09-06T15:45:41.930Z"),array: [new Date("2018-09-06T03:33:47.561Z"),"architecture","Enterprise-wide Assimilated monitor",new Date("2018-09-06T07:18:52.464Z"),"solutions Gorgeous Frozen Bike bus",{_id: 25156,str: "demand-driven Mississippi Borders",num: 21443,date: new Date("2018-09-06T16:38:10.069Z"),array: [],obj: {}},67760,new Date("2018-09-06T10:51:34.882Z"),[81382,{_id: 25157,str: "Gloves Lock"},[]],new Date("2018-09-06T10:37:23.732Z"),1680,55785,"Forward SMTP Ergonomic Granite Ball"],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 25158,str: "Implemented",num: 68275,date: new Date("2018-09-06T02:13:26.196Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 25159,str: "Producer Dynamic Developer",num: 11599,date: new Date("2018-09-06T08:22:04.181Z"),array: ["azure Plastic",36261,81833,"Nakfa orchestration California",new Date("2018-09-06T13:59:24.972Z"),36345,new Date("2018-09-05T22:29:23.040Z"),[],11112,{_id: 25160,str: "Chips SCSI teal",num: 49997,array: [],obj: {}},new Date("2018-09-06T09:44:36.264Z"),{_id: 25161,str: "Grocery",num: 46605,date: new Date("2018-09-06T08:17:39.834Z"),array: [87996,[88955,{_id: 25162,date: new Date("2018-09-05T23:29:55.667Z"),array: [],obj: {_id: 25163,str: "customer loyalty violet withdrawal",date: new Date("2018-09-06T03:16:23.357Z"),obj: {}}}]],obj: {_id: 25164,str: "Soap",num: 86213,date: new Date("2018-09-06T14:07:29.948Z"),array: [new Date("2018-09-06T08:42:23.893Z")]}}],obj: {_id: 25165,str: "mobile Nebraska fault-tolerant",num: 84020,array: []}});
    },

    function(coll) {
        return coll.insert({_id: 25166,str: "maximize",num: 1229,date: new Date("2018-09-06T17:24:34.197Z"),array: [],obj: {_id: 25167,str: "Handmade envisioneer",num: 56369,date: new Date("2018-09-06T07:34:42.884Z"),array: [31706,"bypass frictionless Solutions","withdrawal",new Date("2018-09-06T05:00:57.490Z"),[]]}});
    },

    function(coll) {
        return coll.insert({_id: 25168,str: "azure",num: 69312,date: new Date("2018-09-05T21:52:08.991Z"),array: [],obj: {_id: 25169,str: "black Intelligent Steel Bacon Rhode Island",num: 70578,date: new Date("2018-09-06T19:10:41.860Z")}});
    },

    function(coll) {
        return coll.insert({_id: 25170,str: "Tools Buckinghamshire Refined",num: 52694,date: new Date("2018-09-05T23:48:39.368Z"),array: [new Date("2018-09-06T07:46:49.248Z"),"database Music THX",{_id: 25171,str: "client-server Yuan Renminbi",num: 74046,date: new Date("2018-09-06T04:42:52.677Z"),obj: {}},new Date("2018-09-06T02:55:10.862Z"),81879,{_id: 25172,num: 4035,array: [],obj: {_id: 25173,str: "SAS",num: 12178,date: new Date("2018-09-06T10:39:35.072Z"),array: [],obj: {}}},[23164,49591,"Car","turquoise"]],obj: {_id: 25174,str: "Concrete",date: new Date("2018-09-06T17:21:22.473Z")}});
    },

    function(coll) {
        return coll.insert({_id: 25175,str: "New Jersey",num: 34338,array: ["Avon Implementation Generic Granite Chips",new Date("2018-09-06T17:40:51.157Z"),70248,"District Intelligent Tasty Rubber Cheese",59969,new Date("2018-09-05T22:57:16.096Z"),"Handcrafted Fresh Pants District","Quality-focused logistical",53138,new Date("2018-09-06T01:46:22.098Z"),29562,{_id: 25176,str: "Plastic",num: 49569,date: new Date("2018-09-05T20:43:57.817Z"),array: [52166],obj: {}},new Date("2018-09-06T07:26:27.616Z")],obj: {_id: 25177,num: 16644,date: new Date("2018-09-06T01:06:48.846Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 25178,str: "payment",num: 59532,date: new Date("2018-09-06T19:09:41.945Z"),array: [],obj: {_id: 25179,str: "Avenue",num: 38402,date: new Date("2018-09-06T15:05:33.667Z"),array: [new Date("2018-09-06T01:05:50.938Z"),new Date("2018-09-06T09:05:23.039Z"),"Car ADP","Mobility Car sensor",25031,"unleash",87771,{_id: 25180,str: "bypassing overriding transmit",num: 30398,array: [],obj: {_id: 25181,str: "5th generation",date: new Date("2018-09-06T09:11:12.366Z"),array: [{_id: 25182,str: "Gorgeous Granite Cheese Profound Automotive",num: 17773,date: new Date("2018-09-06T14:53:15.273Z"),obj: {_id: 25183,num: 13445}},64569,47708,new Date("2018-09-06T12:39:11.028Z")],obj: {}}},[new Date("2018-09-06T05:04:38.220Z")],[]]}});
    },

    function(coll) {
        return coll.insert({_id: 25184,str: "Baby Dynamic",num: 25113,date: new Date("2018-09-06T14:14:50.463Z"),array: [],obj: {_id: 25185,str: "intranet",num: 50987,array: ["Paradigm","Faroe Islands",new Date("2018-09-06T03:07:20.131Z"),[],96326,"ADP experiences pricing structure",new Date("2018-09-06T19:37:02.484Z"),8854,[],79321,new Date("2018-09-05T20:20:09.921Z"),"Rubber",new Date("2018-09-06T12:20:27.570Z")],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 25186,str: "Buckinghamshire",date: new Date("2018-09-05T22:51:28.864Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 25187,str: "Bacon",date: new Date("2018-09-06T00:43:22.602Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 25188,str: "Turnpike",num: 35224,date: new Date("2018-09-06T08:05:58.008Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 25189,str: "THX Fresh granular",num: 76454,date: new Date("2018-09-06T18:58:39.523Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 25190,num: 60794,date: new Date("2018-09-06T11:52:14.027Z"),obj: {_id: 25191,str: "portals coherent",num: 85390,date: new Date("2018-09-05T22:02:28.661Z"),array: [{_id: 25192,str: "stable",num: 33489,date: new Date("2018-09-06T00:18:49.107Z"),array: [[],54701,[]],obj: {}},new Date("2018-09-05T20:58:47.230Z"),"Rubber",86285,72266,68906,{_id: 25193,str: "solid state Path Personal Loan Account",num: 89315,date: new Date("2018-09-06T17:54:39.736Z"),obj: {_id: 25194,str: "Computer",num: 9430,array: [],obj: {_id: 25195,str: "complexity Credit Card Account",date: new Date("2018-09-06T14:51:36.251Z"),array: ["dynamic service-desk"],obj: {}}}},40779,"Intelligent Frozen Gloves",new Date("2018-09-06T01:15:44.511Z"),new Date("2018-09-06T07:54:54.287Z"),new Date("2018-09-06T00:30:08.100Z")]}});
    },

    function(coll) {
        return coll.insert({_id: 25196,str: "best-of-breed Concrete envisioneer",num: 15963,date: new Date("2018-09-06T00:10:56.496Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 25197,str: "generating THX",num: 63890,date: new Date("2018-09-06T03:33:26.804Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 25198,str: "Facilitator bypassing",num: 18596,date: new Date("2018-09-05T22:14:47.693Z"),array: [],obj: {_id: 25199,str: "Jewelery",num: 63843,date: new Date("2018-09-06T05:44:33.627Z"),array: [73944,{_id: 25200,num: 99358,date: new Date("2018-09-06T06:18:10.966Z"),array: [new Date("2018-09-06T15:22:27.975Z"),"Berkshire coherent",778,13238,{_id: 25201,str: "RAM",num: 98418,date: new Date("2018-09-06T18:37:02.039Z"),obj: {}}]},{_id: 25202,str: "exuding envisioneer Connecticut"},"COM SQL","RSS Berkshire",new Date("2018-09-06T16:10:59.124Z"),new Date("2018-09-06T10:15:05.043Z"),[],new Date("2018-09-06T08:54:10.071Z"),[]]}});
    },

    function(coll) {
        return coll.insert({_id: 25203,num: 42479,date: new Date("2018-09-05T23:13:06.512Z"),array: [],obj: {_id: 25204,str: "tan",num: 2856,date: new Date("2018-09-06T19:26:36.032Z"),array: [],obj: {_id: 25205,str: "Gorgeous Metal",date: new Date("2018-09-06T06:03:26.742Z"),array: []}}});
    },

    function(coll) {
        return coll.insert({_id: 25206,num: 5284,array: [new Date("2018-09-06T03:57:26.128Z"),91735,"support Solomon Islands Dollar Buckinghamshire",5878,"internet solution","Associate Right-sized Borders",new Date("2018-09-06T14:40:27.295Z"),30298,[],new Date("2018-09-06T07:24:42.079Z"),55371,new Date("2018-09-06T05:19:06.447Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 25207,str: "Towels",date: new Date("2018-09-06T17:40:24.691Z"),array: [],obj: {_id: 25208,str: "bus",num: 34298,date: new Date("2018-09-06T14:03:18.462Z"),obj: {_id: 25209,num: 88233,date: new Date("2018-09-06T10:53:03.694Z"),obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 25210,str: "Director connect",num: 25022,array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 25211,str: "embrace Pants",num: 27778,date: new Date("2018-09-05T20:00:04.002Z"),array: [],obj: {_id: 25212,str: "Exclusive calculating",num: 52286,date: new Date("2018-09-06T01:38:10.846Z"),array: ["Automotive",new Date("2018-09-06T13:52:26.874Z"),{_id: 25213,str: "Hungary Credit Card Account SCSI",num: 41847,date: new Date("2018-09-06T18:02:56.642Z"),array: [],obj: {}},35737,[new Date("2018-09-06T12:56:25.613Z")],new Date("2018-09-06T02:31:31.045Z"),new Date("2018-09-06T07:07:29.798Z"),22124,"Optimization Car matrix",[],"withdrawal",93571],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 25214,str: "payment",num: 24180,date: new Date("2018-09-06T12:14:16.625Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 25215,str: "Steel",num: 87326,date: new Date("2018-09-06T08:18:53.472Z"),array: [],obj: {_id: 25216,num: 29444,array: ["SMTP",32496,48385,65294,new Date("2018-09-06T17:22:52.990Z"),"Chair",[],new Date("2018-09-06T13:17:39.959Z")],obj: {_id: 25217,str: "program content system",num: 86823,obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 25218,str: "Fresh Garden Executive",num: 2584,date: new Date("2018-09-06T04:36:41.572Z"),array: [54549,new Date("2018-09-06T14:43:50.457Z"),new Date("2018-09-06T04:35:29.529Z"),80133,new Date("2018-09-06T14:34:39.719Z"),"Identity exploit Cambridgeshire",68645,"hacking",74935,[],"Auto Loan Account web-readiness"],obj: {_id: 25219,str: "implementation Romania",num: 85585,date: new Date("2018-09-05T21:00:32.743Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 25220,num: 4875,date: new Date("2018-09-06T02:54:36.231Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 25221,str: "Open-source",num: 11763,date: new Date("2018-09-06T05:05:46.393Z"),array: [],obj: {_id: 25222,str: "cross-platform Small",array: [new Date("2018-09-06T04:35:35.948Z"),89562,new Date("2018-09-06T05:36:42.921Z"),{_id: 25223,str: "Plastic Optimization value-added",num: 37856,date: new Date("2018-09-06T16:27:33.946Z"),array: [],obj: {_id: 25224,str: "Officer Investor Centralized",num: 48699,date: new Date("2018-09-05T21:16:40.014Z")}},63997,new Date("2018-09-05T21:43:32.318Z"),34157,"niches",new Date("2018-09-05T22:36:42.929Z"),{_id: 25225,num: 11410},{_id: 25226,str: "concept",num: 31829,date: new Date("2018-09-06T16:37:12.617Z"),array: ["logistical",[],"Incredible Wooden Fish National","Berkshire Lodge Plastic"],obj: {}},"Tuna"],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 25227,str: "initiatives input Cotton",num: 3239,date: new Date("2018-09-06T08:12:03.940Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 25228,str: "Chair South Carolina white",num: 81016,date: new Date("2018-09-06T11:59:59.270Z"),array: [46682,new Date("2018-09-06T06:55:53.486Z"),"Bedfordshire Auto Loan Account throughput",{_id: 25229,num: 54260,date: new Date("2018-09-06T05:51:52.425Z"),array: [],obj: {}},[92868],{_id: 25230,num: 25443,date: new Date("2018-09-05T21:24:00.393Z"),obj: {_id: 25231,str: "multi-byte withdrawal Intranet",array: [62349],obj: {_id: 25232,str: "Practical copy Tuvalu",num: 21704,date: new Date("2018-09-06T05:37:43.770Z"),array: []}}},29926,new Date("2018-09-06T05:01:45.577Z"),"Lead",new Date("2018-09-06T04:33:00.472Z"),"impactful infrastructures"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 25233,str: "User-centric Malta",num: 12238,date: new Date("2018-09-06T05:32:55.593Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 25234,str: "Credit Card Account Branding",num: 30441,date: new Date("2018-09-06T19:26:52.871Z"),array: [],obj: {_id: 25235,num: 92072,date: new Date("2018-09-06T00:05:19.585Z"),array: [64720,"Pennsylvania Soft hack",60116,58518,[new Date("2018-09-06T10:37:39.643Z"),{_id: 25236,str: "Money Market Account value-added Kansas",num: 76067,date: new Date("2018-09-06T09:09:08.548Z"),array: [new Date("2018-09-05T22:29:57.175Z"),"reintermediate"],obj: {}},"magenta",[],new Date("2018-09-06T02:17:26.396Z")],{_id: 25237,str: "architect maximized Qatar",num: 80530,date: new Date("2018-09-06T09:57:40.867Z"),array: [21199],obj: {}},new Date("2018-09-05T23:10:43.137Z"),new Date("2018-09-06T06:13:08.041Z"),{_id: 25238,str: "Officer Developer",obj: {}},41104,"compress Avon invoice"],obj: {_id: 25239,str: "mobile bus transmit"}}});
    },

    function(coll) {
        return coll.insert({_id: 25240,str: "Ergonomic Soft Soap Bedfordshire",num: 46887,date: new Date("2018-09-05T22:00:25.225Z"),array: [],obj: {_id: 25241,str: "Phased",date: new Date("2018-09-06T04:03:52.266Z"),array: [77008,[],new Date("2018-09-06T13:59:25.463Z"),{_id: 25242,str: "Colorado Tennessee",num: 29217,array: [["Decentralized Lake Soap",[],27087],"Tennessee",{_id: 25243,num: 71055,date: new Date("2018-09-06T09:45:54.129Z"),obj: {_id: 25244,str: "next-generation Specialist",array: [],obj: {}}},new Date("2018-09-06T13:11:55.080Z")]},new Date("2018-09-06T02:28:25.429Z"),342,new Date("2018-09-06T12:28:26.639Z"),"Liaison",new Date("2018-09-05T19:55:31.535Z"),new Date("2018-09-06T05:27:58.335Z"),[35152,25518],"Loaf Tanzanian Shilling"]}});
    },

    function(coll) {
        return coll.insert({_id: 25245,str: "connect",num: 77124,date: new Date("2018-09-06T13:56:21.471Z"),array: [20205,49992,{_id: 25246,str: "South Carolina Finland",num: 47496,date: new Date("2018-09-06T13:08:28.934Z"),array: [new Date("2018-09-06T12:44:09.792Z")],obj: {_id: 25247,date: new Date("2018-09-06T00:13:58.245Z"),array: [],obj: {_id: 25248,str: "wireless",num: 11396,date: new Date("2018-09-06T02:19:00.875Z"),array: [new Date("2018-09-06T01:59:40.812Z"),[],new Date("2018-09-06T02:03:38.417Z")],obj: {}}}},20960,"transmit Belarus",new Date("2018-09-06T18:06:35.287Z"),"payment","Associate",10015,[],[],"connect Iceland Krona",{_id: 25249,str: "IB digital array",num: 10892,date: new Date("2018-09-06T14:36:06.510Z"),array: [new Date("2018-09-06T16:44:03.645Z"),{_id: 25250,str: "Investment Account",num: 54437,date: new Date("2018-09-06T00:11:02.933Z")},"override",[new Date("2018-09-06T15:43:46.974Z"),{_id: 25251,str: "Borders",date: new Date("2018-09-06T09:44:11.371Z")},"Cotton"]],obj: {_id: 25252,num: 91692,date: new Date("2018-09-06T18:51:03.770Z"),array: [72290]}}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 25253,str: "olive Orchestrator deposit",num: 90819,date: new Date("2018-09-05T20:27:29.637Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 25254,str: "Manager iterate microchip",num: 46577,date: new Date("2018-09-05T20:04:24.860Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 25255,str: "Progressive",num: 57003,date: new Date("2018-09-06T03:05:03.673Z"),array: ["open-source navigate drive",86138,"Communications Rubber primary",new Date("2018-09-06T14:07:03.915Z"),new Date("2018-09-06T14:01:00.640Z"),[new Date("2018-09-06T13:33:00.275Z"),23596,[[],"system-worthy"],new Date("2018-09-06T14:40:12.884Z"),26602,new Date("2018-09-06T12:52:16.262Z"),"Persevering Fresh"],{_id: 25256,str: "IB deposit",date: new Date("2018-09-06T07:42:14.846Z"),array: [],obj: {}}]});
    },

    function(coll) {
        return coll.insert({_id: 25257,str: "XSS wireless optical",num: 94515,date: new Date("2018-09-06T09:28:08.832Z"),array: [79362,new Date("2018-09-05T21:36:54.339Z"),{_id: 25258,str: "vertical Ergonomic Cotton",date: new Date("2018-09-06T17:27:00.639Z"),array: []},"Ways Operative","France New Israeli Sheqel",67718,new Date("2018-09-06T02:43:23.098Z"),"embrace cross-platform",new Date("2018-09-06T05:04:32.779Z"),[],48837],obj: {_id: 25259,num: 59393,date: new Date("2018-09-06T09:52:52.109Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 25260,str: "Guarani",num: 83475,date: new Date("2018-09-05T22:37:04.984Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 25261,str: "communities",num: 28717,date: new Date("2018-09-05T23:03:02.927Z"),array: [new Date("2018-09-05T22:20:55.837Z"),23855,new Date("2018-09-06T10:34:25.648Z"),"AI","TCP",new Date("2018-09-06T07:35:00.307Z"),new Date("2018-09-06T13:26:13.830Z"),96081,38209,[new Date("2018-09-05T20:16:59.360Z"),{_id: 25262,str: "Borders Checking Account engineer",num: 95375,date: new Date("2018-09-05T22:31:07.553Z"),array: []}],{_id: 25263,str: "payment sky blue",num: 51706,date: new Date("2018-09-06T00:25:27.299Z"),array: [33821,61627],obj: {_id: 25264,num: 34285,obj: {}}},4277],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 25265,str: "Fantastic Home",num: 37554,date: new Date("2018-09-06T07:57:08.658Z"),array: ["Accounts systems Savings Account",55630,{_id: 25266,str: "ADP application International",num: 95778,array: ["systemic Concrete"]},new Date("2018-09-06T17:47:33.965Z"),"Jordan",{_id: 25267,str: "Wallis and Futuna Baby PCI",date: new Date("2018-09-06T00:12:39.459Z"),obj: {_id: 25268,str: "JBOD",num: 92906,array: [],obj: {}}},new Date("2018-09-06T11:13:27.948Z"),59803,"Madagascar",90387,18138]});
    },

    function(coll) {
        return coll.insert({_id: 25269,str: "monitor",date: new Date("2018-09-06T16:21:39.320Z"),array: [3428,"silver",[],"copy","haptic",[new Date("2018-09-06T14:41:58.028Z"),4435,new Date("2018-09-06T08:04:03.951Z"),new Date("2018-09-06T19:13:31.535Z")],23110],obj: {_id: 25270,str: "Corporate",num: 20757,array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 25271,str: "backing up Profound Hat",num: 73619,date: new Date("2018-09-06T02:52:56.007Z"),array: [new Date("2018-09-06T14:59:44.506Z"),"mindshare",15901,"Electronics Small Plastic Tuna",75939,new Date("2018-09-06T12:00:36.875Z"),"Taiwan",{_id: 25272,str: "directional",num: 34445,date: new Date("2018-09-06T01:37:38.946Z"),array: [],obj: {}},"Hryvnia Comoro Franc","Front-line matrices pixel",{_id: 25273,str: "4th generation Cotton Intelligent",num: 12468,date: new Date("2018-09-06T07:59:20.698Z"),array: [83454],obj: {_id: 25274,str: "connecting Tactics",date: new Date("2018-09-06T13:57:03.324Z"),array: []}}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 25275,str: "invoice Liaison",num: 90935,date: new Date("2018-09-06T00:16:58.348Z"),obj: {_id: 25276,str: "unleash Oklahoma",array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 25277,str: "harness",num: 59434,date: new Date("2018-09-06T04:19:40.744Z"),array: [67914,"parse web-enabled Ergonomic",new Date("2018-09-06T08:49:28.785Z"),new Date("2018-09-05T22:27:35.235Z"),{_id: 25278,str: "success",num: 45136,date: new Date("2018-09-06T12:45:00.282Z"),array: [[],"tan",54631,"Cotton"],obj: {_id: 25279,str: "Savings Account Home Loan Account",num: 6072,array: [],obj: {}}},new Date("2018-09-06T19:13:45.166Z"),"motivating Shoes",46235,44579],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 25280,str: "intangible Regional next generation",num: 3505,date: new Date("2018-09-05T22:19:21.435Z"),array: [67868,56816,["Direct Paradigm",63804],"Kentucky deposit",new Date("2018-09-06T03:50:24.165Z"),{_id: 25281,num: 19396,date: new Date("2018-09-06T06:06:42.216Z"),obj: {_id: 25282,str: "bypass hack",obj: {}}},"Shoes","distributed Internal Small Rubber Computer",{_id: 25283,str: "override Chief",num: 83342,date: new Date("2018-09-06T04:42:22.946Z"),array: []},new Date("2018-09-06T06:19:09.448Z"),"expedite",{_id: 25284,num: 35515,date: new Date("2018-09-06T18:47:19.539Z"),array: [{_id: 25285,str: "Identity Borders ADP",num: 33498,date: new Date("2018-09-06T06:44:44.830Z"),array: [60654]}],obj: {_id: 25286,str: "human-resource payment coherent",num: 37994,date: new Date("2018-09-06T12:38:32.614Z"),array: [],obj: {}}},"instruction set interactive Key",new Date("2018-09-06T08:17:10.123Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 25287,str: "channels",num: 77858,date: new Date("2018-09-06T11:26:04.556Z"),array: [59667,"indexing Paradigm",[],new Date("2018-09-06T12:23:02.424Z"),new Date("2018-09-06T05:16:53.855Z"),[{_id: 25288,str: "disintermediate",num: 87643,date: new Date("2018-09-06T13:53:21.811Z"),array: [32126,new Date("2018-09-06T13:07:14.120Z"),8549],obj: {_id: 25289,str: "bluetooth",date: new Date("2018-09-06T04:21:55.216Z"),obj: {_id: 25290,str: "initiatives",num: 83279,date: new Date("2018-09-06T12:27:05.119Z"),array: [],obj: {}}}},{_id: 25291,str: "Berkshire eco-centric",num: 61676,obj: {}},"compress relationships Licensed"],7847,[],{_id: 25292,str: "online",date: new Date("2018-09-06T13:45:31.749Z"),array: []},new Date("2018-09-05T21:42:08.293Z"),"Computer Optimization Savings Account"]});
    },

    function(coll) {
        return coll.insert({_id: 25293,str: "bypassing Toys",num: 36621,date: new Date("2018-09-05T21:48:50.702Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 25294,str: "Fundamental Assistant",num: 59632,date: new Date("2018-09-06T02:14:21.829Z"),array: [],obj: {_id: 25295,str: "District",date: new Date("2018-09-05T20:24:30.345Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 25296,str: "FTP Investment Account Shirt",num: 86424,date: new Date("2018-09-06T17:35:30.755Z"),array: [],obj: {_id: 25297,str: "Internal solution-oriented Denar",num: 54020,date: new Date("2018-09-06T00:51:23.405Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 25298,str: "Plastic invoice",num: 45980,date: new Date("2018-09-06T13:16:40.931Z"),array: [[],99408,"Planner",new Date("2018-09-06T15:24:31.376Z"),"open system Extension",new Date("2018-09-05T23:16:05.190Z"),new Date("2018-09-06T11:17:06.658Z"),[85224,28653],"Vermont","red Steel",{_id: 25299,str: "River Legacy",num: 79752,date: new Date("2018-09-06T07:53:25.721Z"),array: [[]]}],obj: {_id: 25300,str: "Wooden facilitate",num: 33914,date: new Date("2018-09-06T12:41:52.893Z"),array: [{_id: 25301,str: "Mayotte Somali Shilling Specialist",num: 88003,obj: {}},3951,25122,"indigo Valley"],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 25302,str: "hard drive Lithuania",num: 17199,date: new Date("2018-09-06T07:35:27.373Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 25303,str: "hack Bedfordshire payment",num: 80227,date: new Date("2018-09-05T22:19:20.832Z"),array: ["circuit",[79498],new Date("2018-09-06T11:10:46.551Z"),"architectures",new Date("2018-09-06T15:07:20.633Z"),64556,{_id: 25304,str: "Bosnia and Herzegovina",date: new Date("2018-09-05T23:41:36.483Z"),array: [],obj: {}},"Union program",{_id: 25305,str: "Massachusetts Wisconsin",num: 83812,array: [],obj: {}},72106,new Date("2018-09-06T04:57:54.553Z"),{_id: 25306,str: "HDD Intelligent Steel Computer",num: 23403,date: new Date("2018-09-06T14:11:51.818Z"),array: ["invoice",new Date("2018-09-06T07:38:11.937Z")],obj: {_id: 25307,str: "deposit Granite",date: new Date("2018-09-06T02:53:45.453Z"),obj: {_id: 25308,num: 97887,date: new Date("2018-09-06T16:39:29.155Z"),obj: {_id: 25309,num: 86597,date: new Date("2018-09-06T12:39:58.018Z"),array: []}}}},[],"Group",new Date("2018-09-06T02:57:34.129Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 25310,str: "Regional",num: 56568,date: new Date("2018-09-05T21:12:05.199Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 25311,num: 9853,array: [{_id: 25312,str: "synthesize",date: new Date("2018-09-06T13:40:09.670Z"),array: [],obj: {}},96463,new Date("2018-09-06T18:00:03.091Z"),new Date("2018-09-06T06:54:15.534Z"),"North Korean Won",28544,[],96576,"Avon bleeding-edge","killer Plastic",[],new Date("2018-09-06T15:33:05.027Z"),"challenge Avon"],obj: {_id: 25313,str: "Tactics asynchronous heuristic",num: 74779,date: new Date("2018-09-06T05:07:24.003Z")}});
    },

    function(coll) {
        return coll.insert({_id: 25314,str: "intranet IB",num: 52504,date: new Date("2018-09-06T04:09:04.380Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 25315,str: "Accountability",num: 76822,date: new Date("2018-09-06T01:08:15.453Z"),array: [new Date("2018-09-06T10:24:58.079Z"),20545,36338,46721,"open-source Jamaica Wisconsin","Canadian Dollar",{_id: 25316,str: "navigating vortals"},"input Crossroad full-range",61581,[]],obj: {_id: 25317,str: "COM tan",num: 75972,date: new Date("2018-09-06T03:34:46.426Z"),array: [],obj: {_id: 25318,str: "leverage Gabon Canadian Dollar",num: 7524,obj: {_id: 25319,num: 18863,date: new Date("2018-09-06T13:31:37.960Z"),array: [new Date("2018-09-06T07:56:15.328Z"),"web-readiness SAS"]}}}});
    },

    function(coll) {
        return coll.insert({_id: 25320,str: "Legacy copying",num: 49173,date: new Date("2018-09-06T12:50:54.775Z"),array: [new Date("2018-09-06T18:56:52.049Z"),40723,"optical Planner",42187,"Kiribati interfaces empowering",new Date("2018-09-06T14:48:51.738Z"),"Drive Liaison cultivate","Handcrafted Granite Tuna",[],"Granite",{_id: 25321,str: "scalable utilize",array: [new Date("2018-09-06T15:41:06.992Z"),[],"Savings Account Plastic process improvement"]}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 25322,str: "turquoise Concrete",num: 18859,date: new Date("2018-09-06T04:30:12.202Z"),obj: {_id: 25323,str: "Specialist Japan Checking Account",date: new Date("2018-09-06T10:46:45.741Z"),array: ["Refined Fresh Computer Investor",new Date("2018-09-06T04:10:09.404Z"),{_id: 25324,num: 51624,obj: {_id: 25325,num: 25084,array: []}},new Date("2018-09-06T03:59:03.167Z"),6659,[],"microchip","Credit Card Account",33100,new Date("2018-09-06T11:16:51.434Z"),"scalable Avon Incredible Soft Shirt",15757],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 25326,str: "Investment Account",num: 88687,date: new Date("2018-09-06T10:02:53.492Z"),array: ["Incredible Mouse Ergonomic Granite Towels",new Date("2018-09-06T19:15:51.634Z"),54184,87883,{_id: 25327,str: "CFP Franc XML",num: 52280,date: new Date("2018-09-06T19:31:56.891Z"),array: [],obj: {_id: 25328,str: "Agent Regional Metal",num: 43033,date: new Date("2018-09-06T16:35:10.812Z"),array: [new Date("2018-09-06T08:42:34.666Z"),["supply-chains Product","United States of America JSON Lead"]],obj: {}}},new Date("2018-09-05T22:50:57.516Z"),{_id: 25329,date: new Date("2018-09-06T16:17:54.057Z"),array: []},{_id: 25330,str: "Technician magenta",num: 74619,obj: {_id: 25331,array: [],obj: {}}},{_id: 25332,str: "uniform Metrics Frozen",num: 149,date: new Date("2018-09-05T21:42:34.054Z"),array: [],obj: {_id: 25333,str: "Persistent"}},new Date("2018-09-06T16:15:59.167Z"),new Date("2018-09-06T19:32:41.794Z"),[],11217],obj: {_id: 25334,date: new Date("2018-09-05T23:40:32.928Z"),array: ["generating Personal Loan Account",new Date("2018-09-06T17:16:07.618Z")]}});
    },

    function(coll) {
        return coll.insert({_id: 25335,str: "AGP payment",num: 22829,date: new Date("2018-09-06T06:57:25.668Z"),array: [],obj: {_id: 25336,str: "Home Loan Account radical Trail",date: new Date("2018-09-06T09:48:02.406Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 25337,str: "Awesome Frozen Hat Cotton Berkshire",num: 32881,date: new Date("2018-09-06T11:12:16.373Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 25338,str: "Computer markets",num: 89909,date: new Date("2018-09-06T05:25:13.496Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 25339,str: "portals",num: 69402,date: new Date("2018-09-06T10:48:49.854Z"),array: [],obj: {_id: 25340,str: "invoice plum bypass",num: 36381,date: new Date("2018-09-06T01:37:50.918Z"),array: ["parsing",7445,"Italy haptic",54215,{_id: 25341,str: "black Technician",num: 38248,array: []},[new Date("2018-09-06T19:54:56.120Z"),new Date("2018-09-06T02:46:16.814Z"),"yellow Congolese Franc Tuna",new Date("2018-09-06T09:58:36.456Z"),78153],new Date("2018-09-06T07:58:29.084Z"),35528],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 25342,str: "Automated Cambridgeshire",num: 8052,date: new Date("2018-09-06T04:38:00.817Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 25343,str: "Bedfordshire Ball COM",num: 19641,date: new Date("2018-09-06T04:02:36.594Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 25344,str: "Hawaii",num: 53674,date: new Date("2018-09-06T16:48:54.350Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 25345,str: "Bedfordshire",num: 27505,date: new Date("2018-09-05T19:59:33.556Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 25346,str: "Algeria Jewelery",date: new Date("2018-09-06T14:26:40.198Z"),array: [],obj: {_id: 25347,str: "help-desk Gourde US Dollar maroon",num: 34530,date: new Date("2018-09-06T19:03:36.495Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 25348,str: "bluetooth Unbranded Rubber Bacon",num: 53851,date: new Date("2018-09-06T01:49:35.668Z"),array: [82309,{_id: 25349,str: "Awesome efficient e-enable",num: 86890,date: new Date("2018-09-06T08:39:38.064Z"),array: [],obj: {}},"Berkshire",new Date("2018-09-06T16:27:58.012Z"),"Metrics Handcrafted indexing",new Date("2018-09-06T14:31:52.241Z"),["override Savings Account incubate",[],new Date("2018-09-05T20:14:45.987Z")],"Rubber JSON Wooden",4170,new Date("2018-09-06T09:38:28.311Z"),26037],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 25350,str: "Moldova navigating",num: 58280,date: new Date("2018-09-06T07:53:14.937Z"),array: [97036,"Wisconsin payment",{_id: 25351,str: "Rustic Fresh Pants workforce programming",num: 88024,date: new Date("2018-09-05T22:47:45.555Z"),array: [],obj: {}},new Date("2018-09-06T12:59:27.110Z"),"value-added end-to-end","hard drive",new Date("2018-09-06T16:58:09.976Z"),64442,{_id: 25352,str: "Salad",num: 92627,array: [new Date("2018-09-06T14:29:41.851Z"),"Money Market Account"]},23171],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 25353,str: "Mexican Peso Mexican Unidad de Inversion (UDI) Checking Account",date: new Date("2018-09-06T13:08:18.789Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 25354,num: 92270,date: new Date("2018-09-05T22:31:25.997Z"),array: ["architect",new Date("2018-09-06T15:14:08.391Z"),"Fields user-facing Garden",32000,new Date("2018-09-06T03:18:56.562Z"),99423,{_id: 25355,str: "New York synthesize",num: 48435,date: new Date("2018-09-06T18:33:30.158Z"),array: [46907,[],new Date("2018-09-05T20:27:37.736Z"),new Date("2018-09-06T00:43:02.185Z"),91871,"Rustic generate",[],{_id: 25356,str: "Ford",num: 28459,date: new Date("2018-09-06T19:52:09.745Z"),obj: {}}],obj: {_id: 25357,str: "Avon Ball Automated",num: 59754,date: new Date("2018-09-06T10:48:03.488Z"),array: []}},["partnerships synthesize Berkshire"],[]],obj: {_id: 25358,str: "auxiliary Fantastic",array: [31806]}});
    },

    function(coll) {
        return coll.insert({_id: 25359,str: "fuchsia",num: 55647,date: new Date("2018-09-06T04:41:58.411Z"),array: [9087,new Date("2018-09-06T16:50:45.788Z"),[],50805,["Dynamic Drive HDD",new Date("2018-09-06T16:51:54.668Z"),98205,new Date("2018-09-05T23:28:59.188Z")],{_id: 25360,str: "experiences multi-byte iterate",num: 79637,date: new Date("2018-09-06T10:24:00.034Z"),obj: {_id: 25361,str: "robust",num: 55722,date: new Date("2018-09-06T05:15:16.057Z"),array: [],obj: {}}},"Investment Account","maroon",{_id: 25362,str: "bottom-line Congo customer loyalty",num: 55421,array: [],obj: {}}],obj: {_id: 25363,date: new Date("2018-09-06T18:36:08.660Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 25364,str: "bypass copying indexing",num: 74519,date: new Date("2018-09-06T18:29:42.408Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 25365,str: "orchid",num: 48606,date: new Date("2018-09-06T12:20:46.748Z"),array: [new Date("2018-09-06T03:45:10.677Z"),"Tuna indexing",new Date("2018-09-06T13:52:07.509Z"),"SDD backing up",17322,44551,[],{_id: 25366,str: "Rand Namibia Dollar",num: 6379,date: new Date("2018-09-06T00:41:09.104Z"),array: ["array",[]],obj: {}},[36462],{_id: 25367,num: 1420,array: [],obj: {_id: 25368,num: 61286,date: new Date("2018-09-06T07:06:44.558Z"),array: []}},new Date("2018-09-05T21:42:15.697Z"),50046]});
    },

    function(coll) {
        return coll.insert({_id: 25369,num: 2500,date: new Date("2018-09-05T21:19:45.097Z"),array: [27981,33127,new Date("2018-09-06T03:30:00.699Z"),"online",new Date("2018-09-05T22:13:06.149Z"),56773,new Date("2018-09-06T05:33:35.884Z"),61375,new Date("2018-09-06T09:03:41.635Z"),{_id: 25370,str: "microchip",num: 68141,date: new Date("2018-09-06T07:01:40.970Z"),array: [],obj: {_id: 25371,str: "Money Market Account",num: 72529,array: [{_id: 25372,num: 12607,array: [],obj: {}},"Estates Investment Account",[86794]],obj: {_id: 25373,str: "Checking Account",date: new Date("2018-09-05T22:49:31.365Z"),obj: {}}}},{_id: 25374,str: "Tanzanian Shilling Investor",num: 50724,array: []},"Rwanda Franc",new Date("2018-09-06T16:40:10.223Z")],obj: {_id: 25375,str: "transmitting Sports calculating",date: new Date("2018-09-06T09:59:26.706Z"),array: [["synthesize invoice",24555,[],[]],"Afghanistan Pound Sterling real-time"]}});
    },

    function(coll) {
        return coll.insert({_id: 25376,str: "Ergonomic Rubber Soap system Oklahoma",num: 89006,date: new Date("2018-09-05T23:42:45.018Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 25377,str: "Factors mobile",num: 65423,date: new Date("2018-09-06T18:43:14.877Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 25378,str: "Inverse Swiss Franc",num: 52588,date: new Date("2018-09-05T23:14:27.066Z"),array: [new Date("2018-09-06T04:44:13.522Z"),"Money Market Account Bermudian Dollar (customarily known as Bermuda Dollar)",new Date("2018-09-06T17:07:09.039Z"),"Garden portals Fresh",71642,new Date("2018-09-06T09:04:32.766Z"),45843,new Date("2018-09-06T10:56:20.105Z"),99756],obj: {_id: 25379,str: "Marketing Personal Loan Account quantifying",num: 43276,date: new Date("2018-09-06T09:32:33.002Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 25380,num: 96639,date: new Date("2018-09-06T18:28:43.914Z"),array: [],obj: {_id: 25381,array: [new Date("2018-09-06T06:25:52.129Z"),"Car",74665,"Brazilian Real Money Market Account mint green",{_id: 25382,str: "compressing Montana",num: 49348,date: new Date("2018-09-06T15:22:50.967Z"),array: [90518,"Bedfordshire Computers",46837,"1080p",13596,new Date("2018-09-06T16:19:52.548Z"),new Date("2018-09-06T02:30:57.902Z")]},[],"Buckinghamshire National",[{_id: 25383,str: "Cayman Islands relationships methodologies",num: 53295,date: new Date("2018-09-06T07:55:27.083Z"),array: [],obj: {}},new Date("2018-09-06T12:14:38.020Z")],{_id: 25384,str: "Automotive Ohio",date: new Date("2018-09-06T01:56:20.635Z"),array: [],obj: {}}],obj: {_id: 25385,num: 47723,date: new Date("2018-09-06T11:59:01.596Z"),obj: {_id: 25386,str: "Automotive North Carolina Tuvalu",num: 8680,date: new Date("2018-09-06T15:53:22.892Z")}}}});
    },

    function(coll) {
        return coll.insert({_id: 25387,str: "deposit synergies array",num: 51343,date: new Date("2018-09-06T05:09:41.061Z"),array: [62144,90942,"Credit Card Account Colombian Peso Unidad de Valor Real cutting-edge",new Date("2018-09-06T01:00:52.376Z"),new Date("2018-09-05T22:53:59.256Z"),new Date("2018-09-06T15:15:24.912Z"),new Date("2018-09-05T21:55:56.071Z"),25141,[],"scale Minnesota matrix",{_id: 25388,str: "paradigms microchip Sausages",num: 74669,array: []},42654],obj: {_id: 25389,str: "Handcrafted",num: 79470,obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 25390,str: "Sleek Rubber Bacon",num: 34967,date: new Date("2018-09-06T02:34:39.264Z"),array: ["Frozen overriding Chicken",[51361,new Date("2018-09-06T11:22:13.547Z"),"Director"],"HTTP",new Date("2018-09-06T02:19:39.133Z"),{_id: 25391,str: "Money Market Account",num: 5886,obj: {}},8154,new Date("2018-09-06T11:55:35.765Z"),"Infrastructure override process improvement",new Date("2018-09-06T17:50:20.878Z"),new Date("2018-09-06T12:31:21.900Z"),66486],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 25392,str: "bleeding-edge Tanzanian Shilling Sleek",num: 22644,date: new Date("2018-09-06T01:37:23.486Z"),obj: {_id: 25393,date: new Date("2018-09-05T23:20:40.470Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 25394,str: "application",num: 11135,date: new Date("2018-09-06T03:10:17.617Z"),array: ["matrix",47061,new Date("2018-09-06T12:39:36.293Z"),"Response bypassing","calculating Refined Rubber Mouse",27289,new Date("2018-09-06T15:09:26.317Z"),"Bedfordshire JBOD",[48968,51014],new Date("2018-09-06T14:02:28.263Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 25395,str: "neural Generic",num: 70788,date: new Date("2018-09-06T16:08:27.627Z"),array: [],obj: {_id: 25396,str: "sensor Plastic",num: 56969,array: [new Date("2018-09-06T12:55:24.287Z"),"Stand-alone",68821,{_id: 25397,str: "user-centric Loop",num: 53715,date: new Date("2018-09-06T02:38:36.732Z"),array: []},74766,22168,new Date("2018-09-06T12:17:47.058Z"),6208,new Date("2018-09-06T13:39:04.075Z"),"focus group",[new Date("2018-09-06T16:01:50.569Z")],new Date("2018-09-06T03:11:23.156Z"),"maroon azure"],obj: {_id: 25398,date: new Date("2018-09-05T20:01:56.235Z")}}});
    },

    function(coll) {
        return coll.insert({_id: 25399,str: "white",num: 30024,date: new Date("2018-09-06T07:18:40.424Z"),array: [],obj: {_id: 25400,str: "Electronics",date: new Date("2018-09-06T14:08:51.251Z"),array: [80622,"Dobra Maine",new Date("2018-09-05T20:06:19.936Z"),"Republic of Korea yellow",[6238,new Date("2018-09-06T09:06:39.006Z")],6983,[{_id: 25401,str: "Louisiana Practical Concrete",num: 59456,date: new Date("2018-09-05T19:57:00.528Z"),obj: {}},"Clothing",60244,new Date("2018-09-05T23:01:50.552Z"),"Tasty Pizza"],new Date("2018-09-06T09:45:05.078Z"),new Date("2018-09-06T11:11:31.457Z"),new Date("2018-09-05T20:27:18.762Z"),{_id: 25402,num: 67517,date: new Date("2018-09-05T20:16:18.082Z"),array: []}],obj: {_id: 25403,str: "Brand Agent",num: 32146,date: new Date("2018-09-06T01:36:49.070Z"),array: []}}});
    },

    function(coll) {
        return coll.insert({_id: 25404,str: "Focused Eritrea circuit",num: 13847,date: new Date("2018-09-06T13:19:14.570Z"),array: ["Branding program Designer","Pizza withdrawal Gorgeous",{_id: 25405,str: "Soft withdrawal Chips",num: 50508,date: new Date("2018-09-06T03:52:50.268Z"),array: [{_id: 25406,str: "TCP",num: 29122,date: new Date("2018-09-05T23:15:29.082Z"),array: [new Date("2018-09-06T08:41:23.398Z"),61613],obj: {_id: 25407,str: "Fantastic",num: 97701}},new Date("2018-09-06T02:34:25.797Z"),new Date("2018-09-06T17:18:48.315Z"),16699],obj: {}},"Agent Towels",63319,22549,[],"EXE PCI withdrawal",[],{_id: 25408,obj: {_id: 25409,num: 25164,array: [],obj: {_id: 25410,str: "Kentucky payment",num: 65479,date: new Date("2018-09-06T11:52:21.908Z"),array: ["value-added Handmade"],obj: {_id: 25411,str: "Garden Oregon"}}}}]});
    },

    function(coll) {
        return coll.insert({_id: 25412,str: "Research",array: []});
    },

    function(coll) {
        return coll.insert({_id: 25413,str: "Shoes",num: 69765,date: new Date("2018-09-05T21:27:19.465Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 25414,str: "navigate Passage",num: 36694,date: new Date("2018-09-06T10:55:37.605Z"),array: ["Reverse-engineered hub virtual","Seamless",{_id: 25415,str: "SMTP Fantastic Rubber Soap",date: new Date("2018-09-06T04:39:56.982Z"),obj: {}},4278,new Date("2018-09-06T08:21:57.152Z"),"Drive Delaware auxiliary",33901,[],{_id: 25416,num: 45096,date: new Date("2018-09-05T23:59:56.744Z"),array: [],obj: {_id: 25417,str: "Towels",num: 77918,date: new Date("2018-09-06T18:42:19.464Z"),array: [],obj: {_id: 25418,str: "Inverse RSS Representative",num: 98800,array: [],obj: {_id: 25419,str: "Fantastic Metal Salad Associate Refined Plastic Keyboard",date: new Date("2018-09-06T09:39:03.004Z"),array: [new Date("2018-09-06T06:36:09.583Z")]}}}},"violet Solutions",[],new Date("2018-09-06T14:56:40.169Z"),new Date("2018-09-06T16:56:00.998Z"),2113]});
    },

    function(coll) {
        return coll.insert({_id: 25420,str: "Mozambique override Function-based",num: 54068,date: new Date("2018-09-06T03:09:41.754Z"),array: [],obj: {_id: 25421,str: "Handcrafted clear-thinking",num: 53481,array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 25422,str: "paradigm",num: 54935,date: new Date("2018-09-06T18:32:45.675Z"),array: [],obj: {_id: 25423,num: 43404,date: new Date("2018-09-06T01:53:36.073Z"),array: [66690,20383,new Date("2018-09-06T00:39:51.026Z"),{_id: 25424,str: "challenge",date: new Date("2018-09-06T07:49:56.058Z"),array: [],obj: {_id: 25425,str: "Path",num: 42115,array: ["Berkshire policy Bedfordshire",[]],obj: {}}},new Date("2018-09-06T10:55:54.375Z"),"Factors Garden",new Date("2018-09-06T04:54:09.177Z"),"Liaison",new Date("2018-09-06T15:48:31.758Z"),["attitude",9936]],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 25426,num: 45009,date: new Date("2018-09-06T14:38:27.416Z"),array: [],obj: {_id: 25427,str: "Savings Account Licensed Metal Car gold",num: 94083,date: new Date("2018-09-06T16:39:44.866Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 25428,str: "Internal solid state",num: 21151,date: new Date("2018-09-06T11:15:20.061Z"),array: ["extend B2B",[{_id: 25429,str: "Tools",date: new Date("2018-09-05T23:58:51.449Z"),array: []},new Date("2018-09-06T09:15:09.327Z")],"Berkshire Manors card",{_id: 25430,str: "navigate",num: 73316,date: new Date("2018-09-06T18:29:23.703Z"),array: [],obj: {}},new Date("2018-09-06T19:17:45.748Z"),new Date("2018-09-06T07:46:48.047Z"),35072,new Date("2018-09-06T06:48:40.206Z"),44534,10000,10518,"PNG"]});
    },

    function(coll) {
        return coll.insert({_id: 25431,str: "Accountability interface",num: 44946,date: new Date("2018-09-06T19:47:36.897Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 25432,str: "Auto Loan Account",num: 53301,date: new Date("2018-09-06T19:09:38.612Z"),array: [61300,"back-end",15282,97206,"hard drive Metal",new Date("2018-09-06T17:36:30.662Z"),{_id: 25433,str: "User-friendly District",num: 34662,date: new Date("2018-09-05T21:43:13.011Z"),array: [],obj: {_id: 25434,str: "Self-enabling",num: 90812,date: new Date("2018-09-05T20:34:08.989Z"),obj: {}}},[],new Date("2018-09-06T05:31:43.394Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 25435,str: "Barbados Table",num: 43214,date: new Date("2018-09-06T00:28:06.153Z"),array: [],obj: {_id: 25436,str: "azure generate Awesome",date: new Date("2018-09-06T02:52:30.274Z"),array: ["monetize Handmade Granite Shirt Money Market Account","magenta Mouse",9659,88539,new Date("2018-09-06T10:43:23.615Z"),{_id: 25437,str: "matrix programming Data",date: new Date("2018-09-06T10:54:17.754Z"),obj: {}},new Date("2018-09-06T04:36:27.352Z"),"Aruban Guilder Awesome Metal Computer"]}});
    },

    function(coll) {
        return coll.insert({_id: 25438,str: "mobile transmitting",num: 65117,date: new Date("2018-09-06T11:23:06.633Z"),obj: {_id: 25439,str: "Applications Analyst seamless",num: 33518,date: new Date("2018-09-06T10:18:29.964Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 25440,str: "Product discrete Face to face",num: 28319,date: new Date("2018-09-06T16:22:33.574Z"),obj: {_id: 25441,str: "reinvent",num: 45244,date: new Date("2018-09-05T22:03:13.116Z"),array: [new Date("2018-09-06T12:21:51.488Z"),new Date("2018-09-06T12:24:21.207Z"),59669,"focus group Pike",["envisioneer e-tailers"],10106,19789,{_id: 25442,str: "AGP",num: 15901,date: new Date("2018-09-06T10:13:47.838Z"),array: [],obj: {_id: 25443,str: "Avon index feed",obj: {}}},[new Date("2018-09-06T01:48:40.331Z"),99609],"Legacy",new Date("2018-09-06T05:04:37.193Z"),28373],obj: {_id: 25444,num: 30662,date: new Date("2018-09-06T06:01:27.535Z"),array: [],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 25445,str: "Central Metal",num: 3684,date: new Date("2018-09-06T12:46:02.776Z"),array: [31278,new Date("2018-09-06T19:38:04.027Z"),55891,[],new Date("2018-09-06T04:31:46.246Z"),"Executive bluetooth Visionary","generating Coordinator Optimization",new Date("2018-09-06T03:58:07.622Z"),[],new Date("2018-09-05T22:30:40.353Z"),76135,{_id: 25446,num: 5194,date: new Date("2018-09-06T16:21:58.783Z"),array: ["models quantifying",new Date("2018-09-06T05:09:05.172Z")],obj: {_id: 25447,str: "holistic cross-platform modular",date: new Date("2018-09-06T07:48:04.443Z"),array: [],obj: {}}}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 25448,str: "Investor Creative withdrawal",date: new Date("2018-09-06T09:24:58.497Z"),array: [],obj: {_id: 25449,str: "JSON Australian Dollar orchestration",num: 29341,date: new Date("2018-09-06T11:06:50.797Z"),array: [9631,"conglomeration Investor",new Date("2018-09-05T21:25:39.090Z"),"Pennsylvania capacitor","monitor",{_id: 25450,str: "silver integrated Practical Fresh Pants",num: 1138,date: new Date("2018-09-06T18:34:32.211Z"),obj: {_id: 25451,str: "Alabama systemic Home Loan Account",num: 94515,date: new Date("2018-09-06T13:27:02.191Z"),array: [new Date("2018-09-06T00:26:19.468Z"),new Date("2018-09-06T02:42:44.607Z"),36391,[],66374,new Date("2018-09-06T04:34:51.828Z")]}},"leverage",{_id: 25452,num: 11621,obj: {}},13456],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 25453,str: "Buckinghamshire Belize Dollar",num: 5928,date: new Date("2018-09-06T12:01:16.215Z"),array: [],obj: {_id: 25454,str: "Fantastic Rubber Salad Tuna",num: 98498,date: new Date("2018-09-06T09:42:38.263Z"),array: [41647,"overriding","Technician Lead",new Date("2018-09-06T12:41:01.403Z"),97145,new Date("2018-09-06T08:56:53.623Z"),"Kroon Kansas revolutionize",new Date("2018-09-05T22:14:48.064Z"),"solid state",{_id: 25455,str: "Total",num: 90804,date: new Date("2018-09-06T10:21:03.565Z"),array: []},{_id: 25456,num: 26604,obj: {_id: 25457,str: "framework",num: 65711,date: new Date("2018-09-06T02:17:35.983Z"),array: []}},[11063],"connect",[new Date("2018-09-06T13:00:50.427Z")]],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 25458,str: "Ergonomic bandwidth Wisconsin",num: 19839,date: new Date("2018-09-06T07:11:32.097Z"),array: [new Date("2018-09-06T19:22:47.405Z"),"Applications override",74980,{_id: 25459,str: "Metal backing up",num: 61060,date: new Date("2018-09-06T17:07:57.841Z"),array: [],obj: {_id: 25460,num: 79125,date: new Date("2018-09-05T20:22:31.154Z"),array: [],obj: {}}},{_id: 25461,str: "reinvent Buckinghamshire",date: new Date("2018-09-06T09:10:07.108Z"),array: [new Date("2018-09-06T18:03:27.219Z")]},36882,39237,"e-enable Incredible International",[]],obj: {_id: 25462,date: new Date("2018-09-05T21:35:31.846Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 25463,str: "primary",num: 75169,date: new Date("2018-09-06T06:33:17.297Z"),array: [],obj: {_id: 25464,str: "sensor haptic Checking Account",num: 97575,date: new Date("2018-09-05T23:13:29.370Z"),array: [["quantifying hard drive"],"architect",63935,new Date("2018-09-06T06:43:17.145Z"),"sky blue copying copying",{_id: 25465,str: "Legacy Sports",num: 15708,date: new Date("2018-09-06T04:06:23.107Z"),array: [93049],obj: {_id: 25466,str: "input digital Money Market Account",date: new Date("2018-09-06T18:19:48.748Z")}},new Date("2018-09-06T15:55:15.781Z"),94631,"payment",[new Date("2018-09-05T20:44:35.589Z")],"virtual",new Date("2018-09-06T13:40:55.586Z"),new Date("2018-09-06T03:43:56.576Z")],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 25467,str: "bluetooth Loaf Bedfordshire",num: 55938,date: new Date("2018-09-06T09:25:57.664Z"),obj: {_id: 25468,num: 47512,date: new Date("2018-09-06T11:17:44.639Z"),array: [2400,"Soft","maroon Borders Intelligent Cotton Sausages",[],31895,"program Connecticut",new Date("2018-09-06T12:21:54.296Z"),new Date("2018-09-05T21:26:51.100Z"),65427,{_id: 25469,str: "Croatian Kuna",num: 34938,date: new Date("2018-09-05T23:31:39.241Z"),array: [],obj: {}},{_id: 25470,array: [new Date("2018-09-06T16:05:59.858Z")],obj: {}}],obj: {_id: 25471,str: "Minnesota Customer streamline",date: new Date("2018-09-06T16:24:40.977Z"),array: []}}});
    },

    function(coll) {
        return coll.insert({_id: 25472,str: "Computer gold",num: 95019,date: new Date("2018-09-06T02:03:26.158Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 25473,str: "Handmade",date: new Date("2018-09-05T23:48:17.687Z"),array: [new Date("2018-09-06T01:44:27.013Z"),89147,"copy copying index",[25831,new Date("2018-09-06T06:19:03.645Z")],{_id: 25474,str: "redundant target",date: new Date("2018-09-06T12:45:39.015Z"),array: [],obj: {}},new Date("2018-09-05T22:57:49.978Z"),"Persevering success",93132,11876,"open-source Direct Central","analyzing Steel blue","Frozen"],obj: {_id: 25475,num: 47596}});
    },

    function(coll) {
        return coll.insert({_id: 25476,str: "Central fault-tolerant",num: 82319,array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 25477,str: "Fantastic",num: 18867,date: new Date("2018-09-06T07:16:51.632Z"),array: [57617,49272,"tan Honduras","Principal web-enabled","deploy",new Date("2018-09-06T11:24:52.652Z"),{_id: 25478,str: "Graphical User Interface",num: 43486,date: new Date("2018-09-06T13:37:45.154Z"),array: [],obj: {}},2755,new Date("2018-09-06T11:30:12.048Z"),[],new Date("2018-09-06T07:53:19.870Z"),"olive"],obj: {_id: 25479,str: "payment product EXE",array: [new Date("2018-09-06T02:44:48.402Z"),[new Date("2018-09-05T23:07:08.067Z"),67735]],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 25480,str: "channels",num: 33400,date: new Date("2018-09-06T13:30:04.411Z"),array: [[],[60356,"plum Cambridgeshire encompassing",10703],78536,new Date("2018-09-06T16:37:36.389Z"),new Date("2018-09-06T18:01:14.354Z"),"Home Loan Account Sharable directional","asynchronous Overpass","bluetooth","Bedfordshire Massachusetts SAS",new Date("2018-09-06T08:50:11.194Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 25481,str: "United States of America hack Unbranded Frozen Chips",num: 8925,date: new Date("2018-09-06T09:56:55.677Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 25482,str: "Representative",num: 40498,date: new Date("2018-09-06T14:29:36.067Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 25483,str: "deposit Accountability Checking Account",num: 66037,array: [new Date("2018-09-06T02:29:52.098Z"),16380,"JBOD Frozen","panel Outdoors Sleek",13419,[],{_id: 25484,str: "support Generic Rubber Chicken Frozen",num: 86526,date: new Date("2018-09-06T04:30:26.349Z"),array: [],obj: {_id: 25485,num: 91319,date: new Date("2018-09-06T17:14:51.531Z"),array: [new Date("2018-09-06T17:41:43.634Z"),"collaborative",79996,{_id: 25486,str: "core",date: new Date("2018-09-06T04:36:23.322Z"),array: ["tangible"]},new Date("2018-09-06T16:40:18.709Z"),{_id: 25487,str: "New Taiwan Dollar Refined",num: 14362,array: [],obj: {}},new Date("2018-09-06T18:21:21.181Z")]}},new Date("2018-09-06T03:05:31.087Z"),[],{_id: 25488,num: 80235,date: new Date("2018-09-06T13:22:25.324Z"),obj: {_id: 25489,str: "transitional",num: 65968,obj: {}}}],obj: {_id: 25490,num: 89836,date: new Date("2018-09-06T09:31:16.730Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 25491,str: "Lead Passage Soft",num: 23600,date: new Date("2018-09-06T00:36:49.229Z"),array: ["Pants Licensed Wooden Keyboard Alaska",new Date("2018-09-05T20:53:21.637Z"),1968,{_id: 25492,str: "bandwidth Refined Steel Chair",num: 94587,array: [],obj: {_id: 25493,str: "Executive",num: 25267,date: new Date("2018-09-05T21:14:11.687Z"),array: ["Brazilian Real Fresh empower"],obj: {_id: 25494,num: 8263,date: new Date("2018-09-06T06:54:21.010Z"),array: ["Home Loan Account",78722],obj: {}}}},new Date("2018-09-06T07:01:36.225Z"),[new Date("2018-09-06T12:28:16.384Z")],[],[],"Networked invoice Norway",29120,{_id: 25495,str: "Lek",date: new Date("2018-09-05T23:23:42.027Z"),array: [75314],obj: {_id: 25496,str: "Michigan",array: []}},{_id: 25497,array: [new Date("2018-09-06T04:33:01.067Z"),new Date("2018-09-05T23:33:59.615Z"),new Date("2018-09-06T08:02:28.066Z"),37655]},"Solutions",[]]});
    },

    function(coll) {
        return coll.insert({_id: 25498,str: "Berkshire",num: 24714,date: new Date("2018-09-06T01:30:17.273Z"),array: ["programming Mouse",[82782,new Date("2018-09-06T17:59:46.811Z")],new Date("2018-09-06T16:05:27.712Z"),86927,[],"alliance",new Date("2018-09-06T11:21:32.786Z"),21808,{_id: 25499,num: 90569,date: new Date("2018-09-06T05:19:51.613Z"),array: ["International"],obj: {}},{_id: 25500,str: "Station Liaison",date: new Date("2018-09-06T17:30:03.875Z"),array: [],obj: {}},new Date("2018-09-06T15:43:03.979Z"),94668,94979,"Florida Singapore transmit"],obj: {_id: 25501,num: 37974,date: new Date("2018-09-06T01:06:02.641Z"),array: [new Date("2018-09-06T01:12:52.083Z")]}});
    },

    function(coll) {
        return coll.insert({_id: 25502,str: "Rustic",num: 65050,date: new Date("2018-09-06T02:14:58.099Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 25503,str: "quantify connecting",num: 1180,date: new Date("2018-09-05T20:32:34.101Z"),array: ["payment indexing Metal",39184,27163,new Date("2018-09-06T18:31:22.968Z"),"Buckinghamshire Incredible",new Date("2018-09-05T23:02:47.748Z"),{_id: 25504,str: "compressing",num: 48684,array: [],obj: {}},73322,{_id: 25505,str: "North Carolina",date: new Date("2018-09-05T22:23:12.325Z"),obj: {_id: 25506,str: "invoice",num: 38246,date: new Date("2018-09-06T06:49:35.032Z"),array: ["coherent matrices homogeneous",new Date("2018-09-06T12:27:00.314Z")]}},[],"Pants"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 25507,str: "backing up Chips transmitter",num: 10433,date: new Date("2018-09-06T12:10:51.480Z"),array: [new Date("2018-09-06T09:49:56.239Z"),{_id: 25508,str: "Maryland",num: 50264,date: new Date("2018-09-06T10:42:21.897Z"),array: ["Engineer Dynamic",22189,"Practical Granite Sausages",new Date("2018-09-06T02:21:06.408Z"),{_id: 25509,str: "Bermudian Dollar (customarily known as Bermuda Dollar)",num: 14875,array: [],obj: {_id: 25510,num: 67455,date: new Date("2018-09-06T07:49:56.935Z"),obj: {}}},new Date("2018-09-06T05:09:53.356Z"),46084]},[],[],new Date("2018-09-06T18:35:54.351Z"),new Date("2018-09-06T18:29:41.759Z"),{_id: 25511,str: "1080p",num: 34047,array: [],obj: {}},"Frozen","payment neural-net",172]});
    },

    function(coll) {
        return coll.insert({_id: 25512,str: "multi-state",num: 66835,date: new Date("2018-09-06T10:13:19.939Z"),array: [new Date("2018-09-06T12:46:57.625Z"),33048,"neural lavender Grocery",[],"Regional","New Israeli Sheqel interfaces",68808,new Date("2018-09-06T07:40:26.859Z"),{_id: 25513,str: "Awesome Principal",num: 27088,array: [43301],obj: {_id: 25514,str: "virtual",num: 98030,date: new Date("2018-09-06T02:07:50.064Z"),obj: {}}},31463,new Date("2018-09-06T05:52:33.170Z"),{_id: 25515,str: "user-facing Money Market Account Motorway",date: new Date("2018-09-06T04:56:46.294Z"),array: [],obj: {}}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 25516,str: "Chips orchid",num: 89864,date: new Date("2018-09-06T11:44:02.922Z"),array: [new Date("2018-09-06T11:48:49.712Z"),new Date("2018-09-06T01:15:08.418Z"),44041,new Date("2018-09-06T00:24:26.222Z"),"Car hack","moderator",[],{_id: 25517,str: "lime",num: 54566,obj: {_id: 25518,str: "Fantastic Soft Towels Courts",num: 70821,date: new Date("2018-09-06T04:49:25.005Z"),array: [16948,"Money Market Account Lead Dynamic"],obj: {}}},[48121,"Human bluetooth"],new Date("2018-09-06T18:35:12.670Z"),new Date("2018-09-06T09:07:30.128Z"),56262]});
    },

    function(coll) {
        return coll.insert({_id: 25519,str: "redundant",num: 40755,date: new Date("2018-09-05T21:11:08.676Z"),array: [],obj: {_id: 25520,str: "Cambridgeshire",num: 7407,date: new Date("2018-09-06T11:53:39.169Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 25521,str: "Nevada",num: 63999,date: new Date("2018-09-05T22:35:55.297Z"),array: ["payment Branch haptic","Chief",36050,new Date("2018-09-05T20:57:30.565Z"),{_id: 25522,str: "Bedfordshire",num: 66623,date: new Date("2018-09-06T01:14:13.214Z"),array: [[new Date("2018-09-05T22:35:27.582Z"),new Date("2018-09-06T16:16:53.686Z"),{_id: 25523,str: "Product",num: 44070,date: new Date("2018-09-06T05:58:23.087Z"),array: [],obj: {}}]],obj: {}},86084,new Date("2018-09-05T21:32:07.313Z"),"neutral",81638,[],"ADP FTP"],obj: {_id: 25524,num: 36049,date: new Date("2018-09-06T19:41:04.993Z")}});
    },

    function(coll) {
        return coll.insert({_id: 25525,date: new Date("2018-09-06T04:17:26.385Z"),array: [new Date("2018-09-05T23:53:20.087Z"),[],new Date("2018-09-05T20:15:00.313Z"),97076,"back-end",41076,52812,["upward-trending",64730,[{_id: 25526,str: "Personal Loan Account",num: 71373,date: new Date("2018-09-06T08:04:05.588Z"),array: [],obj: {_id: 25527,str: "Kwacha",num: 64057,array: [],obj: {_id: 25528,str: "Small Frozen",num: 83004,obj: {_id: 25529,str: "Product",date: new Date("2018-09-05T22:57:27.129Z"),array: [{_id: 25530,array: [],obj: {}},new Date("2018-09-06T05:42:43.391Z")]}}}},80350]],new Date("2018-09-06T17:09:24.051Z"),"complexity",{_id: 25531,str: "mobile",num: 40271,date: new Date("2018-09-06T15:26:47.675Z"),array: [],obj: {_id: 25532,num: 94813}},"Savings Account Uzbekistan Sum"]});
    },

    function(coll) {
        return coll.insert({_id: 25533,num: 21223,date: new Date("2018-09-06T06:56:43.079Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 25534,str: "Computers proactive",num: 62901,date: new Date("2018-09-06T00:40:34.165Z"),array: [new Date("2018-09-06T06:41:25.558Z"),"connecting override",31498,"invoice",new Date("2018-09-06T05:24:24.051Z"),{_id: 25535,str: "Utah",num: 95161,date: new Date("2018-09-06T03:03:56.198Z"),array: [],obj: {_id: 25536,str: "Ergonomic Wooden Shirt Outdoors",num: 39854,array: ["Group",47115,[]]}},"microchip card Bedfordshire",78064,new Date("2018-09-06T15:15:54.765Z")],obj: {_id: 25537,num: 94812,obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 25538,str: "invoice Versatile Washington",num: 4429,array: [],obj: {_id: 25539,str: "Legacy Developer supply-chains",num: 530,date: new Date("2018-09-06T14:11:09.852Z"),array: [32064,new Date("2018-09-06T10:04:20.775Z"),{_id: 25540,str: "Car pink",num: 37965,date: new Date("2018-09-06T01:01:22.445Z"),array: [],obj: {}},"Checking Account European Monetary Unit (E.M.U.-6)",54817,35610,new Date("2018-09-06T09:22:28.122Z"),[{_id: 25541,str: "Horizontal deposit quantifying",date: new Date("2018-09-06T04:27:36.918Z")},18561],"Iowa JBOD back-end","bottom-line Awesome",new Date("2018-09-06T02:50:15.156Z")],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 25542,num: 58900,date: new Date("2018-09-06T18:22:37.251Z"),array: [new Date("2018-09-06T04:23:26.324Z"),{_id: 25543,str: "Lead Buckinghamshire",num: 14085,array: [],obj: {_id: 25544,str: "Paradigm gold",num: 14973,date: new Date("2018-09-06T03:59:40.339Z")}},14902,"markets",new Date("2018-09-06T07:38:02.902Z"),29403,"brand Granite repurpose",[],"invoice sensor Plastic",["Branding","Massachusetts Steel EXE"],new Date("2018-09-06T02:52:31.460Z"),new Date("2018-09-06T16:03:51.460Z"),42127]});
    },

    function(coll) {
        return coll.insert({_id: 25545,str: "repurpose white West Virginia",num: 98934,date: new Date("2018-09-06T12:34:07.009Z"),array: ["feed Rustic Rubber Hat",97939,"orchid",49746,[],new Date("2018-09-05T21:15:06.948Z"),"architect Practical Wooden Cheese",{_id: 25546,str: "Associate Yuan Renminbi Bike",num: 97603,date: new Date("2018-09-06T15:04:21.124Z"),array: [],obj: {}},{_id: 25547,num: 27807,date: new Date("2018-09-06T00:23:03.818Z"),array: [new Date("2018-09-06T05:42:28.746Z")],obj: {_id: 25548,str: "lime overriding"}},26027,new Date("2018-09-06T00:08:47.703Z"),new Date("2018-09-05T22:59:33.079Z")],obj: {_id: 25549,str: "Rubber Sleek Wooden Bike",num: 85196,date: new Date("2018-09-05T22:56:11.172Z"),array: [],obj: {_id: 25550,array: [{_id: 25551,num: 41149,date: new Date("2018-09-06T01:06:46.822Z"),array: [],obj: {}},["envisioneer violet matrices",33236,75765]],obj: {_id: 25552,str: "Persevering",num: 59904}}}});
    },

    function(coll) {
        return coll.insert({_id: 25553,str: "monitor mission-critical",num: 74666,date: new Date("2018-09-06T03:40:44.999Z"),array: [new Date("2018-09-06T04:30:36.084Z"),[50393],31976,"Comoros copying withdrawal","Wooden",{_id: 25554,str: "hybrid",num: 23721,date: new Date("2018-09-06T11:35:27.931Z"),array: [],obj: {}},19910,new Date("2018-09-05T21:22:36.486Z"),1127],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 25555,num: 15776,date: new Date("2018-09-06T17:04:49.081Z"),array: [],obj: {_id: 25556,str: "alarm",num: 19365,date: new Date("2018-09-06T00:08:11.946Z"),obj: {_id: 25557,str: "explicit",array: [61064,new Date("2018-09-06T16:50:20.048Z"),"deposit Handmade Wooden Ball mesh",31839,new Date("2018-09-06T07:34:22.225Z"),[[],31333,77706,19768],{_id: 25558,num: 61647,date: new Date("2018-09-06T16:21:54.969Z"),array: [31098,"mission-critical",new Date("2018-09-06T00:02:09.070Z")],obj: {}},["Brazilian Real secured line paradigms"],"invoice Tactics"]}}});
    },

    function(coll) {
        return coll.insert({_id: 25559,num: 76306,date: new Date("2018-09-05T20:47:08.372Z"),array: [],obj: {_id: 25560,str: "architectures Table deposit",num: 71176,date: new Date("2018-09-06T05:14:16.933Z"),array: [],obj: {_id: 25561,str: "Riel National",num: 89514,date: new Date("2018-09-05T22:45:32.614Z"),array: [{_id: 25562,str: "Direct Face to face Idaho",num: 35635,date: new Date("2018-09-06T02:38:09.799Z"),array: []},53282,"integrate Refined Steel Pizza","Metal Course Upgradable",[73352,new Date("2018-09-06T04:17:06.710Z"),"synergies Refined Granite Table"],[new Date("2018-09-06T08:37:09.874Z"),48490],[["Generic Soft Pizza Practical Frozen Cheese"],{_id: 25563,str: "Saint Martin",num: 84200,date: new Date("2018-09-06T11:15:24.782Z"),array: [],obj: {_id: 25564,str: "Boliviano Mvdol Personal Loan Account",date: new Date("2018-09-05T22:15:54.411Z"),array: [],obj: {}}},67551],new Date("2018-09-06T13:33:41.466Z"),new Date("2018-09-06T00:59:57.577Z"),98241],obj: {_id: 25565,str: "auxiliary Plastic",num: 30485,obj: {}}}}});
    },

    function(coll) {
        return coll.insert({_id: 25566,str: "Handmade",num: 11366,date: new Date("2018-09-06T14:44:16.127Z"),array: [],obj: {_id: 25567,num: 31972,date: new Date("2018-09-06T01:43:13.838Z"),array: [{_id: 25568,str: "Investment Account radical dot-com",num: 71669,array: ["Bahrain Identity Implementation"],obj: {_id: 25569,obj: {}}},["New Hampshire",72902],{_id: 25570,str: "pink",num: 95873,date: new Date("2018-09-06T00:30:43.921Z"),array: [],obj: {}},51189,new Date("2018-09-06T03:17:47.595Z"),5882,"Pants Synergized",new Date("2018-09-06T16:46:11.202Z"),{_id: 25571,str: "1080p",date: new Date("2018-09-05T20:12:18.692Z"),obj: {}},34080,{_id: 25572,str: "Alabama Investment Account",date: new Date("2018-09-05T20:45:17.220Z"),obj: {_id: 25573,str: "USB Director",num: 1585,array: []}},new Date("2018-09-05T21:33:40.648Z"),["plum deposit composite"],new Date("2018-09-06T01:18:46.370Z"),29300]}});
    },

    function(coll) {
        return coll.insert({_id: 25574,str: "hacking",num: 45517,date: new Date("2018-09-06T14:10:55.998Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 25575,str: "hack mint green",num: 37883,array: ["lavender Colorado compress",35125,86265,new Date("2018-09-06T18:18:50.863Z"),new Date("2018-09-05T23:30:24.228Z"),new Date("2018-09-06T08:40:13.522Z"),"withdrawal silver policy",{_id: 25576,str: "USB",num: 79446,date: new Date("2018-09-06T11:49:50.820Z"),array: [],obj: {}},90637],obj: {_id: 25577,num: 62389,date: new Date("2018-09-05T20:38:21.707Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 25578,str: "withdrawal interactive",num: 88185,date: new Date("2018-09-05T22:00:22.064Z"),obj: {_id: 25579,str: "zero administration",num: 15752,array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 25580,str: "Fantastic Plastic Mouse",num: 73634,date: new Date("2018-09-06T02:23:50.205Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 25581,str: "Concrete Outdoors Bacon",num: 79527,date: new Date("2018-09-06T02:23:45.839Z"),array: [37283,new Date("2018-09-06T02:55:44.483Z"),"Concrete","mint green Trinidad and Tobago Dollar",new Date("2018-09-06T11:43:48.156Z"),{_id: 25582,str: "New Israeli Sheqel",array: [52924],obj: {}},"Health California","plum",[],[],41863,new Date("2018-09-06T19:52:26.449Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 25583,str: "yellow THX Clothing",num: 42504,date: new Date("2018-09-06T14:10:58.409Z"),array: [],obj: {_id: 25584,str: "Won Wisconsin",date: new Date("2018-09-06T04:54:47.412Z"),array: [],obj: {_id: 25585,num: 90280,date: new Date("2018-09-06T06:53:58.294Z"),obj: {_id: 25586,str: "Rustic Plastic Bike",num: 2903,obj: {_id: 25587,num: 22913,date: new Date("2018-09-06T10:25:45.154Z"),array: [],obj: {}}}}}});
    },

    function(coll) {
        return coll.insert({_id: 25588,str: "parse quantifying",num: 12251,date: new Date("2018-09-06T03:25:30.203Z"),array: [[],"pixel",45999,new Date("2018-09-06T08:57:32.589Z"),new Date("2018-09-06T11:16:24.873Z"),{_id: 25589,str: "Electronics Mongolia magenta",num: 31575,array: ["invoice"],obj: {_id: 25590,num: 96641,date: new Date("2018-09-06T00:56:13.689Z"),array: [],obj: {}}},"Granite fuchsia Rustic Frozen Shoes",12745,6432,81111,new Date("2018-09-06T16:22:12.251Z"),"deposit Interactions",36020,{_id: 25591,str: "Borders Salad",num: 55642,array: [],obj: {}}]});
    },

    function(coll) {
        return coll.insert({_id: 25592,str: "Rubber Organic",num: 97833,array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 25593,str: "Burgs transmitting",num: 57536,date: new Date("2018-09-06T08:59:12.026Z"),array: [77288,new Date("2018-09-06T05:49:34.232Z"),"quantifying Self-enabling",new Date("2018-09-06T18:41:02.165Z"),9166,"tan Tuna",new Date("2018-09-06T14:51:43.581Z"),88639,45981]});
    },

    function(coll) {
        return coll.insert({_id: 25594,str: "Personal Loan Account SMS iterate",num: 22543,date: new Date("2018-09-06T08:39:35.789Z"),array: ["Internal generating redundant",90164,new Date("2018-09-06T14:12:59.997Z"),80381,"optical Money Market Account",47583,{_id: 25595,str: "TCP feed",num: 39334,date: new Date("2018-09-06T10:07:27.849Z"),obj: {_id: 25596,str: "Functionality functionalities Missouri",array: []}},new Date("2018-09-06T18:31:06.568Z"),"evolve"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 25597,str: "overriding",date: new Date("2018-09-06T18:22:52.042Z"),array: [],obj: {_id: 25598,num: 81870,date: new Date("2018-09-06T13:20:32.963Z"),array: ["Borders maximize",{_id: 25599,str: "Nebraska",num: 50109,array: [],obj: {}},"deposit Soft",new Date("2018-09-06T04:01:36.271Z"),63827,"web-enabled empower Awesome Metal Sausages",44772,[new Date("2018-09-06T05:32:30.308Z"),21193,{_id: 25600,str: "turquoise Plaza Expanded",num: 41203,date: new Date("2018-09-06T13:43:12.769Z"),obj: {}},new Date("2018-09-06T02:21:21.036Z")],[new Date("2018-09-06T01:14:28.626Z"),new Date("2018-09-05T22:17:47.303Z")],7131,2817,new Date("2018-09-06T13:11:52.949Z")],obj: {_id: 25601,str: "Polarised",num: 37590,array: []}}});
    },

    function(coll) {
        return coll.insert({_id: 25602,str: "Synergized Pennsylvania bandwidth",num: 31207,array: [],obj: {_id: 25603,num: 82279,date: new Date("2018-09-06T19:28:28.481Z"),array: [{_id: 25604,str: "Coves",num: 77320,date: new Date("2018-09-06T04:56:29.642Z"),array: [new Date("2018-09-06T15:39:23.207Z"),"B2C",{_id: 25605,str: "Small haptic",date: new Date("2018-09-06T17:27:16.856Z"),obj: {_id: 25606,str: "SCSI white Steel",num: 24054,date: new Date("2018-09-05T20:25:08.446Z"),array: [],obj: {}}}],obj: { _id: 25607 }},2705,new Date("2018-09-05T21:59:17.048Z"),{_id: 25608,str: "Soft Auto Loan Account digital",num: 10604,date: new Date("2018-09-06T08:23:21.431Z"),obj: {}},74837,new Date("2018-09-06T13:11:21.172Z"),[],[],"Assistant",["bluetooth Rustic Concrete Mouse Unbranded Fresh Chips"],new Date("2018-09-06T03:51:56.907Z"),39044],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 25609,str: "national bus",num: 23605,date: new Date("2018-09-06T17:40:57.738Z"),array: ["redundant orange",{_id: 25610,date: new Date("2018-09-06T10:24:15.388Z"),array: [],obj: {}},45943,new Date("2018-09-06T14:53:16.841Z"),{_id: 25611,str: "Communications",num: 83107,date: new Date("2018-09-06T17:52:04.870Z"),obj: {_id: 25612,str: "AI",num: 1946,obj: {_id: 25613,num: 67145,array: [],obj: {}}}},[],"Money Market Account",76386,new Date("2018-09-06T19:42:53.205Z"),["Customer",new Date("2018-09-05T20:30:47.224Z")],64236]});
    },

    function(coll) {
        return coll.insert({_id: 25614,str: "aggregate",num: 29419,date: new Date("2018-09-05T20:04:22.289Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 25615,str: "Rand",num: 50482,date: new Date("2018-09-05T22:16:57.491Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 25616,str: "compressing",num: 4134,array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 25617,str: "Tasty Wooden Chicken Utah bluetooth",num: 31528,date: new Date("2018-09-06T03:50:29.105Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 25618,date: new Date("2018-09-06T11:31:03.339Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 25619,num: 56562,date: new Date("2018-09-06T08:29:53.905Z"),array: [],obj: {_id: 25620,str: "bi-directional",num: 77179,date: new Date("2018-09-06T02:08:29.195Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 25621,str: "lavender Polarised",num: 85990,date: new Date("2018-09-05T23:42:39.959Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 25622,str: "Auto Loan Account",num: 17331,date: new Date("2018-09-06T06:36:47.013Z"),array: [],obj: {_id: 25623,str: "Fresh",date: new Date("2018-09-06T00:03:50.676Z"),array: [new Date("2018-09-06T05:02:19.566Z"),41593,{_id: 25624,str: "Granite",date: new Date("2018-09-06T11:47:46.129Z"),array: [new Date("2018-09-06T12:17:53.748Z"),"paradigm Frozen Bedfordshire"],obj: {_id: 25625,str: "Points magnetic",num: 8598,date: new Date("2018-09-06T15:47:20.148Z"),array: [new Date("2018-09-06T15:48:39.998Z"),74028],obj: {}}},"Gorgeous Steel Bike Supervisor bus","Home Loan Account invoice International",17087,[],[],{_id: 25626,str: "Buckinghamshire",num: 36197},"benchmark","Haiti Orchestrator Accounts",new Date("2018-09-06T09:08:44.223Z")]}});
    },

    function(coll) {
        return coll.insert({_id: 25627,str: "Investor",date: new Date("2018-09-06T19:30:51.649Z"),array: [new Date("2018-09-05T23:39:47.430Z"),24454,985,[],new Date("2018-09-06T15:01:28.974Z"),{_id: 25628,str: "User-friendly adapter",num: 53715,obj: {}},"Phased virtual","Agent Music",{_id: 25629,str: "New York productize",num: 85231,date: new Date("2018-09-06T15:05:17.997Z"),array: [6616,"Gloves hacking Automotive"],obj: {_id: 25630,num: 96524,date: new Date("2018-09-06T00:35:05.366Z"),array: [],obj: {}}},new Date("2018-09-06T12:51:47.324Z"),"override Uganda"]});
    },

    function(coll) {
        return coll.insert({_id: 25631,str: "grow SMTP Pizza",num: 80496,date: new Date("2018-09-06T02:53:01.257Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 25632,str: "demand-driven",num: 23201,array: ["Baby Auto Loan Account",new Date("2018-09-06T07:14:18.002Z"),[],71329,31223,[],"Directives hack navigate",new Date("2018-09-06T04:11:46.944Z"),"solid state repurpose human-resource",new Date("2018-09-06T17:44:04.229Z"),"empowering Centers"],obj: {_id: 25633,str: "Shore envisioneer User-friendly",num: 52891,date: new Date("2018-09-06T18:01:27.040Z"),array: [88765,{_id: 25634,str: "CSS",date: new Date("2018-09-05T21:55:47.504Z"),array: [[new Date("2018-09-06T10:11:25.558Z")]],obj: {}},60661,{_id: 25635,num: 57694,date: new Date("2018-09-05T21:52:53.281Z"),array: []},{_id: 25636,str: "parsing",num: 14102,array: [81321,"Land salmon generate"],obj: {_id: 25637,str: "copying Wooden communities",obj: {_id: 25638,str: "Architect transmit",num: 27893,date: new Date("2018-09-06T07:52:56.605Z"),obj: {}}}}],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 25639,str: "interface",num: 98868,date: new Date("2018-09-06T17:54:11.854Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 25640,str: "Buckinghamshire",num: 24546,array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 25641,str: "exuding",num: 25510,date: new Date("2018-09-05T22:19:08.444Z"),array: [31472,{_id: 25642,str: "Ameliorated",date: new Date("2018-09-06T18:56:24.788Z"),array: [],obj: {}},new Date("2018-09-06T10:08:11.165Z"),"e-markets Group Generic Granite Mouse",new Date("2018-09-06T18:34:06.134Z"),24564,new Date("2018-09-06T00:38:06.827Z"),new Date("2018-09-06T13:48:42.942Z"),"olive Tools",[54704],[],"Beauty withdrawal paradigms",{_id: 25643,str: "invoice",num: 32212,date: new Date("2018-09-06T01:35:15.035Z"),array: [new Date("2018-09-06T14:38:57.396Z")],obj: {}},"connecting copying pixel"]});
    },

    function(coll) {
        return coll.insert({_id: 25644,str: "Investment Account virtual Uganda",num: 83010,date: new Date("2018-09-06T10:27:18.661Z"),array: [],obj: {_id: 25645,str: "CFA Franc BCEAO olive Intelligent",num: 36805,date: new Date("2018-09-06T15:18:55.154Z"),obj: {_id: 25646,num: 44683,date: new Date("2018-09-06T17:00:57.037Z"),array: [9384,[new Date("2018-09-06T18:30:36.181Z"),new Date("2018-09-06T17:34:44.576Z"),"benchmark innovative West Virginia",75037,"West Virginia bypassing"],75310,"mint green bottom-line",60745,{_id: 25647,str: "Plains Auto Loan Account Functionality",num: 98055,date: new Date("2018-09-06T05:19:14.665Z")},"mint green",new Date("2018-09-06T07:32:04.228Z")],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 25648,str: "experiences connect Plastic",num: 65988,date: new Date("2018-09-06T14:00:12.544Z")});
    },

    function(coll) {
        return coll.insert({_id: 25649,str: "Prairie motivating",num: 48293,date: new Date("2018-09-06T19:19:27.838Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 25650,str: "Croatian Kuna",num: 35478,date: new Date("2018-09-06T16:09:39.326Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 25651,str: "Agent cross-platform",num: 73206,date: new Date("2018-09-06T02:58:49.782Z"),array: [new Date("2018-09-06T07:01:59.324Z"),"e-markets CFP Franc",[],20147,57617,{_id: 25652,str: "Jewelery",num: 79875,obj: {_id: 25653,num: 66975,date: new Date("2018-09-06T00:28:10.216Z"),array: [],obj: {}}},new Date("2018-09-06T04:53:37.495Z"),{_id: 25654,str: "contextually-based Web compress",date: new Date("2018-09-06T14:19:33.587Z"),array: []},new Date("2018-09-06T04:17:39.822Z"),65519,[59896,"installation turquoise"],64216],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 25655,str: "Oklahoma Louisiana generating",num: 51923,date: new Date("2018-09-06T18:38:42.861Z"),array: [{_id: 25656,str: "synthesizing",num: 65563,date: new Date("2018-09-05T22:39:25.727Z"),obj: {}},"global compressing",90778,"Pike compelling",new Date("2018-09-06T05:40:10.626Z"),"Creative",new Date("2018-09-06T19:41:11.245Z"),[18195,"neural"],35517,new Date("2018-09-06T10:19:51.523Z"),[],new Date("2018-09-06T18:14:52.020Z"),new Date("2018-09-06T13:31:41.686Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 25657,str: "Refined Fresh Bike sexy B2C",num: 72195,date: new Date("2018-09-05T21:01:37.020Z"),array: [],obj: {_id: 25658,num: 18916,date: new Date("2018-09-06T00:24:49.034Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 25659,str: "convergence",num: 66699,date: new Date("2018-09-06T00:31:47.777Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 25660,str: "input",num: 13091,date: new Date("2018-09-06T01:55:32.118Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 25661,str: "iterate Unbranded Cotton Keyboard e-commerce",date: new Date("2018-09-06T17:58:04.970Z"),array: [new Date("2018-09-05T20:40:55.988Z"),"Sausages needs-based",21064,15396,new Date("2018-09-06T16:44:01.637Z"),new Date("2018-09-06T11:25:10.276Z"),{_id: 25662,num: 42379,date: new Date("2018-09-05T21:23:23.667Z"),array: [],obj: {_id: 25663,str: "Movies Front-line Future",num: 4126,date: new Date("2018-09-06T13:25:22.146Z"),obj: {}}},new Date("2018-09-06T07:14:21.789Z"),"transmitting"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 25664,str: "back up aggregate",num: 21475,date: new Date("2018-09-06T06:52:36.940Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 25665,str: "pink",num: 43689,date: new Date("2018-09-05T23:03:26.129Z"),array: ["Sleek Cotton Bike",1373,[],new Date("2018-09-06T12:53:56.019Z"),"FTP Avon",[],new Date("2018-09-06T11:47:49.966Z"),"Intranet",new Date("2018-09-06T15:45:09.499Z"),43336,["Haven"],60284,13365],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 25666,str: "Response hierarchy",num: 76849,array: [],obj: {_id: 25667,num: 97304,date: new Date("2018-09-06T08:08:19.254Z"),array: [],obj: {_id: 25668,str: "intuitive orange",num: 6368,obj: {_id: 25669,str: "Zloty",date: new Date("2018-09-06T14:43:18.552Z"),array: [18743,"Identity Branding Enhanced",new Date("2018-09-06T10:19:32.078Z"),"Shoes Dynamic",59697,new Date("2018-09-06T03:39:30.468Z"),1725,"Agent North Korean Won Rustic",{_id: 25670,str: "withdrawal Aruba optimal",num: 45674,date: new Date("2018-09-06T07:35:12.398Z"),array: [{_id: 25671,str: "out-of-the-box",date: new Date("2018-09-06T18:33:13.570Z"),array: [],obj: {}},new Date("2018-09-06T18:39:57.614Z"),{_id: 25672,num: 30688},new Date("2018-09-06T00:57:35.653Z")]},"Small",[new Date("2018-09-06T05:22:57.771Z")],74195],obj: {}}}}});
    },

    function(coll) {
        return coll.insert({_id: 25673,str: "Tugrik Plastic",num: 79788,date: new Date("2018-09-05T22:27:18.545Z"),array: [new Date("2018-09-06T13:31:46.236Z"),new Date("2018-09-06T07:13:47.724Z"),"dynamic",{_id: 25674,str: "Central Executive programming",date: new Date("2018-09-06T05:35:29.251Z"),array: [],obj: {}},{_id: 25675,num: 82306,array: ["zero defect Handmade orchid","virtual generate technologies",66132]},90934,3786,"open-source Human",[],[{_id: 25676,str: "Generic",num: 21039,date: new Date("2018-09-05T21:58:57.614Z"),array: [],obj: {}}],93144,"Bouvet Island (Bouvetoya)"],obj: {_id: 25677,str: "Jewelery bandwidth-monitored",date: new Date("2018-09-06T04:26:39.942Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 25678,str: "Palladium",num: 51811,date: new Date("2018-09-05T21:56:58.993Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 25679,str: "Luxembourg haptic",num: 24138,date: new Date("2018-09-06T18:46:24.337Z"),array: [["incubate composite",30663,new Date("2018-09-05T21:40:29.022Z")],"Re-engineered Metal",10504,{_id: 25680,num: 55499,array: [],obj: {_id: 25681,str: "expedite indexing Rubber",num: 88331,date: new Date("2018-09-06T04:47:00.130Z"),array: [{_id: 25682,str: "plug-and-play 1080p Music",date: new Date("2018-09-06T10:48:37.368Z"),array: [],obj: {}},"Tactics",87472]}},[],new Date("2018-09-05T20:33:19.133Z"),{_id: 25683,date: new Date("2018-09-05T22:15:24.889Z"),obj: {}},4935,"Handcrafted Steel Gloves Ridges markets",new Date("2018-09-06T02:25:49.815Z"),new Date("2018-09-06T14:34:58.815Z"),new Date("2018-09-06T07:53:55.946Z")],obj: {_id: 25684,str: "Mill",num: 34212,array: [84735],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 25685,str: "Phased compress",num: 21908,date: new Date("2018-09-06T10:32:46.779Z"),array: [[],"parse",{_id: 25686,str: "Liaison Wooden Producer",num: 95164,date: new Date("2018-09-06T17:12:09.182Z"),obj: {_id: 25687,num: 69302,array: [],obj: {}}},new Date("2018-09-06T18:53:06.149Z"),29972,42045,"withdrawal deposit synergistic",new Date("2018-09-05T20:00:56.144Z"),66936,[new Date("2018-09-06T01:50:54.500Z")]],obj: {_id: 25688,str: "Ball Nevada generating",num: 11214,date: new Date("2018-09-06T11:47:03.093Z"),array: [45792,69456]}});
    },

    function(coll) {
        return coll.insert({_id: 25689,str: "cross-platform Savings Account",num: 85954,date: new Date("2018-09-06T07:26:44.236Z"),array: [],obj: {}});
    },

];

const indexList = [

    function(coll) {
        return coll.createIndex({"obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": 1, "obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": 1, "obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": 1, "str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"str": 1});
    },

    function(coll) {
        return coll.createIndex({"num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.num": 1, "obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": -1, "str": -1});
    },

    function(coll) {
        return coll.createIndex({"str": -1});
    },

    function(coll) {
        return coll.createIndex({"date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"str": -1, "obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.date": -1, "obj.obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"str": -1, "obj.obj.obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": 1, "obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": -1, "obj.obj.obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": 1, "obj.obj.obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": -1, "obj.obj.obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": -1, "obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"str": 1, "obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": -1, "obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"num": -1, "obj.obj.obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": 1, "obj.obj.obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": 1, "obj.obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": -1, "obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": 1, "obj.obj.obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"date": 1, "obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": -1, "obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": 1, "obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"date": 1, "str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": -1, "str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": 1, "num": -1});
    },

    function(coll) {
        return coll.createIndex({"date": 1, "obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": -1, "obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": -1, "str": -1});
    },

    function(coll) {
        return coll.createIndex({"num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.num": 1, "obj.obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": 1, "obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": 1, "obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.date": -1, "obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.num": 1, "obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": 1, "obj.obj.obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": 1, "obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"str": -1, "obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": 1, "obj.obj.obj.num": 1});
    },

];

const aggregationList = [

        [{$project: {a: { $arrayElemAt: [[],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $dateToParts: {date: { $dayOfWeek: { $month: { $toDate: { $reverseArray: [['$str',{ $toLower: { $dateToString: {date: { $isoWeekYear: { $month: { $dayOfWeek: { $year: { $dayOfMonth: { $toDate: { $rtrim: { input: '$obj.obj.str' } } } } } } } },format: "%z-%S-%M-%L-%S-%u-%M",timezone: "Atlantic/South_Georgia",onNull: "fuchsia Sudanese Pound"} } }]] } } } },iso8601: false} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "convergence sky blue",v: false},{k: "bandwidth rich",v: { $dateToString: {date: new Date("2018-09-05T22:36:19.243Z"),format: "%u-%S-%V-%L-%j-%d-%G-%u",timezone: "Europe/Athens"} }}]] }, _id: 0}}],

        [{$project: {a: { $map: {input: ['$str'],as: 'orlo',in: { $abs: 34884 }} }, _id: 0}}],

        [{$project: {a: { $minute: { $dateFromParts: {year: { $cmp: [{ $second: { $dateFromString: {dateString: "2018-09-06T05:08:05.401Z",onError: { $ltrim: {input: "help-desk Human lime",chars: '$str'} }} } },{ $arrayElemAt: [[],'$obj.obj.obj.num'] }] },month: { $divide: ['$obj.obj.num',67564] },millisecond: { $subtract: [17781,{ $log10: { $log: [24304,60354] } }] }} } }, _id: 0}}],

        [{$project: {a: { $isoDayOfWeek: { $dayOfMonth: { $week: { $hour: { $dayOfWeek: { $dayOfYear: { $isoWeek: { $dateToParts: {date: { $month: { $dateToString: {date: new Date("2018-09-06T08:03:55.986Z"),format: "%G-%L-%M-%w-%j-%d-%z-%U-%M",timezone: "Africa/Lubumbashi"} } },iso8601: false} } } } } } } } }, _id: 0}}],

        [{$project: {a: { $dayOfWeek: { $dateToParts: { date: { $dayOfMonth: { $month: { $minute: { $year: new Date("2018-09-06T18:04:21.130Z") } } } } } } }, _id: 0}}],

        [{$project: {a: { $zip: { inputs: [["Grocery","Jewelery","bi-directional Practical",'$obj.obj.str'],[66053,76358],[],[],['$str']] } }, _id: 0}}],

        [{$project: {a: { $concat: [{ $trim: {input: "Jewelery",chars: { $toLower: '$obj.str' }} }] }, _id: 0}}],

        [{$project: {a: { $dateToParts: {date: { $dateToString: {date: '$date',format: "%M-%d-%m-%m"} },timezone: "Etc/UCT",iso8601: true} }, _id: 0}}],

        [{$project: {a: { $substrCP: [{ $concat: ['$obj.obj.str',"Motorway",'$obj.str'] },18,20] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Generic Concrete Tuna invoice panel",v: "navigate"},{k: "Somali Shilling Web bluetooth",v: { $year: { $month: { $toDate: { $arrayElemAt: [[45052],{ $sqrt: '$num' }] } } } }},{k: "interactive Data Bacon",v: "Metal"},{k: "back up Wooden",v: '$obj.obj.date'}]] }, _id: 0}}],

        [{$project: {a: { $ltrim: { input: { $substrCP: [{ $substrCP: [{ $dateToString: { date: '$obj.obj.obj.date' } },4,20] },1,16] } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Automotive Checking Account input",v: false}]] }, _id: 0}}],

        [{$project: {a: { $zip: { inputs: [[],['$obj.obj.obj.str'],["navigating synthesizing"],[70383,'$obj.obj.obj.obj.num'],["payment",{ $ltrim: {input: "Bahraini Dinar benchmark JBOD",chars: '$str'} }]] } }, _id: 0}}],

        [{$project: {a: { $dateFromParts: {year: { $log: [81421,51] },day: { $pow: ['$obj.num','$obj.obj.obj.obj.num'] }} }, _id: 0}}],

        [{$project: {a: { $minute: { $isoWeek: { $isoWeek: { $isoDayOfWeek: { $dayOfMonth: { $millesecond: { $dateToParts: {date: { $dayOfMonth: { $dateToString: {date: new Date("2018-09-06T01:42:12.754Z"),timezone: "Pacific/Chatham",onNull: { $concatArrays: [[21268,24648],['$obj.obj.obj.obj.num']] }} } },timezone: "Pacific/Truk"} } } } } } } }, _id: 0}}],

        [{$project: {a: { $toDate: { $toUpper: '$obj.obj.str' } }, _id: 0}}],

        [{$project: {a: { $year: { $dateToString: {date: new Date("2018-09-06T04:35:15.921Z"),timezone: "Atlantic/South_Georgia"} } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "navigating challenge programming",v: false}]] }, _id: 0}}],

        [{$project: {a: { $reverseArray: [[]] }, _id: 0}}],

        [{$project: {a: { $toUpper: '$obj.str' }, _id: 0}}],

        [{$project: {a: { $minute: { $dateToParts: {date: { $year: { $dateToString: {date: { $hour: { $isoDayOfWeek: { $isoWeekYear: { $dayOfWeek: { $dayOfMonth: { $dateFromString: { dateString: "2018-09-06T17:16:40.356Z" } } } } } } },format: "%S-%m-%M-%w-%V-%z-%j-%Z-%z-%S-%G-%%",onNull: '$obj.obj.obj.str'} } },timezone: "Australia/NSW",iso8601: true} } }, _id: 0}}],

        [{$project: {a: { $toUpper: { $substrBytes: [{ $toLower: "Auto Loan Account" },8,10] } }, _id: 0}}],

        [{$project: {a: { $filter: {input: [],cond: { $in: [{ $arrayToObject: [[{k: "Fish microchip lavender",v: new Date("2018-09-06T04:03:26.240Z")}]] },{ $filter: {input: [{ $rtrim: { input: "Electronics Mississippi" } }],as: 'abby',cond: { $lte: [{ $toString: { $arrayElemAt: [[],21375] } },{ $week: { $dayOfYear: { $second: { $toDate: { $arrayElemAt: [['$num',10726,'$obj.obj.num',{ $log: ['$$this','$obj.obj.obj.num'] }],17760] } } } } }] }} }] }} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "virtual Generic Fresh Shoes portals",v: { $toUpper: '$obj.str' }}]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: LOOKUP_date;, _id: 0}}],

        [{$project: {a: { $hour: { $dateFromParts: {isoWeekYear: { $log10: 70220 },isoWeek: { $abs: '$obj.obj.obj.num' },hour: { $ceil: { $add: [] } },timezone: "US/Central"} } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.str'],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$num'] }, _id: 0}}],

        [{$project: {a: { $dayOfWeek: { $isoWeek: { $second: { $dayOfYear: { $isoWeekYear: { $dateToParts: {date: { $dateToString: {date: new Date("2018-09-06T18:28:00.895Z"),format: "%S-%V-%j-%u-%z-%Z-%S-%G-%H",timezone: "Asia/Baghdad",onNull: '$obj.obj.str'} },timezone: "Pacific/Gambier",iso8601: true} } } } } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$obj.obj.str',{ $substr: ["Bedfordshire Central",18,6] }],[24298]]] }, _id: 0}}],

        [{$project: {a: { $substr: [{ $substrBytes: ['$obj.obj.obj.str',5,17] },12,1] }, _id: 0}}],

        [{$project: {a: { $ltrim: {input: { $toUpper: "Car infrastructures synthesize" },chars: { $substrBytes: ['$obj.obj.obj.str',3,20] }} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.obj.str','$obj.obj.str'],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $isoWeek: { $millesecond: { $dayOfMonth: { $toDate: { $arrayElemAt: [[{ $toUpper: { $trim: { input: '$obj.obj.obj.str' } } },"Sports",'$obj.str'],85280] } } } } }, _id: 0}}],

        [{$project: {a: { $dateToParts: { date: { $dateFromParts: {isoWeekYear: { $multiply: ['$obj.num',59298] },isoDayOfWeek: { $sqrt: 10208 },minute: { $ln: 47888 },millisecond: { $cmp: [{ $map: {input: [665,'$obj.obj.obj.obj.num'],in: { $trunc: '$obj.num' }} },{ $arrayElemAt: [[{ $toLower: '$obj.str' },{ $toLower: '$obj.obj.obj.str' },"JSON Keyboard","Ville"],{ $log10: '$obj.obj.obj.num' }] }] }} } } }, _id: 0}}],

        [{$project: {a: { $toString: { $arrayElemAt: [['$obj.obj.obj.obj.num'],'$obj.obj.obj.obj.num'] } }, _id: 0}}],

        [{$project: {a: { $dateFromParts: {year: { $log10: 905 },month: { $ceil: { $sqrt: '$obj.obj.obj.obj.num' } },hour: { $mod: [87715,{ $pow: ['$obj.obj.obj.num',33538] }] },minute: { $divide: ['$obj.obj.obj.obj.num','$obj.obj.obj.obj.num'] },millisecond: { $abs: { $cmp: [{ $concat: ['$obj.obj.obj.str',{ $substr: [{ $dateToString: {date: new Date("2018-09-06T12:54:30.281Z"),format: "%u-%H-%Y-%G-%%"} },17,8] }] },{ $concat: [] }] } }} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],['$obj.obj.num'],[],['$obj.obj.obj.str',{ $trim: { input: '$obj.str' } }],[92519,'$obj.obj.obj.num']]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["clear-thinking multi-byte Moldovan Leu"],48255] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[43851],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[13408,75559,'$obj.obj.date'],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $substrBytes: ["web-readiness",7,12] }],49428] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["cross-media payment Cambridgeshire"],41593] }, _id: 0}}],

        [{$project: {a: { $isoDayOfWeek: { $year: { $millesecond: { $dateToParts: {date: { $isoWeek: { $week: { $second: { $isoWeekYear: { $dayOfMonth: { $dateFromParts: {year: { $ceil: 96385 },month: { $subtract: ['$obj.obj.num','$obj.obj.obj.obj.num'] },day: { $floor: 25390 },minute: { $add: ['$obj.obj.obj.obj.num'] },timezone: "Asia/Phnom_Penh"} } } } } } },iso8601: false} } } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$num'] }, _id: 0}}],

        [{$project: {a: { $week: { $dateFromString: {dateString: "2018-09-06T05:30:38.710Z",onError: { $arrayToObject: [[]] }} } }, _id: 0}}],

        [{$project: {a: { $isoDayOfWeek: { $week: { $month: { $minute: { $week: { $year: { $dayOfWeek: { $millesecond: { $week: '$obj.obj.obj.date' } } } } } } } } }, _id: 0}}],

        [{$project: {a: { $toString: { $arrayElemAt: [['$str'],76506] } }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: '$obj.obj.date',format: "%u-%M-%z-%m-%Y-%j-%m-%u-%H-%M",timezone: "America/Argentina/San_Luis",onNull: { $concatArrays: [[19097],[{ $rtrim: {input: '$obj.obj.obj.str',chars: "deposit"} },{ $toString: { $dayOfYear: { $dateFromParts: {isoWeekYear: { $ceil: '$obj.obj.num' },isoWeek: { $log: [1043,86300] },hour: { $indexOfArray: [{ $range: [20,7,1] },{ $arrayToObject: [[]] },16] },minute: { $divide: ['$obj.obj.num','$obj.obj.obj.num'] }} } } },"JBOD Trafficway"],[54127,{ $log: [58724,'$obj.num'] }]] }} }, _id: 0}}],

        [{$project: {a: { $zip: { inputs: [[],['$obj.str'],[{ $trim: {input: '$str',chars: { $substr: ["Sausages olive SCSI",4,15] }} },"Applications leading edge"],[61619,'$num'],[]] } }, _id: 0}}],

        [{$project: {a: { $ltrim: { input: '$obj.obj.obj.str' } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.obj.num','$obj.obj.obj.num'],42779] }, _id: 0}}],

        [{$project: {a: { $ltrim: {input: { $toUpper: '$obj.obj.obj.str' },chars: "Ergonomic"} }, _id: 0}}],

        [{$project: {a: { $dateFromParts: {year: { $abs: '$obj.num' },month: { $exp: '$num' },hour: { $log: ['$obj.obj.obj.num',59902] },millisecond: { $exp: 84886 }} }, _id: 0}}],

        [{$project: {a: { $concat: ["Avon","Toys Rubber AI"] }, _id: 0}}],

        [{$project: {a: { $toString: { $substrBytes: ['$obj.obj.str',18,12] } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Cape",v: '$date'}]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$num'] }, _id: 0}}],

        [{$project: {a: { $concat: [{ $rtrim: {input: "Senegal",chars: '$obj.obj.str'} },'$str',{ $rtrim: { input: "Buckinghamshire" } }] }, _id: 0}}],

        [{$project: {a: { $toLower: "Producer" }, _id: 0}}],

        [{$project: {a: { $range: [17,11,3] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[]]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "multi-byte motivating",v: '$obj.num'}]] }, _id: 0}}],

        [{$project: {a: { $isoDayOfWeek: { $millesecond: { $month: { $dateToParts: {date: { $dayOfMonth: '$obj.obj.date' },timezone: "America/Antigua"} } } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $trim: { input: { $trim: {input: '$obj.obj.str',chars: '$obj.str'} } } },"Auto Loan Account Developer"],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.obj.str',"Gloves"],98877] }, _id: 0}}],

        [{$project: {a: { $map: {input: [{ $concat: ["Cotton Graphic Interface Wooden","RSS Nigeria"] }],as: 'rodger',in: { $multiply: ['$$rodger'] }} }, _id: 0}}],

        [{$project: {a: { $concat: ['$obj.str',"Cambridgeshire"] }, _id: 0}}],

        [{$project: {a: { $map: {input: [{ $toString: { $arrayElemAt: [[],'$obj.obj.obj.num'] } }],as: 'carmine',in: { $cmp: [{ $arrayToObject: [[{k: "Kenya purple system engine",v: "Sleek Cotton Chips customized"},{k: "Borders",v: '$obj.obj.obj.str'},{k: "collaborative XSS Oklahoma",v: '$num'}]] },{ $concatArrays: [[28908,4322],[76908,{ $trunc: '$num' }],['$$carmine']] }] }} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[71153],["Via Shirt",'$str'],['$num','$obj.num'],['$obj.str'],['$obj.obj.obj.obj.date']]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],[83878],["payment"],[],[new Date("2018-09-06T18:41:08.135Z")]]] }, _id: 0}}],

        [{$project: {a: { $reverseArray: [[{ $trim: { input: '$str' } }]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Shoes",v: 11611}]] }, _id: 0}}],

        [{$project: {a: { $dayOfYear: { $toDate: { $arrayToObject: [[{k: "Wyoming",v: { $hour: { $millesecond: { $month: { $dateToParts: {date: { $dayOfMonth: { $isoWeek: { $dateFromString: {dateString: "2018-09-06T10:35:17.122Z",format: "%w-%j-%H-%Z-%z",timezone: "Asia/Vientiane"} } } },timezone: "Asia/Novosibirsk"} } } } }}]] } } }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [[{ $rtrim: {input: '$str',chars: '$obj.obj.obj.str'} }]],defaults: [[{ num: 14976 },/Bolivar Fuerte|paradigms|indexing|Vermont/],new Date("2018-09-06T04:48:38.331Z")]} }, _id: 0}}],

        [{$project: {a: { $concat: [{ $rtrim: { input: "Bermudian Dollar (customarily known as Bermuda Dollar)" } },"Fresh"] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["Corporate Realigned Customer",'$str',{ $ltrim: { input: { $dateToString: {date: new Date("2018-09-06T18:54:11.885Z"),format: "%S-%Z-%m-%u-%u",onNull: '$str'} } } },"invoice Bulgarian Lev channels"],14828] }, _id: 0}}],

        [{$project: {a: { $toLower: '$obj.obj.str' }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [['$obj.obj.str'],['$str',{ $toLower: "impactful index Personal Loan Account" },"Svalbard & Jan Mayen Islands"],['$obj.obj.obj.obj.num',81361],[{ $ltrim: {input: "wireless maximize",chars: '$obj.str'} }]],useLongestLength: false,defaults: ["monitor RSS",57145]} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],{ $exp: '$num' }] }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [['$obj.obj.num',48294],['$obj.str'],[],[],['$obj.num']],defaults: [62196]} }, _id: 0}}],

        [{$project: {a: { $filter: {input: [],cond: { $and: ['$$this','$$this',86244] }} }, _id: 0}}],

        [{$project: {a: { $filter: {input: [{ $rtrim: {input: { $toUpper: "Handcrafted Fresh Gloves" },chars: "Metal Awesome Frozen Soap"} }],as: 'erna',cond: { $isArray: [{ $ltrim: { input: '$$erna' } }] }} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[["deploy Albania"]]] }, _id: 0}}],

        [{$project: {a: { $ltrim: {input: "Tasty Steel Towels",chars: { $dateToString: {date: { $toDate: { $arrayElemAt: [['$obj.obj.obj.obj.num','$obj.obj.obj.obj.num'],'$obj.obj.num'] } },format: "%L-%S-%G-%G-%Z-%d",timezone: "Pacific/Norfolk",onNull: { $dayOfWeek: { $dayOfWeek: '$obj.obj.obj.obj.date' } }} }} }, _id: 0}}],

        [{$project: {a: { $trim: {input: '$obj.obj.str',chars: '$obj.str'} }, _id: 0}}],

        [{$project: {a: { $minute: { $dateToString: {date: { $hour: { $dateToParts: { date: { $millesecond: { $month: { $isoDayOfWeek: { $dayOfYear: { $dayOfWeek: { $second: { $dateFromString: {dateString: "2018-09-06T12:46:18.532Z",format: "%G-%Y-%j-%U",timezone: "America/El_Salvador",onError: { $toUpper: { $substrBytes: ['$str',12,16] } },onNull: { $arrayToObject: [[{k: "Burundi Franc SSL",v: "HDD Administrator architecture"}]] }} } } } } } } } } } },timezone: "Etc/GMT+7"} } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[]] }, _id: 0}}],

        [{$project: {a: { $map: {input: [78917,41022,'$obj.obj.obj.num'],as: 'gage',in: { $floor: 20390 }} }, _id: 0}}],

        [{$project: {a: { $map: {input: [20078,'$num'],in: { $add: [61522] }} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.obj.str',{ $ltrim: {input: "teal Cambridgeshire",chars: { $substrCP: ['$obj.str',2,20] }} }],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[{ $toUpper: "deposit" },{ $dateToString: {date: '$date',timezone: "Greenwich"} }],[{ $dateToString: {date: new Date("2018-09-06T01:11:43.128Z"),format: "%Y-%S-%Y-%S-%d",onNull: { $arrayElemAt: [[],67431] }} }],['$obj.num',38101],['$obj.str'],['$obj.num','$obj.obj.obj.num']]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.str'],'$obj.obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $hour: { $minute: { $month: new Date("2018-09-06T16:20:05.987Z") } } }, _id: 0}}],

        [{$project: {a: { $trim: { input: { $substr: ["facilitate Canada",10,19] } } }, _id: 0}}],

        [{$project: {a: { $reverseArray: [[{ $rtrim: { input: '$obj.obj.str' } }]] }, _id: 0}}],

        [{$project: {a: { $dateFromString: {dateString: "2018-09-06T18:38:36.927Z",timezone: "Africa/Addis_Ababa",onNull: { $arrayToObject: [[{k: "Integrated",v: { $second: { $dateToString: {date: '$obj.obj.obj.date',format: "%V-%L-%d-%M-%U-%%"} } }}]] }} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Seamless Gorgeous Concrete Fish Chair",v: true}]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[18359],'$num'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[["Streamlined"],[20545,'$obj.obj.num','$obj.obj.num'],['$date','$obj.obj.date'],[],['$obj.str']]] }, _id: 0}}],

        [{$project: {a: { $trim: { input: "Savings Account payment" } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],48194] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $toUpper: "Licensed Borders" }],55985] }, _id: 0}}],

        [{$project: {a: { $range: [12,6] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Planner Loop Associate",v: '$obj.obj.obj.obj.date'},{k: "deposit software neutral",v: '$obj.obj.date'},{k: "Research extensible metrics",v: 18088}]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Shoes",v: { $second: { $isoDayOfWeek: { $dayOfYear: { $hour: { $week: { $year: { $dateToString: {date: '$obj.obj.obj.obj.date',format: "%H-%Z-%Z-%w-%L-%L-%d-%w-%z",timezone: "Asia/Almaty",onNull: { $arrayToObject: [[]] }} } } } } } } }},{k: "Virginia Toys",v: new Date("2018-09-06T06:53:27.050Z")},{k: "Cedi",v: false},{k: "Soft Cyprus",v: '$obj.obj.obj.obj.num'},{k: "Zimbabwe white Fantastic Fresh Hat",v: '$obj.obj.str'}]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.num'],96479] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [[],["Fresh Wooden"],[]],useLongestLength: false} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Marketing",v: "Creative program Principal"},{k: "EXE",v: '$obj.obj.num'},{k: "partnerships infrastructures",v: '$obj.date'}]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],["next generation"],[51218]]] }, _id: 0}}],

        [{$project: {a: { $concat: [] }, _id: 0}}],

        [{$project: {a: { $filter: {input: ['$obj.obj.obj.str'],as: 'cheyenne',cond: { $eq: [{ $substrCP: [{ $trim: {input: "niches Configuration",chars: "Mandatory backing up"} },3,4] },{ $arrayElemAt: [[],'$$cheyenne'] }] }} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],['$str'],[{ $rtrim: {input: "Burundi Metal methodology",chars: { $substrCP: ['$obj.str',4,16] }} },{ $toUpper: "optical Kids Developer" },"Chicken","Innovative"],[475]]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$num'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "transition",v: { $substr: ['$obj.str',4,8] }}]] }, _id: 0}}],

        [{$project: {a: { $dateFromString: {dateString: "2018-09-06T09:41:55.366Z",onNull: { $trim: { input: '$obj.str' } }} }, _id: 0}}],

        [{$project: {a: { $range: [18,2] }, _id: 0}}],

        [{$project: {a: { $filter: {input: [60910],as: 'marianna',cond: { $ne: [{ $arrayToObject: [[[{ $substrBytes: [{ $rtrim: {input: { $trim: {input: '$str',chars: '$obj.str'} },chars: "Liaison wireless"} },0,19] },'$$marianna']]] },{ $toString: { $dayOfMonth: { $dateToString: {date: new Date("2018-09-06T11:46:59.202Z"),timezone: "America/Thule"} } } }] }} }, _id: 0}}],

        [{$project: {a: { $reverseArray: [[]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$num',1187],[],[],[]]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],7284] }, _id: 0}}],

        [{$project: {a: { $substr: [{ $ltrim: { input: '$str' } },1,6] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Valleys",v: '$num'},{k: "cohesive leading-edge",v: true},{k: "Wooden",v: true}]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["Diverse"],27193] }, _id: 0}}],

        [{$project: {a: { $second: { $second: { $isoWeekYear: { $hour: { $hour: { $toDate: { $arrayElemAt: [[{ $substr: [{ $trim: { input: "Concrete" } },20,1] },'$obj.obj.str',"Alabama override national"],98213] } } } } } } }, _id: 0}}],

        [{$project: {a: { $concatArrays: [[{ $concat: ['$obj.str',"Cambridgeshire Cheese"] }],[],[{ $substrCP: ['$str',0,6] }],[],[]] }, _id: 0}}],

        [{$project: {a: { $reverseArray: [[]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Corporate",v: "Chips Triple-buffered"}]] }, _id: 0}}],

        [{$project: {a: { $toUpper: "optimizing copy" }, _id: 0}}],

        [{$project: {a: { $dayOfMonth: { $dateToParts: { date: new Date("2018-09-06T00:59:48.450Z") } } }, _id: 0}}],

        [{$project: {a: { $trim: { input: "Fantastic Connecticut" } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[{ $toLower: "Poland Health Concrete" },"TCP Interactions"],["bandwidth Coordinator Maryland"]]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[63660,'$obj.obj.num'],37399] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["bandwidth",'$obj.obj.str'],54688] }, _id: 0}}],

        [{$project: {a: { $dayOfMonth: { $dayOfWeek: { $second: { $dayOfYear: { $dateToParts: {date: { $dateFromString: {dateString: "2018-09-06T00:48:07.036Z",timezone: "Navajo"} },timezone: "America/Santarem",iso8601: true} } } } } }, _id: 0}}],

        [{$project: {a: { $substrBytes: [{ $substrBytes: ['$obj.str',19,1] },19,6] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "3rd generation",v: true},{k: "optimize cultivate backing up",v: "maroon"},{k: "cross-media",v: '$obj.obj.num'}]] }, _id: 0}}],

        [{$project: {a: { $isoWeekYear: new Date("2018-09-05T20:45:41.420Z") }, _id: 0}}],

        [{$project: {a: { $week: { $millesecond: { $minute: { $dateToParts: {date: { $dateFromParts: {isoWeekYear: { $indexOfArray: [{ $objectToArray: '$obj.obj.obj.obj' },{ $arrayToObject: [[['$obj.obj.obj.obj.num'],[16504],["Sleek Rubber Fish Associate",{ $ltrim: { input: '$obj.str' } },{ $toString: { $arrayElemAt: [["Tasty Plastic Soap Producer Research"],66801] } }],['$obj.obj.num'],['$obj.num',71083],[],[false,{ $toLower: "Jordan" }],[]]] },4] },isoWeek: { $exp: '$obj.num' },second: { $subtract: [34901,16611] },timezone: "America/Lima"} },iso8601: false} } } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Facilitator",v: { $pow: [57570,9455] }}]] }, _id: 0}}],

        [{$project: {a: { $map: {input: [{ $toLower: "networks eyeballs Producer" },'$obj.obj.obj.str'],in: { $cmp: [{ $arrayToObject: [[{k: "Intranet Auto Loan Account Alaska",v: '$$this'},{k: "Missouri",v: '$$this'},{k: "Cambridgeshire",v: "Buckinghamshire programming"}]] },{ $arrayToObject: [[["Incredible COM",'$$this']]] }] }} }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj.obj.obj.obj' }, _id: 0}}],

        [{$project: {a: { $toString: { $toUpper: "installation" } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.str'],99831] }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [[232]],defaults: [{}]} }, _id: 0}}],

        [{$project: {a: { $reverseArray: [[]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Administrator",v: true},{k: "Senior Manager",v: { $dateToString: {date: '$obj.obj.obj.date',format: "%m-%%-%Z-%M-%m-%j-%j-%m-%G-%Y-%j-%S",timezone: "Africa/Harare",onNull: "alarm Home Loan Account"} }}]] }, _id: 0}}],

        [{$project: {a: { $substrBytes: [{ $concat: ["Realigned"] },5,0] }, _id: 0}}],

        [{$project: {a: { $concatArrays: [[1975,78693,'$obj.obj.obj.obj.num','$obj.obj.obj.obj.num'],['$obj.obj.str',"transmitting Licensed Wooden Gloves"],[{ $substrCP: ['$obj.str',18,5] }],['$obj.num']] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "JSON",v: false}]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[]]] }, _id: 0}}],

        [{$project: {a: { $second: { $millesecond: { $week: { $dateFromString: {dateString: "2018-09-05T22:02:25.401Z",onError: { $arrayToObject: [[{k: "e-services Operations Practical",v: { $hour: { $dayOfWeek: { $hour: { $dateFromParts: {year: { $divide: [40210,'$num'] },month: { $cmp: [{ $arrayElemAt: [[],{ $abs: { $add: [5301] } }] },{ $arrayElemAt: [['$obj.obj.obj.num'],'$obj.obj.obj.obj.num'] }] },day: { $log10: '$obj.obj.obj.obj.num' },hour: { $ceil: 89791 },millisecond: 73092,timezone: "Etc/GMT-7"} } } } }}]] },onNull: { $arrayToObject: [[['$obj.obj.num',90510,51281,'$obj.obj.obj.num']]] }} } } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[{ $substrCP: ["backing up interfaces generating",2,19] }],["Awesome Fresh Car"],['$obj.obj.num','$obj.num',4662],['$obj.obj.num']]] }, _id: 0}}],

        [{$project: {a: { $year: { $dateToString: {date: '$obj.date',format: "%G-%V-%d-%z-%Z",timezone: "Australia/Victoria"} } }, _id: 0}}],

        [{$project: {a: { $dayOfMonth: { $dateFromParts: {isoWeekYear: { $divide: [85302,'$obj.obj.obj.num'] },minute: '$obj.obj.obj.obj.num',timezone: "Asia/Manila"} } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$str',"Norwegian Krone",'$obj.obj.str','$obj.obj.obj.str'],{ $abs: '$obj.obj.obj.obj.num' }] }, _id: 0}}],

        [{$project: {a: { $concat: [{ $substrCP: ['$str',10,16] }] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "e-markets",v: new Date("2018-09-05T21:51:38.158Z")},{k: "Investor yellow",v: '$obj.obj.obj.obj.num'}]] }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj.obj.obj' }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[["interface"],['$obj.obj.obj.num'],[false,98500,34711,new Date("2018-09-06T03:02:47.573Z"),{ $toLower: '$obj.str' }]]] }, _id: 0}}],

        [{$project: {a: { $range: [20,4,9] }, _id: 0}}],

        [{$project: {a: LOOKUP_date;, _id: 0}}],

        [{$project: {a: { $substrBytes: [{ $toLower: { $toUpper: '$str' } },0,9] }, _id: 0}}],

        [{$project: {a: { $dayOfMonth: { $dateFromParts: {isoWeekYear: { $divide: ['$num','$num'] },isoDayOfWeek: { $exp: 43621 },hour: { $mod: [21785,'$obj.obj.num'] },minute: { $indexOfArray: [{ $concatArrays: [] },{ $arrayElemAt: [['$obj.str','$obj.str'],14080] },14] },millisecond: { $add: [] },timezone: "Pacific/Tongatapu"} } }, _id: 0}}],

        [{$project: {a: { $trim: { input: '$obj.obj.obj.str' } }, _id: 0}}],

        [{$project: {a: { $millesecond: { $hour: { $year: { $year: { $isoDayOfWeek: { $dateFromString: {dateString: "2018-09-06T04:18:02.991Z",onError: { $zip: { inputs: [["hacking"],[],[]] } },onNull: { $rtrim: { input: '$obj.obj.str' } }} } } } } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "deposit Missouri",v: '$obj.str'}]] }, _id: 0}}],

        [{$project: {a: { $dayOfMonth: { $dateToString: {date: new Date("2018-09-05T19:59:34.798Z"),onNull: { $arrayToObject: [[{k: "United States of America RAM",v: false}]] }} } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["interface"],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["synergies green hacking"],'$num'] }, _id: 0}}],

        [{$project: {a: { $concat: ['$str'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[33266],["France"]]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "quantifying JSON Solutions",v: new Date("2018-09-05T20:04:17.429Z")}]] }, _id: 0}}],

        [{$project: {a: { $filter: {input: ["Steel Maryland"],as: 'edgardo',cond: { $not: [{ $arrayToObject: [[{k: "Singapore Dollar",v: 73179}]] }] }} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[20877,'$num','$obj.obj.num',5451],60477] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[75108]]] }, _id: 0}}],

        [{$project: {a: { $concatArrays: [["Ergonomic Plastic Chicken functionalities Buckinghamshire"],[],['$obj.obj.str','$obj.str']] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $substr: ["Bedfordshire success withdrawal",9,20] }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj.obj.obj' }, _id: 0}}],

        [{$project: {a: { $dayOfMonth: { $isoDayOfWeek: { $isoWeek: { $millesecond: { $dateFromString: {dateString: "2018-09-06T15:51:34.035Z",format: "%m-%Z-%Y-%w-%w-%U-%H-%V-%m-%H-%G-%d",onError: { $arrayElemAt: [['$obj.obj.obj.obj.num','$obj.num'],31565] }} } } } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[["Operations syndicate system"],['$obj.obj.str',{ $substr: ['$str',12,5] },"Rest Shoes transmit","Advanced magnetic Global"],[],[],[64003]]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $substrCP: ['$obj.obj.str',4,12] },{ $substrBytes: ["Rubber",12,18] },"architectures hack back up"],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $dateFromString: {dateString: "2018-09-06T00:36:30.502Z",format: "%Y-%S-%j-%L-%%",timezone: "Pacific/Bougainville",onNull: { $arrayToObject: [[{k: "asynchronous",v: 199}]] }} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.obj.num',83337,76691],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $isoWeek: { $week: { $millesecond: { $dayOfYear: { $isoWeek: new Date("2018-09-06T07:01:10.942Z") } } } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$num'] }, _id: 0}}],

        [{$project: {a: { $month: { $isoWeek: { $millesecond: { $hour: { $dateToParts: {date: { $dayOfMonth: { $isoWeek: { $dayOfYear: { $dayOfWeek: { $isoDayOfWeek: { $dateFromParts: {year: { $size: [[]] },day: { $trunc: 74068 },second: { $ln: '$num' },millisecond: { $pow: ['$obj.num',{ $multiply: [19683,'$obj.num',23506,'$obj.obj.num',79337,{ $floor: 8080 }] }] }} } } } } } },timezone: "PRC"} } } } } }, _id: 0}}],

        [{$project: {a: { $concatArrays: [['$obj.obj.str'],[29143,'$num']] }, _id: 0}}],

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
