import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function initAnimations() {
  // ---- Reveal on scroll ----
  const revealElements = document.querySelectorAll('.reveal');
  revealElements.forEach((el) => {
    ScrollTrigger.create({
      trigger: el,
      start: 'top 85%',
      onEnter: () => el.classList.add('active'),
      once: true
    });
  });

  // ---- Navbar scroll effect ----
  const navbar = document.getElementById('navbar');
  ScrollTrigger.create({
    start: 80,
    onUpdate: (self) => {
      if (self.scroll() > 80) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }
  });

  // ---- Counter animation ----
  const statNumbers = document.querySelectorAll('.stat__number[data-count]');
  statNumbers.forEach((el) => {
    const target = parseInt(el.getAttribute('data-count'));
    ScrollTrigger.create({
      trigger: el,
      start: 'top 85%',
      once: true,
      onEnter: () => {
        gsap.to(el, {
          duration: 2,
          ease: 'power2.out',
          onUpdate: function() {
            el.textContent = Math.round(this.progress() * target);
          },
          onComplete: function() {
            el.textContent = target;
          }
        });
      }
    });
  });

  // ---- Category cards stagger ----
  const categoryCards = document.querySelectorAll('.category-card');
  if (categoryCards.length) {
    gsap.from(categoryCards, {
      scrollTrigger: {
        trigger: '#categories-grid',
        start: 'top 80%',
        once: true
      },
      y: 60,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: 'power3.out'
    });
  }

  // ---- Product cards in featured slider ----
  const featuredCards = document.querySelectorAll('#featured-slider .product-card');
  if (featuredCards.length) {
    gsap.from(featuredCards, {
      scrollTrigger: {
        trigger: '#featured-slider',
        start: 'top 80%',
        once: true
      },
      x: 80,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power3.out'
    });
  }

  // ---- Bestseller cards stagger ----
  const bestsellerCards = document.querySelectorAll('#bestsellers-grid .product-card');
  if (bestsellerCards.length) {
    gsap.from(bestsellerCards, {
      scrollTrigger: {
        trigger: '#bestsellers-grid',
        start: 'top 80%',
        once: true
      },
      y: 60,
      opacity: 0,
      duration: 0.8,
      stagger: 0.12,
      ease: 'power3.out'
    });
  }

  // ---- Scent family cards ----
  const scentCards = document.querySelectorAll('.scent-card');
  if (scentCards.length) {
    gsap.from(scentCards, {
      scrollTrigger: {
        trigger: '#scent-families-scroll',
        start: 'top 85%',
        once: true
      },
      y: 40,
      opacity: 0,
      duration: 0.7,
      stagger: 0.1,
      ease: 'power3.out'
    });
  }

  // ---- Testimonial cards ----
  const testimonialCards = document.querySelectorAll('.testimonial-card');
  if (testimonialCards.length) {
    gsap.from(testimonialCards, {
      scrollTrigger: {
        trigger: '#testimonials-carousel',
        start: 'top 85%',
        once: true
      },
      x: 60,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power3.out'
    });
  }

  // ---- Parallax on craftsmanship background ----
  const craftBg = document.querySelector('.craftsmanship__bg img');
  if (craftBg) {
    gsap.to(craftBg, {
      scrollTrigger: {
        trigger: '.craftsmanship',
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1.5
      },
      y: -80,
      ease: 'none'
    });
  }

  // ---- Hero scroll fade ----
  const heroContent = document.querySelector('.hero__content');
  if (heroContent) {
    gsap.to(heroContent, {
      scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: '60% top',
        scrub: 1
      },
      opacity: 0,
      y: -60,
      ease: 'none'
    });
  }

  // ---- Smooth scroll for anchor links ----
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        // Close mobile nav if open
        document.getElementById('nav-panel')?.classList.remove('open');
        document.getElementById('nav-overlay')?.classList.remove('open');
        document.getElementById('nav-hamburger')?.classList.remove('active');

        gsap.to(window, {
          scrollTo: { y: target, offsetY: 0 },
          duration: 1.2,
          ease: 'power3.inOut'
        });
      }
    });
  });
}
