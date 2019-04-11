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
        return coll.insert({_id: 1908,str: "deposit",num: 68012,date: new Date("2018-09-06T05:02:12.966Z"),array: [92392,{_id: 1909,str: "Plastic",num: 70747,date: new Date("2018-09-06T13:30:26.337Z"),array: [new Date("2018-09-06T00:05:51.538Z"),"Assurance holistic",24751],obj: {}},new Date("2018-09-06T14:45:35.479Z"),"generating Incredible Fresh Gloves Assurance",{_id: 1910,num: 20640,array: [],obj: {_id: 1911,str: "panel",num: 42720,date: new Date("2018-09-06T01:10:24.632Z"),array: [],obj: {_id: 1912,date: new Date("2018-09-05T21:59:15.384Z"),obj: {}}}},"national back up",new Date("2018-09-05T22:05:28.871Z"),{_id: 1913,str: "Reverse-engineered Function-based"},[],new Date("2018-09-06T19:33:18.692Z")]});
    },

    function(coll) {
        return coll.insert({_id: 1914,str: "Streamlined Paradigm",num: 59506,date: new Date("2018-09-05T23:14:10.981Z"),array: [8954,"Generic motivating",new Date("2018-09-06T11:48:29.185Z"),"deposit","Corners collaborative knowledge user","Rustic Rubber Towels extranet Beauty",new Date("2018-09-06T13:30:47.218Z"),13671,84972,{_id: 1915,str: "Handcrafted Fresh Shirt ability",num: 60453,date: new Date("2018-09-06T06:51:03.212Z"),array: [],obj: {_id: 1916,str: "Overpass Credit Card Account Future-proofed",num: 83861,date: new Date("2018-09-05T21:56:05.223Z"),array: []}}]});
    },

    function(coll) {
        return coll.insert({_id: 1917,str: "Accountability",date: new Date("2018-09-06T13:29:10.528Z"),array: [new Date("2018-09-06T04:17:13.831Z"),95032,[],new Date("2018-09-06T05:38:03.799Z"),new Date("2018-09-06T02:30:13.353Z"),{_id: 1918,str: "National Grocery magenta",num: 35848,date: new Date("2018-09-06T07:17:26.655Z"),array: [],obj: {_id: 1919,num: 95928,date: new Date("2018-09-06T08:05:48.220Z"),array: [],obj: {_id: 1920,str: "24 hour enhance sky blue",num: 84764,obj: {}}}},"Cambridgeshire Auto Loan Account grow","paradigms analyzer enterprise",new Date("2018-09-05T22:14:43.885Z"),20898]});
    },

    function(coll) {
        return coll.insert({_id: 1921,str: "Table implement",num: 40952,date: new Date("2018-09-05T21:31:29.405Z"),array: [],obj: {_id: 1922,str: "portals Practical Metal Chair",array: [67937,{_id: 1923,num: 57769,date: new Date("2018-09-06T05:42:28.126Z"),array: []},new Date("2018-09-06T13:04:22.975Z"),"microchip Refined",new Date("2018-09-06T14:54:59.895Z"),24338,96722,[new Date("2018-09-06T14:00:35.920Z"),"generate Health whiteboard","HTTP Berkshire",18077],["AGP",{_id: 1924,str: "viral Som Music",num: 29044},new Date("2018-09-06T02:58:11.175Z")],[]]}});
    },

    function(coll) {
        return coll.insert({_id: 1925,str: "directional Trace South Dakota",date: new Date("2018-09-06T00:37:22.913Z"),array: [],obj: {_id: 1926,str: "system input",num: 48184,date: new Date("2018-09-06T14:36:16.590Z"),array: [new Date("2018-09-06T16:10:51.508Z"),57814,"copying RAM Avon",12342,91056,[],new Date("2018-09-06T02:16:48.577Z"),"Investment Account blue Customer",{_id: 1927,str: "North Dakota structure",num: 97375,array: [],obj: {_id: 1928,num: 941,date: new Date("2018-09-06T19:49:49.296Z"),array: [[new Date("2018-09-06T01:23:00.289Z")]],obj: {}}},{_id: 1929,date: new Date("2018-09-06T15:50:08.276Z")},{_id: 1930,str: "Corporate",num: 89921,date: new Date("2018-09-06T09:27:41.474Z"),array: [],obj: {_id: 1931,str: "needs-based innovate invoice",num: 70393,obj: {}}},78732],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 1932,num: 5250,date: new Date("2018-09-06T00:36:28.046Z"),array: [{_id: 1933,str: "interface withdrawal Refined Plastic Tuna",num: 74929,date: new Date("2018-09-06T19:40:05.821Z"),obj: {_id: 1934,num: 53345,date: new Date("2018-09-06T12:49:58.535Z"),obj: {}}},new Date("2018-09-06T12:29:44.771Z"),{_id: 1935,str: "Object-based Buckinghamshire",num: 67714,array: []},14711,80521,31735,"redundant Brazilian Real Principal","Macao",[32155,97127,"Money Market Account Progressive"],"evolve",new Date("2018-09-05T23:05:49.217Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 1936,str: "Open-source Refined Wooden Pants National",num: 99480,date: new Date("2018-09-05T23:27:40.789Z"),array: [new Date("2018-09-06T03:53:05.116Z"),10306,"Cotton","sticky Dynamic purple",new Date("2018-09-06T15:07:57.325Z"),14929,"bus pink Checking Account",new Date("2018-09-06T09:13:04.661Z"),new Date("2018-09-06T13:03:22.205Z")],obj: {_id: 1937,str: "maximized Generic Rubber Tuna",num: 28910,date: new Date("2018-09-06T12:59:31.952Z"),obj: {_id: 1938,str: "Generic Concrete Pizza",date: new Date("2018-09-06T01:47:58.246Z"),array: [],obj: {_id: 1939,num: 44743,array: []}}}});
    },

    function(coll) {
        return coll.insert({_id: 1940,str: "artificial intelligence",num: 47279,date: new Date("2018-09-05T21:33:19.751Z"),array: [new Date("2018-09-06T02:46:18.120Z"),new Date("2018-09-06T09:04:19.972Z"),["SAS reboot Technician"],"back-end Cape Grocery",70726,26334,29168,[],[new Date("2018-09-06T14:21:39.335Z"),{_id: 1941,str: "North Carolina",num: 19590,date: new Date("2018-09-05T23:34:41.771Z"),array: [],obj: {}},[],new Date("2018-09-06T06:33:05.271Z"),"green",55479],{_id: 1942,num: 8341,obj: {_id: 1943,str: "ROI orange engineer",array: [89153,16338],obj: {_id: 1944,str: "Generic synthesizing",date: new Date("2018-09-05T23:01:51.993Z"),obj: {}}}}]});
    },

    function(coll) {
        return coll.insert({_id: 1945,str: "Inverse",num: 59676,date: new Date("2018-09-06T02:16:20.168Z"),array: [],obj: {_id: 1946,str: "Tasty Steel Chips Stravenue COM",num: 39987,date: new Date("2018-09-05T19:55:46.123Z"),array: [new Date("2018-09-06T07:57:05.594Z"),81719]}});
    },

    function(coll) {
        return coll.insert({_id: 1947,str: "payment bluetooth",num: 63460,date: new Date("2018-09-05T20:47:19.325Z"),array: [],obj: {_id: 1948,num: 4926,obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 1949,str: "Granite",num: 6085,date: new Date("2018-09-05T23:12:21.547Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 1950,str: "Coordinator Principal Dale",num: 67537,date: new Date("2018-09-05T19:59:06.173Z"),array: [new Date("2018-09-06T05:25:34.370Z"),new Date("2018-09-06T17:01:09.148Z"),"Motorway",3165,{_id: 1951,str: "Soap 24/7 redundant",num: 49573,array: [],obj: {_id: 1952,date: new Date("2018-09-06T06:45:46.215Z"),array: [new Date("2018-09-05T21:57:29.571Z"),new Date("2018-09-05T20:05:21.245Z"),new Date("2018-09-06T12:13:45.099Z"),[]],obj: {}}},"array","Alabama Fantastic Fresh Cheese",{_id: 1953,str: "Pizza synergize Principal",num: 64595,date: new Date("2018-09-06T11:01:52.002Z"),array: [],obj: {_id: 1954,str: "Concrete Web",date: new Date("2018-09-05T21:46:37.012Z"),array: [[42957,[],{_id: 1955,num: 97337,date: new Date("2018-09-06T08:31:58.733Z"),array: [],obj: {}},66028]]}}]});
    },

    function(coll) {
        return coll.insert({_id: 1956,str: "azure Chips invoice",num: 49940,date: new Date("2018-09-06T13:43:14.692Z"),array: ["Switchable vortals Small",55699,"Unbranded auxiliary success",15787,new Date("2018-09-06T04:30:18.371Z"),{_id: 1957,str: "protocol contextually-based Borders",num: 91169,date: new Date("2018-09-05T22:00:34.748Z"),array: []},new Date("2018-09-06T06:27:10.648Z"),37806,new Date("2018-09-06T05:11:10.126Z"),[],5357,{_id: 1958,str: "Costa Rican Colon Producer",date: new Date("2018-09-06T10:51:16.474Z"),obj: {}},{_id: 1959,num: 64806,date: new Date("2018-09-06T16:49:06.642Z"),array: [[new Date("2018-09-06T05:18:08.033Z")],"bypass Planner","interfaces International Research"],obj: {_id: 1960,str: "Baht Books",date: new Date("2018-09-06T13:10:32.340Z"),array: [78078,new Date("2018-09-05T21:41:12.685Z")],obj: {}}}],obj: {_id: 1961,num: 36548,array: []}});
    },

    function(coll) {
        return coll.insert({_id: 1962,str: "out-of-the-box Auto Loan Account",num: 65254,date: new Date("2018-09-05T23:21:57.847Z"),array: [23153,new Date("2018-09-06T17:07:18.211Z"),new Date("2018-09-05T22:34:38.915Z"),[],["Generic Graphical User Interface clicks-and-mortar",56556,"Ball"],"Administrator deliverables","Officer 1080p Web",new Date("2018-09-06T04:57:20.949Z"),[],new Date("2018-09-06T16:18:56.745Z"),"metrics transform",20459],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 1963,str: "Research Outdoors",num: 6557,date: new Date("2018-09-06T00:51:16.374Z"),array: [62037,{_id: 1964,str: "Licensed Steel Towels",num: 19432,date: new Date("2018-09-06T18:43:14.066Z"),obj: {_id: 1965,num: 11981,date: new Date("2018-09-06T14:24:54.805Z"),array: [],obj: {}}},new Date("2018-09-05T21:22:19.294Z"),"Rustic Wooden Mouse","Garden mission-critical",new Date("2018-09-06T01:03:55.890Z"),new Date("2018-09-06T08:36:39.987Z"),65902,79799,"THX turn-key Strategist",95779,[{_id: 1966,date: new Date("2018-09-06T16:37:34.830Z"),array: [],obj: {}},[],{_id: 1967,num: 33812,array: []},{_id: 1968,str: "Latvia Avon",num: 55333,date: new Date("2018-09-06T01:31:59.078Z"),array: [new Date("2018-09-06T00:32:41.200Z")],obj: {_id: 1969,str: "Avon US Dollar",date: new Date("2018-09-05T21:32:05.709Z")}}]]});
    },

    function(coll) {
        return coll.insert({_id: 1970,str: "Technician open-source",num: 781,array: [],obj: {_id: 1971,num: 45294,date: new Date("2018-09-06T04:25:19.353Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 1972,str: "Cote d'Ivoire Place Ergonomic",num: 93527,obj: {_id: 1973,num: 13956,date: new Date("2018-09-06T11:16:10.942Z"),array: ["Extended Bedfordshire",new Date("2018-09-06T17:54:45.615Z"),"Towels",new Date("2018-09-05T22:40:46.688Z"),[],8379,{_id: 1974,str: "Massachusetts cross-platform",num: 95916,date: new Date("2018-09-06T17:46:09.295Z"),array: [78856,new Date("2018-09-06T15:44:50.507Z")],obj: {}},"groupware capacitor analyzing",[46593,new Date("2018-09-05T21:39:09.678Z")],{_id: 1975,str: "magenta intermediate Grocery",num: 67058},new Date("2018-09-06T04:04:53.999Z"),[]]}});
    },

    function(coll) {
        return coll.insert({_id: 1976,str: "national Home Loan Account index",num: 41005,date: new Date("2018-09-06T09:09:23.515Z"),array: [33731,"Wooden Customer","Executive Handmade Steel Bike compressing",new Date("2018-09-06T12:24:07.224Z"),[],[new Date("2018-09-06T07:12:45.187Z")],33927,new Date("2018-09-06T05:49:13.472Z"),50920,34198,[{_id: 1977,num: 14164,date: new Date("2018-09-06T14:45:17.356Z"),array: ["encoding optical secured line",37318],obj: {_id: 1978,str: "green PNG",num: 48880,date: new Date("2018-09-05T21:33:00.780Z"),array: [],obj: {}}}],new Date("2018-09-06T08:55:33.227Z"),"orchid SCSI",{_id: 1979,str: "Rustic",num: 54000,date: new Date("2018-09-05T21:51:23.614Z"),array: []}],obj: {_id: 1980,obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 1981,str: "Street driver Buckinghamshire",num: 26868,date: new Date("2018-09-06T09:51:13.986Z")});
    },

    function(coll) {
        return coll.insert({_id: 1982,str: "Practical Plastic Gloves De-engineered compressing",date: new Date("2018-09-06T19:01:00.910Z"),array: ["Chips 24/7",new Date("2018-09-06T04:13:17.239Z"),new Date("2018-09-06T03:18:27.449Z"),new Date("2018-09-05T23:08:02.241Z"),45864,94780,"Borders",[],new Date("2018-09-06T04:32:37.703Z"),26344,{_id: 1983,str: "deposit",num: 95983,date: new Date("2018-09-05T20:02:11.245Z"),array: [],obj: {}}],obj: {_id: 1984,str: "Plain",num: 28195,obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 1985,str: "Hat",num: 1924,date: new Date("2018-09-05T20:52:31.416Z"),array: [12530,37518,new Date("2018-09-06T11:46:32.624Z"),"connecting","envisioneer",[],new Date("2018-09-06T14:28:18.802Z"),"Planner",new Date("2018-09-05T23:49:17.353Z"),35418,new Date("2018-09-06T06:55:29.740Z"),5905],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 1986,num: 29935,date: new Date("2018-09-06T16:12:08.632Z"),array: [],obj: {_id: 1987,str: "mobile haptic New Mexico",num: 74775,array: ["Keyboard",new Date("2018-09-05T20:04:04.356Z"),72865,25269,97108,"Adaptive",{_id: 1988,str: "Directives Tasty Plastic Fish",num: 4366,date: new Date("2018-09-06T14:41:25.653Z"),array: [],obj: {_id: 1989,str: "mindshare Villages Practical Wooden Soap",date: new Date("2018-09-06T05:15:49.142Z"),array: ["Executive","exuding Home Loan Account"],obj: {}}},[],[],90560,12727]}});
    },

    function(coll) {
        return coll.insert({_id: 1990,str: "Outdoors Ameliorated",num: 70305,date: new Date("2018-09-06T09:41:10.507Z"),array: [],obj: {_id: 1991,date: new Date("2018-09-06T00:36:22.917Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 1992,str: "bluetooth Springs multi-byte",num: 78051,date: new Date("2018-09-06T19:32:07.297Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 1993,str: "Practical Metal Keyboard",num: 6065,date: new Date("2018-09-06T19:43:18.609Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 1994,str: "Singapore bus Bike",num: 16331,array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 1995,str: "Soft",num: 63799,date: new Date("2018-09-06T01:47:22.333Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 1996,str: "Arkansas budgetary management Seychelles Rupee",num: 86323,date: new Date("2018-09-06T03:20:42.771Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 1997,str: "Small Soft Tuna bluetooth open-source",date: new Date("2018-09-06T03:49:10.148Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 1998,str: "Technician",num: 75304,date: new Date("2018-09-06T13:22:53.501Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 1999,str: "Utah indigo Ergonomic",num: 75615,date: new Date("2018-09-06T10:42:39.431Z"),array: ["Unbranded GB",new Date("2018-09-06T04:41:33.070Z"),67222,9646,new Date("2018-09-06T03:54:54.909Z"),"redefine transmit encryption",66667,{_id: 2000,str: "Group Multi-lateral",date: new Date("2018-09-06T08:39:26.458Z"),array: []},"Fish Buckinghamshire artificial intelligence",[new Date("2018-09-06T06:33:21.526Z"),{_id: 2001,num: 8890,array: [],obj: {}},"AI tan"],79913,57424,"optical Product"],obj: {_id: 2002,str: "Incredible Frozen Tuna teal",date: new Date("2018-09-06T11:55:07.965Z"),array: [],obj: {_id: 2003,str: "Personal Loan Account Maine",num: 54572,date: new Date("2018-09-06T10:44:05.357Z")}}});
    },

    function(coll) {
        return coll.insert({_id: 2004,str: "connecting solutions",num: 97933,date: new Date("2018-09-06T06:03:33.333Z"),array: [new Date("2018-09-06T18:59:34.324Z"),29767,{_id: 2005,str: "Ports Shoes initiatives",num: 81375,date: new Date("2018-09-06T16:05:27.686Z"),array: [new Date("2018-09-06T00:21:57.245Z"),"Administrator Refined Soft Soap open-source",76061,new Date("2018-09-06T01:21:13.771Z"),"Isle Handmade",54996,"Oman"],obj: {}},42099,new Date("2018-09-06T17:42:35.999Z"),"algorithm cultivate",[],{_id: 2006,str: "Throughway Buckinghamshire Borders",num: 14720,date: new Date("2018-09-06T06:15:24.675Z"),array: [],obj: {_id: 2007,date: new Date("2018-09-06T10:11:53.666Z"),array: [],obj: {_id: 2008,num: 80128,array: [],obj: {}}}},new Date("2018-09-06T12:27:19.437Z")]});
    },

    function(coll) {
        return coll.insert({_id: 2009,str: "interactive",num: 35064,date: new Date("2018-09-06T01:33:00.797Z"),array: [10049,new Date("2018-09-06T16:56:05.201Z"),new Date("2018-09-06T16:31:59.299Z"),62645,62924,["SCSI",new Date("2018-09-06T02:22:08.840Z"),{_id: 2010,str: "multi-tasking Cliffs New Zealand Dollar",num: 59963,date: new Date("2018-09-06T06:33:01.311Z"),array: [],obj: {_id: 2011,str: "Soft Object-based initiatives",num: 9680,date: new Date("2018-09-06T09:11:05.851Z"),array: [],obj: {_id: 2012,num: 35251,date: new Date("2018-09-06T18:21:48.363Z"),array: []}}},[]],{_id: 2013,str: "Intelligent transparent interfaces",obj: {_id: 2014,str: "Mouse",num: 27327,date: new Date("2018-09-06T11:31:06.351Z"),array: [],obj: {}}},"Open-source","Argentine Peso",new Date("2018-09-06T14:27:45.628Z")],obj: {_id: 2015,date: new Date("2018-09-06T00:55:29.804Z"),array: [74797,"value-added Accounts Bangladesh","seize technologies Intuitive"],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 2016,num: 19942,date: new Date("2018-09-06T14:10:40.472Z"),array: [],obj: {_id: 2017,str: "Wyoming",num: 21150,date: new Date("2018-09-06T05:04:36.012Z"),array: [[],"Money Market Account Comoro Franc JSON","Arkansas",new Date("2018-09-05T23:56:53.377Z"),38155,"paradigm monitor",new Date("2018-09-06T08:13:44.072Z"),33772,[{_id: 2018,str: "core Kina Future",num: 46611,array: [67000,{_id: 2019,str: "backing up 6th generation",date: new Date("2018-09-05T20:02:46.913Z"),array: [],obj: {}},15460],obj: {}},new Date("2018-09-06T16:58:43.935Z"),new Date("2018-09-05T20:58:39.138Z"),new Date("2018-09-06T05:42:50.543Z")]]}});
    },

    function(coll) {
        return coll.insert({_id: 2020,str: "1080p Product",num: 68735,date: new Date("2018-09-06T03:26:01.739Z"),array: ["Technician",new Date("2018-09-06T07:46:51.883Z"),new Date("2018-09-06T06:26:17.876Z"),new Date("2018-09-06T18:03:32.482Z"),88352,"sexy",new Date("2018-09-06T00:24:24.841Z"),{_id: 2021,str: "Antarctica (the territory South of 60 deg S)",num: 64607,date: new Date("2018-09-06T10:59:52.320Z"),array: [],obj: {}},new Date("2018-09-06T06:10:42.678Z"),91467,"Mississippi"]});
    },

    function(coll) {
        return coll.insert({_id: 2022,str: "Connecticut",num: 41633,date: new Date("2018-09-06T09:54:09.335Z"),array: [],obj: {_id: 2023,str: "Unbranded Frozen Hat Computer",date: new Date("2018-09-06T13:07:48.283Z"),array: [20191,new Date("2018-09-05T21:47:29.237Z"),"solution","Shoes Indiana Tools",{_id: 2024,num: 24347,date: new Date("2018-09-06T18:35:31.859Z"),array: [99324]},new Date("2018-09-06T07:17:22.884Z"),[],14031,"IB gold",9319,new Date("2018-09-06T03:09:41.101Z"),96654,[{_id: 2025,str: "Texas Down-sized",num: 19890,array: [{_id: 2026,str: "Architect",num: 12541,obj: {}}],obj: {}},86028,new Date("2018-09-06T12:08:12.015Z")],13838],obj: {_id: 2027,str: "efficient Facilitator",num: 62645,array: []}}});
    },

    function(coll) {
        return coll.insert({_id: 2028,str: "Engineer Tala solution-oriented",num: 79580,date: new Date("2018-09-06T08:59:55.476Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 2029,str: "well-modulated",num: 6998,date: new Date("2018-09-06T14:18:03.971Z"),array: [78524,"system engine Planner Club","Branding online",[[],new Date("2018-09-06T08:30:31.178Z"),{_id: 2030,str: "reboot",num: 6158,date: new Date("2018-09-06T07:40:49.213Z"),array: [{_id: 2031,str: "open-source Springs",array: [],obj: {}},35458]}],"transmitter Automated Dynamic",30703,new Date("2018-09-06T05:03:12.022Z"),88647,{_id: 2032,num: 88953,date: new Date("2018-09-06T04:05:27.715Z"),obj: {_id: 2033,str: "SMS",num: 78071,date: new Date("2018-09-06T17:29:26.238Z"),array: []}},"Gorgeous Wooden Table mobile",new Date("2018-09-06T16:21:20.592Z"),[99185],new Date("2018-09-06T13:31:47.409Z"),"Savings Account moderator"],obj: {_id: 2034,array: [54886,new Date("2018-09-06T00:05:50.419Z"),44236],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 2035,str: "bypass",num: 86086,date: new Date("2018-09-06T19:04:53.355Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 2036,str: "Wooden",num: 37272,date: new Date("2018-09-06T09:45:37.706Z"),array: [77539,[],new Date("2018-09-06T01:30:49.950Z"),"tertiary Senior Practical Metal Shirt",97031,new Date("2018-09-06T06:17:30.353Z"),"Global",{_id: 2037,str: "Engineer Credit Card Account Tasty",obj: {_id: 2038,str: "Turkmenistan Gold",num: 59536,date: new Date("2018-09-06T01:08:20.125Z"),array: ["Latvia Electronics one-to-one",9623,new Date("2018-09-06T04:06:27.974Z")],obj: {}}},[],[60725,41281],"mobile Hong Kong Dollar"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 2039,str: "B2C Guinea Franc Practical Granite Bike",num: 83285,date: new Date("2018-09-06T16:05:18.088Z"),array: [],obj: {_id: 2040,str: "online mobile",date: new Date("2018-09-06T19:11:01.996Z"),array: ["process improvement",62184,36812,new Date("2018-09-05T22:37:55.595Z"),"Customer",new Date("2018-09-05T21:41:21.057Z"),"extend",{_id: 2041,num: 88566,date: new Date("2018-09-06T02:34:21.241Z"),obj: {_id: 2042,str: "Convertible Marks FTP",num: 97386,date: new Date("2018-09-06T18:47:48.176Z"),array: [],obj: {}}},50624,{_id: 2043,str: "Borders District",num: 36027},"Money Market Account Fresh transmit"],obj: {_id: 2044,str: "Iranian Rial Checking Account",num: 82363,date: new Date("2018-09-06T18:25:03.513Z"),array: []}}});
    },

    function(coll) {
        return coll.insert({_id: 2045,str: "orchestration Horizontal",num: 99240,date: new Date("2018-09-06T10:16:39.739Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 2046,str: "Optional Computers",num: 5449,array: [95515,[],93744,30024,new Date("2018-09-06T02:26:44.345Z"),46455,"Phased JBOD",47156,["AGP overriding infrastructures",new Date("2018-09-06T16:30:29.610Z"),"Cambridgeshire pink","Mountain override enterprise"],[]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 2047,str: "Secured",num: 25854,date: new Date("2018-09-06T14:56:46.593Z"),array: ["ivory open-source",75304,28930,["PCI","Chips Investment Account",5154],new Date("2018-09-05T20:49:39.523Z"),{_id: 2048,str: "Ukraine auxiliary",num: 46830,date: new Date("2018-09-06T06:53:09.128Z"),array: [new Date("2018-09-06T07:08:23.537Z"),"incubate engineer responsive",new Date("2018-09-06T13:18:04.400Z"),"turquoise payment TCP",83636],obj: {_id: 2049,str: "Avenue Mobility RAM",num: 60321,date: new Date("2018-09-06T00:15:03.856Z")}},{_id: 2050,str: "Frozen",date: new Date("2018-09-06T07:44:19.077Z"),array: [],obj: {_id: 2051,str: "Object-based",num: 46394,obj: {_id: 2052,str: "Games",date: new Date("2018-09-06T18:02:00.485Z"),array: [18878],obj: {}}}},{_id: 2053,num: 97550,array: [],obj: {}},new Date("2018-09-06T16:51:53.053Z"),33757]});
    },

    function(coll) {
        return coll.insert({_id: 2054,str: "empowering unleash visionary",num: 94461,date: new Date("2018-09-06T14:05:03.117Z"),array: [31001,[],new Date("2018-09-05T21:27:46.004Z"),new Date("2018-09-06T17:31:20.554Z"),new Date("2018-09-06T13:34:06.507Z"),55836,"Views River Administrator",new Date("2018-09-06T01:03:02.750Z"),75338,{_id: 2055,str: "Wooden benchmark",num: 71959,date: new Date("2018-09-06T15:46:03.067Z"),array: [new Date("2018-09-06T06:36:06.910Z"),"extranet Borders"],obj: {_id: 2056,str: "HDD Handcrafted synthesize",date: new Date("2018-09-06T09:07:15.028Z")}},"protocol","invoice Metrics Music",[]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 2057,str: "neural virtual",num: 13338,date: new Date("2018-09-05T23:18:29.862Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 2058,str: "payment",num: 7643,date: new Date("2018-09-06T05:00:02.330Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 2059,str: "Personal Loan Account connecting",num: 9018,date: new Date("2018-09-06T16:11:57.481Z"),obj: {_id: 2060,str: "Facilitator Coves silver",num: 44439,date: new Date("2018-09-06T01:20:51.300Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 2061,num: 10082,date: new Date("2018-09-06T04:44:07.666Z"),array: [84291,{_id: 2062,str: "Soft",num: 16500,array: [[],new Date("2018-09-06T03:56:16.010Z"),"Borders Personal Loan Account","RAM Wallis and Futuna Villages",72067],obj: {_id: 2063,str: "Table California budgetary management",num: 67985,date: new Date("2018-09-06T12:45:42.566Z"),array: [],obj: {}}},35473,["scale solutions",25230],new Date("2018-09-06T18:57:17.666Z"),new Date("2018-09-06T18:19:39.151Z"),new Date("2018-09-06T08:00:46.679Z"),{_id: 2064,str: "redundant Personal Loan Account recontextualize",date: new Date("2018-09-06T03:30:46.252Z"),array: [],obj: {}},81198]});
    },

    function(coll) {
        return coll.insert({_id: 2065,str: "Berkshire",num: 37734,obj: {_id: 2066,str: "Refined Future-proofed multi-byte",date: new Date("2018-09-06T04:59:38.535Z"),array: [new Date("2018-09-05T21:44:37.346Z"),"deposit",28766,{_id: 2067,str: "Infrastructure web-enabled",date: new Date("2018-09-06T13:45:54.037Z"),array: [],obj: {}},70286,{_id: 2068,str: "reboot",num: 46061,date: new Date("2018-09-06T05:29:38.096Z"),array: ["indexing Kyat hack",22370,"Investor",[],new Date("2018-09-06T17:46:11.117Z")],obj: {}},"Open-architected Djibouti Djibouti",{_id: 2069,str: "Practical Rubber Chips",num: 98057,obj: {_id: 2070,num: 82688,date: new Date("2018-09-06T01:39:22.486Z"),array: [],obj: {}}}],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 2071,str: "generating Qatari Rial",num: 50840,date: new Date("2018-09-06T01:23:57.210Z"),array: ["New Taiwan Dollar",new Date("2018-09-06T13:27:25.209Z"),17008,{_id: 2072,str: "Home Loan Account Borders",num: 36677,date: new Date("2018-09-06T02:59:42.271Z"),array: [new Date("2018-09-06T16:20:53.272Z")],obj: {}},[],"Chips compress recontextualize",56773,7375,"orange",new Date("2018-09-06T00:50:06.390Z"),15665,[],40646,new Date("2018-09-05T21:23:34.410Z")],obj: {_id: 2073,str: "Thailand",num: 19666,date: new Date("2018-09-06T04:45:15.389Z"),array: [19682],obj: {_id: 2074,str: "Hong Kong Dollar Multi-tiered",num: 65870,date: new Date("2018-09-06T14:43:20.243Z"),obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 2075,str: "Trail Sleek Plastic Shoes",num: 89176,date: new Date("2018-09-06T18:31:43.776Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 2076,num: 9607,date: new Date("2018-09-06T17:20:44.279Z"),array: [],obj: {_id: 2077,str: "value-added",num: 27072,date: new Date("2018-09-06T17:30:03.178Z"),array: ["SSL Forward input","Ergonomic Metal Table Profit-focused Bedfordshire",new Date("2018-09-05T23:57:39.134Z"),new Date("2018-09-06T04:10:28.428Z"),new Date("2018-09-06T15:42:20.361Z"),{_id: 2078,str: "Architect",date: new Date("2018-09-06T08:31:07.055Z"),array: [],obj: {}},"reinvent hybrid",19243,"Bedfordshire 24/7",[],82708,59125]}});
    },

    function(coll) {
        return coll.insert({_id: 2079,str: "Handcrafted Fresh Fish intermediate",num: 43890,date: new Date("2018-09-05T22:33:02.110Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 2080,str: "networks data-warehouse compress",num: 94148,date: new Date("2018-09-06T16:36:31.036Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 2081,str: "hard drive panel",num: 67100,date: new Date("2018-09-06T05:43:33.453Z"),array: [],obj: {_id: 2082,str: "wireless Interactions architecture",num: 66400,date: new Date("2018-09-06T00:21:10.347Z"),array: [[],new Date("2018-09-06T10:27:57.520Z"),"Garden mobile","communities",83216,"bypass Marketing",{_id: 2083,str: "product input",num: 30843,date: new Date("2018-09-06T17:15:33.012Z"),array: [{_id: 2084,date: new Date("2018-09-06T01:51:54.576Z"),obj: {_id: 2085,num: 68563,array: []}},new Date("2018-09-05T23:06:39.045Z"),63081],obj: {_id: 2086,str: "Cheese local area network",array: [56892],obj: {}}},new Date("2018-09-06T16:44:08.074Z"),"quantify bandwidth-monitored",{_id: 2087,str: "global"},{_id: 2088,num: 88446,date: new Date("2018-09-05T22:20:44.062Z"),array: [],obj: {_id: 2089,num: 57958,date: new Date("2018-09-06T11:35:10.485Z"),obj: {}}},new Date("2018-09-06T09:14:58.840Z"),92344]}});
    },

    function(coll) {
        return coll.insert({_id: 2090,str: "Venezuela",num: 93611,date: new Date("2018-09-06T05:43:37.052Z"),array: [[87859],"Frozen Investor",new Date("2018-09-06T06:31:25.823Z"),{_id: 2091,str: "Granite Sri Lanka",num: 67039,date: new Date("2018-09-06T17:38:37.987Z"),obj: {}},"United States Minor Outlying Islands Engineer",new Date("2018-09-06T05:09:47.719Z"),3506,new Date("2018-09-05T23:26:28.172Z"),34900,{_id: 2092,str: "invoice",num: 28692,array: [],obj: {_id: 2093,date: new Date("2018-09-05T22:00:24.884Z"),array: []}},new Date("2018-09-06T02:46:03.298Z"),"Engineer Agent back-end",new Date("2018-09-06T02:31:21.145Z"),"Cambridgeshire Corporate"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 2094,str: "eyeballs Berkshire JSON",num: 31086,date: new Date("2018-09-06T05:13:41.505Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 2095,str: "Lead parsing superstructure",num: 15169,date: new Date("2018-09-06T04:29:39.946Z"),array: [],obj: {_id: 2096,num: 82854,date: new Date("2018-09-06T09:02:17.994Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 2097,str: "Human Graphic Interface Group",num: 44711,date: new Date("2018-09-06T00:32:26.739Z"),array: [],obj: {_id: 2098,str: "Global wireless Handmade",num: 77559,date: new Date("2018-09-06T13:23:31.433Z"),array: [[new Date("2018-09-05T23:41:39.617Z"),"Marketing Investor"],36161,"Fresh Legacy",83778,new Date("2018-09-06T13:43:11.303Z"),85931,{_id: 2099,str: "Cambridgeshire Parks",num: 45404,date: new Date("2018-09-05T22:31:32.448Z"),array: []},"input Operative Computers","Fresh Administrator Bridge",new Date("2018-09-05T21:47:15.836Z")],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 2100,str: "alarm",num: 23782,date: new Date("2018-09-06T13:50:09.495Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 2101,num: 99223,date: new Date("2018-09-06T10:45:34.023Z"),array: [],obj: {_id: 2102,str: "open-source Plains",num: 90302,date: new Date("2018-09-06T16:46:34.060Z"),array: [new Date("2018-09-06T15:22:09.525Z"),[],30911,68544,"HTTP Bosnia and Herzegovina contextually-based",54088,new Date("2018-09-05T23:59:10.764Z"),"bottom-line navigating",[],"Brand Handcrafted Plastic Chicken Managed",new Date("2018-09-06T00:09:30.058Z"),"Sleek haptic Forward",new Date("2018-09-06T07:54:42.503Z")],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 2103,str: "Dynamic Product",num: 97313,date: new Date("2018-09-05T21:34:35.295Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 2104,str: "schemas",num: 57224,date: new Date("2018-09-06T05:42:24.920Z"),array: [],obj: {_id: 2105,str: "Avon",num: 59402,date: new Date("2018-09-05T21:52:20.060Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 2106,str: "gold Jordanian Dinar",num: 81608,array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 2107,str: "Computers",num: 63543,date: new Date("2018-09-06T13:41:40.310Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 2108,str: "invoice",num: 11578,date: new Date("2018-09-06T07:56:20.517Z"),array: [],obj: {_id: 2109,str: "Inverse online",num: 99919,array: [new Date("2018-09-06T09:23:11.202Z"),{_id: 2110,str: "capability",num: 78869,date: new Date("2018-09-05T22:32:54.535Z"),array: [],obj: {}},new Date("2018-09-06T01:06:01.093Z"),"SQL",38803,new Date("2018-09-06T08:15:18.616Z"),71477,"Gorgeous",69504,{_id: 2111,str: "e-enable",num: 13179,date: new Date("2018-09-05T22:12:24.135Z"),obj: {}},"asynchronous Concrete action-items"]}});
    },

    function(coll) {
        return coll.insert({_id: 2112,str: "cyan Checking Account strategic",num: 96867,date: new Date("2018-09-06T14:02:00.965Z"),array: [],obj: {_id: 2113,str: "holistic systems",num: 70792,array: [],obj: {_id: 2114,str: "Czech Koruna Chilean Peso Unidades de fomento",num: 15097,date: new Date("2018-09-06T03:21:39.162Z"),array: ["high-level Saudi Riyal",82501,1748,new Date("2018-09-06T17:11:30.153Z"),"Handcrafted Savings Account Electronics",new Date("2018-09-06T15:18:02.500Z"),{_id: 2115,str: "Manager Colorado",num: 47059,date: new Date("2018-09-06T11:56:34.968Z")},"circuit",6482,[],[{_id: 2116,date: new Date("2018-09-06T10:51:13.421Z"),obj: {}}],new Date("2018-09-06T00:36:02.986Z")],obj: {_id: 2117,num: 2925,date: new Date("2018-09-05T22:46:47.486Z"),array: []}}}});
    },

    function(coll) {
        return coll.insert({_id: 2118,str: "Music Concrete Metrics",num: 66951,array: ["Buckinghamshire",new Date("2018-09-06T04:37:19.773Z"),74173,new Date("2018-09-06T10:16:38.582Z"),[{_id: 2119,num: 42903,date: new Date("2018-09-06T16:28:29.467Z"),obj: {_id: 2120,str: "Technician",array: [],obj: {_id: 2121,str: "AGP Licensed Frozen Bike",num: 71664,date: new Date("2018-09-06T00:55:10.872Z"),array: [],obj: {_id: 2122,str: "bluetooth payment",num: 81883,date: new Date("2018-09-06T17:42:37.450Z"),array: [],obj: {}}}}},new Date("2018-09-06T09:44:20.022Z")],"Avon Ergonomic CFA Franc BCEAO","Cloned deposit Algerian Dinar",76928,15691,new Date("2018-09-06T12:37:03.330Z"),new Date("2018-09-06T15:51:45.187Z")]});
    },

    function(coll) {
        return coll.insert({_id: 2123,str: "red",num: 97488,date: new Date("2018-09-06T06:04:09.859Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 2124,str: "Monaco back up pink",date: new Date("2018-09-06T04:37:28.141Z"),array: [93542,new Date("2018-09-06T11:55:15.230Z"),86141,"methodologies Chair Tunisian Dinar","Customer-focused Optimization",new Date("2018-09-06T01:12:14.170Z"),"multi-tasking Web",new Date("2018-09-06T09:42:19.853Z"),89134,[],{_id: 2125,str: "drive Officer",num: 43675,date: new Date("2018-09-06T13:30:03.287Z"),array: [{_id: 2126,str: "Investment Account Handcrafted Cotton Keyboard",num: 78263,array: [],obj: {}},19416],obj: {}},"Florida"],obj: {_id: 2127,str: "Internal generating",num: 22372,date: new Date("2018-09-06T09:47:15.124Z"),array: [new Date("2018-09-06T05:10:29.373Z"),{_id: 2128,date: new Date("2018-09-06T18:38:44.738Z"),obj: {_id: 2129,str: "Minnesota",num: 79361,date: new Date("2018-09-06T17:51:44.564Z"),array: [],obj: {_id: 2130,str: "Wisconsin",num: 82245}}}]}});
    },

    function(coll) {
        return coll.insert({_id: 2131,str: "purple Heights",num: 94755,date: new Date("2018-09-06T08:18:11.099Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 2132,str: "Keys Mexican Peso Mexican Unidad de Inversion (UDI) Path",num: 48884,date: new Date("2018-09-06T07:13:37.360Z"),array: [new Date("2018-09-06T11:47:42.163Z"),57773,"Table",new Date("2018-09-06T08:39:20.378Z"),new Date("2018-09-06T00:37:02.478Z"),12575,"Marketing encryption payment","PCI Pants",new Date("2018-09-05T21:52:36.426Z"),new Date("2018-09-06T13:45:04.480Z"),[]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 2133,str: "maximize",num: 29074,date: new Date("2018-09-06T19:35:32.217Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 2134,str: "quantifying synergy",num: 29957,array: [],obj: {_id: 2135,str: "invoice deliverables",num: 19835,date: new Date("2018-09-06T14:34:30.497Z"),array: [new Date("2018-09-06T04:14:35.977Z"),44770,[],"Russian Ruble next generation",88189,"withdrawal plum",new Date("2018-09-06T07:38:05.748Z")],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 2136,str: "Bacon Customer Soap",date: new Date("2018-09-06T06:47:21.727Z"),obj: {_id: 2137,str: "Planner bandwidth-monitored",num: 45554,array: [73792,62215,"strategy",10452,new Date("2018-09-05T20:13:02.642Z"),"one-to-one foreground explicit","Chips programming"],obj: {_id: 2138,num: 43243,date: new Date("2018-09-06T07:15:22.791Z"),array: []}}});
    },

    function(coll) {
        return coll.insert({_id: 2139,num: 99062,date: new Date("2018-09-06T14:15:05.038Z"),array: [],obj: {_id: 2140,num: 88126,date: new Date("2018-09-06T02:05:16.090Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 2141,str: "installation Markets Lead",num: 84603,date: new Date("2018-09-06T19:21:12.493Z"),array: ["Incredible ability",new Date("2018-09-06T02:58:18.694Z"),80843,new Date("2018-09-06T08:07:18.470Z"),[28139,new Date("2018-09-06T19:17:09.944Z")],"bricks-and-clicks",[],new Date("2018-09-06T13:37:43.411Z"),"Metal Licensed analyzer","paradigms back up",{_id: 2142,str: "compressing invoice e-commerce",num: 47949,date: new Date("2018-09-05T21:53:16.907Z"),array: [91972],obj: {_id: 2143,str: "Savings Account",num: 93215,date: new Date("2018-09-06T07:05:41.348Z"),obj: {}}},60053,{_id: 2144,str: "cross-platform",array: [],obj: {}},48165]});
    },

    function(coll) {
        return coll.insert({_id: 2145,str: "6th generation",num: 42888,date: new Date("2018-09-06T18:56:48.461Z"),array: [[91302,new Date("2018-09-06T06:32:59.255Z"),new Date("2018-09-05T23:40:32.526Z"),"architect Taka Awesome Steel Shoes",61943],37041,"Metrics Denar programming",{_id: 2146,str: "schemas synthesizing",num: 51173,date: new Date("2018-09-06T11:55:01.890Z"),array: [],obj: {_id: 2147,str: "24/365",num: 65459,array: [[]]}},"compressing parallelism",new Date("2018-09-06T12:54:26.491Z"),"initiatives Pennsylvania withdrawal",{_id: 2148,num: 94935,date: new Date("2018-09-06T08:38:08.126Z"),array: [6661],obj: {}},[]],obj: {_id: 2149,obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 2150,str: "robust",num: 40481,date: new Date("2018-09-06T02:10:42.376Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 2151,str: "system challenge",num: 48474,date: new Date("2018-09-06T14:03:09.233Z"),array: ["benchmark Coordinator",79251,4057,"transition",new Date("2018-09-06T06:18:08.705Z"),{_id: 2152,str: "Equatorial Guinea",date: new Date("2018-09-06T09:38:04.720Z"),array: [],obj: {}},{_id: 2153,str: "drive Phased Analyst",num: 67458,date: new Date("2018-09-06T00:28:01.035Z"),array: [9214,new Date("2018-09-06T14:55:20.649Z"),new Date("2018-09-05T20:39:58.731Z")],obj: {_id: 2154,str: "Shores Intelligent",num: 3456,date: new Date("2018-09-06T09:17:25.309Z"),obj: {_id: 2155,num: 53321,date: new Date("2018-09-06T08:08:38.608Z")}}},"Grocery",[{_id: 2156,array: []}],[],new Date("2018-09-05T21:15:50.687Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 2157,str: "Bulgarian Lev Practical Granite Sausages",num: 92667,date: new Date("2018-09-06T11:19:18.435Z"),array: [],obj: {_id: 2158,str: "Marketing Total black",num: 94032,date: new Date("2018-09-06T15:48:19.814Z"),array: ["Russian Federation Mountain feed",34999,{_id: 2159,str: "global backing up Tuna",num: 26643,date: new Date("2018-09-05T22:20:37.565Z"),obj: {}},"withdrawal Small Metal Shirt Officer",36936,"Implementation driver",new Date("2018-09-05T21:27:42.433Z"),new Date("2018-09-06T01:03:11.431Z"),[],"Kids reboot Garden",new Date("2018-09-06T03:15:03.981Z"),"Borders artificial intelligence"]}});
    },

    function(coll) {
        return coll.insert({_id: 2160,str: "Licensed Wooden Cheese",num: 64865,date: new Date("2018-09-06T01:31:42.396Z"),array: ["paradigm","circuit firewall Refined Metal Tuna",87740,"Bedfordshire firewall Ports",48024,new Date("2018-09-06T16:16:02.876Z"),new Date("2018-09-06T15:58:14.004Z"),45828,62432,new Date("2018-09-06T04:22:59.150Z"),{_id: 2161,num: 96457,date: new Date("2018-09-06T05:16:17.919Z"),array: [],obj: {}}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 2162,str: "Unbranded Plastic Chips",num: 68358,date: new Date("2018-09-05T20:10:40.587Z"),array: [new Date("2018-09-06T13:31:01.411Z"),"panel Data Home Loan Account","Strategist distributed Nepalese Rupee",23222,27731,new Date("2018-09-06T02:25:25.815Z"),"Future bifurcated",19137,new Date("2018-09-06T19:47:14.900Z"),new Date("2018-09-06T02:11:03.102Z"),[],{_id: 2163,str: "Credit Card Account",num: 33637,date: new Date("2018-09-06T17:57:29.271Z"),array: [68427,"grey"],obj: {}}],obj: {_id: 2164,date: new Date("2018-09-05T22:44:26.761Z"),array: [[{_id: 2165,str: "circuit XSS",num: 93064,date: new Date("2018-09-06T11:15:27.707Z"),array: []},new Date("2018-09-06T07:29:47.542Z"),new Date("2018-09-06T08:36:22.646Z")],{_id: 2166,str: "Rubber",num: 66169,obj: {_id: 2167,num: 35016,array: [],obj: {_id: 2168,str: "multi-byte Optimization invoice"}}}]}});
    },

    function(coll) {
        return coll.insert({_id: 2169,str: "North Dakota",num: 38594,date: new Date("2018-09-05T22:12:05.896Z"),array: [new Date("2018-09-06T12:52:46.024Z"),73492,{_id: 2170,str: "Garden",date: new Date("2018-09-06T02:56:38.433Z"),array: [],obj: {}},new Date("2018-09-06T10:03:44.911Z"),33986,new Date("2018-09-06T18:43:40.062Z"),["Officer"],new Date("2018-09-05T19:56:24.010Z"),new Date("2018-09-06T07:00:52.814Z"),"Sharable digital Synergistic",21925,"THX orchid Manager","customized","synergize payment Fish","Dominican Republic Frozen"],obj: {_id: 2171,str: "matrix",num: 81236,date: new Date("2018-09-06T14:25:46.391Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 2172,str: "Rustic Rubber Towels synergize",num: 45795,date: new Date("2018-09-06T02:15:34.777Z"),array: [],obj: {_id: 2173,str: "Gloves interactive",num: 55369,date: new Date("2018-09-05T21:13:15.382Z"),array: ["Wyoming deliverables","copying Berkshire circuit",69161,53169,"invoice",new Date("2018-09-06T14:06:43.868Z"),new Date("2018-09-06T08:58:39.509Z"),new Date("2018-09-06T18:03:17.016Z"),"orange connecting Dynamic",32931,"Human Tasty"],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 2174,num: 25821,date: new Date("2018-09-06T19:06:54.665Z"),array: ["action-items",78593,[new Date("2018-09-06T00:59:36.701Z")],new Date("2018-09-06T10:17:37.425Z"),421,new Date("2018-09-06T12:23:20.927Z"),"Steel Marketing",38265],obj: {_id: 2175,str: "Road Savings Account logistical",num: 9677,date: new Date("2018-09-06T08:17:43.163Z"),array: [],obj: {_id: 2176,date: new Date("2018-09-06T10:41:02.514Z"),array: ["Officer Corporate",[84045,"Bike Investor RSS",{_id: 2177,str: "override Fish",num: 33903,date: new Date("2018-09-06T15:20:14.374Z"),array: []},{_id: 2178,str: "Sports Frozen",num: 40915,date: new Date("2018-09-05T22:17:05.751Z")},"visualize calculating deposit"],new Date("2018-09-06T15:01:22.717Z"),"Intuitive",new Date("2018-09-06T13:54:34.642Z")],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 2179,str: "Mouse parsing",num: 82737,date: new Date("2018-09-06T14:30:05.401Z"),obj: {_id: 2180,str: "Fiji Dollar",num: 71726,date: new Date("2018-09-06T05:16:18.275Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 2181,str: "Corporate",num: 34395,date: new Date("2018-09-06T07:37:55.769Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 2182,num: 21318,obj: {_id: 2183,str: "parsing Avon Dynamic",num: 34114,date: new Date("2018-09-05T20:20:10.019Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 2184,str: "Gorgeous Fresh Tuna invoice",num: 31886,array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 2185,num: 18233,date: new Date("2018-09-06T09:52:43.354Z"),obj: {_id: 2186,str: "Rubber Program",num: 8611,date: new Date("2018-09-06T16:03:20.603Z"),array: [43407,"calculating enterprise",23448,{_id: 2187,str: "task-force",date: new Date("2018-09-06T18:58:55.587Z"),array: [],obj: {}},new Date("2018-09-06T16:37:25.190Z"),24784,new Date("2018-09-06T10:16:09.598Z"),"generate Bedfordshire RSS","metrics",6853,{_id: 2188,str: "technologies",num: 47932,date: new Date("2018-09-05T20:05:18.508Z"),array: [],obj: {}}],obj: {_id: 2189,str: "Analyst Analyst",num: 96288,array: [new Date("2018-09-06T10:04:43.363Z"),[],"Soap"]}}});
    },

    function(coll) {
        return coll.insert({_id: 2190,str: "salmon systematic Liaison",num: 55700,date: new Date("2018-09-05T20:28:53.058Z"),array: [],obj: {_id: 2191,str: "Refined Soft Pizza Switzerland",date: new Date("2018-09-06T06:28:22.094Z"),array: [new Date("2018-09-06T15:56:32.656Z"),"Alabama Fresh European Unit of Account 17(E.U.A.-17)","compressing",{_id: 2192,num: 46495,array: [77715,new Date("2018-09-06T13:43:03.695Z"),[],new Date("2018-09-06T08:12:53.719Z")],obj: {}},[],17374,96638,"Turkish Lira Chair",new Date("2018-09-06T15:15:03.275Z"),new Date("2018-09-06T00:25:39.203Z")]}});
    },

    function(coll) {
        return coll.insert({_id: 2193,str: "payment bluetooth program",num: 21938,array: [new Date("2018-09-06T11:42:16.558Z"),89235,{_id: 2194,str: "Customizable Shirt",date: new Date("2018-09-06T14:17:12.278Z"),obj: {}},new Date("2018-09-05T23:53:09.728Z"),"Home Loan Account Borders",90410,{_id: 2195,str: "pixel Small",date: new Date("2018-09-05T21:27:15.837Z"),array: [],obj: {_id: 2196,num: 83469,date: new Date("2018-09-06T06:12:58.271Z"),array: [],obj: {}}},["Fantastic Specialist"],{_id: 2197,str: "Utah",num: 11200,date: new Date("2018-09-06T17:38:31.123Z"),array: [new Date("2018-09-06T06:25:24.406Z"),7346],obj: {_id: 2198,num: 21159}},"Avon",698],obj: {_id: 2199,str: "Wyoming Fresh",num: 67507,array: []}});
    },

    function(coll) {
        return coll.insert({_id: 2200,str: "deliverables",num: 22907,date: new Date("2018-09-06T12:05:46.122Z"),array: [],obj: {_id: 2201,str: "Chair Technician",num: 8001,date: new Date("2018-09-06T16:00:41.818Z"),array: [87040,"Orchestrator North Dakota",new Date("2018-09-05T22:54:01.889Z"),[],{_id: 2202,num: 2854,array: [23465,"green Buckinghamshire intangible","program",new Date("2018-09-06T09:26:52.043Z"),new Date("2018-09-06T11:24:07.856Z"),[{_id: 2203,num: 24198,date: new Date("2018-09-06T02:36:21.886Z"),array: [new Date("2018-09-06T15:27:31.047Z")],obj: {}}]],obj: {_id: 2204,str: "Meadows",num: 96794,date: new Date("2018-09-06T07:23:09.567Z")}},"Fantastic",15606,new Date("2018-09-06T14:13:31.710Z"),"Massachusetts",22993],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 2205,str: "clicks-and-mortar",num: 64361,obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 2206,str: "RAM indexing auxiliary",num: 95748,date: new Date("2018-09-06T15:44:54.860Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 2207,str: "transmitting white",num: 68692,date: new Date("2018-09-06T16:21:23.145Z"),array: [],obj: {_id: 2208,str: "Granite Turkey",num: 77816,date: new Date("2018-09-05T23:24:11.884Z"),obj: {_id: 2209,num: 78963,date: new Date("2018-09-05T23:54:53.691Z"),array: []}}});
    },

    function(coll) {
        return coll.insert({_id: 2210,str: "Checking Account Jewelery open-source",num: 61242,date: new Date("2018-09-06T02:55:30.019Z"),obj: {_id: 2211,str: "mesh Borders Spain",num: 60007,obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 2212,str: "Bacon",date: new Date("2018-09-06T08:54:20.367Z"),array: [new Date("2018-09-06T09:06:12.287Z"),48206,5700,[84800,{_id: 2213,str: "ivory",num: 33537,array: [],obj: {}},"circuit","Reverse-engineered",[new Date("2018-09-06T06:15:37.131Z"),"Trail"],"programming South Carolina",new Date("2018-09-06T16:10:21.877Z")],new Date("2018-09-06T10:21:11.773Z"),"Home Loan Account",73038,"Underpass Central"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 2214,str: "didactic Borders back-end",num: 25554,date: new Date("2018-09-05T20:28:55.813Z"),obj: {_id: 2215,str: "turn-key Ball Investment Account",num: 76945,date: new Date("2018-09-06T00:32:29.942Z"),array: [[],"virtual payment",50042,"harness",27215,new Date("2018-09-06T03:17:10.556Z"),"sensor pixel",new Date("2018-09-05T21:38:45.314Z"),[new Date("2018-09-06T01:20:51.746Z"),{_id: 2216,str: "zero defect",num: 7794,date: new Date("2018-09-06T16:04:50.361Z"),array: ["Grocery Self-enabling intermediate"]}],{_id: 2217,str: "Data Falkland Islands (Malvinas)",date: new Date("2018-09-06T13:42:51.124Z"),obj: {}},32524,"Mauritius Rupee Rustic Granite Table"],obj: {_id: 2218,date: new Date("2018-09-06T16:54:23.147Z"),array: [],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 2219,str: "Borders Communications",num: 5283,date: new Date("2018-09-06T11:47:12.100Z"),array: [43613,{_id: 2220,str: "Incredible Frozen Chair Concrete",num: 63862,array: [],obj: {_id: 2221,str: "Handcrafted Steel Car Legacy",num: 3699,date: new Date("2018-09-06T09:37:34.566Z"),array: [[79575,new Date("2018-09-05T21:11:26.610Z"),2125,"generate redundant",new Date("2018-09-06T19:46:28.093Z")],"impactful Generic",23730,"Alaska context-sensitive system-worthy"],obj: {}}},new Date("2018-09-06T03:04:24.112Z"),{_id: 2222,num: 60754,date: new Date("2018-09-06T15:32:07.786Z"),array: []},"input Checking Account",new Date("2018-09-05T23:33:14.968Z"),"Brand",new Date("2018-09-06T14:10:11.188Z"),38873],obj: {_id: 2223,str: "Gateway Street",date: new Date("2018-09-05T20:20:23.162Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 2224,str: "Brooks Pizza",num: 58186,array: ["array program Yuan Renminbi",{_id: 2225,str: "Persevering",date: new Date("2018-09-06T01:17:17.452Z"),obj: {_id: 2226,str: "payment Oklahoma Implementation",array: [],obj: {}}},new Date("2018-09-06T09:28:04.692Z"),32925,[],53571,31577,"connect e-services",new Date("2018-09-05T22:18:07.692Z"),83393,new Date("2018-09-06T03:40:32.342Z"),[{_id: 2227,num: 6557,date: new Date("2018-09-06T05:21:16.223Z"),array: [],obj: {}}]],obj: {_id: 2228,num: 7608,date: new Date("2018-09-06T04:41:17.258Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 2229,str: "Saint Barthelemy Frozen collaborative",num: 67747,date: new Date("2018-09-06T12:34:07.035Z"),array: ["functionalities generating COM","Handcrafted connecting Multi-channelled",15631,["Steel"],10779,new Date("2018-09-06T05:36:19.561Z"),{_id: 2230,str: "Response",num: 98643,array: [],obj: {}},new Date("2018-09-06T19:02:45.898Z"),54801,47952,{_id: 2231,str: "Grocery",num: 64338,date: new Date("2018-09-06T12:34:29.885Z"),obj: {_id: 2232,str: "virtual Savings Account",array: [new Date("2018-09-06T08:11:21.445Z")]}},new Date("2018-09-06T06:28:30.466Z"),"Vanuatu RSS"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 2233,str: "navigating payment Response",date: new Date("2018-09-06T17:53:45.397Z"),array: [new Date("2018-09-06T16:31:30.370Z"),28510,[],"exuding Generic Plastic Hat productivity",new Date("2018-09-06T17:06:01.377Z"),new Date("2018-09-06T04:46:12.084Z"),50957,[]],obj: {_id: 2234,str: "PCI",num: 580,obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 2235,str: "Avon Web Berkshire",num: 15180,date: new Date("2018-09-06T01:37:30.200Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 2236,str: "Analyst",num: 89080,date: new Date("2018-09-06T13:32:43.423Z"),array: [19466,"COM ability Sleek",28744,{_id: 2237,str: "connect",num: 71359,date: new Date("2018-09-06T10:01:51.640Z"),array: [],obj: {_id: 2238,str: "optimize Usability",num: 13824,date: new Date("2018-09-05T21:23:39.316Z"),obj: {}}},new Date("2018-09-06T01:08:21.561Z"),"User-friendly generate",new Date("2018-09-06T13:54:30.416Z"),[14075,new Date("2018-09-06T13:38:58.785Z"),"IB Balanced content",5975],85253,"Ergonomic Concrete Salad",new Date("2018-09-06T08:21:43.181Z"),[]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 2239,str: "Officer Nicaragua Berkshire",num: 62417,array: [94039,"primary brand",new Date("2018-09-06T09:54:57.012Z"),"Islands",[new Date("2018-09-06T15:16:50.786Z"),new Date("2018-09-06T13:58:00.566Z"),63639],{_id: 2240,str: "Boliviano Mvdol web-enabled",date: new Date("2018-09-06T02:11:23.263Z"),array: [],obj: {_id: 2241,num: 83344,date: new Date("2018-09-06T13:23:29.593Z"),obj: {}}},52308,"Customer Ranch",[[]],607,"Equatorial Guinea envisioneer ADP"],obj: {_id: 2242,str: "Pine Shoes",num: 89383,date: new Date("2018-09-06T05:28:33.631Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 2243,str: "Naira Berkshire",num: 84346,date: new Date("2018-09-06T02:59:22.617Z"),array: [],obj: {_id: 2244,str: "National 1080p",num: 8875,date: new Date("2018-09-06T03:17:43.939Z"),array: [new Date("2018-09-06T01:17:21.213Z"),7836,new Date("2018-09-05T23:06:00.404Z"),new Date("2018-09-06T07:03:12.937Z"),"Handmade Concrete Cheese matrix executive","Forward Rubber",45433,{_id: 2245,str: "Car",num: 10318,date: new Date("2018-09-06T08:56:16.312Z"),array: [],obj: {}}]}});
    },

    function(coll) {
        return coll.insert({_id: 2246,str: "digital",num: 72824,date: new Date("2018-09-06T18:29:18.432Z"),array: [63560,"Directives",{_id: 2247,str: "lavender Portugal Antigua and Barbuda",num: 5398,date: new Date("2018-09-06T05:21:38.303Z"),array: [[]],obj: {}},"Internal neural Soft",new Date("2018-09-05T22:02:14.121Z"),"Corporate",{_id: 2248,str: "Handmade Soft Computer solid state",date: new Date("2018-09-06T13:00:04.832Z"),array: [90529,new Date("2018-09-06T14:31:19.385Z"),38231,new Date("2018-09-06T19:01:55.326Z"),{_id: 2249,str: "e-markets deploy Extended",obj: {_id: 2250,num: 63359,array: [[]]}},"Garden cultivate Generic"],obj: {}},84388,88488,new Date("2018-09-06T17:47:07.636Z"),{_id: 2251,str: "Assurance Licensed Metal Shirt",num: 68495,date: new Date("2018-09-06T04:15:00.651Z"),array: [],obj: {_id: 2252,str: "robust Meadows",num: 88794,date: new Date("2018-09-06T06:22:02.078Z"),obj: {_id: 2253,num: 59356,date: new Date("2018-09-05T22:53:54.018Z")}}}],obj: {_id: 2254,num: 88585,obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 2255,str: "SMS",num: 71974,date: new Date("2018-09-05T22:08:49.964Z"),array: [new Date("2018-09-06T02:48:59.318Z"),new Date("2018-09-05T22:59:20.318Z"),55876,new Date("2018-09-06T11:52:50.064Z"),["copy Rustic Wooden Pizza infomediaries"],62193,"Keyboard XSS CSS",{_id: 2256,str: "Sleek dot-com yellow",num: 6789,array: [],obj: {}},6143,"application markets",50163,"Coves Point"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 2257,str: "best-of-breed Incredible Fresh Salad",num: 24645,date: new Date("2018-09-06T10:45:18.890Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 2258,num: 28911,date: new Date("2018-09-05T21:00:33.044Z"),array: [new Date("2018-09-06T14:30:54.128Z"),"Buckinghamshire copying","Manor",30139,new Date("2018-09-06T01:16:34.510Z"),{_id: 2259,str: "purple",num: 28968,obj: {}},new Date("2018-09-06T05:44:37.480Z"),"Computers Practical Bedfordshire",32542,99194,[],new Date("2018-09-05T20:49:25.164Z"),["24/7 users",{_id: 2260,str: "wireless",array: [],obj: {_id: 2261,num: 84047,date: new Date("2018-09-06T14:37:20.781Z"),array: []}}]],obj: {_id: 2262,str: "Savings Account cross-media Incredible",num: 32004,date: new Date("2018-09-06T16:19:09.273Z"),array: [],obj: {_id: 2263,str: "Table invoice",date: new Date("2018-09-06T03:41:25.107Z"),obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 2264,str: "THX grey",num: 98511,date: new Date("2018-09-06T18:54:15.311Z"),array: [30807,new Date("2018-09-06T16:52:25.105Z"),62324,"payment",[],{_id: 2265,str: "installation Refined Wooden Bike Bedfordshire",array: [new Date("2018-09-06T18:25:49.609Z"),[]],obj: {}},19738,"open-source channels",{_id: 2266,num: 90599,date: new Date("2018-09-06T07:53:54.122Z"),array: [],obj: {}},"Indiana withdrawal Frozen",new Date("2018-09-06T01:33:25.139Z"),85923],obj: {_id: 2267,str: "Tools",date: new Date("2018-09-06T04:00:29.904Z")}});
    },

    function(coll) {
        return coll.insert({_id: 2268,num: 17068,date: new Date("2018-09-06T14:41:21.191Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 2269,str: "Berkshire protocol",num: 97746,date: new Date("2018-09-05T23:49:46.888Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 2270,str: "Assistant multi-tasking application",num: 56949,date: new Date("2018-09-06T15:34:17.623Z"),array: [70794,new Date("2018-09-06T01:18:35.237Z"),{_id: 2271,date: new Date("2018-09-06T10:07:04.827Z"),array: [],obj: {_id: 2272,num: 37549,date: new Date("2018-09-06T13:57:34.447Z"),array: [new Date("2018-09-06T19:11:16.120Z")],obj: {}}},"CSS",4354,"Colombian Peso Unidad de Valor Real","Maine Bedfordshire Multi-tiered",87951,"National Licensed unleash",new Date("2018-09-06T07:15:35.560Z"),[],65531,new Date("2018-09-06T06:53:42.845Z")]});
    },

    function(coll) {
        return coll.insert({_id: 2273,str: "Granite Intelligent Soft Salad",num: 68888,date: new Date("2018-09-05T21:46:19.119Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 2274,str: "unleash",num: 84223,date: new Date("2018-09-06T10:55:21.128Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 2275,str: "leverage",num: 98351,date: new Date("2018-09-05T22:56:26.897Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 2276,str: "hacking override",num: 54175,date: new Date("2018-09-05T22:06:52.320Z"),array: [],obj: {_id: 2277,str: "Avon",date: new Date("2018-09-06T03:52:08.896Z"),array: ["Parks Fresh",{_id: 2278,str: "Ergonomic Plastic Bike",num: 21593,date: new Date("2018-09-06T08:30:56.178Z"),obj: {}},"Refined Soft Towels","Unbranded",{_id: 2279,str: "violet Usability RSS",num: 54735,array: [],obj: {}},new Date("2018-09-05T20:14:39.526Z"),"models",71312,65008,new Date("2018-09-05T23:05:15.593Z"),new Date("2018-09-06T15:54:59.304Z"),new Date("2018-09-06T05:15:23.946Z")],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 2280,str: "withdrawal deliver Bedfordshire",num: 23422,date: new Date("2018-09-05T22:43:43.346Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 2281,str: "compress Handmade Frozen Tuna",num: 77494,date: new Date("2018-09-06T15:04:24.720Z"),obj: {_id: 2282,str: "Markets Refined Frozen Bike",num: 20768,array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 2283,str: "SQL",num: 29862,date: new Date("2018-09-05T20:04:53.316Z"),array: [88515,"cross-platform Canada Buckinghamshire",new Date("2018-09-06T14:31:08.562Z"),33277,"mobile real-time purple",new Date("2018-09-06T15:25:01.859Z"),new Date("2018-09-06T08:46:02.828Z"),"client-server initiatives",77376,{_id: 2284,num: 93028,date: new Date("2018-09-06T05:29:06.219Z"),array: ["Investment Account Ergonomic Soft Ball",[],new Date("2018-09-06T04:30:25.380Z")],obj: {}},[new Date("2018-09-06T12:57:59.802Z")],17700],obj: {_id: 2285,str: "programming Spur Lead",num: 66095,date: new Date("2018-09-06T01:31:00.892Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 2286,str: "Officer",num: 88561,date: new Date("2018-09-06T15:20:05.866Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 2287,str: "online Throughway",num: 42763,date: new Date("2018-09-06T18:29:12.238Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 2288,str: "Handcrafted Cotton Fish Lead",num: 17783,date: new Date("2018-09-06T05:40:58.273Z"),array: [new Date("2018-09-06T08:45:43.807Z"),{_id: 2289,str: "Pike Adaptive",num: 42781,array: [99791,new Date("2018-09-06T17:05:41.292Z")],obj: {_id: 2290,str: "Universal Health Gloves",date: new Date("2018-09-06T03:01:45.935Z"),array: [80045],obj: {}}},{_id: 2291,str: "online Technician",num: 55063,obj: {_id: 2292,str: "Concrete cross-platform",date: new Date("2018-09-06T10:32:47.209Z"),array: []}},"Associate","Rustic",new Date("2018-09-06T17:56:41.030Z"),"Fully-configurable",[],73937,{_id: 2293,num: 62741},"Neck application"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 2294,str: "dynamic indexing Central",num: 39463,date: new Date("2018-09-06T17:27:55.503Z"),array: [77453,new Date("2018-09-06T18:40:21.940Z"),"Fields Buckinghamshire Principal",45568,new Date("2018-09-06T16:53:51.207Z"),"Bulgarian Lev",{_id: 2295,str: "uniform Liaison",num: 12655,array: [],obj: {}},"Advanced cyan deposit",new Date("2018-09-06T02:47:40.905Z"),{_id: 2296,str: "HDD purple Key",num: 35582,date: new Date("2018-09-06T01:48:30.334Z"),array: []}],obj: {_id: 2297,str: "Estonia",date: new Date("2018-09-05T23:57:39.975Z")}});
    },

    function(coll) {
        return coll.insert({_id: 2298,str: "USB",num: 85806,date: new Date("2018-09-06T14:48:36.225Z"),array: [24669,new Date("2018-09-06T10:28:49.529Z"),"calculate Dynamic",36853,new Date("2018-09-06T12:02:38.259Z"),{_id: 2299,num: 99452,date: new Date("2018-09-05T20:00:50.919Z"),obj: {_id: 2300,str: "throughput",num: 69619,date: new Date("2018-09-05T21:38:45.866Z"),array: []}},42902,[new Date("2018-09-06T05:57:37.634Z"),"Awesome Frozen Mouse solid state invoice",{_id: 2301,str: "hard drive Kids",num: 50742,obj: {}}],"bypass connect","Assurance THX",new Date("2018-09-06T04:43:38.525Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 2302,str: "silver",num: 35143,date: new Date("2018-09-05T20:35:41.178Z"),array: ["Ameliorated",new Date("2018-09-06T12:37:25.872Z"),{_id: 2303,str: "synergize Principal dot-com",num: 40457,date: new Date("2018-09-06T06:41:41.130Z"),array: [new Date("2018-09-06T03:39:30.555Z")],obj: {_id: 2304,num: 66624,array: [],obj: {}}},[54379,86809,[],"e-services"],"Grocery Mauritius Rupee Incredible",49082,new Date("2018-09-05T20:39:04.217Z"),new Date("2018-09-05T22:48:30.662Z"),["drive Nevada Borders",1171],"firewall",[],{_id: 2305,str: "Fantastic Concrete Soap",num: 87842,date: new Date("2018-09-05T20:09:12.442Z"),array: [],obj: {_id: 2306,str: "Health"}}],obj: {_id: 2307,str: "Pataca Arkansas bandwidth",date: new Date("2018-09-05T21:57:00.456Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 2308,str: "policy",num: 29950,date: new Date("2018-09-05T23:31:27.258Z"),array: [54889,new Date("2018-09-06T08:49:23.460Z"),"payment",new Date("2018-09-06T05:22:55.053Z"),[new Date("2018-09-06T02:29:09.337Z")],"Gorgeous",[],new Date("2018-09-06T09:02:13.147Z"),"optical Avon",16268,35414,47901,[],new Date("2018-09-06T13:36:01.083Z"),{_id: 2309,str: "Savings Account software Plain",date: new Date("2018-09-06T12:21:04.459Z"),array: [[]],obj: {_id: 2310,str: "productivity",num: 29942,date: new Date("2018-09-06T08:20:54.249Z"),array: [{_id: 2311,str: "Berkshire",num: 49305,date: new Date("2018-09-06T13:46:56.833Z"),obj: {}},"Investor International Cheese"],obj: {_id: 2312,obj: {_id: 2313,str: "Chief parsing leverage",num: 66612,date: new Date("2018-09-06T08:38:34.597Z"),array: [[]]}}}}],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 2314,str: "Generic redundant",num: 46491,date: new Date("2018-09-06T05:56:59.533Z"),array: [86166,{_id: 2315,str: "Incredible Plastic Car Central Optimization",date: new Date("2018-09-05T22:44:49.485Z"),array: [],obj: {_id: 2316,num: 24904,date: new Date("2018-09-06T13:02:52.335Z"),array: ["Buckinghamshire"]}},78509,new Date("2018-09-06T12:07:25.800Z"),new Date("2018-09-05T20:07:05.343Z"),4570,"Avon Clothing",new Date("2018-09-06T08:06:38.991Z"),"invoice Mauritius Rupee 1080p","Unbranded Plastic Bike",[53458,"web-enabled hub ivory",45955,[[]]],{_id: 2317,num: 31024,date: new Date("2018-09-05T23:31:59.605Z"),obj: {}},new Date("2018-09-06T03:33:13.337Z")],obj: {_id: 2318,str: "systemic parallelism Guinea Franc",num: 73416,array: [new Date("2018-09-05T19:58:47.952Z")],obj: {_id: 2319,str: "EXE",num: 79046}}});
    },

    function(coll) {
        return coll.insert({_id: 2320,str: "Chile",num: 55416,date: new Date("2018-09-06T19:27:51.597Z"),array: [],obj: {_id: 2321,str: "orange Garden AI",num: 34250,date: new Date("2018-09-06T05:59:04.604Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 2322,str: "Regional Chile Iowa",num: 83794});
    },

    function(coll) {
        return coll.insert({_id: 2323,str: "navigating Creative",num: 78528,date: new Date("2018-09-06T18:45:44.006Z"),array: [{_id: 2324,str: "orange deposit black",num: 57726,date: new Date("2018-09-06T18:19:33.433Z"),array: [],obj: {}},"JBOD Bike Regional",{_id: 2325,str: "Soft",date: new Date("2018-09-06T12:18:41.719Z"),obj: {_id: 2326,str: "JSON Tuna",num: 41040,date: new Date("2018-09-05T22:39:32.513Z"),array: [],obj: {_id: 2327,array: ["Thailand PCI New Hampshire",new Date("2018-09-06T11:08:26.378Z")],obj: {_id: 2328,str: "turquoise CSS",num: 5282,date: new Date("2018-09-06T10:32:31.309Z"),array: []}}}},20943,new Date("2018-09-06T15:35:38.189Z"),"Automotive",[8859,"Plastic sky blue",new Date("2018-09-06T16:42:12.369Z")],new Date("2018-09-06T17:50:26.643Z"),[{_id: 2329,date: new Date("2018-09-06T18:50:30.847Z"),obj: {}},4458,new Date("2018-09-06T15:53:45.922Z"),7174],[{_id: 2330,str: "Kansas Central",num: 40397,array: [],obj: {}}],"Mouse Intelligent"]});
    },

    function(coll) {
        return coll.insert({_id: 2331,str: "Bond Markets Units European Composite Unit (EURCO) Eritrea",date: new Date("2018-09-06T16:34:40.333Z"),array: [],obj: {_id: 2332,str: "USB Salad",num: 22395,array: [3353,"Checking Account",new Date("2018-09-06T06:37:07.872Z"),80638,new Date("2018-09-06T15:02:04.110Z"),new Date("2018-09-06T04:27:07.360Z"),"De-engineered Legacy Home Loan Account",[90594,"Plastic",{_id: 2333,num: 39695,date: new Date("2018-09-06T06:43:59.505Z"),obj: {}},"Buckinghamshire synthesizing",[]],"indexing Home Loan Account invoice",82834,new Date("2018-09-06T17:05:35.764Z")],obj: {_id: 2334,num: 84869,date: new Date("2018-09-06T09:02:41.650Z"),array: [{_id: 2335,str: "Fresh firewall Albania",num: 76788,date: new Date("2018-09-06T08:56:59.550Z"),array: [],obj: {}}],obj: {_id: 2336,str: "purple",num: 32175,date: new Date("2018-09-06T17:04:42.678Z"),array: [{_id: 2337,str: "bypass",num: 81992,array: ["Jordanian Dinar client-server"]},[],new Date("2018-09-05T23:51:25.701Z")]}}}});
    },

    function(coll) {
        return coll.insert({_id: 2338,str: "South Africa RSS web-enabled",num: 82939,date: new Date("2018-09-06T00:44:24.566Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 2339,str: "Strategist B2B",num: 98213,date: new Date("2018-09-05T19:57:15.590Z"),array: [44744,["Forks Bedfordshire Intranet",new Date("2018-09-06T01:55:18.129Z"),3440],63209,new Date("2018-09-06T08:29:32.658Z"),"program repurpose","primary","JBOD Mouse Producer",[],new Date("2018-09-06T00:50:06.644Z"),{_id: 2340,str: "Avon calculate",num: 61109,date: new Date("2018-09-05T21:39:28.992Z"),array: [],obj: {_id: 2341,str: "Metal",num: 56716,obj: {}}},[],{_id: 2342,date: new Date("2018-09-06T19:12:53.971Z"),array: ["Sleek JSON"],obj: {_id: 2343,str: "National",num: 28069,date: new Date("2018-09-06T08:10:37.356Z"),obj: {}}}]});
    },

    function(coll) {
        return coll.insert({_id: 2344,str: "HTTP Licensed Wooden Chips proactive",num: 35754,date: new Date("2018-09-05T21:57:53.433Z"),array: ["Web info-mediaries Games","Saint Kitts and Nevis",89210,{_id: 2345,str: "copying Tactics Optimized",num: 34685,date: new Date("2018-09-06T09:39:00.652Z"),array: [],obj: {_id: 2346,str: "capacitor",obj: {}}},[84666,{_id: 2347,num: 28912,date: new Date("2018-09-06T01:29:53.046Z"),array: [new Date("2018-09-05T22:27:07.812Z"),[],91977],obj: {_id: 2348,date: new Date("2018-09-06T19:14:04.055Z"),array: ["synthesize",new Date("2018-09-05T22:05:33.639Z")],obj: {}}},"program",[25981]],87321,new Date("2018-09-06T03:08:23.864Z"),new Date("2018-09-05T20:29:06.587Z"),new Date("2018-09-06T11:18:31.464Z")],obj: {_id: 2349,str: "communities interface",array: [],obj: {_id: 2350,date: new Date("2018-09-06T18:01:53.394Z")}}});
    },

    function(coll) {
        return coll.insert({_id: 2351,str: "Dynamic",num: 6559,date: new Date("2018-09-05T20:45:25.046Z"),array: [95432,new Date("2018-09-06T16:58:29.382Z"),new Date("2018-09-05T21:00:53.305Z"),"Arkansas out-of-the-box Hong Kong",76641,"Forward",19652,"Health Inverse",20933,new Date("2018-09-06T12:57:51.557Z"),[new Date("2018-09-06T15:01:43.093Z"),[],{_id: 2352,str: "index Frozen",date: new Date("2018-09-06T03:23:03.391Z"),array: [],obj: {}}]]});
    },

    function(coll) {
        return coll.insert({_id: 2353,num: 89364,date: new Date("2018-09-06T18:41:08.842Z"),array: [],obj: {_id: 2354,str: "Small Frozen Keyboard conglomeration",num: 59868,obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 2355,str: "withdrawal",num: 67673,date: new Date("2018-09-06T02:09:57.459Z"),array: [],obj: {_id: 2356,str: "Legacy Nevada",num: 225,date: new Date("2018-09-06T14:13:43.459Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 2357,str: "Alaska synergistic",num: 99675,date: new Date("2018-09-06T08:08:00.103Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 2358,str: "Officer",num: 45561,date: new Date("2018-09-06T00:20:03.770Z"),array: [new Date("2018-09-06T14:37:10.038Z"),"Principal Mountain",new Date("2018-09-06T02:34:12.723Z"),"generate",{_id: 2359,str: "violet",num: 29827,date: new Date("2018-09-06T02:03:25.243Z"),array: [],obj: {}},41123,new Date("2018-09-06T07:56:27.927Z"),{_id: 2360,num: 70060,array: [],obj: {}},88278,44990,"Islands Executive Up-sized"],obj: {_id: 2361,str: "Hong Kong",num: 52972,array: [[]]}});
    },

    function(coll) {
        return coll.insert({_id: 2362,str: "Wisconsin withdrawal Small",num: 63564,date: new Date("2018-09-06T18:39:21.238Z"),array: [],obj: {_id: 2363,str: "Shores Fantastic Steel Tuna",date: new Date("2018-09-06T05:45:24.058Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 2364,str: "primary rich Platinum",num: 93784,date: new Date("2018-09-06T04:18:20.129Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 2365,num: 70493,date: new Date("2018-09-06T15:51:07.605Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 2366,str: "Virginia Sleek Soft Pizza Colorado",num: 60429,date: new Date("2018-09-06T09:34:00.139Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 2367,str: "Keyboard",num: 48519,array: [],obj: {_id: 2368,str: "integrated Chief Soft",num: 46040,date: new Date("2018-09-06T14:34:31.829Z"),array: [15379,"web-enabled program",new Date("2018-09-05T23:29:39.877Z"),8274,1896,{_id: 2369,str: "Handcrafted Cotton B2B",num: 42252,date: new Date("2018-09-06T14:53:41.233Z"),array: [],obj: {}},"Samoa","synthesizing",{_id: 2370,str: "Architect Avon",num: 19928,date: new Date("2018-09-06T19:42:36.445Z"),array: [new Date("2018-09-06T15:44:04.734Z"),13644,[]],obj: {_id: 2371,str: "Pants Reactive Cotton",date: new Date("2018-09-06T16:30:37.225Z"),array: [new Date("2018-09-05T22:23:58.680Z"),new Date("2018-09-06T11:32:15.532Z"),"cross-platform Soft"],obj: {_id: 2372,date: new Date("2018-09-06T03:19:04.820Z")}}},{ _id: 2373 },40412],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 2374,str: "architectures",num: 7470,date: new Date("2018-09-06T14:19:11.777Z"),array: ["Shoes",10217,[],"generate interactive",new Date("2018-09-06T19:12:40.768Z"),new Date("2018-09-06T04:25:39.880Z"),59306,new Date("2018-09-05T20:21:06.385Z"),59623,60214,"background"],obj: {_id: 2375,str: "green",num: 84954,date: new Date("2018-09-06T02:54:23.222Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 2376,str: "bandwidth Handmade",num: 73194,array: [new Date("2018-09-05T20:09:14.477Z"),[35103],"Manager",13382,new Date("2018-09-05T20:23:45.544Z"),[],"Ramp",33194,82349,new Date("2018-09-06T09:39:08.208Z"),{_id: 2377,str: "integrate Concrete clear-thinking",num: 18602,date: new Date("2018-09-06T10:02:28.936Z"),array: [{_id: 2378,str: "Computers",num: 99077,date: new Date("2018-09-06T15:19:34.237Z"),array: [],obj: {_id: 2379,str: "e-business Associate",date: new Date("2018-09-06T18:25:13.176Z"),array: [{_id: 2380,date: new Date("2018-09-06T09:51:01.201Z"),array: [],obj: {_id: 2381,str: "Refined Granite Sausages Cambridgeshire",num: 73893,obj: {}}},"Up-sized","Australian Dollar Parks",65813]}}],obj: {_id: 2382,num: 69447,array: [[]],obj: {}}},"reboot",new Date("2018-09-06T07:39:46.190Z"),25338],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 2383,num: 21644,date: new Date("2018-09-06T12:23:16.219Z"),array: [{_id: 2384,str: "Cheese payment Home",num: 45073,date: new Date("2018-09-06T19:22:29.214Z"),obj: {_id: 2385,str: "Developer customer loyalty Organic",num: 65482,date: new Date("2018-09-06T00:27:41.427Z"),array: [19236,"Rubber well-modulated"],obj: {}}},"Savings Account GB payment",new Date("2018-09-06T12:12:24.504Z"),8596,16435,{_id: 2386,str: "dedicated primary Handmade Plastic Fish",num: 37147,date: new Date("2018-09-06T03:34:12.248Z"),array: [],obj: {}},[],new Date("2018-09-06T01:59:39.667Z"),new Date("2018-09-06T14:56:48.240Z"),new Date("2018-09-06T19:22:40.260Z"),"envisioneer"],obj: {_id: 2387,str: "monitor AI Global",date: new Date("2018-09-06T11:45:48.446Z"),array: ["Dynamic primary Licensed"],obj: {_id: 2388,num: 12330}}});
    },

    function(coll) {
        return coll.insert({_id: 2389,str: "Clothing",num: 49302,date: new Date("2018-09-06T14:00:05.875Z"),array: ["CSS quantify Savings Account",{_id: 2390,str: "Money Market Account Frozen",date: new Date("2018-09-06T01:51:23.866Z"),array: [],obj: {}},8940,[1002],"magnetic Fish",new Date("2018-09-06T16:09:20.639Z"),new Date("2018-09-06T11:28:52.954Z"),new Date("2018-09-06T00:20:03.436Z"),"Identity interactive Paradigm",{_id: 2391,str: "Ergonomic Soft Chicken",num: 90790,date: new Date("2018-09-06T15:03:32.300Z"),array: [],obj: {}},new Date("2018-09-06T19:20:24.722Z")],obj: {_id: 2392,num: 77264,date: new Date("2018-09-06T02:27:17.201Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 2393,str: "Licensed",num: 71547,date: new Date("2018-09-06T17:45:17.149Z"),array: [],obj: {_id: 2394,str: "mission-critical Bedfordshire Identity",num: 66164,date: new Date("2018-09-06T16:01:52.085Z"),array: [8845,new Date("2018-09-06T11:37:20.742Z"),new Date("2018-09-06T16:26:23.160Z"),"cross-platform Cayman Islands",71409,[],{_id: 2395,date: new Date("2018-09-05T20:55:39.813Z"),array: [new Date("2018-09-06T18:33:14.732Z")],obj: {}},["deposit Bedfordshire Guyana",74072,{_id: 2396,str: "Refined Frozen Chair generate haptic",num: 15307,date: new Date("2018-09-06T04:22:49.156Z"),obj: {}}],"Rwanda Franc purple turn-key",[],32147,36829]}});
    },

    function(coll) {
        return coll.insert({_id: 2397,str: "TCP Quetzal Electronics",num: 46022,date: new Date("2018-09-05T21:54:22.839Z"),array: [],obj: {_id: 2398,str: "systematic",date: new Date("2018-09-06T18:54:54.881Z"),array: [],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 2399,str: "web-readiness",num: 54233,date: new Date("2018-09-05T21:59:56.068Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 2400,str: "index port",num: 69837,array: [],obj: {_id: 2401,str: "Principal mindshare Frozen",num: 50675,date: new Date("2018-09-06T03:27:42.751Z"),obj: {_id: 2402,str: "bus Table capability",num: 30979,date: new Date("2018-09-06T17:50:29.872Z"),array: [12551,"Division",9182,[],83731,"matrix",new Date("2018-09-05T20:31:42.192Z"),new Date("2018-09-06T00:46:33.865Z"),new Date("2018-09-06T09:49:08.671Z")],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 2403,str: "overriding Bouvet Island (Bouvetoya) Functionality",num: 29650,date: new Date("2018-09-06T01:56:28.121Z"),array: [[],"24/365",new Date("2018-09-06T19:04:34.453Z"),17102,"Games",new Date("2018-09-05T20:05:03.107Z"),"Intelligent",{_id: 2404,num: 53902,date: new Date("2018-09-06T15:57:09.014Z"),array: [new Date("2018-09-06T01:40:10.594Z"),new Date("2018-09-05T21:12:24.231Z"),{_id: 2405,str: "Bike",obj: {}},{_id: 2406,str: "system",num: 54508,date: new Date("2018-09-05T21:20:48.730Z"),array: [],obj: {}},[new Date("2018-09-06T10:05:46.485Z")],"Brand XML",38353],obj: {_id: 2407,str: "Quality-focused Nicaragua",num: 81325,array: [],obj: {_id: 2408,str: "Azerbaijanian Manat",array: [],obj: {_id: 2409,date: new Date("2018-09-06T16:14:48.517Z")}}}},{_id: 2410,num: 86208,obj: {}},82801]});
    },

    function(coll) {
        return coll.insert({_id: 2411,str: "Cambridgeshire grey Auto Loan Account",num: 37676,date: new Date("2018-09-06T19:19:12.276Z"),array: [12902,"transmitter","transmitting Personal Loan Account Tools",57861,"Intelligent Frozen Tuna extend Credit Card Account",new Date("2018-09-06T01:35:03.670Z"),"Shores virtual Ports",new Date("2018-09-06T05:28:45.822Z"),14809,"cyan",[],{_id: 2412,str: "deposit indigo",num: 24113,date: new Date("2018-09-06T09:50:20.774Z"),obj: {}}],obj: {_id: 2413,num: 97648,array: [77037,"Rustic Frozen",{_id: 2414,str: "compress",num: 21369,date: new Date("2018-09-06T03:05:03.163Z"),array: [],obj: {_id: 2415,str: "Checking Account",array: [],obj: {}}}]}});
    },

    function(coll) {
        return coll.insert({_id: 2416,str: "Bridge",num: 41357,date: new Date("2018-09-06T10:53:42.306Z"),array: [new Date("2018-09-06T16:58:13.934Z"),[],9143,"Pakistan Gorgeous Frozen Tuna",new Date("2018-09-06T10:12:14.243Z"),"infomediaries",44959,new Date("2018-09-06T05:56:23.236Z"),{_id: 2417,num: 59817,date: new Date("2018-09-06T15:35:26.577Z"),array: [],obj: {}},59103,34121],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 2418,str: "Fiji Dollar tertiary paradigms",num: 75802,date: new Date("2018-09-06T07:13:40.010Z"),array: [],obj: {_id: 2419,str: "Home Loan Account encryption",num: 53474,date: new Date("2018-09-06T13:03:29.815Z"),array: [19410,"copying Web syndicate","Chicken Orchestrator",[],39600,"Bedfordshire Rubber AI",new Date("2018-09-05T23:16:39.624Z"),new Date("2018-09-06T16:01:22.973Z"),"Cambridgeshire",["Coves SQL"]],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 2420,str: "Tasty Steel Keyboard Ergonomic Frozen Bike",num: 89045,date: new Date("2018-09-06T11:43:24.340Z"),array: [new Date("2018-09-06T17:31:14.083Z"),"artificial intelligence navigating Cheese",{_id: 2421,str: "Automotive",num: 1902,date: new Date("2018-09-06T11:26:25.137Z"),array: []},"United Kingdom invoice Sleek Granite Sausages",88381,4863,new Date("2018-09-06T08:42:06.382Z"),new Date("2018-09-06T11:56:33.239Z"),[new Date("2018-09-06T15:05:07.052Z")],58691,{_id: 2422,str: "Gorgeous Minnesota",num: 15266,date: new Date("2018-09-06T13:13:47.997Z"),array: [],obj: {}},"HDD Officer",[{_id: 2423,obj: {_id: 2424,date: new Date("2018-09-06T18:39:12.946Z"),array: [],obj: {}}}]],obj: {_id: 2425,num: 83292,obj: {_id: 2426,str: "white solid state Arizona",num: 52429,date: new Date("2018-09-06T11:42:54.918Z"),array: [new Date("2018-09-05T20:29:48.236Z"),47150,77262,"SQL"],obj: {_id: 2427,str: "Lane",num: 49766,date: new Date("2018-09-06T12:14:10.247Z")}}}});
    },

    function(coll) {
        return coll.insert({_id: 2428,str: "Unbranded Plastic Table target",date: new Date("2018-09-06T06:58:34.485Z"),array: [],obj: {_id: 2429,str: "Massachusetts deposit",num: 1711,date: new Date("2018-09-06T08:04:26.117Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 2430,str: "Incredible Frozen Chips",num: 26615,array: [],obj: {_id: 2431,str: "reinvent Expressway generating",num: 55933,date: new Date("2018-09-06T04:15:30.816Z"),array: [new Date("2018-09-06T01:13:27.850Z"),"visualize Manor","navigating Savings Account payment",new Date("2018-09-06T18:33:55.748Z"),75172,39539,"Future models","Station Clothing","Rubber",new Date("2018-09-05T20:09:08.585Z")],obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 2432,str: "Supervisor red Berkshire",num: 24372,date: new Date("2018-09-06T18:40:25.103Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 2433,date: new Date("2018-09-06T05:01:52.697Z"),array: [],obj: {_id: 2434,str: "exuding",num: 58845,date: new Date("2018-09-05T21:35:12.280Z"),array: [25264,"Extended AI",new Date("2018-09-06T03:53:08.831Z"),{_id: 2435,str: "web-readiness New Jersey Gorgeous Concrete Keyboard",num: 43439,array: [],obj: {}},63909,new Date("2018-09-06T17:51:05.036Z"),"Colorado International",new Date("2018-09-06T02:02:02.979Z"),new Date("2018-09-06T07:57:27.127Z"),new Date("2018-09-06T10:45:20.911Z"),"Fresh interface open system",41157,{_id: 2436,str: "ivory salmon Cayman Islands",num: 69911,date: new Date("2018-09-06T14:40:32.214Z"),obj: {_id: 2437,num: 82263,date: new Date("2018-09-06T16:00:36.232Z"),array: ["green New York"]}}]}});
    },

    function(coll) {
        return coll.insert({_id: 2438,str: "Locks bandwidth",num: 16111,date: new Date("2018-09-06T03:49:09.969Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 2439,str: "Concrete Cayman Islands",num: 38101,date: new Date("2018-09-06T10:38:27.338Z"),array: ["Forges Licensed Cotton Soap Forint",new Date("2018-09-06T06:50:02.995Z"),new Date("2018-09-05T20:44:36.618Z"),"AGP",60596,[[],[]],18345,"synthesize secondary",{_id: 2440,str: "Future Serbian Dinar Implemented",num: 8436,array: [],obj: {_id: 2441,str: "synthesizing Rustic Granite Pants",num: 81996,date: new Date("2018-09-06T14:33:21.029Z"),array: [],obj: {}}},2962,"complexity green disintermediate",new Date("2018-09-05T20:56:07.377Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 2442,str: "Universal",num: 88896,array: ["California Producer Ranch",95462,new Date("2018-09-06T19:45:16.070Z"),74506,new Date("2018-09-05T22:46:00.388Z"),"redundant protocol",71326,"HDD Creative Kip",new Date("2018-09-05T23:27:31.590Z"),95990,[]],obj: {_id: 2443,num: 90727,date: new Date("2018-09-06T18:46:13.212Z"),array: []}});
    },

    function(coll) {
        return coll.insert({_id: 2444,num: 22713,date: new Date("2018-09-06T06:05:06.081Z"),array: [],obj: {_id: 2445,str: "Cambridgeshire transmitting Malaysian Ringgit",num: 1175,date: new Date("2018-09-06T01:30:50.771Z"),array: [47193,[],new Date("2018-09-06T01:22:59.974Z"),17396,{_id: 2446,str: "teal Garden",num: 53918,date: new Date("2018-09-06T14:11:12.517Z"),array: [],obj: {_id: 2447,str: "Avon didactic explicit",num: 94298,date: new Date("2018-09-06T09:49:03.676Z"),array: [new Date("2018-09-05T20:24:23.619Z"),"Green Outdoors"]}},"compressing cyan",86694,new Date("2018-09-05T22:50:50.794Z"),"out-of-the-box Cambridgeshire",[],new Date("2018-09-06T04:08:44.843Z"),"Principal Falkland Islands Pound Northern Mariana Islands",46040,[new Date("2018-09-05T20:14:53.278Z"),66384]]}});
    },

    function(coll) {
        return coll.insert({_id: 2448,str: "cross-platform Rapid mobile",num: 88081,date: new Date("2018-09-06T04:36:25.149Z"),array: [],obj: {_id: 2449,str: "Frozen Human generate",num: 87905,date: new Date("2018-09-06T08:09:58.126Z"),array: ["AGP coherent",17203,{_id: 2450,str: "Buckinghamshire Ethiopian Birr Coordinator",date: new Date("2018-09-06T14:39:09.398Z"),array: ["Handcrafted Borders USB"],obj: {}},28681,"Rhode Island",[],new Date("2018-09-06T13:36:16.917Z"),"Borders Computers Wells",new Date("2018-09-06T07:00:35.495Z"),83574,82919,[[]]],obj: {_id: 2451,num: 3060,obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 2452,str: "Intelligent Rubber Table Associate bandwidth",num: 8476,date: new Date("2018-09-05T23:59:30.104Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 2453,str: "didactic",num: 84981,date: new Date("2018-09-05T22:05:34.624Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 2454,str: "Cape Rubber",num: 53021,array: [new Date("2018-09-06T03:48:02.132Z"),new Date("2018-09-05T21:54:55.070Z"),new Date("2018-09-06T08:00:12.475Z"),{_id: 2455,str: "Incredible turquoise",num: 52617,date: new Date("2018-09-06T02:07:02.513Z"),array: [],obj: {_id: 2456,num: 78423,date: new Date("2018-09-06T01:43:31.002Z"),obj: {}}},22798,"bypass Ergonomic Plastic Gloves","Personal Loan Account withdrawal Assistant","quantifying Administrator",{_id: 2457,str: "concept connect navigate",num: 15086,date: new Date("2018-09-06T13:51:27.335Z"),array: []},87510,new Date("2018-09-06T00:12:38.161Z"),40104,[]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 2458,str: "haptic turn-key productize",num: 68563,date: new Date("2018-09-06T12:11:32.827Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 2459,str: "driver connecting",num: 78362,date: new Date("2018-09-06T08:41:37.148Z"),array: ["override Electronics Sleek Concrete Cheese",13615,{_id: 2460,str: "Jordan",num: 72104,date: new Date("2018-09-05T21:16:58.836Z"),array: [9502,new Date("2018-09-06T17:57:52.799Z")],obj: {}},"Investment Account",new Date("2018-09-06T16:19:11.729Z"),{_id: 2461,str: "Ouguiya",date: new Date("2018-09-06T12:31:29.850Z"),array: [],obj: {_id: 2462,str: "violet multi-state",num: 33833,date: new Date("2018-09-06T05:26:08.801Z"),array: [],obj: {}}},44696,25599,15481]});
    },

    function(coll) {
        return coll.insert({_id: 2463,num: 2242,date: new Date("2018-09-06T12:33:24.551Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 2464,str: "Ameliorated Personal Loan Account platforms",num: 87634,date: new Date("2018-09-06T18:54:17.395Z"),array: []});
    },

    function(coll) {
        return coll.insert({_id: 2465,str: "morph vortals uniform",num: 23988,date: new Date("2018-09-06T00:36:27.606Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 2466,str: "invoice",num: 14810,date: new Date("2018-09-06T04:46:56.812Z"),array: [86862,"synthesize","Auto Loan Account Robust Cliffs",new Date("2018-09-05T20:10:57.877Z"),new Date("2018-09-06T01:02:15.636Z"),7629,new Date("2018-09-06T05:51:59.020Z"),{_id: 2467,num: 67364,date: new Date("2018-09-06T00:58:51.221Z"),array: ["Monitored Place bandwidth",[],28544],obj: {}},new Date("2018-09-05T20:03:32.955Z"),new Date("2018-09-06T03:49:34.476Z")]});
    },

    function(coll) {
        return coll.insert({_id: 2468,str: "Dobra Incredible Metal Ball",num: 53465,date: new Date("2018-09-06T13:08:37.441Z"),array: [],obj: {_id: 2469,str: "Response Clothing expedite",num: 33983,date: new Date("2018-09-06T04:06:37.127Z"),array: ["withdrawal",new Date("2018-09-06T06:29:07.414Z"),48991,new Date("2018-09-06T01:31:19.437Z"),[{_id: 2470,str: "Tactics",num: 41002,date: new Date("2018-09-06T06:04:59.355Z"),array: [],obj: {}},"withdrawal Pa'anga black"],[32585,{_id: 2471,num: 69614,obj: {}},4622,"Right-sized",[{_id: 2472,str: "encoding",num: 92500,date: new Date("2018-09-06T05:05:10.093Z"),array: []}],new Date("2018-09-06T15:06:56.871Z"),"incentivize multi-byte"],{_id: 2473,str: "Music Ball",date: new Date("2018-09-06T03:23:45.572Z"),obj: {_id: 2474,num: 45699,array: [],obj: {_id: 2475,str: "Texas",array: [],obj: {_id: 2476,num: 83425,date: new Date("2018-09-06T04:58:00.671Z")}}}},new Date("2018-09-06T02:02:10.312Z"),[],new Date("2018-09-06T09:38:12.463Z"),[new Date("2018-09-06T18:21:05.856Z"),"Dominica Orchestrator bypassing"]]}});
    },

    function(coll) {
        return coll.insert({_id: 2477,str: "port",num: 87118,date: new Date("2018-09-06T05:04:40.667Z"),array: [74064,new Date("2018-09-06T14:43:44.391Z"),"Pula circuit","Views bypassing Object-based",16512,97042,new Date("2018-09-06T02:26:18.444Z"),"Money Market Account",new Date("2018-09-06T16:15:17.624Z"),new Date("2018-09-05T20:15:05.012Z")],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 2478,str: "De-engineered Toys",num: 49762,array: [85095,{_id: 2479,str: "Savings Account target Fish",num: 82594,date: new Date("2018-09-06T09:11:23.459Z"),array: [14193]},92450,new Date("2018-09-06T06:33:45.869Z"),new Date("2018-09-06T03:03:54.050Z"),new Date("2018-09-06T09:57:15.597Z"),"Home Loan Account Outdoors","Corporate innovate",40958,40659,"Metal"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 2480,str: "Baby",num: 68124,date: new Date("2018-09-05T22:10:19.318Z"),array: ["Brunei Dollar",[99157,new Date("2018-09-06T17:57:50.668Z")],53782,29768,"Arkansas Refined Metal Cheese",{_id: 2481,str: "Cedi ivory",num: 36291,date: new Date("2018-09-06T04:35:52.006Z"),array: [],obj: {_id: 2482,str: "deposit Compatible multi-byte",num: 2715,array: ["Handcrafted Rubber Ball Future"],obj: {_id: 2483,num: 5115,array: [],obj: {}}}},new Date("2018-09-06T19:17:42.769Z"),{_id: 2484,str: "Chair",date: new Date("2018-09-06T12:26:50.887Z")},24750,new Date("2018-09-06T13:13:54.556Z"),new Date("2018-09-06T16:33:13.367Z"),[],"Metrics","Down-sized hacking"],obj: {_id: 2485,str: "Intelligent deposit",date: new Date("2018-09-05T21:44:43.047Z"),obj: {}}});
    },

    function(coll) {
        return coll.insert({_id: 2486,str: "Strategist",num: 59933,date: new Date("2018-09-06T14:44:37.724Z"),array: [],obj: {_id: 2487,num: 59240,date: new Date("2018-09-06T05:46:58.566Z"),array: ["Manager real-time",new Date("2018-09-06T04:40:53.244Z"),65810,"needs-based",new Date("2018-09-06T06:26:56.533Z"),new Date("2018-09-05T20:55:41.502Z"),[],47971,{_id: 2488,str: "parse",num: 61914,date: new Date("2018-09-06T04:03:34.951Z"),obj: {}}],obj: {_id: 2489,str: "Object-based",num: 9666,array: ["payment Auto Loan Account array",20564,"synergize Saudi Arabia"],obj: {_id: 2490,str: "Borders maroon",date: new Date("2018-09-06T13:14:41.259Z")}}}});
    },

    function(coll) {
        return coll.insert({_id: 2491,num: 55973,date: new Date("2018-09-05T22:46:41.000Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 2492,str: "Baby microchip e-commerce",num: 90405,date: new Date("2018-09-06T11:29:26.021Z"),obj: {_id: 2493,str: "Qatari Rial Jersey back up",num: 76045,date: new Date("2018-09-06T04:12:30.510Z"),array: [],obj: {_id: 2494,date: new Date("2018-09-06T08:53:57.714Z"),array: [],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 2495,str: "Texas Home Loan Account",num: 9060,date: new Date("2018-09-06T02:38:49.607Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 2496,str: "hub SDD",num: 43622,date: new Date("2018-09-06T03:43:26.644Z"),array: [41452,57268,"CFA Franc BCEAO",new Date("2018-09-06T05:48:49.824Z"),72007,new Date("2018-09-05T20:13:51.844Z"),new Date("2018-09-05T21:23:27.111Z"),{_id: 2497,str: "Small Rubber Tuna infrastructures",date: new Date("2018-09-05T21:34:35.855Z"),array: [{_id: 2498,str: "hard drive",num: 82778,date: new Date("2018-09-05T23:35:35.686Z"),obj: {_id: 2499,num: 54776,array: ["networks microchip","Creative"]}}],obj: {}},new Date("2018-09-06T15:41:40.376Z"),[],[28896],[],"Cross-platform Beauty payment"],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 2500,str: "generating",num: 4704,date: new Date("2018-09-06T00:47:54.544Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 2501,str: "Mouse",num: 18029,date: new Date("2018-09-06T04:32:04.267Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 2502,str: "benchmark markets Outdoors",num: 92650,date: new Date("2018-09-05T21:46:08.669Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 2503,str: "Shirt Auto Loan Account JSON",date: new Date("2018-09-06T04:35:11.539Z"),obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 2504,str: "utilisation Berkshire copy",num: 54780,date: new Date("2018-09-06T05:13:39.021Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 2505,str: "connect",num: 87873,date: new Date("2018-09-06T02:02:35.712Z"),array: [42900,94490,[],{_id: 2506,str: "THX Buckinghamshire target",num: 74374,date: new Date("2018-09-06T19:08:46.172Z"),obj: {}},"North Korean Won olive auxiliary",new Date("2018-09-06T01:14:38.890Z"),new Date("2018-09-06T04:04:24.309Z"),"Maine Wooden Technician",17213,new Date("2018-09-06T17:29:52.210Z"),13973,["Avon"],[]],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 2507,str: "Rubber",date: new Date("2018-09-06T15:40:45.213Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 2508,str: "Sausages Tennessee",num: 42731,date: new Date("2018-09-06T16:05:11.276Z"),array: [],obj: {}});
    },

    function(coll) {
        return coll.insert({_id: 2509,str: "Italy Directives",num: 69951,date: new Date("2018-09-06T09:24:27.707Z"),array: [],obj: {_id: 2510,str: "homogeneous hack Configuration",date: new Date("2018-09-06T00:25:22.979Z"),obj: {_id: 2511,num: 86033,array: [68105,"Refined Wooden Chips Investor",[],new Date("2018-09-06T08:57:42.930Z"),91531,"1080p Kentucky Shoes",new Date("2018-09-06T04:39:02.163Z"),new Date("2018-09-06T19:35:00.545Z"),{_id: 2512,str: "ROI Bedfordshire",date: new Date("2018-09-05T20:07:29.269Z"),array: []},"actuating Money Market Account","platforms",{_id: 2513,str: "Trafficway XSS interactive",num: 52829,date: new Date("2018-09-06T10:17:16.073Z"),array: [],obj: {}}],obj: {}}}});
    },

    function(coll) {
        return coll.insert({_id: 2514,num: 27440,date: new Date("2018-09-06T07:07:39.691Z")});
    },

    function(coll) {
        return coll.insert({_id: 2515,str: "ADP Maine",num: 71652,date: new Date("2018-09-06T18:55:12.801Z"),array: ["Cambridgeshire Savings Account",{_id: 2516,str: "Fantastic Stand-alone",num: 63019,date: new Date("2018-09-06T12:27:08.429Z"),array: [],obj: {_id: 2517,str: "Intranet",array: ["bypass applications"],obj: {}}},"TCP Rubber",new Date("2018-09-06T11:39:41.326Z"),[],50391,45548,new Date("2018-09-06T05:33:24.113Z"),"calculating navigating",97768,99616,{_id: 2518,str: "Savings Account Web",num: 11408,date: new Date("2018-09-06T09:54:44.551Z"),array: [],obj: {_id: 2519,str: "Mill Guatemala",date: new Date("2018-09-06T12:01:29.733Z"),array: [new Date("2018-09-05T19:56:34.227Z")],obj: {_id: 2520,date: new Date("2018-09-06T03:01:57.960Z")}}},93874,"RAM"],obj: {}});
    },

];

const indexList = [

    function(coll) {
        return coll.createIndex({"str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"str": -1, "obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": -1, "obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": 1, "date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"str": -1, "obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": 1, "date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": 1, "date": -1, "obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"str": -1, "obj.obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": 1, "obj.obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": -1, "obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": 1, "date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": -1, "obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": -1, "num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": -1, "obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"date": -1});
    },

    function(coll) {
        return coll.createIndex({"str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": -1, "obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": -1, "obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": -1, "obj.obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"str": -1, "obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": 1, "obj.obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": -1, "obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": -1, "obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"str": 1, "obj.obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"date": 1, "obj.obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": 1, "obj.obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.str": -1, "obj.obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": -1, "obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": -1, "obj.obj.obj.num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": -1, "obj.obj.obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": 1, "num": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": 1, "obj.num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": 1, "obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"str": 1, "num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.date": -1, "obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": -1, "obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"num": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.date": -1, "obj.date": 1, "obj.obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"str": -1, "obj.date": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.str": 1, "obj.obj.obj.date": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.num": 1, "obj.obj.obj.str": -1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.num": -1, "obj.obj.str": 1});
    },

    function(coll) {
        return coll.createIndex({"obj.obj.obj.date": -1, "date": 1});
    },

];

const aggregationList = [

        [{$project: {a: { $arrayElemAt: [[],79387] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$obj.obj.obj.num',51142,'$obj.obj.obj.num'],[]]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[["bluetooth District"],['$obj.obj.str',{ $substr: [{ $substr: ["Assistant",0,12] },15,1] },{ $trim: {input: "Awesome Tools",chars: { $dateToString: {date: '$obj.obj.obj.date',format: "%Y-%M-%w-%d-%U-%w-%Y-%m",onNull: '$str'} }} }]]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$obj.obj.num'],[]]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.num'],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $substrBytes: [{ $ltrim: {input: '$obj.obj.obj.str',chars: "Fantastic Tennessee User-centric"} },7,16] }, _id: 0}}],

        [{$project: {a: { $substrBytes: ['$obj.obj.obj.str',2,6] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "payment",v: { $trunc: 71146 }}]] }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [[],[68085,'$obj.num','$obj.num'],[],["Supervisor"],["empowering Uzbekistan Money Market Account"],[]],useLongestLength: false} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[]] }, _id: 0}}],

        [{$project: {a: { $toUpper: "mindshare" }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["Industrial ROI"],46619] }, _id: 0}}],

        [{$project: {a: { $concatArrays: [[],['$obj.obj.str',{ $substr: ["Handmade Soft Soap Metal",17,16] }],[],["Optimization Savings Account"],[83950,49329,'$obj.obj.obj.num']] }, _id: 0}}],

        [{$project: {a: DATE;, _id: 0}}],

        [{$project: {a: { $dayOfWeek: { $month: { $dateFromString: {dateString: "2018-09-06T15:22:45.575Z",timezone: "Asia/Irkutsk"} } } }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj' }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $toString: { $arrayElemAt: [[11737],'$obj.obj.obj.num'] } },'$obj.obj.obj.str'],29732] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[["XSS Tenge","digital Buckinghamshire"],[37985],[]]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.obj.str'],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: LOOKUP_date;, _id: 0}}],

        [{$project: {a: { $concatArrays: [['$num']] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["recontextualize",{ $substr: ["Auto Loan Account",1,12] }],4296] }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [[new Date("2018-09-06T02:15:13.802Z")],[],[{ $trim: { input: "Fresh Cambridgeshire" } },{ $substr: [{ $substrBytes: ['$str',5,15] },20,19] }],['$num',44861,'$obj.obj.num'],["Home Loan Account","Front-line hacking Fish",'$obj.str']],useLongestLength: false} }, _id: 0}}],

        [{$project: {a: { $dayOfWeek: { $isoWeek: { $isoWeekYear: { $week: { $week: { $dateToParts: {date: { $dateFromString: { dateString: "2018-09-06T09:26:37.524Z" } },timezone: "Europe/Ulyanovsk"} } } } } } }, _id: 0}}],

        [{$project: {a: { $range: [13,18,18] }, _id: 0}}],

        [{$project: {a: { $hour: { $hour: { $dateToString: { date: { $minute: { $year: new Date("2018-09-06T16:31:23.684Z") } } } } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[{ $toUpper: '$str' }],[{ $concat: [] }],['$obj.obj.num'],[]]] }, _id: 0}}],

        [{$project: {a: { $substr: [{ $trim: { input: '$obj.obj.str' } },13,16] }, _id: 0}}],

        [{$project: {a: { $minute: { $dayOfMonth: { $millesecond: { $year: { $week: { $dateToParts: {date: { $isoWeek: { $dayOfYear: { $dayOfWeek: { $dateToString: { date: new Date("2018-09-06T17:07:19.402Z") } } } } },iso8601: true} } } } } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Integration Gloves Triple-buffered",v: '$obj.obj.obj.str'}]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.obj.str',{ $trim: { input: "application" } },{ $substr: ['$obj.str',16,13] }],76162] }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: new Date("2018-09-06T14:33:35.089Z"),format: "%d-%G-%m-%u-%S-%m-%M",timezone: "Asia/Macao",onNull: { $trim: {input: { $toLower: "Buckinghamshire" },chars: "partnerships"} }} }, _id: 0}}],

        [{$project: {a: { $toLower: "Shoes" }, _id: 0}}],

        [{$project: {a: { $trim: {input: { $substrBytes: [{ $rtrim: { input: "toolset Shoes" } },3,8] },chars: '$obj.obj.obj.str'} }, _id: 0}}],

        [{$project: {a: { $toDate: { $arrayElemAt: [[],99230] } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.str',"back up Licensed Metal Pizza grow"],99404] }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [[],[{ $substr: ['$obj.obj.str',19,9] },"Tuna exploit",'$obj.str']],useLongestLength: false} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],33808] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],42942] }, _id: 0}}],

        [{$project: {a: { $isoWeekYear: { $dayOfMonth: { $dateFromString: {dateString: "2018-09-06T01:06:21.772Z",format: "%U-%V-%j-%u-%V-%L-%Z-%H-%z",timezone: "EST5EDT",onNull: { $arrayToObject: [[['$obj.obj.obj.str',"Checking Account Kwanza Chief"],[]]] }} } } }, _id: 0}}],

        [{$project: {a: { $millesecond: { $dayOfWeek: { $hour: '$date' } } }, _id: 0}}],

        [{$project: {a: { $ltrim: {input: '$str',chars: "Netherlands Antillian Guilder incentivize Borders"} }, _id: 0}}],

        [{$project: {a: { $zip: { inputs: [[],['$str'],['$obj.obj.obj.str']] } }, _id: 0}}],

        [{$project: {a: { $isoDayOfWeek: { $minute: { $dateFromString: {dateString: "2018-09-06T09:24:39.389Z",timezone: "America/Adak",onNull: { $month: { $dayOfWeek: { $isoWeek: { $isoWeek: { $hour: { $millesecond: '$obj.date' } } } } } }} } } }, _id: 0}}],

        [{$project: {a: { $range: [11,2,6] }, _id: 0}}],

        [{$project: {a: { $trim: {input: { $toLower: '$obj.obj.str' },chars: "logistical"} }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: '$date',timezone: "Africa/Bujumbura",onNull: { $arrayToObject: [[{k: "HDD killer Estate",v: false},{k: "neural overriding Planner",v: '$obj.obj.str'},{k: "Home Loan Account",v: true}]] }} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$num',98250],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $zip: { inputs: [['$obj.obj.num',{ $abs: 51203 }],[false,{ $toUpper: { $rtrim: { input: { $ltrim: {input: { $substrBytes: ["Handmade",18,13] },chars: '$obj.obj.str'} } } } },new Date("2018-09-06T08:39:07.593Z")],["Manager","bypassing"],[],['$obj.obj.obj.str']] } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],2365] }, _id: 0}}],

        [{$project: {a: { $toString: { $range: [20,14] } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["redundant",{ $substr: ['$obj.obj.obj.str',10,16] }],38361] }, _id: 0}}],

        [{$project: {a: { $toString: { $arrayElemAt: [['$obj.num',39083],16621] } }, _id: 0}}],

        [{$project: {a: { $substr: ["Dong Rustic Rubber Mouse Forward",4,16] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],99181] }, _id: 0}}],

        [{$project: {a: { $substr: ["maximized",3,19] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $toUpper: "backing up" }],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $range: [15,3] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "firewall Forge",v: '$obj.obj.num'},{k: "empowering Canadian Dollar Terrace",v: new Date("2018-09-06T15:48:11.044Z")}]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[31717,91292],[false],['$obj.num','$obj.obj.obj.num'],['$str'],[62391,'$obj.obj.num',14423]]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $reverseArray: [[{ $dateToString: {date: new Date("2018-09-06T15:23:38.656Z"),timezone: "Antarctica/Mawson",onNull: { $arrayElemAt: [[{ $concat: ["generating exploit","Croatia"] },67087],'$obj.obj.num'] }} }]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],48912] }, _id: 0}}],

        [{$project: {a: { $minute: { $dayOfWeek: { $dayOfMonth: { $millesecond: { $dateToParts: {date: { $isoWeek: { $millesecond: { $hour: { $dateToString: {date: new Date("2018-09-06T16:39:54.044Z"),format: "%z-%z-%S-%S",timezone: "America/Resolute",onNull: "Synergistic California Walks"} } } } },timezone: "Asia/Ujung_Pandang"} } } } } }, _id: 0}}],

        [{$project: {a: { $dayOfWeek: { $dayOfYear: { $dayOfMonth: { $week: { $dayOfMonth: { $year: { $dateFromParts: {year: { $abs: '$obj.obj.num' },hour: { $ceil: 24980 },minute: { $floor: 5091 },second: { $multiply: ['$num','$obj.obj.obj.num'] },millisecond: { $sqrt: 40685 }} } } } } } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],80964] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["Berkshire Washington invoice",'$obj.obj.obj.str',{ $trim: {input: { $dateToString: {date: { $minute: { $hour: { $dateToParts: {date: { $dateFromString: {dateString: "2018-09-06T01:49:19.220Z",format: "%Z-%G-%w-%u"} },timezone: "NZ-CHAT"} } } },timezone: "Asia/Hovd",onNull: "Nigeria Micronesia"} },chars: { $toLower: "neural Fundamental migration" }} }],82415] }, _id: 0}}],

        [{$project: {a: { $range: [16,12,15] }, _id: 0}}],

        [{$project: {a: { $map: {input: ['$num'],as: 'cleve',in: { $ln: 56908 }} }, _id: 0}}],

        [{$project: {a: { $substrCP: ['$str',4,9] }, _id: 0}}],

        [{$project: {a: { $dayOfYear: { $month: { $minute: { $isoDayOfWeek: new Date("2018-09-06T03:37:18.178Z") } } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$num',11267],[{ $toUpper: "Chair" },'$obj.obj.obj.str','$obj.str'],['$obj.obj.str']]] }, _id: 0}}],

        [{$project: {a: { $substr: [{ $trim: { input: '$obj.obj.obj.str' } },4,13] }, _id: 0}}],

        [{$project: {a: { $substrCP: [{ $dateToString: {date: '$date',format: "%M-%w-%d-%S-%w-%G-%d-%V-%H",timezone: "Africa/Lagos",onNull: { $arrayToObject: [[['$obj.obj.num'],['$str',"transitional Intelligent"],[],[{ $toString: { $objectToArray: '$obj.obj.obj' } },'$obj.obj.obj.str',"Ergonomic mobile"]]] }} },14,3] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Bedfordshire",v: '$date'}]] }, _id: 0}}],

        [{$project: {a: { $toUpper: '$obj.obj.str' }, _id: 0}}],

        [{$project: {a: { $dayOfWeek: { $toDate: { $arrayToObject: [[{k: "relationships fault-tolerant",v: { $substr: ['$obj.obj.str',8,15] }},{k: "Checking Account panel SSL",v: false}]] } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Granite",v: 30365},{k: "Handcrafted Rubber Soap RSS recontextualize",v: { $trim: {input: '$obj.str',chars: "Auto Loan Account HDD"} }}]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],53628] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $toUpper: { $ltrim: { input: "protocol" } } }],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $substrBytes: [{ $ltrim: { input: '$obj.obj.obj.str' } },18,0] }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: '$obj.obj.date',format: "%S-%w-%j-%z",timezone: "America/Anguilla",onNull: { $trim: { input: '$obj.obj.str' } }} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $substrBytes: [{ $rtrim: {input: { $ltrim: {input: "Sleek",chars: { $substr: ["integrate application Hong Kong Dollar",14,9] }} },chars: '$obj.obj.obj.str'} },7,10] }],78576] }, _id: 0}}],

        [{$project: {a: { $filter: {input: [{ $substrCP: [{ $ltrim: {input: "withdrawal Money Market Account sky blue",chars: '$obj.obj.obj.str'} },20,11] }],cond: { $isArray: [{ $objectToArray: '$$this' }] }} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $toUpper: "invoice Garden" }],45798] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Generic Concrete Chips",v: new Date("2018-09-06T05:14:01.520Z")}]] }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [[],["sensor primary Port"]],useLongestLength: true,defaults: [19703,[/Generic Wooden Car/,true,false]]} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $month: { $dateToParts: { date: { $second: { $week: { $year: { $month: { $dateFromString: {dateString: "2018-09-06T08:39:52.370Z",format: "%Z-%d-%L-%Z-%u-%d-%Y-%H-%L",timezone: "Europe/Guernsey"} } } } } } } } }, _id: 0}}],

        [{$project: {a: { $substr: ['$obj.str',1,7] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$obj.num',92776],[{ $substrCP: [{ $substr: ['$str',19,18] },19,18] }]]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [["input cutting-edge",{ $toUpper: '$str' }],18426] }, _id: 0}}],

        [{$project: {a: { $substr: [{ $substrCP: ["Rubber Way",14,18] },0,5] }, _id: 0}}],

        [{$project: {a: { $toLower: '$obj.obj.obj.str' }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],16005] }, _id: 0}}],

        [{$project: {a: { $reverseArray: [['$obj.obj.num']] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "contingency",v: '$obj.obj.str'}]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$num'],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$obj.str',{ $concat: [] }],['$obj.obj.num'],['$num'],["Technician Cambridgeshire Personal Loan Account"],[79670]]] }, _id: 0}}],

        [{$project: {a: { $rtrim: { input: "harness" } }, _id: 0}}],

        [{$project: {a: { $dayOfYear: { $isoDayOfWeek: { $dayOfMonth: { $second: { $isoWeekYear: { $dayOfMonth: { $dayOfYear: { $hour: new Date("2018-09-06T11:25:11.906Z") } } } } } } } }, _id: 0}}],

        [{$project: {a: { $isoWeek: { $year: { $isoDayOfWeek: { $millesecond: { $millesecond: { $toDate: { $arrayElemAt: [[],'$obj.obj.num'] } } } } } } }, _id: 0}}],

        [{$project: {a: { $isoWeekYear: { $dayOfWeek: { $dateFromString: {dateString: "2018-09-06T02:26:28.183Z",format: "%%-%w-%L-%U-%d-%Y-%j-%w",onError: { $arrayElemAt: [['$str',{ $toUpper: { $toUpper: "clicks-and-mortar Luxembourg Personal Loan Account" } },{ $rtrim: {input: '$obj.obj.obj.str',chars: '$obj.obj.str'} }],3880] },onNull: { $toLower: "workforce Books Orchestrator" }} } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.str'],'$num'] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.num',58093,{ $ln: 20123 }],'$num'] }, _id: 0}}],

        [{$project: {a: { $toUpper: "bandwidth San Marino" }, _id: 0}}],

        [{$project: {a: { $concatArrays: [[false,14385,{ $toUpper: '$str' },{ $dateFromParts: {year: { $ln: '$obj.num' },day: { $size: [['$obj.obj.str']] },millisecond: { $mod: ['$num',85607] }} }],[],[],[],["Metrics Corporate",{ $toString: { $arrayElemAt: [[{ $substrBytes: ["background Coordinator withdrawal",0,14] },'$obj.obj.obj.str',"Security Branding Horizontal"],'$obj.num'] } }],[],[],[]] }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [["efficient Handcrafted Wooden Chicken",{ $toUpper: "clear-thinking yellow Movies" }],["Nepalese Rupee",{ $trim: {input: '$obj.str',chars: { $substrCP: ['$obj.str',12,11] }} }],[],[],[24712],['$num',{ $year: { $second: { $dateFromString: {dateString: "2018-09-05T21:49:24.007Z",timezone: "America/Mexico_City",onError: { $dayOfWeek: { $isoWeek: { $dayOfMonth: { $second: { $isoDayOfWeek: { $dateFromParts: {year: { $subtract: ['$obj.obj.obj.num','$num'] },second: { $abs: { $trunc: 43131 } }} } } } } } }} } } },false]],useLongestLength: false} }, _id: 0}}],

        [{$project: {a: { $reverseArray: [[{ $dateToString: {date: { $millesecond: { $dayOfYear: { $isoWeekYear: { $dateFromString: {dateString: "2018-09-05T23:53:50.685Z",format: "%U-%M-%%-%j-%d-%m-%Y-%L-%Z-%w",timezone: "America/Argentina/San_Juan",onError: { $arrayToObject: [[{k: "Central back-end",v: false}]] },onNull: new Date("2018-09-06T18:17:58.194Z")} } } } },timezone: "Pacific/Truk"} },{ $dayOfWeek: { $dateToString: {date: new Date("2018-09-05T21:37:26.811Z"),format: "%M-%M-%Z-%d-%V-%H-%d-%G-%M-%L-%U",onNull: "Soft Marketing"} } },true]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $ltrim: { input: '$obj.obj.obj.str' } }, _id: 0}}],

        [{$project: {a: { $reverseArray: [[{ $toString: { $arrayToObject: [[{k: "Tuna user-facing Money Market Account",v: '$obj.obj.obj.date'}]] } }]] }, _id: 0}}],

        [{$project: {a: { $substrCP: [{ $toLower: "Somali Shilling bluetooth plum" },9,8] }, _id: 0}}],

        [{$project: {a: { $dateFromString: {dateString: "2018-09-06T06:30:39.942Z",onError: { $concatArrays: [['$obj.obj.obj.num'],[],["Tasty enterprise technologies",'$obj.str'],["Buckinghamshire strategic"]] }} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.obj.num',3267],56749] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[8240,52441],[{ $substrCP: ['$str',16,14] }],[],[],[]]] }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: '$obj.date',format: "%Y-%u-%u-%S-%d-%j-%Y-%Z",timezone: "America/Godthab"} }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $substr: ["asynchronous",2,6] },'$str'],'$num'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[["Applications Tasty Concrete Table"],[],[60302],[],["integrate array maroon"],['$str',{ $rtrim: {input: "Money Market Account project Principal",chars: '$obj.str'} },'$str',"Investment Account Centers SCSI"]]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[]] }, _id: 0}}],

        [{$project: {a: { $isoWeek: { $dayOfWeek: { $toDate: { $dateFromParts: {year: { $subtract: [{ $multiply: [] },86100] },month: { $divide: ['$obj.num','$num'] },hour: { $indexOfArray: [{ $range: [18,13] },{ $arrayToObject: [[{k: "green cyan Jewelery",v: false}]] },8,12] },second: 87667,millisecond: { $log: ['$obj.num','$obj.num'] }} } } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $trim: {input: { $concat: ['$str'] },chars: '$obj.str'} }],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[67155,'$obj.obj.obj.num'],[],[{ $substrBytes: ["New York Auto Loan Account",13,5] }],["Director neural-net Steel",{ $concat: [] }],[{ $trunc: 1534 },'$obj.obj.obj.num','$obj.obj.num'],['$str']]] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj' }, _id: 0}}],

        [{$project: {a: { $toString: { $zip: {inputs: [[{ $dateToString: {date: '$obj.obj.date',format: "%G-%%-%U-%S-%j-%d-%%",timezone: "Pacific/Pago_Pago"} }],['$obj.obj.obj.str',"Berkshire Borders synergies",'$obj.str'],['$obj.obj.obj.num'],[{ $substrBytes: ["gold Faroe Islands SSL",7,7] }]],useLongestLength: false} } }, _id: 0}}],

        [{$project: {a: { $toLower: { $concat: ['$obj.obj.str',"withdrawal Program"] } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Communications implement 1080p",v: new Date("2018-09-06T17:52:41.327Z")}]] }, _id: 0}}],

        [{$project: {a: { $substr: ['$str',11,5] }, _id: 0}}],

        [{$project: {a: { $isoDayOfWeek: { $dayOfWeek: { $week: { $week: { $minute: { $year: { $dateFromString: {dateString: "2018-09-06T15:43:49.240Z",timezone: "Etc/Greenwich",onNull: '$obj.obj.str'} } } } } } } }, _id: 0}}],

        [{$project: {a: { $substr: ['$str',4,1] }, _id: 0}}],

        [{$project: {a: { $toString: { $dateToString: {date: '$obj.date',format: "%j-%z-%V-%V-%G-%U-%U-%m-%H-%m"} } }, _id: 0}}],

        [{$project: {a: { $dateToString: { date: new Date("2018-09-06T17:11:18.960Z") } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[]] }, _id: 0}}],

        [{$project: {a: { $dateFromString: {dateString: "2018-09-06T14:02:51.669Z",format: "%G-%S-%u-%%-%M-%j-%G",onError: { $isoWeek: { $isoWeek: { $minute: '$obj.date' } } }} }, _id: 0}}],

        [{$project: {a: { $substrCP: ["Trafficway Kids",8,0] }, _id: 0}}],

        [{$project: {a: { $map: {input: [{ $toUpper: "Representative Computer" }],in: { $subtract: [41803,'$$this'] }} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[["Auto Loan Account iterate user-centric"],[],[{ $ceil: 6535 }],[{ $toLower: '$str' },{ $concat: ["Car orange",{ $toString: { $ltrim: { input: '$obj.obj.str' } } }] }],[{ $dateToString: {date: new Date("2018-09-06T08:37:21.210Z"),format: "%Z-%z-%Z-%Y-%U-%M-%S-%G-%Y-%V-%H"} },"encryption Manager Passage","composite AGP Tennessee"]]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[],[],[]]] }, _id: 0}}],

        [{$project: {a: { $substrBytes: ['$obj.str',20,5] }, _id: 0}}],

        [{$project: {a: { $substrBytes: ["Electronics Granite turquoise",7,0] }, _id: 0}}],

        [{$project: {a: { $range: [1,14] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.obj.str',"SMTP"],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $dayOfYear: { $millesecond: { $hour: { $dayOfYear: { $toDate: { $map: {input: [],as: 'koby',in: { $size: [[]] }} } } } } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$obj.num',28868],[],[]]] }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [['$obj.obj.str','$str'],[],[],[],[]],useLongestLength: false,defaults: [63972,"intuitive Program"]} }, _id: 0}}],

        [{$project: {a: { $dayOfMonth: { $dayOfWeek: { $year: { $month: { $dateFromString: {dateString: "2018-09-06T19:27:03.238Z",format: "%u-%U-%Z-%Y-%z-%u-%U-%d-%G-%M",onNull: { $concat: ["capacitor"] }} } } } } }, _id: 0}}],

        [{$project: {a: { $isoWeek: { $dateToString: {date: { $dateToParts: { date: { $isoWeekYear: { $dateToParts: {date: { $week: { $isoDayOfWeek: { $dayOfYear: { $week: { $dayOfYear: { $year: { $dayOfYear: { $isoWeekYear: { $millesecond: { $dateFromParts: {year: { $exp: '$obj.obj.num' },day: { $log10: 15786 },hour: { $indexOfArray: [{ $concatArrays: [[],["Fantastic Concrete","quantify Self-enabling quantify"],['$str'],['$str'],[],['$obj.obj.obj.num',11827],[]] },{ $reverseArray: [[]] },7] },minute: { $size: [[]] },second: { $log: [58556,{ $add: ['$obj.obj.num',89767,'$obj.obj.num'] }] },timezone: "Europe/London"} } } } } } } } } } },timezone: "Chile/Continental",iso8601: true} } } } },format: "%G-%H-%Y-%%-%V-%u"} } }, _id: 0}}],

        [{$project: {a: { $filter: {input: [],cond: { $gte: [{ $concat: ["intermediate Principal schemas"] },{ $range: [14,5,14] }] }} }, _id: 0}}],

        [{$project: {a: { $ltrim: {input: "New Jersey budgetary management distributed",chars: { $substrBytes: ["Gorgeous seize",19,6] }} }, _id: 0}}],

        [{$project: {a: { $millesecond: { $dayOfWeek: { $year: { $isoDayOfWeek: { $dayOfYear: { $dateFromString: {dateString: "2018-09-06T19:36:32.409Z",timezone: "Asia/Jayapura",onError: { $arrayElemAt: [[28828],'$obj.num'] },onNull: { $arrayToObject: [[[],["Small",{ $concat: [{ $substrCP: ['$str',2,1] },'$obj.str'] }],[]]] }} } } } } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.str'],10569] }, _id: 0}}],

        [{$project: {a: { $trim: { input: { $substrCP: ["optical grey",4,10] } } }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $ltrim: { input: '$obj.str' } },"New Jersey users"],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$str',{ $trim: {input: "Oval",chars: "Iceland Open-source primary"} },{ $ltrim: { input: "Practical Steel Bike Kyrgyz Republic" } }],28301] }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [["ability"],[],['$obj.obj.obj.str','$obj.obj.obj.str','$obj.obj.obj.str'],[{ $toUpper: { $substrCP: ["Falkland Islands Pound convergence",20,1] } },"Data bottom-line quantify"],[33460,{ $log: [83965,63252] }],[98780]],useLongestLength: false,defaults: [{array: [[new Date("2018-09-06T17:13:20.722Z")],"circuit Avon next-generation"],date: new Date("2018-09-05T20:42:45.654Z"),str: "microchip revolutionize SAS"}]} }, _id: 0}}],

        [{$project: {a: { $hour: { $isoWeekYear: { $hour: { $dateToString: {date: '$obj.obj.obj.date',format: "%j-%U-%j-%L-%G-%Y-%%-%V-%M-%U-%u-%M"} } } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[["Borders",{ $toLower: '$str' },"Algerian Dinar",{ $concat: ["Saudi Riyal Operative"] }],['$obj.obj.obj.num'],[],[],["syndicate",'$obj.obj.obj.str']]] }, _id: 0}}],

        [{$project: {a: { $isoWeekYear: { $isoWeek: { $isoDayOfWeek: { $dayOfYear: { $dateFromParts: {isoWeekYear: '$obj.obj.num',hour: 25175,minute: { $floor: '$obj.obj.obj.num' },second: { $mod: ['$num',15338] },timezone: "Europe/Belgrade"} } } } } }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [['$obj.obj.num'],['$str','$str'],[{ $substr: ["Grocery",10,5] },{ $substrBytes: [{ $substrBytes: [{ $toUpper: "Money Market Account Assistant circuit" },13,0] },7,1] }],["Groves indigo"],[]],useLongestLength: false} }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj' }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[["maximized"],['$obj.num',{ $exp: 49268 }],[31864,'$num','$obj.num']]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[]] }, _id: 0}}],

        [{$project: {a: { $toUpper: { $toUpper: { $substr: ["overriding Electronics back-end",3,5] } } }, _id: 0}}],

        [{$project: {a: { $substr: ["Cliffs",9,10] }, _id: 0}}],

        [{$project: {a: { $zip: {inputs: [[91640],[],[]],useLongestLength: true} }, _id: 0}}],

        [{$project: {a: { $rtrim: {input: '$obj.obj.str',chars: { $trim: {input: "Ohio Directives",chars: '$obj.str'} }} }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: '$date',format: "%j-%S-%L-%M",timezone: "Turkey"} }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: new Date("2018-09-06T07:07:51.290Z"),format: "%V-%V-%d-%m-%H-%w-%S",timezone: "Pacific/Efate",onNull: { $arrayToObject: [[{k: "array",v: { $toLower: '$obj.obj.str' }}]] }} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[28330],[{ $ltrim: { input: "Fantastic Rubber Hat mesh" } }],[]]] }, _id: 0}}],

        [{$project: {a: { $toUpper: "Towels artificial intelligence Rubber" }, _id: 0}}],

        [{$project: {a: { $dateToParts: {date: { $month: { $toDate: { $toUpper: "hybrid copying" } } },timezone: "America/Argentina/ComodRivadavia"} }, _id: 0}}],

        [{$project: {a: { $dayOfMonth: '$obj.obj.obj.date' }, _id: 0}}],

        [{$project: {a: { $dateFromParts: {year: { $abs: 29174 },hour: { $abs: 45729 },second: { $abs: 60864 },millisecond: { $floor: '$num' },timezone: "Africa/Monrovia"} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Intelligent Infrastructure",v: "Directives Florida"},{k: "value-added Glen",v: '$obj.obj.obj.num'}]] }, _id: 0}}],

        [{$project: {a: { $concatArrays: [[{ $toUpper: "seamless Car" },'$str'],['$obj.str','$obj.obj.obj.str'],[12773],['$obj.obj.num','$obj.obj.num']] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[96718],'$obj.obj.num'] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[{ $substrBytes: ["back-end",10,4] },'$obj.str'],'$obj.num'] }, _id: 0}}],

        [{$project: {a: { $hour: { $dayOfMonth: { $dateToString: {date: new Date("2018-09-06T17:28:58.770Z"),format: "%w-%L-%L-%Z-%%-%L-%M-%j",timezone: "America/Curacao",onNull: { $map: {input: ["secondary aggregate core"],as: 'gwen',in: '$$gwen'} }} } } }, _id: 0}}],

        [{$project: {a: { $substrCP: [{ $trim: {input: { $toString: { $arrayToObject: [[[],[],[]]] } },chars: "index input Borders"} },14,3] }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [['$obj.obj.str'],{ $size: [['$num',47062,74264]] }] }, _id: 0}}],

        [{$project: {a: { $concatArrays: [['$obj.num',71533,{ $size: [[{ $rtrim: {input: { $substrBytes: ["approach Grocery Cambridgeshire",15,9] },chars: { $dateToString: {date: { $toDate: { $zip: {inputs: [['$obj.obj.obj.str']],defaults: [new Date("2018-09-05T22:29:18.170Z"),/Belize Dollar|Iraqi Dinar|JSON|SMS/,"COM"]} } },onNull: { $dateFromString: {dateString: "2018-09-06T10:46:07.196Z",format: "%Y-%z-%w-%V-%Z-%V",onError: { $substr: ['$obj.str',2,6] }} }} }} }]] }],['$date']] }, _id: 0}}],

        [{$project: {a: { $dayOfMonth: { $minute: { $isoWeekYear: { $isoDayOfWeek: { $millesecond: { $second: { $second: { $dayOfYear: { $hour: { $minute: { $dateToParts: {date: { $dateFromParts: { year: { $log: ['$obj.obj.num','$num'] } } },iso8601: true} } } } } } } } } } } }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Generic Steel Ball",v: '$str'}]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "hierarchy product",v: "Bacon"},{k: "Views Associate Maine",v: { $isoWeek: { $millesecond: { $dayOfWeek: { $isoWeekYear: { $millesecond: { $dateToParts: {date: { $dateFromParts: {isoWeekYear: { $trunc: 30144 },isoWeek: { $size: [[65377]] },hour: { $exp: '$obj.obj.obj.num' },minute: { $indexOfArray: [{ $map: {input: [{ $substrCP: ['$obj.str',2,7] }],as: 'kamron',in: { $cmp: [{ $arrayElemAt: [[],'$$kamron'] },{ $toString: { $arrayElemAt: [[{ $sqrt: '$$kamron' }],'$num'] } }] }} },{ $filter: {input: [],cond: { $eq: [{ $arrayToObject: [[]] },{ $toDate: { $arrayToObject: [[{k: "virtual",v: false},{k: "overriding Norwegian Krone Networked",v: '$$this'}]] } }] }} },8] },second: { $abs: 5225 },millisecond: { $exp: { $mod: ['$obj.obj.obj.num',68463] } }} },iso8601: false} } } } } } }}]] }, _id: 0}}],

        [{$project: {a: { $zip: { inputs: [[],['$obj.str',"program Argentina"],[],[],[{ $substrCP: ['$obj.str',12,8] }],[26796,'$obj.obj.num','$obj.obj.num']] } }, _id: 0}}],

        [{$project: {a: { $reverseArray: [[]] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[[2465],["New Jersey"],["primary",{ $ltrim: {input: "USB Metical",chars: { $toLower: '$obj.obj.obj.str' }} }]]] }, _id: 0}}],

        [{$project: {a: { $toLower: '$str' }, _id: 0}}],

        [{$project: {a: { $dateToString: {date: { $toDate: { $arrayElemAt: [[],'$obj.obj.num'] } },format: "%d-%Z-%L-%G"} }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[['$obj.obj.obj.str'],["Fantastic Manager Accounts","Ergonomic",{ $dateToString: {date: '$obj.obj.obj.date',onNull: { $arrayToObject: [[{k: "Ergonomic Plastic Shirt backing up",v: { $toString: { $isoWeek: { $dateToParts: {date: { $minute: { $dateFromString: {dateString: "2018-09-06T08:08:18.701Z",format: "%G-%L-%G-%V-%S-%G-%L-%d-%j-%U-%G",timezone: "Africa/Monrovia",onError: { $substrBytes: ["quantifying navigating",0,20] },onNull: { $ltrim: {input: { $toUpper: "Refined TCP" },chars: '$str'} }} } },timezone: "GMT+0",iso8601: false} } } }},{k: "system-worthy",v: new Date("2018-09-05T20:09:58.262Z")}]] }} }],[85083,'$obj.num'],['$obj.obj.num','$obj.obj.obj.num'],[]]] }, _id: 0}}],

        [{$project: {a: { $minute: { $dateToParts: {date: { $isoDayOfWeek: { $dateToString: {date: new Date("2018-09-06T02:18:54.277Z"),onNull: "Avon olive"} } },timezone: "Europe/Minsk",iso8601: true} } }, _id: 0}}],

        [{$project: {a: { $objectToArray: '$obj.obj' }, _id: 0}}],

        [{$project: {a: { $arrayElemAt: [[68393,'$obj.num'],91887] }, _id: 0}}],

        [{$project: {a: { $substr: ['$str',11,15] }, _id: 0}}],

        [{$project: {a: { $arrayToObject: [[{k: "Cambridgeshire",v: '$obj.obj.num'},{k: "system",v: false}]] }, _id: 0}}],

        [{$project: {a: { $substrBytes: [{ $trim: { input: '$str' } },16,2] }, _id: 0}}],

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
