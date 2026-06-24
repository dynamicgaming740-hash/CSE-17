import React from 'react';

function Navbar({ cartCount, onCartClick }) {
  return (
    <nav className="navbar">
      <div className="nav-logo">Ather Electronic</div>
      <div className="nav-links">
        <a href="#shop">Shop</a>
        <a href="#about">Our Story</a>
        <button className="cart-toggle-btn" onClick={onCartClick}>
          Cart <span className="cart-badge">{cartCount}</span>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;