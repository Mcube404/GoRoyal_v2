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
    'automobiles': [
        { name: 'Bikes', img: 'Images/bike.png' },
        { name: 'Cars', img: 'Images/car1.png' },
        { name: 'Helmets', img: 'Images/helmet.png' },
        { name: 'Bike Accessories', img: 'Images/bikeacc.png' },
        { name: 'Car Accessories', img: 'Images/caracc.png' },
        { name: 'EV', img: 'Images/ev1.png' }
    ],
    'watches': [
        { name: 'Smart Watch', img: 'Images/smartw.png' },
        { name: 'Analog Watch', img: 'Images/analogw.png' },
        { name: 'Digital Watch', img: 'Images/digitalw.png' },
        { name: 'Digi Log Watch', img: 'Images/digilogw.png' },
        { name: 'Vintage Series', img: 'Images/vintagew.png' }
    ],
    'electronics': [
        { name: 'Television', img: 'Images/tv.png' },
        { name: 'Mobile', img: 'Images/phone.png' },
        { name: 'Laptop', img: 'Images/laptop.png' },
        { name: 'Gaming', img: 'Images/gaming.png' },
        { name: 'Camera', img: 'Images/camera1.png' },
        { name: 'Headphones', img: 'Images/headphone.png' },
        { name: 'Monitor', img: 'Images/monitor.png' },
        { name: 'Speaker', img: 'Images/speakers.png' }
    ],
    'home-appliances': [
        { name: 'Refrigerator', img: 'Images/fridge.png' },
        { name: 'AC', img: 'Images/ac.png' },
        { name: 'Washing Machine', img: 'Images/washingmachine.png' },
        { name: 'Dish Washer', img: 'Images/dishwasher.png' },
        { name: 'Air Fryer', img: 'Images/airfyer.png' },
        { name: 'Kitchen Supplies', img: 'Images/kitchensupply.png' },
        { name: 'Air Purifier', img: 'Images/airpurifier.png' }
    ],
    'bags-footwear': [
        { name: 'Womens Footwear', img: 'Images/womensfootwear.png' },
        { name: 'Mens Footwear', img: 'Images/mensfootwear.png' },
        { name: 'Kids Footwear', img: 'Images/kidsfootwear.png' },
        { name: 'Women Bags', img: 'Images/womensbag.png' },
        { name: 'Men Bags', img: 'Images/mensbag.png' },
        { name: 'Travel Bags', img: 'Images/travelbag.png' }
    ],
    'home-decor': [
        { name: 'Wood Furniture', img: 'Images/furniture.png' },
        { name: 'Kitchen Storage', img: 'Images/kitchenstorage.png' },
        { name: 'Home Textile', img: 'Images/hometextile.png' },
        { name: 'Bedroom Accessories', img: 'Images/bedroom.png' }
    ],
    'fitness': [
        { name: 'Treadmill', img: 'Images/treadmill.png' },
        { name: 'Fitness Bike', img: 'Images/fitnessbike.png' },
        { name: 'Walking Pods', img: 'Images/walkingpad.png' },
        { name: 'Weights', img: 'Images/weights.png' },
        { name: 'Home Gym', img: 'Images/homegym.png' },
        { name: 'Gym Accessories', img: 'Images/gymacc.png' }
    ],
    'sports': [
        { name: 'Cricket', img: 'Images/cricket.png' },
        { name: 'Football', img: 'Images/football.png' },
        { name: 'Badminton', img: 'Images/badminton.png' },
        { name: 'Swimming', img: 'Images/swimming.png' },
        { name: 'Table Tennis', img: 'Images/tabletennis.png' },
        { name: 'Boxing', img: 'Images/boxing.png' }
    ],
    'kids-toddlers': [
        { name: 'Girls Clothing', img: 'https://images.unsplash.com/photo-1621452773781-0f992fd1f5cb?w=400&q=80' },
        { name: 'Boys Clothing', img: 'https://images.unsplash.com/photo-1519457431-44ccd64a579b?w=400&q=80' },
        { name: 'Baby Care', img: 'https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=400&q=80' },
        { name: 'Kids Toys', img: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=400&q=80' }
    ],
    'pet-supplies': [
        { name: 'Dog Food', img: 'Images/dog.png' },
        { name: 'Cat Food', img: 'Images/cat.png' },
        { name: 'Birds', img: 'https://images.unsplash.com/photo-1444464666168-49d633b86797?w=400&q=80' },
        { name: 'Aquarium', img: 'https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?w=400&q=80' }
    ],
    'men': [
        { name: 'Top Wear', img: 'https://images.unsplash.com/photo-1550246140-5119ae4790b8?w=400&q=80' },
        { name: 'Bottom Wear', img: 'https://images.unsplash.com/photo-1504198458649-3128b932f49e?w=400&q=80' },
        { name: 'Inner Wear', img: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&q=80' },
        { name: 'Ethnic Wear', img: 'https://images.unsplash.com/photo-1507679799987-9755eb1e1c17?w=400&q=80' },
        { name: 'Sports Wear', img: 'https://images.unsplash.com/photo-1518459031867-a89b944bffe4?w=400&q=80' },
        { name: 'Winter Wear', img: 'https://images.unsplash.com/photo-1591559489278-654cb2960f25?w=400&q=80' },
        { name: 'Accessories', img: 'https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=400&q=80' }
    ],
    'women': [
        { name: 'Top Wear', img: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&q=80' },
        { name: 'Bottom Wear', img: 'https://images.unsplash.com/photo-1475178626620-a4d074967329?w=400&q=80' },
        { name: 'Inner Wear', img: 'https://images.unsplash.com/photo-1574312290483-e18985c54d3e?w=400&q=80' },
        { name: 'Ethnic Wear', img: 'https://images.unsplash.com/photo-1627885744838-898075677d33?w=400&q=80' },
        { name: 'Sports Wear', img: 'https://images.unsplash.com/photo-1493655161922-ef98929de9d8?w=400&q=80' },
        { name: 'Accessories', img: 'https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?w=400&q=80' }
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

let currentCatId = null;

// --- Initialization ---
initTheme();
renderNav();
renderSidebarMenu(); // New
updateMenuPosition(); // Initial position

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
const megaMenu = document.getElementById('megaMenu');

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
    // Don't remove overlay active here if sidebar is open? 
    // Simplified: overlay click closes everything.
    // If we want to close just mega menu programmatically, we might need to check.
    // But usually closeMegaMenu is called when clicking a link or overlay.
    // If sidebar is active, overlay is active.
    if (!mobileSidebar.classList.contains('active')) {
        overlay.classList.remove('active');
    }
}

// Sidebar Rendering
function renderSidebarMenu() {
    if (!sidebarContent) return;
    sidebarContent.innerHTML = categories.map(cat => `
        <div class="sidebar-item" onclick="handleSidebarClick('${cat.id}')">
            <i class="${cat.icon}"></i> ${cat.label}
        </div>
    `).join('');
}

function handleSidebarClick(catId) {
    closeSidebar();
    const cat = categories.find(c => c.id === catId);
    if (!cat) return;

    // Logic: Navigate to category
    if (catId === 'home') {
        renderHome();
    } else {
        renderSubcategories(catId);
        updateActiveNav(catId);
    }
}

// --- Theme Logic ---
function initTheme() {
    const saved = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', saved);
    updateToggleIcon(saved);

    themeToggle.addEventListener('click', (e) => {
        createRipple(e);
        const current = document.documentElement.getAttribute('data-theme');
        const next = current === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', next);
        localStorage.setItem('theme', next);
        updateToggleIcon(next);
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
const urlParams = new URLSearchParams(window.location.search);
const urlCat = urlParams.get('cat');
const savedCat = sessionStorage.getItem('activeCategory');
const savedSearch = sessionStorage.getItem('searchQuery');

// Restore Search
if (savedSearch) {
    searchInput.value = savedSearch;
}

// Restore Category or Default
if (urlCat) {
    // URL param takes precedence (Deep Linking)
    currentCatId = urlCat;
    sessionStorage.setItem('activeCategory', urlCat);
    renderNav();
    renderSubcategories(urlCat);
    updateActiveNav(urlCat);
} else if (savedCat) {
    currentCatId = savedCat;
    renderNav();
    renderSubcategories(savedCat);
    updateActiveNav(savedCat);
} else {
    renderNav();
    renderHome();
}

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
    // Hide Page Header
    const pageHeader = document.querySelector('.page-header');
    if (pageHeader) pageHeader.style.display = 'block';

    document.getElementById('pageTitle').textContent = `Search: "${term}"`;
    document.getElementById('breadcrumb').innerHTML = `<a href="#" onclick="renderHome(); return false;" style="color:inherit; text-decoration:none;">HOME</a> / Search`;

    if (results.length === 0) {
        contentArea.innerHTML = `<div class="card animate-in"><div class="card-content"><h3>No Results Found</h3><p>We couldn't find matches for "${term}". Try checking your spelling or use different keywords.</p></div></div>`;
        return;
    }

    let html = '<div class="subgrid">';
    results.forEach((item, i) => {
        const s = item.sub;
        html += `
        <div class="card animate-in" style="animation-delay: ${i * 50}ms; cursor: pointer; padding: 12px; display: flex; align-items: center;" data-sub="${s.name}">
            <div style="flex: 1; padding-right: 12px;">
                <div class="title" style="margin-bottom: 2px; font-size: 1.1rem;">${s.name}</div>
                <div class="meta" style="font-size: 0.85rem;">In ${item.catLabel}</div>
            </div>
            <div style="width: 70px; height: 70px; background: url('${s.img}') center/cover no-repeat; border-radius: 12px; flex-shrink: 0;"></div>
        </div>`;
    });
    html += '</div><div id="productsHolder"></div>';
    contentArea.innerHTML = html;

    addCardHandlers();
}

// ... (filterAll function)

// --- Rendering ---

// Reformatted for "Slide Down" context menu
function renderMegaMenu(catId) {
    const container = document.getElementById('megaMenuContent');
    if (!container) return;

    // If specific cat, show only that
    const cat = categories.find(c => c.id === catId);
    if (!cat) return;

    const subs = subcategories[cat.id] || [];

    container.innerHTML = `
        <div class="mega-cat-group" style="border:none;">
            <div class="mega-cat-title" style="font-size: 2rem; margin-bottom: 24px;">
                <i class="${cat.icon}"></i> ${cat.label}
            </div>
            <div class="mega-sub-grid" style="grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));">
                ${subs.map(sub => `
                    <div class="mega-sub-item" onclick="handleMegaSubClick('${sub.name}', '${cat.id}')" style="padding: 16px; font-size: 1.1rem;">
                        <div style="width: 50px; height: 50px; background: url('${sub.img}') center/cover no-repeat; border-radius: 10px;"></div>
                        ${sub.name}
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

function renderNav() {
    navList.innerHTML = categories.map((c, i) => `
    <div class="nav-item animate-in" style="animation-delay: ${i * 40}ms" data-id="${c.id}">
        ${c.label}
    </div>
    `).join('');

    navList.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', (e) => {
            createRipple(e);

            const catId = item.dataset.id;

            if (catId === 'home') {
                closeMegaMenu();
                renderHome();
            } else {
                // Standard Navigation: Go to Category Page
                // We removed the Mega Menu trigger to prevent duplicate views
                closeMegaMenu(); // Ensure menu is closed if open
                currentCatId = catId;
                renderSubcategories(catId);
                updateActiveNav(catId);
            }
        });
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

    // Show Page Header
    const pageHeader = document.querySelector('.page-header');
    if (pageHeader) pageHeader.style.display = 'block';

    document.getElementById('pageTitle').textContent = cat.label;
    document.getElementById('breadcrumb').innerHTML = `<a href="#" onclick="renderHome(); return false;" style="color:inherit; text-decoration:none;">HOME</a> / ${cat.label}`;

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
        html += `
        <div class="card animate-in" style="animation-delay: ${i * 50}ms; cursor: pointer; padding: 12px; display: flex; align-items: center;" data-sub="${s.name}">
            <div style="flex: 1; padding-right: 12px;">
                <div class="title" style="margin-bottom: 2px; font-size: 1.1rem;">${s.name}</div>
                <div class="meta" style="font-size: 0.85rem;">View Top Products</div>
            </div>
            <div style="width: 70px; height: 70px; background: url('${s.img}') center/cover no-repeat; border-radius: 12px; flex-shrink: 0;"></div>
        </div>`;
    });
    html += '</div><div id="productsHolder"></div>';
    contentArea.innerHTML = html;

    addCardHandlers();
}

function renderHome() {
    // Hide Page Header for Home (it has its own banner)
    const pageHeader = document.querySelector('.page-header');
    if (pageHeader) pageHeader.style.display = 'none';

    document.getElementById('pageTitle').textContent = 'Welcome';
    document.getElementById('breadcrumb').innerHTML = `<a href="#" onclick="renderHome(); return false;" style="color:inherit; text-decoration:none;">HOME</a>`;
    currentCatId = 'home';
    sessionStorage.removeItem('activeCategory');

    // Highlight Home in sidebar
    document.querySelectorAll('.cat').forEach(c => {
        c.classList.remove('active');
        if (c.dataset.id === 'home') c.classList.add('active');
    });

    // Featured / Welcome Content
    const html = `
    <div class="animate-in" style="margin-bottom: 32px;">
        <div style="background: linear-gradient(135deg, var(--mesh-1), var(--mesh-3)); border-radius: 24px; padding: 40px; color: white; position: relative; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.2);">
            <div style="position: relative; z-index: 2;">
                <h2 style="font-size: 2.5rem; margin-bottom: 12px;">Welcome to Go Royal</h2>
                <p style="font-size: 1.2rem; opacity: 0.9; max-width: 600px;">Experience premium shopping with our curated selection of top-rated products across all categories.</p>
            </div>
             <div style="position: absolute; right: -50px; bottom: -50px; width: 200px; height: 200px; background: rgba(255,255,255,0.2); border-radius: 50%; filter: blur(40px);"></div>
        </div>
    </div>

    <h3 class="animate-in" style="margin-bottom: 24px;">Top Categories</h3>
    <div class="subgrid">
        ${['electronics', 'watches', 'home-decor', 'automobiles'].map((catId, i) => {
        const cat = categories.find(c => c.id === catId);
        // Use a representative image from subcategories
        const img = subcategories[catId][0]?.img || '';
        return `
            <div class="card animate-in" style="animation-delay: ${i * 100}ms; cursor: pointer;" onclick="document.querySelector('.cat[data-id=${catId}]').click()">
                <div class="card-content">
                     <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:16px;">
                        <div style="background:var(--accent); color:white; width:40px; height:40px; border-radius:12px; display:flex; align-items:center; justify-content:center; font-size:1.2rem;">
                            <i class="${cat.icon}"></i>
                        </div>
                        <i class="ri-arrow-right-up-line" style="color:var(--text-secondary)"></i>
                     </div>
                     <div class="title">${cat.label}</div>
                     <div class="meta">${subcategories[catId].length} Subcategories</div>
                </div>
            </div>
            `;
    }).join('')}
    </div>
    `;
    contentArea.innerHTML = html;
}

function addCardHandlers() {
    contentArea.querySelectorAll('.card').forEach(card => {
        addTiltEffect(card);
        card.addEventListener('click', (e) => {
            createRipple(e);

            // Add press effect
            card.style.transition = 'transform 0.1s cubic-bezier(0.4, 0, 0.2, 1)';
            card.style.transform = 'scale(0.95)';

            setTimeout(() => {
                card.style.transform = 'scale(1)';
            }, 100);

            // Delay redirection slightly to show effect
            setTimeout(() => {
                showProducts(card.dataset.sub);
            }, 300);
        });
    });
}

function showProducts(sub) {
    // Find image for this subcategory
    let subImg = '';
    let catLabel = 'Products';
    let parentCatId = '';

    // Search all cats
    Object.keys(subcategories).forEach(catId => {
        const list = subcategories[catId];
        const found = list.find(s => s.name === sub);
        if (found) {
            subImg = found.img;
            parentCatId = catId;
            const parent = categories.find(c => c.id === catId);
            if (parent) catLabel = parent.label;
        }
    });

    if (!subImg) subImg = 'Images/logo.png';

    // Redirect to product page with IDs
    window.location.href = `product.html?sub=${encodeURIComponent(sub)}&img=${encodeURIComponent(subImg)}&cat=${encodeURIComponent(catLabel)}&catId=${encodeURIComponent(parentCatId)}`;
}

// --- Interactivity ---
function addToCart(name) {
    // Show toast
    const toast = document.createElement('div');
    toast.className = 'toast animate-in';
    toast.innerHTML = `<i class="ri-checkbox-circle-fill" style="color:#4ade80; margin-right:8px; font-size:1.2rem"></i> <span style="font-weight:500">${name}</span> added in cart`;

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
