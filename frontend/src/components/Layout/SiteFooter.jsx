import { Facebook, Instagram, Mail } from 'lucide-react';

function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__grid">
          <div>
            <h3>AURIÈLLE</h3>
            <p>Luxury jewellery for everyday moments and milestone memories.</p>
          </div>
          <div>
            <h4>Quick links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#shop">Shop</a></li>
              <li><a href="#collections">Collections</a></li>
              <li><a href="#about">About Us</a></li>
            </ul>
          </div>
          <div>
            <h4>Customer care</h4>
            <ul>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#shipping">Shipping</a></li>
              <li><a href="#returns">Returns</a></li>
              <li><a href="#faqs">FAQs</a></li>
            </ul>
          </div>
          <div>
            <h4>Follow us</h4>
            <ul>
              <li><a href="https://instagram.com" aria-label="Instagram"><Instagram size={16} /> Instagram</a></li>
              <li><a href="https://facebook.com" aria-label="Facebook"><Facebook size={16} /> Facebook</a></li>
              <li><a href="mailto:hello@aurielle.com"><Mail size={16} /> Email us</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">© 2026 AURIÈLLE. All rights reserved.</div>
      </div>
    </footer>
  );
}

export default SiteFooter;
