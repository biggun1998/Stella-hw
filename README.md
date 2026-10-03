# Stellar Hardware

A fictional desktop GPU store for CS351 Project 1. Prices and stock are sample data. GPU names and VRAM reference [NVIDIA](https://www.nvidia.com/en-us/geforce/graphics-cards/compare/) and [AMD](https://www.amd.com/en/products/specifications/graphics.html).

Uses React, Vite, JavaScript/JSX, Bootstrap 5, and one small CSS file. Requires Node.js 20.19+ or 22.12+.

```sh
npm install
npm run dev
npm run build
```

Open the local URL printed by `npm run dev` (usually `http://localhost:5173/`). Vite must process the JSX; opening `index.html` directly or through Live Server will show a blank page.

- `App` holds view selection and cart state; `Navbar` changes views.
- `HomeView` opens the shop. `ShopView` passes JSON products to `ProductList`, which maps them into `ProductCard` components.
- `ProductDetailView` selects quantity and adds a product to the cart.
- `Cart` maps items into `CartItem` components and calculates totals. `CartItem` changes quantity or removes an item.
- `AccountView` and `CreateAccountView` validate forms without saving data or authenticating users.
- `main.jsx` starts React and imports Bootstrap and custom CSS.
