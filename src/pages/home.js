// ============================================
// HOME PAGE — Bare Essence
// ============================================
import { products, scentFamilies, testimonials } from '../data/products.js';
import { addToCart } from '../cart.js';
import { initBottleShowcase } from '../three-hero.js';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function HomePage() {
  const html = `
    <!-- HERO -->
    <section class="hero" id="hero">
      <div class="hero__bg-gradient"></div>
      <div class="hero__content">
        <p class="hero__label">Handcrafted Indian Fragrances</p>
        <h1 class="hero__title">The Art of <em>Scent</em></h1>
        <p class="hero__tagline">Six generations of perfumery heritage, distilled into every drop.</p>
        <a href="#/shop" class="hero__cta" id="hero-cta">
          Explore Collection
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </a>
      </div>
      <div class="hero__scroll-indicator">
        <div class="hero__scroll-line"></div>
        <span>Scroll</span>
      </div>
    </section>

    <!-- PHILOSOPHY -->
    <section class="philosophy" id="philosophy">
      <div class="philosophy__inner reveal">
        <p class="section-label">Our Philosophy</p>
        <p class="philosophy__quote">
          "In a world of fleeting trends, we craft <em>timeless scents</em>. Each fragrance is a journey — from rare botanical harvests to your skin."
        </p>
        <div class="philosophy__divider"></div>
        <p class="philosophy__text">
          Bare Essence is rooted in India's rich perfumery heritage spanning over 170 years. We honour the ancient craft of handblending while embracing modern sensibilities — creating fragrances that are pure, original, and deeply personal.
        </p>
      </div>
    </section>

    <!-- CATEGORIES -->
    <section class="categories" id="categories">
      <div class="container">
        <div class="categories__grid" id="categories-grid"></div>
      </div>
    </section>

    <!-- 3D BOTTLE SHOWCASE -->
    <section class="bottle-showcase" id="bottle-showcase">
      <div class="bottle-showcase__sticky">
        <canvas class="bottle-showcase__canvas" id="bottle-canvas"></canvas>
        <div class="bottle-showcase__overlay">
          <div class="bottle-showcase__text bottle-showcase__text--top" id="bottle-text-top">
            <p class="section-label">Signature Fragrance</p>
            <h2 class="bottle-showcase__title">Mystic Oudh</h2>
          </div>
          <div class="bottle-showcase__text bottle-showcase__text--bottom" id="bottle-text-bottom">
            <p class="bottle-showcase__notes">Nutmeg · Oudh · Patchouli</p>
            <p class="bottle-showcase__size">Parfum · 60 ML</p>
            <a href="#/product/mystic-oudh" class="bottle-showcase__cta">Shop Now</a>
          </div>
        </div>
        <div class="bottle-showcase__progress">
          <div class="bottle-showcase__progress-bar" id="bottle-progress"></div>
        </div>
      </div>
    </section>

    <!-- FEATURED COLLECTION -->
    <section class="featured" id="featured">
      <div class="featured__bg"></div>
      <div class="featured__header reveal">
        <p class="section-label">Curated For You</p>
        <h2 class="section-title">Signature Collection</h2>
        <p class="section-subtitle" style="margin: 0 auto;">Our core fragrances — timeless scents crafted for the modern individual.</p>
      </div>
      <div class="featured__slider" id="featured-slider"></div>
    </section>

    <!-- BESTSELLERS -->
    <section class="bestsellers" id="bestsellers">
      <div class="container">
        <div class="bestsellers__header reveal">
          <div>
            <p class="section-label">Most Loved</p>
            <h2 class="section-title">Bestsellers</h2>
          </div>
          <a href="#/shop?filter=bestseller" class="bestsellers__view-all">
            View All
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
        </div>
        <div class="bestsellers__grid" id="bestsellers-grid"></div>
      </div>
    </section>

    <!-- CRAFTSMANSHIP -->
    <section class="craftsmanship" id="craftsmanship">
      <div class="craftsmanship__bg">
        <img src="/images/craftsmanship_bg.png" alt="Artisanal perfumery craftsmanship" loading="lazy" />
      </div>
      <div class="container">
        <div class="craftsmanship__inner">
          <div class="craftsmanship__text-side reveal">
            <p class="section-label">Heritage & Craft</p>
            <h2 class="section-title">170 Years of Perfumery Legacy</h2>
            <p class="craftsmanship__text">
              For six generations, our family has mastered the ancient art of fragrance creation. Using the traditional Deg & Bhapka distillation process, we transform rare botanicals — saffron from Kashmir, roses from Kannauj, sandalwood from Mysore — into liquid poetry.
            </p>
            <div class="craftsmanship__stats">
              <div class="stat"><span class="stat__number" data-count="170">0</span><span class="stat__label">Years of Legacy</span></div>
              <div class="stat"><span class="stat__number" data-count="6">0</span><span class="stat__label">Generations</span></div>
              <div class="stat"><span class="stat__number" data-count="100">0</span><span class="stat__label">% Natural</span></div>
            </div>
            <a href="#/about" class="craftsmanship__link">Read Our Story →</a>
          </div>
          <div class="craftsmanship__image-side reveal reveal-delay-2">
            <img src="/images/craftsmanship_bg.png" alt="Traditional perfumery workshop" loading="lazy" />
          </div>
        </div>
      </div>
    </section>

    <!-- FOUNDER'S STORY -->
    <section class="founder-story" id="founder-story">
      <div class="container">
        <div class="founder-story__inner">
          <div class="founder-story__image reveal">
            <img src="/images/founder_story.png" alt="The Founder" loading="lazy" />
          </div>
          <div class="founder-story__text reveal reveal-delay-2">
            <p class="section-label">Founder's Story</p>
            <h2 class="section-title">A Vision of Elegance</h2>
            <p class="founder-story__desc">
              "My journey with perfumery began in my childhood, surrounded by the intoxicating aromas of my family's historic distillation units. I wanted to bring that profound, authentic experience to the world—blending our ancestral techniques with a modern vision of luxury."
            </p>
            <p class="founder-story__signature">
              — The Founder
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- SCENT FAMILIES -->
    <section class="scent-families" id="scent-families">
      <div class="scent-families__header reveal">
        <p class="section-label">Discover Your Scent</p>
        <h2 class="section-title section-title--dark">Scent Families</h2>
        <p class="section-subtitle" style="margin: 0 auto; color: var(--clr-gray);">Each fragrance family tells a different story. Find yours.</p>
      </div>
      <div class="scent-families__scroll" id="scent-families-scroll"></div>
    </section>

    <!-- TESTIMONIALS -->
    <section class="testimonials" id="testimonials">
      <div class="testimonials__header reveal">
        <p class="section-label">What They Say</p>
        <h2 class="section-title">Customer Love</h2>
      </div>
      <div class="testimonials__carousel" id="testimonials-carousel"></div>
    </section>

    <!-- NEWSLETTER -->
    <section class="newsletter" id="newsletter">
      <div class="newsletter__pattern"></div>
      <div class="newsletter__inner reveal">
        <p class="section-label" style="color: var(--clr-gold-light);">Stay Connected</p>
        <h2 class="newsletter__title">Join the Essence</h2>
        <p class="newsletter__subtitle">Get exclusive offers, new launches, and fragrance tips delivered to your inbox.</p>
        <form class="newsletter__form" id="newsletter-form">
          <input type="email" class="newsletter__input" id="newsletter-email" placeholder="Enter your email address" required />
          <button type="submit" class="newsletter__btn">Subscribe</button>
        </form>
      </div>
    </section>
  `;

  return {
    html,
    init: () => {
      // Render dynamic content
      renderCategories();
      renderFeaturedSlider();
      renderBestsellers();
      renderScentFamilies();
      renderTestimonials();

      // Init 3D Bottle
      const bottleCanvas = document.getElementById('bottle-canvas');
      if (bottleCanvas) {
        initBottleShowcase(bottleCanvas);
      }

      // Init scroll animations
      requestAnimationFrame(() => initHomeAnimations());

      // Newsletter
      document.getElementById('newsletter-form')?.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('newsletter-email').value;
        if (email) {
          alert(`Thank you for subscribing with ${email}! 🌹`);
          document.getElementById('newsletter-email').value = '';
        }
      });

      // Return cleanup function
      return () => {
        ScrollTrigger.getAll().forEach(t => t.kill());
      };
    }
  };
}

function initHomeAnimations() {
  // Reveal on scroll
  document.querySelectorAll('#app .reveal').forEach(el => {
    ScrollTrigger.create({ trigger: el, start: 'top 85%', onEnter: () => el.classList.add('active'), once: true });
  });

  // Counter animation
  document.querySelectorAll('.stat__number[data-count]').forEach(el => {
    const target = parseInt(el.getAttribute('data-count'));
    ScrollTrigger.create({
      trigger: el, start: 'top 85%', once: true,
      onEnter: () => {
        gsap.to(el, {
          duration: 2, ease: 'power2.out',
          onUpdate: function () { el.textContent = Math.round(this.progress() * target); },
          onComplete: function () { el.textContent = target; }
        });
      }
    });
  });

  // Stagger animations
  const categoryCards = document.querySelectorAll('.category-card');
  if (categoryCards.length) {
    gsap.from(categoryCards, { scrollTrigger: { trigger: '#categories-grid', start: 'top 80%', once: true }, y: 60, opacity: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out' });
  }

  const featuredCards = document.querySelectorAll('#featured-slider .product-card');
  if (featuredCards.length) {
    gsap.from(featuredCards, { scrollTrigger: { trigger: '#featured-slider', start: 'top 80%', once: true }, x: 80, opacity: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out' });
  }

  const bestsellerCards = document.querySelectorAll('#bestsellers-grid .product-card');
  if (bestsellerCards.length) {
    gsap.from(bestsellerCards, { scrollTrigger: { trigger: '#bestsellers-grid', start: 'top 80%', once: true }, y: 60, opacity: 0, duration: 0.8, stagger: 0.12, ease: 'power3.out' });
  }

  // Hero scroll fade
  const heroContent = document.querySelector('.hero__content');
  if (heroContent) {
    gsap.to(heroContent, { scrollTrigger: { trigger: '.hero', start: 'top top', end: '60% top', scrub: 1 }, opacity: 0, y: -60, ease: 'none' });
  }

  // Parallax on craftsmanship
  const craftBg = document.querySelector('.craftsmanship__bg img');
  if (craftBg) {
    gsap.to(craftBg, { scrollTrigger: { trigger: '.craftsmanship', start: 'top bottom', end: 'bottom top', scrub: 1.5 }, y: -80, ease: 'none' });
  }
}

function renderCategories() {
  const grid = document.getElementById('categories-grid');
  if (!grid) return;
  const categories = [
    { name: 'Perfumes', image: '/images/product_velvet_oud.png', link: '#/shop/perfumes' },
    { name: 'Attars', image: '/images/product_royal_attar.png', link: '#/shop/attars' },
    { name: 'For Her', image: '/images/product_rose_whisper.png', link: '#/shop?gender=her' },
    { name: 'For Him', image: '/images/product_midnight_musk.png', link: '#/shop?gender=him' },
    { name: 'Gift Sets', image: '/images/product_golden_saffron.png', link: '#/shop' },
    { name: 'Discovery Packs', image: '/images/product_first_rain.png', link: '#/shop' },
    { name: 'Home Fragrances', image: '/images/product_citrus_bloom.png', link: '#/shop/home-fragrances' },
    { name: 'Bestsellers', image: '/images/product_ocean_breeze.png', link: '#/shop?filter=bestseller' },
  ];
  grid.innerHTML = categories.map(cat => `
    <a href="${cat.link}" class="category-card" aria-label="Browse ${cat.name}">
      <img src="${cat.image}" alt="${cat.name}" class="category-card__image" loading="lazy" />
      <div class="category-card__overlay">
        <span class="category-card__name">${cat.name}</span>
        <span class="category-card__cta">Explore <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></span>
      </div>
    </a>
  `).join('');
}

function renderFeaturedSlider() {
  const slider = document.getElementById('featured-slider');
  if (!slider) return;
  slider.innerHTML = products.filter(p => p.category === 'perfume').map(p => productCard(p)).join('');
  attachCartBtns(slider);
}

function renderBestsellers() {
  const grid = document.getElementById('bestsellers-grid');
  if (!grid) return;
  const best = products.filter(p => p.badge === 'Bestseller' || p.badge === 'New' || p.badge === 'Limited').slice(0, 6);
  grid.innerHTML = (best.length >= 3 ? best : products.slice(0, 6)).map(p => productCard(p)).join('');
  attachCartBtns(grid);
}

function renderScentFamilies() {
  const scroll = document.getElementById('scent-families-scroll');
  if (!scroll) return;
  scroll.innerHTML = scentFamilies.map(f => `
    <a href="#/shop?scent=${f.id}" class="scent-card" aria-label="Browse ${f.name} fragrances">
      <span class="scent-card__icon">${f.icon}</span>
      <h3 class="scent-card__name">${f.name}</h3>
      <p class="scent-card__desc">${f.description}</p>
      <div class="scent-card__line" style="background: ${f.color};"></div>
    </a>
  `).join('');
}

function renderTestimonials() {
  const carousel = document.getElementById('testimonials-carousel');
  if (!carousel) return;
  carousel.innerHTML = testimonials.map(t => `
    <div class="testimonial-card">
      <div class="testimonial-card__stars">${'★'.repeat(t.rating)}${'☆'.repeat(5 - t.rating)}</div>
      <p class="testimonial-card__text">"${t.text}"</p>
      <div class="testimonial-card__author">
        <div class="testimonial-card__avatar">${t.name.charAt(0)}</div>
        <div>
          <div class="testimonial-card__name">${t.name}</div>
          <div class="testimonial-card__location">${t.location}</div>
          <div class="testimonial-card__product">Purchased: ${t.product}</div>
        </div>
      </div>
    </div>
  `).join('');
}

// Shared product card + cart attachment
export function productCard(product) {
  const notes = product.topNotes.slice(0, 2).concat(product.heartNotes.slice(0, 1)).join(' · ');
  const badgeClass = product.badge ? `product-card__badge product-card__badge--${product.badge.toLowerCase()}` : '';
  return `
    <a href="#/product/${product.slug}" class="product-card" data-product-id="${product.id}">
      <div class="product-card__image-wrap">
        <img src="${product.image}" alt="${product.name}" class="product-card__image" loading="lazy" />
        ${product.badge ? `<span class="${badgeClass}">${product.badge}</span>` : ''}
      </div>
      <div class="product-card__info">
        <div class="product-card__collection">${product.collection} Collection</div>
        <h3 class="product-card__name">${product.name}</h3>
        <p class="product-card__notes">${notes}</p>
        <div class="product-card__footer">
          <div class="product-card__price">
            <span class="product-card__price-current">₹${product.price.toLocaleString('en-IN')}</span>
            ${product.originalPrice ? `<span class="product-card__price-original">₹${product.originalPrice.toLocaleString('en-IN')}</span>` : ''}
          </div>
          <button class="product-card__add-btn" data-add-id="${product.id}" aria-label="Add ${product.name} to cart">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
          </button>
        </div>
      </div>
    </a>
  `;
}

export function attachCartBtns(container) {
  container.querySelectorAll('[data-add-id]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const product = products.find(p => p.id === parseInt(btn.dataset.addId));
      if (product) {
        addToCart(product);
        btn.style.background = 'var(--clr-primary)';
        btn.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>';
        setTimeout(() => {
          btn.style.background = '';
          btn.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>';
        }, 1200);
      }
    });
  });
}
