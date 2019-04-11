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
        return coll.insert({_id: 4393,num: 82886,date: new Date("2018-09-06T09:25:49.629Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 4394,str: "Generic Frozen Cheese aggregate Concrete",num: 62761,date: new Date("2018-09-06T07:07:09.826Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 4395,str: "Garden Rwanda Sports",num: 71829,date: new Date("2018-09-06T12:37:21.741Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 4396,str: "Administrator Tugrik",num: 99323,date: new Date("2018-09-06T18:14:07.360Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 4397,str: "Wooden",num: 83702,date: new Date("2018-09-06T19:43:04.892Z"),array: ["Intelligent Up-sized","Keyboard",71071,new Date("2018-09-06T14:24:28.648Z"),"hacking Shore Ergonomic",42916,new Date("2018-09-06T07:11:08.708Z"),[new Date("2018-09-06T00:44:55.086Z")],new Date("2018-09-05T21:18:33.600Z"),[],51218,{_id: 4398,str: "transmitting Awesome Wooden Hat",num: 22659,date: new Date("2018-09-05T20:08:57.550Z"),array: [],obj: {}},48579],obj: {_id: 4399,str: "card",num: 29101,obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 4400,str: "salmon SMS Avon",num: 98017,date: new Date("2018-09-05T22:14:29.232Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 4401,str: "Accounts Technician",num: 56208,date: new Date("2018-09-06T09:30:42.906Z"),array: [],obj: {_id: 4402,num: 41219,date: new Date("2018-09-05T23:50:50.159Z"),array: [],obj: {_id: 4403,str: "Mountain IB",num: 31916,date: new Date("2018-09-06T08:55:03.028Z"),obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 4404,str: "non-volatile clicks-and-mortar",num: 38195,date: new Date("2018-09-06T05:59:46.940Z"),array: ["internet solution",new Date("2018-09-06T02:10:32.868Z"),[new Date("2018-09-06T07:12:10.637Z")],{_id: 4405,str: "Oregon Solutions optical",num: 58477,array: [],obj: {}},34830,"Generic generating",92777,"CSS",84604,"Keyboard",{_id: 4406,str: "XSS extend",num: 85135,date: new Date("2018-09-06T09:01:00.799Z"),array: [],obj: {}},91933]});
    },

    function(coll) {
        return coll.insert({_id: 4407,str: "Investment Account Turkey",num: 34615,date: new Date("2018-09-06T11:52:10.969Z"),array: [new Date("2018-09-06T10:37:27.991Z"),"Bike",20585,[5236,["Fresh"]],{_id: 4408,num: 27140,obj: {_id: 4409,str: "Money Market Account",num: 16358,date: new Date("2018-09-06T07:34:35.650Z"),array: [],obj: {}}},new Date("2018-09-05T23:57:38.159Z"),51517,14894,[],new Date("2018-09-06T09:22:28.651Z"),{_id: 4410,str: "artificial intelligence Rustic Rubber Shoes",num: 79536,date: new Date("2018-09-05T23:59:56.305Z"),obj: {}},{_id: 4411,num: 84879,date: new Date("2018-09-05T22:58:25.853Z"),array: ["open-source Upgradable Handmade Wooden Salad"],obj: {_id: 4412,str: "functionalities Credit Card Account",date: new Date("2018-09-06T06:56:28.472Z"),obj: {_id: 4413,num: 51266,date: new Date("2018-09-06T11:34:18.763Z"),array: [],obj: {}}}}]});
    },

    function(coll) {
        return coll.insert({_id: 4414,str: "Reduced Money Market Account",num: 52088,date: new Date("2018-09-06T06:04:53.560Z"),array: [new Date("2018-09-06T05:34:17.597Z"),"overriding","ADP system engine",17103,[{_id: 4415,str: "Cheese Senegal",num: 95780,date: new Date("2018-09-06T09:05:15.864Z"),obj: {}},new Date("2018-09-05T21:34:46.674Z")],{_id: 4416,date: new Date("2018-09-06T16:59:44.375Z"),array: [],obj: {_id: 4417,str: "Savings Account",date: new Date("2018-09-06T05:06:14.042Z"),array: [17367,new Date("2018-09-05T22:25:39.578Z"),52935,"Run bandwidth Garden",{_id: 4418,str: "withdrawal Assistant",num: 3839,date: new Date("2018-09-05T21:44:43.216Z"),array: [],obj: {_id: 4419,str: "synthesize connecting firewall",num: 25515}}],obj: {_id: 4420,num: 14168,array: [],obj: {}}}},62679,[],{_id: 4421,str: "next-generation bypassing IB",date: new Date("2018-09-06T03:24:46.508Z"),array: [new Date("2018-09-06T14:47:25.433Z")]},29075]});
    },

    function(coll) {
        return coll.insert({_id: 4422,str: "Palladium Product Loop",num: 51205,date: new Date("2018-09-05T20:23:00.658Z"),array: [],obj: {_id: 4423,str: "Phased Solutions Manager",num: 94078,date: new Date("2018-09-06T18:59:28.157Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 4424,num: 17396,array: [new Date("2018-09-06T09:58:05.808Z"),88281,new Date("2018-09-06T19:18:22.537Z"),25641,new Date("2018-09-06T09:48:46.659Z"),["solid state innovative e-services",{_id: 4425,str: "Quality-focused circuit core",date: new Date("2018-09-06T04:13:06.104Z"),array: [93703,[19831]],obj: {_id: 4426,str: "superstructure",num: 46743,date: new Date("2018-09-06T04:12:53.130Z"),array: [],obj: {_id: 4427,str: "Refined Soft Keyboard Turkish Lira",num: 10163,array: []}}},54223,new Date("2018-09-06T06:43:09.254Z"),"Designer Tuna","Metal"],"Sleek Wooden Chair application Mall",new Date("2018-09-05T22:07:02.714Z"),"Bedfordshire"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 4428,str: "bypassing",num: 72128,date: new Date("2018-09-06T11:07:48.610Z"),array: [new Date("2018-09-06T04:09:45.744Z"),new Date("2018-09-06T18:32:30.469Z"),"Buckinghamshire",33671,[],"auxiliary",96565,2552,{_id: 4429,str: "Utah",num: 38678,date: new Date("2018-09-05T23:29:15.394Z"),obj: {_id: 4430,str: "Salad generating cyan",date: new Date("2018-09-06T03:05:33.801Z"),array: [],obj: {}}},new Date("2018-09-06T12:50:06.077Z"),"silver",new Date("2018-09-06T16:42:03.871Z"),{_id: 4431,str: "Parkway relationships JSON",num: 36378,array: ["Tasty"],obj: {_id: 4432,date: new Date("2018-09-06T02:00:41.443Z"),array: [],obj: {_id: 4433,obj: {}}}}]});
    },

    function(coll) {
        return coll.insert({_id: 4434,str: "firewall",num: 95106,date: new Date("2018-09-06T08:38:07.463Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 4435,str: "Intelligent Cotton Chips Guyana Armenia",num: 19919,date: new Date("2018-09-06T15:31:15.962Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 4436,str: "HDD synergistic Junctions",num: 84723,date: new Date("2018-09-06T16:27:24.585Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 4437,str: "well-modulated Open-architected",date: new Date("2018-09-06T05:15:41.038Z"),array: ["Forge viral",97193,[],93415,{_id: 4438,str: "embrace Hawaii Baby",num: 18924,date: new Date("2018-09-06T04:17:39.454Z"),array: [],obj: {_id: 4439,str: "Bedfordshire Progressive primary",array: [{_id: 4440,str: "parsing",num: 88124,date: new Date("2018-09-06T08:37:25.442Z"),array: [],obj: {}},new Date("2018-09-06T12:48:48.965Z"),"Soap",12695,new Date("2018-09-06T05:33:46.465Z")],obj: {_id: 4441,num: 19882,obj: {_id: 4442,obj: {}}}}},"Salad interfaces",29347,new Date("2018-09-06T17:55:58.558Z"),new Date("2018-09-06T00:04:06.712Z")]});
    },

    function(coll) {
        return coll.insert({_id: 4443,num: 97189,date: new Date("2018-09-05T21:42:04.046Z"),array: [{_id: 4444,str: "Wooden strategy",num: 56617,date: new Date("2018-09-06T15:10:27.380Z"),obj: {_id: 4445,str: "protocol open-source",num: 25570,date: new Date("2018-09-06T04:02:24.285Z"),obj: {}}},new Date("2018-09-06T11:54:18.481Z"),"Architect Beauty protocol","Open-architected Pizza","middleware",new Date("2018-09-06T10:16:13.671Z"),3609,new Date("2018-09-06T02:30:02.902Z"),[],new Date("2018-09-06T02:56:13.632Z"),4835,[]]});
    },

    function(coll) {
        return coll.insert({_id: 4446,str: "Electronics",num: 87441,date: new Date("2018-09-06T15:36:39.902Z"),array: [9294,new Date("2018-09-06T04:14:55.503Z"),42651,new Date("2018-09-06T12:58:46.480Z"),"Shores Bermudian Dollar (customarily known as Bermuda Dollar) Montana","Home Loan Account","Operations revolutionary quantifying",[{_id: 4447,num: 76138,date: new Date("2018-09-06T09:39:49.208Z"),array: [new Date("2018-09-06T09:23:18.276Z"),new Date("2018-09-06T18:44:06.359Z"),12662,"Borders Chips e-services",new Date("2018-09-05T23:01:29.626Z"),[]],obj: {}},{_id: 4448,num: 22408,date: new Date("2018-09-06T10:21:39.784Z"),obj: {}},46865],{_id: 4449,str: "driver",num: 32339,date: new Date("2018-09-06T16:57:23.590Z"),obj: {_id: 4450,date: new Date("2018-09-06T07:21:42.292Z"),array: []}},new Date("2018-09-06T02:51:08.422Z")]});
    },

    function(coll) {
        return coll.insert({_id: 4451,str: "hard drive Savings Account",num: 27203,date: new Date("2018-09-06T08:39:36.943Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 4452,str: "programming",num: 3707,date: new Date("2018-09-06T02:25:08.886Z"),array: ["Games Tools",81722,"Regional withdrawal Fundamental",new Date("2018-09-05T20:47:09.233Z"),["web-readiness"],new Date("2018-09-06T08:21:34.623Z"),10087,{_id: 4453,str: "ROI interface Table",num: 43095,date: new Date("2018-09-06T01:39:06.237Z"),array: [4419,98184,new Date("2018-09-06T19:34:18.745Z"),new Date("2018-09-06T04:03:03.997Z")],obj: {}},[{_id: 4454,num: 57168,date: new Date("2018-09-06T04:01:36.552Z"),array: [],obj: {_id: 4455,num: 56330,date: new Date("2018-09-06T07:03:10.605Z")}}],"quantifying",18202,new Date("2018-09-06T14:23:34.394Z"),"alarm Product"]});
    },

    function(coll) {
        return coll.insert({_id: 4456,str: "Granite data-warehouse California",num: 71237,date: new Date("2018-09-06T07:40:10.602Z"),array: [],obj: {_id: 4457,str: "alarm withdrawal Zambian Kwacha",num: 39024,array: [new Date("2018-09-05T22:52:32.315Z"),44293,[],27958,new Date("2018-09-06T19:22:30.088Z"),"Identity Guadeloupe",16341,15263],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 4458,str: "Corner Frozen",num: 11403,date: new Date("2018-09-06T16:56:02.480Z"),array: [],obj: {_id: 4459,str: "Steel explicit navigate",num: 76018,date: new Date("2018-09-06T19:40:40.822Z"),array: [new Date("2018-09-06T01:35:39.090Z"),"Future Handcrafted program",44941,26605,"JBOD",new Date("2018-09-06T02:25:13.148Z"),{_id: 4460,str: "mobile Ridges",obj: {_id: 4461,num: 86429,date: new Date("2018-09-06T06:34:21.770Z"),array: [{_id: 4462,str: "models Engineer Direct",num: 85701,date: new Date("2018-09-06T14:12:17.879Z"),obj: {}},[new Date("2018-09-06T05:16:39.215Z")]]}},45854,"Home cross-platform","Lesotho sky blue",4000,new Date("2018-09-05T20:19:24.573Z")]}});
    },

    function(coll) {
        return coll.insert({_id: 4463,str: "capacitor",num: 78460,date: new Date("2018-09-06T01:25:18.350Z"),array: [],obj: {_id: 4464,str: "intermediate",date: new Date("2018-09-06T19:27:35.878Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 4465,str: "Avon Soap",num: 18887,date: new Date("2018-09-06T09:25:21.642Z"),array: ["Pre-emptive Intelligent",84821,new Date("2018-09-06T00:10:58.470Z"),[],14264,[],new Date("2018-09-05T23:56:14.478Z"),"Common","Incredible",[],{_id: 4466,str: "vertical Chief bleeding-edge",num: 87156,date: new Date("2018-09-06T08:10:17.601Z")}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 4467,num: 69018,date: new Date("2018-09-05T23:06:02.370Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 4468,str: "Bosnia and Herzegovina engage productize",num: 46370,date: new Date("2018-09-06T01:51:49.136Z"),array: [{_id: 4469,str: "indigo",num: 59912,date: new Date("2018-09-06T00:21:26.800Z"),array: [90458,88778],obj: {_id: 4470,str: "Gorgeous Plastic Table",num: 51001,array: [new Date("2018-09-06T17:00:38.934Z"),new Date("2018-09-06T11:55:51.829Z")],obj: {}}},new Date("2018-09-06T05:25:29.224Z"),"Handmade","Hat invoice whiteboard",[],{_id: 4471,str: "approach Concrete",date: new Date("2018-09-06T17:20:58.124Z"),obj: {_id: 4472,num: 45270,date: new Date("2018-09-06T14:31:39.041Z"),array: []}},"Buckinghamshire framework",[],"Pizza synthesizing Internal",38139,56049,{_id: 4473,obj: {}}]});
    },

    function(coll) {
        return coll.insert({_id: 4474,str: "Metal",num: 80465,date: new Date("2018-09-06T10:56:42.849Z"),array: ["Unbranded Granite Computer real-time Strategist",39427,new Date("2018-09-06T09:28:07.722Z"),68705,71607,[],"Identity silver Salad",new Date("2018-09-06T04:26:28.443Z"),"paradigms heuristic Turnpike",{_id: 4475,str: "Borders orange",date: new Date("2018-09-05T23:20:04.185Z"),array: [],obj: {}},{_id: 4476,str: "Kuwaiti Dinar hack",num: 63950,date: new Date("2018-09-06T14:41:29.501Z"),array: []},[new Date("2018-09-06T01:27:12.563Z"),{_id: 4477,str: "Savings Account incubate Mauritius Rupee",date: new Date("2018-09-06T06:20:00.598Z"),array: [new Date("2018-09-06T08:56:15.543Z"),"Electronics"],obj: {_id: 4478,num: 44244,obj: {}}}]]});
    },

    function(coll) {
        return coll.insert({_id: 4479,str: "Incredible Cotton Gloves object-oriented infrastructures",num: 84418,date: new Date("2018-09-05T21:47:41.096Z"),array: ["hacking harness Graphic Interface",56188,new Date("2018-09-05T21:47:18.926Z"),"Table",98331,{_id: 4480,str: "Customizable",num: 25943,date: new Date("2018-09-06T05:03:00.672Z"),array: [],obj: {_id: 4481,str: "syndicate Virgin Islands, British",num: 54885,date: new Date("2018-09-06T11:08:37.892Z"),array: [[],{_id: 4482,array: [new Date("2018-09-06T04:22:52.122Z"),new Date("2018-09-06T12:07:56.752Z")],obj: {_id: 4483,str: "invoice",date: new Date("2018-09-05T23:08:36.147Z"),array: [],obj: {}}}],obj: {}}},[],38546,[new Date("2018-09-05T20:44:33.722Z"),"Cotton overriding Auto Loan Account",81205],new Date("2018-09-06T15:39:16.363Z")]});
    },

    function(coll) {
        return coll.insert({_id: 4484,str: "Games",num: 36631,date: new Date("2018-09-06T09:18:21.399Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 4485,str: "Bahamas e-services Nebraska",num: 8886,date: new Date("2018-09-06T16:39:26.247Z"),array: ["Belize Dollar Health","Re-contextualized Harbors",83302,"visionary Fields bi-directional",new Date("2018-09-06T16:30:02.512Z"),new Date("2018-09-06T00:40:56.908Z"),40214,"Visionary Pants collaborative"]});
    },

    function(coll) {
        return coll.insert({_id: 4486,str: "connect",num: 25060,date: new Date("2018-09-05T21:11:27.585Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 4487,str: "deposit protocol Buckinghamshire",num: 58463,date: new Date("2018-09-05T21:20:28.467Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 4488,str: "world-class",num: 5434,date: new Date("2018-09-06T08:29:00.386Z"),array: [{_id: 4489,str: "Home Loan Account Soft info-mediaries",num: 4158,date: new Date("2018-09-06T12:18:03.420Z"),array: [new Date("2018-09-06T16:39:45.692Z")],obj: {}},39743,"Gourde US Dollar",81000,96771,new Date("2018-09-06T12:06:00.251Z"),"Facilitator Global Unbranded",new Date("2018-09-06T18:22:35.665Z"),[],new Date("2018-09-06T14:12:12.958Z"),"Profound Investment Account",45939,new Date("2018-09-06T17:01:07.795Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 4490,str: "Consultant Keyboard Georgia",num: 50940,date: new Date("2018-09-05T22:38:54.706Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 4491,str: "evolve",num: 83882,date: new Date("2018-09-05T20:28:24.617Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 4492,str: "Granite",num: 11981,date: new Date("2018-09-06T08:17:50.388Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 4493,str: "Oklahoma protocol client-driven",num: 92924,date: new Date("2018-09-06T18:31:13.612Z"),array: [66348,40611,"online Heights",[],new Date("2018-09-06T07:37:27.096Z"),new Date("2018-09-06T14:04:13.605Z"),"Accountability",{_id: 4494,num: 33869,date: new Date("2018-09-06T18:49:30.846Z"),obj: {}},38847,42928,"Web indigo","Group project"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 4495,str: "Mill panel Down-sized",num: 29262,date: new Date("2018-09-06T06:51:05.368Z"),array: [],obj: {_id: 4496,str: "intangible Colorado",num: 42579,date: new Date("2018-09-06T12:04:22.315Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 4497,str: "Pre-emptive",num: 5919,date: new Date("2018-09-06T08:14:37.531Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 4498,str: "deposit",num: 30432,date: new Date("2018-09-06T17:35:12.632Z"),array: ["Michigan withdrawal",new Date("2018-09-06T11:01:30.495Z"),70158,new Date("2018-09-06T15:45:29.705Z"),64828,"bandwidth-monitored",new Date("2018-09-06T03:29:41.524Z"),{_id: 4499,date: new Date("2018-09-05T23:20:29.053Z"),array: [],obj: {_id: 4500,str: "Web",num: 16793,obj: {}}},["web-readiness extranet Bedfordshire",[new Date("2018-09-06T15:19:08.007Z"),{_id: 4501,str: "enable Bike",num: 19703,date: new Date("2018-09-06T07:45:35.114Z"),array: []}]],{_id: 4502,str: "invoice Implementation",num: 32035},85412,42107,[{_id: 4503,date: new Date("2018-09-06T07:37:35.549Z"),array: ["secondary Kyat hack"],obj: {}},75756,"experiences Awesome Steel Chips neural-net"]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 4504,str: "target Licensed black",num: 34522,date: new Date("2018-09-05T23:20:56.624Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 4505,str: "Fresh Unbranded Wooden Tuna",num: 24913,date: new Date("2018-09-05T21:04:56.979Z"),array: [48177,new Date("2018-09-06T00:00:00.370Z"),"Internal",43440,28180,[],new Date("2018-09-06T06:42:32.733Z"),new Date("2018-09-06T07:54:42.294Z"),new Date("2018-09-06T00:19:24.527Z"),{_id: 4506,str: "Borders",num: 28862,date: new Date("2018-09-06T15:57:58.448Z"),array: ["extranet Nevada Algerian Dinar",new Date("2018-09-05T20:24:06.243Z")],obj: {}},28369]});
    },

    function(coll) {
        return coll.insert({_id: 4507,num: 53523,date: new Date("2018-09-06T16:09:33.852Z"),array: [],obj: {_id: 4508,num: 56660,array: [3671,37499,45269,{_id: 4509,str: "Personal Loan Account application",date: new Date("2018-09-06T00:24:09.502Z"),obj: {}},"Graphic Interface",[new Date("2018-09-06T17:59:57.591Z"),"Incredible Unbranded Plastic Soap Algeria","California Practical superstructure",62408],new Date("2018-09-06T17:19:30.405Z"),"Central"],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 4510,str: "Intelligent Concrete Fish Senegal",date: new Date("2018-09-06T12:11:43.332Z"),array: ["Outdoors synergy Extension",new Date("2018-09-06T05:06:20.858Z"),34338,"orchestrate generate",new Date("2018-09-06T19:43:20.995Z"),"Computers Coordinator Officer",43030,[],[new Date("2018-09-06T08:03:39.628Z"),47317],[43842,90464,{_id: 4511,str: "recontextualize Pants Belize Dollar",num: 10263,date: new Date("2018-09-06T06:39:59.853Z"),array: [],obj: {}}],new Date("2018-09-06T16:09:34.203Z"),new Date("2018-09-06T19:48:12.382Z"),"Synchronised synthesize Som"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 4512,str: "Rand Unbranded",num: 65585,array: [[],"value-added",new Date("2018-09-05T23:24:01.980Z"),new Date("2018-09-06T14:50:44.594Z"),94104,{_id: 4513,num: 65964,date: new Date("2018-09-06T04:19:24.231Z"),array: [],obj: {}},82494,"Security zero tolerance",new Date("2018-09-06T00:10:59.192Z"),new Date("2018-09-06T09:20:08.064Z"),[],13341,"Jewelery",new Date("2018-09-06T11:38:43.018Z")],obj: {_id: 4514,str: "Multi-tiered",num: 31518,date: new Date("2018-09-06T01:53:01.973Z"),array: [55477]}});
    },

    function(coll) {
        return coll.insert({_id: 4515,str: "Harbor Gloves bleeding-edge",num: 50751,date: new Date("2018-09-06T15:22:50.569Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 4516,str: "hack Awesome Rubber Chips tan",num: 63241,date: new Date("2018-09-06T07:59:36.844Z"),array: [new Date("2018-09-06T12:46:43.420Z"),43639,"bluetooth bandwidth Freeway",[],new Date("2018-09-06T11:35:18.650Z"),new Date("2018-09-06T07:22:41.010Z"),16401,42448,"Interactions",new Date("2018-09-06T03:26:05.364Z"),[{_id: 4517,str: "TCP",date: new Date("2018-09-06T17:11:21.958Z"),array: ["deposit Bedfordshire Incredible Plastic Shirt",40695,"invoice Visionary installation",46430]},{_id: 4518,num: 89476,date: new Date("2018-09-05T22:32:13.675Z"),array: [],obj: {}}],8492],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 4519,str: "Customer",num: 28213,date: new Date("2018-09-05T22:07:26.967Z"),array: [],obj: {_id: 4520,str: "Small Plastic",num: 63668,date: new Date("2018-09-06T06:14:43.529Z"),array: [{_id: 4521,date: new Date("2018-09-05T23:05:40.711Z"),array: [80920,new Date("2018-09-06T01:47:24.263Z"),"Bosnia and Herzegovina intermediate",[new Date("2018-09-06T12:20:13.367Z"),"Handcrafted Junctions",{_id: 4522,str: "Intelligent Officer Zimbabwe Dollar",num: 93638,array: [],obj: {_id: 4523,str: "Distributed TCP",num: 51143,date: new Date("2018-09-06T15:32:10.380Z")}}],26465],obj: {_id: 4524,str: "generating Bedfordshire",date: new Date("2018-09-06T06:45:49.831Z")}},58726,new Date("2018-09-06T02:51:29.007Z"),"Malawi",62279,"Small Granite Chair context-sensitive",[["Practical Soft Computer",88215],new Date("2018-09-06T16:51:43.042Z"),{_id: 4525,date: new Date("2018-09-06T13:22:09.969Z"),array: []},"Kwanza Grove"],{_id: 4526,num: 43492,date: new Date("2018-09-05T20:51:35.576Z"),obj: {}}],obj: {_id: 4527,str: "Generic",obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 4528,str: "mint green",num: 31095,date: new Date("2018-09-05T22:57:50.451Z"),array: [50854,"compressing engage",new Date("2018-09-05T21:03:38.784Z"),49118,36857,9125,"solid state Legacy synergize",[],new Date("2018-09-06T14:10:31.548Z"),new Date("2018-09-06T10:48:15.994Z"),{_id: 4529,str: "sensor Corners",num: 64218,date: new Date("2018-09-06T18:52:42.806Z"),obj: {_id: 4530,str: "deposit Small",num: 42631,date: new Date("2018-09-06T00:52:11.141Z"),array: []}},{_id: 4531,str: "withdrawal program",num: 48065,date: new Date("2018-09-06T04:36:05.745Z"),obj: {}}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 4532,str: "Ports",num: 91681,date: new Date("2018-09-06T07:29:26.340Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 4533,str: "24/365",num: 8012,date: new Date("2018-09-06T16:52:22.958Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 4534,str: "Awesome Cotton Hat",num: 73318,date: new Date("2018-09-06T16:10:18.766Z"),array: [{_id: 4535,str: "Intelligent functionalities robust",num: 57072,date: new Date("2018-09-06T01:54:10.603Z"),array: []},new Date("2018-09-05T20:17:57.637Z"),"orchestration Lead",new Date("2018-09-06T08:52:15.356Z"),49638,88218,{_id: 4536,num: 17841,date: new Date("2018-09-06T02:27:35.035Z"),array: [34808,"Cambridgeshire EXE real-time","Borders",new Date("2018-09-06T03:24:52.117Z")],obj: {_id: 4537,str: "dot-com invoice synergy",num: 61730,obj: {}}},60990,[],[]]});
    },

    function(coll) {
        return coll.insert({_id: 4538,str: "extensible data-warehouse",num: 84902,date: new Date("2018-09-06T04:31:17.417Z"),array: [],obj: {_id: 4539,str: "Computer Ireland vortals",num: 74240,date: new Date("2018-09-06T00:16:32.143Z"),array: [new Date("2018-09-05T23:07:14.392Z"),73737,62624,new Date("2018-09-06T11:34:44.176Z"),"model",{_id: 4540,num: 55425,array: [new Date("2018-09-05T22:29:31.436Z"),"world-class Handmade Idaho"],obj: {}},["Trinidad and Tobago Dollar Practical"],"Rapids bypassing Baby",{_id: 4541,str: "Executive Ergonomic",date: new Date("2018-09-06T05:37:34.458Z"),array: []},65256,{_id: 4542,str: "generate",array: [[],"Nevada compressing infomediaries"]},{_id: 4543,str: "transparent",num: 66913,date: new Date("2018-09-05T20:28:56.052Z"),obj: {_id: 4544,str: "Afghani",obj: {_id: 4545,str: "Salad",num: 90515,date: new Date("2018-09-06T00:47:47.990Z")}}}],obj: {_id: 4546,num: 65348}}});
    },

    function(coll) {
        return coll.insert({_id: 4547,str: "overriding",num: 23904,date: new Date("2018-09-06T01:01:45.544Z"),obj: {_id: 4548,str: "invoice",date: new Date("2018-09-06T14:06:25.917Z"),array: [30761,18111,new Date("2018-09-06T02:27:48.440Z"),"Program Forges",new Date("2018-09-06T03:29:42.399Z"),"Saint Lucia relationships Lead",{_id: 4549,str: "Directives GB Jewelery",num: 59910,date: new Date("2018-09-06T13:15:33.055Z"),array: [],obj: {}},53100,new Date("2018-09-05T23:14:42.315Z"),{_id: 4550,num: 19979,date: new Date("2018-09-05T23:39:54.729Z"),array: [],obj: {}},"firewall"],obj: {_id: 4551,str: "networks",num: 37900,date: new Date("2018-09-06T08:54:00.397Z"),array: []}}});
    },

    function(coll) {
        return coll.insert({_id: 4552,str: "wireless turn-key sensor",num: 1124,date: new Date("2018-09-06T05:59:01.812Z"),array: [],obj: {_id: 4553,str: "Generic",obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 4554,str: "Corporate",num: 35869,date: new Date("2018-09-05T21:58:27.058Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 4555,str: "asynchronous",num: 2235,date: new Date("2018-09-06T07:05:26.865Z"),array: ["revolutionize 24/365",31028,new Date("2018-09-06T17:40:14.450Z"),new Date("2018-09-05T22:53:49.468Z"),new Date("2018-09-06T19:54:02.757Z"),47941,[new Date("2018-09-06T18:46:41.277Z"),24979],"Credit Card Account",55909,"methodical purple",[]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 4556,num: 98886,date: new Date("2018-09-06T05:00:35.711Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 4557,str: "Berkshire Configurable",num: 69299,date: new Date("2018-09-06T01:58:14.770Z"),array: [new Date("2018-09-06T10:39:57.743Z"),{_id: 4558,str: "Rand Colorado payment",num: 97348,date: new Date("2018-09-06T18:48:02.192Z"),array: [],obj: {}},new Date("2018-09-06T02:34:02.868Z"),"Granite Liaison intuitive",46921,{_id: 4559,num: 50553,date: new Date("2018-09-06T16:45:35.026Z"),obj: {_id: 4560,str: "Philippines",num: 26861,array: [],obj: {}}},new Date("2018-09-06T05:12:58.250Z"),51504,[new Date("2018-09-06T10:56:29.912Z"),"haptic product","interface",66682],5961]});
    },

    function(coll) {
        return coll.insert({_id: 4561,str: "Usability one-to-one adapter",num: 21395,date: new Date("2018-09-06T11:46:47.199Z"),array: ["Home Loan Account",72588,new Date("2018-09-06T05:15:12.916Z"),new Date("2018-09-05T23:04:31.062Z"),new Date("2018-09-05T22:06:43.796Z"),[],new Date("2018-09-06T12:42:26.346Z"),96574,28204,"RSS Tasty Granite Sausages","Strategist redundant"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 4562,str: "Pants Fresh web-enabled",num: 16790,date: new Date("2018-09-06T15:07:39.330Z"),array: [new Date("2018-09-06T11:25:37.130Z"),"Concrete",53440,"Unbranded Networked",new Date("2018-09-06T04:49:49.913Z"),23678,new Date("2018-09-06T08:04:39.081Z"),new Date("2018-09-06T05:04:03.423Z"),56999,"Intranet Fantastic panel","even-keeled ivory initiative",[]],obj: {_id: 4563,str: "back up deposit",num: 68468,array: [54626],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 4564,str: "Investment Account Uganda",date: new Date("2018-09-05T21:31:02.276Z"),array: [new Date("2018-09-05T22:52:42.915Z"),"Alaska",15349,14539,"Facilitator Tennessee systemic",[],["Manor copy deliverables",new Date("2018-09-06T10:38:03.285Z")]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 4565,str: "synergy",date: new Date("2018-09-06T01:37:56.842Z"),array: [new Date("2018-09-06T02:24:20.874Z"),77572,78099,"Louisiana Solutions","Refined PCI",new Date("2018-09-05T21:52:02.064Z"),["neural Credit Card Account",new Date("2018-09-06T12:57:08.937Z"),{_id: 4566,str: "Mandatory",num: 7849,array: [],obj: {_id: 4567,num: 51816,date: new Date("2018-09-06T13:03:13.789Z"),array: [new Date("2018-09-06T10:19:44.299Z"),[]],obj: {}}},new Date("2018-09-06T10:49:31.674Z")],new Date("2018-09-05T22:11:21.299Z"),{_id: 4568,str: "Wooden vortals Computers",num: 19941,date: new Date("2018-09-06T06:14:20.760Z"),array: [],obj: {}},"Handcrafted Soft Ball Games THX",71604],obj: {_id: 4569,num: 48867,date: new Date("2018-09-06T07:18:58.662Z")}});
    },

    function(coll) {
        return coll.insert({_id: 4570,str: "quantifying",num: 48074,date: new Date("2018-09-05T22:37:14.191Z"),array: [7226,"XSS",69254,new Date("2018-09-06T13:16:50.039Z"),{_id: 4571,str: "Keyboard parse Checking Account",num: 16248,date: new Date("2018-09-06T13:35:27.281Z"),array: [],obj: {_id: 4572,num: 85229,date: new Date("2018-09-06T06:00:09.500Z"),obj: {}}},new Date("2018-09-06T13:45:30.092Z"),{_id: 4573,num: 58698,date: new Date("2018-09-06T12:03:33.740Z"),array: [[],new Date("2018-09-06T19:27:52.709Z"),"withdrawal auxiliary",[]],obj: {_id: 4574,str: "Sausages Auto Loan Account",array: [49291,"Niue","Jordan deposit Technician",8855,79272],obj: {}}},new Date("2018-09-06T07:45:21.508Z"),new Date("2018-09-06T18:07:49.557Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 4575,str: "Uzbekistan Sum Sports",num: 83242,date: new Date("2018-09-05T22:36:21.797Z"),array: ["Soft",new Date("2018-09-06T07:48:31.803Z"),95583,"Bedfordshire withdrawal",new Date("2018-09-06T12:45:23.460Z"),"Global International Director",[],[45959,[]],{_id: 4576,str: "Square",num: 51381,date: new Date("2018-09-06T06:55:54.411Z"),array: [new Date("2018-09-06T04:05:16.341Z"),67188,"Ball exploit"],obj: {_id: 4577,str: "calculate European Unit of Account 17(E.U.A.-17) quantifying",num: 99019,date: new Date("2018-09-05T23:10:49.274Z"),array: [],obj: {_id: 4578,str: "bus portals",num: 36449,date: new Date("2018-09-06T18:59:17.583Z")}}},new Date("2018-09-06T04:25:45.215Z"),{_id: 4579,array: [],obj: {}}],obj: {_id: 4580,num: 95589,date: new Date("2018-09-05T22:24:36.147Z"),array: [49688,72816],obj: {_id: 4581,str: "solid state",date: new Date("2018-09-05T22:35:13.615Z"),obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 4582,str: "deposit",num: 68535,date: new Date("2018-09-06T17:13:43.135Z"),array: [5670,new Date("2018-09-06T02:42:03.093Z"),"project Bedfordshire","Music Somoni asymmetric",83310,[],new Date("2018-09-06T02:05:19.252Z"),[{_id: 4583,str: "AGP Courts Handmade",num: 18027,date: new Date("2018-09-05T21:49:58.728Z"),array: [],obj: {}},"generate Program"],"programming global",52891,new Date("2018-09-06T03:45:41.483Z")],obj: {_id: 4584,str: "RSS Computers distributed",num: 21959,date: new Date("2018-09-06T01:25:08.984Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 4585,str: "Forint",num: 36061,date: new Date("2018-09-06T19:15:55.160Z"),array: [36986,new Date("2018-09-06T03:21:45.204Z"),"Rubber",new Date("2018-09-06T08:46:29.728Z"),2246,[new Date("2018-09-06T07:21:51.563Z")],new Date("2018-09-06T04:28:44.663Z"),"Practical Cotton Cheese Cloned",57784,"facilitate Solomon Islands Dollar green","invoice Sleek orchestration",[{_id: 4586,str: "payment Global pixel",array: []},new Date("2018-09-06T11:16:06.729Z"),7618]],obj: {_id: 4587,str: "Clothing Functionality payment",date: new Date("2018-09-06T19:02:31.937Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 4588,str: "Codes specifically reserved for testing purposes proactive Generic",num: 26232,date: new Date("2018-09-06T13:55:10.717Z"),array: [86402,new Date("2018-09-06T14:28:51.790Z"),"viral hacking",8488,"encoding",6073,{_id: 4589,str: "transmitting",num: 36480,date: new Date("2018-09-06T08:03:42.952Z"),array: [new Date("2018-09-05T20:13:05.436Z"),"invoice Credit Card Account","Awesome Metal encompassing"],obj: {_id: 4590,str: "Paradigm",num: 59785,date: new Date("2018-09-06T06:24:51.377Z"),array: ["Movies Plaza",new Date("2018-09-05T23:28:12.539Z")],obj: {}}},[],new Date("2018-09-06T17:52:21.374Z"),new Date("2018-09-06T14:14:20.356Z"),39209,[]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 4591,str: "hacking Avon",num: 97067,date: new Date("2018-09-06T03:57:29.125Z"),array: [new Date("2018-09-05T21:46:01.743Z"),"Future-proofed generate granular",62184,90073,["RAM",new Date("2018-09-06T11:55:53.431Z"),58467],"Music",20378,new Date("2018-09-05T20:34:53.034Z"),{_id: 4592,str: "quantify deposit Norfolk Island",num: 58136,date: new Date("2018-09-05T20:23:12.892Z"),array: [],obj: {_id: 4593,str: "AI rich Computers",num: 20236,array: []}},67448,{_id: 4594,obj: {}}],obj: {_id: 4595,num: 2479,date: new Date("2018-09-06T00:53:44.138Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 4596,str: "ivory Cayman Islands Dollar",num: 26431,date: new Date("2018-09-06T16:20:08.199Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 4597,str: "Towels",num: 30452,date: new Date("2018-09-05T23:59:13.702Z"),array: [new Date("2018-09-06T04:40:44.786Z"),13773,{_id: 4598,str: "Beauty Ways Personal Loan Account",date: new Date("2018-09-06T19:16:18.418Z"),array: [],obj: {_id: 4599,str: "transform exploit",num: 73548,date: new Date("2018-09-06T02:27:38.830Z"),array: [22378],obj: {_id: 4600,str: "Shirt Health",num: 56438,array: [],obj: {}}}},94353,"copying RSS",25637,new Date("2018-09-06T00:20:24.017Z"),[new Date("2018-09-06T01:36:59.656Z"),"Direct"],new Date("2018-09-06T08:45:50.047Z"),{_id: 4601,str: "Handmade Fresh Salad",num: 85605,date: new Date("2018-09-06T12:55:21.791Z")},"Russian Ruble",[]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 4602,str: "JBOD",num: 95797,date: new Date("2018-09-06T19:31:09.774Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 4603,str: "TCP protocol pink",num: 8477,date: new Date("2018-09-06T00:37:32.903Z"),array: [7956,"Vermont metrics",59160,new Date("2018-09-06T12:45:44.174Z"),"Spain Egypt",{_id: 4604,str: "Handmade Soft Fish Pennsylvania Quetzal",num: 46600,date: new Date("2018-09-06T06:57:54.413Z"),array: []},"enhance interactive Rubber",73827,"Rubber Object-based Fantastic",7109],obj: {_id: 4605,str: "Kansas",num: 39470,date: new Date("2018-09-06T10:21:02.316Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 4606,str: "California",num: 32141,obj: {_id: 4607,str: "withdrawal",num: 36298,date: new Date("2018-09-06T18:34:59.615Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 4608,str: "Way HTTP Alabama",num: 79792,date: new Date("2018-09-05T20:50:26.845Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 4609,str: "Solutions open-source",num: 78878,date: new Date("2018-09-06T02:44:30.959Z"),array: [],obj: {_id: 4610,str: "Creative",num: 69871,date: new Date("2018-09-06T17:10:35.420Z"),array: ["Synchronised",new Date("2018-09-06T00:50:22.618Z"),39807,new Date("2018-09-06T16:58:25.439Z"),17752,"turquoise Senior",{_id: 4611,str: "Diverse Licensed Fresh Fish French Polynesia",array: [],obj: {}},"non-volatile Nebraska Reunion",new Date("2018-09-06T07:08:59.565Z"),46382],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 4612,str: "Christmas Island",num: 35995,date: new Date("2018-09-06T06:19:53.517Z"),array: [22029,new Date("2018-09-06T10:28:51.806Z"),"matrices Practical Fresh Car","Consultant Dynamic overriding",2743,new Date("2018-09-06T18:29:07.923Z"),new Date("2018-09-05T20:19:37.935Z"),727],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 4613,str: "Savings Account e-commerce",num: 17329,date: new Date("2018-09-06T04:44:21.954Z"),array: ["Profound reboot Soft","Cheese Incredible Concrete Bike",62352,new Date("2018-09-06T11:45:30.807Z"),6328,new Date("2018-09-05T21:34:35.433Z"),84476,[new Date("2018-09-05T22:24:30.679Z"),new Date("2018-09-06T10:57:12.274Z")],51261,{_id: 4614,str: "local Sleek Costa Rica",num: 959,date: new Date("2018-09-06T14:53:09.592Z"),array: [],obj: {_id: 4615,str: "Clothing Avon",num: 77306,date: new Date("2018-09-06T05:59:36.424Z"),obj: {}}},"orange Licensed Cotton Hat",{_id: 4616,str: "plug-and-play content-based ivory",num: 1601,array: [],obj: {}},"JSON"],obj: {_id: 4617,str: "invoice Pound Sterling",num: 98657,date: new Date("2018-09-06T14:29:25.759Z"),array: [[],new Date("2018-09-05T20:16:19.948Z"),{_id: 4618,date: new Date("2018-09-06T18:18:17.140Z"),obj: {}}]}});
    },

    function(coll) {
        return coll.insert({_id: 4619,str: "Universal",num: 48460,date: new Date("2018-09-06T12:17:20.119Z"),array: [[],"payment Row","mobile XSS Lebanese Pound",47764,new Date("2018-09-06T06:58:26.260Z"),62429,60229,new Date("2018-09-05T19:58:02.118Z"),new Date("2018-09-06T00:03:16.858Z"),"azure",{_id: 4620,str: "azure Throughway",num: 28581,date: new Date("2018-09-06T12:01:55.963Z"),array: ["Fantastic Granite Chips Azerbaijan Azerbaijanian Manat"],obj: {}},{_id: 4621,date: new Date("2018-09-06T15:40:10.392Z"),array: [{_id: 4622,str: "Home Loan Account Refined Cotton Cheese Internal",num: 7935,date: new Date("2018-09-06T03:09:15.705Z"),array: [],obj: {_id: 4623,str: "content",num: 65524,array: [],obj: {_id: 4624,str: "background FTP Villages",num: 54673,array: [{_id: 4625,num: 92065,date: new Date("2018-09-06T06:46:55.875Z"),obj: {}},new Date("2018-09-06T15:11:26.257Z")]}}},new Date("2018-09-06T18:47:28.219Z")],obj: {}},[76730]]});
    },

    function(coll) {
        return coll.insert({_id: 4626,str: "New Hampshire Concrete Pines",num: 48014,date: new Date("2018-09-06T00:09:28.429Z"),array: ["lime uniform standardization",new Date("2018-09-06T12:26:51.242Z"),new Date("2018-09-05T22:31:14.621Z"),15791,13755,"Agent Seychelles Rupee incremental",[],new Date("2018-09-06T07:54:35.865Z"),new Date("2018-09-06T19:03:59.956Z"),["networks"],96526],obj: {_id: 4627,str: "microchip",num: 32448,date: new Date("2018-09-06T04:28:38.006Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 4628,str: "copy Ergonomic benchmark",num: 54602,obj: {_id: 4629,str: "productivity",num: 86887,date: new Date("2018-09-06T08:51:49.489Z"),array: [6202,"Self-enabling Small web-readiness","Product deposit Home",57886,20955,new Date("2018-09-06T10:46:20.159Z"),{_id: 4630,date: new Date("2018-09-06T10:21:20.092Z"),array: [63368,new Date("2018-09-05T21:59:31.526Z"),new Date("2018-09-05T23:44:59.700Z")],obj: {}},57647,[],[],{_id: 4631,str: "Configuration bi-directional",num: 87418,date: new Date("2018-09-06T06:00:20.748Z"),array: [],obj: {_id: 4632,str: "XML orange",num: 66274,date: new Date("2018-09-06T12:38:44.528Z"),array: [[]]}},new Date("2018-09-06T09:24:15.324Z")],obj: {_id: 4633,str: "salmon",num: 38511,array: [25111,"Clothing Incredible Metal Chair"],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 4634,str: "Visionary",num: 57693,date: new Date("2018-09-06T09:45:24.835Z"),array: [],obj: {_id: 4635,str: "Samoa Synergized",num: 40309,date: new Date("2018-09-05T22:04:55.153Z"),array: ["microchip Money Market Account Checking Account",[],new Date("2018-09-06T17:56:18.283Z"),11797,new Date("2018-09-06T14:50:46.160Z"),"payment embrace Cambridgeshire","Illinois",[81918,49911],[new Date("2018-09-06T15:34:08.378Z")],{_id: 4636,str: "Fundamental",date: new Date("2018-09-05T22:41:25.274Z"),obj: {_id: 4637,num: 77342,array: [{_id: 4638,str: "SDD Director",num: 10931,array: [],obj: {}},49367]}},new Date("2018-09-06T06:38:07.989Z"),"Fresh",21021]}});
    },

    function(coll) {
        return coll.insert({_id: 4639,str: "Infrastructure auxiliary",num: 55103,date: new Date("2018-09-06T15:00:51.410Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 4640,str: "Small Soft Computer firewall extend",num: 80079,date: new Date("2018-09-06T17:23:23.190Z"),array: [],obj: {_id: 4641,str: "Florida Saint Pierre and Miquelon",num: 43119,date: new Date("2018-09-05T23:36:04.032Z"),array: [new Date("2018-09-06T04:37:01.450Z"),"Licensed",[],new Date("2018-09-05T22:08:57.000Z"),"open-source card","Right-sized Pine Vision-oriented",42270,58752,51268,["Directives alarm Intelligent"],{_id: 4642,date: new Date("2018-09-06T08:41:30.776Z"),array: [],obj: {_id: 4643,num: 91400,date: new Date("2018-09-06T03:47:09.447Z"),obj: {}}},{_id: 4644,str: "cutting-edge",num: 66493,obj: {}},{_id: 4645,str: "Bond Markets Units European Composite Unit (EURCO) JBOD"},new Date("2018-09-06T05:00:24.906Z")],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 4646,str: "Norwegian Krone CSS application",num: 51144,date: new Date("2018-09-05T21:30:59.110Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 4647,str: "models deposit Indiana",num: 48496,date: new Date("2018-09-06T01:51:47.040Z"),array: [new Date("2018-09-06T13:34:04.806Z"),new Date("2018-09-06T16:26:10.461Z"),"Direct",34669,{_id: 4648,num: 44704,date: new Date("2018-09-05T20:59:57.892Z")}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 4649,str: "Consultant",num: 15844,date: new Date("2018-09-06T15:03:08.680Z"),array: [],obj: {_id: 4650,str: "Street Berkshire framework",num: 34742,date: new Date("2018-09-06T07:18:46.965Z"),array: [],obj: {_id: 4651,str: "Brunei Darussalam",num: 72352,date: new Date("2018-09-06T01:17:14.730Z"),array: [34649,"synthesize",[new Date("2018-09-06T05:15:50.334Z"),{_id: 4652,str: "redundant microchip",num: 49418,array: [],obj: {}},new Date("2018-09-06T16:23:04.169Z"),new Date("2018-09-05T20:21:48.709Z")],"Dynamic niches","Handcrafted Customer",{ _id: 4653 },"payment Cheese","copy Frozen",59244,86205,"deposit Facilitator back-end"]}}});
    },

    function(coll) {
        return coll.insert({_id: 4654,str: "Utah primary New Mexico",num: 31449,date: new Date("2018-09-06T17:15:48.435Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 4655,str: "Chair Botswana capacitor",num: 75585,date: new Date("2018-09-06T03:31:10.091Z"),array: ["backing up scalable",98970,"Plain multi-byte",39909,new Date("2018-09-05T20:37:09.952Z"),{_id: 4656,str: "mobile Louisiana",num: 19550,obj: {}},new Date("2018-09-05T21:14:39.675Z"),[]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 4657,str: "connecting",num: 16409,date: new Date("2018-09-06T10:51:27.766Z"),array: [],obj: {_id: 4658,str: "Tenge instruction set Branding",num: 54947,date: new Date("2018-09-06T12:52:42.473Z"),array: [new Date("2018-09-06T19:35:51.488Z"),new Date("2018-09-06T03:25:39.306Z"),"Rubber",new Date("2018-09-06T12:38:54.017Z"),18870,"Gloves Handmade",49592,[],new Date("2018-09-06T00:16:26.669Z"),97329,[],84945,"sensor Producer interactive"],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 4659,str: "leverage holistic Sleek Steel Cheese",num: 77695,date: new Date("2018-09-06T10:50:15.777Z"),array: ["Egyptian Pound New Mexico",25703,[],new Date("2018-09-06T09:12:15.320Z"),new Date("2018-09-06T00:00:32.928Z"),52110,"Checking Account client-driven Computers","plum",[19448,35097,new Date("2018-09-06T08:46:08.267Z")],[],{_id: 4660,str: "Buckinghamshire silver indigo",num: 15828,date: new Date("2018-09-06T12:35:39.879Z"),obj: {_id: 4661,num: 819,array: ["Practical rich Greece"]}},17101,new Date("2018-09-06T14:14:21.625Z")],obj: {_id: 4662,str: "Tonga iterate Unbranded",num: 28175,date: new Date("2018-09-06T12:31:40.937Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 4663,str: "Ball Bedfordshire",num: 72308,date: new Date("2018-09-06T15:19:10.046Z"),array: [],obj: {_id: 4664,str: "Practical Plastic Towels",num: 74486,date: new Date("2018-09-06T08:37:08.483Z"),array: [{_id: 4665,str: "Unbranded Granite Bacon teal",date: new Date("2018-09-05T20:55:38.753Z"),obj: {_id: 4666,str: "Shoes",num: 65220,obj: {}}},new Date("2018-09-05T22:37:31.830Z"),{_id: 4667,num: 29676,date: new Date("2018-09-06T13:43:20.039Z"),array: []},"red JBOD Chief",59918,36075,24041,["Movies Bedfordshire",59570,new Date("2018-09-05T22:37:33.132Z"),new Date("2018-09-06T07:46:24.738Z")],new Date("2018-09-06T06:28:26.699Z")],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 4668,num: 28083,date: new Date("2018-09-06T18:41:00.995Z"),array: [],obj: {_id: 4669,str: "Operations bricks-and-clicks",num: 50222,date: new Date("2018-09-06T18:37:27.220Z"),array: [new Date("2018-09-06T03:09:56.280Z"),"Investment Account Small orchid","zero tolerance",["Practical Steel Sausages"],new Date("2018-09-06T04:43:12.796Z"),new Date("2018-09-05T23:19:51.096Z"),25335,new Date("2018-09-06T09:07:07.281Z"),{_id: 4670,str: "overriding Boliviano Mvdol metrics",date: new Date("2018-09-05T19:58:57.255Z"),array: ["Checking Account Representative back-end"],obj: {}},75417,"fresh-thinking","success Supervisor"],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 4671,str: "back-end Fantastic Intelligent Metal Fish",num: 83136,date: new Date("2018-09-06T14:35:39.638Z"),array: [],obj: {_id: 4672,num: 91499,date: new Date("2018-09-06T18:47:27.844Z"),array: [96769,new Date("2018-09-06T03:22:48.009Z"),new Date("2018-09-06T11:43:05.371Z"),"primary Clothing online",[new Date("2018-09-06T02:18:05.124Z"),"Marketing West Virginia",20385,{_id: 4673,str: "digital",num: 27445,date: new Date("2018-09-06T02:39:29.384Z"),obj: {_id: 4674,str: "Gourde US Dollar",array: [new Date("2018-09-06T16:54:55.928Z")],obj: {}}}],95857,74248,"Chicken unleash Mills",13109,[]]}});
    },

    function(coll) {
        return coll.insert({_id: 4675,str: "eyeballs one-to-one",num: 8422,date: new Date("2018-09-06T08:52:27.467Z"),array: ["Personal Loan Account Fresh initiative",[20662,new Date("2018-09-06T19:28:12.179Z")],[],new Date("2018-09-06T17:47:58.342Z"),41791,new Date("2018-09-05T21:30:09.890Z"),{_id: 4676,str: "Luxembourg",num: 34924,array: ["methodologies Granite Berkshire"],obj: {_id: 4677,str: "payment Gorgeous Fresh Chicken zero defect",num: 78810,obj: {_id: 4678,str: "Cambridgeshire",date: new Date("2018-09-06T10:11:51.138Z"),array: []}}},{_id: 4679,date: new Date("2018-09-06T12:59:27.847Z"),array: [{_id: 4680,num: 63007,date: new Date("2018-09-06T08:49:29.660Z"),array: []},"Personal Loan Account Malagasy Ariary"],obj: {_id: 4681,str: "e-markets withdrawal",num: 18264,date: new Date("2018-09-06T07:13:34.456Z"),array: []}},55691,new Date("2018-09-06T03:46:13.495Z"),46831,44638,new Date("2018-09-06T08:11:32.291Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 4682,str: "CSS hard drive Manager",num: 84103,date: new Date("2018-09-06T07:16:03.606Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 4683,str: "withdrawal Planner",num: 16728,date: new Date("2018-09-05T21:40:05.887Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 4684,str: "core Michigan",num: 6329,date: new Date("2018-09-06T18:07:20.060Z"),array: ["tan","Handcrafted relationships Ergonomic",new Date("2018-09-06T10:01:59.663Z"),[],new Date("2018-09-06T04:36:48.043Z"),86788,new Date("2018-09-06T10:39:49.724Z"),67059,49107,"XSS"]});
    },

    function(coll) {
        return coll.insert({_id: 4685,str: "Bike SMTP",num: 68828,date: new Date("2018-09-05T21:50:28.399Z"),array: [12303,new Date("2018-09-06T00:51:05.118Z"),"AGP payment",new Date("2018-09-05T20:18:48.179Z"),10537,new Date("2018-09-06T17:27:16.187Z"),37853,new Date("2018-09-05T22:33:52.594Z"),"client-server scale",{_id: 4686,str: "port Towels bandwidth",num: 50766,date: new Date("2018-09-06T15:01:44.783Z"),array: [],obj: {}},[{_id: 4687,str: "reintermediate navigating multi-state",num: 81663,date: new Date("2018-09-05T21:22:24.903Z"),array: [],obj: {_id: 4688,str: "Cambridgeshire",num: 82766,date: new Date("2018-09-06T15:14:25.026Z"),obj: {}}},["Peru interfaces"]],[]]});
    },

    function(coll) {
        return coll.insert({_id: 4689,str: "Sausages content",num: 59889,date: new Date("2018-09-06T06:34:55.261Z"),array: [64288,{_id: 4690,str: "synthesizing National Ergonomic Granite Gloves",num: 74815,date: new Date("2018-09-05T21:52:47.452Z"),array: ["Dam",new Date("2018-09-06T14:30:23.470Z"),[[],84354,"Ball e-business"]],obj: {}},"Panama South Carolina calculating",20874,28146,new Date("2018-09-06T13:16:30.199Z"),new Date("2018-09-05T20:53:15.119Z"),{_id: 4691,num: 81919,date: new Date("2018-09-06T01:18:10.496Z"),obj: {_id: 4692,str: "alliance Group",array: ["FTP",24435],obj: {_id: 4693,str: "Corporate",num: 51496,date: new Date("2018-09-06T05:23:29.961Z"),array: []}}}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 4694,str: "calculate optical Health",date: new Date("2018-09-06T06:45:21.631Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 4695,str: "capacitor Personal Loan Account",num: 51549,date: new Date("2018-09-05T23:52:59.952Z"),array: ["Berkshire Incredible Soft Shirt","Lead Agent",new Date("2018-09-06T11:34:48.536Z"),new Date("2018-09-06T07:58:09.358Z"),new Date("2018-09-05T21:21:00.758Z"),"Sleek IB",17981,96850,"Michigan",new Date("2018-09-05T23:09:24.717Z"),new Date("2018-09-05T22:29:06.847Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 4696,str: "Mandatory Borders Group",num: 82236,date: new Date("2018-09-06T06:43:46.897Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 4697,str: "Kids driver Gloves",num: 79467,date: new Date("2018-09-06T10:55:55.446Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 4698,str: "array",num: 21181,date: new Date("2018-09-06T04:35:20.832Z"),array: [],obj: {_id: 4699,str: "Handmade Concrete Computer Ohio Avenue",num: 13123,date: new Date("2018-09-05T21:42:32.770Z"),array: ["Cambridgeshire Cheese leading-edge",new Date("2018-09-06T00:26:00.636Z"),new Date("2018-09-06T00:58:58.664Z"),"navigating Belarus Computer",[40501,"compressing",30887],{_id: 4700,str: "Chips Licensed Metal Shirt Car",num: 19566,date: new Date("2018-09-05T21:49:30.100Z"),array: [[],"Connecticut"],obj: {}},new Date("2018-09-06T19:12:08.197Z"),[],new Date("2018-09-06T19:07:51.265Z"),new Date("2018-09-06T00:35:55.897Z")],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 4701,str: "Dynamic cross-platform",num: 36734,date: new Date("2018-09-06T02:43:21.705Z"),array: [new Date("2018-09-06T05:28:37.759Z"),"Metal","SQL",99181,new Date("2018-09-05T23:51:58.086Z"),{_id: 4702,str: "Fresh web-enabled",num: 25285,date: new Date("2018-09-06T13:55:32.617Z"),array: ["payment",14788],obj: {}},new Date("2018-09-06T05:58:41.481Z"),9152,[]]});
    },

    function(coll) {
        return coll.insert({_id: 4703,str: "impactful navigate",num: 29169,date: new Date("2018-09-06T02:59:26.884Z"),array: [],obj: {_id: 4704,num: 89633,date: new Date("2018-09-06T17:47:15.107Z"),array: [{_id: 4705,str: "eco-centric",num: 81963,array: [],obj: {_id: 4706,str: "visualize Accountability Sausages",num: 39122,date: new Date("2018-09-06T02:07:30.649Z"),obj: {}}},new Date("2018-09-06T03:14:19.877Z"),"Myanmar Incredible Wooden Bacon",[79002,new Date("2018-09-05T22:46:03.201Z"),new Date("2018-09-06T05:19:59.543Z"),"Borders AI"],35989,"Martinique",88180,"invoice Berkshire",52195,"Indonesia experiences"],obj: {_id: 4707,str: "innovate",array: [new Date("2018-09-06T00:11:48.143Z")],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 4708,str: "Credit Card Account",num: 97378,date: new Date("2018-09-06T13:47:38.099Z"),array: [81949,49943,"Louisiana User-centric",new Date("2018-09-06T15:24:16.167Z"),new Date("2018-09-06T14:41:36.722Z"),new Date("2018-09-06T10:55:03.679Z"),["Soft Tasty"],"primary overriding",34027,[],{_id: 4709,str: "Paraguay Car",num: 57190,date: new Date("2018-09-06T17:17:51.161Z"),array: ["Computer",95016,"Pines",[]],obj: {_id: 4710,str: "Inlet",date: new Date("2018-09-06T02:50:57.381Z"),obj: {_id: 4711,str: "background copying deposit",num: 47732,date: new Date("2018-09-05T20:30:01.601Z"),array: [],obj: {}}}},{_id: 4712,num: 79534,date: new Date("2018-09-06T02:53:35.567Z"),obj: {}},{_id: 4713,str: "throughput Mexican Peso Mexican Unidad de Inversion (UDI) Croatian Kuna",num: 81728,array: [[],"Credit Card Account JSON transmitting"]}]});
    },

    function(coll) {
        return coll.insert({_id: 4714,str: "synergize Handcrafted",num: 59930,date: new Date("2018-09-06T09:49:08.318Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 4715,str: "system Buckinghamshire",num: 41996,date: new Date("2018-09-05T23:16:31.814Z"),array: [],obj: {_id: 4716,str: "Brunei Darussalam Pines Park",date: new Date("2018-09-05T23:59:51.224Z"),array: [14382,"Home Loan Account",new Date("2018-09-06T00:36:31.366Z"),"white",[],623,"innovate programming Integrated",new Date("2018-09-06T08:11:37.228Z"),"Utah Reactive firewall",new Date("2018-09-06T04:29:54.609Z")],obj: {_id: 4717,str: "Quality Tasty",num: 24285,array: [],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 4718,str: "bandwidth",num: 46653,date: new Date("2018-09-06T08:33:58.574Z"),array: [new Date("2018-09-06T06:38:19.394Z"),new Date("2018-09-05T22:52:11.868Z"),"auxiliary AGP Shirt",27814,new Date("2018-09-06T01:45:17.086Z"),"Fresh modular",new Date("2018-09-06T17:34:24.458Z"),46929,new Date("2018-09-05T22:53:08.233Z"),41236,"Dynamic Money Market Account",[],"connect"]});
    },

    function(coll) {
        return coll.insert({_id: 4719,str: "Car",num: 23356,date: new Date("2018-09-06T08:15:22.314Z")});
    },

    function(coll) {
        return coll.insert({_id: 4720,str: "District Computers",num: 55773,date: new Date("2018-09-05T22:58:08.663Z"),array: [69597,"leading-edge",48231,new Date("2018-09-05T22:11:14.650Z"),"Borders",10418,{_id: 4721,str: "Balboa US Dollar rich Field",num: 57310,date: new Date("2018-09-05T22:11:56.439Z"),array: [],obj: {}},new Date("2018-09-06T04:00:59.719Z"),"real-time Concrete systems",47561,[],new Date("2018-09-06T05:03:26.331Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 4722,str: "Tasty New York",date: new Date("2018-09-06T04:57:17.936Z"),array: [29299,2819,{_id: 4723,str: "Guam panel Refined Concrete Gloves",num: 3926,date: new Date("2018-09-06T17:54:55.050Z"),array: [],obj: {}},new Date("2018-09-06T02:13:56.065Z"),new Date("2018-09-06T15:35:17.124Z"),"blue",{_id: 4724,num: 59177,date: new Date("2018-09-06T07:08:57.079Z"),array: [96780],obj: {}},[],new Date("2018-09-06T11:32:50.812Z"),"reboot Mobility Senior","convergence primary",new Date("2018-09-06T12:57:16.594Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 4725,str: "Salad",num: 49940,array: []});
    },

    function(coll) {
        return coll.insert({_id: 4726,num: 43022,date: new Date("2018-09-06T16:02:22.662Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 4727,str: "generate quantify Accountability",date: new Date("2018-09-06T05:40:42.285Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 4728,str: "Ways Movies",num: 58642,date: new Date("2018-09-06T05:53:43.579Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 4729,str: "Managed content-based Proactive",num: 22033,array: ["Tactics Avon","Berkshire Marketing","customer loyalty",{_id: 4730,str: "hierarchy",num: 75013,date: new Date("2018-09-06T02:08:31.613Z"),obj: {_id: 4731,str: "indexing calculate",date: new Date("2018-09-06T17:53:17.256Z"),array: [],obj: {}}},81236,new Date("2018-09-06T11:42:33.040Z"),new Date("2018-09-06T10:05:08.950Z"),36660,new Date("2018-09-06T13:23:12.555Z"),[{_id: 4732,num: 91320,obj: {}}],[13842],"Summit",new Date("2018-09-06T05:23:01.753Z")]});
    },

    function(coll) {
        return coll.insert({_id: 4733,str: "New Jersey digital",num: 13703,date: new Date("2018-09-06T00:35:55.305Z"),array: [],obj: {_id: 4734,str: "Profit-focused Trail Rubber",num: 62923,date: new Date("2018-09-06T13:24:12.914Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 4735,str: "payment",num: 21522,date: new Date("2018-09-06T04:42:44.391Z"),array: [19059,"Nepalese Rupee Kansas Planner",new Date("2018-09-06T13:41:40.306Z"),new Date("2018-09-05T21:59:54.982Z"),new Date("2018-09-05T20:41:27.228Z"),30997,"Loaf invoice Berkshire",new Date("2018-09-06T02:27:31.303Z"),"black alarm Persistent","Director Connecticut",new Date("2018-09-05T23:55:34.415Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 4736,str: "holistic magenta",num: 32529,array: [new Date("2018-09-05T22:32:56.239Z"),[],"intranet capacitor",10908,"Rial Omani context-sensitive Sleek",[]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 4737,str: "Ergonomic Steel Shoes",num: 11849,date: new Date("2018-09-06T12:48:15.749Z"),array: [76924,new Date("2018-09-05T22:55:10.817Z"),new Date("2018-09-06T03:42:59.682Z"),{_id: 4738,str: "workforce",num: 22733,date: new Date("2018-09-06T04:39:16.487Z"),array: [],obj: {}},73542,35612,"Shirt","North Carolina Awesome firewall",new Date("2018-09-06T00:31:27.913Z"),"Metal","SMS"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 4739,str: "withdrawal",num: 70330,date: new Date("2018-09-05T23:13:01.904Z"),array: ["Arkansas back up Horizontal",new Date("2018-09-06T00:23:02.985Z"),"Generic Intelligent Cotton Mouse",[new Date("2018-09-05T23:22:57.968Z"),80529,new Date("2018-09-06T08:19:50.973Z"),"Paradigm matrix",{_id: 4740,str: "firewall FTP",array: [],obj: {}}],28372,[[],9696,"Squares didactic",new Date("2018-09-05T23:41:54.764Z"),new Date("2018-09-06T09:02:12.097Z")],"RAM"],obj: {_id: 4741,num: 20784,date: new Date("2018-09-06T09:30:06.591Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 4742,str: "Junction Light Savings Account",num: 87643,date: new Date("2018-09-06T08:07:36.219Z"),array: [[],new Date("2018-09-06T17:30:07.016Z"),{_id: 4743,str: "benchmark",date: new Date("2018-09-05T22:59:52.457Z"),array: [82518,56478],obj: {}},{_id: 4744,str: "navigating cyan",date: new Date("2018-09-06T04:59:19.629Z"),obj: {_id: 4745,num: 12481,array: [[]],obj: {}}},41965,"magnetic bypass Intranet",new Date("2018-09-05T21:29:40.740Z"),14582,new Date("2018-09-06T13:09:37.505Z"),new Date("2018-09-06T14:21:51.699Z"),50369,"morph","calculating niches knowledge user"],obj: {_id: 4746,str: "web-enabled secured line tan",num: 63351,date: new Date("2018-09-06T06:00:26.259Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 4747,str: "Berkshire connecting Brand",num: 22245,date: new Date("2018-09-05T20:47:34.499Z"),array: [new Date("2018-09-05T20:48:29.026Z"),new Date("2018-09-06T16:22:58.333Z"),new Date("2018-09-06T08:26:28.042Z"),75385,[],"Maryland core",91509,{_id: 4748,str: "Group",num: 70387,date: new Date("2018-09-06T12:47:11.908Z"),array: [],obj: {}},"Infrastructure facilitate silver",new Date("2018-09-06T06:21:10.807Z")],obj: {_id: 4749,num: 92822,date: new Date("2018-09-06T14:52:34.780Z"),obj: {_id: 4750,str: "Germany Future-proofed Wooden",num: 75687,date: new Date("2018-09-06T14:26:56.775Z"),obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 4751,str: "synergies overriding",num: 97947,date: new Date("2018-09-06T06:59:03.172Z"),obj: {_id: 4752,str: "holistic Wooden",num: 72672,date: new Date("2018-09-06T19:40:23.796Z"),array: [],obj: {_id: 4753,str: "Fantastic Fresh Shirt open-source Ball",date: new Date("2018-09-06T07:58:49.671Z"),array: []}}});
    },

    function(coll) {
        return coll.insert({_id: 4754,str: "Cambridgeshire virtual",num: 75857,date: new Date("2018-09-06T07:48:31.269Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 4755,str: "lime Salad",num: 56963,date: new Date("2018-09-06T15:52:51.714Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 4756,str: "microchip Gloves connect",num: 37536,date: new Date("2018-09-06T06:55:06.498Z"),array: [],obj: {_id: 4757,str: "Hong Kong Savings Account",num: 68685,date: new Date("2018-09-06T10:53:16.936Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 4758,str: "Home Loan Account bandwidth-monitored",num: 62086,date: new Date("2018-09-06T18:02:36.580Z"),array: [],obj: {_id: 4759,str: "Republic of Korea Yemeni Rial Alaska",date: new Date("2018-09-06T03:21:18.679Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 4760,str: "Associate",num: 61487,date: new Date("2018-09-06T19:35:27.406Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 4761,num: 49758,date: new Date("2018-09-06T02:29:29.598Z"),array: [new Date("2018-09-06T00:04:13.465Z"),10936,"Regional Cotton Alaska","open system Electronics",66492,new Date("2018-09-06T10:21:53.419Z"),"Unbranded Steel Soap Morocco vortals",new Date("2018-09-06T13:31:14.838Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 4762,str: "Optimized applications Malta",num: 79325,obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 4763,str: "generating backing up",date: new Date("2018-09-06T07:21:32.093Z"),array: ["Sausages",6558,new Date("2018-09-06T07:02:36.177Z"),new Date("2018-09-05T22:36:22.666Z"),"Administrator transform Bike",93703,{_id: 4764,num: 35912,date: new Date("2018-09-06T08:06:40.036Z"),array: [new Date("2018-09-05T23:12:39.706Z"),[],15986,[]],obj: {}},{_id: 4765,num: 70393,date: new Date("2018-09-06T05:54:47.073Z"),obj: {_id: 4766,str: "HDD",num: 82936,date: new Date("2018-09-06T09:10:55.482Z"),array: [{_id: 4767,str: "infrastructures",num: 89745,date: new Date("2018-09-06T02:34:11.600Z"),array: []}]}},"Meadow Soft Plastic",new Date("2018-09-06T11:44:36.008Z"),"mission-critical",[94820]],obj: {_id: 4768,str: "generate Codes specifically reserved for testing purposes Pants",obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 4769,str: "Centralized auxiliary Aruba",num: 17449,date: new Date("2018-09-06T02:42:11.757Z"),array: [78092,{_id: 4770,str: "Integration program concept",num: 96397,date: new Date("2018-09-05T23:21:22.836Z"),array: [],obj: {}},95294,new Date("2018-09-06T05:03:22.008Z"),"Fresh",new Date("2018-09-06T11:33:33.946Z"),[],"Savings Account Generic Plastic Ball",44981,new Date("2018-09-06T09:09:37.859Z"),"Beauty quantifying parsing","Personal Loan Account Fundamental Designer"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 4771,str: "Avon online",num: 62656,date: new Date("2018-09-06T13:06:39.021Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 4772,str: "Arkansas Gloves Tools",num: 32613,obj: {_id: 4773,str: "client-driven backing up",num: 47619,date: new Date("2018-09-06T15:44:31.875Z"),array: [new Date("2018-09-06T14:18:07.884Z"),4952,73773,"Multi-lateral","deposit",new Date("2018-09-05T22:27:20.720Z"),"end-to-end Incredible Plastic Gloves",new Date("2018-09-06T10:41:31.288Z"),14243,73466,"Tokelau Gorgeous portals",[]],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 4774,str: "Dynamic",num: 31156,date: new Date("2018-09-06T02:30:53.007Z"),array: [new Date("2018-09-06T13:03:32.909Z"),"web services Senior",90292,new Date("2018-09-06T13:32:13.280Z"),"Cambridgeshire Paraguay",new Date("2018-09-06T12:27:59.518Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 4775,str: "Metrics Practical Loaf",num: 97878,date: new Date("2018-09-06T13:47:58.572Z"),array: ["zero defect Central",33060,[],[new Date("2018-09-06T15:27:39.736Z"),72482,"Incredible Plastic Bacon Accounts","Cambridgeshire Auto Loan Account Toys",new Date("2018-09-06T15:35:41.949Z"),"EXE productize"],new Date("2018-09-06T13:43:20.446Z"),27721,{_id: 4776,str: "Object-based",num: 24900,date: new Date("2018-09-06T00:59:52.664Z"),array: [],obj: {_id: 4777,str: "XSS",num: 64908,array: [38360,"compress Incredible Metal Computer pink"],obj: {_id: 4778,str: "Money Market Account contingency Awesome",date: new Date("2018-09-06T02:11:35.116Z"),array: ["Frozen"],obj: {}}}},new Date("2018-09-06T12:32:31.217Z"),15966,{_id: 4779,num: 42956,date: new Date("2018-09-06T06:23:09.612Z"),array: [],obj: {}},{_id: 4780,str: "Borders hierarchy",num: 89813,date: new Date("2018-09-06T13:22:35.774Z")}]});
    },

    function(coll) {
        return coll.insert({_id: 4781,num: 97504,date: new Date("2018-09-05T23:31:39.218Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 4782,str: "Corporate",num: 54221,date: new Date("2018-09-06T17:26:40.839Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 4783,str: "TCP Computers",date: new Date("2018-09-06T10:48:28.253Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 4784,str: "input",num: 42280,date: new Date("2018-09-06T00:09:16.383Z"),array: [[],21746,"collaboration",[],new Date("2018-09-05T21:14:09.471Z"),new Date("2018-09-05T20:20:46.264Z"),{_id: 4785,str: "Bike architectures",date: new Date("2018-09-06T04:46:13.817Z"),array: ["Lead Corporate",[]],obj: {_id: 4786,str: "Home non-volatile lime",num: 36970,date: new Date("2018-09-06T09:27:26.461Z"),array: [31808],obj: {}}},new Date("2018-09-05T23:41:55.667Z"),93795,"Armenia Representative","Checking Account tan",[],{_id: 4787,str: "Technician Cotton",num: 4528,date: new Date("2018-09-06T06:16:40.444Z"),array: [],obj: {}}],obj: {_id: 4788,str: "fresh-thinking",num: 85020,obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 4789,str: "Avon Mauritius",date: new Date("2018-09-06T01:27:04.363Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 4790,str: "Nauru Customer",num: 46558,date: new Date("2018-09-05T23:27:36.407Z"),array: [new Date("2018-09-06T05:47:30.326Z"),{_id: 4791,str: "one-to-one Loaf",num: 63356,date: new Date("2018-09-06T16:15:29.560Z"),array: [],obj: {_id: 4792,str: "Tugrik Belize Dollar",num: 98706,array: [27333,new Date("2018-09-06T19:30:04.681Z"),"Ouguiya",["Chair Home Loan Account Up-sized",17319,"Games"],60834],obj: {}}},[99761],"Indonesia extensible Sleek Steel Shirt",new Date("2018-09-06T05:38:47.440Z"),new Date("2018-09-06T11:08:55.461Z"),[],{_id: 4793,num: 41677,array: [new Date("2018-09-06T11:25:25.866Z")]},{_id: 4794,date: new Date("2018-09-06T14:51:01.288Z"),obj: {_id: 4795,str: "back up",num: 95997,date: new Date("2018-09-06T17:56:41.298Z"),array: [],obj: {}}},63102,"Supervisor fuchsia"]});
    },

    function(coll) {
        return coll.insert({_id: 4796,str: "Developer",num: 90635,array: [new Date("2018-09-06T16:42:37.148Z"),new Date("2018-09-05T23:53:05.000Z"),[],new Date("2018-09-06T06:07:21.883Z"),"Inlet Hollow Lebanon",96571,"Fantastic Plastic Sausages Response",1552,"Soap cross-platform","Quality structure District",new Date("2018-09-06T11:31:11.332Z"),[22730,[]],{_id: 4797,str: "Mouse",num: 95850,date: new Date("2018-09-06T07:17:25.317Z"),array: ["web services",new Date("2018-09-06T07:55:50.293Z")],obj: {_id: 4798,num: 72072,date: new Date("2018-09-06T17:38:06.464Z"),array: [],obj: {}}}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 4799,str: "SMS",num: 6351,date: new Date("2018-09-05T21:22:49.797Z"),array: ["application Platinum",83423,new Date("2018-09-06T04:09:51.427Z"),"action-items Shirt intranet",14345,"Incredible Granite Shoes Chief",25244,[],new Date("2018-09-06T18:02:30.571Z"),{_id: 4800,date: new Date("2018-09-05T21:28:49.981Z"),obj: {}},[],85042,new Date("2018-09-06T10:04:21.722Z")],obj: {_id: 4801,str: "world-class Money Market Account",num: 22860,date: new Date("2018-09-06T09:45:07.596Z"),array: [47774,[new Date("2018-09-06T03:37:57.911Z")],new Date("2018-09-06T16:41:02.549Z")],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 4802,str: "infomediaries infomediaries Plastic",num: 9273,date: new Date("2018-09-06T19:10:44.641Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 4803,str: "FTP",num: 7704,date: new Date("2018-09-06T02:18:32.538Z"),array: [],obj: {_id: 4804,str: "Salad",num: 98763,array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 4805,str: "Factors open system",num: 83475,date: new Date("2018-09-06T17:27:07.019Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 4806,str: "Ergonomic Plastic Soap Montana",date: new Date("2018-09-06T10:31:41.388Z"),array: [new Date("2018-09-05T20:44:12.458Z"),"Tasty Concrete Bacon seize Kentucky",39706,"Tugrik deposit functionalities",88701,new Date("2018-09-06T07:34:15.190Z"),38445,[{_id: 4807,str: "Health index digital",num: 98777,date: new Date("2018-09-06T06:47:38.868Z"),array: ["navigating"]}],{_id: 4808,num: 42906,date: new Date("2018-09-06T12:01:12.173Z"),array: [],obj: {}},96479,"Grocery Small Soft Bike calculating","Awesome Rubber Shirt",new Date("2018-09-06T11:41:29.109Z"),"Forward Court"],obj: {_id: 4809,str: "leverage Borders",num: 64329,array: []}});
    },

    function(coll) {
        return coll.insert({_id: 4810,str: "niches Azerbaijan deposit",num: 78933,date: new Date("2018-09-05T23:21:13.386Z"),array: [42582,95803,"Personal Loan Account FTP Portugal","override",new Date("2018-09-06T00:39:31.438Z"),[],{_id: 4811,str: "input",num: 9386,array: [new Date("2018-09-05T23:03:20.364Z"),new Date("2018-09-06T07:59:22.326Z")],obj: {}},35900,67339,{_id: 4812,str: "black Uzbekistan synthesizing",date: new Date("2018-09-05T20:20:08.658Z"),array: []},[{_id: 4813,str: "Internal",num: 33474,date: new Date("2018-09-05T22:29:22.394Z"),array: ["Lebanese Pound Optimization",["Swiss Franc"]],obj: {_id: 4814,str: "Fantastic Kenyan Shilling bandwidth",num: 26016,date: new Date("2018-09-06T11:36:28.555Z"),array: [61802,[]],obj: {_id: 4815,date: new Date("2018-09-06T08:01:04.553Z")}}},new Date("2018-09-06T05:08:38.503Z"),96766,{_id: 4816,num: 35095,date: new Date("2018-09-06T18:58:52.720Z"),array: [{_id: 4817,str: "Intelligent executive protocol",num: 96849,obj: {}},new Date("2018-09-06T04:34:10.062Z")]}],new Date("2018-09-05T19:55:37.543Z")],obj: {_id: 4818,date: new Date("2018-09-06T08:28:03.523Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 4819,str: "Hat Assimilated",num: 31062,date: new Date("2018-09-06T18:15:36.987Z"),array: [17631,new Date("2018-09-06T07:13:29.299Z"),"capability Executive",new Date("2018-09-06T11:07:25.272Z"),29759,21581,81618],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 4820,str: "implement",num: 37499,date: new Date("2018-09-06T05:38:31.704Z"),array: [],obj: {_id: 4821,str: "enterprise",num: 50761,date: new Date("2018-09-06T18:27:02.383Z"),array: [[],"Kip",{_id: 4822,str: "Barbados Dollar Buckinghamshire mesh"},14610,"mission-critical yellow Synchronised",new Date("2018-09-06T14:49:29.918Z"),"revolutionize",new Date("2018-09-05T22:51:19.012Z"),new Date("2018-09-06T16:02:17.262Z"),89254,{_id: 4823,num: 67669,date: new Date("2018-09-05T21:18:59.137Z"),array: [],obj: {}}],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 4824,str: "Canyon programming cyan",num: 22064,date: new Date("2018-09-06T16:07:57.437Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 4825,str: "Wooden",num: 37130,date: new Date("2018-09-06T19:27:55.478Z"),array: ["Checking Account",[],new Date("2018-09-06T09:43:13.233Z"),new Date("2018-09-06T05:45:47.815Z"),{_id: 4826,num: 5091,date: new Date("2018-09-06T04:40:18.204Z"),array: [],obj: {_id: 4827,str: "Berkshire Administrator Generic Steel Cheese",date: new Date("2018-09-06T03:13:14.852Z"),obj: {}}},"Representative turquoise Morocco",39909,{_id: 4828,str: "Mouse",date: new Date("2018-09-05T21:22:28.793Z"),array: [[],66553,"Euro"],obj: {}},51871,new Date("2018-09-06T19:17:24.859Z")]});
    },

    function(coll) {
        return coll.insert({_id: 4829,str: "reinvent salmon",num: 98325,date: new Date("2018-09-06T13:33:47.948Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 4830,str: "exploit Panama global",num: 70412,date: new Date("2018-09-06T05:45:56.479Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 4831,str: "Virginia",num: 80734,date: new Date("2018-09-06T09:45:10.975Z"),array: [],obj: {_id: 4832,str: "Jordan Unions",date: new Date("2018-09-05T23:57:46.333Z"),array: [36654,59820,new Date("2018-09-05T21:07:13.373Z"),[21336],"Algerian Dinar RAM",new Date("2018-09-06T05:25:25.650Z"),"maroon archive Implementation","Computers Mountains Cook Islands",{_id: 4833,str: "Borders Implementation Books",date: new Date("2018-09-06T06:44:04.584Z"),array: []},{_id: 4834,str: "invoice installation",num: 78587,array: [],obj: {_id: 4835,num: 9026,date: new Date("2018-09-05T21:55:56.368Z"),obj: {}}},new Date("2018-09-06T08:19:19.817Z"),new Date("2018-09-06T19:46:40.876Z"),1784]}});
    },

    function(coll) {
        return coll.insert({_id: 4836,str: "Money Market Account",num: 28805,date: new Date("2018-09-06T05:01:39.704Z"),array: [{_id: 4837,str: "GB payment",num: 74920,date: new Date("2018-09-06T07:07:22.053Z"),array: [],obj: {_id: 4838,str: "ivory Director Identity",num: 95028,date: new Date("2018-09-06T17:13:33.805Z"),array: ["adapter"],obj: {_id: 4839,array: [],obj: {}}}},{_id: 4840,num: 52801,date: new Date("2018-09-06T09:16:28.305Z")},[],new Date("2018-09-06T14:25:42.225Z"),43314,"Unbranded",75568,"Licensed",[new Date("2018-09-06T17:51:26.015Z"),new Date("2018-09-06T08:32:52.596Z")],new Date("2018-09-06T18:19:59.583Z"),new Date("2018-09-06T17:47:17.544Z"),98914],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 4841,str: "invoice Norway reinvent",num: 82809,date: new Date("2018-09-06T16:01:20.733Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 4842,str: "Ghana withdrawal",num: 46928,date: new Date("2018-09-05T21:04:27.335Z"),array: [[new Date("2018-09-06T18:57:56.996Z"),50412,30278],new Date("2018-09-06T05:02:56.487Z"),20914,{_id: 4843,num: 30148,array: ["Latvia technologies SSL","Utah",44904]},{_id: 4844,str: "Universal leading-edge networks",num: 20864,date: new Date("2018-09-06T03:02:05.433Z"),array: [],obj: {}},"Cotton",{_id: 4845,str: "Hat",num: 59056},new Date("2018-09-06T04:46:43.622Z"),{_id: 4846,str: "payment 1080p Granite",date: new Date("2018-09-06T10:48:02.559Z"),obj: {}},new Date("2018-09-06T14:06:04.851Z"),"Namibia Hills connecting"],obj: {_id: 4847,str: "port Shoes infrastructures",num: 67046,date: new Date("2018-09-06T04:25:43.993Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 4848,num: 50503,date: new Date("2018-09-06T19:49:15.108Z"),array: [36181,[],"Analyst",new Date("2018-09-06T07:19:51.805Z"),new Date("2018-09-06T12:01:28.056Z"),new Date("2018-09-06T18:35:14.148Z"),"full-range auxiliary grey",46173,15868,"THX programming supply-chains",new Date("2018-09-06T08:47:49.897Z"),"AI",[],1473],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 4849,num: 87269,date: new Date("2018-09-06T07:30:31.760Z"),array: ["Handcrafted Metal Fish","Avon Assimilated","Electronics PNG",new Date("2018-09-05T21:58:54.015Z"),{_id: 4850,str: "Unbranded Granite Computer payment",date: new Date("2018-09-06T13:59:22.727Z"),array: [94070],obj: {}},new Date("2018-09-06T02:50:40.974Z"),65316,48363,[],"Functionality Specialist Licensed",new Date("2018-09-06T06:40:30.206Z"),57545,{_id: 4851,str: "Industrial bypassing Applications",num: 4040,date: new Date("2018-09-06T18:35:12.772Z"),obj: {_id: 4852,str: "task-force Solutions attitude-oriented",num: 52178,date: new Date("2018-09-06T15:19:45.618Z"),array: [],obj: {_id: 4853,str: "De-engineered Zambian Kwacha Keyboard",num: 12986,array: []}}}],obj: {_id: 4854,str: "Wall programming China",date: new Date("2018-09-06T09:10:12.536Z"),array: [new Date("2018-09-05T22:16:14.787Z"),4422]}});
    },

    function(coll) {
        return coll.insert({_id: 4855,num: 13500,date: new Date("2018-09-06T01:52:44.046Z"),array: ["Malagasy Ariary",14348,25299,"Cambridgeshire","actuating","Engineer Designer",53840,new Date("2018-09-06T03:30:08.478Z"),new Date("2018-09-06T03:14:32.510Z"),[80654,{_id: 4856,str: "Christmas Island portals",num: 91231,date: new Date("2018-09-06T04:28:50.798Z"),array: [],obj: {_id: 4857,str: "Supervisor",date: new Date("2018-09-06T05:42:18.532Z"),array: [],obj: {_id: 4858,str: "Group cyan Cotton",num: 46667,array: [],obj: {}}}}],new Date("2018-09-05T23:52:56.176Z"),61682]});
    },

    function(coll) {
        return coll.insert({_id: 4859,str: "Shirt",num: 78170,date: new Date("2018-09-06T15:13:42.344Z"),array: [],obj: {_id: 4860,str: "Vermont Squares Cape Verde",date: new Date("2018-09-06T11:32:59.079Z"),obj: {_id: 4861,str: "National",num: 44781,date: new Date("2018-09-06T13:18:15.182Z"),array: [new Date("2018-09-06T06:52:04.831Z"),21156,new Date("2018-09-06T02:50:45.061Z"),70782,"expedite Libyan Dinar",[37655,"e-business bi-directional"],75968,{_id: 4862,array: [[]],obj: {}},{_id: 4863,str: "PCI withdrawal",date: new Date("2018-09-06T19:37:36.493Z"),obj: {}},new Date("2018-09-06T18:47:03.241Z"),[],64258,"plum","1080p Ferry gold"]}}});
    },

    function(coll) {
        return coll.insert({_id: 4864,num: 98806,date: new Date("2018-09-06T01:04:39.292Z"),array: ["Soft Brand",17663,new Date("2018-09-06T05:03:53.046Z"),new Date("2018-09-06T12:25:47.343Z"),[],"paradigm Jersey",new Date("2018-09-06T00:19:42.099Z"),"Licensed Jewelery Principal",new Date("2018-09-06T07:56:22.310Z"),"Home Loan Account quantifying Optimization",59629,1997,{_id: 4865,str: "Bedfordshire transmitting",num: 35050,date: new Date("2018-09-06T09:41:30.296Z"),array: []}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 4866,str: "Surinam Dollar parsing",num: 59545,date: new Date("2018-09-06T01:45:20.931Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 4867,str: "Horizontal Ergonomic Granite Pants",num: 25902,date: new Date("2018-09-05T21:59:38.884Z"),array: ["orchid copy XSS",90462,"Shoes","Gold",new Date("2018-09-06T17:09:02.525Z"),30859,{_id: 4868,str: "ivory Mouse",num: 46061,date: new Date("2018-09-06T00:52:59.690Z"),array: [new Date("2018-09-06T01:17:22.980Z"),new Date("2018-09-06T13:24:42.592Z")],obj: {}},new Date("2018-09-06T00:07:52.628Z"),87578,new Date("2018-09-06T12:30:12.528Z"),"Gateway Soft Chicken",new Date("2018-09-06T17:08:35.698Z"),31622]});
    },

    function(coll) {
        return coll.insert({_id: 4869,str: "Congolese Franc",date: new Date("2018-09-06T14:02:15.842Z"),array: [],obj: {_id: 4870,str: "Future",num: 39456,date: new Date("2018-09-06T10:10:57.618Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 4871,str: "Tools application monitor",num: 5096,date: new Date("2018-09-05T23:13:56.991Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 4872,str: "synthesize convergence",num: 78525,date: new Date("2018-09-06T03:16:42.067Z"),array: ["Orchard Wooden",new Date("2018-09-06T07:15:11.830Z"),27330,"knowledge base robust",new Date("2018-09-06T06:04:24.230Z"),"Table Corners",[],new Date("2018-09-06T07:15:31.065Z"),19406,99460,{_id: 4873,str: "optical Plastic",num: 94230,date: new Date("2018-09-06T13:58:38.375Z"),obj: {}},[]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 4874,str: "HTTP Product Small Steel Gloves",num: 90078,date: new Date("2018-09-06T02:09:55.502Z"),array: ["Harbor",new Date("2018-09-06T03:33:49.515Z"),18802,"yellow Technician HDD","models",{_id: 4875,str: "payment",date: new Date("2018-09-05T21:21:18.551Z"),obj: {_id: 4876,num: 18924,date: new Date("2018-09-06T06:08:41.829Z"),array: [],obj: {_id: 4877,num: 10646,date: new Date("2018-09-06T17:46:22.617Z"),array: [],obj: {}}}},new Date("2018-09-06T00:03:39.597Z"),new Date("2018-09-05T20:58:17.830Z"),89821,[[342,"Practical Frozen Chicken"],13756],[{_id: 4878,str: "Cambridgeshire Michigan",num: 88310,array: [new Date("2018-09-06T12:21:37.935Z"),"Berkshire Refined","Small Kyrgyz Republic"]}]]});
    },

    function(coll) {
        return coll.insert({_id: 4879,str: "standardization compress",num: 74005,date: new Date("2018-09-06T16:18:16.659Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 4880,str: "Tasty Soft Chicken",num: 80767,date: new Date("2018-09-06T17:09:32.518Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 4881,str: "analyzing",num: 9117,date: new Date("2018-09-06T11:52:17.457Z"),array: ["Grocery Locks",new Date("2018-09-06T03:40:19.955Z"),{_id: 4882,str: "Auto Loan Account Jewelery mobile",num: 82630,date: new Date("2018-09-06T11:24:43.230Z"),array: [],obj: {_id: 4883,str: "Sleek Executive",num: 36347,date: new Date("2018-09-06T15:21:55.659Z"),array: [new Date("2018-09-06T15:46:48.363Z"),39643,[]],obj: {}}},"firewall virtual",74519,"cultivate Bedfordshire program",72782,new Date("2018-09-05T20:33:03.825Z"),new Date("2018-09-06T15:17:47.126Z"),{_id: 4884,str: "Open-architected transform Kroon"},{_id: 4885,num: 12070,date: new Date("2018-09-06T16:01:36.275Z"),array: [new Date("2018-09-06T08:18:09.020Z"),{_id: 4886,str: "Global",array: [],obj: {}}],obj: {}},"copy Steel Practical Plastic Gloves",[]],obj: {_id: 4887,date: new Date("2018-09-06T05:47:46.745Z")}});
    },

    function(coll) {
        return coll.insert({_id: 4888,str: "Money Market Account Practical Steel Bacon",num: 56040,array: [{_id: 4889,str: "Devolved wireless supply-chains",num: 37950,date: new Date("2018-09-06T19:18:03.236Z"),array: [],obj: {}},39518,"Madagascar Director neural-net","synergistic methodical fresh-thinking",new Date("2018-09-05T22:57:12.695Z"),[44363,"Armenian Dram Borders",85614],[],new Date("2018-09-06T15:57:29.848Z"),new Date("2018-09-06T11:36:47.513Z"),new Date("2018-09-06T11:25:26.151Z"),new Date("2018-09-06T05:59:52.171Z")],obj: {_id: 4890,num: 47670,date: new Date("2018-09-06T00:26:25.036Z"),obj: {_id: 4891,str: "Configuration matrix",num: 76642,array: [{_id: 4892,str: "THX",date: new Date("2018-09-06T06:55:35.050Z"),array: [[],new Date("2018-09-06T18:40:49.431Z"),12395],obj: {}},{_id: 4893,str: "Licensed",num: 32553,date: new Date("2018-09-05T22:47:28.254Z"),array: []}],obj: {_id: 4894,str: "Metrics Borders orchid",date: new Date("2018-09-06T01:54:09.140Z"),array: [59033,"Cambridgeshire Unbranded Metal Shirt"]}}}});
    },

    function(coll) {
        return coll.insert({_id: 4895,str: "Soft 24/365 Tasty Frozen Sausages",num: 42761,array: ["Maine",new Date("2018-09-06T15:01:45.573Z"),"leverage",new Date("2018-09-06T13:53:19.778Z"),[],96600,"incubate Sao Tome and Principe",{_id: 4896,str: "Ethiopia Investment Account",num: 76490,date: new Date("2018-09-06T14:29:05.875Z"),array: [75381,[],92692,new Date("2018-09-06T05:04:19.425Z")],obj: {_id: 4897,num: 96728,date: new Date("2018-09-06T19:24:53.081Z"),array: [],obj: {}}},1952,13886],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 4898,str: "Cambridgeshire Handmade Wooden Chicken cross-platform",num: 82872,date: new Date("2018-09-06T17:29:59.207Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 4899,str: "Refined Benin Refined Frozen Sausages",num: 71719,date: new Date("2018-09-06T04:04:37.344Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 4900,str: "Costa Rican Colon Legacy",num: 99934,date: new Date("2018-09-06T06:37:42.674Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 4901,num: 73308,date: new Date("2018-09-06T16:48:21.521Z"),obj: {_id: 4902,str: "Fundamental Operations",num: 50493,array: [],obj: {_id: 4903,str: "Enhanced Borders cross-platform",date: new Date("2018-09-05T23:32:15.350Z"),array: [75002,new Date("2018-09-05T20:52:20.720Z"),"Engineer quantify","Generic Wooden Hat Montana",{_id: 4904,num: 50295,array: [new Date("2018-09-06T07:43:25.303Z"),56018,new Date("2018-09-06T16:25:40.901Z"),2993]},"Investment Account Switchable one-to-one",56438,[97862],{_id: 4905,date: new Date("2018-09-05T22:04:04.778Z"),obj: {}},[new Date("2018-09-06T01:19:33.623Z")],{_id: 4906,str: "Massachusetts Orchestrator Configuration",num: 73052,date: new Date("2018-09-06T15:54:49.492Z"),array: [],obj: {}}],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 4907,str: "Tools CFA Franc BEAC Colorado",num: 233,date: new Date("2018-09-06T11:34:32.426Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 4908,str: "payment global",num: 15935,date: new Date("2018-09-05T21:36:21.106Z"),array: [],obj: {_id: 4909,str: "Awesome Nebraska",num: 77133,date: new Date("2018-09-06T10:43:30.565Z"),array: [new Date("2018-09-06T18:18:57.327Z"),78972,"Cambridgeshire","Developer encoding indexing",new Date("2018-09-06T17:58:29.461Z"),[],"content","pixel",new Date("2018-09-05T21:20:21.104Z"),"Incredible Cotton Car IB"],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 4910,str: "transitional Grocery Networked",num: 77922,date: new Date("2018-09-05T23:35:28.982Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 4911,date: new Date("2018-09-06T06:33:12.788Z"),array: [],obj: {_id: 4912,str: "Auto Loan Account",num: 48426,date: new Date("2018-09-06T15:23:58.786Z"),array: [new Date("2018-09-06T10:01:43.479Z"),"metrics Steel","dedicated",[],20990,new Date("2018-09-06T12:05:47.571Z"),"Democratic People's Republic of Korea","Shoes",[68777,{_id: 4913,str: "Customer",num: 50391,date: new Date("2018-09-06T15:00:04.850Z"),array: [],obj: {}},80674],"Optimization empowering Auto Loan Account",new Date("2018-09-06T15:44:20.387Z")],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 4914,str: "matrices Ethiopian Birr National",num: 61111,date: new Date("2018-09-05T20:27:49.903Z"),array: [73848,"Metrics",{_id: 4915,str: "Implemented XML",num: 77368,date: new Date("2018-09-06T07:37:05.466Z"),array: ["matrix",new Date("2018-09-06T07:44:49.515Z"),new Date("2018-09-05T21:33:41.552Z"),"Berkshire Bedfordshire Gloves"],obj: {_id: 4916,num: 41553,date: new Date("2018-09-06T04:28:00.194Z"),obj: {}}},93115,{_id: 4917,date: new Date("2018-09-06T00:04:02.284Z"),obj: {}},70928,[],"empower Factors",new Date("2018-09-06T08:20:28.078Z"),[],4039]});
    },

    function(coll) {
        return coll.insert({_id: 4918,str: "Cambridgeshire capability",num: 66885,date: new Date("2018-09-06T13:56:44.212Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 4919,str: "User-centric",date: new Date("2018-09-06T11:28:18.140Z"),array: [{_id: 4920,str: "Intelligent Granite Soap deposit",num: 40025,array: [],obj: {}},33819,84133,78913,new Date("2018-09-06T00:15:50.582Z"),"Small invoice Producer",new Date("2018-09-06T01:26:22.355Z"),[],"auxiliary","Berkshire proactive",{_id: 4921,num: 35141,date: new Date("2018-09-06T05:23:11.857Z"),obj: {}},{_id: 4922,str: "Officer Fresh",num: 90753,date: new Date("2018-09-05T22:40:20.081Z"),array: ["niches engineer"]},"Coordinator Bahamian Dollar"],obj: {_id: 4923,num: 4480,obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 4924,str: "Checking Account Kids",num: 74877,array: [99509,"Croatian Kuna synergies payment","digital",new Date("2018-09-06T13:38:48.272Z"),new Date("2018-09-06T10:03:23.035Z"),55411,6806,"SDD",new Date("2018-09-06T17:23:25.274Z"),10451],obj: {_id: 4925,str: "parse viral",num: 9808,date: new Date("2018-09-06T05:32:53.359Z"),array: ["Orchestrator Czech Koruna",new Date("2018-09-05T23:21:25.313Z"),new Date("2018-09-06T08:11:44.499Z"),{_id: 4926,str: "Director Berkshire Regional",num: 64670,date: new Date("2018-09-05T22:48:56.769Z"),obj: {}},new Date("2018-09-06T16:34:05.233Z")],obj: {_id: 4927,str: "Chips evolve",num: 6618,date: new Date("2018-09-05T22:34:13.184Z"),array: [],obj: {_id: 4928,array: [],obj: {_id: 4929,date: new Date("2018-09-06T03:03:18.522Z"),array: []}}}}});
    },

    function(coll) {
        return coll.insert({_id: 4930,str: "paradigms optical",date: new Date("2018-09-05T20:23:55.532Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 4931,str: "action-items neural",num: 29643,date: new Date("2018-09-05T20:34:38.363Z"),array: ["Saudi Riyal",4419,"Home Loan Account","Auto Loan Account Global",98897,new Date("2018-09-06T13:34:22.042Z"),new Date("2018-09-06T17:20:29.682Z"),new Date("2018-09-06T19:20:35.501Z"),{_id: 4932,str: "Pants Course",num: 91229,date: new Date("2018-09-05T22:10:16.634Z"),obj: {}},"bandwidth global",3205],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 4933,str: "generating Personal Loan Account Cambridgeshire",num: 55352,date: new Date("2018-09-05T21:35:52.495Z"),array: ["Cheese",90100,[],"Small Arkansas",57999,{_id: 4934,str: "Incredible Concrete Computer",num: 16698,date: new Date("2018-09-06T18:44:25.652Z"),array: [],obj: {_id: 4935,num: 63049,date: new Date("2018-09-06T17:29:35.243Z"),array: [new Date("2018-09-06T12:18:52.460Z"),34809,49767,"Cambridgeshire"],obj: {_id: 4936,str: "challenge",num: 69401,date: new Date("2018-09-05T20:45:17.526Z"),obj: {_id: 4937,str: "Checking Account digital",array: [],obj: {}}}}},"Borders utilize",new Date("2018-09-06T14:42:46.739Z"),"Consultant Nuevo Sol Alaska"]});
    },

    function(coll) {
        return coll.insert({_id: 4938,str: "indexing withdrawal",date: new Date("2018-09-05T21:32:54.166Z"),array: ["Rubber installation frictionless",new Date("2018-09-06T11:38:28.664Z"),19449,{_id: 4939,str: "Applications hack killer",num: 35123,date: new Date("2018-09-06T05:19:59.504Z"),obj: {_id: 4940,num: 94109,array: [],obj: {}}},[],95948,[],{_id: 4941,str: "gold",num: 5395,date: new Date("2018-09-06T04:35:06.447Z"),array: [],obj: {_id: 4942,str: "emulation Awesome",num: 8156,date: new Date("2018-09-05T22:37:05.801Z"),array: [new Date("2018-09-06T08:23:21.165Z")],obj: {}}},58349,75457,"Cambridgeshire bypass override",new Date("2018-09-06T19:49:51.358Z"),[]]});
    },

    function(coll) {
        return coll.insert({_id: 4943,str: "Licensed CFA Franc BEAC",num: 48269,date: new Date("2018-09-05T20:21:33.611Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 4944,str: "red eco-centric wireless",num: 58779,date: new Date("2018-09-06T03:40:36.268Z"),array: [],obj: {_id: 4945,str: "Mauritius Pa'anga",num: 77220,date: new Date("2018-09-06T10:23:47.191Z"),array: ["multimedia",new Date("2018-09-06T03:29:19.957Z"),new Date("2018-09-06T13:15:40.696Z"),27923,{_id: 4946,str: "solid state",num: 87136,date: new Date("2018-09-06T15:56:59.668Z"),array: [],obj: {}},"paradigms models Incredible",new Date("2018-09-05T20:34:16.355Z"),41550,"synthesizing customized",new Date("2018-09-06T03:27:11.867Z")],obj: {_id: 4947,array: [2542,new Date("2018-09-06T12:59:34.667Z")],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 4948,str: "bypassing Somalia",date: new Date("2018-09-06T17:27:19.639Z"),array: ["Wyoming",new Date("2018-09-06T05:32:41.795Z"),new Date("2018-09-06T00:30:01.530Z"),"Auto Loan Account Shirt","empowering",99962,12416,{_id: 4949,str: "Underpass Buckinghamshire",num: 29684,date: new Date("2018-09-05T22:58:41.566Z"),array: [],obj: {}},[80541,"Virtual Sri Lanka Rupee",[],new Date("2018-09-06T15:54:07.053Z")],60965],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 4950,num: 1767,date: new Date("2018-09-06T01:26:20.650Z"),array: [],obj: {}});
    },

];

const indexList = [

    function(coll) {
        return coll.createIndex({"obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": -1, "num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": 1, "obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": 1, "date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": 1, "obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"num": 1, "obj.obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": 1, "num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": 1, "date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": -1, "date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": -1, "obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": -1, "obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": -1, "obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"str": 1, "date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": -1, "obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"date": 1, "obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": 1, "obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": -1, "obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"num": 1, "str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"num": -1, "obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": -1, "num": -1});
    },

    function(coll) {
        return coll.createIndex({"str": -1});
    },

    function(coll) {
        return coll.createIndex({"date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": 1, "obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": 1, "obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"str": 1, "obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": 1, "obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"date": -1, "obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": 1, "str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": 1, "obj.obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"num": 1, "obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": 1, "num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": 1, "obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"str": -1, "obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": 1, "num": -1});
    },

    function(coll) {
        return coll.createIndex({"num": -1, "obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": 1, "date": 1});
    },

    function(coll) {
        return coll.createIndex({"num": -1, "str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": 1, "date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": -1, "obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": -1, "obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": -1, "obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": 1, "obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": -1, "obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": -1, "num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": -1, "obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"str": 1, "obj.obj.obj.date": -1});
    },

];

const aggregationList = [

        [{$project: {a: { $substrCP: ["facilitate Granite Home Loan Account",4,7] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "South Georgia and the South Sandwich Islands attitude-oriented",v: "Jewelery Buckinghamshire"},{k: "JBOD Future back-end",v: 407},{k: "CSS SDD Unbranded Frozen Ball",v: { $ltrim: {input: '$obj.str',chars: { $dateToString: {date: { $dateToParts: { date: new Date("2018-09-06T11:25:11.593Z") } },format: "%V-%j-%V-%u-%Y-%u-%z-%M-%G-%d"} }} }},{k: "Granite Fundamental magenta",v: '$obj.obj.obj.date'}]] }, _id: 0}}],

        [{$project: {a: { $dayOfMonth: { $dateFromString: {dateString: "2018-09-06T07:56:48.347Z",onNull: { $toUpper: '$obj.str' }} } }, _id: 0}}],

        [{$project: {a: { $concat: ["Profit-focused Legacy fuchsia"] }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: '$obj.date',format: "%Z-%L-%U-%S-%M-%G-%M-%M-%d-%U",onNull: { $isoWeek: { $dateFromString: {dateString: "2018-09-06T13:38:29.103Z",onNull: { $arrayElemAt: [["Gorgeous"],26689] }} } }} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[["Supervisor payment leading-edge",'$obj.obj.str'],[],[{ $toString: { $arrayElemAt: [["back-end",'$obj.obj.str'],'$obj.obj.num'] } }]]] }, _id: 0}}],

        [{$project: {a: { $concat: ['$str'] }, _id: 0}}],

        [{$project: {a: { $reverseArray: [["Automated Metal","Planner panel"]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$num'] }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj' }, _id: 0}}],

        [{$project: {a: { $rtrim: {input: "generate",chars: '$obj.obj.obj.str'} }, _id: 0}}],

        [{$project: {a: { $millesecond: { $dayOfMonth: { $isoWeekYear: { $isoDayOfWeek: { $dateFromParts: {year: { $subtract: [66739,22314] },month: { $multiply: ['$num'] },minute: { $divide: [93616,'$num'] }} } } } } }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj' }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],19641] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $substrCP: ['$obj.obj.obj.str',10,3] }],59953] }, _id: 0}}],

        [{$project: {a: { $concat: ['$str','$obj.obj.obj.str','$obj.str'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[{ $toLower: { $dateToString: { date: new Date("2018-09-05T23:36:28.557Z") } } },'$obj.obj.obj.str'],[],[],['$obj.str']]] }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj.obj' }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Gorgeous Soft Mouse reintermediate Circles",v: false}]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.str'],23860] }, _id: 0}}],

        [{$project: {a: { $substrBytes: ['$obj.str',15,0] }, _id: 0}}],

        [{$project: {a: { $concatArrays: [['$obj.str']] }, _id: 0}}],

        [{$project: {a: { $dateFromParts: {year: { $mod: [74150,13473] },day: { $size: [["supply-chains Kids plum",{ $substrBytes: ['$obj.obj.obj.str',20,9] }]] },hour: { $trunc: 10072 },millisecond: { $add: [] },timezone: "Asia/Yerevan"} }, _id: 0}}],

        [{$project: {a: { $isoWeek: { $dayOfYear: { $dayOfWeek: { $millesecond: { $toDate: { $arrayElemAt: [[{ $ltrim: { input: "demand-driven Bulgarian Lev networks" } }],'$num'] } } } } } }, _id: 0}}],

        [{$project: {a: { $concatArrays: [[],["transition Gorgeous Frozen Keyboard"],[79081,'$obj.obj.num'],["Granite Grass-roots Branding",'$obj.str']] }, _id: 0}}],

        [{$project: {a: { $isoWeekYear: { $dateToString: {date: new Date("2018-09-06T11:46:06.146Z"),timezone: "Pacific/Kosrae"} } }, _id: 0}}],

        [{$project: {a: { $isoDayOfWeek: { $dayOfWeek: { $minute: { $isoWeek: { $dateFromParts: {year: { $exp: { $divide: ['$num',22209] } },day: { $log: ['$num','$num'] },hour: { $sqrt: 39391 },second: { $indexOfArray: [{ $zip: {inputs: [['$obj.obj.obj.str',{ $substrCP: ['$obj.obj.str',12,6] },{ $concat: [] }],[{ $log10: '$num' }],["Licensed"]],useLongestLength: true} },{ $concatArrays: [[22182,'$obj.obj.num'],[]] },7,13] }} } } } } }, _id: 0}}],

        [{$project: {a: { $minute: { $isoWeek: { $isoDayOfWeek: { $isoWeek: { $second: { $dayOfMonth: { $dayOfWeek: { $dateFromString: {dateString: "2018-09-06T13:50:35.538Z",format: "%S-%V-%z-%V-%L-%M-%z",onNull: '$str'} } } } } } } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$num'] }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: { $millesecond: { $hour: { $dayOfMonth: { $isoWeekYear: { $toDate: { $toLower: { $dateToString: {date: new Date("2018-09-06T00:33:42.712Z"),format: "%L-%w-%V-%S-%G-%d-%%-%Z-%u-%w-%M",timezone: "America/Manaus"} } } } } } } },onNull: "monitor"} }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj.obj.obj' }, _id: 0}}],

        [{$project: {a: { $hour: { $minute: { $dayOfMonth: { $isoDayOfWeek: { $week: { $isoWeekYear: { $isoWeekYear: { $month: { $toDate: { $objectToArray: '$obj.obj.obj.obj' } } } } } } } } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["generate National"],9564] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Metal bluetooth composite",v: 9488},{k: "Idaho",v: 29065},{k: "calculate Honduras deposit",v: "uniform intermediate"}]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "COM",v: { $toLower: "Outdoors" }},{k: "architect",v: { $substr: ['$obj.obj.str',11,1] }}]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["Salad Berkshire","Reverse-engineered"],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Fish Kentucky Vermont",v: { $rtrim: { input: '$str' } }}]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.obj.str'],35388] }, _id: 0}}],

        [{$project: {a: { $dateToString: { date: '$obj.date' } }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj' }, _id: 0}}],

        [{$project: {a: { $substrCP: [{ $toString: { $second: { $isoDayOfWeek: { $dateFromParts: {isoWeekYear: { $add: ['$obj.obj.num'] },hour: 74614,minute: { $pow: ['$obj.obj.num',1356] },second: { $mod: [57036,88499] },millisecond: '$num'} } } } },20,7] }, _id: 0}}],

        [{$project: {a: { $rtrim: {input: "override Movies",chars: { $substrBytes: ["optical",1,14] }} }, _id: 0}}],

        [{$project: {a: { $reverseArray: [[true]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Florida facilitate",v: '$num'}]] }, _id: 0}}],

        [{$project: {a: { $month: { $isoDayOfWeek: { $dayOfWeek: { $week: { $dayOfYear: { $year: { $year: { $dateFromString: {dateString: "2018-09-06T13:57:06.104Z",format: "%G-%S-%U-%w-%d-%z-%S-%m-%z-%z",timezone: "Asia/Singapore",onError: { $ltrim: { input: "sensor" } }} } } } } } } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[]] }, _id: 0}}],

        [{$project: {a: { $millesecond: { $dayOfMonth: { $isoWeek: { $minute: { $dateToString: {date: '$obj.obj.obj.date',format: "%S-%u-%z-%V-%m-%V-%M-%m-%Z-%w-%w"} } } } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[41681,'$obj.num',76515,'$obj.obj.num'],{ $abs: 31411 }] }, _id: 0}}],

        [{$project: {a: { $dateFromString: { dateString: "2018-09-06T08:14:56.874Z" } }, _id: 0}}],

        [{$project: {a: { $toUpper: "Berkshire Re-contextualized Legacy" }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [[{ $ln: 97054 }],[],[{ $substrBytes: [{ $substr: [{ $trim: { input: '$obj.obj.str' } },17,17] },1,2] },'$num'],["focus group",{ $concat: ['$obj.str',"Electronics"] }]],useLongestLength: false,defaults: [new Date("2018-09-06T05:02:53.241Z")]} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Auto Loan Account monetize",v: new Date("2018-09-05T23:18:12.008Z")},{k: "productize",v: false}]] }, _id: 0}}],

        [{$project: {a: { $map: {input: [35490,96932],as: 'michel',in: { $multiply: [] }} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$obj.obj.str',"Mouse Functionality budgetary management"],["Solutions matrix customized",{ $substrCP: ['$str',17,18] }],[]]] }, _id: 0}}],

        [{$project: {a: { $dayOfYear: { $month: { $second: { $dayOfYear: { $millesecond: { $dateFromParts: {isoWeekYear: { $divide: ['$obj.num',32114] },isoDayOfWeek: { $mod: [67647,'$num'] },minute: { $pow: ['$obj.obj.num',{ $trunc: { $add: [] } }] },millisecond: '$num'} } } } } } }, _id: 0}}],

        [{$project: {a: { $trim: { input: { $ltrim: { input: '$obj.obj.obj.str' } } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Towels open architecture",v: '$num'}]] }, _id: 0}}],

        [{$project: {a: { $range: [5,6] }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [[],[],['$obj.obj.str'],[],['$obj.obj.str',{ $toString: { $ltrim: {input: "Pants Sleek",chars: "Cedi calculate Table"} } }],[]],useLongestLength: true} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$num'] }, _id: 0}}],

        [{$project: {a: { $filter: {input: [],cond: { $or: ['$obj.obj.str','$$this'] }} }, _id: 0}}],

        [{$project: {a: { $isoWeekYear: { $dayOfWeek: { $month: { $millesecond: { $year: { $month: new Date("2018-09-06T07:16:43.077Z") } } } } } }, _id: 0}}],

        [{$project: {a: { $isoDayOfWeek: { $week: { $millesecond: { $month: { $isoDayOfWeek: { $toDate: { $arrayToObject: [[{k: "Orchestrator maroon standardization",v: 37321}]] } } } } } } }, _id: 0}}],

        [{$project: {a: { $filter: {input: ['$obj.str'],cond: { $eq: [{ $week: { $dayOfMonth: { $dayOfMonth: { $hour: { $isoDayOfWeek: { $second: { $toDate: { $arrayElemAt: [[],'$obj.obj.num'] } } } } } } } },{ $second: { $second: { $dayOfWeek: { $hour: { $dateFromString: {dateString: "2018-09-06T12:17:20.784Z",format: "%V-%V-%H-%m-%H-%z",timezone: "Pacific/Pitcairn",onNull: '$$this'} } } } } }] }} }, _id: 0}}],

        [{$project: {a: { $dateFromString: { dateString: "2018-09-06T14:07:45.130Z" } }, _id: 0}}],

        [{$project: {a: { $year: { $isoDayOfWeek: { $dateFromString: {dateString: "2018-09-06T08:45:35.623Z",timezone: "America/Rio_Branco",onError: { $arrayToObject: [[[],['$obj.obj.str'],[]]] }} } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.str',"Orchestrator Markets",{ $toUpper: { $trim: { input: { $trim: {input: '$str',chars: '$str'} } } } },{ $toLower: "B2B back-end" }],21290] }, _id: 0}}],

        [{$project: {a: { $range: [11,4,17] }, _id: 0}}],

        [{$project: {a: { $concat: ['$str'] }, _id: 0}}],

        [{$project: {a: { $concatArrays: [[{ $rtrim: {input: { $ltrim: { input: "instruction set hard drive turquoise" } },chars: "XSS Nepalese Rupee"} }],[]] }, _id: 0}}],

        [{$project: {a: { $rtrim: {input: { $substr: ['$obj.obj.obj.str',2,18] },chars: '$obj.obj.obj.str'} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],60790] }, _id: 0}}],

        [{$project: {a: { $concatArrays: [['$obj.obj.obj.str',{ $substrBytes: [{ $toLower: '$obj.obj.str' },13,13] }],[true,{ $toDate: { $rtrim: { input: "bluetooth Customer wireless" } } }],['$num'],[]] }, _id: 0}}],

        [{$project: {a: { $second: { $dayOfMonth: { $year: { $hour: { $second: { $hour: { $dateFromString: {dateString: "2018-09-06T04:14:24.387Z",timezone: "America/Adak",onError: { $toDate: { $arrayElemAt: [[],74032] } }} } } } } } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "productivity redundant Industrial",v: 47706}]] }, _id: 0}}],

        [{$project: {a: { $dateToParts: { date: { $dateFromParts: {isoWeekYear: { $ln: '$num' },isoWeek: { $size: [['$num']] },isoDayOfWeek: { $exp: 70572 },hour: { $exp: '$obj.obj.num' }} } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[90060,'$obj.num'],['$obj.obj.str'],[{ $toString: { $dayOfMonth: { $dateToParts: {date: { $month: { $dayOfMonth: { $isoWeekYear: { $year: { $toDate: { $filter: {input: [],as: 'chesley',cond: { $lt: [{ $concat: [] },{ $arrayElemAt: [[],87855] }] }} } } } } } },iso8601: true} } } },{ $substr: ['$str',12,6] }],[{ $trim: { input: "Home Loan Account communities" } },"niches"],[75172,'$num',78449,79516]]] }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: new Date("2018-09-06T09:06:10.905Z"),onNull: { $toLower: "card" }} }, _id: 0}}],

        [{$project: {a: { $substrBytes: [{ $dateToString: {date: { $dateFromParts: {year: { $floor: 3423 },day: { $trunc: '$obj.obj.num' },hour: { $log10: 64187 },timezone: "Australia/Lord_Howe"} },timezone: "America/Paramaribo"} },5,19] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.obj.str'],4984] }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj' }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Personal Loan Account Factors extend",v: { $toLower: "Configuration strategy" }},{k: "Salad Agent",v: false},{k: "GB Customer-focused Bedfordshire",v: '$obj.obj.str'}]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Architect Customizable magnetic",v: false}]] }, _id: 0}}],

        [{$project: {a: { $range: [6,13,9] }, _id: 0}}],

        [{$project: {a: { $dayOfMonth: { $millesecond: { $dateToString: {date: '$obj.obj.date',onNull: '$obj.str'} } } }, _id: 0}}],

        [{$project: {a: { $concatArrays: [['$obj.str']] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],37922] }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: '$date',timezone: "America/Kentucky/Monticello",onNull: { $zip: {inputs: [[],[],[{ $ltrim: {input: '$str',chars: "firmware"} }],[]],useLongestLength: true} }} }, _id: 0}}],

        [{$project: {a: { $rtrim: { input: '$obj.obj.obj.str' } }, _id: 0}}],

        [{$project: {a: { $concat: ['$str',{ $substrCP: ["indexing synthesize navigating",2,0] }] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],['$obj.num',10893,'$obj.obj.num'],[{ $concat: [] },{ $rtrim: { input: '$obj.obj.str' } }]]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$num','$num',28366],2807] }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [["Louisiana Bedfordshire",'$str'],[],[47828,'$obj.num',61303]],defaults: [/clear\-thinking/]} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $trim: { input: "web services port Auto Loan Account" } }],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $range: [1,0,4] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Checking Account withdrawal backing up",v: "Rest synergistic"},{k: "Mountains Oman Small Steel Cheese",v: true}]] }, _id: 0}}],

        [{$project: {a: { $toUpper: '$str' }, _id: 0}}],

        [{$project: {a: { $range: [14,17] }, _id: 0}}],

        [{$project: {a: { $dateToParts: { date: { $minute: { $isoWeekYear: { $minute: { $isoDayOfWeek: { $toDate: { $arrayToObject: [[[],["Wooden bandwidth upward-trending"],[{ $dateToString: {date: { $isoWeek: { $dayOfMonth: { $dateToString: {date: '$obj.obj.obj.date',timezone: "Asia/Chongqing"} } } },onNull: "purple navigating"} },{ $toUpper: "Checking Account" },'$obj.obj.str'],[],[]]] } } } } } } } }, _id: 0}}],

        [{$project: {a: { $isoDayOfWeek: { $minute: new Date("2018-09-06T00:05:27.083Z") } }, _id: 0}}],

        [{$project: {a: { $toString: { $dayOfWeek: { $month: { $dayOfMonth: { $week: { $dayOfWeek: { $dateFromString: {dateString: "2018-09-06T01:56:05.579Z",timezone: "Etc/GMT-2",onError: { $arrayToObject: [[{k: "Specialist Executive payment",v: '$str'},{k: "success Road",v: new Date("2018-09-06T03:06:57.912Z")}]] }} } } } } } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[79615,'$obj.obj.num'],["auxiliary",'$obj.obj.obj.str']]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$num'] }, _id: 0}}],

        [{$project: {a: { $trim: {input: "Land",chars: { $toUpper: { $rtrim: {input: '$obj.obj.obj.str',chars: '$obj.obj.str'} } }} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$str'],['$obj.num'],['$obj.num'],["optimizing data-warehouse"],[77174,71263],[]]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Serbian Dinar Generic Steel Soap",v: true}]] }, _id: 0}}],

        [{$project: {a: { $trim: {input: "invoice",chars: { $substr: ['$str',3,3] }} }, _id: 0}}],

        [{$project: {a: { $range: [3,9,14] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.obj.str',{ $concat: ["Avon Massachusetts"] }],'$num'] }, _id: 0}}],

        [{$project: {a: { $millesecond: { $dayOfYear: { $hour: { $dayOfWeek: { $minute: { $dayOfMonth: { $dateFromParts: {year: { $subtract: [26785,'$num'] },month: { $size: [['$str']] },day: { $log: ['$num',65801] },hour: { $abs: '$obj.num' }} } } } } } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "back up one-to-one",v: '$num'},{k: "American Samoa blue copying",v: 6910},{k: "Saint Lucia",v: new Date("2018-09-06T08:58:36.891Z")}]] }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: '$date',format: "%H-%L-%G-%d-%z-%d-%H-%Y",timezone: "Etc/GMT-11"} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Berkshire optimal",v: true},{k: "Accounts quantify",v: { $concat: [{ $substrBytes: [{ $substr: ['$obj.str',14,6] },8,1] },'$obj.str'] }}]] }, _id: 0}}],

        [{$project: {a: { $rtrim: { input: "digital Auto Loan Account Architect" } }, _id: 0}}],

        [{$project: {a: { $concatArrays: [[98779],[],['$obj.obj.str',{ $dateToString: {date: new Date("2018-09-06T02:38:22.924Z"),format: "%u-%L-%j-%Y-%V-%V-%m-%u-%w-%H-%z"} },"bifurcated Designer",{ $substrBytes: ['$obj.str',5,13] }],['$str'],['$obj.obj.obj.str']] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "toolset Road",v: false},{k: "Rubber Small teal",v: new Date("2018-09-05T21:50:04.028Z")},{k: "Jewelery Practical Concrete Car",v: '$obj.obj.obj.str'}]] }, _id: 0}}],

        [{$project: {a: { $toUpper: '$obj.str' }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "transmitter",v: new Date("2018-09-05T22:53:56.194Z")},{k: "bypassing 1080p Health",v: true},{k: "bluetooth Data",v: true}]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $toString: { $arrayElemAt: [[],'$obj.num'] } },"Rufiyaa Specialist"],87343] }, _id: 0}}],

        [{$project: {a: { $dateFromString: {dateString: "2018-09-05T21:56:08.231Z",format: "%H-%H-%V-%S-%z-%M-%d-%z-%L-%d-%M",timezone: "GB-Eire",onNull: { $trim: {input: '$obj.obj.str',chars: { $toLower: '$obj.obj.str' }} }} }, _id: 0}}],

        [{$project: {a: { $concatArrays: [['$obj.str',"Practical Steel Chips"],[{ $ltrim: { input: { $substr: ['$obj.obj.obj.str',3,0] } } }],[10447,'$obj.obj.num']] }, _id: 0}}],

        [{$project: {a: { $week: { $week: { $dayOfWeek: '$obj.obj.obj.date' } } }, _id: 0}}],

        [{$project: {a: { $dateToParts: { date: { $millesecond: { $isoDayOfWeek: { $hour: { $isoWeek: { $dateFromString: {dateString: "2018-09-06T00:37:44.821Z",format: "%m-%V-%U-%z-%%-%u-%H",onError: { $filter: {input: [],as: 'leora',cond: { $and: [{ $toString: { $arrayElemAt: [['$obj.obj.num'],35542] } }] }} },onNull: { $arrayToObject: [[['$obj.obj.num','$obj.num'],[],["Cotton withdrawal","system-worthy Lao People's Democratic Republic",{ $rtrim: {input: '$obj.obj.obj.str',chars: '$obj.str'} }]]] }} } } } } } } }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: { $isoDayOfWeek: { $dateToString: { date: '$obj.date' } } },format: "%U-%S-%u-%V-%w-%H-%w-%d-%u-%z",timezone: "Pacific/Guam"} }, _id: 0}}],

        [{$project: {a: { $millesecond: { $dateFromString: {dateString: "2018-09-06T16:02:17.502Z",format: "%L-%U-%G-%Z-%L-%S-%S-%G",timezone: "Africa/Ouagadougou"} } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[new Date("2018-09-06T09:41:28.865Z"),'$obj.obj.obj.str',67243],78780] }, _id: 0}}],

        [{$project: {a: { $filter: {input: ['$obj.obj.num',56107,30076],as: 'bianka',cond: { $lte: [{ $substrBytes: [{ $toUpper: { $toLower: '$str' } },7,17] },{ $map: {input: [],in: { $add: [] }} }] }} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["Motorway Fantastic Books","Ports",'$obj.obj.obj.str'],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "compressing Reverse-engineered",v: { $log: [14410,38968] }},{k: "Togo calculate",v: true}]] }, _id: 0}}],

        [{$project: {a: { $substrCP: [{ $toUpper: '$obj.obj.str' },7,1] }, _id: 0}}],

        [{$project: {a: { $toLower: "Unbranded Steel" }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "niches interfaces enable",v: "Consultant Triple-buffered"},{k: "Fords",v: true}]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[{ $toUpper: "Future Usability engage" },'$str'],['$obj.num',{ $pow: [72769,45451] },7052],[]]] }, _id: 0}}],

        [{$project: {a: { $second: { $second: { $isoDayOfWeek: { $dateToParts: {date: { $dayOfYear: { $minute: { $dayOfMonth: { $dayOfYear: { $millesecond: { $dateToString: {date: '$date',format: "%m-%w-%H-%w-%V",onNull: { $arrayToObject: [[[{ $ltrim: { input: '$obj.str' } },"Car Games"],['$obj.obj.num']]] }} } } } } } },timezone: "Etc/GMT-10",iso8601: false} } } } }, _id: 0}}],

        [{$project: {a: { $toString: { $arrayElemAt: [[],'$obj.num'] } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Vista infrastructures navigate",v: '$obj.num'}]] }, _id: 0}}],

        [{$project: {a: { $substrCP: ['$obj.obj.obj.str',12,4] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Pound Sterling primary",v: "Sports interface Refined Fresh Towels"},{k: "Portugal Belarussian Ruble",v: 84377}]] }, _id: 0}}],

        [{$project: {a: { $concat: ['$str',{ $substrBytes: ["Direct 1080p Investment Account",19,17] }] }, _id: 0}}],

        [{$project: {a: { $trim: {input: "Interactions",chars: '$obj.obj.str'} }, _id: 0}}],

        [{$project: {a: { $year: { $minute: { $week: { $toDate: { $minute: { $dateFromString: {dateString: "2018-09-05T23:19:10.029Z",format: "%%-%m-%Y-%H-%M-%w-%L",timezone: "America/Regina",onError: { $zip: { inputs: [['$obj.obj.obj.str',{ $substr: ["Money Market Account Singapore Dollar West Virginia",16,15] },"Games array withdrawal"],[]] } },onNull: { $arrayToObject: [[{k: "Regional",v: '$obj.obj.num'},{k: "Re-engineered Concrete Games",v: { $substrBytes: [{ $dateToString: {date: { $second: { $dateFromParts: {isoWeekYear: { $ceil: 48928 },isoDayOfWeek: { $divide: ['$obj.obj.num',76315] },hour: { $indexOfArray: [{ $objectToArray: '$obj.obj.obj' },{ $month: { $millesecond: { $dayOfMonth: { $millesecond: { $month: { $dayOfWeek: new Date("2018-09-06T05:54:40.448Z") } } } } } },0] }} } },onNull: '$obj.obj.obj.str'} },8,7] }},{k: "models Checking Account bleeding-edge",v: '$date'}]] }} } } } } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "XML Automotive",v: '$obj.obj.num'}]] }, _id: 0}}],

        [{$project: {a: { $concat: ["salmon"] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "24/7 Principal",v: { $month: { $isoWeekYear: { $dayOfWeek: { $dayOfMonth: { $isoWeekYear: { $isoWeek: { $dateToString: {date: new Date("2018-09-06T19:50:10.545Z"),timezone: "America/Asuncion",onNull: { $arrayElemAt: [['$num',85230,32849,44786],'$obj.num'] }} } } } } } } }}]] }, _id: 0}}],

        [{$project: {a: { $week: { $dateToString: {date: new Date("2018-09-06T10:18:55.104Z"),format: "%z-%L-%u-%V-%G-%G-%S-%%-%%",timezone: "Pacific/Noumea"} } }, _id: 0}}],

        [{$project: {a: { $concatArrays: [["Fresh"],[844],[],[]] }, _id: 0}}],

        [{$project: {a: { $dateFromString: {dateString: "2018-09-06T08:16:39.523Z",format: "%d-%V-%z-%M-%d-%u-%S-%w",onError: { $arrayToObject: [[{k: "generating program",v: { $millesecond: { $year: { $dateFromString: {dateString: "2018-09-06T16:28:52.919Z",timezone: "Africa/Ouagadougou",onNull: { $arrayToObject: [[['$num'],['$obj.str',{ $concat: ["RAM"] },'$obj.obj.str'],[70464,'$num'],[{ $rtrim: { input: { $dateToString: {date: '$date',format: "%m-%G-%L-%w-%j-%w",timezone: "America/Phoenix",onNull: '$obj.obj.str'} } } }]]] }} } } }}]] },onNull: "Architect"} }, _id: 0}}],

        [{$project: {a: { $range: [14,14] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "reboot",v: "sky blue"}]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Dynamic bypass",v: { $trim: { input: '$str' } }},{k: "Jordan Buckinghamshire Intelligent Frozen Towels",v: '$date'},{k: "Tuna Exclusive Cambodia",v: false},{k: "purple",v: false}]] }, _id: 0}}],

        [{$project: {a: { $isoWeekYear: { $hour: { $millesecond: '$date' } } }, _id: 0}}],

        [{$project: {a: { $toDate: { $arrayToObject: [[{k: "attitude-oriented hacking aggregate",v: 95854}]] } }, _id: 0}}],

        [{$project: {a: { $ltrim: { input: '$obj.obj.str' } }, _id: 0}}],

        [{$project: {a: { $concat: ['$str'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.num'],'$num'] }, _id: 0}}],

        [{$project: {a: { $dayOfYear: { $isoWeek: { $dateFromString: {dateString: "2018-09-06T11:55:32.282Z",format: "%U-%Z-%G-%%-%L-%L-%w-%G-%Z",timezone: "America/Argentina/La_Rioja",onNull: '$obj.str'} } } }, _id: 0}}],

        [{$project: {a: { $concat: ['$str',{ $rtrim: { input: '$obj.obj.str' } }] }, _id: 0}}],

        [{$project: {a: { $concat: [{ $substrBytes: ["connecting Qatari Rial",18,16] },'$obj.str','$obj.obj.str'] }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [],useLongestLength: true,defaults: ["Graphical User Interface Compatible parse"]} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[["Cotton Optimization Tasty",{ $concat: [] }],[],['$obj.obj.date'],[]]] }, _id: 0}}],

        [{$project: {a: { $toDate: { $substrBytes: ['$obj.str',3,2] } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[]] }, _id: 0}}],

        [{$project: {a: { $concat: ['$obj.str'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Investment Account",v: '$obj.obj.num'}]] }, _id: 0}}],

        [{$project: {a: { $toString: { $arrayToObject: [[['$obj.obj.obj.str',{ $rtrim: { input: '$obj.obj.obj.str' } }],[],['$obj.obj.num'],["Small mobile Way","connect"]]] } }, _id: 0}}],

        [{$project: {a: { $week: { $dateFromString: {dateString: "2018-09-06T01:00:26.737Z",timezone: "America/Argentina/ComodRivadavia",onError: { $range: [0,0,7] }} } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Compatible Generic",v: '$obj.date'},{k: "Montana South Georgia and the South Sandwich Islands invoice",v: "invoice Organized"},{k: "Sleek Plastic Chair Practical Persistent",v: false}]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$num'] }, _id: 0}}],

        [{$project: {a: { $ltrim: {input: "Checking Account Usability",chars: '$obj.obj.str'} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[]] }, _id: 0}}],

        [{$project: {a: { $filter: {input: ['$obj.num','$obj.num'],as: 'leola',cond: { $gt: [{ $toUpper: { $substrBytes: ['$$leola',19,13] } },{ $week: { $minute: { $year: { $dateFromString: {dateString: "2018-09-06T14:49:39.822Z",timezone: "Brazil/DeNoronha",onError: { $dateToString: {date: '$$leola',onNull: { $dateToParts: { date: { $isoDayOfWeek: { $dateToParts: {date: { $dayOfWeek: { $millesecond: { $month: { $dateFromParts: {year: { $mod: [47622,62382] },day: { $trunc: '$obj.obj.num' },hour: { $add: [] },second: { $log: [{ $subtract: [27459,'$$leola'] },24766] },timezone: "Brazil/East"} } } } },timezone: "Canada/Mountain",iso8601: false} } } } }} }} } } } }] }} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],["Networked"],[],['$obj.obj.obj.str']]] }, _id: 0}}],

        [{$project: {a: { $dayOfWeek: { $week: { $hour: { $minute: { $dateToString: {date: new Date("2018-09-06T11:58:04.943Z"),format: "%u-%d-%j-%G-%u-%U-%V-%H-%V",timezone: "US/Alaska"} } } } } }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj' }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[]]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "e-business invoice Pants",v: 26575}]] }, _id: 0}}],

        [{$project: {a: { $substrCP: [{ $trim: { input: '$obj.obj.str' } },16,4] }, _id: 0}}],

        [{$project: {a: { $toDate: { $concat: ['$str',"Sports"] } }, _id: 0}}],

        [{$project: {a: { $trim: {input: '$obj.obj.obj.str',chars: '$obj.obj.str'} }, _id: 0}}],

        [{$project: {a: { $range: [19,19,11] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "parallelism",v: { $month: { $hour: { $week: { $dayOfWeek: { $dateFromString: {dateString: "2018-09-06T02:44:52.444Z",format: "%j-%H-%G-%U",timezone: "Australia/Currie",onError: { $arrayToObject: [[["Architect"]]] },onNull: { $dayOfYear: { $isoWeek: { $dateFromString: {dateString: "2018-09-06T14:30:06.155Z",format: "%M-%Y-%V-%V-%%-%u-%m-%m-%%-%V-%U-%%",onError: { $map: {input: [],as: 'chanelle',in: { $divide: [23572,'$$chanelle'] }} }} } } }} } } } } }},{k: "Refined interface",v: false},{k: "Ergonomic Soft Cheese red Fresh",v: 17164},{k: "cyan Architect",v: { $rtrim: {input: { $concat: ['$obj.str',"hybrid hardware neural-net",'$obj.str'] },chars: "Unbranded Rustic Metal Shoes"} }},{k: "Future Buckinghamshire moderator",v: { $substrBytes: [{ $ltrim: {input: '$obj.str',chars: "Infrastructure Fantastic Frozen Soap"} },19,15] }}]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "needs-based attitude driver",v: "ROI plum"}]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "architectures Frozen Georgia",v: true},{k: "target Wooden",v: true}]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "contingency",v: '$obj.date'},{k: "Taka Progressive monitor",v: { $rtrim: { input: { $ltrim: { input: "Licensed Wooden Bacon Unbranded" } } } }}]] }, _id: 0}}],

        [{$project: {a: { $dateFromParts: {isoWeekYear: { $subtract: ['$obj.obj.num',91804] },isoWeek: { $pow: [{ $log10: '$obj.num' },'$num'] }} }, _id: 0}}],

        [{$project: {a: { $dateFromParts: {year: { $divide: ['$obj.obj.num',64519] },month: { $floor: 26180 }} }, _id: 0}}],

        [{$project: {a: { $toString: { $arrayToObject: [[["backing up seize",{ $rtrim: { input: '$obj.str' } }],[],[false],[]]] } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "matrix",v: 93064}]] }, _id: 0}}],

        [{$project: {a: { $map: {input: ['$obj.obj.num',47497],in: { $ceil: '$obj.obj.num' }} }, _id: 0}}],

        [{$project: {a: { $reverseArray: [['$obj.str']] }, _id: 0}}],

        [{$project: {a: { $dayOfWeek: { $dayOfMonth: { $millesecond: { $dateFromString: {dateString: "2018-09-06T16:38:14.606Z",timezone: "America/Halifax",onNull: { $substr: [{ $toUpper: '$obj.obj.obj.str' },9,5] }} } } } }, _id: 0}}],

        [{$project: {a: { $week: { $month: { $dayOfMonth: { $dateToParts: {date: { $millesecond: { $year: { $second: { $year: { $dateFromString: {dateString: "2018-09-06T18:59:16.967Z",format: "%S-%u-%d-%S-%V-%z-%u-%V-%S-%Y-%j-%V",timezone: "Etc/GMT-3",onError: { $arrayToObject: [[{k: "Concrete",v: true}]] }} } } } } },iso8601: false} } } } }, _id: 0}}],

        [{$project: {a: { $substrCP: ["scalable architect",6,9] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $toLower: { $trim: { input: '$obj.obj.str' } } }, _id: 0}}],

        [{$project: {a: { $toString: { $arrayToObject: [[{k: "programming",v: '$obj.obj.num'}]] } }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: '$obj.obj.date',onNull: { $arrayToObject: [[{k: "Savings Account",v: new Date("2018-09-06T03:00:00.499Z")}]] }} }, _id: 0}}],

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
