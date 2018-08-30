var newsheading = ["said", "compani", "year", "trade", "new", "like", "percent", "cryptocurr", "would", "bitcoin", "investor", "market", "could", "trump", "one", "us", "bank", "regul", "million", "billion", "blockchain", "financi"]
var newsdata = [[16, 19, 1280], [16, 9, 460], [16, 20, 547], [16, 1, 2589], [16, 12, 1284], [16, 7, 400], [16, 21, 867], [16, 10, 906], [16, 5, 1149], [16, 11, 1097], [16, 18, 808], [16, 4, 1555], [16, 14, 857], [16, 6, 2172], [16, 17, 734], [16, 0, 2202], [16, 3, 1417], [16, 13, 1284], [16, 15, 963], [16, 8, 1145], [16, 2, 1800], [19, 16, 1280], [19, 9, 549], [19, 20, 247], [19, 1, 3593], [19, 12, 1331], [19, 7, 89], [19, 21, 579], [19, 10, 1691], [19, 5, 1742], [19, 11, 1237], [19, 18, 1326], [19, 4, 1095], [19, 14, 1018], [19, 6, 2328], [19, 17, 676], [19, 0, 2521], [19, 3, 1793], [19, 13, 2110], [19, 15, 1224], [19, 8, 1448], [19, 2, 2028], [9, 16, 460], [9, 19, 549], [9, 20, 1040], [9, 1, 1297], [9, 12, 638], [9, 7, 2076], [9, 21, 563], [9, 10, 914], [9, 5, 1073], [9, 11, 549], [9, 18, 883], [9, 4, 1034], [9, 14, 696], [9, 6, 591], [9, 17, 559], [9, 0, 2508], [9, 3, 822], [9, 13, 312], [9, 15, 367], [9, 8, 679], [9, 2, 1487], [20, 16, 547], [20, 19, 247], [20, 9, 1040], [20, 1, 833], [20, 12, 971], [20, 7, 512], [20, 21, 363], [20, 10, 361], [20, 5, 762], [20, 11, 346], [20, 18, 459], [20, 4, 948], [20, 14, 665], [20, 6, 168], [20, 17, 196], [20, 0, 1835], [20, 3, 618], [20, 13, 90], [20, 15, 85], [20, 8, 446], [20, 2, 742], [1, 16, 2589], [1, 19, 3593], [1, 9, 1297], [1, 20, 833], [1, 12, 2829], [1, 7, 850], [1, 21, 1240], [1, 10, 3223], [1, 5, 3580], [1, 11, 2546], [1, 18, 2437], [1, 4, 2768], [1, 14, 2014], [1, 6, 4906], [1, 17, 1708], [1, 0, 6006], [1, 3, 3383], [1, 13, 4078], [1, 15, 2387], [1, 8, 2862], [1, 2, 3783], [12, 16, 1284], [12, 19, 1331], [12, 9, 638], [12, 20, 971], [12, 1, 2829], [12, 7, 470], [12, 21, 516], [12, 10, 1099], [12, 5, 1550], [12, 11, 1166], [12, 18, 912], [12, 4, 1455], [12, 14, 1065], [12, 6, 1900], [12, 17, 601], [12, 0, 2729], [12, 3, 1479], [12, 13, 1709], [12, 15, 1015], [12, 8, 1441], [12, 2, 1831], [7, 16, 400], [7, 19, 89], [7, 9, 2076], [7, 20, 512], [7, 1, 850], [7, 12, 470], [7, 21, 595], [7, 10, 653], [7, 5, 838], [7, 11, 765], [7, 18, 290], [7, 4, 963], [7, 14, 575], [7, 6, 414], [7, 17, 992], [7, 0, 3131], [7, 3, 1447], [7, 13, 69], [7, 15, 224], [7, 8, 549], [7, 2, 2125], [21, 16, 867], [21, 19, 579], [21, 9, 563], [21, 20, 363], [21, 1, 1240], [21, 12, 516], [21, 7, 595], [21, 10, 594], [21, 5, 568], [21, 11, 638], [21, 18, 490], [21, 4, 685], [21, 14, 461], [21, 6, 861], [21, 17, 745], [21, 0, 1709], [21, 3, 727], [21, 13, 531], [21, 15, 397], [21, 8, 599], [21, 2, 704], [10, 16, 906], [10, 19, 1691], [10, 9, 914], [10, 20, 361], [10, 1, 3223], [10, 12, 1099], [10, 7, 653], [10, 21, 594], [10, 5, 1720], [10, 11, 1334], [10, 18, 1369], [10, 4, 1102], [10, 14, 924], [10, 6, 2052], [10, 17, 884], [10, 0, 3158], [10, 3, 1537], [10, 13, 1799], [10, 15, 1423], [10, 8, 1332], [10, 2, 1789], [5, 16, 1149], [5, 19, 1742], [5, 9, 1073], [5, 20, 762], [5, 1, 3580], [5, 12, 1550], [5, 7, 838], [5, 21, 568], [5, 10, 1720], [5, 11, 1501], [5, 18, 1320], [5, 4, 1583], [5, 14, 1280], [5, 6, 2440], [5, 17, 720], [5, 0, 3394], [5, 3, 1930], [5, 13, 2105], [5, 15, 1246], [5, 8, 1687], [5, 2, 2377], [11, 16, 1097], [11, 19, 1237], [11, 9, 549], [11, 20, 346], [11, 1, 2546], [11, 12, 1166], [11, 7, 765], [11, 21, 638], [11, 10, 1334], [11, 5, 1501], [11, 18, 933], [11, 4, 1174], [11, 14, 926], [11, 6, 2274], [11, 17, 773], [11, 0, 2784], [11, 3, 2125], [11, 13, 1991], [11, 15, 1278], [11, 8, 1320], [11, 2, 1833], [18, 16, 808], [18, 19, 1326], [18, 9, 883], [18, 20, 459], [18, 1, 2437], [18, 12, 912], [18, 7, 290], [18, 21, 490], [18, 10, 1369], [18, 5, 1320], [18, 11, 933], [18, 4, 1020], [18, 14, 851], [18, 6, 1566], [18, 17, 628], [18, 0, 2206], [18, 3, 1255], [18, 13, 1278], [18, 15, 923], [18, 8, 997], [18, 2, 1476], [4, 16, 1555], [4, 19, 1095], [4, 9, 1034], [4, 20, 948], [4, 1, 2768], [4, 12, 1455], [4, 7, 963], [4, 21, 685], [4, 10, 1102], [4, 5, 1583], [4, 11, 1174], [4, 18, 1020], [4, 14, 1136], [4, 6, 1789], [4, 17, 927], [4, 0, 3004], [4, 3, 1393], [4, 13, 1370], [4, 15, 1213], [4, 8, 1376], [4, 2, 1923], [14, 16, 857], [14, 19, 1018], [14, 9, 696], [14, 20, 665], [14, 1, 2014], [14, 12, 1065], [14, 7, 575], [14, 21, 461], [14, 10, 924], [14, 5, 1280], [14, 11, 926], [14, 18, 851], [14, 4, 1136], [14, 6, 1329], [14, 17, 474], [14, 0, 2449], [14, 3, 1084], [14, 13, 1099], [14, 15, 842], [14, 8, 1057], [14, 2, 1518], [6, 16, 2172], [6, 19, 2328], [6, 9, 591], [6, 20, 168], [6, 1, 4906], [6, 12, 1900], [6, 7, 414], [6, 21, 861], [6, 10, 2052], [6, 5, 2440], [6, 11, 2274], [6, 18, 1566], [6, 4, 1789], [6, 14, 1329], [6, 17, 1025], [6, 0, 3784], [6, 3, 3011], [6, 13, 3376], [6, 15, 2042], [6, 8, 1951], [6, 2, 2810], [17, 16, 734], [17, 19, 676], [17, 9, 559], [17, 20, 196], [17, 1, 1708], [17, 12, 601], [17, 7, 992], [17, 21, 745], [17, 10, 884], [17, 5, 720], [17, 11, 773], [17, 18, 628], [17, 4, 927], [17, 14, 474], [17, 6, 1025], [17, 0, 2037], [17, 3, 817], [17, 13, 671], [17, 15, 626], [17, 8, 775], [17, 2, 879], [0, 16, 2202], [0, 19, 2521], [0, 9, 2508], [0, 20, 1835], [0, 1, 6006], [0, 12, 2729], [0, 7, 3131], [0, 21, 1709], [0, 10, 3158], [0, 5, 3394], [0, 11, 2784], [0, 18, 2206], [0, 4, 3004], [0, 14, 2449], [0, 6, 3784], [0, 17, 2037], [0, 3, 3885], [0, 13, 3155], [0, 15, 2640], [0, 8, 3063], [0, 2, 4172], [3, 16, 1417], [3, 19, 1793], [3, 9, 822], [3, 20, 618], [3, 1, 3383], [3, 12, 1479], [3, 7, 1447], [3, 21, 727], [3, 10, 1537], [3, 5, 1930], [3, 11, 2125], [3, 18, 1255], [3, 4, 1393], [3, 14, 1084], [3, 6, 3011], [3, 17, 817], [3, 0, 3885], [3, 13, 2373], [3, 15, 1659], [3, 8, 1723], [3, 2, 2636], [13, 16, 1284], [13, 19, 2110], [13, 9, 312], [13, 20, 90], [13, 1, 4078], [13, 12, 1709], [13, 7, 69], [13, 21, 531], [13, 10, 1799], [13, 5, 2105], [13, 11, 1991], [13, 18, 1278], [13, 4, 1370], [13, 14, 1099], [13, 6, 3376], [13, 17, 671], [13, 0, 3155], [13, 3, 2373], [13, 15, 1821], [13, 8, 1889], [13, 2, 2315], [15, 16, 963], [15, 19, 1224], [15, 9, 367], [15, 20, 85], [15, 1, 2387], [15, 12, 1015], [15, 7, 224], [15, 21, 397], [15, 10, 1423], [15, 5, 1246], [15, 11, 1278], [15, 18, 923], [15, 4, 1213], [15, 14, 842], [15, 6, 2042], [15, 17, 626], [15, 0, 2640], [15, 3, 1659], [15, 13, 1821], [15, 8, 1276], [15, 2, 1444], [8, 16, 1145], [8, 19, 1448], [8, 9, 679], [8, 20, 446], [8, 1, 2862], [8, 12, 1441], [8, 7, 549], [8, 21, 599], [8, 10, 1332], [8, 5, 1687], [8, 11, 1320], [8, 18, 997], [8, 4, 1376], [8, 14, 1057], [8, 6, 1951], [8, 17, 775], [8, 0, 3063], [8, 3, 1723], [8, 13, 1889], [8, 15, 1276], [8, 2, 1827], [2, 16, 1800], [2, 19, 2028], [2, 9, 1487], [2, 20, 742], [2, 1, 3783], [2, 12, 1831], [2, 7, 2125], [2, 21, 704], [2, 10, 1789], [2, 5, 2377], [2, 11, 1833], [2, 18, 1476], [2, 4, 1923], [2, 14, 1518], [2, 6, 2810], [2, 17, 879], [2, 0, 4172], [2, 3, 2636], [2, 13, 2315], [2, 15, 1444], [2, 8, 1827]];



var twitterheading = twitter_words = ["blockchain", "bitcoin", "crypto", "ico", "hyperledg", "join", "cryptocurr", "token", "ethereum", "ether", "btc", "new", "win", "rippl", "project", "litecoin", "start", "platform", "technolog", "wallet"]
var twitterdata = [[1, 0, 1686], [1, 10, 957], [1, 2, 1221], [1, 6, 1721], [1, 9, 149], [1, 8, 1520], [1, 4, 76], [1, 3, 520], [1, 5, 71], [1, 15, 810], [1, 11, 183], [1, 17, 18], [1, 14, 41], [1, 13, 369], [1, 16, 130], [1, 18, 50], [1, 7, 219], [1, 19, 92], [1, 12, 20], [0, 1, 1686], [0, 10, 369], [0, 2, 1373], [0, 6, 1907], [0, 9, 145], [0, 8, 886], [0, 4, 3106], [0, 3, 935], [0, 5, 895], [0, 15, 111], [0, 11, 323], [0, 17, 725], [0, 14, 269], [0, 13, 927], [0, 16, 39], [0, 18, 1079], [0, 7, 380], [0, 19, 14], [0, 12, 29], [10, 1, 957], [10, 0, 369], [10, 2, 410], [10, 6, 347], [10, 9, 18], [10, 8, 322], [10, 4, 14], [10, 3, 127], [10, 5, 13], [10, 15, 226], [10, 11, 11], [10, 17, 2], [10, 14, 2], [10, 13, 70], [10, 16, 11], [10, 18, 3], [10, 7, 69], [10, 19, 7], [10, 12, 1], [2, 1, 1221], [2, 0, 1373], [2, 10, 410], [2, 6, 857], [2, 9, 150], [2, 8, 653], [2, 4, 62], [2, 3, 636], [2, 5, 178], [2, 15, 169], [2, 11, 240], [2, 17, 77], [2, 14, 90], [2, 13, 171], [2, 16, 43], [2, 18, 35], [2, 7, 187], [2, 19, 19], [2, 12, 27], [6, 1, 1721], [6, 0, 1907], [6, 10, 347], [6, 2, 857], [6, 9, 103], [6, 8, 633], [6, 4, 31], [6, 3, 557], [6, 5, 39], [6, 15, 350], [6, 11, 162], [6, 17, 47], [6, 14, 29], [6, 13, 113], [6, 16, 39], [6, 18, 95], [6, 7, 186], [6, 19, 9], [6, 12, 21], [9, 1, 149], [9, 0, 145], [9, 10, 18], [9, 2, 150], [9, 6, 103], [9, 8, 156], [9, 3, 68], [9, 5, 12], [9, 15, 14], [9, 11, 165], [9, 17, 3], [9, 14, 11], [9, 13, 4], [9, 16, 18], [9, 18, 6], [9, 7, 56], [9, 19, 419], [9, 12, 21], [8, 1, 1520], [8, 0, 886], [8, 10, 322], [8, 2, 653], [8, 6, 633], [8, 9, 156], [8, 4, 79], [8, 3, 519], [8, 5, 94], [8, 15, 445], [8, 11, 70], [8, 17, 98], [8, 14, 294], [8, 13, 294], [8, 16, 77], [8, 18, 14], [8, 7, 234], [8, 19, 23], [8, 12, 14], [4, 1, 76], [4, 0, 3106], [4, 10, 14], [4, 2, 62], [4, 6, 31], [4, 8, 79], [4, 3, 10], [4, 5, 1557], [4, 15, 2], [4, 11, 356], [4, 17, 147], [4, 14, 251], [4, 13, 1649], [4, 16, 26], [4, 18, 126], [4, 7, 3], [4, 12, 1], [3, 1, 520], [3, 0, 935], [3, 10, 127], [3, 2, 636], [3, 6, 557], [3, 9, 68], [3, 8, 519], [3, 4, 10], [3, 5, 764], [3, 15, 23], [3, 11, 126], [3, 17, 70], [3, 14, 115], [3, 13, 7], [3, 16, 193], [3, 18, 25], [3, 7, 1160], [3, 19, 5], [3, 12, 2], [5, 1, 71], [5, 0, 895], [5, 10, 13], [5, 2, 178], [5, 6, 39], [5, 9, 12], [5, 8, 94], [5, 4, 1557], [5, 3, 764], [5, 15, 8], [5, 11, 212], [5, 17, 54], [5, 14, 113], [5, 13, 1256], [5, 16, 22], [5, 18, 25], [5, 7, 71], [5, 19, 1], [5, 12, 8], [15, 1, 810], [15, 0, 111], [15, 10, 226], [15, 2, 169], [15, 6, 350], [15, 9, 14], [15, 8, 445], [15, 4, 2], [15, 3, 23], [15, 5, 8], [15, 11, 26], [15, 17, 19], [15, 14, 27], [15, 13, 202], [15, 16, 22], [15, 7, 14], [15, 19, 8], [15, 12, 2], [11, 1, 183], [11, 0, 323], [11, 10, 11], [11, 2, 240], [11, 6, 162], [11, 9, 165], [11, 8, 70], [11, 4, 356], [11, 3, 126], [11, 5, 212], [11, 15, 26], [11, 17, 50], [11, 14, 54], [11, 13, 32], [11, 16, 42], [11, 18, 27], [11, 7, 45], [11, 19, 11], [17, 1, 18], [17, 0, 725], [17, 10, 2], [17, 2, 77], [17, 6, 47], [17, 9, 3], [17, 8, 98], [17, 4, 147], [17, 3, 70], [17, 5, 54], [17, 15, 19], [17, 11, 50], [17, 14, 35], [17, 13, 7], [17, 16, 85], [17, 18, 18], [17, 7, 131], [17, 19, 67], [17, 12, 2], [14, 1, 41], [14, 0, 269], [14, 10, 2], [14, 2, 90], [14, 6, 29], [14, 9, 11], [14, 8, 294], [14, 4, 251], [14, 3, 115], [14, 5, 113], [14, 15, 27], [14, 11, 54], [14, 17, 35], [14, 13, 25], [14, 16, 24], [14, 18, 28], [14, 7, 33], [14, 12, 1], [13, 1, 369], [13, 0, 927], [13, 10, 70], [13, 2, 171], [13, 6, 113], [13, 9, 4], [13, 8, 294], [13, 4, 1649], [13, 3, 7], [13, 5, 1256], [13, 15, 202], [13, 11, 32], [13, 17, 7], [13, 14, 25], [13, 16, 21], [13, 7, 14], [16, 1, 130], [16, 0, 39], [16, 10, 11], [16, 2, 43], [16, 6, 39], [16, 9, 18], [16, 8, 77], [16, 4, 26], [16, 3, 193], [16, 5, 22], [16, 15, 22], [16, 11, 42], [16, 17, 85], [16, 14, 24], [16, 13, 21], [16, 7, 541], [16, 12, 2], [18, 1, 50], [18, 0, 1079], [18, 10, 3], [18, 2, 35], [18, 6, 95], [18, 9, 6], [18, 8, 14], [18, 4, 126], [18, 3, 25], [18, 5, 25], [18, 11, 27], [18, 17, 18], [18, 14, 28], [18, 7, 84], [7, 1, 219], [7, 0, 380], [7, 10, 69], [7, 2, 187], [7, 6, 186], [7, 9, 56], [7, 8, 234], [7, 4, 3], [7, 3, 1160], [7, 5, 71], [7, 15, 14], [7, 11, 45], [7, 17, 131], [7, 14, 33], [7, 13, 14], [7, 16, 541], [7, 18, 84], [7, 19, 19], [7, 12, 27], [19, 1, 92], [19, 0, 14], [19, 10, 7], [19, 2, 19], [19, 6, 9], [19, 9, 419], [19, 8, 23], [19, 3, 5], [19, 5, 1], [19, 15, 8], [19, 11, 11], [19, 17, 67], [19, 7, 19], [19, 12, 13], [12, 1, 20], [12, 0, 29], [12, 10, 1], [12, 2, 27], [12, 6, 21], [12, 9, 21], [12, 8, 14], [12, 4, 1], [12, 3, 2], [12, 5, 8], [12, 15, 2], [12, 17, 2], [12, 14, 1], [12, 16, 2], [12, 7, 27], [12, 19, 13]]
