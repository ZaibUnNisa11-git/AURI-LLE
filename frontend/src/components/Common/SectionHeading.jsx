import { Instagram, Facebook, Mail } from 'lucide-react';

function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__grid">
          <div>
            <h3>AURIÈLLE</h3>
            <p>
              Luxury jewellery for everyday moments and milestone memories.
            </p>
          </div>

          <div>
            <h4>Quick links</h4>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Shop</a></li>
              <li><a href="#">Collections</a></li>
              <li><a href="#">About Us</a></li>
            </ul>
          </div>

          <div>
            <h4>Customer care</h4>
            <ul>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Shipping</a></li>
              <li><a href="#">Returns</a></li>
              <li><a href="#">FAQs</a></li>
            </ul>
          </div>

          <div>
            <h4>Follow us</h4>
            <ul>
              <li><a href="#"><Instagram size={16} /> Instagram</a></li>
              <li><a href="#"><Facebook size={16} /> Facebook</a></li>
              <li><a href="#"><Mail size={16} /> hello@aurielle.com</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          © 2026 AURIÈLLE. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default SiteFooter;
