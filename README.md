# Myntra Clone - Web Development College Assignment

A simple, responsive, and fully interactive **Myntra Clone** built with **HTML5, CSS3, and JavaScript** (with an optional zero-dependency **Java** HTTP Server).

---

## 📁 Project Structure

```
c:\myntra\
├── index.html          # Main Store page (Navbar, Banners, Products, Modals)
├── login.html          # Authentic Myntra Login & Signup page (OTP simulation)
├── style.css           # Pure CSS3 stylesheet (Myntra theme, Flexbox/Grid, Responsive)
├── script.js           # Vanilla JavaScript (Cart, Wishlist, Search, Filters, Modals)
├── MyntraServer.java   # Optional Java HTTP Server (Zero dependencies, pure Java SE)
└── README.md           # Project report and presentation guide
```

---

## 🚀 How to Run the Project

### Method 1: Instant Direct Launch (Recommended & Easiest)
You do **not** need to install Node, npm, or any frameworks!
1. Open the folder: `c:\myntra`
2. **Double-click on `index.html`**
3. It will immediately open and run in Google Chrome, Microsoft Edge, or Mozilla Firefox!

---

### Method 2: Running via Java Server (`MyntraServer.java`)
If your teacher specifically asked to run or serve the project using **Java**:
1. Open Command Prompt or Terminal in `c:\myntra`.
2. Compile and run the Java server:
   ```cmd
   javac MyntraServer.java
   java MyntraServer
   ```
3. Open your browser and navigate to:
   ```
   http://localhost:8080
   ```

---

## ✨ Features Built

| Feature | Description |
|---|---|
| **Myntra Navigation Bar** | Authentic SVG Logo, Men/Women/Kids/Footwear/Beauty category tabs, Search bar, and Profile/Wishlist/Bag counter badges. |
| **Real-Time Search** | Type keywords like *"shirt"*, *"shoes"*, *"puma"*, *"dress"* in the search bar to filter products instantly. |
| **Multi-Criteria Filter Sidebar** | Filter by Gender (Men, Women, Kids), Price (Under ₹500, ₹500-₹1000, Above ₹1000), and Discounts (30%+, 50%+, 60%+). |
| **Dynamic Sorting** | Sort products by *Price: Low to High*, *Price: High to Low*, or *Customer Rating*. |
| **Interactive Shopping Bag** | View added items, change quantities (+ / -), see MRP breakdown, and apply promo code **`MYNTRA200`** for an instant ₹200 discount! |
| **Wishlist Drawer** | Tap the heart icon on any card to save it; view wishlist and move items to bag in one click. |
| **Product Detail Modal (PDP)** | Click on any product to view high-resolution imagery, full specifications, ratings, and size selector. |
| **Order Confirmation** | Clicking "PLACE ORDER" generates a dynamic Myntra Order ID with a celebration screen and clears the bag. |
| **Login & Signup (`login.html`)** | Authentic Myntra phone number entry, OTP verification simulation (`1234`), and name setup. Stored in `localStorage`. |

---

## 🎓 Questions Your Teacher Might Ask (Viva Preparation)

### Q1: "What is the difference between Java and JavaScript?"
> **Answer**: *"Java is a statically-typed, object-oriented, compiled programming language primarily used for backend servers, Android apps, and enterprise software. JavaScript is a lightweight, dynamically-typed scripting language executed by web browsers to make HTML/CSS web pages interactive."*

### Q2: "How does the Cart and Wishlist retain items if you refresh the page?"
> **Answer**: *"I used the browser's native `localStorage` API in `script.js`. When a user adds an item, it is converted into a JSON string via `JSON.stringify()` and saved in `localStorage`. When the page reloads, `JSON.parse()` reads the saved data so items are never lost."*

### Q3: "Did you use any external CSS framework like Bootstrap or Tailwind?"
> **Answer**: *"No, this project uses 100% pure, custom CSS3 in `style.css`. It uses modern CSS Flexbox and CSS Grid layouts with custom media queries to make it fully responsive on mobile, tablet, and desktop screens."*

### Q4: "How does the live search and filtering work?"
> **Answer**: *"The products are stored in a JavaScript array of objects in `script.js`. Whenever the user types in the search box or checks a filter checkbox, the `applyFilters()` function executes `Array.prototype.filter()` against gender, price range, discount, and text keywords, then re-renders the grid using `renderProducts()`."*
