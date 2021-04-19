/* ------------------------------------ 机型 ------------------------------------ */

// 机型列表 width: dom宽度    position：屏幕位置    image：图片名    size：图片大小

var list = {
    "Phones": {
        "name": "手机",
        "width": 170,
        "data": {
            "iPhone 5c": {
                "width": 145,
                "position": [[64, 238], [704, 1374]],
                "image": ["Red", "Green", "Blue", "White", "Yellow"],
                "size": [767, 1605]
            },
            "iPhone SE": {
                "width": 157,
                "position": [[100, 280], [740, 1416]],
                "image": ["Space Gray", "Gold", "Rose Gold", "Silver"],
                "size": [840, 1696]
            },
            // "iPhone 5s": {
            //     "width": 145,
            //     "position": [[64, 238], [704, 1374]],
            //     "image": ["Gold", "Silver", "Space Gray"],
            //     "size": [760, 1597]
            // },
            // "iPhone 6s": {
            //     "position": [[120, 300], [870, 1634]],
            //     "image": ["Rose Gold", "Gold", "Silver", "Space Gray"],
            //     "size": [990, 1934]
            // },
            // "iPhone 6s Plus": {
            //     "width": 180,
            //     "position": [[102, 379], [1344, 2587]],
            //     "image": ["Rose Gold", "Gold", "Silver", "Space Gray"],
            //     "size": [1446, 2948]
            // },
            // "iPhone 7": {
            //     "position": [[120, 300], [870, 1634]],
            //     "image": ["Gold", "Jet Black", "Matte Black", "Rose Gold", "Silver"],
            //     "size": [990, 1934]
            // },
            // "iPhone 7 Plus": {
            //     "width": 216,
            //     "position": [[300, 600], [1542, 2808]],
            //     "image": ["Gold", "Jet Black", "Matte Black", "Rose Gold", "Silver"],
            //     "size": [1842, 3408]
            // },
            "iPhone 8": {
                "position": [[100, 280], [850, 1614]],
                "image": ["Gold", "Silver", "Space Grey"],
                "size": [950, 1894]
            },
            "iPhone 8 Plus": {
                "width": 200,
                "position": [[200, 400], [1442, 2608]],
                "image": ["Gold", "Silver", "Space Grey"],
                "size": [1642, 3008]
            },
            "iPhone SE 2": {
                "position": [[150, 300], [900, 1634]],
                "image": ["black", "red", "white"],
                "size": [1050, 1934]
            },
            "iPhone X": {
                "position": [[140, 180], [1265, 2616]],
                "image": ["Silver", "Space Grey"],
                "size": [1405, 2796]
            },
            "iPhone XR": {
                "position": [[110, 110], [938, 1902]],
                "image": ["Red", "Coral", "Blue", "Silver", "Space Grey", "Yellow"],
                "size": [1048, 2025]
            },
            "iPhone XS": {
                "position": [[130, 120], [1255, 2556]],
                "image": ["Gold", "Silver", "Space Grey"],
                "size": [1385, 2676]
            },
            "iPhone XS Max": {
                "width": 180,
                "position": [[140, 138], [1382, 2826]],
                "image": ["Gold", "Silver", "Space Grey"],
                "size": [1522, 2968]
            },
            "iPhone 11": {
                "position": [[100, 100], [928, 1892]],
                "image": ["Green", "Black", "Purple", "Red", "White", "Yellow"],
                "size": [1028, 1992]
            },
            "iPhone 11 Pro": {
                "position": [[130, 130], [1255, 2566]],
                "image": ["Gold", "Midnight Green", "Silver", "Space Grey"],
                "size": [1385, 2696]
            },
            "iPhone 11 Pro Max": {
                "width": 180,
                "position": [[130, 130], [1372, 2818]],
                "image": ["Gold", "Midnight Green", "Silver", "Space Grey"],
                "size": [1502, 2948]
            },
            "iPhone 12": {
                "radius": "10px",
                "width": 180,
                "position": [[180, 180], [1350, 2712]],
                "image": ["blue", "black", "green", "red", "white"],
                "size": [1530, 2892]
            },
            "iPhone 12 Mini": {
                "radius": "10px",
                "width": 165,
                "position": [[160, 160], [1240, 2500]],
                "image": ["blue", "black", "green", "red", "white"],
                "size": [1400, 2660]
            },
            "iPhone 12 Pro": {
                "radius": "10px",
                "width": 180,
                "position": [[180, 180], [1350, 2712]],
                "image": ["pacificblue", "graphite", "gold", "silver"],
                "size": [1530, 2892]
            },
            "iPhone 12 Pro Max": {
                "radius": "10px",
                "width": 200,
                "position": [[200, 200], [1484, 2978]],
                "image": ["pacificblue", "graphite", "gold", "silver"],
                "size": [1684, 3178]
            },
            // "Google Pixel 3": {
            //     "position": [[100, 240], [1180, 2400]],
            //     "image": ["Clearly White", "Just Black", "Not Pink"],
            //     "size": [1280, 2640]
            // },
            // "Google Pixel 3 XL": {
            //     "position": [[150, 150], [1590, 3110]],
            //     "image": ["Clearly White", "Just Black", "Not Pink"],
            //     "size": [1740, 3409]
            // },
            // "Google Pixel 4": {
            //     "position": [[100, 200], [1180, 2480]],
            //     "image": ["Clearly White", "Just Black", "Oh So Orange"],
            //     "size": [1280, 2680]
            // },
            // "Google Pixel 4 XL": {
            //     "position": [[100, 250], [1540, 3290]],
            //     "image": ["Clearly White", "Just Black", "Oh So Orange"],
            //     "size": [1640, 3540]
            // },
            // "Samsung Galaxy Note10": {
            //     "position": [[100, 100], [1180, 2380]],
            //     "image": ["Aura Black", "Aura Glow", "Aura Pink", "Aura Red", "Aura White"],
            //     "size": [1280, 2480]
            // },
            // "Samsung Galaxy Note10+": {
            //     "position": [[100, 100], [1540, 3140]],
            //     "image": ["Aura Black", "Aura Blue", "Aura Glow", "Aura White"],
            //     "size": [1640, 3240]
            // },
            "Samsung Galaxy S7": {
                "position": [[140, 400], [1580, 2960]],
                "image": ["Gold", "Black", "Silver", "White"],
                "size": [1720, 3360]
            },
            "Samsung Galaxy S8": {
                "position": [[100, 320], [1540, 3280]],
                "image": ["Orchid Gray", "Arctic Silver", "Coral Blue", "Maple Gold", "Midnight Black"],
                "size": [1640, 3600]
            },
            "Samsung Galaxy S9": {
                "position": [[100, 240], [1540, 3200]],
                "image": ["Titanium Gray", "Burgundy Red", "Coral Blue", "Lilac Purple", "Midnight Black", "Sunrise Gold"],
                "size": [1640, 3440]
            },
            "Samsung Galaxy S10": {
                "width": 185,
                "radius": "10px",
                "position": [[100, 150], [1540, 3190]],
                "image": ["Prism Black", "Flamingo Pink", "Prism Blue", "Prism Green", "Prism White"],
                "size": [1640, 3340]
            },
            "Samsung Galaxy S20": {
                "width": 200,
                "radius": "10px",
                "position": [[200, 200], [1640, 3400]],
                "image": ["Cloud Blue", "Cloud Pink", "Cosmic Gray"],
                "size": [1840, 3600]
            },
            "Samsung Galaxy S20+": {
                "width": 200,
                "radius": "10px",
                "position": [[200, 200], [1640, 3400]],
                "image": ["Cloud Blue", "Cosmic Black", "Cosmic Gray"],
                "size": [1840, 3600]
            },
            "HTC One M8": {
                "position": [[72, 267], [1152, 2187]],
                "image": ["Black", "Gold", "Silver"],
                "size": [1228, 2513]
            },
            "Microsoft Lumia 950": {
                "position": [[93, 366], [1533, 2926]],
                "image": ["White", "Black"],
                "size": [1642, 3215]
            },
            // "Nexus 6P": {
            //     "position": [[59, 329], [1499, 2889]],
            //     "image": ["Nexus 6P"],
            //     "size": [1566, 3198]
            // },
            "小米 Mix Alpha": {
                "width": 200,
                "position": [[100, 100], [1186, 2350]],
                "image": ["Back", "Front"],
                "size": [1286, 2450]
            },
            // "OnePlus 8": {
            //     "width": 190,
            //     "radius": "10px",
            //     "position": [[19, 32], [391, 850]],
            //     "image": ["OnePlus 8"],
            //     "size": [410, 880]
            // },
            "Nokia 230": {
                "position": [[28, 67], [268, 387]],
                "image": ["White", "Black"],
                "size": [296, 695]
            },
            "Nokia C3-00": {
                "position": [[30, 106], [350, 346]],
                "image": ["Nokia C3-00"],
                "size": [380, 751]
            }
        }
    },
    "Computers": {
        "name": "电脑",
        "width": 300,
        "data": {
            "Macbook": {
                "width": 290,
                "position": [[380, 128], [2684, 1568]],
                "image": ["Gold", "Space-Grey"],
                "size": [3064, 1799]
            },
            "MacBook Air Old": {
                "position": [[280, 122], [1644, 976]],
                "image": ["MacBook Air Old"],
                "size": [1922, 1146]
            },
            "MacBook Air": {
                "position": [[450, 230], [3010, 1830]],
                "image": ["Gold", "Silver", "Grey"],
                "size": [3460, 2060]
            },
            "MacBook Pro": {
                "position": [[500, 300], [3060, 1900]],
                "image": ["Silver", "Space Grey"],
                "size": [3560, 2200]
            },
            "Macbook Pro 16": {
                "width": 340,
                "position": [[500, 300], [3572, 2220]],
                "image": ["Silver", "Space Grey"],
                "size": [4072, 2520]
            },
            "iMac": {
                "position": [[114, 155], [2674, 1595]],
                "image": ["iMac"],
                "size": [2788, 2351]
            },
            "iMac Pro": {
                "position": [[328, 342], [5448, 3234]],
                "image": ["iMac Pro"],
                "size": [5776, 4810]
            },
            "iMac Retina": {
                "position": [[228, 297], [5348, 3177]],
                "image": ["iMac Retina"],
                "size": [5577, 4689]
            },
            "Dell XPS 13": {
                "position": [[317, 86], [3517, 1886]],
                "image": ["Dell XPS 13"],
                "size": [3834, 2256]
            },
            "Dell XPS 15": {
                "position": [[677, 130], [4518, 2291]],
                "image": ["Dell XPS 15"],
                "size": [5194, 2768]
            },
            "Surface Book": {
                "position": [[574, 187], [3574, 2187]],
                "image": ["Surface Book"],
                "size": [4143, 2456]
            }
        }
    },
    "Tablets": {
        "name": "平板",
        "width": 350,
        "data": {
            "iPad Mini": {
                "width": 322,
                "position": [[330, 150], [2378, 1686]],
                "image": ["Gold", "Silver", "Space Grey"],
                "size": [2708, 1836]
            },
            "iPad": {
                "width": 350,
                "position": [[275, 150], [2435, 1770]],
                "image": ["Gold", "Silver", "Space Grey"],
                "size": [2710, 1920]
            },
            "iPad Air": {
                "width": 370,
                "position": [[262, 139], [2486, 1807]],
                "image": ["Gold", "Silver", "Space Grey"],
                "size": [2748, 1946]
            },
            "iPad Air 4": {
                "width": 388,
                "position": [[150, 150], [2510, 1790]],
                "image": ["skyblue", "spacegrey", "green", "rosegold", "silver"],
                "size": [2660, 1940]
            },
            "iPad Pro": {
                "Device without Pencil": {
                    "11": {
                        "width": 400,
                        "position": [[200, 200], [2588, 1868]],
                        "image": ["Silver", "Space Gray"],
                        "size": [2788, 2068]
                    },
                    "13": {
                        "position": [[200, 200], [2588, 1868]],
                        "image": ["Silver", "Space Gray"]
                    }
                },
                "Device with Pencil": {
                    "11": {
                        "position": [[200, 200], [2588, 1868]],
                        "image": ["Silver", "Space Gray"]
                    },
                    "13": {
                        "position": [[200, 200], [2588, 1868]],
                        "image": ["Silver", "Space Gray"]
                    }
                }
            },
            // "Nexus 9": {
            //     "position": [[300, 180], [2348, 1716]],
            //     "image": ["Nexus 9"],
            //     "size": [2648, 1896]
            // },
            "Surface Pro 3": {
                "position": [[200, 200], [2120, 1480]],
                "image": ["Surface Pro 3"],
                "size": [2320, 1680]
            },
            "Surface Pro 4": {
                "position": [[240, 200], [2976, 2024]],
                "image": ["Surface Pro 4"],
                "size": [3216, 2224]
            }
        }
    },
    "Players": {
        "name": "游戏机",
        "width": 420,
        "data": {
            "psp3000": {
                "position": [[363, 104], [1212, 589]],
                "image": ["psp3000"],
                "size": [1580, 736]
            },
            "switch": {
                "position": [[245, 91], [793, 396]],
                "image": ["switch"],
                "size": [1042, 479]
            },
            "gameboy": {
                "width": 220,
                "position": [[198, 175], [504, 416]],
                "image": ["gameboy"],
                "size": [675, 1043]
            },
        }
    },
    "Watches": {
        "name": "穿戴设备",
        "data": {
            "Apple Watch Series 5": {
                "40mm": {
                    "Closed": {
                        "position": [[100, 260], [424, 654]],
                        "image": ["Silver Aluminum + Clementine", "Gold Aluminum + Pink Sand", "Gold Stainless Steel + Stone", "Space Black Stainless Steel + Alaskan Blue", "Space Black Titanium + Pine Green", "Space Grey Aluminum + Black", "Stainless Steel + Lemon Cream", "Titanium + Red", "White Ceramic + White"],
                        "size": [524, 914]
                    },
                    "Open": {
                        "position": [[100, 1700], [424, 2094]],
                        "image": ["Silver Aluminum + Clementine", "Gold Aluminum + Pink Sand", "Gold Stainless Steel + Stone", "Space Black Stainless Steel + Alaskan Blue", "Space Black Titanium + Pine Green", "Space Grey Aluminum + Black", "Stainless Steel + Lemon Cream", "Titanium + Red", "White Ceramic + White"]
                    }
                },
                "44mm": {
                    "Closed": {
                        "position": [[100, 260], [468, 708]],
                        "image": ["Silver Aluminum + Clementine", "Gold Aluminum + Pink Sand", "Gold Stainless Steel + Stone", "Space Black Stainless Steel + Alaskan Blue", "Space Black Titanium + Pine Green", "Space Grey Aluminum + Black", "Stainless Steel + Lemon Cream", "Titanium + Red", "White Ceramic + White"]
                    },
                    "Open": {
                        "position": [[100, 1700], [468, 2148]],
                        "image": ["Silver Aluminum + Clementine", "Gold Aluminum + Pink Sand", "Gold Stainless Steel + Stone", "Space Black Stainless Steel + Alaskan Blue", "Space Black Titanium + Pine Green", "Space Grey Aluminum + Black", "Stainless Steel + Lemon Cream", "Titanium + Red", "White Ceramic + White"]
                    }
                }
            },
            "Motorola Moto 360": {
                "Closed": {
                    "radius": "50%",
                    "position": [[44, 139], [404, 499]],
                    "image": ["Men Black + Cognac", "Men Black + Black", "Men Silver + Black"],
                    "size": [448, 640]
                },
                "Open": {
                    "position": [[44, 851], [404, 1211]],
                    "image": ["Men Black + Cognac", "Men Black + Black", "Men Silver + Black"]
                }
            }
        }
    }
};

export { list }