// --- Data ---
const categories = [
    {
        "id": "home",
        "label": "HOME",
        "icon": "ri-home-4-line"
    },
    {
        "id": "automobiles",
        "label": "AUTOMOBILES",
        "icon": "ri-motorbike-line"
    },
    {
        "id": "watches",
        "label": "WATCHES",
        "icon": "ri-time-line"
    },
    {
        "id": "electronics",
        "label": "ELECTRONICS",
        "icon": "ri-computer-line"
    },
    {
        "id": "home-appliances",
        "label": "HOME APPLIANCES",
        "icon": "ri-fridge-line"
    },
    {
        "id": "bags-and-footwear",
        "label": "BAGS AND FOOTWEAR",
        "icon": "ri-shopping-bag-line"
    },
    {
        "id": "home-decor",
        "label": "HOME DECOR",
        "icon": "ri-home-heart-line"
    },
    {
        "id": "fitness",
        "label": "FITNESS",
        "icon": "ri-heart-pulse-line"
    },
    {
        "id": "sports",
        "label": "SPORTS",
        "icon": "ri-football-line"
    },
    {
        "id": "kids-and-toddlers",
        "label": "KIDS AND TODDLERS",
        "icon": "ri-bear-smile-line"
    },
    {
        "id": "pet-supplies",
        "label": "PET SUPPLIES",
        "icon": "ri-baidu-line"
    },
    {
        "id": "men",
        "label": "MEN",
        "icon": "ri-men-line"
    },
    {
        "id": "women",
        "label": "WOMEN",
        "icon": "ri-women-line"
    },
    {
        "id": "musical-instrument",
        "label": "MUSICAL INSTRUMENT",
        "icon": "ri-music-2-line"
    }
];

const subcategories = {
    "automobiles": [
        {
            "name": "bikes",
            "img": "Images/bike.png",
            "topRatedUrl": "https://www.harley-davidson.com/top-rated",
            "sponsoredUrl": "https://www.harley-davidson.com/sponsored",
            "items": [
                "gear",
                "non gear",
                "Sports bike",
                "Adventure Bike",
                "Naked Bike",
                "Cruiser"
            ]
        },
        {
            "name": "cars",
            "img": "Images/car1.png",
            "topRatedUrl": "https://www.tesla.com/models",
            "sponsoredUrl": "https://www.tesla.com/inventory",
            "items": [
                "SUV",
                "sedan",
                "Hatch back",
                "sports edition",
                "Coupe"
            ]
        },
        {
            "name": "Ev",
            "img": "Images/ev1.png",
            "topRatedUrl": "https://www.lucidmotors.com/air",
            "sponsoredUrl": "https://www.lucidmotors.com/reserve",
            "items": [
                "cars",
                "bikes",
                "bi cycle"
            ]
        },
        {
            "name": "bike accessories",
            "img": "Images/bikeacc.png",
            "topRatedUrl": "https://www.revzilla.com/best-sellers",
            "sponsoredUrl": "https://www.revzilla.com/sale",
            "items": [
                "riding gears",
                "fog lights",
                "cleaning kit",
                "Crash Guard"
            ]
        },
        {
            "name": "car accessories",
            "img": "Images/caracc.png",
            "topRatedUrl": "https://www.weathertech.com/top-products",
            "sponsoredUrl": "https://www.weathertech.com/specials",
            "items": [
                "audio system",
                "cleaning kit",
                "air freshner"
            ]
        },
        {
            "name": "Bicycle",
            "img": "Images/bicycle.png",
            "topRatedUrl": "#",
            "sponsoredUrl": "#",
            "items": [
                "gear",
                "non gear"
            ]
        },
        {
            "name": "Helmets",
            "img": "Images/helmets.png",
            "topRatedUrl": "#",
            "sponsoredUrl": "#",
            "items": [
                "full face",
                "half face",
                "bi cycle helmets"
            ]
        }
    ],
    "watches": [
        {
            "name": "Smart watch",
            "img": "Images/smartw.png",
            "topRatedUrl": "https://www.apple.com/watch/ultra",
            "sponsoredUrl": "https://www.apple.com/watch/series-9",
            "items": []
        },
        {
            "name": "Analog watch",
            "img": "Images/analogw.png",
            "topRatedUrl": "https://www.rolex.com/watches/submariner",
            "sponsoredUrl": "https://www.rolex.com/watches/new-watches",
            "items": []
        },
        {
            "name": "Digital watch",
            "img": "Images/digitalw.png",
            "topRatedUrl": "https://www.casio.com/g-shock",
            "sponsoredUrl": "https://www.casio.com/pro-trek",
            "items": []
        },
        {
            "name": "Digi log Watch",
            "img": "Images/digilogw.png",
            "topRatedUrl": "https://www.tagheuer.com/carrera",
            "sponsoredUrl": "https://www.tagheuer.com/monaco",
            "items": []
        },
        {
            "name": "Vintage Series",
            "img": "Images/vintagew.png",
            "topRatedUrl": "https://www.patek.com/en/collection/grand-complications",
            "sponsoredUrl": "https://www.patek.com/en/collection/nautilus",
            "items": []
        },
        {
            "name": "womens watch",
            "img": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80",
            "topRatedUrl": "#",
            "sponsoredUrl": "#",
            "items": []
        }
    ],
    "electronics": [
        {
            "name": "Television",
            "img": "Images/tv.png",
            "topRatedUrl": "https://www.sony.com/electronics/tv",
            "sponsoredUrl": "https://www.sony.com/electronics/bravia",
            "items": [
                "cars",
                "bikes",
                "bi cycle"
            ]
        },
        {
            "name": "Mobile",
            "img": "Images/phone.png",
            "topRatedUrl": "https://www.samsung.com/galaxy-s24",
            "sponsoredUrl": "https://www.samsung.com/galaxy-z-fold5",
            "items": [
                "Smart phone",
                "tablets",
                "fold phone",
                "keypad phone",
                "Flip phone"
            ]
        },
        {
            "name": "Laptop",
            "img": "Images/laptop.png",
            "topRatedUrl": "https://www.apple.com/macbook-pro",
            "sponsoredUrl": "https://www.apple.com/macbook-air",
            "items": [
                "Gaming",
                "Business",
                "touch"
            ]
        },
        {
            "name": "Accessories",
            "img": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80",
            "topRatedUrl": "#",
            "sponsoredUrl": "#",
            "items": [
                "belts",
                "sunglasses",
                "socks",
                "hair product kit",
                "makeup kit"
            ]
        },
        {
            "name": "Camera",
            "img": "Images/camera1.png",
            "topRatedUrl": "https://www.canon.com/eos-r5",
            "sponsoredUrl": "https://www.canon.com/eos-r6",
            "items": [
                "Action Camera",
                "DSLR",
                "Polaroid Camera",
                "Stabilizer"
            ]
        },
        {
            "name": "Headphones",
            "img": "Images/headphones.png",
            "topRatedUrl": "#",
            "sponsoredUrl": "#",
            "items": []
        },
        {
            "name": "PC",
            "img": "Images/pc.png",
            "topRatedUrl": "#",
            "sponsoredUrl": "#",
            "items": [
                "Graphics Gard",
                "SSD",
                "PSU",
                "Motherboard",
                "Cabinet",
                "RAM",
                "Processor",
                "Cooler",
                "Monitor"
            ]
        },
        {
            "name": "Printer",
            "img": "Images/printer.png",
            "topRatedUrl": "#",
            "sponsoredUrl": "#",
            "items": [
                "Laser Pinter",
                "Ink-Jet Printer"
            ]
        },
        {
            "name": "Router",
            "img": "Images/router.png",
            "topRatedUrl": "#",
            "sponsoredUrl": "#",
            "items": []
        },
        {
            "name": "Projectors",
            "img": "Images/projectors.png",
            "topRatedUrl": "#",
            "sponsoredUrl": "#",
            "items": [
                "Laser Projector",
                "LCD Projector"
            ]
        },
        {
            "name": "Drone",
            "img": "Images/drone.png",
            "topRatedUrl": "#",
            "sponsoredUrl": "#",
            "items": [
                "FPV Drone",
                "GPS/Camera Drone"
            ]
        }
    ],
    "home-appliances": [
        {
            "name": "Refrigerator",
            "img": "Images/fridge.png",
            "topRatedUrl": "https://www.lg.com/refrigerators",
            "sponsoredUrl": "https://www.lg.com/instaview",
            "items": [
                "side by side",
                "double door",
                "Smart"
            ]
        },
        {
            "name": "Washing Machine",
            "img": "Images/washingmachine.png",
            "topRatedUrl": "https://www.whirlpool.com/washers",
            "sponsoredUrl": "https://www.whirlpool.com/dryers",
            "items": [
                "top load",
                "front load"
            ]
        },
        {
            "name": "Air fryer",
            "img": "Images/airfryer.png",
            "topRatedUrl": "#",
            "sponsoredUrl": "#",
            "items": []
        },
        {
            "name": "Air conditioner",
            "img": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80",
            "topRatedUrl": "#",
            "sponsoredUrl": "#",
            "items": [
                "Central AC",
                "Window AC",
                "Split AC"
            ]
        },
        {
            "name": "Dish washer",
            "img": "Images/dishwasher.png",
            "topRatedUrl": "#",
            "sponsoredUrl": "#",
            "items": []
        },
        {
            "name": "Kitchen supplies",
            "img": "Images/kitchensupplies.png",
            "topRatedUrl": "#",
            "sponsoredUrl": "#",
            "items": [
                "China Cabinet",
                "China set"
            ]
        },
        {
            "name": "Air purifier",
            "img": "Images/airpurifier.png",
            "topRatedUrl": "https://www.dyson.com/air-purifiers",
            "sponsoredUrl": "https://www.dyson.com/vacuum-cleaners",
            "items": []
        },
        {
            "name": "water purifier",
            "img": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80",
            "topRatedUrl": "#",
            "sponsoredUrl": "#",
            "items": []
        },
        {
            "name": "iron box",
            "img": "Images/iron-box.png",
            "topRatedUrl": "#",
            "sponsoredUrl": "#",
            "items": []
        }
    ],
    "bags-and-footwear": [
        {
            "name": "womens footwear",
            "img": "Images/womens-footwear.png",
            "topRatedUrl": "#",
            "sponsoredUrl": "#",
            "items": [
                "casual shoes",
                "flat sandals",
                "heals",
                "formal",
                "cut shoes",
                "formal shoes",
                "sports shoes"
            ]
        },
        {
            "name": "Kids footwear",
            "img": "Images/kids-footwear.png",
            "topRatedUrl": "#",
            "sponsoredUrl": "#",
            "items": [
                "boys shoes",
                "girls shoes",
                "sandals",
                "flipflops",
                "casual shoes"
            ]
        },
        {
            "name": "Mens footwear",
            "img": "Images/mens-footwear.png",
            "topRatedUrl": "#",
            "sponsoredUrl": "#",
            "items": [
                "casual shoes",
                "formal shoes",
                "sports shoes",
                "boots",
                "loafers",
                "slippers"
            ]
        },
        {
            "name": "Womens bag",
            "img": "Images/womens-bag.png",
            "topRatedUrl": "#",
            "sponsoredUrl": "#",
            "items": [
                "backpack",
                "handbag",
                "slingbag",
                "clutches",
                "wallets",
                "Tote Bag"
            ]
        },
        {
            "name": "Mens bags",
            "img": "Images/mens-bags.png",
            "topRatedUrl": "#",
            "sponsoredUrl": "#",
            "items": [
                "backpack",
                "crossbody bag",
                "laptop bag"
            ]
        },
        {
            "name": "Travel bags",
            "img": "Images/travel-bags.png",
            "topRatedUrl": "#",
            "sponsoredUrl": "#",
            "items": [
                "backpacks",
                "trollies"
            ]
        }
    ],
    "home-decor": [
        {
            "name": "Wood Furniture",
            "img": "Images/woodfurniture.png",
            "topRatedUrl": "#",
            "sponsoredUrl": "#",
            "items": []
        },
        {
            "name": "kitchen storage",
            "img": "Images/kitchenstorage.png",
            "topRatedUrl": "#",
            "sponsoredUrl": "#",
            "items": [
                "China Cabinet",
                "China set"
            ]
        },
        {
            "name": "home textile",
            "img": "Images/hometextile.png",
            "topRatedUrl": "#",
            "sponsoredUrl": "#",
            "items": []
        },
        {
            "name": "Bedroom accessories",
            "img": "Images/bedroom.png",
            "topRatedUrl": "https://www.potterybarn.com/bedroom",
            "sponsoredUrl": "https://www.potterybarn.com/lighting",
            "items": [
                "bed",
                "mattress",
                "wardrobe",
                "standing mirror",
                "Dressing table"
            ]
        }
    ],
    "fitness": [
        {
            "name": "Treadmill",
            "img": "Images/treadmill.png",
            "topRatedUrl": "https://www.onepeloton.com/tread",
            "sponsoredUrl": "https://www.onepeloton.com/bike",
            "items": []
        },
        {
            "name": "FItness bikes",
            "img": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80",
            "topRatedUrl": "#",
            "sponsoredUrl": "#",
            "items": [
                "gear",
                "non gear",
                "Sports bike",
                "Adventure Bike",
                "Naked Bike",
                "Cruiser"
            ]
        },
        {
            "name": "Walking pods",
            "img": "Images/walkingpad.png",
            "topRatedUrl": "https://www.walkingpad.com/r1-pro",
            "sponsoredUrl": "https://www.walkingpad.com/a1-pro",
            "items": []
        },
        {
            "name": "Home gym",
            "img": "Images/homegym.png",
            "topRatedUrl": "https://www.bowflex.com/home-gyms",
            "sponsoredUrl": "https://www.bowflex.com/selecttech",
            "items": []
        },
        {
            "name": "Gym accessoires",
            "img": "Images/gymaccessoires.png",
            "topRatedUrl": "#",
            "sponsoredUrl": "#",
            "items": []
        }
    ],
    "sports": [
        {
            "name": "Cricket",
            "img": "Images/cricket.png",
            "topRatedUrl": "https://www.adidas.com/cricket-bats",
            "sponsoredUrl": "https://www.adidas.com/cricket-shoes",
            "items": [
                "kit bag",
                "bat",
                "ball",
                "cricket boots"
            ]
        },
        {
            "name": "Football",
            "img": "Images/football.png",
            "topRatedUrl": "https://www.nike.com/football-boots",
            "sponsoredUrl": "https://www.nike.com/football-jerseys",
            "items": [
                "boots",
                "gloves",
                "kit"
            ]
        },
        {
            "name": "Badmiton",
            "img": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80",
            "topRatedUrl": "#",
            "sponsoredUrl": "#",
            "items": [
                "racket",
                "shoes",
                "cork"
            ]
        },
        {
            "name": "Swimming",
            "img": "Images/swimming.png",
            "topRatedUrl": "https://www.speedo.com/swimwear",
            "sponsoredUrl": "https://www.speedo.com/goggles",
            "items": [
                "swim dress men",
                "swim dress women",
                "goggles",
                "cap",
                "safety tube"
            ]
        },
        {
            "name": "Table games",
            "img": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80",
            "topRatedUrl": "#",
            "sponsoredUrl": "#",
            "items": [
                "table tennis",
                "snooker table",
                "air hockey",
                "all in one"
            ]
        },
        {
            "name": "Boxing",
            "img": "Images/boxing.png",
            "topRatedUrl": "https://www.everlast.com/gloves",
            "sponsoredUrl": "https://www.everlast.com/heavy-bags",
            "items": [
                "gloves",
                "punching bag",
                "guard kit"
            ]
        },
        {
            "name": "Archery",
            "img": "Images/archery.png",
            "topRatedUrl": "#",
            "sponsoredUrl": "#",
            "items": [
                "Recurve Bow",
                "Compound Bow",
                "Arrows",
                "Sight",
                "Stabilizer",
                "Scope"
            ]
        },
        {
            "name": "Skating",
            "img": "Images/skating.png",
            "topRatedUrl": "#",
            "sponsoredUrl": "#",
            "items": [
                "guard kit",
                "Helmet",
                "shoes"
            ]
        }
    ],
    "kids-and-toddlers": [
        {
            "name": "girls clothing",
            "img": "Images/girls-clothing.png",
            "topRatedUrl": "#",
            "sponsoredUrl": "#",
            "items": [
                "frock",
                "dress set",
                "t shirt",
                "shorts",
                "cap",
                "sunglasses",
                "jeans",
                "shirt",
                "jeans",
                "sweater",
                "night wear",
                "kurta set"
            ]
        },
        {
            "name": "Boys clothing",
            "img": "Images/boys-clothing.png",
            "topRatedUrl": "#",
            "sponsoredUrl": "#",
            "items": [
                "co ords",
                "t shrit",
                "shorts",
                "cap",
                "sunglasses",
                "jeans",
                "shirt",
                "sweater",
                "night wear",
                "blazers"
            ]
        },
        {
            "name": "kids accessories",
            "img": "Images/kidsaccessories.png",
            "topRatedUrl": "#",
            "sponsoredUrl": "#",
            "items": [
                "belts",
                "sunglasses",
                "socks",
                "hair product kit",
                "makeup kit"
            ]
        },
        {
            "name": "infants",
            "img": "Images/infants.png",
            "topRatedUrl": "#",
            "sponsoredUrl": "#",
            "items": [
                "Body suits",
                "clothing set",
                "t shirt",
                "bottom wear"
            ]
        }
    ],
    "pet-supplies": [
        {
            "name": "dog",
            "img": "Images/dog.png",
            "topRatedUrl": "#",
            "sponsoredUrl": "#",
            "items": [
                "dog food",
                "dog bed",
                "dog shampoo"
            ]
        },
        {
            "name": "Cat",
            "img": "Images/cat.png",
            "topRatedUrl": "#",
            "sponsoredUrl": "#",
            "items": [
                "cat food",
                "litter sand",
                "cat bed"
            ]
        },
        {
            "name": "aquarium",
            "img": "Images/aquarium.png",
            "topRatedUrl": "#",
            "sponsoredUrl": "#",
            "items": []
        }
    ],
    "men": [
        {
            "name": "top Wear",
            "img": "https://images.unsplash.com/photo-1550246140-5119ae4790b8?w=400&q=80",
            "topRatedUrl": "https://www.ralphlauren.com/men-clothing-shirts",
            "sponsoredUrl": "https://www.ralphlauren.com/men-clothing-polo-shirts",
            "items": [
                "tops",
                "t shirt",
                "shirt",
                "co ords",
                "blazers",
                "tunics"
            ]
        },
        {
            "name": "Bottom wear",
            "img": "https://images.unsplash.com/photo-1504198458649-3128b932f49e?w=400&q=80",
            "topRatedUrl": "https://www.levi.com/men/jeans",
            "sponsoredUrl": "https://www.levi.com/men/pants",
            "items": [
                "formal pants",
                "regular jeans",
                "baggy jeans",
                "cargos",
                "chinos"
            ]
        },
        {
            "name": "Inner wear",
            "img": "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&q=80",
            "topRatedUrl": "https://www.calvinklein.us/men/underwear",
            "sponsoredUrl": "https://www.calvinklein.us/men/new-arrivals",
            "items": [
                "panties",
                "bras",
                "shorts"
            ]
        },
        {
            "name": "ethnic wear",
            "img": "https://images.unsplash.com/photo-1507679799987-9755eb1e1c17?w=400&q=80",
            "topRatedUrl": "https://www.manyavar.com/men/kurta-pajama",
            "sponsoredUrl": "https://www.manyavar.com/men/sherwani",
            "items": [
                "silk sarees",
                "cotton sarees",
                "kurta set",
                "lehangas",
                "half sarees",
                "dupattas"
            ]
        },
        {
            "name": "Sports wear",
            "img": "https://images.unsplash.com/photo-1518459031867-a89b944bffe4?w=400&q=80",
            "topRatedUrl": "https://www.adidas.com/men-training",
            "sponsoredUrl": "https://www.adidas.com/men-running",
            "items": [
                "t shirt",
                "tracks",
                "sports bra",
                "shoes"
            ]
        },
        {
            "name": "Winter wear",
            "img": "https://images.unsplash.com/photo-1591559489278-654cb2960f25?w=400&q=80",
            "topRatedUrl": "https://www.thenorthface.com/men-jackets",
            "sponsoredUrl": "https://www.thenorthface.com/men-accessories",
            "items": [
                "jackets",
                "sweatshirts",
                "hoodies",
                "sweaters",
                "coats"
            ]
        },
        {
            "name": "Accessories",
            "img": "Images/accessories.png",
            "topRatedUrl": "#",
            "sponsoredUrl": "#",
            "items": [
                "belts",
                "sunglasses",
                "socks",
                "hair product kit",
                "makeup kit"
            ]
        }
    ],
    "women": [
        {
            "name": "Top wear",
            "img": "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&q=80",
            "topRatedUrl": "https://www.zara.com/women-tops",
            "sponsoredUrl": "https://www.zara.com/women-new-arrivals",
            "items": [
                "tops",
                "t shirt",
                "shirt",
                "co ords",
                "blazers",
                "tunics"
            ]
        },
        {
            "name": "bottom",
            "img": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80",
            "topRatedUrl": "#",
            "sponsoredUrl": "#",
            "items": [
                "jeans",
                "trousers",
                "pallazo",
                "leggings",
                "shirts"
            ]
        },
        {
            "name": "inner wear",
            "img": "https://images.unsplash.com/photo-1574312290483-e18985c54d3e?w=400&q=80",
            "topRatedUrl": "https://www.victoriassecret.com/bras",
            "sponsoredUrl": "https://www.victoriassecret.com/panties",
            "items": [
                "panties",
                "bras",
                "shorts"
            ]
        },
        {
            "name": "ethnic wear",
            "img": "https://images.unsplash.com/photo-1627885744838-898075677d33?w=400&q=80",
            "topRatedUrl": "https://www.fabindia.com/women-ethnic",
            "sponsoredUrl": "https://www.fabindia.com/women-fusion",
            "items": [
                "silk sarees",
                "cotton sarees",
                "kurta set",
                "lehangas",
                "half sarees",
                "dupattas"
            ]
        },
        {
            "name": "sports wear",
            "img": "https://images.unsplash.com/photo-1493655161922-ef98929de9d8?w=400&q=80",
            "topRatedUrl": "https://www.lululemon.com/women-yoga",
            "sponsoredUrl": "https://www.lululemon.com/women-running",
            "items": [
                "t shirt",
                "tracks",
                "sports bra",
                "shoes"
            ]
        },
        {
            "name": "accessories",
            "img": "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?w=400&q=80",
            "topRatedUrl": "https://www.chanel.com/bags",
            "sponsoredUrl": "https://www.chanel.com/jewelry",
            "items": [
                "belts",
                "sunglasses",
                "socks",
                "hair product kit",
                "makeup kit"
            ]
        }
    ],
    "musical-instrument": [
        {
            "name": "keyboard",
            "img": "Images/keyboard.png",
            "topRatedUrl": "#",
            "sponsoredUrl": "#",
            "items": []
        },
        {
            "name": "drums set",
            "img": "Images/drumsset.png",
            "topRatedUrl": "#",
            "sponsoredUrl": "#",
            "items": []
        },
        {
            "name": "Guitar",
            "img": "Images/guitar.png",
            "topRatedUrl": "#",
            "sponsoredUrl": "#",
            "items": [
                "Acoustic",
                "Classical",
                "Semi-Acoustic",
                "Electric"
            ]
        },
        {
            "name": "violin",
            "img": "Images/violin.png",
            "topRatedUrl": "#",
            "sponsoredUrl": "#",
            "items": []
        },
        {
            "name": "piano",
            "img": "Images/piano.png",
            "topRatedUrl": "#",
            "sponsoredUrl": "#",
            "items": []
        },
        {
            "name": "karaoke",
            "img": "Images/karaoke.png",
            "topRatedUrl": "#",
            "sponsoredUrl": "#",
            "items": []
        },
        {
            "name": "DJ disc",
            "img": "Images/djdisc.png",
            "topRatedUrl": "#",
            "sponsoredUrl": "#",
            "items": []
        }
    ],
    "bags-footwear": [
        {
            "name": "Womens Footwear",
            "img": "Images/womensfootwear.png",
            "topRatedUrl": "https://www.gucci.com/women-shoes",
            "sponsoredUrl": "https://www.gucci.com/new-collection",
            "items": [
                "casual shoes",
                "flat sandals",
                "heals",
                "formal",
                "cut shoes",
                "formal shoes",
                "sports shoes"
            ]
        },
        {
            "name": "Mens Footwear",
            "img": "Images/mensfootwear.png",
            "topRatedUrl": "https://www.nike.com/jordan",
            "sponsoredUrl": "https://www.nike.com/running",
            "items": [
                "casual shoes",
                "formal shoes",
                "sports shoes",
                "boots",
                "loafers",
                "slippers"
            ]
        },
        {
            "name": "Kids Footwear",
            "img": "Images/kidsfootwear.png",
            "topRatedUrl": "https://www.adidas.com/kids-shoes",
            "sponsoredUrl": "https://www.adidas.com/originals",
            "items": [
                "boys shoes",
                "girls shoes",
                "sandals",
                "flipflops",
                "casual shoes"
            ]
        },
        {
            "name": "Womens bag",
            "img": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80",
            "topRatedUrl": "#",
            "sponsoredUrl": "#",
            "items": [
                "backpack",
                "handbag",
                "slingbag",
                "clutches",
                "wallets"
            ]
        },
        {
            "name": "mens bags",
            "img": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80",
            "topRatedUrl": "#",
            "sponsoredUrl": "#",
            "items": [
                "backpack",
                "crossbody bag",
                "laptop bag"
            ]
        },
        {
            "name": "Travel Bags",
            "img": "Images/travelbag.png",
            "topRatedUrl": "https://www.samsonite.com/luggage",
            "sponsoredUrl": "https://www.samsonite.com/backpacks",
            "items": [
                "backpacks",
                "trollies"
            ]
        }
    ],
    "kids-toddlers": [
        {
            "name": "Girls Clothing",
            "img": "https://images.unsplash.com/photo-1621452773781-0f992fd1f5cb?w=400&q=80",
            "topRatedUrl": "https://www.carters.com/baby-girl",
            "sponsoredUrl": "https://www.carters.com/toddler-girl",
            "items": [
                "frock",
                "dress set",
                "t shirt",
                "shorts"
            ]
        },
        {
            "name": "Boys Clothing",
            "img": "https://images.unsplash.com/photo-1519457431-44ccd64a579b?w=400&q=80",
            "topRatedUrl": "https://www.gap.com/boys",
            "sponsoredUrl": "https://www.gap.com/toddler-boys",
            "items": [
                "dress set",
                "t shrit",
                "shorts"
            ]
        },
        {
            "name": "kids footwear",
            "img": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80",
            "topRatedUrl": "#",
            "sponsoredUrl": "#",
            "items": [
                "boys shoes",
                "girls shoes",
                "sandals",
                "flipflops",
                "casual shoes"
            ]
        }
    ]
};

// --- References ---
const navList = document.getElementById('categoryNav');
const contentArea = document.getElementById('contentArea');
const themeToggle = document.getElementById('themeToggle');
const toggleIcon = themeToggle ? themeToggle.querySelector('i') : null;
const searchInput = document.getElementById('searchInput');
const menuButton = document.getElementById('menuButton');
const megaMenu = document.getElementById('megaMenu');
const mobileSidebar = document.getElementById('mobileSidebar');
const overlay = document.getElementById('overlay');
const sidebarContent = document.getElementById('sidebarContent');

let currentCatId = null;
let currentAgeRange = 'All';
let currentAudience = 'All';

// Age Group Definitions
const ageGroups = [
    { label: 'All Ages', value: 'All' },
    { label: 'Age 18-34', value: '18-34' },
    { label: 'Age 35-60', value: '35-60' },
    { label: 'Age 60+', value: '60+' }
];

// Audience Group Definitions
const audienceGroups = [
    { label: 'All', value: 'All' },
    { label: 'Kids', value: 'Kids' },
    { label: 'Mens', value: 'Mens' },
    { label: 'Womens', value: 'Womens' }
];

// --- Initialization ---
initTheme();
renderNav();
renderSidebarMenu(); // New

// --- Routing ---
const path = window.location.pathname;
const isProductPage = path.indexOf('product.html') !== -1;
const isHomePage = path.endsWith('home.html') || path === '/' || path.endsWith('/') || path.indexOf('home.html') !== -1;

const urlParams = new URLSearchParams(window.location.search);
const urlCat = urlParams.get('cat');
const savedCat = sessionStorage.getItem('activeCategory');
const savedSearch = sessionStorage.getItem('searchQuery');

if (savedSearch && searchInput) {
    searchInput.value = savedSearch;
}

if (isProductPage) {
    renderProductPage();
} else if (isHomePage) {
    sessionStorage.removeItem('activeCategory');
    renderHome();
} else {
    // index.html or other
    if (urlCat) {
        currentCatId = urlCat;
        sessionStorage.setItem('activeCategory', urlCat);
        const urlSub = urlParams.get('sub');
        if (urlSub) {
            showProducts(urlSub, urlCat);
        } else {
            renderSubcategories(urlCat);
        }
        updateActiveNav(urlCat);
    } else if (savedCat) {
        currentCatId = savedCat;
        renderSubcategories(savedCat);
        updateActiveNav(savedCat);
    } else if (path.endsWith('index.html') || path.endsWith('/') || path === '') {
        renderHome();
    }
}

// --- Dynamic Layout Logic ---
function updateMenuPosition() {
    const header = document.querySelector('.app-header');
    const megaMenu = document.getElementById('megaMenu');
    if (header && megaMenu) {
        const height = header.offsetHeight;
        megaMenu.style.top = `${height}px`;
        megaMenu.style.height = `calc(100vh - ${height}px)`;
        megaMenu.style.maxHeight = `calc(100vh - ${height}px)`;
    }
}

window.addEventListener('resize', updateMenuPosition);
window.addEventListener('scroll', updateMenuPosition);

// --- Mobile Menu Logic ---
if (menuButton) {
    menuButton.addEventListener('click', () => {
        mobileSidebar.classList.add('active');
        overlay.classList.add('active');
        megaMenu.classList.remove('active');
    });
}

function closeSidebar() {
    if (mobileSidebar) mobileSidebar.classList.remove('active');
    overlay.classList.remove('active');
}

overlay.addEventListener('click', () => {
    closeMegaMenu();
    closeSidebar();
    overlay.classList.remove('active');
});

function closeMegaMenu() {
    if (megaMenu) megaMenu.classList.remove('active');
    if (!mobileSidebar.classList.contains('active')) {
        overlay.classList.remove('active');
        if (window.location.pathname.endsWith('index.html') && currentCatId) {
            updateActiveNav(currentCatId);
        } else if (window.location.pathname.endsWith('home.html') || window.location.pathname === '/') {
            updateActiveNav('home');
        } else {
            navList.querySelectorAll('.nav-item').forEach(x => x.classList.remove('active'));
        }
    }
}

// Sidebar Rendering
function renderSidebarMenu() {
    if (!sidebarContent) return;
    sidebarContent.innerHTML = categories.map(cat => {
        const subs = subcategories[cat.id] || [];
        const hasSubs = subs.length > 0;

        return `
            <div class="sidebar-cat-group">
                <div class="sidebar-item" onclick="${hasSubs ? 'toggleSidebarGroup(this)' : `handleSidebarClick('${cat.id}')`}">
                    <i class="${cat.icon}"></i>
                    <span>${cat.label}</span>
                    ${hasSubs ? '<i class="ri-arrow-down-s-line" style="margin-left: auto; opacity: 0.5;"></i>' : ''}
                </div>
                ${hasSubs ? `
                <div class="sidebar-sub-list" style="display: none; padding-left: 20px; background: rgba(0,0,0,0.1); border-radius: 8px; margin: 0 10px;">
                    ${subs.map(sub => `
                        <div class="sidebar-sub-item">
                            <div class="sidebar-item" onclick="handleSidebarSubClick('${sub.name.replace(/'/g, "\\'")}', '${cat.id}')" style="padding: 10px 15px; font-size: 0.95rem;">
                                <span>${sub.name}</span>
                                ${sub.items && sub.items.length > 0 ? `<i class="ri-arrow-down-s-line" style="margin-left: auto; font-size: 0.8rem; opacity: 0.5;"></i>` : ''}
                            </div>
                            ${sub.items && sub.items.length > 0 ? `
                                <div class="sidebar-nested-list" style="display: none; padding-left: 15px; border-left: 1px solid var(--accent); margin-left: 15px;">
                                    ${sub.items.map(item => `
                                        <div class="sidebar-item" onclick="handleMegaSubClick('${item.replace(/'/g, "\\'")}', '${cat.id}')" style="padding: 8px 15px; font-size: 0.85rem; opacity: 0.7;">
                                            ${item}
                                        </div>
                                    `).join('')}
                                </div>
                            ` : ''}
                        </div>
                    `).join('')}
                </div>
                ` : ''}
            </div>
        `;
    }).join('');
}

function toggleSidebarGroup(el) {
    const nextList = el.nextElementSibling;
    const icon = el.querySelector('.ri-arrow-down-s-line') || el.querySelector('.ri-arrow-up-s-line');
    const isOpening = nextList.style.display === 'none';

    document.querySelectorAll('.sidebar-sub-list').forEach(list => {
        if (list !== nextList) {
            list.style.display = 'none';
            const otherBtn = list.previousElementSibling;
            if (otherBtn) {
                const otherIcon = otherBtn.querySelector('.ri-arrow-up-s-line');
                if (otherIcon) otherIcon.classList.replace('ri-arrow-up-s-line', 'ri-arrow-down-s-line');
            }
        }
    });

    if (isOpening) {
        nextList.style.display = 'block';
        if (icon) icon.classList.replace('ri-arrow-down-s-line', 'ri-arrow-up-s-line');
    } else {
        nextList.style.display = 'none';
        if (icon) icon.classList.replace('ri-arrow-up-s-line', 'ri-arrow-down-s-line');
    }
}

function handleSidebarSubClick(name, catId) {
    const event = window.event;
    if (!event) return;
    const target = event.currentTarget;
    const nested = target.nextElementSibling;

    if (nested && nested.classList.contains('sidebar-nested-list')) {
        const icon = target.querySelector('.ri-arrow-down-s-line') || target.querySelector('.ri-arrow-up-s-line');
        const isOpening = nested.style.display === 'none';

        const parentList = target.closest('.sidebar-sub-list');
        if (parentList) {
            parentList.querySelectorAll('.sidebar-nested-list').forEach(list => {
                if (list !== nested) {
                    list.style.display = 'none';
                    const otherBtn = list.previousElementSibling;
                    if (otherBtn) {
                        const otherIcon = otherBtn.querySelector('.ri-arrow-up-s-line');
                        if (otherIcon) otherIcon.classList.replace('ri-arrow-up-s-line', 'ri-arrow-down-s-line');
                    }
                }
            });
        }

        if (isOpening) {
            nested.style.display = 'block';
            if (icon) icon.classList.replace('ri-arrow-down-s-line', 'ri-arrow-up-s-line');
        } else {
            nested.style.display = 'none';
            if (icon) icon.classList.replace('ri-arrow-up-s-line', 'ri-arrow-down-s-line');
        }
    } else {
        handleMegaSubClick(name, catId);
    }
}

function handleSidebarClick(catId) {
    closeSidebar();
    const cat = categories.find(c => c.id === catId);
    if (!cat) return;

    if (catId === 'home') {
        window.location.href = 'home.html';
    } else if (!window.location.pathname.endsWith('index.html')) {
        window.location.href = `index.html?cat=${catId}`;
    } else {
        currentCatId = catId;
        renderSubcategories(catId);
        updateActiveNav(catId);
    }
}

// --- Theme Logic ---
function initTheme() {
    const saved = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', saved);
    if (themeToggle) {
        updateToggleIcon(saved);
        updateLogo(saved);
        themeToggle.addEventListener('click', (e) => {
            createRipple(e);
            const current = document.documentElement.getAttribute('data-theme');
            const next = current === 'dark' ? 'light' : 'dark';
            document.documentElement.setAttribute('data-theme', next);
            localStorage.setItem('theme', next);
            updateToggleIcon(next);
            updateLogo(next);
        });
    }
}

function updateLogo(theme) {
    const logos = document.querySelectorAll('#mainLogo, .hero-visual img');
    logos.forEach(logo => {
        if (theme === 'dark') {
            logo.style.filter = 'drop-shadow(0 0 20px rgba(0,0,0,0.5)) brightness(1.2)';
        } else {
            logo.style.filter = 'drop-shadow(0 0 10px rgba(0,0,0,0.1))';
        }
    });
}

function updateToggleIcon(theme) {
    if (toggleIcon) {
        toggleIcon.style.opacity = 0;
        setTimeout(() => {
            toggleIcon.className = theme === 'dark' ? 'ri-moon-line' : 'ri-sun-line';
            toggleIcon.style.opacity = 1;
        }, 200);
    }
}

// --- Search Logic ---
function performSearch() {
    const term = searchInput.value.toLowerCase().trim();
    sessionStorage.setItem('searchQuery', term);

    if (term.length < 2) {
        if (currentCatId && currentCatId !== 'home') {
            renderSubcategories(currentCatId);
        } else {
            renderHome();
        }
        return;
    }

    let results = [];
    Object.keys(subcategories).forEach(catId => {
        const subs = subcategories[catId];
        const matches = subs.filter(s => s.name.toLowerCase().includes(term));
        if (matches.length > 0) {
            const catLabel = categories.find(c => c.id === catId)?.label || catId;
            matches.forEach(m => results.push({ sub: m, catId: catId, catLabel: catLabel }));
        }
    });
    renderSearchResults(results, term);
}

if (searchInput) searchInput.addEventListener('input', performSearch);

const searchBtn = document.querySelector('.search-btn');
if (searchBtn) {
    searchBtn.addEventListener('click', () => {
        const term = searchInput.value.trim();
        if (term) performSearch(); else searchInput.focus();
    });
}

function renderSearchResults(results, term) {
    const pageHeader = document.querySelector('.page-header');
    const breadcrumb = document.getElementById('breadcrumb');
    const breadcrumbContainer = document.getElementById('breadcrumbContainer');
    if (pageHeader) pageHeader.style.display = 'block';
    if (breadcrumb) breadcrumb.style.display = 'none';
    if (breadcrumbContainer) breadcrumbContainer.style.display = 'none';
    document.getElementById('pageTitle').innerHTML = `Results for "<span style="color:var(--accent)">${term}</span>"`;

    if (results.length === 0) {
        contentArea.innerHTML = `
        <div style="text-align:center; padding: 60px 20px;">
            <i class="ri-search-line" style="font-size: 4rem; color: var(--glass-border); margin-bottom: 24px;"></i>
            <h3>No results found</h3>
            <p class="meta">Try searching for other premium categories or brands.</p>
        </div>`;
        return;
    }

    let html = '<div class="subgrid animate-in">';
    results.forEach((res, i) => {
        html += `
        <div class="card" style="animation-delay: ${i * 100}ms;" onclick="showProducts('${res.sub.name.replace(/'/g, "\'")}')">
            <div style="width: 100%; height: 160px; background: url('${res.sub.img}') center/cover no-repeat; border-radius: 12px; margin-bottom: 12px;"></div>
            <div class="title">${res.sub.name}</div>
            <div class="meta">${res.catLabel}</div>
        </div>`;
    });
    html += '</div>';
    contentArea.innerHTML = html;
}

// --- Rendering ---
function renderMegaMenu(catId) {
    const container = document.getElementById('megaMenuContent');
    if (!container) return;
    const cat = categories.find(c => c.id === catId);
    if (!cat) return;
    const subs = subcategories[cat.id] || [];
    container.innerHTML = `
    <div class="mega-sub-grid">
        ${subs.map(sub => `
            <div class="mega-sub-item-group">
                <div class="mega-sub-title" onclick="handleMegaSubClick('${sub.name.replace(/'/g, "\'")}', '${cat.id}')">
                    ${sub.name}
                </div>
                ${sub.items && sub.items.length > 0 ? `
                    <ul class="mega-items-list">
                        ${sub.items.map(item => `
                            <li onclick="handleMegaSubClick('${item.replace(/'/g, "\'")}', '${cat.id}')">${item}</li>
                        `).join('')}
                    </ul>
                ` : `<div style="font-size: 0.85rem; color: #999; font-style: italic;">View all products</div>`}
            </div>
        `).join('')}
    </div>
    `;
}

let hoverTimeout = null;

function renderNav() {
    if (!navList) return;
    navList.innerHTML = categories.map((c, i) => `
    <div class="nav-item animate-in" style="animation-delay: ${i * 40}ms" data-id="${c.id}">${c.label}</div>
    `).join('');

    navList.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('mouseenter', () => {
            if (window.innerWidth < 860) return;
            const catId = item.dataset.id;
            if (catId === 'home') { closeMegaMenu(); return; }
            clearTimeout(hoverTimeout);
            renderMegaMenu(catId);
            const rect = item.getBoundingClientRect();
            const headerHeight = document.querySelector('.app-header').offsetHeight;
            megaMenu.style.visibility = 'hidden';
            megaMenu.style.display = 'block';
            megaMenu.classList.add('active');
            const actualWidth = megaMenu.offsetWidth;
            megaMenu.classList.remove('active');
            megaMenu.style.display = '';
            megaMenu.style.visibility = '';
            let leftPos = rect.left;
            if (leftPos + actualWidth > window.innerWidth - 10) leftPos = window.innerWidth - actualWidth - 10;
            leftPos = Math.max(10, leftPos);
            megaMenu.style.left = `${leftPos}px`;
            megaMenu.style.top = `${headerHeight}px`;
            megaMenu.style.maxWidth = 'min(1200px, 95vw)';
            megaMenu.classList.add('active');
            overlay.classList.add('active');
            updateActiveNav(catId);
        });

        item.addEventListener('mouseleave', () => {
            hoverTimeout = setTimeout(closeMegaMenu, 250);
        });

        item.addEventListener('click', (e) => {
            createRipple(e);
            const catId = item.dataset.id;
            if (catId === 'home') {
                closeMegaMenu();
                window.location.href = 'home.html';
            } else if (!window.location.pathname.endsWith('index.html')) {
                window.location.href = `index.html?cat=${catId}`;
            } else {
                currentCatId = catId;
                renderSubcategories(catId);
                updateActiveNav(catId);
                closeMegaMenu();
            }
        });
    });
}

if (megaMenu) {
    megaMenu.addEventListener('mouseenter', () => clearTimeout(hoverTimeout));
    megaMenu.addEventListener('mouseleave', (e) => {
        const rect = megaMenu.getBoundingClientRect();
        const header = document.querySelector('.app-header');
        const headerRect = header ? header.getBoundingClientRect() : null;
        if (e.clientY < rect.top && headerRect && e.clientY > headerRect.top) {
            hoverTimeout = setTimeout(closeMegaMenu, 300);
        } else {
            hoverTimeout = setTimeout(closeMegaMenu, 100);
        }
    });
}

function updateActiveNav(id) {
    if (navList) {
        navList.querySelectorAll('.nav-item').forEach(x => {
            x.classList.remove('active');
            if (x.dataset.id === id) x.classList.add('active');
        });
    }
}

function renderSubcategories(catId, filter = '') {
    const cat = categories.find(c => c.id === catId);
    const pageHeader = document.querySelector('.page-header');
    if (pageHeader) pageHeader.style.display = 'block';
    const pageTitle = document.getElementById('pageTitle');
    if (pageTitle) pageTitle.textContent = cat.label;
    const breadcrumb = document.getElementById('breadcrumb');
    const breadcrumbContainer = document.getElementById('breadcrumbContainer');
    if (breadcrumb) breadcrumb.style.display = 'block';
    if (breadcrumbContainer) breadcrumbContainer.style.display = 'flex';
    if (breadcrumb) {
        breadcrumb.innerHTML = `<a href="home.html" style="color:inherit; text-decoration:none;">HOME</a> > ${cat.label}`;
    }
    let subs = subcategories[catId] || [];
    if (filter) subs = subs.filter(s => s.name.toLowerCase().includes(filter));
    if (subs.length === 0) {
        contentArea.innerHTML = `<div class="card animate-in"><div class="card-content"><h3>No Items Found</h3></div></div>`;
        return;
    }
    let html = '<div class="subgrid">';
    subs.forEach((s, i) => {
        const itemsHtml = s.items && s.items.length > 0
            ? `<div class="subcategory-items" style="margin-top: 8px; font-size: 0.8rem; opacity: 0.6; display: flex; flex-wrap: wrap; gap: 6px;">
                ${s.items.slice(0, 4).map(item => `<span style="background: var(--glass-bg); padding: 2px 8px; border-radius: 4px;">${item}</span>`).join('')}
                ${s.items.length > 4 ? '<span>...</span>' : ''}
               </div>`
            : '';
        html += `
        <div class="card animate-in" style="animation-delay: ${i * 50}ms; cursor: pointer; padding: 16px; display: flex; flex-direction: column;" onclick="showProducts('${s.name.replace(/'/g, "\'")}', '${catId}')" data-sub="${s.name}">
            <div style="display: flex; align-items: center; width: 100%;">
                <div style="flex: 1; padding-right: 12px;">
                    <div class="title" style="margin-bottom: 2px; font-size: 1.15rem; font-weight: 700;">${s.name}</div>
                    <div class="meta" style="font-size: 0.85rem; opacity: 0.8;">Explore Collection</div>
                </div>
                <div style="width: 60px; height: 60px; background: url('${s.img}') center/cover no-repeat; border-radius: 12px; flex-shrink: 0;"></div>
            </div>
            ${itemsHtml}
        </div>`;
    });
    html += '</div>';
    contentArea.innerHTML = html;
    addCardHandlers();
}

function renderHome() {
    const pageHeader = document.querySelector('.page-header');
    if (pageHeader) pageHeader.style.display = 'none';
    const pageTitle = document.getElementById('pageTitle');
    if (pageTitle) pageTitle.textContent = 'Welcome';
    const breadcrumb = document.getElementById('breadcrumb');
    const breadcrumbContainer = document.getElementById('breadcrumbContainer');
    if (breadcrumb) breadcrumb.style.display = 'none';
    if (breadcrumbContainer) breadcrumbContainer.style.display = 'none';
    currentCatId = 'home';
    sessionStorage.removeItem('activeCategory');
    document.querySelectorAll('.cat').forEach(c => {
        c.classList.remove('active');
        if (c.dataset.id === 'home') c.classList.add('active');
    });
    const html = `
    <section class="hero-section animate-in">
        <div class="hero-banner">
            <div class="hero-content">
                <span class="hero-tag">New Collection 2026</span>
                <h1 class="hero-title">Elevate Your Lifestyle With Go Royal</h1>
                <p class="hero-desc">Discover a world of premium products curated just for you.</p>
                <div style="display: flex; gap: 16px;">
                    <a href="#" class="hero-btn" onclick="document.querySelector('.nav-item[data-id=electronics]').click(); return false;">Shop Now</a>
                </div>
            </div>
            <div class="hero-visual"><img src="Images/logo.png" style="width: 250px;"></div>
        </div>
    </section>
    <div class="section-header animate-in"><h2 class="section-title">Shop by Category</h2></div>
    <div class="subgrid animate-in" style="margin-bottom: 60px;">
        ${['electronics', 'watches', 'home-decor', 'automobiles'].map((catId, i) => {
        const cat = categories.find(c => c.id === catId);
        return `
            <div class="card" style="animation-delay: ${i * 100}ms;" onclick="handleSidebarClick('${catId}')">
                <div class="card-content">
                     <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:24px;">
                        <div style="background:var(--accent); color:black; width:48px; height:48px; border-radius:14px; display:flex; align-items:center; justify-content:center; font-size:1.5rem;"><i class="${cat.icon}"></i></div>
                     </div>
                     <div class="title">${cat.label}</div>
                     <div class="meta">View Collections</div>
                </div>
            </div>`;
    }).join('')}
    </div>
    <section class="partner-cta animate-in">
        <div class="partner-title">Elevate Your Brand To Royalty</div>
        <button class="gold-btn" onclick="addToCart('Partnership Application Sent')">Apply to Sell</button>
    </section>
    ${renderFooter()}
    `;
    contentArea.innerHTML = html;
    addCardHandlers();
}

function addCardHandlers() {
    contentArea.querySelectorAll('.card').forEach(card => addTiltEffect(card));
}

function showProducts(sub, preferredCatId = null) {
    let subImg = '';
    let catLabel = 'Products';
    let parentCatId = '';
    let nestedItems = [];
    let parentSubName = '';

    const searchInCat = (catId) => {
        const list = subcategories[catId];
        const found = list.find(s => s.name === sub);
        if (found) {
            subImg = found.img;
            parentCatId = catId;
            nestedItems = found.items || [];
            const parent = categories.find(c => c.id === catId);
            if (parent) catLabel = parent.label;
            return true;
        } else {
            const foundParentSub = list.find(s => s.items && s.items.includes(sub));
            if (foundParentSub) {
                subImg = foundParentSub.img;
                parentCatId = catId;
                parentSubName = foundParentSub.name;
                const parent = categories.find(c => c.id === catId);
                if (parent) catLabel = parent.label;
                return true;
            }
        }
        return false;
    };

    if (preferredCatId && searchInCat(preferredCatId)) { } else {
        Object.keys(subcategories).some(catId => searchInCat(catId));
    }

    if (!subImg) subImg = 'Images/logo.png';

    if (nestedItems.length > 0 && window.location.pathname.indexOf('product.html') === -1) {
        renderItemsList(sub, nestedItems, subImg, catLabel, parentCatId);
    } else {
        const params = new URLSearchParams();
        params.set('sub', sub);
        params.set('img', subImg);
        params.set('cat', catLabel);
        params.set('catId', parentCatId);
        if (parentSubName) params.set('parentSub', parentSubName);
        window.location.href = `product.html?${params.toString()}`;
    }
}

function renderItemsList(subName, items, subImg, catLabel, catId) {
    const pageHeader = document.querySelector('.page-header');
    if (pageHeader) pageHeader.style.display = 'block';
    const pageTitle = document.getElementById('pageTitle');
    if (pageTitle) pageTitle.textContent = subName;
    const breadcrumb = document.getElementById('breadcrumb');
    const breadcrumbContainer = document.getElementById('breadcrumbContainer');
    if (breadcrumb) breadcrumb.style.display = 'block';
    if (breadcrumbContainer) breadcrumbContainer.style.display = 'flex';
    if (breadcrumb) {
        breadcrumb.innerHTML = `<a href="home.html" style="color:inherit; text-decoration:none;">HOME</a> > <a href="index.html?cat=${catId}" style="color:inherit; text-decoration:none;">${catLabel}</a> > ${subName}`;
    }
    let html = '<div class="subgrid">';
    items.forEach((item, i) => {
        html += `
        <div class="card animate-in" style="animation-delay: ${i * 50}ms; cursor: pointer; padding: 16px; display: flex; align-items: center;" onclick="showProducts('${item.replace(/'/g, "\'")}', '${catId}')">
             <div style="flex: 1; padding-right: 12px;">
                <div class="title" style="margin-bottom: 2px; font-size: 1.15rem; font-weight: 700;">${item}</div>
                <div class="meta" style="font-size: 0.85rem; opacity: 0.8;">View Collection</div>
            </div>
            <div style="width: 60px; height: 60px; background: url('https://placehold.co/100x100?text=${item}') center/cover no-repeat; border-radius: 12px; flex-shrink: 0;"></div>
        </div>`;
    });
    html += '</div>';
    contentArea.innerHTML = html;
    addCardHandlers();
}

function renderProductPage() {
    const urlParams = new URLSearchParams(window.location.search);
    const sub = urlParams.get('sub');
    const img = urlParams.get('img') || '';
    const cat = urlParams.get('cat') || 'Category';
    const catId = urlParams.get('catId') || '';
    const parentSub = urlParams.get('parentSub') || '';

    if (!sub) { window.location.href = 'home.html'; return; }
    closeMegaMenu();

    const pageHeader = document.querySelector('.page-header');
    const breadcrumbContainer = document.getElementById('breadcrumbContainer');
    if (pageHeader) pageHeader.style.display = 'block';
    if (breadcrumbContainer) breadcrumbContainer.style.display = 'flex';

    document.getElementById('pageTitle').textContent = sub;

    const catLink = catId ? `<a href="index.html?cat=${catId}" style="color:inherit; text-decoration:none;">${cat}</a>` : `<span>${cat}</span>`;
    const parentSubLink = parentSub ? ` > <a href="index.html?cat=${catId}&sub=${encodeURIComponent(parentSub)}" style="color:inherit; text-decoration:none;">${parentSub.toUpperCase()}</a>` : '';

    const breadcrumb = document.getElementById('breadcrumb');
    if (breadcrumb) breadcrumb.innerHTML = `<a href="home.html" style="color:inherit; text-decoration:none;">HOME</a> > ${catLink}${parentSubLink} > ${sub}`;

    // Filter Injection Logic
    let filterHtml = '';
    const ageFilterCats = ['men', 'women'];
    const audienceFilterCats = ['watches', 'bags-and-footwear', 'fitness', 'sports'];

    if (ageFilterCats.includes(catId)) {
        filterHtml = `
            <div class="age-filter-container">
                <button class="age-filter-btn" onclick="toggleFilterDropdown(event)">
                    <i class="ri-filter-3-line"></i>
                    <span id="currentFilterLabel">${currentAgeRange === 'All' ? 'All Ages' : 'Age ' + currentAgeRange}</span>
                    <i class="ri-arrow-down-s-line"></i>
                </button>
                <div class="age-dropdown" id="filterDropdown">
                    ${ageGroups.map(g => `
                        <div class="age-option ${currentAgeRange === g.value ? 'active' : ''}" 
                             onclick="applyFilter('age', '${g.value}')">
                            ${g.label}
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    } else if (audienceFilterCats.includes(catId)) {
        filterHtml = `
            <div class="age-filter-container">
                <button class="age-filter-btn" onclick="toggleFilterDropdown(event)">
                    <i class="ri-group-line"></i>
                    <span id="currentFilterLabel">${currentAudience === 'All' ? 'Target: All' : currentAudience}</span>
                    <i class="ri-arrow-down-s-line"></i>
                </button>
                <div class="age-dropdown" id="filterDropdown">
                    ${audienceGroups.map(g => `
                        <div class="age-option ${currentAudience === g.value ? 'active' : ''}" 
                             onclick="applyFilter('audience', '${g.value}')">
                            ${g.label}
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }

    const topRatedUrl = `https://www.google.com/search?q=${encodeURIComponent(sub)}+top+rated+products`;
    const sponsoredUrl = `https://www.amazon.com/s?k=${encodeURIComponent(sub)}`;

    // Mock products based on category and filter
    let products = [];
    if (ageFilterCats.includes(catId)) {
        if (currentAgeRange === 'All') {
            products = [
                { type: 'top-rated', label: 'Top Rated', name: `${sub} - Elite Choice`, url: topRatedUrl },
                { type: 'sponsored', label: 'Sponsored Product', name: `${sub} - Royal Edition`, url: sponsoredUrl }
            ];
        } else if (currentAgeRange === '18-34') {
            products = [
                { type: 'top-rated', label: 'Youth Collection', name: `${sub} - Trendsetter`, url: topRatedUrl },
                { type: 'sponsored', label: 'Fresh Arrivals', name: `${sub} - Vibrant Style`, url: sponsoredUrl }
            ];
        } else if (currentAgeRange === '35-60') {
            products = [
                { type: 'top-rated', label: 'Modern Classic', name: `${sub} - Sophisticated`, url: topRatedUrl },
                { type: 'sponsored', label: 'Premium Selection', name: `${sub} - Executive Line`, url: sponsoredUrl }
            ];
        } else {
            products = [
                { type: 'top-rated', label: 'Heritage Line', name: `${sub} - Timeless Elegance`, url: topRatedUrl },
                { type: 'sponsored', label: 'Classic Series', name: `${sub} - Refined Comfort`, url: sponsoredUrl }
            ];
        }
    } else if (audienceFilterCats.includes(catId)) {
        if (currentAudience === 'All') {
            products = [
                { type: 'top-rated', label: 'Bestseller', name: `Premium ${sub}`, url: topRatedUrl },
                { type: 'sponsored', label: 'Featured', name: `New Arrival ${sub}`, url: sponsoredUrl }
            ];
        } else if (currentAudience === 'Kids') {
            products = [
                { type: 'top-rated', label: 'Junior Edition', name: `Kids' Special ${sub}`, url: topRatedUrl },
                { type: 'sponsored', label: 'Playful Design', name: `Durable ${sub} for Kids`, url: sponsoredUrl }
            ];
        } else if (currentAudience === 'Mens') {
            products = [
                { type: 'top-rated', label: 'Mens Collection', name: `Rugged ${sub} for Men`, url: topRatedUrl },
                { type: 'sponsored', label: 'Elite Style', name: `Mens Classic ${sub}`, url: sponsoredUrl }
            ];
        } else if (currentAudience === 'Womens') {
            products = [
                { type: 'top-rated', label: 'Womens Choice', name: `Elegant ${sub} for Her`, url: topRatedUrl },
                { type: 'sponsored', label: 'Premium Fashion', name: `Womens Luxury ${sub}`, url: sponsoredUrl }
            ];
        }
    } else {
        // Default products for other categories
        products = [
            { type: 'top-rated', label: 'Top Rated', name: `${sub} - Premium Quality`, url: topRatedUrl },
            { type: 'sponsored', label: 'Sponsored', name: `${sub} - Best Choice`, url: sponsoredUrl }
        ];
    }

    let html = filterHtml;
    html += '<div class="products">';
    products.forEach((p, i) => {
        html += `
        <div class="product-card animate-in" style="animation-delay: ${i * 100}ms; cursor: pointer;" onclick="window.open('${p.url}', '_blank')">
            <div class="product-img" style="background-image: url('${img}')">
                <div class="product-badge">${p.label}</div>
            </div>
            <div class="product-info">
                <div class="product-name">${p.name}</div>
                <div class="meta" style="margin-top:8px; color:var(--text-secondary)">Verified Excellence • Official Brand</div>
                <div style="margin-top: 20px;">
                    <button class="gold-btn" style="width: 100%; padding: 12px; font-size: 0.9rem;">Explore Brand</button>
                </div>
            </div>
        </div>`;
    });
    html += '</div>';

    html += `
    <section class="partner-cta animate-in" style="margin-top: 80px;">
        <div class="partner-title">Elevate Your Brand To Royalty</div>
        <p class="partner-desc">Join the Go Royal marketplace and showcase your premium products to our global audience.</p>
        <button class="gold-btn" onclick="addToCart('Partnership Application Sent')">Apply to Sell</button>
    </section>
    ${renderFooter()}
    `;

    contentArea.innerHTML = html;
    addCardHandlers();
}

function toggleFilterDropdown(e) {
    if (e) e.stopPropagation();
    const dropdown = document.getElementById('filterDropdown');
    if (dropdown) dropdown.classList.toggle('active');
}

function applyFilter(type, value) {
    if (type === 'age') currentAgeRange = value;
    if (type === 'audience') currentAudience = value;

    const dropdown = document.getElementById('filterDropdown');
    if (dropdown) dropdown.classList.remove('active');

    // Smoothly update the UI
    const container = document.querySelector('.products');
    if (container) {
        container.style.opacity = '0';
        container.style.transform = 'translateY(10px)';
        setTimeout(() => {
            renderProductPage();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 300);
    } else {
        renderProductPage();
    }
}

// Close dropdown on outside click
window.addEventListener('click', () => {
    const dropdown = document.getElementById('filterDropdown');
    if (dropdown) dropdown.classList.remove('active');
});

function addToCart(name) {
    const toast = document.createElement('div');
    toast.className = 'toast animate-in';
    toast.innerHTML = `<i class="ri-checkbox-circle-fill" style="color:#d4af37; margin-right:8px; font-size:1.2rem"></i> <span style="font-weight:500">${name}</span>`;

    Object.assign(toast.style, {
        position: 'fixed', bottom: '80px', left: '50%', transform: 'translateX(-50%)',
        background: 'var(--card-bg)', padding: '12px 24px', borderRadius: '50px',
        border: 'var(--glass-border)', backdropFilter: 'blur(16px)', webkitBackdropFilter: 'blur(16px)',
        boxShadow: '0 10px 30px rgba(0,0,0,0.3)', zIndex: '2000',
        display: 'flex', alignItems: 'center', pointerEvents: 'none',
        color: 'var(--text-primary)', whiteSpace: 'nowrap', fontSize: '0.9rem'
    });

    document.body.appendChild(toast);

    if (navigator.vibrate) navigator.vibrate(50);

    setTimeout(() => {
        toast.style.transition = 'all 0.3s ease';
        toast.style.opacity = '0';
        toast.style.transform = 'translate(-50%, 20px)';
        setTimeout(() => toast.remove(), 300);
    }, 2000);
}

document.querySelectorAll('.bottom-nav .nav-item').forEach(item => {
    item.addEventListener('click', () => {
        document.querySelectorAll('.bottom-nav .nav-item').forEach(x => x.classList.remove('active'));
        item.classList.add('active');
        const text = item.querySelector('span').textContent;
        if (text === 'Home') renderHome();
    });
});

document.addEventListener('mousemove', (e) => {
    document.querySelectorAll('.card').forEach(card => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
    });
});

function addTiltEffect(card) {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -10;
        const rotateY = ((x - centerX) / centerX) * 10;
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
    });
}

function createRipple(event) {
    const button = event.currentTarget;
    const circle = document.createElement('span');
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;
    const rect = button.getBoundingClientRect();
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - rect.left - radius}px`;
    circle.style.top = `${event.clientY - rect.top - radius}px`;
    circle.classList.add('ripple');
    const ripple = button.getElementsByClassName('ripple')[0];
    if (ripple) ripple.remove();
    button.appendChild(circle);
}

function handleMegaSubClick(name, catId) {
    showProducts(name, catId);
    closeMegaMenu();
}

function initScrollProgress() {
    const container = document.createElement('div');
    container.className = 'scroll-progress-container';
    const bar = document.createElement('div');
    bar.className = 'scroll-progress-bar';
    container.appendChild(bar);
    document.body.appendChild(container);

    window.addEventListener('scroll', () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        bar.style.width = scrolled + "%";
    });
}

function initFAB() {
    const container = document.createElement('div');
    container.className = 'fab-container';
    container.innerHTML = `
        <div class="fab-pulse"></div>
        <button class="fab" onclick="addToCart('Support Request Sent')">
            <i class="ri-chat-smile-3-line"></i>
        </button>
    `;
    document.body.appendChild(container);
}

function trackRecentView() {
    const urlParams = new URLSearchParams(window.location.search);
    const sub = urlParams.get('sub');
    if (sub) {
        let recent = JSON.parse(localStorage.getItem('recentlyViewed') || '[]');
        recent = recent.filter(item => item !== sub);
        recent.unshift(sub);
        localStorage.setItem('recentlyViewed', JSON.stringify(recent.slice(0, 4)));
    }
}

function renderFooter() {
    return `
    <footer class="app-footer animate-in">
        <div class="footer-grid">
            <div>
                <div class="footer-col-title">Go Royal</div>
                <p class="meta">Redefining luxury shopping with premium curation and royal service. Join the elite club today.</p>
                <div class="social-links" style="margin-top: 24px;">
                    <a href="#" class="social-icon"><i class="ri-facebook-fill"></i></a>
                    <a href="#" class="social-icon"><i class="ri-twitter-x-fill"></i></a>
                    <a href="#" class="social-icon"><i class="ri-instagram-line"></i></a>
                    <a href="#" class="social-icon"><i class="ri-youtube-line"></i></a>
                </div>
            </div>
            <div>
                <div class="footer-col-title">Quick Links</div>
                <ul class="footer-links">
                    <li><a href="home.html">Home</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">FAQs</a></li>
                    <li><a href="#">Terms of Service</a></li>
                </ul>
            </div>
            <div>
                <div class="footer-col-title">Partnerships</div>
                <ul class="footer-links">
                    <li><a href="#" onclick="addToCart('Application Portal Under Construction')">Become a Partner</a></li>
                    <li><a href="#" onclick="addToCart('Security Verification Pending')">Seller Portal</a></li>
                    <li><a href="#">Brand Guidelines</a></li>
                    <li><a href="#">Corporate Gifting</a></li>
                </ul>
            </div>
            <div>
                <div class="footer-col-title">Shop</div>
                <ul class="footer-links">
                    <li><a href="index.html?cat=electronics">Electronics</a></li>
                    <li><a href="index.html?cat=watches">Watches</a></li>
                    <li><a href="index.html?cat=home-decor">Home Decor</a></li>
                    <li><a href="index.html?cat=automobiles">Automobiles</a></li>
                </ul>
            </div>
            <div>
                <div class="footer-col-title">Contact Us</div>
                <ul class="footer-links">
                    <li class="meta"><i class="ri-map-pin-line"></i> 123 Royal Palace, Dubai, UAE</li>
                    <li class="meta"><i class="ri-phone-line"></i> +971 4 123 4567</li>
                    <li class="meta"><i class="ri-mail-line"></i> support@goroyal.com</li>
                </ul>
            </div>
        </div>
        <div class="footer-bottom">
            <div class="meta">© 2026 Go Royal. All rights reserved.</div>
            <div style="display: flex; gap: 24px;">
                <a href="#" class="meta" style="text-decoration:none">Privacy Policy</a>
                <a href="#" class="meta" style="text-decoration:none">Sitemap</a>
            </div>
        </div>
    </footer>
    `;
}
