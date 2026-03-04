// --- Data ---
const categories = [
    { id: 'home', label: 'HOME', icon: 'ri-home-4-fill' },
    { id: 'automobiles', label: 'AUTOMOBILES', icon: 'ri-motorbike-line' },
    { id: 'watches', label: 'WATCHES', icon: 'ri-time-line' },
    { id: 'electronics', label: 'ELECTRONICS', icon: 'ri-macbook-line' },
    { id: 'home-appliances', label: 'HOME APPLIANCES', icon: 'ri-fridge-line' },
    { id: 'bags-footwear', label: 'BAGS and FOOTWEAR', icon: 'ri-handbag-line' },
    { id: 'home-decor', label: 'HOME DECOR', icon: 'ri-home-smile-line' },
    { id: 'fitness', label: 'FITNESS', icon: 'ri-run-line' },
    { id: 'sports', label: 'SPORTS', icon: 'ri-basketball-line' },
    { id: 'kids-toddlers', label: 'KIDS AND TODDLERS', icon: 'ri-bear-smile-line' },
    { id: 'pet-supplies', label: 'PET SUPPLIES', icon: 'ri-baidu-line' },
    { id: 'men', label: 'MEN', icon: 'ri-men-line' },
    { id: 'women', label: 'WOMEN', icon: 'ri-women-line' }
];

const subcategories = {
    "automobiles": [
        {
            "name": "Bikes",
            "img": "Images/bike.png",
            "topRatedUrl": "https://www.harley-davidson.com/top-rated",
            "sponsoredUrl": "https://www.harley-davidson.com/sponsored",
            "items": [
                "gear",
                "non gear"
            ]
        },
        {
            "name": "Cars",
            "img": "Images/car1.png",
            "topRatedUrl": "https://www.tesla.com/models",
            "sponsoredUrl": "https://www.tesla.com/inventory",
            "items": [
                "SUV",
                "sedan",
                "Hatch back",
                "sports edition"
            ]
        },
        {
            "name": "EV",
            "img": "Images/ev1.png",
            "topRatedUrl": "https://www.lucidmotors.com/air",
            "sponsoredUrl": "https://www.lucidmotors.com/reserve",
            "items": [
                "cars",
                "bikes"
            ]
        },
        {
            "name": "Bike Accessories",
            "img": "Images/bikeacc.png",
            "topRatedUrl": "https://www.revzilla.com/best-sellers",
            "sponsoredUrl": "https://www.revzilla.com/sale",
            "items": [
                "riding gears",
                "helmet"
            ]
        },
        {
            "name": "Car Accessories",
            "img": "Images/caracc.png",
            "topRatedUrl": "https://www.weathertech.com/top-products",
            "sponsoredUrl": "https://www.weathertech.com/specials",
            "items": [
                "audio system",
                "cleaning kit"
            ]
        }
    ],
    "watches": [
        {
            "name": "Smart Watch",
            "img": "Images/smartw.png",
            "topRatedUrl": "https://www.apple.com/watch/ultra",
            "sponsoredUrl": "https://www.apple.com/watch/series-9",
            "items": []
        },
        {
            "name": "Analog Watch",
            "img": "Images/analogw.png",
            "topRatedUrl": "https://www.rolex.com/watches/submariner",
            "sponsoredUrl": "https://www.rolex.com/watches/new-watches",
            "items": []
        },
        {
            "name": "Digital Watch",
            "img": "Images/digitalw.png",
            "topRatedUrl": "https://www.casio.com/g-shock",
            "sponsoredUrl": "https://www.casio.com/pro-trek",
            "items": []
        },
        {
            "name": "Digi Log Watch",
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
            "items": []
        },
        {
            "name": "Mobile",
            "img": "Images/phone.png",
            "topRatedUrl": "https://www.samsung.com/galaxy-s24",
            "sponsoredUrl": "https://www.samsung.com/galaxy-z-fold5",
            "items": []
        },
        {
            "name": "Laptop",
            "img": "Images/laptop.png",
            "topRatedUrl": "https://www.apple.com/macbook-pro",
            "sponsoredUrl": "https://www.apple.com/macbook-air",
            "items": [
                "Gaming",
                "Work"
            ]
        },
        {
            "name": "Accessories",
            "img": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80",
            "topRatedUrl": "#",
            "sponsoredUrl": "#",
            "items": [
                "keyboard",
                "mouse",
                "controller",
                "power bank",
                "Charger"
            ]
        },
        {
            "name": "Camera",
            "img": "Images/camera1.png",
            "topRatedUrl": "https://www.canon.com/eos-r5",
            "sponsoredUrl": "https://www.canon.com/eos-r6",
            "items": []
        },
        {
            "name": "earphones",
            "img": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80",
            "topRatedUrl": "#",
            "sponsoredUrl": "#",
            "items": [
                "wired",
                "tws",
                "headphones",
                "neckband"
            ]
        },
        {
            "name": "Monitor",
            "img": "Images/monitor.png",
            "topRatedUrl": "https://www.dell.com/ultrasharp",
            "sponsoredUrl": "https://www.dell.com/alienware",
            "items": []
        },
        {
            "name": "Speaker",
            "img": "Images/speakers.png",
            "topRatedUrl": "https://www.jbl.com/portable-speakers",
            "sponsoredUrl": "https://www.jbl.com/party-speakers",
            "items": [
                "bluetooth speaker",
                "sound bar"
            ]
        }
    ],
    "home-appliances": [
        {
            "name": "Refrigerator",
            "img": "Images/fridge.png",
            "topRatedUrl": "https://www.lg.com/refrigerators",
            "sponsoredUrl": "https://www.lg.com/instaview",
            "items": []
        },
        {
            "name": "Washing Machine",
            "img": "Images/washingmachine.png",
            "topRatedUrl": "https://www.whirlpool.com/washers",
            "sponsoredUrl": "https://www.whirlpool.com/dryers",
            "items": []
        },
        {
            "name": "kitchen appliances",
            "img": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80",
            "topRatedUrl": "#",
            "sponsoredUrl": "#",
            "items": [
                "Air fryer",
                "Mixer grinder",
                "Dish washer",
                "Grinder",
                "Microwave Owen",
                "induction stove"
            ]
        },
        {
            "name": "Air conditioner",
            "img": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80",
            "topRatedUrl": "#",
            "sponsoredUrl": "#",
            "items": []
        },
        {
            "name": "Air Purifier",
            "img": "Images/airpurifier.png",
            "topRatedUrl": "https://www.dyson.com/air-purifiers",
            "sponsoredUrl": "https://www.dyson.com/vacuum-cleaners",
            "items": []
        },
        {
            "name": "Water purifier",
            "img": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80",
            "topRatedUrl": "#",
            "sponsoredUrl": "#",
            "items": []
        },
        {
            "name": "Television",
            "img": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80",
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
    "home-decor": [
        {
            "name": "living room furniture",
            "img": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80",
            "topRatedUrl": "#",
            "sponsoredUrl": "#",
            "items": [
                "sofa",
                "computer table",
                "chair",
                "dining table"
            ]
        },
        {
            "name": "kitchen",
            "img": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80",
            "topRatedUrl": "#",
            "sponsoredUrl": "#",
            "items": [
                "Gas stove"
            ]
        },
        {
            "name": "Bedroom Accessories",
            "img": "Images/bedroom.png",
            "topRatedUrl": "https://www.potterybarn.com/bedroom",
            "sponsoredUrl": "https://www.potterybarn.com/lighting",
            "items": [
                "bed",
                "mattress",
                "wardrobe"
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
            "name": "Fitness bikes",
            "img": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80",
            "topRatedUrl": "#",
            "sponsoredUrl": "#",
            "items": []
        },
        {
            "name": "Walking Pods",
            "img": "Images/walkingpad.png",
            "topRatedUrl": "https://www.walkingpad.com/r1-pro",
            "sponsoredUrl": "https://www.walkingpad.com/a1-pro",
            "items": []
        },
        {
            "name": "Home Gym",
            "img": "Images/homegym.png",
            "topRatedUrl": "https://www.bowflex.com/home-gyms",
            "sponsoredUrl": "https://www.bowflex.com/selecttech",
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
                "ball"
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
    ],
    "pet-supplies": [
        {
            "name": "dogs",
            "img": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80",
            "topRatedUrl": "#",
            "sponsoredUrl": "#",
            "items": []
        },
        {
            "name": "cats",
            "img": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80",
            "topRatedUrl": "#",
            "sponsoredUrl": "#",
            "items": []
        },
        {
            "name": "aquarium set",
            "img": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80",
            "topRatedUrl": "#",
            "sponsoredUrl": "#",
            "items": []
        }
    ],
    "men": [
        {
            "name": "Top Wear",
            "img": "https://images.unsplash.com/photo-1550246140-5119ae4790b8?w=400&q=80",
            "topRatedUrl": "https://www.ralphlauren.com/men-clothing-shirts",
            "sponsoredUrl": "https://www.ralphlauren.com/men-clothing-polo-shirts",
            "items": [
                "formal shirt",
                "casual shirt",
                "oversized t shirt",
                "half hand t shirt",
                "t shirt",
                "blazers"
            ]
        },
        {
            "name": "Bottom Wear",
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
            "name": "Inner Wear",
            "img": "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&q=80",
            "topRatedUrl": "https://www.calvinklein.us/men/underwear",
            "sponsoredUrl": "https://www.calvinklein.us/men/new-arrivals",
            "items": [
                "underwear",
                "briefs",
                "vest",
                "boxer"
            ]
        },
        {
            "name": "Ethnic Wear",
            "img": "https://images.unsplash.com/photo-1507679799987-9755eb1e1c17?w=400&q=80",
            "topRatedUrl": "https://www.manyavar.com/men/kurta-pajama",
            "sponsoredUrl": "https://www.manyavar.com/men/sherwani",
            "items": [
                "kurtas",
                "kurta set",
                "dhotis"
            ]
        },
        {
            "name": "Sports Wear",
            "img": "https://images.unsplash.com/photo-1518459031867-a89b944bffe4?w=400&q=80",
            "topRatedUrl": "https://www.adidas.com/men-training",
            "sponsoredUrl": "https://www.adidas.com/men-running",
            "items": [
                "t shirt",
                "tracks",
                "jogers",
                "shoes"
            ]
        },
        {
            "name": "Winter Wear",
            "img": "https://images.unsplash.com/photo-1591559489278-654cb2960f25?w=400&q=80",
            "topRatedUrl": "https://www.thenorthface.com/men-jackets",
            "sponsoredUrl": "https://www.thenorthface.com/men-accessories",
            "items": [
                "jackets",
                "sweatshirts",
                "hoodies",
                "co ords",
                "coats",
                "sweater"
            ]
        },
        {
            "name": "Accssories",
            "img": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80",
            "topRatedUrl": "#",
            "sponsoredUrl": "#",
            "items": [
                "belts",
                "sunglasses",
                "trimmer",
                "wallets",
                "tie",
                "socks",
                "caps"
            ]
        }
    ],
    "women": [
        {
            "name": "Top Wear",
            "img": "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&q=80",
            "topRatedUrl": "https://www.zara.com/women-tops",
            "sponsoredUrl": "https://www.zara.com/women-new-arrivals",
            "items": [
                "tops",
                "t shirt",
                "shirt",
                "co ords",
                "blazers"
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
            "name": "Inner Wear",
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
            "name": "Ethnic Wear",
            "img": "https://images.unsplash.com/photo-1627885744838-898075677d33?w=400&q=80",
            "topRatedUrl": "https://www.fabindia.com/women-ethnic",
            "sponsoredUrl": "https://www.fabindia.com/women-fusion",
            "items": [
                "silk sarees",
                "cotton sarees",
                "kurta set",
                "lehangas"
            ]
        },
        {
            "name": "Sports Wear",
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
            "name": "Winter wear",
            "img": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80",
            "topRatedUrl": "#",
            "sponsoredUrl": "#",
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
            "img": "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?w=400&q=80",
            "topRatedUrl": "https://www.chanel.com/bags",
            "sponsoredUrl": "https://www.chanel.com/jewelry",
            "items": []
        }
    ]
};


// --- References ---
// --- References ---
const navList = document.getElementById('categoryNav');
const contentArea = document.getElementById('contentArea');
const themeToggle = document.getElementById('themeToggle');
const toggleIcon = themeToggle.querySelector('i');
const searchInput = document.getElementById('searchInput');
const menuButton = document.getElementById('menuButton'); // New
const mobileSidebar = document.getElementById('mobileSidebar'); // New
const sidebarContent = document.getElementById('sidebarContent'); // New
const overlay = document.getElementById('overlay');
const megaMenu = document.getElementById('megaMenu');

let currentCatId = null;

// --- Initialization ---
initTheme();
renderNav();
renderSidebarMenu(); // New
updateMenuPosition(); // Initial position
initScrollProgress();
initFAB();
trackRecentView();

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
    try {
        renderProductPage();
    } catch (e) {
        console.error('Error rendering product page:', e);
    }
} else if (isHomePage) {
    sessionStorage.removeItem('activeCategory');
    renderHome();
} else {
    // index.html or other
    if (urlCat) {
        currentCatId = urlCat;
        sessionStorage.setItem('activeCategory', urlCat);
        renderSubcategories(urlCat);
        updateActiveNav(urlCat);
    } else if (savedCat) {
        currentCatId = savedCat;
        renderSubcategories(savedCat);
        updateActiveNav(savedCat);
    } else if (path.endsWith('index.html') || path.endsWith('/') || path === '') {
        renderHome(); // Fallback for index.html without cat
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
// Also update after DOM load just in case
window.addEventListener('scroll', updateMenuPosition); // Sticky might shift? No, sticky height is constant unless resize.


// --- Mobile Menu Logic ---
// Already declared at top

// Sidebar Interactions
if (menuButton) {
    menuButton.addEventListener('click', () => {
        mobileSidebar.classList.add('active');
        overlay.classList.add('active');
        // Close mega menu if open
        megaMenu.classList.remove('active');
    });
}

function closeSidebar() {
    if (mobileSidebar) mobileSidebar.classList.remove('active');
    overlay.classList.remove('active');
}

// Overlay listener
overlay.addEventListener('click', () => {
    closeMegaMenu();
    closeSidebar(); // Also close sidebar
    overlay.classList.remove('active');
});

function closeMegaMenu() {
    megaMenu.classList.remove('active');
    // Clear active nav if on index.html and we aren't hovering over the current active category
    if (!mobileSidebar.classList.contains('active')) {
        overlay.classList.remove('active');

        // Reset active nav to match actual current content if on index.html
        if (window.location.pathname.endsWith('index.html') && currentCatId) {
            updateActiveNav(currentCatId);
        } else if (window.location.pathname.endsWith('home.html') || window.location.pathname === '/') {
            updateActiveNav('home');
        } else {
            // Clear all active states if not on a specific cat page
            navList.querySelectorAll('.nav-item').forEach(x => x.classList.remove('active'));
        }
    }
}

// Sidebar Rendering
function renderSidebarMenu() {
    if (!sidebarContent) return;
    sidebarContent.innerHTML = categories.map(cat => {
        if (cat.id === 'home') return `
            <div class="sidebar-item" onclick="window.location.href='home.html'">
                <i class="${cat.icon}"></i>
                <span>${cat.label}</span>
            </div>
        `;

        const subs = subcategories[cat.id] || [];
        return `
            <div class="sidebar-cat-group">
                <div class="sidebar-item" onclick="toggleSidebarGroup(this)">
                    <i class="${cat.icon}"></i>
                    <span>${cat.label}</span>
                    <i class="ri-arrow-down-s-line" style="margin-left: auto; opacity: 0.5;"></i>
                </div>
                <div class="sidebar-sub-list" style="display: none; padding-left: 20px; background: rgba(0,0,0,0.1); border-radius: 8px; margin: 0 10px;">
                    ${subs.map(sub => `
                        <div class="sidebar-sub-item">
                            <div class="sidebar-item" onclick="handleSidebarSubClick('${sub.name}', '${cat.id}')" style="padding: 10px 15px; font-size: 0.95rem;">
                                <span>${sub.name}</span>
                                ${sub.items && sub.items.length > 0 ? `<i class="ri-arrow-down-s-line" style="margin-left: auto; font-size: 0.8rem; opacity: 0.5;"></i>` : ''}
                            </div>
                            ${sub.items && sub.items.length > 0 ? `
                                <div class="sidebar-nested-list" style="display: none; padding-left: 15px; border-left: 1px solid var(--accent); margin-left: 15px;">
                                    ${sub.items.map(item => `
                                        <div class="sidebar-item" onclick="handleMegaSubClick('${item}', '${cat.id}')" style="padding: 8px 15px; font-size: 0.85rem; opacity: 0.7;">
                                            ${item}
                                        </div>
                                    `).join('')}
                                </div>
                            ` : ''}
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }).join('');
}

function toggleSidebarGroup(el) {
    const nextList = el.nextElementSibling;
    const icon = el.querySelector('.ri-arrow-down-s-line') || el.querySelector('.ri-arrow-up-s-line');
    const isOpening = nextList.style.display === 'none';

    // Close all other groups (Single-Open behavior)
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

        // Close all other nested lists in THIS category group
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
    } else {
        if (!window.location.pathname.endsWith('index.html')) {
            window.location.href = `index.html?cat=${catId}`;
        } else {
            currentCatId = catId;
            renderSubcategories(catId);
            updateActiveNav(catId);
        }
    }
}

// --- Theme Logic ---
function initTheme() {
    const saved = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', saved);
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
    toggleIcon.style.opacity = 0;
    setTimeout(() => {
        toggleIcon.className = theme === 'dark' ? 'ri-moon-line' : 'ri-sun-line';
        toggleIcon.style.opacity = 1;
    }, 200);
}

// State Persistence
// --- Search Logic ---
// ... (search logic remains mostly same, just check if references need updating)
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

searchInput.addEventListener('input', performSearch);

// Add listener for search button
const searchBtn = document.querySelector('.search-btn');
if (searchBtn) {
    searchBtn.addEventListener('click', () => {
        const term = searchInput.value.trim();
        if (term) {
            performSearch();
        } else {
            searchInput.focus();
        }
    });
}

function renderSearchResults(results, term) {
    const pageHeader = document.querySelector('.page-header');
    if (pageHeader) pageHeader.style.display = 'block';

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
        <div class="card" style="animation-delay: ${i * 100}ms;" onclick="showProducts('${res.sub.name}')">
            <div style="width: 100%; height: 160px; background: url('${res.sub.img}') center/cover no-repeat; border-radius: 12px; margin-bottom: 12px;"></div>
            <div class="title">${res.sub.name}</div>
            <div class="meta">${res.catLabel}</div>
        </div>`;
    });
    html += '</div>';
    contentArea.innerHTML = html;
}

// ... (filterAll function)

// --- Rendering ---

// Reformatted for Hover Mega Menu
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
                <div class="mega-sub-title" onclick="handleMegaSubClick('${sub.name}', '${cat.id}')">
                    ${sub.name}
                </div>
                ${sub.items && sub.items.length > 0 ? `
                    <ul class="mega-items-list">
                        ${sub.items.map(item => `
                            <li onclick="handleMegaSubClick('${item}', '${cat.id}')">
                                ${item}
                            </li>
                        `).join('')}
                    </ul>
                ` : `
                    <div style="font-size: 0.85rem; color: #999; font-style: italic;">View all products</div>
                `}
            </div>
        `).join('')}
    </div>
    `;
}

let hoverTimeout = null;

function renderNav() {
    navList.innerHTML = categories.map((c, i) => `
    <div class="nav-item animate-in" style="animation-delay: ${i * 40}ms" data-id="${c.id}">
        ${c.label}
    </div>
    `).join('');

    navList.querySelectorAll('.nav-item').forEach(item => {
        // Hover Logic for Mega Menu (Desktop only)
        item.addEventListener('mouseenter', () => {
            if (window.innerWidth < 860) return; // Only desktop

            const catId = item.dataset.id;
            if (catId === 'home') {
                closeMegaMenu();
                return;
            }

            clearTimeout(hoverTimeout);
            renderMegaMenu(catId);

            // Positioning Logic for "Pop Down" box
            const rect = item.getBoundingClientRect();
            const headerHeight = document.querySelector('.app-header').offsetHeight;

            // Start with current button position
            let leftPos = rect.left;

            // Temporary show to measure actual width
            megaMenu.style.visibility = 'hidden';
            megaMenu.style.display = 'block';
            megaMenu.classList.add('active');

            const actualWidth = megaMenu.offsetWidth;

            megaMenu.classList.remove('active');
            megaMenu.style.display = '';
            megaMenu.style.visibility = '';

            // If it would overflow right edge, align it to the right of the button or screen
            if (leftPos + actualWidth > window.innerWidth - 10) {
                leftPos = window.innerWidth - actualWidth - 10;
            }

            // Ensure it doesn't overflow left edge either
            leftPos = Math.max(10, leftPos);

            megaMenu.style.left = `${leftPos}px`;
            megaMenu.style.top = `${headerHeight}px`;
            megaMenu.style.width = 'auto';
            megaMenu.style.maxWidth = 'min(600px, 95vw)';

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
            } else {
                if (!window.location.pathname.endsWith('index.html')) {
                    window.location.href = `index.html?cat=${catId}`;
                } else {
                    currentCatId = catId;
                    renderSubcategories(catId);
                    updateActiveNav(catId);
                    closeMegaMenu();
                }
            }
        });
    });
}

// Handle hover on the mega menu itself to keep it open
// Handle hover for Mega Menu (keeping it open while inside)
if (megaMenu) {
    megaMenu.addEventListener('mouseenter', () => {
        clearTimeout(hoverTimeout);
    });

    megaMenu.addEventListener('mouseleave', (e) => {
        // Find if we're moving towards the header area
        const rect = megaMenu.getBoundingClientRect();
        const header = document.querySelector('.app-header');
        const headerRect = header ? header.getBoundingClientRect() : null;

        // If moving upwards towards header, longer delay to prevent flicker
        if (e.clientY < rect.top && headerRect && e.clientY > headerRect.top) {
            hoverTimeout = setTimeout(closeMegaMenu, 300);
        } else {
            // Moving away to sides or bottom, close faster
            hoverTimeout = setTimeout(closeMegaMenu, 100);
        }
    });
}


function updateActiveNav(id) {
    navList.querySelectorAll('.nav-item').forEach(x => {
        x.classList.remove('active');
        if (x.dataset.id === id) x.classList.add('active');
    });
}

function renderSubcategories(catId, filter = '') {
    const cat = categories.find(c => c.id === catId);

    // Show Page Header and Breadcrumb
    const pageHeader = document.querySelector('.page-header');
    if (pageHeader) pageHeader.style.display = 'block';
    const breadcrumb = document.getElementById('breadcrumb');
    if (breadcrumb) {
        breadcrumb.style.display = 'block';
        breadcrumb.innerHTML = `<a href="home.html" style="color:inherit; text-decoration:none;">HOME</a> / ${cat.label}`;
    }

    let subs = subcategories[catId] || [];

    // Filter
    if (filter) {
        subs = subs.filter(s => s.name.toLowerCase().includes(filter));
    }

    if (subs.length === 0) {
        contentArea.innerHTML = `<div class="card animate-in"><div class="card-content"><h3>No Items Found</h3><p>Try a different search term.</p></div></div>`;
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
        <div class="card animate-in" style="animation-delay: ${i * 50}ms; cursor: pointer; padding: 16px; display: flex; flex-direction: column;" onclick="showProducts('${s.name}', '${catId}')" data-sub="${s.name}">
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
    html += '</div><div id="productsHolder"></div>';
    contentArea.innerHTML = html;

    addCardHandlers();
}

function renderHome() {
    const pageHeader = document.querySelector('.page-header');
    if (pageHeader) pageHeader.style.display = 'none';

    document.getElementById('pageTitle').textContent = 'Welcome';
    document.getElementById('breadcrumb').innerHTML = `<a href="#" onclick="renderHome(); return false;" style="color:inherit; text-decoration:none;">HOME</a>`;
    currentCatId = 'home';
    sessionStorage.removeItem('activeCategory');

    document.querySelectorAll('.cat').forEach(c => {
        c.classList.remove('active');
        if (c.dataset.id === 'home') c.classList.add('active');
    });

    const html = `
    <!-- Hero Section -->
    <section class="hero-section animate-in">
        <div class="hero-banner">
            <div class="hero-content">
                <span class="hero-tag">New Collection 2024</span>
                <h1 class="hero-title">Elevate Your Lifestyle With Go Royal</h1>
                <p class="hero-desc">Discover a world of premium products curated just for you. From high-end electronics to luxury watches and home decor.</p>
                <div style="display: flex; gap: 16px;">
                    <a href="#" class="hero-btn" onclick="document.querySelector('.nav-item[data-id=electronics]').click(); return false;">Shop Now</a>
                    <a href="#" class="hero-btn" style="background: transparent; border: 2px solid white; color: white;" onclick="document.querySelector('.nav-item[data-id=watches]').click(); return false;">View Collections</a>
                </div>
            </div>
            <div class="hero-visual">
                <img src="Images/logo.png" alt="Logo" style="width: 250px; filter: drop-shadow(0 0 20px rgba(0,0,0,0.5));">
            </div>
        </div>
    </section>

    <!-- Top Categories -->
    <div class="section-header animate-in">
        <h2 class="section-title">Shop by Category</h2>
        <a href="#" class="meta" style="color: var(--accent); text-decoration: none; font-weight: 700;">View All</a>
    </div>
    <div class="subgrid animate-in" style="margin-bottom: 60px;">
        ${['electronics', 'watches', 'home-decor', 'automobiles'].map((catId, i) => {
        const cat = categories.find(c => c.id === catId);
        const count = subcategories[catId]?.length || 0;
        return `
            <div class="card" style="animation-delay: ${i * 100}ms;" onclick="handleSidebarClick('${catId}')">
                <div class="card-content">
                     <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:24px;">
                        <div style="background:var(--accent); color:black; width:48px; height:48px; border-radius:14px; display:flex; align-items:center; justify-content:center; font-size:1.5rem;">
                            <i class="${cat.icon}"></i>
                        </div>
                        <i class="ri-arrow-right-up-line" style="color:var(--text-secondary); font-size: 1.2rem;"></i>
                     </div>
                     <div class="title">${cat.label}</div>
                     <div class="meta">${count} Collections</div>
                </div>
            </div>
            `;
    }).join('')}
    </div>

    <!-- Trending Products -->
    <div class="section-header animate-in">
        <h2 class="section-title">Trending Now</h2>
    </div>
    <div class="product-grid animate-in">
        <div class="product-card" onclick="window.open('https://www.rolex.com', '_blank')">
            <div class="product-img" style="background-image: url('https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80')">
                <span class="product-badge">Top Rated</span>
            </div>
            <div class="product-info">
                <div class="product-name">Royal Chronograph Z1</div>
                <div class="meta">Exquisite Craftsmanship</div>
            </div>
        </div>
        <div class="product-card" onclick="window.open('https://www.apple.com', '_blank')">
            <div class="product-img" style="background-image: url('https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80')">
                <span class="product-badge">Sponsored</span>
            </div>
            <div class="product-info">
                <div class="product-name">Neo Buds Wireless Pro</div>
                <div class="meta">Next-Gen Audio</div>
            </div>
        </div>
        <div class="product-card" onclick="window.open('https://www.hermanmiller.com', '_blank')">
            <div class="product-img" style="background-image: url('https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=500&q=80')">
            </div>
            <div class="product-info">
                <div class="product-name">Luxe Velvet Lounge Chair</div>
                <div class="meta">Pure Comfort</div>
            </div>
        </div>
    </div>


    <!-- Recently Viewed (Dynamic) -->
    ${(() => {
            const recent = JSON.parse(localStorage.getItem('recentlyViewed') || '[]');
            if (recent.length === 0) return '';

            return `
        <div class="section-header animate-in">
            <h2 class="section-title">Continue Browsing</h2>
        </div>
        <div class="subgrid animate-in" style="margin-bottom: 60px;">
            ${recent.map((subName, i) => {
                // Find sub info
                let subObj = null;
                Object.values(subcategories).forEach(list => {
                    const found = list.find(s => s.name === subName);
                    if (found) subObj = found;
                });
                if (!subObj) return '';

                return `
                <div class="card" style="animation-delay: ${i * 100}ms;" onclick="showProducts('${subName}')">
                    <div style="width: 100%; height: 120px; background: url('${subObj.img}') center/cover no-repeat; border-radius: 12px; margin-bottom: 12px;"></div>
                    <div class="title" style="font-size: 1rem;">${subName}</div>
                    <div class="meta">Recently Viewed</div>
                </div>
                `;
            }).join('')}
        </div>
        `;
        })()}

    <!-- Newsletter Section -->
    <section class="newsletter-section animate-in" style="margin-bottom: 80px;">
        <h2 class="newsletter-title">Join the Royal Club</h2>
        <p class="newsletter-desc">Subscribe to our newsletter and be the first to know about new arrivals, exclusive offers, and premium events.</p>
        <div class="newsletter-form">
            <input type="email" class="newsletter-input" placeholder="Enter your email address">
            <button class="newsletter-btn" onclick="addToCart('Subscription')">Subscribe</button>
        </div>
    </section>

    <!-- Brand Showcase Section -->
    <section class="brand-section animate-in">
        <h2 class="section-title">Trusted by Global Icons</h2>
        <p class="meta" style="margin-bottom: 40px;">Partnering with the world's most prestigious brands to bring you excellence.</p>
        <div class="brand-grid">
            <div class="brand-item"><img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" class="brand-showcase-img" alt="Apple"></div>
            <div class="brand-item"><img src="https://upload.wikimedia.org/wikipedia/en/thumb/9/95/Rolex_logo.svg/1200px-Rolex_logo.svg.png" class="brand-showcase-img" alt="Rolex"></div>
            <div class="brand-item"><img src="https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg" class="brand-showcase-img" alt="Tesla"></div>
            <div class="brand-item"><img src="https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg" class="brand-showcase-img" alt="Samsung"></div>
            <div class="brand-item"><img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Mercedes_Benz_Logo.svg" class="brand-showcase-img" alt="Mercedes"></div>
            <div class="brand-item"><img src="https://upload.wikimedia.org/wikipedia/commons/0/05/Sony_logo.svg" class="brand-showcase-img" alt="Sony"></div>
        </div>
    </section>

    <!-- Partner CTA Section -->
    <section class="partner-cta animate-in">
        <div class="partner-title">Elevate Your Brand To Royalty</div>
        <p class="partner-desc">Are you a premium brand looking to reach the elite? Join the Go Royal marketplace and showcase your products to our global audience of luxury connoisseurs.</p>
        <button class="gold-btn" onclick="addToCart('Partnership Application Sent')">Apply to Sell</button>
        <div style="margin-top: 32px;">
            <a href="#" class="meta" style="color: #d4af37; text-decoration: none; font-weight: 700;">Learn about Royal Partnerships <i class="ri-arrow-right-line"></i></a>
        </div>
    </section>


    ${renderFooter()}
    `;
    contentArea.innerHTML = html;
    addCardHandlers();
}

function addCardHandlers() {
    contentArea.querySelectorAll('.card').forEach(card => {
        addTiltEffect(card);
    });
}

function showProducts(sub, preferredCatId = null) {
    // Find image for this subcategory
    let subImg = '';
    let catLabel = 'Products';
    let parentCatId = '';
    let nestedItems = [];

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
                const parent = categories.find(c => c.id === catId);
                if (parent) catLabel = parent.label;
                return true;
            }
        }
        return false;
    };

    // 1. Try preferred cat first
    if (preferredCatId && searchInCat(preferredCatId)) {
        // Found in preferred cat
    } else {
        // 2. Search all cats
        Object.keys(subcategories).some(catId => {
            return searchInCat(catId);
        });
    }

    if (!subImg) subImg = 'Images/logo.png';

    // If there's nested items and we are on index.html, show them
    if (nestedItems.length > 0 && window.location.pathname.endsWith('index.html')) {
        renderItemsList(sub, nestedItems, subImg, catLabel, parentCatId);
    } else {
        // Redirect to product page with IDs
        window.location.href = `product.html?sub=${encodeURIComponent(sub)}&img=${encodeURIComponent(subImg)}&cat=${encodeURIComponent(catLabel)}&catId=${encodeURIComponent(parentCatId)}`;
    }
}

function renderItemsList(subName, items, subImg, catLabel, catId) {
    const pageHeader = document.querySelector('.page-header');
    if (pageHeader) pageHeader.style.display = 'block';

    document.getElementById('pageTitle').textContent = subName;

    const breadcrumb = document.getElementById('breadcrumb');
    if (breadcrumb) {
        breadcrumb.style.display = 'block';
        breadcrumb.innerHTML = `<a href="home.html" style="color:inherit; text-decoration:none;">HOME</a> / <a href="index.html?cat=${catId}" style="color:inherit; text-decoration:none;">${catLabel}</a> / ${subName}`;
    }

    let html = '<div class="subgrid">';
    items.forEach((item, i) => {
        html += `
        <div class="card animate-in" style="animation-delay: ${i * 50}ms; cursor: pointer; padding: 16px; display: flex; align-items: center;" onclick="showProducts('${item}', '${catId}')">
             <div style="flex: 1; padding-right: 12px;">
                <div class="title" style="margin-bottom: 2px; font-size: 1.15rem; font-weight: 700;">${item}</div>
                <div class="meta" style="font-size: 0.85rem; opacity: 0.8;">View Collection</div>
            </div>
            <div style="width: 50px; height: 50px; background: var(--glass-bg); border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                <i class="ri-arrow-right-line" style="color: var(--accent);"></i>
            </div>
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

    if (!sub) {
        window.location.href = 'home.html';
        return;
    }

    // Hide Mega Menu and Overlay if open
    closeMegaMenu();

    // Show Page Header and Breadcrumb Container
    const pageHeader = document.querySelector('.page-header');
    if (pageHeader) pageHeader.style.display = 'block';

    const breadcrumbContainer = document.getElementById('breadcrumbContainer');
    if (breadcrumbContainer) breadcrumbContainer.style.display = 'flex';

    document.getElementById('pageTitle').textContent = sub;

    const catLink = catId ? `<a href="index.html?cat=${catId}" style="color:inherit; text-decoration:none;">${cat}</a>` : `<span>${cat}</span>`;
    const breadcrumb = document.getElementById('breadcrumb');
    if (breadcrumb) {
        breadcrumb.innerHTML = `<a href="home.html" style="color:inherit; text-decoration:none;">HOME</a> / ${catLink} / ${sub}`;
    }

    // Render Products: Top Rated on Left, Sponsored on Right
    const subObj = Object.values(subcategories).flat().find(s => s.name === sub);
    const topRatedUrl = subObj?.topRatedUrl || '#';
    const sponsoredUrl = subObj?.sponsoredUrl || '#';

    const products = [
        { type: 'top-rated', label: 'Top Rated', name: `${sub} - Elite Choice`, url: topRatedUrl },
        { type: 'sponsored', label: 'Sponsored Product', name: `${sub} - Royal Edition`, url: sponsoredUrl }
    ];


    let html = '<div class="products">';
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


    // Add same CTA and Footer as home for consistency
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

// --- Interactivity ---
function addToCart(name) {
    // Legacy function for partnership toasts
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

    // Haptic feedback if available
    if (navigator.vibrate) navigator.vibrate(50);

    setTimeout(() => {
        toast.style.transition = 'all 0.3s ease';
        toast.style.opacity = '0';
        toast.style.transform = 'translate(-50%, 20px)';
        setTimeout(() => toast.remove(), 300);
    }, 2000);
}

// Bottom Nav Logic
document.querySelectorAll('.bottom-nav .nav-item').forEach(item => {
    item.addEventListener('click', () => {
        document.querySelectorAll('.bottom-nav .nav-item').forEach(x => x.classList.remove('active'));
        item.classList.add('active');

        // Simple routing simulation
        const text = item.querySelector('span').textContent;
        if (text === 'Home') {
            renderHome();
        }
    });
});

// --- Effects ---
// Global Proximity Spotlight
document.addEventListener('mousemove', (e) => {
    document.querySelectorAll('.card').forEach(card => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
    });
});

// 3D Tilt
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

// Ripple
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

// --- Advanced UX Functions ---
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
            <div class="meta">© 2024 Go Royal. All rights reserved.</div>
            <div style="display: flex; gap: 24px;">
                <a href="#" class="meta" style="text-decoration:none">Privacy Policy</a>
                <a href="#" class="meta" style="text-decoration:none">Sitemap</a>
            </div>
        </div>
    </footer>
    `;
}

