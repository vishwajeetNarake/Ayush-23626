// ============================================
// SHOP PAGE — Product Grid + Filters
// ============================================
import { products, scentFamilies, occasions, collections } from '../data/products.js';
import { productCard, attachCartBtns } from './home.js';
import { gsap } from 'gsap';

export function ShopPage(params, query) {
  const category = params?.category || null;
  const titles = {
    'perfumes': 'Perfumes', 'attars': 'Attars',
    'home-fragrances': 'Home Fragrances', null: 'All Products'
  };
  const pageTitle = titles[category] || 'All Products';
  const pageDesc = category
    ? `Browse our ${pageTitle.toLowerCase()} collection`
    : 'Discover our complete range of handcrafted fragrances';

  const html = `
    <section class="shop-page">
      <div class="shop-hero">
        <div class="shop-hero__bg"></div>
        <div class="container">
          <p class="section-label">Shop</p>
          <h1 class="shop-hero__title">${pageTitle}</h1>
          <p class="shop-hero__desc">${pageDesc}</p>
        </div>
      </div>

      <div class="container">
        <div class="shop-layout">
          <!-- FILTERS SIDEBAR -->
          <aside class="shop-filters" id="shop-filters">
            <div class="shop-filters__header">
              <h3>Filters</h3>
              <button class="shop-filters__clear" id="clear-filters">Clear All</button>
            </div>

            <!-- Category -->
            <div class="filter-group">
              <button class="filter-group__title" data-toggle="cat">Category <span class="filter-chevron">▾</span></button>
              <div class="filter-group__body" id="filter-cat">
                <label class="filter-check"><input type="radio" name="cat" value="" ${!category ? 'checked' : ''} /> All</label>
                <label class="filter-check"><input type="radio" name="cat" value="perfume" ${category === 'perfumes' ? 'checked' : ''} /> Perfumes</label>
                <label class="filter-check"><input type="radio" name="cat" value="attar" ${category === 'attars' ? 'checked' : ''} /> Attars</label>
                <label class="filter-check"><input type="radio" name="cat" value="home" ${category === 'home-fragrances' ? 'checked' : ''} /> Home Fragrances</label>
              </div>
            </div>

            <!-- Gender -->
            <div class="filter-group">
              <button class="filter-group__title" data-toggle="gender">Gender <span class="filter-chevron">▾</span></button>
              <div class="filter-group__body" id="filter-gender">
                <label class="filter-check"><input type="radio" name="gender" value="" checked /> All</label>
                <label class="filter-check"><input type="radio" name="gender" value="him" /> For Him</label>
                <label class="filter-check"><input type="radio" name="gender" value="her" /> For Her</label>
                <label class="filter-check"><input type="radio" name="gender" value="unisex" /> Unisex</label>
              </div>
            </div>

            <!-- Scent Family -->
            <div class="filter-group">
              <button class="filter-group__title" data-toggle="scent">Scent Family <span class="filter-chevron">▾</span></button>
              <div class="filter-group__body" id="filter-scent">
                <label class="filter-check"><input type="radio" name="scent" value="" checked /> All</label>
                ${scentFamilies.map(f => `<label class="filter-check"><input type="radio" name="scent" value="${f.id}" /> ${f.icon} ${f.name}</label>`).join('')}
              </div>
            </div>

            <!-- Occasion -->
            <div class="filter-group">
              <button class="filter-group__title" data-toggle="occasion">Occasion <span class="filter-chevron">▾</span></button>
              <div class="filter-group__body" id="filter-occasion">
                <label class="filter-check"><input type="radio" name="occasion" value="" checked /> All</label>
                ${occasions.map(o => `<label class="filter-check"><input type="radio" name="occasion" value="${o.id}" /> ${o.icon} ${o.name}</label>`).join('')}
              </div>
            </div>

            <!-- Sort -->
            <div class="filter-group">
              <button class="filter-group__title" data-toggle="sort">Sort By <span class="filter-chevron">▾</span></button>
              <div class="filter-group__body" id="filter-sort">
                <label class="filter-check"><input type="radio" name="sort" value="popular" checked /> Most Popular</label>
                <label class="filter-check"><input type="radio" name="sort" value="price-low" /> Price: Low to High</label>
                <label class="filter-check"><input type="radio" name="sort" value="price-high" /> Price: High to Low</label>
                <label class="filter-check"><input type="radio" name="sort" value="newest" /> Newest First</label>
              </div>
            </div>
          </aside>

          <!-- PRODUCT GRID -->
          <div class="shop-main">
            <div class="shop-toolbar">
              <button class="shop-toolbar__filter-btn" id="mobile-filter-toggle">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="4" y1="7" x2="20" y2="7"/><line x1="4" y1="12" x2="16" y2="12"/><line x1="4" y1="17" x2="12" y2="17"/></svg>
                Filters
              </button>
              <span class="shop-toolbar__count" id="product-count"></span>
            </div>
            <div class="shop-active-filters" id="active-filters"></div>
            <div class="shop-grid" id="shop-grid"></div>
            <div class="shop-empty" id="shop-empty" style="display:none;">
              <span style="font-size:3rem;">🔍</span>
              <h3>No fragrances found</h3>
              <p>Try adjusting your filters to discover more scents.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;

  return {
    html,
    init: () => {
      // Apply initial query params
      if (query?.gender) {
        const radio = document.querySelector(`input[name="gender"][value="${query.gender}"]`);
        if (radio) radio.checked = true;
      }
      if (query?.scent) {
        const radio = document.querySelector(`input[name="scent"][value="${query.scent}"]`);
        if (radio) radio.checked = true;
      }
      if (query?.occasion) {
        const radio = document.querySelector(`input[name="occasion"][value="${query.occasion}"]`);
        if (radio) radio.checked = true;
      }
      if (query?.filter === 'bestseller') {
        // Show only bestsellers — handled in renderProducts
      }

      // Set category from URL
      if (category) {
        const catMap = { 'perfumes': 'perfume', 'attars': 'attar', 'home-fragrances': 'home' };
        const radio = document.querySelector(`input[name="cat"][value="${catMap[category] || ''}"]`);
        if (radio) radio.checked = true;
      }

      renderProducts(query);

      // Filter change listeners
      document.querySelectorAll('.shop-filters input[type="radio"]').forEach(input => {
        input.addEventListener('change', () => renderProducts(query));
      });

      // Clear filters
      document.getElementById('clear-filters')?.addEventListener('click', () => {
        document.querySelectorAll('.shop-filters input[value=""]').forEach(r => r.checked = true);
        document.querySelector('input[name="sort"][value="popular"]').checked = true;
        renderProducts({});
      });

      // Filter group toggles
      document.querySelectorAll('.filter-group__title').forEach(btn => {
        btn.addEventListener('click', () => {
          btn.parentElement.classList.toggle('collapsed');
        });
      });

      // Mobile filter toggle
      document.getElementById('mobile-filter-toggle')?.addEventListener('click', () => {
        document.getElementById('shop-filters')?.classList.toggle('open');
      });

      // Animate grid in
      requestAnimationFrame(() => {
        const cards = document.querySelectorAll('.shop-grid .product-card');
        gsap.from(cards, { y: 40, opacity: 0, duration: 0.5, stagger: 0.06, ease: 'power3.out' });
      });

      return () => {};
    }
  };
}

function renderProducts(queryOverride) {
  const grid = document.getElementById('shop-grid');
  const countEl = document.getElementById('product-count');
  const emptyEl = document.getElementById('shop-empty');
  const activeEl = document.getElementById('active-filters');
  if (!grid) return;

  // Get filter values
  const catVal = document.querySelector('input[name="cat"]:checked')?.value || '';
  const genderVal = document.querySelector('input[name="gender"]:checked')?.value || '';
  const scentVal = document.querySelector('input[name="scent"]:checked')?.value || '';
  const occasionVal = document.querySelector('input[name="occasion"]:checked')?.value || '';
  const sortVal = document.querySelector('input[name="sort"]:checked')?.value || 'popular';

  let filtered = [...products];

  // Apply filters
  if (catVal) filtered = filtered.filter(p => p.category === catVal);
  if (genderVal) filtered = filtered.filter(p => p.gender === genderVal || p.gender === 'unisex');
  if (scentVal) filtered = filtered.filter(p => p.scentFamily === scentVal);
  if (occasionVal) filtered = filtered.filter(p => p.occasions.includes(occasionVal));
  if (queryOverride?.filter === 'bestseller') filtered = filtered.filter(p => p.badge === 'Bestseller');

  // Sort
  switch (sortVal) {
    case 'price-low': filtered.sort((a, b) => a.price - b.price); break;
    case 'price-high': filtered.sort((a, b) => b.price - a.price); break;
    case 'newest': filtered.sort((a, b) => b.id - a.id); break;
    default: filtered.sort((a, b) => (b.reviewCount || 0) - (a.reviewCount || 0)); break;
  }

  // Render
  countEl.textContent = `${filtered.length} product${filtered.length !== 1 ? 's' : ''}`;

  if (filtered.length === 0) {
    grid.style.display = 'none';
    emptyEl.style.display = '';
  } else {
    grid.style.display = '';
    emptyEl.style.display = 'none';
    grid.innerHTML = filtered.map(p => productCard(p)).join('');
    attachCartBtns(grid);
  }

  // Active filter chips
  const chips = [];
  if (catVal) chips.push({ label: catVal === 'perfume' ? 'Perfumes' : catVal === 'attar' ? 'Attars' : 'Home', field: 'cat' });
  if (genderVal) chips.push({ label: genderVal === 'him' ? 'For Him' : genderVal === 'her' ? 'For Her' : 'Unisex', field: 'gender' });
  if (scentVal) chips.push({ label: scentVal.charAt(0).toUpperCase() + scentVal.slice(1), field: 'scent' });
  if (occasionVal) chips.push({ label: occasionVal.charAt(0).toUpperCase() + occasionVal.slice(1), field: 'occasion' });

  activeEl.innerHTML = chips.map(c => `<span class="filter-chip">${c.label} <button data-clear="${c.field}">✕</button></span>`).join('');

  // Chip remove handlers
  activeEl.querySelectorAll('[data-clear]').forEach(btn => {
    btn.addEventListener('click', () => {
      const field = btn.dataset.clear;
      const radio = document.querySelector(`input[name="${field}"][value=""]`);
      if (radio) radio.checked = true;
      renderProducts(queryOverride);
    });
  });
}
