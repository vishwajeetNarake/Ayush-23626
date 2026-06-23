// ============================================
// PRODUCT STORY DETAIL PAGE — Cinematic Edition
// Immersive motion-driven storytelling experience
// ============================================
import { products } from '../data/products.js';
import { addToCart } from '../cart.js';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';

gsap.registerPlugin(ScrollTrigger, TextPlugin);

// ---- Per-product accent colors & themes ----
const productThemes = {
  'velvet-oud':      { accent: '#8B1A2A', glow: 'rgba(139,26,42,0.6)',   particle: '#d4af37', bg: 'linear-gradient(135deg,#0a0505 0%,#1a0a0d 50%,#0d0708 100%)' },
  'rose-whisper':    { accent: '#c4637a', glow: 'rgba(196,99,122,0.6)',  particle: '#f9a8b9', bg: 'linear-gradient(135deg,#07040a 0%,#150c12 50%,#0b0607 100%)' },
  'midnight-musk':   { accent: '#2b3d5c', glow: 'rgba(43,61,92,0.7)',   particle: '#8fa3c0', bg: 'linear-gradient(135deg,#020408 0%,#0a1020 50%,#030507 100%)' },
  'first-rain':      { accent: '#2a6654', glow: 'rgba(42,102,84,0.6)',  particle: '#7ec9a8', bg: 'linear-gradient(135deg,#020a07 0%,#071a12 50%,#040d08 100%)' },
  'citrus-bloom':    { accent: '#c47d2a', glow: 'rgba(196,125,42,0.6)', particle: '#f9c87e', bg: 'linear-gradient(135deg,#080600 0%,#1a1200 50%,#0d0a02 100%)' },
  'ocean-breeze':    { accent: '#1a6e8a', glow: 'rgba(26,110,138,0.6)', particle: '#7ad4f2', bg: 'linear-gradient(135deg,#020608 0%,#071220 50%,#040810 100%)' },
  'golden-saffron':  { accent: '#b5860d', glow: 'rgba(181,134,13,0.7)', particle: '#f7d56e', bg: 'linear-gradient(135deg,#080600 0%,#1c1400 50%,#0e0b00 100%)' },
  'royal-attar':     { accent: '#7c2d6e', glow: 'rgba(124,45,110,0.6)', particle: '#d48ec8', bg: 'linear-gradient(135deg,#060208 0%,#140618 50%,#08030c 100%)' },
};

// ---- Rich story data for each featured product ----
const storyData = {
  'velvet-oud': {
    subtitle: 'A Symphony of Darkness & Light',
    tagline: 'Where ancient forests meet eternal desire',
    chapters: ['Origin', 'Inspiration', 'Craft', 'Journey', 'Ritual'],
    origin: 'Born from the ancient oud-trading routes between Assam and the Arabian Peninsula, Velvet Oud is our tribute to the world\'s most precious wood. For centuries, agarwood has been revered as "liquid gold" — and our master perfumers spent eighteen months perfecting this blend to honour that legacy.',
    inspiration: 'The idea came on a rain-soaked evening in Lucknow\'s old quarter. Our founder sat in his grandfather\'s workshop, surrounded by decades-old oud shavings, when the scent of aged wood mingled with Bulgarian roses drying on a nearby rack. That accidental marriage of East and West became Velvet Oud.',
    craftProcess: 'We source our oud from wild-harvested agarwood in the forests of Assam, aged for a minimum of three years. The Bulgarian rose absolute is cold-extracted to preserve its velvety depth. These two precious ingredients are blended using the traditional Deg method — copper vessels gently coaxing the molecules into harmony over seven days.',
    scentJourney: 'The first breath is a warm sparkle — saffron threads from Kashmir meeting the citrus brightness of bergamot. Within minutes, the heart reveals itself: a duet of precious oud wood and damask rose, rich yet never heavy. As hours pass, the base settles into your skin like a whispered secret — amber, vanilla, and musk creating a trail that lingers long after you\'ve left the room.',
    bestFor: 'Evening events, romantic dinners, and any moment that demands quiet authority. Velvet Oud is not loud — it is magnetic.',
    pullQuote: 'Some fragrances announce your arrival. Velvet Oud ensures you\'re remembered long after you\'ve gone.',
    stats: [{ label: 'Longevity', value: '10-12 hrs', icon: '⏳' }, { label: 'Sillage', value: 'Commanding', icon: '🌀' }, { label: 'Heritage', value: '170 yrs', icon: '📜' }]
  },
  'rose-whisper': {
    subtitle: 'Dawn in a Kannauj Rose Garden',
    tagline: 'The softest power you\'ll ever wear',
    chapters: ['Origin', 'Inspiration', 'Craft', 'Journey', 'Ritual'],
    origin: 'Rose Whisper was born in the rose fields of Kannauj — India\'s perfume capital, where our family has sourced Damask roses for six generations. Each May, at the first light of dawn, thousands of petals are hand-picked before the sun steals their volatile oils.',
    inspiration: 'Our lead perfumer\'s daughter once described the scent of their garden at sunrise as "a whisper, not a shout." That phrase became both the name and the philosophy of this fragrance — femininity expressed through restraint, elegance through subtlety.',
    craftProcess: 'We use only Damask roses harvested within the first two hours after dawn, when their oil content peaks. The petals undergo hydro-distillation in traditional copper Deg vessels, yielding a rose absolute of extraordinary purity. Pink pepper and lychee are introduced through cold infusion, preserving their bright, sparkling character.',
    scentJourney: 'The opening is a delightful surprise — pink pepper adding a gentle spice to the juicy sweetness of lychee. The heart is pure romance: Damask rose in full bloom, supported by the soft petals of peony. As the fragrance dries down, white musk and cedarwood create a clean, luminous base that feels like freshly laundered silk against skin.',
    bestFor: 'Morning meetings, garden parties, brunch dates, and everyday elegance. Rose Whisper transitions seamlessly from dawn to dusk.',
    pullQuote: 'Not every rose needs to be a dozen. Sometimes, one perfect bloom says everything.',
    stats: [{ label: 'Longevity', value: '8-10 hrs', icon: '⏳' }, { label: 'Sillage', value: 'Delicate', icon: '🌸' }, { label: 'Roses Used', value: '400 per bottle', icon: '🌹' }]
  },
  'midnight-musk': {
    subtitle: 'The Fragrance That Owns the Night',
    tagline: 'Power doesn\'t announce itself. It arrives.',
    chapters: ['Origin', 'Inspiration', 'Craft', 'Journey', 'Ritual'],
    origin: 'Midnight Musk was created for the man who understands that true power is quiet. Inspired by the night markets of Lucknow, where the air is thick with spices, leather, and mystery, this fragrance captures the energy of a city that comes alive after dark.',
    inspiration: 'During a family gathering at the ancestral home in Lucknow, our founder noticed how the evening breeze carried a unique cocktail of scents — cardamom from the kitchen, leather from his grandfather\'s armchair, and the smoky vetiver that his grandmother burned as incense. Midnight Musk is that memory, bottled.',
    craftProcess: 'The black pepper and cardamom are steam-distilled from freshly harvested spices sourced from Kerala\'s Wayanad district. The leather accord is achieved through a proprietary blend of birch tar and labdanum — no animal products are used. Vetiver roots from Haiti are aged for six months before distillation, developing the smoky depth that defines the base.',
    scentJourney: 'The opening is bold and unapologetic — black pepper ignites the senses while cardamom adds a sophisticated warmth. The heart transitions into supple leather and refined iris, creating a texture that feels almost tactile. In the base, smoky vetiver intertwines with dark musk and aged sandalwood, building a trail that lingers like a shadow.',
    bestFor: 'Evening events, formal gatherings, and nights where you want your presence to be felt before you even speak. Best applied to pulse points after a warm shower.',
    pullQuote: 'He didn\'t enter the room. The room simply rearranged itself around him.',
    stats: [{ label: 'Longevity', value: '12-14 hrs', icon: '⏳' }, { label: 'Sillage', value: 'Intense', icon: '⚡' }, { label: 'Ideal Time', value: 'After Dark', icon: '🌙' }]
  },
  'first-rain': {
    subtitle: 'Petrichor — The Earth\'s Most Ancient Perfume',
    tagline: 'The smell of a promise the sky made to the earth',
    chapters: ['Origin', 'Inspiration', 'Craft', 'Journey', 'Ritual'],
    origin: 'First Rain is our love letter to the Indian monsoon — that magical moment when the first drops hit the parched earth and release petrichor, one of nature\'s most primal and evocative scents. Scientists call it geosmin; we call it home.',
    inspiration: 'Every Indian carries a monsoon memory. For our founder, it was running barefoot through the garden as a child, the red earth turning to mud under his feet, the jasmine vine releasing its sweetest notes in the humidity. First Rain is an attempt to bottle that universal nostalgia.',
    craftProcess: 'This is perhaps our most technically challenging creation. Using the ancient Deg and Bhapka distillation process, we\'ve captured the molecule responsible for petrichor — geosmin — from baked clay sourced from the banks of the Gomti river. The jasmine is hand-picked from Madurai, and the vetiver roots are sun-dried before distillation. Each batch requires three weeks of patient maceration.',
    scentJourney: 'Close your eyes. The opening is the sky darkening — green leaves rustling, ozone crackling in the air. Then the first drop falls, and the heart opens: petrichor rising from warm earth, jasmine blooming in the sudden humidity. The base grounds you — vetiver roots digging deep into wet earth, cedarwood sheltering overhead. When you open your eyes, you\'re still here, but the monsoon stays with you.',
    bestFor: 'Casual days, nostalgic evenings, and anyone who has ever stood in the rain and smiled. Note: the petrichor molecule is naturally volatile — longevity is 4-5 hours. We chose authenticity over artificial extension.',
    pullQuote: 'We didn\'t create a fragrance. We borrowed one from the sky.',
    stats: [{ label: 'Longevity', value: '4-6 hrs', icon: '⏳' }, { label: 'Sillage', value: 'Natural', icon: '🌿' }, { label: 'Process', value: '3 weeks', icon: '🏺' }]
  },
  'citrus-bloom': {
    subtitle: 'Sunshine Captured in Glass',
    tagline: 'Your daily reminder that today is beautiful',
    chapters: ['Origin', 'Inspiration', 'Craft', 'Journey', 'Ritual'],
    origin: 'Citrus Bloom was conceived during a sourcing trip to the Amalfi Coast, where our perfumer stood in a grove of bergamot trees, the Mediterranean sun warm on his face, orange blossoms perfuming the salt air. He knew he had to bring that feeling back to India.',
    inspiration: 'India\'s mornings deserve a fragrance as bright as its sunrise. While our oud and rose compositions honour tradition, Citrus Bloom represents the modern Indian — energetic, optimistic, and effortlessly stylish. It\'s the fragrance equivalent of throwing open the windows on a spring morning.',
    craftProcess: 'The bergamot is cold-pressed from the rinds of Italian bergamot oranges, capturing the essential oil without heat damage. Neroli — the oil of orange blossom flowers — is steam-distilled in small batches to preserve its delicate honeyed sweetness. The white tea base is created through a proprietary CO2 extraction process that captures the clean, zen-like calm of freshly brewed tea.',
    scentJourney: 'The opening is pure energy — Italian bergamot and fresh lemon zest creating an immediate burst of sparkling brightness. At the heart, neroli and orange blossom add a delicate floral sweetness, like walking through a citrus grove in full bloom. The base of white tea and light musk keeps things clean, sophisticated, and skin-close.',
    bestFor: 'Morning routines, office wear, gym sessions, and weekend brunches. Citrus Bloom is your daily companion — the fragrance that makes ordinary moments feel extraordinary.',
    pullQuote: 'Some people carry sunshine wherever they go. Now you can too.',
    stats: [{ label: 'Longevity', value: '6-8 hrs', icon: '⏳' }, { label: 'Sillage', value: 'Fresh', icon: '☀️' }, { label: 'Best Time', value: 'Morning', icon: '🌅' }]
  },
  'ocean-breeze': {
    subtitle: 'Where the Sea Meets the Soul',
    tagline: 'Salt on your skin. Freedom in the air.',
    chapters: ['Origin', 'Inspiration', 'Craft', 'Journey', 'Ritual'],
    origin: 'Ocean Breeze was born on the shores of Goa during a family vacation. Our junior perfumer, a keen surfer, wanted to create a fragrance that captured the specific moment of paddling out at dawn — the salt spray, the cool water, the distant warmth of driftwood fires on the beach.',
    inspiration: 'India has over 7,500 kilometres of coastline, yet very few Indian fragrances celebrate the sea. Ocean Breeze fills that gap — it\'s a fragrance for the free-spirited, the adventurous, and anyone who believes that the best things in life smell of salt and freedom.',
    craftProcess: 'The sea salt accord is achieved through a careful blend of mineral extracts and ozonic molecules that mimic the bracing freshness of ocean spray. Grapefruit is cold-pressed for maximum vibrancy. The ambergris note is created using a sustainable synthetic alternative — no marine life is harmed. Driftwood is captured through the distillation of sun-bleached wood collected from the Konkan coast.',
    scentJourney: 'The opening is a rush of cool freshness — sea salt and grapefruit hitting you like a wave. The heart deepens with aquatic notes of seaweed and the delicate sweetness of water lily, creating something natural and immersive. The base of driftwood, ambergris, and white musk gives depth and lasting power, like the warmth of sand that retains the sun\'s heat long after sunset.',
    bestFor: 'Beach holidays, casual Fridays, outdoor adventures, and any day you want to feel unshackled. Layer with SPF and good vibes.',
    pullQuote: 'Freedom has a scent. It smells of salt, sun, and endless horizon.',
    stats: [{ label: 'Longevity', value: '7-9 hrs', icon: '⏳' }, { label: 'Sillage', value: 'Breezy', icon: '🌊' }, { label: 'Coastline', value: '7500km', icon: '🗺️' }]
  },
  'golden-saffron': {
    subtitle: 'A Treasure Worth Its Weight in Gold',
    tagline: 'Wear history. Carry legacy.',
    chapters: ['Origin', 'Inspiration', 'Craft', 'Journey', 'Ritual'],
    origin: 'Golden Saffron is the crown jewel of our Royal Collection — a fragrance that connects you to the royal courts of Awadh, where our ancestors first perfected the art of saffron-infused attar over 170 years ago. Each bottle contains saffron worth more than its weight in gold.',
    inspiration: 'In our family archives, there exists a faded recipe written by our great-great-grandfather in 1892 — a blend of Kashmiri saffron, Indian rose, and Mysore sandalwood intended for the Nawab of Awadh. Golden Saffron is our faithful recreation of that royal commission, adapted for the modern connoisseur.',
    craftProcess: 'The Kashmiri saffron threads are hand-harvested during the brief October season, when each crocus flower yields just three precious stigmas. These are infused into aged sandalwood oil using the traditional Deg and Bhapka method — a process so slow it takes eleven days to complete. The rose absolute is sourced from our partner farms in Kannauj, and the agarwood is aged for five years before distillation.',
    scentJourney: 'The opening is regal — saffron glowing like candlelight, rose petals unfurling in warm air. The heart is where history lives: agarwood and jasmine sambac creating a complexity that modern perfumery cannot replicate. The base is a meditation — sandalwood from Mysore, golden amber, and natural musk forming an aura that lasts from morning prayer to midnight feast.',
    bestFor: 'Weddings, festivals, prayer ceremonies, and any occasion that deserves the extraordinary. Apply sparingly — a single drop on each wrist is sufficient for 12+ hours.',
    pullQuote: 'This is not a fragrance. This is an inheritance, passed from one generation to the next.',
    stats: [{ label: 'Longevity', value: '12+ hrs', icon: '⏳' }, { label: 'Sillage', value: 'Opulent', icon: '👑' }, { label: 'Since', value: '1854', icon: '📜' }]
  },
  'royal-attar': {
    subtitle: 'Six Generations in Every Drop',
    tagline: 'Time cannot be synthesised. Neither can this.',
    chapters: ['Origin', 'Inspiration', 'Craft', 'Journey', 'Ritual'],
    origin: 'Royal Attar represents the pinnacle of our 170-year perfumery heritage. It is the fragrance our family is most proud of — a pure attar made using techniques unchanged since 1856, when our great-great-great-grandfather established the first workshop in the bylanes of Lucknow.',
    inspiration: 'Every generation in our family has contributed to the evolution of this attar. The first generation selected the rose variety. The second perfected the distillation temperature. The third introduced tuberose. The fourth optimised the ageing process. The fifth brought it to the world. And the sixth — our current custodians — ensure that not a single step is compromised.',
    craftProcess: 'The process begins with hand-picked Indian roses, placed in copper Deg vessels filled with aged sandalwood oil from Mysore. Through gentle steam distillation (Bhapka), the rose essence naturally transfers into the sandalwood base over several days. No heat is forced; no shortcuts are taken. The resulting attar is then aged in camel-skin bottles for a minimum of one year, allowing the molecules to marry into extraordinary complexity.',
    scentJourney: 'Royal Attar doesn\'t open — it awakens. The first impression is of pure Indian rose, voluptuous and true, nothing like its synthetic imitations. As it warms on skin, jasmine grandiflorum and tuberose emerge, adding creamy richness and narcotic sweetness. The base is where generations of expertise reveal themselves — aged Mysore sandalwood and natural musk creating a foundation so smooth, so deep, so endlessly evolving that you\'ll discover new facets for years.',
    bestFor: 'Heirloom occasions — weddings, naming ceremonies, milestone celebrations. This is the attar you pass down. A single application lasts 12-16 hours.',
    pullQuote: 'Modern perfumery can replicate many things. Time is not one of them.',
    stats: [{ label: 'Longevity', value: '16+ hrs', icon: '⏳' }, { label: 'Technique', value: 'Unchanged since 1856', icon: '🏺' }, { label: 'Generations', value: '6', icon: '👨‍👩‍👧‍👦' }]
  }
};

export function ProductStoryDetailPage(params) {
  const product = products.find(p => p.slug === params.slug);
  const story = storyData[params.slug];
  const theme = productThemes[params.slug] || productThemes['velvet-oud'];

  if (!product || !story) {
    return `
      <section class="container" style="padding:8rem 2rem;text-align:center;">
        <h1 style="color:var(--clr-white)">Story Not Found</h1>
        <p style="color:var(--clr-gray-light);margin-top:1rem;">This product story doesn't exist yet.</p>
        <a href="#/product-stories" class="hero__cta" style="opacity:1;animation:none;margin-top:2rem;display:inline-flex;">Browse All Stories</a>
      </section>
    `;
  }

  const scentFamilyFormatted = product.scentFamily.charAt(0).toUpperCase() + product.scentFamily.slice(1);
  const categoryFormatted = product.category === 'perfume' ? 'Eau de Parfum' : product.category === 'attar' ? 'Pure Attar Oil' : 'Home Fragrance';

  const html = `
    <section class="sd" style="--sd-accent:${theme.accent};--sd-glow:${theme.glow};--sd-particle:${theme.particle};">

      <!-- ======================== HERO ======================== -->
      <div class="sd__hero" id="sd-hero">
        <canvas class="sd__particles" id="sd-particles"></canvas>
        <div class="sd__hero-bg">
          <img src="${product.image}" alt="${product.name}" />
          <div class="sd__hero-ink"></div>
        </div>
        <div class="sd__hero-overlay"></div>

        <div class="sd__hero-content">
          <nav class="sd__breadcrumb">
            <a href="#/">Home</a>
            <span class="sd__breadcrumb-sep">›</span>
            <a href="#/product-stories">Product Stories</a>
            <span class="sd__breadcrumb-sep">›</span>
            <span>${product.name}</span>
          </nav>

          <div class="sd__hero-label" id="sd-label">
            <span class="sd__label-dot"></span>
            ${product.collection} Collection
          </div>

          <h1 class="sd__hero-title" id="sd-title">${product.name}</h1>
          <p class="sd__hero-subtitle" id="sd-subtitle">${story.subtitle}</p>
          <p class="sd__hero-tagline" id="sd-tagline">${story.tagline}</p>

          <div class="sd__hero-cta" id="sd-cta">
            <div class="sd__scroll-hint">
              <span class="sd__scroll-line"></span>
              <span>Scroll to explore</span>
            </div>
          </div>
        </div>

        <!-- Floating product image -->
        <div class="sd__floating-bottle" id="sd-bottle">
          <img src="${product.image}" alt="${product.name}" />
          <div class="sd__bottle-glow"></div>
        </div>
      </div>

      <!-- ======================== PULL QUOTE ======================== -->
      <div class="sd__quote-band" id="sd-quote-band">
        <div class="sd__quote-bg"></div>
        <div class="sd__quote-orb sd__quote-orb--1"></div>
        <div class="sd__quote-orb sd__quote-orb--2"></div>
        <div class="container" style="position:relative;z-index:2;">
          <blockquote class="sd__quote" id="sd-quote">
            <span class="sd__quote-mark" aria-hidden="true">"</span>
            <span class="sd__quote-text">${story.pullQuote}</span>
          </blockquote>
        </div>
      </div>

      <!-- ======================== HORIZONTAL SCROLLER ======================== -->
      <div class="sd__hscroll-wrap" id="sd-hscroll-wrap">
        <div class="sd__hscroll-track" id="sd-hscroll-track">

          <!-- Chapter 1: Origin -->
          <div class="sd__hpanel sd__hpanel--origin">
            <div class="sd__hpanel-number" data-num="01">01</div>
            <div class="sd__hpanel-content">
              <p class="sd__hpanel-label">Origin</p>
              <h2 class="sd__hpanel-title">Where It<br/>All Began</h2>
              <p class="sd__hpanel-text">${story.origin}</p>
            </div>
            <div class="sd__hpanel-visual">
              <div class="sd__hpanel-img-wrap">
                <img src="${product.image}" alt="${product.name} Origin" />
                <div class="sd__hpanel-img-overlay"></div>
              </div>
              <div class="sd__hpanel-shape sd__hpanel-shape--circle"></div>
            </div>
          </div>

          <!-- Chapter 2: Inspiration -->
          <div class="sd__hpanel sd__hpanel--inspiration">
            <div class="sd__hpanel-number" data-num="02">02</div>
            <div class="sd__hpanel-content">
              <p class="sd__hpanel-label" style="color:var(--sd-accent)">Inspiration</p>
              <h2 class="sd__hpanel-title">The Moment<br/>of Creation</h2>
              <p class="sd__hpanel-text">${story.inspiration}</p>
            </div>
            <div class="sd__hpanel-visual">
              <div class="sd__hpanel-img-wrap">
                <img src="/images/craftsmanship_bg.png" alt="Inspiration" />
                <div class="sd__hpanel-img-overlay"></div>
              </div>
              <div class="sd__hpanel-shape sd__hpanel-shape--diamond"></div>
            </div>
          </div>

          <!-- Chapter 3: Craft -->
          <div class="sd__hpanel sd__hpanel--craft">
            <div class="sd__hpanel-number" data-num="03">03</div>
            <div class="sd__hpanel-content">
              <p class="sd__hpanel-label">Craftsmanship</p>
              <h2 class="sd__hpanel-title">The Art Behind<br/>the Scent</h2>
              <p class="sd__hpanel-text">${story.craftProcess}</p>
            </div>
            <div class="sd__hpanel-visual">
              <div class="sd__hpanel-craft-grid">
                <div class="sd__craft-step">
                  <div class="sd__craft-icon">🌿</div>
                  <span>Raw Harvest</span>
                </div>
                <div class="sd__craft-step">
                  <div class="sd__craft-icon">🏺</div>
                  <span>Deg Vessel</span>
                </div>
                <div class="sd__craft-step">
                  <div class="sd__craft-icon">💧</div>
                  <span>Distillation</span>
                </div>
                <div class="sd__craft-step">
                  <div class="sd__craft-icon">⌛</div>
                  <span>Ageing</span>
                </div>
                <div class="sd__craft-step">
                  <div class="sd__craft-icon">🔬</div>
                  <span>Blending</span>
                </div>
                <div class="sd__craft-step">
                  <div class="sd__craft-icon">✨</div>
                  <span>Bottling</span>
                </div>
              </div>
            </div>
          </div>

        </div>
        <!-- Progress indicator -->
        <div class="sd__hscroll-progress" id="sd-hprogress">
          <div class="sd__hscroll-track-bar">
            <div class="sd__hscroll-fill" id="sd-hfill"></div>
          </div>
          <div class="sd__hscroll-steps">
            <span class="sd__hstep active" data-step="0">Origin</span>
            <span class="sd__hstep" data-step="1">Inspiration</span>
            <span class="sd__hstep" data-step="2">Craft</span>
          </div>
        </div>
      </div>

      <!-- ======================== SCENT JOURNEY ======================== -->
      <div class="sd__journey" id="sd-journey">
        <div class="sd__journey-bg">
          <div class="sd__journey-orb"></div>
        </div>
        <div class="container" style="position:relative;z-index:2;">
          <div class="sd__journey-header reveal-up">
            <p class="sd__section-label" style="color:var(--sd-particle)">The Scent Journey</p>
            <h2 class="sd__section-title">From First Spray to Last Trace</h2>
          </div>

          <div class="sd__journey-timeline">
            <div class="sd__journey-line" id="sd-jline"></div>

            <div class="sd__journey-stage reveal-up" data-delay="0">
              <div class="sd__journey-dot" style="background:var(--sd-particle)"></div>
              <div class="sd__journey-card">
                <div class="sd__journey-time">0 – 15 min</div>
                <h3 class="sd__journey-heading">Opening Notes</h3>
                <div class="sd__journey-notes">
                  ${product.topNotes.map(n => `<span class="sd__note-pill" style="border-color:var(--sd-accent)">${n}</span>`).join('')}
                </div>
                <p class="sd__journey-desc">First impression — bright, immediate, captivating</p>
              </div>
            </div>

            <div class="sd__journey-stage reveal-up" data-delay="200">
              <div class="sd__journey-dot" style="background:var(--sd-accent)"></div>
              <div class="sd__journey-card">
                <div class="sd__journey-time">15 min – 4 hrs</div>
                <h3 class="sd__journey-heading">Heart Notes</h3>
                <div class="sd__journey-notes">
                  ${product.heartNotes.map(n => `<span class="sd__note-pill" style="border-color:var(--sd-accent)">${n}</span>`).join('')}
                </div>
                <p class="sd__journey-desc">The soul — rich, evolving, the true character</p>
              </div>
            </div>

            <div class="sd__journey-stage reveal-up" data-delay="400">
              <div class="sd__journey-dot" style="background:#6b4c3b"></div>
              <div class="sd__journey-card">
                <div class="sd__journey-time">4 hrs onwards</div>
                <h3 class="sd__journey-heading">Base Notes</h3>
                <div class="sd__journey-notes">
                  ${product.baseNotes.map(n => `<span class="sd__note-pill" style="border-color:var(--sd-accent)">${n}</span>`).join('')}
                </div>
                <p class="sd__journey-desc">The lasting impression — deep, warm, unforgettable</p>
              </div>
            </div>
          </div>

          <div class="sd__journey-story reveal-up" style="margin-top:4rem;">
            <p class="sd__journey-narrative">${story.scentJourney}</p>
          </div>
        </div>
      </div>

      <!-- ======================== STATS COUNTER ROW ======================== -->
      <div class="sd__stats" id="sd-stats">
        ${story.stats.map((s, i) => `
          <div class="sd__stat reveal-up" style="--delay:${i * 150}ms">
            <div class="sd__stat-icon">${s.icon}</div>
            <div class="sd__stat-value" data-target="${s.value}">${s.value}</div>
            <div class="sd__stat-label">${s.label}</div>
            <div class="sd__stat-bar"><div class="sd__stat-bar-fill"></div></div>
          </div>
        `).join('')}
      </div>

      <!-- ======================== BEST FOR ======================== -->
      <div class="sd__bestfor reveal-up">
        <div class="container">
          <div class="sd__bestfor-inner">
            <div class="sd__bestfor-icon" aria-hidden="true">✦</div>
            <p class="sd__section-label">When To Wear</p>
            <h2 class="sd__section-title">Made For These Moments</h2>
            <p class="sd__bestfor-text">${story.bestFor}</p>
          </div>
        </div>
      </div>

      <!-- ======================== CTA SECTION ======================== -->
      <div class="sd__cta-section" id="sd-cta-section">
        <div class="sd__cta-bg">
          <img src="${product.image}" alt="${product.name}" />
          <div class="sd__cta-overlay"></div>
        </div>
        <div class="container" style="position:relative;z-index:2;">
          <div class="sd__cta-card reveal-up">
            <div class="sd__cta-product-img">
              <img src="${product.image}" alt="${product.name}" id="sd-cta-bottle" />
              <div class="sd__cta-product-glow"></div>
            </div>
            <div class="sd__cta-info">
              <p class="sd__cta-collection">${product.collection} Collection</p>
              <h2 class="sd__cta-name">${product.name}</h2>
              <div class="sd__cta-meta">
                <span>${categoryFormatted}</span>
                <span class="sd__cta-dot">·</span>
                <span>${product.size}</span>
                <span class="sd__cta-dot">·</span>
                <span>${scentFamilyFormatted}</span>
              </div>
              <div class="sd__cta-rating">
                <span class="sd__stars">${'★'.repeat(Math.round(product.rating))}${'☆'.repeat(5 - Math.round(product.rating))}</span>
                <span>${product.rating} (${product.reviewCount} reviews)</span>
              </div>
              <div class="sd__cta-price">
                <span class="sd__cta-price-current">₹${product.price.toLocaleString('en-IN')}</span>
                ${product.originalPrice ? `<span class="sd__cta-price-old">₹${product.originalPrice.toLocaleString('en-IN')}</span>` : ''}
              </div>
              <div class="sd__cta-actions">
                <button class="sd__add-btn" id="story-add-cart">
                  <span class="sd__add-btn-text">Add to Cart</span>
                  <span class="sd__add-btn-price">₹${product.price.toLocaleString('en-IN')}</span>
                </button>
                <a href="#/product/${product.slug}" class="sd__view-btn">
                  View Full Details <span>→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Back -->
      <div class="sd__back-row">
        <div class="container" style="text-align:center;">
          <a href="#/product-stories" class="sd__back-link">
            <span class="sd__back-arrow">←</span>
            Back to All Product Stories
          </a>
        </div>
      </div>

    </section>
  `;

  return {
    html,
    init: () => {
      // ─── PARTICLE CANVAS ───────────────────────────────────────
      const canvas = document.getElementById('sd-particles');
      if (canvas) {
        const ctx = canvas.getContext('2d');
        let W = canvas.width = canvas.offsetWidth;
        let H = canvas.height = canvas.offsetHeight;
        const color = theme.particle;

        const particles = Array.from({ length: 70 }, () => ({
          x: Math.random() * W,
          y: Math.random() * H,
          r: Math.random() * 2.5 + 0.5,
          speedX: (Math.random() - 0.5) * 0.3,
          speedY: -Math.random() * 0.5 - 0.1,
          alpha: Math.random() * 0.6 + 0.1
        }));

        const drawParticles = () => {
          ctx.clearRect(0, 0, W, H);
          particles.forEach(p => {
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            ctx.fillStyle = color + Math.floor(p.alpha * 255).toString(16).padStart(2, '0');
            ctx.fill();
            p.x += p.speedX;
            p.y += p.speedY;
            if (p.y < -5) { p.y = H + 5; p.x = Math.random() * W; }
            if (p.x < -5) p.x = W + 5;
            if (p.x > W + 5) p.x = -5;
          });
          requestAnimationFrame(drawParticles);
        };
        drawParticles();

        window.addEventListener('resize', () => {
          W = canvas.width = canvas.offsetWidth;
          H = canvas.height = canvas.offsetHeight;
        });
      }

      // ─── HERO ENTRANCE ANIMATION ───────────────────────────────
      const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      heroTl
        .from('#sd-label',    { y: 30, opacity: 0, duration: 0.8, delay: 0.3 })
        .from('#sd-title',    { y: 60, opacity: 0, duration: 1.0, clipPath: 'inset(100% 0% 0% 0%)' }, '-=0.4')
        .from('#sd-subtitle', { y: 30, opacity: 0, duration: 0.8 }, '-=0.5')
        .from('#sd-tagline',  { y: 20, opacity: 0, duration: 0.7 }, '-=0.5')
        .from('#sd-cta',      { y: 20, opacity: 0, duration: 0.6 }, '-=0.4')
        .from('#sd-bottle',   { x: 120, opacity: 0, duration: 1.2, ease: 'expo.out' }, 0.5);

      // ─── HERO PARALLAX ─────────────────────────────────────────
      gsap.to('.sd__hero-bg img', {
        scrollTrigger: { trigger: '.sd__hero', start: 'top top', end: 'bottom top', scrub: 1.5 },
        y: 100, scale: 1.15, ease: 'none'
      });
      gsap.to('#sd-bottle', {
        scrollTrigger: { trigger: '.sd__hero', start: 'top top', end: 'bottom top', scrub: 1 },
        y: -60, opacity: 0, ease: 'none'
      });

      // Floating bottle bobbing
      gsap.to('#sd-bottle img', {
        y: -18, duration: 2.8, ease: 'sine.inOut', repeat: -1, yoyo: true
      });
      gsap.to('.sd__bottle-glow', {
        scale: 1.3, opacity: 0.4, duration: 2.8, ease: 'sine.inOut', repeat: -1, yoyo: true
      });

      // ─── QUOTE BAND ANIMATION ──────────────────────────────────
      ScrollTrigger.create({
        trigger: '#sd-quote-band',
        start: 'top 80%',
        onEnter: () => {
          gsap.from('#sd-quote', { y: 50, opacity: 0, duration: 1, ease: 'power3.out' });
          gsap.from('.sd__quote-orb--1', { scale: 0, opacity: 0, duration: 1.5, ease: 'elastic.out(1,0.6)' });
          gsap.from('.sd__quote-orb--2', { scale: 0, opacity: 0, duration: 1.5, delay: 0.2, ease: 'elastic.out(1,0.6)' });
        },
        once: true
      });

      // ─── HORIZONTAL SCROLL ─────────────────────────────────────
      const hWrap = document.getElementById('sd-hscroll-wrap');
      const hTrack = document.getElementById('sd-hscroll-track');
      const hFill = document.getElementById('sd-hfill');
      const hSteps = document.querySelectorAll('.sd__hstep');

      if (hWrap && hTrack) {
        const panels = hTrack.querySelectorAll('.sd__hpanel');
        const totalWidth = (panels.length - 1) * hWrap.offsetWidth;

        gsap.to(hTrack, {
          x: -totalWidth,
          ease: 'none',
          scrollTrigger: {
            trigger: hWrap,
            start: 'top top',
            end: () => `+=${totalWidth + hWrap.offsetHeight}`,
            pin: true,
            scrub: 1,
            onUpdate: self => {
              if (hFill) hFill.style.width = (self.progress * 100) + '%';
              const idx = Math.round(self.progress * (panels.length - 1));
              hSteps.forEach((s, i) => s.classList.toggle('active', i === idx));
            }
          }
        });

        // Animate panel content as they slide in
        panels.forEach((panel, i) => {
          const content = panel.querySelector('.sd__hpanel-content');
          const visual = panel.querySelector('.sd__hpanel-visual');
          const num = panel.querySelector('.sd__hpanel-number');
          gsap.from([content, visual, num], {
            opacity: 0, y: 40, stagger: 0.15, duration: 0.8, ease: 'power3.out',
            scrollTrigger: { trigger: hWrap, start: `top+=${i * hWrap.offsetWidth * 0.8} top`, containerAnimation: gsap.getTweensOf(hTrack)[0] }
          });
        });

        // Craft steps stagger
        gsap.from('.sd__craft-step', {
          scale: 0, opacity: 0, stagger: 0.1, duration: 0.6, ease: 'back.out(1.5)',
          scrollTrigger: { trigger: '.sd__hpanel--craft', start: 'left center', containerAnimation: gsap.getTweensOf(hTrack)[0] }
        });
      }

      // ─── SCROLL REVEAL ELEMENTS ───────────────────────────────
      document.querySelectorAll('.reveal-up').forEach(el => {
        const delay = parseFloat(el.dataset.delay || 0) / 1000;
        gsap.from(el, {
          y: 60, opacity: 0, duration: 0.9, delay, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 85%', once: true }
        });
      });

      // ─── JOURNEY TIMELINE LINE ─────────────────────────────────
      const jLine = document.getElementById('sd-jline');
      if (jLine) {
        gsap.from(jLine, {
          scaleY: 0, transformOrigin: 'top',
          ease: 'none',
          scrollTrigger: { trigger: '.sd__journey-timeline', start: 'top 70%', end: 'bottom 80%', scrub: 1 }
        });
      }

      // Journey stages
      document.querySelectorAll('.sd__journey-stage').forEach((stage, i) => {
        const delay = parseInt(stage.dataset.delay || 0) / 1000;
        gsap.from(stage, {
          x: i % 2 === 0 ? -60 : 60, opacity: 0, duration: 0.9, delay,
          ease: 'power3.out',
          scrollTrigger: { trigger: stage, start: 'top 80%', once: true }
        });
      });

      // ─── STAT BARS ─────────────────────────────────────────────
      document.querySelectorAll('.sd__stat').forEach((stat, i) => {
        ScrollTrigger.create({
          trigger: '#sd-stats',
          start: 'top 80%',
          once: true,
          onEnter: () => {
            gsap.from(stat, { y: 40, opacity: 0, delay: i * 0.15, duration: 0.7, ease: 'power3.out' });
            const bar = stat.querySelector('.sd__stat-bar-fill');
            if (bar) gsap.to(bar, { width: '80%', delay: i * 0.15 + 0.3, duration: 1, ease: 'power2.out' });
          }
        });
      });

      // ─── CTA BOTTLE FLOAT ──────────────────────────────────────
      gsap.to('#sd-cta-bottle', {
        y: -12, duration: 2.5, ease: 'sine.inOut', repeat: -1, yoyo: true
      });

      // ─── CTA PARALLAX BG ───────────────────────────────────────
      gsap.to('.sd__cta-bg img', {
        scale: 1.15, y: 60, ease: 'none',
        scrollTrigger: { trigger: '#sd-cta-section', start: 'top bottom', end: 'bottom top', scrub: 1 }
      });

      // ─── INK SPREAD WIPE ───────────────────────────────────────
      gsap.from('.sd__hero-ink', {
        scale: 0, opacity: 1, duration: 1.8, ease: 'expo.inOut',
        scrollTrigger: { trigger: '.sd__hero', start: 'top top', once: true }
      });

      // ─── ADD TO CART ───────────────────────────────────────────
      document.getElementById('story-add-cart')?.addEventListener('click', () => {
        addToCart(product);
        const btn = document.getElementById('story-add-cart');
        btn.classList.add('sd__add-btn--success');
        const txt = btn.querySelector('.sd__add-btn-text');
        if (txt) txt.textContent = '✓ Added!';
        setTimeout(() => {
          btn.classList.remove('sd__add-btn--success');
          if (txt) txt.textContent = 'Add to Cart';
        }, 2500);
      });

      // ─── BACK LINK HOVER ───────────────────────────────────────
      const backArrow = document.querySelector('.sd__back-arrow');
      document.querySelector('.sd__back-link')?.addEventListener('mouseenter', () => {
        gsap.to(backArrow, { x: -6, duration: 0.3, ease: 'power2.out' });
      });
      document.querySelector('.sd__back-link')?.addEventListener('mouseleave', () => {
        gsap.to(backArrow, { x: 0, duration: 0.3, ease: 'power2.out' });
      });

      return () => {
        ScrollTrigger.getAll().forEach(t => t.kill());
      };
    }
  };
}
