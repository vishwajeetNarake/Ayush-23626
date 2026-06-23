// ============================================
// PRODUCT STORIES PAGE
// ============================================
import { products } from '../data/products.js';
import { gsap } from 'gsap';

const storySlugs = [
  'velvet-oud',
  'rose-whisper',
  'midnight-musk',
  'first-rain',
  'citrus-bloom',
  'ocean-breeze',
  'golden-saffron',
  'royal-attar'
];

export function ProductStoriesPage() {
  // Filter and order the products according to storySlugs
  const featuredProducts = products.filter(p => storySlugs.includes(p.slug));
  featuredProducts.sort((a, b) => storySlugs.indexOf(a.slug) - storySlugs.indexOf(b.slug));

  const html = `
    <section class="stories-page">
      <!-- Hero Header -->
      <div class="stories-hero">
        <div class="stories-hero__bg"></div>
        <div class="container">
          <div class="stories-hero__content">
            <p class="section-label">Olfactory Chronicles</p>
            <h1 class="stories-hero__title">Product Stories</h1>
            <p class="stories-hero__desc">
              Every creation in our house has a soul, a moment of inspiration, and a legacy of raw craftsmanship. 
              Step into the narratives of our eight signature creations and trace their botanical roots.
            </p>
          </div>
        </div>
      </div>

      <!-- Stories Grid -->
      <div class="container">
        <div class="stories-grid" id="stories-grid">
          ${featuredProducts.map((p, index) => {
            const scentFamilyFormatted = p.scentFamily.charAt(0).toUpperCase() + p.scentFamily.slice(1);
            const categoryFormatted = p.category.charAt(0).toUpperCase() + p.category.slice(1);
            const genderFormatted = p.gender === 'him' ? 'For Him' : p.gender === 'her' ? 'For Her' : 'Unisex';
            
            return `
              <div class="story-card" data-index="${index}">
                <div class="story-card__image-wrap">
                  <img src="${p.image}" alt="${p.name}" class="story-card__image" loading="lazy" />
                  ${p.badge ? `<span class="story-card__badge story-card__badge--${p.badge.toLowerCase()}">${p.badge}</span>` : ''}
                </div>
                <div class="story-card__content">
                  <div class="story-card__header">
                    <span class="story-card__collection">${p.collection} Collection</span>
                    <h2 class="story-card__title">${p.name}</h2>
                    <div class="story-card__tags">
                      <span class="story-tag">${scentFamilyFormatted}</span>
                      <span class="story-tag">${categoryFormatted}</span>
                      <span class="story-tag">${genderFormatted}</span>
                    </div>
                  </div>
                  
                  <div class="story-card__body">
                    <p class="story-card__quote">"${p.description}"</p>
                    <p class="story-card__text">${p.longDescription.split('. ')[0]}. ${p.longDescription.split('. ')[1] || ''}.</p>
                  </div>
                  
                  <div class="story-card__notes-profile">
                    <h4 class="story-card__section-title">Scent Profile</h4>
                    <div class="story-card__note-line">
                      <span class="note-label">Top Notes:</span>
                      <span class="note-values">${p.topNotes.join(', ')}</span>
                    </div>
                    <div class="story-card__note-line">
                      <span class="note-label">Heart Notes:</span>
                      <span class="note-values">${p.heartNotes.join(', ')}</span>
                    </div>
                    <div class="story-card__note-line">
                      <span class="note-label">Base Notes:</span>
                      <span class="note-values">${p.baseNotes.join(', ')}</span>
                    </div>
                  </div>
                  
                  <div class="story-card__footer">
                    <span class="story-card__price">₹${p.price.toLocaleString('en-IN')}</span>
                    <a href="#/product-stories/${p.slug}" class="story-card__link">
                      Discover Full Story
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                    </a>
                  </div>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    </section>
  `;

  return {
    html,
    init: () => {
      // Micro-animation: Staggered entry animation for the story cards
      const cards = document.querySelectorAll('.story-card');
      if (cards.length) {
        gsap.fromTo(cards, 
          { y: 50, opacity: 0 }, 
          { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power3.out' }
        );
      }
      return () => {};
    }
  };
}
