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
        return coll.insert({_id: 11234,str: "User-centric",num: 58518,date: new Date("2018-09-06T08:44:05.672Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 11235,str: "Switchable moratorium Shirt",num: 77375,date: new Date("2018-09-06T06:33:19.968Z"),array: [],obj: {_id: 11236,str: "tertiary",num: 6233,date: new Date("2018-09-06T07:16:56.177Z"),array: [new Date("2018-09-06T11:27:50.918Z"),"primary Generic","customer loyalty Squares",20537,"input",new Date("2018-09-06T02:44:30.615Z")],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 11237,str: "Associate function reboot",num: 52367,date: new Date("2018-09-06T17:09:46.544Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 11238,str: "Licensed Wooden Fish matrix parsing",num: 88134,date: new Date("2018-09-06T19:24:50.666Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 11239,str: "synthesizing South Carolina Home Loan Account",num: 55181,date: new Date("2018-09-06T16:39:57.908Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 11240,str: "neutral mission-critical",num: 3334,date: new Date("2018-09-06T06:56:15.710Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 11241,str: "port",num: 44965,date: new Date("2018-09-06T12:50:36.800Z"),array: [],obj: {_id: 11242,str: "vortals Minnesota",num: 37653,date: new Date("2018-09-06T04:43:36.871Z"),array: [[],82930,new Date("2018-09-06T14:21:21.928Z"),85705,new Date("2018-09-06T14:04:40.386Z"),"Practical Steel Home Loan Account","toolset",24099,{_id: 11243,str: "Tunisian Dinar Cambridgeshire",num: 71961,date: new Date("2018-09-06T16:42:53.335Z"),array: [31897,new Date("2018-09-06T15:29:54.742Z"),["connect fuchsia bypassing","sensor",76623]],obj: {_id: 11244,str: "pixel Pakistan uniform",num: 8369,obj: {}}},{_id: 11245,num: 66046,obj: {}}],obj: {_id: 11246,str: "networks",num: 62447,date: new Date("2018-09-05T22:42:01.475Z")}}});
    },

    function(coll) {
        return coll.insert({_id: 11247,str: "aggregate EXE firewall",num: 33100,date: new Date("2018-09-06T05:45:05.799Z"),array: [new Date("2018-09-06T08:59:08.434Z"),"Licensed",47056,new Date("2018-09-05T21:13:18.712Z"),[],"tertiary Gorgeous Rubber Tuna",91867,[],46594,"Concrete",{_id: 11248,str: "Monitored Berkshire",num: 60952,array: [new Date("2018-09-06T06:06:07.018Z")],obj: {_id: 11249,str: "withdrawal",num: 59535,date: new Date("2018-09-06T06:06:03.943Z"),array: [],obj: {}}},"teal",{_id: 11250,str: "quantify Lari",num: 42092,date: new Date("2018-09-05T23:12:26.418Z"),array: [new Date("2018-09-06T13:15:24.290Z")],obj: {}}],obj: {_id: 11251,str: "index Money Market Account",array: []}});
    },

    function(coll) {
        return coll.insert({_id: 11252,str: "sensor Refined Metal Chicken",num: 26360,date: new Date("2018-09-05T22:32:55.813Z"),array: [],obj: {_id: 11253,str: "monitor seamless",num: 86611,date: new Date("2018-09-05T20:54:25.533Z"),array: ["Home",98936,[15050,new Date("2018-09-06T19:39:02.366Z"),"Bedfordshire Borders",new Date("2018-09-06T07:54:13.141Z"),14330],"Global client-driven ROI",52700,new Date("2018-09-06T10:38:27.608Z"),{_id: 11254,str: "deposit Rhode Island",date: new Date("2018-09-06T04:17:36.440Z"),array: [93524,[85890],new Date("2018-09-06T14:00:21.778Z")],obj: {}},{_id: 11255,str: "deposit"},{_id: 11256,str: "Program",num: 28618,date: new Date("2018-09-06T11:51:55.730Z"),array: [],obj: {}},"Representative Montserrat"]}});
    },

    function(coll) {
        return coll.insert({_id: 11257,str: "Managed connect",date: new Date("2018-09-06T08:29:50.179Z"),array: [55755,"facilitate","AGP Senior",92991,15085,new Date("2018-09-06T13:45:14.507Z"),new Date("2018-09-05T20:51:29.698Z"),"Morocco Intelligent Concrete Towels bluetooth",5125,[new Date("2018-09-06T07:54:48.890Z"),[]],"product connect tertiary"],obj: {_id: 11258,str: "optimizing invoice Buckinghamshire",num: 3870,array: [[],new Date("2018-09-05T21:15:17.704Z")],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 11259,str: "Florida",num: 73958,date: new Date("2018-09-05T20:54:02.508Z"),array: [],obj: {_id: 11260,str: "Consultant Well Euro",num: 43707,date: new Date("2018-09-06T07:17:12.291Z"),array: [{_id: 11261,str: "programming Automated open-source",date: new Date("2018-09-05T21:44:07.226Z"),obj: {_id: 11262,str: "infomediaries Kentucky networks",array: [],obj: {}}},"Dynamic",new Date("2018-09-06T01:23:46.945Z"),[new Date("2018-09-05T22:56:33.352Z"),"disintermediate",86091,new Date("2018-09-06T11:35:40.547Z")],56988,"Generic actuating",{_id: 11263,str: "cross-platform",num: 80977,date: new Date("2018-09-06T13:40:20.030Z"),array: [],obj: {_id: 11264,obj: {}}},"Pula Money Market Account Somoni",7032,[[]]]}});
    },

    function(coll) {
        return coll.insert({_id: 11265,str: "synthesizing",num: 16509,date: new Date("2018-09-06T02:52:21.712Z"),array: [[],"Tuna","Designer",new Date("2018-09-06T06:25:42.242Z"),99258,7635,new Date("2018-09-06T18:26:36.887Z"),["Sports",new Date("2018-09-06T14:56:11.574Z"),19787,new Date("2018-09-06T04:30:48.400Z")],{_id: 11266,str: "digital Centralized",num: 51895,date: new Date("2018-09-06T15:18:40.478Z"),array: [],obj: {}},[{_id: 11267,str: "payment optimize Assistant",date: new Date("2018-09-05T21:41:19.420Z"),array: [{_id: 11268,num: 18918,array: ["National Awesome Steel Salad"],obj: {}},"Boliviano Mvdol Rustic Fresh Towels recontextualize",new Date("2018-09-06T00:30:53.743Z")],obj: {_id: 11269,str: "fuchsia back-end",num: 67507,date: new Date("2018-09-06T01:52:22.351Z"),obj: {_id: 11270,str: "product",date: new Date("2018-09-05T20:48:23.238Z"),array: []}}}],"Fantastic Granite Towels infomediaries Idaho"],obj: {_id: 11271,array: []}});
    },

    function(coll) {
        return coll.insert({_id: 11272,str: "Checking Account unleash Chair",num: 4301,date: new Date("2018-09-06T00:04:31.913Z"),array: [],obj: {_id: 11273,num: 32178,date: new Date("2018-09-06T07:33:45.341Z"),array: [],obj: {_id: 11274,str: "Fantastic",num: 97565,date: new Date("2018-09-06T15:29:58.914Z"),array: [45714,72188,{_id: 11275,num: 72162,date: new Date("2018-09-06T11:03:57.456Z"),array: ["Designer","Toys"]},"Executive",new Date("2018-09-06T03:22:05.602Z"),[new Date("2018-09-06T08:47:38.870Z"),82443,new Date("2018-09-05T21:02:26.672Z")],"Usability Manat Industrial",[86683,new Date("2018-09-06T15:23:25.324Z")],[{_id: 11276,str: "Ports",num: 27685,obj: {}}],60187,"quantifying zero defect",{_id: 11277,str: "solution-oriented Nepalese Rupee",num: 87660,array: [new Date("2018-09-06T05:43:04.525Z")],obj: {_id: 11278,date: new Date("2018-09-06T17:50:11.250Z")}},new Date("2018-09-06T10:37:31.545Z")]}}});
    },

    function(coll) {
        return coll.insert({_id: 11279,str: "Garden synergies Reactive",date: new Date("2018-09-06T06:59:24.526Z"),array: [],obj: {_id: 11280,str: "THX world-class",num: 70327,date: new Date("2018-09-06T08:28:59.399Z"),array: [43169,"Consultant port",45264,{_id: 11281,str: "Re-engineered Cambodia application",num: 90772,date: new Date("2018-09-06T17:16:42.553Z"),array: [new Date("2018-09-06T01:18:52.969Z"),"North Carolina Chips Ridge",new Date("2018-09-06T03:29:11.730Z"),{_id: 11282,str: "forecast Handcrafted Steel Chips harness",num: 17032,date: new Date("2018-09-06T11:46:49.466Z"),array: [],obj: {}},{_id: 11283,str: "matrix",num: 86071,obj: {}}]},23068,"Communications system",["Australia Personal Loan Account",51027,[]],new Date("2018-09-06T15:01:33.872Z"),new Date("2018-09-06T01:34:38.128Z"),"blue scalable"],obj: {_id: 11284,array: ["TCP"],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 11285,str: "Quality",num: 81927,date: new Date("2018-09-06T10:02:28.591Z"),array: [80457,new Date("2018-09-06T11:19:22.474Z"),2648,"hack Architect calculate",new Date("2018-09-06T03:16:00.884Z"),"connect virtual ROI","payment Future-proofed firewall",[],51137,new Date("2018-09-06T10:54:32.650Z"),90721],obj: {_id: 11286,str: "challenge Buckinghamshire Tasty",num: 1576,date: new Date("2018-09-06T05:00:10.282Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 11287,str: "Tools info-mediaries",num: 60035,date: new Date("2018-09-06T00:46:17.565Z"),array: [[],1267,"Auto Loan Account",63447,{_id: 11288,str: "Soap",date: new Date("2018-09-06T00:43:37.696Z"),array: [new Date("2018-09-06T06:27:08.330Z")],obj: {_id: 11289,date: new Date("2018-09-06T06:20:34.152Z"),array: ["Practical Self-enabling Sausages",88062]}},{_id: 11290,str: "generating SMS e-business",num: 86890,array: [new Date("2018-09-06T04:23:09.423Z"),new Date("2018-09-06T05:29:35.116Z")]},93430,new Date("2018-09-06T12:57:17.148Z"),{_id: 11291,str: "THX Concrete",num: 51805,date: new Date("2018-09-06T19:24:46.106Z"),obj: {}},[],{_id: 11292,array: [],obj: {_id: 11293,obj: {}}},"Realigned website Bolivar Fuerte"],obj: {_id: 11294,str: "Auto Loan Account",num: 27431,date: new Date("2018-09-05T22:28:17.351Z"),array: [new Date("2018-09-05T22:47:31.597Z"),"e-tailers"],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 11295,str: "View",num: 78551,date: new Date("2018-09-06T14:47:43.771Z"),array: [[new Date("2018-09-06T02:35:34.739Z")],new Date("2018-09-06T18:12:41.388Z"),new Date("2018-09-06T15:30:23.090Z"),20294,"quantify deposit demand-driven",70562,"Mississippi Personal Loan Account payment","Principal payment card",65125,72830,[],37334,{_id: 11296,str: "infrastructures hacking Senior",num: 93187,date: new Date("2018-09-06T12:22:17.106Z"),array: [],obj: {}}],obj: {_id: 11297,str: "Auto Loan Account Personal Loan Account",num: 85373,date: new Date("2018-09-06T09:06:00.886Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 11298,str: "Accounts Greenland Arizona",num: 90761,date: new Date("2018-09-06T17:45:49.370Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 11299,str: "California Beauty",num: 62432,date: new Date("2018-09-06T13:07:52.569Z"),array: [],obj: {_id: 11300,str: "Central",num: 69049,obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 11301,str: "copying reboot",num: 70755,date: new Date("2018-09-06T05:42:02.646Z"),array: [],obj: {_id: 11302,str: "Avon Games override",date: new Date("2018-09-05T23:17:31.453Z"),obj: {_id: 11303,str: "Toys Ergonomic niches",num: 58351,date: new Date("2018-09-06T03:00:28.187Z"),array: [94420,new Date("2018-09-06T06:04:23.420Z"),"Keyboard Money Market Account brand","Port","Berkshire Central Internal",{_id: 11304,str: "gold real-time Rustic Frozen Keyboard",num: 68737,array: [new Date("2018-09-06T05:26:30.632Z"),{_id: 11305,num: 65862,date: new Date("2018-09-06T10:35:35.717Z"),array: [],obj: {}}],obj: {}},31419,new Date("2018-09-06T14:17:42.016Z"),new Date("2018-09-06T02:51:38.899Z"),[87423,40183],"wireless Djibouti Franc target",[],"microchip Croatian Kuna"]}}});
    },

    function(coll) {
        return coll.insert({_id: 11306,str: "interfaces end-to-end New Jersey",num: 32755,date: new Date("2018-09-06T03:40:04.983Z"),array: [],obj: {_id: 11307,str: "North Korean Won mindshare deliver",num: 84143,date: new Date("2018-09-06T04:52:46.383Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 11308,str: "copying programming lime",num: 29795,date: new Date("2018-09-06T13:16:36.692Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 11309,str: "payment Strategist Fresh",num: 56494,array: [],obj: {_id: 11310,str: "Nebraska Trinidad and Tobago Soap",num: 81383,date: new Date("2018-09-05T22:48:56.175Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 11311,str: "Hungary Morocco GB",num: 24840,date: new Date("2018-09-06T11:14:20.976Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 11312,str: "black Bedfordshire payment",num: 94424,date: new Date("2018-09-06T14:41:55.629Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 11313,num: 53244,date: new Date("2018-09-06T05:40:11.315Z"),array: ["Car hardware invoice",65832,new Date("2018-09-06T11:49:39.875Z"),new Date("2018-09-06T08:14:13.913Z"),"incubate silver customized","bleeding-edge",new Date("2018-09-06T07:56:34.872Z"),99875,"Expressway",{_id: 11314,str: "Cotton Tasty Fresh Chair protocol",num: 35658,date: new Date("2018-09-06T07:49:51.664Z"),array: [],obj: {}},new Date("2018-09-06T15:52:08.019Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 11315,str: "Associate",date: new Date("2018-09-06T03:40:37.787Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 11316,str: "neutral Credit Card Account",num: 22712,date: new Date("2018-09-06T19:37:08.892Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 11317,str: "Fantastic",num: 7813,date: new Date("2018-09-06T15:43:55.760Z"),obj: {_id: 11318,str: "integrated Shoes",date: new Date("2018-09-06T04:48:54.665Z"),array: ["Cliffs Books Awesome Fresh Salad",{_id: 11319,num: 39921,date: new Date("2018-09-06T12:59:28.122Z"),array: [],obj: {_id: 11320,str: "users Mississippi",num: 59002,array: [],obj: {}}},new Date("2018-09-06T18:17:24.880Z"),"Borders interactive",40870,36497,new Date("2018-09-06T07:09:14.257Z"),{_id: 11321,str: "Lithuania Shirt",num: 84285,date: new Date("2018-09-05T23:00:28.786Z"),array: [{_id: 11322,num: 44822,array: ["Credit Card Account Virgin Islands, British Missouri",new Date("2018-09-06T15:20:58.683Z"),{_id: 11323,str: "Saint Helena",num: 93650,obj: {}}]},new Date("2018-09-06T09:31:14.013Z"),new Date("2018-09-06T19:13:43.173Z"),11628,[]]}]}});
    },

    function(coll) {
        return coll.insert({_id: 11324,num: 37898,array: [592,new Date("2018-09-06T18:40:25.299Z"),"leverage",77688,{_id: 11325,str: "grey complexity",date: new Date("2018-09-06T02:39:26.715Z"),array: [],obj: {_id: 11326,str: "Tools Mills",date: new Date("2018-09-06T03:09:31.528Z"),obj: {_id: 11327,str: "optical",num: 89862,date: new Date("2018-09-05T23:49:17.103Z"),array: [[]],obj: {}}}},88425,[new Date("2018-09-06T02:52:34.427Z"),{_id: 11328,num: 22053,obj: {_id: 11329,str: "recontextualize deposit",num: 99356,date: new Date("2018-09-06T05:20:11.293Z"),array: [12526,"reboot ubiquitous innovate"],obj: {_id: 11330,num: 23118,date: new Date("2018-09-06T17:55:33.154Z"),array: []}}}],new Date("2018-09-06T04:41:27.905Z"),87417,"Credit Card Account Metal",new Date("2018-09-06T04:24:31.014Z"),"Streamlined",[],74111]});
    },

    function(coll) {
        return coll.insert({_id: 11331,num: 96838,date: new Date("2018-09-06T04:33:01.490Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 11332,str: "system",num: 90010,date: new Date("2018-09-06T11:40:26.428Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 11333,str: "Moldova Tenge e-business",num: 79093,date: new Date("2018-09-06T12:33:20.022Z"),array: [new Date("2018-09-06T19:40:14.843Z"),{_id: 11334,str: "Bike",num: 98198,date: new Date("2018-09-06T17:24:21.814Z"),obj: {_id: 11335,str: "panel Networked US Dollar",num: 51928,date: new Date("2018-09-06T19:44:41.876Z"),array: ["Fantastic program"]}},90404,11837,"orange Rhode Island Awesome Concrete Cheese",64408,new Date("2018-09-06T07:18:57.090Z"),[],{_id: 11336,str: "Bike grow generate",num: 88978,array: [],obj: {}},74818,"syndicate",[new Date("2018-09-05T20:19:42.072Z"),"Mississippi Fantastic Frozen Car pink"]]});
    },

    function(coll) {
        return coll.insert({_id: 11337,str: "1080p Implementation Cape Verde Escudo",num: 7209,date: new Date("2018-09-06T18:50:57.244Z"),array: [],obj: {_id: 11338,str: "Berkshire Security killer",num: 26450,array: [14631,new Date("2018-09-06T04:29:57.573Z"),new Date("2018-09-06T05:57:29.139Z"),11794,"extranet","multi-byte purple back-end",{_id: 11339,str: "Personal Loan Account",num: 34216,date: new Date("2018-09-06T04:14:09.810Z"),obj: {_id: 11340,str: "schemas Chips Paradigm",num: 58438,date: new Date("2018-09-05T22:48:48.009Z"),array: ["Associate payment Executive"],obj: {}}},new Date("2018-09-06T01:17:33.543Z"),new Date("2018-09-06T04:59:11.717Z"),51158,[]],obj: {_id: 11341,obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 11342,str: "Auto Loan Account Self-enabling quantifying",num: 15530,date: new Date("2018-09-06T11:14:02.658Z"),obj: {_id: 11343,str: "Plastic supply-chains 1080p",date: new Date("2018-09-06T19:37:48.988Z"),array: [],obj: {_id: 11344,str: "Metal Investor",num: 3632,date: new Date("2018-09-06T02:11:30.320Z"),array: [39759,"Incredible RAM",52403,new Date("2018-09-06T13:43:07.941Z"),"Investor",new Date("2018-09-06T16:32:29.826Z"),{_id: 11345,str: "service-desk",num: 53287,array: []},"Gloves",{_id: 11346,num: 10911,date: new Date("2018-09-06T10:32:51.129Z"),array: [new Date("2018-09-05T23:01:05.814Z"),"Handmade data-warehouse green","Practical Wooden Keyboard Home Loan Account",68326,new Date("2018-09-06T17:36:28.261Z"),[]],obj: {}}],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 11347,str: "Visionary Unbranded",num: 44453,date: new Date("2018-09-05T23:18:42.814Z"),array: ["Horizontal",new Date("2018-09-06T03:47:15.052Z"),[],new Date("2018-09-06T06:30:43.240Z"),58278,"Jamaican Dollar GB Tokelau","Architect Moldova Pants",9790,new Date("2018-09-05T21:53:08.919Z"),new Date("2018-09-06T01:12:02.449Z"),19698],obj: {_id: 11348,str: "Mississippi AGP deposit",date: new Date("2018-09-06T02:11:05.131Z"),array: [{_id: 11349,str: "portals analyzing",num: 29316,array: []},"Tunnel"],obj: {_id: 11350,str: "applications",num: 60725,date: new Date("2018-09-06T08:50:56.658Z"),array: [],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 11351,num: 5804,date: new Date("2018-09-06T12:38:56.181Z"),array: [new Date("2018-09-06T08:09:38.025Z"),52245,"Visionary overriding Money Market Account",46260,new Date("2018-09-06T08:44:27.560Z"),"Junction Shoes",69983,[],72978,new Date("2018-09-06T17:10:41.468Z"),{_id: 11352,str: "Handmade Operative",num: 59598,date: new Date("2018-09-06T09:30:16.509Z"),obj: {_id: 11353,str: "European Unit of Account 9(E.U.A.-9) robust Savings Account",num: 64348,array: []}},"transparent"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 11354,str: "Architect Incredible",num: 62503,date: new Date("2018-09-06T11:23:36.790Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 11355,str: "JSON",num: 75724,date: new Date("2018-09-06T04:07:30.153Z")});
    },

    function(coll) {
        return coll.insert({_id: 11356,str: "Handmade Cotton Bacon",num: 7160,date: new Date("2018-09-06T12:51:26.033Z"),array: [],obj: {_id: 11357,str: "object-oriented Reactive overriding",num: 70630,date: new Date("2018-09-06T11:00:22.058Z"),array: [],obj: {_id: 11358,str: "Handcrafted",num: 97538,obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 11359,str: "Keyboard",num: 67014,date: new Date("2018-09-06T05:31:07.209Z"),array: [new Date("2018-09-06T05:34:22.941Z"),"parsing cutting-edge",12755,44783,{_id: 11360,str: "Computers Cliffs",num: 6785,date: new Date("2018-09-06T02:27:21.478Z"),array: [],obj: {_id: 11361,num: 18400,date: new Date("2018-09-06T02:45:26.897Z"),array: [58562,"global parallelism"]}},new Date("2018-09-06T03:54:57.887Z"),"matrix",[new Date("2018-09-06T02:35:01.249Z")],[],"solution-oriented killer",13062,{_id: 11362,str: "Bedfordshire",num: 92878,date: new Date("2018-09-06T16:55:06.426Z"),obj: {_id: 11363,obj: {}}}]});
    },

    function(coll) {
        return coll.insert({_id: 11364,str: "white Investment Account",num: 62353,date: new Date("2018-09-05T22:27:37.490Z"),array: ["Response",64076,"Gloves"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 11365,str: "capacitor payment Investor",num: 16169,date: new Date("2018-09-06T05:21:41.047Z"),array: [],obj: {_id: 11366,str: "bypass Wooden",num: 46153,date: new Date("2018-09-06T02:54:44.755Z"),array: [new Date("2018-09-06T14:20:45.193Z"),new Date("2018-09-06T11:51:47.166Z"),78454,"invoice IB Awesome",{_id: 11367,str: "Steel solution-oriented",num: 91314,array: [42004]},[],41978,"Engineer Coves Human","Kyrgyz Republic",22131,"application"],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 11368,str: "Soap monitor implementation",num: 91830,array: [28596,"Outdoors","Credit Card Account invoice capacitor",[10661,new Date("2018-09-06T13:38:52.806Z"),new Date("2018-09-06T01:40:20.981Z"),{_id: 11369,str: "Upgradable synthesize neural",num: 3341,date: new Date("2018-09-05T20:35:43.237Z"),array: [],obj: {}},new Date("2018-09-06T07:07:59.591Z"),new Date("2018-09-06T04:11:50.252Z"),"Locks Money Market Account Fantastic Steel Salad"],"Plastic Awesome Frozen Gloves program"]});
    },

    function(coll) {
        return coll.insert({_id: 11370,str: "Architect Producer",num: 18583,date: new Date("2018-09-06T18:45:29.095Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 11371,str: "monitor",num: 47244,date: new Date("2018-09-06T15:52:10.516Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 11372,str: "niches",num: 61664,date: new Date("2018-09-06T00:56:24.203Z"),array: [],obj: {_id: 11373,str: "Paraguay FTP",num: 43788,date: new Date("2018-09-05T23:16:10.363Z"),array: [89949,new Date("2018-09-06T14:35:22.833Z"),"Wyoming",new Date("2018-09-06T02:24:13.502Z"),65543,92661],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 11374,str: "Forest",date: new Date("2018-09-06T12:55:38.027Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 11375,str: "mobile",num: 95695,date: new Date("2018-09-06T19:28:24.529Z"),array: [{_id: 11376,str: "Small EXE Hat",num: 20006,array: [3514,33784,34871],obj: {}},"North Carolina interface",new Date("2018-09-06T11:56:58.516Z"),new Date("2018-09-06T14:44:09.455Z"),[],"optical","Streamlined Credit Card Account Generic",new Date("2018-09-06T06:40:23.624Z"),new Date("2018-09-06T13:16:01.494Z"),new Date("2018-09-06T12:45:27.745Z"),"Indian Rupee Ngultrum",43303,"Principal",43852],obj: {_id: 11377,str: "Small",num: 6222,date: new Date("2018-09-06T15:12:09.065Z"),array: [[]]}});
    },

    function(coll) {
        return coll.insert({_id: 11378,str: "reinvent ubiquitous",num: 41755,date: new Date("2018-09-06T14:29:29.466Z"),array: [new Date("2018-09-06T16:35:24.322Z"),new Date("2018-09-06T02:53:25.778Z"),"Georgia",73770,"haptic Terrace withdrawal",10336,28957,[],"Practical Consultant Representative",{_id: 11379,num: 72133,array: [],obj: {}},{_id: 11380,str: "alarm optical Bedfordshire",num: 84755,date: new Date("2018-09-06T14:04:14.838Z"),array: [[]],obj: {}},new Date("2018-09-06T16:17:10.593Z"),new Date("2018-09-06T11:09:02.969Z")],obj: {_id: 11381,str: "optical Books",num: 21509,date: new Date("2018-09-06T13:50:15.596Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 11382,str: "Horizontal Vietnam Towels",num: 17364,date: new Date("2018-09-06T10:41:41.063Z"),array: [],obj: {_id: 11383,str: "Infrastructure Mobility",num: 2327,date: new Date("2018-09-06T04:06:10.176Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 11384,str: "hardware back-end black",num: 34536,date: new Date("2018-09-06T04:08:32.615Z"),array: ["black USB Assurance",22886,"Ouguiya wireless","Computers SMTP",{_id: 11385,str: "Passage driver orchid",num: 94675,date: new Date("2018-09-06T14:07:55.487Z"),array: [],obj: {}},42942,new Date("2018-09-05T21:28:30.578Z"),"Lodge Metal",new Date("2018-09-05T23:59:48.887Z"),new Date("2018-09-06T08:37:26.607Z"),new Date("2018-09-06T00:20:28.532Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 11386,str: "indexing",num: 42781,array: [],obj: {_id: 11387,str: "red",num: 74029,date: new Date("2018-09-06T12:00:00.087Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 11388,str: "Outdoors bandwidth-monitored Personal Loan Account",num: 18729,date: new Date("2018-09-06T04:45:51.478Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 11389,str: "redefine",num: 74368,date: new Date("2018-09-05T21:09:57.694Z"),array: [[],62586,"Avon Steel Infrastructure","driver feed",new Date("2018-09-06T16:28:58.737Z"),30924,new Date("2018-09-06T14:06:41.460Z"),new Date("2018-09-05T21:42:03.304Z"),{_id: 11390,str: "matrix Armenia client-driven",date: new Date("2018-09-06T10:28:27.806Z"),array: [new Date("2018-09-05T21:15:25.358Z")],obj: {}},20773,[],{_id: 11391,str: "North Carolina generate",num: 5486,date: new Date("2018-09-06T09:34:20.909Z"),array: [1649],obj: {}},"Lead",{_id: 11392,str: "Rubber",num: 87258,obj: {}},new Date("2018-09-06T06:48:41.400Z")]});
    },

    function(coll) {
        return coll.insert({_id: 11393,num: 79389,date: new Date("2018-09-06T03:50:48.084Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 11394,str: "back-end",num: 78858,date: new Date("2018-09-06T03:04:05.473Z"),array: [],obj: {_id: 11395,date: new Date("2018-09-06T16:06:44.033Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 11396,str: "SAS Cotton robust",num: 57218,date: new Date("2018-09-06T10:40:59.802Z"),array: ["Producer Function-based",33786,20438,[new Date("2018-09-06T01:42:58.092Z")],"UIC-Franc Chile Reverse-engineered",new Date("2018-09-06T14:37:03.297Z"),new Date("2018-09-06T04:11:10.709Z"),[94660],"Games","New Jersey hack",8712,{_id: 11397,str: "circuit Oval Coordinator",num: 62325,date: new Date("2018-09-06T04:32:25.056Z"),array: [],obj: {_id: 11398,str: "indexing e-commerce",num: 51,date: new Date("2018-09-06T15:14:37.396Z"),array: [[],"Bacon Frozen Solutions"],obj: {}}}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 11399,str: "Kids Senior",num: 75642,date: new Date("2018-09-06T07:27:19.948Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 11400,str: "Jewelery transform",num: 62759,array: [new Date("2018-09-05T20:38:03.888Z"),"infrastructures Dynamic",{_id: 11401,str: "Awesome Frozen Fish superstructure wireless",num: 83372,date: new Date("2018-09-05T21:08:13.714Z"),obj: {_id: 11402,num: 78800,date: new Date("2018-09-06T16:07:42.047Z"),array: ["matrix parsing"],obj: {_id: 11403,str: "copy Soft Manager",num: 53617,date: new Date("2018-09-06T11:54:48.907Z"),array: []}}},65335,"firewall deploy Unbranded",37333,91098,new Date("2018-09-06T10:36:31.242Z"),"infomediaries Personal Loan Account SQL"],obj: {_id: 11404,str: "array",num: 84659,date: new Date("2018-09-06T16:29:50.156Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 11405,str: "Bike SQL",num: 56278,date: new Date("2018-09-06T14:48:39.096Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 11406,num: 91904,date: new Date("2018-09-06T03:22:33.430Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 11407,str: "integrate Bike",num: 41559,date: new Date("2018-09-06T03:23:01.390Z"),array: [43011,79812,"Buckinghamshire mobile Practical",new Date("2018-09-06T12:08:28.081Z"),new Date("2018-09-06T17:51:46.241Z"),new Date("2018-09-06T08:13:04.460Z"),"Global",new Date("2018-09-06T01:01:15.620Z"),{_id: 11408,str: "turquoise",num: 97194,date: new Date("2018-09-05T22:31:30.601Z"),obj: {_id: 11409,num: 45823,date: new Date("2018-09-05T20:19:19.369Z"),array: [],obj: {}}},91338],obj: {_id: 11410,str: "Costa Rica",date: new Date("2018-09-06T00:52:48.370Z"),array: [[new Date("2018-09-05T21:00:54.351Z"),"Djibouti",[],17100,[],67980],{_id: 11411,str: "Tunnel",date: new Date("2018-09-06T06:37:33.064Z"),array: []}],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 11412,str: "robust",num: 73199,date: new Date("2018-09-06T15:49:45.422Z"),array: [68510,"Division Berkshire",new Date("2018-09-05T22:43:50.894Z"),"Fish HTTP",72421,new Date("2018-09-06T01:47:27.957Z"),[],[],{_id: 11413,str: "Belarus unleash magnetic",num: 10506,date: new Date("2018-09-06T18:41:04.956Z"),obj: {}},{_id: 11414,str: "zero tolerance monitor",num: 45869,date: new Date("2018-09-06T02:03:50.114Z"),array: [],obj: {_id: 11415,array: [new Date("2018-09-05T23:08:32.716Z")]}},44744,"killer Metal composite"],obj: {_id: 11416,str: "Coordinator",num: 11458,date: new Date("2018-09-06T03:57:45.550Z"),array: [7131,new Date("2018-09-06T00:54:38.860Z")],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 11417,str: "Alaska",num: 37841,date: new Date("2018-09-06T11:07:12.831Z"),array: [],obj: {_id: 11418,date: new Date("2018-09-06T18:02:48.821Z"),array: ["override Pakistan Rupee International",49852,new Date("2018-09-06T18:48:16.097Z"),new Date("2018-09-06T09:35:47.853Z"),83879,"Soft iterate",new Date("2018-09-06T08:47:31.529Z"),"Maine",{_id: 11419,str: "Azerbaijan quantify Internal",num: 8220,date: new Date("2018-09-05T23:24:49.830Z"),obj: {}},78856,{_id: 11420,str: "Belize Dollar Small",num: 40102,array: [],obj: {_id: 11421,str: "Cambridgeshire",num: 66867,date: new Date("2018-09-06T18:22:10.266Z"),array: []}}],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 11422,str: "Rustic Soft Cheese Auto Loan Account",num: 67102,date: new Date("2018-09-06T17:50:58.184Z")});
    },

    function(coll) {
        return coll.insert({_id: 11423,str: "Re-engineered European Unit of Account 17(E.U.A.-17) Global",num: 77056,date: new Date("2018-09-06T08:05:57.349Z"),array: ["Jewelery Circles magenta",new Date("2018-09-06T07:21:44.551Z"),"Money Market Account 1080p",55739,[],{_id: 11424,str: "blue",num: 66577,date: new Date("2018-09-06T12:30:07.882Z"),array: [],obj: {}},48615,78013,"help-desk model COM",new Date("2018-09-05T22:33:51.923Z"),{_id: 11425,array: [38362,new Date("2018-09-06T01:51:11.277Z"),new Date("2018-09-06T12:06:19.368Z")],obj: {_id: 11426,str: "CSS Frozen transform",num: 59068,date: new Date("2018-09-06T17:02:26.802Z"),array: [[],"Buckinghamshire Barbados Dollar New Jersey"],obj: {}}},{_id: 11427,str: "scalable",date: new Date("2018-09-05T23:26:51.987Z"),obj: {_id: 11428,num: 79662,array: [30331]}},new Date("2018-09-06T07:30:55.264Z")],obj: {_id: 11429,num: 26464,obj: {_id: 11430,str: "Regional exuding",num: 4228,date: new Date("2018-09-06T07:01:43.881Z"),array: []}}});
    },

    function(coll) {
        return coll.insert({_id: 11431,str: "supply-chains",num: 12618,date: new Date("2018-09-06T06:43:00.256Z"),array: [new Date("2018-09-05T22:22:23.111Z"),"Cambridgeshire 3rd generation Orchestrator","Berkshire Arkansas communities",8150,[],new Date("2018-09-05T20:34:43.775Z"),new Date("2018-09-06T16:30:47.611Z"),44724,62260,"Money Market Account Intelligent Cotton Chicken",new Date("2018-09-06T09:47:13.654Z"),{_id: 11432,str: "Configuration Fish virtual",num: 10652,date: new Date("2018-09-06T13:57:02.005Z"),array: []}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 11433,str: "wireless Profound haptic",date: new Date("2018-09-06T16:58:36.173Z"),array: [21739,"utilize","Gloves",new Date("2018-09-05T21:13:30.287Z"),{_id: 11434,num: 41514,date: new Date("2018-09-06T14:35:21.052Z"),array: [],obj: {_id: 11435,str: "Italy",num: 41788,array: ["Metal"],obj: {_id: 11436,str: "Generic Mall",num: 37579,date: new Date("2018-09-06T06:41:43.162Z"),obj: {}}}},82704,new Date("2018-09-06T16:55:26.373Z"),[{_id: 11437,str: "Health",array: [],obj: {_id: 11438,num: 70118,date: new Date("2018-09-05T22:19:45.933Z"),obj: {}}}],14313,"primary Legacy",new Date("2018-09-05T22:14:23.269Z"),new Date("2018-09-06T17:11:52.433Z")]});
    },

    function(coll) {
        return coll.insert({_id: 11439,str: "uniform",num: 33390,date: new Date("2018-09-06T09:07:58.453Z"),array: ["Buckinghamshire payment",14390,new Date("2018-09-06T17:50:13.777Z"),{_id: 11440,str: "HTTP District deliverables",num: 82887,date: new Date("2018-09-06T14:25:53.952Z"),obj: {_id: 11441,date: new Date("2018-09-06T02:34:30.503Z"),array: [],obj: {_id: 11442,str: "Internal Future-proofed infrastructures",array: [],obj: {}}}},73844,[new Date("2018-09-06T12:29:04.756Z"),41336,"Tennessee Cheese Vermont",{_id: 11443,str: "Identity Unbranded",num: 28235,date: new Date("2018-09-05T19:55:23.561Z")},"card"],new Date("2018-09-06T01:08:26.341Z"),new Date("2018-09-05T22:44:52.713Z"),"Burkina Faso Quality","Corner"],obj: {_id: 11444,str: "solid state Frozen Orchestrator",num: 24814,array: [[]]}});
    },

    function(coll) {
        return coll.insert({_id: 11445,str: "Ameliorated North Dakota",num: 37363,date: new Date("2018-09-06T18:39:03.546Z"),array: [69680,25071,67757,"Bedfordshire Dynamic","Sleek index",new Date("2018-09-06T09:14:28.498Z"),{_id: 11446,num: 67249,obj: {_id: 11447,str: "digital invoice",date: new Date("2018-09-06T15:41:22.902Z"),array: [new Date("2018-09-06T14:36:12.882Z"),[80238,new Date("2018-09-06T15:16:42.085Z")],"circuit",82233,"Mountain",{_id: 11448,str: "Steel Buckinghamshire",num: 40241,date: new Date("2018-09-05T20:59:43.123Z"),array: [],obj: {_id: 11449,str: "National",date: new Date("2018-09-06T07:03:53.154Z"),array: [],obj: {}}}]}},[new Date("2018-09-06T19:52:35.332Z"),new Date("2018-09-06T17:44:05.088Z")],"migration"]});
    },

    function(coll) {
        return coll.insert({_id: 11450,str: "Fresh",num: 82398,date: new Date("2018-09-06T01:21:05.451Z"),array: [458,"Accounts Buckinghamshire",[],64968,new Date("2018-09-05T21:20:08.340Z"),new Date("2018-09-05T21:40:14.495Z"),[new Date("2018-09-06T18:39:54.259Z")],51561,["withdrawal Arkansas innovate"],"Soft Industrial",new Date("2018-09-06T14:53:26.649Z"),[],23433,{_id: 11451,num: 60795,date: new Date("2018-09-06T13:33:46.727Z"),obj: {_id: 11452,str: "AGP Rubber",num: 69127,date: new Date("2018-09-06T12:11:54.878Z"),array: []}}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 11453,str: "RSS",num: 13383,date: new Date("2018-09-05T20:54:32.754Z"),array: ["payment Compatible",new Date("2018-09-06T04:44:16.311Z"),[],new Date("2018-09-06T03:38:17.437Z"),14694,new Date("2018-09-06T11:55:20.513Z"),{_id: 11454,str: "Fresh Marketing Italy",num: 70400,date: new Date("2018-09-06T15:46:53.565Z"),array: ["hub"],obj: {_id: 11455,num: 52328,date: new Date("2018-09-06T09:17:07.115Z"),array: [],obj: {_id: 11456,str: "Honduras grow New Hampshire",array: [],obj: {}}}}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 11457,str: "teal",num: 7621,array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 11458,str: "Dynamic",num: 19694,date: new Date("2018-09-06T02:20:42.725Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 11459,num: 42982,array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 11460,str: "unleash Cambridgeshire Frozen",num: 28002,date: new Date("2018-09-05T20:29:04.703Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 11461,str: "multi-byte",num: 98834,array: [],obj: {_id: 11462,str: "Saudi Arabia Administrator",num: 93708,date: new Date("2018-09-06T00:37:35.596Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 11463,str: "bypass Sleek",num: 49232,date: new Date("2018-09-06T18:22:01.541Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 11464,str: "Monitored Computers Money Market Account",array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 11465,str: "Czech Republic Handcrafted Plastic Fish",num: 84181,date: new Date("2018-09-06T07:02:08.235Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 11466,str: "Berkshire out-of-the-box bandwidth",num: 82498,date: new Date("2018-09-05T21:49:58.604Z"),array: [],obj: {_id: 11467,str: "Refined Plastic Bacon calculating Fundamental",num: 61877,date: new Date("2018-09-06T00:55:42.691Z"),array: [],obj: {_id: 11468,num: 71503,date: new Date("2018-09-06T10:38:13.008Z"),array: [new Date("2018-09-06T15:55:50.443Z"),"Home Loan Account",53209,"strategic PNG",new Date("2018-09-06T02:10:26.390Z"),"Assurance Mission Personal Loan Account",new Date("2018-09-06T06:41:42.748Z"),[],{_id: 11469,str: "Garden",num: 78149,date: new Date("2018-09-06T15:46:04.931Z"),obj: {}},69578,{_id: 11470,str: "Managed virtual invoice",num: 22770}],obj: {_id: 11471,array: [["synthesizing Mills",42676,new Date("2018-09-06T06:07:20.620Z")],"deposit Myanmar",92807]}}}});
    },

    function(coll) {
        return coll.insert({_id: 11472,str: "Organized",num: 79919,date: new Date("2018-09-06T17:26:58.400Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 11473,str: "Ball homogeneous Nevada",num: 10695,date: new Date("2018-09-06T07:01:06.632Z"),array: [],obj: {_id: 11474,str: "systematic",num: 74715,date: new Date("2018-09-06T03:30:54.475Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 11475,str: "Keys Port",num: 65206,date: new Date("2018-09-06T10:10:00.366Z"),array: ["Lead Buckinghamshire",new Date("2018-09-06T04:16:12.338Z"),"orange foreground",{_id: 11476,str: "reboot",date: new Date("2018-09-06T17:45:32.741Z"),array: [],obj: {_id: 11477,str: "budgetary management Stream orchestrate",num: 83651,date: new Date("2018-09-05T22:22:35.192Z"),array: [],obj: {_id: 11478,str: "Berkshire",num: 89830,date: new Date("2018-09-06T05:20:24.640Z"),array: [29312,new Date("2018-09-06T12:45:01.757Z"),3530],obj: {}}}},[],new Date("2018-09-06T18:53:43.893Z"),[{_id: 11479,str: "Electronics Configurable value-added",num: 52951},76785],new Date("2018-09-06T06:47:17.607Z"),{_id: 11480,obj: {}},83790],obj: {_id: 11481,date: new Date("2018-09-06T09:20:47.840Z"),array: [{_id: 11482,num: 58576,date: new Date("2018-09-06T17:12:42.458Z"),array: []}]}});
    },

    function(coll) {
        return coll.insert({_id: 11483,str: "Village",num: 28735,date: new Date("2018-09-06T17:28:07.024Z"),array: [],obj: {_id: 11484,str: "Marketing",num: 45,date: new Date("2018-09-06T03:56:52.642Z"),array: [],obj: {_id: 11485,num: 87738,array: []}}});
    },

    function(coll) {
        return coll.insert({_id: 11486,str: "Developer Intranet real-time",num: 72833,date: new Date("2018-09-06T02:04:45.903Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 11487,str: "Handcrafted Wooden Cheese Berkshire navigate",num: 78583,date: new Date("2018-09-06T12:06:14.583Z"),array: [],obj: {_id: 11488,str: "Keys",num: 95501,date: new Date("2018-09-06T02:39:40.474Z"),array: [new Date("2018-09-06T15:35:25.326Z"),65363,89492,{_id: 11489,str: "lime",num: 82360,date: new Date("2018-09-06T11:06:55.315Z"),array: [],obj: {}},new Date("2018-09-06T11:16:52.205Z"),["Hong Kong Gorgeous AGP"],"1080p Human",[15497,new Date("2018-09-06T10:43:27.733Z"),new Date("2018-09-06T11:32:58.754Z"),82449,58639,"Chicken array Licensed",{_id: 11490,str: "Granite",date: new Date("2018-09-06T03:12:44.519Z")}],"Turkmenistan mindshare",12493],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 11491,str: "systems Garden Business-focused",num: 21766,date: new Date("2018-09-05T21:30:35.351Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 11492,str: "haptic interface",num: 44489,date: new Date("2018-09-06T04:32:03.429Z"),array: ["Tools algorithm",new Date("2018-09-06T01:28:57.048Z"),new Date("2018-09-06T01:52:35.425Z"),79122,"SDD azure Savings Account","Senior",60806,[],{_id: 11493,str: "Licensed",date: new Date("2018-09-06T11:30:09.364Z"),array: [],obj: {}},6820,new Date("2018-09-06T18:10:41.124Z"),"index payment",{_id: 11494,str: "engage",num: 21348,date: new Date("2018-09-06T15:12:12.212Z"),obj: {}},48685],obj: {_id: 11495,date: new Date("2018-09-06T12:11:27.849Z"),array: [new Date("2018-09-06T04:51:26.189Z")],obj: {_id: 11496,str: "Mississippi",num: 67539,array: [],obj: {_id: 11497,num: 53784,date: new Date("2018-09-06T14:57:04.344Z"),array: []}}}});
    },

    function(coll) {
        return coll.insert({_id: 11498,str: "panel Fully-configurable",date: new Date("2018-09-06T15:12:47.707Z"),array: [37662,"purple",{_id: 11499,str: "yellow Refined Metal Chips",num: 80755,date: new Date("2018-09-06T00:54:56.860Z"),array: [],obj: {_id: 11500,str: "approach white",num: 490,date: new Date("2018-09-06T03:54:38.952Z"),array: [],obj: {}}},23686,new Date("2018-09-06T16:01:37.966Z"),[],{_id: 11501,str: "withdrawal",num: 94033,array: [new Date("2018-09-06T08:13:48.036Z")],obj: {_id: 11502,num: 43135,date: new Date("2018-09-05T22:45:50.235Z"),obj: {}}},"invoice",[9392,"collaborative",new Date("2018-09-06T02:18:30.916Z"),61436],new Date("2018-09-06T15:42:15.037Z"),"Planner Re-engineered dedicated",{_id: 11503,date: new Date("2018-09-06T03:44:35.086Z"),array: [],obj: {}}]});
    },

    function(coll) {
        return coll.insert({_id: 11504,str: "Cheese",num: 23963,date: new Date("2018-09-06T10:48:56.958Z")});
    },

    function(coll) {
        return coll.insert({_id: 11505,str: "withdrawal Ergonomic",num: 32747,date: new Date("2018-09-06T08:01:39.305Z"),array: [17637,new Date("2018-09-06T17:14:33.242Z"),new Date("2018-09-06T10:40:24.767Z"),new Date("2018-09-06T12:38:08.993Z"),"Buckinghamshire Vermont",[],91265,{_id: 11506,date: new Date("2018-09-06T07:24:37.720Z"),array: [],obj: {}},"overriding",[16040,{_id: 11507,num: 19715,date: new Date("2018-09-06T03:59:04.797Z"),array: [],obj: {}},new Date("2018-09-05T23:56:44.781Z")]]});
    },

    function(coll) {
        return coll.insert({_id: 11508,str: "Borders Auto Loan Account Progressive",date: new Date("2018-09-05T23:36:10.760Z"),array: [86044,"connect Azerbaijan Rapid",new Date("2018-09-06T14:26:54.963Z"),11888,"Salad quantify",new Date("2018-09-06T06:38:19.915Z"),new Date("2018-09-06T05:55:15.402Z"),"Locks AGP Vista",{_id: 11509,str: "Mouse analyzing",num: 87445,date: new Date("2018-09-06T18:24:59.600Z"),array: [[]],obj: {_id: 11510,str: "Investor",num: 27162,array: [],obj: {}}},"Pre-emptive Drives ivory"],obj: {_id: 11511,str: "Nepalese Rupee PNG",num: 28648,date: new Date("2018-09-06T16:13:03.627Z"),obj: {_id: 11512,str: "program Innovative Multi-tiered",num: 57931,date: new Date("2018-09-05T21:54:23.236Z")}}});
    },

    function(coll) {
        return coll.insert({_id: 11513,str: "Managed Health Branding",num: 88246,date: new Date("2018-09-06T09:41:54.228Z"),array: [],obj: {_id: 11514,str: "Steel",num: 90159,date: new Date("2018-09-06T10:06:14.859Z"),array: [{_id: 11515,str: "incentivize indexing",date: new Date("2018-09-06T11:14:38.604Z"),array: [],obj: {}},[82483],"zero tolerance Progressive transform",12806,19091,"Lithuanian Litas",new Date("2018-09-06T05:24:02.652Z"),"Saint Barthelemy redundant Movies",new Date("2018-09-06T11:47:42.274Z"),88738]}});
    },

    function(coll) {
        return coll.insert({_id: 11516,str: "Solutions Outdoors Home Loan Account",num: 14114,date: new Date("2018-09-06T19:04:19.217Z"),array: [],obj: {_id: 11517,str: "neural",array: [73914,"Fundamental",{_id: 11518,str: "Denmark connect",num: 23765,date: new Date("2018-09-06T13:16:09.412Z"),array: [new Date("2018-09-06T18:34:45.788Z"),71920,"magnetic web services"],obj: {_id: 11519,num: 17359,date: new Date("2018-09-06T14:09:15.670Z"),array: [],obj: {}}},[],54744,"systematic deposit Grocery",new Date("2018-09-05T22:46:49.305Z"),new Date("2018-09-06T17:22:08.775Z"),[{_id: 11520,str: "copying",num: 63245,date: new Date("2018-09-06T14:46:36.784Z"),obj: {_id: 11521,str: "Licensed Soft Computer",date: new Date("2018-09-06T16:03:02.413Z")}},new Date("2018-09-05T22:41:15.572Z"),new Date("2018-09-06T18:44:36.670Z"),{_id: 11522,date: new Date("2018-09-06T00:47:13.900Z"),array: []}],{_id: 11523,str: "Object-based 24/365 knowledge base",num: 98611,array: ["Expanded"],obj: {}},"Down-sized Practical Plastic Shoes"]}});
    },

    function(coll) {
        return coll.insert({_id: 11524,str: "navigating olive Iceland",num: 373,date: new Date("2018-09-05T21:56:48.028Z"),array: ["Steel navigate","quantifying Steel neural",new Date("2018-09-06T10:05:16.424Z"),2787,55062,"Monitored Generic Plastic Shirt",new Date("2018-09-06T08:22:21.231Z"),[]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 11525,str: "PCI Uruguay",num: 7430,date: new Date("2018-09-06T15:34:14.249Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 11526,str: "Ergonomic",num: 71554,date: new Date("2018-09-06T15:50:53.730Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 11527,str: "bypassing Auto Loan Account",num: 77275,date: new Date("2018-09-06T08:35:33.887Z"),array: [],obj: {_id: 11528,str: "Wooden Analyst Minnesota",num: 48091,date: new Date("2018-09-05T23:09:30.682Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 11529,str: "azure intuitive magenta",num: 58748,array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 11530,str: "Home",date: new Date("2018-09-06T12:08:58.836Z"),array: [32859,new Date("2018-09-06T06:23:01.371Z"),"Afghanistan hub hard drive",new Date("2018-09-06T18:15:46.256Z"),46638,new Date("2018-09-06T15:48:41.959Z"),89059,"Home Loan Account black reciprocal","Georgia reboot Pakistan Rupee"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 11531,str: "navigate",num: 95812,date: new Date("2018-09-06T07:35:41.228Z"),array: ["Utah Cambridgeshire Group",93859,new Date("2018-09-06T17:05:37.947Z"),new Date("2018-09-06T14:07:34.537Z"),"Generic approach Cambridgeshire",new Date("2018-09-05T20:25:24.123Z"),9667,[]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 11532,str: "Creek application",num: 31748,date: new Date("2018-09-06T13:38:33.660Z"),array: [10317,new Date("2018-09-06T03:15:09.687Z"),"interfaces","Tuna Florida Cayman Islands Dollar","navigating Mountain white",10610,new Date("2018-09-06T07:40:50.497Z"),["Passage knowledge user",72112,new Date("2018-09-06T13:47:17.612Z"),88515],{_id: 11533,str: "Beauty Licensed Rubber Gloves time-frame",num: 35489,date: new Date("2018-09-06T16:21:45.581Z"),array: [],obj: {_id: 11534,str: "Accounts collaboration user-centric",num: 58778,date: new Date("2018-09-06T09:00:41.202Z"),obj: {}}},[],{_id: 11535,str: "salmon",date: new Date("2018-09-06T15:02:33.364Z"),array: [],obj: {}}]});
    },

    function(coll) {
        return coll.insert({_id: 11536,str: "transmitter",num: 58112,date: new Date("2018-09-06T01:43:34.322Z"),array: [61029,new Date("2018-09-06T10:31:56.822Z"),"Ergonomic Web Iceland Krona",{_id: 11537,num: 41115,date: new Date("2018-09-06T10:32:53.205Z"),array: ["Corporate",new Date("2018-09-06T15:55:16.577Z")],obj: {_id: 11538,str: "Rubber solution",obj: {}}},79941,new Date("2018-09-06T18:57:48.382Z"),new Date("2018-09-06T15:26:02.498Z"),"Frozen parse",[],new Date("2018-09-06T15:06:18.602Z"),{_id: 11539,str: "Nevada Plastic",num: 82753,date: new Date("2018-09-06T01:22:01.339Z"),array: [],obj: {_id: 11540,num: 89980,date: new Date("2018-09-06T00:42:25.602Z"),array: [],obj: {}}},new Date("2018-09-06T07:40:48.641Z")]});
    },

    function(coll) {
        return coll.insert({_id: 11541,str: "Manager Avon",num: 16365,date: new Date("2018-09-06T00:47:02.655Z"),array: [new Date("2018-09-05T20:37:49.249Z"),17690,98110,"Belize Dollar Planner","back-end Svalbard & Jan Mayen Islands",new Date("2018-09-06T11:51:41.279Z"),71086,new Date("2018-09-06T07:50:18.517Z"),[],"parsing",[{_id: 11542,str: "maroon",num: 626,date: new Date("2018-09-06T06:51:14.551Z"),obj: {}}],5612,"Producer JSON Computer",new Date("2018-09-06T11:35:47.330Z")],obj: {_id: 11543,str: "Baby Rustic Plastic Fish Designer",date: new Date("2018-09-06T15:33:07.163Z")}});
    },

    function(coll) {
        return coll.insert({_id: 11544,str: "programming Utah",num: 58253,date: new Date("2018-09-05T20:49:17.726Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 11545,str: "scalable Home portals",num: 97298,date: new Date("2018-09-06T04:27:20.668Z"),array: [],obj: {_id: 11546,str: "synthesizing",num: 55736,date: new Date("2018-09-06T18:59:23.725Z")}});
    },

    function(coll) {
        return coll.insert({_id: 11547,str: "cohesive FTP Shirt",num: 12317,date: new Date("2018-09-06T06:23:01.467Z"),array: ["stable payment web services",new Date("2018-09-05T23:14:05.490Z"),new Date("2018-09-06T00:28:40.131Z"),153,5178,"open-source",new Date("2018-09-06T00:04:56.489Z"),"leading-edge Tennessee",{_id: 11548,str: "Liaison",date: new Date("2018-09-06T15:20:36.046Z"),array: [],obj: {_id: 11549,str: "Wooden",num: 19780,date: new Date("2018-09-05T23:07:42.087Z"),array: [{_id: 11550,str: "Data card Tonga",array: ["Directives"]},94467,6178,[]],obj: {_id: 11551,obj: {_id: 11552,num: 48657,date: new Date("2018-09-06T07:13:43.980Z"),obj: {}}}}},[],new Date("2018-09-06T10:52:19.447Z"),{_id: 11553,str: "Zloty",num: 99312,date: new Date("2018-09-06T09:39:03.902Z"),array: []},"Road"]});
    },

    function(coll) {
        return coll.insert({_id: 11554,str: "synthesizing",num: 58124,date: new Date("2018-09-06T14:56:07.792Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 11555,str: "Practical virtual",num: 35214,date: new Date("2018-09-06T10:52:54.875Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 11556,str: "Azerbaijanian Manat",date: new Date("2018-09-05T20:57:42.440Z"),array: ["Kwanza Extension",17079,new Date("2018-09-06T00:52:40.096Z"),[],{_id: 11557,num: 54594,array: ["Ergonomic Officer dynamic",12339,new Date("2018-09-06T02:38:07.920Z")]},[new Date("2018-09-06T13:58:34.898Z"),"Corporate Analyst bypass",96749,{_id: 11558,str: "Sports Planner",date: new Date("2018-09-06T18:37:42.681Z"),array: [],obj: {}}],"Florida",new Date("2018-09-06T16:02:38.911Z")],obj: {_id: 11559,str: "Berkshire Granite",num: 9936,date: new Date("2018-09-06T18:01:25.271Z"),obj: {_id: 11560,num: 72731,array: [[],26072,"Rial Omani"]}}});
    },

    function(coll) {
        return coll.insert({_id: 11561,str: "Lake Chair",num: 14238,date: new Date("2018-09-06T02:01:48.461Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 11562,str: "turquoise interactive Motorway",num: 33895,date: new Date("2018-09-06T17:22:43.739Z"),array: [],obj: {_id: 11563,str: "Focused Coordinator Corporate",num: 23845,array: [15083,new Date("2018-09-05T22:45:22.044Z"),"cultivate transmit",[],"Handmade Fresh Keyboard quantify",{_id: 11564,str: "backing up Money Market Account Home Loan Account",num: 28112,date: new Date("2018-09-06T19:48:43.641Z"),obj: {}},7713,new Date("2018-09-06T08:22:24.442Z"),{_id: 11565,str: "reintermediate Chips",num: 90627,date: new Date("2018-09-06T09:04:19.705Z"),array: [],obj: {_id: 11566,date: new Date("2018-09-05T22:36:54.084Z")}},new Date("2018-09-06T09:40:57.086Z")],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 11567,str: "Planner Monaco",num: 59163,date: new Date("2018-09-06T19:11:28.148Z"),array: [],obj: {_id: 11568,str: "Open-source hacking",num: 23667,date: new Date("2018-09-06T01:29:20.957Z"),array: [],obj: {_id: 11569,str: "capability JSON Mexican Peso Mexican Unidad de Inversion (UDI)",num: 70420,date: new Date("2018-09-06T01:15:21.574Z"),array: ["users Credit Card Account",{_id: 11570,num: 60562,date: new Date("2018-09-05T21:38:04.450Z"),array: [],obj: {}},[96007,27211,"Bacon Assistant extensible",[new Date("2018-09-06T00:52:43.701Z"),new Date("2018-09-06T06:29:00.165Z"),5986,{_id: 11571,str: "New Mexico",obj: {}},new Date("2018-09-06T19:09:06.143Z"),92466],new Date("2018-09-06T07:18:04.866Z"),"Bulgaria Multi-channelled RSS",9443],1253,[79733],"South Carolina open-source Credit Card Account","SSL"]}}});
    },

    function(coll) {
        return coll.insert({_id: 11572,str: "THX integrated digital",num: 19207,array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 11573,str: "Pants integrated generating",num: 243,array: [21755,new Date("2018-09-06T15:45:29.464Z"),"Villages Isle","New York Agent synergistic",new Date("2018-09-05T20:53:03.826Z"),50558,{_id: 11574,num: 89277,date: new Date("2018-09-06T06:14:24.559Z"),array: [new Date("2018-09-06T19:27:08.085Z"),59954,new Date("2018-09-06T15:54:57.722Z")],obj: {_id: 11575,str: "Investment Account parsing open system",num: 32527,date: new Date("2018-09-06T00:59:16.093Z"),obj: {}}},[],["open-source","synthesize Kiribati",{_id: 11576,str: "collaborative Cambridgeshire",num: 3959,date: new Date("2018-09-06T00:29:05.658Z"),array: [60905],obj: {}},75106,[]]],obj: {_id: 11577,num: 65605,date: new Date("2018-09-06T05:59:11.793Z"),obj: {_id: 11578,str: "cross-platform",num: 79329,array: []}}});
    },

    function(coll) {
        return coll.insert({_id: 11579,str: "Georgia asymmetric Falkland Islands Pound",num: 63292,array: [34905,new Date("2018-09-06T04:43:53.202Z"),{_id: 11580,date: new Date("2018-09-06T01:01:07.293Z"),array: [],obj: {}},"Customer Checking Account",new Date("2018-09-05T20:38:53.694Z"),{_id: 11581,str: "magenta Uzbekistan Sum",array: [[[],"Investor",22269],{_id: 11582,str: "interactive",num: 61800,date: new Date("2018-09-05T20:51:25.531Z"),obj: {_id: 11583,str: "6th generation Seamless neural-net",num: 69206,date: new Date("2018-09-06T08:54:07.921Z"),array: [],obj: {_id: 11584,str: "Alabama toolset didactic",date: new Date("2018-09-05T20:37:49.019Z"),array: ["strategic","calculate alarm Cambridgeshire"]}}}],obj: {}},new Date("2018-09-06T09:00:06.470Z"),new Date("2018-09-06T08:18:45.549Z"),83535,new Date("2018-09-06T10:13:32.665Z"),{_id: 11585,num: 27857,date: new Date("2018-09-06T04:55:18.037Z")},72616],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 11586,str: "Incredible Metal Keyboard payment",num: 16223,date: new Date("2018-09-06T01:41:49.910Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 11587,str: "systemic Wells",num: 83545,date: new Date("2018-09-06T06:30:52.809Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 11588,str: "fuchsia Chair",num: 78316,date: new Date("2018-09-05T22:34:09.005Z"),array: [],obj: {_id: 11589,str: "functionalities synthesize Fresh",num: 26236,date: new Date("2018-09-06T17:28:57.548Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 11590,num: 67399,date: new Date("2018-09-06T13:31:06.465Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 11591,str: "generate",num: 58210,date: new Date("2018-09-06T13:46:18.750Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 11592,str: "Taka interactive",num: 91112,date: new Date("2018-09-06T10:48:59.353Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 11593,str: "Buckinghamshire TCP mint green",num: 72559,date: new Date("2018-09-06T17:04:49.070Z"),array: [new Date("2018-09-05T21:46:24.536Z"),{_id: 11594,num: 9514,date: new Date("2018-09-06T11:47:42.578Z"),array: [],obj: {_id: 11595,str: "e-commerce Plastic",num: 97254,array: [27246,91531,"circuit",81722,"New Zealand"],obj: {_id: 11596,str: "Moroccan Dirham",date: new Date("2018-09-05T21:17:39.565Z"),obj: {_id: 11597,str: "green Camp",num: 2353,date: new Date("2018-09-06T06:01:36.063Z"),obj: {}}}}},new Date("2018-09-06T19:49:12.396Z"),new Date("2018-09-06T10:33:42.585Z"),"Credit Card Account Bedfordshire",[new Date("2018-09-06T16:14:38.420Z")],"Books","transmit incubate Checking Account",new Date("2018-09-05T23:36:20.048Z"),"Incredible Wooden Gloves Assurance best-of-breed"]});
    },

    function(coll) {
        return coll.insert({_id: 11598,str: "Configurable Steel Integration",num: 61105,date: new Date("2018-09-06T06:29:47.019Z"),array: [[15620,"calculating","Handmade Granite Sausages"],new Date("2018-09-05T22:26:24.234Z"),new Date("2018-09-06T01:22:44.481Z"),"Sri Lanka Rupee Keyboard 24/365",[],1835,79948,new Date("2018-09-06T15:55:38.163Z"),[],12470,19376],obj: {_id: 11599,str: "Jordan Checking Account",num: 42802,date: new Date("2018-09-06T13:03:37.353Z")}});
    },

    function(coll) {
        return coll.insert({_id: 11600,str: "hacking",num: 79343,date: new Date("2018-09-06T04:34:33.584Z"),array: [95905,new Date("2018-09-06T09:39:22.192Z"),"repurpose wireless white",58167,94294,new Date("2018-09-06T17:42:38.873Z"),{_id: 11601,str: "extend Incredible Wooden Towels",num: 10950,date: new Date("2018-09-06T09:30:36.156Z"),array: [],obj: {_id: 11602,str: "microchip",num: 58387,date: new Date("2018-09-06T10:04:10.680Z"),array: [[14002,"artificial intelligence Senior"],{_id: 11603,str: "purple blue",array: [new Date("2018-09-06T02:59:35.011Z")],obj: {}},new Date("2018-09-06T02:16:02.921Z")]}},[],18456,new Date("2018-09-06T12:28:20.352Z"),"Cameroon","payment Salad connecting"],obj: {_id: 11604,date: new Date("2018-09-06T17:11:31.901Z"),obj: {_id: 11605,date: new Date("2018-09-06T17:57:03.295Z"),array: [{_id: 11606,str: "Sleek Falkland Islands (Malvinas)",num: 91348,date: new Date("2018-09-06T18:38:43.741Z"),obj: {}},[],79577],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 11607,date: new Date("2018-09-06T01:52:33.438Z"),array: [],obj: {_id: 11608,str: "XML black disintermediate",num: 30608,date: new Date("2018-09-06T00:03:16.542Z"),array: [new Date("2018-09-05T21:05:59.337Z"),new Date("2018-09-06T06:16:06.970Z"),19134,[],"New Jersey",["best-of-breed programming Assistant",9892],"Circles",[],new Date("2018-09-05T20:20:46.386Z"),70459,33540],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 11609,str: "Synergized redundant",num: 14567,array: [],obj: {_id: 11610,str: "viral",num: 56101,date: new Date("2018-09-05T21:56:17.916Z"),array: [[],"Tugrik azure",new Date("2018-09-06T18:31:01.711Z"),{_id: 11611,str: "Assistant Namibia",num: 66095,date: new Date("2018-09-05T21:27:52.209Z"),array: ["whiteboard Tasty Tuna",new Date("2018-09-06T08:07:49.699Z")],obj: {_id: 11612,str: "Awesome",num: 21009,date: new Date("2018-09-06T05:01:03.988Z"),array: [],obj: {}}},new Date("2018-09-06T16:01:30.356Z"),41091,[35503,{_id: 11613,date: new Date("2018-09-06T13:01:03.365Z"),array: []},new Date("2018-09-06T09:49:34.636Z")],57046,new Date("2018-09-06T11:19:42.015Z"),["Massachusetts channels seize",85374],"Maldives architect"],obj: {_id: 11614,num: 85701,date: new Date("2018-09-06T01:49:07.576Z")}}});
    },

    function(coll) {
        return coll.insert({_id: 11615,str: "Saudi Arabia Shoes Handmade Frozen Bike",num: 89449,date: new Date("2018-09-06T00:16:23.065Z"),array: [new Date("2018-09-06T06:52:20.242Z"),"Creative project Granite","connecting Monitored Vision-oriented",5036,84892,new Date("2018-09-06T18:46:39.846Z"),new Date("2018-09-06T13:06:07.213Z"),"Branding",[],"Mississippi Rhode Island",{_id: 11616,str: "Handcrafted Fantastic Steel Chips Customer",num: 85741,date: new Date("2018-09-06T10:18:16.994Z"),array: [],obj: {}},54574,3913,[new Date("2018-09-06T01:26:25.861Z")]],obj: {_id: 11617,num: 75228,date: new Date("2018-09-06T18:53:07.899Z"),array: [],obj: {_id: 11618,str: "Cambridgeshire Avon contingency",num: 44541,array: []}}});
    },

    function(coll) {
        return coll.insert({_id: 11619,str: "integrated back up",num: 50597,date: new Date("2018-09-06T12:10:53.801Z"),array: [72193,"Oklahoma",[],84274,new Date("2018-09-06T06:19:39.785Z"),new Date("2018-09-05T22:21:48.490Z"),96243,"productivity mindshare",new Date("2018-09-06T10:59:05.418Z"),34761,"Coordinator XML haptic",17953],obj: {_id: 11620,num: 44909,array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 11621,str: "ROI New Mexico",num: 11643,date: new Date("2018-09-06T06:55:30.971Z"),array: [44722,"Money Market Account",79546,new Date("2018-09-06T15:41:17.230Z"),{_id: 11622,str: "Fords Guadeloupe e-commerce",num: 81931,date: new Date("2018-09-06T13:49:47.551Z"),obj: {}},new Date("2018-09-06T13:03:11.900Z"),new Date("2018-09-06T12:23:22.466Z"),"Incredible",{_id: 11623,str: "Parkway Supervisor Health",array: [],obj: {_id: 11624,date: new Date("2018-09-06T14:22:54.887Z"),array: [],obj: {_id: 11625,str: "Belize Dollar SSL Springs",num: 41845,date: new Date("2018-09-06T12:50:44.803Z"),array: [{_id: 11626,str: "capacitor Steel Credit Card Account",num: 1160,date: new Date("2018-09-06T14:45:52.700Z"),obj: {}},"hacking Saint Helena","Expressway"]}}},["Extension open-source",new Date("2018-09-06T00:08:51.009Z"),new Date("2018-09-06T05:07:18.067Z"),26079,45658,74991]],obj: {_id: 11627,num: 30018,array: [[]]}});
    },

    function(coll) {
        return coll.insert({_id: 11628,str: "Maine explicit",num: 29157,date: new Date("2018-09-06T01:09:42.411Z"),array: ["invoice US Dollar",8402,"Handcrafted Designer override",new Date("2018-09-06T03:04:38.497Z"),[47462,new Date("2018-09-06T13:44:19.035Z"),new Date("2018-09-06T03:30:59.894Z"),new Date("2018-09-06T05:15:44.386Z"),15434,{_id: 11629,str: "bi-directional",num: 27681,date: new Date("2018-09-06T04:40:00.891Z"),obj: {_id: 11630,str: "applications payment sticky",num: 53698,array: []}},{_id: 11631,str: "Venezuela leverage",num: 44398,date: new Date("2018-09-06T06:14:32.838Z"),array: [],obj: {}}],87834,847]});
    },

    function(coll) {
        return coll.insert({_id: 11632,str: "Producer networks",num: 65053,date: new Date("2018-09-06T09:42:00.534Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 11633,str: "Maryland e-commerce",num: 5268,date: new Date("2018-09-06T15:55:47.793Z"),array: [58047,new Date("2018-09-06T02:27:36.798Z"),"Handcrafted","Organized user-centric",69259,new Date("2018-09-06T17:24:54.133Z"),new Date("2018-09-06T13:24:37.285Z"),new Date("2018-09-06T02:29:39.258Z"),{_id: 11634,str: "Factors",num: 75801,date: new Date("2018-09-05T20:07:47.657Z"),array: [],obj: {_id: 11635,num: 86199,array: [6206,"back up payment eco-centric"],obj: {}}},19590,[],{_id: 11636,num: 21648,array: ["transmit",[]],obj: {_id: 11637,str: "Equatorial Guinea indexing"}},19116],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 11638,num: 69975,date: new Date("2018-09-06T10:06:57.772Z"),array: [],obj: {_id: 11639,num: 67664,date: new Date("2018-09-06T00:29:26.540Z"),array: ["invoice explicit optical",27350,new Date("2018-09-06T08:45:23.252Z"),74685,[],new Date("2018-09-06T09:11:37.105Z"),{_id: 11640,str: "real-time Chicken",num: 17182,date: new Date("2018-09-06T07:27:37.965Z"),array: [["user-centric"],"product Liberian Dollar user-facing",new Date("2018-09-06T06:34:42.177Z"),12470,"SCSI back up",93978,new Date("2018-09-05T20:48:29.116Z")],obj: {_id: 11641,str: "Martinique Bike",num: 47010,date: new Date("2018-09-06T11:51:25.355Z"),array: [],obj: {}}}],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 11642,str: "incremental",num: 64111,date: new Date("2018-09-06T13:32:03.136Z"),array: [52060,"quantify",["mobile",new Date("2018-09-06T03:29:01.041Z"),{_id: 11643,str: "Rustic",num: 15987,date: new Date("2018-09-06T08:04:19.590Z"),array: [new Date("2018-09-05T22:10:30.392Z")],obj: {_id: 11644,str: "salmon",num: 84545,date: new Date("2018-09-06T09:35:15.571Z"),obj: {}}},62696],51539,86035,[],{_id: 11645,date: new Date("2018-09-05T22:39:11.028Z"),array: []},"Kip Uzbekistan ROI",58392,[],new Date("2018-09-05T22:54:06.219Z"),"ADP"],obj: {_id: 11646,str: "interfaces yellow Plastic",num: 25815,array: [{_id: 11647,num: 72347,obj: {_id: 11648,num: 33947,array: [],obj: {}}},new Date("2018-09-06T16:16:00.261Z")]}});
    },

    function(coll) {
        return coll.insert({_id: 11649,str: "Turnpike backing up",num: 2189,date: new Date("2018-09-06T13:56:10.970Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 11650,str: "New Hampshire open-source monetize",num: 93453,array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 11651,str: "explicit",num: 25283,date: new Date("2018-09-06T13:09:39.586Z"),array: [],obj: {_id: 11652,str: "Outdoors Decentralized Wooden",date: new Date("2018-09-06T08:44:27.206Z"),array: [{_id: 11653,num: 86787,date: new Date("2018-09-06T05:03:48.675Z"),obj: {}},"logistical viral","Concrete Officer","system",new Date("2018-09-06T12:48:16.694Z"),28663,new Date("2018-09-06T00:22:34.109Z"),[new Date("2018-09-06T09:38:16.890Z")],70099,{_id: 11654,str: "mesh",num: 29336,array: [],obj: {}},[[95170,"e-tailers enable"]],new Date("2018-09-05T20:52:40.856Z"),[],new Date("2018-09-06T14:51:58.585Z")],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 11655,str: "Neck SMS",num: 59555,date: new Date("2018-09-06T13:16:58.878Z"),obj: {_id: 11656,num: 91343,date: new Date("2018-09-06T04:44:05.860Z"),array: ["Personal Loan Account virtual payment",1537,"Gloves Dynamic Unbranded",new Date("2018-09-06T19:27:18.513Z"),"open-source",new Date("2018-09-06T12:02:36.659Z"),{_id: 11657,str: "neural networks",num: 7275,date: new Date("2018-09-06T16:06:45.052Z"),array: [],obj: {_id: 11658,str: "Turks and Caicos Islands synthesize",num: 57674,date: new Date("2018-09-06T08:50:12.710Z"),obj: {_id: 11659,str: "Manors",num: 45254,array: []}}},36401,22871,"Steel",[],"Intelligent"],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 11660,str: "plum",num: 94568,date: new Date("2018-09-05T20:47:08.010Z"),array: [],obj: {_id: 11661,str: "enhance",num: 68971,date: new Date("2018-09-06T10:38:27.903Z"),array: [new Date("2018-09-06T01:01:39.374Z"),new Date("2018-09-06T19:04:01.287Z"),65659,2195,new Date("2018-09-06T14:44:38.562Z"),[],"back up Tactics","Balanced",{_id: 11662,str: "Iran toolset",num: 94101,date: new Date("2018-09-06T10:56:05.034Z"),array: [[],87123,20718,57910,[]],obj: {_id: 11663,date: new Date("2018-09-05T23:44:26.309Z"),array: [{_id: 11664,num: 48128,array: ["deposit JBOD",new Date("2018-09-06T07:32:32.443Z")],obj: {}},new Date("2018-09-06T07:42:12.017Z")],obj: {}}},{_id: 11665,str: "alliance Shoals",num: 54408,date: new Date("2018-09-06T15:58:12.365Z"),obj: {}},new Date("2018-09-06T18:04:26.480Z")]}});
    },

    function(coll) {
        return coll.insert({_id: 11666,str: "Incredible Assistant",num: 19779,date: new Date("2018-09-06T04:30:13.927Z")});
    },

    function(coll) {
        return coll.insert({_id: 11667,str: "protocol",num: 66457,date: new Date("2018-09-06T00:40:52.411Z")});
    },

    function(coll) {
        return coll.insert({_id: 11668,str: "Spur Small parse",num: 82272,date: new Date("2018-09-06T18:33:40.604Z"),array: [],obj: {_id: 11669,num: 47768,array: [3864,[33830,"Savings Account online"],new Date("2018-09-06T01:54:16.191Z"),26125,new Date("2018-09-06T12:03:41.675Z"),{_id: 11670,str: "Latvia CSS",date: new Date("2018-09-05T22:43:06.764Z"),array: ["intranet Handmade Metal Pizza discrete","International",new Date("2018-09-05T19:59:45.116Z")],obj: {_id: 11671,str: "Handcrafted Fresh Tuna",num: 81731,date: new Date("2018-09-06T07:40:27.344Z")}},"revolutionary array",{_id: 11672,str: "Usability",num: 52646,date: new Date("2018-09-06T19:27:26.911Z"),array: [],obj: {}},41809,[28538,{_id: 11673,array: [],obj: {}}]]}});
    },

    function(coll) {
        return coll.insert({_id: 11674,str: "granular Chad Cambridgeshire",num: 96105,date: new Date("2018-09-06T17:19:23.867Z"),array: [],obj: {_id: 11675,str: "optimizing",num: 72188,date: new Date("2018-09-06T07:20:45.539Z"),obj: {_id: 11676,str: "Nevada Steel Salad",num: 18489,date: new Date("2018-09-06T08:42:06.079Z"),array: [new Date("2018-09-06T18:50:13.207Z"),"Investment Account Legacy modular",82949,{_id: 11677,str: "Awesome Rubber Mouse open-source whiteboard",date: new Date("2018-09-06T13:07:16.214Z"),array: [[],{_id: 11678,str: "open-source engineer",num: 38743,obj: {_id: 11679,num: 42310,date: new Date("2018-09-06T19:08:27.610Z"),array: [31312,{_id: 11680,num: 54560,array: [],obj: {_id: 11681,date: new Date("2018-09-06T17:28:07.287Z"),obj: {}}}]}},new Date("2018-09-05T20:14:38.636Z"),{_id: 11682,str: "Indiana olive parsing",date: new Date("2018-09-06T19:31:28.153Z")},[]],obj: {_id: 11683,str: "mint green zero administration Creative",num: 98283,array: [new Date("2018-09-05T20:06:21.668Z"),"Valleys Egyptian Pound Concrete"],obj: {}}},new Date("2018-09-05T21:04:43.681Z"),new Date("2018-09-06T19:01:31.372Z"),99053,"port e-business",[14667],"Concrete"]}}});
    },

    function(coll) {
        return coll.insert({_id: 11684,str: "Electronics",num: 47815,date: new Date("2018-09-06T01:12:33.390Z"),array: [20446,50768,"Loaf Right-sized",new Date("2018-09-06T10:15:01.789Z"),"programming invoice",new Date("2018-09-06T05:33:31.027Z"),[],["actuating PCI",96817],"port Planner object-oriented",new Date("2018-09-06T02:54:09.951Z"),81373,"lavender Customer Networked",{_id: 11685,str: "Berkshire Delaware",num: 38582,date: new Date("2018-09-06T11:36:21.187Z"),array: [],obj: {_id: 11686,str: "silver",date: new Date("2018-09-06T06:56:34.238Z"),array: [new Date("2018-09-06T14:10:25.957Z")],obj: {_id: 11687,str: "deposit Computers",num: 18374,array: []}}}],obj: {_id: 11688,str: "Books web-enabled",date: new Date("2018-09-06T18:14:26.196Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 11689,str: "Optional Chips",num: 45179,date: new Date("2018-09-06T05:09:49.496Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 11690,str: "1080p Licensed Intelligent",num: 6417,date: new Date("2018-09-06T05:01:53.451Z"),array: [[61914],61425,new Date("2018-09-06T08:08:38.386Z"),"Ergonomic Shoes",new Date("2018-09-06T00:13:52.918Z"),"Specialist",new Date("2018-09-06T07:22:50.397Z"),{_id: 11691,str: "Small",num: 9079,date: new Date("2018-09-06T11:22:52.534Z"),obj: {_id: 11692,num: 74987,date: new Date("2018-09-06T13:28:20.754Z"),array: [],obj: {}}},"infomediaries Books",22107,[]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 11693,date: new Date("2018-09-06T19:23:22.140Z"),array: [9189,27304,new Date("2018-09-05T23:05:51.341Z"),new Date("2018-09-06T19:33:16.039Z"),new Date("2018-09-06T09:37:47.995Z"),{_id: 11694,str: "Buckinghamshire Buckinghamshire background",num: 20255,date: new Date("2018-09-06T09:20:15.260Z"),array: ["Radial Borders",{_id: 11695,str: "mindshare Integration",num: 50623,date: new Date("2018-09-06T14:28:20.680Z"),obj: {_id: 11696,str: "solid state",num: 67923,array: [],obj: {}}},"syndicate","programming neural Small Rubber Chips"]},"methodical TCP Refined",[],[],54195,"Washington Steel"],obj: {_id: 11697,str: "lavender",num: 90523,date: new Date("2018-09-06T01:25:26.796Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 11698,str: "payment Investment Account Burgs",num: 84599,date: new Date("2018-09-06T00:38:43.270Z"),array: [],obj: {_id: 11699,str: "markets deposit",num: 72610,date: new Date("2018-09-06T14:35:15.826Z"),array: ["Avon Incredible radical",new Date("2018-09-06T00:11:15.578Z"),[],90534,new Date("2018-09-06T14:44:00.427Z"),53666,60504,{_id: 11700,str: "New Israeli Sheqel",num: 53805,array: [[]],obj: {}},"THX Virtual",[25172],new Date("2018-09-05T20:27:17.177Z"),new Date("2018-09-06T00:54:48.660Z"),"innovative interface Nebraska"],obj: {_id: 11701,num: 93678,date: new Date("2018-09-05T22:57:52.285Z"),array: []}}});
    },

    function(coll) {
        return coll.insert({_id: 11702,date: new Date("2018-09-06T08:25:54.642Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 11703,str: "Rustic",num: 35745,date: new Date("2018-09-06T19:24:25.242Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 11704,str: "calculate Developer",num: 27291,date: new Date("2018-09-06T06:53:25.842Z"),array: ["Representative leading-edge Analyst",new Date("2018-09-05T21:12:58.084Z"),86225,[],new Date("2018-09-06T10:44:08.581Z"),"frictionless",28540,73663,[48685],"deposit Intelligent Metal Car calculate",new Date("2018-09-06T04:00:09.192Z"),[],{_id: 11705,str: "redefine invoice",num: 34065,date: new Date("2018-09-06T11:24:24.556Z"),array: [],obj: {}}],obj: {_id: 11706,str: "Oregon",num: 39824,date: new Date("2018-09-06T02:27:25.068Z"),array: ["program",{_id: 11707,str: "Frozen compress orange",date: new Date("2018-09-05T19:56:26.105Z"),obj: {}},85436],obj: {_id: 11708,date: new Date("2018-09-05T23:22:00.743Z")}}});
    },

    function(coll) {
        return coll.insert({_id: 11709,str: "input Iceland Krona",num: 7125,date: new Date("2018-09-06T15:50:13.077Z"),array: [[],new Date("2018-09-05T22:31:35.041Z"),{_id: 11710,str: "parsing",num: 52438,date: new Date("2018-09-06T19:52:20.352Z"),array: [],obj: {_id: 11711,num: 34960,array: [],obj: {}}},"Pants",{_id: 11712,num: 49619,date: new Date("2018-09-06T03:42:42.370Z"),array: [31120]},"Pennsylvania silver",[],new Date("2018-09-06T18:30:50.096Z"),[66454],new Date("2018-09-05T22:30:54.967Z"),{_id: 11713,str: "bandwidth instruction set hard drive",num: 17275,date: new Date("2018-09-06T01:58:22.690Z"),obj: {}},"Avon empower"],obj: {_id: 11714,array: [45658,[],{_id: 11715,str: "firewall",date: new Date("2018-09-06T02:35:11.605Z"),array: [new Date("2018-09-06T12:07:06.132Z"),[],"Bacon",66862]}],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 11716,str: "local area network",num: 8072,date: new Date("2018-09-06T03:52:43.561Z"),array: [60271,"Internal Specialist","Intuitive Junctions",new Date("2018-09-06T15:40:19.941Z"),new Date("2018-09-06T14:37:43.707Z"),"Springs Practical",7258,new Date("2018-09-06T14:59:44.008Z"),new Date("2018-09-06T01:30:27.017Z"),{_id: 11717,str: "engage parallelism",date: new Date("2018-09-06T01:06:39.672Z"),array: [],obj: {}},new Date("2018-09-06T10:05:05.072Z")],obj: {_id: 11718,str: "port",num: 84162,date: new Date("2018-09-06T19:13:45.303Z"),array: ["District online",{_id: 11719,num: 56390,array: [],obj: {}},[{_id: 11720,str: "fault-tolerant PCI Metal",num: 5657,array: []},18367],[]]}});
    },

    function(coll) {
        return coll.insert({_id: 11721,str: "envisioneer Bedfordshire cross-platform",num: 11538,date: new Date("2018-09-06T13:20:13.535Z"),array: [58190,"index payment","niches synergistic Future",new Date("2018-09-06T16:49:09.880Z"),new Date("2018-09-06T06:30:23.721Z"),{_id: 11722,str: "payment multi-byte Oklahoma",num: 65589,date: new Date("2018-09-06T14:33:05.073Z"),array: [],obj: {}},new Date("2018-09-05T20:43:22.684Z"),new Date("2018-09-06T14:51:40.738Z"),"matrix Latvian Lats",64011,81661,new Date("2018-09-06T18:03:35.906Z")],obj: {_id: 11723,str: "Crossroad optimizing",num: 81171,date: new Date("2018-09-06T10:49:10.931Z"),array: [],obj: {_id: 11724,date: new Date("2018-09-06T06:20:18.284Z")}}});
    },

    function(coll) {
        return coll.insert({_id: 11725,str: "Junctions Generic Steel Car",num: 97181,date: new Date("2018-09-06T14:44:39.797Z"),array: [],obj: {_id: 11726,str: "hacking Shoal mindshare",date: new Date("2018-09-05T22:16:05.589Z"),array: [new Date("2018-09-06T13:29:29.879Z"),24385,88696,new Date("2018-09-05T19:55:56.787Z"),new Date("2018-09-05T20:17:41.050Z"),"Ergonomic Wooden Ball",57766,"feed","auxiliary Avon",[new Date("2018-09-06T04:08:06.721Z"),[90892,"Buckinghamshire optimize Towels"],62270,"digital Manager"]],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 11727,str: "Brand Landing Plaza",date: new Date("2018-09-06T17:51:35.742Z"),array: [],obj: {_id: 11728,str: "synthesize",num: 3195,date: new Date("2018-09-06T06:30:30.522Z"),array: [],obj: {_id: 11729,array: [],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 11730,str: "Ramp Frozen Soft",num: 42789,date: new Date("2018-09-06T19:23:38.930Z"),array: [],obj: {_id: 11731,str: "FTP Avon deposit",date: new Date("2018-09-06T00:02:12.953Z"),array: ["microchip instruction set","payment",new Date("2018-09-06T06:00:32.753Z"),new Date("2018-09-06T02:25:29.979Z"),90988,["Spain",32758],{_id: 11732,str: "Centralized protocol evolve",num: 7659,date: new Date("2018-09-06T14:39:55.757Z"),array: [],obj: {}},"toolset",new Date("2018-09-06T08:54:54.191Z"),"Cambridgeshire disintermediate"],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 11733,str: "Investment Account Pants",num: 51153,array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 11734,str: "Automotive",date: new Date("2018-09-06T00:41:16.348Z"),array: [],obj: {_id: 11735,str: "Mauritius",date: new Date("2018-09-05T23:47:58.265Z"),array: [1053,"cohesive Bedfordshire Dynamic",new Date("2018-09-06T12:51:21.072Z"),new Date("2018-09-06T00:31:51.976Z"),[],97821,{_id: 11736,str: "HDD Tasty Home Loan Account",num: 5298,date: new Date("2018-09-06T09:57:48.328Z"),array: ["Cloned cohesive mobile",74623,"Hong Kong Dollar Netherlands"],obj: {}},new Date("2018-09-05T23:56:20.448Z"),49972,new Date("2018-09-06T13:31:32.960Z")]}});
    },

    function(coll) {
        return coll.insert({_id: 11737,str: "Indiana",num: 17584,date: new Date("2018-09-06T10:35:33.719Z"),array: ["Personal Loan Account Buckinghamshire",578,99870,"Thailand user-centric Re-contextualized",new Date("2018-09-06T09:47:43.946Z"),new Date("2018-09-05T20:28:25.116Z"),"Wooden Future Fundamental","maximized mint green Illinois",new Date("2018-09-06T14:45:54.775Z"),7472]});
    },

    function(coll) {
        return coll.insert({_id: 11738,str: "optimal",num: 36755,date: new Date("2018-09-06T02:57:56.473Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 11739,str: "Automotive policy",num: 92029,date: new Date("2018-09-06T19:29:05.649Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 11740,str: "Cedi Oregon",num: 89672,date: new Date("2018-09-06T14:18:50.889Z"),array: [[],{_id: 11741,str: "deposit",num: 24842,date: new Date("2018-09-06T08:00:59.606Z"),array: [],obj: {_id: 11742,str: "Handmade Soft Car Soft",num: 83155,array: [new Date("2018-09-06T12:28:51.230Z"),new Date("2018-09-06T08:43:41.389Z"),71473,[],"synthesizing Product relationships"],obj: {}}},{_id: 11743,date: new Date("2018-09-06T15:50:55.732Z"),array: [92578,"Tasty Antarctica (the territory South of 60 deg S)"]},75824,"groupware maroon viral",{_id: 11744,str: "Liaison quantifying",num: 25426,date: new Date("2018-09-06T01:19:56.166Z"),array: [],obj: {}},{_id: 11745,str: "Hollow Montana",num: 51362,date: new Date("2018-09-06T07:18:15.844Z")},"Books",19783],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 11746,str: "Proactive Fresh Falkland Islands Pound",num: 228,date: new Date("2018-09-05T20:46:40.208Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 11747,str: "Borders",num: 79987,date: new Date("2018-09-06T11:51:45.141Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 11748,num: 12124,date: new Date("2018-09-06T04:47:59.771Z"),array: [12200,"Accountability blue Rustic",5310,new Date("2018-09-06T00:35:20.847Z"),{_id: 11749,str: "Ford THX",num: 73444,date: new Date("2018-09-06T15:54:43.228Z"),array: [],obj: {}},new Date("2018-09-05T22:37:28.069Z"),"enterprise Bike granular","Baby Global"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 11750,str: "strategic",num: 58016,date: new Date("2018-09-05T22:01:21.315Z"),array: ["Future",31636,33586,new Date("2018-09-06T06:48:29.884Z"),"methodologies hub optical",78408,new Date("2018-09-06T00:31:14.836Z"),["Guatemala compressing Avon",new Date("2018-09-06T09:49:48.320Z"),"GB",84039,22558]]});
    },

    function(coll) {
        return coll.insert({_id: 11751,str: "neural-net connect",num: 14456,date: new Date("2018-09-06T02:46:50.307Z"),array: [new Date("2018-09-06T00:32:54.919Z"),59526,{_id: 11752,str: "Electronics",num: 29710,date: new Date("2018-09-06T10:48:42.916Z"),array: [new Date("2018-09-06T15:46:30.710Z"),[],"Orchestrator"]},69418,"bypass models portals","California extend Singapore Dollar",new Date("2018-09-06T03:46:58.668Z"),78156,{_id: 11753,str: "iterate",num: 5239,date: new Date("2018-09-05T22:37:59.262Z"),obj: {_id: 11754,array: [[],new Date("2018-09-05T21:40:04.085Z"),new Date("2018-09-06T03:03:30.593Z")],obj: {}}},"solutions Madagascar Human",44131],obj: {_id: 11755,str: "motivating Rustic portals",num: 11439,date: new Date("2018-09-06T00:45:26.525Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 11756,str: "transmitting",num: 75481,date: new Date("2018-09-06T11:03:12.826Z"),array: [],obj: {_id: 11757,str: "mobile",num: 19767,date: new Date("2018-09-05T23:23:28.937Z"),array: [],obj: {_id: 11758,str: "Reactive Directives",num: 61555,date: new Date("2018-09-06T06:52:57.084Z"),array: [new Date("2018-09-05T21:18:41.854Z"),new Date("2018-09-06T16:10:25.994Z"),"Developer fault-tolerant","Strategist Money Market Account black",new Date("2018-09-06T15:18:54.076Z"),37815,"parsing",{_id: 11759,num: 85276,date: new Date("2018-09-06T14:24:19.965Z"),array: ["Chips Keyboard markets",58452]},"copying"]}}});
    },

    function(coll) {
        return coll.insert({_id: 11760,str: "CSS Soft Practical Steel Towels",num: 32250,date: new Date("2018-09-06T17:22:54.857Z"),array: [new Date("2018-09-06T16:41:09.379Z"),98882,{_id: 11761,str: "Borders capacitor Liberia",num: 19124,date: new Date("2018-09-06T05:45:45.011Z"),array: [],obj: {_id: 11762,str: "solution",date: new Date("2018-09-06T07:52:02.468Z"),array: [],obj: {}}},"Credit Card Account Automotive",new Date("2018-09-06T13:12:04.330Z"),{_id: 11763,obj: {_id: 11764,str: "strategy",date: new Date("2018-09-06T08:29:49.442Z"),array: [93930]}},"red",new Date("2018-09-06T03:24:31.179Z"),"Shoes structure",new Date("2018-09-06T19:46:06.469Z"),20066]});
    },

    function(coll) {
        return coll.insert({_id: 11765,str: "Jamaican Dollar Practical",date: new Date("2018-09-06T15:10:02.091Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 11766,str: "Flat cyan",num: 27391,date: new Date("2018-09-05T22:59:14.453Z"),array: [23792,"Georgia",new Date("2018-09-06T01:22:06.769Z"),16792,"Applications Avon",new Date("2018-09-06T12:02:56.763Z"),{_id: 11767,str: "British Indian Ocean Territory (Chagos Archipelago)",date: new Date("2018-09-06T03:24:17.753Z"),array: ["Mobility"],obj: {}},{_id: 11768,str: "deliverables",num: 39918,date: new Date("2018-09-06T15:52:44.206Z"),obj: {_id: 11769,str: "Fantastic Metal Table",num: 94618,array: []}},5182,21864,[],new Date("2018-09-06T01:08:17.504Z")],obj: {_id: 11770,str: "infrastructures Metal",num: 69225,obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 11771,str: "Sleek mobile",num: 34171,date: new Date("2018-09-06T12:56:09.795Z"),array: [10161,27559,43997,"zero administration","Functionality","Liaison",new Date("2018-09-06T19:06:15.223Z"),new Date("2018-09-06T03:50:49.275Z"),{_id: 11772,str: "Auto Loan Account copying",num: 65655,array: [],obj: {}}],obj: {_id: 11773,str: "transmit",num: 40038,array: [],obj: {_id: 11774,str: "visionary programming",num: 58119,date: new Date("2018-09-06T00:53:16.868Z"),array: [[[],new Date("2018-09-06T07:24:18.182Z"),{_id: 11775,date: new Date("2018-09-06T12:40:52.953Z"),obj: {}},39893,41457],"Armenian Dram Awesome Soft Bacon"]}}});
    },

    function(coll) {
        return coll.insert({_id: 11776,str: "HDD",num: 96616,array: []});
    },

    function(coll) {
        return coll.insert({_id: 11777,str: "South Carolina Borders Indonesia",num: 20761,date: new Date("2018-09-06T13:38:13.993Z"),array: [],obj: {_id: 11778,str: "Brunei Dollar",date: new Date("2018-09-06T04:10:02.638Z"),array: [new Date("2018-09-06T12:38:34.033Z"),18885,new Date("2018-09-06T18:34:34.886Z"),"Down-sized monitor Tools",6326,"navigating Cambridgeshire panel","calculate",22662,"violet",87074],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 11779,str: "backing up",num: 38000,array: [],obj: {_id: 11780,str: "transmitter",num: 82844,array: [1766,new Date("2018-09-06T19:25:47.288Z"),"Libyan Dinar","Pitcairn Islands Gorgeous Rubber Ball",94590,new Date("2018-09-05T21:18:33.732Z"),75280,"Intranet Hawaii",{_id: 11781,str: "Applications application",num: 71746,date: new Date("2018-09-06T01:24:03.055Z"),array: [],obj: {}},[{_id: 11782,str: "optimizing",num: 72504,date: new Date("2018-09-06T18:33:46.684Z"),obj: {}}],{_id: 11783,date: new Date("2018-09-06T06:00:27.596Z"),array: [new Date("2018-09-06T19:16:33.810Z"),new Date("2018-09-06T01:02:24.472Z")]},new Date("2018-09-06T14:49:14.213Z"),20777]}});
    },

    function(coll) {
        return coll.insert({_id: 11784,str: "website",num: 26819,array: [68293,29998,"Granite azure Lodge",new Date("2018-09-05T21:40:12.900Z"),[],"Borders Bedfordshire",12145,{_id: 11785,str: "teal",num: 37216,date: new Date("2018-09-06T12:01:18.648Z"),obj: {_id: 11786,str: "Kids whiteboard",num: 94966,array: [],obj: {}}},new Date("2018-09-06T06:17:42.653Z"),[]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 11787,str: "quantify copy quantifying",num: 44640,date: new Date("2018-09-06T11:17:07.088Z"),array: [],obj: {_id: 11788,str: "Handcrafted Soft Fish",num: 88991,date: new Date("2018-09-06T04:19:04.037Z"),array: [[[]],95431,"networks",{_id: 11789,str: "program",date: new Date("2018-09-06T02:23:52.213Z"),array: [],obj: {}},new Date("2018-09-06T12:54:38.409Z"),new Date("2018-09-06T07:38:56.789Z"),62190,new Date("2018-09-06T15:43:33.083Z"),"Forest Fish Burundi",["bandwidth",57772],21233,new Date("2018-09-06T03:49:01.632Z"),"red"],obj: {_id: 11790,num: 22259,date: new Date("2018-09-06T13:36:06.317Z")}}});
    },

    function(coll) {
        return coll.insert({_id: 11791,str: "Bike",num: 72822,date: new Date("2018-09-06T18:19:07.145Z"),array: ["Accounts Applications",new Date("2018-09-06T12:27:40.997Z"),{_id: 11792,str: "24/365 Gardens fuchsia",num: 14196,date: new Date("2018-09-05T23:49:52.914Z"),array: [],obj: {_id: 11793,str: "Bacon overriding",num: 35714,date: new Date("2018-09-06T11:01:57.220Z"),array: []}},"Ball Democratic People's Republic of Korea strategic",41044,55018,65566,new Date("2018-09-06T00:36:28.024Z"),new Date("2018-09-06T18:08:31.633Z"),"Savings Account digital Home Loan Account"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 11794,str: "Chair front-end",num: 46872,date: new Date("2018-09-06T08:08:26.341Z"),array: [87945,"Fantastic",new Date("2018-09-06T05:10:50.796Z"),new Date("2018-09-06T09:00:10.842Z"),["open-source solid state","US Dollar"],33143,{_id: 11795,str: "Director Hawaii Mauritania",num: 11822,date: new Date("2018-09-06T06:45:05.888Z"),obj: {}},[37573,"Plastic withdrawal New Jersey"],94084],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 11796,str: "Avon",num: 2540,array: [new Date("2018-09-06T09:50:25.752Z"),96895,"Wyoming","Accounts envisioneer Senior",[],new Date("2018-09-06T07:26:12.693Z"),1680,88207,[],"Handmade Fresh Soap Points",{_id: 11797,str: "deposit monitor azure",num: 77275,date: new Date("2018-09-06T01:40:44.281Z"),array: [new Date("2018-09-06T07:00:11.713Z")],obj: {_id: 11798,num: 16262,date: new Date("2018-09-06T02:16:57.984Z"),array: [{_id: 11799,str: "Borders Tenge digital",num: 53220,date: new Date("2018-09-06T09:06:24.137Z"),array: []},new Date("2018-09-06T00:10:55.376Z"),"Valleys neural pixel",7365],obj: {_id: 11800,str: "Pass Regional Table",array: ["Andorra",[new Date("2018-09-06T12:01:28.855Z")],"Kansas vortals Central",[]]}}}]});
    },

    function(coll) {
        return coll.insert({_id: 11801,str: "multi-byte Optimization Garden",num: 98457,date: new Date("2018-09-06T08:14:58.410Z"),array: [new Date("2018-09-05T23:34:56.626Z"),new Date("2018-09-06T16:36:10.200Z"),24941,33169,new Date("2018-09-06T06:24:16.526Z"),"Buckinghamshire application",{_id: 11802,str: "backing up withdrawal",num: 52600,date: new Date("2018-09-06T07:25:47.399Z"),array: []},"AGP",54165,"panel",{_id: 11803,str: "Small Frozen Towels programming",num: 28037,array: [["open-source productize",new Date("2018-09-06T19:12:19.362Z")]],obj: {_id: 11804,str: "Electronics",num: 54052,date: new Date("2018-09-06T17:05:13.634Z"),array: [],obj: {_id: 11805,str: "Junction",date: new Date("2018-09-06T09:34:36.578Z"),obj: {}}}},new Date("2018-09-06T00:49:24.721Z"),[[],new Date("2018-09-06T17:11:17.237Z"),{ _id: 11806 },59628]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 11807,date: new Date("2018-09-06T19:15:59.908Z"),array: [],obj: {_id: 11808,str: "Berkshire Brand",num: 63117,date: new Date("2018-09-06T18:51:34.853Z"),array: [95514,new Date("2018-09-06T19:46:51.500Z"),13850,{_id: 11809,str: "Liaison Total Sausages",num: 65253,date: new Date("2018-09-06T04:33:41.293Z"),obj: {_id: 11810,str: "web-readiness",date: new Date("2018-09-06T18:07:36.403Z"),array: [new Date("2018-09-06T18:47:51.799Z")],obj: {}}},"Accountability invoice","Incredible web-enabled deposit","Engineer",[67071,"lime circuit connect"],{_id: 11811,str: "Distributed pixel",num: 55233,array: []},new Date("2018-09-06T13:33:12.909Z"),28089,11825,12491],obj: {_id: 11812,str: "Soap",num: 63797}}});
    },

    function(coll) {
        return coll.insert({_id: 11813,str: "Personal Loan Account",num: 17974,date: new Date("2018-09-06T08:06:45.146Z"),array: [38025,new Date("2018-09-06T19:21:46.403Z"),67017,42257,{_id: 11814,str: "incremental withdrawal",num: 56568,date: new Date("2018-09-06T16:07:25.539Z"),array: ["1080p compressing"],obj: {}},"Beauty Awesome Investment Account","Intuitive",[],new Date("2018-09-06T14:25:08.036Z"),{_id: 11815,num: 61838,date: new Date("2018-09-06T12:12:08.340Z"),array: [],obj: {_id: 11816,str: "withdrawal Hat Seychelles Rupee",date: new Date("2018-09-06T16:23:01.903Z"),obj: {}}},new Date("2018-09-06T09:08:23.669Z"),{_id: 11817,str: "Cotton plug-and-play",num: 40265,date: new Date("2018-09-06T15:02:03.029Z"),array: [],obj: {_id: 11818,num: 75322}}]});
    },

    function(coll) {
        return coll.insert({_id: 11819,str: "Global Forges District",num: 13661,date: new Date("2018-09-06T06:28:33.190Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 11820,str: "Buckinghamshire plug-and-play multi-byte",num: 66654,date: new Date("2018-09-06T00:23:30.547Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 11821,str: "migration Producer THX",num: 58716,date: new Date("2018-09-05T22:23:21.542Z"),array: ["index ubiquitous",new Date("2018-09-06T17:15:44.165Z"),"panel",new Date("2018-09-06T17:25:18.476Z"),88479,90741,"Awesome Manager","Marketing",new Date("2018-09-06T17:37:12.382Z"),[],new Date("2018-09-06T01:51:29.227Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 11822,str: "Synchronised",num: 65103,date: new Date("2018-09-06T08:10:52.598Z"),array: [],obj: {_id: 11823,str: "back up Coordinator",num: 93123,date: new Date("2018-09-05T20:34:45.078Z"),array: ["orchid orchid Networked",{_id: 11824,str: "deposit Reactive Indian Rupee",date: new Date("2018-09-06T06:02:53.922Z"),array: [new Date("2018-09-06T17:05:54.735Z"),55679,new Date("2018-09-06T17:34:30.887Z")],obj: {}},71312,"Sleek Soft Tuna",[],"real-time",34604,"granular Health calculate",[new Date("2018-09-06T13:38:02.143Z"),new Date("2018-09-05T20:19:43.758Z"),93021],new Date("2018-09-06T06:13:47.398Z"),66631,[{_id: 11825,num: 75769,date: new Date("2018-09-06T17:07:16.269Z"),array: []}]]}});
    },

    function(coll) {
        return coll.insert({_id: 11826,str: "Concrete Sleek strategize",num: 8003,date: new Date("2018-09-06T06:30:31.553Z"),array: [new Date("2018-09-06T01:47:38.757Z"),94239,"Sleek",new Date("2018-09-05T22:21:58.532Z"),87129,94803,"Practical Metal Salad Heard Island and McDonald Islands Architect",26589,[],new Date("2018-09-06T13:26:03.910Z"),"Keys interfaces"],obj: {_id: 11827,str: "Virginia",num: 84513,date: new Date("2018-09-06T15:14:20.115Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 11828,str: "Identity",num: 19023,date: new Date("2018-09-06T08:21:09.145Z"),array: ["foreground",new Date("2018-09-06T08:30:36.098Z"),45896,new Date("2018-09-05T20:11:14.403Z"),"SQL",54201,[["Avon",{_id: 11829,str: "projection Ohio Iowa",num: 32242,date: new Date("2018-09-05T21:45:04.219Z"),array: [],obj: {_id: 11830,str: "interface Tasty Fresh Bike",num: 64332,array: [80921],obj: {_id: 11831,str: "Kansas Manager",num: 29717,date: new Date("2018-09-06T09:37:48.318Z"),array: []}}},new Date("2018-09-06T02:19:17.672Z")]],new Date("2018-09-06T18:02:56.904Z"),[],{_id: 11832,num: 52903,date: new Date("2018-09-06T17:05:40.061Z"),array: ["world-class","HTTP",46661,new Date("2018-09-06T12:26:36.037Z")]},"heuristic global New Caledonia",{_id: 11833,str: "fresh-thinking Savings Account Mouse",date: new Date("2018-09-06T02:41:10.671Z"),array: [],obj: {}},{_id: 11834,str: "Kentucky Hungary",num: 69277}],obj: {_id: 11835,array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 11836,str: "Croatian Kuna Supervisor",num: 34868,date: new Date("2018-09-06T13:53:11.793Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 11837,str: "neural Venezuela",num: 52595,date: new Date("2018-09-06T05:27:22.677Z"),array: ["COM Personal Loan Account bus",67238,new Date("2018-09-06T09:11:36.637Z"),84018,"card 1080p",new Date("2018-09-06T15:03:45.924Z"),"budgetary management",{_id: 11838,str: "Saudi Riyal",num: 79844,date: new Date("2018-09-06T14:38:36.935Z"),array: [],obj: {_id: 11839,num: 55001,date: new Date("2018-09-05T23:09:39.910Z"),array: [],obj: {_id: 11840,str: "Computers extend",date: new Date("2018-09-06T11:10:24.077Z"),array: [],obj: {}}}},75235,[]]});
    },

    function(coll) {
        return coll.insert({_id: 11841,str: "invoice",num: 60291,date: new Date("2018-09-05T22:03:26.359Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 11842,str: "synergistic Refined quantifying",num: 81505,date: new Date("2018-09-06T05:53:16.343Z"),array: [new Date("2018-09-05T20:32:41.656Z"),"Kina B2B Quality","SQL Credit Card Account",30871,new Date("2018-09-06T00:36:35.249Z"),39821,[10099],"methodologies",new Date("2018-09-06T00:40:01.410Z"),{_id: 11843,num: 16637,date: new Date("2018-09-05T21:28:42.662Z"),array: [new Date("2018-09-05T21:04:41.124Z"),59579],obj: {_id: 11844,str: "initiatives Operations",date: new Date("2018-09-06T10:55:12.937Z"),array: [],obj: {}}},[],"leverage protocol"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 11845,str: "Salad auxiliary calculating",num: 7596,date: new Date("2018-09-06T14:08:28.164Z"),array: [58703,80247,new Date("2018-09-06T12:25:52.709Z"),"portal Greens Open-source",new Date("2018-09-06T16:41:51.446Z"),"executive Bedfordshire",92518,new Date("2018-09-06T11:37:14.076Z"),[{_id: 11846,str: "markets communities",num: 48321,date: new Date("2018-09-06T13:10:59.296Z"),array: [[],56085,"Bedfordshire HDD",{_id: 11847,str: "Implementation Mobility",date: new Date("2018-09-05T20:22:28.399Z"),array: [],obj: {}},{_id: 11848,str: "Refined",num: 20946,date: new Date("2018-09-06T02:36:21.909Z"),obj: {_id: 11849,num: 37091,array: [],obj: {}}}]},"Haiti","overriding"],35481],obj: {_id: 11850,str: "Developer back up",num: 97429,date: new Date("2018-09-06T03:37:22.901Z"),obj: {_id: 11851,num: 12492,date: new Date("2018-09-05T23:55:39.759Z")}}});
    },

    function(coll) {
        return coll.insert({_id: 11852,str: "Checking Account Manors",num: 46327,date: new Date("2018-09-05T23:38:05.045Z"),array: [72128,new Date("2018-09-06T07:48:17.518Z"),"Persevering Sleek Home",{_id: 11853,num: 65941,date: new Date("2018-09-06T15:28:56.275Z"),array: []},5969,"archive",[new Date("2018-09-05T21:19:28.041Z"),92192,new Date("2018-09-06T02:38:02.547Z"),"Representative HTTP",56458],{_id: 11854,str: "Borders exploit Engineer",num: 96778,date: new Date("2018-09-06T16:24:36.862Z"),obj: {_id: 11855,str: "withdrawal turn-key Coordinator",num: 98769,date: new Date("2018-09-06T05:00:25.404Z"),array: [{_id: 11856,str: "Regional withdrawal Cambridgeshire",num: 90293,date: new Date("2018-09-06T02:55:24.329Z"),array: [],obj: {}},"indexing Radial"]}},[40032,new Date("2018-09-06T18:15:25.117Z")],"hacking"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 11857,str: "Passage bandwidth-monitored",num: 12813,date: new Date("2018-09-06T04:35:09.190Z"),array: [],obj: {}});
    },

];

const indexList = [

    function(coll) {
        return coll.createIndex({"obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": 1, "obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.date": -1, "obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"str": -1});
    },

    function(coll) {
        return coll.createIndex({"date": -1, "obj.obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": 1, "str": -1});
    },

    function(coll) {
        return coll.createIndex({"date": 1, "obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": -1, "obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"num": -1});
    },

    function(coll) {
        return coll.createIndex({"str": 1, "obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": -1, "obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": -1, "obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": -1, "obj.obj.obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"num": 1});
    },

    function(coll) {
        return coll.createIndex({"num": 1, "obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"num": 1, "obj.obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"num": -1, "obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": 1, "obj.obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"str": -1, "obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": -1, "obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"str": 1, "date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": -1, "obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": 1, "obj.obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": 1, "obj.obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"str": 1, "obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": 1, "obj.obj.obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.date": 1, "obj.obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"num": 1, "obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": -1, "str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": 1, "obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": -1, "obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": 1, "date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": -1, "obj.obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": -1, "str": 1});
    },

    function(coll) {
        return coll.createIndex({"str": 1, "obj.obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": -1, "obj.obj.obj.num": 1, "obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": 1, "obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": 1, "obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"date": 1, "obj.obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": 1, "obj.obj.obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": -1, "num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": 1, "obj.obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.date": 1, "obj.obj.date": -1});
    },

];

const aggregationList = [

        [{$project: {a: { $isoWeek: { $isoDayOfWeek: { $dateToString: {date: { $dateToString: {date: new Date("2018-09-06T17:24:08.007Z"),format: "%Y-%H-%H-%u-%d-%V-%H-%L"} },onNull: { $arrayElemAt: [[{ $substrCP: ['$obj.obj.obj.str',16,15] }],82815] }} } } }, _id: 0}}],

        [{$project: {a: { $dayOfMonth: { $hour: { $month: { $dateToString: {date: new Date("2018-09-06T14:54:08.990Z"),timezone: "America/Araguaina"} } } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["Home Loan Account",{ $substrCP: ["Bridge Credit Card Account salmon",19,3] }],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Gorgeous Rubber Pants Trail",v: { $isoWeek: { $month: { $dateFromString: {dateString: "2018-09-06T10:12:07.188Z",format: "%H-%j-%G-%G-%Z-%j-%M-%H-%%",onError: { $arrayElemAt: [["Unbranded Rustic",{ $ltrim: { input: { $substrCP: ['$obj.obj.str',7,10] } } },"deposit calculate connect"],'$obj.num'] },onNull: { $toUpper: '$obj.str' }} } } }}]] }, _id: 0}}],

        [{$project: {a: { $substrCP: ["coherent visionary",8,7] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$num'],'$num'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[]] }, _id: 0}}],

        [{$project: {a: { $isoWeek: { $dayOfWeek: { $minute: { $millesecond: { $dayOfMonth: { $isoDayOfWeek: { $second: { $month: { $dateToParts: {date: { $dayOfYear: { $toDate: { $arrayToObject: [[[],['$obj.obj.num',10665],['$obj.str',"overriding"]]] } } },timezone: "Greenwich"} } } } } } } } } }, _id: 0}}],

        [{$project: {a: { $month: { $dateToParts: {date: { $dateFromParts: {year: { $indexOfArray: [{ $concatArrays: [['$obj.str',"transmitting withdrawal Gloves",'$obj.obj.str',{ $ltrim: { input: "invoice" } }],[],[{ $trim: { input: '$str' } }],[89114,'$num'],[],[]] },{ $dateToString: {date: { $dateToParts: {date: { $isoWeek: { $dateFromString: {dateString: "2018-09-06T18:59:49.643Z",format: "%V-%V-%d-%G-%z",onError: { $arrayElemAt: [["Cape connect Frozen","Oklahoma",'$obj.str'],'$obj.num'] }} } },iso8601: true} },timezone: "Pacific/Saipan",onNull: { $rtrim: {input: { $substr: [{ $substrCP: [{ $toUpper: '$str' },17,3] },6,7] },chars: "quantifying Small Bermudian Dollar (customarily known as Bermuda Dollar)"} }} }] },day: { $trunc: 20157 },hour: { $floor: '$obj.num' },millisecond: 13565} },timezone: "Asia/Harbin"} } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "deposit",v: { $millesecond: { $month: { $month: { $hour: { $isoWeek: { $dayOfMonth: { $isoDayOfWeek: { $dateToParts: {date: { $dateToString: {date: '$obj.obj.date',format: "%u-%G-%M-%H-%Z-%L-%H-%G-%H",onNull: { $arrayElemAt: [[{ $subtract: ['$obj.obj.obj.num',48947] }],{ $mod: ['$obj.obj.num',46565] }] }} },timezone: "America/Bahia"} } } } } } } } }}]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],94992] }, _id: 0}}],

        [{$project: {a: { $trim: {input: "Bouvet Island (Bouvetoya) Arizona disintermediate",chars: '$obj.str'} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["Savings Account",'$obj.str',{ $toLower: "Awesome Awesome Coordinator" }],51377] }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj.obj.obj' }, _id: 0}}],

        [{$project: {a: { $substrBytes: ["Montana",20,14] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],{ $divide: [20898,'$obj.obj.obj.num'] }] }, _id: 0}}],

        [{$project: {a: { $toLower: '$obj.obj.obj.str' }, _id: 0}}],

        [{$project: {a: { $ltrim: { input: '$obj.obj.str' } }, _id: 0}}],

        [{$project: {a: { $isoWeekYear: { $month: { $toDate: { $range: [5,18,11] } } } }, _id: 0}}],

        [{$project: {a: { $dayOfWeek: { $dayOfYear: { $isoDayOfWeek: { $dateToString: {date: new Date("2018-09-06T12:44:04.593Z"),format: "%M-%Z-%%-%d-%U"} } } } }, _id: 0}}],

        [{$project: {a: { $month: { $isoWeekYear: { $dateFromString: {dateString: "2018-09-06T19:27:06.016Z",timezone: "Pacific/Marquesas",onNull: { $reverseArray: [['$obj.obj.obj.str',true]] }} } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.str',{ $toUpper: { $substr: ["Ghana",16,2] } },'$obj.obj.str'],44843] }, _id: 0}}],

        [{$project: {a: { $range: [9,12,13] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Personal Loan Account local area network Refined",v: { $subtract: ['$obj.obj.num',63288] }}]] }, _id: 0}}],

        [{$project: {a: { $reverseArray: [[35794,'$obj.num']] }, _id: 0}}],

        [{$project: {a: { $week: { $dateFromString: {dateString: "2018-09-06T16:22:04.269Z",onNull: { $filter: {input: ['$obj.obj.str',"e-services Buckinghamshire",'$str'],as: 'prince',cond: { $not: [{ $arrayToObject: [[{k: "Maryland",v: { $hour: { $dateToParts: {date: new Date("2018-09-06T02:26:32.214Z"),timezone: "Atlantic/Faroe",iso8601: true} } }},{k: "Vermont European Unit of Account 9(E.U.A.-9) Egyptian Pound",v: false}]] }] }} }} } }, _id: 0}}],

        [{$project: {a: { $ltrim: { input: "hard drive Quetzal" } }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [['$obj.obj.obj.str',"programming"],[{ $ltrim: { input: { $toString: { $arrayElemAt: [[],'$obj.obj.num'] } } } },"Granite"],['$num',21118,78534]],useLongestLength: false} }, _id: 0}}],

        [{$project: {a: { $year: { $dayOfYear: { $dayOfMonth: { $dateToParts: {date: { $dayOfMonth: { $toDate: { $objectToArray: '$obj.obj.obj' } } },timezone: "Africa/Kigali",iso8601: false} } } } }, _id: 0}}],

        [{$project: {a: { $range: [6,7] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$obj.num',56644],[41787],[{ $trim: { input: { $rtrim: { input: { $concat: [] } } } } },'$obj.obj.obj.str'],['$obj.obj.obj.str']]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "supply-chains",v: 34105}]] }, _id: 0}}],

        [{$project: {a: { $concatArrays: [["backing up"],["Chief",'$str',{ $dateToString: {date: { $dayOfMonth: { $toDate: { $range: [20,18,19] } } },format: "%H-%U-%G-%m-%V-%%-%V",timezone: "Greenwich"} }],[{ $rtrim: { input: '$obj.obj.obj.str' } }],[{ $dateToString: {date: '$obj.obj.obj.obj.date',timezone: "Pacific/Palau",onNull: { $arrayElemAt: [['$obj.obj.obj.str',"Senior Cuban Peso Peso Convertible"],33637] }} }]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $substrBytes: ['$obj.obj.obj.str',12,0] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.obj.str',"turquoise Iceland",{ $concat: [] }],69331] }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj' }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $dayOfYear: { $minute: '$obj.date' } }, _id: 0}}],

        [{$project: {a: { $range: [4,7] }, _id: 0}}],

        [{$project: {a: { $dateFromParts: {year: { $ln: 26323 },day: { $add: [] },hour: { $pow: ['$obj.obj.num',89252] },second: '$num',millisecond: { $log10: { $add: ['$obj.obj.obj.num',41818] } }} }, _id: 0}}],

        [{$project: {a: { $dayOfMonth: { $dayOfMonth: { $second: { $dateFromString: {dateString: "2018-09-06T05:25:54.336Z",format: "%m-%m-%w-%m-%m-%L-%m-%S",timezone: "Pacific/Kosrae",onError: { $filter: {input: [],as: 'tressie',cond: { $not: [{ $zip: {inputs: [['$obj.obj.str'],["target"],[],[4680,30961],['$obj.obj.obj.num']],useLongestLength: false} }] }} }} } } } }, _id: 0}}],

        [{$project: {a: { $dayOfMonth: { $month: { $dateToString: {date: '$obj.obj.date',format: "%M-%j-%u-%Z-%%-%d-%V-%w-%Z-%z-%j",timezone: "UCT"} } } }, _id: 0}}],

        [{$project: {a: { $dateFromParts: {year: { $indexOfArray: [{ $reverseArray: [["Mall",{ $isoDayOfWeek: { $month: { $isoWeekYear: { $minute: { $year: { $millesecond: { $isoWeekYear: { $toDate: { $arrayElemAt: [[{ $toLower: "Berkshire synthesize Vatu" },'$str'],95744] } } } } } } } } },'$num']] },{ $filter: {input: [],cond: { $not: [{ $arrayToObject: [[[54929],[]]] }] }} },13] },month: { $multiply: [] },minute: { $floor: 92054 },second: { $exp: '$obj.obj.obj.num' },millisecond: { $trunc: '$obj.num' }} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["indexing Rand Loti streamline"],35466] }, _id: 0}}],

        [{$project: {a: { $toLower: { $trim: {input: '$str',chars: '$obj.obj.obj.str'} } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],[],[],[96062]]] }, _id: 0}}],

        [{$project: {a: { $substrBytes: ['$str',8,1] }, _id: 0}}],

        [{$project: {a: { $concatArrays: [["redundant turquoise"],[],[37863,'$obj.num'],[{ $year: { $second: { $isoWeekYear: { $dayOfMonth: { $isoWeek: { $dateFromString: {dateString: "2018-09-05T20:47:05.460Z",format: "%Y-%%-%S-%G-%Y-%Z-%Y-%Y-%%-%%",onError: { $arrayElemAt: [[59999,26345,40244],'$obj.obj.obj.num'] }} } } } } } }],[{ $substrCP: ['$obj.obj.obj.str',10,7] }],[]] }, _id: 0}}],

        [{$project: {a: { $trim: { input: { $toLower: "Berkshire RSS" } } }, _id: 0}}],

        [{$project: {a: { $reverseArray: [['$obj.obj.obj.str']] }, _id: 0}}],

        [{$project: {a: { $substrCP: ["Progressive",4,17] }, _id: 0}}],

        [{$project: {a: { $toString: { $zip: {inputs: [[],['$str',"SDD invoice",{ $concat: [{ $substrBytes: ["Dynamic Nebraska matrices",2,15] }] }],['$obj.num','$obj.obj.obj.num',16232],['$obj.str',{ $trim: {input: '$obj.obj.str',chars: "programming synthesize primary"} },"unleash Crescent explicit"],[{ $ltrim: { input: { $dateToString: {date: '$obj.obj.obj.obj.date',format: "%m-%S-%L-%m-%H-%Y-%M-%j-%L",timezone: "Eire",onNull: '$obj.obj.obj.str'} } } }],[37569]],useLongestLength: true} } }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [[3564],[],[]],useLongestLength: true,defaults: [true]} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$num'],['$str'],[33456,94683,{ $trunc: 3476 },'$obj.obj.num'],[{ $rtrim: {input: '$str',chars: { $dateToString: { date: new Date("2018-09-06T13:01:37.007Z") } }} }]]] }, _id: 0}}],

        [{$project: {a: { $ltrim: { input: "Credit Card Account" } }, _id: 0}}],

        [{$project: {a: { $map: {input: [],in: { $exp: 39695 }} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Fresh Alaska",v: false}]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "engineer",v: false},{k: "transmit Sports",v: { $rtrim: {input: { $toString: { $arrayElemAt: [[],'$obj.obj.obj.num'] } },chars: '$str'} }}]] }, _id: 0}}],

        [{$project: {a: { $toLower: { $toLower: '$obj.obj.obj.str' } }, _id: 0}}],

        [{$project: {a: { $dateFromParts: {year: { $exp: '$obj.num' },day: { $sqrt: 14383 },hour: { $log10: '$obj.obj.obj.num' },minute: { $mod: ['$obj.num',35859] },millisecond: { $sqrt: '$obj.obj.obj.num' },timezone: "Antarctica/Syowa"} }, _id: 0}}],

        [{$project: {a: { $range: [20,8] }, _id: 0}}],

        [{$project: {a: { $map: {input: [{ $substrBytes: ["Suriname neural Human",15,3] }],as: 'jared',in: { $multiply: [] }} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],22260] }, _id: 0}}],

        [{$project: {a: { $dayOfWeek: { $dayOfWeek: { $week: { $year: { $month: { $dateToParts: { date: '$date' } } } } } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.num'],92171] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],[49165],['$obj.obj.str',{ $trim: {input: "holistic",chars: { $toLower: "Operations reboot Borders" }} }],["Investment Account hacking",'$obj.obj.obj.str']]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],["HDD"],['$obj.obj.obj.num','$obj.num'],['$obj.str',{ $rtrim: {input: "client-server Liaison Developer",chars: "generate generate"} }]]] }, _id: 0}}],

        [{$project: {a: { $toUpper: { $substrBytes: [{ $ltrim: {input: '$obj.str',chars: "Bedfordshire"} },14,0] } }, _id: 0}}],

        [{$project: {a: { $year: { $millesecond: { $dateFromString: {dateString: "2018-09-06T05:56:09.720Z",onNull: { $toDate: { $objectToArray: '$obj.obj.obj' } }} } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[23560,'$obj.obj.num'],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $dayOfYear: { $dateToParts: {date: '$date',timezone: "Europe/Prague",iso8601: false} } }, _id: 0}}],

        [{$project: {a: { $week: { $dateFromString: {dateString: "2018-09-06T09:35:12.320Z",format: "%V-%%-%M-%d-%u-%G-%z-%U-%m-%Z-%m",timezone: "Pacific/Norfolk",onNull: '$obj.str'} } }, _id: 0}}],

        [{$project: {a: { $toLower: "New York Forges" }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$num'] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[6939],'$num'] }, _id: 0}}],

        [{$project: {a: { $week: { $dayOfWeek: { $dateFromString: {dateString: "2018-09-06T01:23:34.072Z",format: "%H-%d-%j-%M-%j-%u-%U-%V-%H-%%-%z",timezone: "Asia/Kabul",onError: { $arrayElemAt: [[],{ $size: [['$num',77751]] }] }} } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[5602],["solid state bus"],['$obj.obj.obj.num',27020],[{ $ltrim: { input: '$obj.str' } },{ $ltrim: {input: "deposit",chars: '$obj.obj.obj.str'} },'$obj.str']]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "compress proactive",v: { $isoWeek: { $dateToParts: {date: { $dayOfMonth: { $second: { $second: { $dateFromParts: {year: 30533,minute: { $trunc: 97477 }} } } } },iso8601: true} } }},{k: "Sleek Rubber Sausages platforms Optimization",v: '$obj.obj.num'}]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[{ $dateToString: {date: new Date("2018-09-06T19:48:54.610Z"),format: "%H-%H-%u-%V-%j-%G-%m-%Z-%U-%Z",timezone: "Europe/Tiraspol"} }],[60457],['$str',"cross-media"],['$num'],[]]] }, _id: 0}}],

        [{$project: {a: { $map: {input: [],as: 'hermann',in: { $sqrt: 41576 }} }, _id: 0}}],

        [{$project: {a: { $concat: ["incentivize Directives"] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],["Coves Tasty Wooden Keyboard"],["Intranet program"],['$obj.obj.obj.num','$obj.num'],[],['$obj.obj.obj.str']]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.obj.num','$obj.obj.num',87187],44086] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Producer array Comoro Franc",v: '$obj.obj.obj.obj.date'},{k: "Meadow Executive payment",v: false}]] }, _id: 0}}],

        [{$project: {a: { $toDate: { $arrayElemAt: [['$num'],95503] } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $dateToString: {date: { $isoDayOfWeek: { $hour: { $month: { $isoWeek: { $dateToParts: {date: { $hour: '$date' },iso8601: false} } } } } },format: "%Y-%V-%w-%L-%Y-%z-%z-%d-%Y-%Z-%S-%V"} },'$str'],23382] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.num',{ $log10: 83145 },{ $log: [48573,'$obj.obj.num'] },'$obj.num'],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $range: [5,0,3] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $concatArrays: [] }, _id: 0}}],

        [{$project: {a: { $isoWeekYear: { $hour: { $second: { $month: { $week: { $isoWeek: { $toDate: { $arrayToObject: [[[],[],['$str',"Keyboard Manager"],["SMTP Personal Loan Account Synergistic"],[]]] } } } } } } } }, _id: 0}}],

        [{$project: {a: { $rtrim: {input: '$str',chars: { $toUpper: { $trim: { input: '$str' } } }} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$num',92785],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "niches collaboration",v: 82458},{k: "Borders",v: { $week: { $dateFromParts: {isoWeekYear: { $abs: 18072 },second: { $log: ['$obj.obj.num','$obj.obj.num'] },timezone: "Asia/Kathmandu"} } }}]] }, _id: 0}}],

        [{$project: {a: { $second: { $week: { $dateFromString: {dateString: "2018-09-06T05:04:15.790Z",format: "%M-%j-%S-%M",onError: { $arrayElemAt: [['$num','$obj.obj.obj.num'],{ $divide: [40896,'$obj.obj.num'] }] }} } } }, _id: 0}}],

        [{$project: {a: { $isoWeekYear: { $year: { $isoDayOfWeek: { $millesecond: { $dateToParts: { date: { $dateToParts: {date: { $dayOfWeek: { $month: { $isoWeekYear: { $dateFromString: { dateString: "2018-09-06T13:09:51.883Z" } } } } },timezone: "Australia/West"} } } } } } } }, _id: 0}}],

        [{$project: {a: { $second: new Date("2018-09-05T21:51:30.626Z") }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],48102] }, _id: 0}}],

        [{$project: {a: { $minute: { $isoDayOfWeek: { $dayOfMonth: { $millesecond: { $second: { $week: { $dateToParts: { date: { $dateFromString: {dateString: "2018-09-05T21:43:08.416Z",format: "%z-%d-%j-%H-%u-%S-%z-%U-%%-%S-%j-%j",onError: { $map: {input: [],as: 'sammy',in: { $cmp: [{ $arrayElemAt: [[63154,'$$sammy'],66196] },{ $arrayElemAt: [['$$sammy',{ $concat: [] }],64217] }] }} },onNull: { $dateFromParts: {year: { $sqrt: '$obj.num' },timezone: "Pacific/Guam"} }} } } } } } } } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],{ $log: [3770,'$obj.num'] }] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "driver",v: '$obj.num'},{k: "deposit azure Metal",v: { $millesecond: { $dateFromString: {dateString: "2018-09-06T03:47:29.990Z",onError: { $arrayElemAt: [[{ $cmp: [{ $month: { $dateToString: {date: '$obj.obj.date',timezone: "America/Shiprock"} } },{ $range: [15,19] }] }],96771] },onNull: "Bike Central transmit"} } }},{k: "Circles B2C",v: 88308}]] }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj' }, _id: 0}}],

        [{$project: {a: { $range: [11,16] }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: '$obj.date',format: "%M-%V-%m-%w-%d-%Z"} }, _id: 0}}],

        [{$project: {a: { $map: {input: ['$obj.str',"calculating Open-architected GB"],in: { $size: [[]] }} }, _id: 0}}],

        [{$project: {a: { $ltrim: { input: { $trim: {input: "Practical",chars: '$obj.str'} } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.str',"plug-and-play copying"],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $substr: [{ $toString: { $arrayToObject: [[['$obj.obj.obj.num','$obj.obj.obj.num'],[{ $toString: { $dayOfWeek: { $isoWeekYear: { $dateFromParts: {year: { $pow: [6628,'$obj.obj.obj.num'] },second: { $trunc: '$obj.obj.num' },timezone: "Zulu"} } } } }],[]]] } },15,11] }, _id: 0}}],

        [{$project: {a: { $rtrim: {input: "markets recontextualize quantifying",chars: "Congo"} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[50063,'$obj.obj.num','$obj.obj.num'],[],[]]] }, _id: 0}}],

        [{$project: {a: { $concatArrays: [[],["transform Zambian Kwacha Cotton"],[{ $substrCP: ["Compatible overriding",12,8] },{ $substr: ['$obj.str',19,8] },"deposit transmitting compressing"],['$obj.obj.obj.str']] }, _id: 0}}],

        [{$project: {a: { $map: {input: [],as: 'dominique',in: { $subtract: [96827,87912] }} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.str',{ $substr: [{ $toLower: "Fantastic Avon" },7,15] }],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $substr: ['$obj.obj.str',1,12] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["redundant Cotton Lesotho","District"],27028] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $dayOfYear: { $dateToParts: {date: { $hour: { $isoWeekYear: { $minute: { $week: { $week: { $isoWeek: { $isoWeek: { $year: { $dayOfWeek: { $isoDayOfWeek: { $dayOfMonth: { $dateFromParts: {year: { $trunc: 77445 },month: { $ceil: '$num' },day: { $pow: ['$obj.obj.num','$obj.obj.num'] },minute: { $abs: 7755 },millisecond: { $size: [['$obj.obj.obj.str',{ $substrBytes: [{ $substrBytes: ['$obj.str',2,9] },1,9] }]] }} } } } } } } } } } } } },timezone: "America/Los_Angeles"} } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],[{ $ltrim: { input: '$str' } },'$str'],[18386],["interface",'$obj.obj.obj.str'],[],[]]] }, _id: 0}}],

        [{$project: {a: { $dateFromString: {dateString: "2018-09-05T20:20:57.433Z",format: "%Z-%Y-%d-%U-%S-%M-%d-%z-%U-%G-%Y",onError: { $arrayToObject: [[[{ $toUpper: { $rtrim: {input: '$obj.str',chars: "Horizontal hacking function"} } },'$obj.str'],['$str',"Gorgeous"]]] },onNull: "Nevada"} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "incubate",v: new Date("2018-09-06T04:53:24.344Z")},{k: "Technician",v: true}]] }, _id: 0}}],

        [{$project: {a: { $toUpper: { $ltrim: { input: { $rtrim: {input: "online Engineer Borders",chars: "Central Malta Cheese"} } } } }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj.obj.obj.obj' }, _id: 0}}],

        [{$project: {a: { $substrCP: ['$obj.obj.obj.str',7,4] }, _id: 0}}],

        [{$project: {a: { $concatArrays: [[{ $ltrim: {input: '$obj.obj.str',chars: '$obj.obj.obj.str'} },"Specialist Shoes","azure Cambridgeshire metrics"],[]] }, _id: 0}}],

        [{$project: {a: { $filter: {input: ['$obj.num',43779],cond: { $eq: [{ $reverseArray: [["Plains Awesome Wooden Shoes EXE",{ $substrCP: ["local",0,6] }]] },{ $objectToArray: '$obj.obj.obj.obj.obj' }] }} }, _id: 0}}],

        [{$project: {a: { $dayOfYear: { $dateFromParts: {isoWeekYear: { $multiply: ['$obj.num'] },isoWeek: '$obj.obj.obj.num',hour: { $cmp: [{ $objectToArray: '$obj.obj.obj.obj' },{ $toString: { $arrayToObject: [[[],[7362],[],[{ $trim: { input: '$obj.obj.str' } },'$obj.obj.str',"parallelism Neck grow"],[]]] } }] },second: { $sqrt: 77733 },timezone: "America/Coral_Harbour"} } }, _id: 0}}],

        [{$project: {a: { $substr: [{ $trim: {input: "Street Orchestrator matrices",chars: "Investment Account Executive content"} },19,3] }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: { $dateToParts: { date: { $isoWeekYear: { $second: { $dateToParts: {date: { $hour: { $millesecond: { $dayOfMonth: { $isoWeek: { $minute: { $dateFromString: {dateString: "2018-09-05T19:57:07.058Z",format: "%d-%j-%U-%U-%U-%M-%z-%w-%u-%j-%w-%Z",onNull: { $dateFromParts: {year: { $divide: ['$obj.obj.num',68826] },month: { $exp: '$obj.obj.num' },minute: { $log10: '$obj.obj.num' },second: { $log10: 19215 }} }} } } } } } },timezone: "America/Aruba",iso8601: false} } } } } },timezone: "Antarctica/Troll",onNull: { $arrayToObject: [[{k: "Strategist Metrics Stream",v: new Date("2018-09-06T07:47:51.753Z")}]] }} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],95218] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["navigating Human"],75951] }, _id: 0}}],

        [{$project: {a: { $minute: { $isoWeek: { $millesecond: { $dateFromParts: {year: { $size: [['$obj.obj.obj.num']] },minute: { $multiply: [26741,{ $indexOfArray: [{ $concatArrays: [["exuding back up compress"],["optimizing ROI Michigan",{ $ltrim: {input: '$obj.obj.obj.str',chars: { $trim: { input: { $substrBytes: [{ $toUpper: '$obj.obj.obj.str' },8,18] } } }} },"application"],[],['$num']] },{ $dayOfWeek: { $isoWeekYear: { $dayOfYear: { $week: { $isoWeek: { $month: { $dayOfWeek: { $dayOfYear: { $dateFromParts: {year: { $multiply: [] },month: { $add: [6623,'$obj.num',52137] },day: { $divide: ['$obj.num',91411] },hour: { $cmp: [{ $arrayElemAt: [[],'$num'] },{ $arrayToObject: [[{k: "firewall hack",v: true},{k: "deposit hard drive",v: 60006}]] }] },second: { $trunc: '$obj.num' },millisecond: { $floor: { $exp: 23907 } }} } } } } } } } } },17] }] },second: { $ln: '$num' }} } } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$obj.obj.str'],[],['$obj.obj.str',{ $dateToString: { date: { $year: { $isoWeek: { $toDate: { $concat: [] } } } } } }]]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[64053],'$num'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$obj.obj.obj.str',{ $toString: { $arrayElemAt: [[23898],{ $subtract: [86468,'$num'] }] } },"Avon Rubber Saint Helena"],[]]] }, _id: 0}}],

        [{$project: {a: { $toString: { $arrayToObject: [[{k: "tertiary Rustic Fresh Car",v: { $substr: ["connect product synthesize",9,1] }}]] } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.str'],'$num'] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.str'],89959] }, _id: 0}}],

        [{$project: {a: { $isoWeek: { $isoWeek: { $dateToParts: {date: { $dateToString: {date: new Date("2018-09-06T15:54:35.834Z"),timezone: "Asia/Kashgar",onNull: "Fresh visionary"} },timezone: "US/Indiana-Starke"} } } }, _id: 0}}],

        [{$project: {a: { $isoWeek: { $dateToString: {date: new Date("2018-09-06T16:51:50.088Z"),timezone: "America/Kentucky/Monticello",onNull: "Senior"} } }, _id: 0}}],

        [{$project: {a: { $substr: ['$obj.str',4,7] }, _id: 0}}],

        [{$project: {a: { $filter: {input: [{ $substr: ["copy plum Awesome",20,14] }],cond: { $lt: [{ $concat: [] },{ $arrayElemAt: [['$obj.obj.str',{ $rtrim: { input: "Belarussian Ruble protocol" } }],76895] }] }} }, _id: 0}}],

        [{$project: {a: { $filter: {input: [{ $toString: { $dayOfWeek: { $toDate: { $dateToString: {date: { $week: { $isoWeekYear: { $dayOfMonth: { $hour: { $year: { $dayOfMonth: { $isoDayOfWeek: { $toDate: { $arrayToObject: [[{k: "Strategist",v: '$obj.obj.obj.num'},{k: "copying",v: '$obj.date'}]] } } } } } } } } },timezone: "Asia/Famagusta",onNull: { $arrayElemAt: [['$obj.str',{ $dateToString: {date: new Date("2018-09-05T23:27:45.530Z"),format: "%U-%%-%S-%m"} }],'$obj.obj.obj.num'] }} } } } }],cond: { $gt: [{ $arrayElemAt: [['$$this',85944],83859] },{ $substr: ["Berkshire",4,3] }] }} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[77483,'$obj.obj.num',49304],[],['$num'],[]]] }, _id: 0}}],

        [{$project: {a: { $dayOfYear: { $dayOfMonth: { $year: { $millesecond: { $dayOfMonth: { $dayOfWeek: { $millesecond: { $dateToParts: {date: { $millesecond: { $isoWeek: new Date("2018-09-06T04:41:06.906Z") } },timezone: "America/Argentina/Mendoza"} } } } } } } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],["Personal Loan Account violet connect"],['$str',{ $rtrim: {input: "quantifying",chars: '$str'} },'$str'],[],[40015]]] }, _id: 0}}],

        [{$project: {a: { $range: [18,1,13] }, _id: 0}}],

        [{$project: {a: { $substr: ["frame e-business",18,7] }, _id: 0}}],

        [{$project: {a: { $toString: { $rtrim: { input: "hacking" } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $dateToString: {date: '$obj.obj.date',format: "%j-%m-%S-%M-%Y-%j-%%-%S-%U",timezone: "America/Grenada"} },'$obj.obj.obj.str'],'$num'] }, _id: 0}}],

        [{$project: {a: { $dateFromParts: {isoWeekYear: { $cmp: [{ $arrayToObject: [[[],[6013],[]]] },{ $arrayElemAt: [[],37561] }] },isoWeek: { $trunc: 89862 },isoDayOfWeek: { $indexOfArray: [{ $filter: {input: [{ $exp: '$obj.num' },49766,{ $subtract: ['$obj.obj.obj.num',{ $add: [] }] }],as: 'pattie',cond: { $lt: [{ $ltrim: {input: { $ltrim: { input: "portals" } },chars: '$obj.str'} },{ $objectToArray: '$obj.obj.obj' }] }} },{ $concatArrays: [['$str',"Clothing"],['$obj.obj.obj.str',{ $ltrim: { input: { $substrBytes: ["neural Rubber",14,13] } } }]] },10,17] },hour: { $floor: '$obj.num' },minute: { $log10: '$obj.num' },timezone: "America/Cayman"} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["Licensed Steel Hat morph",{ $toString: { $arrayToObject: [[{k: "deposit",v: '$obj.obj.obj.str'},{k: "enable tangible",v: '$obj.num'}]] } }],577] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[93610]]] }, _id: 0}}],

        [{$project: {a: { $rtrim: {input: '$obj.str',chars: { $toLower: { $trim: { input: '$str' } } }} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "engage",v: true}]] }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [],defaults: ["Cambridgeshire Product Mouse"]} }, _id: 0}}],

        [{$project: {a: { $toDate: { $arrayToObject: [[[],[],['$obj.str']]] } }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj.obj' }, _id: 0}}],

        [{$project: {a: { $substrBytes: [{ $concat: ['$obj.obj.obj.str',{ $rtrim: { input: "Sausages models leverage" } }] },2,17] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Checking Account Berkshire Mouse",v: 60464},{k: "XSS payment Computers",v: new Date("2018-09-06T04:03:04.276Z")}]] }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [[]],defaults: [90956]} }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj.obj' }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [['$obj.obj.obj.str'],["ubiquitous Soft",{ $toUpper: '$obj.obj.str' },"pixel blue multi-byte"],[],['$obj.obj.obj.num'],[{ $toLower: "Enterprise-wide" }],[9984]],useLongestLength: false,defaults: ["homogeneous eco-centric UIC-Franc"]} }, _id: 0}}],

        [{$project: {a: { $concatArrays: [["Handcrafted Metal Shoes"],[],[30890],[]] }, _id: 0}}],

        [{$project: {a: { $dateFromParts: {year: { $abs: { $subtract: [46754,'$num'] } },month: 41245,day: { $cmp: [{ $arrayElemAt: [["framework GB intranet","Handmade Steel Hat"],'$obj.obj.num'] },{ $arrayToObject: [[['$obj.obj.str',{ $toString: { $arrayToObject: [[[],[],['$obj.obj.obj.str'],['$str']]] } }],[new Date("2018-09-06T12:04:56.280Z"),{ $rtrim: { input: "Saint Lucia paradigm" } }],[{ $log10: 25679 },55763]]] }] },minute: { $divide: ['$obj.obj.obj.num',5140] },timezone: "Asia/Chita"} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "1080p relationships",v: '$obj.date'}]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "backing up neural",v: true},{k: "1080p Malagasy Ariary Wooden",v: new Date("2018-09-05T21:52:35.039Z")}]] }, _id: 0}}],

        [{$project: {a: { $concatArrays: [['$obj.obj.obj.num']] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Quality azure TCP",v: "SDD transparent"},{k: "invoice",v: { $ceil: 47744 }}]] }, _id: 0}}],

        [{$project: {a: { $substr: [{ $dateToString: {date: new Date("2018-09-06T14:44:23.565Z"),format: "%m-%Z-%S-%G-%w-%%-%Y"} },19,15] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[{ $toLower: '$obj.obj.str' }]]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Handcrafted Rubber Shoes Intuitive Dynamic",v: false},{k: "Fish",v: '$num'}]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "24/7",v: 64388}]] }, _id: 0}}],

        [{$project: {a: { $isoDayOfWeek: { $dayOfWeek: { $toDate: { $toString: { $isoWeek: { $dayOfMonth: { $hour: { $minute: { $dayOfYear: { $second: { $hour: { $isoWeekYear: { $month: { $dayOfWeek: { $week: { $dayOfMonth: { $isoDayOfWeek: { $toDate: { $arrayToObject: [[[],['$obj.obj.obj.str',"envisioneer protocol"],[],[]]] } } } } } } } } } } } } } } } } } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["Chad Product","withdrawal Cross-platform"],'$num'] }, _id: 0}}],

        [{$project: {a: { $dateToParts: {date: { $dayOfYear: { $isoDayOfWeek: { $toDate: { $arrayToObject: [[{k: "Rupiah Car Rapid",v: { $substrBytes: ['$obj.obj.obj.str',11,10] }},{k: "Unbranded Rubber Salad",v: new Date("2018-09-06T12:54:17.375Z")}]] } } } },timezone: "Jamaica",iso8601: true} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Lari bandwidth",v: '$obj.obj.date'},{k: "mission-critical Bedfordshire",v: { $concat: [{ $concat: ['$str'] },"Front-line bypass Administrator"] }}]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[]]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.num'],24056] }, _id: 0}}],

        [{$project: {a: { $dateFromString: {dateString: "2018-09-06T09:14:18.534Z",format: "%H-%w-%u-%u-%%-%Y-%m-%H",onError: { $arrayElemAt: [[31785,'$obj.obj.obj.num',34778],'$obj.obj.num'] },onNull: '$obj.obj.str'} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$str',"integrate"],[],[{ $toLower: { $ltrim: {input: { $trim: { input: '$str' } },chars: "New York"} } },'$obj.obj.obj.str'],[{ $divide: [55771,'$obj.obj.num'] },'$obj.obj.obj.num',70111],[]]] }, _id: 0}}],

        [{$project: {a: { $dayOfMonth: { $dateToParts: {date: { $dateFromParts: {year: { $mod: ['$num','$num'] },month: { $log: [81168,{ $ln: { $log: [91788,{ $divide: [72511,'$obj.obj.obj.num'] }] } }] },day: 3008,hour: { $ln: '$num' },minute: { $subtract: [73654,{ $sqrt: '$obj.num' }] },second: { $floor: 31578 }} },timezone: "Asia/Chungking",iso8601: true} } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $substrBytes: ['$obj.str',13,14] }],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $dayOfMonth: { $month: { $isoDayOfWeek: { $millesecond: { $hour: { $second: { $dayOfYear: { $dateToString: {date: { $minute: { $year: { $isoWeekYear: new Date("2018-09-06T08:38:35.551Z") } } },format: "%L-%V-%U-%G-%w-%M-%m-%%-%z-%U",onNull: { $arrayElemAt: [[],'$num'] }} } } } } } } } }, _id: 0}}],

        [{$project: {a: { $ltrim: {input: "application Grocery",chars: "transmitter"} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Outdoors transmitting",v: new Date("2018-09-06T05:33:03.786Z")}]] }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj' }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "metrics Checking Account transmitter",v: '$obj.obj.obj.str'},{k: "Handcrafted Ball",v: true}]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],14450] }, _id: 0}}],

        [{$project: {a: { $isoDayOfWeek: { $millesecond: { $minute: { $isoWeekYear: { $month: { $dateFromString: {dateString: "2018-09-06T16:29:57.211Z",onError: { $ltrim: { input: "payment incubate Solutions" } },onNull: { $arrayElemAt: [[47775],'$obj.num'] }} } } } } } }, _id: 0}}],

        [{$project: {a: { $rtrim: {input: '$obj.obj.obj.str',chars: "Fresh"} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $toLower: "Checking Account" },{ $dateToString: {date: new Date("2018-09-06T15:29:02.749Z"),timezone: "Indian/Maldives",onNull: '$obj.str'} }],8842] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $toUpper: "quantify redundant" }],46161] }, _id: 0}}],

        [{$project: {a: { $trim: {input: '$str',chars: "Cambridgeshire bus"} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[["azure Tasty Cotton Mouse"],[],[],['$obj.obj.obj.num',46644,'$obj.obj.num']]] }, _id: 0}}],

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
