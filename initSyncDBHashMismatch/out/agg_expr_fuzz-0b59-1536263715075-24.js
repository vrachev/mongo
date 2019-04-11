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
        return coll.insert({_id: 14985,str: "internet solution Ports",num: 5259,array: [new Date("2018-09-06T00:53:19.807Z"),"Frozen Tunisian Dinar",79595,[{_id: 14986,str: "Field national Awesome",date: new Date("2018-09-06T00:49:54.184Z"),array: [5969],obj: {}}],"Bedfordshire Officer dot-com",new Date("2018-09-06T02:10:40.009Z"),"overriding",new Date("2018-09-06T07:31:47.053Z"),"bi-directional",70414,37246,{_id: 14987,date: new Date("2018-09-06T03:25:36.005Z"),array: [],obj: {_id: 14988,str: "bypassing",num: 9086,date: new Date("2018-09-06T09:09:47.078Z"),obj: {}}},{_id: 14989,str: "XML Virginia Cambridgeshire",num: 9342,date: new Date("2018-09-06T07:47:36.413Z"),obj: {}},[],{_id: 14990,str: "hack",date: new Date("2018-09-06T09:07:42.600Z"),array: [],obj: {_id: 14991,num: 71388,date: new Date("2018-09-06T03:05:04.230Z")}}]});
    },

    function(coll) {
        return coll.insert({_id: 14992,str: "Sleek Granite Ball Awesome Cotton Ball",num: 76194,date: new Date("2018-09-06T09:35:23.239Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 14993,str: "Baby Associate conglomeration",num: 4465,array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 14994,str: "Savings Account Refined Granite Gloves",date: new Date("2018-09-05T21:58:58.020Z"),obj: {_id: 14995,str: "Dynamic Regional",num: 77339,date: new Date("2018-09-06T05:19:18.583Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 14996,str: "haptic",num: 34604,date: new Date("2018-09-06T12:04:04.287Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 14997,str: "Practical Concrete Keyboard Sri Lanka",num: 78307,date: new Date("2018-09-06T12:52:37.445Z")});
    },

    function(coll) {
        return coll.insert({_id: 14998,str: "Table reboot Branding",num: 95925,date: new Date("2018-09-06T04:37:34.457Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 14999,str: "teal Electronics Iowa",num: 17599,obj: {_id: 15000,str: "Lebanon HDD",num: 31295,date: new Date("2018-09-05T22:55:58.993Z"),array: [33339,new Date("2018-09-05T23:10:33.317Z"),new Date("2018-09-06T12:25:59.362Z"),new Date("2018-09-05T23:23:40.181Z"),"Tools",47000,"Adaptive Incredible","parsing Kids paradigms",new Date("2018-09-06T04:17:36.456Z"),5285],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 15001,str: "AGP",num: 64621,date: new Date("2018-09-06T11:39:45.345Z"),array: [24969,new Date("2018-09-06T10:04:22.111Z"),"Kids",[],new Date("2018-09-06T07:45:08.407Z"),{_id: 15002,num: 47733,date: new Date("2018-09-06T02:41:31.231Z"),array: [],obj: {_id: 15003,str: "Intelligent Rubber Bacon",num: 11289,date: new Date("2018-09-06T04:07:40.869Z"),array: [4491,61508,[],"bluetooth Customer",new Date("2018-09-06T17:46:27.327Z"),41679],obj: {_id: 15004,array: [],obj: {}}}},"Developer Tugrik",{_id: 15005,str: "maximize online",num: 89814,date: new Date("2018-09-06T06:22:18.135Z"),obj: {_id: 15006,str: "wireless Cambridgeshire",num: 71341,array: []}}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 15007,str: "composite software Gorgeous",date: new Date("2018-09-06T06:27:20.706Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 15008,str: "Web",num: 83260,date: new Date("2018-09-06T12:04:10.569Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 15009,str: "Pizza",num: 65975,date: new Date("2018-09-06T03:24:57.763Z"),obj: {_id: 15010,str: "Guarani payment",date: new Date("2018-09-06T01:34:25.433Z"),array: [new Date("2018-09-06T18:28:59.076Z"),"New York",76603,4995,[],50239,"open-source back-end",{_id: 15011,str: "Reverse-engineered",array: [],obj: {}},[{_id: 15012,num: 41806,date: new Date("2018-09-06T17:15:48.862Z"),array: [],obj: {}},new Date("2018-09-06T09:16:19.091Z"),new Date("2018-09-06T14:59:16.773Z"),42727,new Date("2018-09-06T00:07:10.867Z"),"Chicken robust Books","Optimization"]],obj: {_id: 15013,str: "Sleek deposit",num: 84918,array: [new Date("2018-09-05T20:02:05.176Z"),[{_id: 15014,num: 89718,date: new Date("2018-09-05T23:52:32.223Z"),array: [],obj: {_id: 15015,num: 19216,date: new Date("2018-09-06T08:47:07.898Z"),array: [[]]}}],"American Samoa utilize"],obj: {_id: 15016,str: "Exclusive Tennessee maroon",num: 69615}}}});
    },

    function(coll) {
        return coll.insert({_id: 15017,str: "Morocco calculating",num: 71659,date: new Date("2018-09-06T11:11:04.094Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 15018,str: "primary Tokelau contextually-based",num: 49328,date: new Date("2018-09-06T00:18:15.703Z"),array: [],obj: {_id: 15019,str: "Planner Virginia Generic Granite Keyboard",date: new Date("2018-09-06T14:28:39.476Z"),array: [99792,"payment system Reunion",new Date("2018-09-06T04:23:32.595Z"),63262,{_id: 15020,num: 46995,date: new Date("2018-09-05T20:37:51.372Z"),obj: {}},91937,75436,[new Date("2018-09-06T14:17:28.214Z"),"microchip",[]],new Date("2018-09-05T22:25:52.145Z"),{_id: 15021,str: "New Leu",num: 77315,array: [],obj: {}},"Myanmar Officer architecture","Won analyzer"],obj: {_id: 15022,str: "Consultant Expressway black",num: 57627,date: new Date("2018-09-06T00:59:45.596Z"),array: [],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 15023,str: "indexing",num: 56589,date: new Date("2018-09-06T18:45:12.044Z"),obj: {_id: 15024,str: "eco-centric Incredible niches",num: 63260,date: new Date("2018-09-06T15:44:34.224Z"),array: [new Date("2018-09-06T03:54:50.742Z"),["transmitter interface Granite",91915,"Western Sahara Stand-alone",84880,new Date("2018-09-05T22:35:30.543Z")],{_id: 15025,num: 57616,date: new Date("2018-09-06T11:22:46.644Z"),array: [new Date("2018-09-06T11:22:47.797Z"),{_id: 15026,str: "Tasty Plastic Chips monetize",date: new Date("2018-09-06T11:13:38.003Z"),array: []}],obj: {}},59367,"calculating",[],78869,"overriding"],obj: {_id: 15027,str: "artificial intelligence Licensed Buckinghamshire",num: 26602,date: new Date("2018-09-06T13:14:23.949Z"),obj: {_id: 15028,date: new Date("2018-09-06T10:17:05.600Z"),array: [new Date("2018-09-06T09:34:00.161Z"),{_id: 15029,str: "maroon Stream",num: 17584,array: [],obj: {}},{_id: 15030,num: 64051,array: [new Date("2018-09-06T18:08:48.358Z"),[],{_id: 15031,str: "Metal portals Solomon Islands Dollar",obj: {}},"Mali web-readiness Ohio"]}]}}}});
    },

    function(coll) {
        return coll.insert({_id: 15032,str: "withdrawal",num: 46907,date: new Date("2018-09-06T09:06:37.699Z"),array: [],obj: {_id: 15033,str: "neural",date: new Date("2018-09-06T11:04:51.927Z"),array: ["FTP",47183,90980,new Date("2018-09-05T23:21:39.112Z"),new Date("2018-09-06T10:38:02.213Z"),new Date("2018-09-06T14:28:13.447Z"),"Licensed invoice Home Loan Account","Assistant",[33388,"Pizza",new Date("2018-09-06T05:27:17.247Z"),{_id: 15034,str: "Cheese Cotton Liaison",num: 6664,date: new Date("2018-09-06T18:32:19.009Z"),array: [{_id: 15035,num: 49270,date: new Date("2018-09-05T22:41:45.052Z"),obj: {_id: 15036,num: 23199,array: [81363,57067],obj: {}}}],obj: {}}],"Borders",[],new Date("2018-09-06T13:22:20.530Z"),[]],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 15037,str: "copy Handmade Fresh Table Cotton",num: 14876,date: new Date("2018-09-06T18:13:36.863Z"),array: [new Date("2018-09-05T21:11:23.809Z"),new Date("2018-09-06T04:48:50.646Z"),"Group Qatari Rial Investor",94049,{_id: 15038,str: "Face to face",num: 74277,date: new Date("2018-09-06T17:14:47.294Z"),array: [],obj: {_id: 15039,str: "Netherlands Antillian Guilder Cloned Pizza",num: 12190,array: [],obj: {}}},69771,891,new Date("2018-09-06T01:49:04.112Z"),["SSL"],"Industrial Consultant compress",45156,new Date("2018-09-06T18:41:34.229Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 15040,str: "Cotton",num: 88755,date: new Date("2018-09-06T00:16:21.314Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 15041,num: 58083,date: new Date("2018-09-06T08:27:12.944Z"),array: [],obj: {_id: 15042,str: "Bedfordshire",num: 17292,array: ["sensor turn-key Savings Account",new Date("2018-09-06T02:02:33.224Z"),new Date("2018-09-05T21:54:49.333Z"),[],new Date("2018-09-06T07:53:47.085Z"),"neural exploit Missouri",7639,87587,[],"Re-engineered",new Date("2018-09-06T10:37:20.341Z"),new Date("2018-09-06T19:14:01.412Z")],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 15043,str: "Tasty Soft Hat capacity",date: new Date("2018-09-06T02:50:29.795Z"),array: ["conglomeration complexity",37679,new Date("2018-09-06T12:03:55.212Z"),{_id: 15044,str: "South Carolina Division",date: new Date("2018-09-06T07:47:34.556Z"),array: [new Date("2018-09-06T05:05:17.822Z"),"Electronics"]},new Date("2018-09-06T09:27:47.910Z"),85010,new Date("2018-09-06T07:54:52.722Z"),55471,29665,new Date("2018-09-06T13:55:21.117Z"),"Borders Convertible Marks Plains"],obj: {_id: 15045,str: "indigo connecting",num: 12141,date: new Date("2018-09-06T16:51:32.836Z"),array: [],obj: {_id: 15046,num: 53706,array: [{_id: 15047,str: "XSS",date: new Date("2018-09-06T07:15:45.901Z"),obj: {}},[],{_id: 15048,str: "brand virtual District",num: 12661,array: ["Licensed Tasty Functionality",[]]},{_id: 15049,num: 7099,date: new Date("2018-09-05T21:28:34.082Z"),obj: {_id: 15050,num: 72496,date: new Date("2018-09-05T22:33:04.220Z")}},19247,66373],obj: {_id: 15051,str: "quantifying backing up open-source",num: 99755,obj: {_id: 15052,str: "bus Utah Rhode Island",date: new Date("2018-09-06T18:34:36.822Z"),array: [],obj: {}}}}}});
    },

    function(coll) {
        return coll.insert({_id: 15053,str: "Soft Georgia bricks-and-clicks",num: 56413,date: new Date("2018-09-06T05:51:32.971Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 15054,str: "FTP",num: 5753,date: new Date("2018-09-06T06:58:25.377Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 15055,str: "backing up",num: 43461,date: new Date("2018-09-06T13:39:58.571Z"),array: [],obj: {_id: 15056,str: "Uzbekistan Sum",num: 54594,date: new Date("2018-09-05T23:27:03.403Z"),array: [new Date("2018-09-06T17:00:27.591Z"),"Towels protocol","quantify",new Date("2018-09-06T17:03:09.242Z"),74292,new Date("2018-09-06T18:22:02.002Z"),{_id: 15057,num: 12322,date: new Date("2018-09-05T22:39:37.869Z"),array: [],obj: {}},[{_id: 15058,str: "upward-trending fuchsia compress",date: new Date("2018-09-06T13:38:13.727Z"),obj: {_id: 15059,str: "SSL Licensed Frozen Ball",array: []}}],43506,26939,85212],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 15060,num: 18126,date: new Date("2018-09-05T23:23:36.006Z"),array: [],obj: {_id: 15061,str: "Producer",num: 51709,date: new Date("2018-09-06T08:12:02.037Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 15062,str: "interface",date: new Date("2018-09-06T04:14:41.954Z"),array: ["generate Internal",91756,"Azerbaijanian Manat","applications Sleek Credit Card Account",new Date("2018-09-06T01:39:15.854Z"),{_id: 15063,str: "transmit card Salad",num: 49316,date: new Date("2018-09-05T22:22:36.926Z"),obj: {_id: 15064,num: 13951,date: new Date("2018-09-06T14:29:55.017Z"),array: [23950],obj: {_id: 15065,str: "Uzbekistan ADP Optimized",array: [],obj: {}}}},{_id: 15066,str: "redefine Sleek Rubber Hat",num: 34943,date: new Date("2018-09-05T21:13:57.327Z"),array: [new Date("2018-09-06T07:36:39.807Z"),[],41107,new Date("2018-09-06T09:02:15.597Z")],obj: {}},[new Date("2018-09-06T12:49:21.482Z"),"River Usability synthesize",[]],"Legacy transition open-source",92660,new Date("2018-09-06T03:13:02.764Z"),"Zimbabwe Dollar rich Auto Loan Account"]});
    },

    function(coll) {
        return coll.insert({_id: 15067,str: "hacking",num: 28743,date: new Date("2018-09-05T23:16:56.312Z"),array: ["Awesome Metal Pizza hacking",new Date("2018-09-06T13:16:41.612Z"),97348,new Date("2018-09-05T22:52:25.165Z"),"world-class 24/365",[],85414,[23995],"Alley bypass",{_id: 15068,str: "Taka Buckinghamshire Ergonomic",num: 89262,date: new Date("2018-09-06T13:22:05.443Z"),array: [],obj: {_id: 15069,str: "e-business overriding Andorra",num: 79682,date: new Date("2018-09-06T09:56:03.038Z"),array: [],obj: {_id: 15070,date: new Date("2018-09-06T14:43:55.803Z"),array: []}}},"Licensed Creative",[new Date("2018-09-06T04:14:45.756Z"),new Date("2018-09-06T09:37:11.309Z"),36176]]});
    },

    function(coll) {
        return coll.insert({_id: 15071,num: 5294,obj: {_id: 15072,str: "synthesizing Checking Account Data",num: 74416,date: new Date("2018-09-06T08:53:43.949Z"),array: [{_id: 15073,str: "Creative",date: new Date("2018-09-05T22:35:42.087Z")},new Date("2018-09-06T05:15:59.069Z"),new Date("2018-09-06T11:04:28.462Z"),"optimal transmitter Stand-alone",3223,new Date("2018-09-05T23:54:11.338Z"),91795,"Soft protocol Global","Lead bypassing",{_id: 15074,str: "Generic Rubber Hat programming",num: 68899,date: new Date("2018-09-06T00:55:10.625Z"),array: ["Chips Generic",new Date("2018-09-06T11:45:56.452Z"),new Date("2018-09-06T11:18:08.281Z")],obj: {_id: 15075,str: "Intranet Integrated deposit",date: new Date("2018-09-06T16:08:00.952Z"),array: [],obj: {}}},49441]}});
    },

    function(coll) {
        return coll.insert({_id: 15076,num: 21167,date: new Date("2018-09-06T06:52:35.207Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 15077,str: "purple",num: 21854,date: new Date("2018-09-06T08:39:47.069Z"),array: ["calculate Belarussian Ruble",35532,[new Date("2018-09-05T23:09:59.708Z")],new Date("2018-09-06T10:24:24.311Z"),"Djibouti",99184,[],"program Investment Account",new Date("2018-09-06T12:47:49.298Z"),23214,[]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 15078,str: "Realigned Turnpike withdrawal",num: 2668,date: new Date("2018-09-06T00:45:14.757Z"),array: [],obj: {_id: 15079,str: "Regional Drives invoice",num: 24246,date: new Date("2018-09-06T00:07:02.833Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 15080,str: "Team-oriented",num: 68339,date: new Date("2018-09-06T13:26:52.393Z"),array: [],obj: {_id: 15081,str: "Towels XML",num: 17072,array: [new Date("2018-09-06T16:42:26.509Z"),38076,"transition",{_id: 15082,str: "seamless Investor",num: 5971,date: new Date("2018-09-06T16:13:08.797Z"),array: [],obj: {}},88660,[[new Date("2018-09-06T06:58:59.241Z"),{_id: 15083,num: 10780,date: new Date("2018-09-06T16:37:53.731Z"),obj: {}},"Highway",57587,new Date("2018-09-06T11:02:05.993Z")],[],"Wooden Metal"],"Director Practical Metal Tuna","HTTP sexy",62673,new Date("2018-09-05T23:43:18.469Z"),"conglomeration Executive one-to-one"],obj: {_id: 15084,str: "Investment Account Centralized Generic",date: new Date("2018-09-06T18:41:26.830Z"),array: [79154]}}});
    },

    function(coll) {
        return coll.insert({_id: 15085,str: "systems index",num: 20035,date: new Date("2018-09-06T05:20:49.401Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 15086,str: "complexity Function-based magenta",num: 64199,date: new Date("2018-09-06T04:56:39.609Z"),array: [],obj: {_id: 15087,num: 16106,date: new Date("2018-09-06T15:49:49.693Z"),array: [new Date("2018-09-06T07:53:04.099Z"),{_id: 15088,str: "Unbranded",num: 79761,date: new Date("2018-09-05T23:50:25.337Z"),array: ["Ergonomic Frozen Keyboard",96906],obj: {_id: 15089,str: "haptic Web",num: 92868,date: new Date("2018-09-06T06:51:18.963Z"),array: [],obj: {}}},"Points",18163,new Date("2018-09-06T17:29:58.188Z"),66909,{_id: 15090,str: "Uganda Shilling New York Kuwaiti Dinar",num: 87490},"deposit",39636,new Date("2018-09-06T18:13:36.476Z"),40153,[new Date("2018-09-06T11:53:05.361Z")],89992,"Bedfordshire Buckinghamshire card"],obj: {_id: 15091,str: "copying Wooden Soft",date: new Date("2018-09-06T09:47:10.171Z"),array: []}}});
    },

    function(coll) {
        return coll.insert({_id: 15092,str: "Concrete",num: 65393,date: new Date("2018-09-05T20:50:58.127Z"),array: [27416,new Date("2018-09-06T06:14:39.912Z"),92779,"Central","Clothing Cheese",new Date("2018-09-05T23:41:19.348Z"),51137,35160,{_id: 15093,num: 19545,obj: {}},"Savings Account parse"],obj: {_id: 15094,str: "New Mexico markets Digitized",num: 57896,date: new Date("2018-09-05T20:37:25.430Z"),array: ["Inlet",[],new Date("2018-09-06T12:37:31.594Z"),[new Date("2018-09-06T07:00:33.009Z")]],obj: {_id: 15095,str: "Bedfordshire teal",date: new Date("2018-09-06T07:03:39.143Z"),array: []}}});
    },

    function(coll) {
        return coll.insert({_id: 15096,num: 42298,date: new Date("2018-09-05T23:25:33.937Z"),array: ["withdrawal Indian Rupee Ngultrum Savings Account",new Date("2018-09-06T08:15:47.930Z"),{_id: 15097,str: "visionary",num: 63943,date: new Date("2018-09-06T10:07:34.750Z"),array: [],obj: {_id: 15098,str: "tan virtual Interactions",num: 84492,date: new Date("2018-09-06T14:18:45.051Z"),array: []}},56829,"Product open-source cross-platform",98219,8044,new Date("2018-09-06T15:54:16.383Z"),"programming engineer knowledge base",new Date("2018-09-06T14:27:00.117Z"),"Motorway Syrian Pound",[],new Date("2018-09-06T09:59:22.143Z"),45050],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 15099,str: "wireless",num: 52404,date: new Date("2018-09-06T09:42:29.018Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 15100,str: "Buckinghamshire Michigan Specialist",num: 76113,date: new Date("2018-09-06T15:27:02.142Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 15101,str: "Berkshire solution Practical",num: 31043,date: new Date("2018-09-06T06:40:20.995Z"),array: [45962,new Date("2018-09-06T16:08:17.497Z"),56434,69213,[],"wireless",[],{_id: 15102,str: "Drive deposit International",num: 13286,date: new Date("2018-09-06T04:16:52.469Z"),array: [{_id: 15103,num: 73780,date: new Date("2018-09-06T18:02:53.018Z"),array: [new Date("2018-09-06T09:00:08.821Z"),"Road Azerbaijan"],obj: {_id: 15104,str: "connect Wooden",date: new Date("2018-09-06T11:54:15.556Z"),array: ["Ergonomic Frozen Mouse"]}},new Date("2018-09-06T12:04:25.864Z"),new Date("2018-09-06T18:00:46.047Z"),"GB Tenge Light","withdrawal Outdoors approach"],obj: {}},new Date("2018-09-06T08:39:30.033Z"),"Danish Krone RAM Tenge",65844],obj: {_id: 15105,str: "Salad streamline parse",num: 55582,date: new Date("2018-09-05T23:33:26.742Z"),array: [],obj: {_id: 15106,str: "Lempira"}}});
    },

    function(coll) {
        return coll.insert({_id: 15107,str: "copying Generic Metal Cheese Sports",num: 35207,date: new Date("2018-09-06T09:04:58.840Z"),array: [],obj: {_id: 15108,num: 25543,date: new Date("2018-09-06T06:54:42.552Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 15109,str: "circuit asynchronous",num: 90698,array: [new Date("2018-09-06T15:17:16.692Z"),"zero administration RSS",691,["Phased Valley Outdoors",62297],[],71383,69954,"XML",{_id: 15110,str: "bluetooth",num: 64537,date: new Date("2018-09-05T20:17:11.867Z"),obj: {_id: 15111,num: 7674,date: new Date("2018-09-06T12:02:50.143Z"),array: [new Date("2018-09-06T09:40:37.606Z"),new Date("2018-09-06T10:07:03.749Z"),new Date("2018-09-06T09:42:37.671Z")],obj: {}}}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 15112,str: "Generic Wooden Chips Fresh",num: 24500,date: new Date("2018-09-06T13:14:35.349Z"),array: [5696,[new Date("2018-09-06T12:17:46.087Z"),{_id: 15113,str: "Wall seamless",date: new Date("2018-09-06T05:21:31.375Z"),array: [],obj: {}},"Licensed Cotton Ball European Unit of Account 9(E.U.A.-9)",new Date("2018-09-05T21:50:21.455Z")],new Date("2018-09-06T17:33:40.253Z"),"Virginia Crescent",85001,"Congolese Franc",new Date("2018-09-06T18:07:49.272Z"),{_id: 15114,str: "generate Keyboard",array: [],obj: {}},59855,"Lari Computer solid state",[new Date("2018-09-06T13:01:52.734Z"),12348]],obj: {_id: 15115,num: 41469,date: new Date("2018-09-05T22:02:37.830Z"),obj: {_id: 15116,str: "Product feed redundant",num: 475,date: new Date("2018-09-06T11:51:33.363Z"),array: ["Borders brand"],obj: {_id: 15117,num: 24462,date: new Date("2018-09-06T12:39:06.508Z"),array: []}}}});
    },

    function(coll) {
        return coll.insert({_id: 15118,str: "Officer uniform",num: 40216,date: new Date("2018-09-06T17:04:45.669Z"),array: [],obj: {_id: 15119,str: "Zimbabwe Trail",num: 31938,date: new Date("2018-09-06T11:49:25.917Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 15120,str: "Run Buckinghamshire Gloves",num: 63158,date: new Date("2018-09-06T03:28:06.969Z"),array: ["bypassing",76910,new Date("2018-09-06T18:02:46.482Z"),68454,"navigate Sudanese Pound innovate",new Date("2018-09-06T09:07:28.580Z"),23003,new Date("2018-09-06T13:12:29.082Z"),new Date("2018-09-06T10:30:31.315Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 15121,str: "knowledge user e-markets",num: 97362,date: new Date("2018-09-05T20:39:32.573Z"),array: [85053,"transmit Practical Fresh Towels Awesome","reintermediate yellow Louisiana",new Date("2018-09-06T05:02:43.391Z"),[],new Date("2018-09-06T02:47:45.639Z"),"Brand",99561,21315,new Date("2018-09-06T08:37:59.220Z"),{_id: 15122,num: 51349,date: new Date("2018-09-06T11:54:54.463Z"),array: [78713,{_id: 15123,str: "Tasty Rubber Cheese",num: 51293,array: [],obj: {}}],obj: {_id: 15124,str: "architect Tasty",date: new Date("2018-09-05T22:54:30.773Z")}}],obj: {_id: 15125,str: "Delaware parse",num: 64717,date: new Date("2018-09-06T16:45:50.543Z"),array: [82146,"Exclusive"],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 15126,str: "enable Unbranded",num: 37453,date: new Date("2018-09-06T05:36:22.686Z"),array: [],obj: {_id: 15127,str: "Central magenta relationships",num: 46922,date: new Date("2018-09-06T00:01:28.164Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 15128,str: "Operations Solomon Islands invoice",num: 86622,date: new Date("2018-09-06T09:39:51.829Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 15129,str: "synthesizing",num: 829,date: new Date("2018-09-06T04:54:06.969Z"),array: [82497,new Date("2018-09-06T03:58:00.774Z"),[new Date("2018-09-06T02:39:09.155Z"),17933,34488,{_id: 15130,str: "convergence web services",num: 38321,array: ["Creative Small"],obj: {_id: 15131,str: "Tugrik Mandatory JBOD",date: new Date("2018-09-06T19:43:26.557Z"),array: [],obj: {_id: 15132,num: 40941,date: new Date("2018-09-05T22:02:52.932Z"),array: [{_id: 15133,str: "Cotton",date: new Date("2018-09-05T23:42:16.109Z"),obj: {_id: 15134,num: 59219,obj: {}}},{_id: 15135,num: 36461,date: new Date("2018-09-06T01:53:42.321Z")},"Cross-group",new Date("2018-09-05T20:16:30.655Z"),"Jersey"],obj: {}}}}],[82471,"invoice Sleek collaborative"],"Quality",new Date("2018-09-06T06:59:42.450Z"),new Date("2018-09-06T09:18:13.472Z"),{_id: 15136,str: "Kyat",date: new Date("2018-09-05T22:49:42.398Z"),array: [],obj: {}},[],18687],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 15137,str: "Intelligent",num: 80631,date: new Date("2018-09-06T02:32:30.282Z"),array: ["calculating Berkshire Operative",[[]],"online Nevada HTTP",85269,new Date("2018-09-06T10:50:51.450Z"),new Date("2018-09-06T15:53:52.153Z"),6751,new Date("2018-09-06T01:56:56.585Z"),87529,"back-end",new Date("2018-09-06T06:25:58.246Z"),31442],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 15138,str: "Avon Buckinghamshire",num: 76495,date: new Date("2018-09-06T13:41:14.058Z"),array: [],obj: {_id: 15139,num: 69859,date: new Date("2018-09-06T07:00:32.349Z"),array: [33166,"synergize Handcrafted Rubber Keyboard Cambridgeshire",new Date("2018-09-05T21:40:01.722Z"),new Date("2018-09-06T17:21:57.885Z"),"Money Market Account",30924,69714,new Date("2018-09-06T13:36:57.588Z"),{_id: 15140,str: "eyeballs website",num: 42700,date: new Date("2018-09-05T23:48:15.197Z"),obj: {_id: 15141,str: "Administrator Bangladesh"}},[83466,new Date("2018-09-06T19:43:57.558Z"),"help-desk"],[]],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 15142,str: "Small Car",num: 76217,date: new Date("2018-09-06T05:54:10.956Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 15143,str: "Soft extranet",num: 52210,date: new Date("2018-09-06T19:40:49.587Z"),array: [84613,"Checking Account dot-com",18635,[],new Date("2018-09-06T12:18:26.080Z"),"salmon Ethiopian Birr","deploy Pakistan Rupee Wooden",52734,"Wyoming e-tailers",3027,new Date("2018-09-06T02:38:20.766Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 15144,str: "Handcrafted Frozen Sausages",num: 37168,date: new Date("2018-09-06T03:57:07.363Z"),array: [],obj: {_id: 15145,str: "lavender Lead",date: new Date("2018-09-05T22:36:30.451Z"),array: [75191,4518,[],new Date("2018-09-06T18:58:43.217Z"),"virtual",82550,new Date("2018-09-05T20:59:54.239Z"),new Date("2018-09-05T19:57:33.588Z"),"Pakistan Rupee Saint Kitts and Nevis Fiji Dollar",90336,new Date("2018-09-05T19:58:12.013Z"),[{_id: 15146,str: "SSL",num: 69396,date: new Date("2018-09-05T20:01:02.102Z"),obj: {}},new Date("2018-09-06T03:20:13.159Z")]],obj: {_id: 15147,num: 73598,array: []}}});
    },

    function(coll) {
        return coll.insert({_id: 15148,str: "bypassing",date: new Date("2018-09-06T12:47:43.049Z"),array: ["Implementation Handcrafted",new Date("2018-09-05T21:51:54.752Z"),"withdrawal Producer",10859,"Movies Gorgeous","Regional haptic",new Date("2018-09-06T09:57:07.894Z"),44433,97113,{_id: 15149,str: "teal",num: 88637,date: new Date("2018-09-06T11:34:28.839Z"),obj: {}},new Date("2018-09-06T07:12:22.406Z"),"Oklahoma Technician"],obj: {_id: 15150,str: "California Cross-group",num: 21028,date: new Date("2018-09-06T12:55:18.782Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 15151,str: "Concrete matrix National",num: 84975,date: new Date("2018-09-06T08:58:58.421Z"),array: [[],new Date("2018-09-06T06:36:41.031Z"),new Date("2018-09-06T12:36:13.091Z"),"leading-edge gold Table","value-added","North Dakota Sausages RAM",new Date("2018-09-06T17:19:51.391Z"),41115,33812,43653,"invoice Fantastic Plastic Fish"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 15152,str: "Granite Cotton Extended",num: 20939,date: new Date("2018-09-05T22:41:56.979Z"),obj: {_id: 15153,str: "reboot Concrete",date: new Date("2018-09-06T05:34:25.527Z"),array: [9606,"Leone Cambridgeshire Salad",22133,new Date("2018-09-06T16:06:10.365Z"),"enterprise",90291,27467,"panel Azerbaijanian Manat",{_id: 15154,str: "Credit Card Account digital Investor",num: 52014,array: [],obj: {}},new Date("2018-09-06T18:56:31.704Z")],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 15155,str: "auxiliary generating",num: 29093,date: new Date("2018-09-06T00:33:55.600Z")});
    },

    function(coll) {
        return coll.insert({_id: 15156,str: "SCSI reboot",num: 78299,date: new Date("2018-09-06T19:37:18.007Z"),array: [new Date("2018-09-06T01:03:54.935Z"),{_id: 15157,str: "Spring",num: 23057,date: new Date("2018-09-06T16:07:59.202Z"),array: [],obj: {_id: 15158,array: [new Date("2018-09-06T01:12:40.312Z")],obj: {}}},[new Date("2018-09-06T09:37:00.545Z"),"haptic Washington",75584,35009],"service-desk Concrete","Rustic Cotton Sausages Pizza SDD","Organic deposit programming",40601,{_id: 15159,str: "policy calculating",num: 79361,date: new Date("2018-09-06T02:39:27.543Z"),array: [],obj: {_id: 15160,num: 71856,date: new Date("2018-09-06T08:05:37.871Z"),array: [],obj: {}}},[],new Date("2018-09-05T20:45:55.679Z"),17042]});
    },

    function(coll) {
        return coll.insert({_id: 15161,str: "Buckinghamshire",num: 98548,date: new Date("2018-09-06T08:29:35.073Z"),array: [new Date("2018-09-06T01:25:05.457Z"),{_id: 15162,str: "interface relationships South Dakota",num: 56082,date: new Date("2018-09-06T15:11:46.331Z"),array: []},new Date("2018-09-06T07:33:09.904Z"),"Applications","yellow Somalia","SQL Fresh vertical",{_id: 15163,num: 24412,date: new Date("2018-09-06T17:28:53.083Z"),array: ["web services Concrete",56325],obj: {}},2722,[],{_id: 15164,str: "communities",num: 51849,date: new Date("2018-09-06T14:33:07.177Z"),array: [35174,{_id: 15165,str: "Liaison",obj: {_id: 15166,str: "magenta index",array: [],obj: {_id: 15167,num: 26479,date: new Date("2018-09-06T12:53:57.661Z"),obj: {}}}},"bypass moderator",new Date("2018-09-05T23:27:14.427Z")]},60922],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 15168,str: "Money Market Account Greens SSL",num: 39429,date: new Date("2018-09-05T22:07:28.346Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 15169,str: "Cuba Direct Automotive",num: 12577,date: new Date("2018-09-06T11:37:18.857Z"),array: ["bandwidth-monitored",{_id: 15170,str: "ivory",date: new Date("2018-09-06T00:20:42.292Z"),obj: {_id: 15171,str: "intangible teal",num: 36581,date: new Date("2018-09-06T13:40:20.393Z"),array: []}},209,63153,new Date("2018-09-06T09:00:06.188Z"),[],"supply-chains",new Date("2018-09-06T00:01:20.153Z"),"Seamless sensor","neural open-source",{_id: 15172,str: "Computers fuchsia AGP",num: 46673,array: [new Date("2018-09-06T06:13:38.616Z")],obj: {}},53882],obj: {_id: 15173,str: "product",num: 97134,date: new Date("2018-09-06T08:44:40.871Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 15174,str: "Investment Account Versatile Investment Account",num: 84274,date: new Date("2018-09-06T10:56:53.569Z"),array: ["Bike connect",new Date("2018-09-06T01:08:04.205Z"),53251,{_id: 15175,str: "lavender payment Unbranded Granite Pizza",num: 43400,date: new Date("2018-09-05T22:54:39.394Z")},new Date("2018-09-06T10:44:52.266Z"),"Tasty",new Date("2018-09-06T10:22:31.391Z"),[],90932,63446,"distributed",{_id: 15176,str: "Coordinator withdrawal",num: 84960,date: new Date("2018-09-05T21:23:12.925Z"),array: [new Date("2018-09-06T19:39:09.154Z")],obj: {_id: 15177,str: "digital open system",num: 43416,date: new Date("2018-09-06T04:05:29.934Z"),array: [65031,new Date("2018-09-06T01:02:26.179Z")],obj: {_id: 15178,str: "Handmade Cotton Car Associate Principal",array: [],obj: {}}}},[]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 15179,str: "Table",num: 12689,date: new Date("2018-09-06T03:40:11.710Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 15180,str: "COM",num: 99954,date: new Date("2018-09-06T09:13:56.807Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 15181,num: 58737,date: new Date("2018-09-06T18:43:46.123Z"),obj: {_id: 15182,str: "withdrawal",num: 77257,date: new Date("2018-09-06T05:00:55.627Z"),array: [51989,new Date("2018-09-06T00:39:53.039Z"),new Date("2018-09-06T08:31:40.103Z"),{_id: 15183,str: "Small Granite Tuna",num: 91874,date: new Date("2018-09-05T23:49:10.669Z"),array: [],obj: {_id: 15184,str: "Ergonomic initiatives index",date: new Date("2018-09-06T05:05:03.845Z"),array: []}},98077,"Integrated","synthesize","Tasty Estate online",[],new Date("2018-09-06T12:15:38.789Z"),{_id: 15185,str: "PNG Metal pricing structure",obj: {}}]}});
    },

    function(coll) {
        return coll.insert({_id: 15186,str: "Devolved",num: 37360,date: new Date("2018-09-06T09:46:02.351Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 15187,str: "RSS copying",num: 2978,date: new Date("2018-09-05T23:58:07.336Z"),array: ["HDD Assimilated West Virginia","Grass-roots Cotton robust",37030,new Date("2018-09-06T13:50:36.699Z"),new Date("2018-09-06T10:51:12.773Z"),[],77634,{_id: 15188,str: "interface transform",num: 77040,date: new Date("2018-09-06T16:43:07.843Z"),array: [],obj: {}},77258,new Date("2018-09-05T21:20:33.534Z"),"Fantastic Metal Ball executive",new Date("2018-09-06T03:31:53.502Z"),"Center compress monetize",[]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 15189,str: "Guernsey Implementation",num: 24110,date: new Date("2018-09-06T11:41:36.080Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 15190,str: "Borders Turkmenistan project",num: 6347,date: new Date("2018-09-06T17:56:03.799Z"),obj: {_id: 15191,num: 71677,date: new Date("2018-09-06T17:51:44.674Z"),array: ["Oklahoma",new Date("2018-09-06T16:36:47.839Z"),99575,[],"parsing",43801,{_id: 15192,str: "Analyst mindshare parsing",array: [],obj: {}},"Cambridgeshire Saint Vincent and the Grenadines Developer",86512]}});
    },

    function(coll) {
        return coll.insert({_id: 15193,str: "indexing Steel",num: 23261,date: new Date("2018-09-06T09:03:11.393Z"),array: [{_id: 15194,str: "system technologies",date: new Date("2018-09-06T05:00:09.621Z"),array: [27693,"Cambodia Nevada Open-source","Tennessee Personal Loan Account","Synergized",new Date("2018-09-05T20:02:06.767Z")],obj: {}},"out-of-the-box",[46925,[]],new Date("2018-09-06T00:59:04.936Z"),"Liaison Tasty Wooden Fish",new Date("2018-09-06T05:34:01.903Z"),3789,{_id: 15195,str: "Accounts Gambia",num: 20968,date: new Date("2018-09-06T08:07:42.290Z")},new Date("2018-09-06T08:29:29.039Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 15196,str: "Checking Account",num: 52382,date: new Date("2018-09-05T21:16:28.680Z"),array: [],obj: {_id: 15197,str: "eyeballs",date: new Date("2018-09-06T18:35:08.687Z"),array: [],obj: {_id: 15198,str: "Bedfordshire Fiji Dollar",num: 45671,obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 15199,str: "RSS payment",date: new Date("2018-09-06T04:24:53.681Z"),array: [],obj: {_id: 15200,str: "empower exuding circuit",num: 76270,array: [new Date("2018-09-06T14:42:48.113Z"),81749,"strategize deposit feed","open-source",27669,"database",[[],new Date("2018-09-06T18:40:09.904Z")],{_id: 15201,str: "Barbados Dollar",num: 22195,date: new Date("2018-09-06T07:07:04.203Z"),array: [],obj: {}},new Date("2018-09-06T05:49:27.666Z"),{_id: 15202,str: "IB",num: 79261,date: new Date("2018-09-06T11:37:01.577Z"),obj: {_id: 15203,array: [new Date("2018-09-06T01:33:21.205Z")]}},"purple Burgs",[81471,75432,new Date("2018-09-05T20:35:18.977Z")],new Date("2018-09-06T03:14:52.353Z")],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 15204,str: "model maroon Canada",date: new Date("2018-09-06T12:38:32.863Z"),array: [[],new Date("2018-09-06T07:50:30.149Z"),"Argentine Peso",new Date("2018-09-06T13:52:42.945Z"),"neutral communities",new Date("2018-09-06T01:52:40.459Z"),{_id: 15205,num: 67968,date: new Date("2018-09-06T16:20:39.336Z"),array: [new Date("2018-09-06T18:10:52.335Z"),[]],obj: {}},67623,83038,{_id: 15206,str: "Squares ADP withdrawal",num: 37006,date: new Date("2018-09-06T10:26:24.628Z"),array: [],obj: {}},10101]});
    },

    function(coll) {
        return coll.insert({_id: 15207,str: "Books",num: 44688,date: new Date("2018-09-06T03:43:25.635Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 15208,str: "Handcrafted Lead",num: 38005,array: [],obj: {_id: 15209,str: "Bahamas Extension grow",num: 34974,date: new Date("2018-09-06T11:55:27.596Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 15210,str: "National Massachusetts Gold",num: 86248,date: new Date("2018-09-06T05:09:33.351Z"),array: [],obj: {_id: 15211,str: "bandwidth",num: 37817,date: new Date("2018-09-05T22:10:47.806Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 15212,num: 98622,date: new Date("2018-09-06T00:43:59.050Z"),array: [[],[new Date("2018-09-06T09:31:21.624Z"),"Intranet",77943],"Drive PNG","parsing Divide",new Date("2018-09-06T12:22:00.991Z"),93582,{_id: 15213,str: "Washington Guam",num: 87901,date: new Date("2018-09-05T22:18:40.442Z"),array: [],obj: {}},"Customer Division",82822,new Date("2018-09-06T11:04:37.458Z"),94057],obj: {_id: 15214,str: "Avon Bike deposit",num: 95468,date: new Date("2018-09-06T01:09:03.142Z"),array: [new Date("2018-09-06T12:57:36.255Z"),new Date("2018-09-06T10:40:11.380Z")],obj: {_id: 15215,date: new Date("2018-09-06T01:36:43.155Z")}}});
    },

    function(coll) {
        return coll.insert({_id: 15216,str: "input navigate intermediate",num: 33746,date: new Date("2018-09-06T14:32:12.353Z"),array: [27913,82805,new Date("2018-09-06T07:19:55.580Z"),"Car","Sri Lanka",[],{_id: 15217,str: "Practical Cotton Soap Beauty",num: 45144,date: new Date("2018-09-06T01:49:41.265Z"),array: [49315,{_id: 15218,obj: {}},[]],obj: {}},["deposit Directives Handcrafted Granite Sausages"],"Toys",18266,[],{_id: 15219,str: "Refined Metal Computer",date: new Date("2018-09-06T07:04:06.650Z"),array: [new Date("2018-09-06T03:34:45.726Z"),new Date("2018-09-06T04:40:33.634Z")],obj: {_id: 15220,str: "Summit feed",num: 91108,date: new Date("2018-09-06T16:09:11.272Z")}}]});
    },

    function(coll) {
        return coll.insert({_id: 15221,str: "SSL incubate",num: 55701,date: new Date("2018-09-06T12:24:08.771Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 15222,str: "back-end enterprise Colombian Peso Unidad de Valor Real",num: 14760,date: new Date("2018-09-06T09:21:48.723Z"),array: [11581,new Date("2018-09-06T10:38:26.834Z"),"Auto Loan Account Shirt",49594,new Date("2018-09-06T13:09:17.394Z"),31481,"Licensed Plastic Car Checking Account Principal","Causeway","Implemented Auto Loan Account benchmark",60944,21686,new Date("2018-09-06T09:22:12.554Z"),[]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 15223,str: "e-tailers",num: 76287,date: new Date("2018-09-06T06:38:51.735Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 15224,num: 49850,date: new Date("2018-09-06T06:45:43.728Z"),array: ["payment web-readiness Rubber",[],"back up Upgradable Auto Loan Account",68084,new Date("2018-09-06T14:46:21.345Z"),new Date("2018-09-06T11:48:38.782Z"),{_id: 15225,str: "Bedfordshire orchid Chilean Peso Unidades de fomento",num: 57365,date: new Date("2018-09-06T18:58:37.740Z")},24972,726,{_id: 15226,str: "Assurance synthesizing",num: 17637,date: new Date("2018-09-06T01:00:20.619Z"),obj: {_id: 15227,str: "Indiana lavender e-business",date: new Date("2018-09-06T15:58:30.912Z"),array: [],obj: {_id: 15228,str: "incentivize pixel maximize",num: 63970,array: [],obj: {}}}},new Date("2018-09-06T00:37:41.663Z"),"Fresh overriding"]});
    },

    function(coll) {
        return coll.insert({_id: 15229,str: "Berkshire Assistant auxiliary",num: 29032,date: new Date("2018-09-05T20:03:46.606Z"),array: [{_id: 15230,num: 383,array: ["policy invoice",new Date("2018-09-06T08:59:21.605Z"),"Avon Soap",new Date("2018-09-05T20:42:41.579Z"),{_id: 15231,str: "expedite",num: 74817,date: new Date("2018-09-06T17:44:41.857Z"),obj: {}}],obj: {}},new Date("2018-09-06T18:33:56.702Z"),51627,[],69159,67258,"functionalities","lime",11347,[]],obj: {_id: 15232,num: 6174,array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 15233,str: "Tunnel input 1080p",num: 19640,date: new Date("2018-09-06T07:21:53.211Z"),array: ["Berkshire",35128,"primary Ball",[[],new Date("2018-09-06T15:49:23.959Z")],"yellow bus Keyboard",new Date("2018-09-06T00:01:12.728Z"),57527,new Date("2018-09-06T19:38:43.518Z"),new Date("2018-09-05T23:31:32.145Z")],obj: {_id: 15234,str: "Cotton",num: 380,date: new Date("2018-09-06T14:03:16.821Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 15235,num: 93373,date: new Date("2018-09-06T11:47:53.910Z"),array: [66243,31932,{_id: 15236,str: "navigate Ranch withdrawal",num: 9516,date: new Date("2018-09-06T16:40:49.616Z"),array: [],obj: {}},new Date("2018-09-06T14:53:19.513Z"),"Wisconsin deposit",43756,"Bosnia and Herzegovina",[],new Date("2018-09-06T06:33:51.747Z"),{_id: 15237,str: "schemas withdrawal",num: 86860,date: new Date("2018-09-06T16:03:17.540Z"),array: [],obj: {}},"Walk",new Date("2018-09-06T04:52:17.269Z")],obj: {_id: 15238,str: "Health hybrid multimedia",num: 88073,array: [53556,[]]}});
    },

    function(coll) {
        return coll.insert({_id: 15239,str: "panel",num: 56523,date: new Date("2018-09-05T20:48:47.618Z"),array: [],obj: {_id: 15240,str: "Markets black optical",num: 63581,date: new Date("2018-09-06T02:55:27.153Z"),array: [82194,"Concrete California",[],{_id: 15241,str: "Bike Buckinghamshire",array: [],obj: {}},26954,new Date("2018-09-06T15:32:02.561Z"),[],"programming Mauritius Rupee SMTP",{_id: 15242,str: "orchid Operations Savings Account",num: 505,date: new Date("2018-09-06T07:25:41.763Z"),array: [90510,new Date("2018-09-06T07:06:54.828Z")]},{_id: 15243,date: new Date("2018-09-06T10:49:08.981Z"),array: [],obj: {}},"International",[{_id: 15244,str: "impactful teal",num: 13304,date: new Date("2018-09-05T21:14:42.479Z"),array: [],obj: {_id: 15245,num: 22252}},"Wyoming XML syndicate"]],obj: {_id: 15246,num: 13220}}});
    },

    function(coll) {
        return coll.insert({_id: 15247,str: "Tunisia virtual focus group",num: 87663,date: new Date("2018-09-06T02:00:54.597Z"),array: [],obj: {_id: 15248,str: "panel",num: 49473,date: new Date("2018-09-06T06:41:29.611Z"),array: [],obj: {_id: 15249,str: "Mauritania Saint Kitts and Nevis",num: 73240}}});
    },

    function(coll) {
        return coll.insert({_id: 15250,str: "productivity",num: 47450,date: new Date("2018-09-06T04:27:04.604Z"),array: [new Date("2018-09-05T20:37:32.320Z"),new Date("2018-09-06T19:50:53.725Z"),new Date("2018-09-06T15:37:59.931Z"),[],76110,"Branding",24694,4178,20993,78670],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 15251,str: "deposit leading-edge Global",num: 94105,date: new Date("2018-09-06T06:50:27.643Z"),array: [{_id: 15252,str: "Direct Tuna Handcrafted",num: 57032,date: new Date("2018-09-06T19:45:21.824Z"),array: [],obj: {}},new Date("2018-09-06T18:23:22.728Z"),new Date("2018-09-06T04:29:38.048Z"),23243,36895,5902,"Soap Netherlands Antillian Guilder Brand",53382,[],new Date("2018-09-06T17:24:27.737Z"),"payment Computer"]});
    },

    function(coll) {
        return coll.insert({_id: 15253,str: "invoice",num: 84211,date: new Date("2018-09-06T09:26:23.483Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 15254,str: "Sleek Wooden Shirt SQL",num: 50662,date: new Date("2018-09-06T06:48:06.507Z"),array: [],obj: {_id: 15255,num: 64337,date: new Date("2018-09-06T13:44:15.553Z"),array: [],obj: {_id: 15256,str: "fresh-thinking Berkshire",num: 46688,date: new Date("2018-09-06T11:50:26.882Z"),array: [new Date("2018-09-05T22:16:11.490Z"),new Date("2018-09-06T17:30:33.771Z"),75239,"complexity online",62414,new Date("2018-09-06T04:56:47.476Z"),"Concrete",[[],37810,"Avon turquoise background"],new Date("2018-09-06T19:13:07.960Z")],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 15257,str: "Synergistic withdrawal Leone",num: 5704,date: new Date("2018-09-06T06:50:08.287Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 15258,str: "Licensed",num: 93442,date: new Date("2018-09-05T20:09:11.563Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 15259,str: "South Carolina",num: 25949,date: new Date("2018-09-06T14:11:29.969Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 15260,str: "Avon",num: 89464,date: new Date("2018-09-06T02:49:54.932Z"),array: ["Kwacha Bedfordshire Handcrafted",81074,new Date("2018-09-06T12:04:18.658Z"),new Date("2018-09-05T23:05:58.178Z"),[],"Pants Investor","payment",{_id: 15261,str: "web-enabled",date: new Date("2018-09-06T19:35:07.543Z"),array: [],obj: {}},12980,92220,24300,[]],obj: {_id: 15262,str: "PNG Metal Generic Rubber Soap",num: 67357,date: new Date("2018-09-05T22:49:59.952Z"),array: [new Date("2018-09-06T04:51:20.651Z"),new Date("2018-09-06T14:40:28.175Z"),"connecting contingency"]}});
    },

    function(coll) {
        return coll.insert({_id: 15263,str: "European Monetary Unit (E.M.U.-6) Tools Iranian Rial",num: 67819,date: new Date("2018-09-05T22:58:03.377Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 15264,str: "program bus",num: 63034,date: new Date("2018-09-06T14:32:14.056Z"),array: [],obj: {_id: 15265,str: "RSS Division",num: 95212,date: new Date("2018-09-06T15:13:23.229Z"),obj: {_id: 15266,str: "Total digital",array: []}}});
    },

    function(coll) {
        return coll.insert({_id: 15267,str: "Savings Account",num: 67107,array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 15268,str: "streamline technologies Iowa",num: 67679,date: new Date("2018-09-06T07:08:29.249Z"),array: [],obj: {_id: 15269,str: "Small Malaysia",num: 54214,date: new Date("2018-09-06T09:22:30.413Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 15270,num: 77549,date: new Date("2018-09-06T00:56:18.649Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 15271,str: "Small Frozen Tuna world-class",num: 97039,date: new Date("2018-09-06T14:29:14.798Z"),array: ["tan",new Date("2018-09-05T22:15:20.498Z"),"redefine Dam compressing",[],new Date("2018-09-06T04:53:53.896Z"),new Date("2018-09-06T16:59:48.954Z"),"Metrics",[],53442,"Profound Infrastructure",{_id: 15272,str: "Reunion structure protocol",num: 2577,date: new Date("2018-09-06T04:24:47.922Z"),array: ["mission-critical",new Date("2018-09-06T11:12:47.937Z")],obj: {}},69047],obj: {_id: 15273,str: "value-added Ergonomic Granite Fish Barbados Dollar",num: 30939,date: new Date("2018-09-06T03:18:15.710Z"),array: [],obj: {_id: 15274,num: 75694,date: new Date("2018-09-06T04:51:26.384Z")}}});
    },

    function(coll) {
        return coll.insert({_id: 15275,num: 76790,date: new Date("2018-09-06T18:44:06.381Z"),array: [],obj: {_id: 15276,str: "invoice Money Market Account Cheese",num: 16329,date: new Date("2018-09-06T04:41:37.818Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 15277,str: "synthesizing",num: 47831,date: new Date("2018-09-06T04:12:44.463Z"),obj: {_id: 15278,str: "Rue auxiliary",date: new Date("2018-09-06T06:37:17.233Z"),array: [15280,[],"transform programming Developer","1080p mint green hacking",new Date("2018-09-06T15:18:17.733Z"),new Date("2018-09-05T23:54:52.383Z"),"redefine Awesome Data",{_id: 15279,str: "Berkshire",num: 32394,date: new Date("2018-09-06T12:39:51.753Z"),array: [],obj: {}},new Date("2018-09-05T20:16:46.444Z"),"Facilitator Applications",4674,[[22459,{_id: 15280,str: "Wallis and Futuna Concrete",num: 36580,date: new Date("2018-09-05T20:44:03.011Z"),array: []}],76872,new Date("2018-09-06T07:55:47.684Z")]],obj: {_id: 15281,str: "teal compress",num: 52351,array: [new Date("2018-09-06T14:01:58.778Z")]}}});
    },

    function(coll) {
        return coll.insert({_id: 15282,str: "bi-directional FTP",date: new Date("2018-09-06T08:26:40.509Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 15283,str: "Avon",num: 68358,array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 15284,str: "explicit HTTP Car",num: 42644,date: new Date("2018-09-05T21:29:36.498Z"),array: [],obj: {_id: 15285,num: 39875,date: new Date("2018-09-06T09:55:19.292Z"),array: ["quantifying","Credit Card Account Cheese Circles",new Date("2018-09-06T09:59:24.223Z"),69494,33662,"Route motivating Bacon",95795,new Date("2018-09-06T15:43:42.974Z"),[{_id: 15286,str: "Auto Loan Account",num: 40299,date: new Date("2018-09-05T21:44:03.840Z"),array: [],obj: {}}],"THX",20257,new Date("2018-09-06T11:51:48.313Z")]}});
    },

    function(coll) {
        return coll.insert({_id: 15287,str: "virtual",num: 62814,date: new Date("2018-09-06T06:44:43.777Z"),array: [new Date("2018-09-05T21:41:48.822Z"),89905,new Date("2018-09-06T01:11:42.448Z"),new Date("2018-09-06T05:28:59.916Z"),47263,97764,[],{_id: 15288,str: "24 hour",num: 42574,array: [],obj: {_id: 15289,str: "Down-sized Multi-channelled sky blue",num: 60772,date: new Date("2018-09-06T13:46:20.708Z"),array: [7030],obj: {}}},"transmitter Realigned Brunei Darussalam",[],"Sweden bypass Reactive"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 15290,str: "navigate District multi-tasking",num: 67242,date: new Date("2018-09-06T09:22:10.976Z"),array: [new Date("2018-09-06T03:25:29.379Z"),"Profit-focused","Plastic Towels",[6388,new Date("2018-09-06T02:09:27.941Z"),88341],14773,[],83138,33465,{_id: 15291,str: "Toys Credit Card Account Specialist",num: 6033,date: new Date("2018-09-06T07:45:05.281Z"),obj: {}},{_id: 15292,str: "payment UAE Dirham Administrator",num: 61447,array: [],obj: {_id: 15293,str: "Oklahoma distributed",date: new Date("2018-09-06T02:57:54.729Z"),array: [new Date("2018-09-06T16:59:18.276Z")],obj: {_id: 15294,str: "deposit Automotive Chips",num: 10738}}},"PNG Landing Metrics"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 15295,str: "Customizable neutral",date: new Date("2018-09-06T02:35:23.549Z"),array: [],obj: {_id: 15296,str: "relationships",num: 73828,date: new Date("2018-09-05T23:20:17.388Z"),array: [],obj: {_id: 15297,str: "Burundi Franc",num: 84792,date: new Date("2018-09-06T06:54:50.446Z"),obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 15298,str: "port database Intuitive",date: new Date("2018-09-06T04:13:35.902Z"),array: ["communities",new Date("2018-09-06T10:13:11.646Z"),26302,{_id: 15299,str: "Checking Account",date: new Date("2018-09-06T15:03:04.195Z"),array: [95982],obj: {}},{_id: 15300,str: "Response Flat engineer",num: 3957,date: new Date("2018-09-05T23:39:44.157Z"),array: [],obj: {_id: 15301,num: 44657,date: new Date("2018-09-06T03:24:09.466Z"),obj: {_id: 15302,str: "invoice Investment Account",num: 54578,date: new Date("2018-09-06T18:52:39.729Z"),array: []}}},new Date("2018-09-06T14:44:34.329Z"),new Date("2018-09-06T06:20:27.220Z"),"Functionality Quality","Reduced productivity Frozen",98448,new Date("2018-09-06T03:09:59.402Z"),{_id: 15303,num: 29621,date: new Date("2018-09-05T22:01:54.593Z"),obj: {}}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 15304,str: "Cross-group",num: 11624,date: new Date("2018-09-05T20:16:49.463Z"),array: [],obj: {_id: 15305,str: "withdrawal SQL Bedfordshire",date: new Date("2018-09-06T07:12:05.303Z"),array: [{_id: 15306,str: "Chips haptic",num: 42585,date: new Date("2018-09-06T19:35:41.066Z"),array: [],obj: {}},new Date("2018-09-06T15:26:49.040Z"),"lavender Cotton","Automotive Indian Rupee",37012,45564,[new Date("2018-09-06T12:16:51.704Z")],"data-warehouse",{_id: 15307,str: "bleeding-edge Fantastic",num: 13606,array: [9087,new Date("2018-09-06T06:18:53.841Z"),new Date("2018-09-06T19:14:53.401Z")]},new Date("2018-09-06T07:24:35.837Z"),"Australia workforce Credit Card Account",[],69410]}});
    },

    function(coll) {
        return coll.insert({_id: 15308,str: "Optional feed",num: 29773,date: new Date("2018-09-06T03:51:23.936Z"),array: [new Date("2018-09-06T14:34:41.441Z"),"Berkshire cross-media Avon",83403,[],"Dynamic Bike generate",{_id: 15309,str: "Soft deposit",num: 5545,date: new Date("2018-09-06T07:56:32.795Z"),array: [],obj: {}},"Switchable Refined",new Date("2018-09-06T15:51:29.872Z"),83932,new Date("2018-09-06T11:23:16.548Z"),"Sharable input Oklahoma","Kina"],obj: {_id: 15310,str: "Frozen",num: 92365,date: new Date("2018-09-06T04:40:27.722Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 15311,str: "Supervisor magenta Generic",num: 81532,date: new Date("2018-09-06T12:09:38.738Z"),array: [new Date("2018-09-06T12:59:27.247Z"),58492,"Granite",{_id: 15312,str: "Kids Shoes",num: 14341,array: [],obj: {}}]});
    },

    function(coll) {
        return coll.insert({_id: 15313,str: "Assistant Bedfordshire",num: 56869,date: new Date("2018-09-05T20:07:00.611Z"),array: ["Kids leverage Bacon",98832,45808,"orchid",{_id: 15314,str: "Ergonomic Frozen Salad Functionality",date: new Date("2018-09-06T05:23:44.562Z"),array: [],obj: {_id: 15315,str: "RAM SCSI microchip",num: 13136,date: new Date("2018-09-06T00:58:56.345Z"),array: [],obj: {_id: 15316,str: "incentivize Rubber",num: 84063,date: new Date("2018-09-06T17:12:25.620Z"),array: [new Date("2018-09-06T11:57:22.779Z"),{_id: 15317,num: 84949},new Date("2018-09-06T19:40:49.959Z"),"back up Rhode Island","Planner JBOD"],obj: {}}}},17459,82702,{_id: 15318,str: "Monitored yellow Plastic",date: new Date("2018-09-05T19:56:25.674Z"),obj: {}},new Date("2018-09-06T14:47:11.929Z"),"Rand Loti Marketing",3959]});
    },

    function(coll) {
        return coll.insert({_id: 15319,str: "Bedfordshire plug-and-play Ohio",num: 38972,date: new Date("2018-09-06T03:16:15.848Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 15320,str: "Radial Home",num: 68024,date: new Date("2018-09-06T10:44:36.898Z"),array: ["Agent",26215,new Date("2018-09-05T22:32:29.883Z"),[4584,new Date("2018-09-06T19:52:14.063Z"),new Date("2018-09-06T13:05:51.580Z"),"withdrawal hack"],"innovative Switzerland multi-state",42404,"back-end Knoll EXE",53470],obj: {_id: 15321,str: "Handcrafted Steel Towels",num: 98795,date: new Date("2018-09-06T12:42:18.996Z"),array: [[],new Date("2018-09-06T19:04:44.576Z"),{_id: 15322,date: new Date("2018-09-06T00:36:58.005Z"),array: [{_id: 15323,str: "JBOD Centralized whiteboard",num: 87332,array: [],obj: {_id: 15324,array: [],obj: {}}}],obj: {_id: 15325,num: 6966}},[],new Date("2018-09-05T23:19:15.541Z"),"interfaces Avon"],obj: {_id: 15326,str: "Savings Account program Forges",num: 29963,date: new Date("2018-09-06T02:02:26.452Z"),array: [[]]}}});
    },

    function(coll) {
        return coll.insert({_id: 15327,str: "Kids",num: 51698,date: new Date("2018-09-05T20:56:20.180Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 15328,str: "Small Wooden Mouse",num: 28292,date: new Date("2018-09-06T06:55:36.871Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 15329,str: "utilisation Metal integrate",num: 94192,date: new Date("2018-09-06T13:10:46.164Z"),array: [new Date("2018-09-06T11:29:14.516Z"),76500,"Handcrafted Assurance","Agent attitude-oriented Money Market Account",new Date("2018-09-06T19:28:12.004Z"),new Date("2018-09-06T12:56:03.028Z"),99366,"Money Market Account alarm",new Date("2018-09-05T21:10:00.845Z"),"Designer",new Date("2018-09-06T11:58:42.165Z"),{_id: 15330,num: 39036,date: new Date("2018-09-06T03:39:16.155Z"),array: [[],{_id: 15331,str: "Junctions",num: 60705,date: new Date("2018-09-06T04:36:44.508Z"),array: [],obj: {_id: 15332,str: "Home Loan Account Somali Shilling",num: 53957,date: new Date("2018-09-06T01:36:15.147Z"),array: []}}],obj: {_id: 15333,str: "niches withdrawal",obj: {}}}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 15334,str: "Dynamic",num: 86841,date: new Date("2018-09-06T16:35:53.114Z"),array: [],obj: {_id: 15335,num: 87977,obj: {_id: 15336,num: 87022,date: new Date("2018-09-06T03:52:29.401Z"),array: [new Date("2018-09-06T00:00:56.701Z"),95023,56813,new Date("2018-09-06T02:53:24.044Z"),new Date("2018-09-05T23:05:27.128Z"),"Berkshire Florida",96735,new Date("2018-09-06T06:15:06.506Z"),"Uganda Shilling",{_id: 15337,str: "Kenya alarm Shoes",num: 23804,date: new Date("2018-09-06T16:04:13.091Z"),array: [[]],obj: {}},"Saudi Riyal parse",new Date("2018-09-06T14:57:05.993Z")],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 15338,str: "Specialist markets",num: 95840,date: new Date("2018-09-06T09:35:55.102Z"),array: [],obj: {_id: 15339,str: "West Virginia",num: 79396,date: new Date("2018-09-06T19:48:43.428Z"),array: [new Date("2018-09-06T04:44:29.324Z"),"Marketing",new Date("2018-09-06T13:02:49.145Z"),"Gorgeous Steel Pizza AGP Investment Account",new Date("2018-09-06T12:45:40.772Z"),13314,[],[new Date("2018-09-06T13:57:22.695Z")],"data-warehouse e-commerce Ergonomic",7936,{_id: 15340,str: "Personal Loan Account",num: 11662,date: new Date("2018-09-06T14:19:03.438Z"),array: [],obj: {_id: 15341,str: "Engineer Norway",num: 83398,array: [],obj: {}}}]}});
    },

    function(coll) {
        return coll.insert({_id: 15342,str: "Auto Loan Account Netherlands",num: 35573,array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 15343,str: "Product cross-platform revolutionize",num: 11299,date: new Date("2018-09-05T23:04:43.364Z"),array: [new Date("2018-09-06T11:58:18.042Z"),"Buckinghamshire","Borders",new Date("2018-09-06T02:29:08.730Z"),{_id: 15344,str: "Liberian Dollar",num: 8029,date: new Date("2018-09-05T23:07:50.085Z"),array: [],obj: {_id: 15345,str: "Tasty Avon bypass",num: 81481,date: new Date("2018-09-06T06:13:15.270Z"),array: [new Date("2018-09-06T19:02:18.099Z"),78120],obj: {}}},26924,new Date("2018-09-06T01:15:08.892Z"),new Date("2018-09-06T00:43:30.335Z"),{_id: 15346,str: "Licensed Granite Tuna Concrete Licensed",num: 2538,date: new Date("2018-09-06T18:40:12.412Z")},[],"orchestrate Agent",[],59245],obj: {_id: 15347,str: "Applications",num: 76125,date: new Date("2018-09-06T11:44:07.687Z"),array: [[new Date("2018-09-06T01:45:44.922Z"),46949],"Hawaii Generic Soft Towels Rustic"],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 15348,date: new Date("2018-09-06T09:08:02.705Z"),array: [new Date("2018-09-06T12:10:14.085Z"),"Product",new Date("2018-09-06T04:00:40.598Z"),9094,new Date("2018-09-06T02:21:44.581Z"),36552,2749,"success haptic","Decentralized e-tailers",{_id: 15349,str: "Wisconsin Representative Consultant",num: 8724,array: [37875,[],"Division online",["transparent",new Date("2018-09-06T11:45:26.108Z"),95338]],obj: {_id: 15350,str: "Lead North Dakota",num: 41927,date: new Date("2018-09-06T14:46:41.227Z"),array: [],obj: {}}}],obj: {_id: 15351,str: "Shirt",num: 32580,array: [new Date("2018-09-06T07:31:58.832Z")]}});
    },

    function(coll) {
        return coll.insert({_id: 15352,str: "Handcrafted Frozen Table optimize Music",num: 93847,date: new Date("2018-09-06T19:11:10.460Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 15353,str: "matrix Administrator",num: 7399,date: new Date("2018-09-06T14:38:54.637Z"),array: [51512,14539,new Date("2018-09-06T05:31:13.198Z"),57322,"Idaho National","Credit Card Account Home Loan Account compress",new Date("2018-09-06T16:54:49.754Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 15354,str: "encryption",num: 16191,date: new Date("2018-09-06T14:16:05.694Z"),array: [79033,new Date("2018-09-06T17:43:20.640Z"),"SSL USB plum",{_id: 15355,str: "olive Enhanced Vista",num: 64745,date: new Date("2018-09-06T01:53:06.841Z"),array: [],obj: {_id: 15356,num: 38826,array: [90479,"microchip"],obj: {_id: 15357,str: "neural-net",num: 85973,date: new Date("2018-09-06T09:40:14.212Z"),array: []}}},{_id: 15358,str: "invoice Tasty Concrete Ball Malaysia",date: new Date("2018-09-06T17:42:54.331Z"),obj: {_id: 15359,str: "Operations reboot",obj: {}}},[],[new Date("2018-09-05T23:05:15.883Z"),[75425],new Date("2018-09-06T12:17:30.038Z")],new Date("2018-09-06T14:26:46.331Z"),"National",new Date("2018-09-05T22:02:10.071Z"),"Handmade white",44079]});
    },

    function(coll) {
        return coll.insert({_id: 15360,str: "Sudanese Pound Bedfordshire Books",num: 89676,date: new Date("2018-09-06T16:22:47.714Z"),array: ["Washington",{_id: 15361,str: "Technician Investor",date: new Date("2018-09-06T15:56:28.742Z"),array: [52288,16359,new Date("2018-09-05T23:28:58.411Z")]},[],new Date("2018-09-06T13:48:26.106Z"),"out-of-the-box Hawaii",4105,"bleeding-edge SSL",[new Date("2018-09-06T02:11:36.634Z")],new Date("2018-09-06T04:01:26.321Z"),{_id: 15362,num: 383,date: new Date("2018-09-06T14:35:52.256Z"),array: [],obj: {}},11628,57131],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 15363,str: "1080p Ergonomic Consultant",num: 59543,date: new Date("2018-09-06T04:30:25.796Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 15364,str: "productivity",num: 39127,date: new Date("2018-09-06T19:17:39.716Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 15365,str: "Hat grey",num: 4241,array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 15366,str: "invoice Manager",num: 86172,date: new Date("2018-09-06T19:24:09.124Z"),array: ["grow",[],89233,37121,new Date("2018-09-06T18:59:15.784Z"),new Date("2018-09-06T11:01:45.550Z"),{_id: 15367,str: "invoice",num: 17249,date: new Date("2018-09-06T06:05:30.902Z"),array: [new Date("2018-09-05T22:27:50.717Z"),"Awesome Fresh Chair"],obj: {_id: 15368,obj: {_id: 15369,str: "Licensed",num: 9460,date: new Date("2018-09-06T18:30:48.788Z"),obj: {_id: 15370,num: 16630,array: []}}}},new Date("2018-09-06T07:16:12.182Z"),[50198],{_id: 15371,str: "system engine",date: new Date("2018-09-06T10:02:03.061Z"),array: [],obj: {}},{_id: 15372,str: "primary copying",date: new Date("2018-09-06T06:57:49.345Z"),array: []},"Strategist"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 15373,num: 87799,date: new Date("2018-09-06T03:34:10.422Z"),array: [89073,"compressing",{_id: 15374,str: "Hills Hawaii",num: 46848,date: new Date("2018-09-05T23:14:44.822Z"),array: [],obj: {}},new Date("2018-09-05T23:12:11.501Z"),95784,"Divide lime Data",{_id: 15375,str: "Manor",num: 28070,array: [[]]},new Date("2018-09-06T17:34:39.117Z"),40613,"Loop Gorgeous Wooden Computer Gorgeous Wooden Table","Ergonomic Rubber Hat",["Uganda Shilling Tuna Plastic"],{_id: 15376,str: "deposit GB killer",num: 5734,obj: {}}]});
    },

    function(coll) {
        return coll.insert({_id: 15377,str: "parse",num: 80181,date: new Date("2018-09-06T05:12:48.990Z"),array: [],obj: {_id: 15378,str: "paradigms",num: 24748,date: new Date("2018-09-06T15:01:33.459Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 15379,str: "transform Incredible Rubber Ball Wooden",num: 82671,date: new Date("2018-09-06T11:07:38.710Z"),array: [],obj: {_id: 15380,str: "quantify maximize Iraqi Dinar",num: 27915,array: [],obj: {_id: 15381,str: "Cook Islands Wooden",num: 8841,date: new Date("2018-09-06T14:29:27.706Z"),array: [90541,"best-of-breed",new Date("2018-09-06T04:34:30.368Z"),19314,"Sleek THX Sports",new Date("2018-09-06T06:18:13.022Z"),{_id: 15382,num: 77048,date: new Date("2018-09-06T01:56:02.190Z"),obj: {}},[[{_id: 15383,str: "Digitized",date: new Date("2018-09-06T09:37:32.869Z"),array: [new Date("2018-09-06T14:14:24.310Z"),new Date("2018-09-05T20:03:01.029Z")]},new Date("2018-09-06T14:57:24.433Z"),"Awesome"]],"hack Eritrea",32646,new Date("2018-09-06T19:06:02.145Z"),"Bridge 24/7","reboot Car"]}}});
    },

    function(coll) {
        return coll.insert({_id: 15384,str: "Division Synergistic content",num: 185,date: new Date("2018-09-06T15:19:59.611Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 15385,str: "Falkland Islands (Malvinas)",num: 42260,date: new Date("2018-09-05T23:29:03.254Z"),array: [new Date("2018-09-06T19:32:59.681Z"),new Date("2018-09-06T17:35:55.881Z"),[],{_id: 15386,num: 84458,array: [],obj: {}},new Date("2018-09-06T12:55:24.169Z"),"Fantastic Frozen Chair",73974,57249,75219,"seize Paradigm",93518,11589,"bifurcated"],obj: {_id: 15387,str: "Investment Account Grocery",date: new Date("2018-09-06T12:34:28.385Z"),array: [],obj: {_id: 15388,str: "input architecture",date: new Date("2018-09-05T23:49:49.652Z"),array: ["strategy",{_id: 15389,str: "Implementation Granite",num: 38047}],obj: {_id: 15390,str: "Usability",date: new Date("2018-09-06T18:22:50.329Z"),array: []}}}});
    },

    function(coll) {
        return coll.insert({_id: 15391,str: "web-enabled technologies Vanuatu",date: new Date("2018-09-06T18:21:36.614Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 15392,str: "synthesize Mississippi Rue",num: 57936,date: new Date("2018-09-06T05:47:41.092Z"),array: [],obj: {_id: 15393,str: "Implementation ivory navigate",num: 4785,date: new Date("2018-09-06T15:45:15.697Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 15394,str: "XML",num: 5084,date: new Date("2018-09-05T22:44:56.322Z"),array: [new Date("2018-09-06T09:42:57.511Z"),14648,new Date("2018-09-05T22:15:41.680Z"),["pixel functionalities transitional","cross-platform",new Date("2018-09-06T14:29:09.199Z")],"Portugal transmitter",new Date("2018-09-06T00:47:11.208Z"),89469,59673,[],{_id: 15395,str: "Health connecting Generic",num: 23550,date: new Date("2018-09-06T07:39:14.361Z"),array: ["Toys",new Date("2018-09-06T17:42:57.627Z")],obj: {_id: 15396,str: "Bike",num: 36358,date: new Date("2018-09-06T12:44:17.522Z"),array: []}}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 15397,str: "Bulgarian Lev",num: 88520,array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 15398,str: "Analyst even-keeled",num: 33914,date: new Date("2018-09-06T05:34:16.639Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 15399,str: "Corporate lime",num: 12888,date: new Date("2018-09-06T14:22:37.808Z"),array: [[],"Rubber",[408,73701],new Date("2018-09-06T15:14:41.175Z"),new Date("2018-09-06T01:34:03.669Z"),"Mouse withdrawal Cheese",{_id: 15400,str: "CSS Toys Group",num: 42050,date: new Date("2018-09-06T08:18:27.128Z"),obj: {_id: 15401,str: "time-frame Chips",num: 38998,date: new Date("2018-09-05T21:08:05.620Z"),array: [],obj: {}}},new Date("2018-09-06T15:27:05.819Z"),[new Date("2018-09-06T12:46:22.547Z"),56665],72088,"Legacy"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 15402,str: "Future brand Unbranded Granite Sausages",num: 96847,array: [new Date("2018-09-06T01:29:49.678Z"),15631,"didactic Pakistan Rupee",[],"object-oriented Awesome Granite Salad",new Date("2018-09-05T20:33:30.179Z"),74918,"FTP",{_id: 15403,num: 55058,date: new Date("2018-09-06T19:01:37.609Z"),array: [19199,[],"seamless",{_id: 15404,str: "deposit",num: 95926,date: new Date("2018-09-05T20:33:09.797Z"),array: [],obj: {}}],obj: {}},[4513,69578,new Date("2018-09-06T01:43:20.880Z")]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 15405,str: "Walk",num: 59829,date: new Date("2018-09-05T21:41:21.563Z"),array: [89078,"global Tools",87846,{_id: 15406,str: "Borders Granite Dalasi",num: 69215,date: new Date("2018-09-06T13:06:59.263Z"),array: [],obj: {}},new Date("2018-09-06T00:57:43.859Z"),new Date("2018-09-06T03:40:02.242Z"),"Virgin Islands, U.S. Gibraltar Pound Progressive",new Date("2018-09-06T16:25:14.450Z"),66405,"Credit Card Account deposit New Zealand Dollar",[{_id: 15407,str: "Mongolia Generic",num: 85035,date: new Date("2018-09-06T19:46:19.431Z"),array: ["Savings Account methodologies quantifying",[[],{_id: 15408,str: "repurpose Indiana reboot",date: new Date("2018-09-06T15:18:33.998Z"),array: [new Date("2018-09-06T14:40:40.549Z"),"Human Savings Account Congolese Franc"],obj: {_id: 15409,num: 28899,array: [],obj: {}}}]]},93380,{_id: 15410,num: 98425,date: new Date("2018-09-06T02:43:49.357Z")}],77558],obj: {_id: 15411,obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 15412,str: "one-to-one",num: 96902,date: new Date("2018-09-06T11:28:35.707Z"),array: ["technologies multi-byte",16652,90686,45733,"Reverse-engineered",52518,new Date("2018-09-06T12:40:59.524Z"),"Buckinghamshire Assistant circuit",{_id: 15413,str: "Down-sized deploy",num: 50508,date: new Date("2018-09-06T04:47:26.763Z"),array: [],obj: {_id: 15414,str: "olive partnerships",date: new Date("2018-09-06T19:38:04.233Z"),array: [],obj: {}}}]});
    },

    function(coll) {
        return coll.insert({_id: 15415,str: "Soft Small Rand",num: 98656,date: new Date("2018-09-06T02:31:46.634Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 15416,str: "invoice",date: new Date("2018-09-06T04:37:18.061Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 15417,str: "driver",num: 90879,date: new Date("2018-09-06T00:44:11.480Z"),array: [new Date("2018-09-06T10:06:51.453Z"),new Date("2018-09-06T03:43:50.396Z"),78811,"Cheese Dynamic","Auto Loan Account 24/365 Granite","Salad",new Date("2018-09-06T16:47:50.207Z"),60305,{_id: 15418,str: "Open-source composite",num: 44560,date: new Date("2018-09-06T15:37:09.702Z"),array: ["backing up flexibility",{_id: 15419,num: 50793,date: new Date("2018-09-06T10:57:57.819Z"),array: [],obj: {_id: 15420,str: "Baht",num: 35997,array: [[],new Date("2018-09-06T18:57:27.703Z")],obj: {_id: 15421,str: "Mall",date: new Date("2018-09-06T10:16:40.755Z"),obj: {}}}},5025,[4567,13360]],obj: {}},"National",new Date("2018-09-06T12:32:06.100Z")]});
    },

    function(coll) {
        return coll.insert({_id: 15422,str: "Colorado bluetooth",date: new Date("2018-09-06T18:58:01.651Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 15423,str: "Moroccan Dirham",num: 85223,date: new Date("2018-09-06T14:25:48.387Z"),array: [],obj: {_id: 15424,str: "Orchestrator 1080p convergence",date: new Date("2018-09-05T22:58:04.397Z"),array: [59591,53284,{_id: 15425,str: "Universal HDD",num: 86891,date: new Date("2018-09-06T13:38:53.195Z"),array: [],obj: {_id: 15426,num: 99369,date: new Date("2018-09-06T07:14:48.021Z"),array: [new Date("2018-09-06T11:01:57.345Z"),["Auto Loan Account bifurcated Shirt","Tuna"]],obj: {}}},"array",new Date("2018-09-06T14:12:31.293Z"),62354,1903,new Date("2018-09-06T00:50:39.216Z"),"fresh-thinking Chicken pink",{_id: 15427,num: 12297}],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 15428,str: "Tuna",num: 49849,date: new Date("2018-09-06T12:20:24.091Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 15429,str: "open architecture integrate Outdoors",num: 82435,date: new Date("2018-09-06T16:56:28.514Z"),array: ["Personal Loan Account",new Date("2018-09-06T11:07:15.363Z"),[],new Date("2018-09-06T13:54:09.213Z"),85669,"Tenge compressing Licensed","panel Factors",77154,[],"XML Gorgeous Identity",90478],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 15430,num: 34343,date: new Date("2018-09-06T11:09:21.645Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 15431,str: "3rd generation",num: 69321,date: new Date("2018-09-05T23:34:01.040Z"),array: ["Manager backing up synergies",new Date("2018-09-06T03:17:43.558Z"),94764,41777,["West Virginia XML","Uzbekistan Sum",new Date("2018-09-05T21:27:40.362Z"),{_id: 15432,str: "Cambridgeshire connect",num: 8060,date: new Date("2018-09-05T22:03:41.012Z"),array: [],obj: {}},83949],21085,97372,new Date("2018-09-06T14:09:30.713Z"),"XSS Mouse matrix",{_id: 15433,str: "European Unit of Account 17(E.U.A.-17)",num: 50444,date: new Date("2018-09-06T03:52:05.253Z"),array: [],obj: {_id: 15434,str: "Alaska black",date: new Date("2018-09-06T12:56:49.390Z")}}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 15435,str: "withdrawal",num: 1163,date: new Date("2018-09-06T17:49:33.841Z"),array: [[],64379,new Date("2018-09-06T18:21:37.538Z"),6551,"Tools leading-edge",new Date("2018-09-06T12:13:48.539Z"),"architectures"],obj: {_id: 15436,num: 84081,date: new Date("2018-09-06T04:52:50.747Z"),array: [new Date("2018-09-06T11:04:15.565Z"),"sky blue",[],new Date("2018-09-06T18:06:59.659Z"),75361,"interface Borders","Soap South Georgia and the South Sandwich Islands"],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 15437,str: "Books Borders Awesome Steel Keyboard",num: 96556,date: new Date("2018-09-05T21:41:05.152Z"),array: [],obj: {_id: 15438,str: "Associate",num: 10833,date: new Date("2018-09-06T11:21:51.241Z"),array: [66593,"transmitting",new Date("2018-09-06T12:12:25.376Z"),79395,new Date("2018-09-06T18:50:08.498Z"),[],"Lead Producer",41133,new Date("2018-09-06T15:59:12.100Z"),"Intelligent technologies Tennessee",{_id: 15439,str: "pixel secondary invoice",num: 99200,array: [new Date("2018-09-06T00:32:59.265Z"),[{_id: 15440,str: "Fantastic Cotton Soap Saint Lucia",date: new Date("2018-09-06T19:24:19.761Z"),array: [],obj: {_id: 15441,str: "Savings Account",num: 37481,date: new Date("2018-09-06T14:39:19.963Z"),array: []}},"Chief Unbranded Wooden Pants",57502],18808],obj: {}}],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 15442,str: "withdrawal Granite Fords",num: 31063,date: new Date("2018-09-06T06:56:44.132Z"),array: [12706,"reboot Colombia blue",new Date("2018-09-06T11:01:40.366Z"),[],new Date("2018-09-06T01:50:20.673Z"),"Group",13068,{_id: 15443,str: "Licensed Granite Table B2C Coordinator",date: new Date("2018-09-06T18:27:25.913Z"),array: [],obj: {_id: 15444,str: "Bacon 1080p",num: 66876,date: new Date("2018-09-06T12:10:59.455Z"),obj: {}}},new Date("2018-09-06T00:03:15.645Z"),70928]});
    },

    function(coll) {
        return coll.insert({_id: 15445,str: "bluetooth technologies Moldova",num: 4333,date: new Date("2018-09-06T04:21:44.743Z"),array: [37392,"complexity Factors",new Date("2018-09-06T03:14:08.657Z"),76760,[],"Home Loan Account",{_id: 15446,str: "Czech Republic",num: 47308,date: new Date("2018-09-06T18:41:32.769Z"),array: ["Consultant Directives Iran",{_id: 15447,str: "Rustic Soft Chair",num: 67178,date: new Date("2018-09-06T07:12:03.858Z"),array: [],obj: {_id: 15448,str: "synergize withdrawal",num: 34112,array: [new Date("2018-09-06T19:17:56.598Z"),"Flats calculating users"],obj: {}}},"Music"]},65300,new Date("2018-09-05T21:10:40.760Z"),{_id: 15449,date: new Date("2018-09-05T21:12:46.620Z"),array: [],obj: {_id: 15450,date: new Date("2018-09-06T16:16:44.987Z")}},35430,new Date("2018-09-06T19:35:52.666Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 15451,str: "Steel wireless",num: 7323,date: new Date("2018-09-06T01:37:17.219Z"),array: [57390,"fault-tolerant optical e-services",new Date("2018-09-05T22:36:26.326Z"),56637,{_id: 15452,str: "Mexican Peso Mexican Unidad de Inversion (UDI)",num: 96063,date: new Date("2018-09-05T23:59:15.096Z"),array: [],obj: {}},"connecting",92687,new Date("2018-09-06T19:46:31.559Z"),{_id: 15453,str: "Checking Account Pre-emptive Sleek",num: 21420,date: new Date("2018-09-06T18:33:56.053Z"),array: [[new Date("2018-09-06T15:33:34.755Z"),87616],new Date("2018-09-06T00:07:42.695Z")],obj: {_id: 15454,str: "Steel Metal Implementation",date: new Date("2018-09-06T06:29:42.604Z"),obj: {}}},"grid-enabled haptic back up","schemas recontextualize"]});
    },

    function(coll) {
        return coll.insert({_id: 15455,str: "zero administration",num: 52337,date: new Date("2018-09-06T06:33:33.760Z"),array: [],obj: {_id: 15456,num: 75643,date: new Date("2018-09-05T23:16:10.723Z")}});
    },

    function(coll) {
        return coll.insert({_id: 15457,str: "online virtual",num: 72457,date: new Date("2018-09-06T02:43:58.947Z"),array: ["Israel Tools",33440,35215,new Date("2018-09-06T09:37:44.618Z"),76568,[],"FTP data-warehouse SAS",new Date("2018-09-06T01:33:38.621Z"),"web-readiness dynamic",new Date("2018-09-05T23:33:52.396Z"),20414],obj: {_id: 15458,str: "Central",date: new Date("2018-09-05T23:42:18.940Z"),array: [],obj: {_id: 15459,str: "Practical web-enabled",num: 66484,date: new Date("2018-09-05T22:48:47.953Z"),obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 15460,str: "Bolivar Fuerte cross-platform",num: 61040,date: new Date("2018-09-06T16:45:31.445Z"),array: [],obj: {_id: 15461,str: "SSL Object-based",num: 26115,date: new Date("2018-09-05T20:52:47.233Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 15462,num: 85916,date: new Date("2018-09-06T11:47:26.551Z"),array: [8409,99780,59437,"connect synergize",new Date("2018-09-06T01:45:21.440Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 15463,str: "deposit",num: 54296,date: new Date("2018-09-06T14:29:26.462Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 15464,str: "pink",num: 46916,date: new Date("2018-09-06T01:16:30.605Z"),array: [new Date("2018-09-05T20:30:31.993Z"),new Date("2018-09-05T23:51:50.730Z"),40372,"New Hampshire superstructure HDD",{_id: 15465,str: "panel Handmade archive",date: new Date("2018-09-06T01:30:18.287Z"),array: ["Home asymmetric",[],"Dynamic"],obj: {_id: 15466,str: "protocol proactive",num: 77129,array: []}},26616,66240,{_id: 15467,num: 79344,obj: {}},new Date("2018-09-06T01:56:13.857Z"),"Planner",[],10359],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 15468,str: "Belize Concrete",date: new Date("2018-09-06T13:49:31.810Z"),array: [new Date("2018-09-06T08:08:17.388Z"),[],new Date("2018-09-06T16:20:30.118Z"),"Personal Loan Account",40190,new Date("2018-09-05T21:33:20.224Z"),[],2023,30509,{_id: 15469,str: "program Salad",num: 68666,date: new Date("2018-09-06T09:39:09.628Z"),array: [36560,"connecting standardization enterprise","Louisiana","Representative Cambridgeshire plug-and-play"],obj: {}},{_id: 15470,str: "Re-engineered Wisconsin",num: 54371,date: new Date("2018-09-06T01:00:46.828Z"),array: [],obj: {_id: 15471,num: 74956,date: new Date("2018-09-06T01:52:01.401Z"),array: [32022]}},{_id: 15472,str: "Texas Sharable technologies",num: 95503,date: new Date("2018-09-05T19:59:15.906Z"),obj: {_id: 15473,obj: {_id: 15474,str: "Optimization neural",num: 63507,date: new Date("2018-09-05T23:13:24.135Z"),obj: {}}}}]});
    },

    function(coll) {
        return coll.insert({_id: 15475,str: "Handcrafted capacitor Berkshire",num: 7158,date: new Date("2018-09-06T03:50:45.787Z"),array: [],obj: {_id: 15476,str: "yellow online alarm",num: 48815,date: new Date("2018-09-06T00:15:29.488Z"),array: ["parsing Keyboard Riel",35915,57139,"Buckinghamshire embrace e-tailers",[new Date("2018-09-06T07:34:13.999Z"),"protocol",new Date("2018-09-06T17:19:23.569Z")],54106,"indexing",{_id: 15477,str: "matrix Money Market Account",num: 23141,date: new Date("2018-09-05T20:00:24.420Z"),obj: {}},new Date("2018-09-06T07:09:26.114Z"),new Date("2018-09-06T06:12:37.722Z")],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 15478,str: "Investment Account protocol Grass-roots",num: 85623,date: new Date("2018-09-06T06:14:17.841Z"),array: [],obj: {_id: 15479,num: 11369,date: new Date("2018-09-06T16:22:16.876Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 15480,num: 79879,date: new Date("2018-09-06T08:16:51.529Z"),array: [new Date("2018-09-06T09:17:17.678Z"),"deliverables backing up Denar",new Date("2018-09-06T08:23:17.084Z"),"bypassing Gabon",20828,{_id: 15481,str: "SMS Applications",num: 73072,date: new Date("2018-09-06T00:40:17.986Z"),obj: {}},"Clothing dot-com",36961,4741,new Date("2018-09-05T20:23:53.673Z"),69147,{_id: 15482,str: "card",num: 57220,array: [],obj: {}}],obj: {_id: 15483,date: new Date("2018-09-06T07:40:40.394Z"),obj: {_id: 15484,num: 9686,date: new Date("2018-09-05T23:41:54.154Z"),array: [{_id: 15485,str: "systems Licensed Granite Salad",num: 90941,array: [new Date("2018-09-06T10:31:48.580Z"),new Date("2018-09-06T02:19:52.915Z"),{_id: 15486,str: "Table",array: []}]}]}}});
    },

    function(coll) {
        return coll.insert({_id: 15487,str: "Branding moratorium",date: new Date("2018-09-06T05:10:00.454Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 15488,num: 38291,date: new Date("2018-09-06T07:51:26.771Z"),array: [[],new Date("2018-09-05T23:17:06.211Z"),new Date("2018-09-06T00:11:13.600Z"),"Fish clear-thinking index",new Date("2018-09-06T01:33:36.999Z"),58052,83795,"Mountains Human",88403,[],"neural Brand Handmade",new Date("2018-09-05T22:09:43.739Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 15489,str: "Communications",num: 71898,date: new Date("2018-09-06T10:48:05.505Z"),array: [54292,new Date("2018-09-06T01:19:23.245Z"),{_id: 15490,str: "Checking Account Romania",num: 306,date: new Date("2018-09-06T16:19:05.398Z"),array: [23396,"Music",new Date("2018-09-06T03:46:24.457Z")],obj: {}},97221,new Date("2018-09-06T14:31:07.278Z"),"Computers",[],[],{_id: 15491,str: "Summit quantify",num: 78172,date: new Date("2018-09-06T06:41:28.448Z"),array: [[]],obj: {}},66941,new Date("2018-09-06T09:26:01.015Z"),66328,"migration Optional"]});
    },

    function(coll) {
        return coll.insert({_id: 15492,str: "functionalities",num: 20188,date: new Date("2018-09-06T02:43:46.348Z"),obj: {_id: 15493,str: "virtual Handcrafted",num: 67553,date: new Date("2018-09-06T05:00:26.365Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 15494,str: "Arizona",num: 52847,date: new Date("2018-09-05T22:46:38.387Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 15495,str: "Investment Account Personal Loan Account Rustic",num: 85274,date: new Date("2018-09-06T05:27:36.405Z"),array: [61203,{_id: 15496,str: "connect navigate Checking Account",num: 28412,date: new Date("2018-09-06T09:54:34.334Z"),array: [],obj: {_id: 15497,str: "Towels cultivate Designer",date: new Date("2018-09-06T09:45:11.240Z"),array: ["challenge Gloves cyan","Human Sports",new Date("2018-09-06T05:50:49.952Z"),[]],obj: {}}},83076,new Date("2018-09-06T19:03:56.415Z"),"Cambridgeshire transition Burundi Franc",new Date("2018-09-06T07:02:55.092Z"),22249,8050,"IB Markets",[30247],new Date("2018-09-06T08:40:18.379Z"),[[]]],obj: {_id: 15498,str: "Licensed",num: 59348,date: new Date("2018-09-06T12:23:01.437Z")}});
    },

    function(coll) {
        return coll.insert({_id: 15499,str: "Sausages",date: new Date("2018-09-06T13:19:34.878Z"),array: [new Date("2018-09-05T22:37:07.218Z"),[],"Gorgeous Rubber Sausages",[],{_id: 15500,str: "leading edge Small",num: 7079,date: new Date("2018-09-06T15:12:02.605Z"),array: ["Shirt Louisiana"],obj: {_id: 15501,str: "content-based Bedfordshire Infrastructure",num: 98571,date: new Date("2018-09-05T22:14:38.801Z"),obj: {_id: 15502,str: "Steel",num: 94994,date: new Date("2018-09-06T00:36:47.736Z"),array: [],obj: {_id: 15503,str: "action-items virtual Table",num: 56305,date: new Date("2018-09-06T01:17:06.589Z"),obj: {}}}}},new Date("2018-09-06T18:36:40.683Z"),70405,81176,"Jewelery Integration",35092,{_id: 15504,num: 14119,date: new Date("2018-09-06T19:31:38.258Z"),array: [new Date("2018-09-06T09:33:29.522Z")],obj: {}},new Date("2018-09-06T02:05:39.318Z")]});
    },

    function(coll) {
        return coll.insert({_id: 15505,str: "Steel",num: 58440,date: new Date("2018-09-06T19:13:51.744Z"),array: [],obj: {_id: 15506,str: "Louisiana",num: 6539,date: new Date("2018-09-06T03:08:44.884Z"),array: ["Money Market Account Agent","Bacon",{_id: 15507,str: "Handcrafted Metal Mouse Dynamic transmit",num: 84446,date: new Date("2018-09-05T20:21:52.170Z")},40114,"integrate initiatives","Plastic Communications",new Date("2018-09-05T20:47:19.322Z"),new Date("2018-09-06T13:46:51.539Z"),[],new Date("2018-09-06T12:33:20.581Z"),17386,64944]}});
    },

    function(coll) {
        return coll.insert({_id: 15508,array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 15509,num: 74998,array: []});
    },

    function(coll) {
        return coll.insert({_id: 15510,str: "Ukraine 5th generation",num: 15013,date: new Date("2018-09-06T13:20:39.714Z"),array: [new Date("2018-09-06T02:14:30.882Z"),18673,[],"cyan Wooden Club",11807,59255,"Home Automotive methodologies",{_id: 15511,str: "Strategist deposit Hawaii",num: 99905,date: new Date("2018-09-06T05:14:27.685Z"),array: ["Outdoors"],obj: {_id: 15512,str: "Salad",num: 82154,obj: {_id: 15513,str: "silver",num: 6150,array: []}}},"Baby",new Date("2018-09-05T22:35:32.644Z"),11901],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 15514,str: "mint green Bacon niches",num: 15965,date: new Date("2018-09-06T06:29:50.619Z"),array: ["integrated",16859,new Date("2018-09-05T20:22:52.187Z"),{_id: 15515,num: 6990,date: new Date("2018-09-06T15:16:25.863Z"),array: [[]],obj: {}},new Date("2018-09-06T08:02:54.902Z"),{_id: 15516,num: 13152,date: new Date("2018-09-06T15:21:43.803Z"),array: [],obj: {}},78859,"SMTP Cotton",32362,[],67423,new Date("2018-09-06T10:30:41.128Z"),{_id: 15517,str: "Credit Card Account Auto Loan Account",date: new Date("2018-09-06T09:22:32.088Z"),array: [],obj: {_id: 15518,str: "Washington"}},"Executive Dynamic"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 15519,str: "enable magenta",num: 48630,date: new Date("2018-09-06T04:04:23.781Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 15520,str: "Strategist Kentucky Ball",num: 30490,date: new Date("2018-09-06T06:17:12.423Z"),array: [],obj: {_id: 15521,str: "Intelligent Estate",date: new Date("2018-09-06T04:34:56.006Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 15522,str: "Branding Hat",num: 76771,date: new Date("2018-09-06T13:47:20.984Z"),array: [98287,new Date("2018-09-06T17:37:57.218Z"),"Barbados",47520,81870,"Multi-layered","database Lead",new Date("2018-09-06T18:37:37.325Z"),new Date("2018-09-06T09:03:22.390Z"),64929],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 15523,str: "Credit Card Account Shoes Tanzania",num: 25125,date: new Date("2018-09-06T03:53:19.810Z"),array: [new Date("2018-09-06T03:47:56.731Z"),"Handmade",[],"virtual seize architecture","Human Robust auxiliary",24499,71918,28937,"Fiji Dollar",new Date("2018-09-06T11:48:01.595Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 15524,str: "reboot Integration",num: 1822,date: new Date("2018-09-06T12:55:01.245Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 15525,str: "Customer",date: new Date("2018-09-06T14:02:32.948Z"),array: [],obj: {_id: 15526,num: 10362,date: new Date("2018-09-06T06:03:06.952Z"),array: [],obj: {_id: 15527,str: "brand haptic Tactics",num: 2969,array: [],obj: {_id: 15528,str: "responsive Extended",num: 3874,date: new Date("2018-09-06T06:47:13.847Z"),obj: {}}}}});
    },

    function(coll) {
        return coll.insert({_id: 15529,num: 48,date: new Date("2018-09-05T23:56:36.260Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 15530,str: "mission-critical Regional",num: 52169,date: new Date("2018-09-06T13:13:34.131Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 15531,str: "Home Loan Account",num: 81383,date: new Date("2018-09-05T20:15:52.278Z"),array: [1881,"Networked","turquoise",42454,new Date("2018-09-06T16:47:45.791Z"),{_id: 15532,num: 40960,date: new Date("2018-09-06T12:31:09.458Z"),array: [],obj: {_id: 15533,str: "Tactics",date: new Date("2018-09-06T10:48:59.073Z"),array: [],obj: {}}},[new Date("2018-09-06T06:14:59.892Z")],"blue",{_id: 15534,str: "intuitive Singapore Dollar",num: 51000,date: new Date("2018-09-06T08:37:39.895Z"),obj: {}},new Date("2018-09-06T04:15:05.745Z"),"Buckinghamshire back up ubiquitous",{_id: 15535,str: "Concrete Ergonomic bandwidth",num: 55823},78783,new Date("2018-09-06T09:26:44.131Z")]});
    },

    function(coll) {
        return coll.insert({_id: 15536,str: "connect models markets",num: 98833,array: [],obj: {_id: 15537,str: "Markets",num: 9975,date: new Date("2018-09-06T00:29:46.264Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 15538,num: 20065,date: new Date("2018-09-06T10:48:12.116Z"),array: [],obj: {_id: 15539,str: "24/7 clicks-and-mortar New Israeli Sheqel",date: new Date("2018-09-06T04:08:09.097Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 15540,str: "Plastic Fort",num: 55952,date: new Date("2018-09-06T15:31:34.146Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 15541,str: "real-time Togo",num: 62019,date: new Date("2018-09-06T11:51:02.995Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 15542,str: "Track e-business",num: 81945,date: new Date("2018-09-06T08:22:11.484Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 15543,str: "matrices",num: 72882,date: new Date("2018-09-05T21:43:39.197Z"),array: [15998,[89102],"grey IB program",new Date("2018-09-06T06:03:44.449Z"),"Pass Legacy",35160,new Date("2018-09-06T18:16:59.939Z"),{_id: 15544,num: 75095,array: [],obj: {_id: 15545,str: "Cyprus",num: 39476,date: new Date("2018-09-06T19:51:55.145Z"),array: [],obj: {}}},new Date("2018-09-06T07:09:44.494Z"),"synthesize Integrated deposit",65156],obj: {_id: 15546,str: "Operative Licensed Wooden Hat",num: 4517,date: new Date("2018-09-06T15:30:47.634Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 15547,str: "support",num: 22893,date: new Date("2018-09-06T11:30:44.462Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 15548,str: "niches United Arab Emirates Integration",num: 81567,date: new Date("2018-09-06T13:19:31.433Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 15549,str: "Plastic",date: new Date("2018-09-05T23:27:12.492Z"),array: [new Date("2018-09-06T03:12:28.574Z"),"Small Wooden Sausages Estate",{_id: 15550,str: "front-end Handmade",num: 75358,date: new Date("2018-09-06T07:22:41.279Z"),array: [{_id: 15551,num: 13590,date: new Date("2018-09-06T03:47:57.650Z"),array: [],obj: {_id: 15552,str: "Metrics open-source Wooden",num: 12030,array: [],obj: {}}}],obj: {}},77168,"parsing Ohio Wooden","Paraguay Handcrafted Fresh Car Home",new Date("2018-09-06T02:19:36.371Z"),["Isle quantifying SAS",new Date("2018-09-06T11:01:55.171Z")],66998,27942,20309,new Date("2018-09-06T19:12:35.602Z"),[],{_id: 15553,str: "Sports Creative world-class",num: 35106,date: new Date("2018-09-06T07:08:54.248Z"),array: [[]],obj: {_id: 15554,str: "calculating PNG",num: 46822,date: new Date("2018-09-06T04:14:32.984Z"),obj: {}}}]});
    },

    function(coll) {
        return coll.insert({_id: 15555,str: "Bolivia Intranet XML",num: 7970,date: new Date("2018-09-06T13:54:21.631Z"),array: [],obj: {}});
    },

];

const indexList = [

    function(coll) {
        return coll.createIndex({"date": -1});
    },

    function(coll) {
        return coll.createIndex({"num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": 1, "obj.obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": 1, "obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": 1, "obj.obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"num": 1});
    },

    function(coll) {
        return coll.createIndex({"date": -1, "num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": 1, "obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": 1, "obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": -1, "obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"date": -1, "obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"num": -1, "obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": 1, "obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": -1, "obj.obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": 1, "str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": 1, "obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": 1, "obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": 1, "obj.obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": 1, "obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": 1, "str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": 1, "num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": -1, "obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": 1, "obj.obj.date": -1, "obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": 1, "num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": -1, "obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": -1, "obj.obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": 1, "obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": -1, "obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": 1, "date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": 1, "obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": 1, "obj.obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": 1, "str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": 1, "num": -1, "obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"str": -1, "date": 1});
    },

    function(coll) {
        return coll.createIndex({"num": -1, "obj.obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": 1, "str": 1, "obj.obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": -1, "str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": -1, "obj.obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": -1, "date": 1});
    },

    function(coll) {
        return coll.createIndex({"date": -1, "obj.obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": -1, "obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": 1, "obj.obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": -1, "obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": -1, "num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": 1, "obj.obj.date": 1});
    },

];

const aggregationList = [

        [{$project: {a: { $trim: {input: { $toString: { $arrayToObject: [[{k: "deliverables",v: true}]] } },chars: { $substr: [{ $toLower: "quantify Papua New Guinea" },8,11] }} }, _id: 0}}],

        [{$project: {a: { $toString: { $arrayElemAt: [[],10745] } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["Lead eyeballs"],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $second: { $dayOfMonth: { $isoWeekYear: { $week: { $dayOfWeek: { $dateToString: {date: { $month: new Date("2018-09-06T16:46:28.847Z") },onNull: "array"} } } } } } }, _id: 0}}],

        [{$project: {a: { $week: { $hour: { $dayOfWeek: { $isoDayOfWeek: { $dayOfYear: '$obj.obj.obj.date' } } } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $trim: { input: '$obj.str' } },'$obj.obj.str',{ $toUpper: '$obj.obj.str' }],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[{ $trunc: 37237 }],[],[],[{ $substr: ['$obj.str',20,0] },"Product Tasty Outdoors",'$obj.obj.obj.str']]] }, _id: 0}}],

        [{$project: {a: { $dayOfMonth: { $dateFromString: {dateString: "2018-09-06T07:29:22.629Z",format: "%w-%z-%S-%S-%S-%U-%U-%L-%U-%j"} } }, _id: 0}}],

        [{$project: {a: { $toLower: '$str' }, _id: 0}}],

        [{$project: {a: { $toString: { $map: {input: ["Frozen","Wooden Wooden"],as: 'billie',in: { $log10: { $cmp: [{ $dayOfMonth: { $dateToString: {date: new Date("2018-09-06T02:28:37.985Z"),timezone: "Asia/Dubai",onNull: '$obj.str'} } },{ $dateFromParts: {year: { $pow: ['$obj.num',20616] },hour: { $trunc: '$num' },second: { $add: [86820] }} }] } }} } }, _id: 0}}],

        [{$project: {a: { $dateToParts: {date: { $week: { $hour: { $dateFromParts: {isoWeekYear: { $log10: '$obj.obj.num' },second: { $pow: [47410,'$obj.obj.obj.num'] },millisecond: { $subtract: [75905,'$obj.num'] },timezone: "Asia/Yerevan"} } } },timezone: "America/Argentina/Cordoba"} }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: new Date("2018-09-06T03:01:12.545Z"),timezone: "Asia/Bangkok"} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],["Coordinator Pants",{ $toString: { $reverseArray: [[1782,'$obj.obj.obj.num']] } }],[]]] }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj.obj' }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj' }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [['$obj.obj.num'],[4187],["connecting Glen",{ $toString: { $arrayToObject: [[{k: "Buckinghamshire target",v: true},{k: "Coordinator",v: '$date'}]] } }],[]],defaults: [false]} }, _id: 0}}],

        [{$project: {a: { $dateToParts: {date: { $dayOfWeek: { $dayOfMonth: { $dayOfYear: { $month: { $hour: new Date("2018-09-05T20:43:13.822Z") } } } } },timezone: "America/Montreal"} }, _id: 0}}],

        [{$project: {a: { $map: {input: ['$obj.str'],in: { $divide: [86905,'$$this'] }} }, _id: 0}}],

        [{$project: {a: { $reverseArray: [['$obj.str','$obj.str']] }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: { $dayOfYear: { $isoWeekYear: { $dateToParts: { date: { $millesecond: { $dayOfMonth: { $isoDayOfWeek: { $dateFromParts: {year: { $floor: 62049 },day: { $log10: '$num' },millisecond: { $trunc: '$obj.obj.obj.num' },timezone: "Asia/Anadyr"} } } } } } } } },onNull: { $reverseArray: [[]] }} }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: '$obj.obj.date',format: "%M-%G-%%-%z-%Z",timezone: "Asia/Ulaanbaatar",onNull: { $arrayToObject: [[["Gloves hard drive"],['$obj.obj.num','$num',59654,67427],['$obj.obj.obj.str','$str',{ $trim: { input: { $substrCP: ["Burundi Franc Refined California",11,10] } } }],[]]] }} }, _id: 0}}],

        [{$project: {a: { $substrCP: ["engage",13,8] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["input"],74185] }, _id: 0}}],

        [{$project: {a: { $dayOfWeek: { $isoDayOfWeek: { $dateFromString: {dateString: "2018-09-06T01:25:13.032Z",timezone: "Asia/Jerusalem",onNull: { $trim: {input: "SDD Money Market Account copying",chars: { $substrBytes: ['$obj.str',8,7] }} }} } } }, _id: 0}}],

        [{$project: {a: { $isoWeekYear: { $month: { $dateToString: {date: new Date("2018-09-05T21:33:22.482Z"),onNull: '$obj.obj.str'} } } }, _id: 0}}],

        [{$project: {a: { $toUpper: '$obj.obj.str' }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [['$obj.obj.str','$obj.str'],["Internal",{ $toUpper: "e-tailers" }],[55155]],defaults: [false]} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "impactful",v: "Outdoors Global e-commerce"},{k: "synthesizing Ohio Dynamic",v: false}]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],32839] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $concat: ["visionary TCP"] },{ $toUpper: { $dateToString: {date: { $dayOfWeek: { $toDate: { $dateFromString: {dateString: "2018-09-06T11:32:42.103Z",timezone: "Europe/Uzhgorod"} } } },onNull: { $arrayElemAt: [[72505,34567,'$num'],'$obj.num'] }} } }],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $isoWeek: { $dayOfMonth: { $year: { $dayOfYear: { $dateFromParts: {year: { $log10: 3106 },month: { $log10: { $mod: [{ $ceil: '$obj.num' },'$obj.obj.obj.num'] } },day: { $ln: 18778 },hour: { $add: [2659] },millisecond: { $log: ['$obj.obj.num',70009] }} } } } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$obj.num',69354],['$str'],[],[3845,46809],[]]] }, _id: 0}}],

        [{$project: {a: { $isoDayOfWeek: { $minute: { $year: { $isoWeek: new Date("2018-09-06T12:20:31.117Z") } } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[]] }, _id: 0}}],

        [{$project: {a: { $isoWeek: { $isoWeek: { $millesecond: { $isoWeek: '$obj.obj.date' } } } }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj' }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "user-centric HDD Concrete",v: new Date("2018-09-05T23:36:48.605Z")}]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],8041] }, _id: 0}}],

        [{$project: {a: { $range: [6,0,9] }, _id: 0}}],

        [{$project: {a: { $isoWeekYear: { $dayOfYear: { $millesecond: { $dayOfMonth: { $dayOfYear: new Date("2018-09-05T23:43:19.255Z") } } } } }, _id: 0}}],

        [{$project: {a: { $concatArrays: [['$num',51365],[{ $concat: ['$obj.str'] }],[117],[]] }, _id: 0}}],

        [{$project: {a: { $concatArrays: [[],['$obj.str',{ $ltrim: { input: { $substr: ["PNG communities copying",15,11] } } },'$obj.obj.str',{ $toLower: { $substr: ['$str',12,20] } },"connecting Principal platforms"],[75503,'$obj.num'],['$obj.obj.str']] }, _id: 0}}],

        [{$project: {a: { $ltrim: {input: "Forest integrate initiatives",chars: { $toString: { $arrayToObject: [[['$obj.obj.obj.str'],["Rial Omani Home Loan Account"],[],['$num',89066]]] } }} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],[{ $concat: [{ $rtrim: {input: { $substrCP: ["Handmade",13,2] },chars: "Mozambique"} }] }],[],[],['$obj.obj.str']]] }, _id: 0}}],

        [{$project: {a: { $toDate: { $arrayToObject: [[['$obj.obj.obj.str',"invoice Wisconsin COM"],[6253,'$obj.obj.obj.num'],[{ $divide: [84500,71251] },false,"Research"]]] } }, _id: 0}}],

        [{$project: {a: { $dateFromString: {dateString: "2018-09-06T18:00:51.943Z",format: "%M-%S-%w-%u",timezone: "Europe/Bucharest",onError: { $reverseArray: [['$obj.obj.num']] },onNull: { $arrayToObject: [[[{ $rtrim: {input: '$obj.obj.str',chars: { $ltrim: { input: "budgetary management Agent Centers" } }} }],[],[66564,68037,58751],["dynamic"]]] }} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $isoDayOfWeek: { $month: new Date("2018-09-06T01:08:43.275Z") } }, _id: 0}}],

        [{$project: {a: { $concatArrays: [[{ $substrCP: ['$str',18,15] }],[],["indexing back up",'$obj.str',"Interactions Specialist redefine"],[44806,{ $log10: '$num' }],['$obj.obj.num',29318]] }, _id: 0}}],

        [{$project: {a: { $hour: { $week: { $dateToString: {date: { $week: { $millesecond: { $isoWeekYear: { $isoWeekYear: { $dateFromParts: {year: { $pow: ['$num','$num'] },month: { $floor: '$obj.obj.num' },day: { $pow: [45133,15112] },millisecond: { $size: [[]] }} } } } } },format: "%%-%G-%U-%u-%u",timezone: "America/Montevideo"} } } }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj' }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[8157],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $dateFromParts: {year: { $divide: ['$obj.num',21644] },day: { $multiply: ['$num','$obj.num','$num',{ $log10: 6714 }] },hour: { $ceil: 47917 },second: { $sqrt: { $multiply: ['$obj.obj.obj.num'] } },millisecond: { $pow: [89461,'$obj.obj.num'] }} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[{ $toUpper: '$obj.obj.obj.str' },"whiteboard"],['$num'],[],[],[{ $toLower: "Car payment" },'$str',{ $toString: { $concatArrays: [[]] } }]]] }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj' }, _id: 0}}],

        [{$project: {a: { $filter: {input: [],cond: { $isArray: [{ $arrayToObject: [[["Home Loan Account hacking",{ $dateToString: {date: '$obj.obj.obj.date',onNull: '$obj.obj.obj.str'} },'$$this'],['$obj.num'],["invoice Administrator"]]] }] }} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[{ $substr: ["Freeway Coordinator transmitting",20,5] },'$obj.str','$str'],["Auto Loan Account Frozen reboot"],["reboot Licensed"],[],[]]] }, _id: 0}}],

        [{$project: {a: { $map: {input: [{ $toString: { $arrayToObject: [[{k: "Group",v: '$obj.obj.obj.date'}]] } },'$obj.str'],in: { $divide: [73731,'$obj.num'] }} }, _id: 0}}],

        [{$project: {a: { $dateFromParts: {year: 10718,month: { $sqrt: '$obj.num' },day: { $add: [] },second: { $trunc: 83115 },timezone: "Asia/Harbin"} }, _id: 0}}],

        [{$project: {a: { $toUpper: "matrices" }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],90836] }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: '$obj.date',format: "%G-%u-%%-%H-%j-%j-%H-%G",onNull: { $toLower: { $substr: ['$obj.obj.str',16,6] } }} }, _id: 0}}],

        [{$project: {a: { $second: { $dayOfWeek: { $second: { $month: { $millesecond: { $hour: { $dateToParts: { date: { $isoDayOfWeek: { $isoWeek: { $minute: { $isoWeekYear: new Date("2018-09-06T16:18:03.642Z") } } } } } } } } } } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.num',66570,39396],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $concatArrays: [[{ $toLower: '$obj.obj.obj.str' },"Upgradable Licensed payment"],[43271],[],[],[],['$obj.obj.obj.str']] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$num'],10944] }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj.obj.obj' }, _id: 0}}],

        [{$project: {a: { $filter: {input: [39095],cond: { $gt: [{ $arrayToObject: [[]] },{ $objectToArray: '$$this' }] }} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "circuit SAS",v: true}]] }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj.obj.obj' }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Cambridgeshire",v: { $minute: { $millesecond: { $minute: { $isoWeekYear: '$date' } } } }},{k: "relationships",v: true},{k: "Jordanian Dinar index multi-state",v: '$obj.num'}]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],[],['$obj.str','$obj.obj.obj.str']]] }, _id: 0}}],

        [{$project: {a: { $filter: {input: ["Berkshire","Home Loan Account"],as: 'vita',cond: { $and: ['$obj.obj.num'] }} }, _id: 0}}],

        [{$project: {a: { $dateToString: { date: { $minute: { $dayOfYear: { $isoDayOfWeek: '$obj.date' } } } } }, _id: 0}}],

        [{$project: {a: { $week: { $year: { $minute: { $dayOfWeek: { $dayOfYear: { $isoDayOfWeek: { $year: { $dayOfMonth: { $hour: { $isoWeekYear: { $isoWeekYear: { $dateToParts: {date: { $isoDayOfWeek: { $second: { $dayOfYear: { $toDate: { $arrayElemAt: [[false],7283] } } } } },iso8601: true} } } } } } } } } } } } }, _id: 0}}],

        [{$project: {a: { $isoWeek: { $dateToString: {date: '$obj.obj.obj.date',format: "%j-%u-%Z-%%-%U-%Y"} } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$num'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[86797],[],[{ $substrCP: ["Corporate methodology invoice",12,6] }],[]]] }, _id: 0}}],

        [{$project: {a: { $ltrim: { input: "Gorgeous" } }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj' }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [[{ $ltrim: {input: '$obj.str',chars: { $substrBytes: ["Avon",19,20] }} },'$obj.obj.str',"Web capacitor"],[],["Fantastic Wooden Chair synergy Computer"],[]],useLongestLength: false} }, _id: 0}}],

        [{$project: {a: { $hour: { $dateToString: {date: new Date("2018-09-06T14:25:38.592Z"),format: "%H-%j-%z-%L-%M",timezone: "America/Maceio"} } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $toDate: { $minute: { $dateFromParts: {isoWeekYear: { $indexOfArray: [{ $zip: {inputs: [['$str'],[25268,'$num','$obj.obj.num']],useLongestLength: true} },{ $arrayElemAt: [[{ $substrBytes: ['$str',20,12] },'$obj.obj.obj.str'],67582] },10] },hour: { $log10: '$num' },minute: { $divide: [397,'$num'] },millisecond: { $log: [81820,'$obj.obj.num'] }} } } },'$str',7544],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["optical Architect Granite"],70225] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Rubber wireless",v: false},{k: "Bike",v: false}]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "SDD Gorgeous",v: false}]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],[{ $dateToString: {date: new Date("2018-09-06T03:50:42.846Z"),format: "%%-%d-%G-%G-%j-%u-%H-%L",timezone: "America/Denver"} }],[],['$obj.str',{ $substrCP: ["reboot Berkshire",14,2] }],[]]] }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: new Date("2018-09-05T21:22:43.904Z"),onNull: { $toString: { $arrayElemAt: [["experiences Awesome Frozen Shirt Personal Loan Account",{ $substrCP: ['$obj.obj.obj.str',17,18] },'$str'],'$obj.obj.obj.num'] } }} }, _id: 0}}],

        [{$project: {a: { $toLower: "Beauty" }, _id: 0}}],

        [{$project: {a: { $concatArrays: [[{ $substrCP: ["applications",9,8] },'$obj.str'],[41543,'$obj.num',93921],[{ $ceil: 63019 }],["Credit Card Account",'$obj.obj.obj.str']] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.num'],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["Generic enterprise",'$obj.obj.obj.str'],50820] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "card",v: 45770}]] }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [['$num',6581],[],[45704],[{ $toString: { $substrCP: ["Program",0,18] } },"task-force HTTP Valley"],['$obj.str',{ $substrCP: ['$obj.obj.str',18,12] }],[],[],[{ $toString: { $arrayElemAt: [[],'$num'] } }]],useLongestLength: false,defaults: [new Date("2018-09-06T06:25:34.178Z")]} }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj.obj' }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj.obj' }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "monitor Bedfordshire Customer",v: false},{k: "Practical Fresh Pants alarm",v: '$obj.obj.str'}]] }, _id: 0}}],

        [{$project: {a: { $isoWeek: { $second: { $dayOfWeek: { $second: { $dateFromParts: {isoWeekYear: { $sqrt: '$num' },isoDayOfWeek: { $divide: [{ $mod: [87536,77159] },'$obj.obj.num'] }} } } } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.num'],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.obj.num','$obj.obj.obj.num'],28165] }, _id: 0}}],

        [{$project: {a: { $substrCP: ["robust salmon",5,2] }, _id: 0}}],

        [{$project: {a: { $filter: {input: ['$str'],cond: { $ne: [{ $dayOfMonth: '$$this' },{ $arrayToObject: [[[{ $concat: ['$$this',"Tactics"] },"Tennessee Architect",{ $substr: ["Developer",0,16] },'$$this'],[59397,24897,'$obj.obj.obj.num'],[],[{ $toString: { $toDate: { $arrayToObject: [[{k: "Awesome Concrete Bacon Credit Card Account",v: '$obj.obj.obj.num'}]] } } }]]] }] }} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[53680,'$obj.obj.obj.num'],[],[],[],["deposit Metal Kiribati",{ $dateToString: {date: new Date("2018-09-05T22:06:38.952Z"),format: "%%-%U-%U-%G-%%-%%-%S-%j-%w-%S-%d"} }],[60452]]] }, _id: 0}}],

        [{$project: {a: { $map: {input: [68521],in: { $multiply: [] }} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[51010],[],[],["Generic Concrete Car Concrete Centralized"],['$str',{ $toLower: { $substr: ['$obj.str',8,11] } },{ $toUpper: "Netherlands Antilles context-sensitive" }],[],['$obj.obj.str',"Intranet copy"]]] }, _id: 0}}],

        [{$project: {a: { $substrBytes: [{ $trim: {input: '$obj.str',chars: "Persevering"} },15,8] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "quantifying silver calculating",v: 86525},{k: "auxiliary Interactions",v: "Architect Plastic bleeding-edge"}]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.obj.num','$obj.num'],7560] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.num'],77111] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[45376,'$obj.num','$obj.num'],[],['$str']]] }, _id: 0}}],

        [{$project: {a: { $concat: ["auxiliary Buckinghamshire","COM"] }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [[{ $rtrim: {input: "Concrete Organic Profit-focused",chars: '$obj.str'} },'$obj.obj.obj.str'],[],[]],useLongestLength: true,defaults: [false]} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[["Oklahoma gold",{ $substrBytes: ['$str',6,20] },{ $substrBytes: ["Credit Card Account",3,15] }],['$obj.obj.obj.num'],['$obj.obj.obj.str',"Handmade Metal protocol"],['$obj.obj.str',{ $rtrim: {input: "reboot Home Licensed Concrete Tuna",chars: { $concat: [] }} }],[]]] }, _id: 0}}],

        [{$project: {a: { $trim: { input: "parallelism Vision-oriented New Jersey" } }, _id: 0}}],

        [{$project: {a: { $map: {input: [],as: 'jamar',in: { $abs: 90669 }} }, _id: 0}}],

        [{$project: {a: { $filter: {input: ['$num'],as: 'braeden',cond: { $in: [{ $rtrim: {input: '$str',chars: "Fish COM"} },{ $map: {input: [],as: 'adelbert',in: { $abs: 11664 }} }] }} }, _id: 0}}],

        [{$project: {a: { $dateFromString: {dateString: "2018-09-06T14:24:10.092Z",format: "%S-%H-%m-%M-%S-%Z-%d-%w",timezone: "Canada/Pacific",onError: { $arrayElemAt: [[],92575] },onNull: '$obj.str'} }, _id: 0}}],

        [{$project: {a: { $week: { $dateToParts: {date: { $toDate: { $zip: {inputs: [[],['$obj.obj.str'],["yellow",'$obj.str',{ $substrCP: [{ $substrBytes: ["Louisiana",2,9] },2,12] },'$obj.obj.obj.str'],['$num',1752],[false,'$obj.obj.date','$obj.num']],defaults: [35554]} } },timezone: "Asia/Chungking"} } }, _id: 0}}],

        [{$project: {a: { $dayOfYear: { $dayOfYear: { $toDate: { $rtrim: { input: '$str' } } } } }, _id: 0}}],

        [{$project: {a: { $ltrim: { input: '$obj.obj.obj.str' } }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: '$date',format: "%L-%z-%w-%L",timezone: "Brazil/Acre"} }, _id: 0}}],

        [{$project: {a: { $isoWeekYear: { $month: { $dateToString: {date: new Date("2018-09-05T23:36:45.354Z"),format: "%u-%G-%%-%H-%M-%Y-%%-%Z-%u-%V-%U",timezone: "America/Indiana/Winamac",onNull: { $concatArrays: [[{ $substrBytes: [{ $substrCP: [{ $toUpper: "indigo Ergonomic Plastic Salad" },5,11] },16,2] }],[]] }} } } }, _id: 0}}],

        [{$project: {a: { $rtrim: { input: "Cambridgeshire" } }, _id: 0}}],

        [{$project: {a: { $millesecond: { $isoWeekYear: { $dayOfMonth: { $isoWeekYear: { $dateFromParts: {year: { $abs: 11140 },hour: { $trunc: 51552 },minute: { $log10: { $pow: ['$obj.obj.num','$obj.obj.obj.num'] } },millisecond: { $indexOfArray: [{ $filter: {input: ["exploit generate optical"],as: 'brian',cond: { $in: [{ $toLower: '$$brian' },{ $concatArrays: [[],[],[11130],[{ $trim: { input: { $substrBytes: ['$$brian',3,10] } } },'$$brian',"innovate","Auto Loan Account overriding Internal"],[],['$obj.num',11087,'$$brian'],[38435,false]] }] }} },{ $arrayElemAt: [["Refined RAM"],'$obj.obj.obj.num'] },3] }} } } } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $substrBytes: [{ $substrBytes: ["Soft",9,16] },19,1] },"Regional back-end"],2406] }, _id: 0}}],

        [{$project: {a: { $concatArrays: [['$obj.obj.num'],[]] }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: { $minute: { $hour: { $dayOfMonth: { $dateFromParts: {year: { $subtract: ['$obj.obj.obj.num','$obj.num'] },day: { $add: [] },timezone: "Pacific/Rarotonga"} } } } },format: "%L-%m-%%-%z-%Y-%S",onNull: '$obj.obj.str'} }, _id: 0}}],

        [{$project: {a: { $range: [16,12] }, _id: 0}}],

        [{$project: {a: { $millesecond: { $dateFromParts: {isoWeekYear: { $trunc: '$num' },isoDayOfWeek: { $multiply: [] },hour: { $subtract: [35907,{ $divide: ['$obj.obj.obj.num',25479] }] },second: { $log: [29503,'$num'] },timezone: "Asia/Aqtau"} } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.obj.str'],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $map: {input: [],in: { $ln: 90426 }} }, _id: 0}}],

        [{$project: {a: { $ltrim: {input: '$str',chars: "bottom-line Credit Card Account"} }, _id: 0}}],

        [{$project: {a: { $isoDayOfWeek: { $hour: { $second: { $isoWeek: '$obj.obj.obj.date' } } } }, _id: 0}}],

        [{$project: {a: { $reverseArray: [['$obj.obj.str']] }, _id: 0}}],

        [{$project: {a: { $reverseArray: [[]] }, _id: 0}}],

        [{$project: {a: { $toDate: { $objectToArray: '$obj.obj' } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],[],[{ $substr: [{ $toString: { $month: { $isoDayOfWeek: { $second: { $month: { $dateToParts: {date: { $toDate: { $arrayElemAt: [['$obj.obj.num',36577],'$num'] } },iso8601: false} } } } } } },1,20] },"microchip"]]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Riel River dot-com",v: 91576},{k: "navigate UIC-Franc",v: true}]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "bypassing Refined Granite Computer",v: '$obj.str'},{k: "evolve solid state",v: { $toLower: { $ltrim: {input: "Car Licensed Electronics",chars: '$obj.str'} } }}]] }, _id: 0}}],

        [{$project: {a: { $toDate: { $dateToString: {date: '$obj.obj.obj.date',onNull: { $filter: {input: ['$obj.num'],as: 'patsy',cond: { $gt: [{ $arrayToObject: [[["compressing"],[{ $substrCP: ['$$patsy',4,15] }],["4th generation SDD Garden",{ $substrBytes: ['$$patsy',20,4] },'$str',"Buckinghamshire Business-focused"],[42988,95682,'$obj.num',{ $add: [] }],[{ $subtract: ['$obj.obj.num',47306] }]]] },{ $arrayToObject: [[{k: "Platinum Chicken parse",v: { $ltrim: {input: { $toLower: '$$patsy' },chars: "Manager"} }}]] }] }} }} } }, _id: 0}}],

        [{$project: {a: { $toUpper: '$str' }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.num',{ $cmp: [{ $arrayToObject: [[{k: "Tasty Wooden Gloves Grocery",v: true},{k: "Object-based array",v: 71177}]] },{ $substr: ['$str',14,6] }] },53087],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $substrCP: [{ $toUpper: '$obj.str' },0,2] }, _id: 0}}],

        [{$project: {a: { $concatArrays: [['$obj.num',8966],[],[64896,'$obj.obj.str']] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Human concept Architect",v: false},{k: "Solutions",v: { $substrBytes: ['$obj.obj.obj.str',7,7] }}]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $minute: { $dateToParts: { date: { $dateToParts: {date: { $year: { $dateFromParts: {isoWeekYear: { $pow: ['$num',8669] },hour: 70885,second: { $multiply: [] },millisecond: { $divide: ['$num',69914] }} } },iso8601: true} } } } }, _id: 0}}],

        [{$project: {a: { $range: [0,15,12] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $substrCP: ["Croatia parsing",7,5] }],28227] }, _id: 0}}],

        [{$project: {a: { $toString: { $arrayElemAt: [['$num'],69270] } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[{ $dateToString: {date: '$obj.obj.obj.date',timezone: "America/Tegucigalpa",onNull: '$obj.str'} }],['$obj.obj.num','$obj.obj.num',63499],[{ $month: { $millesecond: { $dateFromString: { dateString: "2018-09-05T23:29:57.942Z" } } } },true],['$obj.str'],[{ $concat: ["input primary",'$obj.obj.obj.str'] },'$obj.str',"Configuration"]]] }, _id: 0}}],

        [{$project: {a: { $filter: {input: [61281,'$num'],as: 'katelynn',cond: { $or: ["Tasty portal",{ $dateToString: {date: new Date("2018-09-06T13:28:22.034Z"),timezone: "Australia/Adelaide",onNull: { $dateToParts: {date: { $dateFromParts: {isoWeekYear: '$$katelynn',second: { $exp: 94492 },millisecond: { $trunc: 50931 },timezone: "Pacific/Funafuti"} },timezone: "Etc/Universal",iso8601: false} }} }] }} }, _id: 0}}],

        [{$project: {a: { $toUpper: '$str' }, _id: 0}}],

        [{$project: {a: { $ltrim: { input: { $toUpper: { $trim: {input: "port Avon open-source",chars: { $substrBytes: ['$obj.obj.obj.str',10,11] }} } } } }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [[],[]],useLongestLength: false,defaults: [44059,{}]} }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj.obj' }, _id: 0}}],

        [{$project: {a: { $isoDayOfWeek: { $week: { $isoWeekYear: { $dateFromString: {dateString: "2018-09-06T09:35:57.979Z",format: "%m-%d-%Z-%Z-%L"} } } } }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: { $dayOfWeek: { $toDate: { $arrayToObject: [[]] } } },onNull: '$obj.obj.obj.str'} }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj.obj.obj' }, _id: 0}}],

        [{$project: {a: { $rtrim: { input: "Syrian Pound Borders" } }, _id: 0}}],

        [{$project: {a: LOOKUP_date;, _id: 0}}],

        [{$project: {a: { $isoWeekYear: { $millesecond: { $dayOfYear: { $isoWeekYear: { $dateFromParts: {isoWeekYear: { $ceil: '$obj.obj.num' },isoDayOfWeek: { $sqrt: 78235 },minute: { $divide: ['$num',11385] },second: { $multiply: [{ $log: [17396,'$num'] }] }} } } } } }, _id: 0}}],

        [{$project: {a: { $hour: new Date("2018-09-06T14:57:56.459Z") }, _id: 0}}],

        [{$project: {a: { $toLower: { $rtrim: {input: { $trim: { input: "GB sky blue" } },chars: "modular pink"} } }, _id: 0}}],

        [{$project: {a: { $range: [16,10] }, _id: 0}}],

        [{$project: {a: { $map: {input: ['$obj.obj.str',{ $substrCP: ['$obj.obj.obj.str',16,11] },"Dynamic"],in: { $ln: '$$this' }} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[24392],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$num',40674],["Generic",'$obj.obj.obj.str','$obj.obj.str'],[]]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Saint Kitts and Nevis",v: true},{k: "Cotton",v: new Date("2018-09-06T14:04:06.550Z")},{k: "neural Handmade Fresh Table Handmade Granite Towels",v: true}]] }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj' }, _id: 0}}],

        [{$project: {a: { $rtrim: {input: "Plains",chars: { $toLower: "incentivize" }} }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj.obj' }, _id: 0}}],

        [{$project: {a: { $ltrim: {input: '$str',chars: '$obj.obj.str'} }, _id: 0}}],

        [{$project: {a: { $filter: {input: ['$obj.obj.str',"Practical Granite Towels solid state"],as: 'lisette',cond: { $gt: [{ $second: { $isoDayOfWeek: { $dateFromParts: {year: { $ceil: 49165 },month: { $cmp: [{ $toUpper: { $concat: [] } },{ $toString: { $arrayToObject: [[[98672,'$obj.obj.num',{ $multiply: [] }],[70943,'$num'],['$$lisette',{ $concat: ["Soft Producer Courts"] }],[52998]]] } }] },hour: { $size: [[{ $rtrim: { input: '$$lisette' } }]] },timezone: "Asia/Atyrau"} } } },{ $arrayToObject: [[[]]] }] }} }, _id: 0}}],

        [{$project: {a: { $concat: [{ $substrBytes: ['$str',11,16] },"foreground"] }, _id: 0}}],

        [{$project: {a: { $isoWeekYear: { $week: { $isoDayOfWeek: { $year: { $dayOfMonth: { $dayOfYear: { $second: { $dateFromParts: {year: { $log: [61170,'$obj.obj.num'] },hour: { $size: [[{ $toString: { $minute: { $dayOfWeek: { $isoWeek: { $dateToString: {date: new Date("2018-09-06T06:44:39.615Z"),format: "%m-%j-%Z-%S-%U-%m-%j-%d",onNull: '$str'} } } } } },"hacking invoice","Devolved input Sleek Steel Computer"]] },millisecond: { $pow: ['$obj.num',70140] }} } } } } } } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[99404,'$num',26582],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["Fish Cliffs invoice","transmit"],'$num'] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.obj.str'],81434] }, _id: 0}}],

        [{$project: {a: { $dateFromString: {dateString: "2018-09-05T22:18:51.846Z",timezone: "Asia/Yerevan",onError: { $arrayElemAt: [['$str',{ $concat: ['$obj.obj.str',"Hat","Games Borders"] },'$obj.obj.obj.str'],'$obj.obj.num'] }} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],[{ $dateToString: {date: { $dateToString: {date: '$obj.date',format: "%U-%Y-%j-%G",onNull: { $concatArrays: [[],[68870],[],[]] }} },onNull: "knowledge base copy quantify"} }]]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],[{ $trim: { input: { $toLower: { $substrCP: ['$str',19,11] } } } }],['$str','$str',"Engineer Personal Loan Account bottom-line"],[22511],['$obj.num','$num'],["Soft RAM",'$obj.obj.str'],[false,77829]]] }, _id: 0}}],

        [{$project: {a: { $filter: {input: [{ $concat: ['$str',{ $toLower: "microchip" }] }],as: 'maye',cond: { $isArray: [{ $arrayToObject: [[{k: "Unbranded Steel Soap",v: true},{k: "Berkshire value-added Dam",v: 94383},{k: "granular Future Analyst",v: false}]] }] }} }, _id: 0}}],

        [{$project: {a: { $concat: [] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Cotton New Hampshire",v: { $isoDayOfWeek: { $dayOfWeek: { $hour: { $year: { $isoDayOfWeek: { $isoWeek: { $dateToString: {date: { $dayOfMonth: { $dateFromParts: {year: { $log: [{ $floor: 18405 },'$obj.obj.num'] },month: { $ln: '$num' },day: { $divide: ['$obj.num',59044] },minute: { $exp: '$obj.num' }} } },timezone: "Africa/Tripoli"} } } } } } } }},{k: "Salad input",v: "Cambridgeshire lime"}]] }, _id: 0}}],

        [{$project: {a: { $substr: ["Green connect Ergonomic Steel Bike",12,20] }, _id: 0}}],

        [{$project: {a: { $isoWeekYear: { $dayOfWeek: { $dayOfYear: { $dateToString: {date: { $dayOfMonth: { $dateFromString: {dateString: "2018-09-06T09:08:59.517Z",onNull: "Sports Fish"} } },format: "%d-%Z-%G-%H-%V-%L-%%-%S",onNull: { $arrayToObject: [[{k: "Fantastic",v: false},{k: "productize",v: '$obj.num'}]] }} } } } }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: { $dateToString: { date: new Date("2018-09-06T00:48:04.118Z") } },format: "%M-%V-%S-%d-%j-%U-%w",timezone: "Asia/Gaza",onNull: '$obj.str'} }, _id: 0}}],

        [{$project: {a: { $map: {input: ["bypassing EXE ivory"],in: { $mod: [25964,'$obj.obj.obj.num'] }} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[74993,'$num',30164],[{ $rtrim: {input: '$obj.str',chars: '$obj.obj.obj.str'} }]]] }, _id: 0}}],

        [{$project: {a: { $concat: ['$obj.obj.str',{ $toLower: "Prairie CFA Franc BEAC connecting" }] }, _id: 0}}],

        [{$project: {a: { $reverseArray: [[]] }, _id: 0}}],

        [{$project: {a: { $toString: { $toString: { $arrayToObject: [[{k: "Chief Intranet",v: 30866}]] } } }, _id: 0}}],

        [{$project: {a: { $reverseArray: [[]] }, _id: 0}}],

        [{$project: {a: { $dateFromParts: {isoWeekYear: { $multiply: ['$obj.obj.obj.num',34445] },millisecond: { $size: [[]] },timezone: "Antarctica/South_Pole"} }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [[42996],[]],useLongestLength: true,defaults: [19237]} }, _id: 0}}],

        [{$project: {a: { $substrCP: ["Bacon",8,9] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[26398,'$obj.obj.num',12347,'$obj.obj.num'],42405] }, _id: 0}}],

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
