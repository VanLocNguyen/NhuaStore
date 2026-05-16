
//1. DỮ LIỆU VÀ CẤU HÌNH (Data & Constants)
const products = [
    {
        id: "exia-repair-2",
        name: "HG00 1/144 Gundam Exia Repair II",
        category: "hg",
        thumbnail: "HG 00 1-144 Gundam Exia Repair 2.jpg",
        images: [
            "HG 00 1-144 Gundam Exia Repair 2.jpg",
            "HG 00 1-144 Gundam Exia Repair 2 (2).jpg",
            "HG 00 1-144 Gundam Exia Repair 2 (3).jpg"
        ],
        price: 350000,
        desc: "Phiên bản nâng cấp cuối cùng của Exia trong season 2, tối ưu hóa hệ thống GN Drive và các đường dẫn năng lượng."
    },
    {
        id: "rg-nu-gundam",
        name: "RG 1/144 RX-93 Nu Gundam",
        category: "rg",
        thumbnail: "RG 1-144 Nu Gundam.jpg",
        images: ["RG 1-144 Nu Gundam.jpg", "RG 1-144 Nu Gundam (2).jpg", "RG 1-144 Nu Gundam (3).jpg", "RG 1-144 Nu Gundam (4).jpg"],
        price: 950000,
        desc: "Real Grade RX-93 Nu Gundam từ Char’s Counterattack, mobile suit của Amuro Ray với hệ thống Fin Funnel nổi tiếng."
    },
    {
        id: "rg-rx-78-2-ver2",
        name: "RG 1/144 RX-78-2 Gundam Ver. 2.0",
        category: "rg",
        thumbnail: "RG 1-144 RX-78-2 GUNDAM Ver. 2.0.jpg",
        images: ["RG 1-144 RX-78-2 GUNDAM Ver. 2.0.jpg", "RG 1-144 RX-78-2 GUNDAM Ver. 2.0 (2).jpg", "RG 1-144 RX-78-2 GUNDAM Ver. 2.0 (3).jpg"],
        price: 850000,
        desc: "Phiên bản nâng cấp Real Grade RX-78-2 Gundam Ver. 2.0 kỷ niệm 45 năm Gundam, khung xương chi tiết và màu sắc chuẩn nguyên tác."
    },
    {
        id: "rg-wing-gundam-ew",
        name: "RG 1/144 Wing Gundam EW",
        category: "rg",
        thumbnail: "RG 1-144 Wing Gundam EW.jpg",
        images: ["RG 1-144 Wing Gundam EW.jpg", "RG 1-144 Wing Gundam EW (2).jpg", "RG 1-144 Wing Gundam EW (3).jpg", "RG 1-144 Wing Gundam EW (4).jpg"],
        price: 900000,
        desc: "Real Grade Wing Gundam EW với khả năng biến đổi sang Bird Mode, thiết kế cánh đặc trưng và màu sắc nổi bật."
    },
    {
        id: "mg-gundam-vidar",
        name: "MG 1/100 Gundam Vidar",
        category: "mg",
        thumbnail: "MG 1-100 Gundam Vidar.jpg",
        images: ["MG 1-100 Gundam Vidar.jpg", "MG 1-100 Gundam Vidar (2).jpg", "MG 1-100 Gundam Vidar (3).jpg"],
        price: 1200000,
        desc: "Mô hình Master Grade Gundam Vidar từ series Iron-Blooded Orphans, nổi bật với thiết kế lạnh lùng, vũ khí đa dạng và khung xương chi tiết."
    },
    {
        id: "mg-narrative-gundam-c-packs",
        name: "MG 1/100 Narrative Gundam C Packs Ver.Ka",
        category: "mg",
        thumbnail: "MG 1-100 NARRATIVE GUNDAM C PACKS Ver Ka.jpg",
        images: ["MG 1-100 NARRATIVE GUNDAM C PACKS Ver Ka.jpg", "MG 1-100 NARRATIVE GUNDAM C PACKS Ver Ka (2).jpg", "MG 1-100 NARRATIVE GUNDAM C PACKS Ver Ka (3).jpg"],
        price: 1350000,
        desc: "Phiên bản Ver.Ka của Narrative Gundam C Packs với chi tiết tinh xảo, khung xương chắc chắn và hệ thống vũ khí đặc trưng."
    },
    {
        id: "hg-gundam-lfrith",
        name: "HG 1/144 Gundam Lfrith",
        category: "hg",
        thumbnail: "HG WFM 1-144 Gundam Lfrith.jpg",
        images: ["HG WFM 1-144 Gundam Lfrith.jpg", "HG WFM 1-144 Gundam Lfrith (2).jpg", "HG WFM 1-144 Gundam Lfrith (3).jpg"],
        price: 450000,
        desc: "High Grade Gundam Lfrith từ series The Witch from Mercury Prologue. Thiết kế hiện đại, màu trắng hồng đặc trưng."
    },
    {
        id: "mg-freedom-gundam-ver2",
        name: "MG 1/100 Freedom Gundam Ver. 2.0",
        category: "mg",
        thumbnail: "MG 1-100 FREEDOM GUNDAM VER 2.0.png",
        images: ["MG 1-100 FREEDOM GUNDAM VER 2.0.png", "MG 1-100 FREEDOM GUNDAM VER 2.0 (2).jpg", "MG 1-100 FREEDOM GUNDAM VER 2.0 (3).jpg"],
        price: 1300000,
        desc: "Master Grade Freedom Gundam Ver. 2.0 từ Gundam SEED. Khung xương cải tiến, cánh mở rộng linh hoạt."
    },
    {
        id: "mighty-strike-freedom",
        name: "HGCE 1/144 Mighty Strike Freedom Gundam",
        category: "hg",
        thumbnail: "HG CE 1-144 MIGHTY STRIKE FREEDOM GUNDAM.jpg",
        images: ["HG CE 1-144 MIGHTY STRIKE FREEDOM GUNDAM.jpg"],
        price: 750000,
        desc: "High Grade Cosmic Era Mighty Strike Freedom Gundam từ Gundam SEED Freedom."
    },
    {
        id: "dspiae-cutting-mat-a4",
        name: "Bảng Cắt A4 DSPIAE",
        category: "tool",
        thumbnail: "BẢNG CẮT A4 DSPIAE.jpg",
        images: ["BẢNG CẮT A4 DSPIAE.jpg", "BẢNG CẮT A4 DSPIAE (2).jpg", "BẢNG CẮT A4 DSPIAE (3).jpg"],
        price: 250000,
        desc: "Thảm cắt chuyên dụng DSPIAE A4, chất liệu PVC tự phục hồi."
    },
    {
        id: "eg-build-strike-exceed-galaxy",
        name: "EG 1/144 Build Strike Exceed Galaxy",
        category: "eg",
        thumbnail: "EG ENTRY GRADE 1-144 BUILD STRIKE EXCEED GALAXY GUNDAM.jpg",
        images: ["EG ENTRY GRADE 1-144 BUILD STRIKE EXCEED GALAXY GUNDAM.jpg"],
        price: 300000,
        desc: "Entry Grade Build Strike Exceed Galaxy, dễ lắp ráp không cần keo hay sơn."
    },
    {
        id: "eg-rx-78-2-full-weapon",
        name: "EG 1/144 RX-78-2 Gundam Full Weapon Set",
        category: "eg",
        thumbnail: "EG ENTRY GRADE 1-144 RX-78-2 GUNDAM - FULL WEAPON SET.jpg",
        images: ["EG ENTRY GRADE 1-144 RX-78-2 GUNDAM - FULL WEAPON SET.jpg", "EG ENTRY GRADE 1-144 RX-78-2 GUNDAM - FULL WEAPON SET (2).jpg"],
        price: 350000,
        desc: "Entry Grade RX-78-2 Gundam Full Weapon Set, đi kèm đầy đủ vũ khí."
    },
    {
        id: "eg-strike-gundam",
        name: "EG 1/144 Strike Gundam",
        category: "eg",
        thumbnail: "EG ENTRY GRADE 1-144 STRIKE GUNDAM.jpg",
        images: ["EG ENTRY GRADE 1-144 STRIKE GUNDAM.jpg", "EG ENTRY GRADE 1-144 STRIKE GUNDAM (2).jpg"],
        price: 320000,
        desc: "Entry Grade Strike Gundam từ Gundam SEED, dễ lắp ráp, màu sắc chuẩn."
    },
    {
        id: "gundam-marker-advanced-set",
        name: "Gundam Marker Advanced Set (6 cây GMS124)",
        category: "tool",
        thumbnail: "Gundam Marker Advanced Set - Set 6 cây GMS124.jpg",
        images: ["Gundam Marker Advanced Set - Set 6 cây GMS124.jpg"],
        price: 220000,
        desc: "Bộ Gundam Marker Advanced gồm 6 màu chuyên dụng tô chi tiết."
    },
    {
        id: "dspiae-st-x-nipper",
        name: "Kềm 1 Lưỡi Bén Cao Cấp DSPIAE ST-X",
        category: "tool",
        thumbnail: "Kềm 1 lưỡi bén cao cấp Dspiae ST-X.jpg",
        images: ["Kềm 1 lưỡi bén cao cấp Dspiae ST-X.jpg"],
        price: 550000,
        desc: "Kềm cắt DSPIAE ST-X, thiết kế lưỡi đơn siêu mỏng."
    },
    {
        id: "astray-red-frame-kai",
        name: "PG 1/60 Gundam Astray Red Frame Kai",
        category: "pg",
        thumbnail: "PG 1-60 GUNDAM ASTRAY RED FRAME KAI.jpg",
        images: ["PG 1-60 GUNDAM ASTRAY RED FRAME KAI.jpg", "PG 1-60 GUNDAM ASTRAY RED FRAME KAI (2).jpg", "PG 1-60 GUNDAM ASTRAY RED FRAME KAI (3).jpg"],
        price: 6500000,
        desc: "Mẫu Perfect Grade trang bị hai thanh katana Gerbera Straight và Tiger Pierce."
    },
    {
        id: "rx0-unicorn-final",
        name: "PG 1/60 RX-0 Unicorn Gundam - Final Battle Ver",
        category: "pg",
        thumbnail: "PG 1-60 RX-0 Unicorn Gundam - Final Battle Ver.jpg",
        images: ["PG 1-60 RX-0 Unicorn Gundam - Final Battle Ver.jpg", "PG 1-60 RX-0 Unicorn Gundam - Final Battle Ver (2).jpg", "PG 1-60 RX-0 Unicorn Gundam - Final Battle Ver (3).jpg"],
        price: 7200000,
        desc: "Phiên bản Final Battle với hiệu ứng chuyển đổi giữa Unicorn Mode và Destroy Mode."
    },
    {
        id: "strike-gundam-pg",
        name: "PG 1/60 Strike Gundam",
        category: "pg",
        thumbnail: "PG 1-60 STRIKE GUNDAM.jpg",
        images: ["PG 1-60 STRIKE GUNDAM.jpg", "PG 1-60 STRIKE GUNDAM (2).jpg", "PG 1-60 STRIKE GUNDAM (3).jpg"],
        price: 6000000,
        desc: "Mẫu Perfect Grade Strike Gundam với khung xương cực kỳ chi tiết."
    },
    {
        id: "verde-buster-dx",
        name: "SD WH World Heroes Sergeant Verde Buster Gundam DX Set",
        category: "sd",
        thumbnail: "SD WH World Heroes Sergeant Verde Buster Gundam DX Set.jpg",
        images: ["SD WH World Heroes Sergeant Verde Buster Gundam DX Set.jpg"],
        price: 450000,
        desc: "Phiên bản SD World Heroes với thiết kế độc đáo, trang bị giáp DX."
    },
    {
        id: "saizo-delta-kai",
        name: "SD WH World Heroes Saizo Gundam Delta Kai",
        category: "sd",
        thumbnail: "SD WH World Heroes Saizo Gundam Delta Kai.jpg",
        images: ["SD WH World Heroes Saizo Gundam Delta Kai.jpg"],
        price: 430000,
        desc: "Mẫu SD World Heroes dựa trên Gundam Delta Kai phong cách ninja."
    }
];

const CATEGORY_LABELS = {
    eg: "Entry Grade",
    hg: "High Grade",
    rg: "Real Grade",
    mg: "Master Grade",
    pg: "Perfect Grade",
    sd: "SD / BB Senshi",
    tool: "Dụng cụ & Phụ kiện"
};


//2. CÁC HÀM TIỆN ÍCH (Utilities)

function formatPrice(price) {
    return new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND'
    }).format(price);
}

function highlightMatch(text, query) {
    if (!query) return text;
    const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`(${escaped})`, 'gi');
    return text.replace(regex, '<mark>$1</mark>');
}

function changeMainImage(src) {
    const mainImg = document.getElementById('main-img');
    if (mainImg) mainImg.src = src;
}

//3. QUẢN LÝ GIỎ HÀNG (Cart Management)
function getCart() {
    try {
        return JSON.parse(localStorage.getItem('cart')) || [];
    } catch {
        return [];
    }
}

function saveCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function updateCartCount() {
    const cart = getCart();
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    const badge = document.querySelector('.cart-count');
    if (badge) badge.innerText = count;
}

function addToCart(productId) {
    let cart = getCart();
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            thumbnail: product.thumbnail,
            quantity: 1
        });
    }
    saveCart(cart);
    updateCartCount();
    alert('Đã thêm vào giỏ hàng!');
}

function updateQty(index, change) {
    let cart = getCart();
    cart[index].quantity += change;
    if (cart[index].quantity < 1) cart[index].quantity = 1;
    saveCart(cart);
    renderCart();
}

function removeItem(index) {
    let cart = getCart();
    cart.splice(index, 1);
    saveCart(cart);
    renderCart();
}


//4. LOGIC TÌM KIẾM VÀ GỢI Ý (Search & Suggestions)

function initSearch() {
    const input = document.getElementById('search-input');
    const suggestBox = document.getElementById('search-suggestions');
    const searchBtn = document.getElementById('search-btn');

    if (!input || !suggestBox) return;

    let activeIndex = -1;

    function goToSearchResults(query) {
        if (!query.trim()) return;
        window.location.href = `sanpham.html?search=${encodeURIComponent(query.trim())}`;
    }

    input.addEventListener('input', () => {
        const query = input.value.trim().toLowerCase();
        activeIndex = -1;

        if (query.length < 1) {
            suggestBox.classList.remove('show');
            return;
        }

        const results = products.filter(p =>
            p.name.toLowerCase().includes(query) ||
            CATEGORY_LABELS[p.category]?.toLowerCase().includes(query)
        ).slice(0, 6);

        if (results.length === 0) {
            suggestBox.innerHTML = `<div class="suggestion-no-result"><i class="bi bi-search me-2"></i>Không tìm thấy cho "<b>${query}</b>"</div>`;
        } else {
            const itemsHTML = results.map((p, i) => `
                <a href="sanpham.html?id=${p.id}" class="suggestion-item" data-index="${i}">
                    <img src="img/${p.thumbnail}" alt="${p.name}">
                    <div class="suggestion-item-info">
                        <div class="suggestion-item-name">${highlightMatch(p.name, query)}</div>
                        <div class="suggestion-item-price">${formatPrice(p.price)}</div>
                        <div class="suggestion-item-category">${CATEGORY_LABELS[p.category] || p.category}</div>
                    </div>
                </a>`).join('');

            suggestBox.innerHTML = `
                <div class="suggestion-header"><i class="bi bi-stars me-1"></i>Gợi ý sản phẩm</div>
                ${itemsHTML}
                <div class="suggestion-footer" id="suggestion-search-all">
                    <i class="bi bi-search"></i> Xem tất cả cho "<b>${query}</b>"
                </div>`;
            
            document.getElementById('suggestion-search-all')?.addEventListener('click', () => goToSearchResults(input.value));
        }
        suggestBox.classList.add('show');
    });

    input.addEventListener('keydown', (e) => {
        const items = suggestBox.querySelectorAll('.suggestion-item');
        if (!suggestBox.classList.contains('show')) return;

        if (e.key === 'ArrowDown') {
            e.preventDefault();
            activeIndex = Math.min(activeIndex + 1, items.length - 1);
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            activeIndex = Math.max(activeIndex - 1, -1);
        } else if (e.key === 'Enter') {
            e.preventDefault();
            if (activeIndex >= 0 && items[activeIndex]) items[activeIndex].click();
            else goToSearchResults(input.value);
        }

        items.forEach((el, i) => el.classList.toggle('active', i === activeIndex));
    });

    document.addEventListener('click', (e) => {
        if (!input.contains(e.target) && !suggestBox.contains(e.target)) suggestBox.classList.remove('show');
    });

    searchBtn?.addEventListener('click', () => goToSearchResults(input.value));
}


//5. RENDER GIAO DIỆN (UI Rendering)

// --- Trang Chủ ---
function renderHome() {
    const currentPage = window.location.pathname.split("/").pop();
    if (currentPage !== "index.html" && currentPage !== "") return;

    const productList = document.getElementById('product-list');
    if (!productList) return;

    const displayProducts = products.slice(0, 8);
    productList.innerHTML = displayProducts.map(p => `
        <div class="col-lg-3 col-md-4 col-sm-6 mb-4">
            <div class="product-card h-100">
                <a href="sanpham.html?id=${p.id}" class="text-decoration-none text-dark">
                    <img src="img/${p.thumbnail}" class="img-fluid" loading="lazy">
                    <h6 class="text-truncate-2 fw-bold">${p.name}</h6>
                    <p class="price">${formatPrice(p.price)}</p>
                </a>
                <button class="btn btn-warning text-white w-100" onclick="addToCart('${p.id}')">THÊM GIỎ HÀNG</button>
            </div>
        </div>`).join('');
}

// --- Trang Sản phẩm & Chi tiết ---
function renderProductsPage() {
    const productList = document.getElementById('product-list');
    if (!productList) return;

    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    const categoryFilter = urlParams.get('cat');
    const searchQuery = urlParams.get('search');
    const titleBox = document.querySelector('.box-title h3');

    // CHI TIẾT SẢN PHẨM
    if (productId) {
        const product = products.find(p => p.id === productId);
        if (!product) {
            productList.innerHTML = `<div class="col-12 text-center"><h4>Không tìm thấy sản phẩm</h4></div>`;
            return;
        }
        if (titleBox) titleBox.innerText = "CHI TIẾT SẢN PHẨM";

        productList.innerHTML = `
            <div class="col-lg-6">
                <div class="bg-white p-3 rounded shadow-sm border">
                    <img src="img/${product.thumbnail}" class="img-fluid w-100 mb-3" id="main-img" style="height:450px;object-fit:contain;">
                    <div class="d-flex gap-2 flex-wrap">
                        ${product.images.map(img => `<img src="img/${img}" width="80" class="border rounded cursor-pointer" onclick="changeMainImage('img/${img}')">`).join('')}
                    </div>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="bg-white p-4 rounded shadow-sm border h-100">
                    <h2 class="fw-bold mb-3">${product.name}</h2>
                    <h3 class="text-danger fw-bold mb-4">${formatPrice(product.price)}</h3>
                    <p class="text-muted">${product.desc}</p>
                    <button onclick="addToCart('${product.id}')" class="btn btn-warning text-white fw-bold w-100 mt-4">THÊM VÀO GIỎ HÀNG</button>
                </div>
            </div>
            <div class="col-12 mt-5">
                <h4 class="fw-bold border-bottom pb-2 mb-4">SẢN PHẨM LIÊN QUAN</h4>
                <div class="row g-4" id="related-products"></div>
            </div>`;
        renderRelated(product.category, product.id);
        return;
    }

    // DANH SÁCH SẢN PHẨM (Lọc/Tìm kiếm)
    let displayProducts = [...products];
    if (searchQuery) {
        const q = searchQuery.toLowerCase();
        displayProducts = products.filter(p => p.name.toLowerCase().includes(q) || CATEGORY_LABELS[p.category]?.toLowerCase().includes(q));
        if (titleBox) titleBox.innerText = `KẾT QUẢ TÌM KIẾM: "${searchQuery}"`;
    } else if (categoryFilter) {
        displayProducts = products.filter(p => p.category === categoryFilter);
        if (titleBox) titleBox.innerText = `DÒNG SẢN PHẨM: ${CATEGORY_LABELS[categoryFilter]?.toUpperCase() || categoryFilter.toUpperCase()}`;
    } else {
        if (titleBox) titleBox.innerText = "TẤT CẢ SẢN PHẨM";
    }

    if (displayProducts.length === 0) {
        productList.innerHTML = `<div class="col-12 text-center py-5"><h4 class="text-muted">Không tìm thấy sản phẩm nào</h4></div>`;
    } else {
        productList.innerHTML = displayProducts.map(p => `
            <div class="col-lg-3 col-md-4 col-sm-6 mb-4">
                <div class="product-card h-100">
                    <a href="sanpham.html?id=${p.id}" class="text-decoration-none text-dark">
                        <img src="img/${p.thumbnail}" class="img-fluid" alt="${p.name}">
                        <h6 class="fw-bold text-truncate-2">${p.name}</h6>
                        <div class="price mb-3">${formatPrice(p.price)}</div>
                    </a>
                    <button onclick="addToCart('${p.id}')" class="btn btn-warning text-white fw-bold w-100">THÊM GIỎ HÀNG</button>
                </div>
            </div>`).join('');
    }
}

// --- Sản phẩm liên quan ---
function renderRelated(category, currentId) {
    const container = document.getElementById('related-products');
    if (!container) return;
    const related = products.filter(p => p.category === category && p.id !== currentId).slice(0, 4);
    container.innerHTML = related.map(p => `
        <div class="col-lg-3 col-md-4 col-sm-6">
            <div class="product-card h-100">
                <a href="sanpham.html?id=${p.id}" class="text-decoration-none text-dark">
                    <img src="img/${p.thumbnail}" class="img-fluid">
                    <h6 class="fw-bold text-truncate-2">${p.name}</h6>
                    <div class="price mb-3">${formatPrice(p.price)}</div>
                </a>
                <button onclick="addToCart('${p.id}')" class="btn btn-warning text-white fw-bold w-100">THÊM GIỎ HÀNG</button>
            </div>
        </div>`).join('');
}

// --- Giỏ hàng ---
function renderCart() {
    const container = document.getElementById('cart-items');
    if (!container) return;

    const cart = getCart();
    if (cart.length === 0) {
        container.innerHTML = `<tr><td colspan="6" class="text-center py-4">Giỏ hàng đang trống</td></tr>`;
        document.getElementById('total-price').innerText = '0đ';
        return;
    }

    let total = 0;
    container.innerHTML = cart.map((item, index) => {
        const subtotal = item.price * item.quantity;
        total += subtotal;
        return `
            <tr>
                <td>${item.name}</td>
                <td><img src="img/${item.thumbnail}" width="60" class="border rounded"></td>
                <td>${formatPrice(item.price)}</td>
                <td>
                    <div class="d-flex align-items-center">
                        <button class="btn btn-sm btn-outline-secondary" onclick="updateQty(${index}, -1)">-</button>
                        <span class="mx-2">${item.quantity}</span>
                        <button class="btn btn-sm btn-outline-secondary" onclick="updateQty(${index}, 1)">+</button>
                    </div>
                </td>
                <td class="text-danger fw-bold">${formatPrice(subtotal)}</td>
                <td><button class="btn btn-danger btn-sm" onclick="removeItem(${index})"><i class="bi bi-trash"></i></button></td>
            </tr>`;
    }).join('');
    document.getElementById('total-price').innerText = formatPrice(total);
    updateCartCount();
}


//6. KHỞI TẠO HỆ THỐNG (Initialization)
window.addEventListener('DOMContentLoaded', () => {
    updateCartCount();
    initSearch();
    renderHome();
    renderProductsPage();
    renderCart();
});
