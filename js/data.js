const data = {
    sections: [
        {
            uniqueID: "news",
            title: "News",
            
        }
    ]
}





const tableData = [
    //Division 1 Women
    { event: "50 Fr", time: "22.28", cut: "D1 A", gender: "Women" },
    { event: "100 Fr", time: "48.60", cut: "D1 A", gender: "Women" },
    { event: "200 Fr", time: "1:45.53", cut: "D1 A", gender: "Women" },
    { event: "500 Fr", time: "4:43.70", cut: "D1 A", gender: "Women" },
    { event: "1650 Fr", time: "16:25.29", cut: "D1 A", gender: "Women" },
    { event: "100 Fly", time: "52.52", cut: "D1 A", gender: "Women" },
    { event: "200 Fly", time: "1:57.11", cut: "D1 A", gender: "Women" },
    { event: "100 Bk", time: "52.65", cut: "D1 A", gender: "Women" },
    { event: "200 Bk", time: "1:54.80", cut: "D1 A", gender: "Women" },
    { event: "100 Br", time: "1:00.30", cut: "D1 A", gender: "Women" },
    { event: "200 Br", time: "2:11.27", cut: "D1 A", gender: "Women" },
    { event: "200 IM", time: "1:57.88", cut: "D1 A", gender: "Women" },
    { event: "400 IM", time: "4:13.20", cut: "D1 A", gender: "Women" },
    { event: "200 Fr Relay", time: "1:28.26", cut: "D1 A", gender: "Women" },
    { event: "200 Fr Relay", time: "1:28.78", cut: "D1 Prov", gender: "Women" },
    { event: "400 Fr Relay", time: "3:13.62", cut: "D1 A", gender: "Women" },
    { event: "400 Fr Relay", time: "3:14.92", cut: "D1 Prov", gender: "Women" },
    { event: "800 Fr Relay", time: "7:00.86", cut: "D1 A", gender: "Women" },
    { event: "800 Fr Relay", time: "7:05.18", cut: "D1 Prov", gender: "Women" },
    { event: "200 Med Relay", time: "1:36.09", cut: "D1 A", gender: "Women" },
    { event: "200 Med Relay", time: "1:36.57", cut: "D1 Prov", gender: "Women" },
    { event: "400 Med Relay", time: "3:30.89", cut: "D1 A", gender: "Women" },
    { event: "400 Med Relay", time: "3:32.51", cut: "D1 Prov", gender: "Women" },
    
    //Division 1 Men
    { event: "50 Fr", time: "19.43", cut: "D1 A", gender: "Men" },
    { event: "100 Fr", time: "42.55", cut: "D1 A", gender: "Men" },
    { event: "200 Fr", time: "1:33.93", cut: "D1 A", gender: "Men" },
    { event: "500 Fr", time: "4:18.07", cut: "D1 A", gender: "Men" },
    { event: "1650 Fr", time: "15:06.60", cut: "D1 A", gender: "Men" },
    { event: "100 Fly", time: "46.11", cut: "D1 A", gender: "Men" },
    { event: "200 Fly", time: "1:42.79", cut: "D1 A", gender: "Men" },
    { event: "100 Bk", time: "46.29", cut: "D1 A", gender: "Men" },
    { event: "200 Bk", time: "1:42.14", cut: "D1 A", gender: "Men" },
    { event: "100 Br", time: "52.58", cut: "D1 A", gender: "Men" },
    { event: "200 Br", time: "1:54.95", cut: "D1 A", gender: "Men" },
    { event: "200 IM", time: "1:44.13", cut: "D1 A", gender: "Men" },
    { event: "400 IM", time: "3:46.19", cut: "D1 A", gender: "Men" },
    { event: "200 Fr Relay", time: "1:16.23", cut: "D1 A", gender: "Men" },
    { event: "200 Fr Relay", time: "1:16.91", cut: "D1 Prov", gender: "Men" },
    { event: "400 Fr Relay", time: "2:49.36", cut: "D1 A", gender: "Men" },
    { event: "400 Fr Relay", time: "2:50.42", cut: "D1 Prov", gender: "Men" },
    { event: "800 Fr Relay", time: "6:14.67", cut: "D1 A", gender: "Men" },
    { event: "800 Fr Relay", time: "6:16.79", cut: "D1 Prov", gender: "Men" },
    { event: "200 Med Relay", time: "1:23.61", cut: "D1 A", gender: "Men" },
    { event: "200 Med Relay", time: "1:23.85", cut: "D1 Prov", gender: "Men" },
    { event: "400 Med Relay", time: "3:04.96", cut: "D1 A", gender: "Men" },
    { event: "400 Med Relay", time: "3:06.20", cut: "D1 Prov", gender: "Men" },

    //Division 3 Women A
    { event: "50 Fr", time: "22.46", cut: "D3 A", gender: "Women" },
    { event: "100 Fr", time: "48.87", cut: "D3 A", gender: "Women" },
    { event: "200 Fr", time: "1:46.12", cut: "D3 A", gender: "Women" },
    { event: "500 Fr", time: "4:48.70", cut: "D3 A", gender: "Women" },
    { event: "1650 Fr", time: "16:27.43", cut: "D3 A", gender: "Women" },
    { event: "100 Fly", time: "53.69", cut: "D3 A", gender: "Women" },
    { event: "200 Fly", time: "1:58.70", cut: "D3 A", gender: "Women" },
    { event: "100 Bk", time: "53.60", cut: "D3 A", gender: "Women" },
    { event: "200 Bk", time: "1:56.50", cut: "D3 A", gender: "Women" },
    { event: "100 Br", time: "59.96", cut: "D3 A", gender: "Women" },
    { event: "200 Br", time: "2:11.38", cut: "D3 A", gender: "Women" },
    { event: "200 IM", time: "1:59.63", cut: "D3 A", gender: "Women" },
    { event: "400 IM", time: "4:14.21", cut: "D3 A", gender: "Women" },

    //Division 3 Women B
    { event: "50 Fr", time: "23.53", cut: "D3 B", gender: "Women" },
    { event: "100 Fr", time: "51.35", cut: "D3 B", gender: "Women" },
    { event: "200 Fr", time: "1:52.06", cut: "D3 B", gender: "Women" },
    { event: "500 Fr", time: "5:00.16", cut: "D3 B", gender: "Women" },
    { event: "1650 Fr", time: "17:21.20", cut: "D3 B", gender: "Women" },
    { event: "100 Fly", time: "55.86", cut: "D3 B", gender: "Women" },
    { event: "200 Fly", time: "2:04.77", cut: "D3 B", gender: "Women" },
    { event: "100 Bk", time: "56.58", cut: "D3 B", gender: "Women" },
    { event: "200 Bk", time: "2:03.17", cut: "D3 B", gender: "Women" },
    { event: "100 Br", time: "1:04.12", cut: "D3 B", gender: "Women" },
    { event: "200 Br", time: "2:20.09", cut: "D3 B", gender: "Women" },
    { event: "200 IM", time: "2:05.61", cut: "D3 B", gender: "Women" },
    { event: "400 IM", time: "4:29.91", cut: "D3 B", gender: "Women" },

    //Division 3 Women Relays
    { event: "200 Fr Relay", time: "1:34.93", cut: "D3 B", gender: "Women" },
    { event: "400 Fr Relay", time: "3:29.09", cut: "D3 B", gender: "Women" },
    { event: "800 Fr Relay", time: "7:37.07", cut: "D3 B", gender: "Women" },
    { event: "200 Med Relay", time: "1:44.23", cut: "D3 B", gender: "Women" },
    { event: "400 Med Relay", time: "3:29.72", cut: "D3 B", gender: "Women" },

    //Division 3 Men A
    { event: "50 Fr", time: "19.56", cut: "D3 A", gender: "Men" },
    { event: "100 Fr", time: "43.15", cut: "D3 A", gender: "Men" },
    { event: "200 Fr", time: "1:35.12", cut: "D3 A", gender: "Men" },
    { event: "500 Fr", time: "4:21.39", cut: "D3 A", gender: "Men" },
    { event: "1650 Fr", time: "15:17.12", cut: "D3 A", gender: "Men" },
    { event: "100 Fly", time: "46.25", cut: "D3 A", gender: "Men" },
    { event: "200 Fly", time: "1:43.50", cut: "D3 A", gender: "Men" },
    { event: "100 Bk", time: "46.42", cut: "D3 A", gender: "Men" },
    { event: "200 Bk", time: "1:42.91", cut: "D3 A", gender: "Men" },
    { event: "100 Br", time: "52.44", cut: "D3 A", gender: "Men" },
    { event: "200 Br", time: "1:54.89", cut: "D3 A", gender: "Men" },
    { event: "200 IM", time: "1:44.71", cut: "D3 A", gender: "Men" },
    { event: "400 IM", time: "3:50.06", cut: "D3 A", gender: "Men" },

    //Division 3 Men B
    { event: "50 Fr", time: "20.36", cut: "D3 B", gender: "Men" },
    { event: "100 Fr", time: "44.97", cut: "D3 B", gender: "Men" },
    { event: "200 Fr", time: "1:39.21", cut: "D3 B", gender: "Men" },
    { event: "500 Fr", time: "4:31.24", cut: "D3 B", gender: "Men" },
    { event: "1650 Fr", time: "15:50.88", cut: "D3 B", gender: "Men" },
    { event: "100 Fly", time: "48.58", cut: "D3 B", gender: "Men" },
    { event: "200 Fly", time: "1:49.64", cut: "D3 B", gender: "Men" },
    { event: "100 Bk", time: "49.28", cut: "D3 B", gender: "Men" },
    { event: "200 Bk", time: "1:48.83", cut: "D3 B", gender: "Men" },
    { event: "100 Br", time: "55.19", cut: "D3 B", gender: "Men" },
    { event: "200 Br", time: "2:00.92", cut: "D3 B", gender: "Men" },
    { event: "200 IM", time: "1:50.08", cut: "D3 B", gender: "Men" },
    { event: "400 IM", time: "3:58.49", cut: "D3 B", gender: "Men" },

    //Division 3 Men Relays
    { event: "200 Fr Relay", time: "1:21.31", cut: "D3 B", gender: "Men" },
    { event: "400 Fr Relay", time: "3:00.68", cut: "D3 B", gender: "Men" },
    { event: "800 Fr Relay", time: "6:39.86", cut: "D3 B", gender: "Men" },
    { event: "200 Med Relay", time: "1:29.45", cut: "D3 B", gender: "Men" },
    { event: "400 Med Relay", time: "3:17.69", cut: "D3 B", gender: "Men" },
];

