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
        return coll.insert({_id: 16178,str: "Ball encoding invoice",num: 95589,date: new Date("2018-09-06T07:35:01.327Z"),array: [{_id: 16179,num: 13506,date: new Date("2018-09-06T12:03:35.229Z"),array: [],obj: {_id: 16180,num: 38073,array: [76443,47151]}},new Date("2018-09-06T05:42:19.391Z"),new Date("2018-09-06T15:08:45.390Z"),["generating Versatile"],"front-end Regional Metrics","Bedfordshire Horizontal Bulgaria",new Date("2018-09-06T15:30:24.326Z"),[],{_id: 16181,str: "National",date: new Date("2018-09-06T16:56:31.211Z"),array: [],obj: {}},new Date("2018-09-06T05:18:38.365Z"),15521,{_id: 16182,str: "connect Road",num: 13697,date: new Date("2018-09-05T21:20:16.720Z")}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 16183,str: "index optical Generic Plastic Pants",num: 3955,date: new Date("2018-09-05T20:20:44.735Z"),array: [429,"navigating",new Date("2018-09-06T17:53:38.653Z"),38371,new Date("2018-09-06T18:32:10.939Z"),{_id: 16184,str: "Investment Account optical Kansas",num: 2052,array: [],obj: {_id: 16185,str: "e-business Accounts",date: new Date("2018-09-06T04:32:25.440Z"),array: [31856,"driver black"]}},"Mauritius Rupee ubiquitous",new Date("2018-09-06T14:10:19.595Z"),new Date("2018-09-06T08:59:11.201Z"),[],{_id: 16186,str: "EXE Designer virtual",num: 83448,date: new Date("2018-09-06T08:54:25.471Z"),array: ["modular target mission-critical"],obj: {_id: 16187,str: "monetize definition",num: 53899,date: new Date("2018-09-06T16:19:43.794Z"),array: [],obj: {}}},[],new Date("2018-09-06T06:36:52.270Z"),{_id: 16188,obj: {}}],obj: {_id: 16189,str: "Buckinghamshire",num: 76471,obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 16190,str: "Assistant",num: 15621,array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 16191,str: "quantifying Berkshire Group",num: 97669,date: new Date("2018-09-06T02:50:50.914Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 16192,num: 55593,date: new Date("2018-09-06T18:29:38.222Z"),array: [4700,"Heights",{_id: 16193,str: "Agent matrix",num: 66765,date: new Date("2018-09-06T04:33:04.080Z"),array: [],obj: {}},91894,"Ball",new Date("2018-09-06T15:42:46.648Z"),"invoice Up-sized",82428,new Date("2018-09-06T13:09:20.569Z"),[],"indexing Oklahoma Incredible Steel Gloves",15060],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 16194,str: "feed",num: 75675,date: new Date("2018-09-06T16:58:52.355Z"),array: [],obj: {_id: 16195,str: "Implementation Beauty Cambridgeshire",num: 57454,date: new Date("2018-09-06T04:39:58.651Z"),array: [72388,"payment Frozen whiteboard",24618,82449,"mint green Austria Ohio",new Date("2018-09-06T09:23:50.470Z"),"index Tasty Plastic Shirt",[],new Date("2018-09-06T11:10:25.027Z")],obj: {_id: 16196,str: "card Specialist Outdoors",date: new Date("2018-09-06T03:18:55.875Z"),array: ["circuit Savings Account Monitored",88365,{_id: 16197,num: 62884,date: new Date("2018-09-06T07:31:44.437Z"),array: [[]],obj: {_id: 16198,array: []}},23148]}}});
    },

    function(coll) {
        return coll.insert({_id: 16199,str: "Home Loan Account Turnpike",num: 72926,date: new Date("2018-09-05T22:32:40.757Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 16200,str: "black bypass",num: 53384,date: new Date("2018-09-06T09:49:59.389Z"),array: ["maroon",[new Date("2018-09-06T18:51:46.725Z")],{_id: 16201,str: "Street",num: 65381,date: new Date("2018-09-06T18:09:33.427Z"),array: [],obj: {_id: 16202,str: "quantifying District attitude-oriented",num: 43300,array: []}},44966,81161,92416,{_id: 16203,str: "haptic",num: 47463,date: new Date("2018-09-06T10:32:53.178Z"),obj: {}},"Home Loan Account Expanded deposit",new Date("2018-09-06T09:58:48.447Z"),"Practical Plastic Chips",96363,new Date("2018-09-06T13:10:18.278Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 16204,str: "Incredible Home Loan Account",num: 45301,date: new Date("2018-09-06T15:07:46.122Z"),array: ["Awesome",{_id: 16205,str: "Practical Concrete Gloves SSL",num: 42485,date: new Date("2018-09-06T12:05:39.427Z"),array: [41087],obj: {}},[35786,new Date("2018-09-06T13:43:25.399Z"),new Date("2018-09-06T16:50:40.095Z"),"Creative hack",[],new Date("2018-09-06T00:00:52.411Z"),"Small Turkish Lira Books",77712],{_id: 16206,num: 69738,date: new Date("2018-09-06T09:53:25.010Z"),array: [new Date("2018-09-06T18:13:41.341Z")],obj: {_id: 16207,str: "West Virginia Fresh hack",num: 30018,date: new Date("2018-09-06T09:41:16.237Z"),array: []}},"Buckinghamshire mesh",2493,"success",["Suriname analyzing",new Date("2018-09-06T04:15:10.652Z")],3185,20206],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 16208,str: "Supervisor Handmade Granite Shirt back-end",num: 89679,array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 16209,str: "parse motivating",num: 95222,date: new Date("2018-09-05T21:23:48.546Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 16210,str: "Keyboard Manager Open-source",num: 35096,date: new Date("2018-09-06T10:57:42.997Z"),array: [],obj: {_id: 16211,str: "ADP copy",num: 17249,date: new Date("2018-09-06T19:07:29.758Z"),array: ["Sri Lanka Future","hack e-services encoding",97226,"models upward-trending",20114,new Date("2018-09-06T19:35:46.761Z"),new Date("2018-09-05T22:50:22.629Z"),["Fantastic disintermediate","bleeding-edge synergistic Checking Account",{_id: 16212,num: 84244,date: new Date("2018-09-06T12:18:27.733Z"),array: [99859,60707],obj: {_id: 16213,str: "Gourde US Dollar",obj: {}}}],{_id: 16214,str: "grey Slovenia Metal",num: 9300,date: new Date("2018-09-05T23:47:25.481Z"),array: [54222,"transition extend program",[]]},new Date("2018-09-05T20:32:10.170Z"),new Date("2018-09-06T00:50:47.953Z"),82393],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 16215,str: "Dynamic copying Gardens",num: 18287,date: new Date("2018-09-06T17:27:33.977Z"),array: [],obj: {_id: 16216,str: "Brazil auxiliary",num: 89821,date: new Date("2018-09-06T06:34:53.757Z"),array: [42387,"Tasty Steel Pizza",[new Date("2018-09-06T00:58:07.314Z"),["program Lead Swiss Franc",new Date("2018-09-06T17:07:22.713Z")]],{_id: 16217,num: 30155,date: new Date("2018-09-05T22:23:40.125Z"),array: [],obj: {_id: 16218,str: "Implementation green",num: 43439,date: new Date("2018-09-06T02:37:14.125Z"),obj: {_id: 16219,str: "Future-proofed Lead",num: 27765,array: [92833,57574,71175]}}},"neutral Frozen",36708,"Bedfordshire AI back-end",new Date("2018-09-06T12:49:00.912Z"),"Home Loan Account",{_id: 16220,str: "client-driven Internal Shoes",num: 20293,date: new Date("2018-09-06T08:46:40.384Z"),obj: {}},"Markets Clothing Mexican Peso Mexican Unidad de Inversion (UDI)",new Date("2018-09-06T01:44:21.455Z")],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 16221,num: 82709,date: new Date("2018-09-06T11:40:36.798Z"),array: [[],55008,46416,47036,new Date("2018-09-06T07:23:10.249Z"),new Date("2018-09-06T09:12:11.972Z"),{_id: 16222,str: "Identity navigating",num: 62145,date: new Date("2018-09-06T13:54:39.695Z"),array: [],obj: {_id: 16223,str: "applications",date: new Date("2018-09-06T02:04:06.290Z"),array: [63481,"compelling GB","Security deliver",[],"panel task-force"],obj: {}}},"Vista Supervisor Refined Concrete Computer",{_id: 16224,str: "B2B program bluetooth",num: 41228,date: new Date("2018-09-06T16:43:55.809Z"),array: [],obj: {}}]});
    },

    function(coll) {
        return coll.insert({_id: 16225,str: "Rustic Steel",num: 3037,date: new Date("2018-09-06T13:05:09.464Z"),array: [{_id: 16226,str: "Internal Handmade",num: 14594,date: new Date("2018-09-06T16:48:08.424Z"),array: [],obj: {}},"Triple-buffered architect reciprocal",{_id: 16227,str: "Unbranded explicit Gorgeous Frozen Pants",num: 67862,date: new Date("2018-09-06T04:55:13.612Z"),array: [],obj: {_id: 16228,num: 54264,date: new Date("2018-09-06T14:04:01.990Z"),obj: {_id: 16229,str: "B2B navigate Iowa",num: 64760,obj: {_id: 16230,str: "streamline Mobility",date: new Date("2018-09-05T22:41:35.053Z"),array: [new Date("2018-09-06T16:20:58.483Z")]}}}},new Date("2018-09-06T16:31:55.701Z"),55886,43665,new Date("2018-09-06T05:34:44.979Z"),97369,"hard drive Berkshire",[{_id: 16231,str: "violet",array: [27776],obj: {}},new Date("2018-09-06T09:41:07.233Z"),93296,"bandwidth ADP auxiliary"],{_id: 16232,str: "XML",num: 56780,date: new Date("2018-09-06T01:23:47.154Z"),array: [],obj: {}},"architect"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 16233,str: "Producer firewall",array: [56633,new Date("2018-09-06T08:48:39.995Z"),new Date("2018-09-06T19:13:41.731Z"),"schemas protocol USB",new Date("2018-09-06T02:53:04.430Z"),38269,[],"Delaware"],obj: {_id: 16234,str: "connecting synthesizing haptic",num: 77493,date: new Date("2018-09-06T15:43:39.798Z"),array: [{_id: 16235,str: "disintermediate Virginia homogeneous",num: 43973,date: new Date("2018-09-05T21:18:04.205Z"),obj: {_id: 16236,str: "Specialist Inlet magenta",num: 13198,array: [[]],obj: {}}},{_id: 16237,str: "static methodologies",num: 55451,date: new Date("2018-09-06T18:39:34.821Z")},76806,{_id: 16238,array: [],obj: {}},"Chicken end-to-end",new Date("2018-09-06T00:40:01.360Z"),"Canada",84897],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 16239,str: "Drive Illinois",num: 85632,date: new Date("2018-09-06T15:22:28.882Z"),array: [],obj: {_id: 16240,str: "Cotton Generic Object-based",num: 62207,date: new Date("2018-09-06T03:05:58.825Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 16241,num: 54762,date: new Date("2018-09-05T23:00:45.969Z"),array: [],obj: {_id: 16242,num: 16689,date: new Date("2018-09-06T01:02:58.685Z"),array: [[82910,new Date("2018-09-06T00:32:20.397Z"),"withdrawal","convergence",new Date("2018-09-05T21:58:52.173Z")],51165,new Date("2018-09-05T23:54:43.766Z"),[],98922,5456,"Lead Nepal",{_id: 16243,str: "transmitting back-end hard drive",date: new Date("2018-09-06T14:14:55.780Z"),obj: {}},new Date("2018-09-05T22:48:22.075Z"),{_id: 16244,str: "real-time HTTP flexibility",num: 90630,array: ["Pants azure Tasty Frozen Gloves"],obj: {_id: 16245,str: "open-source matrix Junction",num: 51937,array: [],obj: {}}},89269]}});
    },

    function(coll) {
        return coll.insert({_id: 16246,str: "Avon",num: 26179,date: new Date("2018-09-06T00:58:37.306Z"),array: [new Date("2018-09-06T01:55:55.585Z"),7504,"open architecture green",{_id: 16247,str: "Refined niches Seychelles",num: 39227,date: new Date("2018-09-05T20:14:35.224Z"),array: ["Hat sexy Nebraska"],obj: {_id: 16248,num: 17634,array: [],obj: {}}},{_id: 16249,str: "deliver Intelligent Wooden Mouse wireless",num: 43808,date: new Date("2018-09-06T12:43:44.922Z"),array: [88910]},[],"Rubber",4290,new Date("2018-09-06T02:19:10.732Z"),new Date("2018-09-06T13:14:07.604Z"),{_id: 16250,str: "whiteboard paradigms Keyboard",num: 46461,array: [{_id: 16251,str: "Avon Cambridgeshire parse",obj: {}},"Belarussian Ruble","bypass connecting",31739,"indexing"]},[],new Date("2018-09-06T09:24:10.458Z")],obj: {_id: 16252,str: "Gold static",num: 49040,date: new Date("2018-09-06T02:39:43.387Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 16253,str: "bypass Computers",num: 20917,obj: {_id: 16254,str: "copy Tasty Frozen Chair Handcrafted Soft Bike",num: 45954,date: new Date("2018-09-06T04:39:42.952Z"),array: ["Cove",new Date("2018-09-05T22:00:53.838Z"),7892,87403,"Senior Czech Republic e-markets",new Date("2018-09-06T16:41:08.775Z"),{_id: 16255,str: "calculating primary",num: 76399,array: [],obj: {}},new Date("2018-09-06T10:04:31.772Z"),{_id: 16256,date: new Date("2018-09-06T13:41:54.019Z"),array: []},61743,[["Small Granite Computer",60662]],new Date("2018-09-06T07:19:23.602Z")]}});
    },

    function(coll) {
        return coll.insert({_id: 16257,str: "Infrastructure open-source Sleek Soft Car",num: 1028,date: new Date("2018-09-06T16:53:28.689Z"),array: ["Home Loan Account Optimization","Markets",new Date("2018-09-06T16:27:37.518Z"),"Ball Home","Expanded",{_id: 16258,str: "Realigned generate Refined Metal Fish",num: 48791,date: new Date("2018-09-06T04:55:52.802Z"),array: [new Date("2018-09-06T19:17:58.530Z"),new Date("2018-09-06T07:54:16.445Z")],obj: {_id: 16259,num: 97957,date: new Date("2018-09-06T03:24:24.397Z"),array: [],obj: {}}},[],67009,78137,[new Date("2018-09-06T03:37:59.043Z"),95228,[{_id: 16260,str: "magnetic neural Sleek"},"parsing JSON"]],58380,new Date("2018-09-05T20:19:09.282Z")]});
    },

    function(coll) {
        return coll.insert({_id: 16261,str: "COM secondary Buckinghamshire",num: 58100,date: new Date("2018-09-06T16:53:52.785Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 16262,str: "reboot",num: 13886,date: new Date("2018-09-06T18:28:58.006Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 16263,str: "Rubber experiences XSS",num: 8451,date: new Date("2018-09-06T12:44:10.198Z"),array: [],obj: {_id: 16264,str: "Savings Account",num: 91651,date: new Date("2018-09-06T12:57:59.434Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 16265,str: "monetize web-enabled indigo",num: 73026,date: new Date("2018-09-05T19:57:24.552Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 16266,str: "Chicken Cote d'Ivoire architectures",num: 80756,date: new Date("2018-09-06T10:48:57.038Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 16267,str: "redundant Kiribati Forward",num: 40381,date: new Date("2018-09-06T16:40:01.380Z"),array: [[],12660,30100,new Date("2018-09-06T10:00:50.739Z"),"Usability","Refined Concrete Keyboard Usability",new Date("2018-09-06T04:07:07.885Z"),[],[],new Date("2018-09-06T03:01:19.837Z"),62526,{_id: 16268,str: "Pre-emptive XSS Reverse-engineered",num: 13246,array: [{_id: 16269,str: "Bedfordshire Metal",num: 47093,date: new Date("2018-09-06T05:43:21.427Z"),array: [5651,new Date("2018-09-06T11:41:28.468Z")],obj: {_id: 16270,str: "Hollow Licensed Agent",num: 60901,date: new Date("2018-09-06T10:24:03.281Z"),array: [{_id: 16271,str: "Borders methodology back-end",num: 63142,date: new Date("2018-09-06T09:35:11.515Z"),obj: {}}],obj: {_id: 16272,str: "monitoring orchid Gloves",date: new Date("2018-09-06T12:24:09.329Z"),array: [new Date("2018-09-05T21:57:19.053Z"),"deposit systemic"],obj: { _id: 16273 }}}}]},"e-services Buckinghamshire","Web"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 16274,str: "Berkshire violet",num: 94863,date: new Date("2018-09-05T20:10:25.080Z"),array: ["Designer blue",{_id: 16275,str: "user-facing Handmade",date: new Date("2018-09-06T09:59:22.299Z"),array: [],obj: {_id: 16276,num: 68511,array: [],obj: {}}},"SAS",new Date("2018-09-06T19:27:30.616Z"),new Date("2018-09-05T21:08:55.343Z"),5834,[new Date("2018-09-06T17:39:39.667Z"),"Jewelery architectures deposit"],50657,753,[],{_id: 16277,num: 72158,date: new Date("2018-09-06T13:53:22.769Z"),obj: {_id: 16278,str: "Configuration",num: 7023,date: new Date("2018-09-06T02:26:13.872Z"),array: [54724],obj: {}}},"functionalities strategy Club",new Date("2018-09-06T02:30:33.860Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 16279,str: "users",num: 96539,date: new Date("2018-09-06T03:25:11.046Z")});
    },

    function(coll) {
        return coll.insert({_id: 16280,str: "Tanzania",num: 18710,date: new Date("2018-09-06T19:28:54.981Z"),array: ["bypassing Islands Pike",75612,new Date("2018-09-05T23:36:45.248Z"),new Date("2018-09-06T18:22:21.269Z"),new Date("2018-09-06T17:19:46.418Z"),[],7400,"Fresh Branding",32148,"multi-byte Concrete Infrastructure",53688,new Date("2018-09-06T10:56:06.103Z")]});
    },

    function(coll) {
        return coll.insert({_id: 16281,str: "Hawaii",num: 82910,date: new Date("2018-09-06T10:09:01.442Z"),array: [new Date("2018-09-05T23:07:00.973Z"),"calculate",{_id: 16282,str: "Savings Account",num: 5828,date: new Date("2018-09-06T17:49:56.432Z"),array: []},[30701,"Underpass Personal Loan Account"],new Date("2018-09-06T11:58:24.734Z"),54453,{_id: 16283,str: "sensor Incredible Concrete Keyboard microchip",num: 46479,date: new Date("2018-09-05T22:44:57.066Z"),array: [],obj: {_id: 16284,str: "Bolivar Fuerte Refined",date: new Date("2018-09-06T08:03:14.889Z"),array: [new Date("2018-09-06T11:03:27.789Z")],obj: {_id: 16285,str: "Metal Multi-lateral",num: 8091,array: [],obj: {}}}},new Date("2018-09-05T22:44:06.381Z"),"cultivate Gloves",50181,[],[],new Date("2018-09-06T09:16:39.392Z")],obj: {_id: 16286,date: new Date("2018-09-06T07:50:36.658Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 16287,str: "UAE Dirham Function-based",num: 88518,date: new Date("2018-09-05T23:18:05.693Z"),array: [61004,"Facilitator auxiliary Mills",new Date("2018-09-06T13:05:25.770Z"),"Checking Account Cotton",[new Date("2018-09-06T07:26:53.342Z")],[17205,{_id: 16288,str: "redundant synergies interfaces",num: 28717,date: new Date("2018-09-06T07:38:57.392Z"),array: [],obj: {}},new Date("2018-09-06T00:39:47.061Z")],new Date("2018-09-05T23:47:37.314Z"),"interface Fresh navigate",50315,"Serbian Dinar",{_id: 16289,num: 20161,date: new Date("2018-09-06T02:41:06.266Z"),array: [],obj: {_id: 16290,str: "Savings Account RAM",date: new Date("2018-09-06T02:44:18.971Z"),array: [33082],obj: {_id: 16291,num: 38039,obj: {_id: 16292,str: "coherent e-business Greece",array: [],obj: {}}}}},45502]});
    },

    function(coll) {
        return coll.insert({_id: 16293,str: "Generic Reactive Mobility",num: 87207,date: new Date("2018-09-06T00:01:31.188Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 16294,str: "Reduced schemas leverage",num: 50536,date: new Date("2018-09-06T02:04:08.351Z"),array: [31653,28969,"user-facing Tactics",2686,new Date("2018-09-06T00:50:52.357Z"),[],{_id: 16295,num: 15394,date: new Date("2018-09-06T05:51:45.641Z")},"indexing haptic Implementation","Garden reciprocal"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 16296,str: "Practical Lodge",num: 19005,date: new Date("2018-09-05T21:19:34.129Z"),array: [76357,"Steel incentivize Licensed",new Date("2018-09-06T12:10:47.468Z"),[],new Date("2018-09-05T21:29:50.944Z"),52620,"middleware Unbranded Clothing","microchip Saudi Riyal backing up"],obj: {_id: 16297,str: "SSL e-business",num: 5939,date: new Date("2018-09-06T15:12:15.342Z"),array: [[],{_id: 16298,str: "Small Rubber Tuna",date: new Date("2018-09-06T05:02:32.643Z"),obj: {}},{_id: 16299,str: "Sri Lanka Rupee",num: 85734,array: [],obj: {}},1647,86010,new Date("2018-09-06T06:50:21.642Z")],obj: {_id: 16300,num: 78669,date: new Date("2018-09-05T21:08:45.770Z"),array: [new Date("2018-09-06T11:15:01.457Z")]}}});
    },

    function(coll) {
        return coll.insert({_id: 16301,str: "secondary Gorgeous Plastic Ball",num: 43260,date: new Date("2018-09-06T06:34:56.499Z"),array: [87552,new Date("2018-09-06T04:05:40.015Z"),3975,new Date("2018-09-06T19:12:35.579Z"),new Date("2018-09-06T10:02:06.455Z"),68920,"transmitting","unleash",{_id: 16302,num: 92621,date: new Date("2018-09-06T01:58:16.317Z"),array: [new Date("2018-09-06T08:59:01.355Z"),"connect Creative driver","deposit invoice",27918],obj: {_id: 16303,str: "content-based",num: 71796,array: [],obj: {}}},[],new Date("2018-09-06T10:20:40.056Z")],obj: {_id: 16304,str: "Infrastructure",date: new Date("2018-09-06T17:43:36.886Z")}});
    },

    function(coll) {
        return coll.insert({_id: 16305,str: "Afghani",num: 50629,array: [34994,15462,new Date("2018-09-06T03:10:59.274Z"),new Date("2018-09-06T10:10:58.976Z"),"Togo Fresh Yemen","invoice",{_id: 16306,str: "Refined Optional",date: new Date("2018-09-06T12:30:27.034Z"),array: [],obj: {}},39141,"Organized",{_id: 16307,num: 5384,date: new Date("2018-09-06T09:23:03.392Z"),obj: {_id: 16308,num: 39896,date: new Date("2018-09-06T00:14:32.418Z"),array: [],obj: {_id: 16309,str: "Soft Direct Berkshire"}}},98713,28829,new Date("2018-09-06T10:38:32.234Z")]});
    },

    function(coll) {
        return coll.insert({_id: 16310,str: "open-source New Israeli Sheqel",date: new Date("2018-09-06T14:20:46.949Z"),array: [83689,"generate Representative",40860,"Buckinghamshire Guarani networks","virtual real-time Investor",new Date("2018-09-06T04:44:30.177Z"),new Date("2018-09-06T04:58:37.870Z"),[75073,new Date("2018-09-06T17:18:08.270Z"),"Coordinator Sharable",{_id: 16311,str: "Sleek Buckinghamshire optical",num: 78440,date: new Date("2018-09-06T14:37:49.185Z"),array: [],obj: {_id: 16312,str: "evolve Investor",num: 42855,date: new Date("2018-09-05T22:00:51.884Z"),array: [],obj: {}}}],40349,[],new Date("2018-09-05T22:14:03.035Z")],obj: {_id: 16313,str: "override Branding",num: 53975,obj: {_id: 16314,num: 98600,date: new Date("2018-09-06T01:59:40.697Z"),array: [33508]}}});
    },

    function(coll) {
        return coll.insert({_id: 16315,str: "sky blue",num: 52207,date: new Date("2018-09-05T22:36:29.664Z"),array: ["South Carolina card",new Date("2018-09-06T07:09:52.748Z"),new Date("2018-09-06T18:18:05.915Z"),new Date("2018-09-06T13:14:07.107Z"),new Date("2018-09-06T11:31:08.644Z"),9979,{_id: 16316,num: 30874,array: [83553,{_id: 16317,str: "Licensed Steel Pizza Handcrafted Frozen Car orange",date: new Date("2018-09-06T13:19:37.132Z"),array: [],obj: {}}],obj: {_id: 16318,str: "deposit Coordinator",num: 69523,date: new Date("2018-09-06T15:36:55.204Z"),array: []}},new Date("2018-09-06T01:19:37.443Z"),"deposit Albania Marketing",98138,[],new Date("2018-09-06T18:07:58.644Z"),82023]});
    },

    function(coll) {
        return coll.insert({_id: 16319,date: new Date("2018-09-06T08:10:53.036Z"),array: [],obj: {_id: 16320,str: "cutting-edge cross-platform Global",num: 6279,date: new Date("2018-09-06T13:29:26.799Z"),array: [{_id: 16321,str: "Home olive hack",num: 56431,date: new Date("2018-09-06T00:34:04.265Z"),array: [],obj: {}},"Coordinator Frozen Cambridgeshire",4342,new Date("2018-09-06T06:21:42.389Z"),new Date("2018-09-05T20:32:54.958Z"),new Date("2018-09-06T01:19:03.518Z"),"Director Small Fresh Soap Metal",23334,new Date("2018-09-06T16:44:16.439Z"),["Fantastic Frozen Hat",{_id: 16322,str: "neural",num: 82493,date: new Date("2018-09-06T04:11:33.065Z"),array: [],obj: {}},{_id: 16323,str: "architectures",num: 21689,array: [27763,"digital"],obj: {_id: 16324,obj: {}}}]]}});
    },

    function(coll) {
        return coll.insert({_id: 16325,str: "Island",num: 39616,date: new Date("2018-09-06T14:35:21.187Z"),array: ["Specialist analyzing","benchmark Direct",31700,new Date("2018-09-06T18:07:26.648Z"),new Date("2018-09-06T18:39:36.904Z"),[],16790,[],new Date("2018-09-06T04:37:17.832Z"),584],obj: {_id: 16326,str: "virtual",num: 48876,date: new Date("2018-09-05T22:25:42.114Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 16327,str: "zero defect",num: 49756,date: new Date("2018-09-05T21:01:45.623Z"),array: [63943,new Date("2018-09-05T22:13:05.092Z"),73168,"scalable port",{_id: 16328,str: "approach 5th generation",num: 53293,date: new Date("2018-09-05T23:44:04.810Z"),array: [],obj: {}},[29501],{_id: 16329,num: 22995,date: new Date("2018-09-05T23:19:44.860Z"),array: [],obj: {}},"JSON",72076,new Date("2018-09-06T14:17:27.461Z"),new Date("2018-09-06T14:15:58.788Z"),[],"Marketing","orchid Plastic",69562],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 16330,num: 30954,date: new Date("2018-09-06T02:46:31.048Z"),array: [82264,"Gorgeous bluetooth",[32263,"Handcrafted synergy bypass"],52616,{_id: 16331,str: "alliance Granite",num: 15605,date: new Date("2018-09-05T22:21:25.690Z"),array: [],obj: {_id: 16332,str: "payment",num: 12351,date: new Date("2018-09-06T15:31:30.207Z"),obj: {}}},new Date("2018-09-06T15:07:10.389Z"),new Date("2018-09-06T00:44:58.564Z"),new Date("2018-09-06T12:51:24.970Z"),new Date("2018-09-06T18:23:11.547Z"),"Morocco Rwanda",{_id: 16333,str: "Cape Verde Escudo",array: [86206,42775]},"Strategist standardization"],obj: {_id: 16334,date: new Date("2018-09-06T02:01:58.036Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 16335,str: "Libyan Arab Jamahiriya Indiana Cotton",num: 32276,date: new Date("2018-09-06T15:14:49.835Z"),array: [71738,"Bahraini Dinar rich invoice",new Date("2018-09-06T11:39:45.932Z"),[],"SDD Norwegian Krone","Fantastic Cotton Salad",13297,1824,{_id: 16336,str: "Liechtenstein service-desk Concrete",num: 64587,date: new Date("2018-09-05T23:03:58.866Z"),obj: {}},new Date("2018-09-05T22:47:37.868Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 16337,num: 12572,array: ["tan Shirt Intelligent Rubber Towels",new Date("2018-09-05T21:40:55.492Z"),"Directives Cotton",30240,{_id: 16338,str: "Towels",date: new Date("2018-09-05T22:51:23.915Z"),array: [],obj: {_id: 16339,str: "functionalities",num: 23991,date: new Date("2018-09-06T12:45:07.847Z"),obj: {_id: 16340,str: "Investment Account Applications HTTP",num: 67323,date: new Date("2018-09-06T05:52:59.834Z"),array: [],obj: {}}}},90160,new Date("2018-09-05T20:38:01.073Z"),67865,57622],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 16341,str: "Persistent Missouri calculating",num: 61664,date: new Date("2018-09-06T07:57:27.791Z"),array: ["calculating","Burundi Franc Colombian Peso Unidad de Valor Real Personal Loan Account",38371,{_id: 16342,str: "Investor Architect Money Market Account",num: 12279,array: [new Date("2018-09-06T16:01:50.801Z")],obj: {_id: 16343,num: 36571,date: new Date("2018-09-06T04:38:31.501Z"),array: []}},new Date("2018-09-06T07:13:07.873Z"),new Date("2018-09-06T06:00:28.814Z"),"Wooden front-end",33680,[[],"deposit",new Date("2018-09-05T22:29:02.731Z")],61009,32997,{_id: 16344,str: "Berkshire French Southern Territories",date: new Date("2018-09-05T22:00:00.112Z"),obj: {_id: 16345,str: "Lek bottom-line",num: 10019,date: new Date("2018-09-06T13:50:11.517Z"),obj: {_id: 16346,str: "lime",num: 67509,obj: {}}}},{_id: 16347,num: 16418,array: [],obj: {}}]});
    },

    function(coll) {
        return coll.insert({_id: 16348,str: "Beauty Rubber",num: 26350,date: new Date("2018-09-06T03:40:30.484Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 16349,str: "Borders Tasty",date: new Date("2018-09-06T12:59:22.200Z"),array: [27485,"Cambridgeshire capacitor dedicated",new Date("2018-09-06T03:42:00.981Z"),"RAM deposit Tasty Frozen Shirt",{_id: 16350,str: "Lithuanian Litas Security",num: 42385,date: new Date("2018-09-06T07:50:21.810Z"),array: [["panel hardware Fort",274],new Date("2018-09-05T20:34:25.907Z")],obj: {}},[],"generating virtual",[],{_id: 16351,str: "USB Cotton",num: 80742,date: new Date("2018-09-05T20:01:26.686Z")},new Date("2018-09-06T00:43:22.053Z"),24446,"Money Market Account Ergonomic copying"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 16352,str: "Executive",num: 53160,date: new Date("2018-09-06T15:07:19.268Z"),array: [],obj: {_id: 16353,str: "white Tasty Frozen Computer Argentina",num: 87366,date: new Date("2018-09-05T21:43:27.333Z"),array: [42257,"Money Market Account Synergistic Uruguay",49256,new Date("2018-09-06T15:19:55.819Z"),new Date("2018-09-06T07:35:17.639Z"),new Date("2018-09-05T23:47:44.948Z"),56900,new Date("2018-09-05T22:31:18.108Z"),["intuitive white"],"systems content-based Handmade Concrete Chair",{_id: 16354,num: 29236,date: new Date("2018-09-06T19:30:51.338Z"),array: [],obj: {}},"needs-based"],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 16355,str: "Chair",num: 25771,obj: {_id: 16356,date: new Date("2018-09-06T01:52:16.699Z"),array: [58074,63878,54423,"SQL virtual Unbranded Soft Chicken","Refined Specialist Wooden",{_id: 16357,str: "synthesize",num: 62735,date: new Date("2018-09-06T02:36:25.288Z"),array: [],obj: {_id: 16358,str: "Oklahoma Future deliverables",num: 87805,date: new Date("2018-09-06T08:04:07.502Z"),array: [3580,{_id: 16359,str: "Kentucky Frozen Computers"}]}},new Date("2018-09-06T05:28:23.059Z"),new Date("2018-09-06T03:26:31.342Z"),new Date("2018-09-05T22:20:03.374Z"),"connecting",new Date("2018-09-06T03:53:54.737Z"),90922],obj: {_id: 16360,str: "systemic virtual",num: 22862,date: new Date("2018-09-06T03:09:22.021Z"),array: [],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 16361,str: "Computers Causeway Saint Martin",num: 10553,date: new Date("2018-09-06T08:43:31.728Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 16362,str: "Practical",num: 88675,date: new Date("2018-09-06T19:34:03.157Z"),array: [],obj: {_id: 16363,str: "deposit Triple-buffered project",num: 80921,date: new Date("2018-09-05T23:05:52.693Z"),array: ["Virtual Senior e-enable",{_id: 16364,num: 20858,date: new Date("2018-09-06T02:03:22.319Z"),array: [86898,[],84599,"niches",new Date("2018-09-06T16:57:23.883Z"),new Date("2018-09-06T01:39:17.506Z")],obj: {_id: 16365,str: "enhance",date: new Date("2018-09-06T13:47:11.085Z"),array: ["violet Iceland Krona"],obj: {_id: 16366,str: "transition Operations",num: 70225,array: ["optical deposit",83130],obj: {}}}},new Date("2018-09-06T05:08:02.007Z"),["parsing"],{_id: 16367,obj: {}},4735,{_id: 16368,str: "Intelligent Wooden Bike",num: 26935,date: new Date("2018-09-06T06:24:05.370Z"),array: []},{_id: 16369,str: "Representative",num: 903},87775]}});
    },

    function(coll) {
        return coll.insert({_id: 16370,str: "Incredible Refined Frozen Cheese Borders",num: 64287,date: new Date("2018-09-05T21:54:36.951Z"),array: [new Date("2018-09-06T19:27:03.994Z"),{_id: 16371,str: "Oklahoma",num: 25852,date: new Date("2018-09-06T07:12:20.738Z"),array: [],obj: {_id: 16372,num: 2926,date: new Date("2018-09-06T05:18:45.878Z"),obj: {}}},"generating",6072,"Guarani Handmade Granite Ball",38584,37212,"next generation Avon web-enabled",["Mongolia Computer",new Date("2018-09-06T19:46:57.097Z"),new Date("2018-09-06T16:22:32.497Z"),{_id: 16373,str: "transmitting",num: 17141,date: new Date("2018-09-06T04:26:11.528Z"),array: []},{_id: 16374,num: 82969,date: new Date("2018-09-06T01:53:27.024Z"),array: [],obj: {}}]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 16375,str: "Massachusetts",num: 9796,date: new Date("2018-09-05T23:25:53.103Z"),array: [new Date("2018-09-06T08:30:56.582Z"),65262,60204,new Date("2018-09-06T17:18:39.259Z"),"Singapore Dollar client-driven",70611,19635],obj: {_id: 16376,str: "parsing Nakfa Pre-emptive",num: 36286}});
    },

    function(coll) {
        return coll.insert({_id: 16377,str: "Grocery",num: 22981,date: new Date("2018-09-06T12:19:59.396Z"),obj: {_id: 16378,str: "generate connect transmitting",num: 60841,date: new Date("2018-09-05T20:30:49.713Z"),array: [new Date("2018-09-06T15:35:58.334Z"),"orchid",79553,new Date("2018-09-06T01:07:03.199Z"),"Coordinator",new Date("2018-09-06T01:34:04.527Z"),{_id: 16379,date: new Date("2018-09-05T21:28:13.644Z"),array: ["Infrastructure"],obj: {_id: 16380,str: "Small Harbor",num: 9815,array: []}},"Front-line",43776,new Date("2018-09-06T02:15:22.408Z"),30558,9744]}});
    },

    function(coll) {
        return coll.insert({_id: 16381,str: "Lead Pizza Shoes",num: 33751,date: new Date("2018-09-06T11:01:58.671Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 16382,str: "Washington pink",num: 23509,date: new Date("2018-09-05T21:29:04.810Z"),array: ["Berkshire microchip initiatives",new Date("2018-09-06T19:34:02.758Z"),new Date("2018-09-06T15:12:39.523Z"),[],"Sri Lanka Rupee",[65429,63244,39749,40582],new Date("2018-09-06T18:15:13.718Z"),{_id: 16383,str: "deposit panel backing up",num: 98871,date: new Date("2018-09-06T07:17:45.861Z"),array: [],obj: {}},"Minnesota"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 16384,str: "red Holy See (Vatican City State)",num: 22065,date: new Date("2018-09-06T02:37:02.528Z"),array: [new Date("2018-09-06T19:45:08.594Z"),"Grenada","Credit Card Account Chair",new Date("2018-09-06T17:14:37.274Z"),new Date("2018-09-06T14:58:20.117Z"),79755,17899,new Date("2018-09-06T06:24:29.371Z"),[],[],{_id: 16385,str: "ROI multi-byte",num: 57472,date: new Date("2018-09-06T05:10:54.078Z"),array: [14883,new Date("2018-09-06T11:40:15.019Z"),"Savings Account silver"],obj: {_id: 16386,str: "deposit",num: 13768,date: new Date("2018-09-06T10:09:56.069Z")}}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 16387,str: "Customer index",num: 4423,date: new Date("2018-09-06T09:46:31.613Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 16388,str: "unleash Chicken throughput",num: 28565,date: new Date("2018-09-06T01:12:24.281Z"),array: [76945,52533,{_id: 16389,str: "Unbranded deliverables Sports",num: 24477,date: new Date("2018-09-06T06:19:23.082Z"),obj: {}},20947,new Date("2018-09-06T01:31:47.965Z"),"Minnesota modular Unbranded",["Computer deposit card",new Date("2018-09-05T23:43:55.028Z"),"open-source Ridge eyeballs"],"e-services invoice",new Date("2018-09-05T21:37:02.514Z"),[],new Date("2018-09-06T01:32:55.194Z")],obj: {_id: 16390,str: "Guyana experiences scalable",array: [],obj: {_id: 16391,num: 95619,date: new Date("2018-09-06T11:56:05.326Z"),array: []}}});
    },

    function(coll) {
        return coll.insert({_id: 16392,str: "disintermediate white Future",num: 27777,date: new Date("2018-09-06T18:29:15.814Z"),array: [61278,"Canadian Dollar","synthesize",new Date("2018-09-06T11:29:33.017Z"),[62817,"online transmitting circuit"],new Date("2018-09-06T19:49:19.664Z"),new Date("2018-09-05T22:39:58.175Z"),7318,[],{_id: 16393,str: "Steel",num: 14143,date: new Date("2018-09-06T12:58:19.794Z"),obj: {}}],obj: {_id: 16394,num: 61829,date: new Date("2018-09-06T12:19:04.886Z"),array: [57241,352]}});
    },

    function(coll) {
        return coll.insert({_id: 16395,str: "Chair",num: 87577,date: new Date("2018-09-05T20:26:13.611Z"),array: [new Date("2018-09-06T06:17:48.043Z"),"blue Yen Danish Krone",44830,"Yemen Extensions",[],new Date("2018-09-06T04:23:02.007Z"),new Date("2018-09-06T04:09:23.643Z"),12710,"Frozen bypassing",51525],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 16396,str: "backing up Concrete Frozen",num: 31156,date: new Date("2018-09-05T23:29:53.641Z"),array: [new Date("2018-09-06T06:14:48.353Z"),"Shoals Architect","optical B2B conglomeration",[[],new Date("2018-09-06T18:38:02.083Z"),15833],86313,{_id: 16397,str: "Bedfordshire",num: 15297,date: new Date("2018-09-06T09:01:31.500Z"),array: [],obj: {_id: 16398,str: "Assistant best-of-breed redefine",num: 38822,date: new Date("2018-09-06T01:15:54.181Z"),array: [],obj: {}}},"Sausages",75532,{_id: 16399,num: 57914,date: new Date("2018-09-06T13:53:47.046Z"),obj: {}},{_id: 16400,str: "iterate British Indian Ocean Territory (Chagos Archipelago) holistic",date: new Date("2018-09-06T14:52:06.531Z"),array: []},{_id: 16401,array: [87615,"Director Small back-end"],obj: {}}]});
    },

    function(coll) {
        return coll.insert({_id: 16402,str: "Towels Granite Total",num: 75298,date: new Date("2018-09-06T13:24:20.067Z"),array: [new Date("2018-09-06T17:41:23.691Z"),59928,new Date("2018-09-06T01:50:58.483Z"),"Savings Account",7281,new Date("2018-09-06T11:26:55.272Z"),"Reverse-engineered mobile stable",{_id: 16403,str: "needs-based",date: new Date("2018-09-06T13:55:54.341Z"),array: [],obj: {}},"Gorgeous Borders"],obj: {_id: 16404,str: "Paradigm payment",num: 63238,date: new Date("2018-09-05T19:58:57.175Z"),array: [[],39686]}});
    },

    function(coll) {
        return coll.insert({_id: 16405,str: "Cotton THX Officer",num: 33478,date: new Date("2018-09-06T08:22:21.944Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 16406,str: "copy",num: 29038,date: new Date("2018-09-06T13:59:56.051Z"),obj: {_id: 16407,num: 93663,date: new Date("2018-09-06T17:27:15.223Z"),array: ["Paradigm",new Date("2018-09-06T11:58:27.460Z"),13814,"Kansas",new Date("2018-09-06T09:58:36.891Z"),{_id: 16408,str: "Small",num: 35348,date: new Date("2018-09-06T08:09:13.479Z"),obj: {}},[[],new Date("2018-09-06T10:37:27.914Z"),61585],new Date("2018-09-06T09:45:18.900Z"),"Tactics incubate"],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 16409,str: "back-end calculating",num: 97048,date: new Date("2018-09-06T04:39:35.777Z"),array: [],obj: {_id: 16410,str: "Solutions compressing",num: 48434}});
    },

    function(coll) {
        return coll.insert({_id: 16411,str: "infrastructures Facilitator",num: 95377,date: new Date("2018-09-06T04:21:23.382Z"),array: [[],new Date("2018-09-06T05:45:41.654Z"),{_id: 16412,num: 54979,date: new Date("2018-09-06T14:08:05.611Z"),array: [18615,"Architect",18728],obj: {_id: 16413,num: 54716,date: new Date("2018-09-06T10:49:16.947Z"),obj: {}}},5422,"Handcrafted Rubber Soap Global",[],new Date("2018-09-06T07:36:10.169Z"),"Northern Mariana Islands back-end AGP",new Date("2018-09-06T17:54:46.804Z"),{_id: 16414,str: "payment",num: 4781,array: [[]],obj: {_id: 16415,date: new Date("2018-09-06T15:08:32.347Z"),array: [new Date("2018-09-06T01:32:07.706Z"),99911,81616,new Date("2018-09-05T20:49:16.244Z")],obj: {_id: 16416,str: "Intranet Jersey"}}}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 16417,str: "recontextualize Shoes Intelligent Concrete Cheese",num: 16448,date: new Date("2018-09-06T19:19:31.015Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 16418,str: "Cambridgeshire Falkland Islands (Malvinas)",num: 91895,date: new Date("2018-09-06T09:02:15.927Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 16419,str: "Designer multi-byte",num: 82916,date: new Date("2018-09-06T16:33:14.207Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 16420,str: "indexing lavender",num: 95868,date: new Date("2018-09-05T22:23:19.816Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 16421,str: "deposit Oklahoma violet",num: 62901,date: new Date("2018-09-06T18:43:41.648Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 16422,str: "parse Ireland help-desk",num: 76211,date: new Date("2018-09-06T14:01:06.951Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 16423,str: "Principal",num: 94453,date: new Date("2018-09-06T09:36:03.969Z"),array: [],obj: {_id: 16424,str: "Rest",num: 33189,array: ["Handmade Soft Bacon",63001,new Date("2018-09-06T01:54:38.326Z"),{_id: 16425,str: "Response Orchestrator ADP",date: new Date("2018-09-06T08:32:06.281Z"),obj: {}},"Montenegro indexing killer",{_id: 16426,str: "Synchronised",num: 18191,array: [],obj: {}},new Date("2018-09-06T17:27:21.336Z"),69146,{_id: 16427,num: 80039,array: [[12190]]},new Date("2018-09-06T09:20:14.322Z"),97688,"Buckinghamshire calculating Mountains",57837],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 16428,num: 51510,date: new Date("2018-09-06T08:53:35.078Z"),array: ["Grocery Auto Loan Account","Chair","transmit Chips Salad",5918,new Date("2018-09-06T18:59:01.672Z"),new Date("2018-09-06T07:13:37.255Z"),new Date("2018-09-06T13:49:23.497Z"),48749,{_id: 16429,str: "deliver green",num: 23937,date: new Date("2018-09-06T16:37:43.801Z"),array: [],obj: {}},["Music payment",64880],new Date("2018-09-06T03:53:50.846Z"),[28684,{_id: 16430,str: "Health Baby Regional",num: 21090,date: new Date("2018-09-06T03:05:32.496Z"),array: [],obj: {_id: 16431,str: "Bike white",array: [],obj: {_id: 16432,str: "Bedfordshire",date: new Date("2018-09-06T04:25:37.190Z"),obj: {_id: 16433,str: "supply-chains Shoes Moldovan Leu",num: 55593,date: new Date("2018-09-06T11:54:54.235Z"),array: [],obj: {_id: 16434,num: 43612,array: [[99232,new Date("2018-09-06T17:42:04.460Z"),43776,"transition Soft empower",{_id: 16435,num: 22451}]]}}}}}],"Cove reinvent"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 16436,str: "transparent haptic",num: 49835,date: new Date("2018-09-06T10:53:04.102Z"),array: [new Date("2018-09-06T18:11:53.716Z"),{_id: 16437,str: "salmon",num: 15432,date: new Date("2018-09-06T02:16:17.363Z"),array: [],obj: {_id: 16438,str: "driver",num: 57179,array: [new Date("2018-09-06T00:12:41.405Z"),74152,"Uzbekistan Sum Palladium",new Date("2018-09-06T18:22:21.210Z")],obj: {}}},71933,"monitor","Accountability Intelligent Wooden Chair",[],14998,new Date("2018-09-06T03:22:13.956Z"),new Date("2018-09-06T14:59:47.903Z"),"transmitter",60362]});
    },

    function(coll) {
        return coll.insert({_id: 16439,str: "Savings Account Roads SQL",num: 99642,date: new Date("2018-09-06T08:21:31.270Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 16440,str: "TCP Security Cambridgeshire",num: 16382,date: new Date("2018-09-06T05:34:17.667Z"),array: [],obj: {_id: 16441,str: "Rubber deposit Canadian Dollar",num: 25009,date: new Date("2018-09-05T20:32:30.465Z"),array: [new Date("2018-09-06T01:22:55.217Z"),"Investment Account","Chips Virtual",81312,new Date("2018-09-06T19:50:09.691Z"),[[],{_id: 16442,str: "Uzbekistan",num: 54347,date: new Date("2018-09-05T22:57:01.887Z"),array: [73891,11259],obj: {}},"Strategist Guarani Nauru",92464],{_id: 16443,str: "Virginia Buckinghamshire",num: 59574,array: [],obj: {_id: 16444,str: "Unbranded evolve Investment Account",num: 42203,date: new Date("2018-09-05T21:36:00.530Z"),obj: {}}},{_id: 16445,date: new Date("2018-09-06T14:18:37.482Z"),array: [55162,"PCI SQL Steel",new Date("2018-09-06T07:15:15.267Z"),[],14758],obj: {}}]}});
    },

    function(coll) {
        return coll.insert({_id: 16446,str: "1080p Trinidad and Tobago Dollar niches",num: 40765,date: new Date("2018-09-06T17:42:03.102Z"),array: [],obj: {_id: 16447,num: 68338,date: new Date("2018-09-06T09:27:46.620Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 16448,str: "Legacy Intranet dynamic",num: 34482,date: new Date("2018-09-05T21:15:07.617Z"),array: [29854,"reinvent user-centric",24851,"invoice Home Loan Account Money Market Account",new Date("2018-09-06T02:38:27.051Z"),{_id: 16449,str: "Incredible Plastic Computer Ferry",num: 88600,date: new Date("2018-09-06T09:05:37.229Z"),array: [],obj: {}},new Date("2018-09-06T04:29:40.075Z"),new Date("2018-09-06T15:14:03.623Z"),72312,[],new Date("2018-09-06T12:06:18.990Z"),"Walk",[]],obj: {_id: 16450,str: "Tasty Cotton Computer",obj: {_id: 16451,str: "invoice backing up deposit",num: 90718,date: new Date("2018-09-06T08:42:50.289Z"),array: [{_id: 16452,date: new Date("2018-09-06T18:24:01.029Z"),array: ["Gorgeous synthesize"]},"invoice Synergized Senegal"],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 16453,str: "withdrawal",num: 41185,date: new Date("2018-09-06T15:13:31.680Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 16454,str: "Fantastic user-centric",num: 84385,date: new Date("2018-09-06T16:51:34.886Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 16455,str: "orange Bike",num: 15956,date: new Date("2018-09-06T13:25:59.134Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 16456,str: "scale",num: 62705,date: new Date("2018-09-05T21:25:26.678Z"),array: [],obj: {_id: 16457,str: "COM Regional",num: 55748,date: new Date("2018-09-06T12:26:30.140Z"),array: [39433,{_id: 16458,str: "Surinam Dollar",date: new Date("2018-09-06T06:56:55.046Z"),array: [],obj: {_id: 16459,num: 3397,date: new Date("2018-09-06T10:49:24.072Z"),array: ["Customer Guernsey Borders",new Date("2018-09-06T04:46:09.133Z"),[new Date("2018-09-06T18:25:51.533Z"),new Date("2018-09-05T21:53:32.561Z"),1153],18266,"Clothing Cambridgeshire programming"],obj: {}}},new Date("2018-09-06T04:42:35.356Z"),"Coordinator Money Market Account Turnpike",35092,"Pennsylvania","Incredible",{_id: 16460,str: "Unbranded Concrete Gloves invoice Peso Uruguayo Uruguay Peso en Unidades Indexadas",num: 61071,array: []},{_id: 16461,obj: {}}]}});
    },

    function(coll) {
        return coll.insert({_id: 16462,str: "Cambridgeshire",num: 62759,obj: {_id: 16463,num: 90822,date: new Date("2018-09-06T03:18:50.884Z"),array: [],obj: {_id: 16464,str: "Guatemala",num: 507,date: new Date("2018-09-06T18:18:15.156Z"),array: ["Corporate secured line",new Date("2018-09-06T02:09:10.225Z"),new Date("2018-09-06T06:08:55.747Z"),30204,57129,26667,new Date("2018-09-06T01:44:51.415Z"),"Berkshire",{_id: 16465,str: "Lock Metal impactful",num: 39440,array: ["Persistent Saint Martin Health"],obj: {}},[],new Date("2018-09-06T01:40:42.201Z"),42903,{_id: 16466,str: "Home Loan Account metrics Technician",date: new Date("2018-09-06T01:23:21.573Z"),array: [97955,"program French Polynesia","Berkshire"],obj: {}}],obj: {_id: 16467,str: "Auto Loan Account Markets",date: new Date("2018-09-06T13:04:07.973Z")}}}});
    },

    function(coll) {
        return coll.insert({_id: 16468,str: "Well Sports PNG",date: new Date("2018-09-05T23:00:47.815Z"),obj: {_id: 16469,str: "International Borders Up-sized",num: 49412,date: new Date("2018-09-05T22:52:44.698Z"),array: [new Date("2018-09-05T20:24:21.245Z"),18731,new Date("2018-09-06T12:31:20.557Z"),new Date("2018-09-06T01:49:03.219Z"),"Forks orchid deposit","Intelligent benchmark","GB",[[],24231,89508,{_id: 16470,str: "Kids",num: 38932,date: new Date("2018-09-05T23:37:19.439Z"),array: [],obj: {}}],new Date("2018-09-05T19:57:55.509Z")]}});
    },

    function(coll) {
        return coll.insert({_id: 16471,str: "User-friendly Auto Loan Account",num: 69711,date: new Date("2018-09-06T05:17:10.518Z"),array: [new Date("2018-09-06T14:38:34.850Z"),"Generic Concrete Computer",27649,{_id: 16472,str: "Zimbabwe Dollar",obj: {_id: 16473,str: "Front-line e-services",num: 9370,date: new Date("2018-09-06T02:03:40.298Z"),array: [33719],obj: {}}},19669,84604,new Date("2018-09-06T05:23:16.794Z"),"Ergonomic Refined Sleek Plastic Bike",new Date("2018-09-06T08:09:08.445Z"),"Streets",new Date("2018-09-06T14:25:37.251Z")],obj: {_id: 16474,num: 829,date: new Date("2018-09-06T09:24:10.124Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 16475,str: "bandwidth Ergonomic Soft Shirt",num: 32658,date: new Date("2018-09-06T19:02:52.027Z"),array: [],obj: {_id: 16476,str: "white",num: 80488,date: new Date("2018-09-06T11:14:27.102Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 16477,str: "magenta client-server",num: 14021,date: new Date("2018-09-06T16:18:13.992Z"),array: ["GB",78361,new Date("2018-09-06T14:19:31.508Z"),"object-oriented deploy",50047,"Falkland Islands (Malvinas) Slovakia (Slovak Republic) streamline",{_id: 16478,str: "Delaware Pike optimize",date: new Date("2018-09-06T14:28:22.777Z"),obj: {_id: 16479,num: 31376,date: new Date("2018-09-06T00:41:24.087Z"),array: [],obj: {}}},new Date("2018-09-06T18:35:07.181Z"),{_id: 16480,str: "HTTP Wooden actuating",num: 67713,obj: {_id: 16481,str: "payment",date: new Date("2018-09-05T22:47:15.560Z"),array: [[]],obj: {}}},["Avon Public-key e-markets"],new Date("2018-09-06T13:35:05.782Z"),"Money Market Account Streamlined Massachusetts"]});
    },

    function(coll) {
        return coll.insert({_id: 16482,num: 70133,date: new Date("2018-09-06T04:20:48.353Z"),array: [],obj: {_id: 16483,str: "Avon Fish Maryland",num: 67902,date: new Date("2018-09-05T23:34:00.238Z"),array: [],obj: {_id: 16484,str: "Borders Seamless",num: 87623,date: new Date("2018-09-06T10:23:25.811Z"),array: ["gold Beauty","Alaska B2C matrix",86924,"client-server",new Date("2018-09-06T06:01:06.085Z"),{_id: 16485,str: "bypassing",array: [],obj: {}},new Date("2018-09-06T06:41:25.216Z"),23927,new Date("2018-09-06T16:50:56.378Z"),15300,"Mali",{_id: 16486,str: "Investment Account Awesome Frozen Table reinvent",num: 95283,array: [["indexing teal Direct",new Date("2018-09-06T17:13:59.289Z")],{_id: 16487,str: "Granite",num: 50614,date: new Date("2018-09-06T01:16:54.208Z")}],obj: {}}],obj: {_id: 16488,num: 91258}}}});
    },

    function(coll) {
        return coll.insert({_id: 16489,str: "Corporate",num: 41902,date: new Date("2018-09-06T05:43:23.317Z"),array: [59148,new Date("2018-09-05T23:09:33.836Z"),new Date("2018-09-06T10:58:42.403Z"),61660,"Oklahoma Cambridgeshire","Avon Credit Card Account",new Date("2018-09-06T18:47:54.758Z"),[],87794,{_id: 16490,date: new Date("2018-09-05T23:51:11.317Z"),array: [{_id: 16491,str: "monitor",num: 48901,date: new Date("2018-09-05T21:20:44.579Z"),obj: {}},[]]},20356,{_id: 16492,str: "Pre-emptive Factors",num: 39800,array: [],obj: {_id: 16493,str: "Singapore",date: new Date("2018-09-06T03:00:53.588Z"),obj: {}}}],obj: {_id: 16494,str: "1080p Savings Account Applications",num: 15264,date: new Date("2018-09-05T23:06:46.344Z"),array: ["Chair",new Date("2018-09-06T19:09:36.604Z"),new Date("2018-09-06T15:22:56.246Z"),98943,"Licensed Books"],obj: {_id: 16495,num: 84611,date: new Date("2018-09-06T02:00:16.735Z"),array: []}}});
    },

    function(coll) {
        return coll.insert({_id: 16496,num: 6501,date: new Date("2018-09-06T11:05:52.357Z"),obj: {_id: 16497,str: "Personal Loan Account models mission-critical",date: new Date("2018-09-06T10:16:09.410Z"),array: [new Date("2018-09-06T05:59:41.184Z"),"conglomeration Investment Account",new Date("2018-09-06T07:31:55.689Z"),74951,"Rue pixel",19205,"Senior","systems Bedfordshire",82135,new Date("2018-09-06T11:27:01.100Z"),new Date("2018-09-06T14:44:21.686Z")]}});
    },

    function(coll) {
        return coll.insert({_id: 16498,str: "calculate Facilitator Licensed Wooden Shoes",num: 42073,date: new Date("2018-09-06T13:05:26.293Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 16499,str: "Handcrafted neural-net",num: 74068,date: new Date("2018-09-06T04:24:14.973Z"),array: [6033,{_id: 16500,num: 30837,array: [],obj: {_id: 16501,str: "neural-net",num: 99273,date: new Date("2018-09-06T09:01:42.646Z"),array: [new Date("2018-09-05T23:45:09.615Z"),{_id: 16502,str: "District Money Market Account",num: 92802,date: new Date("2018-09-06T02:40:47.349Z"),array: [new Date("2018-09-06T16:23:01.187Z")]}]}},"quantify foreground","action-items Jewelery",[31567],"Global",new Date("2018-09-06T15:44:35.733Z"),{_id: 16503,str: "Prairie",date: new Date("2018-09-06T07:18:56.897Z"),obj: {_id: 16504,num: 29382,array: ["back up",new Date("2018-09-06T16:33:02.087Z"),"generating",[]],obj: {_id: 16505,str: "Avon Aruba",num: 56452,date: new Date("2018-09-05T20:37:23.193Z"),array: [60182,18698],obj: {}}}},new Date("2018-09-06T15:46:26.691Z"),{_id: 16506,str: "Dynamic Toys Yemeni Rial",date: new Date("2018-09-06T13:28:10.202Z"),obj: {}},"hacking",[]],obj: {_id: 16507,date: new Date("2018-09-06T04:23:30.254Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 16508,str: "Tasty Rubber Chicken generating Berkshire",num: 89525,date: new Date("2018-09-05T21:55:08.248Z"),array: ["Plastic Indonesia seize",[],[],new Date("2018-09-06T09:09:01.957Z"),{_id: 16509,str: "bus Light dynamic",num: 66240,array: [33191],obj: {}},"Maine Fresh methodologies",764,"Garden",69980,new Date("2018-09-06T09:15:36.212Z"),"Metal",new Date("2018-09-06T18:43:35.581Z"),new Date("2018-09-06T10:43:42.676Z")]});
    },

    function(coll) {
        return coll.insert({_id: 16510,num: 64189,date: new Date("2018-09-06T05:58:01.866Z"),array: [],obj: {_id: 16511,str: "Generic Operations Regional",num: 96220,date: new Date("2018-09-06T04:14:59.288Z"),array: [new Date("2018-09-06T18:40:26.978Z"),["Handcrafted",35208],new Date("2018-09-06T05:10:30.719Z"),new Date("2018-09-06T02:56:27.606Z"),"navigating Books","Personal Loan Account Rubber",80782,[],{_id: 16512,str: "workforce optical Quality",num: 26297,array: [],obj: {}},{ _id: 16513 },"Profit-focused paradigm system engine"],obj: {_id: 16514,str: "navigate Towels Parkway",date: new Date("2018-09-06T12:08:32.511Z"),array: [{_id: 16515,date: new Date("2018-09-06T03:35:25.256Z"),obj: {}},22915,new Date("2018-09-06T10:11:15.241Z")],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 16516,str: "Tasty Australian Dollar sensor",num: 318,date: new Date("2018-09-06T00:20:41.457Z"),array: [14086,4032,"Pula Data Clothing",[],new Date("2018-09-06T13:47:23.366Z"),"deposit protocol Borders",{_id: 16517,str: "Home Loan Account infrastructures",num: 50119,date: new Date("2018-09-06T10:58:40.884Z"),array: [43225,new Date("2018-09-05T20:22:33.372Z"),"override SQL",87699,new Date("2018-09-06T07:42:02.434Z"),[{_id: 16518,str: "Concrete",array: [],obj: {}}]],obj: {_id: 16519,num: 4605,date: new Date("2018-09-05T22:49:10.355Z"),obj: {}}},new Date("2018-09-05T20:51:49.447Z"),[6411,new Date("2018-09-06T17:44:07.569Z")]]});
    },

    function(coll) {
        return coll.insert({_id: 16520,str: "Wooden",num: 73320,date: new Date("2018-09-06T02:23:51.018Z"),array: [],obj: {_id: 16521,str: "Tactics Vision-oriented",num: 97731,obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 16522,str: "solutions Gloves District",num: 91192,date: new Date("2018-09-06T02:38:24.377Z"),array: [],obj: {_id: 16523,str: "Unbranded",num: 69603,array: [24582,"auxiliary Small Cotton Ball Outdoors",97526,"Accounts Sleek copying",new Date("2018-09-06T15:03:52.406Z"),new Date("2018-09-06T04:29:59.846Z"),new Date("2018-09-06T02:35:16.354Z"),"hard drive Incredible Frozen Mouse",{_id: 16524,str: "grey Malagasy Ariary",num: 52982,date: new Date("2018-09-06T18:51:05.850Z"),array: [],obj: {_id: 16525,date: new Date("2018-09-06T00:17:29.155Z"),array: [],obj: {}}},[41913,{_id: 16526,str: "Expanded relationships",date: new Date("2018-09-06T18:31:59.831Z"),array: [53767]},"Health Rand Loti",new Date("2018-09-05T23:51:23.976Z"),[new Date("2018-09-06T08:10:36.192Z")]]],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 16527,str: "Rustic next-generation",num: 97641,date: new Date("2018-09-05T23:34:26.872Z"),array: [74103,93826,new Date("2018-09-06T18:25:42.752Z"),"Graphical User Interface",{_id: 16528,str: "Bedfordshire",num: 44621,date: new Date("2018-09-06T13:49:47.803Z"),array: [],obj: {}},new Date("2018-09-06T05:55:52.683Z"),[[{_id: 16529,str: "neural Games Kina",date: new Date("2018-09-06T18:16:31.574Z"),obj: {}},74822,"olive Direct","Grenada","zero administration Coves pink"],{_id: 16530,str: "Islands withdrawal Ergonomic Concrete Fish",num: 14515,date: new Date("2018-09-05T20:40:03.306Z")},"connect Auto Loan Account"],"Credit Card Account Product",[]],obj: {_id: 16531,num: 86972,array: [31851],obj: {_id: 16532,str: "recontextualize",num: 97353,array: [83617],obj: {_id: 16533,str: "lavender Concrete primary",array: [],obj: {}}}}});
    },

    function(coll) {
        return coll.insert({_id: 16534,str: "Checking Account",num: 87359,date: new Date("2018-09-06T16:57:10.389Z"),array: [],obj: {_id: 16535,num: 29399,date: new Date("2018-09-05T20:12:02.727Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 16536,str: "magenta",num: 62876,date: new Date("2018-09-06T16:06:30.585Z"),array: [],obj: {_id: 16537,str: "Chief Licensed Steel Computer",num: 11116,date: new Date("2018-09-06T02:26:41.200Z"),array: [26088,new Date("2018-09-05T20:53:34.531Z"),65793,"Ball",new Date("2018-09-06T15:44:28.690Z"),66817,"panel Dynamic","Keyboard Central Cross-platform",[9942,72057,new Date("2018-09-06T03:21:44.505Z"),"Granite Berkshire"],{_id: 16538,str: "Checking Account",num: 9211,date: new Date("2018-09-05T23:07:26.457Z"),array: []},[]],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 16539,str: "Road West Virginia AGP",num: 46841,date: new Date("2018-09-06T11:08:11.532Z"),obj: {_id: 16540,str: "Wooden",num: 48662,array: [],obj: {_id: 16541,num: 82148,date: new Date("2018-09-05T23:57:21.225Z"),array: [],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 16542,num: 38380,date: new Date("2018-09-06T03:11:29.123Z"),array: ["initiative Congo Triple-buffered",45193,"web-readiness generating",{_id: 16543,str: "Dynamic",num: 58541,date: new Date("2018-09-06T19:27:15.649Z"),array: [new Date("2018-09-06T03:16:42.423Z"),41455],obj: {}},[22335],[],{_id: 16544,str: "intangible Orchestrator",date: new Date("2018-09-06T06:59:17.418Z"),array: ["Vista deposit withdrawal",[]],obj: {_id: 16545,num: 74913,date: new Date("2018-09-06T19:02:17.786Z"),array: [],obj: {_id: 16546,str: "Principal Alaska Utah",date: new Date("2018-09-06T02:39:15.443Z"),array: []}}},new Date("2018-09-06T04:03:13.522Z"),new Date("2018-09-06T07:02:15.541Z"),53382],obj: {_id: 16547,str: "next generation solutions XML",num: 52401,array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 16548,str: "index client-driven withdrawal",num: 94258,date: new Date("2018-09-06T19:18:44.999Z"),array: [new Date("2018-09-06T19:24:01.163Z"),46974,"red driver Industrial",85925,new Date("2018-09-06T12:14:41.171Z"),new Date("2018-09-06T16:02:32.587Z"),{_id: 16549,str: "Island Administrator",num: 2942,date: new Date("2018-09-06T02:56:55.777Z"),array: [],obj: {_id: 16550,str: "Sleek Metal Fish Ford Ergonomic Rubber Chicken",num: 48850,date: new Date("2018-09-05T23:10:36.832Z"),array: ["port parsing Intranet",[],89304,new Date("2018-09-06T19:06:26.909Z")],obj: {}}}],obj: {_id: 16551,str: "Florida Codes specifically reserved for testing purposes parsing",date: new Date("2018-09-05T22:14:22.760Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 16552,str: "Mouse Democratic People's Republic of Korea application",num: 4107,date: new Date("2018-09-05T20:24:01.606Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 16553,str: "core Incredible",num: 86021,date: new Date("2018-09-06T15:49:57.898Z"),array: [new Date("2018-09-06T08:26:08.589Z"),39678,47627,"Money Market Account",new Date("2018-09-06T11:20:23.878Z"),"Programmable Cambridgeshire fuchsia",new Date("2018-09-06T02:17:08.961Z"),{_id: 16554,str: "scalable RSS National",num: 81686,date: new Date("2018-09-06T05:51:57.917Z"),obj: {}},["Customer copy",{_id: 16555,str: "virtual pink",date: new Date("2018-09-06T10:58:43.894Z"),array: [],obj: {}},35901,35869]],obj: {_id: 16556,num: 49477,date: new Date("2018-09-06T00:36:10.258Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 16557,str: "cyan",num: 11899,date: new Date("2018-09-05T19:58:20.940Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 16558,str: "transmitting rich",num: 22888,date: new Date("2018-09-06T06:39:43.235Z"),array: [],obj: {_id: 16559,date: new Date("2018-09-06T03:54:17.192Z"),array: [{_id: 16560,str: "Sleek Gorgeous",num: 61182,array: [],obj: {}},35882,28987,"silver","Saudi Riyal",new Date("2018-09-06T16:25:08.330Z"),2285,new Date("2018-09-05T21:24:59.951Z"),{_id: 16561,str: "Generic Cotton Pizza Solutions",date: new Date("2018-09-06T12:54:29.164Z"),array: [],obj: {_id: 16562,str: "1080p deliver Chief",num: 25808,date: new Date("2018-09-06T11:58:27.539Z")}},"composite Adaptive Netherlands Antilles",new Date("2018-09-06T18:51:43.363Z")],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 16563,str: "Cambridgeshire cutting-edge Cambridgeshire",num: 7862,date: new Date("2018-09-06T18:04:08.803Z"),array: [],obj: {_id: 16564,num: 59991,date: new Date("2018-09-06T19:26:05.271Z"),array: ["24/365 deposit",new Date("2018-09-06T14:41:49.197Z"),13866,new Date("2018-09-06T19:03:29.624Z"),381,new Date("2018-09-06T14:36:55.833Z"),"Iceland instruction set",{_id: 16565,str: "Credit Card Account",num: 77740,array: [],obj: {_id: 16566,str: "moderator array deposit",date: new Date("2018-09-06T07:02:35.268Z"),array: [new Date("2018-09-05T22:04:46.576Z"),[{_id: 16567,str: "object-oriented Orchestrator Handmade",date: new Date("2018-09-06T06:19:31.167Z")},{_id: 16568,str: "calculate Customer",num: 46396,obj: {}}],"New York facilitate SMS",[[]],"Towels bypass"]}},65753,40062,59060],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 16569,str: "deliver",num: 10276,array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 16570,str: "Zambian Kwacha revolutionary",num: 73143,date: new Date("2018-09-06T10:57:35.186Z"),obj: {_id: 16571,num: 89110,date: new Date("2018-09-05T22:13:23.308Z"),array: [[new Date("2018-09-06T10:56:54.780Z")],[{_id: 16572,str: "Home Loan Account Leone",num: 26729,date: new Date("2018-09-06T11:09:25.270Z"),array: [],obj: {}},"Administrator Rwanda Quality-focused"],42558,new Date("2018-09-06T09:59:06.828Z"),"plug-and-play Officer Delaware",78386,"connecting",new Date("2018-09-06T07:25:08.486Z"),new Date("2018-09-06T14:55:30.260Z"),[40429,"Agent Garden Avon",49457,new Date("2018-09-06T07:32:21.095Z"),65296],{_id: 16573,str: "Small Cross-group New Hampshire",num: 67757,array: [],obj: {_id: 16574,str: "Refined",date: new Date("2018-09-06T13:01:18.005Z"),array: [],obj: {}}},{_id: 16575,str: "Delaware invoice quantify",num: 95806,date: new Date("2018-09-06T15:14:33.718Z"),obj: {}}]}});
    },

    function(coll) {
        return coll.insert({_id: 16576,num: 35722,date: new Date("2018-09-06T12:14:01.144Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 16577,str: "Chief Associate",num: 13472,date: new Date("2018-09-06T06:01:59.709Z"),array: [],obj: {_id: 16578,str: "Vermont web-enabled",num: 59295,date: new Date("2018-09-06T13:55:29.212Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 16579,num: 54051,array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 16580,str: "hard drive",num: 8712,date: new Date("2018-09-06T15:00:38.459Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 16581,str: "Product Vermont Indian Rupee",num: 22034,date: new Date("2018-09-06T10:05:45.263Z"),array: [new Date("2018-09-06T03:16:40.049Z"),37570,["Frozen Human",new Date("2018-09-06T04:48:44.235Z")],72633,"lime payment payment",84633,{_id: 16582,str: "local Flat",num: 48259,date: new Date("2018-09-05T19:59:53.550Z"),obj: {_id: 16583,num: 8762,date: new Date("2018-09-06T02:37:53.979Z"),array: [{_id: 16584,str: "feed connect Berkshire",array: [],obj: {}},[],new Date("2018-09-05T21:04:51.506Z")],obj: {_id: 16585,array: [59064],obj: {_id: 16586,str: "optimizing synthesize clicks-and-mortar",num: 66779,date: new Date("2018-09-06T16:36:47.308Z"),obj: {}}}}},new Date("2018-09-06T08:23:34.666Z"),"Czech Koruna Dynamic New Hampshire",19930,"payment",new Date("2018-09-06T11:14:12.260Z")],obj: {_id: 16587,str: "SQL Generic Ecuador",num: 82431,date: new Date("2018-09-06T16:16:45.223Z"),array: ["Robust matrix system","Yen Namibia"]}});
    },

    function(coll) {
        return coll.insert({_id: 16588,str: "USB paradigm",num: 78602,date: new Date("2018-09-06T18:32:00.998Z"),array: [],obj: {_id: 16589,num: 55517,date: new Date("2018-09-06T06:59:08.605Z"),array: ["Plastic",new Date("2018-09-06T00:56:48.440Z"),"program",new Date("2018-09-05T20:23:58.039Z"),21531,"Generic",new Date("2018-09-06T00:28:23.242Z"),new Date("2018-09-05T22:59:49.466Z"),84062,60008,{_id: 16590,str: "content Credit Card Account TCP",num: 28832,date: new Date("2018-09-06T06:33:40.200Z"),obj: {_id: 16591,str: "RAM Keyboard Facilitator",num: 25507,array: [],obj: {_id: 16592,str: "Producer Berkshire implement",num: 19287,date: new Date("2018-09-05T20:23:33.589Z"),obj: {}}}}]}});
    },

    function(coll) {
        return coll.insert({_id: 16593,num: 11240,date: new Date("2018-09-05T22:33:34.988Z"),array: ["bus Antarctica (the territory South of 60 deg S) Borders",38681,new Date("2018-09-06T17:10:07.146Z"),new Date("2018-09-06T17:43:30.799Z"),"deposit",{_id: 16594,str: "Nepal",num: 46164,obj: {}},"green Baby",{_id: 16595,str: "bypassing fuchsia",date: new Date("2018-09-06T05:04:56.358Z"),array: [],obj: {_id: 16596,str: "Security Licensed",num: 78133,date: new Date("2018-09-06T14:02:12.337Z"),array: []}},[],10593,new Date("2018-09-06T07:44:55.479Z")],obj: {_id: 16597,str: "Georgia dynamic sexy",num: 44734,date: new Date("2018-09-06T03:37:38.232Z")}});
    },

    function(coll) {
        return coll.insert({_id: 16598,str: "Car Shirt",num: 9085,date: new Date("2018-09-05T21:09:13.543Z"),array: [new Date("2018-09-06T01:15:56.996Z"),"RSS deliverables","invoice bypassing calculating",{_id: 16599,str: "Orchestrator Personal Loan Account capacitor",num: 43656,date: new Date("2018-09-06T15:20:06.959Z"),array: []},"programming JBOD online",14671,"Home Loan Account JBOD Generic",[],new Date("2018-09-06T08:12:10.917Z"),81184,new Date("2018-09-06T02:17:21.219Z"),6705],obj: {_id: 16600,str: "back up Metrics transmitting",num: 43819,date: new Date("2018-09-06T01:05:58.966Z"),array: [[],{_id: 16601,array: [760,new Date("2018-09-06T07:15:31.417Z"),["Creative",new Date("2018-09-06T05:40:45.239Z")]],obj: {}}],obj: {_id: 16602,str: "Generic Soft Bike Granite",num: 19953}}});
    },

    function(coll) {
        return coll.insert({_id: 16603,str: "channels",num: 4113,date: new Date("2018-09-05T20:47:59.023Z"),array: [67243,"purple",79895,"Pakistan Rupee",[],new Date("2018-09-06T02:05:11.999Z"),{_id: 16604,str: "Creative Berkshire",num: 84543,date: new Date("2018-09-06T18:00:23.360Z"),array: [6714,{_id: 16605,str: "calculate Pennsylvania Investment Account",num: 17031,date: new Date("2018-09-06T19:18:35.646Z"),obj: {_id: 16606,str: "Turnpike",array: ["Investor online Mews"],obj: {}}}],obj: {}},new Date("2018-09-06T08:07:27.479Z"),new Date("2018-09-06T02:01:15.634Z"),"Handmade Concrete Chair Stand-alone paradigms",[],74100]});
    },

    function(coll) {
        return coll.insert({_id: 16607,str: "Unbranded sky blue Operations",num: 6074,date: new Date("2018-09-06T12:44:04.245Z"),array: [31598,70190,"overriding",new Date("2018-09-06T06:00:01.362Z"),new Date("2018-09-06T12:00:18.926Z"),"Unbranded transmitter Intranet",31670,"Rustic",new Date("2018-09-06T07:38:15.010Z"),new Date("2018-09-06T15:59:56.966Z"),62386,[[]]],obj: {_id: 16608,str: "interactive asynchronous",num: 1071,date: new Date("2018-09-05T21:45:32.291Z")}});
    },

    function(coll) {
        return coll.insert({_id: 16609,str: "Re-engineered Courts",num: 24406,date: new Date("2018-09-06T07:54:30.909Z"),array: [93742,92961,new Date("2018-09-06T07:00:03.322Z"),"Developer",73099,new Date("2018-09-06T13:43:18.525Z"),{_id: 16610,str: "RAM",date: new Date("2018-09-06T16:47:02.971Z"),obj: {}},new Date("2018-09-06T10:00:42.898Z"),"driver",[]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 16611,str: "Turnpike Massachusetts deposit",num: 78588,date: new Date("2018-09-06T07:22:30.859Z"),array: ["Idaho",{_id: 16612,str: "lime panel Gorgeous",num: 21707},92710,"Music Democratic People's Republic of Korea deploy",new Date("2018-09-06T10:29:14.062Z"),"withdrawal projection",60951,new Date("2018-09-06T12:24:01.429Z"),[]],obj: {_id: 16613,str: "Sports Data",num: 84463,date: new Date("2018-09-06T12:03:04.498Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 16614,str: "Strategist",num: 57740,array: [[],new Date("2018-09-06T13:10:20.285Z"),95707,"emulation cross-media Consultant",[82494,new Date("2018-09-06T14:51:09.603Z")],"6th generation",{_id: 16615,str: "Agent hacking Fresh",num: 26591,date: new Date("2018-09-05T20:49:59.430Z"),array: [],obj: {}},"Alaska virtual","scale SSL Steel",72253]});
    },

    function(coll) {
        return coll.insert({_id: 16616,str: "embrace fuchsia Designer",num: 39258,date: new Date("2018-09-06T17:40:22.987Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 16617,str: "De-engineered",num: 53414,date: new Date("2018-09-06T03:48:15.529Z"),array: [{_id: 16618,str: "explicit Incredible",num: 60169,date: new Date("2018-09-06T04:30:07.062Z"),obj: {_id: 16619,array: [],obj: {}}},"generate",new Date("2018-09-06T03:03:22.044Z"),{_id: 16620,str: "Horizontal Concrete seize",num: 42165,date: new Date("2018-09-06T05:03:16.863Z"),array: []},"proactive",[],94050,new Date("2018-09-05T20:29:29.417Z"),56234,new Date("2018-09-05T21:51:56.457Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 16621,str: "Metal",num: 56104,date: new Date("2018-09-06T07:53:11.745Z"),array: [19074,new Date("2018-09-05T21:10:37.710Z"),"User-centric parsing Branch",[new Date("2018-09-05T20:33:46.153Z"),99928,{_id: 16622,str: "Sausages Metal Pizza",num: 30466,array: [],obj: {}}],"Credit Card Account",new Date("2018-09-06T17:25:11.697Z"),new Date("2018-09-06T14:01:33.290Z"),48919,"Fields parsing",[]],obj: {_id: 16623,str: "Mandatory Christmas Island",date: new Date("2018-09-06T07:39:18.451Z"),array: ["Wooden JSON"],obj: {_id: 16624,num: 35250,date: new Date("2018-09-06T11:13:01.581Z"),array: []}}});
    },

    function(coll) {
        return coll.insert({_id: 16625,str: "primary Salad B2C",num: 94830,date: new Date("2018-09-06T03:04:34.321Z"),array: [],obj: {_id: 16626,str: "Garden Small Plastic Chips",num: 10813,date: new Date("2018-09-06T19:29:10.351Z"),array: [32155,"Avon world-class",new Date("2018-09-06T10:52:18.247Z"),new Date("2018-09-06T08:53:05.595Z")]}});
    },

    function(coll) {
        return coll.insert({_id: 16627,str: "Borders",num: 65239,date: new Date("2018-09-06T14:40:10.533Z"),array: [95729,78779,"PNG Berkshire",new Date("2018-09-05T22:11:05.065Z"),new Date("2018-09-06T01:22:19.369Z"),"1080p",{_id: 16628,str: "pixel Louisiana Fort",date: new Date("2018-09-06T04:56:43.179Z"),array: [],obj: {}},"synergies aggregate multi-tasking",new Date("2018-09-06T14:52:08.954Z"),[],"index Alabama",new Date("2018-09-06T09:04:34.100Z"),368]});
    },

    function(coll) {
        return coll.insert({_id: 16629,num: 27093,date: new Date("2018-09-06T16:40:27.716Z"),array: [],obj: {_id: 16630,str: "Bolivar Fuerte Assurance Optimized",date: new Date("2018-09-05T22:03:16.454Z"),array: [[{_id: 16631,str: "Toys alarm CFP Franc",num: 74013,date: new Date("2018-09-06T03:24:24.674Z"),array: []}],"Idaho","Personal Loan Account Berkshire matrix",new Date("2018-09-06T11:30:25.223Z"),"killer Dale",94494,new Date("2018-09-05T21:47:11.408Z"),90508,"Oregon Central program","Toys dot-com",76629,5636,{_id: 16632,str: "North Carolina Shoes Music",num: 33062,date: new Date("2018-09-06T11:28:44.471Z"),array: [],obj: {}},[[],90071]],obj: {_id: 16633,num: 58303,array: [new Date("2018-09-06T10:08:09.421Z")],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 16634,str: "Specialist",num: 9783,date: new Date("2018-09-05T22:51:28.767Z"),array: ["Netherlands",57450,"Soap Associate",new Date("2018-09-06T14:43:12.035Z"),{_id: 16635,str: "Bulgaria Morocco",date: new Date("2018-09-06T18:17:58.458Z"),array: [],obj: {}},70034,new Date("2018-09-06T06:21:46.549Z"),["yellow invoice",62481,[],[],new Date("2018-09-06T03:06:22.987Z")]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 16636,str: "withdrawal",num: 78326,date: new Date("2018-09-06T12:42:14.659Z"),array: [],obj: {_id: 16637,num: 43843,date: new Date("2018-09-06T19:10:43.269Z"),array: ["Trail Keyboard Minnesota",new Date("2018-09-06T13:13:03.958Z"),13301,["Reunion Global Cotton",[],{_id: 16638,str: "real-time Metrics",num: 64884,date: new Date("2018-09-06T09:46:28.055Z"),obj: {_id: 16639,str: "New Jersey transmitting Developer",num: 5834,date: new Date("2018-09-06T06:00:19.906Z"),array: ["open system","Christmas Island"],obj: {_id: 16640,str: "application orchestrate Metrics",array: [],obj: {}}}},48756],new Date("2018-09-06T04:26:00.255Z"),{_id: 16641,num: 35985,array: []},76789,new Date("2018-09-05T21:19:24.436Z"),60440]}});
    },

    function(coll) {
        return coll.insert({_id: 16642,str: "open architecture",num: 46805,array: [],obj: {_id: 16643,str: "back up",num: 26807,date: new Date("2018-09-05T20:55:50.353Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 16644,str: "Applications",num: 68975,array: [],obj: {_id: 16645,str: "secondary Frozen open-source",date: new Date("2018-09-06T08:06:27.723Z"),array: [2513,new Date("2018-09-06T12:13:39.145Z"),new Date("2018-09-06T11:06:48.303Z"),new Date("2018-09-06T06:15:39.138Z"),"blue impactful payment",76371,93127,"grow",82595,"Samoa JBOD global",[],new Date("2018-09-06T05:18:00.154Z")]}});
    },

    function(coll) {
        return coll.insert({_id: 16646,str: "Awesome Frozen Ball payment experiences",num: 39746,date: new Date("2018-09-06T05:46:29.336Z"),array: ["Balanced Music approach",new Date("2018-09-06T01:08:33.211Z"),"approach synergistic",{_id: 16647,str: "users",num: 46581,date: new Date("2018-09-06T16:31:13.400Z"),obj: {}},[20108,new Date("2018-09-06T05:16:01.016Z"),81995],[],"encompassing Delaware Avon",26213,{_id: 16648,str: "Shoes Common Licensed Soft Chair",num: 64311,date: new Date("2018-09-06T06:29:05.799Z"),array: [{_id: 16649,str: "Solutions XSS invoice",date: new Date("2018-09-05T20:10:05.422Z"),array: [new Date("2018-09-06T17:16:23.608Z"),[]],obj: {}},"invoice Chief"],obj: {_id: 16650,num: 23713,date: new Date("2018-09-06T04:15:33.445Z"),array: []}},54809,new Date("2018-09-06T00:55:47.008Z")],obj: {_id: 16651,str: "innovate panel bypassing",num: 54613,array: [37778,new Date("2018-09-06T17:39:00.391Z")]}});
    },

    function(coll) {
        return coll.insert({_id: 16652,str: "Refined",num: 43350,date: new Date("2018-09-06T01:26:11.049Z"),array: [],obj: {_id: 16653,str: "Programmable Investment Account United Kingdom",num: 68458,date: new Date("2018-09-06T03:06:01.294Z"),array: ["payment Streamlined","Avon",new Date("2018-09-06T18:23:30.309Z"),89883,[],"orchestrate","TCP cross-platform Liaison",{_id: 16654,date: new Date("2018-09-06T17:39:49.959Z"),array: []},[2726,[],"Savings Account bifurcated Awesome",new Date("2018-09-05T20:17:11.841Z")],new Date("2018-09-06T08:21:20.359Z")],obj: {_id: 16655,num: 50667,date: new Date("2018-09-06T03:43:13.169Z"),array: [{_id: 16656,str: "actuating Electronics implementation",num: 81599,date: new Date("2018-09-06T17:35:49.979Z"),obj: {}}]}}});
    },

    function(coll) {
        return coll.insert({_id: 16657,str: "regional",num: 16472,date: new Date("2018-09-06T11:17:38.282Z"),array: [],obj: {_id: 16658,str: "Multi-tiered",num: 33930,date: new Date("2018-09-06T08:32:01.984Z"),array: ["interface",86190,78801,new Date("2018-09-05T21:16:13.241Z"),new Date("2018-09-06T09:27:40.974Z"),75024,"Granite invoice transmitting",["Forward"],90230,"Cyprus",{_id: 16659,str: "application mobile Synergized",num: 70586,obj: {}},{_id: 16660,date: new Date("2018-09-06T00:25:33.145Z"),array: [],obj: {_id: 16661,str: "deposit",date: new Date("2018-09-06T11:18:50.427Z"),array: [new Date("2018-09-06T19:48:47.512Z"),[]]}}]}});
    },

    function(coll) {
        return coll.insert({_id: 16662,str: "neural-net Generic JBOD",num: 86821,date: new Date("2018-09-05T22:12:01.674Z"),array: [new Date("2018-09-06T18:11:43.239Z"),61543,new Date("2018-09-06T00:15:22.901Z"),44257,"utilize Manager Games",new Date("2018-09-05T21:51:36.982Z"),50942,"Denar AI solid state",93261],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 16663,str: "Peso Uruguayo Uruguay Peso en Unidades Indexadas",num: 68243,date: new Date("2018-09-05T20:02:56.634Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 16664,str: "parse National",num: 27841,date: new Date("2018-09-05T22:52:53.516Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 16665,str: "Direct Cambridgeshire",date: new Date("2018-09-05T20:49:55.956Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 16666,str: "front-end open-source Pants",num: 79548,array: [46139,[new Date("2018-09-06T02:29:01.482Z"),83421,"violet",23894,"infomediaries Green real-time"],new Date("2018-09-06T16:59:30.060Z"),[],new Date("2018-09-06T07:01:04.605Z"),new Date("2018-09-06T04:46:42.267Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 16667,str: "Small Cotton Towels",num: 16759,date: new Date("2018-09-06T17:42:15.902Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 16668,num: 56769,date: new Date("2018-09-05T20:13:53.052Z"),array: [new Date("2018-09-06T01:53:00.414Z"),"context-sensitive",7699,{_id: 16669,str: "Mayotte array Re-contextualized",num: 47333,date: new Date("2018-09-06T06:18:26.074Z"),array: [],obj: {}},new Date("2018-09-06T00:33:39.135Z"),40438,"North Dakota bypass",new Date("2018-09-06T11:10:06.780Z"),"Customer parse turquoise","Metal blue",22711,[],new Date("2018-09-06T16:10:59.760Z")]});
    },

    function(coll) {
        return coll.insert({_id: 16670,str: "Dynamic",num: 62504,date: new Date("2018-09-06T16:17:39.408Z"),array: ["Steel",[93645,{_id: 16671,str: "Concrete interface Avon",num: 23121,array: [94771],obj: {_id: 16672,str: "Checking Account Salad Integration",num: 46954,date: new Date("2018-09-06T04:42:33.881Z"),array: [],obj: {}}},new Date("2018-09-06T11:22:56.252Z"),"conglomeration Practical Plastic Soap"],26608,new Date("2018-09-06T19:05:47.100Z"),"Berkshire","Singapore Dollar",{_id: 16673,num: 14360,date: new Date("2018-09-06T15:55:09.042Z"),array: [],obj: {_id: 16674,num: 41364,obj: {_id: 16675,str: "SMTP invoice",num: 89897,date: new Date("2018-09-06T13:53:01.124Z"),array: [],obj: {_id: 16676,num: 16223,date: new Date("2018-09-06T07:25:17.110Z"),obj: {}}}}},[],"redefine bricks-and-clicks",5048]});
    },

    function(coll) {
        return coll.insert({_id: 16677,str: "auxiliary",num: 25743,date: new Date("2018-09-06T05:35:19.356Z"),array: ["disintermediate",new Date("2018-09-06T07:22:13.187Z"),"Unbranded Cotton Table Mobility Table",new Date("2018-09-05T23:23:26.093Z"),86258,[],79767,"Pa'anga sky blue Shirt",2649,new Date("2018-09-06T10:25:00.695Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 16678,str: "Chicken",num: 24429,array: [new Date("2018-09-06T12:33:36.381Z"),"Grocery",[new Date("2018-09-05T22:11:02.689Z"),{_id: 16679,num: 42762,date: new Date("2018-09-06T15:17:01.092Z"),array: [],obj: {_id: 16680,str: "New Hampshire Berkshire overriding",num: 13279,date: new Date("2018-09-06T05:40:45.332Z"),obj: {_id: 16681,date: new Date("2018-09-06T03:50:31.293Z"),array: [],obj: {_id: 16682,str: "Personal Loan Account",num: 97833,date: new Date("2018-09-06T17:27:11.081Z"),obj: {}}}}}],"Central Surinam Dollar Auto Loan Account",49031,18709,new Date("2018-09-05T22:42:05.515Z"),[],"sky blue 24 hour grow",{_id: 16683,str: "Fresh Orchestrator Oklahoma",array: [[[]],37801],obj: {}},new Date("2018-09-06T06:55:04.475Z"),"synthesize PNG Concrete"]});
    },

    function(coll) {
        return coll.insert({_id: 16684,str: "olive Applications",num: 77570,date: new Date("2018-09-05T22:32:58.408Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 16685,str: "Savings Account Bedfordshire Money Market Account",num: 76916,date: new Date("2018-09-06T07:49:02.327Z"),array: [[],{_id: 16686,str: "complexity quantifying SAS",num: 8592,array: [],obj: { _id: 16687 }},new Date("2018-09-06T10:13:54.866Z"),{_id: 16688,str: "Electronics Maryland",num: 72044,date: new Date("2018-09-06T19:42:33.308Z"),array: [[],71680,"Lock zero defect",new Date("2018-09-06T10:39:07.357Z")],obj: {}},new Date("2018-09-06T11:27:47.348Z"),"Reverse-engineered",new Date("2018-09-06T18:12:15.259Z"),52199],obj: {_id: 16689,str: "Rand Planner",date: new Date("2018-09-06T10:26:26.368Z"),array: [3397,"Developer",31015,new Date("2018-09-06T04:26:15.160Z"),new Date("2018-09-06T17:03:42.388Z"),"Refined Refined Metal Chair"],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 16690,str: "driver extranet utilize",num: 76996,date: new Date("2018-09-06T05:19:00.923Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 16691,str: "invoice",date: new Date("2018-09-06T06:10:23.554Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 16692,str: "user-centric incremental data-warehouse",num: 60393,date: new Date("2018-09-06T05:53:00.049Z"),array: [new Date("2018-09-06T15:24:27.074Z"),"B2C Zloty Credit Card Account",32069,new Date("2018-09-05T23:35:24.588Z"),{_id: 16693,str: "Landing fuchsia Cambridgeshire",num: 61057,date: new Date("2018-09-06T09:33:01.430Z"),array: ["payment"],obj: {_id: 16694,num: 74522,date: new Date("2018-09-06T05:04:36.986Z"),array: [],obj: {_id: 16695,num: 46094,date: new Date("2018-09-06T13:11:32.594Z"),obj: {}}}},"haptic Interactions",75350,[],new Date("2018-09-06T06:31:35.825Z"),new Date("2018-09-06T18:49:40.112Z"),new Date("2018-09-06T08:12:45.785Z"),53959,"redundant archive",[{_id: 16696,str: "Up-sized",date: new Date("2018-09-06T17:21:53.089Z"),array: [],obj: {}},new Date("2018-09-06T08:51:36.875Z"),{_id: 16697,str: "Brunei Darussalam",num: 89613}]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 16698,str: "bandwidth teal salmon",num: 29844,date: new Date("2018-09-06T00:12:21.104Z"),array: [new Date("2018-09-06T15:49:32.834Z"),4987,new Date("2018-09-06T03:44:34.839Z"),[{_id: 16699,str: "black firewall",num: 20134,date: new Date("2018-09-06T09:29:53.019Z"),array: [],obj: {_id: 16700,array: ["virtual",56773],obj: {_id: 16701,str: "Small Fresh Salad",num: 58892,date: new Date("2018-09-06T18:51:15.418Z"),array: [],obj: {}}}},new Date("2018-09-06T11:58:35.515Z")],"Checking Account Specialist solid state",new Date("2018-09-06T11:32:42.990Z"),[{_id: 16702,date: new Date("2018-09-05T20:03:08.766Z"),obj: {_id: 16703,str: "Vermont Tasty Metal Hat",num: 85385,date: new Date("2018-09-05T22:45:52.790Z")}}],"eyeballs Baby",67951,"Corners",22363,"Human connect",[]],obj: {_id: 16704,num: 56013,date: new Date("2018-09-06T08:03:42.509Z"),array: ["Usability",new Date("2018-09-06T16:31:30.249Z"),new Date("2018-09-06T00:07:04.428Z")]}});
    },

    function(coll) {
        return coll.insert({_id: 16705,str: "open system monitor niches",num: 54855,date: new Date("2018-09-06T05:18:28.243Z"),array: [["Small",new Date("2018-09-06T07:35:39.833Z")],"Lead composite",53924,18671,new Date("2018-09-06T07:28:48.128Z"),new Date("2018-09-05T20:44:10.372Z"),new Date("2018-09-06T08:15:54.086Z"),{_id: 16706,num: 47064,date: new Date("2018-09-06T12:33:22.360Z"),array: [],obj: {_id: 16707,str: "card Supervisor enhance",num: 70896,date: new Date("2018-09-06T05:15:43.936Z"),array: [],obj: {}}},88913,"zero defect",{_id: 16708,str: "Credit Card Account",num: 17817},"Rustic Wooden Fish Boliviano Mvdol","maroon"],obj: {_id: 16709,str: "Morocco sky blue",num: 7588,date: new Date("2018-09-06T10:23:29.030Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 16710,str: "Dam",num: 41102,date: new Date("2018-09-05T21:02:00.217Z"),array: [],obj: {_id: 16711,str: "Frozen Handcrafted firmware",num: 65797,date: new Date("2018-09-06T17:53:00.810Z"),array: [],obj: {_id: 16712,num: 51326,date: new Date("2018-09-06T18:30:39.071Z"),array: [80375,"synthesize Toys","Fish architectures Checking Account",new Date("2018-09-06T12:06:46.867Z"),24939,new Date("2018-09-06T10:39:07.908Z"),new Date("2018-09-06T19:11:51.686Z"),new Date("2018-09-06T17:33:30.359Z"),{_id: 16713,str: "Senior",num: 9063,obj: {}},22680,{_id: 16714,str: "sticky deposit",obj: {}},[],"encryption"],obj: {_id: 16715,num: 64932,date: new Date("2018-09-05T21:14:34.434Z"),obj: {}}}}});
    },

    function(coll) {
        return coll.insert({_id: 16716,str: "Adaptive black",num: 64576,date: new Date("2018-09-06T18:49:53.881Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 16717,str: "Facilitator granular",num: 88231,date: new Date("2018-09-06T15:23:18.088Z"),array: ["XML Intelligent Wooden Computer",new Date("2018-09-05T22:18:26.131Z"),["Maryland secured line"],80036,[new Date("2018-09-05T23:14:51.154Z"),{_id: 16718,date: new Date("2018-09-06T12:37:43.848Z"),obj: {_id: 16719,str: "Parkways Awesome Wooden Fish",num: 3861,array: []}}],99699,new Date("2018-09-05T21:10:16.537Z"),66759,"calculating Fields","Ergonomic Metal Gloves",54901,6316],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 16720,str: "solutions customized dot-com",num: 85023,date: new Date("2018-09-06T03:39:01.956Z"),array: [new Date("2018-09-06T17:33:42.205Z"),"extranet turquoise Strategist",78802,new Date("2018-09-06T19:27:01.732Z"),{_id: 16721,num: 25293,array: [],obj: {_id: 16722,str: "Qatar Soft",num: 39125,date: new Date("2018-09-06T04:05:24.626Z"),array: [],obj: {_id: 16723,num: 99075,date: new Date("2018-09-06T19:23:41.591Z")}}},"Group backing up Handmade",[],{_id: 16724,str: "Unbranded Metal Pants deposit Awesome",num: 98478,date: new Date("2018-09-06T09:38:05.034Z"),array: [[87136,new Date("2018-09-06T06:52:10.963Z"),new Date("2018-09-06T10:16:22.612Z")],"parse",65616],obj: {}},new Date("2018-09-06T00:28:59.759Z"),{_id: 16725,date: new Date("2018-09-05T21:45:28.633Z")},94438],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 16726,str: "Orchard B2B",date: new Date("2018-09-06T12:58:10.314Z"),array: [],obj: {_id: 16727,str: "Auto Loan Account Shoes",num: 73956,array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 16728,str: "online",num: 79481,date: new Date("2018-09-06T19:44:37.848Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 16729,str: "California Montana",num: 42839,date: new Date("2018-09-06T14:28:39.064Z"),array: [[],29086,new Date("2018-09-05T23:09:36.075Z"),3561,"Shoes Kids","experiences Loaf",56893,"Cambridgeshire Credit Card Account Fresh",new Date("2018-09-06T14:21:32.663Z"),new Date("2018-09-06T16:47:07.515Z"),{_id: 16730,str: "Incredible",num: 95839,array: [[[],87229,52875],{_id: 16731,str: "Facilitator Bahraini Dinar array",num: 89444,date: new Date("2018-09-06T12:28:32.549Z"),array: [],obj: {}}],obj: {_id: 16732,str: "applications Handmade Moroccan Dirham",num: 93461,date: new Date("2018-09-06T03:54:24.060Z"),array: [],obj: {}}}]});
    },

    function(coll) {
        return coll.insert({_id: 16733,str: "transition Associate COM",num: 67289,date: new Date("2018-09-06T03:10:43.492Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 16734,str: "input",num: 70563,date: new Date("2018-09-06T09:11:50.897Z"),array: [],obj: {_id: 16735,str: "Wooden Analyst Wooden",num: 45647,date: new Date("2018-09-06T06:13:03.176Z"),array: ["North Dakota standardization","San Marino Norfolk Island Boliviano Mvdol",1207,94089,"Lilangeni",11202,[{_id: 16736,str: "back up",date: new Date("2018-09-06T04:21:40.055Z"),array: [new Date("2018-09-06T13:27:02.805Z"),{_id: 16737,num: 14374,array: [],obj: {}}],obj: {_id: 16738,num: 64189,date: new Date("2018-09-05T20:23:38.572Z"),array: []}},[28645]],new Date("2018-09-06T01:53:29.117Z"),new Date("2018-09-06T04:42:31.594Z"),"action-items deposit deposit",56463,[]],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 16739,num: 27924,date: new Date("2018-09-06T06:45:58.926Z"),array: [],obj: {_id: 16740,str: "optimizing",num: 15906,date: new Date("2018-09-06T14:17:58.672Z"),array: [],obj: {_id: 16741,str: "array plum Investment Account",num: 48750,date: new Date("2018-09-05T23:34:14.004Z"),array: ["Mississippi Designer Kansas",97892,50236,"enable program",new Date("2018-09-06T05:58:10.736Z"),[],new Date("2018-09-06T08:49:23.083Z"),"Nevada","Identity Senior",28610,new Date("2018-09-05T23:08:26.904Z"),{_id: 16742,str: "Hat Business-focused index",num: 96808,date: new Date("2018-09-06T05:15:17.741Z"),obj: {_id: 16743,str: "Solutions",num: 21354,array: [new Date("2018-09-06T19:38:43.374Z"),{_id: 16744,str: "Frozen",date: new Date("2018-09-06T08:23:37.456Z"),array: []}]}}],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 16745,num: 52202,date: new Date("2018-09-06T07:04:42.933Z"),array: [98221,{_id: 16746,str: "multi-byte",date: new Date("2018-09-06T13:12:18.411Z"),array: [52178,"Checking Account cross-platform"]},new Date("2018-09-06T14:30:25.447Z"),63644,["knowledge base Connecticut"],55065,new Date("2018-09-05T23:54:23.550Z"),{_id: 16747,num: 25314,date: new Date("2018-09-06T12:23:56.452Z"),array: [],obj: {}},"process improvement International Metal",[],new Date("2018-09-06T16:51:17.400Z"),89561,[],"Intelligent Auto Loan Account","withdrawal Rustic violet"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 16748,str: "compressing",num: 12293,date: new Date("2018-09-06T08:47:30.218Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 16749,num: 49403,array: [{_id: 16750,str: "Developer Chicken Assurance",num: 71509,date: new Date("2018-09-06T01:30:40.010Z"),array: [],obj: {}},"connect Persistent",new Date("2018-09-06T06:38:03.466Z"),73781,90775,new Date("2018-09-06T16:58:29.228Z"),"invoice client-driven",93709,new Date("2018-09-05T21:05:02.114Z"),["Shirt efficient",new Date("2018-09-06T00:48:39.657Z")]],obj: {_id: 16751,str: "productize Regional superstructure",num: 3416,date: new Date("2018-09-06T01:48:34.913Z"),array: [],obj: {_id: 16752,str: "Home Loan Account",num: 94583,date: new Date("2018-09-06T04:31:12.436Z"),obj: {_id: 16753,str: "challenge maximized",num: 97564,array: [new Date("2018-09-06T00:28:01.207Z")]}}}});
    },

    function(coll) {
        return coll.insert({_id: 16754,date: new Date("2018-09-06T09:57:26.876Z"),array: [new Date("2018-09-06T02:50:59.089Z"),"platforms","Associate withdrawal withdrawal",81939,12550,new Date("2018-09-06T07:49:52.426Z"),new Date("2018-09-06T07:27:33.012Z"),new Date("2018-09-06T01:41:08.555Z"),"communities Small"],obj: {_id: 16755,str: "morph Money Market Account Internal",num: 21658,date: new Date("2018-09-06T05:40:48.550Z"),array: [],obj: {_id: 16756,str: "platforms",num: 98796,array: ["program Principal",39555,[],[[49375,{_id: 16757,str: "Triple-buffered Fantastic",num: 74501,date: new Date("2018-09-05T22:51:34.934Z"),array: [],obj: {}},{_id: 16758,str: "Division",num: 94208,date: new Date("2018-09-06T08:25:17.642Z")},"Sausages mobile",90068],[]]],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 16759,str: "North Korean Won",num: 17335,date: new Date("2018-09-05T22:19:08.634Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 16760,str: "Distributed dedicated Technician",num: 29924,array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 16761,num: 15733,obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 16762,str: "synthesize Licensed Algerian Dinar",num: 97847,date: new Date("2018-09-06T04:05:18.247Z"),array: [],obj: {_id: 16763,str: "brand Refined Computers",num: 77244,date: new Date("2018-09-06T04:17:20.903Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 16764,str: "Ball red payment",num: 34433,date: new Date("2018-09-06T07:37:31.042Z"),array: [new Date("2018-09-06T06:07:08.137Z"),"Orchard secured line Movies",{_id: 16765,str: "collaborative",array: [new Date("2018-09-05T21:29:02.372Z"),new Date("2018-09-06T11:02:21.586Z")]},[],26630,"Berkshire Guyana yellow",58363,"Pants Dynamic",new Date("2018-09-06T15:37:10.241Z"),[14361,"Glen"],86903],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 16766,str: "Gloves Factors compressing",num: 6917,date: new Date("2018-09-06T01:13:35.156Z"),array: [],obj: {_id: 16767,str: "Rest",num: 30879,date: new Date("2018-09-06T04:11:41.738Z"),array: [47858,new Date("2018-09-06T09:43:20.818Z"),71823,[{_id: 16768,str: "deposit",array: [],obj: {}},"Grass-roots transmitting Architect","real-time"],75350,new Date("2018-09-06T19:05:47.112Z"),{_id: 16769,str: "incremental Gloves",date: new Date("2018-09-06T09:30:17.948Z"),array: [],obj: {}},new Date("2018-09-06T06:56:08.525Z"),65704,[{_id: 16770,num: 77342,date: new Date("2018-09-06T01:32:51.071Z"),array: [new Date("2018-09-05T21:34:49.303Z"),"Multi-layered",74055,"Motorway microchip"],obj: {_id: 16771,str: "matrices help-desk overriding",num: 93126,array: [new Date("2018-09-06T12:52:26.390Z"),"utilize United States of America Checking Account",new Date("2018-09-06T04:18:34.802Z")]}}]],obj: {_id: 16772,num: 24409,date: new Date("2018-09-06T08:59:45.238Z")}}});
    },

    function(coll) {
        return coll.insert({_id: 16773,str: "Music primary",num: 12686,array: []});
    },

    function(coll) {
        return coll.insert({_id: 16774,str: "Checking Account",num: 90347,date: new Date("2018-09-06T04:13:08.999Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 16775,str: "Cape Verde Right-sized Fish",num: 26188,date: new Date("2018-09-06T08:55:08.986Z"),array: [],obj: {_id: 16776,str: "protocol toolset",num: 99759,date: new Date("2018-09-06T18:54:01.923Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 16777,str: "Supervisor",num: 47511,date: new Date("2018-09-06T05:35:27.054Z"),array: [40805,new Date("2018-09-05T22:11:30.178Z"),"Home","methodologies generating Personal Loan Account","channels",73294,{_id: 16778,str: "Cross-platform",num: 68243,obj: {}}]});
    },

    function(coll) {
        return coll.insert({_id: 16779,str: "Spain index cross-platform",num: 21411,date: new Date("2018-09-06T08:05:31.326Z"),array: ["Louisiana Bolivar Fuerte Gloves",new Date("2018-09-05T20:56:59.508Z"),33995,new Date("2018-09-05T21:31:45.995Z"),[],51856,new Date("2018-09-06T06:28:54.366Z"),"niches","Stream Product Norwegian Krone","responsive homogeneous Metal",47376,new Date("2018-09-06T10:22:32.237Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 16780,str: "hack Sleek",num: 66163,date: new Date("2018-09-06T01:20:59.241Z"),array: ["Refined Granite Gloves Proactive",96026,new Date("2018-09-05T22:01:09.831Z"),"purple Group",[],new Date("2018-09-06T03:57:30.185Z"),"Iceland",new Date("2018-09-06T15:06:45.923Z"),[],new Date("2018-09-06T19:34:48.757Z")],obj: {_id: 16781,num: 72501,date: new Date("2018-09-06T01:41:11.791Z"),array: [8638,"port Beauty invoice"],obj: {_id: 16782,str: "Fantastic Plastic Fish",num: 12066,date: new Date("2018-09-06T07:32:26.003Z")}}});
    },

    function(coll) {
        return coll.insert({_id: 16783,str: "cyan",num: 52036,date: new Date("2018-09-06T10:22:23.819Z"),array: [22093,93864,new Date("2018-09-06T01:36:06.601Z"),[],[],10189,"Principal",new Date("2018-09-06T14:47:19.770Z"),8859,{_id: 16784,str: "Unbranded bypass client-driven",num: 79870,date: new Date("2018-09-06T01:49:01.934Z"),array: [],obj: {_id: 16785,date: new Date("2018-09-06T00:14:57.828Z"),array: [],obj: {}}}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 16786,str: "white",num: 54737,date: new Date("2018-09-05T23:18:14.815Z"),array: [],obj: {_id: 16787,num: 327,date: new Date("2018-09-06T03:50:42.765Z"),array: [23701,"Handmade Rubber Hat",56615,[],new Date("2018-09-06T14:28:10.451Z"),{_id: 16788,str: "morph Pound Sterling",num: 23878,date: new Date("2018-09-06T14:11:12.915Z"),array: [39505,"Handmade Wooden Fish",74086],obj: {_id: 16789,str: "parsing",obj: {}}},new Date("2018-09-06T13:42:41.682Z"),70874,[],new Date("2018-09-06T06:21:16.424Z"),{_id: 16790,str: "Incredible Steel Salad connect",num: 14010,date: new Date("2018-09-05T21:18:41.976Z"),array: ["Outdoors Web Handcrafted"],obj: {_id: 16791,str: "New Jersey Ways",array: [],obj: {}}},51572],obj: {_id: 16792,str: "Awesome",array: [[{_id: 16793,num: 74803,date: new Date("2018-09-06T10:50:49.729Z"),array: [new Date("2018-09-06T12:11:43.591Z"),"visualize"],obj: {_id: 16794,str: "Developer Investment Account efficient",date: new Date("2018-09-05T22:47:32.609Z")}},61540],"Personal Loan Account redundant Incredible Wooden Gloves",[]]}}});
    },

    function(coll) {
        return coll.insert({_id: 16795,str: "deposit",num: 28028,date: new Date("2018-09-05T20:01:59.845Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 16796,str: "Frozen Director Credit Card Account",num: 10455,date: new Date("2018-09-06T16:20:02.737Z"),array: [{_id: 16797,str: "Berkshire Practical Soft Mouse logistical",num: 33655,date: new Date("2018-09-06T07:14:19.829Z"),array: [],obj: {}},"primary",89759,new Date("2018-09-06T16:13:39.633Z"),"synthesize New Jersey Saudi Riyal",52995,new Date("2018-09-06T08:04:29.537Z"),[],{_id: 16798,str: "Steel District eyeballs",num: 97978,date: new Date("2018-09-06T04:14:46.602Z"),array: [new Date("2018-09-06T11:30:19.272Z"),{_id: 16799,date: new Date("2018-09-06T16:09:29.256Z"),array: [{_id: 16800,str: "open-source",obj: {}},3139,"value-added"],obj: {_id: 16801,str: "generate contingency input",num: 52152,array: [],obj: {}}},new Date("2018-09-06T00:01:58.530Z"),[17759],[34069,new Date("2018-09-05T22:34:15.656Z")],[]]}]});
    },

    function(coll) {
        return coll.insert({_id: 16802,str: "transmitting sky blue",num: 60695,array: [],obj: {_id: 16803,str: "Buckinghamshire Saint Helena parsing",num: 81917,date: new Date("2018-09-05T21:42:31.980Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 16804,str: "indexing",num: 25198,date: new Date("2018-09-06T04:13:06.011Z"),array: [],obj: {_id: 16805,str: "Associate Industrial",num: 61317,array: []}});
    },

    function(coll) {
        return coll.insert({_id: 16806,num: 79128,date: new Date("2018-09-06T18:53:34.152Z"),array: ["exploit",{_id: 16807,str: "Home Loan Account Sausages North Carolina",num: 34989,date: new Date("2018-09-06T08:15:45.123Z"),obj: {}},41894,"Investment Account",new Date("2018-09-05T22:50:52.981Z"),48845,[],"Consultant Producer",new Date("2018-09-05T21:09:39.836Z")]});
    },

    function(coll) {
        return coll.insert({_id: 16808,num: 74001,array: [],obj: {_id: 16809,str: "deposit",num: 76864,date: new Date("2018-09-05T23:10:30.158Z"),array: [],obj: {_id: 16810,str: "Islands solid state",num: 45571,date: new Date("2018-09-06T14:57:16.343Z")}}});
    },

    function(coll) {
        return coll.insert({_id: 16811,str: "Bedfordshire payment",num: 23937,array: ["Compatible",65234,46264,"Avon",{_id: 16812,str: "National Hungary",num: 87794,date: new Date("2018-09-06T00:38:29.884Z"),array: [],obj: {_id: 16813,num: 74148,date: new Date("2018-09-06T14:27:23.236Z"),obj: {}}},"Internal Future Handcrafted",45613,new Date("2018-09-06T17:10:38.133Z"),"Cambridgeshire Books Tunisian Dinar",new Date("2018-09-05T23:05:24.676Z"),84002,new Date("2018-09-06T09:18:51.728Z")],obj: {_id: 16814,str: "Avon",date: new Date("2018-09-06T18:18:02.827Z"),array: [{_id: 16815,str: "violet Personal Loan Account Pike",date: new Date("2018-09-06T07:57:49.298Z")},[new Date("2018-09-06T12:14:45.062Z"),{_id: 16816,str: "Dynamic",num: 25464,date: new Date("2018-09-06T00:43:31.868Z")}]]}});
    },

    function(coll) {
        return coll.insert({_id: 16817,str: "Wyoming Practical",num: 29731,date: new Date("2018-09-06T00:29:20.603Z"),obj: {_id: 16818,str: "Mountain Money Market Account",num: 53152,date: new Date("2018-09-06T01:15:37.253Z"),array: ["withdrawal Wisconsin groupware",96349,new Date("2018-09-05T20:50:45.600Z"),new Date("2018-09-06T14:57:40.819Z"),39806,["Small",99330,new Date("2018-09-06T03:58:42.382Z"),"Shoes Small program"],{_id: 16819,num: 37429,date: new Date("2018-09-06T02:08:25.201Z"),array: []},[],"Rubber Intelligent Wooden Mouse calculate",new Date("2018-09-06T07:54:39.819Z")],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 16820,str: "Web teal",num: 98036,date: new Date("2018-09-06T11:49:13.079Z"),array: [[new Date("2018-09-06T11:08:39.683Z"),"Representative",48555,"user-centric generating",46271,{_id: 16821,num: 34197,date: new Date("2018-09-06T11:03:52.410Z"),array: [],obj: {_id: 16822,str: "virtual Canyon",num: 93237,array: [],obj: {}}}],new Date("2018-09-06T10:42:06.350Z"),"monetize",new Date("2018-09-05T23:29:42.968Z"),new Date("2018-09-06T04:46:50.549Z"),66353,[new Date("2018-09-05T22:33:47.972Z")],83428,["Manor Books haptic","withdrawal primary","SMTP firmware"],{_id: 16823,str: "maroon",date: new Date("2018-09-06T17:59:40.962Z")}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 16824,str: "Connecticut Lead",num: 72585,date: new Date("2018-09-06T00:40:31.637Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 16825,str: "Wooden Global",num: 83837,date: new Date("2018-09-06T00:26:34.951Z"),array: [],obj: {_id: 16826,str: "Assistant mission-critical",num: 32247,date: new Date("2018-09-05T23:03:21.821Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 16827,str: "Hat Personal Loan Account haptic",num: 9371,date: new Date("2018-09-06T00:40:24.750Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 16828,str: "Paradigm Utah",num: 30254,date: new Date("2018-09-05T21:52:09.230Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 16829,str: "Rhode Island driver adapter",num: 85888,date: new Date("2018-09-06T01:23:41.613Z"),array: [],obj: {_id: 16830,str: "Handcrafted Metal Chicken quantifying violet",num: 25151,date: new Date("2018-09-06T01:53:21.715Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 16831,str: "brand invoice",num: 15624,date: new Date("2018-09-06T19:11:31.126Z"),array: ["human-resource green Ohio",94690,61437,new Date("2018-09-06T07:03:11.578Z"),new Date("2018-09-06T02:26:49.512Z"),"Ferry hacking",new Date("2018-09-05T21:38:17.324Z"),[],new Date("2018-09-05T21:07:15.665Z"),94835,new Date("2018-09-05T22:14:57.679Z")],obj: {_id: 16832,str: "Officer Future",num: 61011,date: new Date("2018-09-06T04:32:25.290Z"),array: [],obj: {_id: 16833,date: new Date("2018-09-06T07:56:36.291Z"),array: []}}});
    },

    function(coll) {
        return coll.insert({_id: 16834,str: "Regional Tuvalu parse",num: 57196,date: new Date("2018-09-06T13:49:21.494Z")});
    },

];

const indexList = [

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"num": 1, "str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": 1, "obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": -1, "obj.obj.obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": -1, "obj.obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"num": -1, "obj.obj.obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"str": -1, "date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"str": -1, "obj.obj.obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": -1, "obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": -1, "str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": 1, "num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": 1, "obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.num": -1, "obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": 1, "obj.obj.obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": 1, "obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.num": -1, "date": 1});
    },

    function(coll) {
        return coll.createIndex({"str": -1, "obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": 1, "obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": -1, "obj.obj.obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": -1, "obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": 1, "obj.obj.obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.num": -1, "obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": -1, "obj.obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": -1, "obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": -1, "obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": -1, "str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": 1, "obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": 1, "obj.obj.obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": 1, "obj.obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": -1, "obj.obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": 1, "obj.obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": 1, "obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": 1, "num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": 1, "obj.obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": -1, "obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": 1, "obj.obj.obj.obj.num": 1, "str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": -1, "obj.obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": 1, "date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": -1, "obj.obj.str": 1});
    },

];

const aggregationList = [

        [{$project: {a: { $zip: { inputs: [["ROI e-tailers"],['$obj.obj.obj.str'],[],[],['$obj.obj.obj.num',14050,'$obj.obj.obj.num'],[{ $substr: [{ $rtrim: { input: '$obj.obj.str' } },19,13] }],[9141],[]] } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[94553],[]]] }, _id: 0}}],

        [{$project: {a: { $hour: { $year: { $minute: { $dateToString: {date: '$obj.date',timezone: "Africa/Ndjamena",onNull: { $concatArrays: [[{ $substrCP: ['$obj.str',0,9] }],["Soft compelling"],['$obj.obj.obj.num'],[]] }} } } } }, _id: 0}}],

        [{$project: {a: { $week: { $month: new Date("2018-09-06T12:20:34.819Z") } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $trim: {input: "Engineer",chars: '$obj.obj.str'} }],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $dateToString: { date: new Date("2018-09-06T05:19:33.803Z") } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Pennsylvania Dynamic",v: "Gloves"}]] }, _id: 0}}],

        [{$project: {a: { $rtrim: {input: { $substr: [{ $toUpper: "Phased Saint Helena" },20,15] },chars: '$obj.str'} }, _id: 0}}],

        [{$project: {a: { $trim: { input: { $toLower: '$obj.obj.obj.str' } } }, _id: 0}}],

        [{$project: {a: { $toDate: { $millesecond: { $dateFromString: {dateString: "2018-09-06T14:24:33.366Z",onNull: "Small Granite Keyboard Central"} } } }, _id: 0}}],

        [{$project: {a: { $range: [10,5] }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj.obj' }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "driver Panama Analyst",v: '$obj.obj.date'}]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$num'],77192] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Kwanza",v: 27381}]] }, _id: 0}}],

        [{$project: {a: { $substrCP: ['$obj.obj.str',12,11] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[35956],[],[],['$obj.obj.str',{ $trim: {input: { $toUpper: '$obj.obj.str' },chars: "Paradigm"} }],[]]] }, _id: 0}}],

        [{$project: {a: { $rtrim: { input: '$str' } }, _id: 0}}],

        [{$project: {a: { $concatArrays: [[46875],['$obj.str',{ $trim: { input: '$obj.str' } }],[],["backing up",{ $toString: { $arrayElemAt: [['$obj.obj.obj.obj.num','$obj.num',{ $abs: 54464 }],58415] } },{ $toLower: "web services" }],[68526]] }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj.obj.obj' }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],85240] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "extranet",v: false},{k: "Automotive rich parse",v: 21879},{k: "Soft",v: { $dateToParts: {date: { $isoWeek: { $dateToString: {date: new Date("2018-09-06T04:10:18.455Z"),format: "%Z-%G-%m-%G-%u-%j"} } },timezone: "Europe/Riga",iso8601: false} }}]] }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj.obj' }, _id: 0}}],

        [{$project: {a: { $substr: ['$str',10,4] }, _id: 0}}],

        [{$project: {a: { $year: { $dayOfMonth: { $week: { $hour: { $hour: { $toDate: { $range: [7,7] } } } } } } }, _id: 0}}],

        [{$project: {a: DATE;, _id: 0}}],

        [{$project: {a: { $year: { $millesecond: { $minute: { $isoWeek: { $isoWeekYear: { $toDate: { $substrCP: [{ $ltrim: { input: { $rtrim: {input: "calculate",chars: '$obj.obj.obj.str'} } } },1,18] } } } } } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$str'],['$obj.obj.num'],[{ $toLower: '$obj.str' }],[]]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$obj.num'],[{ $substr: ["metrics Producer haptic",3,5] }],[{ $trim: { input: '$str' } }],["Manager",{ $toUpper: "enterprise" }],[],['$obj.str',"connect optical Borders"]]] }, _id: 0}}],

        [{$project: {a: { $map: {input: ['$obj.str'],as: 'evert',in: { $subtract: [39499,51108] }} }, _id: 0}}],

        [{$project: {a: { $substrBytes: ["invoice index",12,16] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $toLower: '$obj.obj.str' },"Refined"],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $filter: {input: [{ $concat: ["Frozen deliverables solid state",'$str'] },{ $toString: { $toUpper: "Vermont transmitter Investment Account" } }],cond: { $in: [{ $arrayToObject: [[{k: "website superstructure",v: '$$this'},{k: "Credit Card Account Licensed Rubber Ball",v: '$obj.obj.obj.str'},{k: "parsing Concrete Maryland",v: '$obj.obj.obj.obj.num'}]] },{ $range: [7,16] }] }} }, _id: 0}}],

        [{$project: {a: { $filter: {input: [{ $rtrim: {input: '$obj.obj.str',chars: { $toString: { $arrayToObject: [[[],[],["programming Radial"],["index overriding",false],['$obj.obj.num',80358]]] } }} }],cond: { $lt: [{ $arrayElemAt: [[{ $substrBytes: ['$$this',20,7] }],53467] },{ $arrayToObject: [[]] }] }} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Buckinghamshire",v: 64315},{k: "SCSI navigate",v: true},{k: "Global override clear-thinking",v: new Date("2018-09-06T04:08:37.493Z")}]] }, _id: 0}}],

        [{$project: {a: { $dateFromParts: {year: { $subtract: [24889,'$obj.obj.obj.obj.num'] },month: { $cmp: [{ $dateToString: {date: { $millesecond: { $hour: { $dateFromString: {dateString: "2018-09-06T11:19:29.622Z",format: "%Y-%m-%V-%j-%V-%m-%z-%H-%d-%u",onError: { $range: [15,1] }} } } },format: "%M-%m-%m-%m-%V-%z-%u",timezone: "Africa/Johannesburg"} },{ $arrayToObject: [[{k: "Central cutting-edge Jewelery",v: { $dateToString: {date: new Date("2018-09-06T17:18:48.824Z"),onNull: '$str'} }}]] }] },day: { $subtract: [81165,7433] },second: { $sqrt: '$obj.obj.num' },timezone: "America/Argentina/Rio_Gallegos"} }, _id: 0}}],

        [{$project: {a: { $rtrim: {input: '$obj.str',chars: "El Salvador Colon US Dollar Beauty RAM"} }, _id: 0}}],

        [{$project: {a: { $hour: { $dateToString: {date: '$obj.obj.date',timezone: "Kwajalein",onNull: { $reverseArray: [[{ $substr: ["override",11,3] },"Horizontal"]] }} } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $substr: ['$str',14,12] }],43299] }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [[{ $mod: ['$obj.obj.obj.obj.num','$obj.num'] },'$obj.num'],[{ $dateToString: {date: { $dateToString: {date: new Date("2018-09-06T14:20:27.972Z"),timezone: "PRC",onNull: { $month: { $toDate: { $millesecond: { $dateToParts: {date: { $week: { $dateFromParts: {isoWeekYear: { $ceil: '$num' },isoDayOfWeek: { $subtract: [89782,79425] },second: { $mod: ['$num',76499] }} } },timezone: "Africa/Tripoli",iso8601: false} } } } }} },onNull: "Shirt Automotive"} }],['$obj.str',{ $substrCP: ['$str',7,15] },'$obj.str',{ $concat: [] },{ $rtrim: { input: "payment Producer Frozen" } }]],useLongestLength: false} }, _id: 0}}],

        [{$project: {a: { $concatArrays: [['$obj.obj.str']] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.obj.obj.num'],'$obj.obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$num'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "open-source Tasty",v: { $dateToString: {date: { $dateToParts: {date: { $dateFromString: {dateString: "2018-09-06T19:41:37.591Z",format: "%d-%H-%w-%Y",onError: { $map: {input: [],in: { $log10: 43986 }} }} },timezone: "Europe/Saratov"} },timezone: "Etc/GMT+7",onNull: "redundant"} }}]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["Refined Wooden Shoes Administrator","Credit Card Account interfaces Ergonomic"],'$obj.obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [['$obj.obj.obj.num',{ $exp: 35711 }],['$obj.obj.str',{ $substrBytes: [{ $trim: { input: '$str' } },9,7] },"Pizza Iranian Rial experiences"],["turquoise interactive generate",{ $dateToString: {date: '$obj.obj.date',format: "%w-%u-%z-%m-%H-%%-%Y-%H-%S-%m",timezone: "America/Porto_Velho",onNull: "Leone deposit"} },'$obj.str',{ $rtrim: { input: '$obj.obj.str' } }],[],["Terrace content Optimization"]],useLongestLength: true,defaults: [{},[new Date("2018-09-05T20:08:03.820Z")]]} }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [['$str'],['$obj.obj.obj.obj.num',{ $toLower: "HTTP Practical Steel Towels transmit" }],[{ $substrCP: ['$obj.str',15,0] },{ $toUpper: { $ltrim: { input: "Vanuatu" } } }],['$obj.obj.num','$num',62689],[{ $log10: 10172 }]],defaults: [80194]} }, _id: 0}}],

        [{$project: {a: { $toString: { $dayOfWeek: { $month: { $dateFromParts: {isoWeekYear: { $cmp: [{ $substrCP: ["Lead",11,7] },{ $arrayElemAt: [[],{ $log10: 46171 }] }] },isoDayOfWeek: { $cmp: [{ $arrayElemAt: [[42640],'$obj.obj.num'] },{ $dateFromParts: {year: { $pow: ['$obj.obj.num',23684] },month: { $multiply: ['$obj.obj.obj.num',{ $mod: [{ $trunc: '$obj.obj.num' },'$obj.obj.num'] },{ $sqrt: 84893 }] },hour: { $multiply: [] },second: { $log: [10757,92298] },timezone: "Antarctica/Palmer"} }] },hour: { $add: [60752] },minute: { $ln: '$num' }} } } } }, _id: 0}}],

        [{$project: {a: { $substrCP: [{ $rtrim: {input: '$str',chars: { $trim: { input: { $concat: ['$obj.obj.obj.str'] } } }} },5,17] }, _id: 0}}],

        [{$project: {a: { $minute: { $isoWeekYear: { $dayOfMonth: { $dateFromParts: {isoWeekYear: { $multiply: [] },hour: { $ln: '$num' },second: { $log: ['$obj.num',52449] }} } } } }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [['$obj.obj.obj.obj.num'],['$obj.obj.obj.num',41468],['$str'],[]],useLongestLength: false} }, _id: 0}}],

        [{$project: {a: { $concatArrays: [[],[]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Product transmit",v: { $toString: { $minute: { $week: { $hour: { $dayOfMonth: { $isoDayOfWeek: { $month: { $hour: { $isoWeekYear: { $hour: { $week: { $dateFromString: {dateString: "2018-09-06T01:10:33.330Z",format: "%m-%V-%z-%m-%Z-%U-%U-%Y-%w",timezone: "Asia/Pyongyang",onError: { $arrayElemAt: [[2506],64098] },onNull: { $zip: {inputs: [[{ $toUpper: '$obj.obj.str' },"Personal Loan Account blue Handcrafted Soft Car"],['$obj.obj.obj.num'],["New Jersey initiatives Senegal",'$obj.str'],[],[],[]],defaults: [/^(?:Syrian Poun|value\-adde)d|Computer|Ways/,false]} }} } } } } } } } } } } } }},{k: "background",v: '$date'}]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Minnesota",v: '$obj.obj.obj.obj.num'}]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.obj.num'],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $rtrim: {input: '$str',chars: '$obj.obj.obj.str'} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[]]] }, _id: 0}}],

        [{$project: {a: { $map: {input: [],in: { $add: ['$$this',76273,91776] }} }, _id: 0}}],

        [{$project: {a: { $toLower: { $rtrim: { input: "action-items" } } }, _id: 0}}],

        [{$project: {a: { $filter: {input: ['$obj.obj.obj.num'],cond: { $ne: [{ $arrayElemAt: [[{ $toUpper: '$obj.str' },"Home Loan Account Corporate Administrator",{ $toLower: { $dateToString: {date: new Date("2018-09-06T12:25:11.994Z"),onNull: { $concatArrays: [] }} } }],96444] },{ $rtrim: { input: '$obj.obj.obj.str' } }] }} }, _id: 0}}],

        [{$project: {a: { $month: { $dayOfYear: { $year: '$date' } } }, _id: 0}}],

        [{$project: {a: { $dayOfWeek: { $minute: { $dayOfYear: { $hour: { $isoDayOfWeek: { $hour: { $second: { $isoDayOfWeek: { $isoWeek: { $dateToString: {date: new Date("2018-09-06T11:43:41.365Z"),format: "%m-%d-%U-%G-%d-%z-%j-%z-%Y",timezone: "Asia/Novosibirsk"} } } } } } } } } } }, _id: 0}}],

        [{$project: {a: { $rtrim: {input: '$str',chars: '$obj.obj.str'} }, _id: 0}}],

        [{$project: {a: { $dateToParts: {date: { $isoWeek: { $month: { $dateToString: { date: new Date("2018-09-06T01:17:38.632Z") } } } },timezone: "America/Shiprock",iso8601: false} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Ergonomic Frozen Shoes Connecticut Indiana",v: { $dayOfWeek: { $dateFromString: {dateString: "2018-09-06T01:18:28.280Z",format: "%j-%G-%%-%V-%w-%L-%H-%u-%m-%S-%H-%S"} } }},{k: "Nevada Legacy American Samoa",v: '$obj.obj.num'}]] }, _id: 0}}],

        [{$project: {a: { $map: {input: ['$obj.str'],in: { $abs: 82058 }} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.str'],30963] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.str'],98395] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[]] }, _id: 0}}],

        [{$project: {a: { $map: {input: ["Orchestrator Granite"],in: { $exp: 62064 }} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.obj.str'],9362] }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: new Date("2018-09-05T23:31:56.539Z"),onNull: { $substrCP: ["Handcrafted",16,3] }} }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: { $isoWeekYear: { $toDate: { $month: { $year: { $isoWeekYear: { $isoWeek: '$obj.date' } } } } } },onNull: { $arrayToObject: [[[49987,'$obj.obj.obj.obj.num',74438]]] }} }, _id: 0}}],

        [{$project: {a: { $reverseArray: [['$obj.obj.obj.str']] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Refined calculate User-friendly",v: '$num'}]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $ltrim: { input: '$obj.obj.obj.str' } },"Avon content"],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $hour: { $week: { $month: { $dayOfYear: { $millesecond: { $dateFromParts: {isoWeekYear: { $floor: '$obj.obj.obj.obj.num' },isoWeek: { $trunc: { $mod: [11662,57769] } },minute: { $divide: [2433,'$obj.obj.obj.num'] },second: '$num',millisecond: { $add: ['$obj.obj.obj.num'] },timezone: "America/Glace_Bay"} } } } } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["feed portal object-oriented"],34969] }, _id: 0}}],

        [{$project: {a: { $reverseArray: [['$obj.obj.obj.obj.num',21412,26605,'$obj.num','$num']] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[{ $ltrim: { input: "Refined" } },{ $rtrim: { input: "backing up Refined Plastic Chicken Metrics" } }],[],[59824],['$obj.obj.obj.str','$obj.obj.obj.str']]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],{ $sqrt: { $cmp: [{ $isoWeek: { $year: { $dateFromParts: {isoWeekYear: { $log10: 47596 },isoWeek: { $cmp: [{ $toString: { $arrayToObject: [[{k: "programming",v: '$str'}]] } },{ $millesecond: { $dateFromParts: {isoWeekYear: { $ln: '$obj.num' },isoDayOfWeek: { $exp: '$obj.obj.obj.obj.num' },second: { $subtract: [27553,'$obj.num'] }} } }] },hour: { $cmp: [{ $arrayToObject: [[{k: "infomediaries",v: 339}]] },{ $concatArrays: [[4617],["Maine Cotton"],["Division Coordinator intangible",'$obj.obj.obj.str',"copy"],['$obj.obj.obj.obj.num']] }] },minute: { $add: [] },second: { $log10: '$obj.num' },timezone: "Asia/Brunei"} } } },{ $dayOfYear: new Date("2018-09-06T16:35:41.400Z") }] } }] }, _id: 0}}],

        [{$project: {a: { $dayOfMonth: new Date("2018-09-06T14:54:07.366Z") }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],["Internal"],[66320,'$obj.obj.obj.num','$obj.num']]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "withdrawal indexing Focused",v: { $hour: { $dayOfYear: { $isoWeekYear: { $isoWeek: { $dayOfMonth: { $dateToParts: { date: { $year: { $minute: { $dayOfWeek: { $dateFromParts: {year: { $divide: ['$num',99670] },month: { $exp: '$obj.num' },day: { $indexOfArray: [{ $concatArrays: [[]] },{ $toLower: { $trim: { input: '$obj.obj.str' } } },4,9] },second: { $abs: 66731 },millisecond: { $subtract: [{ $log10: 2749 },8388] },timezone: "Etc/GMT-6"} } } } } } } } } } } }}]] }, _id: 0}}],

        [{$project: {a: { $filter: {input: ['$obj.obj.obj.num'],as: 'kenyon',cond: { $gt: [{ $minute: { $month: { $minute: { $week: { $isoDayOfWeek: { $isoDayOfWeek: { $dateToParts: { date: { $isoWeekYear: { $second: { $year: { $week: { $second: { $dateFromString: {dateString: "2018-09-05T22:16:17.567Z",format: "%m-%L-%m-%%-%M-%d-%%-%G",timezone: "Europe/Malta",onNull: { $concat: [{ $substrBytes: ["Plastic Investor Uganda",4,15] }] }} } } } } } } } } } } } } } },{ $arrayElemAt: [[],59601] }] }} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["Outdoors",{ $substrBytes: ['$obj.str',14,19] }],'$num'] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $rtrim: {input: { $substrCP: ["International Facilitator Granite",6,15] },chars: '$obj.obj.obj.str'} }],62446] }, _id: 0}}],

        [{$project: {a: { $map: {input: [],as: 'sydney',in: { $exp: '$$sydney' }} }, _id: 0}}],

        [{$project: {a: { $substr: [{ $ltrim: {input: "Bedfordshire Tennessee",chars: "Borders Graphical User Interface"} },13,9] }, _id: 0}}],

        [{$project: {a: { $map: {input: [42190],as: 'kelli',in: { $log: ['$obj.obj.num','$obj.num'] }} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.obj.str',"primary"],'$num'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Locks",v: '$num'}]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Village Books calculate",v: { $isoWeekYear: { $dateToString: {date: { $dateFromParts: {isoWeekYear: { $subtract: [95455,'$obj.obj.obj.obj.num'] },isoDayOfWeek: { $log: ['$obj.obj.obj.obj.num',72200] },hour: { $cmp: [{ $arrayElemAt: [['$str'],{ $mod: ['$obj.num',47835] }] },{ $dateToString: {date: '$obj.obj.date',format: "%G-%U-%Z-%H-%V"} }] }} },timezone: "Pacific/Guadalcanal",onNull: { $toLower: "Shoes" }} } }},{k: "District",v: true}]] }, _id: 0}}],

        [{$project: {a: { $substrCP: [{ $dateToString: {date: { $millesecond: { $toDate: { $arrayToObject: [[[{ $toString: { $concatArrays: [['$obj.obj.obj.obj.num'],[],["tan"]] } },"Jewelery radical Cambridgeshire"],['$num','$num']]] } } },format: "%M-%S-%m-%Z-%G-%u-%u-%d-%U-%G-%m-%V"} },17,18] }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: new Date("2018-09-06T15:03:51.830Z"),timezone: "Canada/Central",onNull: '$obj.obj.obj.str'} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $concat: ["Fantastic Games Security",'$obj.str',"Czech Koruna Mobility e-markets"] }],33986] }, _id: 0}}],

        [{$project: {a: { $isoWeekYear: new Date("2018-09-05T22:11:32.351Z") }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[92956,'$obj.num',57411],92822] }, _id: 0}}],

        [{$project: {a: { $map: {input: ["Marketing Checking Account engineer",{ $substrCP: ["grey",19,14] }],in: { $log10: 4913 }} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],['$obj.obj.num',57837],[],[{ $concat: ["Senior composite"] },{ $toString: { $minute: { $dayOfWeek: { $dateFromString: {dateString: "2018-09-06T06:41:07.408Z",format: "%M-%%-%H-%V-%L-%V",onError: { $arrayElemAt: [['$obj.str',{ $millesecond: { $dayOfMonth: { $isoWeekYear: { $dayOfWeek: { $dateToParts: { date: { $month: { $dateFromParts: {isoWeekYear: { $sqrt: 34964 },isoWeek: { $cmp: [{ $substrBytes: [{ $substr: ["Regional Checking Account",18,14] },19,20] },{ $hour: { $toDate: { $zip: {inputs: [[]],useLongestLength: true} } } }] },hour: { $log: ['$obj.obj.num',4944] },second: { $ln: '$num' },millisecond: { $log10: { $size: [['$num']] } },timezone: "Australia/South"} } } } } } } } }],38567] }} } } } },{ $substrBytes: ["orchid",10,19] }]]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],84284] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[36684,'$obj.obj.obj.num'],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $reverseArray: [['$obj.num',63265]] }, _id: 0}}],

        [{$project: {a: { $isoDayOfWeek: { $isoWeekYear: { $dateFromString: {dateString: "2018-09-06T07:06:50.743Z",timezone: "Asia/Tashkent",onNull: { $concat: ['$obj.str',"didactic"] }} } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["synthesize","Clothing Cheese generate"],58060] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[{ $ltrim: { input: '$obj.obj.obj.str' } },"solution-oriented Gorgeous"],['$num',2482],[]]] }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [],defaults: [[[false,{},{},73580]]]} }, _id: 0}}],

        [{$project: {a: { $substrBytes: ["Minnesota",20,6] }, _id: 0}}],

        [{$project: {a: { $concatArrays: [] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "brand Wooden",v: { $concat: ["Berkshire transmitter Architect",{ $ltrim: { input: '$obj.obj.str' } }] }},{k: "parse Avon",v: { $trim: { input: '$str' } }}]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.obj.obj.num'],12572] }, _id: 0}}],

        [{$project: {a: { $toLower: '$str' }, _id: 0}}],

        [{$project: {a: { $substrCP: [{ $dateToString: {date: { $dateToParts: {date: { $toDate: { $arrayToObject: [[{k: "paradigm extend",v: false}]] } },iso8601: false} },timezone: "Pacific/Marquesas"} },8,5] }, _id: 0}}],

        [{$project: {a: { $rtrim: { input: "bypassing Vermont" } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],[],['$obj.obj.obj.num',37957]]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[{ $dateToString: {date: { $toDate: { $substrCP: [{ $toLower: '$str' },4,16] } },format: "%M-%M-%M-%j-%j-%%-%Y-%j-%S",timezone: "America/Argentina/Mendoza"} },"Bacon teal Administrator"],['$str','$str'],["Gorgeous Money Market Account e-services"],[],[],[]]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[3558,'$obj.num'],'$num'] }, _id: 0}}],

        [{$project: {a: { $range: [14,18] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Awesome Steel Cheese circuit turquoise",v: { $month: { $week: { $dateToParts: { date: { $minute: new Date("2018-09-06T10:11:58.320Z") } } } } }}]] }, _id: 0}}],

        [{$project: {a: { $reverseArray: [[{ $concat: ["Berkshire AGP"] },{ $trim: { input: '$obj.obj.str' } }]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[54810,'$num'],52855] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[61300,21756],58954] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.obj.obj.num'],85630] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["Engineer Rubber"],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj' }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Peso Uruguayo Uruguay Peso en Unidades Indexadas concept",v: '$str'}]] }, _id: 0}}],

        [{$project: {a: { $dateToParts: {date: { $week: { $dayOfYear: { $isoWeek: { $dayOfYear: { $dateFromParts: {isoWeekYear: { $exp: '$num' },isoWeek: { $abs: '$obj.obj.obj.obj.num' },hour: { $divide: [90530,74030] },millisecond: { $indexOfArray: [{ $filter: {input: [{ $trim: {input: "wireless hack Monaco",chars: "encoding e-tailers white"} },{ $toLower: '$obj.obj.str' },'$str'],cond: { $eq: [{ $concatArrays: [['$$this',99403],['$obj.obj.obj.num',{ $ln: '$$this' }],[]] },{ $arrayElemAt: [[],61136] }] }} },{ $hour: { $dateFromString: {dateString: "2018-09-05T22:45:10.470Z",format: "%M-%M-%M-%S-%m-%j-%u-%L-%u-%z-%u-%u"} } }] }} } } } } },timezone: "Asia/Amman",iso8601: true} }, _id: 0}}],

        [{$project: {a: { $dateFromParts: {year: { $cmp: [{ $toString: { $arrayElemAt: [['$obj.obj.num'],75012] } },{ $arrayToObject: [[{k: "support Pataca",v: false}]] }] },month: { $ceil: 6204 },minute: { $multiply: [] }} }, _id: 0}}],

        [{$project: {a: { $toString: { $toLower: { $concat: [] } } }, _id: 0}}],

        [{$project: {a: { $map: {input: ['$obj.num'],in: { $ln: 33586 }} }, _id: 0}}],

        [{$project: {a: { $minute: { $week: { $dateFromParts: {isoWeekYear: { $floor: '$num' },isoWeek: { $size: [[]] },isoDayOfWeek: '$obj.obj.num',hour: { $size: [['$obj.str']] },minute: { $subtract: [41558,600] },second: { $multiply: [] },timezone: "Etc/GMT+12"} } } }, _id: 0}}],

        [{$project: {a: { $concat: [] }, _id: 0}}],

        [{$project: {a: { $range: [13,13] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[{ $concat: ['$obj.str',"Personal Loan Account"] }],[],["system sky blue Implementation","indigo Small Soft Chicken"],[]]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "bus",v: '$obj.obj.obj.str'},{k: "Accountability bandwidth",v: '$obj.num'}]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "syndicate",v: false}]] }, _id: 0}}],

        [{$project: {a: { $isoWeek: { $dayOfWeek: { $minute: { $isoWeek: { $isoWeekYear: { $dayOfYear: { $isoWeek: { $month: { $dateToString: {date: new Date("2018-09-06T08:19:26.834Z"),format: "%d-%V-%Z-%m-%u-%L",onNull: { $arrayElemAt: [[{ $concat: [{ $concat: [{ $toLower: "calculate" },"withdrawal Intelligent Plastic Fish Shirt",'$str'] }] },"Wisconsin orchestrate Money Market Account",'$obj.str'],'$num'] }} } } } } } } } } }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: '$obj.obj.date',format: "%Y-%G-%j-%L-%w-%S-%V-%H-%H-%Y"} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: '$obj.obj.obj.date',format: "%w-%L-%V-%Z-%U-%Y-%%-%m-%S-%V-%U-%L",onNull: "compressing"} }, _id: 0}}],

        [{$project: {a: { $millesecond: { $dayOfWeek: { $dayOfYear: { $isoWeekYear: { $dayOfMonth: '$date' } } } } }, _id: 0}}],

        [{$project: {a: { $substrBytes: ["Colombian Peso Unidad de Valor Real bluetooth",16,17] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[]] }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: new Date("2018-09-06T12:48:46.366Z"),timezone: "America/Metlakatla",onNull: { $range: [13,13,12] }} }, _id: 0}}],

        [{$project: {a: { $dayOfWeek: '$obj.obj.obj.date' }, _id: 0}}],

        [{$project: {a: { $concatArrays: [[]] }, _id: 0}}],

        [{$project: {a: { $isoWeek: { $year: { $isoWeekYear: { $dayOfWeek: { $dateToString: {date: new Date("2018-09-05T20:50:41.442Z"),onNull: { $map: {input: [],in: { $sqrt: 99047 }} }} } } } } }, _id: 0}}],

        [{$project: {a: { $dateFromParts: {isoWeekYear: { $pow: [81191,'$obj.num'] },isoDayOfWeek: { $mod: ['$obj.obj.num',82391] },minute: { $multiply: [] },second: { $ln: { $ceil: 9685 } },timezone: "Europe/Jersey"} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $minute: { $dateFromParts: {year: 93607,month: { $floor: '$num' },hour: { $size: [[]] },minute: { $log10: '$num' },second: { $mod: [57831,'$obj.num'] },timezone: "Asia/Ho_Chi_Minh"} } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $substrBytes: ["payment deposit Auto Loan Account",18,18] },'$obj.str'],90296] }, _id: 0}}],

        [{$project: {a: { $dayOfYear: { $hour: { $millesecond: { $dayOfYear: { $dayOfWeek: { $dayOfMonth: { $week: { $second: { $week: { $dateFromParts: {isoWeekYear: { $mod: [78794,'$obj.num'] },isoDayOfWeek: { $divide: [78589,'$obj.obj.obj.obj.num'] },hour: { $multiply: ['$num',{ $exp: 66681 }] },timezone: "Asia/Thimbu"} } } } } } } } } } }, _id: 0}}],

        [{$project: {a: { $map: {input: ["Concrete Crossroad Cotton"],as: 'devonte',in: { $sqrt: '$obj.obj.obj.obj.num' }} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[false,'$obj.obj.str'],85268] }, _id: 0}}],

        [{$project: {a: { $map: {input: [],in: { $log10: '$$this' }} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[56964,{ $ln: 21483 },'$obj.obj.obj.num'],[89016,'$obj.obj.obj.obj.num','$obj.obj.obj.obj.num','$num'],[],[{ $concat: ["panel South Dakota"] },'$str'],[{ $toLower: "Pizza" }]]] }, _id: 0}}],

        [{$project: {a: { $ltrim: { input: { $toUpper: '$obj.obj.obj.str' } } }, _id: 0}}],

        [{$project: {a: { $concatArrays: [[],['$num',58463],['$str']] }, _id: 0}}],

        [{$project: {a: { $dayOfMonth: { $millesecond: '$date' } }, _id: 0}}],

        [{$project: {a: { $concatArrays: [[79494],["Analyst system Inverse"],[{ $add: [12842,'$obj.obj.obj.obj.num'] },'$obj.obj.num'],[]] }, _id: 0}}],

        [{$project: {a: { $filter: {input: [],as: 'kendra',cond: { $lt: [{ $toUpper: "e-commerce" },{ $arrayElemAt: [[{ $ltrim: {input: { $substrBytes: [{ $concat: [{ $substrBytes: ['$obj.obj.str',4,7] },'$$kendra'] },20,19] },chars: "Specialist Re-contextualized"} },'$$kendra'],89302] }] }} }, _id: 0}}],

        [{$project: {a: { $range: [13,10,5] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Analyst mobile",v: true},{k: "Steel Borders",v: '$obj.obj.obj.num'}]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[{ $toLower: '$obj.obj.obj.str' },'$obj.str',"Islands B2B"],[51517],["Branding"],[],['$obj.num','$obj.obj.obj.num']]] }, _id: 0}}],

        [{$project: {a: { $dateFromParts: {year: { $size: [[]] },month: { $pow: ['$obj.obj.obj.obj.num','$obj.obj.obj.obj.num'] },timezone: "America/St_Vincent"} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $toString: { $zip: { inputs: [[{ $ltrim: { input: "Computer Pennsylvania e-business" } },'$str'],[],[{ $substrCP: ['$obj.obj.obj.str',5,12] },{ $concat: ["Diverse Practical Steel Fish Chicken"] }],['$obj.obj.num'],[20292]] } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "visualize District",v: { $pow: [18302,14523] }},{k: "application",v: "Missouri bypassing"}]] }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [['$obj.obj.num',1259],["JBOD Belize scale"],["HDD",'$str']],useLongestLength: true} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Health",v: true}]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Chair Park",v: "Trail"},{k: "Benin hack Garden",v: false}]] }, _id: 0}}],

        [{$project: {a: { $minute: { $toDate: { $arrayElemAt: [['$obj.obj.obj.obj.num','$obj.obj.num'],27372] } } }, _id: 0}}],

        [{$project: {a: { $toDate: { $millesecond: { $minute: { $isoWeekYear: { $month: { $minute: { $dayOfWeek: { $dayOfMonth: { $dateToString: {date: '$date',format: "%H-%M-%u-%S-%H-%U-%G-%%-%G-%z",onNull: '$obj.str'} } } } } } } } } }, _id: 0}}],

        [{$project: {a: { $toLower: "back-end matrices Movies" }, _id: 0}}],

        [{$project: {a: { $filter: {input: [{ $trim: { input: '$obj.str' } }],as: 'carissa',cond: { $eq: [{ $substrBytes: ['$$carissa',1,12] },{ $month: { $isoWeek: { $dateToParts: { date: { $week: { $second: { $millesecond: { $toDate: { $arrayToObject: [[["innovate compressing Toys"],[72275,'$obj.num'],[{ $substrCP: [{ $toLower: "solid state" },7,5] },'$str',{ $rtrim: {input: '$obj.obj.obj.str',chars: { $ltrim: { input: "Administrator" } }} },{ $rtrim: { input: "synergy withdrawal" } },{ $toLower: "index gold" }]]] } } } } } } } } }] }} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],63722] }, _id: 0}}],

        [{$project: {a: { $reverseArray: [[true]] }, _id: 0}}],

        [{$project: {a: { $filter: {input: [83272,'$obj.obj.num'],cond: true} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["Reactive AGP Concrete"],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Architect B2B",v: true},{k: "Massachusetts",v: '$obj.obj.obj.date'},{k: "Cotton Checking Account Guam",v: 1728}]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "program India Norfolk Island",v: 60864},{k: "convergence iterate",v: new Date("2018-09-06T13:28:24.053Z")}]] }, _id: 0}}],

        [{$project: {a: { $range: [7,0] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[{ $substrBytes: ["Small Frozen Chicken black Pennsylvania",20,4] }],[{ $rtrim: {input: "Borders Auto Loan Account",chars: { $ltrim: { input: "monitor Ergonomic" } }} },{ $concat: ['$obj.obj.str'] }],[],[]]] }, _id: 0}}],

        [{$project: {a: { $range: [8,19,15] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.str'],'$obj.obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "e-business",v: 18949}]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[]] }, _id: 0}}],

        [{$project: {a: { $toLower: "Station New Mexico" }, _id: 0}}],

        [{$project: {a: { $toLower: '$obj.obj.str' }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Manager",v: 34484},{k: "Borders Creative",v: '$obj.obj.date'}]] }, _id: 0}}],

        [{$project: {a: { $rtrim: { input: "Car Sleek Rubber Bike Refined Steel Pizza" } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Cedi",v: 57376},{k: "Bedfordshire",v: { $millesecond: { $minute: { $toDate: { $arrayToObject: [[[{ $dateToString: {date: new Date("2018-09-06T19:36:29.975Z"),format: "%L-%G-%d-%G-%H-%Y-%d-%U-%m-%j-%V",onNull: { $rtrim: {input: "Andorra Electronics",chars: { $toUpper: '$obj.obj.str' }} }} }],['$obj.obj.obj.num'],[],[]]] } } } }},{k: "Focused portals Small Soft Chair",v: false}]] }, _id: 0}}],

        [{$project: {a: { $toLower: "Shoes" }, _id: 0}}],

        [{$project: {a: { $toString: { $arrayElemAt: [[67317],54416] } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "cross-platform Shirt SSL",v: '$obj.obj.obj.str'},{k: "sensor solid state Investment Account",v: 56747}]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],44130] }, _id: 0}}],

        [{$project: {a: { $isoWeek: { $month: { $dayOfMonth: { $dateFromParts: {year: { $size: [[{ $substr: ["cross-platform",14,8] },'$obj.str']] },month: { $log: ['$obj.obj.obj.obj.num',53061] },day: { $floor: 83425 },second: { $abs: '$obj.obj.obj.num' }} } } } }, _id: 0}}],

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
