import { useState } from 'react';
import products from './data/products.json';
import Navbar from './components/Navbar';
import Cart from './components/Cart';
import HomeView from './views/HomeView';
import ShopView from './views/ShopView';
import ProductDetailView from './views/ProductDetailView';
import AccountView from './views/AccountView';
import CreateAccountView from './views/CreateAccountView';

export default function App() {
  const [currentView, setCurrentView] = useState('home');
  const [selectedProduct, setSelectedProduct] = useState(null);
  // Shared cart state
  const [cartItems, setCartItems] = useState([]);
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  function selectProduct(product) {
    setSelectedProduct(product);
    setCurrentView('product');
  }

  function addToCart(product, quantity) {
    if (product.stock === 0) return;
    setCartItems(items => {
      const existingItem = items.find(item => item.id === product.id);
      if (existingItem) {
        return items.map(item => item.id === product.id
          ? { ...item, quantity: Math.min(item.quantity + quantity, product.stock) }
          : item);
      }
      return [...items, {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity: Math.min(quantity, product.stock),
      }];
    });
    setCurrentView('cart');
  }

  function increaseQuantity(id) {
    const stock = products.find(product => product.id === id).stock;
    setCartItems(items => items.map(item => item.id === id
      ? { ...item, quantity: Math.min(item.quantity + 1, stock) }
      : item));
  }

  function decreaseQuantity(id) {
    setCartItems(items => items.map(item => item.id === id
      ? { ...item, quantity: Math.max(1, item.quantity - 1) }
      : item));
  }

  function removeItem(id) {
    setCartItems(items => items.filter(item => item.id !== id));
  }

  return (
    <>
      <Navbar onNavigate={setCurrentView} cartCount={cartCount} />
      <main className="container py-4">
        {/* Conditional rendering switches views without a router. */}
        {currentView === 'home' && <HomeView onShop={() => setCurrentView('shop')} />}
        {currentView === 'shop' && <ShopView products={products} onSelectProduct={selectProduct} />}
        {currentView === 'product' && selectedProduct && (
          <ProductDetailView key={selectedProduct.id} product={selectedProduct} onAddToCart={addToCart} />
        )}
        {currentView === 'account' && <AccountView onCreateAccount={() => setCurrentView('createAccount')} />}
        {currentView === 'createAccount' && <CreateAccountView />}
        {currentView === 'cart' && (
          <Cart cartItems={cartItems} increaseQuantity={increaseQuantity}
            decreaseQuantity={decreaseQuantity} removeItem={removeItem} />
        )}
      </main>
      <footer className="text-center text-muted py-3">Stellar Hardware — CS351 Project 1</footer>
    </>
  );
}
