import { useState } from 'react';
import { Search, ShoppingBag, Heart, User, Menu, X } from 'lucide-react';

function TopNav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="topbar">
      <div className="topbar__inner">
        <a className="brand" href="#home" aria-label="AURIÈLLE home">AURIÈLLE</a>
        <nav className={`nav${menuOpen ? ' nav--open' : ''}`} aria-label="Main navigation">
          <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#shop" onClick={() => setMenuOpen(false)}>Shop</a>
          <a href="#collections" onClick={() => setMenuOpen(false)}>Collections</a>
          <a href="#new-arrivals" onClick={() => setMenuOpen(false)}>New Arrivals</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About Us</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </nav>
        <div className="nav-actions" aria-label="User actions">
          <button className="icon-button" type="button" aria-label="Search"><Search size={18} /></button>
          <button className="icon-button" type="button" aria-label="Wishlist"><Heart size={18} /></button>
          <button className="icon-button" type="button" aria-label="View cart"><ShoppingBag size={18} /></button>
          <button className="icon-button" type="button" aria-label="Account"><User size={18} /></button>
          <button
            className="icon-button mobile-toggle"
            type="button"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>
    </header>
  );
}

export default TopNav;
