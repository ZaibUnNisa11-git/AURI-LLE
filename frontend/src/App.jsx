import AnnouncementBar from './components/Layout/AnnouncementBar';
import TopNav from './components/Layout/TopNav';
import SiteFooter from './components/Layout/SiteFooter';
import SectionHeading from './components/Common/SectionHeading';

function App() {
  return (
    <div className="app-shell" id="home">
      <AnnouncementBar />
      <TopNav />
      <main>
        <section className="hero-section">
          <div className="hero-copy">
            <p className="eyebrow">Curated fine jewellery</p>
            <h1>Elegance in Every Detail.</h1>
            <p className="lead">Discover timeless jewellery designed to celebrate your individuality.</p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#collections">Explore Collection</a>
              <a className="btn btn-secondary" href="#about">Discover Our Story</a>
            </div>
            <div className="hero-meta">
              <div><strong>Thoughtfully selected</strong><span>Details to treasure</span></div>
              <div><strong>Made for gifting</strong><span>For life’s special moments</span></div>
            </div>
          </div>
          <div className="hero-visual" role="img" aria-label="Editorial display of elegant jewellery">
            <div className="visual-card visual-large" />
            <div className="visual-card visual-small" />
          </div>
        </section>

        <section className="section categories-section" id="collections">
          <SectionHeading eyebrow="Shop by signature pieces" title="Featured collections" subtitle="Elegant essentials designed for everyday radiance and milestone moments." />
          <div className="category-grid">
            {['Necklaces', 'Earrings', 'Bracelets', 'Rings', 'Jewellery Sets'].map((category, index) => (
              <a className={`category-card category-card--${index + 1}`} href="#shop" key={category}>
                <div className="category-image category-image--placeholder" aria-hidden="true" />
                <div className="category-content"><h3>{category}</h3><span>Discover the edit ↗</span></div>
              </a>
            ))}
          </div>
        </section>

        <section className="section product-showcase" id="shop">
          <SectionHeading eyebrow="The AURIÈLLE edit" title="Considered details, lasting beauty" subtitle="A preview of the thoughtful product experience taking shape for the next stage." />
          <div className="product-grid">
            {['Lumière Pendant', 'Petal Drop Earrings', 'Soleil Cuff', 'Étoile Band'].map((product, index) => (
              <article className="product-card" key={product}>
                <div className={`product-image product-image--placeholder product-image--${index + 1}`} role="img" aria-label={`${product} product preview`} />
                <div className="product-card__body">
                  <span className="badge">Design preview</span>
                  <h3>{product}</h3>
                  <p>Product catalogue and pricing will be connected in a later stage.</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section story-section" id="about">
          <div className="story-card">
            <div className="story-image" role="img" aria-label="Soft editorial textures inspired by jewellery craftsmanship" />
            <div className="story-copy">
              <p className="eyebrow">Our point of view</p>
              <h2>Jewellery That Tells Your Story.</h2>
              <p>AURIÈLLE brings together romantic design and everyday elegance. Each piece is selected to feel meaningful, wearable, and thoughtfully modern.</p>
              <a className="btn btn-secondary" href="#contact">Discover the brand</a>
            </div>
          </div>
        </section>

        <section className="section feature-strip" aria-label="AURIÈLLE values">
          <div className="feature-item"><strong>Considered design</strong><span>Refined silhouettes with a feminine point of view.</span></div>
          <div className="feature-item"><strong>Thoughtful selection</strong><span>Product details and materials will be provided with each listing.</span></div>
          <div className="feature-item"><strong>Ready to gift</strong><span>Packaging details will be shared as the collection develops.</span></div>
          <div className="feature-item"><strong>Personal support</strong><span>Customer care information will be added when confirmed.</span></div>
        </section>
        <div id="new-arrivals" />
        <div id="contact" />
      </main>
      <SiteFooter />
    </div>
  );
}

export default App;
