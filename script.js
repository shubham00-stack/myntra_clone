/* ==========================================================
   MYNTRA CLONE - VANILLA JAVASCRIPT
   Clean, modular code for cart, wishlist, search & filter
   ========================================================== */

// 1. PRODUCTS DATASET (Authentic Myntra catalog)
const products = [
  {
    id: 1,
    brand: "ROADSTER",
    title: "Pure Cotton Curved Hem Casual T-shirt",
    gender: "Men",
    category: "Men",
    price: 399,
    mrp: 999,
    discount: "60% OFF",
    rating: 4.2,
    ratingCount: 3420,
    sizes: ["S", "M", "L", "XL"],
    image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=600&q=80",
    description: "Solid Black casual T-shirt, crafted from ultra-breathable pure cotton for all-day comfort."
  },
  {
    id: 2,
    brand: "HRX BY HRITHIK ROSHAN",
    title: "Rapid Dry Training Sports T-shirt",
    gender: "Men",
    category: "Men",
    price: 549,
    mrp: 1099,
    discount: "50% OFF",
    rating: 4.4,
    ratingCount: 5120,
    sizes: ["M", "L", "XL"],
    image: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=600&q=80",
    description: "Engineered with Rapid Dry sweat-wicking technology to keep you cool during intense workouts."
  },
  {
    id: 3,
    brand: "HIGHLANDER",
    title: "Slim Fit Washed Denim Casual Shirt",
    gender: "Men",
    category: "Men",
    price: 699,
    mrp: 1749,
    discount: "60% OFF",
    rating: 4.1,
    ratingCount: 2280,
    sizes: ["S", "M", "L", "XL"],
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=600&q=80",
    description: "Blue washed denim shirt with spread collar, 1 patch pocket, and long roll-up sleeves."
  },
  {
    id: 4,
    brand: "NIKE",
    title: "Revolution 6 Next Nature Running Shoes",
    gender: "Men",
    category: "Footwear",
    price: 2799,
    mrp: 3995,
    discount: "30% OFF",
    rating: 4.6,
    ratingCount: 8940,
    sizes: ["UK 7", "UK 8", "UK 9", "UK 10"],
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80",
    description: "Delivers cushioned comfort and flexible transition for running and daily workouts."
  },
  {
    id: 5,
    brand: "LEVI'S",
    title: "511 Mid Rise Slim Fit Stretch Jeans",
    gender: "Men",
    category: "Men",
    price: 1899,
    mrp: 3599,
    discount: "47% OFF",
    rating: 4.3,
    ratingCount: 1940,
    sizes: ["30", "32", "34", "36"],
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=600&q=80",
    description: "Classic Levi's 511 Slim Fit jeans featuring clean denim wash and 5-pocket styling."
  },
  {
    id: 6,
    brand: "PUMA",
    title: "Smashic Perforated Casual Sneakers",
    gender: "Men",
    category: "Footwear",
    price: 1699,
    mrp: 3499,
    discount: "51% OFF",
    rating: 4.2,
    ratingCount: 3100,
    sizes: ["UK 6", "UK 7", "UK 8", "UK 9"],
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=600&q=80",
    description: "Timeless court silhouette with perforated formstrip and cushioned SoftFoam+ sockliner."
  },
  {
    id: 7,
    brand: "ANOUK",
    title: "Floral Printed Pure Cotton Anarkali Kurta",
    gender: "Women",
    category: "Women",
    price: 899,
    mrp: 2499,
    discount: "64% OFF",
    rating: 4.4,
    ratingCount: 4210,
    sizes: ["XS", "S", "M", "L", "XL"],
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=600&q=80",
    description: "Olive green floral printed Anarkali kurta with keyhole neck, flared hem, and gotta patti details."
  },
  {
    id: 8,
    brand: "MANGO",
    title: "Solid Wrap Tie-Up Casual Midi Dress",
    gender: "Women",
    category: "Women",
    price: 1990,
    mrp: 3990,
    discount: "50% OFF",
    rating: 4.5,
    ratingCount: 880,
    sizes: ["XS", "S", "M", "L"],
    image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=600&q=80",
    description: "Burgundy solid wrap dress with V-neck, short flutter sleeves, and asymmetrical ruffled hem."
  },
  {
    id: 9,
    brand: "MAYBELLINE NEW YORK",
    title: "Super Stay Matte Ink Liquid Lipstick",
    gender: "Women",
    category: "Beauty",
    price: 524,
    mrp: 699,
    discount: "25% OFF",
    rating: 4.6,
    ratingCount: 15400,
    sizes: ["5 ml"],
    image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=600&q=80",
    description: "16-hour transfer-proof saturated liquid matte finish with precision arrow applicator."
  },
  {
    id: 10,
    brand: "U.S. POLO ASSN. KIDS",
    title: "Boys Pure Cotton Pique Polo T-Shirt",
    gender: "Kids",
    category: "Kids",
    price: 649,
    mrp: 1299,
    discount: "50% OFF",
    rating: 4.5,
    ratingCount: 1230,
    sizes: ["4-5Y", "6-7Y", "8-9Y", "10-11Y"],
    image: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=600&q=80",
    description: "Navy blue solid pique polo t-shirt with ribbed collar and signature embroidered crest."
  }
];

// 2. STATE MANAGEMENT (with LocalStorage)
let cart = JSON.parse(localStorage.getItem('myntra_cart')) || [];
let wishlist = JSON.parse(localStorage.getItem('myntra_wishlist')) || [];
let activeCategoryFilter = 'all';
let couponDiscountAmount = 0;

// Initialize on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  renderProducts(products);
  updateBadges();
  checkUserSession();
});

// 3. RENDER PRODUCTS GRID
function renderProducts(items) {
  const grid = document.getElementById('productsGrid');
  const counter = document.getElementById('productCount');
  counter.innerText = `Showing ${items.length} Products`;

  if (items.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 60px 20px;">
        <h3 style="font-size: 18px; color: #282c3f;">No matching products found</h3>
        <p style="color: #7e818c; font-size: 13px; margin-top: 6px;">Try adjusting your search or filters to find what you are looking for.</p>
        <button onclick="clearAllFilters()" style="margin-top: 16px; background: #ff3f6c; color: white; border: none; padding: 10px 24px; font-weight: 700; border-radius: 4px; cursor: pointer;">CLEAR FILTERS</button>
      </div>
    `;
    return;
  }

  grid.innerHTML = items.map(product => {
    const isWishlisted = wishlist.includes(product.id);
    return `
      <div class="product-card">
        <div class="card-img-wrapper" onclick="openPdpModal(${product.id})">
          <img src="${product.image}" alt="${product.title}" loading="lazy">
          <div class="rating-badge">
            <span>${product.rating}</span>
            <span class="rating-star">★</span>
            <span style="color:#d4d5d9; font-weight:normal;">|</span>
            <span style="color:#7e818c;">${product.ratingCount}</span>
          </div>
          <button class="wishlist-heart-btn" onclick="event.stopPropagation(); toggleWishlist(${product.id})">
            ${isWishlisted ? '❤️' : '🤍'}
          </button>
        </div>

        <div class="card-info">
          <div>
            <div class="brand-name">${product.brand}</div>
            <div class="product-title" title="${product.title}">${product.title}</div>
            <div class="price-row">
              <span class="current-price">₹${product.price}</span>
              <span class="original-price">₹${product.mrp}</span>
              <span class="discount-text">(${product.discount})</span>
            </div>
          </div>
          <div class="card-actions">
            <button class="add-bag-btn" onclick="addToCart(${product.id}, '${product.sizes[0]}')">ADD TO BAG</button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// 4. FILTERING & SEARCHING LOGIC
function applyFilters() {
  const genderChecked = Array.from(document.querySelectorAll('input[name="gender"]:checked')).map(el => el.value);
  const selectedPrice = document.querySelector('input[name="price"]:checked')?.value || 'all';
  const selectedDiscount = document.querySelector('input[name="discount"]:checked')?.value || 'all';
  const searchKeyword = document.getElementById('searchInput').value.trim().toLowerCase();

  let filtered = products.filter(p => {
    // 1. Category Filter
    if (activeCategoryFilter !== 'all') {
      if (activeCategoryFilter === 'Men' && p.gender !== 'Men') return false;
      if (activeCategoryFilter === 'Women' && p.gender !== 'Women') return false;
      if (activeCategoryFilter === 'Kids' && p.gender !== 'Kids') return false;
      if (activeCategoryFilter === 'Footwear' && p.category !== 'Footwear') return false;
      if (activeCategoryFilter === 'Beauty' && p.category !== 'Beauty') return false;
    }

    // 2. Gender Sidebar Checkboxes
    if (genderChecked.length > 0 && !genderChecked.includes(p.gender)) {
      return false;
    }

    // 3. Price Radio Filter
    if (selectedPrice === 'under500' && p.price >= 500) return false;
    if (selectedPrice === '500to1000' && (p.price < 500 || p.price > 1000)) return false;
    if (selectedPrice === 'above1000' && p.price <= 1000) return false;

    // 4. Discount Radio Filter
    if (selectedDiscount !== 'all') {
      const discNum = parseInt(p.discount) || 0;
      if (discNum < parseInt(selectedDiscount)) return false;
    }

    // 5. Search keyword
    if (searchKeyword) {
      const matchTitle = p.title.toLowerCase().includes(searchKeyword);
      const matchBrand = p.brand.toLowerCase().includes(searchKeyword);
      const matchCategory = p.category.toLowerCase().includes(searchKeyword);
      if (!matchTitle && !matchBrand && !matchCategory) return false;
    }

    return true;
  });

  // Apply active sorting
  const sortOption = document.getElementById('sortSelect').value;
  if (sortOption === 'priceLow') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sortOption === 'priceHigh') {
    filtered.sort((a, b) => b.price - a.price);
  } else if (sortOption === 'rating') {
    filtered.sort((a, b) => b.rating - a.rating);
  }

  renderProducts(filtered);
}

function handleSearch() {
  applyFilters();
}

function handleSort() {
  applyFilters();
}

function setCategoryFilter(category, buttonElement) {
  activeCategoryFilter = category;
  document.querySelectorAll('.category-pills .pill').forEach(btn => btn.classList.remove('active'));
  if (buttonElement) buttonElement.classList.add('active');
  applyFilters();
}

function filterByCategory(category) {
  setCategoryFilter(category);
  scrollToProducts();
}

function clearAllFilters() {
  document.querySelectorAll('input[name="gender"]').forEach(el => el.checked = false);
  document.querySelectorAll('input[name="price"]').forEach(el => el.checked = (el.value === 'all'));
  document.querySelectorAll('input[name="discount"]').forEach(el => el.checked = (el.value === 'all'));
  document.getElementById('searchInput').value = '';
  document.getElementById('sortSelect').value = 'recommended';
  setCategoryFilter('all', document.querySelector('.category-pills .pill'));
}

function scrollToProducts() {
  document.getElementById('productsSection').scrollIntoView({ behavior: 'smooth' });
}

// 5. CART OPERATIONS
function addToCart(productId, size) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  const existing = cart.find(item => item.id === productId && item.size === size);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ id: productId, size: size, quantity: 1 });
  }

  saveCart();
  updateBadges();
  alert(`Added ${product.brand} - ${product.title} (Size: ${size}) to Bag!`);
}

function removeFromCart(productId, size) {
  cart = cart.filter(item => !(item.id === productId && item.size === size));
  saveCart();
  updateBadges();
  renderCartModal();
}

function updateCartQuantity(productId, size, change) {
  const item = cart.find(i => i.id === productId && i.size === size);
  if (!item) return;

  item.quantity += change;
  if (item.quantity <= 0) {
    removeFromCart(productId, size);
  } else {
    saveCart();
    updateBadges();
    renderCartModal();
  }
}

function saveCart() {
  localStorage.setItem('myntra_cart', JSON.stringify(cart));
}

// 6. WISHLIST OPERATIONS
function toggleWishlist(productId) {
  const idx = wishlist.indexOf(productId);
  if (idx > -1) {
    wishlist.splice(idx, 1);
  } else {
    wishlist.push(productId);
  }
  localStorage.setItem('myntra_wishlist', JSON.stringify(wishlist));
  updateBadges();
  applyFilters(); // updates heart icon on cards
  if (document.getElementById('wishlistModal').style.display === 'flex') {
    renderWishlistModal();
  }
}

function moveToCartFromWishlist(productId) {
  const product = products.find(p => p.id === productId);
  if (product) {
    addToCart(productId, product.sizes[0]);
    toggleWishlist(productId);
  }
}

// 7. BADGES & USER SESSION
function updateBadges() {
  const totalCartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  document.getElementById('cartCount').innerText = totalCartCount;
  document.getElementById('wishlistCount').innerText = wishlist.length;
}

function checkUserSession() {
  const user = JSON.parse(localStorage.getItem('myntra_user'));
  const profileLabel = document.getElementById('profileLabel');
  if (user && user.isLoggedIn) {
    profileLabel.innerText = user.name.split(' ')[0];
  } else {
    profileLabel.innerText = 'Profile';
  }
}

// 8. MODAL CONTROLS
function openCartModal() {
  renderCartModal();
  document.getElementById('cartModal').style.display = 'flex';
}

function closeCartModal() {
  document.getElementById('cartModal').style.display = 'none';
}

function openWishlistModal() {
  renderWishlistModal();
  document.getElementById('wishlistModal').style.display = 'flex';
}

function closeWishlistModal() {
  document.getElementById('wishlistModal').style.display = 'none';
}

function openPdpModal(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  const container = document.getElementById('pdpDetails');
  container.innerHTML = `
    <img src="${product.image}" class="pdp-img" alt="${product.title}">
    <div class="pdp-details">
      <div class="pdp-brand">${product.brand}</div>
      <div class="pdp-title">${product.title}</div>
      <div class="pdp-rating">${product.rating} ★ | ${product.ratingCount} Ratings</div>
      
      <div class="price-row" style="margin: 16px 0;">
        <span class="current-price" style="font-size: 20px;">₹${product.price}</span>
        <span class="original-price" style="font-size: 15px;">₹${product.mrp}</span>
        <span class="discount-text" style="font-size: 15px;">(${product.discount})</span>
      </div>

      <div style="font-size: 13px; font-weight: 700; color: #282c3f; margin-top: 14px;">SELECT SIZE</div>
      <div class="size-selector" id="pdpSizeSelector">
        ${product.sizes.map((s, idx) => `
          <button class="size-btn ${idx === 0 ? 'active' : ''}" onclick="selectPdpSize(this)">${s}</button>
        `).join('')}
      </div>

      <p style="font-size: 13px; color: #535766; line-height: 1.5; margin: 16px 0;">
        ${product.description}
      </p>

      <button class="place-order-btn" style="max-width: 280px;" onclick="addCurrentPdpToBag(${product.id})">
        ADD TO BAG
      </button>
    </div>
  `;

  document.getElementById('pdpModal').style.display = 'flex';
}

function selectPdpSize(btn) {
  document.querySelectorAll('#pdpSizeSelector .size-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}

function addCurrentPdpToBag(productId) {
  const activeBtn = document.querySelector('#pdpSizeSelector .size-btn.active');
  const size = activeBtn ? activeBtn.innerText : 'M';
  addToCart(productId, size);
  closePdpModal();
}

function closePdpModal() {
  document.getElementById('pdpModal').style.display = 'none';
}

// 9. RENDER MODAL CONTENTS
function renderCartModal() {
  const container = document.getElementById('cartItemsList');
  const itemCountEl = document.getElementById('cartItemCount');
  itemCountEl.innerText = cart.reduce((sum, item) => sum + item.quantity, 0);

  if (cart.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 40px 10px;">
        <div style="font-size: 40px;">🛍️</div>
        <h4 style="font-size: 16px; margin: 8px 0;">Your Bag is Empty!</h4>
        <p style="font-size: 12px; color: #7e818c;">Add items from your wishlist or explore the catalog.</p>
      </div>
    `;
    updatePriceSummary(0, 0);
    return;
  }

  let totalMrp = 0;
  let totalSellingPrice = 0;

  container.innerHTML = cart.map(item => {
    const product = products.find(p => p.id === item.id);
    if (!product) return '';

    totalMrp += product.mrp * item.quantity;
    totalSellingPrice += product.price * item.quantity;

    return `
      <div class="cart-item">
        <img src="${product.image}" alt="${product.title}">
        <div class="cart-item-info">
          <div class="cart-item-title">${product.brand}</div>
          <div class="cart-item-sub">${product.title}</div>
          <div style="font-size: 12px; margin-top: 4px;">Size: <strong>${item.size}</strong></div>
          <div class="price-row">
            <span class="current-price">₹${product.price * item.quantity}</span>
            <span class="original-price">₹${product.mrp * item.quantity}</span>
          </div>
          <div class="qty-control">
            <span>Qty:</span>
            <button class="qty-btn" onclick="updateCartQuantity(${item.id}, '${item.size}', -1)">-</button>
            <span style="font-weight:700; font-size:13px;">${item.quantity}</span>
            <button class="qty-btn" onclick="updateCartQuantity(${item.id}, '${item.size}', 1)">+</button>
          </div>
        </div>
        <button class="remove-item-btn" onclick="removeFromCart(${item.id}, '${item.size}')">✕</button>
      </div>
    `;
  }).join('');

  updatePriceSummary(totalMrp, totalSellingPrice);
}

function updatePriceSummary(mrp, selling) {
  const discountOnMrp = mrp - selling;
  let finalAmount = Math.max(0, selling - couponDiscountAmount);

  document.getElementById('summaryMrp').innerText = `₹${mrp}`;
  document.getElementById('summaryDiscount').innerText = `- ₹${discountOnMrp}`;
  document.getElementById('summaryCoupon').innerText = `- ₹${couponDiscountAmount}`;
  document.getElementById('summaryTotal').innerText = `₹${mrp > 0 ? finalAmount : 0}`;
}

function applyCoupon() {
  const input = document.getElementById('couponInput').value.trim().toUpperCase();
  const msg = document.getElementById('couponMsg');
  const couponRow = document.getElementById('couponDiscountRow');

  if (cart.length === 0) {
    msg.innerText = 'Add items to bag before applying coupon';
    msg.className = 'coupon-msg error';
    return;
  }

  if (input === 'MYNTRA200') {
    couponDiscountAmount = 200;
    couponRow.style.display = 'flex';
    msg.innerText = 'Coupon MYNTRA200 applied! You saved ₹200.';
    msg.className = 'coupon-msg success';
    renderCartModal();
  } else {
    couponDiscountAmount = 0;
    couponRow.style.display = 'none';
    msg.innerText = 'Invalid Coupon Code. Try MYNTRA200';
    msg.className = 'coupon-msg error';
    renderCartModal();
  }
}

function placeOrder() {
  if (cart.length === 0) {
    alert('Your bag is empty! Add products first.');
    return;
  }

  const randomOrderId = 'MYN' + Math.floor(1000000 + Math.random() * 9000000);
  document.getElementById('successOrderId').innerText = randomOrderId;

  // Clear cart
  cart = [];
  saveCart();
  updateBadges();
  couponDiscountAmount = 0;

  closeCartModal();
  document.getElementById('successModal').style.display = 'flex';
}

function closeSuccessModal() {
  document.getElementById('successModal').style.display = 'none';
}

function renderWishlistModal() {
  const grid = document.getElementById('wishlistGrid');
  const countEl = document.getElementById('wishlistModalCount');
  countEl.innerText = wishlist.length;

  if (wishlist.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 40px 10px;">
        <div style="font-size: 36px;">🤍</div>
        <h4 style="font-size: 16px; margin: 8px 0;">Your Wishlist is Empty!</h4>
        <p style="font-size: 12px; color: #7e818c;">Tap the heart on any product to save it here.</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = wishlist.map(id => {
    const product = products.find(p => p.id === id);
    if (!product) return '';
    return `
      <div class="product-card" style="box-shadow: 0 2px 8px rgba(0,0,0,0.06);">
        <div class="card-img-wrapper" style="padding-top: 120%;">
          <img src="${product.image}" alt="${product.title}">
          <button class="wishlist-heart-btn" onclick="toggleWishlist(${product.id})">✕</button>
        </div>
        <div class="card-info">
          <div>
            <div class="brand-name">${product.brand}</div>
            <div class="product-title">${product.title}</div>
            <div class="price-row">
              <span class="current-price">₹${product.price}</span>
            </div>
          </div>
          <button class="add-bag-btn" style="margin-top: 8px;" onclick="moveToCartFromWishlist(${product.id})">
            MOVE TO BAG
          </button>
        </div>
      </div>
    `;
  }).join('');
}
