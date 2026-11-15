import { Search, ShoppingBag, Heart, User, Menu } from 'lucide-react';
import AnnouncementBar from './components/Layout/AnnouncementBar';
import TopNav from './components/Layout/TopNav';
import SiteFooter from './components/Layout/SiteFooter';
import SectionHeading from './components/Common/SectionHeading';

function App() {
  return (
    <div className="app-shell">
      <AnnouncementBar />
      <TopNav />

      <main>
        <section className="hero-section">
          <div className="hero-copy">
            <p className="eyebrow">Curated fine jewellery</p>
            <h1>Elegance in Every Detail.</h1>
            <p className="lead">
              Discover timeless jewellery designed to celebrate your individuality.
            </p>
            <div className="hero-actions">
              <button className="btn btn-primary">Explore Collection</button>
              <button className="btn btn-secondary">Discover Our Story</button>
            </div>
            <div className="hero-meta">
              <div>
                <strong>18k Gold</strong>
                <span>Premium finish</span>
              </div>
              <div>
                <strong>Free shipping</strong>
                <span>On orders over $200</span>
              </div>
            </div>
          </div>

          <div className="hero-visual" aria-label="Luxury jewellery editorial visuals">
            <div className="visual-card visual-large" />
            <div className="visual-card visual-small" />
          </div>
        </section>

        <section className="section categories-section">
          <SectionHeading
            eyebrow="Shop by signature pieces"
            title="Featured collections"
            subtitle="Elegant essentials designed for everyday radiance and milestone moments."
          />

          <div className="category-grid">
            {['Necklaces', 'Earrings', 'Bracelets', 'Rings', 'Jewellery Sets'].map((category) => (
              <article className="category-card" key={category}>
                <div className="category-image category-image--placeholder" aria-hidden="true" />
                <div className="category-content">
                  <h3>{category}</h3>
                  <a href="#">Shop now</a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section product-showcase">
          <SectionHeading
            eyebrow="Best sellers"
            title="Most loved by our customers"
            subtitle="Designed to layer beautifully and gift effortlessly."
          />

          <div className="product-grid">
            {Array.from({ length: 4 }).map((_, index) => (
              <article className="product-card" key={index}>
                <div className="product-image product-image--placeholder" aria-label="Featured product image" />
                <div className="product-card__meta">
                  <span className="badge">New</span>
                  <button className="icon-button" aria-label="Add to wishlist">
                    <Heart size={16} />
                  </button>
                </div>
                <div className="product-card__body">
                  <h3>Signature Halo Ring</h3>
                  <div className="price-row">
                    <span className="price">$245</span>
                    <span className="original-price">$320</span>
                  </div>
                  <p>Rose gold vermeil • Ready to ship</p>
                  <button className="btn btn-primary btn-small">Add to cart</button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section story-section">
          <div className="story-card">
            <div className="story-image" aria-label="Brand story editorial image" />
            <div className="story-copy">
              <p className="eyebrow">Our story</p>
              <h2>Jewellery That Tells Your Story.</h2>
              <p>
                AURIÈLLE brings together romantic design, refined craftsmanship, and everyday elegance.
                Every piece is curated to feel meaningful, wearable, and thoughtfully modern.
              </p>
              <button className="btn btn-secondary">Learn more</button>
            </div>
          </div>
        </section>

        <section className="section feature-strip">
          <div className="feature-item">
            <strong>Elegant Designs</strong>
            <span>Timeless silhouettes with a feminine edge.</span>
          </div>
          <div className="feature-item">
            <strong>Quality Materials</strong>
            <span>Premium metals and finishings selected for longevity.</span>
          </div>
          <div className="feature-item">
            <strong>Thoughtful Packaging</strong>
            <span>Gift-ready presentation for every special moment.</span>
          </div>
          <div className="feature-item">
            <strong>Customer Support</strong>
            <span>Helpful guidance from our luxury concierge team.</span>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

export default App;
