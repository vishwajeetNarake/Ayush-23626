// ---- Cart State ----
let cart = [];

const cartDrawer = document.getElementById('cart-drawer');
const cartOverlay = document.getElementById('cart-overlay');
const cartItemsEl = document.getElementById('cart-items');
const cartEmptyEl = document.getElementById('cart-empty');
const cartFooterEl = document.getElementById('cart-footer');
const cartTotalEl = document.getElementById('cart-total');
const cartCountEl = document.getElementById('cart-count');

export function initCart() {
  // Open cart
  document.getElementById('nav-cart')?.addEventListener('click', openCart);
  // Close cart
  document.getElementById('cart-close')?.addEventListener('click', closeCart);
  cartOverlay?.addEventListener('click', closeCart);

  // Checkout button
  document.getElementById('checkout-btn')?.addEventListener('click', () => {
    alert('Thank you for your interest! Checkout integration coming soon.');
  });

  // Newsletter form
  document.getElementById('newsletter-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('newsletter-email').value;
    if (email) {
      alert(`Thank you for subscribing with ${email}! 🌹`);
      document.getElementById('newsletter-email').value = '';
    }
  });
}

export function openCart() {
  cartDrawer?.classList.add('open');
  cartOverlay?.classList.add('open');
  document.body.style.overflow = 'hidden';
}

export function closeCart() {
  cartDrawer?.classList.remove('open');
  cartOverlay?.classList.remove('open');
  document.body.style.overflow = '';
}

export function addToCart(product) {
  const existing = cart.find(item => item.id === product.id);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ ...product, qty: 1 });
  }
  renderCart();
  openCart();
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  renderCart();
}

function updateQty(productId, delta) {
  const item = cart.find(i => i.id === productId);
  if (item) {
    item.qty += delta;
    if (item.qty <= 0) {
      removeFromCart(productId);
      return;
    }
  }
  renderCart();
}

function renderCart() {
  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  // Update count badge
  if (totalItems > 0) {
    cartCountEl.style.display = 'flex';
    cartCountEl.textContent = totalItems;
  } else {
    cartCountEl.style.display = 'none';
  }

  // Render items
  if (cart.length === 0) {
    cartEmptyEl.style.display = '';
    cartFooterEl.style.display = 'none';
    // remove rendered items
    const rendered = cartItemsEl.querySelectorAll('.cart-item');
    rendered.forEach(el => el.remove());
    return;
  }

  cartEmptyEl.style.display = 'none';
  cartFooterEl.style.display = '';
  cartTotalEl.textContent = `₹${totalPrice.toLocaleString('en-IN')}`;

  // Clear existing items
  const rendered = cartItemsEl.querySelectorAll('.cart-item');
  rendered.forEach(el => el.remove());

  cart.forEach(item => {
    const el = document.createElement('div');
    el.className = 'cart-item';
    el.innerHTML = `
      <img src="${item.image}" alt="${item.name}" class="cart-item__image" />
      <div class="cart-item__info">
        <div class="cart-item__name">${item.name}</div>
        <div class="cart-item__price">₹${item.price.toLocaleString('en-IN')}</div>
        <div class="cart-item__qty">
          <button data-id="${item.id}" data-action="minus">−</button>
          <span>${item.qty}</span>
          <button data-id="${item.id}" data-action="plus">+</button>
        </div>
        <div class="cart-item__remove" data-id="${item.id}" data-action="remove">Remove</div>
      </div>
    `;
    cartItemsEl.appendChild(el);
  });

  // Attach qty events
  cartItemsEl.querySelectorAll('[data-action="minus"]').forEach(btn => {
    btn.addEventListener('click', () => updateQty(parseInt(btn.dataset.id), -1));
  });
  cartItemsEl.querySelectorAll('[data-action="plus"]').forEach(btn => {
    btn.addEventListener('click', () => updateQty(parseInt(btn.dataset.id), 1));
  });
  cartItemsEl.querySelectorAll('[data-action="remove"]').forEach(btn => {
    btn.addEventListener('click', () => removeFromCart(parseInt(btn.dataset.id)));
  });
}
