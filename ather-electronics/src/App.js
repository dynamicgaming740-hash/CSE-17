import React, { useState } from 'react';
import './App.css';
import Navbar from './Navbar';
import ProductCard from './ProductCard';

function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [notification, setNotification] = useState('');

  const products = [
    { id: 1, name: 'Ather Optix Mechanical Gaming Keyboard', price: 4499, image: 'https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=500' },
    { id: 2, name: 'Quantum X Wireless Gaming Mouse', price: 2999, image: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=500' },
    { id: 3, name: 'Apex Audio Pro Gaming Headset', price: 5499, image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=500' },
    { id: 4, name: 'Ather Titan RTX Gaming Laptop', price: 89999, image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500' }
  ];

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find(item => item.id === product.id);
      if (existingProduct) {
        return prevCart.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });

    setNotification(`${product.name} added to cart successfully!`);
    setTimeout(() => {
      setNotification('');
    }, 3000);
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter(item => item.id !== productId));
  };

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalCartItems = cart.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = cart.reduce((total, item) => total + (item.price * item.quantity), 0);

  return (
    <div className="app-container">
      <div className="top-info-bar">
        <span>📞 Contact: 9585859</span>
        <span>📍 Address: xyxz</span>
      </div>

      <Navbar cartCount={totalCartItems} onCartClick={() => setIsCartOpen(!isCartOpen)} />
      
      <header className="hero-section">
        <div className="brand-logo-container">
          <span className="brand-icon">⚡</span>
          <h1>Ather Electronic</h1>
        </div>
        <p>Next-Gen Gaming Gear & Ultimate Hardware Performance</p>
        
        <div className="search-container">
          <input 
            type="text" 
            placeholder="Search gear (e.g., Keyboard, Mouse, Laptop)..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-bar"
          />
        </div>
      </header>

      <main className="main-content">
        <h2 className="section-title">Featured Gaming Products</h2>
        
        {filteredProducts.length === 0 ? (
          <p className="no-results">No gaming devices match your search query.</p>
        ) : (
          <div className="product-grid">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
            ))}
          </div>
        )}

        {isCartOpen && (
          <div className="cart-overlay">
            <div className="cart-modal">
              <h2>Your Shopping Cart</h2>
              <button className="close-btn" onClick={() => setIsCartOpen(false)}>×</button>
              
              {cart.length === 0 ? (
                <p className="empty-message">Your cart is feeling a bit light!</p>
              ) : (
                <>
                  <div className="cart-items-list">
                    {cart.map(item => (
                      <div key={item.id} className="cart-item">
                        <div>
                          <h4>{item.name}</h4>
                          <p>₹{item.price} x {item.quantity}</p>
                        </div>
                        <button className="remove-btn" onClick={() => removeFromCart(item.id)}>Remove</button>
                      </div>
                    ))}
                  </div>
                  <div className="cart-summary">
                    <h3>Total: ₹{totalPrice}</h3>
                    <button className="checkout-btn" onClick={() => alert('Proceeding to checkout!')}>Checkout Now</button>
                  </div>
                </>
              )}
            </div>
          </div>
        )}
      </main>

      {notification && (
        <div className="toast-notification">
          <span className="toast-icon">🎮</span>
          <p>{notification}</p>
        </div>
      )}
    </div>
  );
}

export default App;