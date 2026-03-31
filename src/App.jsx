import './App.css'

const categoryHighlights = [
  { name: 'Power Tools', icon: 'bolt' },
  { name: 'Fasteners', icon: 'nut' },
  { name: 'Safety Gear', icon: 'shield' },
  { name: 'Paint Supply', icon: 'drop' },
  { name: 'Garden Tools', icon: 'leaf' },
  { name: 'Workshop Storage', icon: 'box' },
]

const iconPaths = {
  home: 'M3.75 10.5 12 4.5l8.25 6v7.5a.75.75 0 0 1-.75.75H15v-5.25a.75.75 0 0 0-.75-.75h-4.5a.75.75 0 0 0-.75.75v5.25H4.5a.75.75 0 0 1-.75-.75Z',
  stock: 'M3.75 7.5 12 3.75l8.25 3.75L12 11.25 3.75 7.5Zm0 3.75L12 15l8.25-3.75M3.75 15 12 18.75 20.25 15',
  deal: 'M3.75 7.5 9 2.25h9l3.75 3.75v9L16.5 21H7.5L3.75 17.25V7.5Zm5.25 2.25h.008v.008H9V9.75Zm6 6h.008v.008H15v-.008Z',
  service: 'M20.25 6.75 17.7 4.2a2.625 2.625 0 0 0-3.712 0L9.75 8.438l5.813 5.813 4.237-4.237a2.625 2.625 0 0 0 0-3.712ZM8.438 9.75 3.75 14.438V20.25h5.813l4.688-4.688L8.438 9.75Z',
  review: 'm12 3 2.35 4.764 5.257.764-3.804 3.708.898 5.236L12 15l-4.701 2.472.898-5.236L4.393 8.528l5.257-.764L12 3Z',
  contact: 'M3.75 6.75A2.25 2.25 0 0 1 6 4.5h12a2.25 2.25 0 0 1 2.25 2.25v7.5A2.25 2.25 0 0 1 18 16.5H9.879l-3.75 3v-3H6a2.25 2.25 0 0 1-2.25-2.25v-7.5Z',
  bolt: 'M13.5 2.25 6.75 12h4.5L10.5 21.75 17.25 12h-4.5L13.5 2.25Z',
  nut: 'M8.25 3.75h7.5l3.75 3.75v7.5L15.75 18.75h-7.5L4.5 15V7.5l3.75-3.75Zm1.5 6.75a2.25 2.25 0 1 0 4.5 0 2.25 2.25 0 0 0-4.5 0Z',
  shield: 'M12 3.75 5.25 6v4.313c0 4.252 2.885 8.236 6.75 9.937 3.865-1.701 6.75-5.685 6.75-9.937V6L12 3.75Z',
  drop: 'M12 2.25c2.7 3.3 5.25 6.045 5.25 9.225a5.25 5.25 0 1 1-10.5 0C6.75 8.295 9.3 5.55 12 2.25Z',
  leaf: 'M4.5 13.5C4.5 7.701 8.951 3.75 15 3.75c1.734 0 3.252.27 4.5.75-.48 7.236-5.1 12-11.25 12-1.314 0-2.565-.219-3.75-.63V13.5Z',
  box: 'M3.75 7.5 12 3.75l8.25 3.75-8.25 3.75L3.75 7.5Zm0 3.75L12 15l8.25-3.75V18L12 21.75 3.75 18v-6.75Z',
  clock: 'M12 4.5a7.5 7.5 0 1 1 0 15 7.5 7.5 0 0 1 0-15Zm0 2.25v5.25l3.75 2.25',
  percent: 'M6.75 17.25 17.25 6.75M8.25 8.25h.008v.008H8.25V8.25Zm7.5 7.5h.008v.008h-.008v-.008Z',
}

function Icon({ name, label }) {
  return (
    <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-label={label} role="img">
      <path d={iconPaths[name]} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

const featuredProducts = [
  {
    name: 'Titan Drill Driver',
    category: 'Power Tools',
    icon: 'bolt',
    price: 'KSh 18,900',
    description: 'Compact torque, fast charging, and a rugged grip built for site work and home installs.',
    background:
      'linear-gradient(145deg, #ffe27c, #ffb703 54%, #cf3a1b)',
  },
  {
    name: 'Forge Socket Kit',
    category: 'Mechanic Set',
    icon: 'nut',
    price: 'KSh 10,700',
    description: 'A heavy-duty socket collection arranged for quick access in shop vans and garages.',
    background:
      'linear-gradient(145deg, #fff0c4, #ffc247 48%, #ef4444)',
  },
  {
    name: 'SiteGuard Helmet',
    category: 'Safety Gear',
    icon: 'shield',
    price: 'KSh 4,950',
    description: 'High-visibility protection with adjustable comfort for daily use on active job sites.',
    background:
      'linear-gradient(145deg, #ffd64d, #ff9b22 55%, #b91c1c)',
  },
  {
    name: 'RackPro Storage Wall',
    category: 'Workshop',
    icon: 'box',
    price: 'KSh 14,200',
    description: 'Modular wall storage that keeps tools visible, organized, and ready to grab fast.',
    background:
      'linear-gradient(145deg, #fff4bf, #f4bf23 52%, #f87171)',
  },
]


const inventorySignals = [
  {
    label: 'Fast pickup',
    value: '2 hours',
    icon: 'clock',
  },
  {
    label: 'Trade discount',
    value: 'Up to 18% KE',
    icon: 'percent',
  },
  {
    label: 'Warehouse stock',
    value: '1,200+',
    icon: 'stock',
  },
]

function App() {
  return (
    <div className="page-shell">
      <header className="topbar">
        <div className="brand">
          <div className="brand-mark" aria-hidden="true"></div>
          <div className="brand-copy">
            <span>Monross Hardware Kenya</span>
          </div>
        </div>

        <nav className="desktop-nav" aria-label="Primary">
          <a className="nav-item" href="#home"><Icon name="home" label="Home" /><span>Home</span></a>
          <a className="nav-item" href="#stock"><Icon name="stock" label="Stock" /><span>Stock</span></a>
          <a className="nav-item" href="#deals"><Icon name="deal" label="Deals" /><span>Deals</span></a>
          <a className="nav-item" href="#contact"><Icon name="contact" label="Contact" /><span>Contact</span></a>
        </nav>

        <div className="topbar-actions">
          <a className="button-secondary" href="#contact">
            Contact store
          </a>
        </div>
      </header>

      <main>
        <section className="hero-section" id="home">
          <div className="hero-copy">
            <div className="eyebrow">Built for Kenyan trade and retail</div>
            <h1>Premium hardware shopping that feels fast and trustworthy.</h1>
            <p>
              Monross Hardware Kenya keeps shopping simple with clear categories, deal highlights,
              and product-first cards for fundis, site teams, and home builders across Kenya.
            </p>

            <div className="category-strip" aria-label="Popular categories">
              {categoryHighlights.map((item) => (
                <span className="category-pill" key={item.name}>
                  <Icon name={item.icon} label={item.name} />
                  {item.name}
                </span>
              ))}
            </div>

            <div className="hero-actions">
              <a className="button" href="#stock">
                Browse best sellers
              </a>
              <a className="button-secondary" href="#deals">
                View live deals
              </a>
            </div>

            <div className="signal-row" aria-label="Inventory highlights">
              {inventorySignals.map((signal) => (
                <article className="signal-card" key={signal.label}>
                  <Icon name={signal.icon} label={signal.label} />
                  <span>{signal.label}</span>
                  <strong>{signal.value}</strong>
                </article>
              ))}
            </div>
          </div>

          <div className="hero-visual" aria-hidden="true">
            <div className="hero-stage">
              <div className="hero-board hero-board-primary">
                <div className="board-heading">
                  <span className="section-label">This week</span>
                  <strong>Jobsite essentials</strong>
                </div>
                <div className="board-grid">
                  <div className="spotlight-card">
                    <span className="section-label">Bulk offer</span>
                    <strong>Save on contractor packs</strong>
                    <p>Fasteners, drill bits, gloves, and tapes bundled for Nairobi and regional trade orders.</p>
                  </div>
                  <div className="mini-card">
                    <span className="section-label">Stock alert</span>
                    <strong>42 core SKUs restocked</strong>
                    <p>High-turn inventory is back and ready for same-day pickup in Nairobi.</p>
                  </div>
                  <div className="mini-card alert">
                    <span className="section-label">Priority</span>
                    <strong>Weekend red-tag sale</strong>
                    <p>Clear red accents make urgent Kenya-wide deals impossible to miss.</p>
                  </div>
                </div>
              </div>

              <div className="hero-board hero-board-secondary">
                <div className="seller-panel">
                  <span className="section-label">Service lane</span>
                  <strong>Trade accounts, pickup slots, and fast support</strong>
                  <p>Show M-Pesa checkout, local delivery, and pro account signup for Kenyan buyers.</p>
                </div>
                <div className="board-stats">
                  <div>
                    <span className="section-label">Conversion</span>
                    <strong>+31%</strong>
                  </div>
                  <p>Sharper hierarchy helps buyers reach stock pages faster.</p>
                </div>
                <div className="board-chip-row">
                  <span>Pickup Ready</span>
                  <span>M-Pesa Ready</span>
                  <span>Open 7 Days</span>
                </div>
              </div>
            </div>

            <div className="sales-card">
              <span className="section-label">Quick snapshot</span>
              <strong>Designed to move stock, not just decorate the page</strong>
              <div className="metric">
                <span>118</span>
                <p>Orders influenced by featured deals and category-first entry points.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="content-section" id="stock">
          <div className="section-heading">
            <div>
              <div className="eyebrow">Featured stock</div>
              <h2>Product cards that feel more industrial, practical, and conversion-ready.</h2>
            </div>
            <p>Real inventory with strong naming, clear categories, and firm pricing.</p>
          </div>

          <div className="products-grid">
            {featuredProducts.map((product) => (
              <article className="product-card" key={product.name}>
                <div className="product-image" style={{ backgroundImage: product.background }}></div>
                <div className="product-copy">
                  <div className="product-meta">
                    <span className="product-tag">
                      <Icon name={product.icon} label={product.category} />
                      {product.category}
                    </span>
                    <span className="product-price">{product.price}</span>
                  </div>
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section" id="deals">
          <div className="highlight-banner deal-banner">
            <div className="highlight-copy">
              <div className="eyebrow">Deal rail</div>
              <h2>Promotions now land with clearer urgency and stronger contrast.</h2>
              <p>
                Highlight flash sales, seasonal campaigns, and contractor offers in one place.
              </p>
            </div>
            <div className="deal-metrics">
              <strong>18% off</strong>
              <span>On selected site gear across Kenya through Sunday</span>
            </div>
          </div>
        </section>

      </main>

      <footer className="footer" id="contact">
        <div className="footer-card">
          <div className="footer-cta">
            <div className="footer-copy">
              <div className="eyebrow">Ready to launch</div>
              <h2>Monross Hardware Kenya is now cleaner, faster, and easier to shop.</h2>
              <p>
                Built to sell tools and trade inventory in Kenya with a responsive layout and clear calls to action.
              </p>
            </div>

            <div className="footer-actions">
              <a className="button" href="#home">
                Back to top
              </a>
              <a className="button-secondary" href="#stock">
                Explore stock
              </a>
            </div>
          </div>

          <div className="footer-panel">
            <div className="footer-meta">
              <strong>Storefront details</strong>
              <span className="product-tag">Responsive UI</span>
            </div>
            <ul>
              <li>Hardware-focused content and category structure</li>
              <li>Conversion-ready product cards and promo areas</li>
              <li>Responsive layout with floating mobile navigation for Kenyan shoppers</li>
            </ul>
          </div>
        </div>
      </footer>

      <nav className="floating-nav" aria-label="Mobile quick navigation">
        <a href="#home"><Icon name="home" label="Home" /><span className="sr-only">Home</span></a>
        <a href="#stock"><Icon name="stock" label="Stock" /><span className="sr-only">Stock</span></a>
        <a href="#deals"><Icon name="deal" label="Deals" /><span className="sr-only">Deals</span></a>
        <a href="#contact"><Icon name="contact" label="Contact" /><span className="sr-only">Contact</span></a>
      </nav>
    </div>
  )
}

export default App
