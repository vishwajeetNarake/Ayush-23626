// ============================================
// BARE ESSENCE — Main Entry Point
// ============================================
import './style.css';
import './pages.css';
import { registerRoute, initRouter } from './router.js';
import { initCart } from './cart.js';
import { HomePage } from './pages/home.js';
import { ShopPage } from './pages/shop.js';
import { ProductPage } from './pages/product.js';
import { CollectionPage } from './pages/collection.js';
import { AboutPage } from './pages/about.js';
import { ContactPage } from './pages/contact.js';
import { PolicyPage } from './pages/policy.js';
import { ProductStoriesPage } from './pages/product-stories.js';
import { ProductStoryDetailPage } from './pages/product-story-detail.js';

// ---- Register all routes ----
registerRoute('/', () => HomePage());
registerRoute('/shop', (params, query) => ShopPage({}, query));
registerRoute('/shop/:category', (params, query) => ShopPage(params, query));
registerRoute('/product-stories', () => ProductStoriesPage());
registerRoute('/product-stories/:slug', (params) => ProductStoryDetailPage(params));
registerRoute('/product/:slug', (params) => ProductPage(params));
registerRoute('/collections/:slug', (params) => CollectionPage(params));
registerRoute('/about', () => AboutPage());
registerRoute('/contact', () => ContactPage());
registerRoute('/shipping-policy', () => PolicyPage(null, null, 'shipping'));
registerRoute('/return-policy', () => PolicyPage(null, null, 'returns'));
registerRoute('/privacy-policy', () => PolicyPage(null, null, 'privacy'));
registerRoute('/terms', () => PolicyPage(null, null, 'terms'));

// ---- Init on DOM ready ----
document.addEventListener('DOMContentLoaded', () => {
  // Init cart
  initCart();

  // Init navigation
  initNavigation();

  // Init SPA router
  initRouter();
});

// ---- Navigation ----
function initNavigation() {
  const hamburger = document.getElementById('nav-hamburger');
  const navPanel = document.getElementById('nav-panel');
  const navOverlay = document.getElementById('nav-overlay');

  hamburger?.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navPanel?.classList.toggle('open');
    navOverlay?.classList.toggle('open');
    document.body.style.overflow = navPanel?.classList.contains('open') ? 'hidden' : '';
  });

  navOverlay?.addEventListener('click', closeNav);

  // Close nav on any link click inside nav panel
  navPanel?.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') closeNav();
  });

  // Navbar scroll effect
  let lastScroll = 0;
  window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 80) {
      navbar?.classList.add('scrolled');
    } else {
      navbar?.classList.remove('scrolled');
    }
    lastScroll = window.scrollY;
  });

  function closeNav() {
    hamburger?.classList.remove('active');
    navPanel?.classList.remove('open');
    navOverlay?.classList.remove('open');
    document.body.style.overflow = '';
  }
}
