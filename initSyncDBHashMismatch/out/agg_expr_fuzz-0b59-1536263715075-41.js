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
        return coll.insert({_id: 25690,str: "Central Auto Loan Account",num: 89254,date: new Date("2018-09-06T19:04:45.734Z"),array: ["bleeding-edge",new Date("2018-09-05T21:38:46.470Z"),new Date("2018-09-06T09:36:50.995Z"),"withdrawal holistic matrix",new Date("2018-09-06T06:06:21.832Z"),35627,2758,90537,{_id: 25691,str: "Functionality Soft Malagasy Ariary",num: 4098,date: new Date("2018-09-06T06:36:04.061Z"),array: [],obj: {}},{_id: 25692,str: "Metal",date: new Date("2018-09-06T18:54:05.252Z"),obj: {}},new Date("2018-09-06T07:35:28.487Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 25693,str: "program",num: 59301,date: new Date("2018-09-06T06:28:48.626Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 25694,str: "Home Loan Account",num: 33067,date: new Date("2018-09-06T18:16:05.433Z"),array: [new Date("2018-09-05T20:03:23.520Z"),new Date("2018-09-05T22:20:47.205Z"),12318,[],["primary hack"],38315,"Danish Krone redundant","RAM Avon",32384,"out-of-the-box synergistic Pizza","digital",41399],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 25695,str: "neutral Fantastic Representative",num: 85671,date: new Date("2018-09-06T07:40:16.747Z"),array: ["Books Games partnerships","Concrete",67431,new Date("2018-09-05T21:02:10.964Z"),new Date("2018-09-06T11:38:35.616Z"),{_id: 25696,num: 87429,date: new Date("2018-09-06T17:07:03.504Z"),array: [],obj: {}},325],obj: {_id: 25697,str: "Rustic Steel Cheese Central",num: 93177,date: new Date("2018-09-06T08:46:46.186Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 25698,str: "Legacy",num: 88861,date: new Date("2018-09-06T16:58:12.618Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 25699,str: "Quality International microchip",num: 96647,date: new Date("2018-09-05T21:44:23.864Z"),obj: {_id: 25700,str: "Nebraska",num: 61693,date: new Date("2018-09-06T09:01:01.442Z"),array: ["Credit Card Account","tan",4381,new Date("2018-09-06T15:16:06.059Z"),new Date("2018-09-06T14:46:26.054Z"),74981,{_id: 25701,str: "invoice navigate payment",num: 76632,date: new Date("2018-09-06T14:28:34.575Z"),array: [37976],obj: {}},[46298],new Date("2018-09-06T05:48:09.769Z"),"Hat",34343]}});
    },

    function(coll) {
        return coll.insert({_id: 25702,str: "Supervisor",num: 96268,array: [53456,82749,"Metal calculating",41525,new Date("2018-09-06T04:00:46.849Z"),{_id: 25703,str: "Fresh Credit Card Account",num: 64739,obj: {}},"Hat Polarised",new Date("2018-09-06T04:51:26.902Z"),"Qatari Rial",new Date("2018-09-06T11:09:57.302Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 25704,str: "Pants",num: 5158,date: new Date("2018-09-05T21:04:23.006Z"),array: [],obj: {_id: 25705,str: "Paraguay Generic Soft Table Triple-buffered",date: new Date("2018-09-06T18:22:26.030Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 25706,str: "virtual synthesize",num: 99168,date: new Date("2018-09-06T18:51:32.114Z"),array: [],obj: {_id: 25707,str: "redundant Shoal",num: 10057,date: new Date("2018-09-06T05:15:06.437Z"),obj: {_id: 25708,num: 97870,array: [new Date("2018-09-05T19:56:39.626Z"),8768,23506,"scalable","Baby",new Date("2018-09-06T02:12:55.672Z"),{_id: 25709,str: "green Steel Mountains",num: 59612,date: new Date("2018-09-06T06:00:57.101Z"),array: [],obj: {_id: 25710,array: [],obj: {}}},38238]}}});
    },

    function(coll) {
        return coll.insert({_id: 25711,str: "4th generation",num: 80647,date: new Date("2018-09-06T04:12:58.884Z"),array: [4082,new Date("2018-09-06T03:38:10.228Z"),{_id: 25712,str: "yellow",num: 24597,obj: {}},[],70097,90706,new Date("2018-09-06T07:47:01.687Z"),"Unbranded Plastic Mouse","Solutions",16547]});
    },

    function(coll) {
        return coll.insert({_id: 25713,str: "Security Intelligent Rubber Hat",num: 21651,date: new Date("2018-09-06T07:59:37.017Z"),array: [],obj: {_id: 25714,str: "firewall Auto Loan Account synergies",num: 56700,date: new Date("2018-09-05T23:05:54.767Z"),array: [38532,new Date("2018-09-06T04:12:07.264Z"),"Assistant Baby",new Date("2018-09-06T01:19:32.426Z"),79643,new Date("2018-09-06T16:35:05.802Z"),{_id: 25715,num: 29518,array: [new Date("2018-09-06T18:05:28.897Z")]},"Fresh Liaison Health","Clothing",new Date("2018-09-06T17:39:10.109Z")],obj: {_id: 25716,str: "Liaison",num: 27660,date: new Date("2018-09-06T18:10:27.663Z"),array: [],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 25717,str: "Incredible Cotton Mouse Tools Liaison",date: new Date("2018-09-06T04:48:36.296Z"),obj: {_id: 25718,str: "Buckinghamshire",num: 8430,date: new Date("2018-09-06T06:37:19.312Z"),array: [],obj: {_id: 25719,str: "Berkshire",num: 69767,date: new Date("2018-09-05T21:20:45.761Z")}}});
    },

    function(coll) {
        return coll.insert({_id: 25720,str: "Forward innovative",num: 95602,date: new Date("2018-09-05T20:52:15.110Z"),array: [new Date("2018-09-05T21:31:00.995Z"),"redundant metrics e-commerce",54128,"calculate",[[new Date("2018-09-06T16:54:10.141Z")],{_id: 25721,str: "Configuration Connecticut",num: 83602,date: new Date("2018-09-06T12:07:23.337Z"),array: [78356],obj: {_id: 25722,str: "Illinois Liaison",date: new Date("2018-09-06T02:17:25.760Z"),obj: {}}},[]],"orchestrate input","SSL Intelligent Plastic Cheese",3281,{_id: 25723,num: 53217,array: [],obj: {_id: 25724,str: "Gloves Executive feed",num: 22331,date: new Date("2018-09-05T21:13:08.854Z"),array: [],obj: {}}},84076,new Date("2018-09-05T22:51:44.581Z")]});
    },

    function(coll) {
        return coll.insert({_id: 25725,num: 68514,date: new Date("2018-09-06T14:21:02.473Z"),array: [30054,"Berkshire Identity niches",new Date("2018-09-06T15:59:26.497Z"),43897,50473,new Date("2018-09-06T11:27:57.725Z"),[1970],{_id: 25726,str: "Home",array: [],obj: {}},new Date("2018-09-06T09:25:10.432Z"),"Rustic National",[[],new Date("2018-09-06T12:08:07.663Z"),13406,"Cambridgeshire programming"],54966],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 25727,str: "Plastic",num: 5397,date: new Date("2018-09-06T07:58:26.174Z"),array: [],obj: {_id: 25728,str: "auxiliary port",num: 69107,date: new Date("2018-09-06T02:21:49.386Z"),array: [new Date("2018-09-05T23:34:22.290Z"),"indigo","compressing cyan Markets",51565,90682,"Corporate Customer",new Date("2018-09-05T21:25:18.085Z"),"synthesize functionalities",new Date("2018-09-06T04:50:52.186Z")],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 25729,str: "Infrastructure",num: 72314,date: new Date("2018-09-06T05:21:23.119Z"),array: ["Square Buckinghamshire","target optical",5042,new Date("2018-09-06T06:41:35.163Z"),{_id: 25730,str: "invoice digital West Virginia",date: new Date("2018-09-06T13:13:06.361Z"),array: [],obj: {_id: 25731,str: "haptic",num: 63248,date: new Date("2018-09-06T18:58:21.351Z"),array: [new Date("2018-09-06T10:13:35.856Z"),41410,"Customizable",new Date("2018-09-05T22:49:46.637Z"),"PCI",new Date("2018-09-06T13:56:45.697Z"),new Date("2018-09-06T05:05:15.925Z"),61917],obj: {}}},[],[],{_id: 25732,str: "Baby Computers 5th generation",array: ["Sports"]},{_id: 25733,str: "Utah encompassing Multi-tiered",num: 99763,array: [],obj: {}}]});
    },

    function(coll) {
        return coll.insert({_id: 25734,str: "neural parsing",num: 41663,date: new Date("2018-09-05T20:19:36.917Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 25735,str: "Phased",num: 37027,date: new Date("2018-09-05T21:28:51.927Z"),array: [new Date("2018-09-06T05:54:52.069Z"),{_id: 25736,str: "SCSI Analyst Stravenue",num: 51114,date: new Date("2018-09-06T13:16:22.150Z"),obj: {}},67580,66958,"global Taka Garden",["Ecuador Borders yellow",new Date("2018-09-06T17:39:10.695Z"),new Date("2018-09-05T22:44:29.997Z"),[765,{_id: 25737,num: 17638,date: new Date("2018-09-06T19:00:42.740Z"),array: [],obj: {_id: 25738,str: "deposit Agent payment",array: [9312],obj: {_id: 25739,str: "system purple",num: 21970,array: [],obj: {}}}}]],new Date("2018-09-06T11:42:37.314Z"),86812,"Dynamic","Nebraska Benin niches"]});
    },

    function(coll) {
        return coll.insert({_id: 25740,str: "Chilean Peso Unidades de fomento impactful black",num: 69638,date: new Date("2018-09-06T08:34:30.189Z"),array: [],obj: {_id: 25741,str: "Baby Branding Quality",num: 11676,date: new Date("2018-09-06T03:30:05.158Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 25742,num: 47811,date: new Date("2018-09-06T15:16:42.293Z"),array: [{_id: 25743,str: "Madagascar Barbados Dollar",num: 45930,date: new Date("2018-09-06T10:04:48.140Z"),array: []},18307,"Florida internet solution",new Date("2018-09-06T00:19:52.884Z"),59544,95916,55337,[],new Date("2018-09-06T03:57:55.644Z"),new Date("2018-09-06T16:49:39.407Z"),14902],obj: {_id: 25744,num: 34712,date: new Date("2018-09-06T09:21:50.474Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 25745,num: 67130,date: new Date("2018-09-06T02:14:31.817Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 25746,str: "program Mozambique Washington",num: 71280,date: new Date("2018-09-06T01:24:38.112Z"),array: [91303,"Towels cyan Moroccan Dirham",new Date("2018-09-06T13:51:05.660Z"),"feed Fantastic embrace",new Date("2018-09-06T03:49:06.763Z"),[{_id: 25747,str: "Global extend architect",num: 34955,array: [],obj: {_id: 25748,num: 75675,date: new Date("2018-09-05T22:23:25.992Z"),obj: {_id: 25749,str: "Sleek Fresh Mouse",date: new Date("2018-09-06T04:21:10.907Z"),array: [],obj: {}}}},"systems HTTP firewall"],69340,"Berkshire",{_id: 25750,str: "action-items",num: 19628,date: new Date("2018-09-06T15:25:34.750Z"),array: [],obj: {}},23095,{_id: 25751,str: "Intelligent Granite Shoes",date: new Date("2018-09-06T04:54:46.908Z"),array: [83415]},"Engineer"]});
    },

    function(coll) {
        return coll.insert({_id: 25752,str: "Fresh",num: 490,date: new Date("2018-09-06T15:56:57.912Z"),array: [42416,new Date("2018-09-06T16:35:36.138Z"),54654,"Interactions",new Date("2018-09-06T10:26:22.554Z"),"magenta",2383,83959,new Date("2018-09-06T01:11:58.214Z"),{_id: 25753,num: 21229,date: new Date("2018-09-06T14:50:10.674Z"),array: [],obj: {_id: 25754,str: "Ergonomic client-server",num: 14800,array: [],obj: {_id: 25755,num: 58203,date: new Date("2018-09-06T07:34:25.008Z"),array: [3257,{_id: 25756,str: "Buckinghamshire",array: [],obj: {}},new Date("2018-09-06T09:02:51.081Z"),"calculate indexing"],obj: {}}}},32573],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 25757,str: "maroon",date: new Date("2018-09-06T05:54:58.847Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 25758,str: "Cross-group Fresh",num: 40443,date: new Date("2018-09-06T11:20:35.661Z"),array: [85653,36769,new Date("2018-09-06T14:58:43.702Z"),"Re-engineered New Mexico",new Date("2018-09-05T22:00:25.775Z"),"US Dollar Checking Account Chair",27281,[],[]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 25759,str: "incremental",num: 77123,date: new Date("2018-09-06T10:15:59.900Z"),array: [],obj: {_id: 25760,str: "revolutionize interfaces Belize Dollar",num: 45217,date: new Date("2018-09-05T23:16:51.378Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 25761,str: "Norfolk Island",num: 57834,date: new Date("2018-09-06T07:37:43.032Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 25762,str: "Alabama olive Intelligent Rubber Car",num: 19370,date: new Date("2018-09-05T20:24:11.360Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 25763,str: "Generic Ergonomic",num: 33416,date: new Date("2018-09-06T04:21:02.658Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 25764,str: "open-source",num: 49829,date: new Date("2018-09-06T13:34:23.851Z"),array: ["application Cambridgeshire parsing","Garden Tala 1080p",{_id: 25765,str: "Concrete actuating",num: 80937,array: [new Date("2018-09-06T08:56:17.061Z")],obj: {}},10635,43896,new Date("2018-09-06T13:46:02.823Z"),new Date("2018-09-06T13:18:28.439Z"),{_id: 25766,str: "Rwanda Franc Global Sleek",num: 45572,date: new Date("2018-09-06T15:12:31.499Z"),array: [],obj: {}},30000,34829,45170]});
    },

    function(coll) {
        return coll.insert({_id: 25767,str: "Maryland CFA Franc BEAC Checking Account",num: 67615,date: new Date("2018-09-05T22:29:32.577Z"),array: [],obj: {_id: 25768,str: "Home Loan Account",num: 17600,array: []}});
    },

    function(coll) {
        return coll.insert({_id: 25769,num: 95173,date: new Date("2018-09-06T07:09:51.412Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 25770,str: "didactic Marketing Branding",num: 85695,date: new Date("2018-09-06T00:13:17.895Z"),array: [new Date("2018-09-06T07:13:31.282Z"),29559,new Date("2018-09-06T07:42:41.741Z"),"Malagasy Ariary","Plains Shirt",new Date("2018-09-06T04:50:19.335Z"),"Senior",new Date("2018-09-05T22:11:23.829Z"),"Checking Account protocol",68552,{_id: 25771,str: "calculate orchid payment",num: 44948,date: new Date("2018-09-05T22:44:51.097Z"),array: [],obj: {}}],obj: {_id: 25772,str: "Advanced Advanced",num: 69757,date: new Date("2018-09-06T03:00:19.539Z"),array: [34440,{_id: 25773,num: 77412,obj: {_id: 25774,num: 54392,obj: {}}},new Date("2018-09-06T13:56:00.318Z"),{_id: 25775,str: "Wooden Chad Avon",num: 52220,date: new Date("2018-09-06T18:12:32.612Z"),array: [{_id: 25776,str: "Borders",date: new Date("2018-09-06T03:54:46.504Z"),array: [],obj: {}},[]]}],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 25777,num: 50298,obj: {_id: 25778,str: "Shoes",array: [8270,"Row Investment Account AI",73369,[],new Date("2018-09-06T12:21:16.191Z"),"Harbors mint green Park","Interactions Buckinghamshire",71527,new Date("2018-09-06T08:51:21.958Z")],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 25779,str: "vortals benchmark",num: 21275,date: new Date("2018-09-06T15:52:29.266Z"),array: [new Date("2018-09-06T01:58:35.551Z"),"index alarm Metal",{_id: 25780,num: 64296,date: new Date("2018-09-05T23:39:43.838Z"),array: [69350,new Date("2018-09-05T22:30:50.456Z")],obj: {}},new Date("2018-09-06T09:12:37.273Z"),"Mouse Synchronised",21615,22223,new Date("2018-09-06T16:17:07.131Z"),[],"Norway Designer","Idaho Fantastic Stravenue",[]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 25781,str: "Money Market Account",array: [],obj: {_id: 25782,str: "Tools bluetooth Square",num: 94566,date: new Date("2018-09-05T22:18:33.886Z"),array: ["De-engineered Ferry","1080p",56747,new Date("2018-09-06T14:58:59.102Z"),84922,new Date("2018-09-06T02:58:01.711Z"),16624,[],91891,"neural-net schemas Avon",new Date("2018-09-06T08:54:02.283Z"),[{_id: 25783,str: "Home Loan Account cyan Texas",num: 70204,date: new Date("2018-09-05T20:18:57.727Z"),obj: {}}],new Date("2018-09-05T21:31:52.413Z")],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 25784,num: 71550,date: new Date("2018-09-06T14:49:00.073Z"),array: [],obj: {_id: 25785,str: "connect Designer Money Market Account",num: 74283,date: new Date("2018-09-06T05:23:07.568Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 25786,str: "open system Florida",num: 31294,date: new Date("2018-09-06T01:35:38.578Z"),array: [],obj: {_id: 25787,num: 58337,date: new Date("2018-09-05T23:33:43.347Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 25788,num: 82835,date: new Date("2018-09-06T14:41:22.075Z"),array: ["input Row",new Date("2018-09-06T11:48:47.814Z"),{_id: 25789,str: "Concrete Small Frozen Shirt",num: 52632,date: new Date("2018-09-06T14:56:27.647Z"),array: [55148]},"vortals",new Date("2018-09-06T14:33:28.096Z"),49954,75297,81223,{_id: 25790,num: 21487,date: new Date("2018-09-06T07:12:49.326Z"),array: [new Date("2018-09-06T11:38:22.747Z"),[]],obj: {}},new Date("2018-09-06T10:08:50.715Z")],obj: {_id: 25791,str: "Fresh",num: 52451,array: [[],new Date("2018-09-05T21:33:19.852Z"),[],"Shores","GB Green 24/7",34407]}});
    },

    function(coll) {
        return coll.insert({_id: 25792,str: "Port New Mexico",num: 74430,date: new Date("2018-09-06T15:41:34.508Z"),array: [3197,[],"1080p Rest",84153,83811,new Date("2018-09-05T20:00:31.043Z"),[new Date("2018-09-05T20:27:54.182Z"),"Analyst Down-sized Fords","Technician Land"],{_id: 25793,num: 61406,date: new Date("2018-09-06T08:40:41.759Z"),obj: {}},[],new Date("2018-09-06T18:30:11.515Z")],obj: {_id: 25794,str: "withdrawal",num: 34713,date: new Date("2018-09-06T00:26:56.255Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 25795,str: "lime Quality Granite",num: 56224,date: new Date("2018-09-06T16:01:46.514Z"),array: ["Berkshire hardware",{_id: 25796,str: "Triple-buffered capacitor",num: 30771,date: new Date("2018-09-06T06:35:28.741Z"),array: [],obj: {_id: 25797,str: "Cambridgeshire Plastic",num: 46339,date: new Date("2018-09-06T19:48:13.607Z"),array: []}},new Date("2018-09-06T02:42:43.682Z"),new Date("2018-09-06T19:19:18.473Z"),"bus National Dynamic",10238,new Date("2018-09-06T13:18:25.042Z"),59878,"Rustic Concrete Tuna monitor Assistant",44440,"Frozen Platinum Licensed Metal Towels"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 25798,str: "virtual lime invoice",num: 46617,date: new Date("2018-09-06T01:10:42.454Z"),array: [],obj: {_id: 25799,str: "monetize",num: 93091,date: new Date("2018-09-06T16:33:30.147Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 25800,str: "Markets Singapore",num: 7641,date: new Date("2018-09-06T09:43:31.740Z"),array: ["Table connecting","Sports Hat",new Date("2018-09-06T07:25:50.885Z"),63676,[{_id: 25801,num: 34570,array: [28718],obj: {_id: 25802,str: "Investment Account",num: 52645,date: new Date("2018-09-06T00:54:34.019Z"),array: []}},new Date("2018-09-06T16:42:02.390Z"),new Date("2018-09-06T17:35:44.050Z"),{_id: 25803,str: "transition alarm",num: 80223,date: new Date("2018-09-06T15:06:21.613Z"),array: [],obj: {}},"reintermediate Central","leverage Bridge revolutionary",90355],"Concrete bleeding-edge",26914,[new Date("2018-09-05T20:01:38.260Z"),62118,new Date("2018-09-06T09:15:35.119Z")],[]],obj: {_id: 25804,str: "Oregon Surinam Dollar Home Loan Account",num: 58951,obj: {_id: 25805,array: [],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 25806,str: "interface",num: 13948,date: new Date("2018-09-06T13:43:11.959Z"),array: [],obj: {_id: 25807,str: "Program",date: new Date("2018-09-06T18:42:35.981Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 25808,str: "Pizza solid state Sausages",date: new Date("2018-09-06T13:13:34.339Z"),array: [37243,"virtual synergistic salmon",{_id: 25809,str: "USB",num: 3922,date: new Date("2018-09-06T07:28:28.905Z"),array: [[],new Date("2018-09-05T23:17:33.253Z"),"Bulgarian Lev",new Date("2018-09-06T18:08:42.617Z"),50985,"Checking Account Global"],obj: {}},"Afghanistan Money Market Account XSS",{_id: 25810,str: "Research Analyst",num: 52312,array: [14697,new Date("2018-09-06T11:26:41.313Z"),new Date("2018-09-06T19:51:38.759Z")]},14554,[],{_id: 25811,str: "Virginia Yuan Renminbi Generic",num: 60237,date: new Date("2018-09-06T17:59:57.840Z"),array: [new Date("2018-09-06T18:50:37.267Z")],obj: {_id: 25812,num: 48164,date: new Date("2018-09-05T20:39:29.568Z"),array: []}}],obj: {_id: 25813,str: "next generation neural Keyboard",num: 60533,date: new Date("2018-09-06T07:33:04.819Z"),obj: {_id: 25814,str: "Secured",num: 52090,array: [],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 25815,str: "SAS Electronics",num: 13307,date: new Date("2018-09-06T15:21:04.660Z"),array: [[],"invoice"],obj: {_id: 25816,num: 64824,date: new Date("2018-09-06T07:26:25.229Z"),array: ["Functionality Credit Card Account",new Date("2018-09-06T10:25:17.261Z"),95946,new Date("2018-09-06T01:18:10.663Z"),[],new Date("2018-09-06T17:34:13.785Z"),{_id: 25817,str: "bandwidth withdrawal",num: 64495,date: new Date("2018-09-06T03:15:32.078Z"),obj: {_id: 25818,str: "global payment Kip",num: 35684,date: new Date("2018-09-06T18:55:33.148Z"),array: ["New Caledonia Executive",36680,"Personal Loan Account",{_id: 25819,str: "Savings Account",num: 9053,array: [54494,new Date("2018-09-05T20:54:12.168Z")],obj: {}},58591,15432],obj: {}}},"whiteboard foreground",new Date("2018-09-06T16:20:28.468Z")],obj: {_id: 25820,num: 38501,date: new Date("2018-09-06T17:08:49.001Z"),array: [new Date("2018-09-06T12:53:03.046Z")],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 25821,str: "Avenue",date: new Date("2018-09-06T15:44:07.816Z"),array: [],obj: {_id: 25822,num: 79890,date: new Date("2018-09-06T12:08:22.631Z"),array: [11830,new Date("2018-09-06T15:15:11.562Z"),"Crossroad array",[],new Date("2018-09-06T03:09:15.490Z"),"Cotton",new Date("2018-09-06T13:43:20.714Z"),new Date("2018-09-06T17:44:24.349Z"),2772,"Specialist brand Ohio",[],{_id: 25823,num: 16599,date: new Date("2018-09-06T03:55:18.883Z"),array: ["program",39958],obj: {_id: 25824,str: "optimize Home",num: 19681,obj: {}}},{_id: 25825,str: "Tanzanian Shilling",num: 66774,date: new Date("2018-09-06T15:00:43.564Z"),array: []}]}});
    },

    function(coll) {
        return coll.insert({_id: 25826,str: "Administrator olive Future",num: 92489,date: new Date("2018-09-05T22:36:01.555Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 25827,str: "web services e-services",num: 21618,date: new Date("2018-09-06T02:30:09.500Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 25828,str: "Avon brand transmitter",num: 63401,date: new Date("2018-09-05T22:24:42.375Z"),array: [29464,[],"matrix Electronics Extended",{_id: 25829,str: "hack Bedfordshire",date: new Date("2018-09-06T09:14:39.846Z"),array: [],obj: {_id: 25830,str: "Home",num: 74597,date: new Date("2018-09-05T21:04:19.594Z"),array: [new Date("2018-09-06T06:19:18.279Z"),23878,new Date("2018-09-06T16:28:27.298Z")],obj: {}}},"cohesive Salad",new Date("2018-09-06T16:12:48.857Z"),"redundant",58621,"Computer"]});
    },

    function(coll) {
        return coll.insert({_id: 25831,str: "Fantastic",num: 77613,date: new Date("2018-09-05T23:58:44.456Z"),array: ["deposit",13663,new Date("2018-09-06T02:04:55.796Z"),76239,"Steel withdrawal",90878,new Date("2018-09-06T09:16:35.736Z"),87851,{_id: 25832,str: "Developer e-services",date: new Date("2018-09-06T09:51:46.380Z"),array: [],obj: {}},"protocol Strategist Steel",{_id: 25833,str: "invoice indexing",num: 14906,date: new Date("2018-09-06T16:52:08.249Z"),obj: {}},new Date("2018-09-06T17:27:54.002Z")]});
    },

    function(coll) {
        return coll.insert({_id: 25834,str: "portal brand",num: 60955,date: new Date("2018-09-06T12:15:28.921Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 25835,str: "supply-chains magenta Administrator",num: 87157,array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 25836,str: "Tools channels",num: 95524,date: new Date("2018-09-06T07:27:59.851Z"),array: [91884,[30927,new Date("2018-09-06T14:24:22.850Z")],"Automated local area network Architect",{_id: 25837,str: "generate",num: 63396,date: new Date("2018-09-06T09:41:12.029Z"),array: [65869,new Date("2018-09-06T14:53:15.429Z"),new Date("2018-09-06T10:33:45.147Z")],obj: {}},"payment",37216,"Union Garden",74903,{_id: 25838,num: 25474,array: [],obj: {}},{_id: 25839,date: new Date("2018-09-06T12:24:33.221Z"),array: [],obj: {_id: 25840,str: "uniform Refined",num: 14751,date: new Date("2018-09-06T14:19:34.369Z"),array: [55312],obj: {_id: 25841,str: "Savings Account",date: new Date("2018-09-06T12:30:18.852Z"),array: [new Date("2018-09-06T03:21:10.962Z"),new Date("2018-09-06T04:46:56.509Z"),"moderator Chair"],obj: {_id: 25842,str: "Direct Senior COM",date: new Date("2018-09-06T08:14:21.179Z")}}}},"IB",new Date("2018-09-06T00:55:13.821Z")]});
    },

    function(coll) {
        return coll.insert({_id: 25843,str: "Grocery facilitate Awesome",num: 32357,date: new Date("2018-09-06T05:57:30.863Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 25844,str: "calculate Paradigm Outdoors",num: 20281,date: new Date("2018-09-06T13:59:30.087Z"),array: [5022,{_id: 25845,str: "Visionary",num: 88533,date: new Date("2018-09-06T12:27:59.373Z"),array: [],obj: {}},"Mexican Peso Mexican Unidad de Inversion (UDI) synergistic","exuding connecting Road",52790,30030,new Date("2018-09-06T06:56:16.193Z"),new Date("2018-09-06T10:21:53.425Z"),new Date("2018-09-06T14:11:17.728Z"),["frictionless auxiliary partnerships",new Date("2018-09-06T07:16:44.480Z"),29648,new Date("2018-09-06T06:10:16.456Z")],new Date("2018-09-06T06:08:52.623Z")]});
    },

    function(coll) {
        return coll.insert({_id: 25846,num: 11566,date: new Date("2018-09-06T03:39:05.467Z"),array: [],obj: {_id: 25847,str: "extensible Iceland Krona",date: new Date("2018-09-06T07:51:48.018Z"),obj: {_id: 25848,str: "fresh-thinking",num: 46613,date: new Date("2018-09-06T13:50:40.137Z"),array: [new Date("2018-09-06T04:34:58.805Z"),new Date("2018-09-06T13:54:52.955Z"),["Incredible Plastic Hat Consultant",89651,"open-source Idaho Steel",new Date("2018-09-06T15:14:12.529Z"),91906,"interface reboot Shoes",[],85898],{_id: 25849,str: "SMS transmit metrics",date: new Date("2018-09-05T23:49:23.237Z"),array: [new Date("2018-09-05T22:31:44.983Z")],obj: {}},83593,{_id: 25850,str: "Baby",num: 27905,date: new Date("2018-09-05T20:34:36.896Z"),array: [[],new Date("2018-09-05T23:34:55.057Z")],obj: {}},"Fort Niger Borders",[65892]],obj: {_id: 25851,num: 13969,obj: {_id: 25852,num: 63132,array: []}}}}});
    },

    function(coll) {
        return coll.insert({_id: 25853,str: "Frozen Proactive",num: 14376,date: new Date("2018-09-06T16:14:27.047Z"),obj: {_id: 25854,num: 68752,array: [{_id: 25855,str: "blue Locks",date: new Date("2018-09-06T12:48:31.728Z"),array: ["THX"]},new Date("2018-09-06T19:20:31.950Z"),67731,"overriding Chief",new Date("2018-09-06T13:36:13.605Z"),[],[{_id: 25856,str: "Metal frictionless",num: 1817,date: new Date("2018-09-06T15:31:33.612Z"),array: [],obj: {}},2021,new Date("2018-09-05T22:32:18.023Z")],20610,{_id: 25857,str: "hack",date: new Date("2018-09-06T12:32:39.165Z"),obj: {}},12323,[],"International wireless","Kina Bike seamless"]}});
    },

    function(coll) {
        return coll.insert({_id: 25858,str: "ROI instruction set intermediate",num: 84540,date: new Date("2018-09-06T13:04:49.345Z"),obj: {_id: 25859,str: "TCP",num: 43306,date: new Date("2018-09-06T17:55:19.377Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 25860,str: "streamline application",num: 75635,date: new Date("2018-09-06T19:28:02.008Z"),array: [],obj: {_id: 25861,str: "online",num: 81444,date: new Date("2018-09-06T06:08:23.430Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 25862,str: "Legacy Tasty Oregon",num: 7851,array: [{_id: 25863,str: "Personal Loan Account",date: new Date("2018-09-06T02:45:49.960Z"),array: [],obj: {}},3336,"Steel blue Orchard",[32855],7675,new Date("2018-09-05T20:04:37.316Z"),new Date("2018-09-06T01:05:40.258Z"),new Date("2018-09-06T08:55:02.062Z"),"Chips virtual","Falkland Islands Pound withdrawal",28830,{_id: 25864,num: 42358,array: [],obj: {_id: 25865,num: 84137,date: new Date("2018-09-06T06:50:21.753Z"),array: [new Date("2018-09-06T14:56:12.637Z")],obj: {}}},"Bedfordshire Borders uniform"],obj: {_id: 25866,str: "National",num: 84136,date: new Date("2018-09-06T15:09:53.743Z")}});
    },

    function(coll) {
        return coll.insert({_id: 25867,num: 71664,date: new Date("2018-09-06T00:41:55.601Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 25868,str: "deposit cutting-edge",num: 99195,date: new Date("2018-09-05T21:39:38.314Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 25869,str: "Personal Loan Account SSL",num: 92477,date: new Date("2018-09-05T20:22:11.088Z"),array: [57122,37307,"compress Representative New Hampshire",new Date("2018-09-05T22:57:47.392Z"),new Date("2018-09-06T12:07:49.329Z"),new Date("2018-09-05T20:44:17.381Z"),{_id: 25870,str: "innovate",num: 97791,date: new Date("2018-09-06T05:07:02.936Z"),obj: {_id: 25871,str: "National Decentralized",num: 2508,array: []}},37673,"Brazilian Real","Tools Pre-emptive Dynamic"],obj: {_id: 25872,num: 61875,date: new Date("2018-09-06T12:52:23.021Z"),array: [27425,{_id: 25873,str: "applications",num: 56281,date: new Date("2018-09-05T23:58:33.091Z")},{_id: 25874,date: new Date("2018-09-06T17:11:37.302Z"),array: [],obj: {}},"Metal Gloves",[]],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 25875,str: "TCP Brand",num: 40492,date: new Date("2018-09-06T03:03:30.581Z"),array: ["violet",new Date("2018-09-05T21:03:59.940Z"),26171,21077,7925,"RSS synergy",[],{_id: 25876,str: "parse Handmade platforms",date: new Date("2018-09-06T12:47:02.234Z"),array: [28482,"Games Money Market Account Gorgeous",[33424,68744,"ADP"],new Date("2018-09-06T14:30:55.952Z")],obj: {}},new Date("2018-09-06T15:46:20.007Z"),"Soft generating",new Date("2018-09-06T05:17:29.919Z")],obj: {_id: 25877,str: "Data mindshare Iowa",num: 23446,date: new Date("2018-09-05T23:08:02.151Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 25878,str: "invoice",num: 11877,date: new Date("2018-09-06T07:18:25.001Z"),array: [new Date("2018-09-06T12:49:11.117Z"),36797,"sticky Cambridgeshire",27573,"red",{_id: 25879,str: "Avon portal optimize",num: 88846,date: new Date("2018-09-06T01:47:48.911Z"),array: [],obj: {_id: 25880,num: 77813,date: new Date("2018-09-06T19:23:31.687Z"),array: [new Date("2018-09-06T08:35:38.149Z"),new Date("2018-09-06T08:20:31.518Z"),[]],obj: {}}},85911,"Gourde US Dollar Money Market Account",new Date("2018-09-06T17:59:50.816Z"),"matrix Venezuela","incentivize",59507],obj: {_id: 25881,str: "Communications architect",num: 62536,date: new Date("2018-09-06T16:14:39.118Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 25882,str: "24 hour",num: 61417,date: new Date("2018-09-05T21:39:05.183Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 25883,str: "International Savings Account Practical Steel Chicken",num: 30605,date: new Date("2018-09-06T05:57:06.767Z"),array: ["e-business Saudi Arabia",new Date("2018-09-05T21:14:03.736Z"),"Generic Fresh Shirt Drive contingency",new Date("2018-09-05T20:09:03.401Z"),63497,30924,[],{_id: 25884,str: "facilitate Rubber deploy",num: 5956,date: new Date("2018-09-06T05:53:02.599Z"),array: [{_id: 25885,str: "Electronics California",num: 57094,date: new Date("2018-09-06T17:40:24.489Z"),array: [],obj: {_id: 25886,date: new Date("2018-09-06T17:12:43.903Z"),array: [],obj: {}}},"Rustic","toolset Sleek Granite Bacon"],obj: {}},[],new Date("2018-09-05T21:03:10.746Z"),89514,new Date("2018-09-06T06:33:51.088Z"),91209],obj: {_id: 25887,str: "streamline turquoise",num: 59797,date: new Date("2018-09-06T09:57:06.208Z"),array: [new Date("2018-09-06T19:28:45.096Z")]}});
    },

    function(coll) {
        return coll.insert({_id: 25888,str: "Lights Savings Account SDD",num: 72379,array: [new Date("2018-09-06T18:42:57.792Z"),"Turkish Lira panel Business-focused",81000,93894,[],new Date("2018-09-06T18:02:58.773Z"),new Date("2018-09-06T15:09:00.750Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 25889,str: "virtual",num: 46855,date: new Date("2018-09-06T00:20:52.324Z"),array: [],obj: {_id: 25890,str: "PCI FTP Avon",num: 50935,date: new Date("2018-09-06T06:22:16.191Z"),array: [{_id: 25891,num: 77818,array: [new Date("2018-09-06T05:37:49.907Z")],obj: {}},27726,[],"card Sleek Norwegian Krone",new Date("2018-09-06T18:07:22.122Z"),98273,825,[97051,new Date("2018-09-06T08:43:50.341Z")],"Gloves","deposit national Licensed","Avon adapter methodologies",new Date("2018-09-06T08:28:44.287Z"),{_id: 25892,str: "complexity",date: new Date("2018-09-06T04:30:23.662Z"),array: [[1589,new Date("2018-09-06T11:26:04.194Z")],{_id: 25893,str: "Kids Handmade",num: 90745,date: new Date("2018-09-06T14:36:37.773Z"),array: [new Date("2018-09-06T00:53:16.310Z"),[]],obj: {_id: 25894,str: "silver robust",num: 47184}}],obj: {_id: 25895,str: "Savings Account",array: []}}],obj: {_id: 25896,date: new Date("2018-09-06T08:06:46.533Z")}}});
    },

    function(coll) {
        return coll.insert({_id: 25897,str: "Synergized",num: 72344,date: new Date("2018-09-06T12:05:41.159Z"),array: ["Orchard",69900,[52363,new Date("2018-09-06T05:57:27.791Z"),"solution Checking Account Sleek"],"Steel upward-trending Borders",[],"web-enabled solid state Borders",98505,new Date("2018-09-06T18:33:11.381Z"),28870,{_id: 25898,str: "product Ergonomic Metal Pizza",num: 91669,date: new Date("2018-09-06T18:04:13.192Z"),array: [],obj: {}}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 25899,str: "digital",num: 26918,array: ["benchmark transmitting",new Date("2018-09-06T17:45:16.263Z"),"compressing payment payment",[],new Date("2018-09-06T08:54:08.130Z"),32768,"productivity payment firewall",["Persevering Communications target",{_id: 25900,str: "Guernsey Money Market Account Fish",num: 43250,array: [[]],obj: {_id: 25901,str: "Fantastic Frozen Tuna Rubber payment",num: 38582,date: new Date("2018-09-06T05:17:45.758Z"),array: [],obj: {}}},88469,31155,new Date("2018-09-06T13:48:40.461Z")],new Date("2018-09-06T00:24:25.472Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 25902,str: "incentivize haptic contingency",num: 68149,date: new Date("2018-09-06T09:49:24.098Z"),obj: {_id: 25903,str: "24 hour",num: 34970,date: new Date("2018-09-06T06:34:01.897Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 25904,str: "Keyboard",num: 53344,date: new Date("2018-09-06T16:13:31.334Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 25905,str: "redundant Small Frozen Salad",num: 91780,date: new Date("2018-09-06T08:46:24.842Z"),array: [],obj: {_id: 25906,str: "orchid drive",num: 40144,date: new Date("2018-09-06T10:52:37.542Z"),array: [70911,24782,"Investment Account paradigms tangible",new Date("2018-09-06T05:25:28.909Z"),"Qatari Rial Borders frictionless",{_id: 25907,num: 33783,obj: {_id: 25908,str: "Alabama deposit",num: 2027,array: [],obj: {_id: 25909,str: "Chair Garden",date: new Date("2018-09-06T06:55:20.325Z"),array: [],obj: {}}}},"Engineer circuit mobile",new Date("2018-09-06T06:15:40.297Z"),new Date("2018-09-06T18:26:55.620Z"),27557,new Date("2018-09-06T19:45:07.578Z"),{_id: 25910,num: 86634,date: new Date("2018-09-05T22:53:48.285Z")},[new Date("2018-09-06T15:57:58.295Z")],90259]}});
    },

    function(coll) {
        return coll.insert({_id: 25911,str: "convergence solid state",num: 66349,array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 25912,str: "Bulgarian Lev Tunnel",num: 63955,date: new Date("2018-09-05T22:34:52.275Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 25913,str: "wireless AI",num: 33602,date: new Date("2018-09-06T10:29:30.225Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 25914,str: "Cook Islands",num: 28608,date: new Date("2018-09-06T04:43:29.597Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 25915,str: "Consultant Innovative",num: 97411,date: new Date("2018-09-06T11:34:41.611Z"),array: ["applications ROI protocol",24268,"Salad",new Date("2018-09-06T04:07:37.183Z"),new Date("2018-09-06T18:40:28.867Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 25916,str: "middleware Small Singapore Dollar",num: 51257,date: new Date("2018-09-05T22:48:33.603Z"),array: [new Date("2018-09-06T15:00:13.526Z"),new Date("2018-09-06T08:37:48.986Z"),38211,"Chair Bedfordshire","Pizza programming architectures","AI Computers",{_id: 25917,str: "pixel digital Agent",date: new Date("2018-09-06T00:28:33.616Z"),array: [],obj: {_id: 25918,str: "Forward compressing Iowa",num: 63202,date: new Date("2018-09-06T11:13:29.582Z"),array: [],obj: {_id: 25919,num: 88911,array: ["global Port function"],obj: {}}}},87519,{_id: 25920,date: new Date("2018-09-05T21:45:57.104Z"),obj: {}},new Date("2018-09-05T21:48:54.927Z"),new Date("2018-09-06T08:22:47.732Z"),[28993,9846,new Date("2018-09-05T20:32:59.614Z"),39380]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 25921,str: "digital connect Dynamic",num: 91715,date: new Date("2018-09-06T09:47:59.968Z"),array: [89489,new Date("2018-09-05T22:02:24.207Z"),"Frozen payment facilitate",{_id: 25922,str: "bypassing back-end Representative",num: 78780,date: new Date("2018-09-06T07:13:59.764Z"),array: [],obj: {}},11250,25983],obj: {_id: 25923,date: new Date("2018-09-06T15:35:33.182Z"),array: [37037,new Date("2018-09-06T12:43:48.284Z"),"Metrics Montana",new Date("2018-09-06T10:42:38.558Z"),"clear-thinking THX",{_id: 25924,str: "Human",num: 79000,obj: {_id: 25925,str: "Nepalese Rupee Money Market Account functionalities",date: new Date("2018-09-06T06:55:40.384Z")}}],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 25926,str: "Lead",num: 28797,date: new Date("2018-09-06T13:20:24.033Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 25927,str: "best-of-breed",num: 72864,date: new Date("2018-09-06T03:40:08.409Z"),array: [9452,new Date("2018-09-06T06:19:56.292Z"),["copy Home Loan Account",new Date("2018-09-06T19:21:59.777Z"),"enhance South Africa Central","Product protocol"],"synthesize Soap attitude-oriented",{_id: 25928,str: "Buckinghamshire",num: 64514,date: new Date("2018-09-06T19:13:59.387Z"),array: [],obj: {}},new Date("2018-09-06T06:58:49.651Z"),42267,[],82162,new Date("2018-09-06T14:41:05.512Z"),[19030,{_id: 25929,str: "generate panel Implemented",num: 94519,date: new Date("2018-09-06T17:48:42.156Z"),array: [75959],obj: {_id: 25930,str: "Wooden algorithm",date: new Date("2018-09-06T09:16:10.877Z"),array: [],obj: {_id: 25931,str: "Baby Corporate models",num: 72655,obj: {_id: 25932,array: []}}}},{_id: 25933,str: "input Usability West Virginia",date: new Date("2018-09-05T22:13:46.652Z"),obj: {}},{ _id: 25934 }]]});
    },

    function(coll) {
        return coll.insert({_id: 25935,str: "Configuration",num: 63572,date: new Date("2018-09-06T19:29:02.038Z"),array: [{_id: 25936,num: 45895,date: new Date("2018-09-06T08:36:53.640Z"),array: [],obj: {_id: 25937,str: "Avon Concrete",date: new Date("2018-09-06T07:11:54.394Z"),array: [],obj: {_id: 25938,str: "New Jersey input Unbranded Steel Sausages",num: 32671,array: [],obj: {}}}},"override drive","lavender Gorgeous Creative",2463,"Bacon multi-byte cross-media",94171,66788,new Date("2018-09-06T14:16:14.249Z"),new Date("2018-09-06T13:32:14.878Z"),new Date("2018-09-06T15:59:16.378Z"),[[{_id: 25939,date: new Date("2018-09-06T10:12:54.769Z"),obj: {}},new Date("2018-09-06T12:37:11.079Z")]],"Intelligent Concrete Gloves streamline",{_id: 25940,str: "Tasty Steel Soap Savings Account Innovative",num: 43344,date: new Date("2018-09-06T15:23:56.689Z"),array: [],obj: {_id: 25941,str: "Representative",date: new Date("2018-09-06T18:01:22.009Z"),obj: {}}},{_id: 25942,str: "program Direct radical",num: 92021}]});
    },

    function(coll) {
        return coll.insert({_id: 25943,str: "connecting radical bypass",num: 52128,date: new Date("2018-09-06T17:47:39.264Z"),array: [],obj: {_id: 25944,num: 27942,date: new Date("2018-09-06T12:37:22.691Z")}});
    },

    function(coll) {
        return coll.insert({_id: 25945,str: "Handmade Berkshire",num: 54039,date: new Date("2018-09-06T12:49:43.533Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 25946,str: "deposit deliverables Credit Card Account",num: 24261,date: new Date("2018-09-06T09:28:27.790Z"),obj: {_id: 25947,str: "Dynamic",num: 64660,array: [new Date("2018-09-06T17:11:51.071Z"),"Ergonomic Wyoming Walk",76203,"indexing flexibility",[],6703,60670,[],"Steel azure"],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 25948,str: "Extended Future Expanded",num: 98066,date: new Date("2018-09-06T13:05:49.781Z"),array: [7654,new Date("2018-09-06T19:42:56.367Z"),"neural-net collaboration pixel",[],48863,new Date("2018-09-06T01:07:16.587Z"),{_id: 25949,str: "Ranch Facilitator Square",num: 32559,date: new Date("2018-09-06T16:56:57.625Z"),array: [],obj: {_id: 25950,str: "Practical Soft Gloves bifurcated Associate",date: new Date("2018-09-05T21:27:56.144Z"),array: [new Date("2018-09-06T10:51:41.861Z"),{_id: 25951,str: "Usability synthesizing Sleek Fresh Chicken",num: 68781},18312,new Date("2018-09-06T12:42:09.255Z"),"generating PCI Directives"],obj: {_id: 25952,num: 4214,date: new Date("2018-09-05T22:01:05.223Z"),array: [],obj: {}}}},["Orchestrator backing up"],"Tuna Concrete"],obj: {_id: 25953,str: "Incredible Plastic Shoes",num: 95106,array: [86452]}});
    },

    function(coll) {
        return coll.insert({_id: 25954,str: "Outdoors",num: 56223,date: new Date("2018-09-05T20:34:53.844Z"),array: [94948,"Product",[],11612,"neural pricing structure copy",new Date("2018-09-05T20:15:41.938Z"),new Date("2018-09-05T23:29:10.728Z"),"superstructure Senior Cheese",{_id: 25955,str: "Associate Credit Card Account",num: 22819,date: new Date("2018-09-06T09:54:33.504Z"),array: [72230,"Fresh Licensed Fresh Shirt open-source",{_id: 25956,str: "Credit Card Account",num: 14268,array: [],obj: {}},new Date("2018-09-06T11:21:25.936Z"),"HDD"],obj: {}},6327,95002,new Date("2018-09-05T21:02:42.546Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 25957,str: "HDD dedicated",num: 89284,date: new Date("2018-09-06T03:12:22.139Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 25958,str: "Ergonomic Tools",num: 9767,date: new Date("2018-09-06T01:48:25.564Z"),obj: {_id: 25959,str: "Assistant structure intuitive",num: 24130,array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 25960,num: 11644,date: new Date("2018-09-06T07:44:37.765Z"),array: [[],22361,2691,new Date("2018-09-06T09:32:10.890Z"),{_id: 25961,str: "Villages grow",num: 47931,date: new Date("2018-09-06T19:12:21.803Z"),obj: {}},"radical",new Date("2018-09-06T10:42:29.146Z"),{_id: 25962,str: "Credit Card Account Ergonomic",num: 29551,array: []},new Date("2018-09-06T11:13:21.441Z"),"connecting Boliviano Mvdol holistic",new Date("2018-09-06T01:00:02.565Z"),48293,new Date("2018-09-06T14:55:51.685Z")],obj: {_id: 25963,str: "Auto Loan Account",num: 11421,date: new Date("2018-09-06T15:32:35.927Z"),array: ["Berkshire Tasty Frozen Towels",new Date("2018-09-06T15:40:09.463Z"),49286,new Date("2018-09-06T11:04:17.579Z")],obj: {_id: 25964,str: "web-readiness New Taiwan Dollar relationships",date: new Date("2018-09-06T00:42:45.919Z"),array: [["monetize Solomon Islands Dollar Pennsylvania"]]}}});
    },

    function(coll) {
        return coll.insert({_id: 25965,str: "Response Buckinghamshire Jewelery",date: new Date("2018-09-06T07:07:41.707Z"),array: [],obj: {_id: 25966,num: 64286,date: new Date("2018-09-05T21:47:49.397Z"),array: [],obj: {_id: 25967,str: "Sharable",num: 52551,date: new Date("2018-09-06T00:46:21.016Z"),obj: {_id: 25968,str: "clear-thinking Antigua and Barbuda",date: new Date("2018-09-06T01:08:03.494Z"),array: ["Salad Buckinghamshire",new Date("2018-09-05T22:50:20.822Z"),"capability",[new Date("2018-09-06T03:19:51.680Z"),{_id: 25969,str: "Granite Response",num: 56326,date: new Date("2018-09-06T02:22:00.596Z"),array: [],obj: {}},96405,51905,81449,[],new Date("2018-09-06T18:03:45.679Z"),["Key",{_id: 25970,str: "Investor drive Saint Vincent and the Grenadines",num: 62376,obj: {}}],new Date("2018-09-06T03:22:40.385Z"),"Officer cross-platform bypassing"]]}}}});
    },

    function(coll) {
        return coll.insert({_id: 25971,str: "strategize",date: new Date("2018-09-06T17:05:29.398Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 25972,str: "alarm Seychelles Rupee Small Granite Keyboard",num: 70730,date: new Date("2018-09-06T10:02:31.234Z"),array: [],obj: {_id: 25973,str: "SDD ADP",num: 49211,date: new Date("2018-09-06T03:07:26.890Z"),array: [new Date("2018-09-06T07:55:33.909Z"),"collaborative",97219,95630,{_id: 25974,str: "users Frozen",obj: {}},new Date("2018-09-06T12:39:29.928Z"),[],4585,"protocol"],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 25975,str: "synthesizing cyan deliverables",num: 75836,date: new Date("2018-09-06T11:32:56.867Z"),obj: {_id: 25976,str: "Ergonomic Incredible Home Loan Account",num: 14842,date: new Date("2018-09-06T16:25:45.912Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 25977,str: "Home Loan Account",num: 59387,date: new Date("2018-09-06T01:59:47.586Z"),array: [],obj: {_id: 25978,str: "Ergonomic",num: 31001,date: new Date("2018-09-06T03:41:29.363Z"),array: [new Date("2018-09-06T18:33:09.049Z"),{_id: 25979,str: "Wooden static Cotton",num: 8885,date: new Date("2018-09-06T06:00:47.646Z"),array: ["violet Savings Account Visionary",79234]},new Date("2018-09-06T00:06:08.004Z"),[51849,24420],[],[],98824,20570,"Frozen frame","withdrawal local compress",8501,new Date("2018-09-05T21:21:06.848Z"),{_id: 25980,date: new Date("2018-09-06T04:23:04.290Z"),obj: {}}],obj: {_id: 25981,str: "feed Future-proofed",num: 48793,array: [],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 25982,str: "Bolivar Fuerte content Tasty Granite Shirt",num: 87890,date: new Date("2018-09-06T17:36:11.114Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 25983,str: "Table",num: 3692,date: new Date("2018-09-06T15:28:57.828Z"),array: [36324,21782,38626,"infrastructures invoice Hill",new Date("2018-09-06T17:13:53.184Z"),"Forint Ranch Music",{_id: 25984,str: "Home Berkshire",num: 67880,date: new Date("2018-09-06T02:17:05.631Z"),array: [],obj: {_id: 25985,str: "Awesome withdrawal bluetooth",num: 70679,date: new Date("2018-09-06T07:52:14.995Z"),array: [[]],obj: {_id: 25986,date: new Date("2018-09-06T12:36:11.467Z"),obj: {}}}},20341,new Date("2018-09-05T23:12:18.368Z"),new Date("2018-09-06T09:38:23.697Z"),"Cambridgeshire"],obj: {_id: 25987,str: "Savings Account Central",date: new Date("2018-09-06T17:44:53.773Z"),array: [89023,new Date("2018-09-06T17:39:00.940Z")],obj: {_id: 25988,str: "hardware Games",date: new Date("2018-09-05T23:29:58.211Z"),array: []}}});
    },

    function(coll) {
        return coll.insert({_id: 25989,str: "Polarised Awesome bypassing",num: 45463,date: new Date("2018-09-06T06:33:59.373Z"),array: [new Date("2018-09-06T01:57:02.227Z"),49480,"Beauty",new Date("2018-09-06T14:28:47.936Z"),28441,{_id: 25990,str: "deposit overriding implement",num: 91340,array: [44219,"Awesome",[new Date("2018-09-06T00:29:36.837Z"),[]],"Checking Account connect synthesize"],obj: {}},new Date("2018-09-05T20:42:44.499Z"),{_id: 25991,num: 71479,date: new Date("2018-09-06T16:09:23.545Z"),array: [81058],obj: {}},76325,"Keys solution Borders",[new Date("2018-09-05T22:21:38.397Z")]],obj: {_id: 25992,str: "Corporate e-commerce Practical",num: 38219,date: new Date("2018-09-05T23:18:42.247Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 25993,str: "Research parse payment",num: 68286,date: new Date("2018-09-06T15:11:23.533Z"),array: [new Date("2018-09-06T11:52:29.052Z"),new Date("2018-09-06T00:30:00.961Z"),16138,42045,"Games","bleeding-edge",new Date("2018-09-06T13:46:26.720Z"),[],"Tools purple Concrete",{_id: 25994,num: 6758,date: new Date("2018-09-06T13:27:29.802Z"),obj: {_id: 25995,str: "Intelligent protocol",date: new Date("2018-09-05T23:19:12.973Z"),array: [95878,new Date("2018-09-06T06:45:44.107Z"),{_id: 25996,str: "clicks-and-mortar Brunei Dollar Representative",num: 3924,date: new Date("2018-09-06T02:39:07.349Z"),obj: {_id: 25997,str: "24 hour Personal Loan Account",num: 67947,date: new Date("2018-09-05T23:49:18.199Z"),array: [],obj: {}}}],obj: {_id: 25998,array: ["bluetooth"]}}}]});
    },

    function(coll) {
        return coll.insert({_id: 25999,str: "sticky virtual alarm",num: 86893,date: new Date("2018-09-06T19:37:42.870Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 26000,num: 71831,array: [52228,new Date("2018-09-06T00:10:13.496Z"),new Date("2018-09-05T23:32:37.139Z"),78525,new Date("2018-09-06T04:04:50.472Z"),26525,"Outdoors",77776,{_id: 26001,str: "copying Rubber Fantastic Metal Hat",num: 63613,date: new Date("2018-09-06T12:39:21.956Z"),obj: {}},new Date("2018-09-06T03:01:09.993Z"),"fresh-thinking pink"],obj: {_id: 26002,str: "Money Market Account Awesome Metal Shirt parse",date: new Date("2018-09-06T04:10:15.194Z"),array: [[]]}});
    },

    function(coll) {
        return coll.insert({_id: 26003,str: "Ouguiya",num: 63104,date: new Date("2018-09-06T01:26:09.507Z"),obj: {_id: 26004,str: "Norway",num: 34339,array: ["Handcrafted Cotton Soap Bedfordshire Belarussian Ruble",67900,"dot-com",69618,new Date("2018-09-06T08:58:04.306Z"),new Date("2018-09-06T10:06:40.148Z"),93060,"orange",[],{_id: 26005,str: "moratorium recontextualize",num: 364,date: new Date("2018-09-05T20:57:52.038Z"),array: ["South Carolina Honduras ivory",{_id: 26006,str: "Product Buckinghamshire",num: 47691,date: new Date("2018-09-06T18:19:31.528Z"),array: [[new Date("2018-09-06T02:42:38.370Z"),{_id: 26007,date: new Date("2018-09-06T08:01:09.019Z"),array: [],obj: {}}],"Supervisor turn-key Developer"]}],obj: { _id: 26008 }},"Harbors innovative Namibia"],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 26009,str: "azure viral Fresh",num: 30663,date: new Date("2018-09-06T03:02:22.055Z"),array: [],obj: {_id: 26010,str: "Jewelery invoice",num: 20380,date: new Date("2018-09-06T12:59:55.115Z"),array: ["initiatives Refined",78330,new Date("2018-09-06T05:06:28.299Z"),{_id: 26011,str: "Universal Shirt",num: 27441,date: new Date("2018-09-06T18:47:31.998Z"),array: [new Date("2018-09-06T01:41:50.118Z"),{_id: 26012,num: 85951,date: new Date("2018-09-06T15:36:43.064Z"),array: [{_id: 26013,str: "algorithm firewall",num: 43226,array: [],obj: {}},"Shoes",39851,[]],obj: {_id: 26014,str: "web services",obj: {}}}],obj: {}},new Date("2018-09-06T02:32:09.572Z"),"Hungary",8446,21378,new Date("2018-09-06T18:36:54.880Z"),[66948,new Date("2018-09-06T14:25:44.042Z"),new Date("2018-09-06T13:09:54.238Z")],95488,"Tasty Fantastic Wooden Shirt Practical Soft Bike"]}});
    },

    function(coll) {
        return coll.insert({_id: 26015,str: "Ergonomic",num: 63756,date: new Date("2018-09-06T07:40:48.802Z"),array: [],obj: {_id: 26016,str: "haptic Incredible",date: new Date("2018-09-06T17:20:39.473Z"),array: [new Date("2018-09-06T09:51:19.669Z"),[new Date("2018-09-06T01:33:58.534Z"),19433,"eyeballs"],"Fresh","Dynamic",{_id: 26017,str: "Senior Investment Account Rustic",num: 5610,date: new Date("2018-09-06T18:23:43.999Z"),array: [],obj: {_id: 26018,str: "Greenland Cotton",num: 73151,date: new Date("2018-09-06T13:01:24.275Z"),obj: {}}},37741,{_id: 26019,str: "world-class Representative connect",num: 27190,array: [new Date("2018-09-05T23:05:22.540Z"),"virtual"],obj: {}},8103,"Coordinator bypassing",new Date("2018-09-06T02:30:40.108Z"),[]]}});
    },

    function(coll) {
        return coll.insert({_id: 26020,str: "Progressive cross-platform deposit",num: 20355,date: new Date("2018-09-06T09:05:24.159Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 26021,str: "Kenyan Shilling encoding",num: 72104,date: new Date("2018-09-05T20:38:21.312Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 26022,str: "Handcrafted Steel Pants Sleek Concrete Mouse Mews",num: 60624,date: new Date("2018-09-06T01:37:51.272Z"),array: ["Personal Loan Account Belize Dollar Salad",new Date("2018-09-05T21:55:18.735Z"),"Ergonomic Plastic Pizza Wooden Incredible",{_id: 26023,str: "Assistant Norfolk Island Keyboard",num: 1802,array: [],obj: {}},1238,[],new Date("2018-09-06T10:49:43.351Z"),17590,30150,new Date("2018-09-06T09:53:24.257Z"),55755,new Date("2018-09-05T23:18:36.614Z"),{_id: 26024,str: "Auto Loan Account",num: 98384,date: new Date("2018-09-06T08:54:42.823Z"),array: ["Indiana Borders Grocery"],obj: {}}]});
    },

    function(coll) {
        return coll.insert({_id: 26025,str: "Course Beauty",num: 63370,date: new Date("2018-09-06T19:28:59.383Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 26026,str: "vortals Associate SSL",num: 30552,date: new Date("2018-09-06T18:48:34.242Z"),array: [96135,[new Date("2018-09-05T20:41:32.464Z"),{_id: 26027,str: "Chair",num: 79394,date: new Date("2018-09-06T11:40:23.218Z"),array: [8256],obj: {}},"Bacon",[]],new Date("2018-09-06T03:08:20.639Z"),19071,"focus group grey Music","Administrator",21550,new Date("2018-09-06T10:56:16.993Z"),{_id: 26028,num: 14186,date: new Date("2018-09-06T02:35:44.606Z"),array: [],obj: {}},new Date("2018-09-06T14:04:17.332Z"),30209,"Shoes"],obj: {_id: 26029,str: "Illinois Cordoba Oro",date: new Date("2018-09-06T16:31:52.350Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 26030,str: "Kuwait",num: 91952,date: new Date("2018-09-05T22:39:14.214Z"),array: ["Legacy Response",{_id: 26031,str: "Euro Pants",num: 43989,date: new Date("2018-09-06T02:34:25.411Z"),obj: {_id: 26032,str: "Unbranded Steel Tuna Handcrafted Fresh Pizza",num: 12387,date: new Date("2018-09-06T00:03:40.493Z"),array: [],obj: {}}},new Date("2018-09-06T14:19:48.853Z"),86571,63918,new Date("2018-09-06T05:49:02.573Z"),new Date("2018-09-06T16:08:11.181Z"),69590,"Tuna Bedfordshire",19131,[{_id: 26033,str: "incentivize Computers models",date: new Date("2018-09-06T16:50:39.523Z"),array: []}],1811,"Cambridgeshire"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 26034,str: "back up Personal Loan Account Plastic",num: 26801,date: new Date("2018-09-05T23:19:32.811Z"),array: [{_id: 26035,str: "transmit Cambridgeshire",num: 96939,date: new Date("2018-09-05T21:54:42.357Z"),array: [],obj: {_id: 26036,num: 26470,obj: {}}},new Date("2018-09-06T17:58:24.505Z"),new Date("2018-09-06T09:03:40.080Z"),"Berkshire flexibility Ball",[],47995,64190,"zero defect",new Date("2018-09-06T15:32:44.855Z"),"24/7",{_id: 26037,str: "implementation",array: [],obj: {}},new Date("2018-09-06T12:14:24.425Z"),[10662,42421,"override synthesize"],85557],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 26038,str: "Frozen yellow",num: 26111,date: new Date("2018-09-06T02:47:54.929Z"),array: [43372,new Date("2018-09-06T09:51:49.627Z"),"Security array South Africa",new Date("2018-09-06T16:58:43.208Z"),{_id: 26039,str: "Kwanza index Soft",num: 43552,date: new Date("2018-09-06T16:25:07.907Z"),array: ["COM"],obj: {_id: 26040,num: 62819,date: new Date("2018-09-06T15:16:49.083Z"),obj: {}}},new Date("2018-09-06T06:25:19.131Z"),new Date("2018-09-06T12:41:04.661Z"),19740,"synthesizing California Fresh","programming granular Chief",[],{_id: 26041,str: "transmitting",num: 28823,date: new Date("2018-09-06T11:02:03.924Z"),array: [16986,48016],obj: {_id: 26042,str: "Incredible yellow"}}]});
    },

    function(coll) {
        return coll.insert({_id: 26043,str: "Tasty",num: 39249,date: new Date("2018-09-06T19:14:24.771Z"),array: [90177,"Salad",93415,"vortals Stream",{_id: 26044,str: "attitude-oriented",num: 10836,date: new Date("2018-09-06T08:44:36.982Z"),array: [],obj: {_id: 26045,num: 46615,date: new Date("2018-09-06T01:05:42.118Z"),obj: {_id: 26046,str: "Albania Senior Manat",num: 50464,obj: {}}}},91628,"indigo Mandatory GB",new Date("2018-09-06T14:13:14.689Z"),{_id: 26047,str: "tan Personal Loan Account",date: new Date("2018-09-05T21:55:54.906Z"),array: [new Date("2018-09-06T09:35:43.962Z")],obj: {}},"Liaison New York sexy",11576]});
    },

    function(coll) {
        return coll.insert({_id: 26048,str: "Mobility solution-oriented olive",num: 88668,date: new Date("2018-09-06T12:59:22.349Z"),array: [],obj: {_id: 26049,str: "Persevering",date: new Date("2018-09-06T02:45:17.859Z"),array: ["Sleek Plastic Towels Strategist",69147,"maroon",new Date("2018-09-06T19:39:32.029Z"),32931,new Date("2018-09-06T02:49:39.323Z"),{_id: 26050,str: "Computer",num: 23736,date: new Date("2018-09-05T21:26:25.421Z"),obj: {}},{_id: 26051,num: 28997,date: new Date("2018-09-06T05:42:50.180Z"),array: [],obj: {_id: 26052,str: "Representative grow",array: [],obj: {_id: 26053,str: "Producer Steel Bedfordshire",num: 44314,date: new Date("2018-09-06T19:39:37.330Z"),obj: {}}}},"Credit Card Account Organic client-server",[new Date("2018-09-06T13:09:48.752Z")],75497,97159,[new Date("2018-09-06T10:02:32.305Z"),78475,["Frozen Avon convergence"]]]}});
    },

    function(coll) {
        return coll.insert({_id: 26054,str: "Cambridgeshire",num: 97511,date: new Date("2018-09-05T22:39:46.594Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 26055,str: "Sudan Bypass",num: 41964,array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 26056,str: "Product deposit invoice",num: 26231,date: new Date("2018-09-06T07:51:49.662Z"),array: [new Date("2018-09-06T15:12:49.731Z"),58368,[],{_id: 26057,str: "Keyboard Cambridgeshire Gorgeous",num: 53067,array: ["generating",new Date("2018-09-06T09:56:15.103Z")],obj: {}},1534,"Bedfordshire invoice",{_id: 26058,str: "proactive Credit Card Account",num: 67675,date: new Date("2018-09-06T03:22:12.243Z"),array: [],obj: {}},new Date("2018-09-06T15:20:11.626Z"),new Date("2018-09-05T23:32:43.274Z"),"Brand front-end Re-engineered",[],{_id: 26059,num: 79928,date: new Date("2018-09-06T19:16:25.300Z"),array: [],obj: {_id: 26060,date: new Date("2018-09-06T15:24:47.734Z")}},76563],obj: {_id: 26061,str: "grid-enabled",num: 63875}});
    },

    function(coll) {
        return coll.insert({_id: 26062,str: "viral",num: 51569,date: new Date("2018-09-05T20:08:08.796Z"),array: [],obj: {_id: 26063,str: "systems",num: 53892,date: new Date("2018-09-06T17:03:54.232Z"),array: [new Date("2018-09-06T19:40:57.395Z"),"Monaco","lavender silver Avon",61610,"program Kenyan Shilling Tokelau",15197,new Date("2018-09-05T20:36:46.753Z"),92548,{_id: 26064,str: "ADP New York Cambridgeshire",num: 70944,date: new Date("2018-09-06T10:17:30.859Z"),array: [],obj: {_id: 26065,str: "cross-platform Florida incubate",num: 37777,array: [new Date("2018-09-06T10:38:34.475Z")],obj: {}}},{_id: 26066,str: "Branding Sausages end-to-end",date: new Date("2018-09-05T22:11:30.596Z")},new Date("2018-09-06T16:10:10.812Z"),[88627,65342,"bluetooth payment","Hawaii Soft utilize",{_id: 26067,num: 41006,obj: {_id: 26068,num: 11954,array: [],obj: {}}},[[]]]],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 26069,str: "Quality Massachusetts",num: 51929,date: new Date("2018-09-06T03:07:57.382Z"),array: [new Date("2018-09-06T10:15:39.385Z"),"New Zealand Dollar",70398,new Date("2018-09-05T20:39:52.604Z"),44672,"upward-trending Buckinghamshire Creative","deposit technologies XSS",new Date("2018-09-06T19:41:38.107Z"),new Date("2018-09-06T14:13:44.463Z"),[],21032],obj: {_id: 26070,str: "navigate contingency",num: 72670,array: [{_id: 26071,str: "Incredible Wooden Bike Borders",num: 45193,date: new Date("2018-09-06T13:07:48.266Z"),obj: {}},new Date("2018-09-06T11:16:46.018Z"),"Handmade Bedfordshire Steel",{_id: 26072,str: "zero administration magnetic",date: new Date("2018-09-06T19:53:44.162Z"),array: [],obj: {_id: 26073,str: "Mexican Peso Mexican Unidad de Inversion (UDI) invoice",num: 4236,date: new Date("2018-09-05T23:37:28.834Z"),array: []}}],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 26074,str: "AI Savings Account",num: 79254,date: new Date("2018-09-05T21:07:00.461Z"),array: [],obj: {_id: 26075,str: "attitude International Pizza",num: 61828,date: new Date("2018-09-06T09:36:25.092Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 26076,str: "mobile Innovative Forward",num: 70382,date: new Date("2018-09-06T08:10:59.709Z"),array: ["mission-critical Small Rubber Shoes bypassing",new Date("2018-09-05T23:39:18.142Z"),"Slovenia Inlet",[],40523,46680,new Date("2018-09-06T06:18:36.949Z"),59924,new Date("2018-09-05T20:51:42.808Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 26077,str: "Web Grocery",num: 60995,array: ["Kansas algorithm program",{_id: 26078,str: "invoice Won",num: 26817,date: new Date("2018-09-06T04:18:30.939Z"),array: [52078,new Date("2018-09-06T03:43:25.131Z"),"Home"],obj: {_id: 26079,str: "Computer override",num: 16117,date: new Date("2018-09-06T11:40:59.916Z"),array: [],obj: {}}},new Date("2018-09-06T12:28:22.297Z"),40100,"clicks-and-mortar Vista",new Date("2018-09-05T20:25:42.494Z"),[],[],new Date("2018-09-06T18:58:50.602Z"),{_id: 26080,str: "Motorway Handcrafted Fresh Shoes",num: 74645,date: new Date("2018-09-06T07:15:59.949Z")}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 26081,str: "programming Wyoming solid state",num: 38851,date: new Date("2018-09-06T17:31:03.361Z"),obj: {_id: 26082,num: 63046,array: [["Wells"],55419,new Date("2018-09-06T19:05:09.540Z"),new Date("2018-09-06T11:48:31.513Z"),new Date("2018-09-05T20:22:21.802Z"),"synthesizing",["architecture Iran infrastructure",{_id: 26083,str: "Practical customer loyalty copying",num: 7468,date: new Date("2018-09-06T13:48:49.116Z"),array: [],obj: {_id: 26084,str: "Functionality Liaison",date: new Date("2018-09-06T08:45:21.436Z"),array: []}}],{_id: 26085,str: "Home Loan Account Fish",array: [],obj: {}},79219,48506,{_id: 26086,num: 47610,array: [],obj: {}},27083,new Date("2018-09-06T15:59:56.969Z"),new Date("2018-09-05T22:35:13.510Z")],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 26087,str: "Legacy",date: new Date("2018-09-06T10:56:59.443Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 26088,str: "copy",num: 94689,date: new Date("2018-09-06T11:51:21.763Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 26089,str: "Team-oriented",num: 37607,date: new Date("2018-09-06T04:13:54.788Z"),array: [],obj: {_id: 26090,str: "deposit",num: 29264,date: new Date("2018-09-05T21:12:38.936Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 26091,str: "synthesizing Wooden object-oriented",num: 50311,date: new Date("2018-09-06T15:57:26.030Z"),obj: {_id: 26092,str: "Practical Rubber Chair auxiliary",num: 6439,date: new Date("2018-09-05T21:33:34.022Z"),array: ["Borders",new Date("2018-09-05T23:28:08.345Z"),"input compress",{_id: 26093,str: "Utah deposit bandwidth",date: new Date("2018-09-06T14:03:49.168Z"),obj: {}},61917,13993,44962,new Date("2018-09-06T00:22:22.286Z"),"Profit-focused",[new Date("2018-09-06T02:46:06.307Z"),41041],new Date("2018-09-06T11:01:15.083Z"),"Fantastic Gorgeous Industrial"],obj: {_id: 26094,str: "Marshall Islands Indian Rupee Car",num: 82464,date: new Date("2018-09-06T06:45:56.902Z")}}});
    },

    function(coll) {
        return coll.insert({_id: 26095,str: "Mexico Incredible incubate",num: 97315,date: new Date("2018-09-06T03:52:08.414Z"),array: [],obj: {_id: 26096,str: "invoice",num: 70207,array: [91314,new Date("2018-09-06T09:16:09.767Z"),[],"interfaces",new Date("2018-09-06T00:52:09.342Z"),{_id: 26097,str: "well-modulated synthesize support",num: 52913,date: new Date("2018-09-06T18:14:22.104Z"),array: [],obj: {}},{_id: 26098,obj: {_id: 26099,date: new Date("2018-09-06T01:31:30.401Z"),obj: {}}},new Date("2018-09-06T08:05:07.103Z"),["Estate Mill Checking Account"],3032,new Date("2018-09-06T06:13:22.396Z")],obj: {_id: 26100,str: "Wooden",num: 42143,date: new Date("2018-09-06T05:28:01.105Z"),array: [3494,76,{_id: 26101,str: "Unbranded",date: new Date("2018-09-06T10:35:03.979Z")},"Human reboot"]}}});
    },

    function(coll) {
        return coll.insert({_id: 26102,str: "Generic radical",num: 57575,array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 26103,num: 68250,array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 26104,str: "Checking Account UAE Dirham Grocery",num: 70232,date: new Date("2018-09-05T23:26:40.508Z"),array: [21654,"secondary",91366,new Date("2018-09-06T10:56:52.867Z"),{_id: 26105,str: "leading edge",num: 84910,date: new Date("2018-09-05T21:03:07.410Z"),array: [new Date("2018-09-06T07:46:09.882Z")],obj: {}},new Date("2018-09-06T01:09:24.165Z"),"strategy","Handcrafted Cotton Ball strategy","Metal",99172,[],[],"Investment Account microchip",23041],obj: {_id: 26106,str: "experiences partnerships Administrator",num: 92933,date: new Date("2018-09-05T23:46:04.774Z"),array: [new Date("2018-09-06T06:13:53.046Z"),{_id: 26107,str: "Awesome",num: 25050,obj: {_id: 26108,date: new Date("2018-09-06T17:13:42.649Z"),array: [],obj: {}}}]}});
    },

    function(coll) {
        return coll.insert({_id: 26109,str: "Home Loan Account open-source",num: 78176,date: new Date("2018-09-06T07:56:45.007Z"),array: [],obj: {_id: 26110,str: "Fresh program",date: new Date("2018-09-06T08:16:19.656Z"),array: [new Date("2018-09-06T06:16:14.773Z"),98108,"Direct Malta",new Date("2018-09-06T15:03:55.089Z"),29685,new Date("2018-09-06T06:21:56.413Z"),"green",34716],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 26111,str: "Handcrafted Soft",num: 11767,date: new Date("2018-09-06T09:37:58.091Z"),array: ["Gorgeous Cotton Shirt Cote d'Ivoire Seamless",new Date("2018-09-06T06:45:47.607Z"),"Beauty partnerships",[],new Date("2018-09-06T10:12:42.475Z"),{_id: 26112,str: "leading edge",num: 80931,date: new Date("2018-09-06T09:21:58.115Z")},"Lao People's Democratic Republic Dominican Republic Niger",70864,57827,new Date("2018-09-06T15:38:50.817Z"),3733,{_id: 26113,str: "Unbranded Plastic Pants",num: 33581,date: new Date("2018-09-06T12:33:33.985Z"),array: [[]],obj: {_id: 26114,str: "compelling",date: new Date("2018-09-05T20:24:45.209Z"),array: ["reciprocal"],obj: {}}}],obj: {_id: 26115,num: 22882,array: []}});
    },

    function(coll) {
        return coll.insert({_id: 26116,str: "Data data-warehouse",num: 63937,date: new Date("2018-09-06T01:58:50.781Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 26117,str: "online Inverse Specialist",array: [45390,"Idaho back-end",new Date("2018-09-06T03:55:58.908Z"),"feed Buckinghamshire",82498,[],"generating Distributed",new Date("2018-09-05T20:17:32.782Z"),321,new Date("2018-09-05T21:31:39.442Z"),{_id: 26118,str: "Lithuanian Litas Berkshire Congolese Franc",num: 76156,date: new Date("2018-09-06T15:19:52.476Z"),obj: {}},"parse Metal"],obj: {_id: 26119,str: "Gorgeous Concrete Car Right-sized",num: 65218,date: new Date("2018-09-05T20:07:52.996Z"),array: [[],new Date("2018-09-06T11:16:00.143Z")],obj: {_id: 26120,num: 10564,date: new Date("2018-09-06T11:19:50.406Z"),array: [41755]}}});
    },

    function(coll) {
        return coll.insert({_id: 26121,str: "Licensed Concrete Computer alarm",num: 81938,date: new Date("2018-09-06T14:12:03.884Z"),array: ["leading edge hierarchy","ADP West Virginia",new Date("2018-09-06T05:16:27.472Z"),47113,61327,{_id: 26122,str: "Chief holistic",num: 91889,array: [],obj: {}},{_id: 26123,str: "azure Faroe Islands Curve",num: 92406,date: new Date("2018-09-06T11:20:05.777Z"),obj: {_id: 26124,date: new Date("2018-09-05T23:06:10.354Z"),array: [86803,new Date("2018-09-05T23:00:49.005Z"),"override"],obj: {}}},new Date("2018-09-06T09:36:48.166Z"),87839,"Executive Soap",{_id: 26125,str: "instruction set bifurcated Rubber",num: 42503,date: new Date("2018-09-06T17:15:44.596Z")},[],[73405],new Date("2018-09-06T16:22:12.002Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 26126,str: "Senior Maine",date: new Date("2018-09-06T07:54:47.574Z"),array: [25117,"open architecture","sensor Chair Functionality","Intelligent Plastic Mouse Product Shoes",new Date("2018-09-06T03:01:56.653Z"),new Date("2018-09-06T14:16:12.038Z"),95387,"Movies strategize Branch",new Date("2018-09-06T05:52:36.352Z")]});
    },

    function(coll) {
        return coll.insert({_id: 26127,str: "Paradigm haptic Facilitator",num: 35832,date: new Date("2018-09-06T00:37:35.613Z"),array: ["COM national",12813,94943,44371,new Date("2018-09-06T04:20:06.941Z"),"Bedfordshire Bedfordshire Total",8730,new Date("2018-09-06T07:29:40.679Z"),"Salad Maine secured line",new Date("2018-09-06T00:19:01.912Z"),["Cotton Dynamic Practical","lime Home Loan Account SSL"]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 26128,str: "Intelligent",num: 52269,date: new Date("2018-09-06T06:24:28.590Z"),array: [],obj: {_id: 26129,num: 82129,array: ["calculating",89589,{_id: 26130,num: 22734,date: new Date("2018-09-06T13:13:09.966Z"),array: [],obj: {}},new Date("2018-09-06T15:57:15.982Z"),[],new Date("2018-09-06T04:29:24.943Z"),new Date("2018-09-06T07:04:00.156Z"),"product scale azure",31737,[18398],"Barbados Dollar Consultant",31644,"interactive"],obj: {_id: 26131,str: "user-centric Cambridgeshire Savings Account",date: new Date("2018-09-05T20:29:57.227Z")}}});
    },

    function(coll) {
        return coll.insert({_id: 26132,str: "magenta back-end",num: 10666,date: new Date("2018-09-05T21:04:35.139Z"),array: [new Date("2018-09-05T20:03:34.345Z"),{_id: 26133,str: "Progressive Rubber Sports",num: 34047,date: new Date("2018-09-06T01:52:08.315Z"),array: [],obj: {_id: 26134,str: "JBOD port blue",num: 12897,date: new Date("2018-09-06T13:45:29.802Z"),array: [],obj: {}}},31812,"parse Iceland Towels","Division payment",new Date("2018-09-06T07:00:35.563Z"),"PNG CSS","Malta",44835,31733],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 26135,str: "Senior virtual",date: new Date("2018-09-05T22:08:30.341Z"),obj: {_id: 26136,str: "Soft",num: 73063,date: new Date("2018-09-06T00:10:54.495Z"),array: ["solid state Open-architected",new Date("2018-09-05T20:51:11.695Z"),new Date("2018-09-06T04:44:32.006Z"),[],{_id: 26137,str: "open-source firmware back up",num: 59840,date: new Date("2018-09-06T14:09:13.199Z"),array: [],obj: {}},new Date("2018-09-06T18:46:59.323Z"),"matrix markets",70373]}});
    },

    function(coll) {
        return coll.insert({_id: 26138,str: "Slovenia",num: 82694,date: new Date("2018-09-06T18:17:15.183Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 26139,str: "Profit-focused hub",num: 47444,date: new Date("2018-09-06T14:41:13.940Z"),array: [new Date("2018-09-06T06:59:49.169Z"),new Date("2018-09-06T07:17:06.530Z"),59173,{_id: 26140,str: "matrix",num: 32207,date: new Date("2018-09-06T02:44:31.555Z"),array: [],obj: {}},71181,"Auto Loan Account",new Date("2018-09-06T09:13:46.077Z"),"firewall Awesome",new Date("2018-09-06T02:10:27.084Z"),[],74096,[]],obj: {_id: 26141,str: "Lebanese Pound Neck",date: new Date("2018-09-06T05:40:36.269Z"),obj: {_id: 26142,num: 69006,array: [new Date("2018-09-06T18:33:48.916Z")]}}});
    },

    function(coll) {
        return coll.insert({_id: 26143,str: "deposit Re-engineered deposit",num: 12832,array: [],obj: {_id: 26144,str: "Metal Handmade overriding",num: 6562,date: new Date("2018-09-06T11:18:53.255Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 26145,str: "Security",num: 84746,date: new Date("2018-09-06T12:11:59.239Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 26146,str: "Incredible Indian Rupee",num: 20682,date: new Date("2018-09-06T15:47:01.237Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 26147,str: "Pre-emptive Toys",num: 82510,date: new Date("2018-09-05T21:34:20.583Z"),array: [{_id: 26148,str: "sensor back up",num: 88508,array: [],obj: {}},new Date("2018-09-06T09:40:51.694Z"),3363,"parsing","Computers",new Date("2018-09-05T23:36:07.511Z"),3880,[[new Date("2018-09-05T22:12:03.695Z"),21620],"Plastic Zambian Kwacha compressing",{_id: 26149,str: "deposit back-end Music",num: 61899,date: new Date("2018-09-06T04:26:20.952Z"),array: [37220]},[]],[],"Universal Lempira copy",new Date("2018-09-06T07:24:13.366Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 26150,array: [new Date("2018-09-06T04:40:02.277Z"),"Rustic Steel Fish Shoes","synthesizing Dynamic",67291,new Date("2018-09-06T08:11:37.888Z"),13405,new Date("2018-09-06T04:34:03.279Z"),"Quality Buckinghamshire",{_id: 26151,str: "supply-chains",num: 8260,date: new Date("2018-09-06T17:08:45.419Z"),array: [],obj: {_id: 26152,num: 99617,date: new Date("2018-09-06T05:41:16.319Z"),obj: {}}},["Refined Pizza"],"Centers Chief",new Date("2018-09-06T10:16:35.405Z"),{_id: 26153,num: 4879,date: new Date("2018-09-05T21:12:04.769Z"),array: [],obj: {_id: 26154,str: "global backing up Bike",date: new Date("2018-09-06T17:21:00.503Z"),array: [60357,[]],obj: {}}}]});
    },

    function(coll) {
        return coll.insert({_id: 26155,str: "online Antigua and Barbuda Cambridgeshire",num: 32239,date: new Date("2018-09-05T20:27:26.146Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 26156,str: "Books Unions Auto Loan Account",num: 56913,date: new Date("2018-09-06T03:35:20.367Z"),array: [new Date("2018-09-06T15:20:40.752Z"),58685,new Date("2018-09-06T08:27:34.591Z"),"Shoes",{_id: 26157,str: "matrix",num: 48801,array: [],obj: {}},new Date("2018-09-05T19:56:01.637Z"),29123,[new Date("2018-09-06T12:10:35.964Z")],{_id: 26158,num: 81892,date: new Date("2018-09-06T02:41:32.646Z"),array: [new Date("2018-09-06T00:19:25.236Z"),"benchmark 1080p"],obj: {_id: 26159,date: new Date("2018-09-06T10:25:09.392Z"),array: []}},97061,"RAM black background","Infrastructure",{_id: 26160,str: "coherent calculating International",num: 56698,obj: {}}],obj: {_id: 26161,str: "Tennessee Money Market Account",date: new Date("2018-09-06T15:52:32.130Z"),array: [81532],obj: {_id: 26162,str: "Investment Account",num: 76535,date: new Date("2018-09-06T11:25:29.248Z"),array: []}}});
    },

    function(coll) {
        return coll.insert({_id: 26163,str: "e-business",num: 77522,date: new Date("2018-09-06T19:15:54.629Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 26164,str: "Rand Loti Innovative",num: 39691,date: new Date("2018-09-05T22:42:17.136Z"),array: [new Date("2018-09-05T20:56:47.061Z"),98262,"Money Market Account",54883,"program generating Dominican Peso",new Date("2018-09-06T11:12:13.934Z"),new Date("2018-09-06T16:14:10.881Z"),{_id: 26165,str: "Berkshire",num: 78727,date: new Date("2018-09-06T16:54:10.983Z"),array: [],obj: {}},55652,{_id: 26166,str: "Groves Credit Card Account Buckinghamshire",date: new Date("2018-09-06T02:44:02.647Z"),array: [],obj: {_id: 26167,num: 48321,date: new Date("2018-09-06T19:38:01.975Z"),obj: {}}},"Minnesota Intelligent Wooden Pizza wireless"]});
    },

    function(coll) {
        return coll.insert({_id: 26168,str: "bluetooth",num: 12119,date: new Date("2018-09-06T01:04:15.343Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 26169,str: "Michigan Supervisor Usability",num: 88906,date: new Date("2018-09-05T22:08:12.686Z"),array: [],obj: {_id: 26170,str: "methodologies Bike matrix",num: 73556,date: new Date("2018-09-06T03:08:28.292Z"),array: ["withdrawal digital Auto Loan Account",new Date("2018-09-06T17:25:56.572Z"),86988,[],"Handmade","Borders invoice",8570,new Date("2018-09-06T04:33:23.168Z"),{_id: 26171,str: "infrastructures calculating demand-driven",num: 94313,date: new Date("2018-09-05T23:33:17.102Z"),array: [13317,[{_id: 26172,num: 16971,date: new Date("2018-09-06T04:12:54.031Z"),array: [],obj: {}},new Date("2018-09-06T17:41:47.008Z"),[],new Date("2018-09-06T14:28:13.903Z")]],obj: {_id: 26173,str: "Orchestrator Skyway",date: new Date("2018-09-06T11:38:02.219Z"),obj: {_id: 26174,array: [74250,new Date("2018-09-06T18:39:16.587Z")],obj: {}}}},"exuding"]}});
    },

    function(coll) {
        return coll.insert({_id: 26175,str: "efficient Books protocol",date: new Date("2018-09-06T07:01:48.279Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 26176,str: "Chief Arizona",date: new Date("2018-09-06T09:12:09.459Z"),array: [39245,"Yemeni Rial THX Internal",new Date("2018-09-06T11:53:42.877Z"),"invoice","Credit Card Account back up",44163,[],new Date("2018-09-06T10:49:04.473Z"),35873,new Date("2018-09-06T09:30:14.854Z"),{_id: 26177,str: "Paradigm Trail strategy",num: 8100,array: ["seamless back-end",new Date("2018-09-06T00:03:36.761Z")]},new Date("2018-09-06T05:28:25.301Z")],obj: {_id: 26178,str: "Savings Account Home redundant",num: 31300,date: new Date("2018-09-06T01:03:59.717Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 26179,str: "online",date: new Date("2018-09-06T17:25:24.918Z"),obj: {_id: 26180,str: "Computer Global Cotton",num: 86032,date: new Date("2018-09-06T11:35:35.985Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 26181,num: 89176,date: new Date("2018-09-06T17:18:27.350Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 26182,str: "back-end quantify magenta",num: 84350,array: [66022,{_id: 26183,str: "Plaza",num: 29293,date: new Date("2018-09-06T10:39:55.568Z"),array: [],obj: {_id: 26184,str: "Bike aggregate SCSI",num: 59856,date: new Date("2018-09-06T15:58:26.798Z"),array: ["Directives auxiliary Forges",{_id: 26185,num: 97712,date: new Date("2018-09-05T23:44:53.831Z"),array: []},new Date("2018-09-06T06:42:42.403Z"),new Date("2018-09-06T16:13:56.449Z"),"transitional Handmade Soft Keyboard"],obj: {}}},new Date("2018-09-06T08:04:51.152Z"),20848,["Rustic Wooden Pizza visualize Florida",{_id: 26186,str: "fuchsia Intuitive",date: new Date("2018-09-06T01:45:02.797Z"),obj: {_id: 26187,date: new Date("2018-09-06T16:22:50.359Z"),array: ["open-source",66880]}},new Date("2018-09-06T18:03:27.695Z"),64070,[]],["transparent sensor",[],new Date("2018-09-06T00:14:42.431Z")],"Trinidad and Tobago paradigms"],obj: { _id: 26188 }});
    },

    function(coll) {
        return coll.insert({_id: 26189,str: "Assurance compressing digital",num: 46988,date: new Date("2018-09-06T08:47:12.738Z"),array: [],obj: {_id: 26190,str: "Assurance integrated",date: new Date("2018-09-05T21:27:49.395Z"),array: [new Date("2018-09-06T09:06:46.803Z"),[],"Architect",new Date("2018-09-06T00:55:35.168Z"),77561,{_id: 26191,str: "withdrawal",num: 43681,date: new Date("2018-09-06T04:37:12.740Z"),array: []},{_id: 26192,str: "Architect value-added",num: 30429,date: new Date("2018-09-06T09:07:01.793Z"),array: ["North Dakota Lane Station",8511,"6th generation Vietnam payment","XSS Integrated Applications",[],{_id: 26193,str: "drive",num: 87342,obj: {}}],obj: {_id: 26194,array: [83596,new Date("2018-09-06T15:04:23.205Z")],obj: {}}},59334,"relationships"],obj: {_id: 26195,date: new Date("2018-09-06T18:01:44.775Z"),obj: {_id: 26196,num: 67878,date: new Date("2018-09-06T09:50:52.338Z"),array: [70014,new Date("2018-09-06T19:30:11.587Z"),{_id: 26197,str: "Vision-oriented Bacon",num: 82225,date: new Date("2018-09-06T13:10:50.560Z")}]}}}});
    },

    function(coll) {
        return coll.insert({_id: 26198,str: "schemas Cheese",num: 36333,date: new Date("2018-09-06T17:46:13.310Z"),array: [],obj: {_id: 26199,str: "AGP",num: 65992,date: new Date("2018-09-05T22:01:31.877Z"),array: [36154,"Groves",88777,[],14015,new Date("2018-09-06T17:22:54.574Z"),22562,{_id: 26200,num: 20057,date: new Date("2018-09-06T02:02:45.837Z"),array: ["generate"]},57177,"Avon Practical Steel Tuna neural",{_id: 26201,str: "Networked mobile Personal Loan Account",array: [[]],obj: {}},new Date("2018-09-06T11:45:29.957Z")],obj: {_id: 26202,str: "Product",num: 83313,obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 26203,str: "mobile optimal",date: new Date("2018-09-06T15:58:10.637Z"),array: ["enable compressing integrate",new Date("2018-09-05T22:54:22.474Z"),new Date("2018-09-06T07:42:16.929Z"),"GB deposit ivory",55767,81307,227,new Date("2018-09-06T15:20:53.677Z"),{_id: 26204,str: "Handcrafted Plastic Bike Planner Street",num: 35667,obj: {}},{_id: 26205,date: new Date("2018-09-06T18:25:41.848Z"),obj: {_id: 26206,str: "turquoise",num: 91773,array: [],obj: {}}},63465],obj: {_id: 26207,str: "transmitting Central program",num: 12492,array: [[],"Streamlined",58419],obj: {_id: 26208,str: "Arkansas",num: 46505,date: new Date("2018-09-06T08:10:59.827Z"),array: [[]]}}});
    },

    function(coll) {
        return coll.insert({_id: 26209,str: "Granite Intelligent",num: 36403,date: new Date("2018-09-06T13:07:51.030Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 26210,str: "extensible Wisconsin",num: 33573,date: new Date("2018-09-06T19:29:12.161Z"),array: ["next generation Fresh Checking Account",{_id: 26211,str: "Bedfordshire",num: 88383,array: [61170],obj: {}},new Date("2018-09-06T18:46:11.696Z"),{_id: 26212,date: new Date("2018-09-06T00:04:48.161Z"),obj: {_id: 26213,str: "driver",date: new Date("2018-09-06T00:40:08.437Z"),array: []}},23027,"Borders",new Date("2018-09-06T05:26:17.926Z"),[],{_id: 26214,str: "Plastic Buckinghamshire",num: 27224,date: new Date("2018-09-06T08:45:11.052Z"),array: ["Optimization copy online",new Date("2018-09-05T20:08:26.842Z")],obj: {}},"maroon synergies",new Date("2018-09-06T06:05:06.500Z"),{_id: 26215,num: 45286,date: new Date("2018-09-06T09:19:44.421Z"),array: [],obj: {}},new Date("2018-09-06T13:40:43.844Z")],obj: {_id: 26216,num: 40803,obj: {_id: 26217,num: 73820,date: new Date("2018-09-06T10:36:12.733Z"),obj: {_id: 26218,str: "bandwidth experiences",num: 72119,date: new Date("2018-09-06T13:36:10.180Z"),array: [88525,[],[],"bypassing one-to-one bluetooth"]}}}});
    },

    function(coll) {
        return coll.insert({_id: 26219,str: "program Streets",date: new Date("2018-09-06T06:27:25.753Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 26220,str: "deposit deposit transmitter",num: 45794,date: new Date("2018-09-06T00:57:44.245Z"),array: [],obj: {_id: 26221,num: 29727,date: new Date("2018-09-06T13:13:01.000Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 26222,str: "copy",num: 29216,date: new Date("2018-09-05T23:33:56.737Z"),array: ["Cambridgeshire Synergized",{_id: 26223,str: "disintermediate",num: 68196,date: new Date("2018-09-06T06:00:17.314Z"),array: [],obj: {}},20668,new Date("2018-09-06T07:59:33.507Z"),"whiteboard",new Date("2018-09-06T00:33:49.342Z"),new Date("2018-09-05T23:10:02.564Z"),38436,77637,["Berkshire"],[],new Date("2018-09-06T08:58:00.516Z")],obj: {_id: 26224,num: 91137,date: new Date("2018-09-06T02:57:27.140Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 26225,num: 62025,date: new Date("2018-09-06T09:32:32.527Z"),array: [82424,new Date("2018-09-06T16:18:36.838Z"),"facilitate Arizona",69524,{_id: 26226,str: "Arkansas connecting",num: 87666,date: new Date("2018-09-06T09:05:54.243Z"),obj: {_id: 26227,num: 91649,date: new Date("2018-09-06T19:42:52.420Z"),array: [[],"IB",[],65268,new Date("2018-09-06T10:49:09.608Z"),new Date("2018-09-06T14:07:14.151Z")],obj: {}}},new Date("2018-09-06T11:26:35.551Z"),"Macedonia Chips",[]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 26228,str: "Borders Licensed",num: 29417,date: new Date("2018-09-06T04:10:22.733Z"),array: [],obj: {_id: 26229,str: "Refined Concrete Bacon Senior convergence",num: 15999,array: ["Tools",20414,new Date("2018-09-06T08:13:30.740Z"),"FTP",new Date("2018-09-06T07:23:35.337Z"),30000,70321,"disintermediate Tasty",new Date("2018-09-06T06:27:07.164Z"),{_id: 26230,num: 88059,date: new Date("2018-09-06T18:06:07.268Z"),array: ["Buckinghamshire"],obj: {}},2935,new Date("2018-09-06T03:25:53.455Z")],obj: {_id: 26231,num: 36196,date: new Date("2018-09-06T19:38:15.148Z"),array: [],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 26232,str: "red pixel Armenian Dram",date: new Date("2018-09-06T05:11:40.664Z"),array: [97249,"calculate Qatar Solomon Islands Dollar",new Date("2018-09-06T18:47:24.404Z"),{_id: 26233,str: "Wooden",num: 49098,date: new Date("2018-09-05T23:19:39.617Z"),array: [],obj: {_id: 26234,num: 14864,date: new Date("2018-09-06T17:20:49.205Z"),array: [],obj: {}}},41322,[],new Date("2018-09-06T16:09:53.231Z"),"Checking Account",new Date("2018-09-06T08:22:20.193Z"),new Date("2018-09-06T14:39:34.070Z")],obj: {_id: 26235,str: "Metal Station",num: 33346,date: new Date("2018-09-06T06:40:48.102Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 26236,str: "transmit Mauritania connect",num: 96705,date: new Date("2018-09-06T11:10:47.694Z"),array: [],obj: {_id: 26237,str: "deposit",num: 94750,date: new Date("2018-09-06T08:45:26.757Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 26238,str: "Balanced Generic Concrete Pants neural",num: 10300,date: new Date("2018-09-05T20:18:06.448Z"),array: [],obj: {_id: 26239,str: "Czech Koruna Meadows Sudan",num: 84314,array: [new Date("2018-09-06T08:26:18.469Z"),new Date("2018-09-06T07:52:48.028Z"),{_id: 26240,str: "Dynamic",num: 7527,date: new Date("2018-09-05T22:48:52.050Z"),array: [24124],obj: {}},"Internal SDD Personal Loan Account",[],"Delaware Borders","Industrial Tanzanian Shilling",29707,"Personal Loan Account",[],[42645,new Date("2018-09-05T20:05:07.064Z"),new Date("2018-09-06T12:15:53.700Z"),"deposit incentivize Savings Account"],"RAM"],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 26241,num: 97106,array: [26163,"Organic copy",[],"mint green Road Markets",new Date("2018-09-06T17:08:40.495Z"),new Date("2018-09-05T23:22:53.552Z"),[],"Intranet Incredible COM",new Date("2018-09-06T12:30:10.214Z"),"functionalities Car Orchestrator",{_id: 26242,str: "Cambridgeshire",num: 54186,date: new Date("2018-09-06T05:12:15.725Z"),obj: {}},new Date("2018-09-06T19:14:49.796Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 26243,str: "Grocery",num: 99542,date: new Date("2018-09-06T10:35:37.119Z"),array: [],obj: {_id: 26244,str: "Vatu Ireland",num: 24045,date: new Date("2018-09-06T01:39:01.412Z"),array: [new Date("2018-09-06T05:48:57.933Z"),{_id: 26245,str: "analyzing Cliffs THX",num: 97563},new Date("2018-09-06T05:26:10.199Z"),"synthesizing online","payment initiatives",new Date("2018-09-05T22:14:58.840Z"),[],79242,55806],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 26246,str: "hard drive",num: 85130,date: new Date("2018-09-06T10:00:33.976Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 26247,str: "wireless Liaison",num: 70684,date: new Date("2018-09-06T18:56:33.418Z"),array: [[],"functionalities",53185,new Date("2018-09-06T01:30:30.775Z"),64977,"virtual",17263,{_id: 26248,str: "explicit",num: 76234,date: new Date("2018-09-06T17:37:49.001Z"),array: [],obj: {_id: 26249,str: "withdrawal system EXE",num: 72484,date: new Date("2018-09-05T22:27:58.536Z"),array: ["Soap","RAM Unbranded Hryvnia",88390],obj: {}}},"Fundamental",new Date("2018-09-06T10:32:44.165Z"),new Date("2018-09-06T18:11:19.745Z"),new Date("2018-09-06T10:25:51.391Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 26250,str: "Cordoba Oro transmit",num: 38354,date: new Date("2018-09-06T11:57:46.311Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 26251,str: "Comoro Franc port",num: 5091,date: new Date("2018-09-05T23:58:23.228Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 26252,str: "Licensed Refined Home Loan Account",num: 91289,date: new Date("2018-09-06T07:43:18.483Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 26253,str: "International",num: 63095,date: new Date("2018-09-06T01:18:02.235Z"),array: [],obj: {_id: 26254,str: "Borders Frozen Nebraska",num: 48063,date: new Date("2018-09-05T21:40:27.651Z"),array: ["Supervisor Fresh",new Date("2018-09-05T22:57:23.436Z"),"cyan Bedfordshire Trinidad and Tobago Dollar","monitor",96797,new Date("2018-09-05T22:49:57.521Z"),25946,new Date("2018-09-06T13:35:22.607Z"),["hack calculate Arizona"],83780,22663],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 26255,str: "Keys",date: new Date("2018-09-06T05:05:36.063Z"),array: [],obj: {_id: 26256,str: "Vermont feed Iraqi Dinar",date: new Date("2018-09-06T12:04:52.844Z"),array: [new Date("2018-09-05T21:59:25.526Z"),[],new Date("2018-09-06T00:39:15.008Z"),73852,"alarm","Practical Plastic","Afghanistan multimedia indexing",52114,new Date("2018-09-06T15:30:48.848Z"),new Date("2018-09-06T15:33:09.885Z"),new Date("2018-09-06T14:21:37.157Z"),"Credit Card Account invoice Human",93718,"parsing Rubber"]}});
    },

    function(coll) {
        return coll.insert({_id: 26257,str: "action-items",num: 76116,date: new Date("2018-09-06T11:10:55.790Z"),array: ["Paradigm Rustic Concrete Shirt Chair",new Date("2018-09-06T17:57:56.697Z"),59485,"FTP",{_id: 26258,str: "Tasty Concrete Mouse Argentina maroon",num: 45317,date: new Date("2018-09-06T04:58:55.544Z"),array: [25842,"system aggregate Assurance",new Date("2018-09-06T15:28:50.102Z")],obj: {}},3273,new Date("2018-09-06T10:30:11.552Z"),[],"Tunnel Distributed facilitate",5640],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 26259,str: "seize hacking",date: new Date("2018-09-06T15:33:41.704Z"),array: [],obj: {_id: 26260,str: "turquoise Fresh",num: 78564,array: [[],6814,{_id: 26261,str: "payment",num: 89283,date: new Date("2018-09-06T04:57:33.487Z"),array: [new Date("2018-09-06T07:39:46.556Z"),45879,96622],obj: {_id: 26262,str: "Tanzanian Shilling",num: 41301,date: new Date("2018-09-06T02:42:14.960Z"),array: [],obj: {_id: 26263,str: "microchip contingency harness",num: 30620,date: new Date("2018-09-06T15:51:22.312Z")}}},"Maryland",{_id: 26264,num: 79085,date: new Date("2018-09-06T12:49:04.620Z"),array: ["1080p"],obj: {}},[new Date("2018-09-06T07:28:09.907Z"),45168],{_id: 26265,str: "Incredible SCSI Avon",num: 92590},"Beauty",{_id: 26266,date: new Date("2018-09-06T13:26:29.482Z"),array: [],obj: {}},new Date("2018-09-06T18:52:40.999Z"),new Date("2018-09-06T14:52:25.871Z")],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 26267,str: "Nepalese Rupee task-force Lead",num: 36883,date: new Date("2018-09-05T22:30:47.818Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 26268,str: "Springs Books Saint Helena Pound",date: new Date("2018-09-06T10:53:29.879Z"),array: [],obj: {_id: 26269,str: "scalable Cross-group navigating",num: 22718,array: [new Date("2018-09-06T17:31:27.439Z"),[["Fantastic Movies"]],new Date("2018-09-05T21:56:39.265Z"),44387,new Date("2018-09-06T04:41:32.551Z"),"maroon viral Afghani","Metal",{_id: 26270,str: "Borders",date: new Date("2018-09-06T12:36:49.960Z"),array: [],obj: {_id: 26271,str: "Universal",num: 52862,date: new Date("2018-09-06T09:50:20.951Z"),obj: {_id: 26272,num: 20195,array: [62011,{_id: 26273,str: "IB Music",num: 91138,date: new Date("2018-09-05T22:32:59.694Z"),array: [],obj: {}},new Date("2018-09-06T03:50:31.256Z")],obj: {}}}},5066,"Club vortals silver",new Date("2018-09-06T08:16:09.794Z"),97531,"enterprise",[]]}});
    },

    function(coll) {
        return coll.insert({_id: 26274,num: 10631,date: new Date("2018-09-06T13:56:21.704Z"),array: [new Date("2018-09-06T10:05:34.707Z"),"Shirt",43467,"deposit budgetary management solutions",[],new Date("2018-09-06T18:01:48.133Z"),new Date("2018-09-06T11:52:25.167Z"),97913,[{_id: 26275,str: "Missouri Avon",date: new Date("2018-09-06T08:19:19.594Z"),array: [],obj: {_id: 26276,str: "Investment Account national COM",num: 7502,date: new Date("2018-09-06T02:40:23.309Z"),array: [{_id: 26277,num: 80919,date: new Date("2018-09-06T12:24:05.700Z"),obj: {_id: 26278,array: [],obj: {}}}],obj: {}}},30262],"Egyptian Pound bluetooth deploy",{_id: 26279,str: "parsing Springs",num: 82965,date: new Date("2018-09-06T16:07:21.498Z")},new Date("2018-09-06T10:51:03.512Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 26280,str: "Bike Rubber Pizza",num: 18927,date: new Date("2018-09-06T16:24:35.930Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 26281,str: "fault-tolerant e-tailers Steel",num: 92260,date: new Date("2018-09-06T05:01:15.698Z"),array: [new Date("2018-09-06T06:10:43.641Z"),new Date("2018-09-06T06:24:16.378Z"),"flexibility Computers primary",187,new Date("2018-09-06T09:00:51.204Z"),"Savings Account","Assistant Health withdrawal",79707,[],[]],obj: {_id: 26282,str: "Grass-roots programming",num: 26846,date: new Date("2018-09-06T13:56:30.525Z"),obj: {_id: 26283,str: "Frozen Lari Guarani",num: 14736,date: new Date("2018-09-06T14:09:14.102Z"),array: [{_id: 26284,str: "deposit Kina",date: new Date("2018-09-05T23:21:26.211Z"),array: ["Infrastructure"]},{_id: 26285,str: "Open-source product Cyprus",array: [21406],obj: {}},"Personal Loan Account back-end AGP",new Date("2018-09-06T08:26:21.098Z"),78014],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 26286,str: "dot-com Borders",num: 38182,date: new Date("2018-09-05T20:06:08.500Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 26287,str: "Incredible",num: 96816,date: new Date("2018-09-06T05:47:30.060Z"),array: [new Date("2018-09-06T12:32:09.620Z"),9034,"copy","Distributed Visionary Alaska",new Date("2018-09-06T13:52:30.467Z"),86692,61370,{_id: 26288,str: "synthesizing Metal",num: 9514,date: new Date("2018-09-06T00:27:04.911Z"),array: [[]],obj: {_id: 26289,str: "green",num: 75885,date: new Date("2018-09-05T20:06:15.035Z"),array: [new Date("2018-09-06T00:05:06.240Z"),"disintermediate Avon feed"]}},24208,92215],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 26290,str: "payment Mayotte Chief",num: 81138,date: new Date("2018-09-06T19:25:14.945Z"),array: [new Date("2018-09-06T15:09:07.187Z"),"Costa Rica firewall",83224,8849,8399,new Date("2018-09-05T21:46:57.533Z"),{_id: 26291,str: "Coordinator",num: 36656},33384,"Metal synthesize",[],new Date("2018-09-06T14:40:24.157Z"),"upward-trending Implementation generate"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 26292,str: "real-time Incredible",num: 55845,date: new Date("2018-09-06T00:01:46.717Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 26293,str: "Plastic Organic Thailand",num: 11983,array: [],obj: {_id: 26294,str: "Awesome Metal Chair Trinidad and Tobago",num: 58014,date: new Date("2018-09-06T02:41:21.997Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 26295,str: "Handcrafted Rubber Shoes Course port",num: 56059,date: new Date("2018-09-06T15:10:52.658Z"),array: [[41595,new Date("2018-09-06T16:00:15.806Z")],24199,38583,"generating Convertible Marks Multi-layered","ivory transmitting Lead",new Date("2018-09-05T22:43:15.650Z"),{_id: 26296,num: 4315,date: new Date("2018-09-05T23:16:32.838Z"),obj: {}},"cohesive architect matrix",new Date("2018-09-06T03:47:26.677Z"),new Date("2018-09-06T11:44:37.436Z")],obj: {_id: 26297,str: "RAM",num: 33385,array: [],obj: {_id: 26298,str: "COM Sleek Frozen Fish",num: 4922,date: new Date("2018-09-06T12:43:17.022Z"),obj: {_id: 26299,str: "robust Handmade Metal Fish",date: new Date("2018-09-05T21:21:47.135Z"),array: []}}}});
    },

    function(coll) {
        return coll.insert({_id: 26300,str: "Fantastic supply-chains",num: 13707,date: new Date("2018-09-06T14:15:20.009Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 26301,str: "Robust Iowa",num: 24689,array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 26302,str: "web services bottom-line",date: new Date("2018-09-06T01:14:06.032Z"),array: [],obj: {}});
    },

];

const indexList = [

    function(coll) {
        return coll.createIndex({"obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"num": -1});
    },

    function(coll) {
        return coll.createIndex({"num": -1, "obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"num": -1, "obj.obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"date": 1, "num": -1});
    },

    function(coll) {
        return coll.createIndex({"str": -1, "obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"num": -1, "obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": 1, "obj.obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"num": 1});
    },

    function(coll) {
        return coll.createIndex({"date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": -1, "obj.obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"num": 1, "str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": 1, "date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": 1, "obj.obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": 1, "str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"num": -1, "obj.num": 1, "obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"num": 1, "obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": 1, "obj.obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": -1, "obj.obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": 1, "obj.obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"date": -1, "obj.obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"date": -1, "str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": -1, "num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": -1, "str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": 1, "obj.obj.obj.date": 1, "obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": 1, "obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": -1, "obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": -1, "obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": 1, "obj.obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": 1, "obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": 1, "obj.obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": 1, "obj.obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": -1, "obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"date": -1, "obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": -1, "obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": 1, "obj.obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"str": 1, "obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": -1, "obj.obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"str": -1, "num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": -1, "obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": 1, "obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": 1, "obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": -1, "num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": 1, "obj.obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": 1, "obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": -1, "obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"str": -1, "obj.obj.obj.str": 1});
    },

];

const aggregationList = [

        [{$project: {a: { $dateToString: {date: { $dateToString: {date: new Date("2018-09-06T09:13:54.535Z"),onNull: "Baht redundant"} },timezone: "Atlantic/Cape_Verde",onNull: { $ltrim: {input: '$obj.obj.str',chars: { $toUpper: "Buckinghamshire" }} }} }, _id: 0}}],

        [{$project: {a: { $rtrim: { input: { $toString: { $toLower: "cutting-edge invoice Jamaica" } } } }, _id: 0}}],

        [{$project: {a: { $substrCP: [{ $substrBytes: ['$obj.obj.obj.str',18,14] },3,0] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[["Research web services Computers",'$obj.obj.str'],[],[49385],[],['$obj.obj.str']]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[{ $toUpper: '$obj.obj.obj.str' },"bandwidth"],[{ $toLower: '$obj.obj.obj.str' }],['$obj.obj.num'],[]]] }, _id: 0}}],

        [{$project: {a: { $concat: ['$obj.obj.str',"Village Buckinghamshire Saint Pierre and Miquelon",'$obj.str'] }, _id: 0}}],

        [{$project: {a: { $substrCP: [{ $dateToString: { date: new Date("2018-09-06T17:08:19.226Z") } },9,5] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $reverseArray: [["Incredible mobile generate"]] }, _id: 0}}],

        [{$project: {a: { $substrCP: [{ $dateToString: {date: new Date("2018-09-05T21:14:35.394Z"),format: "%M-%%-%H-%V-%u-%H-%w-%j",timezone: "Asia/Qyzylorda"} },17,7] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Licensed Qatari Rial Checking Account",v: false}]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.num'],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $millesecond: { $isoWeekYear: { $toDate: { $toString: { $arrayToObject: [[{k: "copy",v: { $dayOfWeek: { $month: '$obj.obj.obj.date' } }}]] } } } } }, _id: 0}}],

        [{$project: {a: { $toLower: "Customer Singapore Dollar" }, _id: 0}}],

        [{$project: {a: { $map: {input: [],in: { $indexOfArray: [{ $concatArrays: [['$obj.str',{ $substr: ['$obj.str',3,14] }],['$$this'],["Rustic Fresh Gloves","indigo invoice"]] },{ $arrayToObject: [[{k: "Soap",v: { $dayOfWeek: { $dateToString: { date: { $toDate: { $arrayElemAt: [["indexing Serbian Dinar Cape Verde Escudo",{ $toUpper: { $rtrim: { input: '$str' } } }],'$num'] } } } } }},{k: "Technician open system",v: { $trim: { input: "forecast Intelligent Plastic Chips Shoes" } }}]] },16] }} }, _id: 0}}],

        [{$project: {a: { $reverseArray: [['$obj.obj.obj.num',32541]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $substrCP: ["Island Strategist",11,4] },"Total envisioneer gold"],89191] }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: { $dayOfYear: { $toDate: { $arrayElemAt: [["action-items",'$obj.str',{ $toLower: "deposit Cuban Peso Peso Convertible" }],56503] } } },format: "%j-%d-%G-%G",timezone: "Asia/Qatar"} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.num'],51337] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],['$obj.obj.num'],["Home Loan Account connect",'$obj.obj.str']]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["matrix"],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["Illinois Engineer"],{ $log: [2382,'$obj.obj.num'] }] }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: new Date("2018-09-06T13:52:19.487Z"),format: "%m-%Y-%Y-%u-%Z-%V-%G"} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "one-to-one British Indian Ocean Territory (Chagos Archipelago)",v: "sticky Applications stable"}]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $substrCP: [{ $dateToString: {date: '$obj.obj.obj.date',timezone: "America/Creston"} },17,14] },"International Bolivia"],31259] }, _id: 0}}],

        [{$project: {a: { $dayOfWeek: { $dayOfYear: { $dateToParts: { date: { $isoWeek: { $dateFromString: {dateString: "2018-09-06T11:59:16.268Z",format: "%z-%H-%U-%m-%j-%Z-%Y-%w-%H-%G",timezone: "Europe/Mariehamn",onNull: "Plastic Money Market Account interfaces"} } } } } } }, _id: 0}}],

        [{$project: {a: { $range: [18,10,0] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[31224,'$num',{ $subtract: [47468,'$obj.obj.obj.num'] },'$obj.num'],[76597],['$obj.obj.str',{ $toUpper: "Direct primary" }],[],[{ $substr: ["Human Personal Loan Account Soft",5,8] }]]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[98711,'$num','$obj.obj.obj.num'],[69748],['$obj.str',{ $rtrim: {input: '$obj.str',chars: { $toLower: "Practical Concrete Pants" }} }]]] }, _id: 0}}],

        [{$project: {a: { $month: { $dayOfMonth: { $dateToString: {date: { $week: { $minute: { $second: { $second: { $minute: { $dateToParts: {date: { $isoWeek: { $millesecond: { $dateToString: {date: new Date("2018-09-06T16:48:37.245Z"),format: "%d-%Y-%j-%U-%G-%G-%m-%m-%d-%z",timezone: "Asia/Choibalsan"} } } },timezone: "America/Jamaica"} } } } } } },onNull: { $arrayElemAt: [['$str',"Car Personal Loan Account"],'$num'] }} } } }, _id: 0}}],

        [{$project: {a: { $reverseArray: [['$obj.str']] }, _id: 0}}],

        [{$project: {a: { $isoWeek: { $dateFromParts: {year: { $multiply: ['$obj.obj.obj.num',61157] },month: { $ln: 46372 },day: { $multiply: [22432,{ $multiply: [] }] },second: { $floor: '$obj.obj.obj.num' },millisecond: { $ln: '$obj.obj.obj.num' }} } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Business-focused green",v: false}]] }, _id: 0}}],

        [{$project: {a: { $concatArrays: [['$obj.num',50777,'$obj.obj.num'],['$obj.obj.str'],[{ $log10: '$obj.num' }]] }, _id: 0}}],

        [{$project: {a: { $substrBytes: ['$obj.obj.str',4,13] }, _id: 0}}],

        [{$project: {a: { $toString: { $week: { $isoWeek: { $minute: { $dateFromParts: {year: { $pow: [19009,'$obj.num'] },day: { $exp: { $size: [[]] } },hour: { $log10: 98460 },minute: { $abs: '$obj.obj.obj.num' },second: { $ceil: 38587 },millisecond: { $add: ['$obj.num'] },timezone: "Etc/GMT-5"} } } } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $ltrim: { input: "Central" } }],27469] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$num','$obj.obj.num',47809],[{ $substrBytes: ['$obj.obj.obj.str',5,14] },"Borders Licensed Delaware"],['$obj.str',"interactive Ergonomic Granite Towels"]]] }, _id: 0}}],

        [{$project: {a: { $year: { $dateFromParts: {year: { $abs: 42403 },month: { $add: ['$obj.num',88400,{ $subtract: [22047,'$obj.num'] }] },day: { $multiply: [] },millisecond: { $log: ['$obj.obj.obj.num','$obj.obj.obj.num'] }} } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],[54884],[]]] }, _id: 0}}],

        [{$project: {a: { $substrBytes: ['$obj.obj.str',10,16] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[{ $substr: [{ $trim: {input: '$obj.obj.str',chars: { $rtrim: { input: '$obj.obj.str' } }} },4,10] },"Colorado bluetooth",{ $toLower: "multimedia Glens Bermudian Dollar (customarily known as Bermuda Dollar)" }],[new Date("2018-09-06T08:14:24.564Z"),false,"strategic Chief benchmark",false]]] }, _id: 0}}],

        [{$project: {a: { $isoDayOfWeek: { $dateToString: { date: { $toDate: { $arrayToObject: [[[],['$obj.obj.obj.str',{ $substr: ["XSS Consultant Canyon",6,13] }],[38681,'$obj.obj.obj.num'],['$str'],['$obj.num',68092,'$obj.obj.num']]] } } } } }, _id: 0}}],

        [{$project: {a: { $concatArrays: [[30186],[],["transmitting teal purple",'$obj.obj.obj.str']] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[24180],'$num'] }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: new Date("2018-09-06T10:48:32.064Z"),onNull: '$obj.obj.str'} }, _id: 0}}],

        [{$project: {a: { $second: { $dateFromString: {dateString: "2018-09-06T12:55:10.864Z",format: "%G-%Z-%w-%Z-%Y-%H-%S-%V-%Z",onError: { $toString: { $filter: {input: [{ $toUpper: "end-to-end" }],as: 'carol',cond: { $ne: [{ $arrayToObject: [[[],[],[{ $floor: 94714 }]]] },{ $dateToParts: { date: { $toDate: { $arrayElemAt: [['$$carol',{ $toLower: { $dateToString: {date: new Date("2018-09-06T12:21:03.147Z"),timezone: "America/Argentina/ComodRivadavia",onNull: { $arrayToObject: [[{k: "turquoise Passage RAM",v: '$$carol'},{k: "Flats",v: "e-tailers Assistant"}]] }} } }],'$obj.obj.obj.num'] } } } }] }} } }} } }, _id: 0}}],

        [{$project: {a: { $dateToParts: { date: { $dateFromParts: {year: { $pow: ['$obj.obj.obj.num',48607] },day: { $cmp: [{ $isoWeekYear: { $dayOfYear: { $week: { $isoDayOfWeek: { $week: { $isoDayOfWeek: { $year: { $isoWeek: { $isoWeek: { $hour: { $dateToString: {date: new Date("2018-09-06T05:05:26.904Z"),format: "%G-%Y-%m-%w"} } } } } } } } } } } },{ $arrayElemAt: [[{ $substr: [{ $toLower: "input auxiliary invoice" },0,3] }],'$obj.obj.obj.num'] }] },minute: { $indexOfArray: [{ $objectToArray: '$obj.obj.obj.obj' },{ $arrayToObject: [[[],[]]] },1] },second: { $subtract: [{ $multiply: [37084] },3620] },millisecond: { $divide: [81974,'$obj.obj.obj.num'] },timezone: "Asia/Tel_Aviv"} } } }, _id: 0}}],

        [{$project: {a: { $substr: ["mobile Security",2,6] }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [["Proactive open-source","platforms bluetooth"],[]],useLongestLength: true,defaults: [74318]} }, _id: 0}}],

        [{$project: {a: { $trim: { input: "Electronics Wooden Chad" } }, _id: 0}}],

        [{$project: {a: { $month: { $week: { $second: { $isoWeek: { $month: { $dateFromParts: {year: { $sqrt: { $cmp: [{ $map: {input: ["Music navigate"],as: 'eudora',in: { $size: [[]] }} },{ $concatArrays: [['$obj.obj.obj.num',88838,70168,'$obj.obj.num'],[5093],[],['$obj.str',{ $substrCP: ["Health",15,17] }]] }] } },day: { $add: [] },minute: { $subtract: [{ $floor: '$obj.num' },11779] },second: { $log: [28295,'$obj.obj.obj.num'] }} } } } } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],[{ $toLower: '$obj.obj.str' }]]] }, _id: 0}}],

        [{$project: {a: { $dateToParts: {date: { $millesecond: { $dayOfWeek: { $dayOfYear: '$obj.obj.obj.date' } } },timezone: "America/Thunder_Bay"} }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [['$obj.num','$obj.obj.obj.num',1217],['$obj.obj.obj.str']],defaults: [66611]} }, _id: 0}}],

        [{$project: {a: { $dateFromString: {dateString: "2018-09-06T00:58:14.234Z",timezone: "America/Rosario"} }, _id: 0}}],

        [{$project: {a: { $dateFromString: {dateString: "2018-09-06T14:59:23.063Z",format: "%w-%m-%z-%V-%%-%M-%Y-%d-%m-%%",timezone: "Europe/Monaco",onNull: { $arrayElemAt: [['$obj.obj.obj.num'],6469] }} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["Towels revolutionary"],19514] }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: { $dateToParts: {date: { $dateFromString: {dateString: "2018-09-06T19:25:00.843Z",timezone: "Asia/Aden",onNull: '$obj.obj.obj.str'} },iso8601: false} },format: "%G-%z-%V-%d-%S-%m-%Y-%M-%m-%z-%H",timezone: "America/Creston"} }, _id: 0}}],

        [{$project: {a: { $substr: [{ $toLower: '$obj.obj.obj.str' },20,6] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[["Chief Jordanian Dinar",'$obj.obj.str'],[],[],[],['$num'],[]]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["Rubber navigating",{ $concat: ['$obj.obj.obj.str','$obj.obj.obj.str'] }],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $concatArrays: [[66863],['$obj.obj.obj.num',{ $mod: [5603,'$obj.obj.num'] },38273],[{ $ltrim: { input: '$obj.obj.obj.str' } }],['$obj.obj.str',"Marketing",'$obj.obj.obj.str',{ $substrCP: ["Pants back-end knowledge user",10,8] }]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.str',"Switchable optical deposit",'$obj.obj.obj.str',{ $toLower: "Wisconsin auxiliary" },'$obj.obj.str'],86509] }, _id: 0}}],

        [{$project: {a: { $rtrim: {input: '$str',chars: { $toString: { $arrayToObject: [[['$obj.obj.num',{ $ceil: 3498 },'$obj.num'],['$obj.str','$obj.obj.str'],[{ $trim: { input: "background Cotton" } }],[{ $toString: { $dateFromString: {dateString: "2018-09-06T04:09:39.870Z",format: "%w-%d-%L-%u-%z-%V"} } }],[]]] } }} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["cultivate FTP Handmade Plastic Chair"],{ $sqrt: '$obj.obj.num' }] }, _id: 0}}],

        [{$project: {a: { $second: { $dateToString: { date: '$date' } } }, _id: 0}}],

        [{$project: {a: { $ltrim: {input: "radical Function-based stable",chars: { $concat: ['$obj.obj.obj.str',{ $substr: ["Hawaii",5,10] }] }} }, _id: 0}}],

        [{$project: {a: { $dayOfWeek: { $dateToParts: {date: { $dateToString: {date: new Date("2018-09-06T11:03:27.056Z"),timezone: "Europe/Isle_of_Man"} },timezone: "Etc/GMT+3"} } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["deposit Grenada"],3155] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$obj.obj.obj.str',{ $trim: {input: '$obj.obj.str',chars: "metrics Rhode Island reboot"} }],['$obj.obj.obj.num'],[{ $dateToString: {date: new Date("2018-09-06T04:45:32.175Z"),format: "%Z-%Z-%V-%%-%L-%Y-%V"} },{ $toString: { $hour: { $dayOfMonth: { $month: { $millesecond: { $week: { $second: { $dayOfYear: { $toDate: { $arrayToObject: [[{k: "District",v: true}]] } } } } } } } } } },"Handcrafted Steel Computer"],[],['$str'],[]]] }, _id: 0}}],

        [{$project: {a: { $toUpper: { $toUpper: "Rubber" } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $rtrim: { input: "Communications" } }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj.obj' }, _id: 0}}],

        [{$project: {a: { $minute: { $week: { $isoDayOfWeek: { $dateFromParts: {year: { $trunc: 52646 },hour: { $multiply: [22766] }} } } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[99432],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$obj.obj.str',{ $substr: ["European Unit of Account 17(E.U.A.-17)",2,13] }],['$obj.obj.obj.num'],[],[]]] }, _id: 0}}],

        [{$project: {a: { $concatArrays: [[{ $toLower: { $substrCP: ["hack experiences",13,6] } },'$obj.str'],[],['$obj.num',72139,'$obj.num','$obj.obj.obj.num'],["XML Fantastic Steel Shoes Isle of Man",'$obj.str'],[16873],[{ $dateToString: {date: { $dayOfYear: { $month: { $week: { $dateToParts: {date: { $hour: { $isoDayOfWeek: { $isoWeekYear: { $dateFromString: { dateString: "2018-09-05T22:47:36.009Z" } } } } },timezone: "Chile/EasterIsland",iso8601: true} } } } },timezone: "Etc/GMT-4"} }],['$num',737,46510]] }, _id: 0}}],

        [{$project: {a: { $concatArrays: [[],[{ $trim: {input: '$obj.str',chars: "Kip azure"} }],['$obj.obj.date',{ $concat: [] }],[{ $sqrt: 53516 }],["Buckinghamshire Uruguay Grocery"]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],['$obj.num'],[{ $substr: ['$obj.str',20,9] }]]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["Tuna ADP"],83077] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$num'],'$num'] }, _id: 0}}],

        [{$project: {a: { $rtrim: { input: "solutions" } }, _id: 0}}],

        [{$project: {a: { $substrCP: ['$obj.obj.str',16,6] }, _id: 0}}],

        [{$project: {a: { $minute: { $dayOfYear: { $isoDayOfWeek: { $dateToParts: {date: { $hour: '$obj.obj.obj.date' },timezone: "Asia/Manila",iso8601: true} } } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.obj.str',{ $substr: ["Radial Buckinghamshire Bedfordshire",8,19] }],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[73882],["global"],[],[{ $substrBytes: [{ $trim: {input: '$obj.str',chars: { $toUpper: "card USB" }} },7,6] }],['$obj.num','$obj.obj.obj.num',97558]]] }, _id: 0}}],

        [{$project: {a: { $reverseArray: [[]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: new Date("2018-09-06T18:20:29.592Z"),format: "%d-%U-%d-%S-%w-%S-%j-%j-%u-%u",onNull: { $arrayToObject: [[{k: "Shoes navigating Beauty",v: false}]] }} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Small bus",v: 3166},{k: "Architect Florida JBOD",v: '$obj.str'}]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "workforce wireless",v: 13226}]] }, _id: 0}}],

        [{$project: {a: { $rtrim: {input: "invoice sky blue empowering",chars: { $substr: ['$obj.str',13,3] }} }, _id: 0}}],

        [{$project: {a: { $rtrim: {input: { $toString: { $ltrim: {input: { $ltrim: { input: { $concat: ["web services Reduced withdrawal",'$obj.obj.str'] } } },chars: "Junctions Metal Station"} } },chars: { $dateToString: {date: '$obj.date',format: "%Z-%U-%S-%m-%S-%U-%Z-%m-%L-%S-%j",timezone: "Chile/Continental"} }} }, _id: 0}}],

        [{$project: {a: { $concatArrays: [[],['$obj.obj.obj.str'],[88594]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.obj.str',"Engineer","Communications"],'$num'] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],77262] }, _id: 0}}],

        [{$project: {a: { $dayOfYear: { $week: { $second: { $dateFromParts: {year: { $exp: '$obj.num' },month: { $mod: [82018,3715] },day: { $divide: ['$obj.obj.obj.num','$obj.num'] },hour: 81589,minute: { $add: [] },millisecond: { $floor: '$num' },timezone: "Africa/Malabo"} } } } }, _id: 0}}],

        [{$project: {a: { $month: { $dateFromParts: {isoWeekYear: { $floor: 17491 },hour: { $indexOfArray: [{ $objectToArray: '$obj.obj.obj' },{ $arrayToObject: [[{k: "Refined",v: { $dayOfYear: { $dateFromString: {dateString: "2018-09-06T18:52:05.346Z",onNull: '$obj.obj.str'} } }}]] },13] },timezone: "America/Costa_Rica"} } }, _id: 0}}],

        [{$project: {a: { $toDate: { $concatArrays: [[],['$str'],["programming Investment Account Avon",{ $substrCP: [{ $rtrim: {input: "Handmade Rubber Towels",chars: '$obj.str'} },17,12] },'$obj.obj.obj.str'],['$num']] } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.str',"synergy Frozen"],'$num'] }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [["Maryland withdrawal Lead",'$str'],[{ $concat: [] },{ $substrCP: ["Shoes Direct explicit",8,20] }]],useLongestLength: false,defaults: [new Date("2018-09-06T13:11:31.569Z"),/c(?:lient\-server|ompress)|blue|Avon/]} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Haven quantifying",v: '$obj.str'}]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Wooden programming upward-trending",v: '$obj.obj.num'}]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$obj.obj.obj.str'],['$str'],[],['$obj.str',"green paradigm olive",{ $substr: ["GB",15,2] }]]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["Factors"],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [['$obj.num'],['$obj.obj.obj.str',"Analyst",'$str','$str']],useLongestLength: false,defaults: [new Date("2018-09-06T02:33:12.122Z")]} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Industrial Director",v: '$obj.str'},{k: "capacitor Borders",v: new Date("2018-09-06T09:37:11.702Z")}]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["vertical Shoes"],57305] }, _id: 0}}],

        [{$project: {a: { $toDate: { $arrayElemAt: [[],37798] } }, _id: 0}}],

        [{$project: {a: { $isoDayOfWeek: { $month: { $isoWeekYear: { $week: { $dateToString: {date: '$date',format: "%u-%j-%H-%m-%M-%Z-%V-%M-%Z-%Z",timezone: "America/Dawson_Creek"} } } } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[["generating"],[],[],[],['$obj.str',{ $toLower: '$obj.obj.str' }]]] }, _id: 0}}],

        [{$project: {a: { $minute: { $isoWeek: { $dayOfWeek: { $dayOfMonth: { $hour: { $dayOfMonth: { $dayOfYear: { $millesecond: { $toDate: { $reverseArray: [[66472]] } } } } } } } } } }, _id: 0}}],

        [{$project: {a: { $dayOfMonth: { $week: { $dayOfWeek: { $isoDayOfWeek: { $month: { $toDate: { $substrCP: [{ $trim: { input: { $toUpper: '$obj.obj.str' } } },11,13] } } } } } } }, _id: 0}}],

        [{$project: {a: { $dateFromParts: {isoWeekYear: { $divide: [89251,48501] },isoWeek: { $mod: ['$num',47859] },isoDayOfWeek: { $exp: '$obj.obj.obj.num' },hour: { $divide: ['$obj.obj.obj.num','$obj.obj.obj.num'] },second: { $indexOfArray: [{ $objectToArray: '$obj.obj' },{ $substrCP: ["Intelligent",11,11] },8] },millisecond: { $size: [[]] }} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $substrBytes: ["violet solid state",16,13] },'$obj.obj.obj.str'],88514] }, _id: 0}}],

        [{$project: {a: { $filter: {input: [{ $substrBytes: ["Configuration",20,7] },"RAM Program Illinois",{ $substr: ['$obj.obj.obj.str',3,1] }],cond: { $eq: [{ $arrayToObject: [[{k: "mobile Cheese Cross-platform",v: 41521}]] },{ $ltrim: { input: '$obj.obj.str' } }] }} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "integrated Mississippi Republic of Korea",v: '$obj.obj.obj.date'}]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Auto Loan Account matrices",v: { $substr: ['$obj.obj.obj.str',20,15] }},{k: "grey Checking Account",v: 59226}]] }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: { $dateFromString: {dateString: "2018-09-06T06:18:51.302Z",onNull: "Swaziland Practical deposit"} },format: "%u-%Y-%Z-%Y-%d-%Y-%M-%M-%%"} }, _id: 0}}],

        [{$project: {a: { $year: { $month: { $minute: { $toDate: { $zip: {inputs: [[],[46367,'$obj.obj.num','$obj.obj.obj.num'],["e-business Circle Borders",'$obj.str'],['$obj.obj.obj.str','$obj.obj.str']],useLongestLength: true,defaults: [false,new Date("2018-09-06T11:30:23.132Z"),{}]} } } } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "mobile Handcrafted Concrete Salad",v: "Credit Card Account Home"},{k: "Distributed Georgia Senior",v: true}]] }, _id: 0}}],

        [{$project: {a: { $toLower: "Research Unbranded Wooden Cheese Universal" }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $dayOfYear: { $isoWeekYear: { $dayOfWeek: { $dayOfMonth: { $second: { $toDate: { $arrayToObject: [[{k: "Supervisor Money Market Account synergize",v: 67960}]] } } } } } } }, _id: 0}}],

        [{$project: {a: { $toString: { $arrayElemAt: [[74570,'$obj.num','$obj.obj.obj.num'],15226] } }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj' }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[{ $substrBytes: ['$obj.obj.obj.str',10,19] },"Direct transmitter"],['$obj.str',"Anguilla fuchsia"],[90322,'$num'],['$obj.obj.obj.num']]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["e-business Georgia",{ $toString: { $arrayToObject: [[[{ $toUpper: '$str' }],['$num'],['$obj.obj.obj.str',"solid state models","Credit Card Account",'$obj.obj.str']]] } }],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $range: [18,13,14] }, _id: 0}}],

        [{$project: {a: { $isoWeek: { $second: { $minute: { $dateFromParts: {isoWeekYear: { $size: [[]] },isoWeek: { $floor: '$obj.obj.obj.num' },isoDayOfWeek: { $trunc: '$obj.obj.obj.num' },second: { $log10: 90310 },millisecond: { $indexOfArray: [{ $concatArrays: [["Grocery blue",'$obj.obj.obj.str'],['$obj.str',{ $substr: ['$str',18,0] }],[8419],[],[],["Stand-alone",{ $substrCP: ["plum",7,1] }]] },{ $dateToString: {date: new Date("2018-09-06T09:36:48.067Z"),onNull: "Rupiah invoice hack"} },5] }} } } } }, _id: 0}}],

        [{$project: {a: { $dateToParts: { date: { $dayOfYear: { $dayOfMonth: { $hour: { $dayOfMonth: { $dateToString: {date: '$obj.obj.obj.date',timezone: "Brazil/DeNoronha"} } } } } } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Circles Wisconsin invoice",v: '$str'},{k: "USB",v: true}]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["indexing Developer Jamaican Dollar"],77978] }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [[],["Mongolia"],[],['$obj.str'],[{ $trim: { input: '$obj.str' } },'$obj.str',"circuit Norway",'$obj.obj.str']],useLongestLength: false} }, _id: 0}}],

        [{$project: {a: { $toLower: { $substr: ["deposit lavender Designer",15,19] } }, _id: 0}}],

        [{$project: {a: { $substr: [{ $rtrim: { input: "regional" } },14,20] }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [],defaults: [["Manager Automated"]]} }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: new Date("2018-09-06T17:39:39.913Z"),format: "%S-%H-%M-%m-%d-%j-%M-%U-%M-%%-%u-%%",timezone: "Asia/Aden"} }, _id: 0}}],

        [{$project: {a: { $millesecond: { $isoDayOfWeek: { $dayOfWeek: { $dayOfMonth: { $month: { $minute: { $dateToString: {date: '$obj.date',format: "%d-%V-%j-%d-%z-%U-%G",timezone: "Africa/Dar_es_Salaam"} } } } } } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.num'],66736] }, _id: 0}}],

        [{$project: {a: { $dateToString: { date: '$obj.obj.obj.date' } }, _id: 0}}],

        [{$project: {a: { $dateFromParts: {isoWeekYear: { $indexOfArray: [{ $range: [11,15,7] },{ $concatArrays: [[95434],[],[],[18148,'$obj.num']] },1] },isoWeek: { $divide: ['$num',14734] },timezone: "America/Shiprock"} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],9551] }, _id: 0}}],

        [{$project: {a: { $substr: ["Small Arkansas",1,1] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[14516],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: { $dateFromString: {dateString: "2018-09-06T11:53:18.129Z",format: "%%-%u-%w-%G-%j-%S-%z-%S-%H-%S-%M",timezone: "Europe/Budapest"} },onNull: { $isoWeekYear: { $isoWeek: { $dayOfMonth: { $dayOfYear: '$obj.obj.obj.date' } } } }} }, _id: 0}}],

        [{$project: {a: { $substrCP: [{ $concat: ["Savings Account",{ $toString: { $arrayToObject: [[{k: "static",v: '$obj.str'}]] } },"technologies"] },18,11] }, _id: 0}}],

        [{$project: {a: { $trim: { input: '$obj.obj.obj.str' } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],95263] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[{ $rtrim: { input: '$obj.obj.str' } },"Prairie Manager Awesome"],['$obj.num',16742],[{ $abs: 16673 },'$obj.num']]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Cambridgeshire Well",v: true}]] }, _id: 0}}],

        [{$project: {a: { $substrCP: ['$str',11,8] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Niger",v: '$obj.str'},{k: "sensor mission-critical Club",v: '$num'}]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $dateToString: {date: '$obj.obj.date',format: "%M-%d-%j-%d-%z-%m-%m-%M-%S",timezone: "US/Alaska",onNull: "Ethiopia SSL"} }],57352] }, _id: 0}}],

        [{$project: {a: { $substr: [{ $ltrim: { input: "Uzbekistan Land Executive" } },19,1] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Avon",v: "Nuevo Sol algorithm program"},{k: "Shoes schemas",v: '$obj.date'}]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $substrCP: [{ $rtrim: { input: "bypassing bifurcated Tunisian Dinar" } },20,4] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$obj.str',{ $trim: { input: { $substr: [{ $toString: { $arrayToObject: [[["Fantastic Concrete Chicken"],[]]] } },20,17] } } }],[],[85981]]] }, _id: 0}}],

        [{$project: {a: { $isoDayOfWeek: { $month: { $dateToString: {date: new Date("2018-09-06T06:47:14.326Z"),format: "%U-%M-%d-%Y-%S-%Y-%Z-%m-%Y",onNull: { $arrayToObject: [[{k: "communities",v: 9301}]] }} } } }, _id: 0}}],

        [{$project: {a: { $toUpper: '$obj.str' }, _id: 0}}],

        [{$project: {a: { $concat: [{ $substr: ['$obj.obj.obj.str',19,9] }] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$obj.obj.obj.num'],['$obj.obj.obj.str']]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.num',98286,26751,'$obj.obj.obj.num','$obj.num'],24404] }, _id: 0}}],

        [{$project: {a: { $toDate: { $reverseArray: [['$obj.obj.obj.str',{ $dateToString: {date: { $dayOfWeek: { $toDate: { $arrayElemAt: [['$obj.obj.num',{ $add: [] }],67238] } } },format: "%Z-%u-%d-%z-%u-%d-%M-%H-%d-%L-%U",onNull: '$obj.str'} }]] } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "structure RSS Gorgeous Cotton Shirt",v: "West Virginia Fresh"}]] }, _id: 0}}],

        [{$project: {a: { $range: [18,14] }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj' }, _id: 0}}],

        [{$project: {a: { $toLower: { $ltrim: { input: '$str' } } }, _id: 0}}],

        [{$project: {a: { $toUpper: '$obj.obj.obj.str' }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[33530,'$obj.obj.obj.num'],[],['$obj.obj.str',"Tasty Cotton Towels Electronics"],[]]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],31822] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],[new Date("2018-09-06T00:44:31.548Z"),true,66650]]] }, _id: 0}}],

        [{$project: {a: { $minute: { $isoWeek: { $month: { $hour: { $isoWeek: { $dayOfWeek: { $second: { $dayOfYear: { $toDate: { $zip: { inputs: [[58554],[{ $substrBytes: ['$obj.str',1,16] },"Incredible Concrete Table"],["supply-chains"],[],[]] } } } } } } } } } } }, _id: 0}}],

        [{$project: {a: { $trim: { input: { $substrCP: [{ $toLower: '$obj.str' },17,1] } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],[42378,49349],[{ $toUpper: "Incredible Rubber Table Grocery black" },{ $toString: { $arrayElemAt: [[],'$obj.obj.obj.num'] } }],["withdrawal"],['$obj.obj.str']]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.num'],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: '$date',format: "%m-%d-%z-%Z-%%-%u-%%-%V",timezone: "Europe/Vatican"} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],[86872,11275],['$obj.obj.str'],[]]] }, _id: 0}}],

        [{$project: {a: { $week: { $dateToParts: {date: { $week: { $dateToString: {date: new Date("2018-09-06T17:59:50.507Z"),onNull: '$obj.str'} } },timezone: "Asia/Chita"} } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.str'],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $concat: [{ $toLower: '$obj.obj.obj.str' }] }, _id: 0}}],

        [{$project: {a: { $filter: {input: [],as: 'anissa',cond: { $or: ['$$anissa'] }} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[79121,'$obj.num'],[{ $floor: '$obj.obj.num' }],[]]] }, _id: 0}}],

        [{$project: {a: { $concatArrays: [[],['$str',{ $substrCP: ["deposit",14,13] }],["JBOD models",{ $toString: { $arrayElemAt: [[],33973] } },"unleash Credit Card Account",{ $substr: ["Senior portals Strategist",15,9] }],[{ $add: [{ $ln: '$obj.obj.num' },'$num'] }],[]] }, _id: 0}}],

        [{$project: {a: { $reverseArray: [[96517,'$num']] }, _id: 0}}],

        [{$project: {a: { $reverseArray: [['$obj.obj.obj.str']] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "exuding",v: { $year: { $dateFromParts: {isoWeekYear: { $multiply: [] },isoWeek: { $pow: [10200,21882] },isoDayOfWeek: { $pow: [46177,'$obj.obj.obj.num'] },hour: { $ceil: 55407 },second: { $floor: '$obj.num' },timezone: "Asia/Dili"} } }}]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["Mobility payment generate",{ $dateToString: { date: { $isoWeekYear: { $dayOfWeek: { $dayOfYear: { $second: { $month: { $millesecond: { $toDate: { $arrayToObject: [[{k: "Wooden",v: '$num'}]] } } } } } } } } } }],'$num'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "cross-platform Investment Account Markets",v: { $ltrim: { input: '$str' } }},{k: "Keyboard",v: 84224}]] }, _id: 0}}],

        [{$project: {a: { $concat: ['$str','$obj.obj.obj.str'] }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [[{ $substr: ["XSS matrix Bedfordshire",2,13] },'$obj.str',"integrated Viaduct Beauty"],['$obj.num',31656],["copying"],[]],useLongestLength: false,defaults: [[41143],76119]} }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj' }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Platinum",v: '$obj.obj.obj.num'},{k: "Arizona web-readiness",v: '$obj.str'}]] }, _id: 0}}],

        [{$project: {a: { $ltrim: { input: "Guarani" } }, _id: 0}}],

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
