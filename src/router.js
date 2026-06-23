// ============================================
// BARE ESSENCE — SPA Hash Router
// ============================================
import { gsap } from 'gsap';

const routes = {};
let currentCleanup = null;

export function registerRoute(path, handler) {
  routes[path] = handler;
}

export function navigateTo(path) {
  window.location.hash = path;
}

export function initRouter() {
  window.addEventListener('hashchange', handleRouteChange);
  // Handle initial load
  handleRouteChange();
}

async function handleRouteChange() {
  const hash = window.location.hash.slice(1) || '/';
  const appEl = document.getElementById('app');
  if (!appEl) return;

  // Parse route
  const { route, params, query } = parseRoute(hash);

  // Run cleanup of previous page
  if (currentCleanup && typeof currentCleanup === 'function') {
    currentCleanup();
    currentCleanup = null;
  }

  // Find matching handler
  const handler = routes[route];
  if (!handler) {
    appEl.innerHTML = notFoundPage();
    window.scrollTo(0, 0);
    return;
  }

  // Page transition: fade out
  await gsap.to(appEl, { opacity: 0, duration: 0.2, ease: 'power2.in' });

  // Render new page
  const result = handler(params, query);
  if (typeof result === 'object' && result.html) {
    appEl.innerHTML = result.html;
    if (result.init) {
      currentCleanup = result.init();
    }
  } else {
    appEl.innerHTML = result;
  }

  // Scroll to top
  window.scrollTo(0, 0);

  // Page transition: fade in
  gsap.fromTo(appEl, { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.35, ease: 'power2.out' });

  // Update active nav
  updateActiveNav(hash);
}

function parseRoute(hash) {
  const [pathWithParams, queryString] = hash.split('?');
  const parts = pathWithParams.split('/').filter(Boolean);

  // Parse query string
  const query = {};
  if (queryString) {
    queryString.split('&').forEach(pair => {
      const [key, val] = pair.split('=');
      query[decodeURIComponent(key)] = decodeURIComponent(val || '');
    });
  }

  // Try to match dynamic routes
  // /product-stories/:slug
  if (parts[0] === 'product-stories' && parts[1]) {
    return { route: '/product-stories/:slug', params: { slug: parts[1] }, query };
  }
  // /product/:slug
  if (parts[0] === 'product' && parts[1]) {
    return { route: '/product/:slug', params: { slug: parts[1] }, query };
  }
  // /collections/:slug
  if (parts[0] === 'collections' && parts[1]) {
    return { route: '/collections/:slug', params: { slug: parts[1] }, query };
  }
  // /shop/:category
  if (parts[0] === 'shop' && parts[1]) {
    return { route: '/shop/:category', params: { category: parts[1] }, query };
  }

  // Static routes
  const route = '/' + parts.join('/');
  return { route: route || '/', params: {}, query };
}

function updateActiveNav(hash) {
  document.querySelectorAll('.nav-panel__link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === '#' + hash || (hash === '/' && href === '#/')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

function notFoundPage() {
  return `
    <section class="page-not-found">
      <div class="container" style="text-align:center; padding: 8rem 2rem;">
        <h1 style="font-size:6rem; color:var(--clr-primary); margin-bottom:1rem;">404</h1>
        <h2 style="color:var(--clr-white); margin-bottom:1rem;">Page Not Found</h2>
        <p style="color:var(--clr-gray-light); margin-bottom:2rem;">The page you're looking for doesn't exist or has been moved.</p>
        <a href="#/" class="hero__cta" style="opacity:1;animation:none;">Back to Home</a>
      </div>
    </section>
  `;
}
