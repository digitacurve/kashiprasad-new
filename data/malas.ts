import { Product, ProductVariant } from "./types";

export type MalaVariant = ProductVariant;
export type MalaProduct = Product;

export const malaProducts: Product[] = [
  {
    id: "mala-original-karungali",
    slug: "original-karungali-mala-108-beads",
    name: "Original Karungali Mala – 108 Beads (Black Ebony Wood)",
    category: "Mala",
    image: "/assets/mala/01_mala_regenerated_01.png",
    images: [
      "/assets/mala/01_mala_regenerated_01.png",
      "/assets/mala/01_mala_regenerated_02.png",
    ],
    badge: "Bestseller",
    rating: 4.9,
    reviewCount: 384,
    tagline: "Divine Energy, Evil Eye Shield & Mental Clarity",
    shortDescription:
      "Crafted from 100% pure natural Karungali wood (Black Ebony), this revered 108-bead mala is renowned for absorbing positive cosmic vibrations, shielding against negative energy (Buri Nazar), and enhancing mental clarity during meditation.",
    detailedOverview: [
      "Karungali wood (Black Ebony) is one of the most sacred woods mentioned in ancient Tamil and Vedic scriptures. Known as the tree of Mars (Mangal) and Lord Murugan, it possesses the natural capability to absorb positive spiritual vibrations and transmit them to the wearer.",
      "Each bead is smoothly carved, polished naturally without synthetic varnish or harmful chemicals, and knotted with durable holy thread with a traditional silk tassel. Each mala is brought to the sacred ghats of Varanasi and sanctified with Ganga jal prior to dispatch."
    ],
    tags: [
      "Karungali Mala",
      "Black Ebony Wood",
      "108 Beads",
      "Mala",
      "Evil Eye Shield",
      "Lord Murugan",
      "Varanasi Sourced",
      "Kashi Prasad"
    ],
    price: 799,
    mrp: 1599,
    specifications: [
      {
        groupName: "Mala Specifications",
        specs: [
          { label: "Material", value: "100% Original Karungali Wood (Black Ebony)" },
          { label: "Bead Count", value: "108 Beads + 1 Guru Bead" },
          { label: "Bead Diameter", value: "8 mm" },
          { label: "Thread", value: "Reinforced Traditional Cotton-Silk Cord with Tassel" },
          { label: "Presiding Deities", value: "Lord Murugan / Lord Shiva" },
          { label: "Planetary Influence", value: "Mars (Mangal) & Saturn (Shani)" },
          { label: "Origin", value: "Varanasi (Blessed & Purified)" }
        ]
      }
    ],
    faqs: [
      {
        q: "How do I know this Karungali Mala is original?",
        a: "Authentic Karungali wood is dense, heavy, and naturally sinks in water due to its high density. It possesses a natural dark-brown to jet-black grain without artificial dye or chemical paint."
      },
      {
        q: "Can I wear the Karungali Mala daily or only use it for Japa?",
        a: "You can both wear it around your neck for continuous aura protection or use it exclusively for mantra chanting."
      }
    ],
    variants: [
      {
        id: "variant-01-without-offering",
        name: "Without Divine Offering",
        price: 799,
        mrp: 1599,
        badge: "Standard Offering",
        suitableFor: "Daily Japa & Aura Shield",
        description:
          "Authentic 108+1 bead Karungali (Black Ebony) wood mala crafted with traditional holy thread and silk tassel, purified with sacred Ganga jal.",
        divineOfferingOption: "Without Divine Offering",
        keyHighlights: [
          "100% pure dense Black Ebony (Karungali) wood",
          "108 beads + 1 Guru bead (8mm diameter)",
          "Smooth natural finish without synthetic dyes or varnish",
          "Natural sink-in-water density verified",
          "Sanctified on the sacred ghats of Varanasi"
        ],
        samagriChecklist: [
          {
            category: "Package Contents",
            items: [
              { name: "Original Karungali Mala (108+1 Beads, 8mm)", quantity: "1 Unit" },
              { name: "Sacred Temple Storage Pouch", quantity: "1 Unit" },
              { name: "Authenticity & Care Guide", quantity: "1 Document" }
            ]
          }
        ]
      },
      {
        id: "variant-01-with-offering",
        name: "With Divine Offering (Kashi Prasad)",
        price: 999,
        mrp: 1999,
        badge: "Kashi Consecrated",
        suitableFor: "Complete Vedic Consecration & Protection",
        description:
          "Authentic Karungali mala blessed with specialized Vedic Rudrabhishek and energization at Kashi, accompanied by sanctified Kashi Prasad and holy temple vibhuti.",
        divineOfferingOption: "With Divine Offering - Kashi Prasad",
        keyHighlights: [
          "Includes all features of the 108-bead Karungali Mala",
          "Consecrated with sacred Kashi Vishwanath Vedic Sankalp",
          "Accompanied by sanctified Kashi temple prasad & sacred vibhuti",
          "Ganga jal purified protective temple silk pouch",
          "Potent shield against evil eye (Buri Nazar) and negative energies"
        ],
        samagriChecklist: [
          {
            category: "Package Contents",
            items: [
              { name: "Original Karungali Mala (108+1 Beads, 8mm)", quantity: "1 Unit" },
              { name: "Sanctified Kashi Temple Prasad (Dry Fruits/Mishri)", quantity: "1 Pack" },
              { name: "Sacred Kashi Vishwanath Vibhuti (Bhasma)", quantity: "1 Vial" },
              { name: "Holy Ganga Jal Consecrated Vial", quantity: "1 Vial" },
              { name: "Premium Temple Silk Storage Pouch", quantity: "1 Unit" }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "mala-5-mukhi-rudraksha-7mm",
    slug: "5-mukhi-rudraksha-mala-7mm",
    name: "5 Mukhi Rudraksha Mala – 7mm, 108 Beads",
    category: "Mala",
    image: "/assets/mala/02_mala_regenerated_01.png",
    images: [
      "/assets/mala/02_mala_regenerated_01.png",
      "/assets/mala/02_mala_regenerated_02.png",
    ],
    badge: "Mahadev's Grace",
    rating: 4.9,
    reviewCount: 412,
    tagline: "Peace of Mind, Health & Mahadev's Divine Grace",
    shortDescription:
      "Hand-selected five-faced (5 Mukhi) authentic Rudraksha beads strung in traditional 108+1 formation. Sourced from high-altitude groves, tested for density and clarity of mukhis, and energized with Vedic Rudrabhishek mantras in Varanasi.",
    detailedOverview: [
      "The 5 Mukhi Rudraksha represents 'Kalagni Rudra', a form of Lord Shiva that incinerates past karma and clears mental clutter. It is the most widely recommended sacred bead for everyone regardless of gender, age, or zodiac sign.",
      "Strung with premium uniform 7mm beads and individual knots between each bead to allow effortless sliding of fingers during Japa chanting."
    ],
    tags: [
      "5 Mukhi Rudraksha",
      "Rudraksha Mala",
      "7mm Mala",
      "108 Beads",
      "Lord Shiva",
      "Mahadev",
      "Varanasi Sourced",
      "Kashi Prasad"
    ],
    price: 899,
    mrp: 1799,
    specifications: [
      {
        groupName: "Mala Specifications",
        specs: [
          { label: "Bead Type", value: "Authentic 5 Mukhi Rudraksha" },
          { label: "Bead Count", value: "108 Beads + 1 Sumeru Guru Bead" },
          { label: "Bead Size", value: "7 mm" },
          { label: "Stringing", value: "Traditional Knotted Cotton Silk Cord" },
          { label: "Ruling Planet", value: "Jupiter (Brihaspati)" },
          { label: "Ruling Deity", value: "Lord Shiva (Kalagni Rudra)" },
          { label: "Origin", value: "Varanasi (Blessed & Purified)" }
        ]
      }
    ],
    faqs: [
      {
        q: "Who can wear or chant with 5 Mukhi Rudraksha Mala?",
        a: "5 Mukhi Rudraksha is universally auspicious and has no astrological side-effects. Anyone of any age, gender, or zodiac can wear it or use it for chanting."
      },
      {
        q: "How should I clean and maintain my Rudraksha mala?",
        a: "Gently wash the beads once a month in clean water or Gangajal, let dry, and lightly condition with pure sandalwood or mustard oil."
      }
    ],
    variants: [
      {
        id: "variant-02-without-offering",
        name: "Without Divine Offering",
        price: 899,
        mrp: 1799,
        badge: "Standard Offering",
        suitableFor: "Daily Japa & Spiritual Sadhana",
        description:
          "Authentic 7mm 5 Mukhi Rudraksha 108+1 mala hand-knotted with durable holy thread for smooth chanting.",
        divineOfferingOption: "Without Divine Offering",
        keyHighlights: [
          "Hand-selected authentic 5 Mukhi Rudraksha beads (7mm)",
          "108+1 Sumeru bead configuration with knotting",
          "Universal positivity and mental peace",
          "Tested for natural mukhi clarity and bead density",
          "Sanctified in Varanasi"
        ],
        samagriChecklist: [
          {
            category: "Package Contents",
            items: [
              { name: "5 Mukhi Rudraksha Mala (7mm, 108+1 Beads)", quantity: "1 Unit" },
              { name: "Sacred Storage Pouch", quantity: "1 Unit" },
              { name: "Rudraksha Care & Mantras Guide", quantity: "1 Document" }
            ]
          }
        ]
      },
      {
        id: "variant-02-with-offering",
        name: "With Divine Offering (Kashi Prasad)",
        price: 1200,
        mrp: 2400,
        badge: "Kashi Consecrated",
        suitableFor: "Mahadev's Full Blessings & Health",
        description:
          "Authentic 5 Mukhi Rudraksha mala energized with Vedic Rudrabhishek mantras in Varanasi, dispatched with sanctified Kashi Prasad and temple bhabhoot.",
        divineOfferingOption: "With Divine Offering - Kashi Prasad",
        keyHighlights: [
          "Includes the 7mm 5 Mukhi Rudraksha Mala",
          "Energized with Vedic Rudrabhishek mantras in Varanasi",
          "Consecrated Kashi Vishwanath temple prasad & vibhuti",
          "Traditional sacred silk pouch included",
          "Enhances health, peace of mind, and destroys negative karmas"
        ],
        samagriChecklist: [
          {
            category: "Package Contents",
            items: [
              { name: "5 Mukhi Rudraksha Mala (7mm, 108+1 Beads)", quantity: "1 Unit" },
              { name: "Sanctified Kashi Vishwanath Prasad Pack", quantity: "1 Pack" },
              { name: "Blessed Kashi Temple Vibhuti (Bhasma)", quantity: "1 Vial" },
              { name: "Holy Ganga Jal Consecrated Vial", quantity: "1 Vial" },
              { name: "Consecrated Temple Silk Pouch", quantity: "1 Unit" }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "mala-tulsi-japa",
    slug: "tulsi-japa-mala-108-beads",
    name: "Tulsi Japa Mala – 108 Beads (Holy Basil Wood)",
    category: "Mala",
    image: "/assets/mala/03_mala_regenerated_01.png",
    images: [
      "/assets/mala/03_mala_regenerated_01.png",
      "/assets/mala/03_mala_regenerated_02.png",
    ],
    badge: "Sacred Purity",
    rating: 4.9,
    reviewCount: 295,
    tagline: "Purity, Peace of Mind & Vishnu-Krishna Bhakti",
    shortDescription:
      "Crafted from sacred Tulsi wood, this traditional Japa Mala is used for mantra chanting, meditation, prayer, and spiritual practice. Tulsi wood is deeply revered in Hindu tradition and is associated with purity, devotion, and spiritual significance.",
    detailedOverview: [
      "Tulsi is celebrated as the holiest botanical in Sanatan Dharma. Wearing or chanting upon Tulsi beads purifies the subtle body, protects against negative astral influences, and fosters unconditional devotion (Bhakti).",
      "Each bead is smoothly shaped from genuine Tulsi stems, threaded on strong holy thread with a traditional Sumeru bead and silk tassel."
    ],
    tags: [
      "Tulsi Mala",
      "Holy Basil Wood",
      "Japa Mala",
      "108 Beads",
      "Lord Krishna",
      "Lord Vishnu",
      "Varanasi Sourced",
      "Kashi Prasad"
    ],
    price: 799,
    mrp: 1599,
    specifications: [
      {
        groupName: "Mala Specifications",
        specs: [
          { label: "Material", value: "Sacred Tulsi Wood (Ocimum Sanctum)" },
          { label: "Bead Count", value: "108 Beads + 1 Sumeru Bead" },
          { label: "Bead Size", value: "8 mm" },
          { label: "Thread", value: "Reinforced Cotton Chanting Cord" },
          { label: "Presiding Deities", value: "Lord Krishna / Lord Vishnu / Goddess Tulsi" },
          { label: "Astrological Benefits", value: "Strengthens Mercury (Budh) & Jupiter (Guru)" },
          { label: "Origin", value: "Varanasi (Blessed & Purified)" }
        ]
      }
    ],
    faqs: [
      {
        q: "Can Tulsi Mala be worn by everyone?",
        a: "Yes, Tulsi Mala is pure and auspicious for all spiritual seekers. Traditionally, it is recommended to maintain a vegetarian diet when wearing it around the neck."
      },
      {
        q: "Does genuine Tulsi wood have an aroma?",
        a: "Original Tulsi wood possesses a subtle, natural herbal aroma that softens over time."
      }
    ],
    variants: [
      {
        id: "variant-03-without-offering",
        name: "Without Divine Offering",
        price: 799,
        mrp: 1599,
        badge: "Standard Offering",
        suitableFor: "Mantra Chanting & Devotion",
        description:
          "Crafted from pure sacred Tulsi wood, traditional 108+1 bead mala for Hare Krishna mahamantra, Vishnu japa, and meditation.",
        divineOfferingOption: "Without Divine Offering",
        keyHighlights: [
          "100% authentic sacred Tulsi stem wood",
          "108 round beads + 1 Sumeru bead (8mm)",
          "Subtle natural herbal fragrance",
          "Smooth polish for friction-free japa",
          "Purified in Varanasi"
        ],
        samagriChecklist: [
          {
            category: "Package Contents",
            items: [
              { name: "Sacred Tulsi Japa Mala (8mm, 108+1 Beads)", quantity: "1 Unit" },
              { name: "Traditional Chanting Bag / Pouch", quantity: "1 Unit" },
              { name: "Tulsi Care & Japa Guide", quantity: "1 Document" }
            ]
          }
        ]
      },
      {
        id: "variant-03-with-offering",
        name: "With Divine Offering (Kashi Prasad)",
        price: 1200,
        mrp: 2400,
        badge: "Kashi Consecrated",
        suitableFor: "Bhakti, Purity & Aura Cleansing",
        description:
          "Sacred Tulsi Mala energized with Vedic Vishnu & Krishna mantras, accompanied by consecrated Kashi Prasad and sacred Tulsi offerings.",
        divineOfferingOption: "With Divine Offering - Kashi Prasad",
        keyHighlights: [
          "Sacred Tulsi Japa Mala (8mm, 108+1 beads)",
          "Vedic mantra energization in Varanasi",
          "Includes sanctified Kashi Prasad & temple offerings",
          "Consecrated protective pouch",
          "Deepens spiritual focus, tranquility, and divine connection"
        ],
        samagriChecklist: [
          {
            category: "Package Contents",
            items: [
              { name: "Sacred Tulsi Japa Mala (8mm, 108+1 Beads)", quantity: "1 Unit" },
              { name: "Sanctified Kashi Temple Prasad Pack", quantity: "1 Pack" },
              { name: "Blessed Chandan / Tilak from Kashi", quantity: "1 Pack" },
              { name: "Holy Ganga Jal Consecrated Vial", quantity: "1 Vial" },
              { name: "Consecrated Temple Silk Pouch", quantity: "1 Unit" }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "mala-sphatik",
    slug: "sphatik-mala-108-beads",
    name: "Sphatik Mala – 108 Beads (Clear Quartz Crystal)",
    category: "Mala",
    image: "/assets/mala/04_mala_regenerated_01.png",
    images: [
      "/assets/mala/04_mala_regenerated_01.png",
      "/assets/mala/04_mala_regenerated_02.png",
    ],
    badge: "Crystal Clarity",
    rating: 5.0,
    reviewCount: 310,
    tagline: "Cooling Energy, Mental Focus & Goddess Saraswati Blessings",
    shortDescription:
      "Sphatik Mala, traditionally valued for its natural clarity and spiritual significance, is commonly used for meditation, mantra chanting, prayer, and spiritual practices. Renowned for remarkable thermal cooling and high vibrational clarity.",
    detailedOverview: [
      "Sphatik is a gemstone crystal of extraordinary purity. Touching genuine Sphatik produces an immediate soothing, cold sensation on the skin, helping pacify anger, reduce body heat, and calm an overactive mind.",
      "Ideal for chanting Gayatri Mantra, Saraswati Mantra, Mahamrityunjaya Mantra, and Lakshmi Stotras."
    ],
    tags: [
      "Sphatik Mala",
      "Clear Quartz",
      "Crystal Mala",
      "108 Beads",
      "Goddess Saraswati",
      "Lord Shiva",
      "Varanasi Sourced",
      "Kashi Prasad"
    ],
    price: 1300,
    mrp: 2600,
    specifications: [
      {
        groupName: "Mala Specifications",
        specs: [
          { label: "Bead Type", value: "100% Natural Clear Quartz Crystal (Sphatik)" },
          { label: "Bead Count", value: "108 Beads + 1 Guru Bead" },
          { label: "Bead Size", value: "7mm (Standard) / 8mm (Diamond Cut)" },
          { label: "Presiding Deities", value: "Goddess Saraswati / Lord Shiva / Goddess Lakshmi" },
          { label: "Astrological Association", value: "Venus (Shukra) & Moon (Chandra)" },
          { label: "Origin", value: "Varanasi (Blessed & Purified)" }
        ]
      }
    ],
    faqs: [
      {
        q: "How to test if Sphatik is real?",
        a: "Real Sphatik stays naturally ice-cold even in hot weather, exhibits microscopic natural inclusions under strong light, and produces gentle sparks when rubbed in darkness."
      }
    ],
    variants: [
      {
        id: "variant-04-standard-without-offering",
        name: "Standard (7mm) – Without Divine Offering",
        price: 1300,
        mrp: 2600,
        badge: "Standard 7mm",
        suitableFor: "Cooling Energy & Gayatri Chanting",
        description:
          "Natural round polished Sphatik (Clear Quartz) beads in 7mm size, 108+1 count.",
        divineOfferingOption: "Without Divine Offering",
        keyHighlights: [
          "100% natural clear quartz crystal (Sphatik)",
          "7mm round beads, 108+1 configuration",
          "Natural cooling thermal properties",
          "Enhances intellect and concentration"
        ],
        samagriChecklist: [
          {
            category: "Package Contents",
            items: [
              { name: "Standard 7mm Sphatik Mala (108+1 Beads)", quantity: "1 Unit" },
              { name: "Protective Velvet Storage Pouch", quantity: "1 Unit" },
              { name: "Sphatik Purity Guide", quantity: "1 Document" }
            ]
          }
        ]
      },
      {
        id: "variant-04-standard-with-offering",
        name: "Standard (7mm) – With Divine Offering (Kashi Prasad)",
        price: 1700,
        mrp: 3400,
        badge: "Kashi Consecrated Standard",
        suitableFor: "Saraswati Blessings & Academic Success",
        description:
          "Standard 7mm Sphatik mala energized with Vedic Saraswati and Shiva stotras, with Kashi Prasad.",
        divineOfferingOption: "With Divine Offering - Kashi Prasad",
        keyHighlights: [
          "Standard 7mm Sphatik Mala (108+1 beads)",
          "Energized with Vedic Saraswati mantras in Kashi",
          "Includes sanctified Kashi temple prasad",
          "Calms anger, anxiety, and body heat"
        ],
        samagriChecklist: [
          {
            category: "Package Contents",
            items: [
              { name: "Standard 7mm Sphatik Mala (108+1 Beads)", quantity: "1 Unit" },
              { name: "Sanctified Kashi Temple Prasad Pack", quantity: "1 Pack" },
              { name: "Blessed Kashi Vibhuti & Kumkum", quantity: "1 Pack" },
              { name: "Holy Ganga Jal Consecrated Vial", quantity: "1 Vial" },
              { name: "Consecrated Temple Silk Pouch", quantity: "1 Unit" }
            ]
          }
        ]
      },
      {
        id: "variant-04-diamond-cut-without-offering",
        name: "Diamond Cut (8mm) – Without Divine Offering",
        price: 3500,
        mrp: 7000,
        badge: "Diamond Cut 8mm",
        suitableFor: "High-Vibrational Meditation & Luxury",
        description:
          "Master-faceted Diamond Cut 8mm Sphatik beads reflecting radiant light with supreme clarity.",
        divineOfferingOption: "Without Divine Offering",
        keyHighlights: [
          "Premium 8mm diamond-faceted clear quartz crystal",
          "Multi-faceted light reflection and maximum cooling vibration",
          "108+1 Guru bead master cut",
          "Purified in Varanasi"
        ],
        samagriChecklist: [
          {
            category: "Package Contents",
            items: [
              { name: "Diamond Cut 8mm Sphatik Mala (108+1 Beads)", quantity: "1 Unit" },
              { name: "Luxury Velvet Storage Case", quantity: "1 Unit" },
              { name: "Sphatik Authenticity Certificate", quantity: "1 Document" }
            ]
          }
        ]
      },
      {
        id: "variant-04-diamond-cut-with-offering",
        name: "Diamond Cut (8mm) – With Divine Offering (Kashi Prasad)",
        price: 4000,
        mrp: 8000,
        badge: "Supreme Consecrated",
        suitableFor: "Ultimate Clarity, Wealth & Divine Grace",
        description:
          "Diamond Cut 8mm Sphatik mala with full Vedic Prana Pratishtha consecration and Kashi Prasad.",
        divineOfferingOption: "With Divine Offering - Kashi Prasad",
        keyHighlights: [
          "Master Diamond-Cut 8mm Sphatik Mala",
          "Full Prana Pratishtha ritual at Varanasi ghats",
          "Includes sacred Kashi temple prasad & holy vibhuti",
          "Exceptional aura purification & Goddess Lakshmi-Saraswati blessings"
        ],
        samagriChecklist: [
          {
            category: "Package Contents",
            items: [
              { name: "Diamond Cut 8mm Sphatik Mala (108+1 Beads)", quantity: "1 Unit" },
              { name: "Sanctified Kashi Temple Prasad Pack", quantity: "1 Pack" },
              { name: "Blessed Kashi Vishwanath Vibhuti", quantity: "1 Vial" },
              { name: "Holy Ganga Jal Consecrated Vial", quantity: "1 Vial" },
              { name: "Luxury Consecrated Temple Silk Case", quantity: "1 Unit" }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "mala-chandan",
    slug: "pure-sandalwood-chandan-mala-108-beads",
    name: "Chandan Mala – 108 Beads (Natural Sandalwood)",
    category: "Mala",
    image: "/assets/mala/05_mala_regenerated_01.png",
    images: [
      "/assets/mala/05_mala_regenerated_01.png",
      "/assets/mala/05_mala_regenerated_02.png",
    ],
    badge: "Pure Sandalwood",
    rating: 4.9,
    reviewCount: 260,
    tagline: "Natural Fragrance, Calms Nervous System & Gayatri Japa",
    shortDescription:
      "Crafted from natural Chandan (Sandalwood), this traditional mala is valued for its soothing fragrance, natural beauty, and spiritual significance. It is traditionally used for meditation, mantra chanting, prayer, and spiritual practices.",
    detailedOverview: [
      "Handmade from genuine fragrant sandalwood (Chandan). Emits a delicate, calming natural aroma that grounds mindfulness, purifies thought waves, and dispels restlessness during prayer and meditation."
    ],
    tags: [
      "Chandan Mala",
      "Sandalwood Mala",
      "108 Beads",
      "Gayatri Mantra",
      "Lord Shiva",
      "Varanasi Sourced",
      "Kashi Prasad"
    ],
    price: 1100,
    mrp: 2200,
    specifications: [
      {
        groupName: "Mala Specifications",
        specs: [
          { label: "Material", value: "Natural Sandalwood (Chandan)" },
          { label: "Bead Count", value: "108 Beads + 1 Sumeru Bead" },
          { label: "Bead Diameter", value: "8 mm" },
          { label: "Presiding Deities", value: "Goddess Gayatri / Lord Shiva" },
          { label: "Astrological Benefits", value: "Soothes Rahu & Ketu afflictions, cools Pitta dosha" },
          { label: "Origin", value: "Varanasi (Blessed & Purified)" }
        ]
      }
    ],
    faqs: [
      {
        q: "Will the sandalwood aroma fade over time?",
        a: "Authentic sandalwood contains essential oils deep inside the grain. Keeping the mala stored in its airtight pouch when not in use helps preserve its natural fragrance for years."
      }
    ],
    variants: [
      {
        id: "variant-05-without-offering",
        name: "Without Divine Offering",
        price: 1100,
        mrp: 2200,
        badge: "Standard Offering",
        suitableFor: "Gayatri Japa & Nervous System Calming",
        description:
          "Handmade 108+1 bead natural fragrant Sandalwood (Chandan) mala in 8mm diameter.",
        divineOfferingOption: "Without Divine Offering",
        keyHighlights: [
          "100% natural pure fragrant sandalwood",
          "108 beads + 1 Sumeru bead (8mm)",
          "Subtle enduring natural aroma",
          "Soothes Pitta dosha and nervous system",
          "Purified in Varanasi"
        ],
        samagriChecklist: [
          {
            category: "Package Contents",
            items: [
              { name: "Natural Sandalwood Chandan Mala (8mm, 108+1 Beads)", quantity: "1 Unit" },
              { name: "Airtight Storage Pouch (Preserves Aroma)", quantity: "1 Unit" },
              { name: "Chandan Care Guide", quantity: "1 Document" }
            ]
          }
        ]
      },
      {
        id: "variant-05-with-offering",
        name: "With Divine Offering (Kashi Prasad)",
        price: 1400,
        mrp: 2800,
        badge: "Kashi Consecrated",
        suitableFor: "Deep Meditation & Spiritual Grounding",
        description:
          "Natural Chandan Mala consecrated with Gayatri & Shiva mantras in Kashi, dispatched with sacred Kashi Prasad.",
        divineOfferingOption: "With Divine Offering - Kashi Prasad",
        keyHighlights: [
          "Natural Sandalwood Mala (8mm, 108+1 beads)",
          "Energized with sacred Vedic chants in Varanasi",
          "Includes sanctified Kashi Prasad & temple vibhuti",
          "Protective temple storage pouch",
          "Calms overthinking, stress, and planetary imbalances"
        ],
        samagriChecklist: [
          {
            category: "Package Contents",
            items: [
              { name: "Natural Sandalwood Chandan Mala (8mm, 108+1 Beads)", quantity: "1 Unit" },
              { name: "Sanctified Kashi Temple Prasad Pack", quantity: "1 Pack" },
              { name: "Blessed Kashi Temple Bhasma", quantity: "1 Vial" },
              { name: "Holy Ganga Jal Consecrated Vial", quantity: "1 Vial" },
              { name: "Consecrated Temple Silk Pouch", quantity: "1 Unit" }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "mala-kamal-gatta",
    slug: "kamal-gatta-lotus-seed-mala-108-beads",
    name: "Kamal Gatta Mala – 108 Beads (Black Lotus Seeds)",
    category: "Mala",
    image: "/assets/mala/06_mala_regenerated_01.png",
    images: [
      "/assets/mala/06_mala_regenerated_01.png",
      "/assets/mala/06_mala_regenerated_02.png",
    ],
    badge: "Lakshmi Blessing",
    rating: 4.8,
    reviewCount: 230,
    tagline: "Goddess Mahalakshmi's Grace, Wealth & Business Prosperity",
    shortDescription:
      "Kamal Gatta Mala is traditionally made from dried lotus seeds and is associated with Goddess Lakshmi, prosperity, abundance, and spiritual practice. It is commonly used for mantra chanting, meditation, prayer, and devotional practices.",
    detailedOverview: [
      "Crafted from natural dried lotus seeds (Kamal Gatta), the sacred seed of the lotus flower upon which Goddess Mahalakshmi sits.",
      "Invaluable for chanting Kanakadhara Stotram, Sri Suktam, and attracting prosperity."
    ],
    tags: [
      "Kamal Gatta Mala",
      "Lotus Seed Mala",
      "108 Beads",
      "Goddess Lakshmi",
      "Kuber Dev",
      "Wealth & Prosperity",
      "Varanasi Sourced",
      "Kashi Prasad"
    ],
    price: 999,
    mrp: 1999,
    specifications: [
      {
        groupName: "Mala Specifications",
        specs: [
          { label: "Material", value: "Lotus Seeds (Kamal Gatta)" },
          { label: "Bead Count", value: "108 Beads + 1 Guru Bead" },
          { label: "Presiding Deities", value: "Goddess Mahalakshmi / Lord Vishnu / Kuber Dev" },
          { label: "Recommended Mantra", value: "Om Shreem Hreem Kleem Maha Lakshmyai Namaha" },
          { label: "Benefits", value: "Overcomes debt, stabilizes financial inflows, opens business growth" },
          { label: "Origin", value: "Varanasi (Blessed & Purified)" }
        ]
      }
    ],
    faqs: [
      {
        q: "Why is Kamal Gatta Mala used for Lakshmi Puja?",
        a: "Goddess Mahalakshmi is seated on a lotus (Kamal). Chanting her mantras on seeds born from the lotus flower aligns the mind with the frequency of pure abundance."
      }
    ],
    variants: [
      {
        id: "variant-06-without-offering",
        name: "Without Divine Offering",
        price: 999,
        mrp: 1999,
        badge: "Standard Offering",
        suitableFor: "Lakshmi Japa & Prosperity Sadhana",
        description:
          "Authentic 108+1 bead dried lotus seeds (Kamal Gatta) mala for Sri Suktam chanting.",
        divineOfferingOption: "Without Divine Offering",
        keyHighlights: [
          "100% natural dried black lotus seeds",
          "108+1 Guru bead traditional stringing",
          "Sacred to Goddess Lakshmi and Lord Kuber",
          "Removes financial obstacles and debt burdens",
          "Purified in Varanasi"
        ],
        samagriChecklist: [
          {
            category: "Package Contents",
            items: [
              { name: "Kamal Gatta Lotus Seed Mala (108+1 Beads)", quantity: "1 Unit" },
              { name: "Sacred Storage Pouch", quantity: "1 Unit" },
              { name: "Sri Suktam & Lakshmi Mantra Guide", quantity: "1 Document" }
            ]
          }
        ]
      },
      {
        id: "variant-06-with-offering",
        name: "With Divine Offering (Kashi Prasad)",
        price: 1199,
        mrp: 2399,
        badge: "Kashi Consecrated",
        suitableFor: "Business Growth & Abundance Sadhana",
        description:
          "Kamal Gatta Mala consecrated with Sri Suktam and Lakshmi mantras in Varanasi, with Kashi Prasad.",
        divineOfferingOption: "With Divine Offering - Kashi Prasad",
        keyHighlights: [
          "Authentic Kamal Gatta Mala (108+1 lotus seeds)",
          "Energized with Vedic Lakshmi & Sri Suktam anushthan",
          "Includes sanctified Kashi Prasad & energized kumkum",
          "Consecrated protective pouch",
          "Attracts wealth, business growth, and auspicious opportunities"
        ],
        samagriChecklist: [
          {
            category: "Package Contents",
            items: [
              { name: "Kamal Gatta Lotus Seed Mala (108+1 Beads)", quantity: "1 Unit" },
              { name: "Sanctified Kashi Temple Prasad Pack", quantity: "1 Pack" },
              { name: "Energized Lakshmi Kumkum & Akshat", quantity: "1 Pack" },
              { name: "Holy Ganga Jal Consecrated Vial", quantity: "1 Vial" },
              { name: "Consecrated Temple Silk Pouch", quantity: "1 Unit" }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "mala-vaijayanti",
    slug: "divine-vaijayanti-jaap-mala-108-beads",
    name: "Divine Hindu Vajayanti Jaap Mala – 108 Beads",
    category: "Mala",
    image: "/assets/mala/07_mala_regenerated_01.png",
    images: [
      "/assets/mala/07_mala_regenerated_01.png",
      "/assets/mala/07_mala_regenerated_02.png",
    ],
    badge: "Mala of Victory",
    rating: 4.8,
    reviewCount: 195,
    tagline: "Mala of Victory (Vijaya), Overcomes Obstacles & Krishna Siddhi",
    shortDescription:
      "Vajayanti Mala is traditionally associated with devotion, spiritual practice, and divine blessings. This 108-bead Jaap Mala is suitable for mantra chanting, meditation, prayer, and daily spiritual practices.",
    detailedOverview: [
      "Harvested from sacred wild forest groves. Celebrated in Vedic scriptures as the garland worn by Lord Krishna (Vanamali) symbolizing victory and spiritual illumination.",
      "Naturally glossy and durable."
    ],
    tags: [
      "Vajayanti Mala",
      "Vaijayanti Mala",
      "108 Beads",
      "Lord Krishna",
      "Victory Garland",
      "Varanasi Sourced",
      "Kashi Prasad"
    ],
    price: 899,
    mrp: 1799,
    specifications: [
      {
        groupName: "Mala Specifications",
        specs: [
          { label: "Material", value: "Vajayanti Seeds (Coix Lacryma-Jobi)" },
          { label: "Bead Count", value: "108 Beads + 1 Sumeru Bead" },
          { label: "Presiding Deities", value: "Lord Krishna / Lord Vishnu" },
          { label: "Recommended Mantra", value: "Om Namo Bhagavate Vasudevaya / Kleem Krishnaya Namaha" },
          { label: "Benefits", value: "Brings victory over obstacles, attracts positive relationships, clears fear" },
          { label: "Origin", value: "Varanasi (Blessed & Purified)" }
        ]
      }
    ],
    faqs: [
      {
        q: "What is the spiritual significance of Vaijayanti Mala?",
        a: "Vaijayanti translates to 'that which brings victory'. Lord Krishna wore the Vaijayanti garland in Vrindavan, symbolizing divine victory over ego and ignorance."
      }
    ],
    variants: [
      {
        id: "variant-07-without-offering",
        name: "Without Divine Offering",
        price: 899,
        mrp: 1799,
        badge: "Standard Offering",
        suitableFor: "Overcoming Obstacles & Krishna Sadhana",
        description:
          "Traditional 108+1 bead natural Vajayanti seed mala with smooth, naturally glossy finish.",
        divineOfferingOption: "Without Divine Offering",
        keyHighlights: [
          "100% natural sacred forest Vajayanti seeds",
          "108 beads + 1 Sumeru bead",
          "Naturally polished, durable, and lightweight",
          "Garland of victory (Vijaya) worn by Lord Krishna",
          "Purified in Varanasi"
        ],
        samagriChecklist: [
          {
            category: "Package Contents",
            items: [
              { name: "Sacred Vajayanti Jaap Mala (108+1 Beads)", quantity: "1 Unit" },
              { name: "Traditional Storage Pouch", quantity: "1 Unit" },
              { name: "Krishna Japa & Mantras Guide", quantity: "1 Document" }
            ]
          }
        ]
      },
      {
        id: "variant-07-with-offering",
        name: "With Divine Offering (Kashi Prasad)",
        price: 999,
        mrp: 1999,
        badge: "Kashi Consecrated",
        suitableFor: "Victory, Charisma & Inner Strength",
        description:
          "Vajayanti Jaap Mala blessed with Krishna & Vishnu mantras in Kashi, with sacred Kashi Prasad.",
        divineOfferingOption: "With Divine Offering - Kashi Prasad",
        keyHighlights: [
          "Sacred Vajayanti Mala (108+1 seeds)",
          "Energized with Vishnu Sahasranama & Krishna stotras in Kashi",
          "Includes sanctified Kashi Prasad",
          "Temple silk storage pouch",
          "Bestows victory in righteous endeavors and overcomes fear"
        ],
        samagriChecklist: [
          {
            category: "Package Contents",
            items: [
              { name: "Sacred Vajayanti Jaap Mala (108+1 Beads)", quantity: "1 Unit" },
              { name: "Sanctified Kashi Temple Prasad Pack", quantity: "1 Pack" },
              { name: "Blessed Chandan Tilak from Kashi", quantity: "1 Pack" },
              { name: "Holy Ganga Jal Consecrated Vial", quantity: "1 Vial" },
              { name: "Consecrated Temple Silk Pouch", quantity: "1 Unit" }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "mala-white-pearl",
    slug: "natural-white-pearl-moti-mala-108-beads",
    name: "White Pearl Mala – 108 Beads (Natural Moti Mala)",
    category: "Mala",
    image: "/assets/mala/08_mala_regenerated_01.png",
    images: [
      "/assets/mala/08_mala_regenerated_01.png",
      "/assets/mala/08_mala_regenerated_02.png",
      "/assets/mala/08_mala_regenerated_03.png",
    ],
    badge: "Lustrous Pearl",
    rating: 5.0,
    reviewCount: 188,
    tagline: "Chandra (Moon) Pacification, Emotional Calmness & Purity",
    shortDescription:
      "White Pearl Mala is crafted with lustrous pearl beads and is traditionally associated with purity, calmness, grace, and spiritual practice. It is suitable for meditation, prayer, mantra chanting, and devotional practices.",
    detailedOverview: [
      "Crafted from natural cultured freshwater white pearls (Moti) of high luster and smoothness.",
      "The primary gemstone of the Moon (Chandra), known in Vedic astrology to soothe fluctuating moods, cultivate inner serenity, and enhance intuitive clarity."
    ],
    tags: [
      "White Pearl Mala",
      "Moti Mala",
      "108 Beads",
      "Chandra Gemstone",
      "Moon Pacification",
      "Emotional Healing",
      "Varanasi Sourced",
      "Kashi Prasad"
    ],
    price: 4000,
    mrp: 8000,
    specifications: [
      {
        groupName: "Mala Specifications",
        specs: [
          { label: "Material", value: "Natural Pearl Beads (Moti)" },
          { label: "Bead Diameter", value: "6 - 7 mm" },
          { label: "Bead Count", value: "108 Beads + 1 Guru Bead" },
          { label: "Ruling Planet", value: "Moon (Chandra)" },
          { label: "Recommended Mantra", value: "Om Shram Shreem Shrom Sah Chandramase Namaha / Om Som Somaya Namaha" },
          { label: "Astrological Benefits", value: "Stabilizes emotions, heals anxiety, enhances peace and intuition" },
          { label: "Origin", value: "Varanasi (Blessed & Purified)" }
        ]
      }
    ],
    faqs: [
      {
        q: "How does pearl mala help astrologically?",
        a: "Pearl is the primary gemstone of the Moon (Chandra). When Chandra is weak or afflicted in the birth chart, wearing or meditating with a pearl mala restores emotional calm."
      }
    ],
    variants: [
      {
        id: "variant-08-without-offering",
        name: "Without Divine Offering",
        price: 4000,
        mrp: 8000,
        badge: "Standard Offering",
        suitableFor: "Chandra Pacification & Emotional Balance",
        description:
          "Lustrous 108+1 natural white freshwater pearl mala (6-7mm) strung on strong white thread.",
        divineOfferingOption: "Without Divine Offering",
        keyHighlights: [
          "100% natural lustrous white pearls (Moti)",
          "6-7mm calibrated pearls, 108+1 Guru bead",
          "Direct planetary gemstone for Moon (Chandra)",
          "Soothes mind, anxiety, and fluctuating emotions",
          "Purified in Varanasi"
        ],
        samagriChecklist: [
          {
            category: "Package Contents",
            items: [
              { name: "Natural White Pearl Moti Mala (6-7mm, 108+1 Beads)", quantity: "1 Unit" },
              { name: "Luxury Velvet Storage Case", quantity: "1 Unit" },
              { name: "Pearl Authenticity Certificate", quantity: "1 Document" }
            ]
          }
        ]
      },
      {
        id: "variant-08-with-offering",
        name: "With Divine Offering (Kashi Prasad)",
        price: 4400,
        mrp: 8800,
        badge: "Kashi Consecrated",
        suitableFor: "Supreme Mental Serenity & Chandra Healing",
        description:
          "Natural White Pearl Mala energized with Vedic Chandra mantras at the sacred Ganga ghats of Kashi, with Kashi Prasad.",
        divineOfferingOption: "With Divine Offering - Kashi Prasad",
        keyHighlights: [
          "Natural White Pearl Mala (6-7mm, 108+1 pearls)",
          "Consecrated with Vedic Chandra Shanti mantras in Varanasi",
          "Includes sanctified Kashi Prasad & Gangajal vial",
          "Consecrated velvet/silk temple pouch",
          "Cultivates profound emotional balance, peace, and grace"
        ],
        samagriChecklist: [
          {
            category: "Package Contents",
            items: [
              { name: "Natural White Pearl Moti Mala (6-7mm, 108+1 Beads)", quantity: "1 Unit" },
              { name: "Sanctified Kashi Temple Prasad Pack", quantity: "1 Pack" },
              { name: "Blessed Kashi Vibhuti & Chandan", quantity: "1 Pack" },
              { name: "Holy Ganga Jal Consecrated Vial", quantity: "1 Vial" },
              { name: "Consecrated Temple Velvet Case", quantity: "1 Unit" }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "mala-red-coral",
    slug: "natural-red-coral-moonga-mala-108-beads",
    name: "Red Coral Mala (Moonga Mala) – 108 Beads",
    category: "Mala",
    image: "/assets/mala/09_mala_regenerated_01.png",
    images: [
      "/assets/mala/09_mala_regenerated_01.png",
      "/assets/mala/09_mala_regenerated_02.png",
    ],
    badge: "Mangal Energy",
    rating: 4.9,
    reviewCount: 175,
    tagline: "Mangal Energy, Physical Vitality, Courage & Hanuman Grace",
    shortDescription:
      "Red Coral Mala, also known as Moonga Mala, is traditionally associated with strength, courage, confidence, and spiritual practice. It is commonly used for mantra chanting, meditation, prayer, and devotional practices.",
    detailedOverview: [
      "Crafted from natural energized Red Coral (Moonga) beads. The principal gemstone of Mars (Mangal), revered for cultivating unwavering courage, physical stamina, leadership, and dispelling fear."
    ],
    tags: [
      "Red Coral Mala",
      "Moonga Mala",
      "108 Beads",
      "Mars Gemstone",
      "Lord Hanuman",
      "Courage & Vitality",
      "Varanasi Sourced",
      "Kashi Prasad"
    ],
    price: 4000,
    mrp: 8000,
    specifications: [
      {
        groupName: "Mala Specifications",
        specs: [
          { label: "Material", value: "Red Coral (Moonga)" },
          { label: "Bead Diameter", value: "6 mm" },
          { label: "Bead Count", value: "108 Beads + 1 Guru Bead" },
          { label: "Ruling Planet", value: "Mars (Mangal)" },
          { label: "Ruling Deity", value: "Lord Hanuman / Lord Kartikeya" },
          { label: "Recommended Mantra", value: "Om Kram Kreem Kroum Sah Bhaumaya Namaha / Om Hanumate Namaha" },
          { label: "Astrological Benefits", value: "Overcomes lethargy, builds courage, pacifies Manglik dosha" },
          { label: "Origin", value: "Varanasi (Blessed & Purified)" }
        ]
      }
    ],
    faqs: [
      {
        q: "What is the benefit of chanting Hanuman mantras on Red Coral Mala?",
        a: "Red Coral vibrates with the fiery energy of Mars (Mangal), the planetary ruler aligned with Lord Hanuman. Chanting Hanuman Chalisa on Moonga mala multiplies protective strength."
      }
    ],
    variants: [
      {
        id: "variant-09-without-offering",
        name: "Without Divine Offering",
        price: 4000,
        mrp: 8000,
        badge: "Standard Offering",
        suitableFor: "Mangal Strengthening & Courage",
        description:
          "Authentic 6mm 108+1 Red Coral (Moonga) bead mala with traditional knotting.",
        divineOfferingOption: "Without Divine Offering",
        keyHighlights: [
          "100% natural energized Red Coral (Moonga)",
          "6mm uniform beads, 108+1 Guru bead",
          "Planetary gemstone for Mars (Mangal) & Lord Hanuman",
          "Boosts physical energy, courage, and leadership",
          "Purified in Varanasi"
        ],
        samagriChecklist: [
          {
            category: "Package Contents",
            items: [
              { name: "Natural Red Coral Moonga Mala (6mm, 108+1 Beads)", quantity: "1 Unit" },
              { name: "Luxury Velvet Storage Case", quantity: "1 Unit" },
              { name: "Coral Authenticity Certificate", quantity: "1 Document" }
            ]
          }
        ]
      },
      {
        id: "variant-09-with-offering",
        name: "With Divine Offering (Kashi Prasad)",
        price: 4299,
        mrp: 8599,
        badge: "Kashi Consecrated",
        suitableFor: "Hanuman Grace, Vitality & Manglik Relief",
        description:
          "Red Coral Mala consecrated with Vedic Mangal & Hanuman mantras in Kashi, with Kashi Prasad.",
        divineOfferingOption: "With Divine Offering - Kashi Prasad",
        keyHighlights: [
          "Natural Red Coral Mala (6mm, 108+1 beads)",
          "Energized with Hanuman & Mangal Vedic anushthan in Varanasi",
          "Includes sanctified Kashi Prasad & temple sindoor",
          "Consecrated protective pouch",
          "Eliminates fear, boosts physical stamina, and brings victory"
        ],
        samagriChecklist: [
          {
            category: "Package Contents",
            items: [
              { name: "Natural Red Coral Moonga Mala (6mm, 108+1 Beads)", quantity: "1 Unit" },
              { name: "Sanctified Kashi Temple Prasad Pack", quantity: "1 Pack" },
              { name: "Blessed Hanuman Sindoor from Varanasi", quantity: "1 Pack" },
              { name: "Holy Ganga Jal Consecrated Vial", quantity: "1 Vial" },
              { name: "Consecrated Temple Velvet Case", quantity: "1 Unit" }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "mala-big-size-rudraksha-12mm",
    slug: "big-size-rudraksha-jap-mala-12mm",
    name: "Rudraksh Jap Mala – Big Size – 108 Beads (12mm)",
    category: "Mala",
    image: "/assets/mala/10_mala_regenerated_01.png",
    images: [
      "/assets/mala/10_mala_regenerated_01.png",
      "/assets/mala/10_mala_regenerated_02.png",
    ],
    badge: "12mm Japa Grade",
    rating: 4.9,
    reviewCount: 340,
    tagline: "Bold Tactile Beads, Powerful Shiva Sadhana & High Vibrations",
    shortDescription:
      "This Big Size Rudraksh Jap Mala is traditionally used for mantra chanting, meditation, prayer, and spiritual practices. Rudraksha beads are deeply revered in Hindu tradition.",
    detailedOverview: [
      "Crafted from selected large-sized (12mm) authentic 5 Mukhi Rudraksha beads with deep defined natural grooves.",
      "The preferred choice of sadhakas and pujaris in Kashi who desire a heavy, tactile feel during prolonged Japa chanting sessions."
    ],
    tags: [
      "Big Size Rudraksha",
      "12mm Rudraksha",
      "Rudraksha Jap Mala",
      "108 Beads",
      "Lord Shiva",
      "Kaal Bhairav",
      "Varanasi Sourced",
      "Kashi Prasad"
    ],
    price: 499,
    mrp: 999,
    specifications: [
      {
        groupName: "Mala Specifications",
        specs: [
          { label: "Material", value: "Natural Rudraksha Seeds (5 Mukhi)" },
          { label: "Bead Diameter", value: "12 mm (Heavy Japa Grade)" },
          { label: "Bead Count", value: "108 Beads + 1 Sumeru Guru Bead" },
          { label: "Presiding Deity", value: "Lord Shiva (Mahadev / Kaal Bhairav)" },
          { label: "Ruling Planet", value: "Jupiter (Brihaspati)" },
          { label: "Recommended Mantra", value: "Om Namah Shivaya / Om Tryambakam Yajamahe" },
          { label: "Benefits", value: "Unbeatable tactile feedback for Japa, grounds intense mental energies" },
          { label: "Origin", value: "Varanasi (Blessed & Purified)" }
        ]
      }
    ],
    faqs: [
      {
        q: "Why choose a Big Size Rudraksha Mala?",
        a: "The large 12mm beads give a substantial, heavy feel in the hand, making it easier to count mantras during long meditation sessions without fingers slipping."
      }
    ],
    variants: [
      {
        id: "variant-10-without-offering",
        name: "Without Divine Offering",
        price: 499,
        mrp: 999,
        badge: "Standard Offering",
        suitableFor: "Deep Shiva Japa & Sadhana",
        description:
          "Substantial 12mm 5 Mukhi authentic Rudraksha beads strung in 108+1 formation for tactile mantra counting.",
        divineOfferingOption: "Without Divine Offering",
        keyHighlights: [
          "Authentic 12mm bold 5 Mukhi Rudraksha beads",
          "108 beads + 1 Sumeru Guru bead",
          "Deep natural contours and heavy tactile feedback",
          "Ideal for long japa chanting and Mahamrityunjaya sadhana",
          "Purified in Varanasi"
        ],
        samagriChecklist: [
          {
            category: "Package Contents",
            items: [
              { name: "Big Size 12mm Rudraksha Jap Mala (108+1 Beads)", quantity: "1 Unit" },
              { name: "Sacred Storage Pouch", quantity: "1 Unit" },
              { name: "Mahadev Chanting & Care Guide", quantity: "1 Document" }
            ]
          }
        ]
      },
      {
        id: "variant-10-with-offering",
        name: "With Divine Offering (Kashi Prasad)",
        price: 799,
        mrp: 1599,
        badge: "Kashi Consecrated",
        suitableFor: "Kaal Bhairav & Shiva Siddhi",
        description:
          "Big Size 12mm Rudraksha Mala consecrated with Kaal Bhairav and Shiva Rudrabhishek in Varanasi, with Kashi Prasad.",
        divineOfferingOption: "With Divine Offering - Kashi Prasad",
        keyHighlights: [
          "Big Size 12mm Rudraksha Jap Mala (108+1 beads)",
          "Energized with Vedic Rudri path & Kaal Bhairav mantras",
          "Includes sanctified Kashi Prasad & holy Mahadev bhabhoot",
          "Consecrated protective pouch",
          "Grounds high spiritual energy and provides immense spiritual protection"
        ],
        samagriChecklist: [
          {
            category: "Package Contents",
            items: [
              { name: "Big Size 12mm Rudraksha Jap Mala (108+1 Beads)", quantity: "1 Unit" },
              { name: "Sanctified Kashi Temple Prasad Pack", quantity: "1 Pack" },
              { name: "Blessed Kaal Bhairav / Shiva Bhasma", quantity: "1 Vial" },
              { name: "Holy Ganga Jal Consecrated Vial", quantity: "1 Vial" },
              { name: "Consecrated Temple Silk Pouch", quantity: "1 Unit" }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "mala-rosewood-lal-chandan",
    slug: "rosewood-mala-lal-chandan",
    name: "Rosewood Mala – Lal Chandan",
    category: "Mala",
    image: "/assets/mala/11_mala_regenerated_01.jpg",
    images: [
      "/assets/mala/11_mala_regenerated_01.jpg",
      "/assets/mala/11_mala_regenerated_02.jpg",
    ],
    badge: "Standard Offering",
    rating: 4.9,
    reviewCount: 248,
    tagline: "Devotional Japa, Gayatri Mantra, Meditation & Devotion",
    shortDescription:
      "A traditional Lal Chandan Mala crafted with smooth reddish-brown wooden beads, suitable for daily japa, mantra chanting, meditation, and spiritual practice. Its natural wood texture and warm finish give it a simple, timeless devotional character.",
    detailedOverview: [
      "Crafted with 108+1 genuine Lal Chandan (Rosewood / Red Sandalwood) beads, this revered sacred mala is cherished across traditional spiritual lineages for enhancing focus, calming restless thoughts, and creating an aura of serenity during meditation.",
      "Each bead is carefully shaped and smoothly polished to highlight its natural reddish-brown wooden grain, strung with a reinforced traditional holy cord and finished with an auspicious red tassel. Every mala is blessed with holy Ganga jal on the sacred ghats of Varanasi prior to dispatch."
    ],
    tags: [
      "Rosewood Mala",
      "Lal Chandan Mala",
      "लाल चंदन माला",
      "108 Beads",
      "Mala",
      "Gayatri Mantra",
      "Daily Japa",
      "Varanasi Sourced",
      "Kashi Prasad"
    ],
    price: 899,
    mrp: 1799,
    specifications: [
      {
        groupName: "Mala Specifications",
        specs: [
          { label: "Material", value: "Natural Lal Chandan / Rosewood (Red Sandalwood Wood)" },
          { label: "Bead Count", value: "108 Beads + 1 Guru Bead" },
          { label: "Bead Diameter", value: "8 mm" },
          { label: "Thread", value: "Reinforced Traditional Cotton Cord with Auspicious Tassel" },
          { label: "Presiding Deities", value: "Goddess Gayatri / Goddess Durga / Lord Surya" },
          { label: "Spiritual Significance", value: "Daily Japa, Mantra Chanting, Meditation & Mental Calmness" },
          { label: "Origin", value: "Varanasi (Blessed & Purified)" }
        ]
      }
    ],
    faqs: [
      {
        q: "What are the benefits of Lal Chandan (Rosewood) Mala for Japa?",
        a: "Lal Chandan beads are revered for grounding energy, fostering mental clarity, and maintaining smooth tactile rhythm during Gayatri mantra chanting and daily devotional sadhana."
      },
      {
        q: "How should I care for my Rosewood Mala?",
        a: "Store your mala in the provided sacred temple pouch when not chanting. Avoid direct contact with harsh chemical soaps and perfumes to preserve the natural wooden texture."
      }
    ],
    variants: [
      {
        id: "variant-11-without-offering",
        name: "Without Divine Offering",
        price: 899,
        mrp: 1799,
        badge: "Standard Offering",
        suitableFor: "Daily Japa, Meditation & Mantra Sadhana",
        description:
          "A traditional Lal Chandan Mala crafted with smooth reddish-brown wooden beads, suitable for daily japa, mantra chanting, meditation, and spiritual practice.",
        divineOfferingOption: "Without Divine Offering",
        keyHighlights: [
          "Smooth reddish-brown natural Lal Chandan (Rosewood) beads",
          "108 beads + 1 Guru bead (8mm diameter)",
          "Natural wood texture with a warm, subtle devotional finish",
          "Ideal for Gayatri mantra chanting and daily prayer",
          "Purified with holy Ganga jal in Varanasi"
        ],
        samagriChecklist: [
          {
            category: "Package Contents",
            items: [
              { name: "Rosewood Mala – Lal Chandan (108+1 Beads, 8mm)", quantity: "1 Unit" },
              { name: "Sacred Temple Storage Pouch", quantity: "1 Unit" },
              { name: "Authenticity & Care Guide", quantity: "1 Document" }
            ]
          }
        ]
      },
      {
        id: "variant-11-with-offering",
        name: "With Divine Offering (Kashi Prasad)",
        price: 1199,
        mrp: 2399,
        badge: "Divine Offering",
        suitableFor: "Complete Consecration & Spiritual Blessings",
        description:
          "Traditional Rosewood (Lal Chandan) Mala consecrated with Vedic sankalp in Varanasi, accompanied by sanctified Kashi Prasad and sacred temple offerings.",
        divineOfferingOption: "With Divine Offering - Kashi Prasad",
        keyHighlights: [
          "Authentic 108+1 Rosewood (Lal Chandan) Mala (8mm beads)",
          "Vedic mantra energization and sankalp performed at Varanasi",
          "Accompanied by sanctified Kashi temple prasad & holy vibhuti",
          "Consecrated Ganga jal vial included",
          "Brings positive energy, protection, and divine grace"
        ],
        samagriChecklist: [
          {
            category: "Package Contents",
            items: [
              { name: "Rosewood Mala – Lal Chandan (108+1 Beads, 8mm)", quantity: "1 Unit" },
              { name: "Sanctified Kashi Temple Prasad Pack", quantity: "1 Pack" },
              { name: "Sacred Kashi Vishwanath Vibhuti / Bhasma", quantity: "1 Vial" },
              { name: "Holy Ganga Jal Consecrated Vial", quantity: "1 Vial" },
              { name: "Premium Temple Silk Storage Pouch", quantity: "1 Unit" }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "mala-parad-108",
    slug: "parad-mala",
    name: "Parad Mala – 108+1 Beads",
    category: "Mala",
    image: "/assets/mala/12_mala_regenerated_01.jpg",
    images: [
      "/assets/mala/12_mala_regenerated_01.jpg",
      "/assets/mala/12_mala_regenerated_02.jpg",
    ],
    badge: "Standard Offering",
    rating: 4.9,
    reviewCount: 189,
    tagline: "Divine Purity, Timeless Tradition & Shiva Consciousness",
    shortDescription:
      "A traditional 108+1 Parad Mala featuring smooth metallic-finish beads, designed for japa, mantra chanting, meditation, and devotional practice. Its classic silver-toned appearance and traditional construction make it a distinctive choice for daily spiritual practice.",
    detailedOverview: [
      "Parad (purified and solidified Mercury) is described in classical Vedic and Tantric scriptures as the purest elemental substance imbued with the spiritual presence of Lord Shiva. Chanting on a Parad Mala creates high vibrational frequencies that stabilize the mind and bring deep meditative peace.",
      "Each bead is precisely handcrafted with a smooth metallic luster, strung securely with a reinforced traditional holy cord and finished with a silk tassel. Every mala is sanctified with sacred Ganga jal along the holy ghats of Varanasi prior to dispatch."
    ],
    tags: [
      "Parad Mala",
      "Mercury Mala",
      "पारद माला",
      "108 Beads",
      "Mala",
      "Lord Shiva",
      "Mahamrityunjaya Japa",
      "Varanasi Sourced",
      "Kashi Prasad"
    ],
    price: 2999,
    mrp: 5999,
    specifications: [
      {
        groupName: "Mala Specifications",
        specs: [
          { label: "Material", value: "Pure Solidified Parad (Mercury / Rasamani)" },
          { label: "Bead Count", value: "108 Beads + 1 Guru Bead" },
          { label: "Bead Diameter", value: "6 mm" },
          { label: "Thread", value: "Reinforced Sacred Cord with Traditional Tassel" },
          { label: "Presiding Deities", value: "Lord Shiva (Mahadev) & Goddess Parvati" },
          { label: "Spiritual Significance", value: "Chakra Balance, Mahamrityunjaya Japa, Mental Calmness & Shiva Consciousness" },
          { label: "Origin", value: "Varanasi (Blessed & Purified)" }
        ]
      }
    ],
    faqs: [
      {
        q: "What makes Parad Mala spiritually unique for Japa?",
        a: "In Vedic tradition, Parad is revered as the seed of Lord Shiva. Chanting mantras like Om Namah Shivaya or Mahamrityunjaya on Parad beads is believed to amplify spiritual focus and cleanse subtle energetic blockages."
      },
      {
        q: "How should I maintain and care for my Parad Mala?",
        a: "Store the Parad Mala in the sacred storage pouch provided when not in use. Avoid exposing it to extreme friction or harsh chemicals to preserve its smooth metallic sheen."
      }
    ],
    variants: [
      {
        id: "variant-12-without-offering",
        name: "Without Divine Offering",
        price: 2999,
        mrp: 5999,
        badge: "Standard Offering",
        suitableFor: "Daily Japa, Mahamrityunjaya & Meditation",
        description:
          "A traditional 108+1 Parad Mala featuring smooth metallic-finish beads, designed for japa, mantra chanting, meditation, and devotional practice.",
        divineOfferingOption: "Without Divine Offering",
        keyHighlights: [
          "100% genuine solidified Parad (Mercury) beads",
          "108 beads + 1 Sumeru Guru bead (6mm diameter)",
          "Smooth metallic silver-tone finish and balanced tactile feel",
          "Ideal for Lord Shiva sadhana and daily mantra meditation",
          "Purified with holy Ganga jal in Varanasi"
        ],
        samagriChecklist: [
          {
            category: "Package Contents",
            items: [
              { name: "Parad Mala – 108+1 Beads (6mm)", quantity: "1 Unit" },
              { name: "Sacred Temple Storage Pouch", quantity: "1 Unit" },
              { name: "Authenticity & Care Guide", quantity: "1 Document" }
            ]
          }
        ]
      },
      {
        id: "variant-12-with-offering",
        name: "With Divine Offering (Kashi Prasad)",
        price: 3299,
        mrp: 6599,
        badge: "Divine Offering",
        suitableFor: "Complete Shiva Consecration & Spiritual Protection",
        description:
          "Traditional Parad Mala consecrated with specialized Vedic Rudrabhishek at Varanasi, accompanied by sanctified Kashi Prasad and sacred temple offerings.",
        divineOfferingOption: "With Divine Offering - Kashi Prasad",
        keyHighlights: [
          "Authentic 108+1 Parad (Mercury) Mala (6mm beads)",
          "Consecrated with Vedic Rudrabhishek sankalp at Kashi",
          "Accompanied by sanctified Kashi temple prasad & sacred vibhuti",
          "Consecrated Ganga jal vial included",
          "Infuses profound tranquility, protection, and divine grace"
        ],
        samagriChecklist: [
          {
            category: "Package Contents",
            items: [
              { name: "Parad Mala – 108+1 Beads (6mm)", quantity: "1 Unit" },
              { name: "Sanctified Kashi Temple Prasad Pack", quantity: "1 Pack" },
              { name: "Sacred Kashi Vishwanath Vibhuti / Bhasma", quantity: "1 Vial" },
              { name: "Holy Ganga Jal Consecrated Vial", quantity: "1 Vial" },
              { name: "Premium Temple Silk Storage Pouch", quantity: "1 Unit" }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "mala-hakik-agate",
    slug: "hakik-mala-agate",
    name: "Hakik Mala – Agate",
    category: "Mala",
    image: "/assets/mala/13_mala_regenerated_01.jpg",
    images: [
      "/assets/mala/13_mala_regenerated_01.jpg",
      "/assets/mala/13_mala_regenerated_02.jpg",
    ],
    badge: "Standard Offering",
    rating: 4.9,
    reviewCount: 216,
    tagline: "Natural Agate, Daily Japa, Meditation & Timeless Devotion",
    shortDescription:
      "A traditional 108+1 Hakik Mala crafted with smooth natural Agate beads, suitable for daily japa, mantra chanting, meditation, and devotional practice. Its natural stone texture and classic finish make it a simple and timeless spiritual mala.",
    detailedOverview: [
      "Crafted from genuine 108+1 natural Hakik (Agate) stone beads, this revered sacred mala is cherished across traditional spiritual lineages for balancing emotional stability, grounding spiritual energy, and cultivating unwavering focus during daily japa and meditation.",
      "Each bead is smoothly polished to showcase its natural banded stone texture, strung securely with a reinforced traditional holy cord and finished with an auspicious tassel. Every mala is sanctified with holy Ganga jal along the sacred ghats of Varanasi prior to dispatch."
    ],
    tags: [
      "Hakik Mala",
      "Agate Mala",
      "हकीक माला",
      "108 Beads",
      "Mala",
      "Natural Agate",
      "Daily Japa",
      "Meditation",
      "Varanasi Sourced",
      "Kashi Prasad"
    ],
    price: 799,
    mrp: 1599,
    specifications: [
      {
        groupName: "Mala Specifications",
        specs: [
          { label: "Material", value: "Natural Agate / Hakik" },
          { label: "Bead Count", value: "108 Beads + 1 Guru Bead" },
          { label: "Bead Diameter", value: "6 mm" },
          { label: "Thread", value: "Reinforced Sacred Cord with Auspicious Tassel" },
          { label: "Spiritual Significance", value: "Daily Japa, Mantra Chanting, Meditation & Devotional Practice" },
          { label: "Origin", value: "Varanasi (Blessed & Purified)" }
        ]
      }
    ],
    faqs: [
      {
        q: "What are the benefits of Hakik (Agate) Mala for Japa?",
        a: "Natural Hakik (Agate) is traditionally revered for grounding energy, harmonizing emotional balance, and providing a smooth tactile rhythm during mantra chanting and daily devotional sadhana."
      },
      {
        q: "How should I maintain and care for my Hakik Mala?",
        a: "Store the mala in the provided sacred temple pouch when not chanting. Avoid direct contact with harsh chemical soaps and perfumes to preserve its natural stone luster."
      }
    ],
    variants: [
      {
        id: "variant-13-without-offering",
        name: "Without Divine Offering",
        price: 799,
        mrp: 1599,
        badge: "Standard Offering",
        suitableFor: "Daily Japa, Meditation & Devotional Practice",
        description:
          "A traditional 108+1 Hakik Mala crafted with smooth natural Agate beads, suitable for daily japa, mantra chanting, meditation, and devotional practice.",
        divineOfferingOption: "Without Divine Offering",
        keyHighlights: [
          "100% natural smooth Hakik (Agate) stone beads",
          "108 beads + 1 Guru bead (6mm diameter)",
          "Natural stone texture and classic devotional finish",
          "Ideal for daily japa, mantra chanting, and meditation",
          "Purified with sacred Ganga jal in Varanasi"
        ],
        samagriChecklist: [
          {
            category: "Package Contents",
            items: [
              { name: "Hakik Mala – Agate (108+1 Beads, 6mm)", quantity: "1 Unit" },
              { name: "Sacred Temple Storage Pouch", quantity: "1 Unit" },
              { name: "Authenticity & Care Guide", quantity: "1 Document" }
            ]
          }
        ]
      },
      {
        id: "variant-13-with-offering",
        name: "With Divine Offering (Kashi Prasad)",
        price: 1099,
        mrp: 2199,
        badge: "Divine Offering",
        suitableFor: "Complete Consecration & Spiritual Blessings",
        description:
          "Traditional Hakik (Agate) Mala consecrated with Vedic sankalp in Varanasi, accompanied by sanctified Kashi Prasad and sacred temple offerings.",
        divineOfferingOption: "With Divine Offering - Kashi Prasad",
        keyHighlights: [
          "Authentic 108+1 Hakik (Agate) Mala (6mm beads)",
          "Vedic mantra energization and sankalp performed at Varanasi",
          "Accompanied by sanctified Kashi temple prasad & holy vibhuti",
          "Consecrated Ganga jal vial included",
          "Grounding aura protection and divine blessings"
        ],
        samagriChecklist: [
          {
            category: "Package Contents",
            items: [
              { name: "Hakik Mala – Agate (108+1 Beads, 6mm)", quantity: "1 Unit" },
              { name: "Sanctified Kashi Temple Prasad Pack", quantity: "1 Pack" },
              { name: "Sacred Kashi Vishwanath Vibhuti / Bhasma", quantity: "1 Vial" },
              { name: "Holy Ganga Jal Consecrated Vial", quantity: "1 Vial" },
              { name: "Premium Temple Silk Storage Pouch", quantity: "1 Unit" }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "mala-navratna-108",
    slug: "navratna-mala",
    name: "Navratna Mala",
    category: "Mala",
    image: "/assets/mala/14_mala_regenerated_01.jpg",
    images: [
      "/assets/mala/14_mala_regenerated_01.jpg",
      "/assets/mala/14_mala_regenerated_02.jpg",
    ],
    badge: "Standard Offering",
    rating: 4.9,
    reviewCount: 274,
    tagline: "Nine Gemstones, Divine Balance & Timeless Tradition",
    shortDescription:
      "A traditional 108+1 Navratna Mala featuring nine gemstone varieties in a harmonious arrangement, designed for japa, mantra chanting, meditation, and devotional practice. Its colorful natural-stone appearance gives the mala a distinctive and traditional spiritual character.",
    detailedOverview: [
      "Crafted with 108+1 genuine nine-gemstone beads representing the sacred Navagrahas (nine planetary deities), this revered mala is traditionally used to harmonize cosmic energies, mitigate planetary afflictions, and cultivate deep inner balance during meditation and spiritual practice.",
      "Each bead is precisely rounded and smoothly polished to showcase its authentic stone brilliance, strung securely with a reinforced traditional holy cord and finished with an auspicious tassel. Every mala is sanctified with holy Ganga jal along the sacred ghats of Varanasi prior to dispatch."
    ],
    tags: [
      "Navratna Mala",
      "Nine Gemstones Mala",
      "नवरत्न माला",
      "108 Beads",
      "Mala",
      "Navagraha",
      "Daily Japa",
      "Meditation",
      "Varanasi Sourced",
      "Kashi Prasad"
    ],
    price: 1999,
    mrp: 3999,
    specifications: [
      {
        groupName: "Mala Specifications",
        specs: [
          { label: "Material", value: "Nine Gemstones / Navratna" },
          { label: "Bead Count", value: "108 Beads + 1 Guru Bead" },
          { label: "Bead Diameter", value: "6 mm" },
          { label: "Thread", value: "Reinforced Sacred Cord with Auspicious Tassel" },
          { label: "Presiding Deities", value: "Navagrahas (Nine Celestial Deities)" },
          { label: "Spiritual Significance", value: "Planetary Harmony, Navagraha Shanti, Japa & Meditation" },
          { label: "Origin", value: "Varanasi (Blessed & Purified)" }
        ]
      }
    ],
    faqs: [
      {
        q: "What is the spiritual significance of the Navratna Mala?",
        a: "The Navratna Mala embodies the energies of the nine planetary deities. Wearing or chanting on this mala helps neutralize planetary malefic influences, foster harmony, and enhance holistic spiritual well-being."
      },
      {
        q: "How should I care for my Navratna Mala?",
        a: "Store the mala in the provided sacred temple storage pouch when not in use. Avoid contact with harsh chemicals or abrasive surfaces to maintain the natural luster of the gemstones."
      }
    ],
    variants: [
      {
        id: "variant-14-without-offering",
        name: "Without Divine Offering",
        price: 1999,
        mrp: 3999,
        badge: "Standard Offering",
        suitableFor: "Daily Japa, Meditation & Planetary Harmony",
        description:
          "A traditional 108+1 Navratna Mala featuring nine gemstone varieties in a harmonious arrangement, designed for japa, mantra chanting, meditation, and devotional practice.",
        divineOfferingOption: "Without Divine Offering",
        keyHighlights: [
          "108 beads + 1 Guru bead (6mm diameter)",
          "Authentic combination of nine traditional sacred gemstones",
          "Smooth natural stone beads with vibrant multi-gem luster",
          "Balances nine planetary energies (Navagraha Dosha Shanti)",
          "Purified with sacred Ganga jal in Varanasi"
        ],
        samagriChecklist: [
          {
            category: "Package Contents",
            items: [
              { name: "Navratna Mala (108+1 Beads, 6mm)", quantity: "1 Unit" },
              { name: "Sacred Temple Storage Pouch", quantity: "1 Unit" },
              { name: "Authenticity & Care Guide", quantity: "1 Document" }
            ]
          }
        ]
      },
      {
        id: "variant-14-with-offering",
        name: "With Divine Offering (Kashi Prasad)",
        price: 2299,
        mrp: 4599,
        badge: "Divine Offering",
        suitableFor: "Complete Navagraha Consecration & Spiritual Protection",
        description:
          "Traditional Navratna Mala consecrated with Vedic Navagraha sankalp in Varanasi, accompanied by sanctified Kashi Prasad and sacred temple offerings.",
        divineOfferingOption: "With Divine Offering - Kashi Prasad",
        keyHighlights: [
          "Authentic 108+1 Navratna Mala (6mm beads)",
          "Consecrated with Vedic Navagraha sankalp at Kashi",
          "Accompanied by sanctified Kashi temple prasad & holy vibhuti",
          "Consecrated Ganga jal vial included",
          "Potent balance of nine planetary forces and divine blessings"
        ],
        samagriChecklist: [
          {
            category: "Package Contents",
            items: [
              { name: "Navratna Mala (108+1 Beads, 6mm)", quantity: "1 Unit" },
              { name: "Sanctified Kashi Temple Prasad Pack", quantity: "1 Pack" },
              { name: "Sacred Kashi Vishwanath Vibhuti / Bhasma", quantity: "1 Vial" },
              { name: "Holy Ganga Jal Consecrated Vial", quantity: "1 Vial" },
              { name: "Premium Temple Silk Storage Pouch", quantity: "1 Unit" }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "mala-gemstone-ratna-based",
    slug: "gemstone-mala-ratna-based",
    name: "Gemstone Mala – Ratna Based",
    category: "Mala",
    image: "/assets/mala/15_mala_regenerated_01.jpg",
    images: [
      "/assets/mala/15_mala_regenerated_01.jpg",
      "/assets/mala/15_mala_regenerated_02.jpg",
    ],
    badge: "Standard Offering",
    rating: 4.9,
    reviewCount: 198,
    tagline: "Natural Gemstones, Positive Energy & Spiritual Elegance",
    shortDescription:
      "A premium 108+1 Gemstone Mala featuring a vibrant combination of natural gemstone beads, designed for japa, mantra chanting, meditation, and devotional practice. The varied colors and natural stone character give it a distinctive and elegant spiritual appearance.",
    detailedOverview: [
      "Crafted from a harmonious selection of genuine 108+1 natural gemstone beads, this luxury spiritual mala unites diverse mineral energies to support mental serenity, energetic alignment, and profound focus during meditation and daily japa.",
      "Each gemstone bead is meticulously polished to highlight its natural beauty, accented with refined gold-toned separators, and securely strung with a reinforced traditional holy cord and golden silk tassel. Every mala is blessed with sacred Ganga jal along the ghats of Varanasi prior to dispatch."
    ],
    tags: [
      "Gemstone Mala",
      "Ratna Mala",
      "रत्न माला",
      "108 Beads",
      "Mala",
      "Natural Gemstones",
      "Daily Japa",
      "Meditation",
      "Varanasi Sourced",
      "Kashi Prasad"
    ],
    price: 1499,
    mrp: 2999,
    specifications: [
      {
        groupName: "Mala Specifications",
        specs: [
          { label: "Material", value: "Natural Gemstones / Ratna" },
          { label: "Bead Count", value: "108 Beads + 1 Guru Bead" },
          { label: "Bead Diameter", value: "6 mm" },
          { label: "Thread", value: "Reinforced Sacred Cord with Golden Silk Tassel" },
          { label: "Spiritual Significance", value: "Chakra Balance, Healing Energy, Daily Japa & Meditation" },
          { label: "Origin", value: "Varanasi (Blessed & Purified)" }
        ]
      }
    ],
    faqs: [
      {
        q: "What makes the Gemstone (Ratna Based) Mala special for Japa?",
        a: "The synergy of multiple natural gemstones brings a holistic spectrum of subtle earth energies, promoting mental tranquility, spiritual grounding, and an elevated meditative state."
      },
      {
        q: "How do I care for my Gemstone Mala?",
        a: "Store the mala in its protective sacred silk pouch when not chanting. Cleanse gently with pure water or holy Ganga jal and avoid harsh chemical cleaners."
      }
    ],
    variants: [
      {
        id: "variant-15-without-offering",
        name: "Without Divine Offering",
        price: 1499,
        mrp: 2999,
        badge: "Standard Offering",
        suitableFor: "Daily Japa, Meditation & Energetic Alignment",
        description:
          "A premium 108+1 Gemstone Mala featuring a vibrant combination of natural gemstone beads, designed for japa, mantra chanting, meditation, and devotional practice.",
        divineOfferingOption: "Without Divine Offering",
        keyHighlights: [
          "108 beads + 1 Guru bead (6mm diameter)",
          "Vibrant combination of multi-colored natural gemstone beads",
          "Smooth polished natural stone beads with gold-tone accents",
          "Designed for daily japa, chakra balancing, and meditation",
          "Purified with holy Ganga jal in Varanasi"
        ],
        samagriChecklist: [
          {
            category: "Package Contents",
            items: [
              { name: "Gemstone Mala – Ratna Based (108+1 Beads, 6mm)", quantity: "1 Unit" },
              { name: "Sacred Temple Storage Pouch", quantity: "1 Unit" },
              { name: "Authenticity & Care Guide", quantity: "1 Document" }
            ]
          }
        ]
      },
      {
        id: "variant-15-with-offering",
        name: "With Divine Offering (Kashi Prasad)",
        price: 1799,
        mrp: 3599,
        badge: "Divine Offering",
        suitableFor: "Complete Consecration & Spiritual Blessings",
        description:
          "Premium Gemstone (Ratna Based) Mala consecrated with Vedic sankalp in Varanasi, accompanied by sanctified Kashi Prasad and sacred temple offerings.",
        divineOfferingOption: "With Divine Offering - Kashi Prasad",
        keyHighlights: [
          "Authentic 108+1 Gemstone Mala (6mm beads)",
          "Vedic mantra energization and sankalp performed at Varanasi",
          "Accompanied by sanctified Kashi temple prasad & holy vibhuti",
          "Consecrated Ganga jal vial included",
          "Brings holistic harmony, protection, and divine grace"
        ],
        samagriChecklist: [
          {
            category: "Package Contents",
            items: [
              { name: "Gemstone Mala – Ratna Based (108+1 Beads, 6mm)", quantity: "1 Unit" },
              { name: "Sanctified Kashi Temple Prasad Pack", quantity: "1 Pack" },
              { name: "Sacred Kashi Vishwanath Vibhuti / Bhasma", quantity: "1 Vial" },
              { name: "Holy Ganga Jal Consecrated Vial", quantity: "1 Vial" },
              { name: "Premium Temple Silk Storage Pouch", quantity: "1 Unit" }
            ]
          }
        ]
      }
    ]
  }
];
