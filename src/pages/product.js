// ============================================
// PRODUCT DETAIL PAGE
// ============================================
import { products } from '../data/products.js';
import { addToCart } from '../cart.js';
import { productCard, attachCartBtns } from './home.js';

export function ProductPage(params) {
  const product = products.find(p => p.slug === params.slug);
  if (!product) {
    return `<section class="container" style="padding:8rem 2rem;text-align:center;"><h1 style="color:var(--clr-white)">Product Not Found</h1><p style="color:var(--clr-gray-light);margin-top:1rem;">This product doesn't exist.</p><a href="#/shop" class="hero__cta" style="opacity:1;animation:none;margin-top:2rem;display:inline-flex;">Browse Shop</a></section>`;
  }

  const related = products.filter(p => p.id !== product.id && (p.scentFamily === product.scentFamily || p.collection === product.collection)).slice(0, 4);

  const html = `
    <section class="pdp">
      <!-- Breadcrumb -->
      <div class="container">
        <nav class="breadcrumb">
          <a href="#/">Home</a>
          <span>›</span>
          <a href="#/shop">Shop</a>
          <span>›</span>
          <a href="#/shop/${product.category === 'perfume' ? 'perfumes' : product.category === 'attar' ? 'attars' : 'home-fragrances'}">${product.category === 'perfume' ? 'Perfumes' : product.category === 'attar' ? 'Attars' : 'Home Fragrances'}</a>
          <span>›</span>
          <span class="breadcrumb--current">${product.name}</span>
        </nav>
      </div>

      <div class="container">
        <div class="pdp__layout">
          <!-- Image Gallery -->
          <div class="pdp__gallery">
            <div class="pdp__main-image">
              <img src="${product.image}" alt="${product.name}" id="pdp-main-img" />
              ${product.badge ? `<span class="product-card__badge product-card__badge--${product.badge.toLowerCase()}">${product.badge}</span>` : ''}
            </div>
          </div>

          <!-- Product Info -->
          <div class="pdp__info">
            <p class="pdp__collection">${product.collection} Collection</p>
            <h1 class="pdp__name">${product.name}</h1>

            <div class="pdp__rating">
              <span class="pdp__stars">${'★'.repeat(Math.round(product.rating))}${'☆'.repeat(5 - Math.round(product.rating))}</span>
              <span class="pdp__rating-text">${product.rating} (${product.reviewCount} reviews)</span>
            </div>

            <div class="pdp__price">
              <span class="pdp__price-current">₹${product.price.toLocaleString('en-IN')}</span>
              ${product.originalPrice ? `<span class="pdp__price-original">₹${product.originalPrice.toLocaleString('en-IN')}</span><span class="pdp__discount">${Math.round((1 - product.price / product.originalPrice) * 100)}% OFF</span>` : ''}
            </div>

            <p class="pdp__description">${product.description}</p>

            <!-- Scent Pyramid -->
            <div class="pdp__scent-pyramid">
              <h3 class="pdp__section-title">Scent Profile</h3>
              <div class="scent-pyramid">
                <div class="scent-pyramid__level scent-pyramid__level--top">
                  <span class="scent-pyramid__label">Top Notes</span>
                  <div class="scent-pyramid__notes">${product.topNotes.map(n => `<span class="scent-note">${n}</span>`).join('')}</div>
                </div>
                <div class="scent-pyramid__level scent-pyramid__level--heart">
                  <span class="scent-pyramid__label">Heart Notes</span>
                  <div class="scent-pyramid__notes">${product.heartNotes.map(n => `<span class="scent-note">${n}</span>`).join('')}</div>
                </div>
                <div class="scent-pyramid__level scent-pyramid__level--base">
                  <span class="scent-pyramid__label">Base Notes</span>
                  <div class="scent-pyramid__notes">${product.baseNotes.map(n => `<span class="scent-note">${n}</span>`).join('')}</div>
                </div>
              </div>
            </div>

            <!-- Size Selector -->
            ${product.sizes.length > 1 ? `
            <div class="pdp__sizes">
              <h3 class="pdp__section-title">Size</h3>
              <div class="pdp__size-options">
                ${product.sizes.map((s, i) => `<button class="pdp__size-btn ${i === product.sizes.length - 1 ? 'active' : ''}" data-size="${s}">${s}</button>`).join('')}
              </div>
            </div>` : ''}

            <!-- Quantity + Add to Cart -->
            <div class="pdp__actions">
              <div class="pdp__qty">
                <button class="pdp__qty-btn" id="qty-minus">−</button>
                <span class="pdp__qty-value" id="qty-value">1</span>
                <button class="pdp__qty-btn" id="qty-plus">+</button>
              </div>
              <button class="pdp__add-btn" id="pdp-add-cart">
                Add to Cart — ₹${product.price.toLocaleString('en-IN')}
              </button>
            </div>

            <!-- Details -->
            <div class="pdp__details">
              <div class="pdp__detail-row">
                <span>Scent Family</span>
                <span>${product.scentFamily.charAt(0).toUpperCase() + product.scentFamily.slice(1)}</span>
              </div>
              <div class="pdp__detail-row">
                <span>Size</span>
                <span>${product.size}</span>
              </div>
              <div class="pdp__detail-row">
                <span>Gender</span>
                <span>${product.gender === 'him' ? 'For Him' : product.gender === 'her' ? 'For Her' : 'Unisex'}</span>
              </div>
              <div class="pdp__detail-row">
                <span>Concentration</span>
                <span>${product.category === 'attar' ? 'Pure Attar Oil' : product.category === 'perfume' ? 'Eau de Parfum' : 'Home Fragrance'}</span>
              </div>
            </div>

            <!-- Long Description -->
            <div class="pdp__long-desc">
              <h3 class="pdp__section-title">About This Fragrance</h3>
              <p>${product.longDescription}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Related Products -->
      ${related.length > 0 ? `
      <section class="pdp__related">
        <div class="container">
          <h2 class="section-title" style="text-align:center;margin-bottom:2rem;">You Might Also Like</h2>
          <div class="pdp__related-grid" id="related-grid">
            ${related.map(p => productCard(p)).join('')}
          </div>
        </div>
      </section>` : ''}
    </section>
  `;

  return {
    html,
    init: () => {
      let qty = 1;
      const qtyVal = document.getElementById('qty-value');

      document.getElementById('qty-minus')?.addEventListener('click', () => {
        if (qty > 1) { qty--; qtyVal.textContent = qty; }
      });
      document.getElementById('qty-plus')?.addEventListener('click', () => {
        if (qty < 10) { qty++; qtyVal.textContent = qty; }
      });

      document.getElementById('pdp-add-cart')?.addEventListener('click', () => {
        for (let i = 0; i < qty; i++) addToCart(product);
        const btn = document.getElementById('pdp-add-cart');
        btn.textContent = '✓ Added to Cart';
        btn.style.background = 'var(--clr-accent)';
        setTimeout(() => {
          btn.textContent = `Add to Cart — ₹${product.price.toLocaleString('en-IN')}`;
          btn.style.background = '';
        }, 2000);
      });

      // Size selector
      document.querySelectorAll('.pdp__size-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          document.querySelectorAll('.pdp__size-btn').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
        });
      });

      // Related products cart
      const relGrid = document.getElementById('related-grid');
      if (relGrid) attachCartBtns(relGrid);

      return () => {};
    }
  };
}
