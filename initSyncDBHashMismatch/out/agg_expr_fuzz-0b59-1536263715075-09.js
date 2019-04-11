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
        return coll.insert({_id: 5588,str: "Cotton",num: 69797,date: new Date("2018-09-06T12:26:40.632Z"),array: [[new Date("2018-09-06T11:48:35.484Z"),new Date("2018-09-05T23:08:41.620Z"),"primary","Personal Loan Account Architect",{_id: 5589,str: "Clothing",num: 15854,array: [],obj: {}},52926],37861,61944,"analyzing",{_id: 5590,num: 28540,date: new Date("2018-09-06T08:20:53.435Z"),array: [],obj: {_id: 5591,str: "SMTP Soft invoice",date: new Date("2018-09-06T08:17:47.460Z"),obj: {}}},new Date("2018-09-06T17:46:16.652Z"),82894]});
    },

    function(coll) {
        return coll.insert({_id: 5592,num: 54511,date: new Date("2018-09-06T14:28:22.496Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 5593,str: "Right-sized Clothing",num: 61923,date: new Date("2018-09-06T14:46:38.667Z"),array: [[new Date("2018-09-06T04:21:56.796Z"),"Automotive Group",75048,"Borders optical Unbranded",new Date("2018-09-06T09:04:21.408Z")],"systemic Georgia foreground",78357,new Date("2018-09-06T18:41:38.268Z"),"Sri Lanka Rupee application",54696,new Date("2018-09-05T22:05:20.333Z"),new Date("2018-09-05T21:48:34.477Z"),"Licensed Togo Bond Markets Units European Composite Unit (EURCO)",[]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 5594,str: "Awesome Customer Sleek",num: 90885,date: new Date("2018-09-06T16:17:51.194Z"),array: [new Date("2018-09-06T09:12:43.530Z"),65032,"Pants Liaison",new Date("2018-09-06T06:43:55.270Z"),"Shoes","Palladium Agent 1080p",{_id: 5595,num: 98848,date: new Date("2018-09-05T21:03:13.564Z"),array: [],obj: {_id: 5596,str: "vortals Operative",num: 38037,array: [{_id: 5597,array: [new Date("2018-09-06T14:55:18.925Z"),22863,[]],obj: {_id: 5598,num: 64723,date: new Date("2018-09-06T03:41:10.896Z"),array: [],obj: {}}},55472,new Date("2018-09-06T12:41:36.418Z"),37186],obj: {_id: 5599,str: "Functionality grey",num: 80540,array: [],obj: {}}}},new Date("2018-09-06T13:11:15.400Z")]});
    },

    function(coll) {
        return coll.insert({_id: 5600,str: "Global invoice",date: new Date("2018-09-06T09:38:19.973Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 5601,date: new Date("2018-09-06T10:03:40.101Z"),obj: {_id: 5602,str: "SDD",num: 80351,array: [6716,new Date("2018-09-05T20:17:01.611Z"),"directional parsing SAS",{_id: 5603,num: 69380,date: new Date("2018-09-05T22:09:39.761Z"),array: [],obj: {}},"functionalities","North Dakota",new Date("2018-09-06T07:47:45.169Z"),{_id: 5604,str: "application sky blue compressing",num: 43638,date: new Date("2018-09-06T14:39:05.026Z"),array: [],obj: {_id: 5605,str: "copy Handcrafted",date: new Date("2018-09-06T04:28:01.001Z"),array: [],obj: {}}},16028,9296,"multi-tasking teal"]}});
    },

    function(coll) {
        return coll.insert({_id: 5606,str: "white Islands",date: new Date("2018-09-06T03:12:22.432Z"),array: [new Date("2018-09-06T16:30:13.892Z"),{_id: 5607,str: "Auto Loan Account Refined Frozen Computer Handcrafted",num: 20534,date: new Date("2018-09-05T21:53:28.174Z"),array: [],obj: {_id: 5608,str: "User-friendly",num: 58511,date: new Date("2018-09-06T07:27:37.495Z"),array: [],obj: {}}},new Date("2018-09-06T04:47:30.660Z"),[5287,"homogeneous","Ball Polarised"],new Date("2018-09-06T13:59:59.093Z"),93425,new Date("2018-09-06T12:14:09.799Z"),"payment Buckinghamshire",[90671],"calculating sky blue Cambridgeshire","time-frame",new Date("2018-09-06T13:12:50.118Z")]});
    },

    function(coll) {
        return coll.insert({_id: 5609,str: "Refined Armenia generate",num: 57792,date: new Date("2018-09-06T10:31:37.244Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 5610,str: "target Louisiana",date: new Date("2018-09-05T22:24:23.909Z"),array: [new Date("2018-09-06T03:08:26.609Z"),new Date("2018-09-06T08:21:55.225Z"),new Date("2018-09-05T22:25:07.275Z"),"SSL","Producer Team-oriented",[],80035,"Auto Loan Account Programmable",new Date("2018-09-06T00:29:23.745Z"),16828,{_id: 5611,str: "deposit transmit",num: 97594,date: new Date("2018-09-06T05:30:08.128Z"),array: [],obj: {}},49970],obj: {_id: 5612,str: "Team-oriented",num: 54337,date: new Date("2018-09-06T14:56:04.861Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 5613,str: "Facilitator withdrawal Mississippi",num: 87117,array: [new Date("2018-09-06T01:06:59.335Z"),"Chief grow revolutionize",11085,new Date("2018-09-06T04:14:13.310Z"),new Date("2018-09-06T15:21:00.445Z"),5033,48132,95287,"yellow JBOD payment","Licensed",[]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 5614,str: "Soft withdrawal",num: 79351,date: new Date("2018-09-06T17:17:30.314Z"),array: ["Intuitive wireless",new Date("2018-09-06T07:34:16.232Z"),[[24849]],"Soft","Arkansas overriding Re-engineered",new Date("2018-09-06T16:05:50.048Z"),84606,"matrix Health","Integration Organic copying",[],50137,{_id: 5615,num: 92720,date: new Date("2018-09-06T00:21:16.185Z"),obj: {}}],obj: {_id: 5616,str: "methodologies",array: []}});
    },

    function(coll) {
        return coll.insert({_id: 5617,str: "Dynamic",num: 23111,date: new Date("2018-09-06T07:38:57.158Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 5618,str: "Georgia",num: 61867,date: new Date("2018-09-06T11:23:01.688Z"),array: ["Credit Card Account",new Date("2018-09-06T17:23:02.151Z"),["high-level Dynamic",69478,"content Investment Account",new Date("2018-09-06T05:38:31.086Z"),{_id: 5619,str: "Corporate frictionless Auto Loan Account",num: 71567,date: new Date("2018-09-05T21:15:26.879Z"),array: [],obj: {}},47916,98736],"24/7 Jewelery stable",{_id: 5620,str: "productize Netherlands Antillian Guilder primary",num: 55781,date: new Date("2018-09-06T08:31:18.695Z"),array: [],obj: {}},new Date("2018-09-06T19:39:32.057Z"),new Date("2018-09-06T04:19:52.238Z")]});
    },

    function(coll) {
        return coll.insert({_id: 5621,str: "interface Direct",num: 60808,date: new Date("2018-09-05T21:46:37.324Z"),array: [new Date("2018-09-06T13:33:54.123Z"),"JBOD","capacitor Creative",25486,69951,new Date("2018-09-05T21:02:54.289Z"),new Date("2018-09-06T04:21:56.249Z"),"partnerships",new Date("2018-09-05T23:58:02.607Z"),"driver collaboration",{_id: 5622,num: 55724,date: new Date("2018-09-05T23:29:30.649Z"),array: [{_id: 5623,str: "Philippine Peso content Investor",num: 64299,date: new Date("2018-09-06T04:48:09.838Z"),obj: {_id: 5624,str: "sensor",num: 41318,date: new Date("2018-09-06T10:15:32.062Z"),array: [55998],obj: {_id: 5625,str: "Auto Loan Account",date: new Date("2018-09-06T16:10:53.132Z"),obj: {}}}},"benchmark Denar cross-platform",72626]}],obj: {_id: 5626,str: "synergistic",num: 73436,array: [36307,[],new Date("2018-09-06T11:38:44.704Z"),{_id: 5627,str: "Fiji Berkshire",num: 1363,date: new Date("2018-09-06T09:46:01.106Z"),array: [{ _id: 5628 },new Date("2018-09-06T00:27:07.812Z")],obj: {}}],obj: {_id: 5629,str: "parsing",obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 5630,num: 61065,array: [{_id: 5631,str: "United Kingdom moratorium Stream",num: 70531,date: new Date("2018-09-06T19:39:35.501Z"),array: [],obj: {_id: 5632,str: "Unbranded Granite Sausages Intelligent",num: 83577,array: []}},"quantifying Buckinghamshire methodical",new Date("2018-09-05T22:48:37.009Z"),"policy back-end Auto Loan Account","applications Cameroon Practical Concrete Sausages",81348,new Date("2018-09-05T21:43:10.548Z"),40793,{_id: 5633,str: "hacking CFP Franc auxiliary",num: 68273,date: new Date("2018-09-06T09:36:25.390Z"),obj: {}},81154,"gold lime Metical",[new Date("2018-09-06T02:40:32.680Z"),[]],"South Carolina invoice Up-sized"],obj: {_id: 5634,str: "Pizza generating website",num: 53642,date: new Date("2018-09-06T07:45:37.277Z"),array: [],obj: {_id: 5635,str: "IB Principal",date: new Date("2018-09-06T16:42:45.002Z"),obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 5636,str: "Personal Loan Account Team-oriented Optimization",num: 74019,date: new Date("2018-09-06T14:31:08.911Z"),array: [],obj: {_id: 5637,str: "protocol Strategist",date: new Date("2018-09-05T23:57:52.631Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 5638,str: "New York Security e-commerce",num: 3363,array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 5639,str: "Games Missouri",num: 80157,date: new Date("2018-09-06T09:43:19.456Z"),array: [],obj: {_id: 5640,str: "Agent Chips",num: 11420,date: new Date("2018-09-06T02:33:27.565Z")}});
    },

    function(coll) {
        return coll.insert({_id: 5641,str: "yellow hard drive",num: 43780,date: new Date("2018-09-06T06:45:37.894Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 5642,num: 46989,date: new Date("2018-09-06T16:58:45.845Z"),array: [{_id: 5643,str: "Product HTTP",num: 98830,date: new Date("2018-09-05T21:53:11.960Z"),array: [61427,{_id: 5644,str: "Table Ergonomic Fresh Bacon aggregate",num: 84982,obj: {_id: 5645,str: "system RAM Personal Loan Account",date: new Date("2018-09-06T15:54:39.413Z"),array: []}},"Future",new Date("2018-09-06T11:05:29.789Z"),new Date("2018-09-05T23:09:47.218Z"),"Brooks Auto Loan Account eyeballs"],obj: {}},65066,new Date("2018-09-06T06:18:38.989Z"),new Date("2018-09-05T22:56:36.848Z"),[],[[]],new Date("2018-09-06T07:01:08.303Z"),"Practical Cotton Shoes bypassing Pizza","Internal"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 5646,str: "experiences GB",num: 7796,date: new Date("2018-09-06T16:23:04.758Z"),array: [],obj: {_id: 5647,str: "Keyboard monitor",num: 37978,date: new Date("2018-09-06T10:18:25.776Z"),array: [new Date("2018-09-05T20:41:31.114Z"),83433,"Idaho Cambridgeshire","Credit Card Account","synthesize Awesome Plastic Mouse",{_id: 5648,str: "California Multi-tiered Toys",num: 2673,array: [4605],obj: {}},new Date("2018-09-06T02:20:54.493Z"),new Date("2018-09-06T07:24:14.659Z"),[],{_id: 5649,str: "Savings Account",date: new Date("2018-09-06T00:36:41.499Z"),array: [],obj: {_id: 5650,num: 47561,date: new Date("2018-09-05T22:36:12.205Z")}},88068],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 5651,str: "Massachusetts microchip",num: 29836,date: new Date("2018-09-06T17:46:07.136Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 5652,str: "blue fuchsia",num: 66225,date: new Date("2018-09-06T12:57:56.707Z"),array: [new Date("2018-09-06T01:01:12.424Z"),new Date("2018-09-06T12:38:21.503Z"),[],new Date("2018-09-05T23:09:50.344Z"),"deposit Computers",{_id: 5653,num: 60590,date: new Date("2018-09-05T23:57:07.035Z"),array: [],obj: {_id: 5654,str: "haptic",num: 42259,array: [85680],obj: {_id: 5655,str: "mobile",date: new Date("2018-09-06T13:11:00.726Z"),obj: {_id: 5656,str: "Moroccan Dirham Avon",num: 25597,date: new Date("2018-09-06T14:27:32.931Z")}}}},61651,"models Frozen",new Date("2018-09-06T18:17:24.841Z"),new Date("2018-09-06T15:50:27.083Z"),8901,26977,"Analyst quantifying Personal Loan Account",new Date("2018-09-05T21:05:30.128Z"),"Minnesota",{_id: 5657,str: "XML",num: 11719,date: new Date("2018-09-06T19:29:45.746Z"),array: [[]],obj: {}}]});
    },

    function(coll) {
        return coll.insert({_id: 5658,str: "Handcrafted Rubber Ball Graphical User Interface",num: 29632,date: new Date("2018-09-06T18:57:47.883Z"),array: [{_id: 5659,num: 89067,array: [82933,new Date("2018-09-06T02:03:23.100Z"),"Function-based mobile","Chief",77498],obj: {_id: 5660,str: "XSS",num: 57956,date: new Date("2018-09-05T23:21:02.048Z"),array: [],obj: {}}},{_id: 5661,str: "indigo Avon",num: 9011,array: [],obj: {_id: 5662,str: "withdrawal",date: new Date("2018-09-06T08:48:46.671Z"),obj: {_id: 5663,str: "reinvent full-range",date: new Date("2018-09-06T13:18:55.954Z"),array: [[],new Date("2018-09-06T08:54:41.236Z")],obj: {}}}},new Date("2018-09-06T14:42:33.804Z"),66509,55742,new Date("2018-09-05T22:55:36.036Z"),[],40817,55850],obj: {_id: 5664,num: 54158,date: new Date("2018-09-06T17:04:27.932Z")}});
    },

    function(coll) {
        return coll.insert({_id: 5665,str: "Intranet overriding",num: 52749,date: new Date("2018-09-06T09:19:15.443Z"),array: ["deploy Hat",{_id: 5666,num: 29297,date: new Date("2018-09-06T17:07:48.284Z"),obj: {_id: 5667,str: "Digitized Slovakia (Slovak Republic) payment",date: new Date("2018-09-05T20:23:46.580Z"),array: [],obj: {}}},{_id: 5668,str: "e-tailers PNG Handmade",num: 1845,date: new Date("2018-09-06T02:41:05.185Z"),array: []},"reintermediate calculating Washington",new Date("2018-09-06T08:19:18.093Z"),"Borders",{_id: 5669,str: "Pants Personal Loan Account Rustic Steel Pizza",num: 8013,array: [{_id: 5670,str: "Licensed Soft Bacon",num: 70144,obj: {}},new Date("2018-09-06T04:33:44.401Z")],obj: {_id: 5671,num: 30531,array: []}},18545,new Date("2018-09-06T06:33:52.532Z"),28313,[[[6655]],8392,"plum Frozen backing up",new Date("2018-09-06T15:31:52.455Z"),51682]],obj: {_id: 5672,str: "withdrawal bypassing plum",num: 56606,date: new Date("2018-09-06T13:23:21.471Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 5673,str: "Incredible Fresh Keyboard",num: 96714,date: new Date("2018-09-06T11:55:54.538Z"),array: [new Date("2018-09-06T07:55:18.283Z"),59803,[],new Date("2018-09-05T21:58:47.586Z"),new Date("2018-09-06T18:26:01.971Z"),[],"composite wireless Officer",new Date("2018-09-06T08:52:53.812Z"),{_id: 5674,str: "Small Washington",num: 92999,date: new Date("2018-09-06T11:15:13.557Z"),array: [],obj: {}},"Borders",1026,70241]});
    },

    function(coll) {
        return coll.insert({_id: 5675,str: "solutions Savings Account",num: 19541,date: new Date("2018-09-06T06:45:53.844Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 5676,str: "Nakfa Shoes",num: 5242,array: [],obj: {_id: 5677,str: "initiatives",num: 2848,date: new Date("2018-09-06T01:05:25.344Z"),array: ["Missouri Senior",87627,23115,"New Hampshire",new Date("2018-09-05T22:54:40.850Z"),new Date("2018-09-06T12:31:32.430Z"),new Date("2018-09-06T13:22:58.696Z"),[1699,"gold"],{_id: 5678,date: new Date("2018-09-05T23:30:05.801Z"),array: []},[43789,new Date("2018-09-06T06:06:49.231Z")],[{_id: 5679,str: "Togo synergistic",num: 53367,date: new Date("2018-09-06T08:21:45.126Z"),obj: {}},60222],"impactful Intelligent",new Date("2018-09-06T15:20:30.239Z")],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 5680,str: "compress Frozen Uzbekistan Sum",num: 57290,array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 5681,str: "Virginia Optimization Director",num: 82318,date: new Date("2018-09-06T16:32:04.655Z"),array: [],obj: {_id: 5682,str: "Movies revolutionary",num: 77109,array: ["Generic Concrete Hat teal input",new Date("2018-09-05T22:44:01.142Z"),new Date("2018-09-05T23:33:37.065Z"),"sky blue",28231,"HTTP Mews",77030,{_id: 5683,str: "Philippines SMTP",date: new Date("2018-09-06T01:35:39.285Z"),array: [{_id: 5684,str: "Soft unleash Investment Account",num: 86594,date: new Date("2018-09-06T10:57:31.817Z"),array: [new Date("2018-09-06T15:29:40.518Z")]},new Date("2018-09-06T08:05:39.305Z")],obj: {}},[],3699,"Tactics website",45890,new Date("2018-09-06T13:20:10.733Z")],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 5685,str: "capacity cultivate Rubber",num: 27544,date: new Date("2018-09-06T15:43:41.781Z"),array: [55836,78250,new Date("2018-09-06T08:07:20.799Z"),new Date("2018-09-05T23:26:19.202Z"),64639,"withdrawal cross-platform bricks-and-clicks","payment Practical unleash",{_id: 5686,str: "Cambridgeshire District Consultant",num: 73073,date: new Date("2018-09-06T09:05:48.917Z"),array: [],obj: {}},[]],obj: {_id: 5687,str: "Maine Shirt",array: [new Date("2018-09-06T10:14:31.023Z"),new Date("2018-09-06T18:19:09.084Z"),[],"Fresh card",19504,{_id: 5688,str: "functionalities optical deposit",num: 34312,date: new Date("2018-09-06T19:32:02.292Z"),array: [{_id: 5689,str: "lavender",date: new Date("2018-09-05T21:40:22.553Z"),obj: {_id: 5690,array: [],obj: {_id: 5691,num: 60922,date: new Date("2018-09-06T05:35:40.084Z"),array: [new Date("2018-09-06T10:45:59.074Z")],obj: {}}}},"United Kingdom"]},"seize visionary"]}});
    },

    function(coll) {
        return coll.insert({_id: 5692,str: "Shoes",num: 74039,date: new Date("2018-09-06T19:14:40.112Z"),array: [76597,"Credit Card Account",new Date("2018-09-05T23:24:22.516Z"),new Date("2018-09-06T09:15:39.442Z"),{_id: 5693,str: "Reactive Mississippi Avon",num: 70869,array: [],obj: {_id: 5694,str: "SMS Ethiopian Birr SSL",num: 44315,date: new Date("2018-09-06T08:17:53.178Z"),array: [],obj: {_id: 5695,num: 13887,date: new Date("2018-09-06T16:18:41.517Z"),array: []}}},new Date("2018-09-06T18:50:28.221Z"),98109,"compressing capability circuit","Concrete multi-byte"],obj: {_id: 5696,num: 65214,date: new Date("2018-09-06T13:53:50.051Z")}});
    },

    function(coll) {
        return coll.insert({_id: 5697,str: "quantifying Home",date: new Date("2018-09-06T03:52:24.437Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 5698,str: "Toys Fantastic Cotton Shirt back-end",date: new Date("2018-09-06T05:47:45.563Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 5699,str: "Generic solid state 1080p",num: 25651,date: new Date("2018-09-05T21:51:27.833Z"),array: [new Date("2018-09-05T23:30:05.515Z"),52945,"Illinois paradigms Usability",25944,[],"Electronics enable Kyrgyz Republic",{_id: 5700,str: "facilitate infrastructure",num: 36563,date: new Date("2018-09-06T09:14:57.636Z"),array: [new Date("2018-09-06T13:36:17.916Z"),70911,4170],obj: {}},{_id: 5701,str: "superstructure New Israeli Sheqel",num: 52514,date: new Date("2018-09-06T00:08:58.465Z")},new Date("2018-09-06T10:40:38.037Z"),"enhance",[]],obj: {_id: 5702,str: "Synergized Knolls",date: new Date("2018-09-05T20:36:49.357Z"),array: [new Date("2018-09-06T10:02:25.664Z")],obj: {_id: 5703,str: "Shirt Small",num: 14254}}});
    },

    function(coll) {
        return coll.insert({_id: 5704,str: "brand panel",num: 54860,date: new Date("2018-09-05T20:27:01.568Z"),array: [62568,"Pound Sterling invoice",new Date("2018-09-06T05:41:41.526Z"),[new Date("2018-09-06T13:02:16.430Z"),"Mouse white"],{_id: 5705,str: "Small Rubber Salad sky blue",num: 53946,date: new Date("2018-09-05T20:15:56.099Z"),array: [],obj: {_id: 5706,str: "Plastic Product",num: 94349,array: []}},37176,22920,[],84648,{_id: 5707,date: new Date("2018-09-05T21:48:23.242Z"),array: [],obj: {}},new Date("2018-09-06T18:32:45.791Z"),new Date("2018-09-05T23:21:07.296Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 5708,str: "Synchronised Bike",num: 21592,date: new Date("2018-09-06T07:19:32.792Z"),array: [],obj: {_id: 5709,str: "orange",num: 61091,date: new Date("2018-09-06T02:03:39.049Z"),array: [new Date("2018-09-06T15:51:14.111Z"),49981,26536,"Shoes SMTP Georgia",26397,{_id: 5710,str: "user-centric",date: new Date("2018-09-06T09:58:55.730Z"),array: [],obj: {}},"haptic RAM","Alabama Intranet analyzing",new Date("2018-09-05T23:26:18.122Z"),new Date("2018-09-06T02:30:42.565Z"),new Date("2018-09-06T00:53:43.315Z"),"Licensed Frozen Bike Industrial"],obj: {_id: 5711,str: "Practical Granite Pants withdrawal",obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 5712,str: "withdrawal exploit yellow",num: 74363,array: [{_id: 5713,num: 18683,date: new Date("2018-09-06T09:30:29.568Z"),array: [],obj: {}},new Date("2018-09-06T02:57:19.356Z"),"bluetooth clicks-and-mortar",4355,27308,{_id: 5714,str: "Handmade cutting-edge multi-byte",num: 94877,date: new Date("2018-09-05T21:38:01.434Z"),array: [79410,"instruction set",new Date("2018-09-05T20:03:49.887Z"),18770,["Trinidad and Tobago Dollar help-desk",[]],{_id: 5715,str: "navigating Buckinghamshire",num: 36068,date: new Date("2018-09-06T08:34:19.572Z"),array: [],obj: {_id: 5716,str: "Lek",date: new Date("2018-09-06T13:59:57.640Z"),array: []}}],obj: {}},new Date("2018-09-06T17:33:16.481Z")],obj: {_id: 5717,str: "Bedfordshire Pakistan"}});
    },

    function(coll) {
        return coll.insert({_id: 5718,num: 83221,date: new Date("2018-09-06T10:29:01.357Z"),obj: {_id: 5719,str: "green",num: 67753,date: new Date("2018-09-05T22:10:25.697Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 5720,num: 62514,date: new Date("2018-09-06T09:19:11.945Z"),array: [],obj: {_id: 5721,str: "reinvent Grocery",date: new Date("2018-09-06T12:33:40.787Z")}});
    },

    function(coll) {
        return coll.insert({_id: 5722,num: 70044,date: new Date("2018-09-06T11:46:03.515Z"),array: [new Date("2018-09-06T00:30:47.677Z"),"Tools Handmade Checking Account",new Date("2018-09-06T16:49:16.569Z"),new Date("2018-09-05T23:29:45.508Z"),new Date("2018-09-06T19:16:19.886Z"),4874,55067,"Tuna",{_id: 5723,str: "Borders invoice Engineer",num: 81483,array: [],obj: {}},{_id: 5724,str: "monitor",num: 36279,date: new Date("2018-09-06T04:43:06.045Z"),array: [],obj: {_id: 5725,str: "Awesome Home",num: 85758,date: new Date("2018-09-06T04:33:51.422Z"),array: [],obj: {}}}],obj: {_id: 5726,str: "Auto Loan Account generating",date: new Date("2018-09-06T14:54:57.184Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 5727,str: "microchip Nebraska",num: 23495,date: new Date("2018-09-06T14:42:33.504Z"),array: [],obj: {_id: 5728,str: "Credit Card Account redundant",num: 52231,date: new Date("2018-09-06T15:50:59.677Z"),array: [],obj: {_id: 5729,str: "National Plaza",date: new Date("2018-09-06T01:44:20.997Z"),obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 5730,str: "system",num: 17608,date: new Date("2018-09-06T15:57:12.407Z"),array: [new Date("2018-09-06T03:16:13.335Z"),63053,"reboot",new Date("2018-09-06T11:08:17.158Z"),"Awesome",new Date("2018-09-06T05:19:48.908Z"),"Electronics engage",{_id: 5731,str: "Uganda Shilling Cliff Borders",num: 26792,obj: {_id: 5732,str: "override 24/7 SDD",date: new Date("2018-09-06T09:47:22.198Z"),array: [],obj: {_id: 5733,str: "Music Awesome Rubber Pants didactic",array: [95500,[78762,70657,"Missouri Granite matrix",[{_id: 5734,str: "SDR Producer functionalities",num: 56916,date: new Date("2018-09-06T16:47:47.187Z"),array: [],obj: {_id: 5735,array: [],obj: {}}}]],new Date("2018-09-06T13:08:54.294Z")],obj: {}}}},[],new Date("2018-09-05T23:59:01.390Z"),new Date("2018-09-05T23:44:32.749Z")]});
    },

    function(coll) {
        return coll.insert({_id: 5736,str: "Dalasi driver optimal",num: 69488,date: new Date("2018-09-06T15:48:31.568Z"),array: [new Date("2018-09-06T05:09:54.329Z"),"Field haptic",[],new Date("2018-09-06T06:52:00.433Z"),75610,68281,8226,new Date("2018-09-06T11:45:30.711Z"),"bluetooth sensor",40877],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 5737,str: "Licensed Plastic Ball",num: 78602,date: new Date("2018-09-06T06:33:28.322Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 5738,str: "Cambridgeshire Kentucky Cotton",num: 44355,date: new Date("2018-09-06T09:27:11.833Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 5739,num: 41043,date: new Date("2018-09-06T11:46:15.898Z"),array: [new Date("2018-09-06T09:24:09.841Z"),31829,66047,"Sports throughput",new Date("2018-09-06T18:33:28.514Z"),"Intelligent Fresh Shirt","Village Heights",56480,[{_id: 5740,str: "Ville",num: 97328,date: new Date("2018-09-05T20:09:01.582Z"),array: [new Date("2018-09-06T01:49:37.280Z"),[],50256,"Virginia payment",new Date("2018-09-06T12:47:02.632Z")],obj: {_id: 5741,str: "Multi-layered",num: 27636,date: new Date("2018-09-06T09:36:31.646Z"),obj: {_id: 5742,num: 10021,date: new Date("2018-09-06T07:57:25.348Z"),array: [],obj: {}}}}],new Date("2018-09-06T16:11:17.962Z"),{_id: 5743,str: "Tools driver model",num: 73764,array: [new Date("2018-09-06T16:39:15.440Z")],obj: {}},80501,{_id: 5744,str: "Home Loan Account Alaska streamline",array: [],obj: {}},"User-centric Product"],obj: {_id: 5745,str: "index Pennsylvania web services",num: 22997,date: new Date("2018-09-06T09:52:24.674Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 5746,str: "IB Factors Lead",num: 93951,date: new Date("2018-09-06T17:37:35.159Z"),array: [88844,new Date("2018-09-06T04:55:04.484Z"),96823,"invoice Solutions impactful",{_id: 5747,num: 32406,date: new Date("2018-09-06T11:15:13.397Z"),array: [],obj: {_id: 5748,str: "feed",num: 23656,date: new Date("2018-09-06T05:56:31.203Z"),array: []}},new Date("2018-09-05T19:58:37.563Z"),54441,74727,"Montana driver Adaptive"],obj: {_id: 5749,str: "Generic Hat",num: 65956,obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 5750,str: "implement",num: 73017,date: new Date("2018-09-06T02:06:09.280Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 5751,num: 88334,date: new Date("2018-09-06T05:57:08.613Z"),array: [],obj: {_id: 5752,str: "logistical Awesome",num: 53535,date: new Date("2018-09-06T11:37:30.237Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 5753,str: "Credit Card Account",num: 53229,date: new Date("2018-09-06T19:01:01.274Z"),array: [[],new Date("2018-09-06T17:38:34.833Z"),26859,"cyan",{_id: 5754,str: "SQL payment",num: 457,array: [new Date("2018-09-06T07:32:04.554Z"),new Date("2018-09-05T22:17:12.651Z"),"Small Cotton Sausages technologies Trinidad and Tobago Dollar"],obj: {}},42648,"Configurable","National Customizable plum",[],new Date("2018-09-05T21:19:16.347Z"),new Date("2018-09-06T19:07:19.582Z")],obj: {_id: 5755,str: "middleware gold Developer",date: new Date("2018-09-06T05:22:17.662Z"),array: [],obj: {_id: 5756,date: new Date("2018-09-06T14:23:56.286Z"),array: [41484,new Date("2018-09-06T05:48:36.380Z"),42586],obj: {_id: 5757,str: "partnerships hack",num: 63024,array: [],obj: {_id: 5758,str: "system-worthy payment",num: 35288}}}}});
    },

    function(coll) {
        return coll.insert({_id: 5759,str: "1080p wireless",num: 11787,date: new Date("2018-09-06T06:33:58.583Z"),array: ["Reunion Montana copying",{_id: 5760,str: "Qatari Rial",num: 16040,date: new Date("2018-09-06T05:46:57.055Z"),array: [],obj: {_id: 5761,num: 6463,obj: {}}},8091,new Date("2018-09-06T09:06:20.001Z"),40915,new Date("2018-09-06T04:05:29.181Z"),"lime niches Sleek",[],{_id: 5762,str: "Money Market Account index",num: 80711,date: new Date("2018-09-05T20:37:01.910Z"),obj: {}},new Date("2018-09-06T02:20:29.150Z"),"synergy panel"]});
    },

    function(coll) {
        return coll.insert({_id: 5763,num: 51226,date: new Date("2018-09-06T07:20:33.671Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 5764,str: "Bacon",num: 57401,date: new Date("2018-09-06T07:47:08.462Z"),array: [new Date("2018-09-06T03:05:33.663Z"),"1080p",new Date("2018-09-06T08:09:05.366Z"),["cross-platform application Salad",new Date("2018-09-05T20:35:09.775Z"),58324,"Corporate array deposit"],88869,{_id: 5765,str: "enterprise",num: 80979,array: [new Date("2018-09-06T17:49:04.763Z")],obj: {_id: 5766,num: 53024,array: [],obj: {}}},{_id: 5767,str: "Australia",num: 55121,obj: {_id: 5768,str: "withdrawal indexing",num: 66256,date: new Date("2018-09-06T08:35:59.127Z"),array: [],obj: {_id: 5769,str: "Checking Account Research",num: 46857,date: new Date("2018-09-06T05:42:12.916Z")}}},"Virtual Sports",88796,new Date("2018-09-06T07:23:35.615Z"),{_id: 5770,date: new Date("2018-09-06T06:20:40.168Z"),array: [17066],obj: {}}]});
    },

    function(coll) {
        return coll.insert({_id: 5771,str: "Supervisor calculating transparent",num: 17461,date: new Date("2018-09-06T12:34:59.052Z"),array: [],obj: {_id: 5772,str: "Berkshire",num: 4580,date: new Date("2018-09-06T19:53:16.621Z"),array: ["mission-critical",71211,71160,[],new Date("2018-09-06T02:21:45.752Z"),{_id: 5773,str: "Minnesota Gorgeous Fresh Soap",num: 34470,array: [],obj: {_id: 5774,num: 1647,date: new Date("2018-09-06T07:34:44.032Z"),array: ["Cambridgeshire Credit Card Account Cotton",new Date("2018-09-06T10:05:55.073Z"),"Berkshire",[30733]],obj: {_id: 5775,str: "Avon envisioneer neutral",num: 62890,date: new Date("2018-09-06T19:51:58.263Z"),array: [],obj: {}}}},new Date("2018-09-06T07:34:03.481Z"),new Date("2018-09-06T11:54:44.133Z"),new Date("2018-09-06T04:59:29.225Z"),{_id: 5776,str: "Oklahoma",num: 37996},"multi-byte navigating open-source"],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 5777,str: "olive Analyst",num: 40284,date: new Date("2018-09-06T11:14:33.325Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 5778,str: "Ameliorated Cotton Digitized",num: 22959,date: new Date("2018-09-06T09:03:14.150Z"),array: ["Branding Legacy",new Date("2018-09-06T01:09:58.556Z"),new Date("2018-09-05T23:01:52.156Z"),99871,"Customer Optimization",{_id: 5779,str: "Borders",num: 14761,date: new Date("2018-09-06T16:04:21.059Z"),array: [],obj: {}},86674,"Focused",{_id: 5780,num: 30271,date: new Date("2018-09-06T07:53:59.934Z"),array: [],obj: {_id: 5781,str: "interface coherent Norway",date: new Date("2018-09-06T05:46:29.390Z"),array: [],obj: {_id: 5782,str: "Chair payment",obj: {_id: 5783,str: "Washington Baby",num: 12162,date: new Date("2018-09-05T21:46:30.855Z")}}}},39874,65679],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 5784,str: "web services Handcrafted",num: 80297,array: []});
    },

    function(coll) {
        return coll.insert({_id: 5785,str: "Checking Account Mission",num: 84014,date: new Date("2018-09-05T20:42:54.119Z"),array: [],obj: {_id: 5786,str: "synthesizing",num: 54395,date: new Date("2018-09-06T04:58:03.927Z"),array: ["Credit Card Account mesh solid state",new Date("2018-09-05T23:04:29.108Z"),[{_id: 5787,str: "24 hour Product",num: 44446,date: new Date("2018-09-05T23:59:05.472Z"),array: []}],new Date("2018-09-05T22:02:22.203Z"),83694,["backing up",new Date("2018-09-06T00:50:16.173Z")],91221,24269,8931,"Personal Loan Account interface Factors",[{_id: 5788,str: "policy Iowa",num: 89684,array: [],obj: {}},"SAS digital"],14488,new Date("2018-09-06T17:15:31.386Z")],obj: {_id: 5789,date: new Date("2018-09-06T14:46:39.199Z"),obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 5790,str: "Australia incremental",num: 69286,date: new Date("2018-09-06T11:18:44.445Z"),array: ["Division Refined Rubber Bacon 3rd generation",new Date("2018-09-06T13:41:05.544Z"),["bandwidth Senior","Jewelery SMS",new Date("2018-09-06T01:49:50.538Z"),"intuitive Frozen",new Date("2018-09-06T09:10:54.729Z"),28720],10672,[]]});
    },

    function(coll) {
        return coll.insert({_id: 5791,str: "Marketing California compress",num: 26763,date: new Date("2018-09-06T13:32:15.105Z"),obj: {_id: 5792,str: "cross-platform pink deposit",num: 2676,array: ["database Cotton programming",72807,{_id: 5793,str: "intuitive New York",date: new Date("2018-09-06T04:18:55.691Z"),array: [],obj: {}},new Date("2018-09-06T03:57:20.550Z"),new Date("2018-09-06T09:12:39.086Z"),64426,"Cheese Operations",68708,{_id: 5794,num: 62047,date: new Date("2018-09-06T01:44:23.764Z"),array: ["protocol Ergonomic",new Date("2018-09-05T21:21:28.655Z"),new Date("2018-09-06T10:29:28.735Z")],obj: {_id: 5795,str: "collaborative calculate",num: 67452,date: new Date("2018-09-05T22:53:09.314Z"),array: [],obj: {}}},new Date("2018-09-06T03:25:03.953Z"),[]],obj: {_id: 5796,num: 26909,date: new Date("2018-09-05T22:52:38.102Z")}}});
    },

    function(coll) {
        return coll.insert({_id: 5797,str: "clicks-and-mortar Engineer Future",num: 36988,date: new Date("2018-09-06T00:28:24.818Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 5798,str: "Berkshire Borders",num: 13503,date: new Date("2018-09-05T20:19:49.490Z"),array: ["index monitor","Investment Account",41587,[],new Date("2018-09-06T08:46:40.922Z"),{_id: 5799,str: "Practical Rubber Computer compress",num: 7669,date: new Date("2018-09-06T09:12:27.813Z"),array: [],obj: {_id: 5800,str: "Granite payment",num: 87341,date: new Date("2018-09-06T06:05:33.992Z"),obj: {}}},new Date("2018-09-06T12:22:11.037Z"),"Kentucky Plastic cross-platform",68667,new Date("2018-09-06T08:01:01.569Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 5801,str: "program Vermont",num: 65840,date: new Date("2018-09-05T23:02:16.930Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 5802,str: "flexibility",num: 84601,date: new Date("2018-09-06T02:48:16.435Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 5803,str: "Sleek Checking Account Surinam Dollar",num: 85410,date: new Date("2018-09-06T06:31:20.064Z"),array: ["asynchronous attitude","Pants Grocery",{_id: 5804,str: "Towels",num: 41542,obj: {_id: 5805,date: new Date("2018-09-05T23:50:23.193Z"),array: [],obj: {}}},8270,new Date("2018-09-06T10:10:55.308Z"),[],73090,new Date("2018-09-06T01:43:58.916Z"),24375,new Date("2018-09-06T06:33:49.417Z")],obj: {_id: 5806,str: "Diverse Officer",num: 33903,date: new Date("2018-09-05T20:57:07.115Z"),array: ["Niue Human e-enable"]}});
    },

    function(coll) {
        return coll.insert({_id: 5807,num: 80514,date: new Date("2018-09-05T21:48:30.037Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 5808,str: "bypass Coordinator auxiliary",date: new Date("2018-09-06T18:57:33.999Z"),array: [new Date("2018-09-06T00:22:44.596Z"),"Down-sized",[],24600,new Date("2018-09-06T03:32:49.806Z"),15591,9654,new Date("2018-09-06T01:50:35.509Z"),"Paradigm Auto Loan Account","Rustic Home Awesome Metal Ball"],obj: {_id: 5809,str: "backing up Rustic Designer",num: 98772,date: new Date("2018-09-06T10:59:45.940Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 5810,str: "Home Loan Account invoice",num: 30840,date: new Date("2018-09-06T15:28:18.456Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 5811,str: "Checking Account",num: 83736,date: new Date("2018-09-06T13:17:41.008Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 5812,str: "Sausages Chips Borders",num: 15003,date: new Date("2018-09-05T22:23:23.154Z"),array: [],obj: {_id: 5813,date: new Date("2018-09-06T02:51:25.408Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 5814,str: "Interactions microchip Response",num: 45422,date: new Date("2018-09-06T15:31:02.594Z"),array: [],obj: {_id: 5815,str: "Devolved",array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 5816,str: "Synergized",num: 59973,date: new Date("2018-09-05T21:09:54.118Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 5817,str: "Iraqi Dinar Way",num: 68753,date: new Date("2018-09-06T04:16:26.459Z"),array: [],obj: {_id: 5818,str: "Timor-Leste Total",num: 6124,obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 5819,str: "vertical Incredible Granite Pants",num: 3172,date: new Date("2018-09-06T01:50:30.657Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 5820,num: 17626,date: new Date("2018-09-06T04:00:13.234Z"),array: ["Frozen channels system-worthy",new Date("2018-09-06T12:28:34.789Z"),{_id: 5821,str: "Strategist",num: 5404,date: new Date("2018-09-06T16:06:48.418Z"),array: [],obj: {}},465,"Pennsylvania Mississippi",87310,50470,{_id: 5822,num: 80267,date: new Date("2018-09-06T16:54:52.854Z"),array: [],obj: {}},new Date("2018-09-06T00:46:15.014Z"),[19318,"Re-engineered"],new Date("2018-09-06T01:14:47.484Z"),"RAM",new Date("2018-09-06T14:28:32.283Z")],obj: {_id: 5823,str: "Licensed Plastic Tuna Officer Pennsylvania",date: new Date("2018-09-06T14:26:00.127Z")}});
    },

    function(coll) {
        return coll.insert({_id: 5824,str: "withdrawal withdrawal Bulgarian Lev",num: 31074,date: new Date("2018-09-05T21:05:27.858Z"),array: [new Date("2018-09-05T23:07:52.166Z"),51286,new Date("2018-09-05T21:37:48.158Z"),"benchmark Brazilian Real Personal Loan Account",new Date("2018-09-06T15:04:07.570Z"),43831,"Jordan",57481,{_id: 5825,num: 6663,date: new Date("2018-09-06T15:33:32.346Z"),array: [],obj: {_id: 5826,str: "open-source Refined",num: 3190,date: new Date("2018-09-06T05:43:20.501Z"),array: ["Interactions SSL Pula"],obj: {_id: 5827,str: "panel",date: new Date("2018-09-06T15:30:16.172Z"),array: [],obj: {}}}},4692,"Distributed matrix Movies",{_id: 5828,num: 27949,date: new Date("2018-09-06T12:57:48.795Z"),obj: {}},77532]});
    },

    function(coll) {
        return coll.insert({_id: 5829,str: "EXE Direct infrastructure",num: 88004,date: new Date("2018-09-06T03:18:48.101Z"),array: [],obj: {_id: 5830,str: "infomediaries Concrete",num: 39916,date: new Date("2018-09-06T05:16:51.793Z"),array: [{_id: 5831,str: "wireless Refined",num: 97560,date: new Date("2018-09-06T04:02:46.423Z"),obj: {}},57323,new Date("2018-09-06T01:28:27.860Z"),"Rustic Concrete Soap","Branding models optical",new Date("2018-09-06T10:10:57.591Z"),new Date("2018-09-06T07:06:00.425Z"),new Date("2018-09-06T02:32:49.020Z"),80932,97744,new Date("2018-09-06T02:49:58.516Z")],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 5832,str: "Idaho",num: 68826,date: new Date("2018-09-06T01:30:16.829Z"),array: [],obj: {_id: 5833,str: "B2B synthesizing Table",num: 18136,array: [new Date("2018-09-06T09:30:25.897Z"),new Date("2018-09-05T21:45:56.806Z"),{_id: 5834,str: "Health",num: 82013,date: new Date("2018-09-06T15:25:50.551Z"),obj: {}},new Date("2018-09-05T23:36:26.852Z"),"Shoes",62985,new Date("2018-09-06T03:52:27.428Z"),"Avon Tactics Representative",[55213,14446,[52797],"Tennessee card connect"],"Business-focused frictionless green",{_id: 5835,date: new Date("2018-09-06T10:13:46.746Z"),obj: {}},8932],obj: {_id: 5836,str: "grey",date: new Date("2018-09-06T00:26:35.849Z"),array: []}}});
    },

    function(coll) {
        return coll.insert({_id: 5837,str: "Court Chicken",num: 17299,date: new Date("2018-09-06T17:46:47.342Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 5838,str: "withdrawal Object-based invoice",num: 73906,date: new Date("2018-09-06T19:16:28.699Z"),array: ["Human",new Date("2018-09-06T01:15:51.399Z"),[],new Date("2018-09-05T19:59:46.170Z"),"Falkland Islands (Malvinas) Metal Liaison",4982,86077,{_id: 5839,num: 94897,date: new Date("2018-09-05T22:41:53.381Z"),array: [new Date("2018-09-06T13:26:53.234Z"),[9758,"Baby Music background"],new Date("2018-09-06T15:30:51.095Z"),"Home Loan Account"],obj: {}},{_id: 5840,str: "Cotton",num: 25479,date: new Date("2018-09-05T23:04:57.201Z"),array: [],obj: {_id: 5841,date: new Date("2018-09-06T17:48:30.190Z"),array: [],obj: {}}},new Date("2018-09-06T10:40:04.661Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 5842,str: "Cambridgeshire",num: 41457,date: new Date("2018-09-06T16:41:55.606Z"),array: [new Date("2018-09-05T20:45:16.101Z"),"XML Creative monitor",new Date("2018-09-06T17:54:55.518Z"),["Baby database Distributed",{_id: 5843,str: "homogeneous",num: 76664,date: new Date("2018-09-06T12:02:08.484Z"),obj: {_id: 5844,str: "paradigms invoice",num: 64911,date: new Date("2018-09-06T05:28:08.803Z"),array: []}},71602,25519],new Date("2018-09-06T01:22:16.666Z"),79446,"programming Berkshire",new Date("2018-09-06T18:16:55.467Z"),"generating Regional niches"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 5845,str: "Programmable",num: 38314,date: new Date("2018-09-06T03:36:28.206Z"),array: [new Date("2018-09-06T11:32:45.442Z"),{_id: 5846,str: "COM Savings Account Balanced",num: 5570,date: new Date("2018-09-06T09:05:34.858Z"),array: [new Date("2018-09-06T05:53:37.250Z")],obj: {}},new Date("2018-09-06T14:08:05.791Z"),"channels Tuna","enterprise",92637,[],"Iceland","Licensed Metal Bacon Internal digital",49571,{_id: 5847,num: 28340,date: new Date("2018-09-05T22:24:41.047Z"),array: []}]});
    },

    function(coll) {
        return coll.insert({_id: 5848,str: "paradigms composite Implementation",num: 54804,date: new Date("2018-09-05T20:13:54.472Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 5849,str: "Louisiana Dynamic",num: 71011,date: new Date("2018-09-05T20:01:20.591Z"),array: [new Date("2018-09-05T21:13:41.054Z"),new Date("2018-09-06T00:18:35.414Z"),77130,[],{_id: 5850,str: "GB",num: 86998,date: new Date("2018-09-06T16:22:12.039Z"),array: [new Date("2018-09-05T21:24:17.537Z")],obj: {_id: 5851,num: 10981,array: ["bypassing",12185,70959,"Fundamental Concrete"],obj: {}}},new Date("2018-09-06T02:07:49.407Z"),69244,"compressing convergence extensible",new Date("2018-09-06T07:21:27.874Z"),[],76901,{_id: 5852,str: "Liaison",date: new Date("2018-09-06T10:41:25.259Z"),array: []}],obj: {_id: 5853,str: "Electronics Wooden",num: 78112,date: new Date("2018-09-05T22:30:44.725Z")}});
    },

    function(coll) {
        return coll.insert({_id: 5854,str: "Bedfordshire invoice Soft",num: 90219,date: new Date("2018-09-06T04:01:12.645Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 5855,str: "override",num: 47925,date: new Date("2018-09-06T09:46:58.542Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 5856,str: "Small Metal Pizza Bedfordshire",num: 55448,date: new Date("2018-09-06T04:16:21.472Z")});
    },

    function(coll) {
        return coll.insert({_id: 5857,str: "Applications Congolese Franc Accounts",date: new Date("2018-09-06T02:10:11.699Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 5858,num: 59708,date: new Date("2018-09-06T17:57:30.483Z"),array: [42996,"foreground auxiliary",["calculate ADP",new Date("2018-09-05T23:56:16.494Z")],1579,{_id: 5859,str: "Chief USB Kwanza",num: 84980,date: new Date("2018-09-06T12:06:28.559Z"),array: [],obj: {}},55412,new Date("2018-09-06T11:13:10.662Z"),"Web Hat Fantastic",71888,{_id: 5860,str: "systems",num: 8950,date: new Date("2018-09-06T01:53:26.140Z"),array: []},new Date("2018-09-05T20:02:37.794Z"),41537,[new Date("2018-09-06T01:33:46.819Z")],"Idaho Chips Auto Loan Account",new Date("2018-09-06T02:15:28.851Z")],obj: {_id: 5861,str: "bypassing Decentralized Finland",date: new Date("2018-09-05T23:08:26.342Z"),obj: {_id: 5862,str: "Iowa Bypass",num: 58065,obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 5863,str: "Berkshire Alabama",num: 61358,date: new Date("2018-09-05T20:38:32.372Z"),array: [{_id: 5864,num: 39102,date: new Date("2018-09-06T07:42:20.723Z"),array: ["models",12950],obj: {}},"Ergonomic JSON Granite",37168,new Date("2018-09-06T15:10:28.694Z"),new Date("2018-09-06T18:29:32.030Z"),new Date("2018-09-05T22:55:59.633Z"),27884,new Date("2018-09-06T03:03:03.874Z"),"capability Texas revolutionize","Shoes Adaptive Compatible",[{_id: 5865,str: "Car Lead connecting",num: 10674,obj: {_id: 5866,str: "Grass-roots Refined Fresh Computer Jewelery",date: new Date("2018-09-05T21:21:19.516Z"),array: ["Indonesia"]}},65563],new Date("2018-09-05T23:14:12.339Z")],obj: {_id: 5867,str: "actuating Strategist",num: 56247,array: [],obj: {_id: 5868,str: "ROI Architect",obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 5869,num: 99457,date: new Date("2018-09-06T18:50:50.844Z"),array: [{_id: 5870,num: 17614,date: new Date("2018-09-06T03:14:51.939Z"),array: []},new Date("2018-09-05T20:17:41.406Z"),"e-business Fantastic","Directives",new Date("2018-09-06T10:55:21.699Z"),"Gorgeous index Awesome Rubber Car",87522,"Savings Account Bacon one-to-one",[],65717,new Date("2018-09-06T02:41:40.291Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 5871,str: "compress Rhode Island",num: 42787,array: ["solutions orchid",new Date("2018-09-06T01:47:36.697Z"),new Date("2018-09-06T10:25:02.667Z"),new Date("2018-09-06T10:55:11.112Z"),54265,{_id: 5872,str: "Soft copying panel",num: 67276,date: new Date("2018-09-06T08:39:19.244Z"),array: []},{_id: 5873,str: "Coordinator",num: 14744,date: new Date("2018-09-06T06:14:09.045Z"),array: [],obj: {_id: 5874,str: "program Sleek",num: 42542,date: new Date("2018-09-06T03:25:07.595Z"),obj: {}}},"alarm",new Date("2018-09-06T09:58:09.750Z"),27286,"Cotton"],obj: {_id: 5875,array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 5876,str: "exuding back up Louisiana",num: 7413,date: new Date("2018-09-06T16:59:49.481Z"),obj: {_id: 5877,str: "eyeballs Automotive calculating",num: 30862,date: new Date("2018-09-06T14:06:43.466Z"),array: [17283,new Date("2018-09-05T21:44:20.550Z"),"integrate Sleek Granite Chicken","Rupiah deposit Product",new Date("2018-09-05T22:28:51.886Z"),2706,{_id: 5878,str: "Trafficway ubiquitous",num: 3671,array: [],obj: {}},[[{_id: 5879,date: new Date("2018-09-06T04:41:55.989Z")},new Date("2018-09-06T12:34:41.287Z")],"virtual technologies",34089],{_id: 5880,str: "Functionality transmit Vatu",num: 26767,date: new Date("2018-09-06T05:39:51.852Z"),array: [{_id: 5881,date: new Date("2018-09-05T21:02:22.650Z"),array: []},"quantify"],obj: {}},25580,new Date("2018-09-06T02:34:46.411Z"),"Alaska Montserrat"],obj: {_id: 5882,str: "Concrete",array: [],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 5883,str: "Dominican Peso Malaysian Ringgit",num: 14799,date: new Date("2018-09-06T14:50:47.208Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 5884,str: "Virginia Assistant transition",num: 90365,date: new Date("2018-09-06T05:39:01.061Z"),array: [new Date("2018-09-06T15:18:11.467Z"),{_id: 5885,str: "XML grow",num: 18810,date: new Date("2018-09-06T02:01:02.336Z"),array: [],obj: {_id: 5886,str: "withdrawal",date: new Date("2018-09-06T15:59:04.199Z"),array: [{_id: 5887,str: "global Kuwait",num: 53717,obj: {_id: 5888,num: 88705,date: new Date("2018-09-06T12:40:40.011Z"),obj: {_id: 5889,date: new Date("2018-09-06T07:20:07.007Z"),array: [new Date("2018-09-06T13:17:34.889Z"),13663,"Dobra Operative"]}}},new Date("2018-09-06T01:10:47.748Z"),"Indiana Algerian Dinar override","Fish"],obj: {}}},{_id: 5890,str: "e-commerce Engineer eyeballs",num: 51360,date: new Date("2018-09-06T13:31:57.824Z"),array: []},38075,[[]],58594,"EXE XML",85490,new Date("2018-09-06T15:52:11.474Z"),51819],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 5891,str: "e-tailers",num: 3246,array: [],obj: {_id: 5892,str: "Portugal deposit withdrawal",num: 23227,array: [new Date("2018-09-06T10:04:41.204Z"),new Date("2018-09-06T13:08:14.265Z"),"Rubber Synergistic Tools",[],{_id: 5893,str: "Usability",date: new Date("2018-09-05T20:50:03.455Z"),array: ["HTTP District compressing",37227],obj: {}},new Date("2018-09-06T11:30:48.388Z"),new Date("2018-09-06T01:22:37.577Z"),3665,11598,new Date("2018-09-06T07:13:49.324Z"),"Manager PNG quantifying","Fresh"],obj: {_id: 5894,num: 5964,date: new Date("2018-09-06T07:31:02.346Z"),obj: {_id: 5895,str: "Liaison",num: 95850,date: new Date("2018-09-06T00:01:34.418Z"),array: [{_id: 5896,str: "Florida Generic",num: 52048,date: new Date("2018-09-06T08:23:02.093Z"),array: [],obj: {}}],obj: {_id: 5897,str: "Congolese Franc Metal",date: new Date("2018-09-06T16:33:00.675Z")}}}}});
    },

    function(coll) {
        return coll.insert({_id: 5898,str: "plum",num: 60507,date: new Date("2018-09-05T21:19:55.457Z"),array: [],obj: {_id: 5899,num: 54208,date: new Date("2018-09-06T15:00:15.091Z"),array: ["Wells",new Date("2018-09-06T05:01:43.881Z"),"Borders",new Date("2018-09-06T09:00:50.538Z"),"copy",37708,["Concrete copying",new Date("2018-09-05T23:32:26.755Z"),1066],new Date("2018-09-06T01:21:33.250Z"),88159],obj: {_id: 5900,str: "Unbranded Summit",num: 84663,date: new Date("2018-09-05T23:30:26.693Z"),array: [],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 5901,num: 12010,date: new Date("2018-09-05T23:37:03.732Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 5902,str: "Borders encompassing",num: 16425,date: new Date("2018-09-05T20:13:04.136Z"),array: [new Date("2018-09-05T22:44:33.282Z"),new Date("2018-09-06T01:19:04.864Z"),"program 1080p",76177,"24/7 Puerto Rico",new Date("2018-09-05T22:27:01.984Z"),77401,"experiences portals Grass-roots",83396,new Date("2018-09-06T16:17:05.795Z"),"Port","Small"],obj: {_id: 5903,num: 54761,array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 5904,num: 65628,date: new Date("2018-09-06T13:41:58.097Z"),array: [47296,70339,new Date("2018-09-06T19:32:03.205Z"),new Date("2018-09-06T07:38:23.588Z"),"Lead Triple-buffered",new Date("2018-09-06T09:15:03.952Z"),"Hat card hack","South Carolina",{_id: 5905,str: "Fresh Quality-focused Tasty",num: 87609,date: new Date("2018-09-06T06:44:34.022Z"),array: ["JSON",33602,"24/7",[]],obj: {_id: 5906,str: "Toys",num: 71438,date: new Date("2018-09-06T18:19:22.192Z"),obj: {}}}]});
    },

    function(coll) {
        return coll.insert({_id: 5907,str: "Plain Borders",date: new Date("2018-09-06T01:17:07.101Z"),array: [],obj: {_id: 5908,str: "deposit Bedfordshire Plastic",num: 87670,date: new Date("2018-09-06T02:54:22.537Z"),obj: {_id: 5909,str: "Unbranded Fresh Keyboard deposit installation",num: 95547,date: new Date("2018-09-06T03:20:11.309Z"),array: [93292,new Date("2018-09-06T09:26:58.405Z"),new Date("2018-09-06T04:47:29.519Z"),new Date("2018-09-06T15:01:31.972Z"),9489,{_id: 5910,str: "tan synthesize",num: 3926,array: ["Usability Checking Account",new Date("2018-09-06T05:38:56.150Z"),"non-volatile"],obj: {}},new Date("2018-09-06T11:48:31.784Z"),["Licensed Wooden Computer Balanced",24852],"Assurance back-end",{_id: 5911,num: 19735,date: new Date("2018-09-06T05:17:44.695Z")}]}}});
    },

    function(coll) {
        return coll.insert({_id: 5912,str: "Generic",num: 34338,date: new Date("2018-09-05T23:36:27.112Z"),array: ["Frozen Handcrafted Concrete Pants Nigeria","XSS Intelligent Plastic Chicken fresh-thinking",new Date("2018-09-06T02:27:34.238Z"),[],76014,{_id: 5913,str: "digital",num: 44931,date: new Date("2018-09-06T18:53:02.209Z"),array: [],obj: {}},new Date("2018-09-05T20:02:49.035Z"),new Date("2018-09-05T23:22:30.209Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 5914,array: [],obj: {_id: 5915,str: "Tokelau software",num: 33270,date: new Date("2018-09-06T02:21:11.142Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 5916,str: "Associate Chair",num: 52713,date: new Date("2018-09-06T14:09:53.267Z"),array: [],obj: {_id: 5917,str: "Technician Bedfordshire",num: 30733,date: new Date("2018-09-06T17:01:12.990Z"),array: [29301,{_id: 5918,str: "Mauritius Rupee Rubber",num: 85646,date: new Date("2018-09-06T03:35:04.013Z"),obj: {_id: 5919,array: [],obj: {}}},"Unbranded Rubber Car",16780,"connect",new Date("2018-09-06T01:26:43.370Z"),26042,{_id: 5920,str: "compress Creative",num: 25969,date: new Date("2018-09-05T22:41:45.443Z"),array: [new Date("2018-09-06T05:30:05.601Z"),37827,new Date("2018-09-05T21:47:29.104Z"),new Date("2018-09-06T14:54:50.529Z")],obj: {_id: 5921,str: "withdrawal Concrete matrix"}},"compress payment Fish",[],new Date("2018-09-06T00:55:03.359Z"),{_id: 5922,str: "Zloty"},31139],obj: {_id: 5923,date: new Date("2018-09-06T07:16:10.586Z"),array: ["Soft driver metrics",[]],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 5924,str: "Specialist Cheese front-end",num: 59167,date: new Date("2018-09-06T15:27:07.267Z"),array: [],obj: {_id: 5925,str: "partnerships alarm",date: new Date("2018-09-06T03:34:03.275Z"),array: ["extend",new Date("2018-09-06T08:15:47.237Z"),28536,"Uganda Refined",67140,new Date("2018-09-06T13:59:34.331Z")],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 5926,str: "Global index",num: 19547,date: new Date("2018-09-06T08:46:29.774Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 5927,str: "communities",num: 96330,date: new Date("2018-09-05T20:29:59.861Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 5928,str: "Executive adapter",num: 75499,date: new Date("2018-09-05T20:42:40.488Z"),array: [7185,2495,[],"India Credit Card Account optimize",58831,new Date("2018-09-06T16:31:05.020Z"),new Date("2018-09-06T03:31:56.637Z"),96315,"monetize Tunnel Timor-Leste"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 5929,str: "Sausages Fantastic Movies",num: 36140,date: new Date("2018-09-06T09:21:49.564Z"),array: [[],new Date("2018-09-06T11:03:34.898Z"),new Date("2018-09-06T14:22:07.480Z"),[17173,{_id: 5930,str: "e-services",array: [46803]}],57098,"Massachusetts Intelligent",new Date("2018-09-06T18:05:21.116Z"),"actuating Refined EXE",[],{_id: 5931,num: 43798,date: new Date("2018-09-05T23:40:30.631Z"),array: [],obj: {}},41844],obj: {_id: 5932,str: "disintermediate California Mountain",num: 33554,array: [new Date("2018-09-05T20:05:56.204Z"),"hard drive National"],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 5933,str: "quantifying Creative",num: 96689,date: new Date("2018-09-06T08:47:58.719Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 5934,str: "Sausages",num: 43614,date: new Date("2018-09-06T07:34:25.927Z"),array: [new Date("2018-09-05T21:11:01.453Z"),66087,"teal port executive",[],[],new Date("2018-09-06T17:12:10.714Z"),new Date("2018-09-05T20:26:06.555Z"),"Intuitive",new Date("2018-09-06T09:46:35.315Z"),"rich optical",{_id: 5935,str: "Graphic Interface Towels",num: 9279,date: new Date("2018-09-06T12:32:16.667Z"),array: [],obj: {}},"Intelligent Accounts",new Date("2018-09-06T13:48:20.778Z")],obj: {_id: 5936,str: "calculating out-of-the-box",num: 58586,date: new Date("2018-09-05T21:35:32.625Z"),array: [],obj: {_id: 5937,str: "Product",num: 96735,array: [83737],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 5938,str: "bus",num: 99699,date: new Date("2018-09-06T07:42:04.253Z"),array: [],obj: {_id: 5939,str: "Street Money Market Account",date: new Date("2018-09-06T15:32:30.965Z"),obj: {_id: 5940,str: "supply-chains Engineer",num: 72624,array: [],obj: {_id: 5941,num: 50757,date: new Date("2018-09-06T19:02:47.400Z"),array: [25653,"Tuna Highway",91407,"protocol Soap web-enabled",[],new Date("2018-09-06T10:35:45.911Z"),[{_id: 5942,str: "Bacon",num: 30855},new Date("2018-09-06T12:48:22.772Z"),new Date("2018-09-06T17:09:22.931Z")],"Hong Kong salmon","capacitor Innovative TCP",new Date("2018-09-05T23:11:07.493Z")],obj: {}}}}});
    },

    function(coll) {
        return coll.insert({_id: 5943,str: "American Samoa tertiary 4th generation",num: 50194,array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 5944,str: "Turnpike",num: 18867,date: new Date("2018-09-06T02:57:36.034Z"),array: [new Date("2018-09-05T20:24:24.660Z"),new Date("2018-09-06T09:09:43.921Z"),45809,"Director solution-oriented","Ball grid-enabled calculate","Extended",new Date("2018-09-06T14:10:41.139Z"),99823,new Date("2018-09-06T01:34:21.080Z"),{_id: 5945,str: "Rwanda Franc",date: new Date("2018-09-05T20:19:34.384Z"),array: []},83649,[]],obj: {_id: 5946,str: "Berkshire invoice Prairie",num: 68279,date: new Date("2018-09-06T03:21:59.075Z"),array: [],obj: {_id: 5947,str: "Handcrafted Frozen Car Solutions EXE",num: 33967,date: new Date("2018-09-06T10:41:44.509Z"),array: [new Date("2018-09-05T20:52:22.571Z")],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 5948,str: "United Arab Emirates world-class hard drive",date: new Date("2018-09-06T05:30:56.621Z"),array: [],obj: {_id: 5949,num: 22514,date: new Date("2018-09-06T17:51:59.240Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 5950,str: "Triple-buffered parse Buckinghamshire",num: 77574,date: new Date("2018-09-06T05:49:35.348Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 5951,str: "Wooden",num: 95598,date: new Date("2018-09-05T21:15:09.741Z"),array: [new Date("2018-09-06T08:05:08.000Z"),64191,"cross-media Fresh","Cotton",new Date("2018-09-05T21:29:54.592Z"),1171,"Analyst Home",[],new Date("2018-09-06T01:23:41.371Z"),new Date("2018-09-06T14:45:55.783Z"),{_id: 5952,str: "card Crossroad",num: 52694,date: new Date("2018-09-06T17:19:04.342Z"),obj: {_id: 5953,str: "enterprise heuristic",num: 8700,date: new Date("2018-09-06T16:59:31.545Z"),array: [],obj: {}}},{_id: 5954,str: "Bedfordshire quantifying COM",date: new Date("2018-09-05T23:21:30.361Z"),array: ["Awesome",49038]},[]],obj: {_id: 5955,num: 10228,array: [{_id: 5956,array: []}],obj: {_id: 5957,num: 67787}}});
    },

    function(coll) {
        return coll.insert({_id: 5958,str: "brand e-markets deposit",num: 19590,array: [],obj: {_id: 5959,str: "integrate empower",num: 30996,date: new Date("2018-09-06T15:54:31.720Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 5960,str: "visualize",num: 24360,date: new Date("2018-09-06T12:03:06.784Z"),array: [new Date("2018-09-06T15:34:55.993Z"),new Date("2018-09-06T12:12:19.304Z"),91018,new Date("2018-09-06T13:50:43.319Z"),69563,"Automotive",[],{_id: 5961,str: "Robust generate",num: 50893,date: new Date("2018-09-05T20:21:52.574Z"),array: [],obj: {}},76133,["Handcrafted"],new Date("2018-09-06T13:30:15.057Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 5962,str: "Industrial Upgradable New York",num: 42755,date: new Date("2018-09-06T06:13:25.248Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 5963,str: "back up sensor Path",num: 73055,date: new Date("2018-09-05T22:34:11.053Z"),array: [new Date("2018-09-06T04:31:48.548Z"),new Date("2018-09-05T23:18:07.039Z"),"Gorgeous bluetooth end-to-end",65751,[],"navigate Outdoors","Home Loan Account Tools transmitting","COM",92671,16665,"deposit invoice Bedfordshire"],obj: {_id: 5964,str: "Credit Card Account",num: 28612,date: new Date("2018-09-06T16:02:57.192Z"),array: [[],[]],obj: {_id: 5965,date: new Date("2018-09-06T19:44:58.467Z"),obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 5966,str: "human-resource Metal",num: 24509,date: new Date("2018-09-06T16:02:33.028Z"),array: [],obj: {_id: 5967,str: "Product Facilitator",num: 63602,date: new Date("2018-09-06T08:03:34.242Z"),array: [],obj: {_id: 5968,array: [new Date("2018-09-06T14:50:09.406Z"),82894,58520,new Date("2018-09-05T20:33:05.942Z"),"Maryland supply-chains optical",20165,"sensor Forward Architect",[],{_id: 5969,num: 94864,array: ["deposit","integrate Fantastic bandwidth",[32021],"New Mexico"],obj: {}},new Date("2018-09-05T20:07:57.444Z"),new Date("2018-09-06T04:57:58.006Z")],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 5970,str: "synthesizing SMTP SSL",num: 58735,date: new Date("2018-09-06T11:15:02.887Z"),array: [[],13642,new Date("2018-09-06T17:31:52.671Z"),8030,"reboot function",new Date("2018-09-06T16:10:28.621Z"),49747,"Pound Sterling fuchsia","optical Pants",{_id: 5971,str: "bypass",num: 66511,date: new Date("2018-09-06T03:20:00.225Z"),array: [],obj: {}},"Bacon",new Date("2018-09-06T10:21:46.053Z"),{_id: 5972,num: 35701,date: new Date("2018-09-06T11:21:42.630Z"),array: [],obj: {_id: 5973,str: "process improvement Arizona Knolls",num: 18418,obj: {_id: 5974,str: "Mission Personal Loan Account Soap",num: 81010,obj: {_id: 5975,str: "Shoes experiences Refined",date: new Date("2018-09-05T23:29:26.940Z"),array: [88278,"Lead hard drive"]}}}}],obj: {_id: 5976,date: new Date("2018-09-06T09:12:12.675Z"),array: [new Date("2018-09-06T19:29:03.433Z"),{_id: 5977,str: "Toys enterprise",array: [98743]}]}});
    },

    function(coll) {
        return coll.insert({_id: 5978,str: "Handmade Granite Pants Group Manager",num: 5297,date: new Date("2018-09-05T23:00:14.382Z"),array: ["Angola",70754,[],{_id: 5979,str: "connecting Credit Card Account redefine",array: [[]],obj: {}},new Date("2018-09-06T15:00:13.131Z"),new Date("2018-09-06T12:43:15.697Z"),[],new Date("2018-09-06T12:42:19.355Z"),"Cotton Administrator Dynamic",new Date("2018-09-06T08:29:01.425Z"),9384,49999,new Date("2018-09-06T16:41:46.667Z")],obj: {_id: 5980,str: "Causeway open-source mint green",num: 55799,date: new Date("2018-09-05T20:17:45.938Z"),array: [new Date("2018-09-06T00:26:44.969Z"),"Frozen solid state back-end","Small transmitting Handmade Wooden Chair"],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 5981,str: "withdrawal systems Manat",num: 64779,date: new Date("2018-09-05T20:47:40.125Z"),array: [],obj: {_id: 5982,str: "invoice instruction set",array: [16731,"Public-key reboot",new Date("2018-09-06T14:44:24.210Z"),[],{_id: 5983,str: "Bermudian Dollar (customarily known as Bermuda Dollar) Mobility",num: 6312,date: new Date("2018-09-06T09:15:03.429Z"),array: [],obj: {}},"background Michigan","Fantastic",49029,["withdrawal Guatemala Dynamic"],26122,new Date("2018-09-06T13:17:51.502Z")]}});
    },

    function(coll) {
        return coll.insert({_id: 5984,str: "East Caribbean Dollar",num: 7788,date: new Date("2018-09-06T14:54:44.501Z"),array: [],obj: {_id: 5985,str: "wireless",num: 18635,date: new Date("2018-09-06T09:05:27.212Z"),array: ["payment",new Date("2018-09-06T02:56:01.040Z"),89629,{_id: 5986,str: "Metal override bandwidth",num: 24995,date: new Date("2018-09-06T16:30:56.543Z"),array: [new Date("2018-09-06T00:18:18.336Z"),"Forks"],obj: {}},new Date("2018-09-06T07:23:52.411Z"),29281,80986,"Borders solution-oriented",[],45958],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 5987,str: "algorithm Savings Account Customer",date: new Date("2018-09-05T20:45:39.666Z"),array: [],obj: {_id: 5988,str: "Tasty Soft Chair Practical Concrete Table Handmade",num: 74132,date: new Date("2018-09-05T20:40:01.876Z"),array: [32333,new Date("2018-09-06T02:42:21.600Z"),"Avon primary bandwidth",new Date("2018-09-06T00:24:43.093Z"),"invoice driver Quality",[],"Glen Computers",[],81976,{_id: 5989,str: "synthesizing Avon optical",num: 81483,date: new Date("2018-09-05T22:48:32.911Z"),array: [{_id: 5990,str: "payment Ball",num: 74723,date: new Date("2018-09-06T12:21:38.217Z"),array: ["Focused Mouse",{_id: 5991,str: "exploit Group Health",num: 89094,obj: {}}],obj: {_id: 5992,date: new Date("2018-09-06T17:30:10.050Z"),obj: {}}},[19682,new Date("2018-09-06T03:27:28.220Z")],"Georgia Planner program"],obj: {}},"Credit Card Account optical",new Date("2018-09-06T13:36:08.263Z")],obj: {_id: 5993,str: "grey clicks-and-mortar",num: 16637,date: new Date("2018-09-06T06:46:03.774Z"),array: []}}});
    },

    function(coll) {
        return coll.insert({_id: 5994,str: "Total Fish",num: 47674,date: new Date("2018-09-06T09:25:04.014Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 5995,str: "View navigate plum",num: 10116,date: new Date("2018-09-06T11:58:34.206Z"),obj: {_id: 5996,num: 28864,date: new Date("2018-09-06T13:22:06.451Z"),array: [83356,new Date("2018-09-05T21:31:42.370Z"),16661,22779,new Date("2018-09-05T22:31:57.572Z"),"Director Paradigm","monitor",[],"matrix circuit transmitting",new Date("2018-09-06T15:01:49.769Z"),"Soap purple",{_id: 5997,str: "circuit",num: 67679,date: new Date("2018-09-06T03:53:23.736Z"),array: [],obj: {}},72777,{_id: 5998,num: 27659,date: new Date("2018-09-06T13:02:17.021Z"),array: [{_id: 5999,str: "digital Handmade Fresh Bacon",num: 98754,date: new Date("2018-09-06T02:01:06.198Z")}],obj: {}}],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 6000,str: "Creative program",num: 27486,date: new Date("2018-09-06T06:42:11.798Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 6001,str: "COM teal Square",num: 10559,date: new Date("2018-09-06T01:22:02.519Z"),array: [new Date("2018-09-06T07:02:55.582Z"),"Metal",{_id: 6002,str: "Fantastic back-end parse",num: 10203,date: new Date("2018-09-06T11:20:22.871Z"),array: [],obj: {}},19524,[],"cultivate",new Date("2018-09-06T14:34:59.601Z"),"synergy",{_id: 6003,str: "Global forecast firewall",date: new Date("2018-09-05T21:04:13.353Z"),array: [[new Date("2018-09-06T06:42:43.115Z"),68633,new Date("2018-09-06T08:49:28.663Z"),20038,new Date("2018-09-05T22:41:59.635Z"),{_id: 6004,str: "Bedfordshire whiteboard Mississippi",num: 52414,obj: {_id: 6005,str: "Facilitator Home Loan Account",date: new Date("2018-09-06T13:58:39.819Z"),array: [],obj: {_id: 6006,array: []}}},"black incentivize open system"]],obj: {_id: 6007,num: 80229,date: new Date("2018-09-06T15:56:20.403Z"),obj: {}}},"CFA Franc BCEAO Intelligent Metal Gloves",2464],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 6008,str: "Unbranded Cotton Bacon client-driven",num: 3804,array: [],obj: {_id: 6009,str: "Afghanistan Money Market Account",num: 66823,date: new Date("2018-09-06T07:26:37.715Z"),array: ["SSL",78128,new Date("2018-09-05T20:09:37.556Z"),"Future",new Date("2018-09-05T22:53:26.639Z"),{_id: 6010,str: "Barbados deposit",date: new Date("2018-09-06T15:14:39.546Z")},81653,new Date("2018-09-06T06:04:43.817Z"),new Date("2018-09-05T20:00:40.020Z"),77613,"Glen",97081],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 6011,num: 24299,date: new Date("2018-09-06T10:46:26.312Z"),array: [],obj: {_id: 6012,str: "mission-critical",num: 57351,date: new Date("2018-09-06T15:32:12.639Z"),array: ["maroon",23636,{_id: 6013,str: "Cambridgeshire real-time leading-edge",date: new Date("2018-09-06T04:09:49.770Z"),array: [[],"Reactive Switchable Quality"],obj: {_id: 6014,str: "Cotton front-end",num: 2823,obj: {}}},64112,"Vision-oriented leading-edge",96327,new Date("2018-09-05T19:56:24.900Z"),new Date("2018-09-06T17:47:58.453Z"),"Electronics bifurcated",new Date("2018-09-06T15:05:28.516Z"),3037,"Rand Loti Connecticut"]}});
    },

    function(coll) {
        return coll.insert({_id: 6015,str: "driver Supervisor",num: 27637,date: new Date("2018-09-05T20:41:04.829Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 6016,str: "Multi-channelled communities",num: 4849,date: new Date("2018-09-06T13:15:14.653Z"),array: ["back-end","Ethiopia",40020,new Date("2018-09-06T15:51:15.047Z"),new Date("2018-09-06T05:49:13.205Z"),37721,91087,[[]],new Date("2018-09-06T06:14:01.116Z"),{_id: 6017,str: "Dale Legacy",num: 20042,date: new Date("2018-09-05T19:59:06.540Z"),array: [],obj: {_id: 6018,str: "Music generate",date: new Date("2018-09-05T21:02:17.188Z"),obj: {}}},new Date("2018-09-06T01:08:41.552Z"),"gold","visualize Plaza synthesize"],obj: {_id: 6019,num: 25908,date: new Date("2018-09-06T04:01:15.227Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 6020,str: "Iranian Rial",num: 9055,date: new Date("2018-09-06T13:37:28.880Z"),array: [],obj: {_id: 6021,str: "users mobile",date: new Date("2018-09-05T22:51:44.983Z"),array: [],obj: {_id: 6022,str: "secondary deposit online",num: 89469,date: new Date("2018-09-05T22:29:14.157Z"),array: [new Date("2018-09-06T11:31:32.454Z"),new Date("2018-09-06T11:57:00.390Z"),"Response",[],82547,{_id: 6023,str: "Ergonomic payment systemic",date: new Date("2018-09-06T05:10:41.857Z")},"Table withdrawal",new Date("2018-09-05T22:15:46.450Z"),["RAM exploit Grocery",67319,31457,"core Delaware",{_id: 6024,str: "extensible",num: 41650}]],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 6025,str: "purple Avon",num: 80903,date: new Date("2018-09-06T07:06:23.446Z"),array: ["SDR Sausages",42136,new Date("2018-09-06T16:09:19.378Z"),[39869,"Auto Loan Account Bhutan Forward",21250],{_id: 6026,str: "haptic Interactions",array: [],obj: {}},[],new Date("2018-09-05T22:37:02.552Z"),{_id: 6027,str: "Chicken",num: 71041,date: new Date("2018-09-06T08:40:29.029Z"),array: []},new Date("2018-09-06T04:46:20.381Z"),{_id: 6028,array: [],obj: {_id: 6029,num: 45770,date: new Date("2018-09-06T11:27:57.794Z"),obj: {_id: 6030,str: "platforms",date: new Date("2018-09-06T06:19:16.426Z"),array: [new Date("2018-09-06T03:50:15.650Z"),new Date("2018-09-06T16:35:08.101Z"),30552,"FTP Idaho",{_id: 6031,str: "Group infrastructures",num: 1552,date: new Date("2018-09-05T21:58:27.678Z"),obj: {}},[]],obj: {}}}}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 6032,str: "parse calculate 4th generation",date: new Date("2018-09-06T17:18:19.575Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 6033,str: "Fresh deposit",num: 30638,date: new Date("2018-09-06T12:58:55.551Z"),array: [],obj: {_id: 6034,str: "RAM",num: 30302,date: new Date("2018-09-06T13:17:43.452Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 6035,str: "Facilitator Ergonomic Auto Loan Account",num: 34829,date: new Date("2018-09-05T20:19:41.044Z"),array: [[new Date("2018-09-06T00:37:46.035Z"),new Date("2018-09-06T16:18:52.249Z"),"Fields",36818,new Date("2018-09-06T19:47:16.657Z")],{_id: 6036,str: "Bike",num: 51591,date: new Date("2018-09-06T07:43:27.574Z"),array: [],obj: {}},"Face to face matrix",[[]],"Bike Bedfordshire","Investment Account payment",4466,{_id: 6037,str: "Product",num: 20890,array: [],obj: {_id: 6038,str: "expedite Licensed Cotton Ball Maryland",date: new Date("2018-09-06T09:34:44.306Z")}},94923,"Jewelery national"],obj: {_id: 6039,num: 15863,date: new Date("2018-09-05T20:46:42.609Z"),array: [38911],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 6040,str: "Home Loan Account Rubber",num: 98931,date: new Date("2018-09-06T16:13:38.122Z"),array: [99035,new Date("2018-09-06T04:26:20.899Z"),"Arkansas Bacon",new Date("2018-09-06T12:20:55.925Z"),new Date("2018-09-06T02:29:25.914Z"),26405,[{_id: 6041,str: "Arkansas USB Licensed Soft Chicken",num: 46513,date: new Date("2018-09-06T05:12:46.122Z"),array: [],obj: {_id: 6042,str: "Re-engineered",date: new Date("2018-09-06T14:47:22.963Z")}}],"Maryland","JSON facilitate","harness","Small installation withdrawal",{_id: 6043,num: 22049,obj: {_id: 6044,str: "brand synergy",num: 87327,array: [53220,33388,[{_id: 6045,num: 10081,date: new Date("2018-09-06T18:45:41.132Z"),array: [],obj: {}}],42177]}},new Date("2018-09-06T13:46:36.532Z")]});
    },

    function(coll) {
        return coll.insert({_id: 6046,str: "Oklahoma",num: 99460,date: new Date("2018-09-06T10:50:18.937Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 6047,str: "Reverse-engineered",num: 17258,date: new Date("2018-09-06T00:36:48.888Z"),array: [57869,new Date("2018-09-05T22:31:49.556Z"),"International Checking Account",new Date("2018-09-06T17:23:12.348Z"),[],"primary Liaison",new Date("2018-09-05T22:45:14.280Z"),[],4698,"Colorado Practical Designer",{_id: 6048,str: "Enhanced generating",num: 3040,date: new Date("2018-09-06T15:59:46.050Z"),array: ["generating",new Date("2018-09-06T07:25:47.292Z")],obj: {}},56974],obj: {_id: 6049,str: "Grocery connect",date: new Date("2018-09-06T11:36:00.074Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 6050,str: "Buckinghamshire Syrian Pound",num: 43721,date: new Date("2018-09-06T01:02:53.527Z")});
    },

    function(coll) {
        return coll.insert({_id: 6051,str: "orchestrate Intelligent",num: 84295,date: new Date("2018-09-06T00:51:19.192Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 6052,str: "backing up B2C",num: 22304,date: new Date("2018-09-06T11:54:12.513Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 6053,str: "Rustic Berkshire",num: 70134,date: new Date("2018-09-06T02:41:49.445Z"),array: ["matrix","cross-platform",39705,70588,new Date("2018-09-05T20:14:19.352Z"),"Coordinator Baby",new Date("2018-09-06T05:10:57.161Z"),"Chief enterprise Bedfordshire","Granite Credit Card Account Money Market Account"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 6054,str: "Rustic Metal Salad",num: 71797,date: new Date("2018-09-06T08:03:07.540Z"),array: [],obj: {_id: 6055,str: "Architect cyan",date: new Date("2018-09-06T02:22:02.503Z"),array: [new Date("2018-09-06T17:48:19.511Z"),88953,new Date("2018-09-06T05:45:35.010Z"),new Date("2018-09-06T09:20:47.988Z"),"Handmade Specialist",[24528,[new Date("2018-09-06T03:13:35.578Z"),{_id: 6056,str: "XSS Russian Ruble",num: 33331,date: new Date("2018-09-06T17:33:01.295Z"),array: [],obj: {_id: 6057,str: "Shoes users",num: 15182,obj: {}}},"Central Rustic"]],[],94365,"Avon",91373],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 6058,str: "Mexican Peso Mexican Unidad de Inversion (UDI) deposit benchmark",num: 18937,date: new Date("2018-09-06T05:21:54.870Z"),array: [[49375,11706],"synergize",38887,"extensible input Gorgeous",[],new Date("2018-09-06T16:22:18.749Z"),97685,"structure Facilitator Books",new Date("2018-09-06T14:57:36.875Z"),new Date("2018-09-05T23:41:40.397Z"),"interface transmitting Ergonomic Metal Computer",new Date("2018-09-05T20:57:04.044Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 6059,str: "Turkmenistan Specialist Rubber",num: 33732,date: new Date("2018-09-05T20:06:31.386Z"),array: ["synthesizing",new Date("2018-09-05T22:29:12.610Z"),new Date("2018-09-06T03:02:15.002Z"),12397,"technologies",35536,{_id: 6060,str: "Technician",num: 14629,array: ["support high-level",[50373,60803,new Date("2018-09-05T20:05:26.075Z"),"Investor Brand South Carolina"],18795],obj: {}},new Date("2018-09-06T00:33:39.392Z"),{_id: 6061,str: "Multi-channelled even-keeled",date: new Date("2018-09-05T20:19:44.217Z"),array: []},new Date("2018-09-06T08:58:56.373Z"),[]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 6062,str: "programming Books Palau",num: 75725,date: new Date("2018-09-06T04:34:31.828Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 6063,str: "Washington",num: 88034,array: []});
    },

    function(coll) {
        return coll.insert({_id: 6064,str: "Avon Meadow",num: 98619,date: new Date("2018-09-06T13:17:50.650Z"),array: [new Date("2018-09-05T20:51:06.111Z"),new Date("2018-09-06T01:08:12.694Z"),"Customer-focused Versatile",83777,[],"Cambridgeshire Applications",new Date("2018-09-06T15:28:21.175Z"),60141,{_id: 6065,str: "haptic Cove",num: 34054,date: new Date("2018-09-06T17:22:40.060Z"),obj: {}},3064,"invoice bypass Borders",[46222],{_id: 6066,str: "Flats",array: [{_id: 6067,num: 71602,date: new Date("2018-09-06T10:40:10.020Z"),array: [],obj: {_id: 6068,str: "Maine",num: 94060,date: new Date("2018-09-06T13:40:00.091Z"),array: []}},new Date("2018-09-06T10:03:50.690Z"),new Date("2018-09-06T09:19:43.732Z")],obj: {_id: 6069,str: "Burundi Franc violet",num: 69953,date: new Date("2018-09-06T05:27:39.799Z"),obj: {}}}],obj: {_id: 6070,str: "Bedfordshire",date: new Date("2018-09-06T02:33:27.176Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 6071,str: "tan bypassing indexing",num: 27344,date: new Date("2018-09-06T17:33:35.645Z"),array: [53469,78791,{_id: 6072,str: "Car",num: 31711,date: new Date("2018-09-06T01:31:31.038Z"),array: [31254],obj: {}},"Oklahoma Chicken",new Date("2018-09-06T11:16:30.577Z"),"Intelligent Frozen Shoes",new Date("2018-09-06T18:58:26.236Z"),[],new Date("2018-09-06T00:39:24.259Z"),"model",{_id: 6073,str: "cutting-edge copy",num: 89806,array: [],obj: {_id: 6074,str: "hacking Handmade Fresh Chair",num: 13014,date: new Date("2018-09-06T09:33:21.963Z"),array: ["turn-key Rustic"],obj: {}}},"Uzbekistan Sum robust",new Date("2018-09-06T17:50:16.848Z")]});
    },

    function(coll) {
        return coll.insert({_id: 6075,str: "Personal Loan Account",num: 66420,date: new Date("2018-09-06T09:28:20.385Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 6076,str: "e-business Chair",num: 5928,array: [],obj: {_id: 6077,str: "Egyptian Pound cyan Granite",num: 35528,date: new Date("2018-09-06T11:42:37.202Z"),array: [69185,21621,new Date("2018-09-06T11:57:30.349Z"),12989,"Plaza Bedfordshire Brand","Accountability","redundant hub",new Date("2018-09-06T03:12:48.446Z"),new Date("2018-09-06T03:45:16.041Z"),{_id: 6078,date: new Date("2018-09-06T03:20:56.502Z"),array: [],obj: {}}],obj: {_id: 6079,str: "forecast stable Operations",num: 76008,array: [],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 6080,str: "directional pink Hat",date: new Date("2018-09-06T14:47:19.012Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 6081,str: "Plastic brand Realigned",num: 56403,date: new Date("2018-09-06T11:22:51.892Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 6082,str: "Accountability",num: 174,date: new Date("2018-09-06T15:25:35.854Z"),array: [],obj: {_id: 6083,str: "empower navigating New Jersey",num: 200,date: new Date("2018-09-06T10:39:37.176Z"),array: ["input override",70773,new Date("2018-09-06T10:16:25.194Z"),"Tasty Frozen Towels Mouse",{_id: 6084,str: "Supervisor plum",num: 43039,date: new Date("2018-09-06T13:23:29.845Z"),array: [],obj: {}},new Date("2018-09-06T02:10:10.540Z"),85095,10587,[],new Date("2018-09-06T10:55:14.610Z"),new Date("2018-09-06T05:39:51.994Z"),"Som copying South Carolina",new Date("2018-09-05T23:52:24.447Z")],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 6085,str: "Quality",num: 83108,array: [],obj: {_id: 6086,str: "systems Home",num: 9618,date: new Date("2018-09-06T12:51:59.421Z"),array: [],obj: {_id: 6087,str: "Auto Loan Account dynamic",num: 61320,date: new Date("2018-09-05T20:05:43.840Z"),array: ["Lek Up-sized Avon","Money Market Account Bedfordshire",new Date("2018-09-06T05:29:18.856Z"),{_id: 6088,str: "time-frame",num: 14958,array: ["SSL Oklahoma port",57462,"Generic Factors plum"],obj: {}},56741,[],new Date("2018-09-06T09:50:58.811Z"),new Date("2018-09-05T23:26:11.272Z"),6792,new Date("2018-09-05T21:20:54.268Z"),[{_id: 6089,date: new Date("2018-09-06T11:10:15.178Z"),array: [],obj: {}},new Date("2018-09-05T21:19:22.088Z")]]}}});
    },

    function(coll) {
        return coll.insert({_id: 6090,str: "SMTP Tactics web-enabled",num: 83904,date: new Date("2018-09-06T05:44:37.178Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 6091,str: "USB middleware",num: 73964,date: new Date("2018-09-06T05:25:44.502Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 6092,str: "Armenia",num: 26746,date: new Date("2018-09-06T17:53:46.544Z"),array: ["calculating Knolls Bedfordshire",new Date("2018-09-06T02:51:14.285Z"),new Date("2018-09-06T18:16:23.875Z"),new Date("2018-09-05T23:13:03.170Z"),55996,{_id: 6093,str: "Sleek Chips",num: 91371,date: new Date("2018-09-06T19:07:03.901Z"),array: [[],35012,"partnerships Bedfordshire haptic",new Date("2018-09-06T03:08:21.067Z"),new Date("2018-09-06T10:05:41.649Z")],obj: {_id: 6094,str: "Massachusetts Unbranded",num: 55996,date: new Date("2018-09-06T18:02:38.760Z"),obj: {_id: 6095,str: "Graphical User Interface indigo",num: 95260,array: ["Home Loan Account"],obj: {}}}},13523,{_id: 6096,date: new Date("2018-09-06T09:58:24.622Z"),array: [],obj: {_id: 6097,str: "Credit Card Account Direct",date: new Date("2018-09-06T19:12:51.870Z")}},25813],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 6098,str: "compress Terrace technologies",date: new Date("2018-09-06T11:51:27.109Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 6099,str: "Gorgeous Wooden Chair",num: 31665,date: new Date("2018-09-06T08:30:55.355Z"),array: ["transmitting yellow",new Date("2018-09-06T07:32:41.623Z"),54713,{_id: 6100,str: "Illinois Refined",num: 23128,date: new Date("2018-09-06T17:00:27.482Z"),array: [],obj: {}},"Port Mobility interface","Plastic invoice Place",19744,[],[new Date("2018-09-05T23:11:55.689Z")],39778,"Place"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 6101,str: "Coordinator",num: 71493,date: new Date("2018-09-06T18:45:58.016Z"),array: ["Avon Rubber",86815,"Architect Jewelery withdrawal","Facilitator",new Date("2018-09-06T18:15:06.169Z"),new Date("2018-09-06T16:56:00.832Z"),new Date("2018-09-06T00:50:44.410Z"),[],76696],obj: {_id: 6102,str: "Integration Division",num: 97054,date: new Date("2018-09-06T06:53:35.233Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 6103,str: "Graphical User Interface",num: 31504,date: new Date("2018-09-06T02:09:48.211Z"),array: [20149,78592,new Date("2018-09-06T10:00:14.228Z"),"architect mint green Granite",{_id: 6104,num: 39908,date: new Date("2018-09-06T02:35:14.155Z"),array: [],obj: {_id: 6105,num: 87048,date: new Date("2018-09-06T11:19:22.261Z"),obj: {}}},"Global end-to-end Division","generate",new Date("2018-09-06T10:27:03.147Z"),[new Date("2018-09-06T15:44:39.936Z")],"copy instruction set",new Date("2018-09-06T17:25:18.436Z"),new Date("2018-09-06T00:27:12.494Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 6106,num: 60724,date: new Date("2018-09-06T11:46:37.014Z"),array: ["24/7 reciprocal",new Date("2018-09-05T20:53:59.511Z"),48165,"Kids Networked",new Date("2018-09-06T19:09:52.211Z"),"Movies",[],{_id: 6107,str: "rich Ergonomic Concrete Cheese",num: 19141,array: [],obj: {}},new Date("2018-09-06T19:03:07.042Z"),76966,30035,new Date("2018-09-06T08:15:52.405Z")],obj: {_id: 6108,str: "New Hampshire",num: 79058,date: new Date("2018-09-06T05:13:38.336Z"),array: [{_id: 6109,str: "modular",num: 9603,date: new Date("2018-09-06T13:26:01.092Z"),obj: {_id: 6110,date: new Date("2018-09-06T09:37:42.897Z")}},"Incredible auxiliary Intelligent Frozen Fish"],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 6111,str: "salmon auxiliary",num: 96875,date: new Date("2018-09-06T10:21:50.013Z"),array: [],obj: {_id: 6112,str: "Borders Arkansas",num: 21856,date: new Date("2018-09-06T18:39:17.298Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 6113,str: "National",num: 42028,date: new Date("2018-09-06T03:19:38.679Z"),array: [],obj: {_id: 6114,str: "synthesize haptic",num: 46557,date: new Date("2018-09-05T20:55:16.586Z"),array: ["Maine",new Date("2018-09-06T15:52:33.867Z"),new Date("2018-09-05T21:54:19.998Z"),73252,"synthesizing Cheese Savings Account",new Date("2018-09-05T21:25:41.089Z"),32263,"pixel",[],91442,{_id: 6115,str: "Generic Concrete Soap Martinique",num: 36562,obj: {_id: 6116,str: "wireless Tools",num: 70012,date: new Date("2018-09-06T00:59:42.349Z"),array: ["Port Codes specifically reserved for testing purposes Steel",{_id: 6117,str: "bluetooth Lake Auto Loan Account",num: 34630,array: [],obj: {}}],obj: {_id: 6118,date: new Date("2018-09-06T14:45:28.598Z"),array: []}}}],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 6119,str: "Spain",num: 29085,date: new Date("2018-09-05T23:24:26.383Z"),array: [],obj: {_id: 6120,str: "Re-contextualized Savings Account",num: 14694,date: new Date("2018-09-06T07:42:31.684Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 6121,str: "Rapid Handmade matrix",date: new Date("2018-09-06T12:06:19.682Z"),array: [new Date("2018-09-06T15:26:43.591Z"),"Gardens",59637,new Date("2018-09-06T05:26:04.379Z"),new Date("2018-09-06T07:25:06.204Z"),44692,"Turkey",new Date("2018-09-06T14:38:19.194Z"),45728,{_id: 6122,str: "Pants reboot Automotive",num: 99866,date: new Date("2018-09-06T11:45:04.829Z"),array: [],obj: {}},"Stravenue definition",[]]});
    },

    function(coll) {
        return coll.insert({_id: 6123,str: "generating Faroe Islands",num: 51390,date: new Date("2018-09-05T23:58:48.029Z"),obj: {_id: 6124,str: "optical 1080p cutting-edge",num: 87716,date: new Date("2018-09-05T20:37:12.411Z"),array: [75096,new Date("2018-09-06T04:54:14.116Z"),"gold",{_id: 6125,str: "Taiwan Administrator",num: 81337,array: [],obj: {}},["unleash Sleek Wooden Gloves","methodical executive",new Date("2018-09-06T17:41:20.201Z"),new Date("2018-09-06T15:07:31.817Z"),11575,9050,new Date("2018-09-06T18:08:29.256Z")],{_id: 6126,num: 81407,date: new Date("2018-09-06T19:39:36.372Z"),array: [35194],obj: {}},[],{_id: 6127,num: 16242,date: new Date("2018-09-05T20:54:03.433Z"),array: []}],obj: {_id: 6128,num: 28991,array: [],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 6129,str: "Kyat Awesome Fresh Hat",num: 85072,date: new Date("2018-09-05T23:40:19.093Z"),array: [new Date("2018-09-06T00:02:23.375Z"),[],"Lead open-source",20084,new Date("2018-09-06T04:39:08.324Z"),"Plastic Berkshire",new Date("2018-09-06T13:41:51.281Z"),60628,new Date("2018-09-06T12:37:46.146Z"),"Granite approach",{_id: 6130,str: "SMS",num: 72984,date: new Date("2018-09-06T12:26:28.008Z"),array: ["hardware Configuration Unions",91225],obj: {}}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 6131,str: "South Carolina action-items",num: 46781,date: new Date("2018-09-06T15:49:31.493Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 6132,str: "Outdoors",num: 63454,date: new Date("2018-09-06T05:32:55.400Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 6133,str: "Rustic",num: 42040,array: ["Idaho Som Refined",41050,new Date("2018-09-06T11:34:19.090Z"),new Date("2018-09-06T13:49:33.228Z"),63435,40985,new Date("2018-09-06T04:14:10.561Z"),new Date("2018-09-06T02:20:43.941Z"),"Bouvet Island (Bouvetoya) bypass","Concrete",{_id: 6134,str: "Towels Practical",num: 16795,date: new Date("2018-09-06T06:50:46.128Z"),array: [new Date("2018-09-06T14:20:45.139Z"),[],{_id: 6135,num: 50991,date: new Date("2018-09-06T02:56:50.260Z"),array: [],obj: {}},"Creative"],obj: {}}],obj: {_id: 6136,str: "Music Bacon Iceland",num: 33111,date: new Date("2018-09-06T05:31:08.595Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 6137,str: "Tasty Frozen Table",date: new Date("2018-09-06T17:05:38.072Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 6138,str: "ADP invoice",num: 48502,date: new Date("2018-09-06T11:36:31.482Z"),array: [17512,"Serbian Dinar Berkshire","efficient",88123,new Date("2018-09-05T21:40:48.413Z"),"indexing",[],30742,new Date("2018-09-05T23:56:41.717Z"),{_id: 6139,str: "invoice",num: 54476,date: new Date("2018-09-06T07:09:46.469Z"),array: [68304,new Date("2018-09-06T11:12:19.663Z"),77689]},new Date("2018-09-06T12:17:51.780Z"),new Date("2018-09-05T22:06:18.505Z"),{_id: 6140,num: 68899,date: new Date("2018-09-06T06:19:12.240Z"),array: ["static Up-sized multi-state",[]],obj: {}}],obj: {_id: 6141,str: "Kids",num: 3738,obj: {_id: 6142,str: "Small Cotton Shirt",date: new Date("2018-09-06T09:09:29.935Z"),obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 6143,str: "indexing Fantastic Steel Chicken Assistant",num: 19607,array: ["synthesizing Cayman Islands back up","withdrawal","calculating Rustic Wooden Pizza distributed",[],[],66710,93181,new Date("2018-09-06T07:35:41.161Z"),82921,new Date("2018-09-06T09:15:22.521Z"),"Human bricks-and-clicks panel",{_id: 6144,str: "Belgium",num: 5437,date: new Date("2018-09-06T09:21:36.714Z"),obj: {}},9292]});
    },

    function(coll) {
        return coll.insert({_id: 6145,str: "Garden Afghani",num: 25927,date: new Date("2018-09-06T08:33:56.933Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 6146,str: "backing up solid state",array: [],obj: {_id: 6147,str: "Pizza Handmade Granite Chicken",num: 17963,date: new Date("2018-09-06T09:12:31.284Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 6148,str: "best-of-breed backing up",date: new Date("2018-09-06T08:31:49.668Z"),array: [new Date("2018-09-06T14:20:57.301Z"),6949,66810,"Spring Soft",new Date("2018-09-06T03:46:30.960Z"),"bandwidth-monitored metrics Concrete",["Supervisor Soft",{_id: 6149,str: "compress feed Garden",num: 90072,date: new Date("2018-09-06T06:35:47.750Z"),array: [new Date("2018-09-06T00:03:52.277Z"),"Dynamic 24/7 Home",95078,[]]}],{_id: 6150,str: "revolutionary infomediaries next generation",num: 89368,date: new Date("2018-09-06T17:34:14.220Z"),obj: {_id: 6151,num: 54238,array: [],obj: {_id: 6152,str: "customer loyalty",date: new Date("2018-09-06T14:22:35.322Z"),obj: {}}}},{_id: 6153,str: "JSON",num: 72140},97010,25598,new Date("2018-09-06T11:15:56.755Z")],obj: {_id: 6154,num: 16735,date: new Date("2018-09-06T00:52:57.630Z"),array: ["Maryland Usability invoice",new Date("2018-09-06T01:03:09.611Z"),79995]}});
    },

    function(coll) {
        return coll.insert({_id: 6155,str: "Fish Accounts",num: 96322,date: new Date("2018-09-06T14:50:12.673Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 6156,str: "Car",date: new Date("2018-09-06T19:42:29.842Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 6157,str: "hacking high-level Rustic Metal Pants",num: 82193,date: new Date("2018-09-06T08:29:41.288Z"),array: ["Tuna Investment Account",66745,{_id: 6158,num: 20468,date: new Date("2018-09-06T17:12:09.444Z"),array: [],obj: {}},new Date("2018-09-06T10:13:49.434Z"),84305,"grid-enabled Rubber indexing",new Date("2018-09-05T23:47:11.820Z"),{_id: 6159,str: "Self-enabling",num: 28811,date: new Date("2018-09-06T03:50:23.977Z"),array: [5966,[],new Date("2018-09-06T03:37:00.594Z")],obj: {}},12536,new Date("2018-09-06T09:35:41.968Z"),73550],obj: {_id: 6160,num: 44217,date: new Date("2018-09-06T14:02:00.117Z"),array: [35374,[{_id: 6161,str: "invoice",num: 60253},new Date("2018-09-06T15:22:14.790Z")],"Credit Card Account Industrial"],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 6162,str: "Generic",num: 82256,date: new Date("2018-09-05T23:02:37.394Z"),array: ["out-of-the-box Manager reboot",new Date("2018-09-06T14:35:39.719Z"),"Saint Vincent and the Grenadines Consultant customer loyalty",8003,[],"Home Loan Account",new Date("2018-09-06T17:34:58.796Z"),{_id: 6163,str: "Synergistic programming",num: 14848,date: new Date("2018-09-06T18:09:02.418Z"),array: [37012,new Date("2018-09-06T18:38:03.391Z")],obj: {}},97382,[],82350]});
    },

    function(coll) {
        return coll.insert({_id: 6164,str: "back-end Auto Loan Account monetize",num: 64216,date: new Date("2018-09-06T13:38:18.335Z"),array: [32749,11693,[],"communities Balanced Washington",new Date("2018-09-06T04:16:07.322Z"),new Date("2018-09-06T11:36:01.849Z"),"Solomon Islands Dollar AGP Tasty",42100,2010],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 6165,str: "transmitting",num: 76581,date: new Date("2018-09-06T12:18:18.744Z"),array: [50099,[],new Date("2018-09-06T04:48:40.192Z"),"sticky",66707,76938,65449,{_id: 6166,str: "Luxembourg alarm",num: 29925,array: [],obj: {_id: 6167,obj: {}}},"Credit Card Account Tools maximize",[[],new Date("2018-09-06T18:37:55.683Z"),new Date("2018-09-06T06:03:23.539Z")],new Date("2018-09-06T13:02:48.453Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 6168,str: "Usability",num: 6609,date: new Date("2018-09-06T13:02:31.954Z"),array: ["COM",new Date("2018-09-06T09:07:26.372Z"),{_id: 6169,str: "1080p Metal",num: 52033,date: new Date("2018-09-06T09:37:56.136Z"),array: [],obj: {}},"South Dakota connecting",2747,52992,{_id: 6170,num: 88451,date: new Date("2018-09-06T16:01:47.701Z"),array: [new Date("2018-09-06T19:41:20.839Z"),"vertical impactful"]},58812,new Date("2018-09-06T15:28:28.080Z"),27392,[],["Guernsey Saint Helena Pound exploit","Industrial Bedfordshire"],99125],obj: {_id: 6171,num: 55359,date: new Date("2018-09-06T00:55:13.744Z"),obj: {_id: 6172,str: "payment Pizza",array: [],obj: {_id: 6173,str: "morph reintermediate infomediaries",date: new Date("2018-09-06T04:46:43.286Z"),array: [new Date("2018-09-05T23:09:37.152Z")],obj: {_id: 6174,str: "Surinam Dollar",num: 62400}}}}});
    },

    function(coll) {
        return coll.insert({_id: 6175,str: "Turkish Lira",num: 7901,date: new Date("2018-09-06T06:17:56.930Z"),array: [new Date("2018-09-06T06:09:36.613Z"),new Date("2018-09-06T03:56:52.599Z"),"hacking Rustic SQL",89962,new Date("2018-09-06T01:50:24.655Z"),64110,{_id: 6176,str: "monitoring compress Shoes",date: new Date("2018-09-06T06:24:36.018Z"),array: [],obj: {}},79935,"web-readiness",76049,{_id: 6177,str: "Incredible Concrete Bike transmit",num: 66229}],obj: {_id: 6178,num: 56956,date: new Date("2018-09-05T20:03:21.910Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 6179,str: "mission-critical",num: 52077,date: new Date("2018-09-06T15:58:48.686Z"),array: [[],"azure payment Gambia",new Date("2018-09-06T11:57:59.200Z"),new Date("2018-09-06T06:41:02.197Z"),"Future",73379,"Home Loan Account",46807,{_id: 6180,str: "indexing mission-critical",array: [new Date("2018-09-06T12:30:17.975Z"),{_id: 6181,str: "redundant Tasty Rubber Chair array",num: 55035,date: new Date("2018-09-05T20:01:43.724Z"),array: [],obj: {_id: 6182,num: 11732,date: new Date("2018-09-05T20:42:19.934Z"),array: [],obj: {}}},new Date("2018-09-06T14:29:54.317Z")],obj: {_id: 6183,str: "Investor Multi-tiered",num: 78030}},"green",{_id: 6184,str: "Small",num: 54131,array: [51806],obj: {}}]});
    },

    function(coll) {
        return coll.insert({_id: 6185,str: "Factors Oregon",num: 29513,date: new Date("2018-09-06T07:08:20.588Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 6186,str: "Legacy",num: 82927,date: new Date("2018-09-06T17:19:26.564Z"),array: [new Date("2018-09-05T23:38:20.476Z"),"Mouse index",45163,69206,42806,{_id: 6187,str: "Shoes",num: 40221,date: new Date("2018-09-06T01:50:12.328Z"),obj: {_id: 6188,str: "haptic Tanzanian Shilling Licensed",array: [],obj: {}}},new Date("2018-09-06T19:08:46.628Z"),new Date("2018-09-06T04:57:20.878Z"),new Date("2018-09-06T17:59:32.375Z"),"navigate pink"]});
    },

    function(coll) {
        return coll.insert({_id: 6189,str: "SQL",num: 19197,date: new Date("2018-09-06T01:16:35.911Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 6190,str: "XML parsing",num: 58952,date: new Date("2018-09-06T04:28:08.803Z"),array: ["Automated","Nigeria ADP",89847,new Date("2018-09-05T21:12:54.274Z"),93667,{_id: 6191,date: new Date("2018-09-06T10:13:10.872Z"),array: [new Date("2018-09-06T07:44:29.207Z"),new Date("2018-09-06T05:14:10.345Z"),"Canyon violet"],obj: {_id: 6192,str: "Bedfordshire morph",num: 84171,date: new Date("2018-09-06T01:22:30.399Z"),array: [30849],obj: {}}},"open-source Regional TCP",{_id: 6193,num: 16039,date: new Date("2018-09-06T16:53:06.295Z"),obj: {_id: 6194,str: "navigate",num: 78235,date: new Date("2018-09-06T08:26:00.780Z"),array: [],obj: {}}},29850,new Date("2018-09-06T07:12:41.950Z"),new Date("2018-09-05T23:27:57.696Z"),[]]});
    },

    function(coll) {
        return coll.insert({_id: 6195,str: "Nebraska architect Tunnel",num: 8041,date: new Date("2018-09-06T15:14:11.496Z"),array: [],obj: {_id: 6196,str: "Turks and Caicos Islands online supply-chains",num: 36643,array: [new Date("2018-09-06T06:25:33.589Z"),"executive THX fuchsia","Licensed",52400,{_id: 6197,str: "synthesize Pound Sterling",num: 37206,date: new Date("2018-09-06T12:45:15.801Z"),array: [[]]},new Date("2018-09-06T15:46:51.443Z"),new Date("2018-09-06T03:17:24.451Z"),56234,[],49810,"HDD Analyst Sports",{_id: 6198,str: "Refined Soft Fish index",date: new Date("2018-09-06T06:48:58.947Z"),obj: {}},{_id: 6199,str: "Solutions Belarussian Ruble",num: 53522,date: new Date("2018-09-06T09:04:02.288Z"),array: [new Date("2018-09-05T20:56:11.450Z")],obj: {_id: 6200,str: "South Carolina magenta Dynamic",num: 16192,date: new Date("2018-09-06T14:23:54.244Z"),array: [],obj: {}}},"payment Architect Swaziland"]}});
    },

    function(coll) {
        return coll.insert({_id: 6201,str: "quantify",num: 73165,date: new Date("2018-09-06T05:18:34.615Z"),array: [],obj: {_id: 6202,str: "Orchestrator",num: 30453,date: new Date("2018-09-06T15:27:46.106Z"),obj: {_id: 6203,str: "SSL deploy",num: 10883,date: new Date("2018-09-05T22:36:02.387Z"),array: []}}});
    },

    function(coll) {
        return coll.insert({_id: 6204,str: "bandwidth collaborative web-readiness",num: 73879,date: new Date("2018-09-06T00:45:38.884Z"),array: [new Date("2018-09-05T21:46:49.337Z"),new Date("2018-09-05T22:29:46.963Z"),55759,"Route",new Date("2018-09-06T15:06:29.314Z"),"expedite SMTP e-enable",{_id: 6205,str: "TCP Bedfordshire",num: 37958,date: new Date("2018-09-06T08:58:25.560Z"),obj: {_id: 6206,num: 58543,date: new Date("2018-09-05T22:39:46.472Z"),array: [99045],obj: {}}},56288,"client-driven mindshare Democratic People's Republic of Korea",36803,55370,[[],{_id: 6207,str: "CSS gold",num: 62309,date: new Date("2018-09-06T09:19:15.897Z"),obj: {_id: 6208,str: "Sports",num: 38826,date: new Date("2018-09-06T19:05:32.912Z"),array: [new Date("2018-09-06T05:40:38.058Z"),{_id: 6209,array: []},new Date("2018-09-06T14:13:24.092Z"),"Indian Rupee Ngultrum generate solid state",new Date("2018-09-06T02:56:30.265Z")],obj: {_id: 6210,num: 69296,array: []}}}],"Locks Kentucky"]});
    },

];

const indexList = [

    function(coll) {
        return coll.createIndex({"obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": 1, "obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": 1, "obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": 1, "date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.str": -1, "obj.obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": -1, "obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": -1, "obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"date": 1, "obj.obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": -1, "obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": -1, "obj.obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": -1, "date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": 1, "date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"date": 1, "obj.obj.obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": -1, "str": 1});
    },

    function(coll) {
        return coll.createIndex({"num": 1});
    },

    function(coll) {
        return coll.createIndex({"num": 1, "obj.obj.obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": -1, "obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"str": 1, "obj.obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"str": 1, "obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.num": 1, "str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": 1, "obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": 1, "str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": -1, "obj.obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": -1, "obj.obj.obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": -1, "obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": -1, "obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"date": 1, "obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"date": -1, "obj.obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"num": -1, "obj.obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": -1, "obj.obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.str": 1, "obj.obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"date": -1, "obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": -1, "obj.obj.obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.obj.str": 1, "obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": -1, "obj.obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": -1, "date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": -1, "date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": 1, "obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": 1, "obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"str": -1});
    },

    function(coll) {
        return coll.createIndex({"num": 1, "obj.obj.date": -1});
    },

];

const aggregationList = [

        [{$project: {a: { $map: {input: ['$obj.obj.obj.obj.num'],in: { $add: [79533] }} }, _id: 0}}],

        [{$project: {a: { $zip: { inputs: [] } }, _id: 0}}],

        [{$project: {a: { $dateFromString: {dateString: "2018-09-06T12:51:07.812Z",format: "%j-%d-%m-%G-%V-%d-%%-%L-%d-%z",timezone: "Pacific/Apia"} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["indexing Customizable"],85401] }, _id: 0}}],

        [{$project: {a: { $map: {input: [],in: { $pow: ['$$this','$num'] }} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["cutting-edge Tuna Legacy"],63491] }, _id: 0}}],

        [{$project: {a: { $toLower: { $ltrim: { input: "Inverse Plastic virtual" } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],4265] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Personal Loan Account wireless",v: true},{k: "Frozen experiences FTP",v: { $substr: ["Gourde US Dollar Chicken",13,7] }}]] }, _id: 0}}],

        [{$project: {a: { $trim: { input: "payment" } }, _id: 0}}],

        [{$project: {a: { $dateToParts: {date: { $year: { $isoWeekYear: { $minute: { $dayOfYear: { $dateFromParts: {isoWeekYear: { $abs: 7911 },isoWeek: { $trunc: '$obj.obj.obj.num' },isoDayOfWeek: { $subtract: ['$obj.obj.obj.num',99814] },minute: { $ln: 83866 },millisecond: { $exp: '$obj.obj.obj.obj.num' },timezone: "America/Nassau"} } } } } },iso8601: true} }, _id: 0}}],

        [{$project: {a: { $dateFromString: { dateString: "2018-09-06T03:11:03.737Z" } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[71420],["leverage Avon",'$str']]] }, _id: 0}}],

        [{$project: {a: { $toUpper: '$str' }, _id: 0}}],

        [{$project: {a: { $concat: [{ $ltrim: {input: '$str',chars: { $ltrim: { input: "program invoice" } }} }] }, _id: 0}}],

        [{$project: {a: { $substrBytes: ["Granite reciprocal",11,20] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $map: {input: ['$obj.str',"online",{ $toString: { $dayOfWeek: { $year: { $minute: { $year: { $year: { $isoDayOfWeek: { $isoDayOfWeek: { $hour: { $dateToParts: {date: { $dayOfMonth: { $toDate: { $ltrim: {input: '$obj.obj.obj.str',chars: "Alabama zero administration"} } } },timezone: "Africa/Timbuktu",iso8601: false} } } } } } } } } } }],as: 'jakob',in: { $indexOfArray: [{ $range: [13,16] },{ $millesecond: { $dayOfYear: { $month: { $isoWeekYear: { $second: { $isoWeekYear: { $minute: { $month: { $isoWeekYear: '$obj.obj.obj.date' } } } } } } } } }] }} }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [[],[],[{ $substrBytes: ["hacking Practical Granite Shirt",1,17] },'$obj.str'],[],[],[{ $mod: ['$obj.obj.obj.num',30291] }],[],["Iceland initiative wireless"]],useLongestLength: false,defaults: [[true,new Date("2018-09-06T16:42:51.767Z")],/Personal Loan Account|interfaces|withdrawal|yellow/,[/Intelligent Plastic Bike|cyan/]]} }, _id: 0}}],

        [{$project: {a: { $concat: [{ $substr: ["mindshare New Jersey",16,9] }] }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [['$obj.obj.obj.num'],["Mobility Tasty",{ $toLower: "Investment Account invoice Village" }],[],['$str',"Computers Books"]],useLongestLength: false} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.obj.obj.str',"solid state"],'$num'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Advanced",v: { $isoWeekYear: { $millesecond: { $week: { $dayOfMonth: { $minute: { $hour: { $month: { $minute: { $isoWeek: { $year: { $dateFromParts: {isoWeekYear: { $exp: '$obj.obj.num' },isoWeek: { $abs: 53359 },isoDayOfWeek: { $divide: ['$num',30038] },hour: { $size: [['$obj.obj.obj.str',{ $ltrim: { input: { $substrBytes: ["Turnpike",0,0] } } }]] },minute: { $log10: 6393 },timezone: "Etc/Universal"} } } } } } } } } } } }}]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$num'] }, _id: 0}}],

        [{$project: {a: { $month: { $isoWeekYear: { $dateFromString: { dateString: "2018-09-06T10:04:46.353Z" } } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "deposit Fresh redundant",v: true},{k: "Berkshire deposit Moldovan Leu",v: "Cloned adapter"}]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Practical Cotton Sausages Generic",v: "Books"}]] }, _id: 0}}],

        [{$project: {a: { $hour: { $toDate: { $filter: {input: ["Concrete Pants","Costa Rican Colon"],as: 'mohammad',cond: { $in: [{ $isoDayOfWeek: { $toDate: { $arrayElemAt: [[],'$obj.obj.obj.num'] } } },{ $concatArrays: [[],[78216],[],['$$mohammad']] }] }} } } }, _id: 0}}],

        [{$project: {a: { $filter: {input: [],as: 'ayla',cond: { $eq: [{ $arrayToObject: [[{k: "red Money Market Account Brand",v: false}]] },{ $arrayElemAt: [["Toys Computers Shirt"],36480] }] }} }, _id: 0}}],

        [{$project: {a: { $concat: [] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[{ $substr: [{ $toString: { $dateToString: {date: new Date("2018-09-05T20:13:26.879Z"),timezone: "US/Indiana-Starke",onNull: { $arrayElemAt: [[13440,5261,'$num'],77991] }} } },12,20] },"white Armenia"],[19103,'$obj.num'],['$obj.str'],[]]] }, _id: 0}}],

        [{$project: {a: { $reverseArray: [[{ $toLower: '$obj.obj.obj.obj.str' }]] }, _id: 0}}],

        [{$project: {a: { $dateFromString: {dateString: "2018-09-06T01:29:26.577Z",format: "%%-%L-%j-%w-%H-%z-%j-%V-%Z",onNull: '$obj.str'} }, _id: 0}}],

        [{$project: {a: { $month: { $year: { $hour: { $dateToParts: {date: { $dayOfWeek: '$obj.obj.date' },timezone: "America/Barbados",iso8601: false} } } } }, _id: 0}}],

        [{$project: {a: { $filter: {input: ["panel",'$obj.obj.str',"wireless mesh portals",{ $ltrim: { input: "methodologies" } }],as: 'scottie',cond: { $not: [{ $arrayElemAt: [['$$scottie',{ $indexOfArray: [{ $objectToArray: '$$scottie' },{ $dateToString: {date: { $millesecond: { $week: { $year: { $dateFromParts: {year: { $trunc: 51840 },month: { $size: [['$obj.obj.obj.str']] },minute: { $trunc: '$$scottie' },second: { $pow: [11102,35695] }} } } } },format: "%H-%Y-%j-%j-%S-%V-%w-%u-%d-%m-%z-%V",onNull: { $toUpper: "real-time haptic" }} },8,4] },'$num'],75840] }] }} }, _id: 0}}],

        [{$project: {a: { $minute: { $week: { $millesecond: { $toDate: { $trim: {input: "Botswana",chars: '$str'} } } } } }, _id: 0}}],

        [{$project: {a: { $filter: {input: [],cond: { $in: [{ $substrBytes: ["recontextualize",3,16] },{ $map: {input: [20396],as: 'lilyan',in: { $ln: 18703 }} }] }} }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [[28563,'$num'],['$num'],['$str']],useLongestLength: false} }, _id: 0}}],

        [{$project: {a: { $year: { $second: { $minute: { $dateFromString: {dateString: "2018-09-06T14:48:12.160Z",format: "%Y-%w-%Y-%V-%j-%M-%U-%Y-%V-%Z-%Z-%H",timezone: "Asia/Calcutta",onNull: "Movies"} } } } }, _id: 0}}],

        [{$project: {a: { $dayOfMonth: { $dayOfWeek: { $minute: { $hour: { $dateFromString: {dateString: "2018-09-06T09:34:37.315Z",onNull: { $dateToString: {date: new Date("2018-09-06T15:13:48.309Z"),format: "%V-%j-%M-%S-%d-%%"} }} } } } } }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj.obj' }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$obj.obj.obj.obj.num'],[]]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$num'] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],87046] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "convergence",v: false}]] }, _id: 0}}],

        [{$project: {a: { $month: new Date("2018-09-06T19:50:43.105Z") }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],[36513],[{ $toString: { $arrayElemAt: [['$obj.obj.obj.obj.str'],'$obj.obj.obj.num'] } }]]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[19116,'$obj.num',50182,'$num'],'$num'] }, _id: 0}}],

        [{$project: {a: { $week: { $isoWeek: { $minute: { $year: { $dateToString: {date: { $isoWeek: { $dayOfWeek: { $dayOfMonth: { $isoWeekYear: '$obj.obj.obj.date' } } } },timezone: "America/Godthab",onNull: "calculating Loop"} } } } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Seychelles Rupee",v: new Date("2018-09-06T06:36:36.917Z")},{k: "Gorgeous Soft Sausages New Hampshire",v: '$obj.obj.obj.num'},{k: "Avon",v: true},{k: "quantify",v: new Date("2018-09-06T06:17:10.666Z")},{k: "Canyon target",v: "Pound Sterling leading-edge"}]] }, _id: 0}}],

        [{$project: {a: { $map: {input: ['$obj.str'],in: { $log: [{ $floor: 57872 },83021] }} }, _id: 0}}],

        [{$project: {a: { $toString: { $week: { $isoDayOfWeek: { $millesecond: { $second: { $year: { $minute: { $dateFromString: {dateString: "2018-09-06T12:38:30.214Z",timezone: "America/Danmarkshavn",onError: { $arrayElemAt: [["Borders deploy navigating",'$str'],75320] }} } } } } } } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[85881,84141],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "program",v: '$obj.obj.str'},{k: "initiatives deposit",v: "haptic Director"}]] }, _id: 0}}],

        [{$project: {a: { $ltrim: { input: "Congolese Franc" } }, _id: 0}}],

        [{$project: {a: { $filter: {input: [],as: 'winfield',cond: { $and: [{ $trim: { input: '$$winfield' } }] }} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$str'],['$obj.obj.num']]] }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [[],[{ $toUpper: '$obj.obj.obj.str' }],["tan tan harness",{ $ltrim: {input: "Berkshire",chars: { $rtrim: { input: '$str' } }} },"Maine"],[]],useLongestLength: true} }, _id: 0}}],

        [{$project: {a: { $millesecond: { $isoWeekYear: { $dayOfWeek: { $dateFromParts: {year: { $divide: ['$obj.num',63038] },day: { $ln: '$obj.obj.num' },second: { $trunc: '$obj.obj.obj.num' }} } } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$obj.obj.num'],[{ $ltrim: {input: { $toString: { $reverseArray: [[]] } },chars: { $rtrim: {input: "North Dakota",chars: "azure XML"} }} },'$obj.obj.str',"Executive applications Berkshire",'$obj.obj.obj.str']]] }, _id: 0}}],

        [{$project: {a: { $concat: [{ $toUpper: "Ergonomic" }] }, _id: 0}}],

        [{$project: {a: { $map: {input: [],in: { $cmp: [{ $toUpper: '$obj.obj.obj.obj.str' },{ $arrayElemAt: [[73397],'$$this'] }] }} }, _id: 0}}],

        [{$project: {a: DATE;, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],34976] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[]] }, _id: 0}}],

        [{$project: {a: { $rtrim: {input: "drive enable virtual",chars: '$obj.obj.str'} }, _id: 0}}],

        [{$project: {a: { $filter: {input: [{ $substrBytes: ['$obj.obj.str',5,15] }],cond: { $not: [{ $dateToString: {date: { $dateFromParts: {year: { $sqrt: '$num' },day: { $size: [[65286,'$$this']] },second: { $ceil: '$obj.obj.obj.obj.num' },millisecond: { $indexOfArray: [{ $range: [4,18,11] },{ $dayOfMonth: { $week: { $minute: '$$this' } } },0] }} },onNull: '$$this'} }] }} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[1790,'$num',82611],[{ $substrCP: [{ $toString: { $substrBytes: ["projection",13,5] } },17,17] },"Avon next generation"]]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$obj.obj.obj.obj.num'],["West Virginia Personal Loan Account"],[]]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $ltrim: {input: '$obj.obj.obj.obj.str',chars: { $substr: ['$obj.str',10,2] }} }],'$num'] }, _id: 0}}],

        [{$project: {a: { $toString: { $dateToParts: {date: { $isoWeek: { $week: { $toDate: { $arrayElemAt: [['$obj.obj.obj.obj.str',{ $toString: { $rtrim: {input: "Personal Loan Account Virginia solid state",chars: { $rtrim: { input: "digital Rand Namibia Dollar" } }} } }],44044] } } } },timezone: "America/Lower_Princes",iso8601: false} } }, _id: 0}}],

        [{$project: {a: { $substrBytes: [{ $concat: ['$obj.obj.obj.obj.str'] },15,7] }, _id: 0}}],

        [{$project: {a: { $reverseArray: [["parsing Persistent online"]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[70575],{ $ln: 85831 }] }, _id: 0}}],

        [{$project: {a: { $isoDayOfWeek: { $isoDayOfWeek: { $dateFromParts: {year: 57161,day: { $subtract: ['$num','$obj.obj.obj.num'] },hour: { $pow: ['$obj.obj.obj.num',74443] },second: { $indexOfArray: [{ $filter: {input: [],cond: { $not: [{ $map: {input: ['$obj.obj.obj.str',"Adaptive",{ $toString: { $zip: {inputs: [[{ $ltrim: {input: { $toLower: { $substrCP: ['$$this',12,17] } },chars: "hack emulation deploy"} }]],defaults: [new Date("2018-09-06T02:07:37.297Z")]} } },'$$this'],in: { $sqrt: { $ln: 58898 } }} }] }} },{ $arrayToObject: [[]] },10,5] },millisecond: { $mod: [65694,48789] },timezone: "Etc/GMT+3"} } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $substrCP: ['$obj.obj.str',19,18] },"open-source primary non-volatile","Branding"],21228] }, _id: 0}}],

        [{$project: {a: { $filter: {input: [25253,'$obj.obj.obj.obj.num'],as: 'annette',cond: { $or: ["bypassing GB Clothing",{ $toLower: '$$annette' },{ $toLower: "redundant" }] }} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Seamless",v: false},{k: "Awesome Wooden Pizza capacitor transparent",v: { $dateToParts: {date: { $year: { $dateToString: {date: new Date("2018-09-06T18:35:18.356Z"),format: "%G-%Y-%V-%Z-%S-%H-%d-%d-%z-%S-%G"} } },timezone: "Australia/ACT",iso8601: true} }}]] }, _id: 0}}],

        [{$project: {a: { $toUpper: { $ltrim: {input: "Montana payment",chars: '$obj.obj.obj.str'} } }, _id: 0}}],

        [{$project: {a: { $year: { $week: { $dateFromParts: {isoWeekYear: { $ln: 51100 },isoWeek: { $multiply: [] },hour: { $cmp: [{ $objectToArray: '$obj.obj.obj.obj' },{ $arrayElemAt: [['$obj.obj.obj.num','$num'],53562] }] },second: { $subtract: ['$num',76959] },timezone: "Europe/Sofia"} } } }, _id: 0}}],

        [{$project: {a: { $reverseArray: [[]] }, _id: 0}}],

        [{$project: {a: { $concatArrays: [['$obj.obj.num',25537],["Village panel Hat"],[false]] }, _id: 0}}],

        [{$project: {a: { $reverseArray: [[]] }, _id: 0}}],

        [{$project: {a: { $range: [15,14,9] }, _id: 0}}],

        [{$project: {a: { $filter: {input: ['$obj.obj.str'],cond: { $and: [] }} }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj.obj' }, _id: 0}}],

        [{$project: {a: { $isoWeek: { $dayOfMonth: '$obj.obj.obj.date' } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[new Date("2018-09-06T02:02:32.642Z"),'$num'],78971] }, _id: 0}}],

        [{$project: {a: { $substrBytes: ['$obj.obj.obj.obj.str',10,13] }, _id: 0}}],

        [{$project: {a: { $map: {input: ["Auto Loan Account",{ $toUpper: '$obj.obj.obj.obj.str' }],in: { $log: [{ $floor: 53965 },'$obj.num'] }} }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [["Shoes monitor"],['$obj.obj.obj.num'],[{ $toString: { $arrayElemAt: [['$obj.num'],38651] } }]],useLongestLength: false,defaults: [new Date("2018-09-06T08:14:23.563Z"),{}]} }, _id: 0}}],

        [{$project: {a: { $toLower: "framework hard drive" }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Home Loan Account teal",v: new Date("2018-09-06T15:47:21.741Z")},{k: "Trace Credit Card Account index",v: 22019}]] }, _id: 0}}],

        [{$project: {a: { $filter: {input: [],cond: { $lt: [{ $month: { $year: { $dayOfMonth: { $minute: { $millesecond: { $dateToString: {date: { $dayOfYear: { $week: { $second: { $dayOfYear: { $millesecond: { $isoWeek: { $dateToParts: {date: { $dayOfWeek: { $dateToParts: {date: { $week: { $isoWeekYear: { $second: new Date("2018-09-06T17:24:20.466Z") } } },timezone: "America/Cambridge_Bay",iso8601: false} } },timezone: "Pacific/Honolulu"} } } } } } } },format: "%V-%L-%L-%Y-%V-%u"} } } } } } },{ $toUpper: '$$this' }] }} }, _id: 0}}],

        [{$project: {a: { $minute: { $dateFromParts: {year: { $mod: [48177,'$num'] },millisecond: { $cmp: [{ $arrayToObject: [[[{ $trim: { input: '$obj.obj.str' } },"Rial Omani Operations Focused"]]] },{ $toUpper: "Credit Card Account" }] }} } }, _id: 0}}],

        [{$project: {a: { $toDate: { $arrayElemAt: [["Nebraska Estate",{ $dateToString: {date: new Date("2018-09-05T20:39:54.684Z"),format: "%V-%d-%V-%S-%H-%U",timezone: "America/Argentina/Tucuman"} }],{ $cmp: [{ $zip: {inputs: [[false,'$obj.date'],[],[]],useLongestLength: false} },{ $arrayElemAt: [[],{ $add: ['$obj.obj.num'] }] }] }] } }, _id: 0}}],

        [{$project: {a: { $map: {input: ["deposit Incredible Function-based",{ $toLower: { $ltrim: {input: "Administrator Washington",chars: "motivating"} } },"Island"],in: { $trunc: 4444 }} }, _id: 0}}],

        [{$project: {a: { $filter: {input: [{ $substr: ["bottom-line Intelligent transmitting",5,13] },'$obj.obj.obj.obj.str',"recontextualize"],as: 'merle',cond: { $eq: [{ $trim: { input: { $toUpper: "optimize Health Refined" } } },{ $arrayElemAt: [[],44524] }] }} }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [[],[{ $ltrim: { input: "analyzer RAM" } },'$str']],useLongestLength: true,defaults: [{}]} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[76670],[],[]]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["Texas"],22727] }, _id: 0}}],

        [{$project: {a: { $substrCP: ['$obj.str',18,0] }, _id: 0}}],

        [{$project: {a: { $ltrim: { input: "granular Markets" } }, _id: 0}}],

        [{$project: {a: { $toDate: { $rtrim: { input: "Plastic" } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],55765] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],['$str'],[]]] }, _id: 0}}],

        [{$project: {a: { $concatArrays: [["Toys sky blue Senior","Future","discrete"],['$obj.obj.obj.str',"sexy Rustic Arkansas"],[]] }, _id: 0}}],

        [{$project: {a: { $minute: { $isoWeek: { $dayOfYear: { $dateFromString: {dateString: "2018-09-06T18:27:44.035Z",format: "%U-%G-%w-%d"} } } } }, _id: 0}}],

        [{$project: {a: { $dayOfMonth: { $month: { $dayOfWeek: { $dateToString: {date: '$obj.date',format: "%M-%M-%Z-%w-%Y",onNull: { $arrayElemAt: [['$obj.obj.obj.obj.str'],'$num'] }} } } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[3876,82016,52344,79962],'$obj.obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $dayOfYear: { $year: { $millesecond: { $isoWeek: { $isoWeek: { $hour: { $month: { $dateFromString: {dateString: "2018-09-05T23:25:15.957Z",onError: { $isoDayOfWeek: { $minute: { $dateFromString: {dateString: "2018-09-06T19:26:57.101Z",format: "%Z-%%-%%-%U-%Y-%z-%S",timezone: "Pacific/Palau"} } } }} } } } } } } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $toString: { $reverseArray: [[]] } },"Macedonia Handmade Wooden Bacon orange"],'$num'] }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj' }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.obj.obj.str',"invoice"],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $filter: {input: [],cond: { $isArray: [{ $trim: {input: { $concat: ['$$this'] },chars: "Forks Credit Card Account Games"} }] }} }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: new Date("2018-09-06T14:35:11.794Z"),timezone: "CET"} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$obj.obj.obj.obj.num','$obj.obj.num'],["Auto Loan Account transmitting out-of-the-box"],[false,true],[],[{ $toUpper: "Canyon Avon" },'$obj.obj.str'],['$obj.obj.obj.str',"attitude"]]] }, _id: 0}}],

        [{$project: {a: { $minute: { $dayOfMonth: { $minute: { $dayOfWeek: { $week: { $toDate: { $arrayToObject: [[{k: "vortals solutions",v: "eyeballs Turks and Caicos Islands"}]] } } } } } } }, _id: 0}}],

        [{$project: {a: { $ltrim: {input: { $substr: ['$obj.str',12,9] },chars: "methodical payment Parkway"} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],[{ $substrBytes: ["Buckinghamshire",19,1] }],[],['$obj.obj.num']]] }, _id: 0}}],

        [{$project: {a: { $week: { $isoWeek: { $year: { $minute: { $dayOfMonth: { $dateFromParts: {year: { $log10: '$obj.obj.obj.obj.num' },day: { $trunc: 23698 },hour: { $ceil: '$obj.num' },second: { $add: [] }} } } } } } }, _id: 0}}],

        [{$project: {a: { $millesecond: { $dateToParts: {date: { $dateFromParts: {year: { $subtract: [44277,'$obj.obj.obj.obj.num'] },day: { $subtract: ['$num',60805] },second: { $subtract: [69792,'$obj.obj.obj.obj.num'] },millisecond: { $pow: [83785,{ $ln: '$obj.obj.obj.obj.num' }] }} },timezone: "Pacific/Midway",iso8601: true} } }, _id: 0}}],

        [{$project: {a: { $substrBytes: [{ $substrCP: ["payment violet",19,16] },14,1] }, _id: 0}}],

        [{$project: {a: { $dayOfMonth: { $year: { $week: { $minute: { $second: new Date("2018-09-06T03:35:08.050Z") } } } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],26173] }, _id: 0}}],

        [{$project: {a: { $concat: ['$obj.obj.obj.str'] }, _id: 0}}],

        [{$project: {a: { $isoWeek: { $dateFromString: {dateString: "2018-09-06T02:40:39.759Z",format: "%m-%Y-%G-%U-%S-%L-%z-%d",timezone: "Africa/Abidjan"} } }, _id: 0}}],

        [{$project: {a: { $concat: ['$str',{ $toString: { $arrayElemAt: [["Licensed Granite Pizza Myanmar Principal","synergize hack auxiliary",'$obj.obj.obj.str'],{ $ln: 95577 }] } }] }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj' }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $substr: ["optimal open-source",8,12] }],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $minute: { $month: { $isoDayOfWeek: { $year: { $dateFromParts: {year: { $ceil: '$obj.obj.num' },month: { $mod: ['$obj.num',16091] },timezone: "Atlantic/Bermuda"} } } } } }, _id: 0}}],

        [{$project: {a: { $millesecond: { $year: { $dayOfWeek: { $minute: { $isoWeek: { $isoWeek: { $toDate: { $arrayToObject: [[]] } } } } } } } }, _id: 0}}],

        [{$project: {a: { $dateFromString: {dateString: "2018-09-06T01:11:59.974Z",format: "%G-%w-%L-%M",timezone: "Indian/Maldives",onNull: { $concatArrays: [['$obj.obj.obj.num','$num'],[{ $dateToString: {date: '$obj.obj.obj.date',format: "%M-%j-%j-%H-%L-%H-%m-%L-%z",timezone: "MET"} }],[50850],[{ $toLower: '$obj.obj.obj.obj.str' }],[]] }} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$obj.obj.obj.obj.num','$obj.obj.obj.obj.num'],[],['$obj.str','$str',{ $toString: { $arrayElemAt: [[51403,false],'$obj.obj.num'] } },"Chips virtual Persevering"]]] }, _id: 0}}],

        [{$project: {a: { $concat: [{ $toLower: "Interactions Unbranded Technician" }] }, _id: 0}}],

        [{$project: {a: { $range: [19,7,12] }, _id: 0}}],

        [{$project: {a: { $concatArrays: [[],['$obj.num'],[]] }, _id: 0}}],

        [{$project: {a: { $filter: {input: [32503],cond: { $gte: [{ $dayOfMonth: { $month: { $isoWeek: { $year: { $toDate: { $map: {input: ['$$this'],in: { $mod: [61613,'$obj.obj.obj.obj.num'] }} } } } } } },{ $arrayToObject: [[[{ $substrBytes: ['$obj.obj.str',14,12] },"Bahrain bandwidth",{ $concat: ["system",{ $toUpper: '$obj.obj.obj.str' }] }],[],[],[{ $toLower: "hacking data-warehouse visualize" },35166],[false]]] }] }} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Azerbaijan scalable",v: '$obj.obj.date'}]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "connect invoice",v: 8023}]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["Islands ADP matrix"],1858] }, _id: 0}}],

        [{$project: {a: { $filter: {input: [],as: 'giovani',cond: { $gt: [{ $dayOfWeek: { $month: { $hour: { $isoWeekYear: { $toDate: { $arrayElemAt: [['$$giovani'],'$$giovani'] } } } } } },{ $arrayToObject: [[[],[]]] }] }} }, _id: 0}}],

        [{$project: {a: { $millesecond: { $dateFromString: {dateString: "2018-09-06T13:45:32.206Z",onError: { $arrayElemAt: [[],5259] }} } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[12113],'$num'] }, _id: 0}}],

        [{$project: {a: { $toString: { $arrayElemAt: [['$obj.obj.obj.str'],'$obj.obj.num'] } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$obj.obj.obj.obj.num'],['$str'],[],["calculating vortals transmitting",'$obj.obj.str']]] }, _id: 0}}],

        [{$project: {a: { $substr: ['$str',7,10] }, _id: 0}}],

        [{$project: {a: { $reverseArray: [[]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],5527] }, _id: 0}}],

        [{$project: {a: { $range: [5,18,12] }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: new Date("2018-09-06T13:05:39.581Z"),format: "%Y-%G-%L-%d-%M-%Y-%M-%w",timezone: "Asia/Tbilisi"} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $rtrim: { input: "Avon Dynamic whiteboard" } }],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $substrBytes: [{ $toLower: { $toString: { $arrayToObject: [[[{ $mod: ['$obj.num',7687] }],["bluetooth",'$obj.obj.obj.str'],[true],[],[]]] } } },20,5] }, _id: 0}}],

        [{$project: {a: { $toUpper: "solutions synthesizing" }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $toUpper: '$obj.obj.obj.obj.str' },"Home Loan Account"],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $week: { $isoDayOfWeek: { $isoWeek: { $dateToParts: { date: { $dateToParts: {date: { $toDate: { $hour: { $millesecond: { $year: { $dayOfMonth: { $month: { $year: { $isoWeekYear: { $hour: new Date("2018-09-05T20:48:58.671Z") } } } } } } } } },timezone: "America/Araguaina"} } } } } } }, _id: 0}}],

        [{$project: {a: { $dateFromParts: {isoWeekYear: { $sqrt: '$num' },isoWeek: { $ceil: 23733 },hour: { $trunc: '$obj.obj.obj.num' },second: { $pow: [43673,99662] },millisecond: { $add: [] }} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "bypass Samoa",v: { $trim: {input: '$obj.obj.str',chars: "Handcrafted integrate"} }}]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$num'] }, _id: 0}}],

        [{$project: {a: { $dayOfYear: { $dateFromString: {dateString: "2018-09-06T17:34:09.451Z",format: "%j-%M-%V-%M-%u-%%-%H-%L",onError: { $arrayElemAt: [['$obj.obj.obj.num'],92874] }} } }, _id: 0}}],

        [{$project: {a: { $reverseArray: [[]] }, _id: 0}}],

        [{$project: {a: { $range: [6,7] }, _id: 0}}],

        [{$project: {a: { $substrBytes: [{ $toUpper: { $substrCP: [{ $rtrim: {input: '$obj.obj.str',chars: "deploy"} },9,9] } },5,8] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Bahamian Dollar Sudanese Pound Lead",v: { $second: { $dayOfYear: { $dayOfMonth: { $dateFromParts: {isoWeekYear: { $add: [{ $exp: 44090 },'$obj.num','$obj.obj.num'] },second: { $log10: 898 }} } } } }},{k: "bi-directional Jamaica Usability",v: 8082}]] }, _id: 0}}],

        [{$project: {a: { $range: [9,16,12] }, _id: 0}}],

        [{$project: {a: { $range: [10,13,17] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $toLower: { $substrBytes: ['$obj.obj.obj.str',16,0] } }],'$obj.obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[]] }, _id: 0}}],

        [{$project: {a: DATE;, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Administrator",v: '$num'}]] }, _id: 0}}],

        [{$project: {a: { $dateFromParts: {year: { $log: [49233,27292] },day: { $size: [[]] },hour: { $divide: [89563,'$obj.obj.obj.obj.num'] },minute: { $mod: ['$obj.num',{ $abs: '$obj.obj.obj.num' }] }} }, _id: 0}}],

        [{$project: {a: { $filter: {input: ['$obj.obj.obj.str'],cond: { $lte: [{ $toUpper: "Cambridgeshire Checking Account" },{ $arrayElemAt: [[],82613] }] }} }, _id: 0}}],

        [{$project: {a: { $dateToParts: {date: '$date',timezone: "Indian/Chagos",iso8601: true} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[]] }, _id: 0}}],

        [{$project: {a: { $range: [14,15,13] }, _id: 0}}],

        [{$project: {a: { $trim: { input: { $toString: { $arrayElemAt: [[86204,'$obj.obj.obj.num'],'$obj.obj.obj.obj.num'] } } } }, _id: 0}}],

        [{$project: {a: { $toString: { $arrayElemAt: [[88878],'$obj.num'] } }, _id: 0}}],

        [{$project: {a: LOOKUP_date;, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$num'],[80906]]] }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj' }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $substrBytes: ['$obj.obj.obj.obj.str',15,9] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["withdrawal capacitor eco-centric",{ $dateToString: {date: '$date',format: "%H-%j-%S-%Y-%u-%L-%%-%H-%z-%G",timezone: "America/Indiana/Winamac"} },"salmon"],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $map: {input: [],as: 'drake',in: { $ln: 80474 }} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Berkshire",v: new Date("2018-09-06T15:20:55.657Z")}]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],[]]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["Wyoming",{ $toString: { $toDate: { $reverseArray: [[]] } } }],'$obj.obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $week: { $isoDayOfWeek: { $millesecond: { $millesecond: { $isoWeek: { $isoDayOfWeek: { $year: { $month: { $dateToParts: {date: { $week: { $dayOfWeek: { $dayOfWeek: { $month: { $second: { $isoWeekYear: { $dateFromString: {dateString: "2018-09-06T05:32:58.411Z",timezone: "Africa/El_Aaiun",onNull: "European Unit of Account 17(E.U.A.-17) Computers throughput"} } } } } } } },iso8601: false} } } } } } } } } }, _id: 0}}],

        [{$project: {a: { $year: { $dayOfYear: { $isoWeek: { $isoWeekYear: { $hour: { $millesecond: { $week: { $dateFromString: {dateString: "2018-09-06T18:39:14.241Z",format: "%%-%V-%H-%H-%z-%%-%S-%z-%%-%V",timezone: "America/Panama"} } } } } } } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$num',46432],72950] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Rustic Cotton Soap",v: '$obj.obj.obj.obj.str'}]] }, _id: 0}}],

        [{$project: {a: { $toDate: { $map: {input: ['$obj.obj.obj.str'],as: 'ernestine',in: { $subtract: [40691,55040] }} } }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: new Date("2018-09-05T23:01:31.737Z"),timezone: "America/Porto_Acre",onNull: '$obj.obj.obj.str'} }, _id: 0}}],

        [{$project: {a: { $substrBytes: [{ $toUpper: '$obj.obj.str' },8,4] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.num','$obj.obj.num','$obj.obj.obj.num'],41957] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$num'] }, _id: 0}}],

        [{$project: {a: { $ltrim: {input: '$obj.str',chars: "Tasty"} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],['$obj.obj.obj.obj.num']]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $toUpper: "tangible" }],55140] }, _id: 0}}],

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
