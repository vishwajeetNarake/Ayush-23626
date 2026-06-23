// ============================================
// BARE ESSENCE — Complete Product Catalog
// ============================================

export const products = [
  // ---- PERFUMES ----
  {
    id: 1, name: "Velvet Oud", slug: "velvet-oud",
    collection: "Signature", category: "perfume", gender: "unisex",
    scentFamily: "woody", occasions: ["date", "party", "office"],
    price: 3999, originalPrice: 4999, size: "50ml", sizes: ["10ml", "50ml"],
    image: "/images/product_velvet_oud.png",
    images: ["/images/product_velvet_oud.png"],
    description: "A rich, intoxicating blend of aged oud wood, warm amber, and velvety rose petals. Deep and sensual — perfect for evenings that demand presence.",
    longDescription: "Velvet Oud opens with the warm sparkle of saffron and bergamot, drawing you into a heart of precious oud wood and Bulgarian rose. As the hours pass, it settles into a luxurious base of amber, vanilla, and musk that lingers on the skin like a whispered secret. Crafted for those who appreciate the finer things, this fragrance bridges the gap between traditional Indian attar-making and modern perfumery.",
    topNotes: ["Saffron", "Bergamot"], heartNotes: ["Rose", "Oud Wood"], baseNotes: ["Amber", "Vanilla", "Musk"],
    badge: "Bestseller", rating: 4.8, reviewCount: 142, inStock: true
  },
  {
    id: 2, name: "Rose Whisper", slug: "rose-whisper",
    collection: "Signature", category: "perfume", gender: "her",
    scentFamily: "floral", occasions: ["casual", "office", "date"],
    price: 2999, originalPrice: null, size: "50ml", sizes: ["10ml", "50ml"],
    image: "/images/product_rose_whisper.png",
    images: ["/images/product_rose_whisper.png"],
    description: "A delicate bouquet of Damask roses kissed by morning dew. Feminine, soft, and endlessly elegant.",
    longDescription: "Rose Whisper captures the essence of a rose garden at dawn. The opening burst of pink pepper and lychee gives way to the intoxicating heart of Damask rose and peony — sourced from the rose fields of Kannauj, India's perfume capital. A gentle dry-down of white musk and cedarwood ensures this fragrance accompanies you from morning meetings to evening soirees with equal grace.",
    topNotes: ["Pink Pepper", "Lychee"], heartNotes: ["Damask Rose", "Peony"], baseNotes: ["White Musk", "Cedarwood"],
    badge: null, rating: 4.7, reviewCount: 98, inStock: true
  },
  {
    id: 3, name: "Midnight Musk", slug: "midnight-musk",
    collection: "Signature", category: "perfume", gender: "him",
    scentFamily: "woody", occasions: ["party", "date"],
    price: 3499, originalPrice: null, size: "50ml", sizes: ["10ml", "50ml"],
    image: "/images/product_midnight_musk.png",
    images: ["/images/product_midnight_musk.png"],
    description: "Commanding and mysterious. Dark musk meets smoky vetiver for a fragrance that owns the night.",
    longDescription: "Midnight Musk is for the man who enters a room and changes its energy. The bold opening of black pepper and cardamom ignites the senses, leading into a heart of supple leather and refined iris. The base reveals itself slowly — smoky vetiver, dark musk, and aged sandalwood create a trail that's impossible to forget. Best worn after sundown.",
    topNotes: ["Black Pepper", "Cardamom"], heartNotes: ["Leather", "Iris"], baseNotes: ["Vetiver", "Dark Musk", "Sandalwood"],
    badge: "New", rating: 4.9, reviewCount: 67, inStock: true
  },
  {
    id: 4, name: "First Rain", slug: "first-rain",
    collection: "First Rain", category: "perfume", gender: "unisex",
    scentFamily: "aquatic", occasions: ["casual", "travel"],
    price: 2499, originalPrice: 2999, size: "50ml", sizes: ["10ml", "50ml"],
    image: "/images/product_first_rain.png",
    images: ["/images/product_first_rain.png"],
    description: "The magic of the first monsoon shower — petrichor, wet earth, and fresh green leaves captured in a bottle.",
    longDescription: "First Rain is our love letter to the Indian monsoon. Using the ancient Deg and Bhapka distillation process, we've captured the molecule responsible for petrichor — that intoxicating scent when rain hits dry earth. Green leaves and ozone open the experience, while jasmine and the earth itself form the heart. Vetiver and cedarwood ground the fragrance, making it uniquely nostalgic. Note: the petrichor molecule is naturally volatile — longevity is 4-5 hours. We chose authenticity over artificial extension.",
    topNotes: ["Green Leaves", "Ozone"], heartNotes: ["Petrichor", "Jasmine"], baseNotes: ["Vetiver", "Wet Earth", "Cedarwood"],
    badge: "Bestseller", rating: 4.9, reviewCount: 234, inStock: true
  },
  {
    id: 6, name: "Citrus Bloom", slug: "citrus-bloom",
    collection: "First Rain", category: "perfume", gender: "unisex",
    scentFamily: "citrus", occasions: ["casual", "workout", "office"],
    price: 1999, originalPrice: null, size: "50ml", sizes: ["10ml", "50ml"],
    image: "/images/product_citrus_bloom.png",
    images: ["/images/product_citrus_bloom.png"],
    description: "Bursting with zesty Italian bergamot and neroli blossoms. A sunshine-in-a-bottle that energises your day.",
    longDescription: "Citrus Bloom is the fragrance equivalent of opening the windows on a spring morning. Italian bergamot and fresh lemon zest create an immediate burst of energy. At its heart, neroli and orange blossom add a delicate floral sweetness. The base of white tea and light musk keeps things clean and sophisticated. Perfect for everyday wear, especially in warmer months.",
    topNotes: ["Bergamot", "Lemon Zest"], heartNotes: ["Neroli", "Orange Blossom"], baseNotes: ["White Tea", "Light Musk"],
    badge: null, rating: 4.5, reviewCount: 56, inStock: true
  },
  {
    id: 8, name: "Ocean Breeze", slug: "ocean-breeze",
    collection: "First Rain", category: "perfume", gender: "him",
    scentFamily: "aquatic", occasions: ["casual", "travel", "workout"],
    price: 2499, originalPrice: null, size: "50ml", sizes: ["10ml", "50ml"],
    image: "/images/product_ocean_breeze.png",
    images: ["/images/product_ocean_breeze.png"],
    description: "Fresh sea salt, driftwood, and cooling aquatic notes. The freedom of an endless coastline.",
    longDescription: "Ocean Breeze transports you to a sun-drenched coastline where the sea meets the shore. Sea salt and grapefruit open with a rush of cool freshness. Seaweed and water lily create an aquatic heart that's natural, not synthetic. The base of driftwood, ambergris, and white musk gives depth and lasting power. An ideal companion for beach holidays or any day you want to feel free.",
    topNotes: ["Sea Salt", "Grapefruit"], heartNotes: ["Seaweed", "Water Lily"], baseNotes: ["Driftwood", "Ambergris", "White Musk"],
    badge: null, rating: 4.6, reviewCount: 45, inStock: true
  },
  {
    id: 9, name: "Amber Reverie", slug: "amber-reverie",
    collection: "Signature", category: "perfume", gender: "her",
    scentFamily: "woody", occasions: ["party", "date", "office"],
    price: 3499, originalPrice: null, size: "50ml", sizes: ["10ml", "50ml"],
    image: "/images/product_golden_saffron.png",
    images: ["/images/product_golden_saffron.png"],
    description: "Warm amber wraps around delicate florals like cashmere on skin. A fragrance for quiet confidence.",
    longDescription: "Amber Reverie is the scent of inner warmth. It opens with the gentle sweetness of honeyed fruits and pink peppercorn. The heart blooms with ylang-ylang and jasmine sambac, rich yet never overwhelming. In the base, golden amber, benzoin, and a whisper of vanilla create a cocoon of comfort. This is a fragrance that draws people closer — they lean in to ask what you're wearing.",
    topNotes: ["Honeyed Fruits", "Pink Peppercorn"], heartNotes: ["Ylang-Ylang", "Jasmine Sambac"], baseNotes: ["Golden Amber", "Benzoin", "Vanilla"],
    badge: null, rating: 4.7, reviewCount: 78, inStock: true
  },
  {
    id: 10, name: "Forest Walk", slug: "forest-walk",
    collection: "First Rain", category: "perfume", gender: "unisex",
    scentFamily: "woody", occasions: ["casual", "travel"],
    price: 2499, originalPrice: null, size: "50ml", sizes: ["10ml", "50ml"],
    image: "/images/product_first_rain.png",
    images: ["/images/product_first_rain.png"],
    description: "Step into an ancient Indian forest — rich cedar, damp moss, and wild herbs under a green canopy.",
    longDescription: "Forest Walk is an olfactory journey through India's Western Ghats. The opening of crushed green herbs and eucalyptus evokes the first breath of forest air. The heart deepens with atlas cedar and damp moss, creating a primal connection to nature. Base notes of patchouli, oakmoss, and earthy vetiver ensure this scent lingers like the memory of a woodland trail. Best suited for those who find their peace in nature.",
    topNotes: ["Green Herbs", "Eucalyptus"], heartNotes: ["Atlas Cedar", "Damp Moss"], baseNotes: ["Patchouli", "Oakmoss", "Vetiver"],
    badge: null, rating: 4.4, reviewCount: 33, inStock: true
  },

  // ---- ATTARS ----
  {
    id: 5, name: "Golden Saffron", slug: "golden-saffron",
    collection: "Royal", category: "attar", gender: "unisex",
    scentFamily: "woody", occasions: ["party", "date"],
    price: 4999, originalPrice: null, size: "12ml", sizes: ["3ml", "12ml"],
    image: "/images/product_golden_saffron.png",
    images: ["/images/product_golden_saffron.png"],
    description: "A royal tribute to India's perfumery heritage. Pure saffron threads infused with aged sandalwood and rose.",
    longDescription: "Golden Saffron is the crown jewel of our Royal Collection. Hand-harvested Kashmiri saffron threads are carefully infused with the finest Indian rose and aged agarwood using the traditional Deg and Bhapka distillation method. This attar matures for months before bottling, allowing the molecules to marry into a complexity that modern perfumery cannot replicate. The base of Mysore sandalwood, amber, and natural musk creates an aura that lasts from morning prayer to midnight feast. This is the scent of legacy.",
    topNotes: ["Saffron", "Rose"], heartNotes: ["Agarwood", "Jasmine Sambac"], baseNotes: ["Sandalwood", "Amber", "Musk"],
    badge: "Limited", rating: 5.0, reviewCount: 89, inStock: true
  },
  {
    id: 7, name: "Royal Attar", slug: "royal-attar",
    collection: "Royal", category: "attar", gender: "unisex",
    scentFamily: "floral", occasions: ["party", "date"],
    price: 5499, originalPrice: null, size: "12ml", sizes: ["3ml", "12ml"],
    image: "/images/product_royal_attar.png",
    images: ["/images/product_royal_attar.png"],
    description: "Handcrafted using the ancient Deg and Bhapka distillation. Pure Indian rose essence aged in sandalwood oil.",
    longDescription: "Royal Attar represents six generations of perfumery expertise distilled into a single bottle. The process begins with hand-picked Indian roses, which are placed in copper Deg vessels filled with sandalwood oil. Through gentle steam distillation (Bhapka), the rose essence naturally transfers into the sandalwood base over several days. This ancient method produces an attar of extraordinary depth and longevity — a single application lasts 12-16 hours. Each batch is unique, reflecting the season's harvest.",
    topNotes: ["Indian Rose"], heartNotes: ["Jasmine Grandiflorum", "Tuberose"], baseNotes: ["Aged Sandalwood", "Musk"],
    badge: "Heritage", rating: 4.9, reviewCount: 112, inStock: true
  },
  {
    id: 11, name: "Mystic Oudh", slug: "mystic-oudh",
    collection: "Royal", category: "attar", gender: "unisex",
    scentFamily: "woody", occasions: ["party", "date"],
    price: 6999, originalPrice: null, size: "12ml", sizes: ["3ml", "12ml"],
    image: "/images/product_midnight_musk.png",
    images: ["/images/product_midnight_musk.png"],
    description: "The signature Bare Essence attar. Wild-harvested oudh from Assam meets nutmeg and patchouli.",
    longDescription: "Mystic Oudh is the fragrance that defines Bare Essence. Sourced from wild agarwood trees in the forests of Assam, this oudh has been aged for over five years before distillation. The nutmeg adds a warm, spicy dimension while patchouli grounds the composition with earthy depth. Each bottle represents hundreds of hours of patient craftsmanship. This is not a perfume — it is an heirloom.",
    topNotes: ["Nutmeg", "Saffron"], heartNotes: ["Oudh", "Rose Absolute"], baseNotes: ["Patchouli", "Sandalwood", "Musk"],
    badge: "Signature", rating: 5.0, reviewCount: 156, inStock: true
  },
  {
    id: 12, name: "White Lotus", slug: "white-lotus",
    collection: "Royal", category: "attar", gender: "her",
    scentFamily: "floral", occasions: ["casual", "office"],
    price: 3999, originalPrice: null, size: "12ml", sizes: ["3ml", "12ml"],
    image: "/images/product_rose_whisper.png",
    images: ["/images/product_rose_whisper.png"],
    description: "Pure lotus flower essence — serene, meditative, and utterly unique. A scent for the soul.",
    longDescription: "White Lotus captures the sacred serenity of lotus ponds found across India's temple towns. The delicate lotus flower yields very little oil, making this attar exceptionally precious. White musk and light sandalwood support the ethereal floral heart without overpowering it. This is a fragrance for quiet moments, meditation, and the kind of beauty that doesn't shout. Traditionally worn by Indian brides for its auspicious symbolism.",
    topNotes: ["Lotus Leaf", "Dew"], heartNotes: ["White Lotus", "Magnolia"], baseNotes: ["White Musk", "Light Sandalwood"],
    badge: null, rating: 4.6, reviewCount: 41, inStock: true
  },

  // ---- HOME FRAGRANCES ----
  {
    id: 13, name: "Sandalwood Serenity Candle", slug: "sandalwood-candle",
    collection: "Home", category: "home", gender: "unisex",
    scentFamily: "woody", occasions: [],
    price: 1499, originalPrice: 1799, size: "200g", sizes: ["200g"],
    image: "/images/product_golden_saffron.png",
    images: ["/images/product_golden_saffron.png"],
    description: "Hand-poured soy wax candle infused with Mysore sandalwood. 45-hour burn time.",
    longDescription: "Our Sandalwood Serenity candle transforms any room into a sanctuary. Made from 100% natural soy wax and infused with pure Mysore sandalwood essential oil, it burns cleanly for up to 45 hours. The cotton wick ensures an even, smoke-free flame. The beautiful glass vessel can be reused as a planter or storage container once the candle is finished. Makes a perfect housewarming or festive gift.",
    topNotes: ["Sandalwood"], heartNotes: ["Cedarwood"], baseNotes: ["Vanilla"],
    badge: null, rating: 4.5, reviewCount: 29, inStock: true
  },
  {
    id: 14, name: "Rose Garden Reed Diffuser", slug: "rose-diffuser",
    collection: "Home", category: "home", gender: "unisex",
    scentFamily: "floral", occasions: [],
    price: 1299, originalPrice: null, size: "100ml", sizes: ["100ml"],
    image: "/images/product_rose_whisper.png",
    images: ["/images/product_rose_whisper.png"],
    description: "Continuous fragrance for your space. Pure rose essential oil with natural rattan reeds.",
    longDescription: "Bring the garden indoors with our Rose Garden Reed Diffuser. Premium rattan reeds draw up the pure rose essential oil blend and release it gently into the air, providing continuous fragrance for 6-8 weeks without any heat or flame. Safe around children and pets. The minimalist glass bottle and natural reeds complement any interior design. Simply flip the reeds once a week for a fresh burst of fragrance.",
    topNotes: ["Rose"], heartNotes: ["Geranium"], baseNotes: ["White Musk"],
    badge: null, rating: 4.3, reviewCount: 18, inStock: true
  },
  {
    id: 15, name: "Forest Rain Air Mist", slug: "forest-rain-mist",
    collection: "Home", category: "home", gender: "unisex",
    scentFamily: "aquatic", occasions: [],
    price: 799, originalPrice: null, size: "200ml", sizes: ["200ml"],
    image: "/images/product_first_rain.png",
    images: ["/images/product_first_rain.png"],
    description: "Instant room freshener capturing petrichor and forest notes. Alcohol-free formula.",
    longDescription: "Our Forest Rain Air Mist brings the freshness of monsoon-kissed forests into any space. This alcohol-free, water-based formula uses micro-encapsulated fragrance technology for long-lasting freshness. A few sprays neutralise odours while releasing fresh green, petrichor, and woody notes. Safe for use around fabrics, curtains, and upholstery. Not tested on animals. Each bottle provides approximately 600 sprays.",
    topNotes: ["Ozone", "Green Leaves"], heartNotes: ["Petrichor", "Rain Water"], baseNotes: ["Cedarwood", "Earth"],
    badge: "New", rating: 4.4, reviewCount: 22, inStock: true
  },
  {
    id: 16, name: "Lavender Dreams Candle", slug: "lavender-candle",
    collection: "Home", category: "home", gender: "unisex",
    scentFamily: "floral", occasions: [],
    price: 1499, originalPrice: null, size: "200g", sizes: ["200g"],
    image: "/images/product_citrus_bloom.png",
    images: ["/images/product_citrus_bloom.png"],
    description: "French lavender meets vanilla in this calming soy candle. Perfect for unwinding.",
    longDescription: "Lavender Dreams is your bedtime ritual in a jar. French lavender essential oil is blended with a touch of vanilla and chamomile to create the perfect atmosphere for relaxation and sleep. Made from 100% natural soy wax with a lead-free cotton wick. Burns cleanly for up to 45 hours. The violet-tinted glass jar adds a touch of elegance to your nightstand.",
    topNotes: ["French Lavender"], heartNotes: ["Chamomile", "Vanilla"], baseNotes: ["Tonka Bean"],
    badge: null, rating: 4.7, reviewCount: 35, inStock: true
  }
];

export const collections = [
  {
    id: "signature", name: "Signature Collection", slug: "signature",
    description: "Our core fragrances — timeless scents crafted for the modern individual.",
    longDescription: "The Signature Collection represents the essence of Bare Essence. Each fragrance in this collection has been meticulously developed over months of iteration, using the finest ingredients from across India and the world. These are not trend-driven scents; they are designed to become your personal signature — the olfactory fingerprint that people associate with you.",
    image: "/images/product_velvet_oud.png",
    productIds: [1, 2, 3, 9]
  },
  {
    id: "first-rain", name: "First Rain Collection", slug: "first-rain",
    description: "Nature-inspired fragrances capturing India's most cherished seasonal scents.",
    longDescription: "Born from our love of India's extraordinary natural landscape, the First Rain Collection captures scents that have enchanted our culture for millennia. From the first monsoon shower to sun-dappled forest floors, each fragrance is a tribute to the raw beauty of the Indian subcontinent. We use traditional distillation methods to ensure every note is authentic and true to its source.",
    image: "/images/product_first_rain.png",
    productIds: [4, 6, 8, 10]
  },
  {
    id: "royal", name: "Royal Collection", slug: "royal",
    description: "Heritage attars handcrafted using ancient Indian perfumery techniques.",
    longDescription: "The Royal Collection is where our 170-year heritage truly shines. These attars are made using the Deg and Bhapka distillation process — the same method our ancestors perfected six generations ago. No alcohol, no synthetic chemicals — just pure botanical oils distilled with infinite patience. Each attar in this collection is a piece of living history, connecting you to the royal courts of Awadh where our journey began.",
    image: "/images/product_royal_attar.png",
    productIds: [5, 7, 11, 12]
  },
  {
    id: "home", name: "Home Fragrance", slug: "home",
    description: "Transform your living spaces with artisanal candles, diffusers, and mists.",
    longDescription: "Your home deserves the same quality of fragrance as your skin. Our Home Fragrance collection brings the craftsmanship of Bare Essence into your living spaces. Each product uses natural ingredients and sustainable materials. From hand-poured soy candles to alcohol-free room mists, these are designed to create atmosphere, evoke memories, and make every corner of your home feel special.",
    image: "/images/product_citrus_bloom.png",
    productIds: [13, 14, 15, 16]
  }
];

export const scentFamilies = [
  { id: "woody", name: "Woody", icon: "\u{1F333}", color: "#6e7c5b", description: "Warm, earthy, and grounding" },
  { id: "floral", name: "Floral", icon: "\u{1F339}", color: "#8a2a2f", description: "Romantic, elegant, and timeless" },
  { id: "citrus", name: "Citrus", icon: "\u{1F34B}", color: "#b6a58a", description: "Fresh, energising, and uplifting" },
  { id: "aquatic", name: "Aquatic", icon: "\u{1F30A}", color: "#2f6a6a", description: "Cool, refreshing, and free" },
  { id: "fruity", name: "Fruity", icon: "\u{1F351}", color: "#b1c8c4", description: "Sweet, playful, and vibrant" }
];

export const occasions = [
  { id: "casual", name: "Day / Casual Wear", icon: "\u2600\uFE0F" },
  { id: "office", name: "Office Wear", icon: "\u{1F4BC}" },
  { id: "date", name: "Romantic Date", icon: "\u2764\uFE0F" },
  { id: "party", name: "Party / Weddings", icon: "\u{1F389}" },
  { id: "workout", name: "Workout / Sports", icon: "\u{1F3CB}\uFE0F" },
  { id: "travel", name: "Travel", icon: "\u2708\uFE0F" }
];

export const testimonials = [
  { name: "Priya S.", location: "Mumbai", rating: 5, text: "Velvet Oud is absolutely divine. I've never received so many compliments on a fragrance. It lasts all day and the sillage is perfect.", product: "Velvet Oud" },
  { name: "Arjun M.", location: "Delhi", rating: 5, text: "First Rain transported me straight to my grandmother's garden during monsoon. The petrichor is so authentic. Incredible craftsmanship.", product: "First Rain" },
  { name: "Sneha K.", location: "Bangalore", rating: 5, text: "Rose Whisper is everything I've been looking for. Not too sweet, not too heavy - just the perfect balance of femininity and sophistication.", product: "Rose Whisper" },
  { name: "Vikram R.", location: "Lucknow", rating: 5, text: "As someone from a family of attar lovers, I can honestly say Golden Saffron is the real deal. Six generations of expertise shows in every drop.", product: "Golden Saffron" },
  { name: "Ananya D.", location: "Jaipur", rating: 5, text: "I ordered the Discovery Pack as a gift and was blown away by the presentation. Each scent tells a story. Proudly Indian!", product: "Discovery Pack" }
];

export const aboutContent = {
  heritage: {
    title: "Our Heritage",
    text: "For over 170 years and six generations, our family has been crafting fragrances in the heart of Lucknow, India's perfume capital. What began as a small attar workshop in the bylanes of the old city has evolved into Bare Essence - a modern fragrance house that honours its roots while embracing the future."
  },
  philosophy: {
    title: "Our Philosophy",
    text: "In a world of mass-produced fragrances loaded with synthetic chemicals, we chose a different path. Every Bare Essence fragrance is built on a foundation of natural ingredients, traditional craftsmanship, and the belief that what you put on your skin matters as much as what you put in your body."
  },
  craftsmanship: {
    title: "The Craft",
    text: "We use the ancient Deg and Bhapka distillation method — a process unchanged for centuries. Botanical materials are placed in copper vessels (Deg) and distilled through bamboo pipes (Bhapka) into receivers containing sandalwood oil. This slow, gentle process takes days rather than hours, preserving the delicate molecules that give natural fragrances their extraordinary complexity."
  },
  milestones: [
    { year: "1856", text: "Our great-great-great-grandfather establishes the first attar workshop in Lucknow" },
    { year: "1920", text: "Second generation introduces rose attar distillation using Kannauj roses" },
    { year: "1965", text: "Third generation begins supplying attars to royal families across India" },
    { year: "1990", text: "Fourth generation modernises production while preserving traditional methods" },
    { year: "2015", text: "Fifth generation launches Bare Essence as a direct-to-consumer brand" },
    { year: "2024", text: "Sixth generation expands to international markets, staying true to our roots" }
  ]
};

export const faqData = [
  { q: "Do you ship internationally?", a: "Yes, we ship to over 30 countries worldwide. International shipping typically takes 7-16 business days. Shipping costs are calculated at checkout based on your location." },
  { q: "What is your return policy?", a: "We accept returns within 15 days of delivery for unopened products in original packaging. Due to the nature of fragrances, opened bottles cannot be returned for hygiene reasons. Discovery packs are non-returnable." },
  { q: "How long do your fragrances last?", a: "Our Eau de Parfum perfumes typically last 6-8 hours. Our attars, made with pure oils, can last 12-16 hours. First Rain, due to its natural petrichor molecule, lasts 4-5 hours — we chose authenticity over artificial longevity." },
  { q: "Are your products cruelty-free?", a: "Absolutely. None of our products are tested on animals at any stage of development or production. We are proud to be a cruelty-free brand." },
  { q: "Can I get samples before buying a full bottle?", a: "Yes! Our Discovery Packs contain 2ml samples of our most popular fragrances. This is the perfect way to find your signature scent before committing to a full size." },
  { q: "What is the Deg and Bhapka method?", a: "Deg and Bhapka is an ancient Indian distillation technique where botanical materials are placed in copper vessels (Deg) and slowly steam-distilled through bamboo pipes into receivers. This gentle, time-intensive process preserves delicate fragrance molecules that modern industrial methods destroy." }
];

export const policies = {
  shipping: {
    title: "Shipping Policy",
    content: `<h3>Domestic Shipping (India)</h3><p>We offer <strong>free shipping</strong> on all domestic orders above INR 1,000. Orders below this amount are charged a flat rate of INR 99.</p><p>Standard domestic delivery takes <strong>5-7 business days</strong> from the date of dispatch. Orders are typically dispatched within 24-48 hours of placement.</p><p>We currently ship to all serviceable pin codes across India through our logistics partners.</p><h3>International Shipping</h3><p>International shipping is available to 30+ countries. Shipping costs vary by destination and are calculated at checkout.</p><p>International orders typically take <strong>7-16 business days</strong> for delivery. Please note that customs duties and taxes may apply and are the responsibility of the buyer.</p><h3>Order Tracking</h3><p>Once your order is dispatched, you will receive a tracking number via email and SMS. You can track your order through our logistics partner's website.</p>`
  },
  returns: {
    title: "Return & Refund Policy",
    content: `<h3>Returns</h3><p>We accept returns within <strong>15 days</strong> of delivery for products that are unopened and in their original packaging.</p><p>Due to the personal nature of fragrances, <strong>opened or used products cannot be returned</strong> for hygiene and safety reasons.</p><p>Discovery Packs and sample sets are non-returnable.</p><h3>How to Initiate a Return</h3><p>To initiate a return, please email us at <strong>returns@bareessence.in</strong> with your order number and reason for return. Our team will respond within 24 hours with return shipping instructions.</p><h3>Refunds</h3><p>Refunds are processed within <strong>5-7 business days</strong> of receiving the returned product. The refund will be credited to your original payment method.</p><p>Shipping charges are non-refundable unless the return is due to a defective product or an error on our part.</p><h3>Damaged Products</h3><p>If you receive a damaged or defective product, please contact us within 48 hours of delivery with photos of the damage. We will arrange a replacement or full refund at no additional cost.</p>`
  },
  privacy: {
    title: "Privacy Policy",
    content: `<h3>Information We Collect</h3><p>We collect personal information that you voluntarily provide when placing an order, creating an account, or contacting us. This includes your name, email address, shipping address, and payment information.</p><h3>How We Use Your Information</h3><p>Your information is used to process orders, provide customer support, send order updates, and (with your consent) share promotional offers and new product launches.</p><h3>Data Protection</h3><p>We use industry-standard encryption (SSL/TLS) to protect your personal and payment information. We never store complete credit card numbers on our servers.</p><h3>Third-Party Sharing</h3><p>We do not sell your personal information to third parties. We share data only with our logistics partners (for delivery), payment processors (for transaction processing), and analytics providers (for website improvement).</p><h3>Your Rights</h3><p>You have the right to access, correct, or delete your personal data at any time. To exercise these rights, please email us at <strong>privacy@bareessence.in</strong>.</p><h3>Cookies</h3><p>Our website uses cookies to improve your browsing experience and analyse site traffic. You can control cookie preferences through your browser settings.</p>`
  },
  terms: {
    title: "Terms of Service",
    content: `<h3>General</h3><p>By accessing and using the Bare Essence website, you agree to these Terms of Service. Please read them carefully before making a purchase.</p><h3>Products</h3><p>All products are subject to availability. We reserve the right to limit quantities and discontinue products without prior notice. Product images are representative and may vary slightly from the actual product due to photography and screen settings.</p><h3>Pricing</h3><p>All prices are listed in Indian Rupees (INR) and are inclusive of applicable taxes. We reserve the right to change prices without prior notice. The price at the time of order placement will be honoured.</p><h3>Intellectual Property</h3><p>All content on this website — including text, images, logos, and product designs — is the intellectual property of Bare Essence and is protected by Indian copyright and trademark laws. Unauthorised reproduction is prohibited.</p><h3>Limitation of Liability</h3><p>Bare Essence shall not be liable for any indirect, incidental, or consequential damages arising from the use of our products or website.</p><h3>Governing Law</h3><p>These terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Lucknow, Uttar Pradesh.</p><h3>Contact</h3><p>For any questions regarding these terms, please contact us at <strong>legal@bareessence.in</strong>.</p>`
  }
};
