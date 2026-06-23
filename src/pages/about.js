// ============================================
// ABOUT / OUR STORY PAGE
// ============================================
import { aboutContent } from '../data/products.js';

export function AboutPage() {
  const html = `
    <section class="about-page">
      <!-- Hero -->
      <div class="about-hero">
        <div class="about-hero__bg">
          <img src="/images/craftsmanship_bg.png" alt="Our Heritage" />
        </div>
        <div class="about-hero__content">
          <p class="section-label">Our Story</p>
          <h1 class="about-hero__title">170 Years of<br/>Perfumery Heritage</h1>
          <p class="about-hero__desc">From a small attar workshop in Lucknow to a modern fragrance house — our journey is one of passion, patience, and perfection.</p>
        </div>
      </div>

      <!-- Heritage -->
      <div class="about-section about-section--cream">
        <div class="container">
          <div class="about-block">
            <p class="section-label" style="color:var(--clr-primary);">Heritage</p>
            <h2 class="section-title section-title--dark">${aboutContent.heritage.title}</h2>
            <p class="about-text">${aboutContent.heritage.text}</p>
          </div>
        </div>
      </div>

      <!-- Timeline -->
      <div class="about-section about-section--dark">
        <div class="container">
          <p class="section-label" style="text-align:center;">Our Journey</p>
          <h2 class="section-title" style="text-align:center;">Milestones</h2>
          <div class="timeline">
            ${aboutContent.milestones.map((m, i) => `
              <div class="timeline__item ${i % 2 === 0 ? 'timeline__item--left' : 'timeline__item--right'}">
                <div class="timeline__year">${m.year}</div>
                <div class="timeline__text">${m.text}</div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>

      <!-- Philosophy -->
      <div class="about-section about-section--cream">
        <div class="container">
          <div class="about-two-col">
            <div class="about-block">
              <p class="section-label" style="color:var(--clr-primary);">Philosophy</p>
              <h2 class="section-title section-title--dark">${aboutContent.philosophy.title}</h2>
              <p class="about-text">${aboutContent.philosophy.text}</p>
            </div>
            <div class="about-block">
              <p class="section-label" style="color:var(--clr-primary);">Craftsmanship</p>
              <h2 class="section-title section-title--dark">${aboutContent.craftsmanship.title}</h2>
              <p class="about-text">${aboutContent.craftsmanship.text}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Values -->
      <div class="about-section about-section--dark">
        <div class="container">
          <h2 class="section-title" style="text-align:center;margin-bottom:3rem;">What We Stand For</h2>
          <div class="about-values">
            <div class="about-value">
              <span class="about-value__icon">🌿</span>
              <h3>100% Natural</h3>
              <p>No synthetic chemicals. Only pure botanical extracts and essential oils.</p>
            </div>
            <div class="about-value">
              <span class="about-value__icon">🐇</span>
              <h3>Cruelty-Free</h3>
              <p>Never tested on animals. We believe beauty should never cause harm.</p>
            </div>
            <div class="about-value">
              <span class="about-value__icon">🇮🇳</span>
              <h3>Made in India</h3>
              <p>Proudly crafted in Lucknow, supporting local artisans and communities.</p>
            </div>
            <div class="about-value">
              <span class="about-value__icon">♻️</span>
              <h3>Sustainable</h3>
              <p>Eco-conscious packaging and responsible sourcing of all ingredients.</p>
            </div>
          </div>
        </div>
      </div>

      <!-- CTA -->
      <div class="about-section about-section--cta">
        <div class="container" style="text-align:center;">
          <h2 class="section-title">Experience Our Heritage</h2>
          <p class="section-subtitle" style="margin:0 auto 2rem;color:var(--clr-cream-dark);">Discover fragrances crafted with 170 years of expertise.</p>
          <a href="#/shop" class="hero__cta" style="opacity:1;animation:none;">Shop Our Collection</a>
        </div>
      </div>
    </section>
  `;

  return { html, init: () => () => {} };
}
