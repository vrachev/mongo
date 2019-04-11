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
        return coll.insert({_id: 10631,str: "paradigms Concrete Exclusive",num: 2844,date: new Date("2018-09-06T02:36:31.826Z"),array: [new Date("2018-09-06T19:15:00.298Z"),53846],obj: {_id: 10632,str: "Philippines",num: 86827,date: new Date("2018-09-06T04:13:56.317Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 10633,str: "Engineer Toys",num: 35256,array: [],obj: {_id: 10634,str: "circuit SMS collaboration",num: 72845,date: new Date("2018-09-06T08:11:50.553Z"),array: ["Metal niches",new Date("2018-09-05T22:42:45.042Z"),99950,"Frozen",[12525,"copying methodologies"],new Date("2018-09-06T19:00:23.692Z"),65761,new Date("2018-09-06T17:32:57.106Z"),42910,[],83412,new Date("2018-09-06T14:36:53.861Z")],obj: {_id: 10635,str: "Small experiences Corporate",num: 99917,date: new Date("2018-09-06T08:41:22.678Z"),obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 10636,str: "Computers",num: 82903,date: new Date("2018-09-06T11:08:49.211Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 10637,str: "mobile Bedfordshire calculating",num: 15967,date: new Date("2018-09-05T22:32:05.520Z"),array: ["revolutionize Outdoors Lari","Denmark Mauritania",[],new Date("2018-09-06T05:10:26.534Z"),3709,{_id: 10638,str: "Borders",num: 87989,date: new Date("2018-09-06T05:26:25.084Z"),array: [32429,{_id: 10639,str: "South Carolina knowledge base National",num: 405,date: new Date("2018-09-06T01:49:48.328Z"),obj: {_id: 10640,num: 50612,date: new Date("2018-09-06T19:17:31.374Z"),obj: {_id: 10641,num: 90726,date: new Date("2018-09-06T00:42:21.158Z"),array: [],obj: {}}}},new Date("2018-09-06T01:28:33.334Z")],obj: {}},"Unbranded Granite Hat Fresh",12850,new Date("2018-09-06T19:31:13.885Z"),66495,"Data open-source"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 10642,str: "magnetic",num: 53705,date: new Date("2018-09-06T10:09:02.239Z"),array: [15008,[new Date("2018-09-06T13:31:24.689Z"),60796,"Usability Plain mint green"],"utilisation Mills",["Fantastic Rubber Pants Generic Fresh Bike Romania",{_id: 10643,str: "input",array: [],obj: {_id: 10644,num: 90385,date: new Date("2018-09-05T20:54:29.497Z"),array: []}},new Date("2018-09-05T22:21:13.953Z"),new Date("2018-09-06T12:23:32.329Z"),"Liaison"],77750,46021,1794,new Date("2018-09-06T06:42:56.026Z"),{_id: 10645,str: "neural",num: 29936,date: new Date("2018-09-06T11:40:19.820Z"),array: [],obj: {}},[new Date("2018-09-06T17:03:50.734Z")]],obj: {_id: 10646,num: 84798,date: new Date("2018-09-06T15:26:24.098Z"),array: ["Wyoming Auto Loan Account Money Market Account",[]]}});
    },

    function(coll) {
        return coll.insert({_id: 10647,str: "olive Seychelles Rupee Savings Account",num: 49007,date: new Date("2018-09-05T20:53:45.605Z"),array: [new Date("2018-09-06T13:33:42.309Z"),new Date("2018-09-06T10:33:33.859Z"),"syndicate Rubber",{_id: 10648,num: 31429,date: new Date("2018-09-06T08:06:30.391Z"),array: [],obj: {_id: 10649,str: "mesh",num: 38423,date: new Date("2018-09-06T12:03:44.715Z"),array: [97694,59084]}},40149,[],{_id: 10650,str: "SMS Texas",num: 25614,date: new Date("2018-09-06T03:23:00.175Z"),obj: {}},"Buckinghamshire",["programming"],"architect",new Date("2018-09-06T07:11:37.835Z"),96990,{_id: 10651,str: "Italy experiences",date: new Date("2018-09-05T20:13:27.659Z"),array: []}],obj: {_id: 10652,str: "AGP",num: 3006,array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 10653,num: 29881,date: new Date("2018-09-06T03:19:37.090Z"),array: [],obj: {_id: 10654,str: "utilize",num: 61585,date: new Date("2018-09-05T22:04:26.153Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 10655,str: "Focused Frozen",num: 91654,date: new Date("2018-09-06T04:36:58.735Z"),array: ["niches",62591,"Ergonomic matrix Beauty",new Date("2018-09-06T11:03:25.714Z"),82949,"Paradigm Uganda",{_id: 10656,str: "Shoes",num: 91189,date: new Date("2018-09-06T13:09:22.051Z"),obj: {}},new Date("2018-09-05T19:57:53.385Z"),[69363,61469,new Date("2018-09-06T07:16:28.793Z"),new Date("2018-09-06T13:52:57.514Z")],{_id: 10657,str: "redundant vortals iterate",num: 29071,date: new Date("2018-09-06T06:43:51.945Z"),array: [],obj: {_id: 10658,str: "Hawaii Data",num: 7818,date: new Date("2018-09-06T02:30:43.739Z"),array: [],obj: {_id: 10659,array: []}}},"scalable generating"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 10660,str: "repurpose Oklahoma Home Loan Account",num: 24532,date: new Date("2018-09-05T21:30:42.179Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 10661,str: "Manager Practical Cotton Pants indexing",num: 74444,date: new Date("2018-09-05T21:48:11.641Z"),array: [new Date("2018-09-06T17:02:42.987Z"),"Gorgeous Cotton Shirt","Solutions",new Date("2018-09-06T05:56:45.178Z"),57771,47673,["maroon","withdrawal",new Date("2018-09-06T01:09:19.586Z")],{_id: 10662,str: "deposit Credit Card Account",array: [],obj: {_id: 10663,num: 62252,date: new Date("2018-09-06T15:39:10.553Z"),obj: {}}},66274,{_id: 10664,str: "architectures Bedfordshire",date: new Date("2018-09-06T01:29:32.209Z"),array: [55929,new Date("2018-09-06T07:44:04.388Z"),[],22914]}]});
    },

    function(coll) {
        return coll.insert({_id: 10665,str: "Towels Health",num: 94004,date: new Date("2018-09-06T06:37:03.958Z"),array: [{_id: 10666,num: 25703,date: new Date("2018-09-05T21:21:30.800Z"),array: ["Customer Dalasi",new Date("2018-09-06T12:40:23.729Z"),9850],obj: {_id: 10667,str: "5th generation magnetic",num: 2220,date: new Date("2018-09-05T20:26:54.075Z"),obj: {}}},new Date("2018-09-06T10:48:28.831Z"),"Central recontextualize",14793,new Date("2018-09-06T13:00:44.300Z"),"Belize blue",24499,new Date("2018-09-06T14:39:46.877Z"),{_id: 10668,str: "Fresh Dominica THX",array: []},[],[]],obj: {_id: 10669,str: "silver Kuwait Ireland",array: [],obj: {_id: 10670,str: "Product Specialist",date: new Date("2018-09-06T17:56:55.534Z"),array: ["Bike portals","stable"],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 10671,str: "Unions Iceland Krona",num: 48568,date: new Date("2018-09-05T22:28:25.310Z"),array: [new Date("2018-09-06T03:07:24.804Z"),1028,88870,"International",{_id: 10672,num: 92620,date: new Date("2018-09-06T14:29:47.178Z"),array: ["North Carolina enterprise Forint",{_id: 10673,str: "optical Reunion transparent",num: 59515,date: new Date("2018-09-06T12:28:18.788Z"),array: [],obj: {}},"bus California program",new Date("2018-09-06T08:25:28.483Z")],obj: {_id: 10674,str: "circuit transmitting Czech Koruna",date: new Date("2018-09-06T05:44:32.261Z"),array: []}},[21547],"Division",new Date("2018-09-06T07:11:04.379Z"),new Date("2018-09-06T16:17:52.740Z"),84631,new Date("2018-09-06T09:01:29.312Z")],obj: {_id: 10675,array: [],obj: {_id: 10676,str: "bandwidth Enterprise-wide",num: 5255,date: new Date("2018-09-06T15:11:01.175Z")}}});
    },

    function(coll) {
        return coll.insert({_id: 10677,str: "Credit Card Account neural",date: new Date("2018-09-05T22:04:28.834Z"),array: [new Date("2018-09-06T03:18:31.263Z"),"extend",new Date("2018-09-06T08:23:06.099Z"),25809,"content Rufiyaa",{_id: 10678,str: "Dong global Facilitator",num: 39955,date: new Date("2018-09-06T14:44:08.968Z"),obj: {}},"Valley",89863,"payment"],obj: {_id: 10679,str: "scale Handmade modular",num: 51451,date: new Date("2018-09-06T16:29:29.891Z"),array: [[],[],new Date("2018-09-06T14:26:16.443Z"),"feed Soft data-warehouse",15118,"wireless withdrawal"],obj: {_id: 10680,num: 55820,date: new Date("2018-09-06T11:14:40.295Z"),array: []}}});
    },

    function(coll) {
        return coll.insert({_id: 10681,str: "Tactics program",num: 20633,date: new Date("2018-09-06T07:46:41.204Z"),array: [],obj: {_id: 10682,str: "well-modulated demand-driven",num: 94899,date: new Date("2018-09-06T15:58:52.639Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 10683,str: "Sleek invoice",num: 2013,date: new Date("2018-09-06T07:44:57.291Z"),array: ["Qatari Rial EXE programming",new Date("2018-09-06T03:56:59.547Z"),[],96240,96241,[],"Legacy Pre-emptive Spain",new Date("2018-09-06T16:23:38.923Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 10684,num: 97365,date: new Date("2018-09-06T19:06:42.958Z"),array: [48581,new Date("2018-09-06T06:17:03.250Z"),"Books value-added copy",new Date("2018-09-06T09:53:21.506Z"),25841,79121,"CFA Franc BEAC","deposit",{_id: 10685,str: "invoice",date: new Date("2018-09-05T21:14:23.956Z"),array: [new Date("2018-09-06T07:18:29.882Z"),new Date("2018-09-06T08:11:30.150Z"),{_id: 10686,str: "Expanded Savings Account TCP",date: new Date("2018-09-06T15:15:55.929Z"),array: [],obj: {_id: 10687,str: "THX fresh-thinking",date: new Date("2018-09-06T07:06:13.497Z"),array: [new Date("2018-09-06T08:07:57.944Z")],obj: {}}},new Date("2018-09-06T17:26:38.739Z"),81799,"quantifying","enhance",[]],obj: {}}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 10688,str: "PNG Tunnel",date: new Date("2018-09-06T04:11:09.527Z"),array: [],obj: {_id: 10689,str: "Technician exuding Personal Loan Account",num: 69026,date: new Date("2018-09-06T10:04:01.871Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 10690,str: "multi-byte",num: 61135,date: new Date("2018-09-06T18:12:06.312Z"),array: ["Jamaican Dollar overriding",{_id: 10691,str: "connecting Costa Rican Colon Money Market Account",num: 14125,date: new Date("2018-09-05T21:17:15.492Z"),array: [],obj: {_id: 10692,num: 74425,array: [],obj: {_id: 10693,str: "Avon",date: new Date("2018-09-06T12:07:30.852Z"),array: ["Granite",45232],obj: {}}}},new Date("2018-09-06T03:25:10.375Z"),82570,"Manager",46899,new Date("2018-09-05T20:56:25.133Z"),"actuating","deploy Zloty calculate",73640,[9926],[],new Date("2018-09-06T11:17:52.989Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 10694,str: "Cambridgeshire Stream Fresh",num: 18684,date: new Date("2018-09-06T13:31:36.567Z"),array: ["bluetooth interactive bus",new Date("2018-09-06T12:02:21.546Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 10695,num: 43904,date: new Date("2018-09-06T08:55:24.700Z"),array: ["withdrawal Triple-buffered",new Date("2018-09-06T08:05:57.707Z"),[],6530,56036,[{_id: 10696,str: "Tasty Plastic Hat programming",num: 79451,date: new Date("2018-09-06T05:06:52.167Z"),array: [new Date("2018-09-05T20:15:06.411Z"),27550,"hack",new Date("2018-09-05T21:49:03.948Z")],obj: {}}],{_id: 10697,str: "International Green JBOD",num: 79748,date: new Date("2018-09-06T01:02:16.125Z"),obj: {_id: 10698,str: "Gorgeous Metal Mouse Plastic plum",obj: {_id: 10699,str: "payment Triple-buffered Rial Omani",num: 68997,date: new Date("2018-09-06T18:39:07.068Z"),array: [73387,73900,"connect",{_id: 10700,num: 18698,array: []}]}}},new Date("2018-09-06T15:40:02.133Z"),"Functionality Officer bifurcated",90270,[]],obj: {_id: 10701,array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 10702,str: "Configuration Australia Incredible Frozen Cheese",num: 54958,date: new Date("2018-09-06T16:19:28.976Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 10703,str: "Planner open-source backing up",num: 18435,date: new Date("2018-09-06T04:35:31.660Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 10704,str: "Coordinator Washington invoice",num: 80031,date: new Date("2018-09-06T14:03:59.882Z"),array: [],obj: {_id: 10705,str: "Awesome",num: 71580,date: new Date("2018-09-06T06:57:39.332Z"),array: [new Date("2018-09-06T07:05:40.120Z"),77815,[59793,new Date("2018-09-05T23:23:15.552Z"),new Date("2018-09-06T00:18:12.708Z"),{_id: 10706,num: 99894,obj: {}}],65732,new Date("2018-09-06T09:30:58.881Z"),83798,{_id: 10707,str: "microchip Proactive International",date: new Date("2018-09-06T04:57:49.298Z"),array: [],obj: {_id: 10708,str: "Inverse Electronics mobile",date: new Date("2018-09-06T17:12:57.832Z"),array: [],obj: {}}},"Investment Account users","Fantastic asymmetric",new Date("2018-09-06T17:04:07.877Z"),new Date("2018-09-06T07:49:41.019Z")]}});
    },

    function(coll) {
        return coll.insert({_id: 10709,str: "Phased Kwanza Specialist",date: new Date("2018-09-06T03:36:08.334Z"),array: [new Date("2018-09-06T13:45:43.498Z"),70036,new Date("2018-09-06T13:13:14.245Z"),"Automotive",new Date("2018-09-06T18:28:50.099Z"),"input Directives Zloty",89618,"deposit","Silver",new Date("2018-09-06T10:20:39.831Z"),{_id: 10710,str: "deposit",num: 21698,date: new Date("2018-09-06T08:13:10.195Z"),array: [],obj: {_id: 10711,str: "lavender",num: 8440,date: new Date("2018-09-05T22:09:25.470Z"),array: [],obj: {}}},52415,[{_id: 10712,str: "networks",num: 4607,date: new Date("2018-09-06T18:58:34.403Z"),array: [],obj: {}},"hard drive"]]});
    },

    function(coll) {
        return coll.insert({_id: 10713,num: 49393,date: new Date("2018-09-06T10:19:04.902Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 10714,str: "leading edge",array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 10715,str: "target",date: new Date("2018-09-06T09:22:40.991Z"),array: [[],"United States of America card CSS","Wooden Gloves",new Date("2018-09-06T17:31:06.017Z"),27123,[],{_id: 10716,str: "Licensed programming",num: 58738,date: new Date("2018-09-06T07:43:56.629Z"),array: [3614,"systemic productize",new Date("2018-09-06T07:30:06.754Z"),85108],obj: {}},new Date("2018-09-06T19:40:30.752Z"),9424],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 10717,str: "Rhode Island withdrawal AGP",num: 16126,date: new Date("2018-09-05T21:28:04.982Z"),array: [86645,[],51117,new Date("2018-09-06T06:52:40.091Z"),"Wooden","SMTP",[],{_id: 10718,str: "Handcrafted Granite Cheese",num: 48387,date: new Date("2018-09-06T15:25:28.043Z"),array: [],obj: {_id: 10719,str: "parsing",num: 66055,date: new Date("2018-09-05T21:10:00.182Z"),array: [new Date("2018-09-06T00:38:51.262Z")],obj: {}}},15049,new Date("2018-09-06T06:18:56.709Z"),new Date("2018-09-06T06:47:09.589Z"),53561]});
    },

    function(coll) {
        return coll.insert({_id: 10720,str: "Missouri Accountability back-end",num: 21401,date: new Date("2018-09-06T08:02:10.777Z"),array: [],obj: {_id: 10721,num: 66925,date: new Date("2018-09-06T07:43:05.752Z"),array: [{_id: 10722,str: "moderator",num: 49205},73043,new Date("2018-09-06T08:49:32.728Z"),"back-end projection Applications","Automotive",new Date("2018-09-06T00:36:34.597Z"),"Oregon",new Date("2018-09-06T15:12:52.327Z"),10538,{_id: 10723,str: "killer",num: 86627,date: new Date("2018-09-06T00:50:51.865Z"),array: [96197,54952,"Personal Loan Account",[{_id: 10724,num: 18003,date: new Date("2018-09-06T08:54:13.398Z"),obj: {}}]],obj: {_id: 10725,str: "orchid red e-services",num: 1266,array: [],obj: {}}},["Compatible payment",new Date("2018-09-06T13:52:45.667Z")],[]]}});
    },

    function(coll) {
        return coll.insert({_id: 10726,str: "JSON",num: 40745,date: new Date("2018-09-06T03:43:29.983Z"),array: [{_id: 10727,str: "solid state",num: 41042,date: new Date("2018-09-05T23:47:14.061Z"),array: [],obj: {_id: 10728,str: "Home Loan Account functionalities Table",num: 43167,date: new Date("2018-09-06T10:08:43.867Z"),obj: {}}},new Date("2018-09-06T19:44:25.404Z"),"deposit Strategist",55432,new Date("2018-09-06T16:59:37.262Z"),11744,"transmit",[],new Date("2018-09-06T01:53:12.423Z")]});
    },

    function(coll) {
        return coll.insert({_id: 10729,str: "Global Dynamic",num: 17997,date: new Date("2018-09-06T03:20:00.697Z"),obj: {_id: 10730,str: "experiences Pants Cotton",num: 78720,date: new Date("2018-09-06T06:41:54.898Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 10731,num: 71188,date: new Date("2018-09-06T04:25:26.257Z"),array: [19726,new Date("2018-09-06T07:40:09.453Z"),"Congolese Franc Checking Account Bermuda","calculate architectures Gorgeous Soft Cheese",1536,new Date("2018-09-06T15:45:12.523Z"),23696,70263,[],46818,[],{_id: 10732,num: 78146,obj: {}}],obj: {_id: 10733,str: "invoice",date: new Date("2018-09-06T00:49:25.662Z"),array: [new Date("2018-09-05T22:44:16.697Z"),"backing up"]}});
    },

    function(coll) {
        return coll.insert({_id: 10734,str: "Frozen United Arab Emirates Checking Account",num: 56270,date: new Date("2018-09-06T18:27:41.879Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 10735,str: "Grocery Awesome Frozen Bike",num: 73086,date: new Date("2018-09-06T00:26:28.617Z"),obj: {_id: 10736,str: "zero tolerance logistical",num: 60655,array: [],obj: {_id: 10737,str: "program Operations",num: 59575,array: [new Date("2018-09-06T15:43:13.413Z"),11300,new Date("2018-09-06T03:35:03.879Z"),"Michigan","circuit clicks-and-mortar",{_id: 10738,str: "Rapids SMTP",num: 85237,date: new Date("2018-09-06T04:12:13.510Z"),array: [],obj: {}},42127,[],"Representative",75759,["mindshare",new Date("2018-09-06T17:26:04.764Z")],[new Date("2018-09-05T21:31:13.939Z"),85434,19800]],obj: {_id: 10739,str: "holistic Auto Loan Account Cotton",date: new Date("2018-09-06T09:01:59.732Z"),array: [new Date("2018-09-06T11:35:06.164Z")]}}}});
    },

    function(coll) {
        return coll.insert({_id: 10740,str: "models",date: new Date("2018-09-06T08:11:38.249Z"),array: ["Licensed Tunisia Cambridgeshire",61512,new Date("2018-09-06T06:34:48.109Z"),[],new Date("2018-09-06T16:03:15.920Z"),{_id: 10741,str: "Wyoming",num: 66178,date: new Date("2018-09-06T06:58:17.333Z"),array: [[],{_id: 10742,str: "Generic Fresh Chips Borders",date: new Date("2018-09-06T18:23:03.988Z"),array: [],obj: {}},"neural Table"],obj: {_id: 10743,num: 87021,date: new Date("2018-09-06T07:15:40.708Z"),array: [53755,"bypassing"]}},new Date("2018-09-06T16:02:47.902Z"),63387,new Date("2018-09-06T00:18:31.257Z"),{_id: 10744,str: "calculate",date: new Date("2018-09-06T05:01:31.666Z"),array: [],obj: {_id: 10745,obj: {}}},32241,"Massachusetts Bedfordshire",30635,new Date("2018-09-05T22:11:10.494Z")]});
    },

    function(coll) {
        return coll.insert({_id: 10746,str: "AI grey",num: 34483,date: new Date("2018-09-06T09:22:16.236Z"),array: [],obj: {_id: 10747,str: "transmitting Avon content-based",num: 89009,date: new Date("2018-09-05T23:21:24.973Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 10748,str: "Kyrgyz Republic Unbranded Lead",num: 22972,array: [new Date("2018-09-06T00:24:48.373Z"),new Date("2018-09-06T17:54:26.460Z"),"Practical",{_id: 10749,str: "maximize infomediaries",num: 64589,date: new Date("2018-09-06T15:33:27.959Z")},84589,"Credit Card Account",[],[]],obj: {_id: 10750,date: new Date("2018-09-05T21:11:40.694Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 10751,str: "local area network",num: 89158,date: new Date("2018-09-06T12:40:32.186Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 10752,str: "back-end Salad",num: 89517,date: new Date("2018-09-06T01:35:40.687Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 10753,str: "systems",num: 64595,date: new Date("2018-09-06T18:55:47.733Z"),array: [],obj: {_id: 10754,str: "Awesome Cotton Table user-facing groupware",num: 97728,array: [{_id: 10755,str: "transparent Generic Soft Hat deposit",num: 73256,date: new Date("2018-09-06T01:01:39.589Z"),array: [[83672]],obj: {}},new Date("2018-09-06T04:04:17.830Z"),"Savings Account Refined New Mexico","Response",new Date("2018-09-05T22:30:50.151Z"),"Monitored payment Ergonomic Cotton Tuna",new Date("2018-09-06T03:18:57.274Z"),new Date("2018-09-06T11:32:01.770Z"),5263,83389,"Consultant",{_id: 10756,num: 3414,date: new Date("2018-09-06T17:53:04.191Z"),array: [],obj: {_id: 10757,str: "Small frame",date: new Date("2018-09-05T23:48:01.313Z")}},{_id: 10758,str: "Outdoors Tasty Fresh Soap",obj: {}},[]],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 10759,str: "Awesome",num: 58822,date: new Date("2018-09-06T03:55:23.402Z"),array: [],obj: {_id: 10760,str: "Dynamic program",num: 5973,date: new Date("2018-09-06T13:32:37.923Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 10761,str: "Ethiopia",num: 86038,date: new Date("2018-09-05T21:19:43.663Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 10762,str: "Syrian Pound Russian Federation",date: new Date("2018-09-06T04:37:07.540Z"),array: [51020,"Direct synthesizing","Coordinator Dynamic whiteboard",79318,new Date("2018-09-06T11:37:26.795Z"),[],"Regional Home Loan Account PCI",{_id: 10763,str: "Bedfordshire Tenge Intranet",num: 92216,date: new Date("2018-09-06T15:17:11.887Z"),array: [new Date("2018-09-06T17:54:41.280Z"),new Date("2018-09-06T09:59:51.017Z"),26869,[]],obj: {_id: 10764,str: "Iran Bike Avon",num: 476,date: new Date("2018-09-05T23:46:40.450Z"),array: [],obj: {_id: 10765,num: 21174,obj: {_id: 10766,str: "Manor Hong Kong neural",num: 20858,obj: {}}}}},new Date("2018-09-06T01:43:02.786Z"),{_id: 10767,str: "Refined Wooden Salad",num: 59644,array: [],obj: {}},"Intelligent Wooden Shoes Dalasi Savings Account"]});
    },

    function(coll) {
        return coll.insert({_id: 10768,str: "target quantify content-based",num: 6524,date: new Date("2018-09-06T17:56:21.352Z"),array: [new Date("2018-09-06T00:24:26.880Z"),"SDD digital index","New Hampshire green","withdrawal copying District",29383,new Date("2018-09-06T10:16:29.140Z"),91792,{_id: 10769,date: new Date("2018-09-06T14:21:20.709Z"),array: [],obj: {_id: 10770,str: "withdrawal",date: new Date("2018-09-06T05:15:59.973Z"),obj: {}}},"payment",new Date("2018-09-06T01:17:49.629Z"),32174,new Date("2018-09-06T15:33:57.502Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 10771,str: "Cambridgeshire Auto Loan Account Ways",array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 10772,str: "Kenyan Shilling Burundi Investment Account",num: 19473,date: new Date("2018-09-06T08:47:30.269Z"),array: [],obj: {_id: 10773,str: "Buckinghamshire violet hierarchy",num: 13587,date: new Date("2018-09-06T10:02:13.713Z"),array: [23365,"index",new Date("2018-09-06T19:20:38.067Z"),"synthesizing",[new Date("2018-09-05T23:16:23.978Z")],[],{_id: 10774,str: "Table",obj: {}},73562,81292,52833,new Date("2018-09-06T05:38:48.925Z"),[],"Locks indigo"],obj: {_id: 10775,num: 28546,date: new Date("2018-09-06T14:00:14.782Z"),array: []}}});
    },

    function(coll) {
        return coll.insert({_id: 10776,str: "Licensed Frozen Hat back up",num: 55772,array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 10777,str: "plum",date: new Date("2018-09-06T00:19:49.196Z"),array: [],obj: {_id: 10778,str: "multi-byte",num: 28071,date: new Date("2018-09-06T18:53:21.612Z"),array: [70469,{_id: 10779,num: 69172,date: new Date("2018-09-06T19:25:42.198Z"),array: [new Date("2018-09-06T10:38:51.117Z")],obj: {}},"transmitter","Iceland Krona transparent",new Date("2018-09-06T08:24:44.857Z"),{_id: 10780,num: 714,date: new Date("2018-09-06T02:37:56.585Z"),array: [],obj: {_id: 10781,str: "application radical",date: new Date("2018-09-06T03:25:04.808Z")}},68547,"invoice"],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 10782,str: "parse",date: new Date("2018-09-06T09:59:40.098Z"),array: [52936,16374,"port SAS",{_id: 10783,str: "vortals generate",num: 21706,date: new Date("2018-09-06T04:11:59.463Z"),array: [],obj: {}},new Date("2018-09-06T06:36:25.981Z"),5010,"policy web services Executive",new Date("2018-09-06T10:35:35.183Z"),65551,[],["Grocery Home Loan Account program"]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 10784,str: "1080p",num: 4031,array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 10785,str: "Cambridgeshire Strategist paradigms",num: 23543,date: new Date("2018-09-06T03:14:51.891Z"),array: [],obj: {_id: 10786,str: "Turkey maximize",num: 22021,date: new Date("2018-09-05T23:12:09.222Z"),array: [new Date("2018-09-06T04:00:44.770Z"),"Rubber pink mint green",new Date("2018-09-06T02:37:56.351Z"),{_id: 10787,date: new Date("2018-09-06T19:45:36.977Z"),obj: {}},"Branding payment",new Date("2018-09-06T05:51:25.147Z"),48146,36664,15417,[new Date("2018-09-06T02:38:31.330Z")]]}});
    },

    function(coll) {
        return coll.insert({_id: 10788,str: "European Unit of Account 17(E.U.A.-17)",num: 33713,date: new Date("2018-09-06T16:22:36.052Z"),array: [],obj: {_id: 10789,str: "CFP Franc Computers South Carolina",num: 65170,date: new Date("2018-09-06T14:44:08.860Z"),array: [new Date("2018-09-05T21:20:56.615Z"),[],{_id: 10790,date: new Date("2018-09-06T15:37:16.754Z")},87410,"Checking Account","deposit Shoes",41466,new Date("2018-09-06T16:04:23.302Z"),{_id: 10791,num: 32992,array: ["revolutionary",30787,new Date("2018-09-05T20:26:09.411Z"),2545],obj: {}}],obj: {_id: 10792,num: 20498}}});
    },

    function(coll) {
        return coll.insert({_id: 10793,str: "Total platforms",num: 78894,array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 10794,str: "Mandatory red",num: 74734,date: new Date("2018-09-05T23:23:40.761Z"),array: [],obj: {_id: 10795,num: 79169,date: new Date("2018-09-06T09:48:10.533Z"),array: [[],new Date("2018-09-05T22:27:09.307Z"),"Sleek clear-thinking",new Date("2018-09-06T05:17:39.969Z"),{_id: 10796,str: "Brazilian Real Nigeria expedite",num: 37413,array: ["circuit virtual",7538,37027],obj: {}},new Date("2018-09-06T00:57:23.157Z"),24927,new Date("2018-09-06T05:00:40.028Z")]}});
    },

    function(coll) {
        return coll.insert({_id: 10797,str: "invoice haptic mobile",date: new Date("2018-09-06T04:21:52.861Z"),array: [46084,new Date("2018-09-06T15:38:54.332Z"),"channels Soap",[new Date("2018-09-06T14:49:29.279Z"),10545,"eyeballs"],[],97047,new Date("2018-09-06T15:06:02.423Z"),{_id: 10798,str: "payment convergence contingency",num: 58518,date: new Date("2018-09-06T08:26:51.485Z"),array: [],obj: {}},[42415,{_id: 10799,str: "SCSI next-generation",num: 37173,obj: {_id: 10800,str: "lime Analyst Public-key",num: 87787,date: new Date("2018-09-06T01:00:56.477Z"),array: []}}],"Rustic expedite",42269,"bandwidth Cambridgeshire"],obj: {_id: 10801,date: new Date("2018-09-06T06:12:33.725Z"),array: [new Date("2018-09-06T04:05:59.064Z"),"Kenya Response"]}});
    },

    function(coll) {
        return coll.insert({_id: 10802,str: "3rd generation Senior River",num: 75448,date: new Date("2018-09-06T00:41:04.010Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 10803,str: "Mayotte",num: 74550,date: new Date("2018-09-06T04:26:57.428Z"),array: [new Date("2018-09-05T21:12:22.301Z"),new Date("2018-09-06T03:53:52.303Z"),new Date("2018-09-06T13:39:43.496Z"),50202,"seize",83743,"SAS South Dakota",[],[],"integrate",80906,{_id: 10804,str: "Gorgeous Concrete Sausages HTTP",num: 98029,array: [new Date("2018-09-06T05:38:30.962Z")],obj: {}}]});
    },

    function(coll) {
        return coll.insert({_id: 10805,str: "generate",num: 94942,date: new Date("2018-09-06T09:16:01.355Z"),array: [98103,48988,68551,"challenge",[[],new Date("2018-09-06T17:32:07.185Z"),new Date("2018-09-06T06:54:06.002Z")],[],"Canyon",{_id: 10806,str: "Handcrafted Frozen Table",num: 96701,date: new Date("2018-09-05T22:11:17.366Z"),array: [54127,"Future Product withdrawal"],obj: {}},"Granite",new Date("2018-09-06T04:05:48.272Z")],obj: {_id: 10807,str: "deposit lime",date: new Date("2018-09-06T17:22:29.447Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 10808,num: 48744,date: new Date("2018-09-06T13:04:19.180Z"),obj: {_id: 10809,str: "leverage Intelligent Steel Gloves Burgs",num: 82130,array: ["auxiliary Computers",new Date("2018-09-06T03:21:03.609Z"),new Date("2018-09-06T08:59:12.665Z"),"platforms Handmade Fresh Chicken Checking Account",65781,new Date("2018-09-06T08:00:02.674Z"),new Date("2018-09-06T04:13:46.432Z"),[4976,23513,[],"Florida Facilitator empower",40241],"COM B2C Frozen",74811,"Wooden Cloned Human"],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 10810,str: "Associate Associate",num: 42374,date: new Date("2018-09-05T20:21:51.153Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 10811,str: "reintermediate 24/365 feed",num: 36731,date: new Date("2018-09-06T16:15:08.883Z"),array: [],obj: {_id: 10812,num: 1548,date: new Date("2018-09-06T17:17:19.197Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 10813,num: 51000,date: new Date("2018-09-06T12:24:41.184Z"),array: [],obj: {_id: 10814,str: "eyeballs Svalbard & Jan Mayen Islands Route",date: new Date("2018-09-06T17:05:38.686Z"),array: [34871,"Tools Central Fort",new Date("2018-09-05T22:57:32.032Z"),new Date("2018-09-06T11:55:48.189Z"),new Date("2018-09-06T06:08:35.091Z"),"engage Home Loan Account Integration",[{_id: 10815,str: "content",num: 29971,date: new Date("2018-09-06T01:05:02.885Z"),array: [],obj: {_id: 10816,str: "Functionality",num: 22177,date: new Date("2018-09-05T21:53:55.707Z")}},new Date("2018-09-06T01:23:07.895Z"),66160,new Date("2018-09-06T06:43:43.195Z"),"Tasty Alaska",23526],{_id: 10817,str: "Sri Lanka",num: 7171,obj: {}},[],{_id: 10818,str: "deposit",date: new Date("2018-09-06T17:10:33.003Z"),array: ["applications Central Saint Helena","Soft Legacy Concrete"],obj: {}}]}});
    },

    function(coll) {
        return coll.insert({_id: 10819,num: 36651,date: new Date("2018-09-06T05:15:09.432Z"),array: [],obj: {_id: 10820,str: "Health Analyst",num: 42662,date: new Date("2018-09-06T02:00:13.554Z"),array: [new Date("2018-09-06T08:41:42.861Z"),{_id: 10821,str: "Ouguiya Reduced circuit",date: new Date("2018-09-06T01:15:37.309Z"),obj: {}},3988,"generate"]}});
    },

    function(coll) {
        return coll.insert({_id: 10822,str: "Visionary Computers",num: 38690,array: ["Maldives Granite",[],4312,{_id: 10823,str: "Fantastic Metal Towels end-to-end Salad",num: 31562,date: new Date("2018-09-06T18:34:41.365Z"),obj: {}},64396,new Date("2018-09-06T06:21:00.060Z"),new Date("2018-09-06T02:34:51.182Z"),"connect calculating connect","Usability EXE Directives",57095,{_id: 10824,str: "well-modulated Product e-business",date: new Date("2018-09-06T11:45:04.861Z"),array: [new Date("2018-09-06T00:55:14.768Z"),78012,[]]},new Date("2018-09-06T07:13:55.153Z")],obj: {_id: 10825,str: "TCP Upgradable",num: 71842,date: new Date("2018-09-06T19:27:57.570Z"),obj: {_id: 10826,str: "Cuba expedite Brook",num: 53617,date: new Date("2018-09-05T23:00:36.029Z"),array: ["SMTP"]}}});
    },

    function(coll) {
        return coll.insert({_id: 10827,str: "Horizontal functionalities",num: 63416,date: new Date("2018-09-06T11:20:35.940Z"),array: [68155,[],new Date("2018-09-06T16:53:54.396Z"),85569,"ivory",{_id: 10828,str: "Isle of Man deposit",num: 34484,date: new Date("2018-09-06T05:52:49.308Z"),array: [],obj: {}},new Date("2018-09-06T03:04:08.864Z"),new Date("2018-09-06T01:20:50.409Z"),"Investment Account aggregate"],obj: {_id: 10829,num: 50244,array: []}});
    },

    function(coll) {
        return coll.insert({_id: 10830,str: "Buckinghamshire contextually-based interfaces",num: 38874,date: new Date("2018-09-05T20:40:40.395Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 10831,str: "turquoise",num: 70821,date: new Date("2018-09-06T07:09:57.267Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 10832,str: "Soft Executive",num: 15940,date: new Date("2018-09-06T07:39:43.722Z"),array: ["Networked Regional","Chicken Administrator Divide",new Date("2018-09-05T23:46:14.525Z"),new Date("2018-09-06T16:32:06.900Z"),1540,"installation architectures Mill",61942,82099],obj: {_id: 10833,str: "Fresh client-server discrete",num: 75358,array: [],obj: {_id: 10834,array: [{_id: 10835,num: 6103,date: new Date("2018-09-06T15:35:05.812Z"),array: [new Date("2018-09-06T08:56:50.152Z"),4224,"Trinidad and Tobago protocol","sky blue extranet",[],[]],obj: {}},{_id: 10836,str: "green overriding",date: new Date("2018-09-06T02:49:20.638Z"),array: [[],80065,new Date("2018-09-05T20:47:44.225Z"),new Date("2018-09-06T16:34:17.597Z")],obj: {}}]}}});
    },

    function(coll) {
        return coll.insert({_id: 10837,str: "parsing Alabama",num: 9806,date: new Date("2018-09-06T10:44:10.482Z"),array: [{_id: 10838,num: 27361,date: new Date("2018-09-06T09:38:59.317Z"),array: [],obj: {}},76028,new Date("2018-09-05T20:42:36.802Z"),37907,"synthesize","Taka",{_id: 10839,str: "Intuitive scale",array: [],obj: {_id: 10840,str: "Gorgeous Rubber Fish",num: 94590,date: new Date("2018-09-06T13:09:27.300Z")}},[{_id: 10841,str: "markets black",num: 35438,array: [new Date("2018-09-05T20:12:39.094Z"),"Bike parse",new Date("2018-09-06T03:57:14.060Z"),[]],obj: {}},78858,"Canadian Dollar","Mississippi Ball",58461]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 10842,str: "eyeballs",num: 33389,date: new Date("2018-09-06T17:10:32.172Z"),array: [new Date("2018-09-06T06:57:27.665Z"),"navigate Chief",new Date("2018-09-06T01:08:38.166Z"),34296,33547,"Electronics Pennsylvania Borders",{_id: 10843,str: "HDD world-class",num: 93454,date: new Date("2018-09-06T06:45:52.959Z"),array: [],obj: {}},new Date("2018-09-06T17:24:53.313Z"),"solid state","Secured Chair e-services"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 10844,str: "paradigms",num: 39620,date: new Date("2018-09-06T04:03:18.346Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 10845,str: "Virtual Web",num: 41812,date: new Date("2018-09-06T00:32:50.867Z"),array: ["deposit neural Afghanistan",35950,new Date("2018-09-06T09:32:18.280Z"),new Date("2018-09-05T20:52:03.449Z"),"Home Loan Account revolutionary Factors","Buckinghamshire",new Date("2018-09-06T15:19:41.156Z"),{_id: 10846,str: "Cambridgeshire Tools",num: 36842,date: new Date("2018-09-05T21:18:10.038Z"),array: [],obj: {}},[{_id: 10847,num: 42516,date: new Date("2018-09-06T16:40:08.038Z"),array: [],obj: {_id: 10848,str: "AI Coordinator Haiti",num: 68680}}],11116,40556,new Date("2018-09-06T18:56:58.662Z"),{_id: 10849,num: 94019,date: new Date("2018-09-05T22:22:51.784Z"),array: [],obj: {_id: 10850,str: "Chair withdrawal",date: new Date("2018-09-05T20:28:37.395Z"),array: [67455,"generate Sausages",{_id: 10851,num: 95557,array: []}],obj: {}}}]});
    },

    function(coll) {
        return coll.insert({_id: 10852,str: "haptic Checking Account",num: 55837,date: new Date("2018-09-05T20:25:28.549Z"),array: [new Date("2018-09-06T00:16:12.030Z"),50130,"encompassing Developer",new Date("2018-09-06T05:46:42.583Z"),"Executive payment",84116,[],52223,"Focused Moroccan Dirham Steel"],obj: {_id: 10853,str: "incremental Intelligent Fresh Shoes",num: 21455,date: new Date("2018-09-06T03:43:48.088Z"),array: [],obj: {_id: 10854,str: "transmitting",num: 68439,date: new Date("2018-09-06T03:39:30.516Z"),obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 10855,str: "bandwidth",date: new Date("2018-09-06T07:31:31.005Z")});
    },

    function(coll) {
        return coll.insert({_id: 10856,str: "cross-platform Brazil",num: 69765,array: [],obj: {_id: 10857,num: 14280,date: new Date("2018-09-06T09:18:40.934Z"),array: [81402,"Moldova",new Date("2018-09-06T07:18:45.735Z"),new Date("2018-09-05T21:02:30.631Z"),["full-range Handmade invoice"],[1764,"fuchsia Toys"],{_id: 10858,str: "parsing UAE Dirham",date: new Date("2018-09-05T20:44:40.358Z"),array: [],obj: {}},96542,4995,"Saint Lucia",{_id: 10859,str: "National",num: 81468,date: new Date("2018-09-06T12:40:03.932Z")},[],[new Date("2018-09-06T15:54:10.069Z")],77712]}});
    },

    function(coll) {
        return coll.insert({_id: 10860,str: "Reduced interfaces Branding",date: new Date("2018-09-05T23:03:52.377Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 10861,str: "orange Micronesia turquoise",num: 3298,date: new Date("2018-09-06T15:55:03.682Z"),array: [83031,"Buckinghamshire Sports","Florida adapter neural",new Date("2018-09-06T11:24:01.578Z"),87406,new Date("2018-09-06T04:19:58.072Z"),88188,new Date("2018-09-06T16:56:16.974Z"),{_id: 10862,str: "systems Marshall Islands",num: 86361,date: new Date("2018-09-06T06:00:34.002Z"),array: [],obj: {_id: 10863,num: 98266,date: new Date("2018-09-06T03:28:59.890Z"),array: [[]],obj: {}}},"implement Concrete",{_id: 10864,str: "program Forge Stravenue",num: 52419,array: [{_id: 10865,str: "Land Applications",num: 81332,array: [],obj: {}},"invoice evolve Analyst",new Date("2018-09-06T09:42:59.116Z")],obj: {}},new Date("2018-09-06T16:11:23.076Z"),[]],obj: {_id: 10866,date: new Date("2018-09-05T20:30:48.000Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 10867,date: new Date("2018-09-06T19:13:19.829Z"),array: ["Cambridgeshire",new Date("2018-09-06T12:30:35.397Z"),"XSS redundant copying",81696,new Date("2018-09-06T04:52:32.765Z"),new Date("2018-09-06T19:12:25.701Z"),4800,{_id: 10868,str: "web-enabled",num: 74103,array: [],obj: {}},new Date("2018-09-06T07:48:58.046Z"),new Date("2018-09-06T03:18:18.751Z"),"override Fresh Frozen",["optical synthesize Missouri"],{_id: 10869,str: "wireless Officer",date: new Date("2018-09-06T02:31:37.506Z"),array: [56655,[]],obj: {_id: 10870,str: "Auto Loan Account customer loyalty enhance",num: 25193,date: new Date("2018-09-05T20:47:13.380Z"),array: [[],80651,{_id: 10871,str: "Delaware orchestration",num: 74335,date: new Date("2018-09-05T23:46:48.777Z"),obj: {}}]}}],obj: {_id: 10872,str: "bypassing",num: 16099,date: new Date("2018-09-06T11:30:23.485Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 10873,str: "emulation",num: 95383,date: new Date("2018-09-06T14:12:54.795Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 10874,str: "Towels Oregon maroon",num: 88428,date: new Date("2018-09-06T12:31:42.777Z"),array: [new Date("2018-09-05T22:02:28.439Z"),"maroon Unbranded Concrete Fish",new Date("2018-09-05T23:03:26.269Z"),14834,{_id: 10875,str: "withdrawal copy solutions",date: new Date("2018-09-06T01:46:07.282Z"),array: ["Jewelery",{_id: 10876,str: "grey Yemeni Rial SQL",num: 71675,date: new Date("2018-09-06T07:55:29.165Z"),obj: {_id: 10877,str: "Kina monitor Savings Account",array: [],obj: {}}}],obj: {_id: 10878,str: "Granite North Dakota Directives",array: [{_id: 10879,str: "Ergonomic Credit Card Account",date: new Date("2018-09-06T16:23:28.038Z"),array: [57904,20901,new Date("2018-09-05T22:15:08.532Z")]},[]],obj: {}}},{_id: 10880,num: 63734,date: new Date("2018-09-06T13:39:57.737Z")},11396,"Walks Bermudian Dollar (customarily known as Bermuda Dollar)",new Date("2018-09-06T07:38:36.498Z"),[],"orange Assurance",{_id: 10881,str: "red Personal Loan Account client-driven",num: 27334,date: new Date("2018-09-06T11:14:50.853Z"),obj: {}},new Date("2018-09-06T19:26:58.192Z")]});
    },

    function(coll) {
        return coll.insert({_id: 10882,str: "Gloves",num: 98615,date: new Date("2018-09-05T22:16:23.302Z"),array: [],obj: {_id: 10883,str: "mission-critical neural Music",num: 12539,date: new Date("2018-09-06T08:52:09.412Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 10884,str: "Small success structure",num: 44467,date: new Date("2018-09-06T13:21:29.641Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 10885,str: "Refined Glen",num: 58068,date: new Date("2018-09-06T07:41:45.321Z")});
    },

    function(coll) {
        return coll.insert({_id: 10886,str: "Product SDD Valleys",num: 39129,date: new Date("2018-09-06T00:18:20.943Z"),array: [new Date("2018-09-06T15:55:18.409Z"),73560,new Date("2018-09-06T16:48:30.066Z"),36280,"connect XML","convergence Regional",5622,{_id: 10887,num: 22168,date: new Date("2018-09-06T15:39:14.640Z"),array: [],obj: {}},"Home Loan Account payment",60738]});
    },

    function(coll) {
        return coll.insert({_id: 10888,str: "transmit salmon",num: 83574,date: new Date("2018-09-06T12:30:08.304Z"),array: ["Marketing",79584,new Date("2018-09-06T06:54:18.275Z"),"Intelligent",90589,new Date("2018-09-06T05:58:28.199Z"),[["Handcrafted Wooden Chicken",{_id: 10889,str: "Legacy",num: 58580,date: new Date("2018-09-06T17:05:27.587Z"),array: [],obj: {_id: 10890,str: "Paradigm",num: 35133,date: new Date("2018-09-06T11:20:34.079Z"),obj: {_id: 10891,num: 52907,date: new Date("2018-09-06T11:58:25.920Z"),array: [],obj: {}}}}],"Wooden payment Music",new Date("2018-09-05T23:10:05.186Z")],67693,"deposit transmit Optimization"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 10892,str: "infomediaries",num: 85067,date: new Date("2018-09-06T14:41:05.410Z"),obj: {_id: 10893,str: "Fish SMS Configuration",num: 85614,date: new Date("2018-09-06T04:34:00.287Z"),array: [],obj: {_id: 10894,str: "input Czech Republic red",num: 6095,array: [{_id: 10895,num: 27074,array: []},"THX Home","Mouse",new Date("2018-09-06T00:21:15.152Z"),[],"COM Future Court","invoice",new Date("2018-09-06T00:42:12.734Z"),"withdrawal",78174,{_id: 10896,str: "e-business",date: new Date("2018-09-06T03:30:25.629Z"),array: [77566]},new Date("2018-09-05T22:09:14.264Z"),new Date("2018-09-06T01:59:28.367Z"),new Date("2018-09-06T03:27:41.757Z")],obj: {_id: 10897,num: 18873,date: new Date("2018-09-06T19:34:53.449Z"),obj: {_id: 10898,str: "hack Bike",num: 11173,array: [51166,{_id: 10899,date: new Date("2018-09-06T05:11:35.844Z"),array: [new Date("2018-09-06T16:41:57.296Z")],obj: {}},45691],obj: {}}}}}});
    },

    function(coll) {
        return coll.insert({_id: 10900,str: "Dominican Republic",num: 68186,date: new Date("2018-09-06T02:01:42.752Z"),array: ["Reduced parse transparent",new Date("2018-09-06T10:50:56.171Z"),"scale Outdoors",93807,87716,new Date("2018-09-05T21:36:37.839Z"),{_id: 10901,str: "Orchestrator Bedfordshire",num: 96634,date: new Date("2018-09-05T22:17:22.990Z"),obj: {_id: 10902,str: "metrics generating Synergistic",num: 90460,date: new Date("2018-09-06T04:54:50.125Z"),array: ["Legacy",98853,new Date("2018-09-06T11:40:35.397Z")],obj: {}}},[[],{_id: 10903,str: "Sleek Rubber Salad Guarani",num: 8421,array: [],obj: {}},["instruction set core Bedfordshire"]],"Ouguiya",new Date("2018-09-05T20:21:13.816Z"),57173]});
    },

    function(coll) {
        return coll.insert({_id: 10904,str: "Cordoba Oro silver",num: 60163,date: new Date("2018-09-06T14:35:35.403Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 10905,str: "Idaho USB",num: 54401,array: [new Date("2018-09-06T14:50:09.047Z"),"Chair Bike",87537,{_id: 10906,str: "Frozen",num: 81039,date: new Date("2018-09-06T11:33:44.686Z"),obj: {_id: 10907,str: "Fantastic Concrete Mouse index synthesizing",num: 62485,date: new Date("2018-09-06T09:17:35.799Z"),array: [],obj: {}}},63403,56562,"Throughway IB convergence",[],[],[new Date("2018-09-06T04:32:50.775Z")]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 10908,str: "transform",date: new Date("2018-09-05T22:48:10.640Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 10909,str: "overriding brand",num: 82220,obj: {_id: 10910,str: "Forge Investment Account",num: 87227,date: new Date("2018-09-06T17:14:23.544Z"),array: ["Usability Sri Lanka Rupee","South Georgia and the South Sandwich Islands","Concrete Fish Virtual",75773,42877,44170,new Date("2018-09-06T08:30:31.277Z"),{_id: 10911,str: "Executive target Gorgeous Frozen Ball",num: 49179,date: new Date("2018-09-06T08:57:57.813Z"),array: [],obj: {}},[new Date("2018-09-05T23:45:53.846Z"),"Director Toys","National"]],obj: {_id: 10912,date: new Date("2018-09-06T15:45:04.518Z"),array: [],obj: { _id: 10913 }}}});
    },

    function(coll) {
        return coll.insert({_id: 10914,str: "Gorgeous Plastic Tuna 24/365 parsing",num: 32405,date: new Date("2018-09-06T14:50:29.510Z"),array: ["Borders",new Date("2018-09-06T10:14:43.550Z"),new Date("2018-09-06T16:54:23.151Z"),"context-sensitive cross-platform national",51632,new Date("2018-09-06T14:18:47.914Z"),32646,[],"Kids Team-oriented",new Date("2018-09-06T11:14:02.525Z")],obj: {_id: 10915,str: "synthesizing",num: 76379,date: new Date("2018-09-06T01:06:53.779Z"),array: [],obj: {_id: 10916,str: "Legacy",num: 85265,date: new Date("2018-09-06T17:13:03.579Z"),array: [{ _id: 10917 },"Forward calculate","Borders Berkshire",97943,{_id: 10918,str: "technologies Generic",num: 7374,date: new Date("2018-09-05T20:25:19.358Z"),array: [],obj: {}}]}}});
    },

    function(coll) {
        return coll.insert({_id: 10919,str: "object-oriented Field",num: 29637,date: new Date("2018-09-06T18:08:32.278Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 10920,str: "matrix withdrawal intangible",num: 81601,date: new Date("2018-09-05T19:56:50.892Z"),array: [44381,"Direct",new Date("2018-09-05T22:37:13.674Z"),new Date("2018-09-06T16:56:25.321Z"),"Malaysia Alaska",[7488,new Date("2018-09-06T10:59:22.927Z")],1930,"programming",55668,"Crossroad Dominican Republic"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 10921,str: "Hat reinvent",num: 36522,date: new Date("2018-09-06T18:07:37.970Z"),array: [new Date("2018-09-06T01:57:41.734Z"),[],{_id: 10922,num: 5619,date: new Date("2018-09-06T01:47:14.507Z"),obj: {_id: 10923,str: "Paradigm SSL",num: 44818,date: new Date("2018-09-06T08:53:58.125Z"),array: [],obj: {}}},96703,{_id: 10924,str: "Ball help-desk",array: []},"bus",new Date("2018-09-05T21:55:19.728Z")],obj: {_id: 10925,str: "Cambridgeshire Florida",num: 19641,date: new Date("2018-09-06T05:28:11.050Z")}});
    },

    function(coll) {
        return coll.insert({_id: 10926,str: "Outdoors",num: 53639,date: new Date("2018-09-05T23:41:19.421Z"),array: [39098,87913,new Date("2018-09-05T20:07:52.687Z"),new Date("2018-09-06T09:12:19.735Z"),new Date("2018-09-06T16:50:31.029Z"),37215,"Arkansas Toys programming",41555,"Direct","payment Borders"],obj: {_id: 10927,str: "Cyprus Berkshire",date: new Date("2018-09-06T04:50:33.898Z"),array: [{_id: 10928,str: "Books grey",num: 85020,date: new Date("2018-09-06T09:25:07.063Z"),array: [],obj: {}},"Rubber quantifying"],obj: {_id: 10929,num: 77966,date: new Date("2018-09-06T01:02:35.325Z"),obj: {_id: 10930,str: "exploit Pizza",date: new Date("2018-09-06T11:51:08.704Z"),obj: {_id: 10931,num: 3820,date: new Date("2018-09-06T09:01:08.423Z"),array: []}}}}});
    },

    function(coll) {
        return coll.insert({_id: 10932,str: "auxiliary Gabon Shoes",date: new Date("2018-09-06T18:17:28.705Z"),array: [29735,new Date("2018-09-06T19:30:04.796Z"),54164,new Date("2018-09-06T07:50:21.231Z"),{_id: 10933,str: "deposit 1080p Stravenue",date: new Date("2018-09-06T07:19:32.270Z"),obj: {}},34848,98204,44440,"Handmade Concrete Mouse",new Date("2018-09-06T10:10:08.359Z"),"neural Florida",new Date("2018-09-06T04:44:25.017Z"),"impactful"],obj: {_id: 10934,str: "Coordinator invoice",num: 99594,date: new Date("2018-09-06T01:20:49.858Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 10935,str: "Keyboard implement",num: 31757,date: new Date("2018-09-06T02:23:19.095Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 10936,str: "Salad",num: 66724,date: new Date("2018-09-05T23:20:59.425Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 10937,str: "mint green",num: 28867,date: new Date("2018-09-06T06:15:12.028Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 10938,str: "Denmark",num: 55737,date: new Date("2018-09-06T05:42:41.831Z"),array: [{_id: 10939,str: "Dynamic",num: 17492,date: new Date("2018-09-05T21:54:56.096Z"),array: []},new Date("2018-09-06T12:20:28.861Z"),"JBOD",new Date("2018-09-06T07:05:41.996Z"),"Concrete functionalities navigating",new Date("2018-09-06T13:31:34.851Z"),[11664],"Manor hacking",28231,new Date("2018-09-06T13:22:48.552Z"),[[],44127],{_id: 10940,str: "Bermudian Dollar (customarily known as Bermuda Dollar) Chair Baby",date: new Date("2018-09-05T20:56:44.367Z"),array: [],obj: {}},new Date("2018-09-06T15:44:47.743Z")]});
    },

    function(coll) {
        return coll.insert({_id: 10941,num: 13956,date: new Date("2018-09-06T12:28:55.245Z"),array: [new Date("2018-09-06T04:31:28.266Z"),"Planner",64712,30192,"strategize 24/7",{_id: 10942,str: "mobile Central",num: 9226,date: new Date("2018-09-05T22:16:38.484Z"),obj: {_id: 10943,str: "Seychelles Car",num: 47905,date: new Date("2018-09-06T07:35:43.600Z"),array: [],obj: {_id: 10944,num: 11159,date: new Date("2018-09-06T09:06:05.184Z"),obj: {}}}},new Date("2018-09-06T08:55:31.059Z"),new Date("2018-09-06T02:54:31.197Z"),"Functionality",new Date("2018-09-06T11:14:27.156Z"),84433,[new Date("2018-09-05T21:42:00.305Z"),30163,[]]],obj: {_id: 10945,str: "payment connecting Baby",array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 10946,str: "Industrial Dynamic",num: 66111,date: new Date("2018-09-06T00:30:01.117Z"),array: [],obj: {_id: 10947,str: "Oklahoma",num: 4311,date: new Date("2018-09-06T19:53:30.035Z"),array: [new Date("2018-09-06T13:57:26.680Z"),84557,{_id: 10948,str: "USB open architecture panel",array: [],obj: {}},new Date("2018-09-05T22:12:32.012Z"),"wireless efficient","calculate Avon indigo",new Date("2018-09-06T17:50:02.261Z"),76382,16164,new Date("2018-09-06T04:02:28.497Z"),{_id: 10949,str: "Congolese Franc Profit-focused",num: 32354,date: new Date("2018-09-06T18:06:36.704Z"),obj: {_id: 10950,num: 62189,date: new Date("2018-09-06T08:48:03.078Z"),obj: {}}},"Rustic Frozen Keyboard azure Square"]}});
    },

    function(coll) {
        return coll.insert({_id: 10951,str: "COM",num: 27306,date: new Date("2018-09-06T15:09:51.289Z"),array: ["Guam Avon Guarani",{_id: 10952,str: "tan invoice synthesizing",num: 32774,date: new Date("2018-09-06T12:32:37.382Z"),array: [],obj: {}},new Date("2018-09-06T00:07:07.503Z"),88980,[new Date("2018-09-06T15:42:35.278Z")],95029,new Date("2018-09-06T15:43:44.885Z"),"Idaho",{_id: 10953,str: "Plastic Books South Carolina",num: 3132,date: new Date("2018-09-06T01:50:25.284Z"),array: [],obj: {_id: 10954,date: new Date("2018-09-06T16:45:37.224Z")}},new Date("2018-09-05T20:01:15.688Z"),34386,88323,"sticky payment Chile"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 10955,str: "Small Concrete Shoes cross-platform needs-based",num: 5015,date: new Date("2018-09-06T08:10:10.793Z")});
    },

    function(coll) {
        return coll.insert({_id: 10956,str: "deposit Canadian Dollar compress",num: 35051,date: new Date("2018-09-06T00:09:46.702Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 10957,str: "Handmade Cotton Chicken turquoise Savings Account",num: 55044,date: new Date("2018-09-06T04:44:52.296Z"),array: [new Date("2018-09-06T14:06:11.670Z"),901,"customer loyalty Money Market Account",{_id: 10958,str: "Lodge Producer Associate",date: new Date("2018-09-06T08:24:15.564Z"),array: ["bus Iowa Wooden",99465,86730],obj: {}},[],14335,new Date("2018-09-06T09:19:55.329Z"),{_id: 10959,str: "reboot Credit Card Account synthesize",num: 41083,date: new Date("2018-09-06T14:35:15.529Z"),array: []},{_id: 10960,str: "Phased Assurance Markets",num: 89360,date: new Date("2018-09-06T04:07:52.349Z"),array: [new Date("2018-09-06T16:31:07.001Z"),"maximize Developer Granite"],obj: {}},[]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 10961,str: "dot-com",num: 23402,date: new Date("2018-09-06T00:57:53.998Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 10962,num: 25067,array: [42983,new Date("2018-09-06T16:48:21.127Z"),{_id: 10963,str: "Canyon compressing",date: new Date("2018-09-06T14:18:01.779Z"),array: [],obj: {}},new Date("2018-09-06T08:59:39.845Z"),new Date("2018-09-06T11:53:06.939Z"),"software","Marketing North Dakota",54827,["enterprise 24 hour Gorgeous"],[40712,"Centralized"],"Visionary Glen",2256,new Date("2018-09-06T09:42:24.006Z"),new Date("2018-09-05T23:27:56.140Z"),13444],obj: {_id: 10964,str: "Research Cotton holistic",num: 34986,date: new Date("2018-09-06T17:24:33.096Z"),array: [new Date("2018-09-06T04:16:38.931Z")],obj: {_id: 10965,str: "Graphic Interface functionalities",num: 90812,date: new Date("2018-09-06T09:04:49.041Z"),array: []}}});
    },

    function(coll) {
        return coll.insert({_id: 10966,str: "facilitate",num: 48616,date: new Date("2018-09-05T21:19:25.303Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 10967,str: "Borders Drives granular",num: 89609,date: new Date("2018-09-06T17:46:10.634Z"),array: [44007,"Unbranded",6405,{_id: 10968,str: "parse application",num: 21796,date: new Date("2018-09-06T14:06:02.146Z"),obj: {_id: 10969,str: "bluetooth Home Operations",num: 1165,array: [],obj: {}}},new Date("2018-09-05T23:14:33.338Z"),97715,new Date("2018-09-06T14:15:19.140Z"),76114,"North Dakota Missouri standardization",[new Date("2018-09-05T23:53:26.105Z"),[]],"sky blue","Belize Bulgarian Lev Tonga","4th generation"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 10970,str: "analyzing Borders",num: 9416,date: new Date("2018-09-06T07:43:46.941Z"),array: ["innovate Practical",98868,new Date("2018-09-05T22:43:09.144Z"),"Steel Table","Circle collaboration Home Loan Account",new Date("2018-09-06T15:43:28.212Z"),new Date("2018-09-06T03:21:58.037Z"),98727],obj: {_id: 10971,str: "Internal generate Rubber",num: 11441,date: new Date("2018-09-06T19:17:40.696Z"),array: [],obj: {_id: 10972,str: "Planner channels",num: 87670}}});
    },

    function(coll) {
        return coll.insert({_id: 10973,str: "Generic compressing",num: 10757,date: new Date("2018-09-06T14:09:01.775Z"),array: [],obj: {_id: 10974,str: "experiences Chips Soft",num: 56565,date: new Date("2018-09-06T13:24:07.124Z"),array: ["impactful TCP",[34262,33230,"Health"],new Date("2018-09-06T00:28:12.533Z"),new Date("2018-09-06T16:58:24.261Z"),13711,{_id: 10975,str: "systemic",num: 94789,date: new Date("2018-09-06T19:22:29.268Z"),array: [],obj: {}},new Date("2018-09-06T18:29:11.178Z"),"Bedfordshire Money Market Account Balboa US Dollar",70324,"24 hour Games Bedfordshire",32206,new Date("2018-09-05T23:50:10.075Z"),"Walk Awesome Concrete Ball"],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 10976,str: "Infrastructure fresh-thinking",num: 82236,date: new Date("2018-09-06T02:21:32.391Z"),array: [14618,"Home Montana Bedfordshire",new Date("2018-09-06T08:57:57.407Z"),new Date("2018-09-06T05:40:10.494Z"),new Date("2018-09-06T05:10:03.757Z"),4502,"Borders Intranet system",[45298],17009,"Marshall Islands","withdrawal indexing",[]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 10977,str: "monetize sensor",num: 41564,date: new Date("2018-09-06T07:06:56.864Z"),array: [],obj: {_id: 10978,str: "haptic bluetooth",num: 80530,date: new Date("2018-09-06T05:26:06.162Z"),array: [],obj: {_id: 10979,str: "Cotton",num: 13438,date: new Date("2018-09-06T02:55:10.827Z"),array: [59257,"Ball cross-media withdrawal",74494,new Date("2018-09-06T06:15:59.961Z"),14984,{_id: 10980,num: 8468,array: [new Date("2018-09-06T19:26:39.226Z"),"synthesizing","parse",new Date("2018-09-05T23:23:45.577Z")]},"Electronics Checking Account morph",{_id: 10981,num: 21774,obj: {}},new Date("2018-09-06T14:44:58.243Z"),new Date("2018-09-06T17:45:36.953Z")]}}});
    },

    function(coll) {
        return coll.insert({_id: 10982,str: "Hat disintermediate",num: 61110,date: new Date("2018-09-06T12:59:21.646Z"),array: [28213,new Date("2018-09-06T03:52:42.204Z"),[],43354,"Markets generating","virtual",66669,new Date("2018-09-06T11:15:28.275Z"),"bandwidth",new Date("2018-09-06T02:22:34.918Z"),{_id: 10983,str: "Bouvet Island (Bouvetoya) generate transmitting",num: 67364,date: new Date("2018-09-06T03:02:43.886Z"),array: [],obj: {}},"backing up payment",{_id: 10984,str: "cyan calculating",num: 23699,date: new Date("2018-09-06T03:33:12.609Z")}],obj: {_id: 10985,str: "RSS",num: 90936,date: new Date("2018-09-05T22:09:15.092Z"),array: [],obj: {_id: 10986,str: "Streamlined Regional",num: 74181}}});
    },

    function(coll) {
        return coll.insert({_id: 10987,num: 77247,date: new Date("2018-09-06T03:46:08.414Z"),array: [{_id: 10988,str: "calculating Music Borders",num: 26779,date: new Date("2018-09-06T00:34:40.095Z"),array: [],obj: {}},48287,"quantifying synthesizing Cuban Peso Peso Convertible",new Date("2018-09-06T05:38:06.009Z"),"Comoros deposit",28013,"deposit Pakistan Rupee functionalities",new Date("2018-09-05T23:46:50.113Z"),30488,"SCSI Refined Metal Chips infrastructures",new Date("2018-09-06T02:19:35.981Z")],obj: {_id: 10989,str: "Books monetize",num: 37844,date: new Date("2018-09-06T12:52:08.446Z")}});
    },

    function(coll) {
        return coll.insert({_id: 10990,str: "Money Market Account",date: new Date("2018-09-05T20:25:58.373Z"),array: [new Date("2018-09-06T02:55:39.276Z"),[],"interface",28303,82582,"Refined Granite Chicken Corporate","Gateway North Dakota",[],"Square frictionless Automotive",{_id: 10991,str: "Arkansas Investor",num: 37571,obj: {_id: 10992,num: 24241,date: new Date("2018-09-06T10:09:29.523Z"),array: [],obj: {_id: 10993,str: "leading-edge",date: new Date("2018-09-06T11:29:19.262Z"),array: [],obj: {}}}},new Date("2018-09-06T14:52:08.088Z"),34225,new Date("2018-09-06T10:20:22.399Z")]});
    },

    function(coll) {
        return coll.insert({_id: 10994,str: "Baby Falkland Islands Pound",num: 56274,date: new Date("2018-09-06T05:05:45.056Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 10995,str: "Administrator",num: 55583,date: new Date("2018-09-06T00:11:57.356Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 10996,str: "Representative",num: 23222,date: new Date("2018-09-06T01:53:55.391Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 10997,str: "index Cambridgeshire",num: 72869,date: new Date("2018-09-06T08:00:37.805Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 10998,num: 28932,date: new Date("2018-09-06T09:11:53.069Z"),array: [new Date("2018-09-06T17:17:19.476Z"),new Date("2018-09-05T22:06:25.574Z"),"Refined Cotton Chair payment Refined Rubber Salad",new Date("2018-09-06T14:33:11.227Z"),73114,47621,"Gateway Handcrafted Rubber Ball",26086,"Licensed Small Wooden Mouse",new Date("2018-09-05T23:43:40.576Z"),"Salad Wooden","Orchestrator"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 10999,str: "Organic",num: 41019,date: new Date("2018-09-06T05:23:41.257Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 11000,str: "Corporate zero defect",num: 49273,date: new Date("2018-09-06T09:25:39.867Z"),array: [new Date("2018-09-06T02:46:15.439Z"),"Intelligent Fresh Chips",{_id: 11001,str: "Drive sensor",obj: {_id: 11002,str: "Sleek Fresh Shoes",date: new Date("2018-09-06T01:40:45.362Z"),array: [],obj: {_id: 11003,str: "transmitting benchmark",num: 94911,date: new Date("2018-09-06T05:16:19.245Z"),array: [14105]}}},"Bike Outdoors pink","Borders California",20021,75100,new Date("2018-09-06T18:04:24.787Z"),new Date("2018-09-05T20:58:48.159Z"),[],["task-force Dynamic",{_id: 11004,str: "synergies Marketing",num: 84223,obj: {}},new Date("2018-09-06T03:07:34.843Z")],[]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 11005,str: "Business-focused frame out-of-the-box",num: 69100,obj: {_id: 11006,str: "hacking Bedfordshire",num: 53104,date: new Date("2018-09-06T18:20:17.167Z"),array: [19318,new Date("2018-09-06T01:22:25.263Z"),"invoice Cove","e-enable",new Date("2018-09-06T11:05:14.563Z")]}});
    },

    function(coll) {
        return coll.insert({_id: 11007,str: "conglomeration aggregate hard drive",num: 74563,date: new Date("2018-09-06T08:06:31.902Z"),array: ["enterprise Total bypass",new Date("2018-09-06T06:14:08.081Z"),85679,"Fish",81562,new Date("2018-09-06T13:17:31.342Z"),new Date("2018-09-05T20:47:51.410Z"),new Date("2018-09-06T02:21:56.035Z"),new Date("2018-09-06T06:28:15.172Z"),[{_id: 11008,str: "Savings Account",num: 13650,date: new Date("2018-09-06T18:23:04.231Z"),array: [3179],obj: {_id: 11009,num: 82355,date: new Date("2018-09-06T18:31:58.836Z"),array: [],obj: {}}},new Date("2018-09-06T11:48:12.046Z")],[]],obj: {_id: 11010,str: "Internal Buckinghamshire",num: 87670,date: new Date("2018-09-06T16:42:46.502Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 11011,str: "Practical Steel Pizza",num: 12360,date: new Date("2018-09-06T13:36:42.225Z"),array: ["Auto Loan Account Frozen",new Date("2018-09-06T18:03:56.655Z"),91704,"Refined Gorgeous Cotton Cheese","Plastic focus group Centralized",{_id: 11012,str: "initiatives Global streamline",date: new Date("2018-09-06T15:13:52.673Z"),obj: {}},["integrate",new Date("2018-09-06T00:09:24.074Z"),31338,new Date("2018-09-06T13:55:55.461Z")],new Date("2018-09-06T14:30:17.935Z"),48701,new Date("2018-09-06T00:51:38.194Z"),"budgetary management Investment Account",31227],obj: {_id: 11013,num: 64437,date: new Date("2018-09-06T08:55:47.768Z"),array: [],obj: {_id: 11014,str: "Metrics Bedfordshire Wyoming",date: new Date("2018-09-06T04:47:24.347Z"),array: []}}});
    },

    function(coll) {
        return coll.insert({_id: 11015,str: "hacking Clothing Beauty",num: 47815,date: new Date("2018-09-05T21:24:55.160Z"),array: [new Date("2018-09-06T19:49:39.928Z"),[],"Multi-tiered Books paradigms",new Date("2018-09-06T03:28:46.399Z"),"Montana mission-critical green",30472,{_id: 11016,str: "generating scale Baht",num: 9922,date: new Date("2018-09-06T02:08:31.868Z"),array: [],obj: {_id: 11017,str: "Managed Granite",num: 99962,array: [31172,"Avon SDD XML",new Date("2018-09-05T22:20:41.619Z"),[new Date("2018-09-05T23:49:36.420Z"),"Down-sized modular Legacy"],[]],obj: {_id: 11018,num: 30136,array: [16116,2946,{_id: 11019,str: "HDD",num: 98659,date: new Date("2018-09-06T03:27:05.443Z"),array: [],obj: {_id: 11020,str: "ADP",obj: {}}}]}}},["Wooden next-generation"],{_id: 11021,date: new Date("2018-09-06T05:01:56.945Z")},new Date("2018-09-06T05:54:43.222Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 11022,num: 15135,date: new Date("2018-09-06T10:15:44.753Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 11023,num: 27356,date: new Date("2018-09-06T16:05:16.686Z"),array: [],obj: {_id: 11024,str: "Fantastic",num: 13595,date: new Date("2018-09-05T20:55:20.983Z"),array: ["e-business",new Date("2018-09-06T19:43:22.293Z"),new Date("2018-09-06T04:37:45.074Z"),"frame online",new Date("2018-09-05T23:08:08.825Z"),20609,new Date("2018-09-06T19:48:59.886Z"),"Associate",90676,73807,"Ergonomic Frozen Soap Rustic",{_id: 11025,str: "ADP deposit withdrawal",num: 41599,date: new Date("2018-09-06T12:42:18.721Z"),array: [new Date("2018-09-06T06:53:04.430Z"),69234],obj: {_id: 11026,str: "Implementation synthesize Virtual",date: new Date("2018-09-06T07:21:56.459Z"),array: [],obj: {_id: 11027,str: "bandwidth",num: 7082}}}]}});
    },

    function(coll) {
        return coll.insert({_id: 11028,str: "Administrator Refined plug-and-play",num: 10312,date: new Date("2018-09-06T17:16:08.876Z"),array: [74366,new Date("2018-09-06T18:52:33.081Z"),new Date("2018-09-06T19:37:17.001Z"),"Turkmenistan Avon",77692,"Awesome Checking Account",{_id: 11029,str: "Tasty Metal Hat Creative Rustic Steel Bacon",num: 83122,obj: {}},16812,{_id: 11030,str: "Secured",date: new Date("2018-09-06T05:00:01.199Z"),array: [{_id: 11031,str: "SDD Industrial e-tailers",num: 23328,date: new Date("2018-09-06T00:04:12.539Z"),obj: {_id: 11032,num: 63445,date: new Date("2018-09-06T08:22:55.829Z"),array: [],obj: {_id: 11033,str: "Forward AGP",num: 38931,array: [],obj: {_id: 11034,str: "Towels",date: new Date("2018-09-06T12:09:58.765Z"),array: [new Date("2018-09-06T09:20:13.770Z"),"Saudi Riyal Personal Loan Account United Arab Emirates",[],"Savings Account Maryland"]}}}}]},[],[75193,63720,81130]]});
    },

    function(coll) {
        return coll.insert({_id: 11035,str: "Fish Investment Account",num: 18443,array: [{_id: 11036,str: "actuating",date: new Date("2018-09-06T09:11:02.493Z"),array: [44148,new Date("2018-09-06T10:05:30.930Z"),"haptic Palestinian Territory Optimization",[],new Date("2018-09-06T18:16:21.679Z")],obj: {_id: 11037,str: "Associate reinvent",num: 7493,date: new Date("2018-09-06T07:34:04.200Z"),array: [10101,70502,34439],obj: {}}},["Euro","program Fresh"],{_id: 11038,num: 86953,date: new Date("2018-09-06T02:37:24.398Z"),obj: {_id: 11039,str: "Locks Architect",num: 23700,date: new Date("2018-09-06T16:04:08.343Z"),array: [],obj: {}}},new Date("2018-09-06T01:17:34.648Z"),87177,new Date("2018-09-06T07:32:34.905Z"),[],new Date("2018-09-06T16:50:53.443Z"),"Chicken hardware"]});
    },

    function(coll) {
        return coll.insert({_id: 11040,str: "best-of-breed microchip",num: 30701,date: new Date("2018-09-06T09:18:55.627Z"),array: [new Date("2018-09-05T20:24:36.740Z"),"out-of-the-box",71670,new Date("2018-09-05T20:18:26.342Z"),"CSS Direct wireless",new Date("2018-09-06T04:25:35.351Z"),59664,[],"4th generation",{_id: 11041,str: "Corner Robust",num: 22938,date: new Date("2018-09-06T19:22:45.162Z"),array: [],obj: {_id: 11042,str: "Upgradable Gabon application",num: 40223,obj: {}}},4283,43260]});
    },

    function(coll) {
        return coll.insert({_id: 11043,str: "invoice red Handmade Concrete Mouse",num: 29857,date: new Date("2018-09-06T16:51:46.127Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 11044,str: "Fantastic Granite Table Technician Coordinator",num: 80271,date: new Date("2018-09-06T05:17:01.146Z"),array: [new Date("2018-09-05T20:33:41.793Z"),[],new Date("2018-09-05T22:16:02.829Z"),{_id: 11045,str: "Cheese",num: 73531,date: new Date("2018-09-05T22:36:22.339Z"),array: ["Licensed"]},99262,"Home Loan Account",{_id: 11046,array: [],obj: {_id: 11047,str: "Open-source",num: 81005,date: new Date("2018-09-06T18:10:00.571Z"),array: [61171,new Date("2018-09-05T21:31:00.155Z")],obj: {}}},"CSS Credit Card Account",{_id: 11048,str: "brand Keyboard",num: 85805,array: [new Date("2018-09-05T22:46:15.091Z")],obj: {_id: 11049,str: "quantifying ubiquitous",num: 62405}},74181,"reboot",30660,[],[]]});
    },

    function(coll) {
        return coll.insert({_id: 11050,num: 3680,array: []});
    },

    function(coll) {
        return coll.insert({_id: 11051,str: "Music maximize budgetary management",date: new Date("2018-09-06T00:47:34.296Z"),array: [new Date("2018-09-06T12:46:29.526Z"),"web services Chicken",58133,54689,"Shirt input Stand-alone",{_id: 11052,num: 39860,date: new Date("2018-09-06T01:59:30.587Z"),array: [],obj: {_id: 11053,str: "Gorgeous parse",array: [],obj: {}}},"Chair indexing",new Date("2018-09-06T04:55:18.996Z"),"Malaysian Ringgit Profit-focused Computer",61696,"Lake",[],"Shoes Designer",{_id: 11054,str: "lime Berkshire Trafficway",num: 35327,date: new Date("2018-09-06T14:26:48.760Z"),array: [new Date("2018-09-05T23:19:15.928Z"),new Date("2018-09-05T22:52:35.387Z")],obj: {_id: 11055,str: "Automotive",num: 66672,date: new Date("2018-09-06T05:50:27.574Z"),array: []}}],obj: {_id: 11056,str: "convergence",num: 95597,date: new Date("2018-09-05T20:50:31.461Z"),array: [{_id: 11057,num: 94371}],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 11058,str: "model",num: 84976,date: new Date("2018-09-05T23:25:02.965Z"),array: [33691,"Practical Automotive payment",new Date("2018-09-06T01:57:28.258Z"),new Date("2018-09-06T09:39:38.155Z"),new Date("2018-09-06T11:24:34.255Z"),["Functionality Palladium compressing",99335,{_id: 11059,num: 92423,date: new Date("2018-09-06T14:17:11.057Z"),array: [],obj: {_id: 11060,str: "Tactics Fish Proactive",num: 68385,array: [],obj: {_id: 11061,str: "info-mediaries support",date: new Date("2018-09-06T11:53:44.143Z"),obj: {}}}}],87696,[{_id: 11062,str: "Toys bypass AI",num: 35226,date: new Date("2018-09-06T16:54:09.154Z"),array: []},new Date("2018-09-05T21:52:06.681Z")],"Forge Functionality",{_id: 11063,num: 7850,array: [],obj: {}},new Date("2018-09-06T14:56:20.748Z"),new Date("2018-09-05T22:31:16.445Z")],obj: {_id: 11064,date: new Date("2018-09-06T08:12:00.182Z")}});
    },

    function(coll) {
        return coll.insert({_id: 11065,str: "Handcrafted Frozen Salad Global",date: new Date("2018-09-06T19:52:11.653Z"),array: [new Date("2018-09-06T05:11:34.592Z"),new Date("2018-09-06T04:19:13.493Z"),60227,"Regional Mouse",21038,"Assurance superstructure",[],new Date("2018-09-06T14:00:38.402Z"),40882,"generate Metal","bypass Passage",{_id: 11066,str: "parsing Borders Global",num: 48063,date: new Date("2018-09-06T19:47:32.136Z"),array: [],obj: {_id: 11067,str: "bandwidth real-time",date: new Date("2018-09-06T09:06:37.316Z"),obj: {}}}],obj: {_id: 11068,num: 59468,date: new Date("2018-09-06T09:03:37.871Z"),array: [6663],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 11069,str: "transmit",num: 68874,date: new Date("2018-09-06T12:43:37.978Z"),array: [[],93393,"Avon robust",new Date("2018-09-06T19:43:27.394Z"),78468,"Sleek Fresh Table Metal",new Date("2018-09-06T18:37:00.980Z"),[],new Date("2018-09-06T13:36:01.056Z"),12775,{_id: 11070,str: "Silver",num: 96867,date: new Date("2018-09-05T22:06:26.525Z"),array: ["Gloves override Balanced",81985],obj: {}}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 11071,num: 31683,date: new Date("2018-09-06T10:13:56.494Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 11072,str: "Circle incentivize",num: 55537,date: new Date("2018-09-06T08:50:13.194Z"),array: [],obj: {_id: 11073,str: "Falls",date: new Date("2018-09-06T03:27:54.306Z"),array: ["violet Bacon","Generic Steel Car payment",new Date("2018-09-06T14:29:57.527Z"),{_id: 11074,str: "disintermediate content calculating",num: 71292,date: new Date("2018-09-06T18:42:23.296Z"),array: [[],new Date("2018-09-06T08:46:10.629Z"),"FTP process improvement hack"]},72759,new Date("2018-09-06T03:53:28.277Z"),46883,new Date("2018-09-06T11:59:22.179Z"),[],"HDD",{_id: 11075,num: 27482,date: new Date("2018-09-06T02:10:26.303Z"),array: [{_id: 11076,str: "Colorado Mississippi 1080p",array: [[]]}],obj: {_id: 11077,num: 38192,date: new Date("2018-09-05T20:00:29.792Z"),obj: {_id: 11078,str: "Investor functionalities",num: 42732,array: [],obj: {}}}},new Date("2018-09-06T18:55:44.461Z")],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 11079,str: "bypassing",num: 4074,date: new Date("2018-09-06T11:57:24.568Z"),array: [49686,{_id: 11080,str: "payment",num: 37544,date: new Date("2018-09-06T04:35:31.238Z"),array: [],obj: {}},new Date("2018-09-06T08:49:29.510Z"),"model","methodical","world-class methodology",61141,new Date("2018-09-05T21:24:13.236Z")],obj: {_id: 11081,str: "systems copying",num: 23830}});
    },

    function(coll) {
        return coll.insert({_id: 11082,str: "Shirt",num: 73184,date: new Date("2018-09-05T22:23:49.281Z"),array: [41633,"Sports copy reboot",new Date("2018-09-06T07:20:27.447Z"),new Date("2018-09-06T09:11:39.326Z"),"innovate Chicken",new Date("2018-09-06T19:17:48.129Z"),"yellow Multi-tiered 6th generation",49106,new Date("2018-09-06T05:55:57.544Z"),72139,47973,"Auto Loan Account Computer Unbranded Plastic Chicken"]});
    },

    function(coll) {
        return coll.insert({_id: 11083,str: "matrix generating Mandatory",num: 28123,date: new Date("2018-09-06T06:49:44.449Z"),array: ["Gold",new Date("2018-09-06T07:02:03.719Z"),38766,74062,"FTP",60460,new Date("2018-09-06T19:21:28.746Z"),99066,[],new Date("2018-09-06T17:20:19.544Z"),"hacking"]});
    },

    function(coll) {
        return coll.insert({_id: 11084,num: 96699,array: [],obj: {_id: 11085,num: 5018,date: new Date("2018-09-05T23:19:07.618Z"),array: [new Date("2018-09-06T11:43:31.006Z"),"Tuna Product",91092,new Date("2018-09-05T23:31:16.635Z"),"RSS Savings Account",87972,new Date("2018-09-06T04:47:45.380Z"),6340,"Bacon Rufiyaa parsing"],obj: {_id: 11086,str: "deposit Handcrafted Tasty Granite Chips",date: new Date("2018-09-05T22:55:32.805Z"),array: [79268,"compress",{_id: 11087,str: "Buckinghamshire bypass Persistent",num: 5227,date: new Date("2018-09-06T02:55:59.537Z"),obj: {}},{_id: 11088,str: "Baby Manors override",date: new Date("2018-09-05T22:26:36.352Z"),array: []}],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 11089,str: "monitor Beauty solid state",num: 85305,date: new Date("2018-09-06T12:53:05.614Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 11090,str: "Legacy",num: 20251,date: new Date("2018-09-06T12:05:25.020Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 11091,str: "array",num: 92440,date: new Date("2018-09-06T17:07:59.070Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 11092,str: "productivity B2B transform",num: 89655,date: new Date("2018-09-06T15:09:46.679Z"),array: [new Date("2018-09-05T20:51:33.319Z"),"International quantify transition",81232,new Date("2018-09-06T07:50:09.266Z"),{_id: 11093,num: 38575,date: new Date("2018-09-06T16:30:45.414Z"),array: [new Date("2018-09-05T22:56:48.066Z"),"seize Berkshire hard drive"],obj: {_id: 11094,str: "syndicate",num: 61687,date: new Date("2018-09-05T23:11:47.864Z"),array: [],obj: {_id: 11095,str: "global",num: 8271,array: [],obj: {_id: 11096,num: 93678,date: new Date("2018-09-06T10:46:37.735Z"),array: [],obj: {}}}}},92225,"circuit Plastic",81335,[{_id: 11097,str: "optical Games"},{_id: 11098,num: 88267,date: new Date("2018-09-06T12:53:05.260Z")}],4387,"convergence Strategist",[],80325],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 11099,str: "Algerian Dinar Buckinghamshire",num: 65724,date: new Date("2018-09-06T13:27:08.904Z"),array: [],obj: {_id: 11100,num: 74823,date: new Date("2018-09-06T05:12:02.489Z"),array: ["engineer interface",53466,{_id: 11101,str: "index Taiwan Wisconsin",num: 17913,date: new Date("2018-09-06T05:49:07.711Z"),array: [new Date("2018-09-06T07:48:11.378Z")],obj: {_id: 11102,str: "South Dakota impactful",date: new Date("2018-09-06T02:53:19.513Z"),obj: {}}},[],new Date("2018-09-06T06:09:47.663Z"),new Date("2018-09-06T04:48:32.230Z"),{_id: 11103,str: "alarm SMTP",num: 53845,date: new Date("2018-09-06T07:23:35.459Z"),obj: {}},23756,90760,"bandwidth","seize",[],new Date("2018-09-06T14:13:07.396Z"),[new Date("2018-09-06T07:45:58.165Z"),{_id: 11104,str: "Virgin Islands, U.S. TCP revolutionary"}],"Handmade"],obj: {_id: 11105,num: 37680,array: [[],"revolutionary Mouse"]}}});
    },

    function(coll) {
        return coll.insert({_id: 11106,str: "Program Table synthesize",num: 22787,date: new Date("2018-09-05T23:53:04.287Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 11107,str: "dot-com",num: 90181,date: new Date("2018-09-06T18:05:14.613Z"),array: [new Date("2018-09-06T03:16:35.371Z"),["Rustic mobile THX",19517],[],new Date("2018-09-06T16:38:58.413Z"),"online Credit Card Account",{_id: 11108,str: "Borders program navigate",num: 56348,date: new Date("2018-09-06T01:31:05.810Z"),array: [],obj: {_id: 11109,num: 80935,date: new Date("2018-09-06T09:37:09.079Z"),array: [],obj: {}}},new Date("2018-09-06T00:21:23.417Z"),"mobile",59298,27756,{_id: 11110,num: 15700,date: new Date("2018-09-06T01:17:20.695Z"),array: [new Date("2018-09-06T06:50:43.125Z")]},27971],obj: {_id: 11111,str: "open-source Kids killer",obj: {_id: 11112,date: new Date("2018-09-06T01:20:03.938Z"),array: []}}});
    },

    function(coll) {
        return coll.insert({_id: 11113,str: "Shoes Outdoors leverage",num: 18025,date: new Date("2018-09-06T17:53:09.637Z"),array: ["portals Self-enabling",9205,82492,{_id: 11114,str: "Industrial upward-trending",num: 24337,array: [],obj: {_id: 11115,str: "Forward Zloty",num: 85352,date: new Date("2018-09-06T09:45:25.230Z"),array: ["Reactive action-items",[],new Date("2018-09-06T12:27:39.253Z"),new Date("2018-09-05T23:40:43.414Z"),58319],obj: {}}},"Communications",new Date("2018-09-06T15:25:11.290Z"),new Date("2018-09-06T01:59:33.456Z"),30822,"interactive"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 11116,str: "Steel",num: 90471,date: new Date("2018-09-06T07:07:41.469Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 11117,str: "hack intuitive",num: 65423,date: new Date("2018-09-06T07:16:08.715Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 11118,str: "magnetic",num: 98412,date: new Date("2018-09-05T21:21:42.481Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 11119,str: "Ball Digitized",num: 81623,date: new Date("2018-09-06T06:27:07.357Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 11120,str: "Bulgarian Lev online",num: 14308,date: new Date("2018-09-06T11:52:14.690Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 11121,str: "Fresh",num: 4572,date: new Date("2018-09-06T19:29:59.433Z"),array: [94120,55606,new Date("2018-09-06T00:14:30.805Z"),"Marketing",[],"Markets Utah",new Date("2018-09-06T02:18:40.106Z"),new Date("2018-09-06T09:24:50.999Z"),55882,[new Date("2018-09-06T15:11:41.349Z")],11153,"generating",{_id: 11122,num: 17878,date: new Date("2018-09-06T09:10:35.115Z"),array: []},new Date("2018-09-06T18:02:17.320Z")],obj: {_id: 11123,str: "wireless",num: 68911,date: new Date("2018-09-05T20:47:21.142Z"),array: [[]],obj: {_id: 11124,str: "recontextualize",date: new Date("2018-09-05T21:41:22.300Z"),array: [44810,"Assistant parsing generating"]}}});
    },

    function(coll) {
        return coll.insert({_id: 11125,num: 60061,date: new Date("2018-09-05T22:24:45.398Z"),array: [],obj: {_id: 11126,num: 84462,obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 11127,str: "mission-critical",num: 27608,date: new Date("2018-09-06T01:12:54.957Z"),array: ["pixel",new Date("2018-09-05T22:30:47.516Z"),"Industrial",37502,new Date("2018-09-06T08:42:59.630Z"),"International Connecticut Small",{_id: 11128,num: 49931,date: new Date("2018-09-06T18:28:16.992Z"),array: [[],new Date("2018-09-06T11:41:33.257Z"),{_id: 11129,num: 51214,date: new Date("2018-09-06T01:00:58.737Z"),obj: {_id: 11130,str: "Intuitive",num: 21779,array: [],obj: {}}}]},"Rustic",84541,[],24423],obj: {_id: 11131,str: "online Cheese networks",date: new Date("2018-09-05T22:19:34.440Z"),array: ["Practical",3138],obj: {_id: 11132,num: 81465,obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 11133,str: "Refined Steel Mouse invoice",num: 82772,date: new Date("2018-09-06T07:26:03.413Z"),array: [12843,"Intelligent Israel partnerships",new Date("2018-09-06T08:12:48.483Z"),97085,new Date("2018-09-06T17:55:20.119Z"),["Stream Berkshire","Checking Account",65812],[],new Date("2018-09-06T01:22:36.583Z"),[new Date("2018-09-06T19:15:14.266Z")],{_id: 11134,str: "Automotive",num: 66790,date: new Date("2018-09-06T19:12:23.736Z"),obj: {_id: 11135,str: "e-services Maldives",num: 67409,date: new Date("2018-09-06T05:07:33.263Z"),array: []}},"Electronics Technician"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 11136,str: "Electronics pricing structure",num: 4012,date: new Date("2018-09-06T13:48:09.789Z"),array: [new Date("2018-09-06T15:34:05.376Z"),"New Caledonia deposit orchestrate",new Date("2018-09-06T08:29:38.470Z"),"Cambridgeshire FTP",94544,35759,"indexing Kids Refined",32802,[],new Date("2018-09-06T03:21:42.955Z"),10042,new Date("2018-09-06T03:08:38.857Z"),new Date("2018-09-06T08:11:04.903Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 11137,str: "mobile",num: 88697,date: new Date("2018-09-06T11:05:08.856Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 11138,str: "Palestinian Territory Savings Account Home Loan Account",num: 19368,date: new Date("2018-09-06T04:32:00.714Z"),array: [],obj: {_id: 11139,str: "Gorgeous Granite Pizza",num: 60007,array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 11140,num: 3115,date: new Date("2018-09-06T18:24:12.174Z"),array: [],obj: {_id: 11141,str: "Cotton Technician Rubber",date: new Date("2018-09-06T19:35:03.699Z"),array: [[1376,71833],{_id: 11142,str: "SDR Agent Directives",num: 48242,date: new Date("2018-09-05T20:13:44.153Z"),array: [],obj: {}},"JBOD",new Date("2018-09-06T11:50:33.400Z"),new Date("2018-09-06T17:48:31.110Z"),"Forward Nigeria",[new Date("2018-09-06T16:27:34.384Z"),78289,"Czech Koruna Flats",{_id: 11143,str: "Haven Tunnel",num: 66397,date: new Date("2018-09-05T23:46:14.828Z"),array: [],obj: {}},{_id: 11144,str: "purple",num: 41675,array: [{_id: 11145,str: "cyan",num: 5368,date: new Date("2018-09-06T06:02:24.882Z"),obj: { _id: 11146 }}],obj: {_id: 11147,str: "SCSI",num: 81746,date: new Date("2018-09-06T17:49:36.349Z")}},74339,["infrastructures Connecticut rich",20144]],"generate Russian Federation digital",new Date("2018-09-06T09:05:41.614Z")]}});
    },

    function(coll) {
        return coll.insert({_id: 11148,str: "Saint Helena Pound SCSI",num: 95362,date: new Date("2018-09-05T20:12:24.766Z"),array: [],obj: {_id: 11149,str: "auxiliary",num: 4052,date: new Date("2018-09-05T23:27:57.494Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 11150,str: "Creative Dynamic Cambridgeshire",num: 19706,array: [],obj: {_id: 11151,str: "Direct Turkish Lira",num: 56865,date: new Date("2018-09-06T17:55:31.369Z"),array: [76528]}});
    },

    function(coll) {
        return coll.insert({_id: 11152,str: "Awesome",num: 52931,array: [],obj: {_id: 11153,str: "hard drive",num: 37553,date: new Date("2018-09-06T08:07:45.406Z"),array: [{_id: 11154,str: "Personal Loan Account",num: 72050,date: new Date("2018-09-05T21:24:04.047Z"),array: [],obj: {}},new Date("2018-09-06T05:18:25.719Z"),new Date("2018-09-05T20:47:44.089Z"),[],2339,{_id: 11155,date: new Date("2018-09-05T23:40:13.434Z"),obj: {_id: 11156,str: "generating Credit Card Account Corporate",num: 24463,date: new Date("2018-09-06T05:37:55.707Z")}},"program Generic Granite Sausages array",["Plastic Personal Loan Account Supervisor","implementation Marketing Executive"],new Date("2018-09-06T14:28:25.819Z"),8248,new Date("2018-09-06T14:14:31.260Z"),"program"],obj: {_id: 11157,str: "Consultant backing up Sleek Granite Pants",date: new Date("2018-09-06T05:30:53.252Z")}}});
    },

    function(coll) {
        return coll.insert({_id: 11158,str: "one-to-one connect",num: 57248,date: new Date("2018-09-06T07:19:28.027Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 11159,str: "synergize",num: 53282,date: new Date("2018-09-06T05:10:48.948Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 11160,num: 64872,array: ["Peru",11226,64390,new Date("2018-09-05T20:01:57.697Z"),"portals Keyboard driver",new Date("2018-09-06T17:59:27.527Z"),76644,"Frozen bandwidth-monitored",new Date("2018-09-06T00:06:51.158Z"),63357,[{_id: 11161,str: "Administrator",num: 42098,date: new Date("2018-09-06T07:12:43.626Z"),array: [],obj: {_id: 11162,str: "approach",num: 26500,date: new Date("2018-09-05T20:56:07.186Z"),array: [],obj: {}}},{_id: 11163,str: "invoice Grocery Chief",date: new Date("2018-09-06T14:16:55.834Z"),array: [21837,new Date("2018-09-06T13:47:30.316Z"),[]],obj: {_id: 11164,str: "bluetooth Investment Account",num: 2214,date: new Date("2018-09-06T12:41:38.130Z"),array: [new Date("2018-09-06T02:32:53.316Z")],obj: {}}},{_id: 11165,str: "Gorgeous Frozen Bike",num: 23076,date: new Date("2018-09-05T22:17:57.998Z")}]]});
    },

    function(coll) {
        return coll.insert({_id: 11166,str: "deposit Table",num: 41779,date: new Date("2018-09-06T07:21:10.781Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 11167,num: 76124,date: new Date("2018-09-06T18:32:32.529Z"),array: [30110,"Granite Ball mobile","systemic Soft Avon",new Date("2018-09-06T04:24:05.603Z"),28259,new Date("2018-09-06T06:13:55.014Z"),"Credit Card Account program",19871,{_id: 11168,str: "Refined IB Berkshire",num: 71179,date: new Date("2018-09-06T12:16:19.581Z"),array: ["Planner"],obj: {_id: 11169,str: "Nevada",num: 8785,array: [],obj: {}}},new Date("2018-09-06T14:26:03.377Z"),new Date("2018-09-06T11:31:35.686Z"),[]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 11170,str: "deliver monitor",num: 85178,date: new Date("2018-09-06T09:03:09.363Z"),array: ["Montana","Mobility Intelligent Metal Towels Regional",57037,new Date("2018-09-06T17:40:03.712Z"),18487,"sticky microchip Cove","Savings Account matrix Rustic Granite Computer",new Date("2018-09-06T03:59:36.256Z"),[],{_id: 11171,str: "brand",num: 18162,date: new Date("2018-09-06T14:54:24.570Z"),array: [[53388,{_id: 11172,str: "Health reboot visualize",num: 45132,array: [],obj: {_id: 11173,str: "indexing Forward connecting",num: 26988,date: new Date("2018-09-05T22:39:23.154Z"),array: [],obj: {_id: 11174,str: "Future-proofed Orchestrator",date: new Date("2018-09-06T00:52:33.420Z"),array: [],obj: {}}}}],35394],obj: {}},"Bike"]});
    },

    function(coll) {
        return coll.insert({_id: 11175,str: "Borders Baby Connecticut",num: 27253,array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 11176,str: "Bedfordshire",date: new Date("2018-09-05T20:56:17.243Z"),obj: {_id: 11177,str: "Kiribati attitude Solutions",num: 10262,date: new Date("2018-09-06T12:10:33.749Z"),array: [],obj: {_id: 11178,num: 50577,date: new Date("2018-09-06T15:10:48.323Z"),array: [new Date("2018-09-06T18:30:33.410Z"),91659,71993,1163,"Brazilian Real withdrawal",["port gold","maximize Connecticut Monitored","Japan Face to face Data",new Date("2018-09-06T18:40:24.255Z")],new Date("2018-09-05T22:07:49.679Z"),{_id: 11179,str: "Assistant Ramp",num: 2547,date: new Date("2018-09-06T02:59:58.704Z"),array: [],obj: {}},new Date("2018-09-05T22:05:39.297Z"),[],[new Date("2018-09-06T08:15:01.033Z")],{_id: 11180,str: "Bedfordshire Buckinghamshire",array: [83237,37745]},[new Date("2018-09-06T17:43:22.109Z"),"interface Facilitator Ameliorated"]]}}});
    },

    function(coll) {
        return coll.insert({_id: 11181,str: "deposit Handcrafted Steel Shoes payment",num: 5464,date: new Date("2018-09-05T21:25:27.283Z"),array: [],obj: {_id: 11182,str: "withdrawal",date: new Date("2018-09-06T18:23:05.711Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 11183,str: "Industrial",num: 63325,date: new Date("2018-09-06T11:22:27.708Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 11184,str: "grow navigate Lead",num: 19428,date: new Date("2018-09-06T13:50:06.392Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 11185,num: 11735,array: [new Date("2018-09-06T11:47:18.639Z"),"multi-byte",73138,{_id: 11186,str: "Square Realigned",num: 15387,date: new Date("2018-09-06T01:03:17.078Z"),obj: {}},[],new Date("2018-09-06T18:16:32.692Z"),{_id: 11187,str: "integrated drive",num: 56583,date: new Date("2018-09-06T03:48:38.944Z"),array: [],obj: {_id: 11188,str: "Frozen",num: 35396,date: new Date("2018-09-06T02:34:19.720Z"),array: []}},88758,new Date("2018-09-05T20:52:55.679Z"),"Fantastic Savings Account",75448],obj: {_id: 11189,str: "TCP Hollow",date: new Date("2018-09-06T15:00:42.054Z"),array: [60439,"Incredible Junctions evolve","Coordinator Agent"],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 11190,num: 32639,date: new Date("2018-09-06T17:51:59.387Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 11191,str: "deposit Borders",num: 99426,date: new Date("2018-09-06T12:48:18.122Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 11192,str: "HDD Pennsylvania cross-media",num: 49319,date: new Date("2018-09-06T13:35:47.018Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 11193,str: "invoice Baby",num: 89521,date: new Date("2018-09-06T06:07:22.340Z"),array: [67626,"online incubate",new Date("2018-09-06T01:52:16.924Z"),33430,[57001],[],{_id: 11194,str: "black Fresh",num: 53178,date: new Date("2018-09-06T03:09:59.902Z"),array: [],obj: {}},new Date("2018-09-06T18:57:39.948Z"),"Investment Account Metal Extensions","Small HDD gold",41148,new Date("2018-09-06T14:16:02.702Z")],obj: {_id: 11195,str: "supply-chains",date: new Date("2018-09-06T08:48:55.977Z"),array: [[],{_id: 11196,array: [],obj: {_id: 11197,str: "application Rubber Steel",num: 97909,date: new Date("2018-09-06T09:36:33.775Z"),array: ["protocol internet solution Steel",{_id: 11198,num: 16468,date: new Date("2018-09-06T02:14:25.166Z"),obj: {}},75999],obj: {}}}]}});
    },

    function(coll) {
        return coll.insert({_id: 11199,str: "monetize Keyboard Strategist",num: 9224,date: new Date("2018-09-06T13:32:13.893Z"),array: [],obj: {_id: 11200,date: new Date("2018-09-06T18:17:31.005Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 11201,str: "platforms bluetooth",num: 76418,date: new Date("2018-09-05T22:00:09.354Z"),array: [],obj: {_id: 11202,str: "magnetic driver",num: 12703,date: new Date("2018-09-06T04:20:46.344Z"),array: [],obj: {_id: 11203,str: "Station invoice Grocery",num: 15270,obj: {_id: 11204,str: "Cheese real-time",num: 13023,date: new Date("2018-09-05T22:18:12.190Z"),array: [new Date("2018-09-06T15:48:35.538Z"),"dot-com Security web-readiness",69839,{_id: 11205,date: new Date("2018-09-06T05:28:07.787Z"),array: ["Refined Wooden Soap robust cultivate",new Date("2018-09-05T22:51:07.292Z")]},"Unbranded bandwidth",292,new Date("2018-09-06T17:22:34.866Z"),46190,54765,[new Date("2018-09-06T09:59:25.954Z")],"benchmark 24/7 Incredible Steel Table",new Date("2018-09-05T22:21:43.992Z"),new Date("2018-09-05T21:20:22.841Z"),{_id: 11206,str: "Buckinghamshire Fish Fantastic",num: 7369,array: []}],obj: {}}}}});
    },

    function(coll) {
        return coll.insert({_id: 11207,str: "copying hard drive",date: new Date("2018-09-06T17:29:13.724Z"),array: ["Mouse neural purple",new Date("2018-09-06T03:46:27.339Z"),[74183],"TCP Awesome Plastic Keyboard invoice",[],new Date("2018-09-05T23:22:21.958Z"),28996,new Date("2018-09-06T00:15:14.130Z"),{_id: 11208,str: "Computers",num: 34476,date: new Date("2018-09-06T19:36:28.182Z"),array: [],obj: {}},"feed",53002,{_id: 11209,str: "black groupware array",num: 35420,date: new Date("2018-09-06T12:31:04.430Z"),array: [],obj: {_id: 11210,str: "upward-trending",obj: {}}}],obj: {_id: 11211,str: "port driver",num: 63596,date: new Date("2018-09-06T06:47:44.548Z"),array: [new Date("2018-09-06T05:14:50.822Z"),"Facilitator cultivate",new Date("2018-09-06T13:01:14.999Z")]}});
    },

    function(coll) {
        return coll.insert({_id: 11212,str: "Bond Markets Units European Composite Unit (EURCO)",num: 40916,date: new Date("2018-09-06T14:51:13.959Z"),array: [],obj: {_id: 11213,str: "hierarchy policy array",num: 80702,date: new Date("2018-09-05T20:12:47.047Z"),array: ["bypass","calculating Money Market Account optimizing",[new Date("2018-09-06T13:12:06.475Z")],44381,"initiatives bandwidth",72778,14378,new Date("2018-09-06T04:44:57.306Z"),"Product Wooden",13644,{_id: 11214,str: "Crescent connecting Intranet",array: [],obj: {}},{_id: 11215,str: "synthesizing",date: new Date("2018-09-06T17:58:55.395Z"),obj: {}},new Date("2018-09-06T02:44:21.104Z"),18853]}});
    },

    function(coll) {
        return coll.insert({_id: 11216,str: "Configuration back-end",num: 81374,date: new Date("2018-09-06T04:34:03.223Z"),array: [{_id: 11217,num: 54711,date: new Date("2018-09-06T05:44:08.686Z"),array: [],obj: {}},new Date("2018-09-06T17:01:52.830Z"),52494,"Gorgeous Organized open-source",[{_id: 11218,num: 48397,date: new Date("2018-09-06T08:40:37.125Z"),obj: {}}],new Date("2018-09-06T04:38:01.159Z"),"Generic systems",11745,new Date("2018-09-05T20:19:56.566Z"),35153,"didactic",83212,"Cheese magenta challenge"]});
    },

    function(coll) {
        return coll.insert({_id: 11219,str: "facilitate Berkshire North Carolina",num: 41781,date: new Date("2018-09-06T08:54:44.949Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 11220,str: "Generic Plastic Computer",num: 16610,array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 11221,str: "strategic Bedfordshire",num: 9902,date: new Date("2018-09-06T04:38:52.652Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 11222,str: "Home Loan Account",num: 5663,date: new Date("2018-09-06T17:48:33.308Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 11223,str: "AGP synthesizing",num: 88964,date: new Date("2018-09-06T14:21:16.638Z"),array: [51086,{_id: 11224,str: "intuitive Orchestrator Chicken",num: 17060,date: new Date("2018-09-06T17:08:11.012Z"),array: [],obj: {}},new Date("2018-09-06T03:15:43.788Z"),new Date("2018-09-05T23:03:36.839Z"),new Date("2018-09-05T23:16:44.400Z"),"back-end program",9936,"Garden",20951,new Date("2018-09-06T02:29:09.506Z"),17282],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 11225,str: "Handmade Metal Sausages Plastic Engineer",num: 4323,date: new Date("2018-09-06T11:37:59.998Z"),array: [[],"robust syndicate Incredible Plastic Ball",34598,"Consultant Berkshire optimize",24163,new Date("2018-09-06T18:21:10.701Z"),new Date("2018-09-06T05:43:33.263Z"),"CSS",new Date("2018-09-05T22:17:43.815Z")],obj: {_id: 11226,str: "Berkshire Ergonomic Wooden Bike",num: 77004,array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 11227,str: "engage",num: 72602,date: new Date("2018-09-06T13:37:15.356Z"),array: [[],new Date("2018-09-06T02:23:44.014Z"),new Date("2018-09-06T02:05:21.819Z"),"feed budgetary management",49199,"Computers Books","Developer","Washington payment",[],88335],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 11228,str: "Identity monitor",num: 71946,array: ["directional",97380,"Montana envisioneer",new Date("2018-09-05T23:38:38.298Z"),new Date("2018-09-05T22:42:24.805Z"),[[],39854,{_id: 11229,str: "Sports",num: 75166,date: new Date("2018-09-06T03:41:37.406Z"),array: [],obj: {}}],"orchestration Buckinghamshire RAM",new Date("2018-09-06T11:44:24.219Z"),25912,{_id: 11230,str: "calculating",date: new Date("2018-09-06T15:50:32.459Z"),obj: {_id: 11231,str: "Savings Account copy",num: 41794,date: new Date("2018-09-06T12:34:01.252Z"),obj: {_id: 11232,date: new Date("2018-09-06T07:09:22.228Z"),array: []}}},new Date("2018-09-05T23:51:21.231Z"),"Oval"],obj: {_id: 11233,num: 26363,array: [new Date("2018-09-06T07:16:15.897Z"),[]]}});
    },

];

const indexList = [

    function(coll) {
        return coll.createIndex({"obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": -1, "obj.obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": -1, "obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"date": 1});
    },

    function(coll) {
        return coll.createIndex({"date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": -1, "obj.obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"date": 1, "obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": -1, "obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"date": 1, "obj.obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": 1, "obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": 1, "num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": 1, "obj.obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": 1, "date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": -1, "obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"num": 1});
    },

    function(coll) {
        return coll.createIndex({"str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": -1, "obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"num": -1, "obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": 1, "date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": -1, "obj.obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": 1, "obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": -1, "obj.obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": -1, "obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": 1, "str": -1});
    },

    function(coll) {
        return coll.createIndex({"str": 1, "obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": 1, "date": -1, "obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": 1, "obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"num": 1, "str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": 1, "obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": -1, "obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": -1, "obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": -1, "str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": -1, "obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": -1, "obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": 1, "num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": 1, "obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"str": 1, "obj.obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": 1, "obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": -1, "obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"str": 1, "obj.obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": 1, "obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": 1, "obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": 1, "obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": -1, "date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": 1, "obj.str": 1});
    },

];

const aggregationList = [

        [{$project: {a: { $arrayElemAt: [[{ $rtrim: { input: "South Carolina" } },"synergistic"],16831] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["FTP utilisation International"],'$num'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$obj.obj.str'],[36375,'$num'],[],["Pizza Response",{ $toUpper: { $trim: {input: "hack",chars: { $substrCP: ['$obj.str',7,4] }} } },"driver Bosnia and Herzegovina",'$str',{ $toLower: "deposit" }],['$date']]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "SCSI",v: '$obj.obj.str'},{k: "Electronics Denmark Crossroad",v: false},{k: "Tokelau",v: '$date'}]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $trim: { input: "asymmetric hacking" } }],71821] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $dayOfMonth: { $dateToParts: {date: new Date("2018-09-06T01:41:39.318Z"),timezone: "America/Boise"} } }, _id: 0}}],

        [{$project: {a: { $year: { $dateToString: {date: new Date("2018-09-06T18:54:43.770Z"),onNull: { $arrayElemAt: [[{ $ltrim: {input: { $substrCP: ["indexing Gorgeous Soft Shirt reboot",16,8] },chars: '$obj.obj.str'} }],'$obj.obj.num'] }} } }, _id: 0}}],

        [{$project: {a: { $ltrim: { input: "Borders" } }, _id: 0}}],

        [{$project: {a: { $rtrim: {input: '$str',chars: { $substr: ["Cuba moderator Generic Soft Gloves",17,10] }} }, _id: 0}}],

        [{$project: {a: { $year: { $dateFromParts: {isoWeekYear: { $size: [['$obj.obj.obj.str']] },isoWeek: { $mod: ['$obj.obj.num',51622] },hour: { $trunc: 2587 },minute: { $mod: [76421,'$obj.num'] },second: { $sqrt: '$obj.num' },timezone: "America/Argentina/Cordoba"} } }, _id: 0}}],

        [{$project: {a: { $map: {input: ['$obj.obj.str',"compressing","application"],as: 'garland',in: { $log10: 61125 }} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[97525],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $rtrim: {input: "bypassing",chars: { $toString: { $arrayElemAt: [[{ $concat: ['$obj.obj.obj.str'] },"Granite task-force Metal",'$str',{ $dateToString: {date: '$date',onNull: { $toLower: "Latvian Lats deposit" }} }],62370] } }} }, _id: 0}}],

        [{$project: {a: DATE;, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$num'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[18372,'$obj.obj.num'],[],['$obj.str',"Infrastructure Balboa US Dollar index","Gloves circuit"],[],[{ $concat: ['$str'] },"e-tailers"],[],[79954,{ $concat: [{ $toUpper: '$obj.str' },"Lesotho"] },{ $dayOfWeek: { $month: { $isoWeek: { $dateToString: { date: '$date' } } } } }]]] }, _id: 0}}],

        [{$project: {a: { $dateFromParts: {year: { $log: [99432,'$obj.obj.obj.num'] },month: { $pow: ['$num','$num'] },minute: { $floor: 38897 }} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],78696] }, _id: 0}}],

        [{$project: {a: { $filter: {input: [],as: 'jacquelyn',cond: { $and: [{ $substrBytes: ['$$jacquelyn',15,14] }] }} }, _id: 0}}],

        [{$project: {a: { $minute: { $toDate: { $toString: { $range: [13,18,13] } } } }, _id: 0}}],

        [{$project: {a: { $substrBytes: ['$obj.obj.obj.str',16,13] }, _id: 0}}],

        [{$project: {a: { $dayOfWeek: { $dayOfMonth: { $dayOfMonth: new Date("2018-09-06T15:09:28.603Z") } } }, _id: 0}}],

        [{$project: {a: { $dateToParts: {date: { $millesecond: { $year: { $hour: { $month: { $dateFromParts: {isoWeekYear: { $ln: 32160 },hour: { $divide: ['$obj.num','$num'] },millisecond: { $ceil: 11894 },timezone: "Europe/Bucharest"} } } } } },timezone: "US/Central",iso8601: false} }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [],defaults: [3598]} }, _id: 0}}],

        [{$project: {a: { $dateFromString: {dateString: "2018-09-06T02:09:30.182Z",format: "%U-%u-%z-%V-%z-%z-%m-%m-%L-%V-%j-%V",onNull: { $trim: { input: '$obj.obj.obj.str' } }} }, _id: 0}}],

        [{$project: {a: { $map: {input: ['$obj.obj.obj.str','$obj.str'],as: 'nicolette',in: { $trunc: 33385 }} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Factors navigating",v: '$num'},{k: "firewall Small",v: '$str'},{k: "generate Ergonomic Granite Pizza",v: "District Montana core"}]] }, _id: 0}}],

        [{$project: {a: { $toUpper: { $substr: [{ $dateToString: {date: new Date("2018-09-06T08:47:47.266Z"),format: "%Z-%m-%L-%m-%%-%U-%z"} },16,5] } }, _id: 0}}],

        [{$project: {a: { $substrCP: [{ $substrBytes: ['$obj.obj.str',10,5] },19,15] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],['$obj.str','$obj.obj.obj.str'],[],[]]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "brand",v: 51434}]] }, _id: 0}}],

        [{$project: {a: { $toString: { $toDate: { $substr: [{ $substr: ['$obj.obj.str',6,9] },1,10] } } }, _id: 0}}],

        [{$project: {a: { $toString: { $concatArrays: [[{ $substr: ["payment e-markets",17,3] }],['$obj.obj.obj.num','$obj.obj.num'],[],[]] } }, _id: 0}}],

        [{$project: {a: { $isoDayOfWeek: { $dayOfYear: { $year: { $minute: { $month: { $second: { $month: { $second: { $hour: '$date' } } } } } } } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[{ $concat: ['$obj.str'] },"Awesome Frozen","Borders"],["firewall"],['$obj.num'],[{ $size: [[]] }],[]]] }, _id: 0}}],

        [{$project: {a: { $dayOfMonth: { $week: { $millesecond: { $minute: { $dateFromString: {dateString: "2018-09-06T00:15:41.200Z",onError: { $arrayElemAt: [[97018],'$obj.num'] },onNull: "Boliviano Mvdol Village Avon"} } } } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[]] }, _id: 0}}],

        [{$project: {a: { $trim: {input: "functionalities",chars: { $dateToString: {date: { $dateFromParts: {year: { $cmp: [{ $arrayToObject: [[{k: "Tasty",v: '$obj.obj.obj.date'},{k: "Moroccan Dirham",v: '$num'}]] },{ $millesecond: { $dateToString: {date: { $minute: { $isoWeekYear: { $dayOfMonth: '$date' } } },format: "%w-%%-%z-%L-%G-%H-%M",onNull: '$obj.obj.obj.str'} } }] },month: 55472,day: { $floor: '$obj.num' },minute: { $mod: ['$obj.obj.num',77949] },millisecond: { $abs: 87311 }} },timezone: "America/Maceio",onNull: { $arrayToObject: [[[81788,{ $divide: [{ $add: [] },'$obj.obj.obj.num'] }],[78542,14103,'$num'],[]]] }} }} }, _id: 0}}],

        [{$project: {a: { $ltrim: {input: { $rtrim: {input: "hardware Auto Loan Account sticky",chars: '$obj.str'} },chars: '$obj.str'} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.num'],1676] }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: { $month: { $minute: { $dayOfWeek: { $dateFromParts: {isoWeekYear: { $floor: 87378 },isoWeek: { $trunc: 31724 },isoDayOfWeek: { $add: [44073] },hour: { $exp: '$obj.obj.obj.num' },second: { $ceil: '$obj.obj.num' },timezone: "Canada/Newfoundland"} } } } },format: "%V-%L-%G-%u"} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],[],[{ $toUpper: '$obj.obj.str' }],[]]] }, _id: 0}}],

        [{$project: {a: { $dayOfWeek: { $dateToString: {date: '$obj.date',onNull: { $arrayToObject: [[]] }} } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],["Pakistan Rupee International"],[]]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $substrCP: [{ $substrBytes: ['$obj.str',13,10] },2,12] },"Product attitude Generic Metal Table"],55560] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Tools virtual",v: true},{k: "cross-platform",v: "Computers"}]] }, _id: 0}}],

        [{$project: {a: { $map: {input: [],in: { $mod: [91800,40070] }} }, _id: 0}}],

        [{$project: {a: { $range: [11,10,15] }, _id: 0}}],

        [{$project: {a: { $rtrim: {input: { $substrCP: ['$str',8,18] },chars: "Metal Handmade Soft"} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$obj.obj.obj.str',{ $toUpper: "primary Practical Montana" },{ $dateToString: { date: '$obj.obj.date' } }],[],['$obj.str','$obj.str']]] }, _id: 0}}],

        [{$project: {a: { $isoDayOfWeek: new Date("2018-09-06T07:04:31.525Z") }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["deposit",'$str','$str'],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $concatArrays: [[],['$str',{ $concat: [{ $toString: { $arrayElemAt: [[],'$num'] } }] },"synergistic Creative Licensed Plastic Pizza"],['$obj.num',70178],[]] }, _id: 0}}],

        [{$project: {a: { $concat: ["Integration",'$obj.obj.str'] }, _id: 0}}],

        [{$project: {a: { $toDate: { $hour: { $minute: { $dateToParts: {date: { $year: { $dateFromString: {dateString: "2018-09-06T09:09:55.286Z",format: "%U-%Y-%j-%L-%V-%%-%Y-%z-%j-%H",onError: { $arrayElemAt: [[],'$num'] },onNull: { $toLower: '$obj.str' }} } },iso8601: false} } } } }, _id: 0}}],

        [{$project: {a: { $toString: { $arrayToObject: [[{k: "National Borders Concrete",v: 41397},{k: "array",v: '$obj.str'}]] } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $concat: ["payment Clothing"] },{ $dateToString: {date: new Date("2018-09-06T11:35:54.239Z"),timezone: "MST"} },"Direct"],47022] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[16832],31139] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "SMS",v: true},{k: "Parkway override Robust",v: { $substr: ["Michigan Chips Fall",2,8] }}]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[38556],[],['$obj.obj.num'],['$str',"Operations models"],[{ $substr: [{ $ltrim: {input: "Frozen",chars: { $ltrim: { input: "software" } }} },7,3] },'$obj.obj.obj.str']]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[["Representative Auto Loan Account",'$obj.str',{ $toUpper: "Awesome" }],['$obj.num','$obj.obj.num'],[7279],["Auto Loan Account Home Loan Account streamline"],[50182]]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Licensed Grass-roots",v: true}]] }, _id: 0}}],

        [{$project: {a: { $trim: { input: { $rtrim: {input: "Nevada",chars: { $substrCP: ['$obj.obj.str',12,12] }} } } }, _id: 0}}],

        [{$project: {a: { $map: {input: [],in: { $indexOfArray: [{ $concatArrays: [['$$this','$$this'],['$obj.num',true,{ $dayOfWeek: { $second: { $dayOfMonth: { $dayOfMonth: { $dayOfWeek: { $week: { $dayOfWeek: { $minute: { $isoWeek: { $hour: { $dateToParts: { date: new Date("2018-09-06T06:38:56.223Z") } } } } } } } } } } } }]] },{ $dateToString: {date: '$$this',onNull: { $rtrim: {input: "Philippines",chars: '$$this'} }} },10] }} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Nevada",v: false},{k: "transparent",v: true},{k: "Computer value-added West Virginia",v: '$obj.obj.obj.str'},{k: "Books United States Minor Outlying Islands Avon",v: '$date'}]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.obj.str',true],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $minute: { $dayOfWeek: { $dateToString: {date: '$obj.obj.date',format: "%U-%S-%z-%%-%U-%Z-%j-%j"} } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],83510] }, _id: 0}}],

        [{$project: {a: { $week: { $dateFromParts: {isoWeekYear: { $mod: [71240,'$num'] },isoWeek: { $cmp: [{ $map: {input: [],in: 225} },{ $arrayElemAt: [['$str',{ $dateToString: {date: { $toDate: { $reverseArray: [["ubiquitous lavender"]] } },format: "%V-%w-%S-%H-%u-%V"} }],19389] }] },isoDayOfWeek: '$obj.obj.obj.num',hour: { $multiply: [{ $size: [[]] },'$obj.obj.num'] },minute: { $log: ['$obj.obj.obj.num','$obj.obj.obj.num'] },millisecond: { $log: [55104,41709] },timezone: "Australia/South"} } }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: '$obj.obj.date',format: "%j-%Z-%H-%w-%w-%w-%z-%d-%Z-%w",timezone: "Europe/San_Marino",onNull: { $arrayToObject: [[{k: "Self-enabling",v: false},{k: "Lakes",v: { $toDate: { $arrayElemAt: [["Avon Central",{ $ltrim: {input: { $substrBytes: ['$obj.obj.str',0,4] },chars: { $ltrim: { input: "Assurance" } }} },"Plastic encompassing"],45442] } }}]] }} }, _id: 0}}],

        [{$project: {a: { $second: { $isoDayOfWeek: { $dayOfYear: { $dayOfWeek: { $isoWeek: { $year: { $toDate: { $substr: [{ $rtrim: { input: '$obj.obj.obj.str' } },4,19] } } } } } } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $filter: {input: ["Unbranded violet",{ $ltrim: { input: '$obj.obj.obj.str' } },'$obj.str'],cond: { $in: [{ $objectToArray: '$$this' },{ $map: {input: ['$$this'],in: { $sqrt: 26283 }} }] }} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[33776],91316] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[77085,'$obj.num'],74903] }, _id: 0}}],

        [{$project: {a: { $isoWeek: { $week: { $millesecond: { $minute: { $second: { $dayOfWeek: { $millesecond: { $dateFromParts: {year: { $indexOfArray: [{ $reverseArray: [['$str']] },{ $arrayToObject: [[[{ $toUpper: "payment" }],[32877],["Implementation Illinois encompassing",'$obj.obj.str',"Implemented Bedfordshire",{ $substrBytes: ["knowledge user",13,20] }],['$obj.obj.obj.num','$obj.obj.num']]] },14] },month: { $floor: 26000 },day: 18453,millisecond: { $indexOfArray: [{ $range: [2,4,0] },{ $trim: { input: '$obj.obj.obj.str' } },9] },timezone: "Australia/Victoria"} } } } } } } } }, _id: 0}}],

        [{$project: {a: { $range: [17,13] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[16191,65872,83640],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $millesecond: { $month: { $minute: { $isoWeek: { $hour: { $dateToString: {date: { $isoWeekYear: { $dateToString: {date: '$date',format: "%%-%L-%H-%L-%L-%V-%V-%V-%u-%L",timezone: "America/Rankin_Inlet",onNull: '$str'} } },format: "%V-%m-%d-%j-%G-%L-%%-%m-%m-%z-%U-%G"} } } } } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$num'] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[13286],'$num'] }, _id: 0}}],

        [{$project: {a: { $second: { $dateToParts: { date: { $week: { $hour: { $minute: { $isoDayOfWeek: { $dayOfYear: { $dayOfWeek: { $isoWeekYear: { $hour: { $isoWeekYear: { $dayOfMonth: { $dateToString: { date: { $dateFromString: {dateString: "2018-09-06T09:59:42.081Z",format: "%L-%u-%u-%d-%H-%u-%w-%w-%m-%V",timezone: "Atlantic/St_Helena"} } } } } } } } } } } } } } } } }, _id: 0}}],

        [{$project: {a: { $concat: ["Representative Infrastructure"] }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: { $year: '$obj.obj.obj.date' },format: "%w-%V-%L-%%-%j-%U-%U-%Y-%H-%V",onNull: '$obj.str'} }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [['$obj.obj.str']],useLongestLength: true,defaults: [{str: "Personal Loan Account SMTP",date: new Date("2018-09-06T11:33:22.416Z"),array: [true,"Concrete navigating",true,62042]},new Date("2018-09-06T11:39:33.827Z")]} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.num'],85053] }, _id: 0}}],

        [{$project: {a: { $ltrim: {input: { $toUpper: "Bedfordshire invoice Solutions" },chars: '$str'} }, _id: 0}}],

        [{$project: {a: { $substrCP: ["Director deposit Infrastructure",16,6] }, _id: 0}}],

        [{$project: {a: { $substr: ['$obj.str',6,7] }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj.obj' }, _id: 0}}],

        [{$project: {a: { $isoWeek: { $dateToParts: {date: { $isoDayOfWeek: { $minute: { $dayOfMonth: { $dayOfWeek: { $month: { $dateToParts: { date: { $year: { $dayOfYear: { $toDate: { $arrayToObject: [[{k: "mint green",v: { $week: { $month: { $millesecond: { $dateFromParts: {isoWeekYear: { $divide: [73498,'$obj.obj.obj.num'] },isoWeek: { $log10: 16561 },isoDayOfWeek: { $abs: '$obj.num' },hour: { $log: [{ $floor: 51356 },{ $multiply: ['$obj.obj.num','$obj.obj.obj.num'] }] },millisecond: { $ceil: '$obj.obj.num' },timezone: "Africa/Blantyre"} } } } }},{k: "Frozen Programmable",v: false}]] } } } } } } } } } } },timezone: "Antarctica/Casey"} } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["Savings Account microchip",'$str'],27995] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],["Public-key Gorgeous Rubber Computer Iranian Rial"],[89811,80600,'$num',{ $ceil: { $pow: [45481,'$obj.obj.num'] } }],[{ $substr: ["Mobility Hong Kong Dollar invoice",2,13] },{ $rtrim: { input: "TCP cultivate" } },"Garden Arizona black"]]] }, _id: 0}}],

        [{$project: {a: { $trim: {input: '$str',chars: { $dateToString: {date: new Date("2018-09-05T22:38:30.637Z"),format: "%U-%Z-%w-%j-%Z-%d-%%-%H-%S-%m",onNull: { $substr: ['$obj.obj.str',14,15] }} }} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$obj.obj.obj.str'],[],['$obj.obj.obj.str',{ $toLower: "Robust Streets" }],[70788,'$obj.obj.num','$num','$obj.obj.obj.num'],['$obj.obj.num']]] }, _id: 0}}],

        [{$project: {a: { $isoDayOfWeek: { $week: { $toDate: { $map: {input: [],in: { $abs: 34471 }} } } } }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj' }, _id: 0}}],

        [{$project: {a: { $second: { $isoWeekYear: { $year: { $toDate: { $filter: {input: ['$str',{ $toLower: "Technician" }],as: 'geraldine',cond: false} } } } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.obj.num'],'$num'] }, _id: 0}}],

        [{$project: {a: { $toUpper: { $toUpper: "Granite invoice digital" } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[]]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Optional",v: '$date'}]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[11521],39139] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],51335] }, _id: 0}}],

        [{$project: {a: { $dayOfYear: { $dateFromString: {dateString: "2018-09-06T12:17:46.306Z",format: "%M-%j-%M-%d",onNull: '$obj.obj.obj.str'} } }, _id: 0}}],

        [{$project: {a: { $reverseArray: [['$obj.str',"Fresh",{ $toUpper: "Towels 5th generation black" }]] }, _id: 0}}],

        [{$project: {a: { $toUpper: { $toString: { $objectToArray: '$obj.obj.obj.obj' } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["Keyboard mindshare extend"],62968] }, _id: 0}}],

        [{$project: {a: { $range: [6,5,2] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[]] }, _id: 0}}],

        [{$project: {a: { $range: [13,2] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.obj.num'],13295] }, _id: 0}}],

        [{$project: {a: { $concat: ['$str'] }, _id: 0}}],

        [{$project: {a: { $millesecond: { $year: { $dayOfWeek: { $isoWeek: { $second: { $isoWeekYear: { $dateFromParts: {year: { $add: [] },month: { $exp: { $abs: '$obj.obj.num' } },day: { $log10: 40883 },hour: { $ceil: '$obj.num' },millisecond: { $add: [60362,40470] }} } } } } } } }, _id: 0}}],

        [{$project: {a: { $minute: { $dateFromString: {dateString: "2018-09-06T04:19:04.952Z",onError: { $arrayElemAt: [['$str'],58772] }} } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],['$obj.obj.obj.num','$obj.obj.num'],[{ $toUpper: "matrix haptic Ergonomic" }]]] }, _id: 0}}],

        [{$project: {a: { $trim: {input: "SQL",chars: '$str'} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $toLower: '$obj.obj.str' },"Executive regional"],46557] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "one-to-one Handcrafted Wooden Pants",v: 5042},{k: "Towels",v: true}]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],19489] }, _id: 0}}],

        [{$project: {a: { $dayOfMonth: { $year: { $hour: { $dayOfYear: { $dateFromParts: {year: { $log: [80577,'$obj.obj.num'] },minute: { $log10: '$obj.num' },second: { $exp: '$obj.num' },timezone: "Asia/Macau"} } } } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.obj.num','$obj.num',13653],92645] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],30446] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["foreground"],'$num'] }, _id: 0}}],

        [{$project: {a: { $dayOfWeek: { $millesecond: { $isoWeek: { $week: { $dateFromString: {dateString: "2018-09-06T13:06:43.776Z",format: "%%-%V-%V-%M-%j"} } } } } }, _id: 0}}],

        [{$project: {a: { $map: {input: ['$obj.obj.obj.num'],as: 'ivory',in: { $indexOfArray: [{ $range: [10,20,20] },{ $rtrim: {input: '$$ivory',chars: "Generic Granite"} },6] }} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],620] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$obj.obj.obj.str'],[],['$obj.obj.obj.num',97705,92879,'$obj.obj.obj.num'],[{ $toUpper: '$obj.obj.obj.str' }]]] }, _id: 0}}],

        [{$project: {a: { $map: {input: [{ $concat: ['$str'] },'$obj.obj.str'],in: { $log: ['$$this',64609] }} }, _id: 0}}],

        [{$project: {a: { $filter: {input: ['$obj.obj.obj.str',"Refined Fresh Shoes Republic of Korea Rubber"],as: 'holden',cond: { $not: [{ $arrayToObject: [[{k: "Motorway olive hack",v: '$$holden'},{k: "Georgia Games",v: { $trim: {input: { $dateToString: {date: '$$holden',timezone: "Asia/Qatar"} },chars: { $rtrim: { input: '$$holden' } }} }}]] }] }} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.str',"synthesize"],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $dateFromString: {dateString: "2018-09-06T17:05:53.612Z",timezone: "Africa/Nairobi",onError: { $zip: {inputs: [],defaults: ["Wooden Checking Account"]} },onNull: '$obj.str'} }, _id: 0}}],

        [{$project: {a: { $toString: { $arrayToObject: [[{k: "Somalia",v: { $isoDayOfWeek: { $dateToParts: {date: { $dayOfMonth: { $dateToString: {date: '$obj.obj.date',format: "%u-%%-%G-%z-%j-%m-%d-%z-%M-%m-%z-%V",timezone: "America/Belize",onNull: "Automotive"} } },timezone: "Etc/GMT+4"} } }}]] } }, _id: 0}}],

        [{$project: {a: { $map: {input: ["Factors",'$obj.obj.str','$obj.str',"Planner Chair"],as: 'lelah',in: { $exp: 59415 }} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $concat: ['$obj.str',{ $toString: { $toDate: { $trim: {input: "feed Checking Account deposit",chars: '$str'} } } },"schemas Directives web-enabled"] }],41053] }, _id: 0}}],

        [{$project: {a: { $trim: {input: { $substrBytes: ['$obj.obj.obj.str',5,12] },chars: "Georgia Virginia"} }, _id: 0}}],

        [{$project: {a: { $concatArrays: [[{ $toLower: '$obj.str' },"copy Hat Intranet"],[],[{ $toString: { $arrayToObject: [[{k: "Ergonomic Rubber Towels",v: '$obj.num'}]] } },"Health AGP"],[{ $size: [[25920,'$obj.num',8686]] },68400]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],93073] }, _id: 0}}],

        [{$project: {a: { $year: { $dateToString: {date: '$obj.date',format: "%%-%d-%H-%V-%H-%m",onNull: "holistic Chair"} } }, _id: 0}}],

        [{$project: {a: { $zip: { inputs: [[],['$obj.str'],[92764],["payment"]] } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.str',{ $toUpper: "Libyan Arab Jamahiriya" },"Auto Loan Account initiatives B2C"],11328] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Consultant Centralized",v: '$date'},{k: "Balboa US Dollar mindshare",v: false},{k: "distributed Specialist",v: '$str'}]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.obj.str',"Director synthesize","Isle of Man Web",{ $rtrim: { input: '$obj.str' } }],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [[],['$obj.num',27562],[{ $ltrim: {input: { $dateToString: {date: { $month: { $toDate: { $reverseArray: [[{ $substrCP: ['$obj.obj.str',13,16] },"internet solution",'$obj.obj.obj.str']] } } },onNull: { $month: { $hour: { $dayOfMonth: { $isoWeek: { $isoWeekYear: { $dateFromString: {dateString: "2018-09-06T00:43:15.012Z",format: "%Z-%w-%Z-%d",onError: { $toString: { $dayOfWeek: { $dateFromParts: {isoWeekYear: { $abs: { $mod: ['$obj.obj.num',88746] } },isoWeek: 18043,isoDayOfWeek: { $pow: [{ $mod: [98962,'$num'] },'$obj.obj.obj.num'] },minute: { $log10: '$num' },second: { $divide: [55836,97866] },timezone: "Europe/Isle_of_Man"} } } }} } } } } } }} },chars: "Connecticut Savings Account"} },"benchmark"]],useLongestLength: false,defaults: [7338]} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.obj.str',{ $substr: ["Money Market Account",20,0] }],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[{ $substr: ["Fish",8,2] }]]] }, _id: 0}}],

        [{$project: {a: { $toUpper: { $toString: { $arrayElemAt: [[{ $concat: ["Representative ADP"] },'$str','$obj.obj.obj.str'],'$obj.obj.obj.num'] } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[25294,'$obj.num'],20780] }, _id: 0}}],

        [{$project: {a: { $substrBytes: [{ $substrBytes: ["bypassing parsing Metal",4,8] },8,19] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[30782],["Unbranded Fresh Bacon",'$obj.str']]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["database",{ $dateToString: {date: { $isoWeek: { $second: { $dateToParts: { date: { $hour: { $isoDayOfWeek: { $month: { $week: { $dayOfWeek: { $dateFromParts: {isoWeekYear: { $subtract: [77326,'$num'] },isoWeek: { $floor: '$obj.obj.num' },second: { $ceil: 11558 },timezone: "Asia/Tehran"} } } } } } } } } } },format: "%z-%m-%S-%Y",onNull: { $arrayElemAt: [['$obj.obj.obj.date'],{ $abs: { $exp: '$obj.obj.obj.num' } }] }} }],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $ltrim: { input: '$str' } }],39833] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $dateToString: { date: '$obj.obj.obj.date' } },"withdrawal","multi-byte Enterprise-wide",'$obj.obj.str'],14582] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "database reboot calculate",v: '$obj.obj.num'},{k: "Mouse Oklahoma vertical",v: "Assistant"},{k: "Meadow Computers infrastructures",v: '$obj.obj.obj.str'}]] }, _id: 0}}],

        [{$project: {a: { $concatArrays: [['$str',"mission-critical matrix",{ $rtrim: {input: "Borders Incredible Fresh Chicken",chars: { $toString: { $toUpper: { $concat: ['$str',{ $substrBytes: ["clear-thinking",17,13] }] } } }} }],['$obj.obj.num',93082],['$obj.obj.obj.str'],[]] }, _id: 0}}],

        [{$project: {a: { $trim: { input: { $trim: {input: "Taiwan Sausages",chars: "Clothing transitional"} } } }, _id: 0}}],

        [{$project: {a: { $reverseArray: [["Lao People's Democratic Republic",'$str',{ $ltrim: { input: "Mozambique Tuvalu" } },{ $toString: { $trim: {input: '$obj.obj.str',chars: "seamless Dalasi Senior"} } }]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $ltrim: { input: "Implementation compress Synergistic" } },{ $dateToString: {date: { $dateToString: {date: new Date("2018-09-06T02:13:14.861Z"),format: "%H-%U-%d-%M-%m-%M-%j",timezone: "Australia/Adelaide"} },format: "%j-%%-%U-%Z-%U-%d",onNull: { $toString: { $range: [6,2,15] } }} }],8999] }, _id: 0}}],

        [{$project: {a: { $toString: { $arrayToObject: [[{k: "Avon",v: '$obj.obj.obj.num'}]] } }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj' }, _id: 0}}],

        [{$project: {a: { $substrCP: [{ $substr: ['$obj.obj.obj.str',1,14] },11,5] }, _id: 0}}],

        [{$project: {a: { $trim: { input: '$obj.obj.str' } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Health adapter",v: '$obj.obj.str'},{k: "Practical Soft Chicken Cotton",v: 45851}]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.obj.num',46998],23760] }, _id: 0}}],

        [{$project: {a: { $reverseArray: [[]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$str',{ $toLower: "auxiliary" }]]] }, _id: 0}}],

        [{$project: {a: { $dayOfWeek: { $minute: { $dateFromParts: {year: { $divide: [63460,95383] },month: { $subtract: [33774,16687] },day: { $add: [] },hour: '$obj.obj.obj.num',minute: '$obj.num'} } } }, _id: 0}}],

        [{$project: {a: { $ltrim: {input: '$obj.str',chars: '$obj.obj.obj.str'} }, _id: 0}}],

        [{$project: {a: { $trim: {input: '$obj.obj.str',chars: { $substrBytes: [{ $dateToString: { date: { $isoWeek: { $dateFromString: {dateString: "2018-09-06T15:12:03.279Z",format: "%z-%H-%j-%H-%m-%w-%M-%z-%S-%u-%L-%w"} } } } },18,1] }} }, _id: 0}}],

        [{$project: {a: { $trim: {input: '$str',chars: "integrated Factors"} }, _id: 0}}],

        [{$project: {a: { $reverseArray: [['$str']] }, _id: 0}}],

        [{$project: {a: LOOKUP_date;, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[68949,59817,'$obj.num'],[],[{ $trim: {input: "Berkshire quantifying Frozen",chars: { $trim: { input: '$str' } }} }]]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.obj.num'],71784] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[6374,{ $multiply: [98470] },'$obj.obj.num'],["bypassing",'$str']]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],[{ $substrCP: ["copying Strategist",3,6] }],["Toys Seamless",'$obj.obj.obj.str']]] }, _id: 0}}],

        [{$project: {a: { $concat: [{ $substrCP: ["bypassing Ergonomic Steel Hat",2,20] },'$obj.str',{ $toUpper: '$obj.str' },"e-business Croatian Kuna payment"] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],[{ $ltrim: {input: '$str',chars: { $dateToString: { date: { $week: { $week: new Date("2018-09-05T21:29:00.138Z") } } } }} },{ $substrCP: ["withdrawal Designer",11,1] }],[],['$obj.obj.obj.str',"strategize",{ $substr: ['$obj.obj.str',19,4] }],['$obj.str'],[{ $substrBytes: ["invoice Phased",7,14] },"Auto Loan Account 4th generation"],[]]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],77632] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["Checking Account Marketing","function Plastic"],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $toString: { $ltrim: {input: '$obj.obj.str',chars: '$obj.obj.str'} } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Beauty",v: '$obj.str'}]] }, _id: 0}}],

        [{$project: {a: { $rtrim: { input: '$obj.obj.obj.str' } }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: '$date',timezone: "Asia/Bangkok",onNull: "Granite"} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $substr: [{ $trim: { input: "mobile" } },16,16] }],'$num'] }, _id: 0}}],

        [{$project: {a: { $week: { $dateFromParts: {isoWeekYear: { $ceil: '$obj.obj.num' },isoWeek: { $add: [] },isoDayOfWeek: { $subtract: [90427,'$obj.num'] },hour: { $log: [15423,64379] },minute: { $multiply: ['$obj.obj.num',84488] },timezone: "Europe/Zaporozhye"} } }, _id: 0}}],

        [{$project: {a: { $second: { $dateFromString: {dateString: "2018-09-05T20:48:30.914Z",format: "%Z-%j-%M-%U-%L",onNull: { $toString: { $toString: { $toDate: { $arrayToObject: [[]] } } } }} } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "silver",v: true},{k: "RSS copy Grocery",v: { $substrCP: ["indigo Uzbekistan",0,17] }}]] }, _id: 0}}],

        [{$project: {a: { $dateToParts: {date: { $week: { $isoWeekYear: { $hour: { $month: { $week: { $millesecond: { $dayOfMonth: { $isoDayOfWeek: { $dateFromParts: {isoWeekYear: { $add: [] },isoWeek: { $abs: 31879 },isoDayOfWeek: { $log: ['$obj.obj.num','$num'] },second: { $log10: 21168 },millisecond: { $exp: '$obj.obj.num' }} } } } } } } } } },timezone: "Australia/Lindeman"} }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj.obj.obj' }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$obj.obj.obj.str',"Open-architected"],['$str',{ $toLower: "Licensed Steel Pants portal indexing" }],[],['$obj.obj.num']]] }, _id: 0}}],

        [{$project: {a: { $substrBytes: ["copy neural-net",12,9] }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: '$obj.obj.obj.date',format: "%H-%j-%z-%S-%L-%z-%m-%V-%U-%z",onNull: "New Zealand Mouse"} }, _id: 0}}],

        [{$project: {a: { $range: [3,11,16] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[66788,"XSS"],'$obj.obj.num'] }, _id: 0}}],

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
