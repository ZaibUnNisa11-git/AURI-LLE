import { Search, ShoppingBag, Heart, User, Menu } from 'lucide-react';

function TopNav() {
  return (
    <header className="topbar">
      <div className="topbar__inner">
        <div className="brand">AURIÈLLE</div>

        <nav className="nav" aria-label="Main navigation">
          <a href="#">Home</a>
          <a href="#">Shop</a>
          <a href="#">Collections</a>
          <a href="#">New Arrivals</a>
          <a href="#">About Us</a>
          <a href="#">Contact</a>
        </nav>

        <div className="nav-actions" aria-label="User actions">
          <button className="icon-button" aria-label="Search"><Search size={18} /></button>
          <button className="icon-button" aria-label="Wishlist"><Heart size={18} /></button>
          <button className="icon-button" aria-label="View cart"><ShoppingBag size={18} /></button>
          <button className="icon-button" aria-label="Account"><User size={18} /></button>
          <button className="icon-button mobile-toggle" aria-label="Menu"><Menu size={18} /></button>
        </div>
      </div>
    </header>
  );
}

export default TopNav;
