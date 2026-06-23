// ============================================
// CONTACT PAGE
// ============================================
import { faqData } from '../data/products.js';

export function ContactPage() {
  const html = `
    <section class="contact-page">
      <div class="contact-hero">
        <div class="container">
          <p class="section-label">Get In Touch</p>
          <h1 class="contact-hero__title">Contact Us</h1>
          <p class="contact-hero__desc">We'd love to hear from you. Whether it's a question, feedback, or just to say hello.</p>
        </div>
      </div>

      <div class="container">
        <div class="contact-layout">
          <!-- Contact Form -->
          <div class="contact-form-wrap">
            <h2 class="contact-section-title">Send Us a Message</h2>
            <form class="contact-form" id="contact-form">
              <div class="contact-form__row">
                <div class="contact-form__field">
                  <label for="contact-name">Full Name</label>
                  <input type="text" id="contact-name" placeholder="Your name" required />
                </div>
                <div class="contact-form__field">
                  <label for="contact-email">Email Address</label>
                  <input type="email" id="contact-email" placeholder="your@email.com" required />
                </div>
              </div>
              <div class="contact-form__field">
                <label for="contact-subject">Subject</label>
                <select id="contact-subject">
                  <option>General Inquiry</option>
                  <option>Order Support</option>
                  <option>Returns & Refunds</option>
                  <option>Product Question</option>
                  <option>Wholesale / B2B</option>
                  <option>Press & Media</option>
                </select>
              </div>
              <div class="contact-form__field">
                <label for="contact-message">Message</label>
                <textarea id="contact-message" rows="5" placeholder="Tell us how we can help..." required></textarea>
              </div>
              <button type="submit" class="contact-form__submit">Send Message</button>
            </form>
          </div>

          <!-- Contact Info -->
          <div class="contact-info">
            <h2 class="contact-section-title">Visit Us</h2>
            <div class="contact-info__card">
              <div class="contact-info__item">
                <span class="contact-info__icon">📍</span>
                <div>
                  <strong>Bare Essence Fragrance House</strong>
                  <p>42, Aminabad Road, Lucknow<br/>Uttar Pradesh 226018, India</p>
                </div>
              </div>
              <div class="contact-info__item">
                <span class="contact-info__icon">📞</span>
                <div>
                  <strong>Phone</strong>
                  <p>+91 522 400 1856</p>
                </div>
              </div>
              <div class="contact-info__item">
                <span class="contact-info__icon">📧</span>
                <div>
                  <strong>Email</strong>
                  <p>hello@bareessence.in</p>
                </div>
              </div>
              <div class="contact-info__item">
                <span class="contact-info__icon">🕐</span>
                <div>
                  <strong>Store Hours</strong>
                  <p>Mon – Sat: 10:00 AM – 8:00 PM<br/>Sunday: 11:00 AM – 6:00 PM</p>
                </div>
              </div>
            </div>

            <div class="contact-social">
              <h3>Follow Us</h3>
              <div class="contact-social__links">
                <a href="#" class="contact-social__link">Instagram</a>
                <a href="#" class="contact-social__link">Facebook</a>
                <a href="#" class="contact-social__link">Twitter</a>
                <a href="#" class="contact-social__link">YouTube</a>
              </div>
            </div>
          </div>
        </div>

        <!-- FAQ -->
        <div class="contact-faq">
          <h2 class="section-title" style="text-align:center;margin-bottom:2rem;">Frequently Asked Questions</h2>
          <div class="faq-list" id="faq-list">
            ${faqData.map((f, i) => `
              <div class="faq-item" data-faq="${i}">
                <button class="faq-item__question">${f.q} <span class="faq-chevron">+</span></button>
                <div class="faq-item__answer"><p>${f.a}</p></div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </section>
  `;

  return {
    html,
    init: () => {
      // Contact form submission
      document.getElementById('contact-form')?.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('contact-name').value;
        alert(`Thank you ${name}! We'll get back to you within 24 hours. 📧`);
        e.target.reset();
      });

      // FAQ accordion
      document.querySelectorAll('.faq-item__question').forEach(btn => {
        btn.addEventListener('click', () => {
          const item = btn.parentElement;
          const isOpen = item.classList.contains('open');
          document.querySelectorAll('.faq-item').forEach(f => f.classList.remove('open'));
          if (!isOpen) item.classList.add('open');
        });
      });

      return () => {};
    }
  };
}
