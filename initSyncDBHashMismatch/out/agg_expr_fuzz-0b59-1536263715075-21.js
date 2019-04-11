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
        return coll.insert({_id: 13166,str: "Regional Soft",num: 56002,date: new Date("2018-09-06T09:22:01.785Z"),array: [69809,"virtual Sleek",new Date("2018-09-06T01:26:03.871Z"),"Nauru open architecture migration",new Date("2018-09-06T08:56:49.209Z"),[],new Date("2018-09-06T07:07:28.115Z"),16913,[76491,{_id: 13167,str: "Kuwaiti Dinar",num: 62747,array: [],obj: {_id: 13168,str: "recontextualize haptic Administrator",num: 836,date: new Date("2018-09-06T06:28:23.457Z"),array: [],obj: {}}},{_id: 13169,str: "pixel implement Ball",num: 80182,date: new Date("2018-09-05T23:21:53.856Z"),obj: {_id: 13170,num: 74499,date: new Date("2018-09-06T12:11:47.480Z"),array: [],obj: {_id: 13171,num: 81769,array: [{_id: 13172,str: "Soft IB",date: new Date("2018-09-06T07:55:57.697Z"),array: [new Date("2018-09-06T10:41:47.677Z"),"Rhode Island Connecticut Credit Card Account"]},new Date("2018-09-06T05:18:20.422Z")]}}}],52307,[{_id: 13173,str: "Global",date: new Date("2018-09-05T20:19:22.087Z"),obj: {}},"Soft PCI",28836,"e-commerce efficient copying",new Date("2018-09-06T14:09:30.957Z")],43292]});
    },

    function(coll) {
        return coll.insert({_id: 13174,str: "withdrawal Savings Account Steel",num: 53535,date: new Date("2018-09-06T02:03:13.506Z"),array: [["Mobility"],{_id: 13175,str: "sticky",num: 67417,date: new Date("2018-09-05T23:07:44.386Z"),obj: {_id: 13176,str: "Concrete",num: 30225,array: [],obj: {}}},"Gorgeous Steel Soap",94298,new Date("2018-09-05T22:58:35.614Z"),new Date("2018-09-05T23:34:23.972Z"),new Date("2018-09-06T13:47:07.212Z"),{_id: 13177,num: 7563,date: new Date("2018-09-06T05:48:00.356Z"),obj: {_id: 13178,str: "Steel Investment Account",num: 43843,date: new Date("2018-09-06T10:00:08.622Z"),array: [],obj: {}}},35498,new Date("2018-09-06T02:22:32.673Z"),65808,"Creative"]});
    },

    function(coll) {
        return coll.insert({_id: 13179,num: 95111,date: new Date("2018-09-05T20:45:42.671Z"),array: [],obj: {_id: 13180,str: "Towels hack deposit",num: 62406,date: new Date("2018-09-06T11:41:42.526Z"),array: ["calculating Lead",9270,new Date("2018-09-06T13:50:44.882Z"),{_id: 13181,str: "index override card",date: new Date("2018-09-06T19:42:13.186Z"),array: ["Generic Clothing Pants",87134,new Date("2018-09-05T20:45:09.303Z"),78491,1747],obj: {}},[],"next-generation Implementation",new Date("2018-09-06T12:22:12.409Z"),new Date("2018-09-06T15:52:44.291Z"),["Manager",56312,{_id: 13182,str: "magenta static Gateway",num: 84372,obj: {_id: 13183,num: 27712,date: new Date("2018-09-05T22:37:33.800Z"),array: [new Date("2018-09-06T13:40:44.128Z"),[]]}}],"copy Cotton Computer"],obj: {_id: 13184,str: "magenta Frozen",num: 99082,array: []}}});
    },

    function(coll) {
        return coll.insert({_id: 13185,str: "program Principal Handmade",array: [new Date("2018-09-06T10:55:31.143Z"),"system-worthy payment",53171,{_id: 13186,str: "Operations",num: 28907,date: new Date("2018-09-06T01:49:16.466Z"),array: [],obj: {}},"Handmade Cotton Ball bandwidth viral",new Date("2018-09-06T19:51:30.443Z"),"primary Generic International",62982,new Date("2018-09-06T15:55:53.710Z"),14352,{_id: 13187,num: 37306,array: [new Date("2018-09-06T01:24:14.760Z")],obj: {_id: 13188,str: "infomediaries Montenegro Buckinghamshire",num: 81192,date: new Date("2018-09-06T17:55:06.872Z"),obj: {_id: 13189,num: 53160,date: new Date("2018-09-06T11:59:16.765Z"),array: [{_id: 13190,str: "Micronesia",num: 85103,date: new Date("2018-09-06T11:31:31.614Z"),array: [],obj: {_id: 13191,str: "CFA Franc BEAC Program SMTP",num: 87908,array: []}}],obj: {}}}},{_id: 13192,str: "implement",obj: {}},[new Date("2018-09-05T22:39:47.549Z"),"experiences Auto Loan Account Indian Rupee",50797],new Date("2018-09-05T22:14:32.539Z")]});
    },

    function(coll) {
        return coll.insert({_id: 13193,str: "Rustic Concrete Car",num: 75604,date: new Date("2018-09-06T11:21:27.330Z"),array: [new Date("2018-09-06T07:10:04.378Z"),new Date("2018-09-06T18:58:08.296Z"),new Date("2018-09-06T12:51:31.691Z"),"Sao Tome and Principe multi-byte Pants","wireless invoice Intelligent Granite Bacon",86155,80047,{_id: 13194,str: "Awesome local",date: new Date("2018-09-06T17:42:55.398Z")},36741,[],"Games transmit"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 13195,str: "content",num: 45550,date: new Date("2018-09-06T14:11:34.847Z"),array: [],obj: {_id: 13196,date: new Date("2018-09-06T06:45:56.920Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 13197,str: "Buckinghamshire UIC-Franc Village",num: 46313,date: new Date("2018-09-06T12:57:07.060Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 13198,str: "Chips web-enabled Netherlands",num: 51971,date: new Date("2018-09-06T10:37:24.549Z"),array: [],obj: {_id: 13199,str: "Industrial",num: 40438,array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 13200,str: "Street",num: 76569,date: new Date("2018-09-05T22:29:54.666Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 13201,str: "disintermediate Investment Account",num: 41704,date: new Date("2018-09-06T08:52:06.058Z"),array: ["Interactions",new Date("2018-09-06T00:23:58.512Z"),16200,"multi-tasking Chief integrated","Monitored Connecticut Gloves",31700,[[],new Date("2018-09-06T15:08:13.477Z"),{_id: 13202,num: 97677,date: new Date("2018-09-05T23:23:53.786Z"),array: [27953,new Date("2018-09-06T16:53:42.440Z")],obj: {_id: 13203,str: "Small programming yellow",num: 60181,array: [],obj: {_id: 13204,str: "invoice",num: 46815,date: new Date("2018-09-06T11:39:42.999Z"),obj: {}}}},new Date("2018-09-05T23:26:08.645Z"),{_id: 13205,str: "input Bahrain",num: 16824,date: new Date("2018-09-06T15:19:36.065Z"),array: [],obj: {}}],"invoice Keyboard SAS","Human Credit Card Account",new Date("2018-09-06T14:33:31.826Z")],obj: {_id: 13206,num: 91911}});
    },

    function(coll) {
        return coll.insert({_id: 13207,str: "synthesize Steel array",date: new Date("2018-09-06T02:39:22.467Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 13208,str: "Specialist Tennessee",num: 41818,date: new Date("2018-09-06T19:01:16.018Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 13209,str: "reboot implementation Checking Account",num: 40058,date: new Date("2018-09-05T20:38:53.728Z"),array: [new Date("2018-09-06T18:03:08.729Z"),{_id: 13210,str: "models Metal efficient",num: 85864,date: new Date("2018-09-06T01:36:15.340Z"),array: [],obj: {_id: 13211,str: "SDD SDR payment",array: [],obj: {_id: 13212,str: "Ergonomic bricks-and-clicks",date: new Date("2018-09-06T12:04:11.402Z"),obj: {}}}},"International",30859,{_id: 13213,num: 35906,date: new Date("2018-09-06T12:18:46.532Z"),obj: {_id: 13214,str: "France",date: new Date("2018-09-06T18:07:55.726Z"),array: []}},new Date("2018-09-06T16:25:44.727Z"),"Shirt Metal Danish Krone",["functionalities",[39849]],[],"capacitor Parks Branch",{_id: 13215,num: 40177,array: [352],obj: {}},new Date("2018-09-06T13:09:38.221Z"),new Date("2018-09-06T09:25:31.270Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 13216,str: "Washington",num: 42633,date: new Date("2018-09-06T05:01:27.741Z"),array: ["purple",33893,new Date("2018-09-06T00:42:52.929Z"),[],98825,new Date("2018-09-05T20:33:18.329Z"),{_id: 13217,str: "Points quantify payment",num: 71293,date: new Date("2018-09-06T00:27:23.677Z"),array: [],obj: {}},["indexing",56176,[],{_id: 13218,str: "Somalia Principal",num: 26595,array: [69152,new Date("2018-09-06T03:59:43.174Z")],obj: {_id: 13219,str: "pricing structure",num: 63953,date: new Date("2018-09-06T09:38:10.493Z")}}]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 13220,str: "Baby Avon",num: 9111,date: new Date("2018-09-06T04:41:01.077Z"),array: [],obj: {_id: 13221,str: "structure",num: 34862,date: new Date("2018-09-06T01:19:54.905Z"),array: [new Date("2018-09-05T21:38:26.865Z"),"incubate Fresh",new Date("2018-09-06T03:19:37.870Z"),{_id: 13222,num: 36448,array: [33450,64443,"Sleek Concrete Bike array","withdrawal navigate Licensed"],obj: {_id: 13223,str: "Credit Card Account Buckinghamshire",date: new Date("2018-09-06T03:44:28.980Z"),obj: {}}},{_id: 13224,date: new Date("2018-09-06T17:28:57.600Z"),obj: {_id: 13225,str: "Buckinghamshire Lead Cambridgeshire",num: 53026,date: new Date("2018-09-06T17:27:44.264Z"),array: []}},[],{_id: 13226,str: "Integration",obj: {}},new Date("2018-09-06T03:00:59.234Z"),49474,[],30553,["Concrete"]]}});
    },

    function(coll) {
        return coll.insert({_id: 13227,str: "impactful online Plastic",date: new Date("2018-09-06T05:03:01.064Z"),array: [],obj: {_id: 13228,str: "bandwidth Ergonomic Soft Tuna Buckinghamshire",num: 44352,date: new Date("2018-09-06T10:19:06.965Z"),array: [new Date("2018-09-05T22:13:08.432Z"),64531,[[new Date("2018-09-06T06:45:42.725Z"),83052,"incentivize"],"Rapids Direct Forks","back up Personal Loan Account"],new Date("2018-09-06T16:34:53.932Z"),86296,"hacking rich Savings Account",{_id: 13229,num: 5227,date: new Date("2018-09-06T19:24:17.839Z"),obj: {}},31694,new Date("2018-09-05T21:09:41.096Z"),"SSL user-centric Home Loan Account",75497],obj: {_id: 13230,str: "auxiliary parsing Customer-focused",num: 97840,date: new Date("2018-09-05T22:27:20.933Z"),array: [],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 13231,str: "Shoes",num: 87405,date: new Date("2018-09-06T07:12:24.219Z"),array: ["Investment Account JBOD Prairie","transmitting Metal Auto Loan Account",97012,"Granite metrics","Internal front-end",[],8154,new Date("2018-09-05T21:57:22.101Z"),new Date("2018-09-06T05:00:40.852Z"),[],new Date("2018-09-06T16:28:38.050Z"),{_id: 13232,str: "Producer GB",num: 49358,date: new Date("2018-09-06T11:50:00.494Z"),obj: {}}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 13233,str: "transform GB",num: 37398,date: new Date("2018-09-06T08:17:23.454Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 13234,str: "Steel sensor Rubber",num: 41042,date: new Date("2018-09-05T20:58:30.190Z"),array: [{_id: 13235,str: "Rustic",num: 36929,date: new Date("2018-09-06T16:51:06.630Z"),array: [new Date("2018-09-06T07:18:36.905Z"),"Decentralized Ports product",[],{_id: 13236,str: "emulation Buckinghamshire Mouse",date: new Date("2018-09-06T08:29:02.505Z"),array: [new Date("2018-09-05T21:10:42.263Z")],obj: {}},new Date("2018-09-06T00:12:07.899Z")],obj: {_id: 13237,str: "Berkshire",num: 62816,date: new Date("2018-09-06T19:07:19.104Z"),array: [],obj: {}}},5263,"Electronics lime Algerian Dinar",85648,52985,63237,9181,new Date("2018-09-06T00:27:49.864Z"),"Bike",{_id: 13238,date: new Date("2018-09-06T03:52:00.854Z"),obj: {_id: 13239,num: 12971}},{_id: 13240,str: "Shoes Canyon",num: 41218,date: new Date("2018-09-06T00:19:37.237Z"),array: [],obj: {_id: 13241,str: "Eritrea hardware"}},new Date("2018-09-06T07:19:39.890Z")]});
    },

    function(coll) {
        return coll.insert({_id: 13242,str: "ROI New York Communications",num: 77130,date: new Date("2018-09-06T06:54:33.195Z"),array: [new Date("2018-09-06T13:12:19.953Z"),new Date("2018-09-06T15:42:30.389Z"),new Date("2018-09-06T05:39:45.985Z"),[],[],27008,{_id: 13243,str: "Multi-tiered payment Chief",date: new Date("2018-09-05T22:24:06.527Z"),array: [],obj: {_id: 13244,num: 30251,array: ["Administrator functionalities"],obj: {}}},"withdrawal","Congolese Franc"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 13245,str: "mobile concept",num: 40631,array: [new Date("2018-09-06T18:54:58.967Z"),[],47217,new Date("2018-09-06T10:12:22.589Z"),"Ergonomic Secured",14775,new Date("2018-09-06T14:11:29.943Z"),new Date("2018-09-06T15:57:29.212Z"),new Date("2018-09-05T21:42:31.648Z"),[],50589],obj: {_id: 13246,num: 23561,date: new Date("2018-09-06T14:59:57.721Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 13247,str: "digital",num: 9543,date: new Date("2018-09-05T20:16:58.419Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 13248,str: "5th generation Frozen IB",num: 20601,date: new Date("2018-09-06T02:42:28.014Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 13249,str: "Baby Hill supply-chains",num: 73997,date: new Date("2018-09-06T15:53:27.511Z"),array: ["extend",73566,new Date("2018-09-06T04:42:31.008Z"),{_id: 13250,str: "Unbranded Investment Account",num: 96998,date: new Date("2018-09-06T00:37:37.103Z"),array: [],obj: {_id: 13251,num: 10745,array: [[]],obj: {}}},new Date("2018-09-06T08:23:10.515Z"),"withdrawal Unbranded Plastic Fish",86120,{_id: 13252,str: "Toys Pants",array: ["applications",48475,"initiative withdrawal Hawaii"],obj: {_id: 13253,str: "Architect Central",num: 14780,date: new Date("2018-09-06T00:34:23.792Z"),array: [],obj: {}}},new Date("2018-09-05T21:08:52.854Z"),{_id: 13254,date: new Date("2018-09-06T18:58:19.450Z"),obj: {_id: 13255,str: "Saint Kitts and Nevis",date: new Date("2018-09-06T02:40:37.008Z")}},76844,new Date("2018-09-06T01:51:54.157Z"),["Corporate",new Date("2018-09-05T21:57:11.512Z")]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 13256,str: "world-class",num: 55037,date: new Date("2018-09-06T03:19:20.426Z"),array: ["Savings Account back up Concrete",{_id: 13257,num: 34481,date: new Date("2018-09-06T16:51:18.155Z"),array: [],obj: {}},67159,new Date("2018-09-05T21:33:49.841Z"),new Date("2018-09-06T19:20:07.467Z"),"Assistant",51595,[[],new Date("2018-09-06T19:10:46.084Z"),43745],{_id: 13258,str: "Generic Shoes",num: 33848,date: new Date("2018-09-06T11:34:59.700Z"),obj: {_id: 13259,str: "deposit Licensed architect",num: 75900,date: new Date("2018-09-06T01:33:44.258Z"),array: [[]]}},"deposit",[]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 13260,str: "matrix",num: 79044,date: new Date("2018-09-06T14:01:38.967Z"),obj: {_id: 13261,str: "purple",date: new Date("2018-09-06T19:01:41.590Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 13262,num: 56920,date: new Date("2018-09-05T21:08:32.075Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 13263,str: "eco-centric bandwidth Tokelau",num: 58918,date: new Date("2018-09-05T20:48:45.462Z"),array: [],obj: {_id: 13264,str: "RAM Checking Account",num: 84470,date: new Date("2018-09-06T09:27:24.424Z"),array: ["Digitized",{_id: 13265,str: "payment Architect",date: new Date("2018-09-06T12:14:50.009Z"),obj: {}},"Tasty Frozen Computer mesh Rustic",[43926],{_id: 13266,num: 12937,date: new Date("2018-09-06T01:00:49.316Z"),array: ["interfaces Intelligent Rubber Tuna 5th generation",new Date("2018-09-06T04:53:01.220Z")],obj: {}},new Date("2018-09-06T19:12:39.334Z"),"pricing structure plum",62471,"Kazakhstan Forward",56583,[],new Date("2018-09-06T06:12:55.695Z"),86246],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 13267,str: "e-services withdrawal",num: 88287,date: new Date("2018-09-06T02:13:00.698Z"),array: [],obj: {_id: 13268,str: "Pakistan Rupee next-generation Sleek",num: 36309,array: [new Date("2018-09-05T22:15:21.285Z"),4217,"neural Uzbekistan Sum",29334,new Date("2018-09-06T01:39:26.114Z"),{_id: 13269,obj: {_id: 13270,str: "Investment Account Direct brand",num: 28495,date: new Date("2018-09-06T10:26:34.927Z"),obj: {}}},new Date("2018-09-06T19:49:41.478Z"),"intermediate","quantifying communities Gloves",{_id: 13271,num: 8512,date: new Date("2018-09-06T18:04:26.921Z"),obj: {}}]}});
    },

    function(coll) {
        return coll.insert({_id: 13272,str: "Buckinghamshire Loaf web services",num: 76572,date: new Date("2018-09-06T14:58:01.567Z"),array: ["Right-sized Benin world-class",[],new Date("2018-09-06T12:54:36.982Z"),23610,73791,"Uruguay",10673,{_id: 13273,str: "world-class Incredible Granite Towels frame",num: 29211,date: new Date("2018-09-06T18:00:25.692Z"),array: ["1080p Supervisor",92915],obj: {}},"killer port synthesize",[new Date("2018-09-06T04:13:28.537Z"),new Date("2018-09-05T21:06:56.798Z")],{_id: 13274,str: "online Bacon Administrator",num: 48209,date: new Date("2018-09-06T17:15:53.325Z")},11351,"Technician Practical Group",new Date("2018-09-06T02:27:16.287Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 13275,str: "Shirt South Carolina Specialist",num: 13575,date: new Date("2018-09-06T01:38:44.292Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 13276,date: new Date("2018-09-06T07:39:14.335Z"),array: [{_id: 13277,str: "mindshare Granite 1080p",num: 47602,date: new Date("2018-09-06T16:20:50.342Z"),array: [new Date("2018-09-06T11:48:13.989Z"),97054,new Date("2018-09-06T08:23:12.435Z"),61419,"Rustic"],obj: {_id: 13278,str: "Organized",num: 86195,date: new Date("2018-09-06T03:12:11.711Z"),array: [],obj: {}}},"Checking Account",[],new Date("2018-09-06T18:06:01.114Z"),{_id: 13279,str: "Granite",num: 61230,array: [],obj: {_id: 13280,str: "Chief",num: 24345,date: new Date("2018-09-06T02:45:14.838Z"),array: [new Date("2018-09-06T17:54:57.238Z"),"value-added framework Response"]}},[new Date("2018-09-06T01:28:05.654Z")],[{ _id: 13281 },"bypass",16036],16505,new Date("2018-09-05T21:04:24.410Z"),"interface embrace"],obj: {_id: 13282,str: "deposit Credit Card Account Principal",obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 13283,str: "Utah Unbranded Frozen Computer global",num: 28538,date: new Date("2018-09-06T17:50:39.965Z"),array: [38626,new Date("2018-09-06T11:45:50.484Z"),new Date("2018-09-06T10:09:46.060Z"),96190,"matrix Frozen",[],25769,new Date("2018-09-06T07:25:13.276Z"),"Representative Unbranded teal",new Date("2018-09-06T12:45:27.374Z"),"Mission fresh-thinking","SDD Streamlined",{_id: 13284,str: "deposit copying",date: new Date("2018-09-06T08:48:39.162Z"),obj: {}}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 13285,str: "customized eyeballs Investment Account",num: 73737,date: new Date("2018-09-06T18:34:30.789Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 13286,str: "Human Sleek Metal Gloves",num: 91540,date: new Date("2018-09-06T00:26:30.665Z"),array: [],obj: {_id: 13287,str: "quantifying Credit Card Account",date: new Date("2018-09-06T09:44:23.216Z"),array: [new Date("2018-09-06T13:19:42.604Z"),"Bedfordshire",63772,new Date("2018-09-05T21:57:56.952Z"),"Group Awesome Cotton Tuna",77180,{_id: 13288,str: "Senior",obj: {}},42444],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 13289,str: "Rustic Frozen Keyboard Orchestrator",date: new Date("2018-09-06T07:27:33.629Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 13290,str: "data-warehouse Algerian Dinar",num: 69833,array: [new Date("2018-09-06T02:43:46.246Z"),"Oregon white",6941,75254,"tan sexy Factors",46311,new Date("2018-09-06T19:13:03.707Z"),[],"AI",[83146,new Date("2018-09-06T06:58:56.983Z"),{_id: 13291,str: "Avon portals",num: 79608,date: new Date("2018-09-06T14:10:01.968Z"),array: [],obj: {}},"firewall Supervisor"],"Avon fuchsia solid state","Coordinator"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 13292,str: "alarm",num: 86249,date: new Date("2018-09-06T19:32:57.654Z"),array: ["Tuna backing up",new Date("2018-09-06T02:24:03.747Z"),"connect array Minnesota",[47400,new Date("2018-09-06T16:37:57.242Z"),{_id: 13293,str: "Fort",num: 42550,date: new Date("2018-09-05T23:08:19.307Z"),array: [],obj: {}},{_id: 13294,str: "Auto Loan Account",num: 1032,array: [new Date("2018-09-06T00:23:37.402Z")]},34549,"orange Dominican Republic"],new Date("2018-09-06T16:31:02.963Z"),"New York user-centric International",18763,"archive"]});
    },

    function(coll) {
        return coll.insert({_id: 13295,str: "withdrawal Product",num: 15359,date: new Date("2018-09-06T09:15:38.777Z"),array: [],obj: {_id: 13296,num: 38589,array: [new Date("2018-09-06T13:07:37.560Z"),"bypass",55059,"deposit purple",new Date("2018-09-06T00:54:44.812Z"),40705,"Refined Sausages","Fresh copy capacity",{_id: 13297,str: "portals hard drive",date: new Date("2018-09-06T00:43:15.123Z"),array: [[new Date("2018-09-05T20:48:32.883Z"),"quantifying Technician mission-critical","District",81032,{_id: 13298,date: new Date("2018-09-05T21:15:45.942Z"),array: []}],59896,[]],obj: {}},24490],obj: {_id: 13299,str: "Outdoors Customer",num: 22148}}});
    },

    function(coll) {
        return coll.insert({_id: 13300,str: "input Generic Fresh Mouse compress",num: 4906,date: new Date("2018-09-05T23:09:28.723Z"),array: ["Mouse",47408,65054,new Date("2018-09-05T20:01:18.783Z"),new Date("2018-09-06T10:24:20.650Z"),new Date("2018-09-06T16:03:17.600Z"),5166,["1080p"],"Avon",new Date("2018-09-05T22:22:00.489Z"),{_id: 13301,str: "Security Assurance complexity",num: 60153,date: new Date("2018-09-06T05:00:07.269Z"),array: [["Small"]],obj: {_id: 13302,num: 12917,date: new Date("2018-09-06T03:50:29.405Z"),array: [],obj: {}}},[],new Date("2018-09-06T12:05:00.446Z"),"Inlet"]});
    },

    function(coll) {
        return coll.insert({_id: 13303,str: "value-added",num: 89444,date: new Date("2018-09-05T23:32:48.807Z"),array: [new Date("2018-09-05T21:21:11.328Z"),"orchid Ergonomic",new Date("2018-09-06T11:03:21.663Z"),59518,[],"online Licensed Cotton Table",[],"Som Fantastic Cotton Chicken",33232,"Chair"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 13304,str: "clicks-and-mortar Configuration",num: 72876,date: new Date("2018-09-06T02:57:18.254Z"),array: [],obj: {_id: 13305,str: "initiatives",date: new Date("2018-09-06T07:22:42.574Z"),obj: {_id: 13306,num: 89748,date: new Date("2018-09-05T20:32:08.015Z"),obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 13307,str: "copying synergize Solutions",num: 99950,date: new Date("2018-09-05T23:02:36.116Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 13308,num: 22939,date: new Date("2018-09-06T00:14:08.643Z"),array: [new Date("2018-09-06T15:57:14.678Z"),54893,"payment",53819,7406,{_id: 13309,str: "Pitcairn Islands Keyboard Soft",num: 47295,date: new Date("2018-09-06T18:38:51.323Z"),obj: {_id: 13310,str: "back-end rich",date: new Date("2018-09-06T03:59:24.959Z"),array: [],obj: {}}},new Date("2018-09-06T02:51:21.870Z"),"Global",{_id: 13311,date: new Date("2018-09-06T19:20:23.163Z"),array: [new Date("2018-09-06T01:28:33.891Z"),[[],87785,"Electronics"],{_id: 13312,str: "Plastic Fantastic Granite Fish",num: 17859,obj: {_id: 13313,str: "Small Liaison",num: 45650,date: new Date("2018-09-06T06:47:18.806Z"),array: ["Toys bandwidth Representative",[],new Date("2018-09-05T21:24:50.539Z"),new Date("2018-09-05T23:48:51.524Z")],obj: {_id: 13314,str: "Small",num: 92401}}}],obj: {_id: 13315,str: "fuchsia",num: 86790,array: ["Concrete connecting seize","eyeballs"],obj: {}}},[]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 13316,str: "Self-enabling vertical",date: new Date("2018-09-06T12:58:51.412Z"),array: [70926,new Date("2018-09-06T03:50:10.290Z"),88333,"parallelism",new Date("2018-09-05T22:00:43.789Z"),{_id: 13317,num: 77500,date: new Date("2018-09-06T00:30:40.914Z"),obj: {}},"Unbranded Cotton Towels",{_id: 13318,str: "Integration schemas",num: 49126,array: [[new Date("2018-09-06T06:26:22.634Z"),"RAM dynamic",[]],59908,{_id: 13319,num: 73166,date: new Date("2018-09-06T00:48:59.205Z"),array: [],obj: {_id: 13320,str: "migration",num: 53362,array: [{_id: 13321,str: "Research Cambridgeshire CSS",date: new Date("2018-09-05T20:57:10.735Z"),array: [],obj: {}},new Date("2018-09-06T01:03:45.849Z"),"Lead Money Market Account Direct"]}},new Date("2018-09-06T03:38:22.667Z"),70881],obj: {_id: 13322,str: "repurpose",num: 38593}},new Date("2018-09-06T09:41:33.407Z"),"card invoice"],obj: {_id: 13323,str: "Kentucky Music",num: 6926,date: new Date("2018-09-06T10:50:55.495Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 13324,num: 4887,date: new Date("2018-09-06T04:16:20.660Z"),array: ["green logistical","Reactive Unbranded Wooden Hat",new Date("2018-09-05T20:26:50.886Z"),81740,new Date("2018-09-06T13:04:08.178Z"),{_id: 13325,str: "Directives web-enabled Indonesia",num: 75096,date: new Date("2018-09-06T10:38:47.287Z"),array: [51102,"cyan incubate copying",new Date("2018-09-06T15:05:20.356Z"),[70747]]},["hacking Intelligent Metal Soap Tasty"],19935,{_id: 13326,str: "composite payment",num: 30318,array: [],obj: {}},new Date("2018-09-06T18:40:14.059Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 13327,str: "Iran uniform European Monetary Unit (E.M.U.-6)",num: 52063,date: new Date("2018-09-06T05:12:12.669Z"),array: [26579,{_id: 13328,str: "Hryvnia",num: 48107,date: new Date("2018-09-05T23:09:33.438Z"),array: [],obj: {_id: 13329,str: "solutions",num: 83006,date: new Date("2018-09-06T02:04:12.609Z")}},72748,"dynamic Cambridgeshire Rapid","Ethiopia",new Date("2018-09-05T22:29:43.106Z"),"cross-platform orange",[],new Date("2018-09-06T14:26:22.653Z"),"brand","deposit",new Date("2018-09-06T01:52:19.339Z"),[[],93431,new Date("2018-09-06T18:57:30.759Z")]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 13330,str: "e-commerce",num: 99467,date: new Date("2018-09-05T21:45:42.784Z"),array: ["Auto Loan Account",new Date("2018-09-06T13:32:35.257Z"),"Iowa",14800,"deploy transmitting",65427,43019,new Date("2018-09-06T08:31:45.292Z"),new Date("2018-09-05T21:31:16.999Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 13331,str: "Berkshire FTP",num: 61883,date: new Date("2018-09-06T19:50:20.210Z"),array: [],obj: {_id: 13332,num: 26968,date: new Date("2018-09-06T01:28:29.287Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 13333,str: "override Granite middleware",num: 20383,date: new Date("2018-09-06T02:11:42.058Z"),array: [43736,new Date("2018-09-06T18:45:42.532Z"),new Date("2018-09-06T05:35:31.192Z"),[],new Date("2018-09-06T03:05:27.570Z"),79875,"portal Dynamic",15504,"architect"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 13334,str: "cross-platform supply-chains solid state",num: 94459,date: new Date("2018-09-06T15:27:49.946Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 13335,str: "Sao Tome and Principe",num: 78711,date: new Date("2018-09-06T08:36:14.245Z"),array: [],obj: {_id: 13336,str: "clicks-and-mortar IB",num: 30539,date: new Date("2018-09-05T20:39:03.149Z")}});
    },

    function(coll) {
        return coll.insert({_id: 13337,str: "encoding XSS",num: 45652,date: new Date("2018-09-06T19:37:35.152Z"),array: [66450,new Date("2018-09-06T17:37:03.881Z"),new Date("2018-09-06T17:20:57.176Z"),[]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 13338,str: "Underpass",num: 47614,date: new Date("2018-09-06T09:04:20.278Z"),array: [20373,new Date("2018-09-05T21:11:23.819Z"),new Date("2018-09-06T11:39:48.066Z"),83813,"Specialist",[{_id: 13339,str: "Berkshire",date: new Date("2018-09-06T19:50:37.621Z"),array: [],obj: {_id: 13340,str: "back-end utilize Quality",num: 87514,date: new Date("2018-09-05T19:57:06.111Z"),array: [],obj: {_id: 13341,str: "fresh-thinking Centers Fantastic Metal Bike",num: 83933,date: new Date("2018-09-06T10:07:27.679Z"),obj: {_id: 13342,num: 81632,array: ["methodologies Awesome Plastic Tuna Concrete","Future-proofed Assistant",new Date("2018-09-06T14:42:36.375Z"),["Data Unbranded Cotton Pizza"]]}}}},94035],new Date("2018-09-06T10:31:26.321Z"),95552,80272,new Date("2018-09-06T09:36:05.211Z"),"compress"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 13343,str: "synthesizing Kwanza AI",num: 38929,date: new Date("2018-09-06T02:51:20.587Z"),array: [],obj: {_id: 13344,num: 44032,obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 13345,str: "firewall 6th generation",num: 59694,date: new Date("2018-09-06T19:08:02.835Z"),array: [93044,10301,"ADP process improvement killer",new Date("2018-09-06T18:46:14.662Z"),new Date("2018-09-06T16:15:53.452Z"),"District Vermont Human","Shoes Licensed","Factors transmitting Assistant",{_id: 13346,str: "Licensed Metal Salad Representative robust",num: 4334,date: new Date("2018-09-06T18:09:28.695Z"),array: [],obj: {}},new Date("2018-09-06T02:06:59.882Z"),80864],obj: {_id: 13347,num: 61485,array: [new Date("2018-09-05T21:28:29.651Z")]}});
    },

    function(coll) {
        return coll.insert({_id: 13348,str: "actuating Buckinghamshire connecting",date: new Date("2018-09-05T21:12:34.547Z"),array: ["Wooden open-source","Pants Idaho enable",61696,[],new Date("2018-09-06T04:02:40.507Z"),"Consultant wireless Money Market Account",new Date("2018-09-06T17:28:11.433Z"),{_id: 13349,str: "Tennessee Integration",num: 49165,array: [],obj: {}},59254,{_id: 13350,str: "viral",num: 46015,date: new Date("2018-09-06T14:44:28.095Z"),obj: {_id: 13351,num: 46170,date: new Date("2018-09-06T19:04:28.760Z"),array: [],obj: {}}},"Rubber"]});
    },

    function(coll) {
        return coll.insert({_id: 13352,str: "bifurcated",num: 17681,date: new Date("2018-09-06T04:25:39.703Z"),array: ["enhance",78062,"Money Market Account",new Date("2018-09-06T11:55:10.122Z"),[],new Date("2018-09-06T19:21:25.486Z"),{_id: 13353,str: "Manager",num: 38694,date: new Date("2018-09-06T11:27:20.294Z"),array: [new Date("2018-09-06T08:46:50.945Z"),new Date("2018-09-06T13:14:54.993Z")],obj: {_id: 13354,str: "copying",date: new Date("2018-09-06T03:11:51.397Z"),array: [94213,13170,"Chicken",[]],obj: {}}},new Date("2018-09-06T06:22:55.972Z"),"Missouri Bedfordshire District","Cambridgeshire hacking Berkshire",2545,[[]]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 13355,str: "neural-net Cambridgeshire Music",num: 46750,date: new Date("2018-09-06T04:52:58.973Z"),array: [new Date("2018-09-06T00:08:13.871Z"),"USB Berkshire microchip",73269,"Clothing",new Date("2018-09-06T02:48:20.902Z"),[],{_id: 13356,str: "Accounts United States of America",num: 72712,array: [],obj: {}},new Date("2018-09-05T20:08:45.984Z"),[76457],new Date("2018-09-06T03:54:29.418Z"),"invoice neural","Brook invoice Product"],obj: {_id: 13357,str: "Soft",date: new Date("2018-09-05T23:38:04.676Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 13358,str: "Clothing",num: 26584,date: new Date("2018-09-06T04:33:59.736Z"),array: [23570,new Date("2018-09-06T02:22:43.262Z"),"Wooden next-generation extensible",55356,"utilize",12918,new Date("2018-09-05T23:40:17.323Z"),"Robust Sleek Metal Soap",new Date("2018-09-06T19:28:06.153Z")],obj: {_id: 13359,str: "web-readiness Rubber connect",num: 80171,date: new Date("2018-09-06T19:41:25.411Z"),array: [],obj: {_id: 13360,str: "United Kingdom Home compress",num: 21302,date: new Date("2018-09-06T18:55:07.643Z"),array: [[{_id: 13361,str: "Keyboard channels",num: 53926,obj: {}}],new Date("2018-09-06T02:59:08.037Z"),{_id: 13362,num: 25320},new Date("2018-09-06T12:36:51.969Z"),63498,"Wooden","enhance",54739],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 13363,str: "Home Loan Account Wooden magnetic",num: 24442,array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 13364,str: "Architect Intelligent Designer",num: 75420,date: new Date("2018-09-05T21:10:08.228Z"),array: [],obj: {_id: 13365,str: "B2C withdrawal Utah",num: 63529,date: new Date("2018-09-05T22:58:34.219Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 13366,str: "Forks Avon",num: 1864,date: new Date("2018-09-05T21:05:49.122Z"),obj: {_id: 13367,str: "Concrete XML Poland",num: 23742,date: new Date("2018-09-06T10:54:52.708Z"),array: [new Date("2018-09-06T05:02:25.766Z"),"scalable convergence",{_id: 13368,date: new Date("2018-09-06T19:23:55.036Z"),array: [[],new Date("2018-09-06T16:44:25.726Z"),new Date("2018-09-05T22:56:33.048Z"),95433],obj: {}},23907,"Kids",{_id: 13369,str: "quantify Bacon Afghani",array: [],obj: {}},51241,27805,"Movies Savings Account"]}});
    },

    function(coll) {
        return coll.insert({_id: 13370,str: "Concrete JBOD Rubber",num: 45040,date: new Date("2018-09-05T20:34:51.257Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 13371,str: "Savings Account New York",num: 9527,date: new Date("2018-09-06T04:42:12.836Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 13372,num: 98347,date: new Date("2018-09-05T23:31:04.371Z"),array: [],obj: {_id: 13373,str: "Research Customer Research",num: 67402,date: new Date("2018-09-06T00:44:32.009Z"),array: [],obj: {_id: 13374,str: "Mouse",num: 79759,date: new Date("2018-09-06T18:10:57.203Z"),array: [new Date("2018-09-06T00:24:36.615Z"),"Fresh South Georgia and the South Sandwich Islands Glens",new Date("2018-09-06T03:53:24.477Z"),"Handmade Rubber Shirt Hat",new Date("2018-09-06T12:55:53.507Z"),8210,33106,85098,{_id: 13375,str: "bus withdrawal COM",date: new Date("2018-09-06T10:22:29.769Z"),obj: {}}],obj: {_id: 13376,str: "index Clothing",num: 40076,date: new Date("2018-09-06T09:57:43.648Z"),array: [{_id: 13377,num: 33497,array: [],obj: {}},[],"Optimization"]}}}});
    },

    function(coll) {
        return coll.insert({_id: 13378,str: "Yuan Renminbi eyeballs SAS",num: 75662,date: new Date("2018-09-06T13:08:47.201Z"),obj: {_id: 13379,str: "Papua New Guinea Personal Loan Account",num: 91155,date: new Date("2018-09-06T00:10:27.177Z"),array: [],obj: {_id: 13380,num: 53113,date: new Date("2018-09-06T02:00:24.207Z"),array: ["Bedfordshire calculate",92085,"Computer",new Date("2018-09-06T18:22:05.721Z"),85421,49641,new Date("2018-09-06T14:36:16.095Z"),new Date("2018-09-06T17:45:27.034Z"),[],"benchmark Hat networks",65600,[]],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 13381,str: "Plastic communities Oregon",num: 84235,date: new Date("2018-09-06T13:33:37.618Z"),array: [new Date("2018-09-06T01:42:19.411Z"),["Kids"],{_id: 13382,str: "Regional South Carolina",num: 90247,date: new Date("2018-09-06T17:22:07.832Z"),array: [],obj: {_id: 13383,str: "Security",date: new Date("2018-09-06T00:04:37.838Z"),obj: {_id: 13384,num: 62263,array: [50561,71714]}}},"invoice Soft Curve",new Date("2018-09-06T02:49:57.112Z"),new Date("2018-09-06T13:55:53.777Z"),"Track algorithm",73068,{_id: 13385,str: "Engineer Principal withdrawal",num: 51639,date: new Date("2018-09-05T22:40:17.681Z"),obj: {}},94672]});
    },

    function(coll) {
        return coll.insert({_id: 13386,str: "hack Technician",num: 9035,date: new Date("2018-09-06T15:20:55.542Z"),array: [],obj: {_id: 13387,num: 58271,date: new Date("2018-09-06T18:14:38.051Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 13388,str: "Synchronised Steel Chicken",date: new Date("2018-09-06T11:43:28.907Z"),array: [],obj: {_id: 13389,num: 74450,date: new Date("2018-09-06T08:39:56.459Z"),array: [59270,new Date("2018-09-06T04:06:31.966Z"),"Pula Iowa grow",63445,[],new Date("2018-09-06T15:01:50.057Z"),{_id: 13390,str: "Face to face",num: 52689,date: new Date("2018-09-05T21:14:08.684Z"),array: [69154,new Date("2018-09-05T20:50:57.543Z")],obj: {}},{_id: 13391,str: "Personal Loan Account Toys Tools",num: 224,obj: {_id: 13392,str: "Games Djibouti",num: 57297,array: [{_id: 13393,str: "integrated FTP purple",date: new Date("2018-09-06T14:24:19.249Z"),obj: {}},"Beauty"]}},72409,45808,new Date("2018-09-06T16:38:05.808Z"),"Djibouti synthesizing infomediaries",[]]}});
    },

    function(coll) {
        return coll.insert({_id: 13394,str: "Fiji Dollar payment",num: 72636,date: new Date("2018-09-06T04:07:08.502Z"),array: [],obj: {_id: 13395,num: 28319,date: new Date("2018-09-06T18:16:33.141Z"),array: [99934,46332,new Date("2018-09-06T17:28:32.645Z"),"Credit Card Account uniform JBOD",new Date("2018-09-06T10:16:33.772Z"),"e-business back-end",{_id: 13396,str: "virtual",date: new Date("2018-09-06T13:58:52.730Z"),obj: {_id: 13397,str: "Producer object-oriented Wells",date: new Date("2018-09-06T13:21:58.258Z"),array: ["Tasty Supervisor","challenge e-services",{_id: 13398,str: "Colorado Frozen Wooden",num: 9110,obj: {}}],obj: {}}},67589,new Date("2018-09-06T17:18:04.439Z"),[],new Date("2018-09-06T03:53:42.987Z"),55924],obj: {_id: 13399,str: "protocol",num: 4208,date: new Date("2018-09-06T08:01:18.700Z"),array: []}}});
    },

    function(coll) {
        return coll.insert({_id: 13400,str: "tan Route Points",date: new Date("2018-09-06T06:35:07.753Z"),array: [21687,[],67374,32701,"Serbian Dinar Home Loan Account"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 13401,str: "Plastic Incredible Wooden Soap",num: 77061,date: new Date("2018-09-06T05:22:05.636Z"),array: [],obj: {_id: 13402,str: "Berkshire",num: 79423,array: [26281,14264,new Date("2018-09-06T08:37:13.764Z"),new Date("2018-09-06T10:21:45.545Z"),new Date("2018-09-06T01:57:19.280Z"),"Bulgarian Lev Intelligent Frozen Tuna Engineer",54822,{_id: 13403,str: "Personal Loan Account web-readiness North Carolina",num: 16596,array: []},{_id: 13404,num: 1112,date: new Date("2018-09-06T09:41:00.257Z"),obj: {_id: 13405,date: new Date("2018-09-05T22:56:08.244Z"),array: []}}],obj: {_id: 13406,str: "Granite conglomeration hacking",num: 7740,date: new Date("2018-09-06T17:33:16.308Z")}}});
    },

    function(coll) {
        return coll.insert({_id: 13407,str: "Burgs",num: 47965,date: new Date("2018-09-06T08:02:07.997Z"),array: [34573,"Program",new Date("2018-09-05T23:10:28.309Z"),"silver",8526,"Incredible Missouri",{_id: 13408,str: "e-enable Balanced Keyboard",num: 91264,date: new Date("2018-09-06T10:23:04.584Z"),array: [8639],obj: {}},{_id: 13409,str: "Cotton",num: 68885,date: new Date("2018-09-06T04:40:21.411Z"),array: [],obj: {}},new Date("2018-09-06T17:44:31.456Z"),new Date("2018-09-06T12:18:34.029Z"),new Date("2018-09-06T07:05:04.159Z")],obj: {_id: 13410,str: "override Fantastic",num: 25510,date: new Date("2018-09-05T23:52:19.421Z")}});
    },

    function(coll) {
        return coll.insert({_id: 13411,str: "index withdrawal",array: ["zero administration District Wisconsin",70069,new Date("2018-09-05T22:25:55.120Z"),"bluetooth Direct",30869,new Date("2018-09-06T10:20:27.176Z"),[],{_id: 13412,str: "Gloves Investment Account",num: 13832,date: new Date("2018-09-06T03:05:29.553Z"),array: [],obj: {}},51125,"Group HDD Bedfordshire",36685,new Date("2018-09-05T21:00:02.808Z")]});
    },

    function(coll) {
        return coll.insert({_id: 13413,str: "Tennessee",num: 84549,date: new Date("2018-09-05T21:33:21.009Z"),array: ["Regional Washington",18210,"Tuna",75561,{_id: 13414,array: [new Date("2018-09-06T16:45:50.296Z"),new Date("2018-09-05T21:52:44.622Z")],obj: {}},{_id: 13415,str: "Handcrafted deposit Pa'anga",num: 2575,date: new Date("2018-09-05T23:19:52.669Z"),array: [],obj: {_id: 13416,str: "payment Rhode Island invoice",num: 6832,date: new Date("2018-09-06T01:01:49.437Z"),array: [],obj: {_id: 13417,str: "Integrated Fresh array",num: 50673,date: new Date("2018-09-06T14:45:58.211Z"),array: [new Date("2018-09-05T23:16:18.384Z"),"SCSI FTP programming",87111]}}},new Date("2018-09-06T16:11:00.398Z"),"AI",16778,{_id: 13418,num: 83528,date: new Date("2018-09-06T02:50:17.463Z"),array: [],obj: {}},"Refined Garden Credit Card Account"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 13419,str: "Rubber generate",num: 5121,date: new Date("2018-09-06T14:42:22.199Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 13420,num: 28812,date: new Date("2018-09-05T22:31:49.405Z"),array: [],obj: {_id: 13421,str: "Internal Towels",num: 11945,date: new Date("2018-09-06T18:05:47.276Z"),array: [95292,1453,new Date("2018-09-06T16:07:59.185Z"),47589,new Date("2018-09-05T20:38:19.729Z"),{_id: 13422,obj: {_id: 13423,str: "cross-media",num: 87904,array: ["policy Intelligent Granite Mouse Handcrafted",[],{_id: 13424,str: "Devolved Face to face Fantastic",num: 40774,date: new Date("2018-09-06T00:10:08.158Z")},"Borders","Cambridgeshire",44629,"payment"],obj: {_id: 13425,str: "Sri Lanka Rupee Optional Shoes",date: new Date("2018-09-06T08:28:55.989Z"),array: ["Dong ADP"],obj: {}}}},new Date("2018-09-06T14:08:22.429Z"),new Date("2018-09-06T01:36:23.191Z"),{_id: 13426,str: "Salad Wallis and Futuna",num: 31859,date: new Date("2018-09-05T23:25:27.477Z"),array: []},new Date("2018-09-06T11:27:05.722Z")]}});
    },

    function(coll) {
        return coll.insert({_id: 13427,str: "Usability",num: 85593,array: [62910,new Date("2018-09-06T05:35:41.959Z"),"Frozen",66496,[{_id: 13428,str: "Gloves",num: 57897,date: new Date("2018-09-05T21:22:09.171Z"),array: [],obj: {_id: 13429,str: "Face to face content green",num: 46280,date: new Date("2018-09-05T22:08:23.161Z"),array: [],obj: {}}},[]],"Japan Sierra Leone",11538,new Date("2018-09-06T17:57:56.517Z"),"Locks","IB",new Date("2018-09-06T19:33:53.676Z"),new Date("2018-09-06T08:33:47.973Z")],obj: {_id: 13430,num: 32025,date: new Date("2018-09-06T09:15:34.495Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 13431,str: "Mouse COM",date: new Date("2018-09-05T20:10:08.267Z"),array: [new Date("2018-09-06T03:39:01.195Z"),26204,{_id: 13432,str: "Shirt Research",num: 85379,array: [],obj: {}},"Buckinghamshire",{_id: 13433,str: "sexy Avon Credit Card Account",num: 99369,date: new Date("2018-09-06T16:19:20.816Z"),obj: {_id: 13434,str: "Cotton Quality-focused Cambridgeshire",num: 38418,date: new Date("2018-09-06T16:22:49.437Z"),array: [new Date("2018-09-06T03:48:11.333Z"),52266,[]],obj: {}}},new Date("2018-09-06T08:42:34.249Z"),"Concrete iterate Wyoming",41291,[],"pricing structure",[new Date("2018-09-06T03:32:20.456Z"),97702]]});
    },

    function(coll) {
        return coll.insert({_id: 13435,str: "Chicken Borders Intranet",num: 30786,date: new Date("2018-09-05T22:55:31.797Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 13436,str: "Devolved",date: new Date("2018-09-05T20:02:27.264Z"),array: [new Date("2018-09-06T01:35:30.886Z"),39646,["plum",new Date("2018-09-06T18:10:16.969Z"),new Date("2018-09-05T23:06:39.605Z")],"Rustic Drive solid state",39332,38258,{_id: 13437,str: "generating Games",num: 65083,date: new Date("2018-09-05T20:11:36.402Z"),array: [],obj: {}},new Date("2018-09-06T04:41:38.044Z"),new Date("2018-09-06T18:35:26.229Z"),42175]});
    },

    function(coll) {
        return coll.insert({_id: 13438,str: "Research Computer Australia",num: 8456,date: new Date("2018-09-06T15:06:06.400Z"),array: [99219,new Date("2018-09-06T09:53:11.380Z"),"Silver Games",45568,"violet IB Central",{_id: 13439,str: "5th generation",num: 14022,date: new Date("2018-09-06T04:59:09.116Z"),array: [14859,new Date("2018-09-06T06:38:18.519Z"),23628,"matrices"],obj: {_id: 13440,str: "user-centric",num: 34356,array: [],obj: {_id: 13441,str: "Generic deposit Awesome Concrete Car",date: new Date("2018-09-06T06:19:04.868Z"),obj: {}}}},[],new Date("2018-09-06T09:14:39.972Z"),"back up Executive",{_id: 13442,num: 46555,date: new Date("2018-09-06T14:24:15.803Z")}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 13443,str: "Awesome Sleek",date: new Date("2018-09-06T03:29:28.902Z"),array: [new Date("2018-09-05T22:07:19.831Z"),new Date("2018-09-06T00:37:49.650Z"),"Motorway",new Date("2018-09-06T12:20:34.306Z"),new Date("2018-09-06T09:53:43.359Z"),{_id: 13444,str: "Forward connect",num: 66598,date: new Date("2018-09-06T07:37:05.211Z"),array: [],obj: {_id: 13445,str: "matrix Computer",num: 45573,date: new Date("2018-09-06T13:29:37.487Z"),obj: {}}},64835,{_id: 13446,str: "Regional lime connecting",num: 81027,date: new Date("2018-09-06T13:35:45.016Z"),array: [90454,[],72209]},"Strategist"]});
    },

    function(coll) {
        return coll.insert({_id: 13447,str: "Curve",num: 49155,date: new Date("2018-09-06T14:09:09.270Z"),array: ["synthesize Table West Virginia",72591,[],99700,new Date("2018-09-06T17:38:47.704Z"),16810,"Avon","Computers Alaska stable",{_id: 13448,str: "Optimization Keyboard Cape Verde Escudo",num: 53901,date: new Date("2018-09-06T14:06:31.530Z"),array: [new Date("2018-09-06T16:25:44.913Z"),{_id: 13449,num: 73890,array: [],obj: {_id: 13450,str: "Refined Granite Soap Rubber",num: 48792,array: [33553,"Consultant Strategist Granite",new Date("2018-09-05T22:17:15.218Z")],obj: {}}}],obj: {}},new Date("2018-09-06T09:45:00.504Z"),new Date("2018-09-05T23:04:36.294Z"),78725,{_id: 13451,date: new Date("2018-09-06T05:58:07.499Z")},[]],obj: {_id: 13452,str: "Cambridgeshire",num: 14439,date: new Date("2018-09-05T21:11:24.533Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 13453,num: 98629,date: new Date("2018-09-06T00:15:10.226Z"),array: ["executive",76315,37452,"Ergonomic compressing",new Date("2018-09-05T20:43:54.192Z"),71973,"Principal Managed",7437,new Date("2018-09-05T21:57:02.167Z"),new Date("2018-09-05T20:19:20.386Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 13454,str: "transmitter",num: 3406,date: new Date("2018-09-06T19:17:04.120Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 13455,str: "Equatorial Guinea Architect parse",num: 24382,date: new Date("2018-09-06T02:13:25.107Z"),array: [[],new Date("2018-09-05T23:27:44.668Z"),74858,45509,"eyeballs Analyst overriding",{_id: 13456,num: 37303,date: new Date("2018-09-06T06:52:18.247Z"),array: [8798,"Denmark neural transmit",new Date("2018-09-06T08:56:13.886Z"),new Date("2018-09-06T01:48:12.003Z")],obj: {_id: 13457,str: "e-tailers ability Shoes",num: 11669,date: new Date("2018-09-06T04:17:03.527Z"),obj: {}}},new Date("2018-09-06T05:00:07.577Z"),"Implementation world-class",74918,"HDD","productize Intelligent Granite Chicken",{_id: 13458,str: "Malawi",num: 19269,array: [],obj: {}}],obj: {_id: 13459,date: new Date("2018-09-06T09:50:20.489Z"),array: [new Date("2018-09-06T17:36:33.232Z"),[]],obj: {_id: 13460,str: "calculating",num: 23944,date: new Date("2018-09-06T14:53:03.926Z"),array: []}}});
    },

    function(coll) {
        return coll.insert({_id: 13461,str: "Cheese",num: 50738,date: new Date("2018-09-06T00:41:31.422Z"),array: [],obj: {_id: 13462,num: 30786,array: ["driver Implemented",86387,"protocol backing up violet",new Date("2018-09-05T23:17:53.930Z"),24195,{_id: 13463,str: "Gorgeous Steel Chair Wooden niches",num: 49940,date: new Date("2018-09-06T14:07:32.028Z"),array: [],obj: {}},"Bedfordshire","Communications Web architect",85421,[new Date("2018-09-05T21:27:05.979Z"),"local area network",new Date("2018-09-06T04:35:10.010Z")],92165,new Date("2018-09-06T05:02:05.789Z")],obj: {_id: 13464,str: "Home Loan Account",num: 39215,array: [],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 13465,str: "synthesize mint green",num: 86683,date: new Date("2018-09-06T00:27:09.427Z"),array: [[{_id: 13466,str: "Granite",num: 20548,date: new Date("2018-09-06T19:34:44.018Z"),array: [],obj: {}},new Date("2018-09-06T08:53:52.303Z"),57853,new Date("2018-09-06T03:52:33.473Z"),"Malta",42788,24100,{_id: 13467,num: 12361,date: new Date("2018-09-06T10:32:06.261Z"),obj: {_id: 13468,str: "integrate Implemented",num: 35328,array: [59200,"orange parse bandwidth",new Date("2018-09-06T01:45:19.320Z")],obj: {_id: 13469,date: new Date("2018-09-06T08:34:14.175Z"),array: ["Boliviano Mvdol",[]],obj: {_id: 13470,str: "mission-critical",num: 38887,array: []}}}},"Prairie Borders",new Date("2018-09-05T22:19:16.958Z"),"Bacon",86058],"Analyst"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 13471,num: 83662,date: new Date("2018-09-06T17:51:48.367Z"),array: [],obj: {_id: 13472,str: "instruction set Open-source",num: 9533,date: new Date("2018-09-05T21:15:36.644Z"),array: [],obj: {_id: 13473,str: "connect",obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 13474,str: "system homogeneous Wells",num: 37847,date: new Date("2018-09-06T06:03:23.422Z"),array: [21737,71086,new Date("2018-09-06T08:08:51.342Z"),new Date("2018-09-06T12:02:37.730Z"),30304,{_id: 13475,str: "Iceland Granite PCI",num: 90655,date: new Date("2018-09-06T04:12:49.353Z"),array: [],obj: {_id: 13476,date: new Date("2018-09-06T09:41:08.885Z"),obj: {}}},"Mouse Afghani",20942,"Wisconsin connect Director",new Date("2018-09-06T16:43:35.423Z"),"International",[]]});
    },

    function(coll) {
        return coll.insert({_id: 13477,str: "Japan digital",date: new Date("2018-09-05T23:42:59.596Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 13478,str: "Officer Corporate",num: 381,date: new Date("2018-09-06T12:57:58.539Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 13479,num: 40018,array: ["Supervisor port","Checking Account applications",new Date("2018-09-05T23:43:55.614Z"),29948,new Date("2018-09-06T16:48:51.689Z"),new Date("2018-09-06T01:13:03.729Z"),{_id: 13480,str: "Stravenue Cape Verde Escudo Borders",num: 17245,date: new Date("2018-09-06T03:06:12.131Z"),array: [],obj: {}},39453,"open-source payment"],obj: {_id: 13481,str: "Yuan Renminbi Cuban Peso Peso Convertible",num: 59227,date: new Date("2018-09-05T21:23:21.292Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 13482,str: "AI Soft",num: 74039,date: new Date("2018-09-06T17:42:11.975Z"),array: ["SAS deposit",81439,[],["transmitting JBOD","holistic channels",new Date("2018-09-06T04:11:27.355Z")],new Date("2018-09-06T03:54:30.699Z"),18905,"Fully-configurable",[],new Date("2018-09-06T00:58:27.843Z"),"Trinidad and Tobago Forges Guyana Dollar","indexing",new Date("2018-09-05T21:21:32.551Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 13483,date: new Date("2018-09-05T20:03:01.989Z"),array: [28134,{_id: 13484,str: "Graphic Interface Hungary",num: 57156,date: new Date("2018-09-05T22:26:44.643Z"),array: [],obj: {_id: 13485,str: "Small Rubber Tuna eyeballs Home Loan Account",num: 29169,array: [],obj: {_id: 13486,str: "back up Group",num: 17976,date: new Date("2018-09-06T13:13:32.695Z"),obj: {}}}},[],"neutral incubate TCP","Investment Account challenge",new Date("2018-09-06T09:08:43.369Z"),73823,new Date("2018-09-05T22:20:23.154Z"),["interface National",30255,[]],"generate Berkshire e-enable",new Date("2018-09-05T21:11:55.749Z")]});
    },

    function(coll) {
        return coll.insert({_id: 13487,str: "Lead Pizza holistic",num: 80258,date: new Date("2018-09-06T16:44:02.283Z"),array: [],obj: {_id: 13488,str: "THX Operations",num: 62230,date: new Date("2018-09-06T13:10:45.389Z"),array: [new Date("2018-09-05T20:53:58.288Z"),23398,87868,{_id: 13489,str: "Investment Account",num: 19971,date: new Date("2018-09-06T05:12:10.220Z"),array: [],obj: {}},43693,"panel","Research Green hack",new Date("2018-09-06T02:09:02.357Z"),{ _id: 13490 },"alliance circuit",new Date("2018-09-06T04:54:24.093Z"),77407]}});
    },

    function(coll) {
        return coll.insert({_id: 13491,str: "Functionality",num: 71531,date: new Date("2018-09-06T04:48:47.558Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 13492,str: "teal",num: 8626,date: new Date("2018-09-06T02:12:06.549Z"),array: [{_id: 13493,str: "Orchestrator",num: 34473,date: new Date("2018-09-06T01:06:02.345Z"),array: ["markets",19516],obj: {}},"deploy Iowa",[new Date("2018-09-06T02:20:26.199Z")],{_id: 13494,date: new Date("2018-09-06T10:25:31.617Z"),array: [40464],obj: {_id: 13495,num: 84812,array: [[],"Beauty Christmas Island"],obj: {}}},{_id: 13496,str: "Forges",obj: {_id: 13497,num: 7865,date: new Date("2018-09-06T00:12:50.194Z")}},new Date("2018-09-06T04:44:04.627Z"),new Date("2018-09-05T23:57:59.284Z"),27018,new Date("2018-09-06T14:29:04.859Z"),74647,"back-end California Branding",{_id: 13498,str: "Buckinghamshire visualize Creative",num: 44915,array: [],obj: {_id: 13499,str: "Toys XSS",num: 55928,date: new Date("2018-09-06T08:01:44.475Z"),obj: {}}},11549,"El Salvador"]});
    },

    function(coll) {
        return coll.insert({_id: 13500,str: "Minnesota projection",num: 40082,date: new Date("2018-09-06T06:25:45.774Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 13501,str: "Avon",date: new Date("2018-09-05T23:27:11.274Z"),array: ["Avon",{_id: 13502,num: 3757,date: new Date("2018-09-06T06:28:59.934Z"),array: [2094,new Date("2018-09-06T09:50:52.948Z"),26696,"Investment Account infomediaries"]},{_id: 13503,str: "Mandatory Associate Palladium",num: 80956,array: [],obj: {_id: 13504,str: "infrastructure",num: 81127,date: new Date("2018-09-06T19:36:37.049Z"),obj: {_id: 13505,str: "SMTP withdrawal Saudi Arabia",num: 14996,date: new Date("2018-09-05T22:50:20.603Z"),obj: {}}}},"Credit Card Account",new Date("2018-09-05T23:36:54.708Z"),{_id: 13506,str: "responsive extend Chair",num: 85095,date: new Date("2018-09-06T05:16:51.817Z"),array: [],obj: {}},new Date("2018-09-06T10:59:29.582Z"),"Georgia",[],[]],obj: {_id: 13507,num: 7423,date: new Date("2018-09-05T21:44:25.067Z"),array: [88139],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 13508,str: "TCP",num: 78862,date: new Date("2018-09-06T03:39:16.683Z"),array: ["Manager",new Date("2018-09-06T08:16:54.139Z"),"toolset Checking Account",new Date("2018-09-06T01:07:08.503Z"),{_id: 13509,str: "Mobility",num: 15287,date: new Date("2018-09-06T06:31:30.755Z"),array: [new Date("2018-09-05T21:53:06.593Z"),[19218,72026],{_id: 13510,str: "scalable Shoes driver",num: 24860,obj: {_id: 13511,num: 26119,array: [],obj: {}}},46196],obj: {}},new Date("2018-09-06T16:36:29.354Z"),new Date("2018-09-06T04:31:55.340Z"),"global Keyboard solutions",83572,{_id: 13512,date: new Date("2018-09-06T18:38:14.045Z")},"Fresh navigate"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 13513,str: "moderator",num: 39584,date: new Date("2018-09-06T01:00:28.895Z"),array: ["Investment Account wireless","Palau",42364,"Incredible",74797,"invoice Coordinator",new Date("2018-09-06T11:47:17.798Z"),new Date("2018-09-06T09:54:16.278Z"),new Date("2018-09-05T20:38:03.342Z"),{_id: 13514,str: "Fantastic Northern Mariana Islands",date: new Date("2018-09-05T20:43:20.720Z"),array: [{_id: 13515,num: 16555,date: new Date("2018-09-06T04:53:22.999Z"),obj: {_id: 13516,str: "Brand solutions",num: 17524}}],obj: {}},[]],obj: {_id: 13517,num: 28699,date: new Date("2018-09-06T18:48:16.433Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 13518,str: "quantifying parse",num: 33710,date: new Date("2018-09-05T22:11:58.760Z"),array: [],obj: {_id: 13519,str: "brand Road",obj: {_id: 13520,str: "Infrastructure Zimbabwe Dollar",num: 19328,date: new Date("2018-09-06T13:12:50.569Z"),array: [],obj: {_id: 13521,num: 87069,date: new Date("2018-09-06T03:18:03.446Z"),obj: {_id: 13522,num: 46978,date: new Date("2018-09-06T08:37:06.960Z"),array: [new Date("2018-09-06T03:20:53.205Z"),"Digitized utilize",{_id: 13523,str: "Developer",date: new Date("2018-09-06T15:58:50.083Z"),array: [7409],obj: {}},99517,"Credit Card Account Sleek Granite Pizza Operations",new Date("2018-09-06T06:30:35.748Z"),79671,{_id: 13524,str: "Markets Missouri Berkshire",array: [["Handcrafted Soft Computer JBOD Personal Loan Account"],new Date("2018-09-06T08:26:36.587Z"),{_id: 13525,str: "didactic European Monetary Unit (E.M.U.-6) overriding",num: 74046,date: new Date("2018-09-06T05:56:28.248Z"),array: []},new Date("2018-09-06T00:28:10.068Z")],obj: {}},"Administrator","Tasty Fresh Shirt",[],"Credit Card Account Phased"]}}}}});
    },

    function(coll) {
        return coll.insert({_id: 13526,str: "array alliance card",num: 27071,date: new Date("2018-09-06T19:21:20.677Z"),array: [new Date("2018-09-05T20:42:12.323Z"),"Gibraltar Pound navigating connect",11026,new Date("2018-09-05T20:31:28.253Z"),[],27307],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 13527,str: "hacking",num: 75884,date: new Date("2018-09-06T05:29:00.087Z"),array: ["success",35843,new Date("2018-09-06T18:30:03.148Z"),"Berkshire SAS Tuna",{_id: 13528,str: "Chief",num: 15379,date: new Date("2018-09-06T00:15:35.154Z"),array: [],obj: {}},[],{_id: 13529,str: "Developer Inverse Latvian Lats",num: 75096,date: new Date("2018-09-06T12:39:19.200Z"),array: [41076],obj: {_id: 13530,str: "blue Gorgeous",num: 91956,obj: {}}},"salmon Enterprise-wide",new Date("2018-09-06T14:17:38.370Z"),new Date("2018-09-06T04:33:25.178Z"),53293,new Date("2018-09-05T21:59:24.809Z"),"Courts"]});
    },

    function(coll) {
        return coll.insert({_id: 13531,str: "optimal optical Intranet",num: 35365,date: new Date("2018-09-05T22:35:09.552Z"),array: [],obj: {_id: 13532,str: "alarm",num: 32557,date: new Date("2018-09-05T20:30:38.955Z"),array: [82829,new Date("2018-09-05T23:00:22.443Z"),35680,new Date("2018-09-06T00:26:38.220Z"),"District connect",2797,new Date("2018-09-05T22:57:32.285Z"),[],"microchip override","Analyst white Unbranded","Customer tan",{_id: 13533,num: 3560,array: [{_id: 13534,str: "impactful harness",num: 50941},{_id: 13535,str: "Money Market Account Fantastic Fresh Chips Customer",obj: {_id: 13536,str: "deposit",date: new Date("2018-09-06T17:02:50.500Z"),array: [],obj: {}}}],obj: {}}],obj: {_id: 13537,date: new Date("2018-09-06T16:30:41.807Z"),array: [new Date("2018-09-06T06:31:11.389Z"),new Date("2018-09-06T18:59:38.172Z"),19381],obj: {_id: 13538,date: new Date("2018-09-06T05:53:31.561Z")}}}});
    },

    function(coll) {
        return coll.insert({_id: 13539,num: 54976,date: new Date("2018-09-06T01:29:08.349Z"),array: [{_id: 13540,str: "magenta",num: 20756,date: new Date("2018-09-06T01:23:24.887Z"),array: [],obj: {_id: 13541,str: "deposit indexing",num: 38023,date: new Date("2018-09-06T19:30:25.943Z")}},new Date("2018-09-06T19:03:10.133Z"),[],30340,"partnerships",93818,["Rapids",46888],new Date("2018-09-06T03:29:38.660Z"),37132,"embrace Washington solution",new Date("2018-09-05T22:21:26.614Z")]});
    },

    function(coll) {
        return coll.insert({_id: 13542,str: "alarm invoice",date: new Date("2018-09-06T09:23:26.164Z"),array: ["Borders copying Burg",new Date("2018-09-06T09:52:21.550Z"),new Date("2018-09-06T00:02:57.606Z"),67823,new Date("2018-09-06T03:22:31.017Z"),"withdrawal",34960,[71159,new Date("2018-09-06T19:47:43.085Z")],{_id: 13543,str: "array",num: 36503,date: new Date("2018-09-06T12:24:05.761Z"),array: [],obj: {}}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 13544,str: "Drive invoice",num: 2517,date: new Date("2018-09-05T21:22:49.366Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 13545,str: "Handcrafted",num: 22349,date: new Date("2018-09-06T03:35:56.803Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 13546,str: "New Jersey",num: 46363,date: new Date("2018-09-06T00:39:47.222Z"),array: [86318,new Date("2018-09-06T00:46:17.356Z"),"Beauty disintermediate",new Date("2018-09-06T15:40:17.307Z"),{_id: 13547,date: new Date("2018-09-06T19:47:59.529Z"),array: [],obj: {_id: 13548,str: "intuitive",num: 37241,date: new Date("2018-09-06T03:10:44.998Z"),array: ["Savings Account secondary alarm",[],"Russian Ruble calculate Awesome","Forward Cordoba Oro",26830],obj: {_id: 13549,str: "Inverse Som",date: new Date("2018-09-06T06:04:15.652Z"),obj: {_id: 13550,num: 76108,date: new Date("2018-09-06T03:27:48.069Z"),array: [],obj: {}}}}},new Date("2018-09-06T09:06:37.420Z"),new Date("2018-09-06T15:41:13.073Z"),"Ergonomic Gloves Arizona"]});
    },

    function(coll) {
        return coll.insert({_id: 13551,num: 58253,date: new Date("2018-09-06T15:48:19.576Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 13552,str: "Tactics Afghani",num: 67589,date: new Date("2018-09-06T09:44:13.062Z"),array: [new Date("2018-09-05T21:56:35.575Z"),new Date("2018-09-06T01:19:22.607Z"),{_id: 13553,str: "Response parse Tuna",num: 61408,date: new Date("2018-09-06T15:45:04.956Z"),array: [],obj: {}},"Towels Bedfordshire","application Checking Account",50063,[],new Date("2018-09-06T09:34:41.705Z"),95501,{_id: 13554,str: "Data",num: 60367,date: new Date("2018-09-05T21:16:05.522Z"),array: [new Date("2018-09-05T21:28:31.666Z"),67350],obj: {_id: 13555,str: "Technician",obj: {}}},[],new Date("2018-09-05T21:55:48.032Z")]});
    },

    function(coll) {
        return coll.insert({_id: 13556,str: "capacitor Awesome Proactive",num: 59374,date: new Date("2018-09-06T09:34:41.941Z"),array: [new Date("2018-09-06T00:56:42.755Z"),"transition",48970,new Date("2018-09-06T17:10:23.310Z"),"Yemeni Rial",{_id: 13557,str: "Bike Ridges stable",num: 98072,date: new Date("2018-09-06T16:17:09.490Z"),array: [],obj: {_id: 13558,str: "Licensed Concrete Hat Kwanza Money Market Account",date: new Date("2018-09-06T10:23:39.873Z"),array: [],obj: {_id: 13559,str: "navigating",num: 31294,date: new Date("2018-09-06T00:02:03.262Z")}}},37120,69172,"SAS"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 13560,str: "maroon Central African Republic bypass",num: 94319,array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 13561,num: 84100,date: new Date("2018-09-06T19:16:56.057Z"),obj: {_id: 13562,str: "Engineer cross-platform",num: 97064,date: new Date("2018-09-06T17:38:43.632Z"),array: [new Date("2018-09-05T20:31:23.104Z"),new Date("2018-09-06T03:02:35.657Z"),"Sports eyeballs Port",56179,"Buckinghamshire copying neural",63346,new Date("2018-09-06T07:24:55.648Z"),{_id: 13563,str: "Computers Fantastic",date: new Date("2018-09-06T01:29:30.805Z"),array: [[],"Auto Loan Account",74228,"Generic Personal Loan Account"],obj: {}}]}});
    },

    function(coll) {
        return coll.insert({_id: 13564,str: "non-volatile",num: 21621,date: new Date("2018-09-06T01:46:44.020Z")});
    },

    function(coll) {
        return coll.insert({_id: 13565,str: "Borders",num: 89926,date: new Date("2018-09-06T18:00:08.152Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 13566,str: "disintermediate",num: 10640,date: new Date("2018-09-06T17:12:35.080Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 13567,num: 90613,date: new Date("2018-09-06T02:22:17.036Z"),array: [{_id: 13568,str: "Computer Avon",num: 92125,date: new Date("2018-09-06T03:18:16.174Z"),array: [837,"invoice","TCP one-to-one Tasty Wooden Chair",[],"matrix"],obj: {_id: 13569,str: "Mouse",date: new Date("2018-09-06T06:33:42.442Z"),array: ["tan channels mobile",58393,new Date("2018-09-06T17:10:14.514Z")],obj: {_id: 13570,str: "Generic Rubber Sausages",num: 86839,date: new Date("2018-09-06T01:47:18.086Z")}}},97883,[],new Date("2018-09-06T10:09:06.869Z"),4368,{_id: 13571,str: "Rubber seamless array",num: 14393},[],"open-source Factors Lead",54746],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 13572,str: "transmitting",num: 95993,date: new Date("2018-09-06T05:39:45.832Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 13573,str: "reinvent Licensed Concrete Bacon",num: 69754,date: new Date("2018-09-06T13:27:34.386Z"),array: [new Date("2018-09-05T20:57:29.404Z"),"Rupiah Money Market Account SSL",{_id: 13574,num: 13512,date: new Date("2018-09-06T04:01:48.945Z"),array: ["generate New Mexico",95007,34914,34101,[{_id: 13575,str: "Burgs programming Garden",num: 12928,date: new Date("2018-09-06T08:04:58.192Z"),obj: {_id: 13576,str: "transmitting Kids synthesize",num: 39607,array: [],obj: {}}},new Date("2018-09-06T15:29:13.841Z")],69582,"Savings Account Kids Streamlined"],obj: {}},new Date("2018-09-06T16:51:52.114Z"),new Date("2018-09-06T07:46:44.688Z"),{ _id: 13577 },"Zloty"],obj: {_id: 13578,str: "virtual Cheese",num: 7095,date: new Date("2018-09-06T04:33:45.201Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 13579,str: "Intelligent",num: 48134,date: new Date("2018-09-06T14:05:45.182Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 13580,str: "well-modulated payment Luxembourg",num: 12937,date: new Date("2018-09-06T08:59:59.116Z"),array: ["workforce Cambridgeshire","overriding Dynamic Steel","Investment Account","Investor Cambridgeshire",[],new Date("2018-09-06T13:26:50.477Z"),67479,new Date("2018-09-05T21:38:38.683Z"),79216,66725,new Date("2018-09-06T07:00:18.641Z"),new Date("2018-09-06T03:32:08.560Z"),[]],obj: {_id: 13581,str: "hack Bedfordshire",num: 96967,date: new Date("2018-09-06T14:41:51.029Z"),array: [{_id: 13582,num: 82338,date: new Date("2018-09-06T05:25:32.805Z"),array: [new Date("2018-09-05T23:12:15.686Z"),{_id: 13583,num: 51270,array: [],obj: {}},"Bedfordshire Sleek adapter",[90108],new Date("2018-09-06T08:38:44.475Z")]}]}});
    },

    function(coll) {
        return coll.insert({_id: 13584,num: 71740,date: new Date("2018-09-06T13:49:21.369Z"),array: [new Date("2018-09-06T15:26:52.585Z"),91840,{_id: 13585,str: "Trinidad and Tobago Trace",num: 43674,date: new Date("2018-09-06T02:02:34.737Z"),array: [],obj: {_id: 13586,str: "Car deposit e-enable",num: 54668,date: new Date("2018-09-06T08:46:49.612Z"),array: [],obj: {}}},"calculate",57382,69106,new Date("2018-09-06T09:43:29.323Z"),"convergence quantifying Intelligent Frozen Ball",["customer loyalty throughput next generation",new Date("2018-09-06T11:26:53.047Z"),[81068]],{_id: 13587,str: "Metal Multi-tiered",date: new Date("2018-09-06T07:50:21.169Z")}]});
    },

    function(coll) {
        return coll.insert({_id: 13588,str: "Configuration",num: 87195,array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 13589,str: "Future-proofed",num: 40455,date: new Date("2018-09-06T09:44:39.192Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 13590,str: "policy",date: new Date("2018-09-06T17:17:37.116Z"),array: [],obj: {_id: 13591,str: "Alabama",num: 67269,date: new Date("2018-09-06T14:18:25.048Z"),array: [{_id: 13592,str: "Pataca Wooden",num: 52136,date: new Date("2018-09-06T10:49:33.954Z"),obj: {}},new Date("2018-09-06T09:18:02.992Z"),40428,{_id: 13593,str: "input",num: 97474,array: ["moratorium",new Date("2018-09-06T03:46:24.620Z")]},"compress",81418,27913,new Date("2018-09-06T03:17:40.515Z"),[92867,new Date("2018-09-06T09:55:28.938Z")],"Computers Intelligent Function-based",29068,new Date("2018-09-05T21:42:40.484Z"),[],[new Date("2018-09-06T09:01:34.720Z")]],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 13594,str: "Outdoors Frozen models",num: 56758,date: new Date("2018-09-06T14:46:05.096Z"),array: [],obj: {_id: 13595,str: "Human",date: new Date("2018-09-05T20:56:10.794Z"),array: [{_id: 13596,num: 45782,obj: {_id: 13597,str: "Cotton",num: 84274,date: new Date("2018-09-06T14:42:11.735Z"),array: [44962,59270,"Corporate next generation Plastic","Terrace olive Pennsylvania",[new Date("2018-09-06T19:47:56.424Z")]],obj: {}}},"initiatives TCP Colorado",new Date("2018-09-06T11:27:29.532Z"),new Date("2018-09-06T03:37:43.284Z"),"Jewelery sticky",61097,{_id: 13598,array: []},new Date("2018-09-06T04:03:03.688Z"),37195],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 13599,str: "withdrawal Shirt",num: 20131,date: new Date("2018-09-06T18:41:14.164Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 13600,str: "Mali",num: 36653,date: new Date("2018-09-06T13:45:50.268Z"),array: ["reinvent invoice",new Date("2018-09-06T17:22:53.440Z"),"calculating digital enterprise",new Date("2018-09-05T20:40:23.968Z"),{_id: 13601,str: "back-end Customer-focused JSON",num: 73748,date: new Date("2018-09-06T10:19:08.290Z"),array: [2500,99285,28662],obj: {}},"Illinois",3677,[],[],"Handcrafted Metal Gloves Synergistic Tasty Fresh Fish",[43630,new Date("2018-09-06T12:58:46.343Z")],new Date("2018-09-06T06:05:11.915Z")],obj: {_id: 13602,str: "teal",num: 9191,date: new Date("2018-09-06T13:13:32.789Z")}});
    },

    function(coll) {
        return coll.insert({_id: 13603,str: "attitude Small Metal Computer invoice",num: 20292,date: new Date("2018-09-06T04:47:31.571Z"),array: [],obj: {_id: 13604,str: "ROI Incredible Frozen Car Licensed",date: new Date("2018-09-06T06:47:53.285Z")}});
    },

    function(coll) {
        return coll.insert({_id: 13605,str: "violet",num: 19845,date: new Date("2018-09-05T22:23:13.592Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 13606,str: "solutions Venezuela",num: 52547,date: new Date("2018-09-05T20:57:11.407Z"),array: [new Date("2018-09-06T12:39:20.062Z"),41092,13934,"Cotton",new Date("2018-09-06T16:45:53.810Z"),"Mozambique auxiliary Pennsylvania",[70126],new Date("2018-09-06T06:34:24.760Z"),{_id: 13607,str: "Total Baby Division",num: 71503,date: new Date("2018-09-06T02:36:48.238Z"),array: [],obj: {}},9203,"Brand salmon Operations",6396,new Date("2018-09-06T00:06:52.886Z"),"Bike"],obj: {_id: 13608,str: "Auto Loan Account Integrated Refined",num: 3480,date: new Date("2018-09-06T01:44:53.215Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 13609,str: "Automotive",num: 92351,date: new Date("2018-09-06T13:11:15.136Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 13610,str: "Fish",num: 60930,date: new Date("2018-09-06T03:06:04.533Z"),array: [new Date("2018-09-06T14:57:46.833Z"),new Date("2018-09-06T06:17:48.055Z"),new Date("2018-09-06T13:19:03.790Z"),"web services invoice",85772,46203,"array SCSI",new Date("2018-09-06T19:10:54.122Z"),{_id: 13611,num: 67299,date: new Date("2018-09-06T11:05:14.944Z"),array: [59074],obj: {}},[],"Architect Quality-focused","Intelligent Concrete Table Rue Bedfordshire"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 13612,str: "Awesome Steel Towels",num: 25811,date: new Date("2018-09-05T23:58:42.273Z"),obj: {_id: 13613,str: "intranet",num: 77760,date: new Date("2018-09-06T12:37:17.337Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 13614,str: "redefine",num: 69669,date: new Date("2018-09-06T15:57:37.138Z"),array: [42954,new Date("2018-09-06T04:12:56.392Z"),89350,"Towels Customer system engine","next-generation Syrian Pound payment",new Date("2018-09-06T09:22:47.422Z"),20508,"Tasty Soft Bacon Metal Fish",new Date("2018-09-06T09:58:40.000Z"),new Date("2018-09-06T13:30:00.253Z"),"invoice schemas",new Date("2018-09-06T19:40:33.089Z")]});
    },

    function(coll) {
        return coll.insert({_id: 13615,num: 45141,date: new Date("2018-09-06T15:07:01.631Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 13616,str: "USB Pizza",num: 16119,date: new Date("2018-09-06T02:46:23.604Z"),array: [new Date("2018-09-06T13:02:07.342Z"),"Personal Loan Account Mobility indexing",39121,"Orchard",{_id: 13617,str: "Handcrafted Cotton Computer Berkshire",date: new Date("2018-09-06T08:18:36.189Z"),array: [],obj: {}},"benchmark Refined Granite Shoes EXE",10248,new Date("2018-09-06T05:21:23.865Z")],obj: {_id: 13618,str: "Bahamian Dollar",num: 95542}});
    },

    function(coll) {
        return coll.insert({_id: 13619,str: "Avon New York",num: 43126,date: new Date("2018-09-06T19:32:36.326Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 13620,str: "Ergonomic Frozen Pizza",num: 86941,date: new Date("2018-09-06T12:54:34.017Z"),array: [58317,new Date("2018-09-06T10:33:30.007Z"),[],"Facilitator withdrawal",750,5981,new Date("2018-09-06T18:26:25.779Z"),3995,{_id: 13621,num: 52444,date: new Date("2018-09-06T01:40:00.742Z"),obj: {}},"International",[new Date("2018-09-06T13:22:18.376Z"),{_id: 13622,str: "value-added firmware Square",date: new Date("2018-09-06T12:08:40.478Z"),array: [],obj: {}},{_id: 13623,str: "Guatemala Moldovan Leu Bridge",num: 73998,date: new Date("2018-09-06T07:09:24.296Z"),array: ["Leone Hat"],obj: {_id: 13624,str: "Cross-group alarm",num: 34188,date: new Date("2018-09-06T11:14:06.119Z"),array: [new Date("2018-09-06T08:23:21.751Z")],obj: {}}},"Customer","Russian Federation Zambia"]]});
    },

    function(coll) {
        return coll.insert({_id: 13625,str: "invoice",num: 45393,date: new Date("2018-09-06T14:17:12.102Z"),array: [],obj: {_id: 13626,str: "architect",num: 84886,date: new Date("2018-09-06T06:47:09.256Z"),array: [96018,["Handmade Rubber Computer Multi-tiered synthesize","Iranian Rial",{_id: 13627,str: "Auto Loan Account",num: 89492,obj: {}}],new Date("2018-09-06T02:08:53.677Z"),97301,new Date("2018-09-06T06:39:27.028Z"),"Borders",{_id: 13628,str: "maximize deposit",date: new Date("2018-09-06T13:11:04.301Z"),array: []},"invoice functionalities","Cloned Global",[new Date("2018-09-06T11:54:00.954Z"),31546],new Date("2018-09-06T16:29:45.288Z")]}});
    },

    function(coll) {
        return coll.insert({_id: 13629,str: "web-enabled reciprocal Investment Account",num: 23985,date: new Date("2018-09-06T04:21:06.302Z"),array: ["Burgs monitor",92596,new Date("2018-09-06T17:11:55.770Z"),"structure index Ohio",[],8718,new Date("2018-09-06T00:10:34.011Z"),"content",[],new Date("2018-09-06T12:15:31.578Z"),{_id: 13630,num: 77957,date: new Date("2018-09-06T02:53:08.717Z"),array: [{_id: 13631,num: 74409,array: []}],obj: {}}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 13632,str: "Park",num: 66060,date: new Date("2018-09-06T11:41:34.857Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 13633,str: "Facilitator Investor",num: 38207,date: new Date("2018-09-06T03:09:32.130Z"),array: [],obj: {_id: 13634,str: "paradigm Credit Card Account",num: 51339,date: new Date("2018-09-06T09:21:48.176Z"),array: [5517,new Date("2018-09-06T03:39:10.976Z"),[],42992,"parse","niches",new Date("2018-09-06T07:04:29.333Z"),{_id: 13635,str: "front-end Intelligent Cotton Bike backing up",num: 34517,date: new Date("2018-09-06T15:27:16.892Z"),obj: {_id: 13636,str: "Massachusetts Buckinghamshire",date: new Date("2018-09-06T18:39:55.056Z"),array: ["Automotive National withdrawal",[new Date("2018-09-05T22:31:23.010Z"),27819,new Date("2018-09-06T05:23:29.249Z")],{_id: 13637,num: 8104}],obj: {}}},95488,new Date("2018-09-06T10:01:51.059Z")]}});
    },

    function(coll) {
        return coll.insert({_id: 13638,str: "transform driver Paraguay",num: 85718,date: new Date("2018-09-06T06:39:28.888Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 13639,str: "grow",num: 76055,date: new Date("2018-09-06T19:41:55.873Z"),array: [new Date("2018-09-06T11:51:10.757Z"),16619,[],18822,"Auto Loan Account Refined Steel Tuna",new Date("2018-09-05T22:47:31.040Z"),90880,new Date("2018-09-06T19:45:45.348Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 13640,str: "quantifying PCI",num: 66942,date: new Date("2018-09-06T16:24:47.575Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 13641,str: "Rue Fords",num: 9006,date: new Date("2018-09-06T04:21:14.732Z"),array: [33100,"withdrawal Money Market Account",new Date("2018-09-06T10:38:08.833Z"),[],{_id: 13642,str: "Coordinator",num: 39073,date: new Date("2018-09-06T00:43:30.307Z"),array: ["robust mindshare",{_id: 13643,str: "Data",num: 13418,array: [],obj: {}},14254,new Date("2018-09-06T18:57:47.723Z")]},14850,"Designer transmitting Zimbabwe Dollar","Tunisia",{_id: 13644,date: new Date("2018-09-06T07:39:02.510Z"),array: [new Date("2018-09-06T10:16:44.781Z")],obj: {_id: 13645,obj: {_id: 13646,str: "Bacon"}}},26835,[],"payment seamless"]});
    },

    function(coll) {
        return coll.insert({_id: 13647,str: "transition Buckinghamshire",num: 15621,date: new Date("2018-09-06T15:58:52.476Z"),array: [new Date("2018-09-06T17:55:19.473Z"),90040,"Enterprise-wide",60492,90917,{_id: 13648,str: "functionalities Fantastic Versatile",obj: {}},"markets hybrid",new Date("2018-09-05T22:18:48.207Z"),"Handmade"],obj: {_id: 13649,str: "firewall Rest Awesome Soft Cheese",num: 60637,date: new Date("2018-09-06T11:38:13.120Z"),array: [],obj: {_id: 13650,num: 2469,date: new Date("2018-09-06T03:23:28.568Z"),array: []}}});
    },

    function(coll) {
        return coll.insert({_id: 13651,str: "transition synthesize",num: 70214,date: new Date("2018-09-06T04:51:55.912Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 13652,str: "Iowa Ergonomic Rubber Cheese",num: 44863,date: new Date("2018-09-06T11:01:11.577Z"),array: [47292,27229,"Chicken Route","Mountains",new Date("2018-09-05T22:54:34.520Z"),new Date("2018-09-06T07:11:15.643Z"),"embrace Chief",new Date("2018-09-06T14:50:13.240Z")]});
    },

    function(coll) {
        return coll.insert({_id: 13653,str: "e-services Lead",num: 90941,date: new Date("2018-09-06T05:35:03.801Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 13654,str: "Strategist cross-platform payment",num: 65531,date: new Date("2018-09-06T19:42:37.809Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 13655,str: "SMTP olive",num: 95109,array: [],obj: {_id: 13656,num: 49384,array: []}});
    },

    function(coll) {
        return coll.insert({_id: 13657,str: "Refined Fresh Salad 3rd generation maroon",num: 90629,date: new Date("2018-09-06T01:25:02.199Z"),obj: {_id: 13658,num: 64698,array: [],obj: {_id: 13659,str: "Estates neural",num: 22340,date: new Date("2018-09-06T19:33:13.519Z"),array: [70127,"withdrawal deliverables",new Date("2018-09-06T12:19:12.562Z"),[new Date("2018-09-06T08:52:54.800Z"),"IB FTP",57740],25023,[],"out-of-the-box",new Date("2018-09-06T11:37:13.274Z"),"Savings Account Checking Account",[],2191],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 13660,str: "Managed",num: 75958,date: new Date("2018-09-05T22:57:30.219Z"),array: ["navigating Representative",31831,[[]],77843,{_id: 13661,str: "generating technologies",date: new Date("2018-09-06T11:57:53.972Z"),array: [53294],obj: {_id: 13662,str: "alliance paradigms Car",num: 72615,date: new Date("2018-09-06T15:03:39.140Z"),array: [],obj: {}}},"Fantastic Steel Chicken incentivize",new Date("2018-09-06T03:39:17.828Z"),new Date("2018-09-06T06:28:07.907Z"),"microchip SMTP","Agent",61535,new Date("2018-09-06T01:37:30.070Z"),44096,new Date("2018-09-06T02:58:07.854Z")],obj: {_id: 13663,str: "Germany",num: 69160,array: []}});
    },

    function(coll) {
        return coll.insert({_id: 13664,str: "Plastic",num: 77856,date: new Date("2018-09-05T23:36:33.981Z"),array: [],obj: {_id: 13665,str: "maroon Officer",num: 82701,date: new Date("2018-09-06T17:25:57.902Z"),array: [["deposit"],36156,new Date("2018-09-05T20:12:19.134Z"),95584,357,"regional",[{_id: 13666,obj: {}}],"Netherlands Antillian Guilder emulation RSS",66139,new Date("2018-09-06T04:04:15.539Z"),"Tasty Canada Armenian Dram",new Date("2018-09-06T19:27:57.579Z")],obj: {_id: 13667,num: 1199,date: new Date("2018-09-06T16:30:23.027Z"),array: [],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 13668,str: "Self-enabling Florida",num: 63640,date: new Date("2018-09-06T07:15:38.797Z"),array: [65604,83584,11023,new Date("2018-09-06T15:18:40.437Z"),[],new Date("2018-09-06T03:28:58.441Z"),{_id: 13669,str: "Self-enabling Utah",num: 7983,array: [],obj: {_id: 13670,str: "architectures",num: 24889,date: new Date("2018-09-06T03:43:39.328Z"),obj: {}}},"Berkshire Views Interactions",{_id: 13671,str: "Open-architected implement",array: [new Date("2018-09-06T10:07:27.187Z"),"Iceland"],obj: {_id: 13672,num: 99775,date: new Date("2018-09-05T23:03:10.597Z"),array: [],obj: {_id: 13673,str: "Practical Granite Salad bottom-line TCP",date: new Date("2018-09-06T03:29:36.016Z")}}},"Buckinghamshire Marketing",{_id: 13674,num: 19187,date: new Date("2018-09-06T00:32:06.297Z"),obj: {}},"pixel"]});
    },

    function(coll) {
        return coll.insert({_id: 13675,str: "interface Rwanda Franc",num: 89544,date: new Date("2018-09-05T20:08:20.703Z"),array: [80975,"multimedia Generic Concrete Towels",87564,new Date("2018-09-06T15:27:21.771Z"),new Date("2018-09-06T06:07:15.950Z"),"haptic","robust quantifying",[],new Date("2018-09-05T22:45:28.527Z"),new Date("2018-09-06T19:34:09.062Z"),4062,{_id: 13676,str: "orchestrate blue Bedfordshire",num: 43884,date: new Date("2018-09-06T01:23:29.699Z"),array: ["system engine Gloves EXE",77727],obj: {}},"Texas Grocery",[]],obj: {_id: 13677,num: 95599,date: new Date("2018-09-06T10:31:20.575Z"),array: [new Date("2018-09-06T12:26:41.984Z")]}});
    },

    function(coll) {
        return coll.insert({_id: 13678,str: "Viaduct",num: 46543,date: new Date("2018-09-06T11:54:07.252Z"),array: [],obj: {_id: 13679,str: "Fresh mobile initiatives",num: 99343,date: new Date("2018-09-06T04:54:20.665Z"),array: [new Date("2018-09-06T12:10:55.143Z"),[],17169,85337,"transform strategize optical",new Date("2018-09-06T04:56:00.022Z"),new Date("2018-09-06T03:05:10.541Z"),["THX",new Date("2018-09-05T22:14:42.374Z"),{ _id: 13680 },12488],11171],obj: {_id: 13681,str: "Movies",num: 92296,date: new Date("2018-09-05T21:56:43.908Z"),array: [],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 13682,str: "Organic",date: new Date("2018-09-06T15:45:43.321Z"),array: [33646,{_id: 13683,str: "networks indexing",num: 14700,array: [],obj: {}},"black Chips",new Date("2018-09-06T14:21:45.618Z"),[],[[],21257,"Rustic",new Date("2018-09-06T14:38:54.471Z")],"wireless",{_id: 13684,str: "hacking",num: 37136,date: new Date("2018-09-05T22:23:19.601Z"),array: ["Supervisor Auto Loan Account"],obj: {}},{_id: 13685,num: 39312,date: new Date("2018-09-06T11:03:16.950Z"),array: [],obj: {_id: 13686,str: "conglomeration Shirt mobile",num: 12433,date: new Date("2018-09-06T09:28:41.169Z"),obj: {_id: 13687,str: "architectures hack multi-byte",num: 75946,date: new Date("2018-09-06T01:52:43.476Z"),array: ["FTP Tuvalu",[55404],new Date("2018-09-06T06:22:18.283Z"),"utilisation Handcrafted Dynamic"]}}}],obj: {_id: 13688,date: new Date("2018-09-05T21:49:10.666Z"),array: ["product",71331,new Date("2018-09-05T22:41:22.532Z")],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 13689,str: "Fantastic Steel Hat 6th generation RSS",num: 80931,date: new Date("2018-09-06T01:36:51.858Z"),array: [],obj: {_id: 13690,str: "online parse Awesome Fresh Ball",date: new Date("2018-09-06T10:23:45.381Z"),array: ["moratorium withdrawal",28445,"supply-chains Factors client-driven",new Date("2018-09-05T22:10:27.516Z"),72484,{_id: 13691,str: "Belarussian Ruble Gloves",num: 6837,date: new Date("2018-09-05T23:47:40.168Z"),obj: {_id: 13692,num: 46550,array: ["next-generation bypassing",[new Date("2018-09-06T09:25:12.027Z")],72707,95935,"Steel"],obj: {}}},{_id: 13693,str: "Global",num: 10117,date: new Date("2018-09-06T19:23:02.591Z"),array: []},{_id: 13694,str: "Money Market Account overriding",num: 65097,date: new Date("2018-09-05T21:43:09.253Z"),array: [38207]},"Uzbekistan Sum XSS",47704,[],new Date("2018-09-06T14:05:44.413Z")],obj: {_id: 13695,obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 13696,str: "analyzing portals",num: 49199,date: new Date("2018-09-06T03:34:46.979Z"),array: [new Date("2018-09-06T15:46:00.240Z"),new Date("2018-09-06T07:15:11.721Z"),86955,44360,"red","Bacon empower iterate","Generic Frozen Car","Borders",new Date("2018-09-06T17:24:32.515Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 13697,str: "Electronics",num: 9600,date: new Date("2018-09-06T07:26:12.945Z"),array: [new Date("2018-09-06T14:09:22.864Z"),79454,[new Date("2018-09-06T03:01:19.620Z"),"feed","District SSL experiences",60582],"Niue Seamless Outdoors",new Date("2018-09-06T01:49:25.913Z"),82219,{_id: 13698,str: "Cuba monitor Mongolia",num: 60275,date: new Date("2018-09-06T13:07:36.048Z"),array: [],obj: {_id: 13699,str: "Program deliverables Managed",num: 66483,date: new Date("2018-09-06T10:40:36.461Z"),array: []}},[new Date("2018-09-06T07:51:44.918Z")],{_id: 13700,date: new Date("2018-09-06T00:26:37.610Z"),array: [],obj: {}},"Outdoors"]});
    },

    function(coll) {
        return coll.insert({_id: 13701,str: "Centralized",num: 91251,date: new Date("2018-09-06T16:25:34.202Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 13702,str: "Berkshire Right-sized Rustic Concrete Cheese",num: 86867,date: new Date("2018-09-05T22:05:07.500Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 13703,num: 78188,date: new Date("2018-09-06T12:56:16.812Z"),array: [],obj: {_id: 13704,str: "Handcrafted Global",num: 72834,array: [84640,78209,[],"foreground Puerto Rico",new Date("2018-09-06T17:08:25.906Z"),new Date("2018-09-05T23:05:23.138Z"),new Date("2018-09-06T08:31:33.562Z"),"Manager",98575,new Date("2018-09-06T17:23:01.601Z"),"blue PNG AI"],obj: {_id: 13705,str: "array grey",array: [{_id: 13706,num: 50104,date: new Date("2018-09-06T09:33:56.459Z"),array: [],obj: {}},new Date("2018-09-06T17:50:21.908Z"),{_id: 13707,str: "Investment Account service-desk Strategist",num: 76310,date: new Date("2018-09-06T03:14:39.847Z"),array: ["Table New Jersey",[new Date("2018-09-06T01:20:34.882Z")]]},new Date("2018-09-06T09:30:14.651Z"),[],86676]}}});
    },

    function(coll) {
        return coll.insert({_id: 13708,str: "protocol",num: 21765,date: new Date("2018-09-06T05:38:06.998Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 13709,str: "global plum",num: 62588,array: [10406,new Date("2018-09-06T07:22:38.950Z"),"generating",{_id: 13710,str: "Cambridgeshire Handcrafted",num: 52296,date: new Date("2018-09-06T09:31:23.777Z"),array: [],obj: {_id: 13711,str: "Handmade Implementation Movies",num: 11615,date: new Date("2018-09-06T01:21:17.414Z"),array: [new Date("2018-09-06T05:57:14.682Z"),new Date("2018-09-06T08:36:07.044Z"),new Date("2018-09-06T17:22:47.459Z")],obj: {_id: 13712,num: 45049,date: new Date("2018-09-06T01:32:22.710Z"),array: []}}},"Spurs Web",{_id: 13713,str: "Central",date: new Date("2018-09-06T07:06:59.959Z"),obj: {}},98541,"FTP",32033,[],[],37315]});
    },

    function(coll) {
        return coll.insert({_id: 13714,str: "Representative",num: 33036,date: new Date("2018-09-06T11:21:21.760Z"),array: [new Date("2018-09-06T14:31:37.881Z"),11787,new Date("2018-09-06T19:38:04.089Z"),"Auto Loan Account Minnesota",["global Indiana systems",{_id: 13715,array: [],obj: {}},[],new Date("2018-09-05T20:54:29.802Z"),80472,"systems orchestrate"],"real-time Manager",new Date("2018-09-06T01:40:59.803Z"),new Date("2018-09-06T11:00:59.632Z"),55324,{_id: 13716,str: "Gorgeous Buckinghamshire Automotive",num: 285,date: new Date("2018-09-06T11:49:16.713Z"),obj: {_id: 13717,str: "Small Granite Fish JBOD Fresh",num: 14181,date: new Date("2018-09-05T20:03:07.301Z"),array: [12069,42752]}}],obj: {_id: 13718,str: "Handmade Rubber Table context-sensitive Texas",num: 6734,obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 13719,str: "infrastructure",num: 55793,date: new Date("2018-09-05T20:37:49.583Z"),array: [17160,"Unbranded Fresh Computer Automotive communities",new Date("2018-09-05T20:29:24.145Z"),[],"internet solution even-keeled",new Date("2018-09-05T21:43:59.994Z"),{_id: 13720,str: "Supervisor Representative Fundamental",num: 82489,date: new Date("2018-09-06T04:41:19.233Z"),array: []},new Date("2018-09-06T03:42:57.948Z"),96931,new Date("2018-09-06T12:41:35.413Z"),{_id: 13721,str: "Argentina",num: 136,date: new Date("2018-09-06T00:29:52.987Z"),array: [],obj: {}},{_id: 13722,array: [6082,54404],obj: {}},65129,"plug-and-play payment digital"],obj: {_id: 13723,str: "Internal Implemented program",num: 68666,date: new Date("2018-09-06T02:27:56.643Z"),array: [],obj: {_id: 13724,str: "Technician contingency",num: 43174,array: ["pixel Unbranded Steel Chicken Creative"]}}});
    },

    function(coll) {
        return coll.insert({_id: 13725,str: "gold",num: 18034,date: new Date("2018-09-06T17:01:47.352Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 13726,str: "open-source Architect Overpass",num: 40227,date: new Date("2018-09-06T12:08:54.628Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 13727,str: "Awesome orchestration",num: 27860,date: new Date("2018-09-06T02:07:19.259Z"),obj: {_id: 13728,num: 137,date: new Date("2018-09-05T23:35:17.305Z"),array: [16109,new Date("2018-09-06T19:34:58.950Z"),[],51617,new Date("2018-09-05T21:49:27.056Z"),new Date("2018-09-05T20:08:45.065Z"),"Facilitator invoice Regional",19263,new Date("2018-09-06T01:57:39.640Z"),{_id: 13729,str: "Global",num: 84536,date: new Date("2018-09-06T16:05:27.623Z"),array: [],obj: {_id: 13730,str: "Keys program",num: 68923,date: new Date("2018-09-06T18:39:11.010Z"),array: [new Date("2018-09-06T01:03:35.186Z"),"Human"],obj: {}}}]}});
    },

    function(coll) {
        return coll.insert({_id: 13731,str: "multimedia",num: 47967,date: new Date("2018-09-05T21:43:01.906Z"),array: ["SMTP",new Date("2018-09-05T23:08:40.816Z"),91845,new Date("2018-09-05T22:45:07.850Z"),{_id: 13732,str: "silver Web",num: 9602,date: new Date("2018-09-05T20:50:56.032Z"),array: [],obj: {}},13982,["New York",new Date("2018-09-06T17:22:47.889Z"),78648,[],30626,new Date("2018-09-06T09:38:52.003Z")],"program",new Date("2018-09-06T00:44:25.661Z")]});
    },

    function(coll) {
        return coll.insert({_id: 13733,str: "Rubber initiative Fresh",num: 6738,obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 13734,str: "encryption",num: 29994,date: new Date("2018-09-06T14:41:59.011Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 13735,str: "copy",num: 89040,date: new Date("2018-09-06T19:39:18.593Z"),array: [87905,new Date("2018-09-06T13:07:10.510Z"),new Date("2018-09-06T09:02:52.034Z"),"invoice PNG tan",new Date("2018-09-06T03:03:26.363Z"),74362,"incentivize visionary Clothing",{_id: 13736,str: "Checking Account array",num: 49075,date: new Date("2018-09-06T06:36:29.743Z"),array: [],obj: {}},77480,["Sudanese Pound Auto Loan Account",new Date("2018-09-05T20:36:00.157Z")],"input Inlet Ohio",69194,"deposit",56067],obj: {_id: 13737,str: "Buckinghamshire Libyan Arab Jamahiriya hacking",num: 95625,date: new Date("2018-09-05T20:21:14.578Z"),array: [{_id: 13738,date: new Date("2018-09-06T18:25:23.835Z")}]}});
    },

    function(coll) {
        return coll.insert({_id: 13739,str: "Legacy",num: 2743,date: new Date("2018-09-06T08:29:27.226Z"),array: [26302,{_id: 13740,str: "Platinum optimize",date: new Date("2018-09-06T00:25:32.353Z"),array: [],obj: {_id: 13741,str: "convergence Berkshire Steel",num: 64707,date: new Date("2018-09-06T19:28:40.396Z"),obj: {}}},[],{_id: 13742,str: "Extended Bedfordshire Colombian Peso Unidad de Valor Real",num: 55777,date: new Date("2018-09-06T15:13:07.499Z")},"protocol",[new Date("2018-09-06T12:41:01.516Z"),52288,{_id: 13743,num: 90902,array: [new Date("2018-09-06T14:15:00.867Z")],obj: {}},new Date("2018-09-06T16:41:39.007Z"),"open-source",new Date("2018-09-06T03:38:04.329Z")],91130,"Estate Fantastic Fresh Chips Global","Savings Account payment",new Date("2018-09-06T14:46:40.027Z"),55899]});
    },

    function(coll) {
        return coll.insert({_id: 13744,str: "Won back-end Oklahoma",num: 23225,date: new Date("2018-09-06T08:32:22.777Z"),obj: {_id: 13745,str: "Ergonomic Steel Fish",date: new Date("2018-09-06T19:03:41.535Z"),array: [68979,new Date("2018-09-06T15:05:35.831Z"),new Date("2018-09-05T22:06:35.536Z"),new Date("2018-09-06T11:07:10.941Z"),new Date("2018-09-06T07:48:16.648Z"),[],"system SMTP","Balanced Tuna Cedi",4716],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 13746,str: "fault-tolerant",num: 39912,date: new Date("2018-09-06T12:46:47.236Z"),array: [],obj: {_id: 13747,num: 26000,date: new Date("2018-09-06T18:59:30.864Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 13748,str: "back up",num: 7653,date: new Date("2018-09-05T20:22:48.124Z")});
    },

    function(coll) {
        return coll.insert({_id: 13749,str: "extensible Motorway virtual",num: 12018,date: new Date("2018-09-06T03:14:14.402Z"),array: ["override","Belarussian Ruble Bedfordshire Concrete",{_id: 13750,str: "program",date: new Date("2018-09-05T21:17:54.783Z"),array: [],obj: {_id: 13751,num: 91727,date: new Date("2018-09-06T12:06:31.648Z"),array: [],obj: {_id: 13752,str: "Generic Soft Bacon Data green",num: 17040,obj: {_id: 13753,num: 71038,date: new Date("2018-09-05T23:48:59.516Z"),array: [83288],obj: {}}}}},[],95942,"Iowa",new Date("2018-09-05T20:37:41.501Z"),new Date("2018-09-06T03:14:53.606Z"),"Zloty",[],new Date("2018-09-06T18:43:17.269Z"),{_id: 13754,num: 93599,array: [48571,"Fresh Frozen backing up"]},29014]});
    },

    function(coll) {
        return coll.insert({_id: 13755,str: "Cyprus",num: 12027,date: new Date("2018-09-06T17:25:17.558Z"),array: [],obj: {_id: 13756,str: "Quality Court Buckinghamshire",date: new Date("2018-09-06T08:57:10.727Z"),array: [{_id: 13757,str: "HTTP CSS feed",num: 71064,date: new Date("2018-09-06T14:00:16.756Z"),array: ["Ergonomic Rubber Chicken"],obj: {}},35161,{_id: 13758,date: new Date("2018-09-06T03:42:45.129Z"),array: [new Date("2018-09-06T18:35:57.604Z")],obj: {}},new Date("2018-09-05T21:27:44.106Z"),"withdrawal deposit",[],"CSS",[[],68032],new Date("2018-09-06T08:26:48.085Z"),"Indiana composite Infrastructure","Iowa Fantastic",new Date("2018-09-06T00:41:16.097Z"),72802],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 13759,str: "Ball sensor",num: 34928,date: new Date("2018-09-06T15:36:35.240Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 13760,str: "Dalasi",num: 47342,date: new Date("2018-09-06T10:41:32.433Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 13761,str: "Won transmitter framework",num: 59191,array: [new Date("2018-09-06T09:14:03.203Z"),"Balanced neural",12620,"Cotton utilize e-commerce",{_id: 13762,str: "Bacon Dobra",num: 6207,date: new Date("2018-09-06T10:58:05.468Z"),obj: {}},42180,14853,new Date("2018-09-05T23:04:35.626Z"),new Date("2018-09-06T06:36:05.297Z"),[],"Syrian Arab Republic zero administration Cheese",{_id: 13763,date: new Date("2018-09-06T05:16:45.065Z"),array: [],obj: {_id: 13764,str: "Director",num: 92370,array: ["Belize New Mexico",79223,new Date("2018-09-05T20:17:18.929Z")],obj: {_id: 13765,str: "utilisation",num: 58000,date: new Date("2018-09-06T16:35:42.976Z"),array: [[],new Date("2018-09-06T15:22:31.558Z")],obj: {}}}}]});
    },

    function(coll) {
        return coll.insert({_id: 13766,str: "frame synergies Credit Card Account",num: 17897,date: new Date("2018-09-06T17:56:52.255Z"),array: [38131,"enterprise hack",new Date("2018-09-06T08:57:23.489Z"),"redundant Internal",{_id: 13767,str: "Operations Georgia cutting-edge",num: 32924,array: [],obj: {_id: 13768,str: "Flats Fantastic",num: 88496,date: new Date("2018-09-06T04:17:00.953Z"),array: [],obj: {}}},new Date("2018-09-06T00:53:21.736Z"),new Date("2018-09-06T02:41:28.993Z"),10664,"HTTP","Research Architect",61464,[new Date("2018-09-06T11:29:16.032Z"),{_id: 13769,str: "viral RAM Factors",num: 62804,date: new Date("2018-09-06T00:08:11.232Z"),obj: {}}],"magenta Savings Account",{_id: 13770,num: 1383,date: new Date("2018-09-06T15:57:59.145Z"),obj: {}}]});
    },

    function(coll) {
        return coll.insert({_id: 13771,str: "array",num: 20190,array: [59616,new Date("2018-09-06T02:19:03.803Z"),"Intelligent Plastic Bacon Movies fuchsia","Chair Electronics system engine",15421,92584,39208,{_id: 13772,num: 6277,date: new Date("2018-09-06T12:21:30.607Z"),array: [],obj: {_id: 13773,str: "Cotton digital",date: new Date("2018-09-06T19:19:02.751Z")}},{_id: 13774,str: "payment",num: 40626,date: new Date("2018-09-06T02:07:10.672Z"),array: [new Date("2018-09-06T01:47:09.974Z")],obj: {_id: 13775,str: "website Function-based",num: 726,obj: {}}},"fault-tolerant",["mission-critical pixel",new Date("2018-09-06T01:03:43.919Z")],new Date("2018-09-06T10:18:18.566Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 13776,str: "Granite orange",num: 19966,date: new Date("2018-09-06T15:05:03.348Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 13777,str: "generating",num: 25107,date: new Date("2018-09-05T23:17:43.465Z"),array: [new Date("2018-09-06T19:23:49.231Z"),"Bahrain pixel","Cape",new Date("2018-09-06T01:17:48.948Z"),{_id: 13778,str: "Bacon",num: 75056,date: new Date("2018-09-06T13:15:40.682Z"),array: [],obj: {_id: 13779,date: new Date("2018-09-06T04:04:52.994Z"),array: [17473,new Date("2018-09-06T13:50:12.491Z"),{_id: 13780,str: "Home Associate",num: 9471,date: new Date("2018-09-06T06:42:21.910Z")},"aggregate Kina maximized",57403]}},"Fresh framework interface",[],4313,"auxiliary Agent Brook",35562],obj: {_id: 13781,str: "compress Infrastructure",num: 9167,array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 13782,str: "installation Belarussian Ruble Cape Verde Escudo",num: 23125,date: new Date("2018-09-06T04:09:10.883Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 13783,str: "Accountability De-engineered USB",num: 42349,date: new Date("2018-09-05T22:06:27.040Z"),array: [],obj: {_id: 13784,num: 12755,date: new Date("2018-09-05T20:50:33.986Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 13785,str: "Lithuanian Litas Multi-layered",num: 26281,date: new Date("2018-09-06T02:53:40.546Z"),array: [8472,new Date("2018-09-06T11:49:07.552Z"),new Date("2018-09-05T20:06:34.204Z"),"Salad","e-markets","Granite Mission",82701,new Date("2018-09-05T22:46:40.749Z"),45845,61143,"Stravenue",new Date("2018-09-05T23:15:15.718Z")]});
    },

    function(coll) {
        return coll.insert({_id: 13786,str: "Buckinghamshire sky blue Profound",num: 21967,date: new Date("2018-09-06T05:49:58.913Z"),array: [{_id: 13787,str: "scalable",num: 90250,date: new Date("2018-09-06T05:17:18.513Z")},new Date("2018-09-06T11:19:30.286Z"),75486,"withdrawal Trafficway",[],44974,new Date("2018-09-05T20:49:48.801Z"),"Rwanda",7097,new Date("2018-09-06T02:50:01.983Z"),{_id: 13788,str: "Savings Account Illinois connecting",num: 78985,array: [[]],obj: {}},32576,91010,"Directives Cotton"],obj: {_id: 13789,num: 66289,array: [[]],obj: {_id: 13790,str: "attitude-oriented invoice open-source",array: []}}});
    },

    function(coll) {
        return coll.insert({_id: 13791,str: "Practical system-worthy",num: 39147,date: new Date("2018-09-05T21:25:19.727Z"),array: ["Latvian Lats",[],{_id: 13792,str: "Tuna",num: 46394,date: new Date("2018-09-06T03:02:40.736Z"),array: [],obj: {}},"Avon metrics","Ergonomic zero defect",new Date("2018-09-05T22:51:52.752Z"),40993,new Date("2018-09-06T04:51:29.879Z"),{_id: 13793,str: "Checking Account Savings Account",date: new Date("2018-09-06T03:54:24.196Z"),array: [40355]},[],new Date("2018-09-05T21:01:45.310Z")],obj: {_id: 13794,num: 22400,date: new Date("2018-09-06T03:20:44.639Z"),array: ["aggregate",new Date("2018-09-06T05:07:19.047Z")],obj: {}}});
    },

];

const indexList = [

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"num": -1});
    },

    function(coll) {
        return coll.createIndex({"str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.num": 1, "obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.num": 1, "obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": 1, "obj.obj.obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": 1, "obj.obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"str": -1, "obj.obj.obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": 1, "obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": -1, "obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": 1, "obj.obj.obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": 1, "num": -1});
    },

    function(coll) {
        return coll.createIndex({"str": -1, "obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": -1, "obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"str": 1});
    },

    function(coll) {
        return coll.createIndex({"date": 1});
    },

    function(coll) {
        return coll.createIndex({"num": -1, "obj.obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": 1, "obj.obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.str": -1, "obj.obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": -1, "obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": 1, "obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": 1, "obj.obj.obj.num": 1, "obj.obj.obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.date": -1, "date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": 1, "obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.date": -1, "obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": -1, "date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": -1, "str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.num": 1, "obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": -1, "obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"str": -1, "obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": 1, "obj.obj.obj.obj.num": -1, "obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.str": -1, "obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": -1, "obj.obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": -1, "date": -1, "obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"num": -1, "obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.date": -1, "date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": -1, "obj.obj.date": -1, "obj.obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": -1, "obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": 1, "str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": 1, "obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.num": -1, "num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": 1, "obj.obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": -1, "obj.obj.date": 1});
    },

];

const aggregationList = [

        [{$project: {a: { $map: {input: ['$num'],as: 'chesley',in: { $indexOfArray: [{ $reverseArray: [["Outdoors Outdoors Lithuania","Licensed Personal Loan Account Credit Card Account"]] },{ $dateToString: {date: '$$chesley',timezone: "Asia/Magadan"} },12] }} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.num'],31228] }, _id: 0}}],

        [{$project: {a: { $concatArrays: [['$obj.obj.obj.obj.num'],[{ $multiply: [] },1350],['$obj.obj.num','$obj.obj.obj.obj.num'],['$obj.obj.str',"Credit Card Account lime","Cross-group Central"],[]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$obj.obj.obj.obj.str',{ $substrCP: [{ $toString: { $reverseArray: [[]] } },15,2] }],["Alley blue Associate"],[],[{ $toLower: '$obj.obj.obj.obj.str' },{ $substr: ['$obj.obj.obj.obj.str',3,15] }],[],[]]] }, _id: 0}}],

        [{$project: {a: { $minute: { $isoWeekYear: { $dateFromString: {dateString: "2018-09-06T04:34:31.030Z",timezone: "Europe/Brussels"} } } }, _id: 0}}],

        [{$project: {a: { $dayOfYear: { $toDate: { $concatArrays: [[93062],[],[3528,{ $substr: [{ $toLower: "XML" },16,1] },false],[{ $substr: [{ $dateToString: {date: new Date("2018-09-06T06:00:46.325Z"),format: "%Y-%w-%w-%%-%Z-%H-%Y-%Z-%d-%L-%d",timezone: "Chile/Continental"} },15,17] },'$obj.obj.str']] } } }, _id: 0}}],

        [{$project: {a: DATE;, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[["mission-critical Architect Strategist",'$obj.str',{ $trim: {input: '$obj.str',chars: "USB communities Wooden"} }],['$obj.obj.num'],[{ $concat: [{ $substrBytes: ["USB Fantastic",0,1] }] },'$obj.obj.obj.obj.str'],[]]] }, _id: 0}}],

        [{$project: {a: { $concatArrays: [[66899,'$obj.num'],[]] }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: '$obj.obj.obj.obj.date',timezone: "Indian/Christmas",onNull: "connecting"} }, _id: 0}}],

        [{$project: {a: { $substr: ['$str',19,6] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Car",v: new Date("2018-09-06T05:09:38.708Z")},{k: "Pizza overriding Frozen",v: { $concat: ["metrics back up",'$obj.obj.obj.obj.str'] }},{k: "matrix Sports Assimilated",v: 18506}]] }, _id: 0}}],

        [{$project: {a: { $range: [19,18] }, _id: 0}}],

        [{$project: {a: { $substrCP: ['$obj.obj.obj.str',17,4] }, _id: 0}}],

        [{$project: {a: LOOKUP_date;, _id: 0}}],

        [{$project: {a: { $substrBytes: [{ $toLower: '$str' },17,19] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.obj.str'],48986] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[{ $concat: ["Books","Up-sized Iceland Krona",'$obj.obj.obj.str'] }],[],[61785,'$num','$obj.obj.obj.obj.num'],[],[{ $rtrim: { input: '$obj.obj.obj.obj.str' } }]]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "deposit",v: '$obj.obj.obj.obj.date'}]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[23462],["structure"],['$obj.str'],['$obj.num'],[{ $toString: { $toDate: { $substrCP: ['$obj.obj.obj.obj.str',15,9] } } },{ $dateToString: {date: { $week: { $isoWeekYear: '$obj.obj.obj.obj.date' } },format: "%m-%U-%V-%z-%Z-%z",onNull: "South Carolina United Kingdom target"} },{ $trim: { input: "reintermediate brand GB" } }]]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["Investment Account Refined Cotton Pants",{ $rtrim: {input: '$obj.obj.obj.obj.str',chars: "parsing navigate"} }],93681] }, _id: 0}}],

        [{$project: {a: { $millesecond: { $year: { $dateToParts: {date: { $week: { $isoWeek: { $dayOfYear: { $minute: { $isoWeekYear: { $dayOfMonth: { $toDate: { $range: [20,20,6] } } } } } } } },timezone: "America/Recife"} } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],41842] }, _id: 0}}],

        [{$project: {a: { $rtrim: { input: { $substrCP: ['$obj.obj.str',0,7] } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],[]]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.obj.num'],74636] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $toString: { $range: [14,10,2] } },'$obj.obj.obj.str',"ADP",{ $toUpper: '$obj.obj.obj.str' }],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Customer incremental",v: true}]] }, _id: 0}}],

        [{$project: {a: { $toUpper: "relationships transparent invoice" }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Tasty Metal Gloves program",v: '$obj.obj.obj.str'}]] }, _id: 0}}],

        [{$project: {a: { $dateFromString: { dateString: "2018-09-06T10:04:15.847Z" } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Cambridgeshire Saint Lucia Small Cotton Pants",v: 23101},{k: "teal",v: { $year: { $minute: { $dayOfMonth: { $toDate: { $week: { $dateToParts: {date: { $toDate: { $objectToArray: '$obj.obj' } },timezone: "Asia/Krasnoyarsk"} } } } } } }},{k: "Avon",v: "needs-based"}]] }, _id: 0}}],

        [{$project: {a: { $week: { $isoDayOfWeek: { $dateToParts: {date: { $dayOfYear: { $isoWeek: { $toDate: { $arrayToObject: [[["Compatible Games",'$str'],[]]] } } } },timezone: "Asia/Thimbu",iso8601: true} } } }, _id: 0}}],

        [{$project: {a: { $minute: { $dayOfYear: { $millesecond: { $dayOfWeek: { $dayOfMonth: new Date("2018-09-06T04:35:23.494Z") } } } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],30834] }, _id: 0}}],

        [{$project: {a: { $reverseArray: [[{ $trim: {input: { $substrCP: ["Puerto Rico program Croatia",20,17] },chars: "Metal aggregate Practical Frozen Keyboard"} }]] }, _id: 0}}],

        [{$project: {a: { $toUpper: '$obj.obj.str' }, _id: 0}}],

        [{$project: {a: { $dayOfWeek: { $hour: { $minute: { $dayOfMonth: { $isoWeek: { $dateFromParts: {isoWeekYear: { $mod: ['$obj.obj.num','$num'] },isoDayOfWeek: { $add: ['$obj.obj.obj.obj.num',34330,69079] }} } } } } } }, _id: 0}}],

        [{$project: {a: { $week: { $isoWeek: { $toDate: { $zip: {inputs: [['$obj.obj.obj.str'],['$obj.obj.str',{ $concat: [] }],[46921,'$obj.num','$obj.num','$obj.num'],[]],defaults: [{}]} } } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Auto Loan Account",v: 81359}]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.num',{ $sqrt: 21236 },{ $divide: ['$obj.obj.obj.num','$obj.num'] }],65098] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $toLower: "transmit" }],63136] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[97485,'$obj.num','$obj.num'],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $dayOfWeek: { $second: { $dateFromParts: {year: { $mod: [33555,'$obj.obj.obj.obj.num'] },month: { $add: [77266,19575] },day: { $pow: ['$obj.obj.num',{ $size: [[{ $dateToString: {date: { $dateFromString: {dateString: "2018-09-06T00:47:51.275Z",timezone: "Asia/Tomsk",onNull: "synthesizing Unbranded"} },timezone: "America/Winnipeg"} },'$obj.str',"24/365 Direct interface"]] }] },second: { $ceil: { $size: [['$obj.obj.obj.num','$obj.num']] } },millisecond: { $subtract: [75145,69135] }} } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Books",v: false},{k: "application ivory primary",v: '$obj.num'}]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Handmade",v: '$obj.obj.obj.str'}]] }, _id: 0}}],

        [{$project: {a: { $toLower: '$obj.str' }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[]] }, _id: 0}}],

        [{$project: {a: { $minute: { $isoWeek: '$obj.obj.date' } }, _id: 0}}],

        [{$project: {a: LOOKUP_date;, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$num'] }, _id: 0}}],

        [{$project: {a: { $reverseArray: [[]] }, _id: 0}}],

        [{$project: {a: { $concatArrays: [['$obj.num',26818],['$obj.obj.obj.obj.str'],[89426],[],['$obj.obj.obj.num'],[]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[["SDD Practical Plastic Shoes FTP",'$obj.obj.obj.obj.str'],[],['$obj.obj.obj.obj.str','$obj.obj.str'],[68474,'$obj.num'],['$obj.str',"Berkshire deposit"]]] }, _id: 0}}],

        [{$project: {a: { $substrCP: ['$str',13,15] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["client-driven Investor high-level",'$obj.obj.str'],28938] }, _id: 0}}],

        [{$project: {a: { $week: { $dateToParts: { date: { $second: { $dayOfWeek: { $isoWeek: { $dateFromParts: {year: { $add: [] },day: { $mod: ['$obj.obj.num',57367] },millisecond: { $log10: 35885 }} } } } } } } }, _id: 0}}],

        [{$project: {a: { $toUpper: { $ltrim: {input: '$obj.obj.obj.obj.str',chars: "port Money Market Account"} } }, _id: 0}}],

        [{$project: {a: { $filter: {input: [],as: 'assunta',cond: { $or: [{ $dateToString: {date: new Date("2018-09-06T14:49:55.842Z"),format: "%Y-%j-%m-%M-%V-%L-%Y-%%",timezone: "ROC",onNull: { $trim: { input: "Regional" } }} },{ $rtrim: {input: "deploy",chars: '$$assunta'} },'$$assunta'] }} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.str'],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $year: { $week: { $isoDayOfWeek: { $week: { $dayOfMonth: { $millesecond: { $month: { $isoWeek: { $dateFromParts: {isoWeekYear: { $abs: 32152 },minute: { $mod: ['$obj.obj.num','$obj.obj.obj.obj.num'] },second: { $exp: 82271 },millisecond: { $log10: 27953 }} } } } } } } } } }, _id: 0}}],

        [{$project: {a: { $dayOfWeek: { $millesecond: { $dateFromString: {dateString: "2018-09-06T00:52:21.983Z",format: "%G-%u-%m-%S-%m-%j-%j-%G-%w-%%-%z",onError: { $arrayToObject: [[]] },onNull: '$str'} } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "RAM",v: '$obj.obj.obj.obj.num'}]] }, _id: 0}}],

        [{$project: {a: { $filter: {input: [{ $substrBytes: [{ $substrCP: ["Baby Ergonomic Steel Car Licensed Wooden Hat",14,18] },2,3] }],as: 'gage',cond: { $not: [{ $arrayElemAt: [[],'$obj.obj.obj.num'] }] }} }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj' }, _id: 0}}],

        [{$project: {a: { $reverseArray: [[]] }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj' }, _id: 0}}],

        [{$project: {a: { $toString: { $map: {input: [{ $ltrim: {input: "Iceland Tala",chars: '$obj.str'} }],in: { $divide: [18697,'$$this'] }} } }, _id: 0}}],

        [{$project: {a: { $toLower: { $toLower: '$obj.str' } }, _id: 0}}],

        [{$project: {a: { $dayOfMonth: { $dateToString: {date: { $dateFromParts: {isoWeekYear: { $exp: '$obj.obj.obj.obj.num' },isoWeek: { $trunc: '$obj.obj.num' },hour: { $sqrt: 2288 },millisecond: { $mod: [73979,{ $log10: 91169 }] },timezone: "Etc/GMT-5"} },timezone: "Africa/Accra"} } }, _id: 0}}],

        [{$project: {a: { $isoDayOfWeek: { $minute: { $hour: { $dateToParts: {date: { $dateFromParts: {isoWeekYear: { $add: ['$obj.obj.num','$obj.obj.obj.obj.num'] },timezone: "America/Fortaleza"} },timezone: "America/Regina",iso8601: true} } } } }, _id: 0}}],

        [{$project: {a: { $concatArrays: [["Saint Lucia payment mesh",'$obj.obj.str']] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[]]] }, _id: 0}}],

        [{$project: {a: { $ltrim: { input: "Music Movies system" } }, _id: 0}}],

        [{$project: {a: { $reverseArray: [[{ $rtrim: {input: "firewall Liechtenstein",chars: "Central Netherlands Antilles"} }]] }, _id: 0}}],

        [{$project: {a: { $filter: {input: ["compress deposit Handmade Soft Cheese",{ $toLower: "Gardens portal" },'$str'],as: 'freeman',cond: { $isArray: [{ $dateToString: { date: { $dateFromString: {dateString: "2018-09-06T12:11:36.285Z",format: "%U-%S-%S-%U-%H-%V-%U-%V-%S-%Y-%j",timezone: "Asia/Khandyga",onError: { $arrayToObject: [[{k: "utilize Open-source Unbranded",v: '$obj.date'},{k: "Ports parse",v: true},{k: "Hawaii Guinea",v: false}]] }} } } }] }} }, _id: 0}}],

        [{$project: {a: { $filter: {input: ["Rubber asymmetric",{ $substr: ['$obj.obj.obj.str',13,5] }],cond: { $isArray: [{ $arrayToObject: [[{k: "schemas Intranet Steel",v: "encoding Direct RAM"}]] }] }} }, _id: 0}}],

        [{$project: {a: { $map: {input: ["zero defect Berkshire",{ $rtrim: { input: { $dateToString: { date: '$obj.obj.obj.date' } } } }],in: { $mod: ['$$this',83844] }} }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: new Date("2018-09-06T01:11:53.783Z"),timezone: "Africa/Ceuta",onNull: { $arrayToObject: [[]] }} }, _id: 0}}],

        [{$project: {a: { $dateFromParts: {year: '$obj.num',day: { $trunc: { $multiply: [] } },hour: { $mod: [7592,'$obj.obj.obj.obj.num'] },minute: { $floor: { $divide: [19890,50163] } },second: { $log: ['$obj.num','$num'] },timezone: "Asia/Gaza"} }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [[87169,15259],["Plastic Frozen",{ $substrBytes: ['$obj.obj.obj.str',5,9] },"Fantastic Wooden Computer methodologies"],[]],useLongestLength: true,defaults: [91429]} }, _id: 0}}],

        [{$project: {a: { $trim: {input: '$obj.obj.obj.str',chars: { $ltrim: { input: '$str' } }} }, _id: 0}}],

        [{$project: {a: { $toString: { $year: { $hour: { $dayOfWeek: { $year: { $dayOfMonth: { $isoDayOfWeek: { $dayOfWeek: { $year: { $isoWeek: { $month: { $week: { $week: { $dayOfYear: { $dateFromParts: {year: { $sqrt: 63552 },month: { $add: [] },hour: { $abs: '$num' }} } } } } } } } } } } } } } } }, _id: 0}}],

        [{$project: {a: { $dayOfYear: { $month: { $dayOfMonth: { $dateToString: {date: '$date',format: "%Z-%S-%d-%u-%U-%Y-%Y",timezone: "America/Monterrey"} } } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],['$obj.obj.obj.obj.num','$obj.obj.obj.num']]] }, _id: 0}}],

        [{$project: {a: { $concat: ["Colorado solid state"] }, _id: 0}}],

        [{$project: {a: { $dayOfWeek: { $millesecond: { $dateToString: {date: '$obj.obj.obj.obj.date',format: "%m-%j-%z-%V-%G-%Z-%S-%V-%j-%H-%U-%M"} } } }, _id: 0}}],

        [{$project: {a: { $dayOfMonth: { $dateToString: {date: '$date',format: "%S-%Y-%d-%L",onNull: { $arrayToObject: [[{k: "Arkansas",v: '$obj.obj.obj.str'},{k: "solutions",v: '$obj.num'}]] }} } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$str'],['$obj.obj.num'],[],["Berkshire Estate",{ $substr: ["pixel Intelligent Metal Car",9,12] },{ $substrCP: ['$obj.str',10,20] }]]] }, _id: 0}}],

        [{$project: {a: { $substr: ["circuit",5,6] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[]] }, _id: 0}}],

        [{$project: {a: { $minute: { $isoWeek: { $toDate: { $arrayToObject: [[{k: "Turks and Caicos Islands Plastic payment",v: 58510},{k: "executive Monaco Borders",v: "innovative"},{k: "Bedfordshire",v: { $minute: { $millesecond: { $dayOfMonth: new Date("2018-09-06T13:53:32.898Z") } } }}]] } } } }, _id: 0}}],

        [{$project: {a: { $range: [6,18,10] }, _id: 0}}],

        [{$project: {a: { $concatArrays: [[15504,'$obj.obj.obj.obj.num','$obj.obj.obj.obj.num'],[],['$obj.obj.obj.obj.num',26919,'$obj.num']] }, _id: 0}}],

        [{$project: {a: { $trim: { input: { $trim: { input: { $substr: ["District",2,2] } } } } }, _id: 0}}],

        [{$project: {a: { $toString: { $dayOfWeek: { $isoWeekYear: { $dateToParts: {date: { $week: { $hour: '$obj.obj.obj.date' } },timezone: "Asia/Dacca"} } } } }, _id: 0}}],

        [{$project: {a: { $dateFromParts: {isoWeekYear: { $abs: 61096 },isoWeek: { $indexOfArray: [{ $filter: {input: [{ $substr: [{ $trim: { input: "Parkway" } },13,9] }],as: 'lula',cond: { $gte: [{ $rtrim: { input: '$$lula' } },{ $arrayElemAt: [['$obj.obj.str',"Overpass port"],1305] }] }} },{ $arrayToObject: [[{k: "navigating",v: false},{k: "structure calculate Concrete",v: '$obj.obj.obj.obj.num'}]] }] },second: { $ceil: '$obj.num' }} }, _id: 0}}],

        [{$project: {a: { $ltrim: {input: '$obj.obj.obj.str',chars: "content"} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[["Borders Roads Music",'$str',"Mount"],[57040]]] }, _id: 0}}],

        [{$project: {a: { $minute: { $isoDayOfWeek: new Date("2018-09-06T11:24:14.123Z") } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[["interactive"],[{ $concat: [{ $rtrim: {input: '$obj.str',chars: "Ethiopian Birr enhance transmit"} }] }],[],[],[],['$obj.obj.obj.str',"Home Loan Account Handcrafted online","adapter","Orchestrator Auto Loan Account"]]] }, _id: 0}}],

        [{$project: {a: { $dateFromString: {dateString: "2018-09-06T03:35:47.114Z",timezone: "Asia/Aqtobe"} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[["Garden monitor","SQL sky blue"],[],[{ $ltrim: { input: { $dateToString: {date: { $second: { $dayOfYear: { $year: { $dayOfMonth: { $dayOfMonth: { $isoDayOfWeek: { $isoWeekYear: { $year: { $isoDayOfWeek: { $dateToString: {date: '$obj.date',format: "%G-%%-%S-%V-%z-%M-%L-%%-%M-%L",timezone: "Iran"} } } } } } } } } } },format: "%z-%Z-%w-%m-%Z-%V-%z-%m",timezone: "Europe/Luxembourg"} } } }],[],["Fresh Causeway firewall",'$obj.obj.obj.str',"morph"],[51261]]] }, _id: 0}}],

        [{$project: {a: { $isoWeek: { $dayOfMonth: { $isoWeekYear: new Date("2018-09-05T22:20:44.261Z") } } }, _id: 0}}],

        [{$project: {a: { $substr: ['$obj.obj.obj.str',5,7] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "GB synthesizing online",v: '$obj.obj.obj.str'},{k: "Isle deposit Handmade",v: false}]] }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [[]],useLongestLength: true,defaults: [83514]} }, _id: 0}}],

        [{$project: {a: { $week: { $month: { $toDate: { $arrayToObject: [[{k: "intangible killer Ukraine",v: new Date("2018-09-05T23:31:24.914Z")},{k: "Marketing",v: false}]] } } } }, _id: 0}}],

        [{$project: {a: { $toString: { $ltrim: {input: { $ltrim: { input: "invoice purple multi-state" } },chars: '$str'} } }, _id: 0}}],

        [{$project: {a: { $dayOfWeek: '$date' }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[["cultivate Kids matrix","Steel Gloves"],[{ $substrCP: ['$obj.obj.obj.obj.str',13,4] },{ $concat: [{ $trim: {input: '$obj.str',chars: '$str'} }] }],[],[55212],[],[],[{ $dateToString: {date: '$date',format: "%%-%Z-%%-%V-%Y-%L-%d"} },"extensible viral",'$obj.obj.obj.obj.str',"Swiss Franc Rwanda bypass"]]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $dateToString: {date: '$obj.obj.obj.date',format: "%j-%j-%V-%L",timezone: "Africa/Tripoli"} }],29162] }, _id: 0}}],

        [{$project: {a: { $year: { $hour: { $toDate: { $objectToArray: '$obj.obj.obj.obj.obj' } } } }, _id: 0}}],

        [{$project: {a: { $concat: ["Djibouti Franc bandwidth olive","interface Neck",'$str'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[]] }, _id: 0}}],

        [{$project: {a: { $toDate: { $range: [20,8,15] } }, _id: 0}}],

        [{$project: {a: { $toUpper: '$obj.obj.obj.str' }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj.obj' }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: new Date("2018-09-06T19:50:54.516Z"),format: "%H-%H-%w-%Y-%Z-%m-%m-%Z"} }, _id: 0}}],

        [{$project: {a: { $substrCP: [{ $ltrim: { input: "Representative synthesize" } },1,3] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$str',{ $toUpper: '$str' }],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $substr: ["magenta Fantastic Soft Mouse Tasty",12,16] }, _id: 0}}],

        [{$project: {a: { $year: { $dateToString: {date: '$obj.date',timezone: "Europe/Nicosia"} } }, _id: 0}}],

        [{$project: {a: { $toUpper: { $rtrim: { input: "Supervisor Yuan Renminbi" } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[50665,15515],[],[],[],["calculate",'$obj.obj.obj.str','$obj.obj.str']]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[6194,'$obj.obj.obj.obj.num'],[],[{ $rtrim: { input: '$str' } },'$obj.str']]] }, _id: 0}}],

        [{$project: {a: { $map: {input: ['$obj.obj.num'],in: { $ln: 94538 }} }, _id: 0}}],

        [{$project: {a: { $filter: {input: [{ $concat: ['$obj.str'] }],as: 'margarita',cond: { $in: [{ $arrayToObject: [[[],[{ $dateToString: { date: '$date' } },'$$margarita','$$margarita',"Cloned"],[],['$$margarita'],["Oklahoma Berkshire",'$$margarita','$obj.obj.str'],[]]] },{ $map: {input: ['$obj.num'],as: 'loma',in: { $exp: 23783 }} }] }} }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: new Date("2018-09-06T03:57:48.763Z"),format: "%m-%w-%j-%S-%j-%S-%S-%m-%Y",timezone: "Etc/GMT-5",onNull: { $arrayElemAt: [["USB Universal solid state"],76454] }} }, _id: 0}}],

        [{$project: {a: { $concatArrays: [['$obj.obj.str',{ $trim: {input: "moratorium Soap Refined",chars: "UAE Dirham"} }],[],[]] }, _id: 0}}],

        [{$project: {a: { $range: [4,20] }, _id: 0}}],

        [{$project: {a: { $toDate: { $arrayToObject: [[{k: "invoice Euro",v: '$obj.obj.obj.obj.date'}]] } }, _id: 0}}],

        [{$project: {a: { $concatArrays: [[],[],['$obj.str']] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$obj.obj.obj.str',"microchip"],[21317],[true],[],[]]] }, _id: 0}}],

        [{$project: {a: { $toLower: { $substr: ['$obj.str',14,2] } }, _id: 0}}],

        [{$project: {a: { $dayOfYear: { $isoDayOfWeek: { $dateToString: {date: new Date("2018-09-06T05:19:24.000Z"),format: "%M-%d-%d-%U-%U-%H-%H-%M",timezone: "PST8PDT"} } } }, _id: 0}}],

        [{$project: {a: { $isoDayOfWeek: { $dateToString: {date: '$obj.obj.date',timezone: "Australia/Sydney",onNull: '$obj.obj.obj.obj.str'} } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Portugal navigating embrace",v: { $dateToParts: {date: { $month: { $minute: { $hour: { $isoDayOfWeek: { $hour: { $week: { $dayOfMonth: { $toDate: { $dayOfWeek: { $second: { $week: { $isoWeekYear: '$obj.obj.obj.obj.date' } } } } } } } } } } } },timezone: "Canada/Pacific"} }}]] }, _id: 0}}],

        [{$project: {a: { $substrBytes: [{ $trim: {input: { $dateToString: {date: '$obj.obj.date',timezone: "America/Indiana/Vevay"} },chars: '$obj.obj.str'} },7,15] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$obj.obj.obj.obj.num'],['$str',{ $toString: { $dayOfWeek: { $minute: { $week: { $dayOfYear: { $toDate: { $zip: {inputs: [[],["leverage parsing"],[],[]],defaults: []} } } } } } } },"New Jersey"],['$obj.obj.obj.num'],['$obj.obj.obj.obj.str',49438]]] }, _id: 0}}],

        [{$project: {a: { $second: { $month: { $hour: { $minute: { $year: '$obj.obj.obj.date' } } } } }, _id: 0}}],

        [{$project: {a: { $dayOfMonth: { $dayOfYear: { $isoWeek: { $minute: { $second: '$obj.obj.date' } } } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $pow: [73948,4143] }],78316] }, _id: 0}}],

        [{$project: {a: { $map: {input: [],in: { $mod: ['$obj.obj.obj.num',87467] }} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],75243] }, _id: 0}}],

        [{$project: {a: { $substr: [{ $toUpper: "Garden bypass Sleek Concrete Car" },10,6] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.num','$obj.num'],28616] }, _id: 0}}],

        [{$project: {a: { $substrBytes: ['$obj.str',1,7] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $rtrim: { input: "streamline magnetic" } },"Electronics"],'$obj.obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $trim: {input: "Viaduct Down-sized Sleek Granite Bacon",chars: '$obj.str'} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],70232] }, _id: 0}}],

        [{$project: {a: { $dayOfYear: { $month: { $millesecond: { $minute: { $toDate: { $arrayElemAt: [['$str',"Jewelery alarm Hat"],95847] } } } } } }, _id: 0}}],

        [{$project: {a: { $dateFromString: {dateString: "2018-09-06T05:23:15.401Z",onError: new Date("2018-09-06T15:49:58.052Z")} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.obj.obj.num'],40841] }, _id: 0}}],

        [{$project: {a: { $second: { $year: { $isoWeek: { $dateToParts: { date: { $dateToString: {date: new Date("2018-09-06T04:05:53.381Z"),timezone: "America/Santarem",onNull: '$obj.obj.obj.str'} } } } } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$num',87767],[],[{ $trim: {input: "aggregate Liaison",chars: { $toLower: '$obj.str' }} },"teal Refined Rubber Shirt Tala"]]] }, _id: 0}}],

        [{$project: {a: { $month: { $year: { $month: { $dayOfYear: { $week: { $dateToParts: {date: { $dayOfWeek: { $toDate: { $concatArrays: [[],["Nicaragua turquoise initiatives"]] } } },timezone: "Asia/Ujung_Pandang"} } } } } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $dateToString: {date: new Date("2018-09-06T16:02:35.006Z"),format: "%G-%V-%u-%G-%m-%z-%d-%L-%S-%S-%V"} },"Borders Handmade Granite Soap Nakfa"],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $isoWeekYear: { $dayOfWeek: { $week: '$obj.obj.obj.obj.date' } } }, _id: 0}}],

        [{$project: {a: { $year: { $minute: { $dateFromParts: {year: { $divide: [67594,32833] },month: { $size: [['$obj.obj.obj.str',{ $dateToString: {date: new Date("2018-09-06T19:10:12.403Z"),format: "%j-%j-%H-%M-%G-%Z-%m",timezone: "Asia/Muscat"} }]] },hour: { $log10: '$obj.obj.num' },minute: { $pow: ['$num',97414] },millisecond: { $trunc: { $sqrt: 14875 } }} } } }, _id: 0}}],

        [{$project: {a: { $hour: { $isoDayOfWeek: { $millesecond: { $week: { $dateToString: {date: new Date("2018-09-06T11:56:40.908Z"),onNull: { $substr: ['$obj.obj.obj.obj.str',19,0] }} } } } } }, _id: 0}}],

        [{$project: {a: { $map: {input: [{ $toString: { $arrayToObject: [[[88203],['$obj.obj.obj.str'],[{ $substr: ["Triple-buffered",13,0] },'$obj.str',"Borders Germany","Secured Principal Fantastic Rubber Tuna"],['$obj.obj.num',{ $substr: ['$obj.obj.str',3,9] },'$obj.obj.obj.obj.date']]] } }],in: { $mod: [50201,'$obj.obj.num'] }} }, _id: 0}}],

        [{$project: {a: { $substrCP: ["Plastic hub",9,0] }, _id: 0}}],

        [{$project: {a: { $dayOfMonth: { $year: { $minute: { $dayOfWeek: { $dayOfYear: { $second: { $isoDayOfWeek: { $dateToParts: {date: { $dateToParts: {date: { $month: { $toDate: { $arrayElemAt: [['$obj.obj.obj.obj.num'],{ $pow: [89974,25228] }] } } },timezone: "Pacific/Tarawa"} },iso8601: true} } } } } } } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.num'],520] }, _id: 0}}],

        [{$project: {a: { $isoWeek: { $hour: { $second: { $isoDayOfWeek: { $dateToString: {date: '$date',format: "%j-%w-%M-%H-%L-%u",timezone: "America/Argentina/La_Rioja",onNull: '$obj.obj.str'} } } } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],39545] }, _id: 0}}],

        [{$project: {a: { $toUpper: '$obj.str' }, _id: 0}}],

        [{$project: {a: { $isoWeek: { $dayOfWeek: { $week: { $second: { $year: '$date' } } } } }, _id: 0}}],

        [{$project: {a: { $rtrim: { input: '$obj.obj.obj.str' } }, _id: 0}}],

        [{$project: {a: { $hour: { $millesecond: { $dateToString: {date: '$date',onNull: { $arrayElemAt: [[],'$obj.obj.obj.num'] }} } } }, _id: 0}}],

        [{$project: {a: { $concatArrays: [[],[{ $dateToString: {date: new Date("2018-09-06T11:32:53.518Z"),format: "%S-%Y-%S-%U-%U-%H-%j-%j-%z-%w",timezone: "Africa/Abidjan"} },'$obj.str'],[],['$obj.obj.obj.obj.str'],['$obj.obj.obj.num']] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],56777] }, _id: 0}}],

        [{$project: {a: { $filter: {input: ['$obj.obj.obj.obj.num',{ $substr: ['$obj.str',11,4] },false],as: 'rhoda',cond: { $gt: [{ $arrayElemAt: [[],16064] },{ $arrayToObject: [[{k: "blue vortals Product",v: '$obj.obj.date'}]] }] }} }, _id: 0}}],

        [{$project: {a: { $rtrim: { input: { $toLower: "Berkshire" } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "card optimize",v: new Date("2018-09-06T11:28:57.762Z")},{k: "primary",v: "Berkshire"}]] }, _id: 0}}],

        [{$project: {a: { $dateFromParts: {isoWeekYear: { $floor: '$num' },isoDayOfWeek: { $abs: { $mod: [64434,80529] } },second: 85362,timezone: "Pacific/Samoa"} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$obj.obj.obj.str','$str'],["SQL Colombia"],[],[],[],[{ $toString: { $toLower: '$obj.str' } },new Date("2018-09-05T20:34:00.162Z")]]] }, _id: 0}}],

        [{$project: {a: { $toDate: { $filter: {input: ['$obj.obj.obj.obj.num',50138],cond: { $in: [{ $arrayElemAt: [['$$this'],{ $pow: ['$num',{ $trunc: 88804 }] }] },{ $map: {input: [{ $dateToString: {date: new Date("2018-09-06T08:01:52.234Z"),onNull: { $substrBytes: ['$$this',4,5] }} },"synergistic program"],as: 'aiyana',in: { $log10: 52298 }} }] }} } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["Union Lead Games"],34403] }, _id: 0}}],

        [{$project: {a: { $month: { $dayOfMonth: { $year: { $isoWeek: { $month: { $toDate: { $substrCP: ["Grocery National internet solution",14,3] } } } } } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Plain back-end Cheese",v: "synthesize Operations strategic"},{k: "Direct backing up",v: '$num'}]] }, _id: 0}}],

        [{$project: {a: { $trim: { input: { $toString: { $substr: ['$obj.obj.str',0,1] } } } }, _id: 0}}],

        [{$project: {a: { $reverseArray: [[]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $ltrim: {input: '$obj.obj.obj.str',chars: { $dateToString: {date: new Date("2018-09-06T07:01:32.740Z"),format: "%U-%u-%%-%w-%%-%Y",timezone: "America/Kralendijk"} }} }],20236] }, _id: 0}}],

        [{$project: {a: { $concat: [{ $rtrim: {input: "Oklahoma solid state",chars: { $dateToString: {date: { $dateFromParts: {year: { $indexOfArray: [{ $range: [8,20,20] },{ $arrayElemAt: [[53473,'$obj.obj.obj.num'],26094] },15] },month: '$num',minute: { $subtract: ['$obj.obj.obj.num',{ $exp: '$obj.num' }] },second: { $floor: 46298 }} },timezone: "Europe/Rome"} }} }] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $ltrim: {input: "Officer maroon",chars: "revolutionary payment"} }],'$obj.obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $rtrim: { input: "deliverables bifurcated productize" } }, _id: 0}}],

        [{$project: {a: { $trim: {input: "invoice Tools Belarussian Ruble",chars: "Towels Regional parsing"} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["embrace"],'$obj.obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[{ $substr: ['$str',6,6] }],[47911,21262],['$obj.obj.str',{ $rtrim: { input: { $concat: ["Louisiana Marketing open-source",'$obj.str','$obj.obj.obj.str'] } } }],[]]] }, _id: 0}}],

        [{$project: {a: { $millesecond: { $dayOfWeek: { $minute: { $week: { $month: { $dateToParts: {date: { $dayOfYear: { $millesecond: { $isoDayOfWeek: { $year: { $isoDayOfWeek: { $isoWeekYear: { $year: { $second: { $toDate: { $second: { $week: { $dateFromString: {dateString: "2018-09-06T18:11:00.364Z",timezone: "Asia/Tokyo",onError: { $arrayToObject: [[{k: "hub",v: new Date("2018-09-05T23:03:05.124Z")},{k: "copy extranet hack",v: false}]] }} } } } } } } } } } } } },iso8601: false} } } } } } }, _id: 0}}],

        [{$project: {a: { $dayOfMonth: { $isoDayOfWeek: { $dateToParts: {date: { $month: { $dateFromString: {dateString: "2018-09-06T18:41:31.510Z",format: "%w-%%-%L-%G-%S-%w-%Z"} } },timezone: "Etc/GMT+4"} } } }, _id: 0}}],

        [{$project: {a: { $substrCP: ['$obj.obj.obj.obj.str',8,4] }, _id: 0}}],

        [{$project: {a: { $concatArrays: [[{ $toUpper: "lime transparent navigating" }],['$obj.obj.obj.str'],[{ $trunc: '$obj.num' },33558],[],['$obj.obj.obj.obj.num']] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[{ $toString: { $isoDayOfWeek: { $isoWeekYear: { $dateToString: {date: { $week: { $dateToParts: {date: { $toDate: { $objectToArray: '$obj.obj.obj.obj.obj' } },iso8601: false} } },format: "%u-%U-%Y-%H-%G-%u-%M-%Y",timezone: "Etc/GMT+0",onNull: { $week: { $millesecond: { $minute: { $month: { $second: { $dayOfYear: { $second: { $dateFromParts: {isoWeekYear: { $subtract: ['$obj.num','$obj.obj.obj.num'] },isoWeek: { $log10: '$obj.obj.obj.obj.num' },isoDayOfWeek: { $sqrt: 88882 },minute: { $ln: { $ln: 15350 } },millisecond: 58795,timezone: "America/Boa_Vista"} } } } } } } } }} } } } }],['$obj.obj.obj.num',51881,{ $ceil: 7653 }],[],["pixel Bosnia and Herzegovina"],[]]] }, _id: 0}}],

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
