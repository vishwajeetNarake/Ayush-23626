// ============================================
// COLLECTION LANDING PAGE
// ============================================
import { products, collections } from '../data/products.js';
import { productCard, attachCartBtns } from './home.js';

export function CollectionPage(params) {
  const collection = collections.find(c => c.slug === params.slug);
  if (!collection) {
    return `<section class="container" style="padding:8rem 2rem;text-align:center;"><h1 style="color:var(--clr-white)">Collection Not Found</h1><a href="#/shop" class="hero__cta" style="opacity:1;animation:none;margin-top:2rem;display:inline-flex;">Browse Shop</a></section>`;
  }

  const collectionProducts = products.filter(p => collection.productIds.includes(p.id));

  const html = `
    <section class="collection-page">
      <div class="collection-hero">
        <div class="collection-hero__bg">
          <img src="${collection.image}" alt="${collection.name}" />
        </div>
        <div class="collection-hero__content">
          <p class="section-label">Collection</p>
          <h1 class="collection-hero__title">${collection.name}</h1>
          <p class="collection-hero__desc">${collection.description}</p>
        </div>
      </div>

      <div class="container">
        <div class="collection-story">
          <p>${collection.longDescription}</p>
        </div>

        <div class="collection-grid" id="collection-grid">
          ${collectionProducts.map(p => productCard(p)).join('')}
        </div>
      </div>
    </section>
  `;

  return {
    html,
    init: () => {
      const grid = document.getElementById('collection-grid');
      if (grid) attachCartBtns(grid);
      return () => {};
    }
  };
}
