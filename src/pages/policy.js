// ============================================
// POLICY PAGE — Generic Template
// ============================================
import { policies } from '../data/products.js';

export function PolicyPage(params, query, policyKey) {
  const policy = policies[policyKey];
  if (!policy) {
    return `<section class="container" style="padding:8rem 2rem;text-align:center;"><h1 style="color:var(--clr-white)">Page Not Found</h1></section>`;
  }

  const html = `
    <section class="policy-page">
      <div class="policy-hero">
        <div class="container">
          <p class="section-label">Legal</p>
          <h1 class="policy-hero__title">${policy.title}</h1>
        </div>
      </div>
      <div class="container">
        <div class="policy-content">
          ${policy.content}
        </div>
        <div class="policy-footer">
          <p>Last updated: March 2026</p>
          <p>If you have questions about this policy, please <a href="#/contact">contact us</a>.</p>
        </div>
      </div>
    </section>
  `;

  return { html, init: () => () => {} };
}
