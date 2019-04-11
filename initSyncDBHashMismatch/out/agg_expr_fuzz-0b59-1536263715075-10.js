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
        return coll.insert({_id: 6211,str: "Sleek Plastic Fish Response Multi-lateral",num: 52307,date: new Date("2018-09-06T17:39:34.763Z"),array: [],obj: {_id: 6212,num: 43201,date: new Date("2018-09-05T21:34:18.934Z"),array: [new Date("2018-09-06T08:43:49.864Z"),37200,new Date("2018-09-06T03:30:22.904Z"),20167,"initiatives Forward COM","Antarctica (the territory South of 60 deg S) 1080p bypass",[],98057,"Home Loan Account","Awesome Steel Sausages array",64858,39752],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 6213,str: "Steel",date: new Date("2018-09-06T05:44:29.174Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 6214,str: "Intelligent Concrete Bike Bedfordshire",num: 22774,date: new Date("2018-09-06T19:45:38.505Z"),array: ["gold",new Date("2018-09-05T20:03:03.479Z"),2252,{_id: 6215,str: "Landing program",num: 2976,obj: {_id: 6216,str: "panel Rue",date: new Date("2018-09-06T13:40:20.599Z")}},41996,["override Rwanda knowledge user",{_id: 6217,num: 5688,date: new Date("2018-09-05T22:26:08.161Z"),array: [],obj: {_id: 6218,date: new Date("2018-09-06T00:55:31.674Z"),array: [new Date("2018-09-06T16:12:08.617Z"),96415,new Date("2018-09-06T08:55:37.916Z")],obj: {}}},{_id: 6219,str: "Kansas",date: new Date("2018-09-06T00:20:41.855Z"),obj: {}}],["ADP fault-tolerant",new Date("2018-09-05T21:31:58.645Z"),57479,"ivory Ports",24255,70659],"bus Metal"],obj: {_id: 6220,str: "Cotton navigating",num: 52517,array: [],obj: {_id: 6221,str: "Dynamic microchip",num: 21253,array: []}}});
    },

    function(coll) {
        return coll.insert({_id: 6222,str: "Georgia Checking Account",num: 41049,obj: {_id: 6223,str: "Orchestrator Checking Account Borders",num: 38125,date: new Date("2018-09-05T22:46:10.457Z"),array: ["Future capacitor",new Date("2018-09-06T19:39:46.267Z"),26681,40442,new Date("2018-09-06T10:46:35.268Z"),{_id: 6224,num: 30406,date: new Date("2018-09-06T15:04:05.141Z"),array: [],obj: {_id: 6225,str: "Cotton Fiji Dollar reboot",num: 55941,date: new Date("2018-09-06T03:37:50.068Z"),array: [],obj: {}}},"Electronics firmware",new Date("2018-09-05T23:33:08.898Z")],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 6226,str: "Borders",num: 76513,array: ["Investment Account reboot",new Date("2018-09-06T10:47:07.136Z"),"input Hat Home",new Date("2018-09-06T10:20:48.786Z"),34968,91355,{_id: 6227,str: "green",num: 38864,date: new Date("2018-09-05T22:41:50.961Z"),obj: {}},19771,"functionalities bypass",1465,[new Date("2018-09-05T22:59:51.431Z"),"Frozen cultivate"],[],new Date("2018-09-06T04:04:18.643Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 6228,str: "Czech Republic",num: 86984,date: new Date("2018-09-05T23:41:07.091Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 6229,str: "Human compress Investment Account",num: 28597,date: new Date("2018-09-06T02:09:33.979Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 6230,num: 85078,date: new Date("2018-09-05T20:09:27.660Z"),array: [[19819,"SDD pixel",[]],35176,"info-mediaries PNG",new Date("2018-09-06T11:00:56.510Z"),new Date("2018-09-06T05:15:56.634Z"),{_id: 6231,str: "core SMS",num: 1768,array: [],obj: {}},"Data Tajikistan",new Date("2018-09-05T19:59:23.567Z"),29007,new Date("2018-09-05T22:40:51.108Z")],obj: {_id: 6232,str: "implementation",date: new Date("2018-09-06T01:20:28.538Z"),array: [],obj: {_id: 6233,str: "Consultant",date: new Date("2018-09-06T13:14:29.329Z"),obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 6234,str: "panel",num: 13806,date: new Date("2018-09-05T20:02:25.974Z"),array: [13314,new Date("2018-09-05T20:08:31.868Z"),35368,"Handmade Fresh Bike",new Date("2018-09-06T18:56:50.232Z"),"real-time viral hard drive","microchip",new Date("2018-09-05T21:08:14.003Z"),new Date("2018-09-06T08:15:54.119Z"),96482],obj: {_id: 6235,str: "JBOD Home Loan Account purple",num: 53385,date: new Date("2018-09-06T16:05:47.236Z"),array: [],obj: {_id: 6236,str: "Liaison HDD",num: 16709,date: new Date("2018-09-06T02:27:28.841Z"),array: [],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 6237,str: "Borders Investment Account",num: 4487,array: ["Applications",[new Date("2018-09-06T03:28:28.389Z"),"logistical Rhode Island adapter",new Date("2018-09-06T00:06:04.332Z"),5445,new Date("2018-09-06T17:17:52.307Z")],"standardization XML",[],"Tuna",59242,4477,new Date("2018-09-06T09:20:05.342Z"),"Zambian Kwacha bypass",["green Configuration"],23155],obj: {_id: 6238,str: "River",num: 28477,date: new Date("2018-09-06T04:22:24.978Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 6239,str: "recontextualize overriding",num: 47747,date: new Date("2018-09-06T15:30:01.960Z"),array: [15788,new Date("2018-09-05T23:22:13.635Z"),new Date("2018-09-06T19:25:38.089Z"),"Senior technologies sky blue",new Date("2018-09-06T15:07:40.544Z"),new Date("2018-09-05T21:11:52.720Z"),2120,36210,"generate invoice reboot","Chief",[],79332,new Date("2018-09-05T22:53:11.239Z")],obj: {_id: 6240,num: 90826,date: new Date("2018-09-06T01:03:05.031Z"),array: [[{_id: 6241,str: "connect auxiliary process improvement",obj: {_id: 6242,str: "Organic Ohio neural",num: 41856,date: new Date("2018-09-06T19:06:30.495Z"),obj: {}}},50764]]}});
    },

    function(coll) {
        return coll.insert({_id: 6243,str: "Pizza expedite",num: 62347,date: new Date("2018-09-06T06:58:09.363Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 6244,str: "turn-key modular North Carolina",num: 15923,date: new Date("2018-09-06T09:35:46.534Z"),array: ["panel well-modulated Mississippi",23269,"Synergized California",new Date("2018-09-06T03:22:05.184Z"),{_id: 6245,str: "deploy PNG capacity",num: 60051,obj: {_id: 6246,str: "index knowledge base Metrics",num: 42829,date: new Date("2018-09-05T22:05:21.775Z"),array: []}},[{_id: 6247,str: "granular",num: 78319,date: new Date("2018-09-06T11:08:33.282Z"),array: [],obj: {_id: 6248,date: new Date("2018-09-06T14:57:12.862Z"),array: [50611,"Auto Loan Account morph Bike",new Date("2018-09-06T13:34:56.748Z"),35090],obj: {_id: 6249,str: "Supervisor Self-enabling Down-sized",num: 6269,date: new Date("2018-09-06T16:38:12.558Z"),array: ["Central"]}}}],"Views Guyana",[],new Date("2018-09-06T12:43:50.585Z"),[],{_id: 6250,num: 17706,date: new Date("2018-09-06T16:15:30.600Z"),obj: {}}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 6251,str: "magenta Drive Upgradable",num: 26062,date: new Date("2018-09-06T00:54:44.522Z"),obj: {_id: 6252,str: "robust",num: 18925,date: new Date("2018-09-05T20:05:42.433Z"),array: ["Ameliorated Burgs Senegal",82610,"calculate solid state Direct",62693,new Date("2018-09-06T16:40:05.928Z"),93112,"synthesize monitor",{_id: 6253,str: "Vermont synthesize",num: 67775,date: new Date("2018-09-06T12:05:18.049Z"),array: [],obj: {}}]}});
    },

    function(coll) {
        return coll.insert({_id: 6254,str: "Corporate",num: 58292,date: new Date("2018-09-05T21:20:18.303Z"),array: [66908,new Date("2018-09-06T11:04:52.385Z"),new Date("2018-09-05T20:53:30.670Z"),26676,"Danish Krone"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 6255,str: "Credit Card Account Metal",num: 27854,date: new Date("2018-09-06T13:31:03.852Z"),obj: {_id: 6256,str: "Savings Account Generic",num: 1003,array: [],obj: {_id: 6257,num: 83344,date: new Date("2018-09-05T20:46:38.857Z"),array: [35649,new Date("2018-09-06T02:23:50.130Z"),{_id: 6258,str: "Rial Omani",date: new Date("2018-09-06T11:37:46.238Z"),obj: {}},"quantifying motivating solutions","deposit Visionary",new Date("2018-09-06T17:00:47.666Z"),18815,new Date("2018-09-06T07:55:31.089Z"),23765,{_id: 6259,str: "bypassing global",num: 42162,obj: {}},["SMTP Future"],1563],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 6260,str: "Compatible payment Kazakhstan",num: 73883,date: new Date("2018-09-06T08:23:17.696Z"),array: [],obj: {_id: 6261,num: 62915,date: new Date("2018-09-06T18:39:19.110Z"),array: [new Date("2018-09-06T17:26:55.426Z"),"Bacon",new Date("2018-09-06T15:37:26.675Z"),"encoding CSS",49165,["Mouse parse","generating haptic Marketing"],new Date("2018-09-06T06:42:13.382Z"),20856,"Beauty Hat",{_id: 6262,str: "matrix green",num: 40553,date: new Date("2018-09-06T16:58:21.857Z"),obj: {}},new Date("2018-09-06T02:59:12.465Z")],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 6263,str: "Health Ramp maximized",num: 31372,date: new Date("2018-09-06T06:25:29.898Z"),array: ["Optimization Euro",89627,new Date("2018-09-06T17:00:50.863Z"),new Date("2018-09-06T18:51:28.975Z"),new Date("2018-09-06T05:18:49.739Z"),55379,"Station Fantastic Metal Ball Investment Account",62120,72602]});
    },

    function(coll) {
        return coll.insert({_id: 6264,str: "Silver Port",num: 5713,date: new Date("2018-09-06T08:03:25.470Z"),array: [new Date("2018-09-06T02:22:45.063Z"),10005,"backing up withdrawal Down-sized",35474,new Date("2018-09-06T00:56:31.484Z"),"Producer Accountability Small Concrete Cheese",[],{_id: 6265,str: "tertiary deliverables port",num: 63432,date: new Date("2018-09-05T23:32:33.955Z"),array: []},"payment infrastructure azure",[]],obj: {_id: 6266,str: "programming",num: 94038,array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 6267,str: "firmware Ball",num: 28274,date: new Date("2018-09-06T02:53:08.888Z"),array: [34530,83000,"Cheese",new Date("2018-09-06T06:13:32.372Z"),{_id: 6268,str: "Summit Computers Licensed Granite Shirt",num: 90008,date: new Date("2018-09-06T17:46:52.358Z"),array: [[],new Date("2018-09-06T10:45:46.942Z"),[]],obj: {_id: 6269,str: "bandwidth lime Handmade",num: 94128,date: new Date("2018-09-06T10:08:59.425Z"),array: [],obj: {}}},30030,{_id: 6270,num: 50240,date: new Date("2018-09-05T23:30:18.050Z"),array: ["Solutions haptic Wyoming",[new Date("2018-09-05T23:20:15.244Z"),66986],"Global grey Investment Account"]},new Date("2018-09-06T07:40:59.831Z"),"Practical",{_id: 6271,array: [],obj: {}},[71100,50378]],obj: {_id: 6272,str: "Group index",num: 97298,array: [new Date("2018-09-05T23:35:58.275Z")]}});
    },

    function(coll) {
        return coll.insert({_id: 6273,str: "mindshare",num: 2597,date: new Date("2018-09-06T16:04:11.715Z"),array: ["Tactics haptic","olive object-oriented bypassing",83631,59491,[88779],new Date("2018-09-06T08:41:54.782Z"),new Date("2018-09-06T11:17:02.022Z"),new Date("2018-09-05T20:50:23.843Z"),[],new Date("2018-09-05T23:02:51.521Z"),37407,{_id: 6274,str: "protocol navigating",num: 53436,date: new Date("2018-09-06T09:41:33.699Z"),array: [],obj: {_id: 6275,str: "Regional",num: 12033,array: [],obj: {_id: 6276,str: "open system",date: new Date("2018-09-05T20:46:54.938Z"),obj: {}}}},"Bermuda Quality Senegal"]});
    },

    function(coll) {
        return coll.insert({_id: 6277,date: new Date("2018-09-06T00:01:35.409Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 6278,str: "deposit District Automotive",num: 4710,date: new Date("2018-09-06T18:11:10.555Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 6279,str: "Hawaii Jewelery Computers",num: 27683,date: new Date("2018-09-06T11:23:53.937Z"),array: [],obj: {_id: 6280,str: "Optimization 3rd generation",num: 33502,date: new Date("2018-09-06T09:47:13.386Z"),array: [new Date("2018-09-06T00:03:28.216Z"),new Date("2018-09-06T15:10:17.119Z"),[],44762,"Innovative",new Date("2018-09-06T12:33:34.966Z"),new Date("2018-09-06T01:31:26.280Z"),98787,60739,{_id: 6281,str: "Officer",num: 99082,date: new Date("2018-09-06T15:11:10.076Z"),array: [["Auto Loan Account","Incredible Keys",new Date("2018-09-06T16:13:39.145Z")]]},89297,"collaborative Industrial Rustic",73178,63075],obj: {_id: 6282,date: new Date("2018-09-06T01:28:02.069Z"),array: [new Date("2018-09-06T05:07:56.839Z")],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 6283,str: "mint green",num: 92422,date: new Date("2018-09-06T07:44:51.080Z"),array: [new Date("2018-09-06T15:15:50.851Z"),"optical",new Date("2018-09-06T18:16:30.793Z"),82,[],{_id: 6284,num: 64551,date: new Date("2018-09-06T09:08:09.315Z"),array: [new Date("2018-09-06T14:18:04.882Z")],obj: {}},"multi-byte",[],new Date("2018-09-06T04:52:46.972Z"),81347,"Tennessee"],obj: {_id: 6285,num: 7063,array: [59456,"cross-platform"]}});
    },

    function(coll) {
        return coll.insert({_id: 6286,str: "Progressive",num: 78899,date: new Date("2018-09-06T03:46:04.340Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 6287,str: "Credit Card Account Fresh",num: 57199,date: new Date("2018-09-06T16:47:53.407Z"),array: [new Date("2018-09-06T05:00:18.886Z"),new Date("2018-09-06T02:32:50.076Z"),36442,"cross-platform Home",["optimizing connecting"],new Date("2018-09-06T11:49:09.885Z"),[],{_id: 6288,str: "system",num: 96178,date: new Date("2018-09-05T20:33:32.037Z"),array: [19442],obj: {_id: 6289,str: "Forks",num: 29278,date: new Date("2018-09-06T10:01:40.982Z"),array: []}},86293,[],"standardization models Money Market Account",{_id: 6290,date: new Date("2018-09-06T06:07:25.608Z"),array: [new Date("2018-09-05T22:10:25.045Z"),26477,new Date("2018-09-06T14:01:38.773Z"),"CSS",{_id: 6291,str: "Planner",num: 5028,obj: {}}],obj: {}},88882],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 6292,str: "Handcrafted Cotton Car matrix",num: 21745,date: new Date("2018-09-06T00:54:50.945Z"),obj: {_id: 6293,str: "European Monetary Unit (E.M.U.-6) parsing Down-sized",num: 56498,date: new Date("2018-09-06T03:19:21.452Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 6294,str: "parse",num: 40917,date: new Date("2018-09-06T01:41:19.126Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 6295,str: "harness Berkshire Lodge",num: 76879,date: new Date("2018-09-06T12:42:50.562Z"),array: [new Date("2018-09-05T20:54:55.824Z"),"Granite Soap empower",39784,"neural",new Date("2018-09-06T13:02:15.085Z"),[],new Date("2018-09-06T13:01:48.055Z"),88338,"repurpose",22573],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 6296,str: "Wooden matrix Wisconsin",num: 21988,date: new Date("2018-09-05T23:15:20.896Z"),array: [new Date("2018-09-06T01:34:44.899Z"),new Date("2018-09-06T11:41:28.308Z"),new Date("2018-09-06T17:46:38.947Z"),68263,"Belarussian Ruble bypass","circuit Savings Account",{_id: 6297,str: "Practical models invoice",num: 39281,date: new Date("2018-09-06T02:15:24.722Z"),array: ["Chips online Car",43082],obj: {}},{_id: 6298,str: "synthesizing end-to-end",num: 41336,date: new Date("2018-09-06T17:27:06.838Z"),array: [],obj: {_id: 6299,num: 5570,obj: {_id: 6300,str: "Checking Account Granite e-commerce",date: new Date("2018-09-06T06:06:14.760Z"),array: ["Tasty Soft Chicken impactful","parse Island",72130,[],[[],new Date("2018-09-06T11:02:07.780Z")]],obj: {}}}},{_id: 6301,date: new Date("2018-09-06T06:33:35.735Z")},new Date("2018-09-05T21:35:17.473Z")]});
    },

    function(coll) {
        return coll.insert({_id: 6302,str: "Automotive sexy Buckinghamshire",num: 20941,date: new Date("2018-09-05T21:17:02.955Z"),array: [12751,7150,"Zambian Kwacha migration enhance",{_id: 6303,str: "Venezuela",num: 24266,date: new Date("2018-09-06T02:52:48.825Z"),array: [],obj: {}},85948,"Auto Loan Account Illinois encoding",new Date("2018-09-06T17:08:22.855Z"),new Date("2018-09-06T06:56:35.345Z"),new Date("2018-09-06T10:33:37.289Z"),[]]});
    },

    function(coll) {
        return coll.insert({_id: 6304,str: "FTP invoice payment",num: 11,date: new Date("2018-09-06T18:08:07.734Z"),array: [],obj: {_id: 6305,str: "Malta",num: 31304,date: new Date("2018-09-05T21:07:47.599Z"),array: [{_id: 6306,str: "Metical Unbranded Soft Cheese",num: 25347,date: new Date("2018-09-06T15:57:40.875Z"),obj: {}},"circuit navigating orchid",new Date("2018-09-05T22:52:46.638Z"),15850,new Date("2018-09-06T05:52:10.810Z"),new Date("2018-09-05T20:09:42.493Z"),["Direct"],[],{_id: 6307,date: new Date("2018-09-06T09:03:52.327Z"),array: [],obj: {_id: 6308,str: "robust",num: 7887,date: new Date("2018-09-06T01:50:51.010Z"),obj: {}}},"Latvian Lats e-business Hat",{_id: 6309,num: 87736},"plug-and-play Buckinghamshire",new Date("2018-09-06T03:06:28.078Z")]}});
    },

    function(coll) {
        return coll.insert({_id: 6310,str: "Greens",num: 52244,date: new Date("2018-09-06T16:15:53.183Z"),array: [14438,"Exclusive",13487,new Date("2018-09-06T19:40:42.290Z"),"Small Frozen Hat",{_id: 6311,str: "Michigan",num: 36420,date: new Date("2018-09-06T13:16:36.787Z"),array: [],obj: {}},"Saint Helena Pound application cyan","regional Home Loan Account Soft",{_id: 6312,str: "Ameliorated Argentine Peso Executive",date: new Date("2018-09-06T17:37:48.522Z"),array: [],obj: {}},[[],new Date("2018-09-06T03:53:22.904Z")],new Date("2018-09-06T16:49:32.949Z"),new Date("2018-09-06T05:29:49.000Z")],obj: {_id: 6313,str: "Awesome Granite Hat Interactions protocol",num: 6343,date: new Date("2018-09-05T22:30:19.176Z"),array: [],obj: { _id: 6314 }}});
    },

    function(coll) {
        return coll.insert({_id: 6315,str: "Soap Corporate",num: 23782,date: new Date("2018-09-06T15:12:36.084Z"),array: [],obj: {_id: 6316,str: "solid state",array: [new Date("2018-09-05T20:34:54.557Z"),"Data",new Date("2018-09-05T23:44:38.584Z"),68451,new Date("2018-09-06T07:02:37.697Z"),"synthesize leverage",{_id: 6317,str: "web services",num: 2344,date: new Date("2018-09-06T04:03:02.691Z"),array: [26456],obj: {}},81809,{_id: 6318,str: "Springs Operations Bedfordshire",num: 99101,date: new Date("2018-09-06T08:24:52.835Z"),array: [],obj: {}},new Date("2018-09-05T20:43:49.627Z"),[{_id: 6319,str: "RAM Response",num: 40837,date: new Date("2018-09-05T21:02:38.785Z"),obj: {_id: 6320,str: "Botswana",array: []}},new Date("2018-09-06T19:02:42.412Z"),[22414,"Pizza directional IB",new Date("2018-09-06T06:06:58.126Z"),91093]]],obj: {_id: 6321,num: 29010,date: new Date("2018-09-05T22:54:26.493Z"),array: []}}});
    },

    function(coll) {
        return coll.insert({_id: 6322,str: "Shoes Licensed",num: 11584,array: ["compelling Mauritania","extensible Fantastic Cotton Towels Quality",17369,new Date("2018-09-05T23:41:57.439Z"),65100,{_id: 6323,str: "South Dakota",num: 10267,array: [],obj: {_id: 6324,date: new Date("2018-09-06T11:26:51.356Z"),array: [new Date("2018-09-06T07:43:42.105Z"),76799]}},new Date("2018-09-06T03:46:55.307Z"),["Credit Card Account front-end",{_id: 6325,str: "hard drive systems Unbranded Steel Cheese",num: 31216,date: new Date("2018-09-06T11:17:21.482Z"),array: [],obj: {_id: 6326,str: "Latvian Lats Solomon Islands",num: 109,date: new Date("2018-09-06T17:39:39.457Z"),obj: {}}},27965],new Date("2018-09-06T03:52:06.530Z"),"Dynamic"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 6327,str: "Licensed Frozen Fish Networked North Carolina",num: 64656,array: [new Date("2018-09-06T08:02:38.919Z"),new Date("2018-09-06T17:19:08.560Z"),"Incredible Cotton Chair Berkshire","Producer Michigan",59397,{_id: 6328,str: "next generation Toys",num: 37066,array: [],obj: {}},63894,"Grocery success reboot",new Date("2018-09-05T22:43:16.689Z"),{_id: 6329,str: "Small Response invoice",num: 1001,date: new Date("2018-09-06T00:41:48.568Z"),array: [],obj: {_id: 6330,str: "bi-directional",num: 27714,array: ["intranet action-items"],obj: {_id: 6331,str: "Legacy hack",date: new Date("2018-09-06T03:04:16.279Z"),obj: {}}}},new Date("2018-09-06T15:18:22.456Z"),["Avon RAM",[]],98534]});
    },

    function(coll) {
        return coll.insert({_id: 6332,str: "neural Credit Card Account",num: 7192,date: new Date("2018-09-06T10:54:47.685Z"),array: [],obj: {_id: 6333,str: "Handcrafted Wisconsin Coordinator",num: 679,date: new Date("2018-09-05T20:05:29.462Z")}});
    },

    function(coll) {
        return coll.insert({_id: 6334,str: "embrace",array: []});
    },

    function(coll) {
        return coll.insert({_id: 6335,str: "secondary",num: 5075,array: [{_id: 6336,str: "Cliffs",date: new Date("2018-09-05T20:22:45.420Z"),array: ["Avon",new Date("2018-09-06T14:43:37.644Z")],obj: {}},[],61022,16091,new Date("2018-09-06T16:58:07.545Z"),"Generic Singapore Dollar RSS",new Date("2018-09-05T20:20:07.860Z"),"Sausages Refined Riel",[new Date("2018-09-06T08:09:25.949Z"),86726,[]],[93251],"TCP turn-key Branch",{_id: 6337,str: "input Creative Pennsylvania",date: new Date("2018-09-06T06:11:59.352Z"),array: [48265,{_id: 6338,str: "back up bluetooth",date: new Date("2018-09-06T03:28:08.336Z"),array: [new Date("2018-09-06T08:10:22.602Z")],obj: {_id: 6339,str: "Communications Table",num: 8369,obj: {}}},73692,new Date("2018-09-06T05:26:07.829Z"),"Summit reboot"],obj: {_id: 6340,str: "SMTP card navigate",num: 95584,array: []}}]});
    },

    function(coll) {
        return coll.insert({_id: 6341,str: "Indiana copy",num: 70811,date: new Date("2018-09-05T20:31:25.070Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 6342,str: "Light",date: new Date("2018-09-05T21:21:51.560Z"),array: [new Date("2018-09-06T02:56:25.555Z"),new Date("2018-09-05T20:33:49.687Z"),"cross-platform",34974,new Date("2018-09-05T22:03:44.574Z"),"Buckinghamshire",70432,50992,80679,"Intelligent","Developer copying",{_id: 6343,str: "EXE",num: 73543,array: [[],[]],obj: {}},[],93553,new Date("2018-09-06T04:19:35.794Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 6344,num: 77984,date: new Date("2018-09-05T22:12:47.576Z"),array: ["Triple-buffered",77538,new Date("2018-09-05T20:16:21.262Z"),new Date("2018-09-06T18:47:09.294Z"),"content-based Product",new Date("2018-09-06T01:27:48.266Z"),[new Date("2018-09-06T12:45:07.576Z"),[],"index Corporate"],{_id: 6345,str: "Home",num: 39694,date: new Date("2018-09-06T16:22:04.112Z"),array: [],obj: {}},"withdrawal user-centric",21402],obj: {_id: 6346,str: "Pataca",num: 33177,array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 6347,str: "frame Rustic",num: 31725,array: [],obj: {_id: 6348,str: "Upgradable transmit Berkshire",date: new Date("2018-09-06T02:09:52.894Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 6349,num: 54024,date: new Date("2018-09-06T03:42:42.354Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 6350,str: "Salad",num: 58977,date: new Date("2018-09-06T02:41:58.598Z"),array: [98011,new Date("2018-09-05T20:28:44.627Z"),new Date("2018-09-05T21:46:52.985Z"),"array Saint Pierre and Miquelon Jewelery",new Date("2018-09-05T21:49:31.006Z"),5196,"calculate","transmitting auxiliary Central",new Date("2018-09-06T07:00:19.455Z"),{_id: 6351,str: "product port",num: 49079,date: new Date("2018-09-06T11:37:50.853Z"),array: [new Date("2018-09-06T06:45:05.579Z"),[],{_id: 6352,num: 2619,date: new Date("2018-09-06T03:35:57.447Z"),array: [],obj: {}}],obj: {_id: 6353,str: "granular",date: new Date("2018-09-06T19:35:43.483Z"),array: [24107]}},6438,[{_id: 6354,str: "Money Market Account Phased Corporate",num: 83661,date: new Date("2018-09-06T19:46:03.898Z"),array: [],obj: {}},new Date("2018-09-06T08:25:24.319Z"),new Date("2018-09-06T02:34:36.434Z"),"Central","system hack exuding",[]]],obj: {_id: 6355,num: 42893,date: new Date("2018-09-06T14:53:16.818Z"),array: [31321],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 6356,str: "Bedfordshire deposit",num: 45941,date: new Date("2018-09-06T16:57:12.409Z"),array: ["Small multi-byte Identity",new Date("2018-09-06T14:52:51.365Z"),"Maine transmit","Ports",{_id: 6357,str: "primary Mobility",num: 16935,date: new Date("2018-09-06T13:12:31.484Z"),obj: {_id: 6358,str: "olive functionalities Tools",num: 47166,array: []}},90390,36408,new Date("2018-09-06T16:46:49.413Z"),[],"Senior web services moderator"]});
    },

    function(coll) {
        return coll.insert({_id: 6359,str: "Computer GB front-end",num: 19171,date: new Date("2018-09-06T04:19:08.353Z"),array: [],obj: {_id: 6360,str: "Tasty needs-based Regional",num: 55358,date: new Date("2018-09-06T04:39:43.867Z"),array: [{_id: 6361,date: new Date("2018-09-06T16:27:03.242Z"),array: [],obj: {_id: 6362,num: 75585,date: new Date("2018-09-05T21:56:32.502Z")}},35241,new Date("2018-09-06T05:11:09.227Z"),"Creative",new Date("2018-09-06T10:51:49.746Z"),29135,21592,38001,new Date("2018-09-06T13:38:50.877Z"),"matrices",new Date("2018-09-06T15:45:48.741Z")],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 6363,str: "architectures Norfolk Island",num: 16896,date: new Date("2018-09-06T09:14:01.544Z"),array: [],obj: {_id: 6364,str: "Manor Intelligent compressing",num: 11583,date: new Date("2018-09-06T05:08:08.104Z"),array: [new Date("2018-09-06T04:24:07.878Z"),new Date("2018-09-06T13:12:11.421Z"),"process improvement","Courts Incredible Fresh Tuna",88258,"synthesizing Rustic Steel Tuna",79003,new Date("2018-09-06T05:46:29.084Z"),{_id: 6365,str: "Unbranded Fresh Tuna Rustic Granite Pants visionary",num: 92781,date: new Date("2018-09-06T13:54:41.720Z"),array: [[],new Date("2018-09-06T12:37:52.330Z")],obj: {}},22467,new Date("2018-09-06T19:38:04.688Z"),{_id: 6366,num: 30394,date: new Date("2018-09-06T19:19:29.844Z"),array: ["teal open-source",{_id: 6367,date: new Date("2018-09-06T05:58:56.465Z"),obj: {}},[new Date("2018-09-06T02:58:17.693Z")],["International empower neural",57078,[],32137]],obj: {}}]}});
    },

    function(coll) {
        return coll.insert({_id: 6368,str: "SAS cross-platform",num: 97003,date: new Date("2018-09-05T21:19:30.607Z"),array: [],obj: {_id: 6369,str: "Brazilian Real",num: 64262,date: new Date("2018-09-05T20:10:10.722Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 6370,str: "Interactions Clothing",date: new Date("2018-09-06T07:31:59.676Z"),array: ["Arkansas reboot",new Date("2018-09-06T07:54:49.411Z"),"Virginia",38856,new Date("2018-09-06T19:52:18.155Z"),67321,{_id: 6371,str: "Fundamental",num: 11286,date: new Date("2018-09-06T07:17:43.251Z"),obj: {}},{_id: 6372,str: "system Sports",num: 79978,date: new Date("2018-09-06T09:25:41.952Z"),array: ["Mount invoice",43562],obj: {_id: 6373,num: 33236,obj: {}}},[],{_id: 6374,str: "systems",num: 10467,array: [],obj: {_id: 6375,str: "neutral transmitting",num: 30942,date: new Date("2018-09-06T14:29:30.840Z"),array: [[8001]],obj: {}}},[],new Date("2018-09-06T17:30:29.414Z"),"Dominican Peso back up"]});
    },

    function(coll) {
        return coll.insert({_id: 6376,str: "Table South Dakota",num: 38378,date: new Date("2018-09-05T20:54:48.459Z"),array: [],obj: {_id: 6377,str: "pixel Argentine Peso indigo",num: 63820,date: new Date("2018-09-06T00:45:06.650Z"),array: [new Date("2018-09-06T07:58:25.871Z"),33892,new Date("2018-09-06T08:57:39.373Z"),"Credit Card Account Administrator",66479,{_id: 6378,str: "Buckinghamshire",num: 90433,date: new Date("2018-09-06T11:46:59.799Z"),array: []},"Refined Fresh Shoes Ergonomic Steel Mouse Rustic",68225,new Date("2018-09-05T22:11:02.659Z"),new Date("2018-09-06T12:38:49.848Z")],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 6379,str: "Bedfordshire Enterprise-wide",date: new Date("2018-09-06T00:07:55.471Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 6380,str: "New Taiwan Dollar Sleek scalable",num: 34134,date: new Date("2018-09-06T18:30:57.225Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 6381,str: "multi-byte",num: 19543,date: new Date("2018-09-06T17:40:11.746Z"),array: [64193,{_id: 6382,str: "relationships national Kentucky",num: 38731,date: new Date("2018-09-06T17:11:08.356Z"),array: [],obj: {}},"Tools","XML",new Date("2018-09-06T03:13:09.659Z"),"Shoes Bike",new Date("2018-09-05T23:33:25.972Z"),59471,38984,"copy client-server",{_id: 6383,str: "Principal content",num: 35894,date: new Date("2018-09-06T17:32:47.579Z"),array: [[]],obj: {_id: 6384,num: 43059,date: new Date("2018-09-06T15:23:39.743Z")}},[new Date("2018-09-06T11:59:02.349Z")],8813],obj: {_id: 6385,str: "Specialist Investment Account algorithm",num: 85049,obj: {_id: 6386,date: new Date("2018-09-06T14:16:54.946Z"),array: []}}});
    },

    function(coll) {
        return coll.insert({_id: 6387,num: 95236,date: new Date("2018-09-06T06:03:01.521Z"),array: ["Mississippi optical connecting",[],18863,32511,"deposit Massachusetts",[{_id: 6388,str: "Kentucky fresh-thinking",num: 34024,array: []},new Date("2018-09-05T23:04:09.453Z"),new Date("2018-09-05T23:50:22.400Z")]],obj: {_id: 6389,str: "North Dakota",num: 73651,array: [],obj: {_id: 6390,str: "Buckinghamshire",num: 87495,date: new Date("2018-09-06T02:49:31.321Z"),array: [new Date("2018-09-06T04:44:37.742Z"),{_id: 6391,date: new Date("2018-09-06T01:28:58.969Z"),obj: {}},new Date("2018-09-06T16:05:49.567Z"),{_id: 6392,str: "sticky Money Market Account national",num: 71612,date: new Date("2018-09-05T23:07:21.306Z"),obj: {}},97665],obj: {_id: 6393,str: "Arkansas calculating Analyst"}}}});
    },

    function(coll) {
        return coll.insert({_id: 6394,str: "Rufiyaa Generic",num: 96164,date: new Date("2018-09-06T02:07:45.313Z"),array: [8941,"Bike parse programming",new Date("2018-09-05T19:57:35.005Z"),"Multi-channelled turn-key",{_id: 6395,str: "primary bluetooth 24/7",num: 58123,array: [64269,new Date("2018-09-06T10:02:55.656Z"),[],new Date("2018-09-06T13:43:58.947Z")],obj: {_id: 6396,date: new Date("2018-09-06T05:31:37.014Z"),obj: {}}},69550,[new Date("2018-09-05T22:16:52.831Z"),{_id: 6397,str: "Shirt Licensed",date: new Date("2018-09-06T10:05:11.977Z"),array: ["withdrawal Views","Global"],obj: {_id: 6398,num: 68189,date: new Date("2018-09-06T03:38:08.732Z"),array: [],obj: {}}},45437],[],88554,74292]});
    },

    function(coll) {
        return coll.insert({_id: 6399,str: "driver Industrial",num: 76309,date: new Date("2018-09-05T20:44:00.841Z"),array: [],obj: {_id: 6400,str: "Health",num: 607,array: [{_id: 6401,date: new Date("2018-09-06T13:17:25.938Z"),array: [],obj: {}},new Date("2018-09-06T02:15:07.088Z"),"generate transmitter",23846,new Date("2018-09-06T08:52:31.705Z"),new Date("2018-09-05T23:44:20.390Z"),{_id: 6402,str: "Bouvet Island (Bouvetoya) lavender",num: 42314,date: new Date("2018-09-05T22:02:37.207Z"),array: ["Handcrafted Plastic Hat ADP Licensed",new Date("2018-09-06T13:44:06.479Z")],obj: {}},new Date("2018-09-06T09:44:13.669Z"),"multi-byte",[],new Date("2018-09-06T04:51:09.826Z"),1273,85966],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 6403,num: 37995,date: new Date("2018-09-05T21:39:52.876Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 6404,str: "Licensed Cotton Chair",num: 26550,date: new Date("2018-09-05T22:53:06.160Z"),array: [],obj: {_id: 6405,str: "Bedfordshire Assurance",date: new Date("2018-09-05T20:55:55.755Z"),array: [new Date("2018-09-06T08:29:38.751Z"),35016,"invoice Walks",76922,"sky blue",[],{_id: 6406,str: "Squares",num: 3978,array: [new Date("2018-09-06T13:29:16.620Z")]},[],{_id: 6407,array: [new Date("2018-09-06T08:30:08.520Z"),5119,{_id: 6408,num: 66436,date: new Date("2018-09-06T00:42:18.966Z"),obj: {}},"Home Loan Account optical Trinidad and Tobago"],obj: {_id: 6409,str: "Assistant Generic Fantastic Cotton Bike",num: 88389,date: new Date("2018-09-06T10:43:38.019Z"),array: [],obj: {_id: 6410,date: new Date("2018-09-05T23:00:50.301Z"),array: ["deposit Buckinghamshire",new Date("2018-09-06T05:37:15.328Z"),[73249,new Date("2018-09-06T01:29:16.199Z")]],obj: {}}}},34280,"Awesome",{_id: 6411,str: "payment homogeneous",num: 29507,date: new Date("2018-09-06T12:18:03.394Z"),obj: {}}]}});
    },

    function(coll) {
        return coll.insert({_id: 6412,str: "Tasty Concrete Table",num: 80916,obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 6413,str: "multi-tasking",date: new Date("2018-09-06T19:27:50.122Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 6414,str: "Internal",num: 58754,date: new Date("2018-09-06T10:44:03.166Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 6415,str: "markets",num: 38764,date: new Date("2018-09-05T23:19:13.700Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 6416,num: 70275,date: new Date("2018-09-06T10:00:08.620Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 6417,str: "out-of-the-box bypassing",num: 41350,array: [new Date("2018-09-05T20:33:00.566Z"),"value-added",new Date("2018-09-06T04:20:28.520Z"),85191,{_id: 6418,str: "Toys maximize Bond Markets Units European Composite Unit (EURCO)",num: 28184,date: new Date("2018-09-06T19:02:58.143Z"),obj: {}},[],"5th generation",66786,new Date("2018-09-06T08:55:59.759Z"),"bi-directional iterate"]});
    },

    function(coll) {
        return coll.insert({_id: 6419,str: "Malaysian Ringgit",date: new Date("2018-09-06T00:58:34.904Z"),array: [],obj: {_id: 6420,str: "Checking Account",num: 14626,date: new Date("2018-09-05T20:21:51.780Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 6421,str: "Research 24/7 Serbian Dinar",num: 1068,date: new Date("2018-09-06T00:57:46.340Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 6422,str: "innovative Usability",num: 79380,date: new Date("2018-09-06T01:55:14.594Z"),array: [{_id: 6423,str: "exuding PNG Bermudian Dollar (customarily known as Bermuda Dollar)",num: 22863,date: new Date("2018-09-06T11:40:15.327Z"),array: [[79782,79605],63899],obj: {}},"Intelligent Cotton Bacon pink",new Date("2018-09-06T00:38:28.071Z"),new Date("2018-09-05T20:36:22.643Z"),"Practical","portals","Egyptian Pound back up",new Date("2018-09-06T13:53:51.537Z"),new Date("2018-09-06T09:27:59.755Z"),{_id: 6424,str: "salmon",num: 37144,date: new Date("2018-09-06T07:19:55.903Z"),array: [],obj: {}},{_id: 6425,num: 83607,obj: {_id: 6426,num: 34441,date: new Date("2018-09-06T05:33:26.928Z"),array: []}},[],"Regional"]});
    },

    function(coll) {
        return coll.insert({_id: 6427,str: "ivory Branding",num: 1461,date: new Date("2018-09-06T04:07:55.129Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 6428,str: "hacking",num: 10088,date: new Date("2018-09-06T17:52:33.327Z"),array: [],obj: {_id: 6429,str: "quantify virtual navigating",num: 90879,date: new Date("2018-09-06T06:08:20.803Z"),obj: {_id: 6430,str: "Personal Loan Account Fantastic",num: 81961,date: new Date("2018-09-06T08:28:37.837Z"),array: ["Solomon Islands Dollar",72931,[],new Date("2018-09-06T07:55:36.270Z"),"policy",37500,new Date("2018-09-06T08:40:22.464Z"),{_id: 6431,array: [],obj: {}},new Date("2018-09-05T23:36:13.371Z"),"SMTP bluetooth",new Date("2018-09-06T08:45:19.755Z"),42174,55649,new Date("2018-09-05T21:00:31.764Z")]}}});
    },

    function(coll) {
        return coll.insert({_id: 6432,str: "Clothing",num: 56661,date: new Date("2018-09-06T04:59:21.506Z"),array: ["Borders",[20771,new Date("2018-09-06T11:09:38.821Z"),"teal Keyboard Facilitator"],new Date("2018-09-06T02:17:53.079Z"),76827,new Date("2018-09-06T03:31:39.145Z"),48575,{_id: 6433,str: "back up Officer Producer",num: 14591,date: new Date("2018-09-06T16:53:12.358Z"),obj: {}},[],35465,new Date("2018-09-06T05:56:55.519Z"),{_id: 6434,str: "database",date: new Date("2018-09-06T16:12:17.342Z"),array: [],obj: {_id: 6435,str: "Health",num: 18137,date: new Date("2018-09-06T05:18:57.311Z"),array: [new Date("2018-09-06T15:01:10.899Z"),{_id: 6436,num: 21497,array: []}]}},[{_id: 6437,num: 49056,date: new Date("2018-09-06T18:54:08.827Z"),array: ["CSS","Monitored",{_id: 6438,str: "dynamic",num: 92798,array: [],obj: {_id: 6439,str: "Bike",obj: {_id: 6440,str: "Tools",num: 67402,date: new Date("2018-09-05T23:31:44.684Z")}}},{_id: 6441,date: new Date("2018-09-06T05:46:57.033Z"),array: []}],obj: {_id: 6442,str: "Investor",date: new Date("2018-09-06T15:46:40.827Z"),array: [[]]}},"neural"]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 6443,str: "strategize",num: 25916,date: new Date("2018-09-06T04:02:35.692Z"),array: [{_id: 6444,str: "program",array: [],obj: {_id: 6445,str: "Director intangible unleash",date: new Date("2018-09-06T07:24:26.887Z"),array: []}},"Brunei Darussalam",new Date("2018-09-06T04:03:24.639Z"),"RAM",[87891,new Date("2018-09-06T08:34:36.202Z"),49578,60284],"white deposit program",5106,"generating",new Date("2018-09-06T09:18:19.926Z"),new Date("2018-09-05T21:25:01.652Z"),new Date("2018-09-06T03:42:37.769Z")],obj: {_id: 6446,num: 89538,date: new Date("2018-09-06T10:01:41.504Z"),obj: {_id: 6447,str: "Israel Island",num: 86169,array: [64011,"purple Senior olive"]}}});
    },

    function(coll) {
        return coll.insert({_id: 6448,str: "Seychelles deposit mobile",num: 4972,date: new Date("2018-09-06T15:10:26.180Z"),array: [new Date("2018-09-06T09:56:20.881Z"),57060,new Date("2018-09-06T06:07:13.071Z"),"brand ivory",new Date("2018-09-06T05:53:52.788Z"),"maximize",35769,[],78331,50750,"Cheese Corporate"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 6449,str: "Data",num: 20471,date: new Date("2018-09-06T01:33:50.974Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 6450,str: "Home Interactions Concrete",num: 54073,date: new Date("2018-09-06T08:12:12.468Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 6451,num: 75348,date: new Date("2018-09-06T12:23:06.733Z"),array: [],obj: {_id: 6452,str: "Handcrafted Fantastic Metal Gloves SSL",num: 52767,date: new Date("2018-09-06T12:19:12.061Z"),array: [new Date("2018-09-06T14:17:46.899Z"),new Date("2018-09-06T00:55:45.991Z"),new Date("2018-09-05T23:58:39.954Z"),41087,11737,"AI",[],48143,94029],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 6453,str: "scale",num: 8008,date: new Date("2018-09-06T08:04:14.867Z"),array: [1856,[],69834,new Date("2018-09-06T10:56:03.197Z"),"Technician",{_id: 6454,num: 4520,date: new Date("2018-09-06T06:03:39.089Z"),array: [],obj: {_id: 6455,str: "Ergonomic Soft Table",num: 1171,array: [],obj: {_id: 6456,num: 63994,date: new Date("2018-09-06T15:57:17.784Z")}}},new Date("2018-09-06T10:49:17.948Z"),"24/7 deposit Pennsylvania",new Date("2018-09-06T05:25:19.393Z"),[new Date("2018-09-06T16:21:17.551Z"),43313,new Date("2018-09-06T10:22:04.231Z")]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 6457,str: "Rubber web-readiness",num: 34518,date: new Date("2018-09-06T05:49:05.299Z"),array: [],obj: {_id: 6458,str: "back-end convergence feed",num: 57726,date: new Date("2018-09-06T01:34:39.284Z"),array: ["Clothing","Tasty Soft Bacon",92293,66901,new Date("2018-09-06T11:32:32.778Z"),["Regional Branding",{_id: 6459,date: new Date("2018-09-06T07:42:50.709Z"),obj: {}},new Date("2018-09-06T13:05:30.627Z"),"Generic"],new Date("2018-09-06T05:53:05.176Z"),{_id: 6460,num: 83991,array: [95461,[],new Date("2018-09-06T08:28:07.029Z")],obj: {_id: 6461,str: "Executive Bedfordshire e-commerce",date: new Date("2018-09-06T17:40:19.327Z")}},81708],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 6462,str: "e-services",num: 27737,date: new Date("2018-09-06T14:16:16.962Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 6463,str: "Cuban Peso Peso Convertible standardization virtual",num: 48366,array: [],obj: {_id: 6464,str: "override",num: 19569,date: new Date("2018-09-06T07:56:55.757Z"),array: [{_id: 6465,str: "Product",num: 69865,date: new Date("2018-09-06T05:29:06.532Z"),array: [],obj: {}},"purple stable Fall",new Date("2018-09-06T14:37:53.866Z"),new Date("2018-09-06T19:42:19.285Z"),70298,3144,"human-resource",new Date("2018-09-05T20:40:26.024Z"),"Berkshire",34903,95078,[{_id: 6466,num: 8596,date: new Date("2018-09-06T19:01:12.065Z"),array: [new Date("2018-09-06T10:31:26.898Z")],obj: {}},9696,new Date("2018-09-06T00:37:52.080Z")]]}});
    },

    function(coll) {
        return coll.insert({_id: 6467,str: "knowledge base",num: 76387,date: new Date("2018-09-06T11:48:43.102Z"),array: [new Date("2018-09-06T13:12:10.108Z"),["XSS","cross-platform Health"],new Date("2018-09-06T11:52:17.671Z"),55816,15496,{_id: 6468,str: "policy",date: new Date("2018-09-06T10:07:38.165Z"),obj: {}},34603,"payment",{_id: 6469,str: "human-resource Decentralized JSON",num: 68645,date: new Date("2018-09-06T07:16:48.999Z"),array: [],obj: {}},new Date("2018-09-06T14:34:15.405Z"),new Date("2018-09-06T04:29:38.322Z"),"turquoise"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 6470,str: "Buckinghamshire Solomon Islands Intranet",date: new Date("2018-09-06T00:50:23.729Z"),array: [],obj: {_id: 6471,str: "expedite Won",num: 84936,date: new Date("2018-09-05T20:07:59.040Z"),array: [new Date("2018-09-05T23:57:59.501Z"),30041,"Myanmar Analyst Borders",{_id: 6472,array: []},[50040,new Date("2018-09-06T07:14:59.366Z"),20920,"RSS incubate invoice"],"Tunnel Fantastic",new Date("2018-09-06T19:01:07.209Z"),{_id: 6473,str: "Buckinghamshire",num: 80829,date: new Date("2018-09-06T18:00:58.512Z"),array: [],obj: {_id: 6474,num: 97756,array: [{_id: 6475,str: "Senior Universal invoice",num: 29541,date: new Date("2018-09-06T16:57:35.711Z"),array: [],obj: {_id: 6476,str: "Liberia withdrawal",date: new Date("2018-09-06T04:16:17.442Z"),obj: {}}}]}},[new Date("2018-09-06T14:23:30.313Z")],new Date("2018-09-06T16:35:38.871Z"),"Credit Card Account Paradigm Analyst",50489]}});
    },

    function(coll) {
        return coll.insert({_id: 6477,str: "Tuna Cambridgeshire",num: 97898,date: new Date("2018-09-06T19:07:15.132Z"),array: [],obj: {_id: 6478,str: "Tasty Soft Soap",num: 23960,date: new Date("2018-09-06T15:08:54.381Z"),array: ["core world-class","Borders deposit Synergistic",14848,new Date("2018-09-06T05:20:08.478Z"),66243,new Date("2018-09-06T19:04:06.351Z"),19337],obj: {_id: 6479,str: "Handmade Cotton silver",num: 47602,date: new Date("2018-09-06T03:23:47.089Z"),array: [],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 6480,str: "product",date: new Date("2018-09-06T18:05:29.905Z"),array: [],obj: {_id: 6481,str: "Rand Namibia Dollar Specialist",num: 47499,date: new Date("2018-09-06T15:37:21.999Z"),array: [29565,new Date("2018-09-05T23:09:16.938Z"),new Date("2018-09-06T01:13:59.336Z"),"killer",["challenge Borders"],20138,new Date("2018-09-05T22:01:22.932Z"),60884,31768],obj: {_id: 6482,str: "Awesome Baby Unbranded Wooden Computer",num: 39998,date: new Date("2018-09-06T13:28:34.232Z"),array: [],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 6483,str: "Cheese",num: 39306,date: new Date("2018-09-06T15:02:46.948Z"),array: [new Date("2018-09-05T21:40:19.718Z"),77476,33508,"Borders Checking Account navigating","Advanced",new Date("2018-09-06T08:11:41.984Z"),[],{_id: 6484,str: "hack Consultant",num: 85570,date: new Date("2018-09-06T04:31:30.067Z"),array: [],obj: {}},"transmitting cutting-edge Australia",new Date("2018-09-06T14:38:50.003Z"),[70335],new Date("2018-09-05T23:57:50.235Z"),{_id: 6485,array: [],obj: {}}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 6486,str: "redundant",num: 24124,date: new Date("2018-09-06T01:23:19.572Z"),array: ["cross-platform sky blue",new Date("2018-09-06T02:17:55.989Z"),39436,new Date("2018-09-06T17:12:13.369Z"),{_id: 6487,str: "deposit",num: 41207,date: new Date("2018-09-06T11:57:26.428Z"),array: [new Date("2018-09-06T07:11:25.973Z"),23736,29882,{_id: 6488,num: 82316,date: new Date("2018-09-06T08:51:43.881Z"),array: []}],obj: {}},"Intuitive Alaska",new Date("2018-09-06T14:28:48.729Z"),"interfaces",59305,[]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 6489,num: 4665,array: ["Developer Soft paradigm",46899,new Date("2018-09-05T22:45:33.967Z"),new Date("2018-09-06T13:45:46.334Z"),new Date("2018-09-05T22:28:36.042Z"),"Strategist Licensed upward-trending","Music",{_id: 6490,str: "program quantifying generate",num: 23622,date: new Date("2018-09-06T18:14:59.149Z"),array: [],obj: {_id: 6491,str: "Michigan Mississippi",date: new Date("2018-09-06T08:21:26.817Z")}}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 6492,str: "killer",num: 50875,date: new Date("2018-09-06T05:24:56.402Z"),array: [74659,new Date("2018-09-06T10:49:59.305Z"),"deposit",63286,"Auto Loan Account",new Date("2018-09-06T16:23:52.127Z"),new Date("2018-09-06T09:18:00.848Z"),{_id: 6493,str: "lime Direct",num: 3573,date: new Date("2018-09-06T12:19:18.105Z"),array: [],obj: {_id: 6494,str: "Arkansas Representative moderator",num: 85963,date: new Date("2018-09-05T22:10:00.242Z"),obj: {_id: 6495,array: [new Date("2018-09-06T19:53:20.195Z"),[]]}}},67908,{_id: 6496,str: "compressing deposit interface",num: 63665,date: new Date("2018-09-06T05:18:38.772Z"),array: [],obj: {}},"navigate Bedfordshire",71431,[{_id: 6497,str: "North Dakota",obj: {}}]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 6498,str: "green Refined",num: 31618,array: ["Practical Rubber Computer",new Date("2018-09-06T18:02:02.130Z"),"analyzer HTTP",new Date("2018-09-06T10:34:44.445Z"),11166,{_id: 6499,str: "Chief",date: new Date("2018-09-06T06:51:44.390Z"),array: [],obj: {_id: 6500,str: "Bacon Eritrea Unbranded Soft Chicken",num: 82413,date: new Date("2018-09-06T09:09:18.658Z"),array: [48173]}},new Date("2018-09-06T13:58:13.662Z"),"Multi-channelled holistic SQL","Direct",new Date("2018-09-06T19:11:24.741Z"),[],new Date("2018-09-06T04:53:55.512Z"),83927],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 6501,str: "Associate Program Generic",num: 85407,date: new Date("2018-09-06T04:44:17.948Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 6502,str: "Incredible Rubber Ball Cyprus parsing",num: 57133,date: new Date("2018-09-06T05:21:50.990Z"),array: ["Consultant Steel Naira",60018,new Date("2018-09-06T12:55:16.948Z"),[],new Date("2018-09-06T03:35:04.710Z"),5872,"Brazil SDD 5th generation","Ghana directional systemic",[{_id: 6503,str: "white",num: 62680,date: new Date("2018-09-06T02:12:07.330Z"),array: [],obj: {_id: 6504,date: new Date("2018-09-06T04:05:06.943Z"),array: [],obj: {_id: 6505,str: "Kids",num: 65903,array: [new Date("2018-09-06T07:26:30.622Z")],obj: {_id: 6506,str: "Awesome Granite Shirt transmitter Cambridgeshire",num: 39981,date: new Date("2018-09-06T08:22:30.071Z")}}}}],53514,{_id: 6507,str: "Somoni",num: 89169,date: new Date("2018-09-05T20:19:56.124Z"),array: [75623],obj: {}},new Date("2018-09-06T00:50:21.464Z"),"calculating",new Date("2018-09-06T07:00:55.170Z"),"Configuration card"]});
    },

    function(coll) {
        return coll.insert({_id: 6508,str: "Rubber Analyst",num: 1111,date: new Date("2018-09-06T11:53:18.780Z"),obj: {_id: 6509,str: "solid state card firmware",num: 99903,date: new Date("2018-09-06T08:22:26.522Z"),array: ["Steel","invoice 1080p flexibility",16970,new Date("2018-09-06T06:52:12.057Z"),new Date("2018-09-06T19:08:57.408Z"),new Date("2018-09-06T19:10:02.663Z"),257,{_id: 6510,str: "Automotive",date: new Date("2018-09-06T01:22:48.610Z"),array: [],obj: {}},{_id: 6511,str: "District Oregon",array: [7373],obj: {_id: 6512,str: "azure Guinea-Bissau",num: 41246,date: new Date("2018-09-06T03:43:02.403Z"),array: [],obj: {_id: 6513,num: 3098,date: new Date("2018-09-05T22:10:10.592Z"),array: []}}},new Date("2018-09-05T23:06:19.585Z"),[],{_id: 6514,num: 68429},88592,["XML Credit Card Account"]]}});
    },

    function(coll) {
        return coll.insert({_id: 6515,str: "zero administration Investment Account bypass",num: 46749,obj: {_id: 6516,str: "Estonia synergies archive",num: 83406,date: new Date("2018-09-05T20:54:38.129Z"),array: [new Date("2018-09-06T16:16:36.871Z"),new Date("2018-09-06T01:19:53.212Z"),"JSON",new Date("2018-09-06T13:04:05.406Z"),73952,"Computer",51753,94029,55415,"Cambridgeshire wireless olive",[54033,{_id: 6517,num: 81949,date: new Date("2018-09-06T09:53:08.966Z"),array: [],obj: {_id: 6518,str: "connect bluetooth Fantastic Fresh Pizza",num: 74130,date: new Date("2018-09-06T10:05:21.755Z"),array: [new Date("2018-09-06T09:12:26.031Z")],obj: {}}}]],obj: {_id: 6519,str: "hack Small Fresh Car one-to-one",date: new Date("2018-09-06T15:55:10.963Z"),array: [[],35782,[],"Square magenta",new Date("2018-09-05T21:17:40.491Z")]}}});
    },

    function(coll) {
        return coll.insert({_id: 6520,str: "THX SMTP Tugrik",num: 71872,date: new Date("2018-09-06T05:01:58.709Z"),array: [],obj: {_id: 6521,str: "calculate Usability",num: 24146,date: new Date("2018-09-06T01:46:31.601Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 6522,str: "Frozen green",num: 75502,date: new Date("2018-09-06T03:17:47.592Z"),array: [new Date("2018-09-06T15:32:54.652Z"),44197,"deposit Applications",98194,new Date("2018-09-06T01:29:16.713Z"),new Date("2018-09-06T17:55:11.960Z"),[],39363,{_id: 6523,str: "Pass Toys Electronics",num: 80021,date: new Date("2018-09-05T21:44:43.507Z"),array: ["Georgia Engineer Movies",new Date("2018-09-06T19:00:37.020Z")],obj: {}},"magnetic"],obj: {_id: 6524,date: new Date("2018-09-06T17:07:02.130Z"),obj: {_id: 6525,str: "Multi-channelled deposit",num: 44921,date: new Date("2018-09-06T18:58:41.882Z"),array: [],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 6526,str: "card Product Money Market Account",num: 66440,date: new Date("2018-09-06T12:34:35.210Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 6527,str: "Security architectures application",num: 24256,date: new Date("2018-09-06T17:40:37.296Z"),obj: {_id: 6528,str: "Usability",num: 36007,date: new Date("2018-09-06T14:51:00.243Z"),array: ["Metrics national",86925,{_id: 6529,str: "Customer Avon",num: 95146,array: [],obj: {}},new Date("2018-09-06T19:12:41.656Z"),93851,92610,new Date("2018-09-06T08:52:26.575Z"),"New Taiwan Dollar withdrawal Unbranded Metal Gloves",{_id: 6530,str: "1080p",num: 98651,date: new Date("2018-09-06T04:32:05.514Z"),array: [[]],obj: {}},"Designer",77709,["matrix Legacy",new Date("2018-09-06T11:07:53.433Z")],{_id: 6531,str: "Kenyan Shilling Fresh Customer",date: new Date("2018-09-06T15:50:22.362Z"),obj: {_id: 6532,num: 81445,array: []}}]}});
    },

    function(coll) {
        return coll.insert({_id: 6533,str: "Street Intranet",num: 92009,date: new Date("2018-09-06T09:50:40.135Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 6534,num: 54914,date: new Date("2018-09-06T17:58:37.926Z"),array: ["grid-enabled tan communities","Unbranded Metal",new Date("2018-09-06T02:29:17.831Z"),new Date("2018-09-05T22:07:06.933Z"),[],98807,new Date("2018-09-06T06:02:59.492Z"),"mobile",new Date("2018-09-06T14:07:01.268Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 6535,str: "Home back up Hawaii",num: 1512,date: new Date("2018-09-06T15:00:43.241Z"),array: [5924,80997,"Buckinghamshire Gloves hardware",new Date("2018-09-06T19:17:59.159Z"),"Terrace"],obj: {_id: 6536,str: "Rubber Directives recontextualize",num: 42690,date: new Date("2018-09-06T17:22:24.855Z"),array: [98925,[],new Date("2018-09-06T08:13:24.975Z"),4441,new Date("2018-09-05T21:53:22.191Z"),"TCP",{_id: 6537,str: "panel Towels synergize",num: 99126,date: new Date("2018-09-06T09:47:39.948Z"),array: [],obj: {_id: 6538,str: "Latvian Lats District Branding",date: new Date("2018-09-06T03:22:38.732Z"),array: [new Date("2018-09-06T17:41:52.573Z"),7391]}},[]],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 6539,str: "Home expedite",num: 57590,date: new Date("2018-09-06T07:24:54.351Z"),array: [],obj: {_id: 6540,date: new Date("2018-09-06T12:51:08.222Z"),array: [45160,[],"navigating","Ergonomic Optional Investor",new Date("2018-09-06T05:11:41.328Z"),29313,{_id: 6541,str: "Beauty bricks-and-clicks primary",num: 14894,date: new Date("2018-09-06T00:06:22.274Z"),array: ["Factors",new Date("2018-09-06T05:25:21.870Z"),new Date("2018-09-06T14:58:20.802Z"),"repurpose transmitting website"],obj: {}},4946,new Date("2018-09-06T01:38:02.710Z"),83264],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 6542,str: "AI mobile",num: 4,date: new Date("2018-09-06T02:13:55.926Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 6543,str: "implementation pink Pants",date: new Date("2018-09-06T14:04:58.322Z"),array: [new Date("2018-09-06T10:18:04.771Z"),new Date("2018-09-06T08:43:40.285Z"),17491,"card purple Ergonomic",29530,"Operations programming",{_id: 6544,num: 49872,date: new Date("2018-09-06T10:25:06.557Z"),array: [],obj: {_id: 6545,str: "Andorra Research synergize",num: 84506,array: [{_id: 6546,str: "Cambridgeshire Awesome Metal Tuna",num: 69660,array: [[]],obj: {}}]}},new Date("2018-09-06T14:28:41.696Z"),88259,62048,{_id: 6547,num: 77077}],obj: {_id: 6548,str: "web services",num: 87714,date: new Date("2018-09-06T06:17:10.851Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 6549,str: "Italy",num: 6107,date: new Date("2018-09-05T23:52:16.004Z"),array: [],obj: {_id: 6550,num: 79896,date: new Date("2018-09-06T16:30:59.677Z"),array: [{_id: 6551,str: "RAM portals",num: 7059,date: new Date("2018-09-06T09:23:32.067Z"),array: [],obj: {}},new Date("2018-09-06T19:38:19.324Z"),"IB Berkshire","Money Market Account Square Vanuatu","multi-tasking",[],new Date("2018-09-06T07:38:56.310Z"),99871,new Date("2018-09-06T14:50:24.405Z"),9472,new Date("2018-09-06T12:27:12.965Z"),{_id: 6552,str: "synergies",obj: {}},"payment mesh Executive"]}});
    },

    function(coll) {
        return coll.insert({_id: 6553,str: "Home Loan Account invoice",num: 72073,date: new Date("2018-09-06T04:31:45.106Z"),array: [new Date("2018-09-05T22:46:07.172Z"),"Administrator card",24733,"Regional Kroon",{_id: 6554,str: "cross-platform Analyst National",num: 38236,date: new Date("2018-09-06T18:18:33.880Z"),array: []},[],[],{_id: 6555,num: 88467,date: new Date("2018-09-05T21:48:37.226Z"),array: ["plug-and-play",new Date("2018-09-06T04:32:23.307Z"),"visionary Lodge green",24079],obj: {}},"Kazakhstan Factors",3538],obj: {_id: 6556,str: "Avon RSS",date: new Date("2018-09-06T19:19:55.243Z"),array: [new Date("2018-09-06T18:25:22.954Z"),new Date("2018-09-06T01:26:17.642Z")],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 6557,str: "Money Market Account wireless",num: 75297,date: new Date("2018-09-06T01:35:32.563Z"),array: [18804,89651,[],"Concrete matrix program",23696,"Equatorial Guinea",[new Date("2018-09-06T17:57:59.927Z"),[]],5402,{_id: 6558,str: "Car North Dakota",num: 24253,array: [new Date("2018-09-06T14:51:58.319Z"),new Date("2018-09-05T21:04:54.571Z"),"digital coherent",new Date("2018-09-06T15:58:40.655Z"),{_id: 6559,date: new Date("2018-09-06T04:28:35.234Z"),array: [],obj: {_id: 6560,num: 98108,array: ["visionary SAS",new Date("2018-09-06T10:43:30.455Z")],obj: {}}},38716,"index backing up Web",51240],obj: {_id: 6561,str: "capacity Tasty Configuration",num: 57247,date: new Date("2018-09-06T14:51:26.839Z"),array: [],obj: {_id: 6562,str: "Generic Won",num: 43341,date: new Date("2018-09-06T02:39:38.698Z")}}}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 6563,str: "Strategist Credit Card Account",num: 98049,date: new Date("2018-09-05T22:40:21.202Z"),array: [{_id: 6564,num: 80515,date: new Date("2018-09-06T09:05:56.341Z"),array: [],obj: {_id: 6565,str: "exuding Arizona Orchestrator",num: 91692,date: new Date("2018-09-06T11:11:46.256Z"),array: [],obj: {}}},{_id: 6566,str: "deposit transmitting Future",num: 12757,obj: {_id: 6567,str: "protocol withdrawal",array: [],obj: {}}},"Small Cotton Chicken",66304,97561,new Date("2018-09-06T03:45:21.316Z"),new Date("2018-09-06T04:23:54.604Z"),"South Dakota frictionless olive",28112,new Date("2018-09-06T01:09:44.367Z"),96937,"calculating",[24390,[]],"bleeding-edge Berkshire"]});
    },

    function(coll) {
        return coll.insert({_id: 6568,str: "SDD backing up synthesizing",num: 28546,date: new Date("2018-09-06T19:52:26.085Z"),array: [new Date("2018-09-06T03:45:42.417Z"),"maximized",30560,new Date("2018-09-06T17:34:53.060Z"),[],53886,new Date("2018-09-06T17:19:40.317Z"),new Date("2018-09-06T10:47:28.403Z"),49337,"user-centric haptic",[95513,{_id: 6569,num: 81722,date: new Date("2018-09-06T04:07:51.981Z"),array: [new Date("2018-09-06T15:55:48.118Z")],obj: {_id: 6570,str: "incubate",num: 57703,date: new Date("2018-09-06T17:24:27.898Z"),array: [],obj: {_id: 6571,str: "Bulgarian Lev Alabama",num: 32477}}},"Gorgeous Metal Computer software"]],obj: {_id: 6572,str: "user-facing Dam",date: new Date("2018-09-06T12:35:20.231Z")}});
    },

    function(coll) {
        return coll.insert({_id: 6573,str: "tangible Home Loan Account Decentralized",num: 24088,date: new Date("2018-09-05T20:46:22.528Z"),array: [57040,{_id: 6574,str: "compressing",date: new Date("2018-09-06T07:31:35.534Z"),array: [],obj: {}},"TCP",new Date("2018-09-06T12:46:58.727Z"),"technologies Reverse-engineered",new Date("2018-09-06T06:29:13.882Z"),"back-end",new Date("2018-09-06T16:24:52.621Z"),new Date("2018-09-06T07:01:48.543Z"),52959],obj: {_id: 6575,str: "bypassing",num: 99581,date: new Date("2018-09-06T16:03:33.199Z"),array: ["Concrete bypassing SDD",82742,new Date("2018-09-05T20:43:00.585Z"),[new Date("2018-09-06T03:53:58.253Z")],{_id: 6576,array: [{_id: 6577,str: "French Southern Territories Gorgeous Granite Pizza interfaces",num: 58382,date: new Date("2018-09-06T19:53:56.324Z"),obj: {_id: 6578,str: "GB",num: 5189,obj: {}}},78714]}],obj: {_id: 6579,str: "Grocery Thailand",date: new Date("2018-09-06T11:38:24.434Z"),array: []}}});
    },

    function(coll) {
        return coll.insert({_id: 6580,str: "red",num: 85683,date: new Date("2018-09-06T10:08:05.228Z"),array: ["Overpass maroon gold",new Date("2018-09-06T07:01:53.718Z"),30541,"Movies","Shoes redefine pixel",[],new Date("2018-09-06T04:58:37.936Z"),"Buckinghamshire Rubber",52681,{_id: 6581,str: "Refined",num: 69744,date: new Date("2018-09-06T13:48:28.511Z"),array: [40958,new Date("2018-09-06T15:48:03.534Z")],obj: {_id: 6582,str: "platforms Intelligent Wooden Chips",array: [[],new Date("2018-09-06T02:42:21.287Z"),[]],obj: {}}},new Date("2018-09-06T10:04:40.642Z"),{_id: 6583,str: "Program",num: 22734,date: new Date("2018-09-06T18:04:41.757Z")}]});
    },

    function(coll) {
        return coll.insert({_id: 6584,str: "infrastructures",num: 23797,date: new Date("2018-09-05T23:59:52.461Z"),array: [43292,"Jewelery Corporate sexy",55439,{_id: 6585,num: 78243,obj: {}},"primary Saudi Riyal",new Date("2018-09-06T12:01:37.020Z"),"turn-key",new Date("2018-09-06T03:11:10.081Z"),new Date("2018-09-05T23:34:58.915Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 6586,str: "El Salvador Colon US Dollar SAS Alabama",num: 78518,date: new Date("2018-09-06T03:41:43.916Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 6587,str: "Buckinghamshire transmitter transitional",num: 12234,date: new Date("2018-09-06T16:25:12.739Z"),array: [],obj: {_id: 6588,str: "Human",num: 44267,date: new Date("2018-09-06T00:49:57.913Z"),array: [91100,17503,"Ergonomic Steel Shirt","connect","system portals",[],{_id: 6589,str: "Cambridgeshire Fresh Home",date: new Date("2018-09-06T09:53:51.262Z"),obj: {}},85509,new Date("2018-09-06T04:37:54.783Z"),[84471,new Date("2018-09-06T02:08:23.010Z"),new Date("2018-09-06T16:20:12.679Z"),new Date("2018-09-06T03:46:10.034Z"),"Soft"]],obj: {_id: 6590,str: "Bike",num: 14355,obj: {_id: 6591,date: new Date("2018-09-06T00:17:39.719Z"),array: [[]]}}}});
    },

    function(coll) {
        return coll.insert({_id: 6592,num: 6871,date: new Date("2018-09-06T07:58:21.308Z"),array: [61484,{_id: 6593,str: "static ADP",num: 11855,date: new Date("2018-09-06T08:31:36.214Z"),array: [],obj: {_id: 6594,str: "solution haptic",date: new Date("2018-09-06T17:08:24.614Z"),obj: {}}},35187,new Date("2018-09-06T02:06:06.063Z"),"Mills customized Shoes",new Date("2018-09-06T10:20:39.938Z"),"Rustic Metal Chips Chief SMTP",75148,new Date("2018-09-06T11:38:16.738Z"),84773,"tan Developer Algeria",new Date("2018-09-06T05:59:22.100Z"),[]],obj: {_id: 6595,str: "Factors",num: 30137,date: new Date("2018-09-05T22:35:54.128Z"),array: [],obj: {_id: 6596,num: 0,array: [[[]],{_id: 6597,str: "Investment Account",num: 477,date: new Date("2018-09-06T18:32:53.148Z"),array: [],obj: {}},new Date("2018-09-06T09:02:55.577Z")]}}});
    },

    function(coll) {
        return coll.insert({_id: 6598,str: "Timor-Leste",num: 57748,date: new Date("2018-09-06T08:31:31.791Z"),array: [83400,23187,new Date("2018-09-05T21:03:06.992Z"),"Buckinghamshire Soft pink",new Date("2018-09-06T10:44:40.544Z"),"Rustic Wooden Keyboard",new Date("2018-09-05T23:54:54.617Z"),"Borders",42155],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 6599,str: "frictionless Computers",num: 36177,date: new Date("2018-09-06T13:37:13.930Z"),array: ["SCSI recontextualize",76831,new Date("2018-09-06T19:37:55.369Z"),[],"Investment Account invoice",{_id: 6600,num: 25813,date: new Date("2018-09-06T01:19:17.278Z"),array: [new Date("2018-09-06T17:10:08.209Z"),"Tuna Shirt"],obj: {}},93380,new Date("2018-09-06T16:36:08.858Z"),[new Date("2018-09-06T01:03:57.043Z"),61530,{_id: 6601,str: "stable applications",num: 86019,date: new Date("2018-09-06T05:57:32.143Z"),array: ["payment program Engineer",new Date("2018-09-06T07:15:06.994Z")],obj: {}},"SQL",45687],99270,[]],obj: {_id: 6602,str: "withdrawal",num: 73687,date: new Date("2018-09-06T16:20:57.548Z"),obj: {_id: 6603,num: 4219,date: new Date("2018-09-06T19:49:12.663Z"),array: []}}});
    },

    function(coll) {
        return coll.insert({_id: 6604,str: "invoice Metal Dynamic",date: new Date("2018-09-05T20:50:34.056Z"),array: [],obj: {_id: 6605,str: "Legacy payment Bulgaria",array: [new Date("2018-09-06T16:40:59.234Z"),20863,"multi-byte",{_id: 6606,num: 93692,date: new Date("2018-09-06T16:26:40.494Z"),array: [],obj: {}},[59774],"azure Trafficway",new Date("2018-09-06T04:42:27.221Z"),"Regional reinvent hard drive",new Date("2018-09-06T04:42:27.557Z"),[],"Handcrafted Steel Salad lavender",{_id: 6607,str: "Rustic Officer Kazakhstan",num: 55827,array: [],obj: {}},67551]}});
    },

    function(coll) {
        return coll.insert({_id: 6608,str: "bypass Senior",date: new Date("2018-09-06T10:58:14.488Z"),array: ["Facilitator Soft",[["Soft"],new Date("2018-09-06T01:12:47.197Z"),21659,62121],16960,{_id: 6609,num: 38131,array: [],obj: {}},new Date("2018-09-06T12:30:43.122Z"),"Hryvnia",new Date("2018-09-06T01:58:33.448Z"),new Date("2018-09-05T20:06:46.331Z"),11704,new Date("2018-09-06T05:42:46.095Z"),"Harbors syndicate"],obj: {_id: 6610,str: "clear-thinking matrix",date: new Date("2018-09-06T09:41:20.506Z"),array: [],obj: {_id: 6611,str: "Intelligent Metal Computer",num: 43480,date: new Date("2018-09-06T07:47:11.274Z"),array: [],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 6612,str: "Associate Steel Intelligent Plastic Pants",date: new Date("2018-09-06T13:17:51.578Z"),array: ["Incredible Fresh Bike Tasty Practical","Vanuatu Shoes",new Date("2018-09-06T02:11:46.185Z"),6809,new Date("2018-09-06T08:28:19.320Z"),new Date("2018-09-06T08:18:24.482Z"),3543,new Date("2018-09-05T22:21:47.738Z"),"Handmade Wooden Fish Fantastic Frozen Fish Re-contextualized",[]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 6613,str: "Australian Dollar program",num: 96705,date: new Date("2018-09-06T18:44:36.690Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 6614,str: "maroon Synchronised Specialist",num: 42375,date: new Date("2018-09-05T23:53:14.250Z"),array: [new Date("2018-09-06T09:11:12.672Z"),["purple evolve"],new Date("2018-09-06T01:02:45.941Z"),new Date("2018-09-06T03:54:42.724Z"),76625,"utilize interface deposit",71824,53855,"Product",{_id: 6615,str: "Computer Computer",num: 76405,array: [],obj: {_id: 6616,str: "Steel generating experiences",num: 87572,date: new Date("2018-09-06T05:57:19.305Z"),array: [],obj: {}}},{_id: 6617,str: "Japan",date: new Date("2018-09-06T00:42:12.027Z"),array: [],obj: {}},69361,"Gorgeous"]});
    },

    function(coll) {
        return coll.insert({_id: 6618,str: "withdrawal Intelligent Concrete Bacon payment",date: new Date("2018-09-06T14:00:59.033Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 6619,str: "Cotton connect",num: 41809,date: new Date("2018-09-06T13:49:54.635Z"),array: [new Date("2018-09-06T12:02:53.871Z"),new Date("2018-09-05T21:59:40.664Z"),"Bedfordshire Berkshire",{_id: 6620,str: "scale",num: 5703,array: [],obj: {_id: 6621,str: "Representative repurpose Denar",num: 89775,obj: {}}},"hack Czech Koruna",92792,[],new Date("2018-09-06T07:07:00.106Z"),35771,"generating ivory","killer Practical Steel Fish",[34978,[93521,"seamless Developer"]]],obj: {_id: 6622,num: 20001,date: new Date("2018-09-06T14:10:46.837Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 6623,str: "technologies",num: 41654,array: [new Date("2018-09-06T18:54:39.572Z"),"Intelligent Concrete Bacon online navigating",new Date("2018-09-06T06:16:27.352Z"),"sexy",{_id: 6624,str: "Alabama",date: new Date("2018-09-06T02:43:43.245Z"),array: [],obj: {}},6233,{_id: 6625,str: "synthesize program Automotive",date: new Date("2018-09-06T13:28:46.599Z"),array: [[],"Frozen",59018,84554],obj: {}},"Computer models","Lodge Kids"],obj: {_id: 6626,str: "Refined Rubber Chips",num: 55658,date: new Date("2018-09-05T21:39:16.298Z"),obj: {_id: 6627,str: "Rand Loti sensor intangible",num: 83025,date: new Date("2018-09-06T03:17:54.989Z"),array: [],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 6628,str: "maroon deposit",num: 48648,date: new Date("2018-09-05T22:57:53.570Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 6629,str: "neural",num: 33100,date: new Date("2018-09-06T02:38:43.797Z"),array: [],obj: {_id: 6630,str: "Expressway Producer Mouse",num: 87031,date: new Date("2018-09-06T04:33:06.328Z"),array: ["Concrete Savings Account",new Date("2018-09-06T05:28:45.082Z"),"Public-key Intelligent",90255,79126]}});
    },

    function(coll) {
        return coll.insert({_id: 6631,str: "input",num: 94017,date: new Date("2018-09-06T15:45:19.061Z"),obj: {_id: 6632,str: "Moldova Seamless Integration",date: new Date("2018-09-06T07:57:05.131Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 6633,str: "Corporate",date: new Date("2018-09-06T12:53:24.840Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 6634,str: "olive",date: new Date("2018-09-06T17:37:41.854Z"),array: [],obj: {_id: 6635,str: "redundant",num: 13423,date: new Date("2018-09-06T06:05:28.605Z"),array: [new Date("2018-09-05T22:24:36.540Z"),new Date("2018-09-06T19:27:18.634Z"),"reboot Home Awesome Granite Salad","Associate",{_id: 6636,num: 9532,array: [new Date("2018-09-05T21:37:20.619Z")]},37704,[],28152,new Date("2018-09-05T21:34:09.480Z"),"Officer Florida","experiences Enhanced",60194],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 6637,str: "1080p interface",num: 26993,date: new Date("2018-09-06T07:16:51.596Z"),array: [7364,"Fresh withdrawal",new Date("2018-09-06T02:42:33.214Z"),"Metal","JSON",[],92116,new Date("2018-09-05T21:52:58.652Z"),{_id: 6638,str: "users",date: new Date("2018-09-06T05:34:37.076Z"),array: [[new Date("2018-09-05T22:26:06.099Z")],new Date("2018-09-06T01:35:23.623Z")],obj: {}},82318,[]],obj: {_id: 6639,num: 22156,date: new Date("2018-09-06T03:46:12.967Z"),array: [{_id: 6640,str: "International Up-sized",num: 76230,obj: {}},48488,{_id: 6641,str: "Marketing Open-architected Applications",date: new Date("2018-09-06T03:34:54.391Z"),array: [new Date("2018-09-06T02:58:20.193Z")]},60540],obj: {_id: 6642,num: 5101,date: new Date("2018-09-06T07:26:09.403Z"),obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 6643,str: "Shirt installation orange",num: 54743,date: new Date("2018-09-06T07:12:11.084Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 6644,str: "FTP driver Small",array: [new Date("2018-09-05T20:28:38.237Z"),87791,"Glen Democratic People's Republic of Korea",65780,[],{_id: 6645,str: "leading-edge",num: 75843,date: new Date("2018-09-05T23:35:40.746Z"),array: [],obj: {_id: 6646,str: "yellow",num: 22756,date: new Date("2018-09-06T03:35:59.897Z"),array: ["Buckinghamshire Robust",new Date("2018-09-06T16:48:35.670Z"),new Date("2018-09-06T13:37:28.029Z")],obj: {}}},84216,"Money Market Account Berkshire CSS",86215,{_id: 6647,num: 87336,date: new Date("2018-09-06T10:43:52.738Z")},[new Date("2018-09-06T00:52:53.760Z")],{_id: 6648,str: "Dynamic",num: 96227,date: new Date("2018-09-06T15:01:11.720Z")},[]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 6649,str: "1080p Tuna",num: 62332,obj: {_id: 6650,str: "Awesome Soft Hat Curve Up-sized",date: new Date("2018-09-06T07:44:46.124Z"),array: [new Date("2018-09-06T14:35:40.482Z"),{_id: 6651,str: "Rapids",num: 87207,date: new Date("2018-09-06T15:28:05.746Z"),array: [],obj: {}},new Date("2018-09-06T09:38:03.949Z"),80111,"Union",[55161,[],"Awesome Frozen Chicken Organized Credit Card Account",new Date("2018-09-06T16:44:54.769Z")],new Date("2018-09-06T04:02:38.526Z"),"emulation Riel Self-enabling",{_id: 6652,num: 65073,date: new Date("2018-09-06T05:03:44.341Z"),array: [],obj: {}},{_id: 6653,str: "Awesome Granite Bike",num: 42346,array: [94439,25307]},new Date("2018-09-06T15:04:50.831Z"),91355],obj: {_id: 6654,str: "reinvent",num: 91544,date: new Date("2018-09-06T19:08:31.826Z"),obj: {_id: 6655,date: new Date("2018-09-05T22:52:10.417Z")}}}});
    },

    function(coll) {
        return coll.insert({_id: 6656,str: "Locks Small Guinea Franc",num: 41528,date: new Date("2018-09-06T03:05:23.436Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 6657,str: "payment software",num: 76674,date: new Date("2018-09-06T11:59:23.959Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 6658,str: "front-end generating",num: 16668,date: new Date("2018-09-06T07:27:40.839Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 6659,str: "purple",num: 98905,date: new Date("2018-09-05T20:17:36.337Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 6660,str: "Focused index Lead",num: 35820,date: new Date("2018-09-06T12:49:56.541Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 6661,str: "Chips",num: 42506,date: new Date("2018-09-06T11:08:13.180Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 6662,str: "Kyrgyz Republic input",num: 25046,date: new Date("2018-09-06T00:49:09.006Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 6663,num: 15975,date: new Date("2018-09-06T19:14:52.275Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 6664,num: 46302,date: new Date("2018-09-06T18:50:53.533Z"),array: [75592,"Licensed Frozen Chair","Sleek","upward-trending",new Date("2018-09-06T01:05:18.104Z"),new Date("2018-09-06T03:50:55.215Z"),85282,92801,new Date("2018-09-06T08:19:29.818Z"),"firmware",{_id: 6665,str: "HDD bandwidth",num: 83432,date: new Date("2018-09-06T07:19:09.044Z"),obj: {_id: 6666,str: "backing up Administrator payment",num: 73459,date: new Date("2018-09-06T13:28:56.178Z"),array: [],obj: {_id: 6667,str: "withdrawal",obj: {}}}}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 6668,str: "bypass",num: 85017,date: new Date("2018-09-06T13:34:13.150Z"),array: ["Savings Account Plastic",[],"compressing back-end",{_id: 6669,str: "dot-com Kazakhstan Fantastic Fresh Shirt",num: 71172,date: new Date("2018-09-06T01:43:15.821Z"),array: [new Date("2018-09-06T03:38:12.294Z"),{_id: 6670,str: "Arkansas",date: new Date("2018-09-06T09:37:14.827Z"),obj: {}},new Date("2018-09-06T09:37:56.819Z")],obj: {}},43039,{_id: 6671,num: 585,date: new Date("2018-09-06T18:30:39.899Z"),array: ["Strategist",17205,{_id: 6672,str: "Avon Albania",num: 52676,array: [],obj: {_id: 6673,date: new Date("2018-09-05T23:51:22.220Z")}},99627,58937],obj: {_id: 6674,num: 37940,date: new Date("2018-09-06T07:48:05.330Z"),array: []}},new Date("2018-09-06T12:56:53.852Z"),"grey Investment Account e-business",[new Date("2018-09-06T13:00:49.022Z")]],obj: {_id: 6675,str: "copy Enterprise-wide",num: 66055}});
    },

    function(coll) {
        return coll.insert({_id: 6676,str: "Shoes intuitive",num: 46184,date: new Date("2018-09-06T00:42:28.629Z"),array: ["Dynamic Estate synergies",8934,new Date("2018-09-06T18:03:30.073Z"),new Date("2018-09-06T17:31:36.692Z"),77684,"Tuna",{_id: 6677,str: "Gorgeous zero defect Regional",num: 64253,date: new Date("2018-09-05T21:51:45.521Z"),obj: {}},{ _id: 6678 }],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 6679,str: "bandwidth",num: 36989,date: new Date("2018-09-06T00:43:23.020Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 6680,str: "enterprise Computer JSON",num: 63265,date: new Date("2018-09-06T10:04:06.039Z"),array: [["Mouse",81620,30962,"Table",new Date("2018-09-06T13:40:08.258Z")],31907,[{_id: 6681,str: "Pennsylvania circuit transmitter",num: 57479,date: new Date("2018-09-06T15:21:39.402Z"),array: []}],"infomediaries Tuvalu Guatemala",new Date("2018-09-06T14:06:45.516Z"),80849,{_id: 6682,str: "Cotton",num: 21902,date: new Date("2018-09-06T03:46:34.364Z"),array: [],obj: {_id: 6683,num: 70084}},[{_id: 6684,num: 91028,date: new Date("2018-09-05T20:32:56.938Z"),array: [],obj: {}},6764,new Date("2018-09-06T00:54:20.246Z"),new Date("2018-09-06T16:30:07.536Z")],"Optimized paradigms Fresh"],obj: {_id: 6685,str: "bluetooth bottom-line Harbors",obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 6686,str: "encoding feed",date: new Date("2018-09-06T07:22:48.165Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 6687,str: "Connecticut",num: 20256,date: new Date("2018-09-06T01:40:39.956Z"),array: [],obj: {_id: 6688,str: "HDD digital Markets",num: 65213,date: new Date("2018-09-05T20:55:25.900Z"),array: [{_id: 6689,str: "Agent",date: new Date("2018-09-06T00:11:26.205Z")},"Industrial","Graphic Interface Personal Loan Account Colorado",new Date("2018-09-05T23:08:06.591Z"),43716,[88225,"Licensed bandwidth Green",26505],new Date("2018-09-06T04:16:40.670Z"),new Date("2018-09-06T11:57:14.933Z"),83161,{_id: 6690,num: 95766,array: [60193,new Date("2018-09-05T21:21:44.967Z"),"Intelligent",[],new Date("2018-09-05T20:06:48.250Z")],obj: {}},{_id: 6691,num: 34964,date: new Date("2018-09-06T17:17:03.527Z"),array: ["Licensed Wooden Chips Turkey"],obj: {_id: 6692,str: "Producer Functionality",array: []}}]}});
    },

    function(coll) {
        return coll.insert({_id: 6693,num: 34155,date: new Date("2018-09-06T06:47:34.469Z"),array: [],obj: {_id: 6694,str: "Agent",num: 81547,date: new Date("2018-09-06T19:54:50.966Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 6695,str: "green discrete",num: 83524,date: new Date("2018-09-06T09:51:34.318Z"),array: [new Date("2018-09-05T20:56:18.125Z"),new Date("2018-09-06T16:50:14.603Z"),97705,["Bangladesh New Taiwan Dollar","e-services",54995,{_id: 6696,str: "turquoise Bacon",num: 95054,date: new Date("2018-09-05T21:48:09.553Z"),array: ["asynchronous Tasty Steel Salad interface",[],new Date("2018-09-06T06:11:41.178Z")],obj: {_id: 6697,str: "Avon",num: 63447,date: new Date("2018-09-06T05:43:46.724Z"),array: [],obj: {_id: 6698,str: "portals connect viral",num: 40753,date: new Date("2018-09-05T21:14:04.051Z"),array: [],obj: {_id: 6699,obj: {}}}}}],"Soap Facilitator",52926,25687,96809,new Date("2018-09-06T05:11:04.676Z"),{_id: 6700,str: "Refined",num: 59115,array: [new Date("2018-09-06T03:44:59.859Z")]}],obj: {_id: 6701,obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 6702,str: "Practical",num: 9074,date: new Date("2018-09-05T20:36:07.191Z"),array: [],obj: {_id: 6703,str: "EXE",num: 35536,date: new Date("2018-09-05T22:13:51.769Z"),array: [38831,{_id: 6704,num: 54138,obj: {}},"Rustic GB",12119,[new Date("2018-09-06T15:50:26.296Z")],new Date("2018-09-06T18:04:41.508Z"),43710,[{_id: 6705,str: "Lebanese Pound deposit",num: 39302,date: new Date("2018-09-06T06:26:08.050Z"),array: [],obj: {}},new Date("2018-09-05T23:18:21.977Z"),"Small Soft Keyboard",35897],{_id: 6706,str: "Sleek Frozen Chicken sensor",date: new Date("2018-09-05T23:58:34.890Z"),array: [],obj: {}},{_id: 6707,num: 51312,date: new Date("2018-09-06T11:55:02.070Z"),array: []},"Mayotte withdrawal protocol",new Date("2018-09-05T22:52:15.976Z"),53891]}});
    },

    function(coll) {
        return coll.insert({_id: 6708,str: "Bacon",num: 35135,date: new Date("2018-09-06T19:38:52.279Z"),array: [new Date("2018-09-06T03:27:25.487Z"),new Date("2018-09-05T23:06:43.992Z"),"core",{_id: 6709,str: "Junction",num: 53597,array: [],obj: {_id: 6710,num: 34861,obj: {}}},new Date("2018-09-05T22:55:48.490Z"),[],12281,"invoice Agent",["full-range withdrawal"],85913,95861],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 6711,str: "Guarani",num: 80473,date: new Date("2018-09-06T06:29:11.198Z"),array: [44157,new Date("2018-09-06T04:41:39.518Z"),"intermediate Liaison Dynamic",new Date("2018-09-05T23:30:08.433Z"),81026,"Buckinghamshire generate",new Date("2018-09-06T08:21:28.948Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 6712,str: "benchmark",num: 45974,date: new Date("2018-09-06T01:23:36.000Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 6713,str: "Pre-emptive",num: 79264,date: new Date("2018-09-06T12:22:56.914Z"),array: [new Date("2018-09-05T22:41:22.624Z"),{_id: 6714,str: "alarm Rest Investment Account",num: 40130,date: new Date("2018-09-05T19:58:32.490Z"),array: [],obj: {}},"sexy Credit Card Account Convertible Marks",[[],new Date("2018-09-06T16:06:32.974Z")],65853,"system Awesome",new Date("2018-09-06T08:20:18.820Z"),new Date("2018-09-06T03:46:44.622Z"),{_id: 6715,str: "Divide",num: 44918,date: new Date("2018-09-06T04:07:07.652Z"),obj: {_id: 6716,array: [],obj: {}}},93912,"explicit Fantastic Wooden Tuna",new Date("2018-09-06T04:39:11.347Z")],obj: {_id: 6717,str: "alarm Somalia Metal",num: 86863,date: new Date("2018-09-06T02:30:40.955Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 6718,str: "Credit Card Account",num: 3235,date: new Date("2018-09-06T19:52:29.763Z"),array: [],obj: {_id: 6719,str: "Executive USB PCI",num: 59997,date: new Date("2018-09-06T04:26:52.423Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 6720,str: "Falkland Islands Pound Cyprus proactive",num: 29601,date: new Date("2018-09-06T03:31:45.954Z"),array: ["yellow background payment","GB",new Date("2018-09-06T16:48:16.365Z"),[75411,"utilize",new Date("2018-09-05T21:40:04.920Z")],{_id: 6721,num: 62043,date: new Date("2018-09-06T01:03:18.953Z"),array: [1969],obj: {}},[{_id: 6722,str: "Republic of Korea PCI",num: 12651,date: new Date("2018-09-05T23:31:15.141Z"),array: [70241]},"IB New Mexico Intranet"],74862,"South Dakota Shoes",new Date("2018-09-06T12:44:25.357Z"),[],84878],obj: {_id: 6723,num: 17263,date: new Date("2018-09-06T17:25:59.140Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 6724,str: "Senior web-readiness Architect",num: 52936,date: new Date("2018-09-05T21:17:46.693Z"),array: [32157,92583,"Profit-focused implement utilize",87507,{_id: 6725,str: "deposit Gloves Optimized",num: 39111,date: new Date("2018-09-05T20:18:53.362Z"),obj: {}},{_id: 6726,str: "bandwidth Maryland Trail",num: 94074,date: new Date("2018-09-06T13:47:14.405Z"),array: [],obj: {_id: 6727,str: "Frozen Facilitator back-end",date: new Date("2018-09-06T05:10:49.249Z"),obj: {_id: 6728,str: "Track",num: 11528,date: new Date("2018-09-06T06:03:28.740Z"),array: [],obj: {}}}},"interactive Creative",11906,new Date("2018-09-06T09:34:38.291Z"),new Date("2018-09-06T00:51:01.809Z"),new Date("2018-09-06T11:26:28.163Z"),["calculating Fantastic white",new Date("2018-09-06T04:45:57.919Z")]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 6729,str: "Shirt",num: 13026,date: new Date("2018-09-06T08:50:57.571Z"),array: ["Tanzania",{_id: 6730,str: "Locks Gardens National",num: 94587,obj: {_id: 6731,str: "Alabama demand-driven Borders",num: 44046,date: new Date("2018-09-06T19:29:49.783Z"),array: [new Date("2018-09-05T20:01:42.797Z"),new Date("2018-09-06T10:58:56.116Z"),16948,new Date("2018-09-06T17:55:59.019Z"),77545,"Kids",[]],obj: {_id: 6732,num: 87115,date: new Date("2018-09-06T19:33:11.988Z"),array: [],obj: {}}}},{_id: 6733,str: "digital",num: 40199,array: [],obj: {_id: 6734,str: "matrix haptic",date: new Date("2018-09-05T22:27:22.421Z")}},"Sleek Concrete Table AI",[{_id: 6735,array: [98550]}],new Date("2018-09-06T19:19:42.924Z"),"Usability",[]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 6736,str: "digital Licensed Borders",num: 90612,date: new Date("2018-09-06T12:39:04.146Z"),array: [69014,"Russian Federation Unbranded Frozen",{_id: 6737,str: "Product TCP lime",num: 8712,date: new Date("2018-09-05T23:05:19.688Z"),array: [],obj: {}},"multi-byte Specialist needs-based",new Date("2018-09-06T12:51:41.349Z"),32684,new Date("2018-09-06T02:06:50.878Z"),{_id: 6738,str: "Pants Summit Massachusetts",num: 57325,obj: {_id: 6739,date: new Date("2018-09-06T02:03:17.672Z"),array: [],obj: {_id: 6740,date: new Date("2018-09-05T20:22:00.973Z"),obj: {}}}},new Date("2018-09-06T03:51:04.133Z")]});
    },

    function(coll) {
        return coll.insert({_id: 6741,str: "Personal Loan Account 6th generation Bacon",num: 74856,date: new Date("2018-09-06T10:07:51.853Z"),array: [new Date("2018-09-06T01:22:33.368Z"),new Date("2018-09-06T14:48:04.778Z"),77916,10505,"initiatives Supervisor Bike",[],13600],obj: {_id: 6742,str: "redundant visualize Alabama",num: 30162,date: new Date("2018-09-06T01:45:20.879Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 6743,num: 39369,date: new Date("2018-09-06T08:03:07.734Z"),array: [{_id: 6744,str: "reboot navigate analyzer",num: 87373,date: new Date("2018-09-06T12:34:52.877Z"),array: [new Date("2018-09-06T01:09:21.461Z"),11477,36338,"bus Liaison",new Date("2018-09-06T17:05:53.021Z")],obj: {}},"holistic Small Rubber Bacon",[],"Czech Republic",65153,new Date("2018-09-06T06:44:28.243Z")]});
    },

    function(coll) {
        return coll.insert({_id: 6745,str: "SMTP Garden",num: 94659,date: new Date("2018-09-06T10:10:46.562Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 6746,str: "Wooden",num: 98430,date: new Date("2018-09-06T09:17:06.541Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 6747,str: "implementation",num: 59943,date: new Date("2018-09-05T22:34:19.026Z"),array: [],obj: {_id: 6748,str: "Personal Loan Account Rustic",num: 29487,array: [36710,"Trace",new Date("2018-09-06T00:36:28.106Z"),"attitude-oriented Ergonomic Plastic Ball",new Date("2018-09-06T03:27:23.549Z"),[],"Customer virtual","users",{_id: 6749,str: "transitional",date: new Date("2018-09-06T08:56:33.574Z"),array: [],obj: {}},91756,76806,{_id: 6750,str: "Credit Card Account",num: 19193,date: new Date("2018-09-05T20:45:08.621Z")},{_id: 6751,str: "optimizing",num: 62903,date: new Date("2018-09-06T02:10:32.595Z")}]}});
    },

    function(coll) {
        return coll.insert({_id: 6752,str: "Response Central African Republic Savings Account",num: 98205,date: new Date("2018-09-05T21:33:51.633Z"),array: [],obj: {_id: 6753,str: "Ergonomic Fresh Bike Corporate bus",num: 87962,array: [[],new Date("2018-09-05T21:10:23.990Z"),71235,"Road","connect",55600,new Date("2018-09-05T23:14:50.375Z"),new Date("2018-09-06T04:48:46.277Z")],obj: {_id: 6754,str: "Managed engage",num: 78293,date: new Date("2018-09-06T01:30:59.651Z"),array: [{_id: 6755,num: 75290,date: new Date("2018-09-06T10:14:05.597Z"),array: ["ADP Concrete",new Date("2018-09-06T12:29:24.476Z"),57303]},"Shoes",[43800],53565,new Date("2018-09-05T22:48:45.733Z"),"HTTP Intuitive"],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 6756,str: "invoice primary",num: 36639,date: new Date("2018-09-06T05:03:56.015Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 6757,str: "Quality e-commerce",num: 78745,date: new Date("2018-09-06T08:11:31.262Z"),array: [82041,"e-markets",596,new Date("2018-09-06T11:38:15.152Z"),new Date("2018-09-06T14:24:37.699Z"),"Proactive Forward",{_id: 6758,str: "Human",num: 14107,array: [30940,[]],obj: {}},"protocol Dynamic Bedfordshire",{_id: 6759,str: "B2B plum New Jersey",date: new Date("2018-09-06T08:20:17.057Z"),obj: {_id: 6760,str: "Savings Account",num: 79098,date: new Date("2018-09-06T07:00:06.431Z"),array: [new Date("2018-09-06T05:50:25.962Z")]}},[],new Date("2018-09-05T20:10:43.257Z"),{_id: 6761,str: "next generation",num: 48867,date: new Date("2018-09-05T21:36:16.200Z"),array: [],obj: {}},[["Brand","Division"],new Date("2018-09-06T07:43:15.477Z"),new Date("2018-09-06T09:15:54.867Z")]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 6762,str: "multi-byte Checking Account Frozen",num: 96596,date: new Date("2018-09-06T11:05:25.063Z"),array: [],obj: {_id: 6763,str: "platforms synergies Sausages",num: 74567,date: new Date("2018-09-05T22:05:41.260Z"),obj: {_id: 6764,str: "Rhode Island",num: 64457,date: new Date("2018-09-06T08:30:20.813Z"),array: [new Date("2018-09-06T09:20:54.072Z"),"Branding",97550,"open-source",new Date("2018-09-06T17:25:05.202Z"),[],"Chips Internal",38398,3938,"clicks-and-mortar",44119],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 6765,str: "interface",num: 15390,date: new Date("2018-09-06T01:22:33.810Z"),array: [new Date("2018-09-06T01:43:59.200Z"),"Sleek Chief circuit",new Date("2018-09-06T08:24:41.675Z"),"Cambridgeshire eyeballs",31433,[],{_id: 6766,str: "olive calculate Seychelles Rupee",num: 43718,date: new Date("2018-09-06T09:12:57.533Z"),array: [],obj: {}},new Date("2018-09-06T08:30:18.778Z"),"utilize Managed digital",new Date("2018-09-06T04:13:27.587Z")]});
    },

    function(coll) {
        return coll.insert({_id: 6767,num: 67603,date: new Date("2018-09-06T14:49:07.802Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 6768,str: "Handmade",num: 32205,date: new Date("2018-09-05T23:37:50.174Z"),array: ["digital",85363,16592,24736,new Date("2018-09-05T23:05:11.628Z"),{_id: 6769,str: "Web Direct",date: new Date("2018-09-06T12:45:31.541Z"),array: [],obj: {}},new Date("2018-09-06T01:16:39.407Z")]});
    },

    function(coll) {
        return coll.insert({_id: 6770,num: 33424,date: new Date("2018-09-06T19:33:29.849Z"),array: [],obj: {_id: 6771,str: "olive Table Buckinghamshire",num: 34106,date: new Date("2018-09-06T16:03:05.719Z"),array: ["relationships Down-sized",76134,new Date("2018-09-06T18:34:24.019Z"),"copying Handcrafted customized",16433,"synergies Directives","e-commerce hard drive",new Date("2018-09-06T15:18:04.330Z"),{_id: 6772,str: "deposit Kansas USB",date: new Date("2018-09-06T14:38:29.856Z"),array: [{_id: 6773,str: "calculating alarm full-range",num: 75414,array: [],obj: {}},[],[new Date("2018-09-05T20:30:17.143Z")],"Human",91420],obj: {}},"Money Market Account",new Date("2018-09-06T01:02:43.111Z")],obj: {_id: 6774,str: "Savings Account application SCSI",date: new Date("2018-09-05T22:49:22.017Z"),obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 6775,str: "Berkshire",num: 89731,date: new Date("2018-09-06T19:06:36.679Z"),array: ["Auto Loan Account",88697,new Date("2018-09-05T21:47:24.910Z"),1523,19096,"Rubber",{_id: 6776,num: 87821,date: new Date("2018-09-05T22:57:49.425Z"),array: [],obj: {_id: 6777,str: "Plastic Usability",num: 16637,date: new Date("2018-09-05T20:11:06.406Z"),array: [new Date("2018-09-06T14:59:06.148Z")]}},{_id: 6778,num: 22970,date: new Date("2018-09-06T00:19:00.535Z"),obj: {}},["Intelligent Metal Ball Director enable",new Date("2018-09-06T14:29:44.402Z")],{_id: 6779,str: "Unbranded Metal Chicken",array: []},new Date("2018-09-05T22:21:24.139Z"),15506,[]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 6780,str: "Lodge",num: 67015,date: new Date("2018-09-05T22:03:39.000Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 6781,str: "secured line",num: 50925,date: new Date("2018-09-06T02:52:38.235Z"),array: [new Date("2018-09-05T22:38:15.074Z"),"payment heuristic Nepal",64006,18895,new Date("2018-09-06T10:28:41.404Z"),"matrix IB",[],{_id: 6782,str: "Response",num: 18907,array: [],obj: {_id: 6783,str: "Automotive concept Home Loan Account",num: 76729,array: [new Date("2018-09-05T20:18:40.833Z")],obj: {}}},[],"architect Shoes Marshall Islands",84179,"Handcrafted Rubber Salad SDD",{_id: 6784,str: "back-end",num: 59295,date: new Date("2018-09-06T00:33:42.406Z"),array: ["withdrawal European Unit of Account 17(E.U.A.-17) Fantastic Plastic Salad"]}],obj: {_id: 6785,num: 61067,date: new Date("2018-09-06T07:45:20.167Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 6786,str: "Kwacha orchid Factors",num: 45606,date: new Date("2018-09-06T09:04:29.864Z"),obj: {_id: 6787,str: "Liaison",num: 38149,date: new Date("2018-09-06T07:31:59.948Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 6788,num: 44908,date: new Date("2018-09-06T08:03:05.396Z"),array: [],obj: {_id: 6789,str: "Table Applications compressing",num: 42422,date: new Date("2018-09-06T17:03:06.502Z"),array: ["value-added morph",70159,"instruction set",[],[],{_id: 6790,str: "flexibility salmon Vanuatu",date: new Date("2018-09-06T00:33:43.893Z"),array: []},new Date("2018-09-06T12:57:25.381Z"),new Date("2018-09-06T14:58:13.757Z"),78133,73062,35318,new Date("2018-09-06T05:29:55.781Z")],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 6791,str: "overriding Sports Intelligent",num: 34113,date: new Date("2018-09-05T20:32:29.466Z"),array: ["Research Visionary capacity",new Date("2018-09-06T06:05:35.219Z"),"Response",94740,new Date("2018-09-06T02:24:23.966Z"),new Date("2018-09-06T03:49:15.207Z"),28711,57715,"Personal Loan Account Michigan Salad",[{_id: 6792,str: "Ouguiya system Computers",num: 96831,date: new Date("2018-09-06T09:02:21.559Z"),array: [],obj: {_id: 6793,str: "Avon fuchsia ADP",num: 70159,array: [],obj: {_id: 6794,num: 28192,date: new Date("2018-09-06T14:15:27.306Z"),obj: {}}}},new Date("2018-09-06T13:08:13.883Z")],7783,"intuitive Devolved",{_id: 6795,date: new Date("2018-09-05T21:55:18.987Z"),array: [],obj: {}}]});
    },

    function(coll) {
        return coll.insert({_id: 6796,str: "Wooden",num: 34126,date: new Date("2018-09-06T11:38:37.357Z"),array: [new Date("2018-09-06T13:11:41.083Z"),"Fantastic Officer SSL",8156,"Tasty mindshare Pennsylvania",41039,new Date("2018-09-05T23:06:54.997Z"),new Date("2018-09-06T06:36:12.643Z"),[],"magenta wireless Triple-buffered",[new Date("2018-09-05T20:28:30.732Z"),{_id: 6797,str: "Wisconsin Strategist",num: 6496,date: new Date("2018-09-06T08:56:40.268Z"),array: [{_id: 6798,num: 49641,date: new Date("2018-09-06T03:28:49.805Z"),array: [],obj: {_id: 6799,str: "productize card 24/365",num: 4514,date: new Date("2018-09-06T06:16:17.241Z"),array: [],obj: {}}}],obj: {_id: 6800,str: "transition bandwidth"}}],{_id: 6801,date: new Date("2018-09-06T06:14:31.457Z"),array: []},"toolset",{_id: 6802,date: new Date("2018-09-06T09:44:43.122Z"),array: [new Date("2018-09-06T10:25:45.610Z"),78233,new Date("2018-09-06T15:12:39.028Z"),[]],obj: {}}],obj: {_id: 6803,str: "Fully-configurable extensible",num: 92957,date: new Date("2018-09-06T11:22:39.016Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 6804,str: "Maldives Louisiana",num: 52855,date: new Date("2018-09-06T19:41:50.333Z"),array: [],obj: {_id: 6805,str: "driver solid state EXE",date: new Date("2018-09-06T11:41:46.336Z"),array: [4441,new Date("2018-09-06T09:30:22.385Z"),new Date("2018-09-05T20:54:03.337Z"),{_id: 6806,str: "bypassing Louisiana",num: 28802,date: new Date("2018-09-06T04:06:00.755Z"),obj: {}},{_id: 6807,str: "Savings Account New Mexico Automotive",num: 45649,date: new Date("2018-09-06T18:02:18.195Z"),array: [],obj: {}},"initiatives Security Garden",98678,[]],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 6808,str: "Investment Account backing up",num: 88247,date: new Date("2018-09-06T11:59:56.144Z"),array: [29246,"British Indian Ocean Territory (Chagos Archipelago) compressing",56900,new Date("2018-09-06T02:52:32.568Z"),"Refined Frozen Computer optical","Small maroon",new Date("2018-09-06T16:04:32.603Z"),[],{_id: 6809,str: "Gorgeous",num: 80828,date: new Date("2018-09-05T23:48:09.298Z"),array: [],obj: {}},"COM reciprocal Cheese","program Cheese Orchestrator",{_id: 6810,str: "Practical Wooden Hat array",num: 22192,date: new Date("2018-09-06T12:40:43.290Z"),obj: {}},new Date("2018-09-06T14:43:48.108Z")],obj: {_id: 6811,num: 84587,array: [49220],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 6812,str: "United States Minor Outlying Islands",num: 33108,date: new Date("2018-09-05T23:03:36.673Z"),array: [],obj: {_id: 6813,str: "Borders Games Refined Soft Hat",num: 46270,array: ["Garden","Frozen Configuration",44381,42126,{_id: 6814,str: "Tennessee",num: 87627,array: [],obj: {}},{_id: 6815,str: "orange Investment Account",num: 22851,date: new Date("2018-09-06T17:38:53.427Z"),array: [new Date("2018-09-06T12:42:58.528Z")],obj: {_id: 6816,str: "Generic Gorgeous Rubber Ball interactive",obj: {}}},new Date("2018-09-06T05:09:35.137Z"),[],"GB mission-critical groupware",63753,78700]}});
    },

    function(coll) {
        return coll.insert({_id: 6817,str: "red Refined Small Granite Shoes",num: 98650,date: new Date("2018-09-06T18:17:00.540Z"),array: [],obj: {_id: 6818,num: 66735,date: new Date("2018-09-06T19:24:05.472Z"),array: [],obj: {_id: 6819,str: "Interactions clicks-and-mortar Steel",num: 10128,date: new Date("2018-09-06T11:11:16.965Z"),array: []}}});
    },

    function(coll) {
        return coll.insert({_id: 6820,str: "COM",num: 50789,date: new Date("2018-09-06T16:35:20.961Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 6821,str: "New Mexico Health",num: 90647,date: new Date("2018-09-06T07:40:34.801Z"),array: [new Date("2018-09-06T09:19:49.974Z"),"back-end","drive Oklahoma Georgia",new Date("2018-09-05T21:45:46.758Z"),"Silver Identity",new Date("2018-09-06T17:42:19.515Z"),15386,{_id: 6822,str: "conglomeration overriding Jewelery",num: 7739,date: new Date("2018-09-06T18:05:44.567Z"),array: [],obj: {}},1940,[],70301],obj: {_id: 6823,num: 84222,array: [6658,[new Date("2018-09-06T09:24:11.172Z"),58999]],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 6824,str: "Toys",num: 13618,date: new Date("2018-09-06T14:58:32.119Z"),array: [],obj: {_id: 6825,str: "Cambridgeshire",num: 27276,date: new Date("2018-09-05T23:19:44.273Z"),array: [],obj: {_id: 6826,str: "initiatives microchip",num: 81430,date: new Date("2018-09-06T09:52:14.469Z"),array: [],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 6827,str: "Kuwaiti Dinar circuit",num: 76817,date: new Date("2018-09-06T13:22:12.497Z"),array: [new Date("2018-09-06T17:41:26.536Z"),"generating",16186,"Views primary",new Date("2018-09-06T17:05:11.596Z"),"hack Right-sized cultivate",80187,{_id: 6828,str: "generating",num: 66022,date: new Date("2018-09-05T20:52:12.932Z"),array: [],obj: {}},new Date("2018-09-06T05:46:39.503Z"),49535,{_id: 6829,str: "withdrawal Liberia",num: 92437,date: new Date("2018-09-06T12:23:04.166Z"),array: [],obj: {_id: 6830,str: "Personal Loan Account transition Coordinator",array: [],obj: {}}},67481]});
    },

    function(coll) {
        return coll.insert({_id: 6831,num: 57168,date: new Date("2018-09-05T20:51:40.652Z"),array: [],obj: {_id: 6832,str: "Ville",num: 93207,date: new Date("2018-09-06T13:37:56.364Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 6833,str: "THX withdrawal",num: 35855,date: new Date("2018-09-06T00:31:09.684Z"),array: [68404,{_id: 6834,str: "deliverables Kwanza",num: 50467,date: new Date("2018-09-06T13:23:34.781Z"),array: [39410,[],new Date("2018-09-06T04:09:51.364Z"),"white Saint Helena Pound Handmade Soft Ball"],obj: {_id: 6835,str: "Savings Account Concrete Identity",num: 62628,obj: {}}},new Date("2018-09-06T16:57:07.860Z"),{_id: 6836,str: "Secured Berkshire mobile",date: new Date("2018-09-06T05:26:37.653Z"),array: [],obj: {}},48100,new Date("2018-09-06T07:24:12.107Z"),[],["Spain","dot-com Afghani",69712,{_id: 6837,num: 59960,date: new Date("2018-09-06T07:14:46.905Z")}]],obj: {_id: 6838,date: new Date("2018-09-06T07:04:47.236Z"),array: [29130,new Date("2018-09-06T07:13:51.622Z")]}});
    },

    function(coll) {
        return coll.insert({_id: 6839,str: "online",num: 80198,date: new Date("2018-09-06T19:10:27.520Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 6840,str: "deliverables ADP",date: new Date("2018-09-06T05:48:10.184Z"),array: [],obj: {_id: 6841,str: "Fresh",num: 60293,date: new Date("2018-09-05T23:29:10.902Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 6842,str: "end-to-end connecting",num: 8099,date: new Date("2018-09-06T05:50:43.941Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 6843,str: "parsing portal Sri Lanka Rupee",num: 1332,array: [new Date("2018-09-06T04:01:19.781Z"),"Unbranded Rubber Shirt",new Date("2018-09-06T04:19:42.041Z"),73664,62225,"Stand-alone systems Salad",[],{_id: 6844,str: "indigo Cambridgeshire",num: 77013,date: new Date("2018-09-06T07:23:01.582Z"),array: [[new Date("2018-09-06T14:39:51.586Z")]]},new Date("2018-09-06T05:09:42.077Z"),new Date("2018-09-06T12:58:11.744Z"),93970,"dot-com backing up","withdrawal panel Refined Frozen Pizza",{_id: 6845,str: "Plastic",num: 56738,date: new Date("2018-09-06T09:33:17.581Z"),obj: {_id: 6846,date: new Date("2018-09-06T14:46:25.971Z"),array: ["Rustic Tunisian Dinar",28900,{_id: 6847,str: "Clothing open-source",num: 2598,date: new Date("2018-09-05T23:07:34.855Z"),array: [],obj: {}}],obj: {_id: 6848,str: "Tasty Frozen Towels",num: 12285,date: new Date("2018-09-06T09:34:13.269Z"),array: [],obj: {_id: 6849,date: new Date("2018-09-06T07:20:05.748Z"),obj: {}}}}},{_id: 6850,num: 37625,date: new Date("2018-09-05T20:08:24.865Z")}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 6851,str: "eyeballs Intelligent",num: 66290,date: new Date("2018-09-06T06:12:12.341Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 6852,str: "Assurance deploy",num: 48447,date: new Date("2018-09-05T23:02:22.551Z"),array: [82659,"Consultant SQL",85231,"Division Awesome",new Date("2018-09-06T09:35:32.400Z"),39110,new Date("2018-09-05T20:29:58.064Z"),new Date("2018-09-06T13:10:46.281Z"),"Down-sized parse",[],{_id: 6853,num: 55363,array: [{_id: 6854,str: "RSS withdrawal Mauritius",num: 40340,date: new Date("2018-09-05T22:27:29.056Z"),array: [],obj: {_id: 6855,str: "El Salvador Colon US Dollar portals Kuwait",num: 1407,date: new Date("2018-09-05T23:07:40.642Z"),obj: {_id: 6856,date: new Date("2018-09-06T04:08:00.874Z"),array: []}}},"Designer Netherlands Antillian Guilder",39389],obj: {_id: 6857,str: "Cambridgeshire compressing",num: 44384,date: new Date("2018-09-05T20:33:59.101Z"),array: [],obj: {}}},"Bike Montana",new Date("2018-09-05T20:49:04.080Z")]});
    },

    function(coll) {
        return coll.insert({_id: 6858,str: "Music Generic Wooden Fish Solomon Islands Dollar",num: 78278,array: ["port Industrial",5194,new Date("2018-09-05T21:15:53.438Z"),{_id: 6859,str: "proactive Data",date: new Date("2018-09-06T01:01:16.857Z"),array: []},new Date("2018-09-06T06:21:39.537Z"),"Planner violet Metal",new Date("2018-09-05T20:27:40.994Z"),80337,"Oval IB",84198,{_id: 6860,str: "leading-edge Philippine Peso Soap",num: 86459,date: new Date("2018-09-06T05:52:29.684Z"),array: [[]]},["Avenue 5th generation Handcrafted Fresh Car"]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 6861,str: "Cotton Granite Implemented",num: 44531,date: new Date("2018-09-06T16:57:39.304Z"),array: ["Alabama","Tasty PCI Reduced",new Date("2018-09-06T06:57:38.165Z"),"Berkshire Niue",85661,"AGP maximize",[{_id: 6862,str: "out-of-the-box",num: 1762,date: new Date("2018-09-06T06:26:09.863Z"),array: [],obj: {}},{_id: 6863,str: "Tennessee Frozen",num: 30520,date: new Date("2018-09-06T16:22:27.761Z"),array: [80278,new Date("2018-09-06T13:28:39.946Z")]},56018],81008,[],48522,[]],obj: {_id: 6864,str: "wireless Metal structure",num: 87630,date: new Date("2018-09-06T15:06:24.471Z"),array: [],obj: {_id: 6865,date: new Date("2018-09-06T07:25:58.065Z")}}});
    },

    function(coll) {
        return coll.insert({_id: 6866,str: "Graphic Interface",num: 65751,date: new Date("2018-09-06T18:09:47.551Z"),array: []});
    },

];

const indexList = [

    function(coll) {
        return coll.createIndex({"obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": -1, "obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": 1, "str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"num": 1});
    },

    function(coll) {
        return coll.createIndex({"str": -1, "obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": 1, "str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": 1, "obj.obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": 1, "str": -1});
    },

    function(coll) {
        return coll.createIndex({"num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": 1, "date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": -1, "date": 1});
    },

    function(coll) {
        return coll.createIndex({"date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": -1, "obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": 1, "obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": 1, "str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": 1, "obj.obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"date": -1, "obj.obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": 1, "obj.obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": 1, "obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"date": 1, "obj.obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": -1, "obj.obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": -1, "obj.obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": 1, "obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": 1, "str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": -1, "date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": -1, "obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": -1, "obj.obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": -1, "obj.obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": -1, "obj.obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": 1, "obj.obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"num": -1, "obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": 1, "obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"num": -1, "obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": 1, "obj.obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": 1, "obj.obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": -1, "str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": 1, "obj.obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"date": 1, "obj.obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"str": 1, "obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": 1, "obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": -1, "obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": 1, "obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": 1, "str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": -1, "obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"date": 1, "obj.obj.obj.date": -1});
    },

];

const aggregationList = [

        [{$project: {a: { $zip: {inputs: [[],[],['$obj.obj.str'],[{ $substrBytes: ["hard drive capacitor",4,5] },"dedicated"],[]],useLongestLength: false,defaults: [[/^6th generation|withdrawal|Books/,new Date("2018-09-06T03:28:42.440Z")],{str: "Illinois",array: [["primary"],"turquoise Producer Intelligent Rubber Salad"],date: new Date("2018-09-05T20:23:04.358Z")},54704]} }, _id: 0}}],

        [{$project: {a: { $concatArrays: [['$obj.obj.num',82275,45777]] }, _id: 0}}],

        [{$project: {a: { $concat: ['$obj.obj.str'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "web-enabled",v: new Date("2018-09-06T16:40:48.011Z")},{k: "web-readiness",v: 3393},{k: "exploit",v: "platforms Virginia infrastructures"}]] }, _id: 0}}],

        [{$project: {a: { $dayOfWeek: { $isoDayOfWeek: { $dateFromParts: {isoWeekYear: { $sqrt: 26017 },isoDayOfWeek: { $trunc: 13134 },hour: { $divide: ['$obj.obj.obj.num',38383] },millisecond: { $pow: [39699,'$obj.num'] },timezone: "Atlantic/St_Helena"} } } }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj' }, _id: 0}}],

        [{$project: {a: { $dayOfMonth: { $dateFromString: {dateString: "2018-09-06T09:34:07.835Z",format: "%H-%M-%Y-%Y-%w-%H-%U",timezone: "Pacific/Kwajalein",onNull: { $toDate: { $substrCP: ['$obj.obj.obj.str',7,10] } }} } }, _id: 0}}],

        [{$project: {a: { $substrCP: [{ $substrBytes: ["Savings Account local wireless",20,1] },5,16] }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [['$obj.str'],[],[],["Personal Loan Account invoice",{ $toString: { $arrayToObject: [[{k: "copy Bedfordshire",v: 39042},{k: "clicks-and-mortar",v: { $rtrim: { input: '$obj.obj.str' } }}]] } },'$obj.obj.obj.str'],[]],useLongestLength: true} }, _id: 0}}],

        [{$project: {a: { $map: {input: [{ $toLower: { $dateToString: {date: { $isoDayOfWeek: { $month: { $dayOfWeek: { $dateFromParts: {isoWeekYear: { $multiply: [] },isoWeek: { $cmp: ['$date',{ $toUpper: '$obj.obj.obj.str' }] },isoDayOfWeek: { $sqrt: '$obj.num' }} } } } },timezone: "Asia/Jakarta",onNull: { $ltrim: {input: "Cotton IB bypassing",chars: '$obj.obj.obj.str'} }} } },"Ball feed"],as: 'nicolette',in: { $divide: ['$$nicolette',45726] }} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[["Consultant"],['$num'],[],['$str',{ $concat: [{ $toLower: "green optical AGP" },'$obj.obj.obj.str','$obj.obj.obj.str'] }]]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["Salad mindshare"],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[["index calculate"],['$obj.str',{ $dateToString: {date: { $year: { $dateToParts: {date: { $second: { $dayOfWeek: { $month: { $dateToParts: { date: { $dateFromParts: {year: { $log10: '$num' },month: { $subtract: ['$obj.obj.obj.num',{ $mod: ['$obj.obj.obj.num','$obj.obj.num'] }] },hour: 9369,second: { $ln: { $log10: 32098 } },timezone: "Africa/Mogadishu"} } } } } } },iso8601: true} } },format: "%%-%Y-%m-%Z",onNull: '$obj.obj.obj.str'} }],[],[{ $dateToString: {date: '$obj.obj.obj.date',timezone: "Indian/Mayotte"} }]]] }, _id: 0}}],

        [{$project: {a: { $minute: { $dateFromString: {dateString: "2018-09-06T17:26:20.118Z",timezone: "Etc/GMT+7"} } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.obj.str'],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "National",v: '$obj.num'},{k: "Towels protocol",v: false}]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$str'],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $concatArrays: [] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.obj.str'],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [[9284,'$obj.num'],['$obj.obj.str']],defaults: [71111,true]} }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: '$obj.obj.date',onNull: { $range: [1,12,14] }} }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: new Date("2018-09-06T08:36:23.438Z"),onNull: "deposit"} }, _id: 0}}],

        [{$project: {a: { $toLower: "Arizona" }, _id: 0}}],

        [{$project: {a: { $year: { $dateFromParts: {year: { $ceil: '$obj.obj.num' },second: 61146,timezone: "Pacific/Port_Moresby"} } }, _id: 0}}],

        [{$project: {a: { $reverseArray: [[{ $toString: { $arrayElemAt: [[],56993] } }]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Facilitator",v: true}]] }, _id: 0}}],

        [{$project: {a: { $substrCP: ["Music Borders",20,0] }, _id: 0}}],

        [{$project: {a: { $range: [20,7,14] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["markets",'$str'],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.num'],28579] }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: '$date',timezone: "America/Kralendijk"} }, _id: 0}}],

        [{$project: {a: { $range: [14,6] }, _id: 0}}],

        [{$project: {a: { $ltrim: { input: "orchid" } }, _id: 0}}],

        [{$project: {a: { $filter: {input: ["invoice",{ $trim: {input: '$obj.str',chars: "Small Outdoors"} },'$str'],cond: { $and: ["Metal Technician",{ $concat: [] }] }} }, _id: 0}}],

        [{$project: {a: { $substrBytes: [{ $ltrim: { input: '$obj.obj.str' } },1,6] }, _id: 0}}],

        [{$project: {a: { $concatArrays: [[{ $ltrim: { input: "deposit" } }],[],[],["generating redundant",'$str','$str']] }, _id: 0}}],

        [{$project: {a: { $range: [5,10,11] }, _id: 0}}],

        [{$project: {a: { $dateFromParts: {isoWeekYear: { $trunc: '$obj.obj.num' },isoWeek: { $sqrt: '$obj.num' },minute: { $cmp: [{ $arrayToObject: [[{k: "programming Dynamic Nebraska",v: true}]] },{ $concatArrays: [[{ $concat: [{ $trim: {input: '$obj.str',chars: { $substrCP: ["Summit Yuan Renminbi",9,16] }} }] },"overriding Unbranded"]] }] },millisecond: { $sqrt: 99951 },timezone: "Asia/Kuala_Lumpur"} }, _id: 0}}],

        [{$project: {a: { $substrCP: [{ $substr: ["Frozen",2,10] },9,16] }, _id: 0}}],

        [{$project: {a: { $reverseArray: [[]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[64276],[],[],[],['$obj.obj.obj.str'],[28515,'$obj.obj.num','$num']]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],[]]] }, _id: 0}}],

        [{$project: {a: { $reverseArray: [[]] }, _id: 0}}],

        [{$project: {a: { $rtrim: {input: "superstructure withdrawal",chars: "Kansas payment Specialist"} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.num'],54188] }, _id: 0}}],

        [{$project: {a: { $substrCP: ["Steel initiatives markets",8,7] }, _id: 0}}],

        [{$project: {a: { $concatArrays: [[17567,'$num']] }, _id: 0}}],

        [{$project: {a: { $second: { $month: { $isoDayOfWeek: { $isoWeek: { $dayOfMonth: { $toDate: { $concatArrays: [[],["experiences firewall"],['$obj.str'],[]] } } } } } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[31590,'$obj.obj.obj.num'],'$num'] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[11478,'$num'],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $isoDayOfWeek: { $isoWeek: new Date("2018-09-06T06:55:33.457Z") } }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [['$str'],[],[],[86234]],defaults: []} }, _id: 0}}],

        [{$project: {a: DATE;, _id: 0}}],

        [{$project: {a: { $reverseArray: [[]] }, _id: 0}}],

        [{$project: {a: { $map: {input: [],in: { $trunc: 95275 }} }, _id: 0}}],

        [{$project: {a: { $map: {input: [{ $toLower: '$obj.obj.str' },"Benin Sleek Granite Ball"],in: { $size: [[]] }} }, _id: 0}}],

        [{$project: {a: { $filter: {input: ['$obj.str'],cond: true} }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: '$date',onNull: { $arrayElemAt: [['$obj.obj.obj.str',{ $toLower: { $concat: ['$obj.obj.str'] } }],'$obj.obj.obj.num'] }} }, _id: 0}}],

        [{$project: {a: { $minute: { $year: { $dateFromParts: {isoWeekYear: { $cmp: [{ $dayOfMonth: { $minute: { $isoWeek: new Date("2018-09-06T10:35:30.609Z") } } },{ $concat: ["time-frame",{ $toString: { $concatArrays: [[{ $toUpper: { $rtrim: {input: "parallelism",chars: '$obj.obj.obj.str'} } },"scale website",'$obj.str'],[76043,'$obj.obj.num'],[]] } }] }] },hour: { $log: ['$obj.obj.obj.num','$num'] },second: { $ceil: 64613 }} } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.obj.num','$obj.obj.num'],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $concat: [{ $rtrim: {input: "Montenegro",chars: '$obj.str'} }] }, _id: 0}}],

        [{$project: {a: { $reverseArray: [["Cotton Shoes Delaware","Armenia repurpose"]] }, _id: 0}}],

        [{$project: {a: { $hour: { $isoWeek: { $year: { $dateFromParts: {year: { $multiply: [] },timezone: "Australia/Perth"} } } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $trunc: '$obj.num' },23891],{ $log: [41872,'$obj.obj.num'] }] }, _id: 0}}],

        [{$project: {a: { $dayOfMonth: { $year: { $millesecond: { $dateFromString: {dateString: "2018-09-06T00:21:54.438Z",format: "%m-%G-%H-%V"} } } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.obj.num'],70209] }, _id: 0}}],

        [{$project: {a: { $range: [1,18] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$num'] }, _id: 0}}],

        [{$project: {a: { $concatArrays: [] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],40952] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[{ $concat: [{ $trim: {input: "Chair",chars: '$str'} }] }],[],[],[],['$obj.num',38278],['$obj.obj.str',{ $substr: ["Computers",5,6] },{ $rtrim: { input: '$obj.obj.str' } },"West Virginia"],['$obj.obj.obj.num',29462,86683]]] }, _id: 0}}],

        [{$project: {a: { $dayOfMonth: { $isoWeekYear: { $dayOfYear: { $dayOfYear: { $dayOfWeek: { $second: { $toDate: { $dayOfMonth: { $year: { $second: { $month: { $year: { $dateFromParts: {isoWeekYear: { $ceil: 93523 },isoDayOfWeek: { $cmp: [{ $arrayElemAt: [['$obj.obj.str'],65785] },{ $reverseArray: [[]] }] },hour: { $indexOfArray: [{ $objectToArray: '$obj' },{ $map: {input: [],in: { $subtract: [45967,99729] }} },6] },minute: { $size: [[]] },second: { $multiply: [] }} } } } } } } } } } } } } }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: new Date("2018-09-06T19:14:08.597Z"),timezone: "GMT"} }, _id: 0}}],

        [{$project: {a: { $month: { $dateFromParts: {isoWeekYear: { $log10: '$num' },isoDayOfWeek: { $indexOfArray: [{ $concatArrays: [['$num',46661,'$obj.obj.obj.num'],[{ $concat: [] }],[],[35573],['$obj.obj.str',{ $toUpper: "Soft innovate infrastructure" }]] },{ $map: {input: [],as: 'tobin',in: { $size: [[{ $trim: { input: { $substrCP: ["blue transmit",12,8] } } },"Chips grid-enabled"]] }} },15,9] },hour: { $add: [] },minute: { $cmp: [{ $substrBytes: ['$obj.obj.str',12,1] },{ $substrCP: ['$obj.str',6,16] }] },millisecond: { $divide: [{ $sqrt: '$obj.obj.obj.num' },24915] },timezone: "Pacific/Bougainville"} } }, _id: 0}}],

        [{$project: {a: { $trim: {input: { $toString: { $toDate: { $zip: {inputs: [['$obj.str'],[],['$obj.obj.obj.num'],[87770],[{ $substr: ["Hryvnia Checking Account invoice",0,17] }]],useLongestLength: false} } } },chars: { $toUpper: { $rtrim: {input: "Avon",chars: "Forward"} } }} }, _id: 0}}],

        [{$project: {a: { $dateFromParts: {isoWeekYear: { $abs: 70601 },isoWeek: { $ln: '$obj.obj.obj.num' },minute: { $log10: 47059 },second: { $add: [] },timezone: "Pacific/Chuuk"} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[["Assurance Station",'$obj.obj.str'],[],[55298],[],['$obj.obj.obj.str',"Automotive"]]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.num'],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $map: {input: [75020],in: { $floor: '$$this' }} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $concat: [{ $concat: [] },"Dynamic"] }],83924] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "demand-driven",v: "District calculate Guyana Dollar"}]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Granite",v: false}]] }, _id: 0}}],

        [{$project: {a: { $toUpper: { $substr: ["Locks",17,9] } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "compress",v: '$obj.obj.obj.str'},{k: "Technician Analyst benchmark",v: { $dateToString: {date: '$obj.obj.date',format: "%m-%d-%m-%d-%m",timezone: "Pacific/Bougainville",onNull: { $second: { $dayOfMonth: { $year: { $month: { $isoWeek: '$obj.date' } } } } }} }},{k: "e-enable Camp synthesizing",v: '$obj.obj.num'},{k: "technologies",v: false}]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$num','$obj.obj.obj.num',67344],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["navigating Buckinghamshire Trinidad and Tobago Dollar",{ $substrBytes: ['$obj.str',7,7] },{ $toString: { $reverseArray: [['$obj.num','$obj.obj.obj.num']] } }],29583] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "reintermediate",v: { $dateToString: {date: { $toDate: { $isoDayOfWeek: { $year: { $month: { $isoWeek: { $isoWeek: { $dayOfWeek: { $isoWeek: { $dateFromParts: {year: { $multiply: ['$obj.obj.num'] },month: 51415,hour: '$num',second: { $trunc: 83552 }} } } } } } } } } },onNull: { $ltrim: { input: { $concat: ['$str'] } } }} }},{k: "overriding Avon Garden",v: "withdrawal Money Market Account"}]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.str','$str',{ $dateToString: {date: new Date("2018-09-06T06:46:20.920Z"),timezone: "Asia/Atyrau",onNull: "Borders Money Market Account"} }],'$num'] }, _id: 0}}],

        [{$project: {a: { $year: { $year: { $week: { $isoWeek: { $dateFromParts: {year: { $divide: ['$obj.obj.num',29129] },month: { $exp: 89412 },day: { $subtract: ['$num',62163] },minute: { $sqrt: 84696 }} } } } } }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj' }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $toLower: "recontextualize deposit SDD" },{ $rtrim: {input: { $substrCP: ['$obj.str',14,17] },chars: '$str'} }],63482] }, _id: 0}}],

        [{$project: {a: DATE;, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "magnetic",v: '$obj.obj.str'}]] }, _id: 0}}],

        [{$project: {a: { $week: { $dateFromParts: {year: 24034,timezone: "Pacific/Truk"} } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[{ $concat: ["Unbranded Supervisor"] }],[{ $trim: { input: "program" } },{ $toLower: { $dateToString: { date: { $dateFromParts: {isoWeekYear: { $ln: 84090 },hour: { $size: [[]] },second: { $divide: ['$obj.obj.num','$obj.obj.obj.num'] }} } } } },'$obj.str','$obj.str',"product"],[]]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],8528] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "deposit",v: new Date("2018-09-06T00:02:34.156Z")},{k: "Cotton SCSI",v: false},{k: "SSL",v: 33206}]] }, _id: 0}}],

        [{$project: {a: { $dateFromString: { dateString: "2018-09-06T02:37:46.504Z" } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["Money Market Account Avon plum",'$str'],{ $ceil: 52849 }] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],6650] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["Mississippi",'$obj.str'],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $substr: ['$str',11,3] }],'$num'] }, _id: 0}}],

        [{$project: {a: { $toLower: "Parkways" }, _id: 0}}],

        [{$project: {a: { $concatArrays: [["bypass Versatile Oregon"],[{ $ltrim: { input: '$obj.obj.obj.str' } },"Developer vortals incremental"]] }, _id: 0}}],

        [{$project: {a: { $toUpper: "user-centric" }, _id: 0}}],

        [{$project: {a: { $toUpper: { $dateToString: {date: '$obj.date',timezone: "US/Aleutian",onNull: { $dateFromParts: {isoWeekYear: { $add: [13338] },isoDayOfWeek: { $exp: 94224 },second: { $log10: '$obj.obj.obj.num' }} }} } }, _id: 0}}],

        [{$project: {a: { $reverseArray: [["scale disintermediate Village"]] }, _id: 0}}],

        [{$project: {a: { $second: { $dayOfMonth: { $toDate: { $map: {input: [],in: { $mod: [87009,10386] }} } } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.str'],79940] }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj.obj.obj' }, _id: 0}}],

        [{$project: {a: { $map: {input: [{ $dateToString: {date: new Date("2018-09-06T14:09:45.752Z"),onNull: "neural violet Arizona"} }],as: 'pamela',in: { $subtract: ['$$pamela',88364] }} }, _id: 0}}],

        [{$project: {a: DATE;, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$obj.obj.str',{ $trim: { input: "Coordinator navigate deposit" } }],[56052,'$obj.obj.num','$obj.obj.num'],[],[{ $toLower: "Money Market Account" }],[]]] }, _id: 0}}],

        [{$project: {a: { $trim: { input: { $rtrim: {input: '$obj.str',chars: '$str'} } } }, _id: 0}}],

        [{$project: {a: { $toDate: { $arrayToObject: [[['$obj.str','$obj.obj.obj.str'],[58411],[22662,'$obj.num','$num'],[]]] } }, _id: 0}}],

        [{$project: {a: { $dayOfWeek: { $dayOfYear: { $week: { $dateFromParts: {year: { $trunc: 83214 },month: { $cmp: [{ $concatArrays: [] },{ $arrayElemAt: [[62438,'$obj.obj.num'],'$obj.obj.num'] }] },day: { $divide: ['$obj.obj.obj.num',42494] },minute: { $indexOfArray: [{ $zip: {inputs: [[],["Solutions Streamlined",{ $rtrim: { input: '$obj.str' } }],[],[{ $toLower: "Licensed payment" }],[{ $size: [["connecting",'$obj.obj.str',{ $toString: { $arrayToObject: [[{k: "Garden applications Integration",v: true}]] } },'$obj.str']] }],[],[]],useLongestLength: false,defaults: [new Date("2018-09-06T13:18:01.975Z"),"Armenia impactful"]} },{ $arrayElemAt: [[],{ $floor: 69157 }] },11] },second: { $log10: 99058 }} } } } }, _id: 0}}],

        [{$project: {a: { $minute: { $year: { $hour: { $dayOfYear: { $dateFromString: {dateString: "2018-09-06T18:22:19.903Z",onError: { $arrayElemAt: [[{ $concat: [] },"Hat client-server Small Cotton Table",'$obj.obj.obj.str'],{ $cmp: [{ $concatArrays: [['$str'],[],["Virgin Islands, U.S."],['$num']] },{ $arrayToObject: [[{k: "Nebraska",v: { $dateToString: {date: '$obj.obj.date',timezone: "America/St_Thomas"} }},{k: "Maine clear-thinking",v: "deposit 24/365 calculating"}]] }] }] },onNull: { $arrayToObject: [[{k: "Director Balanced FTP",v: 56728},{k: "Security Avon",v: true},{k: "Plastic RSS Wooden",v: { $substrCP: ['$obj.str',6,11] }}]] }} } } } } }, _id: 0}}],

        [{$project: {a: { $dateToParts: {date: { $dateFromString: {dateString: "2018-09-06T11:21:05.855Z",timezone: "America/Yakutat",onError: { $filter: {input: ['$obj.obj.obj.num','$obj.obj.num'],as: 'chaya',cond: { $ne: [{ $trim: { input: '$str' } },{ $minute: { $isoWeek: { $dayOfWeek: { $dayOfYear: { $second: { $isoDayOfWeek: { $dayOfMonth: { $hour: { $isoWeekYear: { $dateToString: {date: '$obj.date',format: "%G-%L-%V-%Y-%j-%m-%m-%G-%H-%M-%Y",onNull: "Tunisia Awesome bi-directional"} } } } } } } } } } }] }} }} },timezone: "Etc/Zulu",iso8601: false} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[["Health",'$obj.str'],[],[],[],['$obj.num']]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["connecting Auto Loan Account EXE",{ $dateToString: { date: { $month: { $year: { $toDate: { $objectToArray: '$obj.obj' } } } } } }],36336] }, _id: 0}}],

        [{$project: {a: DATE;, _id: 0}}],

        [{$project: {a: { $year: { $isoDayOfWeek: { $month: { $dayOfYear: { $isoDayOfWeek: { $hour: { $dayOfMonth: { $minute: { $dayOfWeek: { $dateToParts: {date: { $dateToString: {date: { $millesecond: { $year: { $isoWeekYear: { $dayOfWeek: { $dayOfYear: new Date("2018-09-05T22:00:44.946Z") } } } } },format: "%V-%U-%M-%w-%L",timezone: "Asia/Irkutsk",onNull: { $map: {input: ["open-source Singapore Dollar",'$obj.obj.str'],in: { $abs: '$$this' }} }} },timezone: "Universal"} } } } } } } } } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $toUpper: "teal" },'$obj.str'],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $concatArrays: [[],[],[{ $rtrim: {input: { $toLower: '$obj.obj.str' },chars: "complexity approach"} }],['$str',"PNG Manager Kids","Islands visualize Licensed Cotton Pizza","Money Market Account Optimized"],[64158],[]] }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: '$obj.obj.obj.date',format: "%Y-%M-%M-%u-%z-%Y-%G-%m-%m",timezone: "US/Arizona",onNull: { $arrayElemAt: [[{ $trim: { input: '$str' } }],'$obj.obj.num'] }} }, _id: 0}}],

        [{$project: {a: { $map: {input: [{ $substrBytes: ["Small Metal Fish Accounts",10,13] },{ $toLower: '$obj.obj.str' }],in: '$$this'} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],1271] }, _id: 0}}],

        [{$project: {a: { $isoDayOfWeek: { $second: { $isoDayOfWeek: { $dayOfMonth: { $minute: { $dayOfWeek: { $second: { $dayOfYear: { $isoWeekYear: { $hour: { $dateToString: {date: '$date',format: "%Z-%z-%U-%G-%Y-%U-%U-%m-%H",timezone: "America/Fortaleza"} } } } } } } } } } } }, _id: 0}}],

        [{$project: {a: { $dayOfMonth: new Date("2018-09-06T06:07:51.719Z") }, _id: 0}}],

        [{$project: {a: { $concatArrays: [[55825],[{ $rtrim: {input: '$obj.str',chars: "Product"} },"ROI architecture"],[]] }, _id: 0}}],

        [{$project: {a: { $toString: { $arrayElemAt: [[{ $substr: [{ $substr: ['$str',16,9] },3,14] },{ $toUpper: '$obj.obj.str' }],31368] } }, _id: 0}}],

        [{$project: {a: { $minute: { $isoWeekYear: { $isoWeek: { $millesecond: { $dateToParts: {date: { $dayOfMonth: { $week: { $dateToParts: {date: { $month: { $dateFromString: {dateString: "2018-09-06T11:14:48.575Z",timezone: "Brazil/East"} } },iso8601: false} } } },timezone: "America/Dominica"} } } } } }, _id: 0}}],

        [{$project: {a: { $filter: {input: [],as: 'scottie',cond: { $in: [{ $arrayToObject: [[[25032],[{ $trim: { input: "maroon Hat structure" } }],["Bedfordshire Practical Wooden Salad De-engineered"]]] },{ $filter: {input: [{ $ltrim: { input: "haptic" } }],as: 'irma',cond: { $not: [{ $arrayElemAt: [['$$scottie','$$irma'],13711] }] }} }] }} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[94500],56815] }, _id: 0}}],

        [{$project: {a: { $reverseArray: [['$obj.obj.str','$obj.obj.str']] }, _id: 0}}],

        [{$project: {a: { $concat: ['$str',"Practical Granite Pants Designer",'$str','$obj.str'] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],68106] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],{ $sqrt: 78165 }] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],11750] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $toUpper: '$obj.str' },'$obj.obj.obj.str',"recontextualize"],92140] }, _id: 0}}],

        [{$project: {a: { $isoDayOfWeek: { $isoWeek: { $minute: { $hour: { $dateFromParts: {isoWeekYear: { $log10: '$obj.obj.obj.num' },isoWeek: '$obj.obj.obj.num',isoDayOfWeek: { $ln: '$num' },second: { $floor: 12582 },timezone: "Atlantic/St_Helena"} } } } } }, _id: 0}}],

        [{$project: {a: { $hour: { $dateToString: {date: new Date("2018-09-06T07:13:46.790Z"),format: "%L-%z-%S-%Z-%U-%M-%S-%d",onNull: { $trim: {input: "interfaces invoice",chars: "overriding transmitting Somali Shilling"} }} } }, _id: 0}}],

        [{$project: {a: { $dateFromString: {dateString: "2018-09-05T21:25:52.233Z",timezone: "America/Glace_Bay",onError: '$obj.date'} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "pixel",v: '$obj.obj.date'},{k: "Montserrat Games",v: '$str'}]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[]] }, _id: 0}}],

        [{$project: {a: { $month: new Date("2018-09-06T18:42:36.591Z") }, _id: 0}}],

        [{$project: {a: { $dayOfWeek: { $isoWeekYear: { $dayOfYear: { $isoWeek: { $dateToParts: {date: { $millesecond: { $isoDayOfWeek: { $dateToParts: {date: { $dayOfWeek: { $dateFromString: {dateString: "2018-09-06T02:49:46.401Z",format: "%d-%%-%G-%d-%Y-%U-%G-%H-%V",onError: { $arrayToObject: [[{k: "Shoes withdrawal",v: '$obj.obj.obj.str'},{k: "technologies hacking",v: 77325},{k: "Granite",v: '$obj.obj.obj.date'}]] }} } },timezone: "Portugal",iso8601: true} } } },timezone: "America/Merida"} } } } } }, _id: 0}}],

        [{$project: {a: { $range: [14,12,2] }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [[],['$num',"deposit"],[],[37718,46939]],defaults: ["engineer"]} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[]] }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj.obj' }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $concatArrays: [[],['$obj.obj.obj.num',29720],[],[{ $multiply: [] },'$obj.obj.obj.num',15344],[4238],['$str']] }, _id: 0}}],

        [{$project: {a: { $concatArrays: [["Home Loan Account Colorado Integration"],[],[70652],[],['$obj.obj.obj.num','$obj.obj.obj.num'],["Highway Money Market Account Checking Account",{ $substrCP: ['$obj.obj.str',9,8] },{ $concat: ["optimal",'$obj.obj.str'] }]] }, _id: 0}}],

        [{$project: {a: { $trim: {input: "Iran Rwanda Franc",chars: { $substr: ['$str',11,8] }} }, _id: 0}}],

        [{$project: {a: { $hour: { $dateFromParts: {isoWeekYear: { $pow: ['$num',10682] },isoWeek: { $exp: 16220 },minute: { $exp: 27036 },second: { $cmp: [{ $substrBytes: ['$obj.obj.obj.str',17,7] },{ $dateFromParts: {year: { $ln: '$obj.obj.num' },hour: { $ln: 34872 },millisecond: { $ceil: 77897 },timezone: "Europe/Minsk"} }] }} } }, _id: 0}}],

        [{$project: {a: { $concat: [{ $substrCP: ['$str',12,20] },"deposit withdrawal vortals",{ $trim: { input: "Credit Card Account Officer" } }] }, _id: 0}}],

        [{$project: {a: { $toString: { $map: {input: [],in: { $add: [] }} } }, _id: 0}}],

        [{$project: {a: { $toDate: { $arrayToObject: [[['$obj.obj.obj.num','$obj.obj.obj.num'],['$str'],[{ $dateToString: {date: new Date("2018-09-06T05:07:05.329Z"),format: "%u-%j-%V-%Z-%G-%j-%Y"} },"Gateway e-business","synthesize Producer groupware"],[64837,{ $abs: 21834 }],['$obj.str']]] } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],82978] }, _id: 0}}],

        [{$project: {a: { $reverseArray: [['$obj.str']] }, _id: 0}}],

        [{$project: {a: { $filter: {input: [85730],as: 'marilie',cond: true} }, _id: 0}}],

        [{$project: {a: { $dateFromString: {dateString: "2018-09-06T07:31:21.607Z",format: "%V-%w-%%-%d-%V-%H-%S-%H",timezone: "Chile/Continental"} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Branch Triple-buffered",v: '$obj.obj.obj.num'},{k: "Garden",v: '$num'}]] }, _id: 0}}],

        [{$project: {a: { $filter: {input: [],cond: { $gt: [{ $month: { $year: { $dayOfWeek: { $dateToString: {date: '$$this',format: "%L-%d-%U-%m"} } } } },{ $dayOfWeek: { $dateFromParts: {isoWeekYear: { $ceil: 8175 },minute: { $add: ['$num'] },timezone: "America/Rosario"} } }] }} }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj.obj.obj' }, _id: 0}}],

        [{$project: {a: { $toString: { $dateToString: {date: { $dayOfWeek: { $dayOfWeek: { $week: { $hour: { $isoWeek: { $year: { $dayOfMonth: { $isoWeek: { $dayOfMonth: { $toDate: { $map: {input: [82784],in: { $sqrt: '$obj.obj.num' }} } } } } } } } } } } },timezone: "Etc/GMT+8"} } }, _id: 0}}],

        [{$project: {a: { $dateToString: { date: '$obj.obj.date' } }, _id: 0}}],

        [{$project: {a: { $dayOfMonth: { $dateFromParts: {year: { $mod: ['$obj.obj.obj.num',{ $indexOfArray: [{ $objectToArray: '$obj.obj.obj' },{ $substrBytes: [{ $toUpper: '$obj.obj.obj.str' },9,0] },20] }] },month: { $divide: [79727,29028] },day: { $trunc: 39057 },minute: { $mod: ['$obj.obj.obj.num','$obj.obj.obj.num'] },timezone: "America/Caracas"} } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[80872],'$num'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "calculating Aruban Guilder",v: { $dateToString: {date: '$date',format: "%%-%u-%S-%Y-%V-%u-%Z-%V-%d"} }},{k: "Credit Card Account purple connect",v: '$obj.obj.obj.str'}]] }, _id: 0}}],

        [{$project: {a: { $month: { $minute: { $dateFromParts: {isoWeekYear: { $ln: 91465 },isoWeek: { $indexOfArray: [{ $range: [6,17,15] },{ $arrayElemAt: [[97391],'$obj.obj.obj.num'] },15,11] },isoDayOfWeek: { $log: [79769,84342] },hour: { $sqrt: '$num' },second: { $log10: '$obj.obj.obj.num' }} } } }, _id: 0}}],

        [{$project: {a: { $zip: { inputs: [['$str'],['$obj.num'],['$num'],[90397,'$obj.obj.obj.num']] } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[44843,'$num','$num'],['$obj.str'],[],['$obj.obj.obj.str']]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["Advanced"],'$num'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Nevada",v: true},{k: "web-readiness repurpose",v: '$str'},{k: "input",v: true},{k: "success",v: "North Korean Won"}]] }, _id: 0}}],

        [{$project: {a: { $map: {input: ['$num'],as: 'leone',in: { $log10: 3866 }} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "green Louisiana",v: '$str'},{k: "Function-based Awesome Frozen Chicken",v: true}]] }, _id: 0}}],

        [{$project: {a: { $isoWeek: { $toDate: { $arrayToObject: [[['$obj.num','$num'],[{ $dateToString: {date: { $minute: { $hour: { $isoDayOfWeek: { $second: { $dateFromString: {dateString: "2018-09-05T21:35:54.681Z",format: "%L-%w-%S-%H-%Z-%m-%Z-%S",timezone: "America/Port_of_Spain",onError: { $objectToArray: '$obj.obj' },onNull: { $arrayElemAt: [['$obj.obj.obj.str'],44656] }} } } } } },timezone: "Europe/Dublin",onNull: "bypassing Digitized Metrics"} }],[{ $concat: [] },'$obj.obj.obj.str'],[6838,{ $multiply: [] },'$obj.obj.num']]] } } }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: { $second: { $hour: { $dateFromParts: {isoWeekYear: { $divide: ['$num',30825] },isoDayOfWeek: { $abs: '$obj.num' },timezone: "Asia/Oral"} } } },format: "%Y-%w-%S-%u-%z-%m-%j-%Y-%U-%m",timezone: "America/Yellowknife",onNull: "Centers"} }, _id: 0}}],

        [{$project: {a: { $dayOfYear: { $dayOfWeek: { $minute: { $dateFromParts: {year: { $pow: ['$obj.obj.obj.num','$obj.obj.num'] },month: 44546,day: { $indexOfArray: [{ $concatArrays: [[{ $rtrim: {input: '$str',chars: '$obj.str'} }],['$num',41734],["Hawaii connect",'$obj.obj.obj.str',"Borders"],[{ $concat: ['$obj.str',"rich Soft Creative"] }],[]] },{ $arrayElemAt: [[],{ $divide: ['$obj.num',{ $cmp: [{ $range: [5,0] },{ $arrayToObject: [[[90694,'$obj.obj.num',16608]]] }] }] }] },4] },minute: { $indexOfArray: [{ $zip: {inputs: [[]],defaults: [41359,"primary website"]} },{ $toLower: "Fresh" },10,14] },timezone: "America/Recife"} } } } }, _id: 0}}],

        [{$project: {a: { $minute: { $dayOfMonth: { $isoWeek: { $dayOfWeek: { $millesecond: { $dayOfYear: { $dateToString: {date: '$date',timezone: "America/Los_Angeles"} } } } } } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $toUpper: { $toLower: "Bridge asymmetric" } }],10339] }, _id: 0}}],

        [{$project: {a: { $map: {input: ['$obj.obj.str',"Investment Account Spain","Rubber Money Market Account"],as: 'blaise',in: { $subtract: [{ $ceil: 37058 },'$num'] }} }, _id: 0}}],

        [{$project: {a: { $dateToParts: {date: { $isoWeek: { $dayOfMonth: { $toDate: { $arrayElemAt: [[],'$obj.obj.num'] } } } },iso8601: true} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[64652,'$obj.num'],['$str'],[{ $dateToString: {date: new Date("2018-09-05T21:01:34.179Z"),onNull: { $arrayElemAt: [[{ $dateToString: {date: { $isoDayOfWeek: { $minute: { $isoWeek: { $isoDayOfWeek: { $dayOfWeek: { $dateFromParts: {year: { $trunc: '$obj.obj.obj.num' },month: 2335,hour: { $mod: [{ $subtract: [59101,'$num'] },{ $exp: '$obj.num' }] },minute: { $abs: 14187 }} } } } } } },format: "%Z-%d-%Z-%Z-%Y-%z-%S-%V-%L",timezone: "Atlantic/Bermuda"} },"Internal"],36030] }} },'$obj.str',"homogeneous protocol",{ $ltrim: { input: '$obj.str' } }]]] }, _id: 0}}],

        [{$project: {a: { $second: { $isoWeek: { $month: { $minute: { $dayOfYear: { $hour: { $isoDayOfWeek: { $hour: { $millesecond: { $dayOfWeek: { $dateToParts: {date: { $week: { $dayOfWeek: { $dateToString: {date: new Date("2018-09-06T11:35:25.658Z"),timezone: "Europe/Guernsey"} } } },timezone: "Pacific/Kiritimati"} } } } } } } } } } } }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [["grow Manor"],['$obj.str',{ $dateToString: {date: new Date("2018-09-06T12:24:57.801Z"),format: "%S-%u-%%-%H-%S-%G-%U-%U-%Z-%z",timezone: "Australia/Canberra",onNull: { $toUpper: '$obj.obj.obj.str' }} }],["partnerships parse"],['$obj.obj.obj.num',30620,'$obj.obj.num'],[]],defaults: [{},91392]} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["white Direct quantifying"],'$num'] }, _id: 0}}],

        [{$project: {a: { $substr: ["calculating Nevada",14,18] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[51892,'$obj.obj.obj.num'],[48823,'$obj.obj.num','$num']]] }, _id: 0}}],

        [{$project: {a: { $week: { $dateToString: { date: new Date("2018-09-06T13:49:59.328Z") } } }, _id: 0}}],

        [{$project: {a: { $dateFromString: {dateString: "2018-09-06T02:45:41.808Z",format: "%j-%H-%L-%S",onError: { $arrayElemAt: [["copying",{ $concat: ['$obj.str'] }],10287] }} }, _id: 0}}],

        [{$project: {a: { $dayOfYear: { $hour: { $second: { $dateToString: {date: { $isoDayOfWeek: { $week: { $dayOfMonth: { $week: { $dateFromParts: {isoWeekYear: 52297,hour: { $size: [[{ $toLower: { $toLower: "Metal" } },'$obj.obj.str']] },minute: { $cmp: [{ $arrayToObject: [[[],[{ $substrBytes: ['$obj.obj.obj.str',1,15] },"Handmade Texas",'$str']]] },{ $reverseArray: [["Sleek Metal Chips Cambridgeshire AI",{ $trim: {input: '$str',chars: "Cheese"} }]] }] },timezone: "Australia/Canberra"} } } } } },format: "%z-%M-%d-%Y-%z-%G-%Z-%U-%j-%u-%d",onNull: '$obj.obj.obj.str'} } } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[]]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $trim: {input: "calculating program hierarchy",chars: '$str'} },'$obj.str'],69948] }, _id: 0}}],

        [{$project: {a: { $hour: { $month: { $minute: { $week: { $dayOfMonth: { $dateFromString: {dateString: "2018-09-06T02:34:43.279Z",format: "%V-%%-%d-%m-%H-%m-%L-%w-%Y-%G-%H-%%",timezone: "Asia/Magadan",onError: { $substrCP: ['$str',3,13] }} } } } } } }, _id: 0}}],

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
