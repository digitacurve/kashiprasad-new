import { Product, ProductVariant } from "./types";

export interface GemstoneSettingOption {
  id: string;
  name: string;
  priceAdd: number;
  isCustomPricing?: boolean;
}

export interface GemstoneWeightOption {
  id: string;
  name: string;
  ratti: string;
  carat?: string;
  mmSize?: string;
}

export const gemstoneWeightOptions: GemstoneWeightOption[] = [
  { id: "2-ratti", name: "2 Ratti", ratti: "2.0 Ratti", carat: "1.82 Carat", mmSize: "5–6 mm" },
  { id: "3-ratti", name: "3 Ratti", ratti: "3.0 Ratti", carat: "2.73 Carat", mmSize: "6–7 mm" },
  { id: "4-ratti", name: "4 Ratti", ratti: "4.0 Ratti", carat: "3.64 Carat", mmSize: "7–8 mm" },
  { id: "5-ratti", name: "5 Ratti", ratti: "5.0 Ratti", carat: "4.55 Carat", mmSize: "8–9 mm" },
  { id: "6-ratti", name: "6 Ratti", ratti: "6.0 Ratti", carat: "5.46 Carat", mmSize: "9–10 mm" },
  { id: "7-plus-ratti", name: "7+ Ratti", ratti: "7.0+ Ratti", carat: "6.37+ Carat", mmSize: "10+ mm" },
  { id: "custom-weight", name: "Custom Weight", ratti: "Consult Astrologer", carat: "Custom Carat", mmSize: "Custom mm" },
];

export const redCoralWeightOptions: GemstoneWeightOption[] = [
  { id: "3-ratti", name: "3 Ratti", ratti: "3.0 Ratti", carat: "2.73 Carat", mmSize: "8×6 mm" },
  { id: "4-ratti", name: "4 Ratti", ratti: "4.0 Ratti", carat: "3.64 Carat", mmSize: "10×7 mm" },
  { id: "5-ratti", name: "5 Ratti", ratti: "5.0 Ratti", carat: "4.55 Carat", mmSize: "12×8 mm" },
  { id: "6-ratti", name: "6 Ratti", ratti: "6.0 Ratti", carat: "5.46 Carat", mmSize: "14×9 mm" },
  { id: "7-ratti", name: "7 Ratti", ratti: "7.0 Ratti", carat: "6.37 Carat", mmSize: "16×10 mm" },
  { id: "8-plus-ratti", name: "8+ Ratti", ratti: "8.0+ Ratti", carat: "7.28+ Carat", mmSize: "18+ mm" },
  { id: "custom-weight", name: "Custom Weight", ratti: "Consult Astrologer", carat: "Custom Carat", mmSize: "Custom Dimensions" },
];

export const diamondCaratOptions: GemstoneWeightOption[] = [
  { id: "0.25-ct", name: "0.25 Carat", ratti: "~0.27 Ratti", carat: "0.25 ct", mmSize: "~4.1 mm" },
  { id: "0.50-ct", name: "0.50 Carat", ratti: "~0.55 Ratti", carat: "0.50 ct", mmSize: "~5.2 mm" },
  { id: "0.75-ct", name: "0.75 Carat", ratti: "~0.82 Ratti", carat: "0.75 ct", mmSize: "~5.9 mm" },
  { id: "1.00-ct", name: "1.00 Carat", ratti: "~1.10 Ratti", carat: "1.00 ct", mmSize: "~6.5 mm" },
  { id: "1.50-ct", name: "1.50 Carat", ratti: "~1.65 Ratti", carat: "1.50 ct", mmSize: "~7.4 mm" },
  { id: "2.00-plus-ct", name: "2.00+ Carat", ratti: "~2.20+ Ratti", carat: "2.00+ ct", mmSize: "~8.2+ mm" },
  { id: "custom-weight", name: "Custom Carat", ratti: "Consult Astrologer", carat: "Custom Carat", mmSize: "Custom Dimensions" },
];

export function getGemstoneWeightOptions(slug?: string): GemstoneWeightOption[] {
  if (slug === "diamond-heera") {
    return diamondCaratOptions;
  }
  if (slug === "red-coral-moonga") {
    return redCoralWeightOptions;
  }
  return gemstoneWeightOptions;
}

export const gemstoneSettingOptions: GemstoneSettingOption[] = [
  { id: "gemstone-only", name: "Gemstone Only", priceAdd: 0 },
  { id: "silver-ring", name: "Silver Ring", priceAdd: 1500 },
  { id: "gold-ring", name: "Gold Ring", priceAdd: 0, isCustomPricing: true },
  { id: "pendant", name: "Pendant", priceAdd: 0, isCustomPricing: true },
  { id: "custom-setting", name: "Custom Setting", priceAdd: 0, isCustomPricing: true },
];

export const diamondSettingOptions: GemstoneSettingOption[] = [
  { id: "gemstone-only", name: "Gemstone Only", priceAdd: 0 },
  { id: "silver-setting", name: "Silver Setting", priceAdd: 0, isCustomPricing: true },
  { id: "gold-ring", name: "Gold Ring", priceAdd: 0, isCustomPricing: true },
  { id: "platinum-setting", name: "Platinum Setting", priceAdd: 0, isCustomPricing: true },
  { id: "pendant", name: "Pendant", priceAdd: 0, isCustomPricing: true },
  { id: "custom-setting", name: "Custom Setting", priceAdd: 0, isCustomPricing: true },
];

export function getGemstoneSettingOptions(slug?: string): GemstoneSettingOption[] {
  if (slug === "diamond-heera") {
    return diamondSettingOptions;
  }
  return gemstoneSettingOptions;
}

export const DIVINE_OFFERING_PRICE = 1100;

export const rubyProduct: Product = {
  id: "ratna-ruby-manikya",
  slug: "ruby-manikya",
  name: "Ruby (Manikya)",
  category: "Ratnas",
  subCategory: "Gemstones",
  image: "/assets/ratnas/manik-ruby.png",
  images: ["/assets/ratnas/manik-ruby.png"],
  badge: "Surya Gemstone",
  rating: 4.9,
  reviewCount: 186,
  price: 4999,
  mrp: 7999,
  featured: true,
  hasDivineOffering: true,
  divineOfferingPrice: 1100,
  tagline: "माणिक्य / माणिक — Surya (Sun) Astrological Gemstone",
  shortDescription: "A natural Ruby gemstone traditionally associated with Surya (the Sun) in Vedic astrology.",
  detailedOverview: [
    "Known as the King of Gemstones (Ratnaraj) and Manikya in Vedic scriptures, Ruby represents the royal, life-giving energies of Surya Dev (the Sun God). Sourced from authentic natural mines, each gemstone is evaluated for deep crimson pigeon-blood hue, natural crystalline clarity, and astrological potency.",
    "Wearing an authentic, consecrated Manikya is traditionally believed to bestow boundless vitality, leadership qualities, confidence, career advancement, and protection against malefic planetary influences. Every gem is sanctified with Vedic Surya Mantras and holy Ganga jal prior to dispatch.",
    "Bespoke customization options allow you to select your preferred quality tier, astrological Ratti weight, handcrafted silver/gold ring or pendant settings, and an optional sanctified Kashi Vishwanath Divine Offering blessing."
  ],
  variants: [
    {
      id: "ruby-essential",
      name: "Essential Ruby",
      price: 4999,
      mrp: 7499,
      badge: "Astrological Grade",
      description: "Natural earth-mined Ruby with rich crimson tones and solid planetary energy, ideal for foundational Vedic remedies.",
      suitableFor: "Daily Vedic Remedy & Vitality",
      keyHighlights: [
        "100% Natural Earth-Mined Ruby",
        "Varanasi Ganga Jal Consecrated",
        "Associated with Surya Dev (Sun)",
        "Lab Authenticity Certified"
      ]
    },
    {
      id: "ruby-premium",
      name: "Premium Ruby",
      price: 14999,
      mrp: 21999,
      badge: "Superior Lustre",
      description: "Fine gem-quality natural Ruby with vivid crimson-red saturation, superior optical clarity, and enhanced astrological radiance.",
      suitableFor: "Career Success & Leadership Growth",
      keyHighlights: [
        "Superior Colour Saturation & Cut",
        "High Light Transmission & Lustre",
        "Energized with Surya Gayatri Mantra",
        "Individual Gem Lab Certificate Included"
      ]
    },
    {
      id: "ruby-certified-premium",
      name: "Certified Premium Ruby",
      price: 29999,
      mrp: 44999,
      badge: "Master Collector",
      description: "Exceptional high-transparency pigeon-blood Ruby with supreme clarity, precision master faceting, and comprehensive laboratory certification.",
      suitableFor: "Royal Prosperity & Astrological Mastery",
      keyHighlights: [
        "Pigeon-Blood Vivid Red Transparency",
        "Top-Tier Natural Crystalline Quality",
        "Vedic Temple Priest Consecration",
        "Complete Authenticity & Origin Dossier"
      ]
    }
  ],
  specifications: [
    {
      groupName: "Astrological Attributes",
      specs: [
        { label: "Ruling Planet", value: "Surya (The Sun)" },
        { label: "Vedic Name", value: "Manikya / Manik (माणिक्य)" },
        { label: "Governing Chakra", value: "Manipura (Solar Plexus) & Anahata" },
        { label: "Recommended Metal", value: "Gold, Panchdhatu, or Silver" },
        { label: "Recommended Finger", value: "Ring Finger (Right Hand)" },
        { label: "Auspicious Day", value: "Sunday Morning at Sunrise" }
      ]
    },
    {
      groupName: "Gemological Details",
      specs: [
        { label: "Mineral Species", value: "Natural Corundum" },
        { label: "Variety", value: "Natural Ruby (Manikya)" },
        { label: "Hardness (Mohs)", value: "9.0" },
        { label: "Specific Gravity", value: "3.99 - 4.02" },
        { label: "Optical Character", value: "Uniaxial Negative" },
        { label: "Origin", value: "Ethically Earth-Mined (Vedic Quality)" }
      ]
    }
  ],
  faqs: [
    {
      q: "How do I choose the correct Ratti weight for Ruby (Manikya)?",
      a: "In Vedic astrology, the general guideline is approximately 1 Ratti for every 10-12 kg of body weight (typically 4 to 7 Ratti for adults), or as specifically advised by your astrologer."
    },
    {
      q: "How is the Ruby energized before delivery?",
      a: "Each Ruby is purified with sacred Ganga jal from Varanasi and energized with Aditya Hridaya Stotra and Surya Beej Mantras (Om Hram Hreem Hroum Sah Suryaya Namah) under priest guidance."
    },
    {
      q: "What is included in the Divine Offering option (+₹1,100)?",
      a: "When selected, a priest in Varanasi performs a personalized Sankalp and Archana in your name, offering sacred flowers, chandan, and prayers before the gemstone is packed with holy Prasad."
    }
  ],
  tags: ["Ratnas", "Gemstones", "Ruby", "Manikya", "Surya Gemstone", "Sun", "Manik", "Varanasi Sourced"]
};

export const pearlProduct: Product = {
  id: "ratna-pearl-moti",
  slug: "pearl-moti",
  name: "Pearl (Moti)",
  category: "Ratnas",
  subCategory: "Gemstones",
  image: "/assets/ratnas/pearl-moti.png",
  images: ["/assets/ratnas/pearl-moti.png"],
  badge: "Chandra Gemstone",
  rating: 4.9,
  reviewCount: 142,
  price: 2999,
  mrp: 4499,
  featured: false,
  hasDivineOffering: true,
  divineOfferingPrice: 1100,
  tagline: "मोती / मौक्तिक — Chandra (Moon) Astrological Gemstone",
  shortDescription: "A lustrous pearl traditionally associated with Chandra (the Moon) in Vedic astrology, valued for its natural beauty and timeless elegance.",
  detailedOverview: [
    "Pearl & Chandra: Pearl, traditionally known as Moti (मोती) and Mukta, is associated with Chandra (the Moon) in Vedic astrology. Traditional practitioners associate Pearl with qualities such as calmness, emotional balance, peace, and nurturing energy.",
    "Pearl Transparency & Quality: Pearls can naturally vary in luster, surface characteristics, shape, size, color, origin, cultivation status, and treatment. The exact appearance and price depend on the selected pearl. In accordance with honest disclosure standards, we do not use the term 'natural pearl' unless the actual inventory is verified as natural.",
    "Sanctification & Bespoke Customization: Sourced for optimal astrological harmony and purified with holy Varanasi Ganga jal and energized with Vedic Chandra Beej Mantras. Select your desired quality tier, weight (Ratti / Carat) or mm size, and setting (Silver Ring, Gold Ring, Pendant, or Gemstone Only) with the optional Varanasi Divine Offering."
  ],
  variants: [
    {
      id: "pearl-essential",
      name: "Essential Pearl",
      price: 2999,
      mrp: 4499,
      badge: "Astrological Grade",
      description: "An accessible pearl option selected for customers looking for a beautiful and traditional Pearl within a practical budget.",
      suitableFor: "Traditional Vedic Remedy & Calmness",
      keyHighlights: [
        "Selected for Traditional Vedic Remedy",
        "Varanasi Ganga Jal Consecrated",
        "Associated with Chandra (Moon)",
        "Authenticity Verified"
      ]
    },
    {
      id: "pearl-premium",
      name: "Premium Pearl",
      price: 7999,
      mrp: 11999,
      badge: "Superior Luster",
      description: "A higher-quality Pearl selected for better luster, surface quality, shape, and overall appearance.",
      suitableFor: "Emotional Balance & Mind Peace",
      keyHighlights: [
        "Superior Luster & Smooth Surface Quality",
        "Even Symmetrical Spherical Shape",
        "Energized with Chandra Beej Mantra",
        "Authenticity Certificate Included"
      ]
    },
    {
      id: "pearl-certified-premium",
      name: "Certified Premium Pearl",
      price: 14999,
      mrp: 21999,
      badge: "Master Certified",
      description: "A premium Pearl option accompanied by applicable gemstone certification.",
      suitableFor: "Higher Astrological Purity & Serenity",
      keyHighlights: [
        "Exceptional High Luster & Flawless Sheen",
        "Accompanied by Gemstone Certification",
        "Vedic Temple Priest Consecration",
        "Detailed Quality, Origin & Purity Dossier"
      ]
    }
  ],
  specifications: [
    {
      groupName: "Astrological Attributes",
      specs: [
        { label: "Gemstone", value: "Pearl" },
        { label: "Hindi Name", value: "मोती" },
        { label: "Sanskrit Name", value: "Mukta / मौक्तिक" },
        { label: "Traditional Association", value: "Moon / Chandra (Calmness & Emotional Balance)" },
        { label: "Category", value: "Precious Gemstone" },
        { label: "Recommended Metal", value: "Silver or White Gold" },
        { label: "Recommended Finger", value: "Little Finger (Kanishtha) / Ring Finger" },
        { label: "Auspicious Day", value: "Monday Evening (Chandra Hora)" }
      ]
    },
    {
      groupName: "Product Specifications & Transparency",
      specs: [
        { label: "Color", value: "White / Cream / Other natural shades depending on pearl" },
        { label: "Weight", value: "Customizable (2 to 7+ Ratti / Carat)" },
        { label: "Size", value: "Customizable (5mm to 10mm+)" },
        { label: "Setting", value: "Ring / Pendant / Gemstone Only" },
        { label: "Certification", value: "Available on selected stones" },
        { label: "Divine Offering", value: "Optional (+₹1,100)" },
        { label: "Customization", value: "Available" },
        { label: "Transparency Policy", value: "Accurate disclosure of cultivation status, origin, luster & treatment" }
      ]
    }
  ],
  faqs: [
    {
      q: "What are the traditional qualities associated with Pearl and Chandra?",
      a: "Pearl, traditionally known as Moti (मोती) and Mukta, is associated with Chandra (the Moon) in Vedic astrology. Traditional practitioners associate Pearl with qualities such as calmness, emotional balance, peace, and nurturing energy."
    },
    {
      q: "What is your Pearl Transparency policy?",
      a: "Pearls can naturally vary in luster, surface characteristics, shape, size, color, origin, cultivation status, and treatment. The exact appearance and price depend on the selected pearl. We do not use the term 'natural pearl' unless the actual inventory is verified as natural."
    },
    {
      q: "How do I choose the right Ratti weight, Carat, or mm size?",
      a: "Vedic astrologers typically recommend 3 to 7 Ratti (approx. 2.7 to 6.4 Carats, or 6mm to 10mm diameter), or as per personal astrological consultation."
    },
    {
      q: "Is the Divine Offering mandatory for Pearl?",
      a: "No. The Divine Offering is completely optional (+₹1,100) and is not required to purchase the Pearl."
    }
  ],
  tags: ["Ratnas", "Gemstones", "Pearl", "Moti", "Mukta", "Chandra Gemstone", "Moon", "Varanasi Sourced"]
};

export const redCoralProduct: Product = {
  id: "ratna-red-coral-moonga",
  slug: "red-coral-moonga",
  name: "Red Coral (Moonga)",
  category: "Ratnas",
  subCategory: "Gemstones",
  image: "/assets/ratnas/red-coral-moonga.png",
  images: ["/assets/ratnas/red-coral-moonga.png"],
  badge: "Mangal Gemstone",
  rating: 4.9,
  reviewCount: 164,
  price: 3499,
  mrp: 4999,
  featured: false,
  hasDivineOffering: true,
  divineOfferingPrice: 1100,
  tagline: "मूंगा / प्रवाल — Mangal (Mars) Astrological Gemstone",
  shortDescription: "A natural red coral traditionally associated with Mangal (Mars) in Vedic astrology, valued for its distinctive red color and organic beauty.",
  detailedOverview: [
    "Red Coral & Mangal: Red Coral, traditionally known as Moonga (मूंगा) and Pravala, is associated with Mangal (Mars) in Vedic astrology. Traditional practitioners associate Red Coral with qualities such as courage, confidence, initiative, determination, and vitality.",
    "Red Coral Transparency & Material: Red Coral is an organic gemstone material that naturally varies in color, surface characteristics, shape, size, texture, origin, and treatment. The exact appearance and valuation depend on the selected specimen. We only describe coral as natural or untreated when verified for that specific inventory.",
    "Sanctification & Bespoke Customization: Sourced for vibrant vitality and consecrated with sacred Varanasi Ganga jal and energized with Vedic Mangal Beej Mantras. Select your desired quality tier, weight (Ratti / Carat) or physical dimensions, and handcrafted silver/gold ring or pendant settings with the optional Varanasi Divine Offering."
  ],
  variants: [
    {
      id: "red-coral-essential",
      name: "Essential Red Coral",
      price: 3499,
      mrp: 4999,
      badge: "Astrological Grade",
      description: "An accessible Red Coral option selected for customers looking for a traditional and naturally distinctive gemstone.",
      suitableFor: "Traditional Vedic Remedy & Courage",
      keyHighlights: [
        "Selected for Traditional Vedic Remedy",
        "Varanasi Ganga Jal Consecrated",
        "Associated with Mangal (Mars)",
        "Authenticity Verified"
      ]
    },
    {
      id: "red-coral-premium",
      name: "Premium Red Coral",
      price: 8999,
      mrp: 12999,
      badge: "Superior Color",
      description: "A higher-quality Red Coral selected for better color, surface appearance, shape, and overall quality.",
      suitableFor: "Confidence, Determination & Energy",
      keyHighlights: [
        "Deep Carnation Red Hue & Smooth Polish",
        "Refined Symmetrical Capsule / Oval Cut",
        "Energized with Mangal Gayatri Mantras",
        "Authenticity Certificate Included"
      ]
    },
    {
      id: "red-coral-certified-premium",
      name: "Certified Premium Red Coral",
      price: 16999,
      mrp: 24999,
      badge: "Master Certified",
      description: "A premium Red Coral option with applicable gemstone certification.",
      suitableFor: "High Astrological Potency & Leadership",
      keyHighlights: [
        "Pristine Mediterranean Saturated Red Tone",
        "Accompanied by Gemstone Certification",
        "Vedic Temple Priest Consecration",
        "Complete Origin & Quality Dossier"
      ]
    }
  ],
  specifications: [
    {
      groupName: "Astrological Attributes",
      specs: [
        { label: "Gemstone", value: "Red Coral" },
        { label: "Hindi Name", value: "मूंगा" },
        { label: "Sanskrit Name", value: "Pravala / प्रवाल" },
        { label: "Traditional Association", value: "Mars / Mangal (Courage, Confidence & Vitality)" },
        { label: "Category", value: "Organic Gemstone" },
        { label: "Recommended Metal", value: "Copper, Gold, Panchdhatu, or Silver" },
        { label: "Recommended Finger", value: "Ring Finger (Anamika) of Right Hand" },
        { label: "Auspicious Day", value: "Tuesday Morning (Mars Hora)" }
      ]
    },
    {
      groupName: "Product Specifications & Transparency",
      specs: [
        { label: "Color", value: "Red / Orange-Red" },
        { label: "Weight", value: "Customizable (3 to 8+ Ratti / Carat equivalent)" },
        { label: "Size", value: "Customizable (Physical dimensions & mm)" },
        { label: "Setting", value: "Ring / Pendant / Gemstone Only" },
        { label: "Certification", value: "Available on selected stones" },
        { label: "Divine Offering", value: "Optional (+₹1,100)" },
        { label: "Customization", value: "Available" },
        { label: "Transparency Policy", value: "Accurate disclosure of organic material, origin & treatment status" }
      ]
    }
  ],
  faqs: [
    {
      q: "What are the traditional qualities associated with Red Coral and Mangal?",
      a: "Red Coral, traditionally known as Moonga (मूंगा) and Pravala, is associated with Mangal (Mars) in Vedic astrology. Traditional practitioners associate Red Coral with qualities such as courage, confidence, initiative, determination, and vitality."
    },
    {
      q: "What is your Red Coral Transparency policy?",
      a: "Red Coral can naturally vary in color, surface characteristics, shape, size, texture, origin, and treatment. The exact appearance and price depend on the selected specimen. We only describe the coral as natural/untreated when that status has been verified."
    },
    {
      q: "How do I choose the correct Ratti weight or size for Red Coral?",
      a: "In Vedic astrology, Red Coral is traditionally chosen between 4 to 8 Ratti (approx. 3.6 to 7.3 Carats), or as specifically advised by your Vedic astrologer."
    },
    {
      q: "Is the Divine Offering required to purchase Red Coral?",
      a: "No, the Divine Offering (+₹1,100) is completely optional and is not required to purchase Red Coral."
    }
  ],
  tags: ["Ratnas", "Gemstones", "Red Coral", "Moonga", "Pravala", "Mangal Gemstone", "Mars", "Varanasi Sourced"]
};

export const emeraldProduct: Product = {
  id: "ratna-emerald-panna",
  slug: "emerald-panna",
  name: "Emerald (Panna)",
  category: "Ratnas",
  subCategory: "Gemstones",
  image: "/assets/ratnas/emerald-panna.png",
  images: ["/assets/ratnas/emerald-panna.png"],
  badge: "Budha Gemstone",
  rating: 4.9,
  reviewCount: 198,
  price: 5999,
  mrp: 8999,
  featured: false,
  hasDivineOffering: true,
  divineOfferingPrice: 1100,
  tagline: "पन्ना / मरकत — Budha (Mercury) Astrological Gemstone",
  shortDescription: "A natural green gemstone traditionally associated with Budha (Mercury) in Vedic astrology, admired for its rich green color and distinctive character.",
  detailedOverview: [
    "Emerald & Budha: Emerald, traditionally known as Panna (पन्ना) and Marakata, is associated with Budha (Mercury) in Vedic astrology. Traditional practitioners associate Emerald with qualities such as communication, intellect, learning, reasoning, and clarity.",
    "Emerald Transparency & Quality Disclosure: Emeralds can naturally vary in color, clarity, inclusions (jardin), transparency, cut, origin, treatment, size, and overall appearance. The exact price depends on the selected gemstone. We only display verified origin, treatment, and certification information for the actual inventory item.",
    "Sanctification & Bespoke Customization: Sourced for superior optical radiance and consecrated with sacred Ganga jal from Varanasi and energized with Vedic Budha Beej Mantras. Select your desired quality tier, astrological Ratti/Carat weight, handcrafted silver or custom gold ring/pendant settings, and an optional sanctified Kashi Vishwanath Divine Offering blessing."
  ],
  variants: [
    {
      id: "emerald-essential",
      name: "Essential Emerald",
      price: 5999,
      mrp: 8999,
      badge: "Astrological Grade",
      description: "An accessible emerald option selected for customers seeking a traditional and genuine Vedic remedy within a practical budget.",
      suitableFor: "Traditional Vedic Remedy & Clarity",
      keyHighlights: [
        "Authentic Natural Green Emerald",
        "Varanasi Ganga Jal Consecrated",
        "Associated with Budha (Mercury)",
        "Lab Authenticity Certified"
      ]
    },
    {
      id: "emerald-premium",
      name: "Premium Emerald",
      price: 16999,
      mrp: 24999,
      badge: "Superior Color",
      description: "A higher-quality Emerald selected for rich emerald-green saturation, superior crystalline transparency, and enhanced luster.",
      suitableFor: "Intellect, Learning & Communication",
      keyHighlights: [
        "Vibrant Emerald Green Hue & Clarity",
        "Fine Symmetrical Step/Emerald Cut",
        "Energized with Budha Gayatri Mantras",
        "Authenticity Certificate Included"
      ]
    },
    {
      id: "emerald-certified-premium",
      name: "Certified Premium Emerald",
      price: 34999,
      mrp: 49999,
      badge: "Master Certified",
      description: "A top-tier collector-grade Emerald with exceptional transparency, vivid royal green hue, minimal inclusions, and comprehensive laboratory certification.",
      suitableFor: "Master Intellect & Astrological Power",
      keyHighlights: [
        "Pristine Vivid Royal Green Transparency",
        "Accompanied by Gemstone Certification",
        "Vedic Temple Priest Consecration",
        "Complete Origin & Quality Dossier"
      ]
    }
  ],
  specifications: [
    {
      groupName: "Astrological Attributes",
      specs: [
        { label: "Gemstone", value: "Emerald" },
        { label: "Hindi Name", value: "पन्ना" },
        { label: "Sanskrit Name", value: "Marakata / मरकत" },
        { label: "Traditional Association", value: "Mercury / Budha (Communication, Intellect & Reasoning)" },
        { label: "Category", value: "Precious Gemstone" },
        { label: "Governing Chakra", value: "Anahata (Heart Chakra)" },
        { label: "Recommended Metal", value: "Gold, Panchdhatu, or Silver" },
        { label: "Recommended Finger", value: "Little Finger (Kanishtha) of Right Hand" },
        { label: "Auspicious Day", value: "Wednesday Morning (Budha Hora)" }
      ]
    },
    {
      groupName: "Product Specifications & Transparency",
      specs: [
        { label: "Color", value: "Green" },
        { label: "Weight", value: "Customizable (2 to 7+ Ratti / Carat equivalent)" },
        { label: "Size", value: "Customizable (Dimensions & mm sizing)" },
        { label: "Setting", value: "Ring / Pendant / Gemstone Only" },
        { label: "Certification", value: "Available on selected stones" },
        { label: "Divine Offering", value: "Optional (+₹1,100)" },
        { label: "Customization", value: "Available" },
        { label: "Transparency Policy", value: "Accurate disclosure of natural inclusions (jardin), clarity, origin & treatment status" }
      ]
    }
  ],
  faqs: [
    {
      q: "What are the traditional qualities associated with Emerald and Budha?",
      a: "Emerald, traditionally known as Panna (पन्ना) and Marakata, is associated with Budha (Mercury) in Vedic astrology. Traditional practitioners associate Emerald with qualities such as communication, intellect, learning, reasoning, and clarity."
    },
    {
      q: "What is your Emerald Transparency policy regarding inclusions and origin?",
      a: "Emeralds naturally vary in color, clarity, inclusions (known as jardin), transparency, cut, origin, treatment, and size. The exact price depends on the selected gemstone. We only display verified origin, treatment, and certification information for the actual inventory item."
    },
    {
      q: "How do I choose the correct Ratti weight for Emerald (Panna)?",
      a: "In Vedic astrology, Emerald is traditionally chosen between 3 to 7 Ratti (approx. 2.7 to 6.4 Carats), or as specifically recommended by your Vedic astrologer."
    },
    {
      q: "Is the Divine Offering required to purchase Emerald?",
      a: "No, the Divine Offering (+₹1,100) is completely optional and is not required to purchase the Emerald."
    }
  ],
  tags: ["Ratnas", "Gemstones", "Emerald", "Panna", "Marakata", "Budha Gemstone", "Mercury", "Varanasi Sourced"]
};

export const yellowSapphireProduct: Product = {
  id: "ratna-yellow-sapphire-pukhraj",
  slug: "yellow-sapphire-pukhraj",
  name: "Yellow Sapphire (Pukhraj)",
  category: "Ratnas",
  subCategory: "Gemstones",
  image: "/assets/ratnas/yellow-sapphire-pukhraj.png",
  images: ["/assets/ratnas/yellow-sapphire-pukhraj.png"],
  badge: "Guru Gemstone",
  rating: 4.9,
  reviewCount: 214,
  price: 7999,
  mrp: 11999,
  featured: false,
  hasDivineOffering: true,
  divineOfferingPrice: 1100,
  tagline: "पुखराज / पुष्पराग — Guru (Jupiter) Astrological Gemstone",
  shortDescription: "A luminous yellow gemstone traditionally associated with Guru (Jupiter) in Vedic astrology, admired for its warm golden color and brilliance.",
  detailedOverview: [
    "Yellow Sapphire & Guru: Yellow Sapphire, traditionally known as Pukhraj (पुखराज) and Pushparaga, is associated with Guru (Jupiter / Brihaspati) in Vedic astrology. Traditional practitioners associate Yellow Sapphire with qualities such as wisdom, learning, optimism, prosperity, and spiritual growth.",
    "Yellow Sapphire Transparency & Quality Disclosure: Yellow Sapphires can naturally vary in color, clarity, transparency, inclusions, cut, origin, treatment, size, and overall appearance. The exact price depends on the selected gemstone. We only show verified origin, treatment, certification, and quality information for the actual inventory item.",
    "Sanctification & Bespoke Customization: Sourced for radiant clarity and consecrated with sacred Ganga jal from Varanasi and energized with Vedic Brihaspati Beej Mantras. Select your desired quality tier, astrological Ratti/Carat weight, handcrafted silver or custom gold ring/pendant settings, and an optional sanctified Kashi Vishwanath Divine Offering blessing."
  ],
  variants: [
    {
      id: "yellow-sapphire-essential",
      name: "Essential Yellow Sapphire",
      price: 7999,
      mrp: 11999,
      badge: "Astrological Grade",
      description: "An accessible Yellow Sapphire option selected for customers looking for a traditional gemstone at an approachable price.",
      suitableFor: "Traditional Vedic Remedy & Wisdom",
      keyHighlights: [
        "Authentic Natural Yellow Corundum",
        "Varanasi Ganga Jal Consecrated",
        "Associated with Guru / Jupiter",
        "Lab Authenticity Certified"
      ]
    },
    {
      id: "yellow-sapphire-premium",
      name: "Premium Yellow Sapphire",
      price: 19999,
      mrp: 29999,
      badge: "Superior Brilliance",
      description: "A higher-quality option selected for improved color, clarity, brilliance, and overall gemstone quality.",
      suitableFor: "Wisdom, Optimism & Spiritual Growth",
      keyHighlights: [
        "Vivid Golden Lemon Hue & High Lustre",
        "Master Oval / Cushion Faceted Cut",
        "Energized with Brihaspati Gayatri Mantras",
        "Authenticity Certificate Included"
      ]
    },
    {
      id: "yellow-sapphire-certified-premium",
      name: "Certified Premium Yellow Sapphire",
      price: 39999,
      mrp: 59999,
      badge: "Master Certified",
      description: "A premium Yellow Sapphire option accompanied by applicable gemstone certification, supreme clarity, and royal golden saturation.",
      suitableFor: "Master Prosperity & Divine Guidance",
      keyHighlights: [
        "Pristine Royal Golden-Yellow Transparency",
        "Accompanied by Gemstone Certification",
        "Vedic Temple Priest Consecration",
        "Complete Origin & Quality Dossier"
      ]
    }
  ],
  specifications: [
    {
      groupName: "Astrological Attributes",
      specs: [
        { label: "Gemstone", value: "Yellow Sapphire" },
        { label: "Hindi Name", value: "पुखराज" },
        { label: "Sanskrit Name", value: "Pushparaga / पुष्पराग" },
        { label: "Traditional Association", value: "Jupiter / Guru (Wisdom, Learning, Optimism & Spiritual Growth)" },
        { label: "Category", value: "Precious Gemstone" },
        { label: "Governing Chakra", value: "Ajna (Third Eye) & Manipura (Solar Plexus)" },
        { label: "Recommended Metal", value: "Gold, Panchdhatu, or Silver" },
        { label: "Recommended Finger", value: "Index Finger (Tarjani) of Right Hand" },
        { label: "Auspicious Day", value: "Thursday Morning (Guru Hora)" }
      ]
    },
    {
      groupName: "Product Specifications & Transparency",
      specs: [
        { label: "Color", value: "Yellow / Golden Yellow" },
        { label: "Weight", value: "Customizable (2 to 7+ Ratti / Carat equivalent)" },
        { label: "Size", value: "Customizable (Dimensions & mm sizing)" },
        { label: "Setting", value: "Ring / Pendant / Gemstone Only" },
        { label: "Certification", value: "Available on selected stones" },
        { label: "Divine Offering", value: "Optional (+₹1,100)" },
        { label: "Customization", value: "Available" },
        { label: "Transparency Policy", value: "Accurate disclosure of natural inclusions, clarity, origin & treatment status" }
      ]
    }
  ],
  faqs: [
    {
      q: "What are the traditional qualities associated with Yellow Sapphire and Guru?",
      a: "Yellow Sapphire, traditionally known as Pukhraj (पुखराज) and Pushparaga, is associated with Guru (Jupiter / Brihaspati) in Vedic astrology. Traditional practitioners associate Yellow Sapphire with qualities such as wisdom, learning, optimism, prosperity, and spiritual growth."
    },
    {
      q: "What is your Yellow Sapphire Transparency policy?",
      a: "Yellow Sapphires can naturally vary in color, clarity, transparency, inclusions, cut, origin, treatment, size, and overall appearance. The exact price depends on the selected gemstone. We only show verified origin, treatment, certification, and quality information for the actual inventory item."
    },
    {
      q: "How do I choose the correct Ratti weight for Yellow Sapphire (Pukhraj)?",
      a: "In Vedic astrology, Yellow Sapphire is traditionally recommended between 3 to 7 Ratti (approx. 2.7 to 6.4 Carats), or as specifically recommended by your Vedic astrologer."
    },
    {
      q: "Is the Divine Offering required to purchase Yellow Sapphire?",
      a: "No, the Divine Offering (+₹1,100) is completely optional and is not required to purchase the Yellow Sapphire."
    }
  ],
  tags: ["Ratnas", "Gemstones", "Yellow Sapphire", "Pukhraj", "Pushparaga", "Guru Gemstone", "Jupiter", "Brihaspati", "Varanasi Sourced"]
};

export const diamondProduct: Product = {
  id: "ratna-diamond-heera",
  slug: "diamond-heera",
  name: "Diamond (Heera)",
  category: "Ratnas",
  subCategory: "Gemstones",
  image: "/assets/ratnas/diamond-heera.png",
  images: ["/assets/ratnas/diamond-heera.png"],
  badge: "Shukra Gemstone",
  rating: 5.0,
  reviewCount: 178,
  price: 19999,
  mrp: 29999,
  featured: false,
  hasDivineOffering: true,
  divineOfferingPrice: 1100,
  tagline: "हीरा / वज्र — Shukra (Venus) Astrological Gemstone",
  shortDescription: "A timeless precious gemstone traditionally associated with Shukra (Venus) in Vedic astrology, admired for its brilliance, durability, and exceptional sparkle.",
  detailedOverview: [
    "Diamond & Shukra: Diamond, traditionally known as Heera (हीरा) and Vajra, is associated with Shukra (Venus) in Vedic astrology. Traditional practitioners associate Diamond with qualities such as beauty, refinement, creativity, luxury, harmony, and artistic expression.",
    "Diamond Transparency & 4Cs Disclosure: Diamond prices vary significantly based on carat weight, cut, color, clarity (4Cs), certification, natural vs lab-grown status, shape, fluorescence, setting, and overall quality. In accordance with ethical disclosure standards, we clearly distinguish natural diamonds and lab-grown diamonds, providing verified grading certificates for applicable stones.",
    "Sanctification & Bespoke Customization: Sourced for supreme optical fire and brilliance, purified with holy Ganga jal from Varanasi and energized with Vedic Shukra Beej Mantras. Select your desired quality tier, certified carat weight, handcrafted gold/platinum/silver ring or pendant settings, and an optional sanctified Kashi Vishwanath Divine Offering blessing."
  ],
  variants: [
    {
      id: "diamond-essential",
      name: "Essential Diamond",
      price: 19999,
      mrp: 29999,
      badge: "Astrological Grade",
      description: "An entry-level Diamond option selected for traditional Vedic remedies based on available verified specifications.",
      suitableFor: "Traditional Vedic Remedy & Harmony",
      keyHighlights: [
        "Verified Diamond Authenticity",
        "Varanasi Ganga Jal Consecrated",
        "Associated with Shukra (Venus)",
        "Clear Natural/Lab-Grown Disclosure"
      ]
    },
    {
      id: "diamond-premium",
      name: "Premium Diamond",
      price: 49999,
      mrp: 69999,
      badge: "Superior Sparkle",
      description: "A higher-quality Diamond selected according to improved cut, clarity, color, brilliance, and overall quality.",
      suitableFor: "Refinement, Luxury & Creative Expression",
      keyHighlights: [
        "Exceptional Fire, Luster & Scintillation",
        "Eye-Clean Clarity & Near-Colorless Grade",
        "Energized with Shukra Gayatri Mantras",
        "Authenticity Certificate Included"
      ]
    },
    {
      id: "diamond-certified-premium",
      name: "Certified Premium Diamond",
      price: 99999,
      mrp: 149999,
      badge: "Master Certified",
      description: "A premium Diamond accompanied by applicable gemstone certification, supreme brilliance, and master faceting.",
      suitableFor: "Master Prosperity, Royalty & Grace",
      keyHighlights: [
        "Top-Tier Optical Clarity & Master Faceting",
        "Accompanied by Gemstone Certification",
        "Vedic Temple Priest Consecration",
        "Complete 4Cs Quality & Origin Dossier"
      ]
    }
  ],
  specifications: [
    {
      groupName: "Astrological Attributes",
      specs: [
        { label: "Gemstone", value: "Diamond" },
        { label: "Hindi Name", value: "हीरा" },
        { label: "Sanskrit Name", value: "Vajra / वज्र" },
        { label: "Traditional Association", value: "Venus / Shukra (Beauty, Refinement, Harmony & Luxury)" },
        { label: "Category", value: "Precious Gemstone" },
        { label: "Type", value: "Natural / Lab-Grown (Accurately identified per inventory)" },
        { label: "Governing Chakra", value: "Anahata (Heart) & Sahasrara (Crown Chakra)" },
        { label: "Recommended Metal", value: "Platinum, White Gold, Yellow Gold, or Silver" },
        { label: "Recommended Finger", value: "Middle Finger (Madhyama) / Little Finger (Kanishtha)" },
        { label: "Auspicious Day", value: "Friday Morning (Shukra Hora)" }
      ]
    },
    {
      groupName: "Diamond Specifications & Transparency",
      specs: [
        { label: "Carat Weight", value: "Customizable (0.25 ct to 2.00+ ct)" },
        { label: "Color", value: "Verified grade (D–H Colorless / Near Colorless)" },
        { label: "Clarity", value: "Verified grade (Eye-Clean VVS–VS / SI)" },
        { label: "Cut", value: "Verified grade (Round Brilliant / Princess / Cushion)" },
        { label: "Certification", value: "Available on selected stones (IGI / GIA / Certified Lab)" },
        { label: "Setting", value: "Customizable (Gold / Platinum / Silver / Gemstone Only)" },
        { label: "Divine Offering", value: "Optional (+₹1,100)" },
        { label: "Customization", value: "Available" },
        { label: "Transparency Policy", value: "Full disclosure of 4Cs, natural vs lab-grown status, origin & treatments" }
      ]
    }
  ],
  faqs: [
    {
      q: "What are the traditional qualities associated with Diamond and Shukra?",
      a: "Diamond, traditionally known as Heera (हीरा) and Vajra, is associated with Shukra (Venus) in Vedic astrology. Traditional practitioners associate Diamond with qualities such as beauty, refinement, creativity, luxury, harmony, and artistic expression."
    },
    {
      q: "How are Natural Diamonds and Lab-Grown Diamonds disclosed?",
      a: "We strictly and transparently identify the exact origin and type of every Diamond. Natural Diamonds and Lab-Grown Diamonds are clearly distinguished, with verified lab certificates provided for applicable stones."
    },
    {
      q: "How are Diamond prices calculated?",
      a: "Diamond pricing is determined by carat weight, cut, color, clarity, certification, and setting metal. For custom gold, platinum, or silver mountings, settings are priced based on metal weight and design."
    },
    {
      q: "Is the Divine Offering mandatory for Diamond?",
      a: "No. The Divine Offering is completely optional (+₹1,100) and is not required to purchase the Diamond."
    }
  ],
  tags: ["Ratnas", "Gemstones", "Diamond", "Heera", "Vajra", "Shukra Gemstone", "Venus", "Varanasi Sourced"]
};

export const blueSapphireProduct: Product = {
  id: "ratna-blue-sapphire-neelam",
  slug: "blue-sapphire-neelam",
  name: "Blue Sapphire (Neelam)",
  category: "Ratnas",
  subCategory: "Gemstones",
  image: "/assets/ratnas/blue-sapphire-neelam.png",
  images: ["/assets/ratnas/blue-sapphire-neelam.png"],
  badge: "Shani Gemstone",
  rating: 4.9,
  reviewCount: 192,
  price: 9999,
  mrp: 14999,
  featured: false,
  hasDivineOffering: true,
  divineOfferingPrice: 1100,
  tagline: "नीलम / इन्द्रनील — Shani (Saturn) Astrological Gemstone",
  shortDescription: "A natural blue sapphire traditionally associated with Shani (Saturn) in Vedic astrology, valued for its deep royal blue color and enduring strength.",
  detailedOverview: [
    "Blue Sapphire & Shani: Blue Sapphire, traditionally known as Neelam (नीलम) and Indraneela (इन्द्रनील), is associated with Shani (Saturn) in Vedic astrology. Traditional practitioners associate Blue Sapphire with qualities such as discipline, responsibility, focus, resilience, patience, and determination.",
    "Blue Sapphire Transparency & Quality Disclosure: Blue Sapphire prices and characteristics naturally vary based on color saturation (cornflower to deep royal blue), clarity, transparency, inclusions, cut, origin, treatment status, weight, and certification. In accordance with honest Vedic gemological standards, we only display verified origin, treatment, certification, and natural status for the actual inventory item.",
    "Sanctification & Bespoke Customization: Sourced for deep optical resonance and purified with holy Varanasi Ganga jal and energized with Vedic Shani Beej Mantras prior to dispatch. Select your desired quality tier, astrological Ratti weight (2 to 7+ Ratti), handcrafted silver or custom gold/pendant settings, and an optional sanctified Kashi Vishwanath Divine Offering blessing."
  ],
  variants: [
    {
      id: "blue-sapphire-essential",
      name: "Essential Blue Sapphire",
      price: 9999,
      mrp: 14999,
      badge: "Astrological Grade",
      description: "An accessible Blue Sapphire option selected for customers seeking a traditional gemstone for Vedic remedies within a practical budget.",
      suitableFor: "Traditional Vedic Remedy & Focus",
      keyHighlights: [
        "Authentic Natural Blue Corundum",
        "Varanasi Ganga Jal Consecrated",
        "Associated with Shani Dev (Saturn)",
        "Lab Authenticity Verified"
      ]
    },
    {
      id: "blue-sapphire-premium",
      name: "Premium Blue Sapphire",
      price: 24999,
      mrp: 34999,
      badge: "Superior Saturation",
      description: "A higher-quality Blue Sapphire selected for rich royal blue saturation, superior optical clarity, and enhanced astrological luster.",
      suitableFor: "Discipline, Resilience & Determination",
      keyHighlights: [
        "Rich Royal Blue Saturation & Cut",
        "High Optical Transparency & Luster",
        "Energized with Shani Beej Mantras",
        "Authenticity Certificate Included"
      ]
    },
    {
      id: "blue-sapphire-certified-premium",
      name: "Certified Premium Blue Sapphire",
      price: 49999,
      mrp: 74999,
      badge: "Master Certified",
      description: "A top-tier collector-grade Blue Sapphire with supreme crystalline transparency, intense royal blue color, master faceting, and comprehensive laboratory certification.",
      suitableFor: "Master Astrological Potency & Focus",
      keyHighlights: [
        "Pristine Intense Royal Blue Transparency",
        "Accompanied by Gemstone Certification",
        "Vedic Temple Priest Consecration",
        "Complete Origin & Quality Dossier"
      ]
    }
  ],
  specifications: [
    {
      groupName: "Astrological Attributes",
      specs: [
        { label: "Gemstone", value: "Blue Sapphire" },
        { label: "Hindi Name", value: "नीलम (Neelam)" },
        { label: "Sanskrit Name", value: "Indraneela / इन्द्रनील" },
        { label: "Traditional Association", value: "Saturn / Shani (Discipline, Focus, Resilience & Patience)" },
        { label: "Category", value: "Precious Gemstone" },
        { label: "Governing Chakra", value: "Ajna (Third Eye Chakra)" },
        { label: "Recommended Metal", value: "Silver, Panchdhatu, White Gold, or Platinum" },
        { label: "Recommended Finger", value: "Middle Finger (Madhyama) of Right Hand" },
        { label: "Auspicious Day", value: "Saturday Evening (Shani Hora)" }
      ]
    },
    {
      groupName: "Product Specifications & Transparency",
      specs: [
        { label: "Color", value: "Deep Royal Blue / Cornflower Blue" },
        { label: "Weight", value: "Customizable (2 to 7+ Ratti / Carat equivalent)" },
        { label: "Size", value: "Customizable (Dimensions & mm sizing)" },
        { label: "Setting", value: "Ring / Pendant / Gemstone Only" },
        { label: "Certification", value: "Available on selected stones" },
        { label: "Divine Offering", value: "Optional (+₹1,100)" },
        { label: "Customization", value: "Available" },
        { label: "Transparency Policy", value: "Full disclosure of natural status, clarity, origin & treatments" }
      ]
    }
  ],
  faqs: [
    {
      q: "What are the traditional qualities associated with Blue Sapphire and Shani?",
      a: "Blue Sapphire, traditionally known as Neelam (नीलम) and Indraneela, is associated with Shani (Saturn) in Vedic astrology. Traditional practitioners associate Blue Sapphire with qualities such as discipline, responsibility, focus, resilience, patience, and determination."
    },
    {
      q: "What is your Blue Sapphire Transparency policy?",
      a: "Blue Sapphires naturally vary in color, clarity, transparency, inclusions, cut, origin, treatment status, and size. We strictly disclose verified information regarding natural status, treatments, and laboratory certification for the actual inventory item."
    },
    {
      q: "How do I choose the correct Ratti weight for Blue Sapphire (Neelam)?",
      a: "In Vedic astrology, Blue Sapphire is traditionally chosen between 3 to 7 Ratti (approx. 2.7 to 6.4 Carats), or as specifically recommended by your Vedic astrologer based on your horoscope."
    },
    {
      q: "Is the Divine Offering mandatory for Blue Sapphire?",
      a: "No. The Divine Offering is completely optional (+₹1,100) and is not required to purchase the Blue Sapphire."
    }
  ],
  tags: ["Ratnas", "Gemstones", "Blue Sapphire", "Neelam", "Indraneela", "Shani Gemstone", "Saturn", "Varanasi Sourced"]
};

export const hessoniteProduct: Product = {
  id: "ratna-hessonite-gomed",
  slug: "hessonite-gomed",
  name: "Hessonite (Gomed)",
  category: "Ratnas",
  subCategory: "Gemstones",
  image: "/assets/ratnas/hessonite-gomed.png",
  images: ["/assets/ratnas/hessonite-gomed.png"],
  badge: "Rahu Gemstone",
  rating: 4.9,
  reviewCount: 168,
  price: 6999,
  mrp: 9999,
  featured: false,
  hasDivineOffering: true,
  divineOfferingPrice: 1100,
  tagline: "गोमेद / गोमेदक — Rahu Astrological Gemstone",
  shortDescription: "A natural hessonite garnet traditionally associated with Rahu in Vedic astrology, valued for its distinctive honey-amber color and fiery depth.",
  detailedOverview: [
    "Hessonite & Rahu: Hessonite (Gomed), traditionally known as Gomed (गोमेद) and Gomedaka (गोमेदक), is associated with Rahu in Vedic astrology. Traditional practitioners associate Hessonite with qualities such as focus, confidence, clarity, resilience, and the ability to navigate uncertainty with mental composure.",
    "Hessonite Transparency & Quality Disclosure: Hessonite Garnets naturally vary in color (cinnamon orange to deep honey amber), clarity, transparency, natural internal swirls (the characteristic treacle effect), cut, origin, treatment status, weight, and certification. In accordance with honest Vedic gemological standards, we only display verified origin, treatment, certification, and natural status for the actual inventory item.",
    "Sanctification & Bespoke Customization: Sourced for warm optical radiance and purified with holy Varanasi Ganga jal and energized with Vedic Rahu Beej Mantras prior to dispatch. Select your desired quality tier, astrological Ratti weight (2 to 7+ Ratti), handcrafted silver or custom gold/pendant settings, and an optional sanctified Kashi Vishwanath Divine Offering blessing."
  ],
  variants: [
    {
      id: "hessonite-essential",
      name: "Essential Hessonite",
      price: 6999,
      mrp: 9999,
      badge: "Astrological Grade",
      description: "An accessible Hessonite option selected for customers seeking a traditional gemstone for Vedic remedies within a practical budget.",
      suitableFor: "Traditional Vedic Remedy & Mental Clarity",
      keyHighlights: [
        "Authentic Natural Grossular Garnet",
        "Varanasi Ganga Jal Consecrated",
        "Associated with Rahu",
        "Lab Authenticity Verified"
      ]
    },
    {
      id: "hessonite-premium",
      name: "Premium Hessonite",
      price: 17999,
      mrp: 25999,
      badge: "Superior Honey Lustre",
      description: "A higher-quality Hessonite selected for rich cinnamon honey-amber color, superior crystalline transparency, and enhanced astrological luster.",
      suitableFor: "Confidence, Focus & Resilience",
      keyHighlights: [
        "Rich Honey-Amber Saturation & Cut",
        "High Optical Transparency & Fire",
        "Energized with Rahu Beej Mantras",
        "Authenticity Certificate Included"
      ]
    },
    {
      id: "hessonite-certified-premium",
      name: "Certified Premium Hessonite",
      price: 34999,
      mrp: 49999,
      badge: "Master Certified",
      description: "A top-tier collector-grade Ceylon/Vedic Hessonite with exceptional transparency, vivid honey-orange hue, minimal inclusions, master faceting, and comprehensive laboratory certification.",
      suitableFor: "Master Clarity, Ambition & Inner Strength",
      keyHighlights: [
        "Pristine Deep Honey-Amber Transparency",
        "Accompanied by Gemstone Certification",
        "Vedic Temple Priest Consecration",
        "Complete Origin & Quality Dossier"
      ]
    }
  ],
  specifications: [
    {
      groupName: "Astrological Attributes",
      specs: [
        { label: "Gemstone", value: "Hessonite" },
        { label: "Hindi Name", value: "गोमेद (Gomed)" },
        { label: "Sanskrit Name", value: "Gomedaka / गोमेदक" },
        { label: "Traditional Association", value: "Rahu (Focus, Confidence, Clarity & Resilience)" },
        { label: "Category", value: "Precious Gemstone (Garnet Family)" },
        { label: "Governing Chakra", value: "Muladhara (Root) & Sahasrara" },
        { label: "Recommended Metal", value: "Silver, Panchdhatu, or White Gold" },
        { label: "Recommended Finger", value: "Middle Finger (Madhyama) of Right Hand" },
        { label: "Auspicious Day", value: "Saturday Evening / Wednesday Twilight (Rahu Hora)" }
      ]
    },
    {
      groupName: "Product Specifications & Transparency",
      specs: [
        { label: "Color", value: "Honey-Amber / Cinnamon Orange-Brown" },
        { label: "Weight", value: "Customizable (2 to 7+ Ratti / Carat equivalent)" },
        { label: "Size", value: "Customizable (Dimensions & mm sizing)" },
        { label: "Setting", value: "Ring / Pendant / Gemstone Only" },
        { label: "Certification", value: "Available on selected stones" },
        { label: "Divine Offering", value: "Optional (+₹1,100)" },
        { label: "Customization", value: "Available" },
        { label: "Transparency Policy", value: "Full disclosure of natural status, clarity, origin & treatments" }
      ]
    }
  ],
  faqs: [
    {
      q: "What are the traditional qualities associated with Hessonite and Rahu?",
      a: "Hessonite (Gomed), traditionally known as Gomed (गोमेद) and Gomedaka, is associated with Rahu in Vedic astrology. Traditional practitioners associate it with focus, confidence, clarity, resilience, and the ability to handle uncertainty."
    },
    {
      q: "What is your Hessonite Transparency policy?",
      a: "Hessonite Garnets naturally vary in color, clarity, transparency, inclusions (the natural treacle effect), cut, origin, treatment status, and carat weight. We strictly disclose verified information regarding natural status, treatments, and laboratory certification for the actual inventory item."
    },
    {
      q: "How do I choose the correct Ratti weight for Hessonite (Gomed)?",
      a: "In Vedic astrology, Hessonite is traditionally chosen between 3 to 7 Ratti (approx. 2.7 to 6.4 Carats), or as specifically recommended by your Vedic astrologer based on your horoscope."
    },
    {
      q: "Is the Divine Offering mandatory for Hessonite?",
      a: "No. The Divine Offering is completely optional (+₹1,100) and is not required to purchase the Hessonite."
    }
  ],
  tags: ["Ratnas", "Gemstones", "Hessonite", "Gomed", "Gomedaka", "Rahu Gemstone", "Rahu", "Varanasi Sourced"]
};

export const catsEyeProduct: Product = {
  id: "ratna-cats-eye-lahsunia",
  slug: "cats-eye-lahsunia",
  name: "Cat’s Eye (Lahsunia)",
  category: "Ratnas",
  subCategory: "Gemstones",
  image: "/assets/ratnas/cats-eye-lahsunia.png",
  images: ["/assets/ratnas/cats-eye-lahsunia.png"],
  badge: "Ketu Gemstone",
  rating: 4.9,
  reviewCount: 156,
  price: 5999,
  mrp: 8999,
  featured: false,
  hasDivineOffering: true,
  divineOfferingPrice: 1100,
  tagline: "लहसुनिया / वैडूर्य — Ketu Astrological Gemstone",
  shortDescription: "A natural cat’s eye gemstone traditionally associated with Ketu in Vedic astrology, admired for its distinctive chatoyant silky band and mystical depth.",
  detailedOverview: [
    "Cat’s Eye & Ketu: Cat’s Eye (Lahsunia), traditionally known as Lahsunia (लहसुनिया) and Vaidurya (वैडूर्य), is associated with Ketu in Vedic astrology. Traditional practitioners associate it with qualities such as focus, introspection, discipline, resilience, and spiritual awareness.",
    "Cat’s Eye Transparency & Chatoyancy Disclosure: Cat’s Eye chrysoberyl and natural chatoyant gemstones vary based on the sharpness and symmetry of their optical eye band, body color (honey-green to golden olive), clarity, transparency, cut dome symmetry, origin, treatment status, weight, and laboratory certification. In accordance with honest Vedic gemological standards, we strictly disclose verified information regarding natural chatoyancy, origin, and treatment status.",
    "Sanctification & Bespoke Customization: Sourced for distinct optical chatoyancy and consecrated with holy Varanasi Ganga jal and energized with Vedic Ketu Beej Mantras prior to dispatch. Select your desired quality tier, astrological Ratti weight (2 to 7+ Ratti), handcrafted silver or custom gold/pendant settings, and an optional sanctified Kashi Vishwanath Divine Offering blessing."
  ],
  variants: [
    {
      id: "cats-eye-essential",
      name: "Essential Cat’s Eye",
      price: 5999,
      mrp: 8999,
      badge: "Astrological Grade",
      description: "An accessible Cat’s Eye option selected for customers seeking a traditional gemstone for Vedic remedies within a practical budget.",
      suitableFor: "Traditional Vedic Remedy & Focus",
      keyHighlights: [
        "Authentic Natural Chatoyant Gemstone",
        "Varanasi Ganga Jal Consecrated",
        "Associated with Ketu",
        "Lab Authenticity Verified"
      ]
    },
    {
      id: "cats-eye-premium",
      name: "Premium Cat’s Eye",
      price: 14999,
      mrp: 21999,
      badge: "Sharp Chatoyancy",
      description: "A higher-quality Cat’s Eye selected for a sharp, centered optical chatoyant band, rich honey-green body color, and enhanced astrological luster.",
      suitableFor: "Introspection, Discipline & Resilience",
      keyHighlights: [
        "Sharp Centered Milk & Honey Chatoyancy",
        "High Optical Depth & Symmetry",
        "Energized with Ketu Beej Mantras",
        "Authenticity Certificate Included"
      ]
    },
    {
      id: "cats-eye-certified-premium",
      name: "Certified Premium Cat’s Eye",
      price: 29999,
      mrp: 44999,
      badge: "Master Certified",
      description: "A top-tier collector-grade Chrysoberyl Cat’s Eye with supreme razor-sharp chatoyancy, luminous honey-golden hue, precision cabochon dome, and comprehensive laboratory certification.",
      suitableFor: "Master Spiritual Awareness & Clarity",
      keyHighlights: [
        "Pristine Razor-Sharp Chatoyant Eye",
        "Accompanied by Gemstone Certification",
        "Vedic Temple Priest Consecration",
        "Complete Origin & Quality Dossier"
      ]
    }
  ],
  specifications: [
    {
      groupName: "Astrological Attributes",
      specs: [
        { label: "Gemstone", value: "Cat’s Eye" },
        { label: "Hindi Name", value: "लहसुनिया (Lahsunia / Lehsunia)" },
        { label: "Sanskrit Name", value: "Vaidurya / वैडूर्य" },
        { label: "Traditional Association", value: "Ketu (Focus, Introspection, Discipline & Spiritual Awareness)" },
        { label: "Category", value: "Precious Gemstone (Chrysoberyl / Chatoyant Variety)" },
        { label: "Governing Chakra", value: "Sahasrara (Crown) & Ajna (Third Eye)" },
        { label: "Recommended Metal", value: "Silver, Panchdhatu, or White Gold" },
        { label: "Recommended Finger", value: "Middle Finger (Madhyama) / Little Finger of Right Hand" },
        { label: "Auspicious Day", value: "Tuesday / Thursday Midnight or Dawn (Ketu Hora)" }
      ]
    },
    {
      groupName: "Product Specifications & Transparency",
      specs: [
        { label: "Body Color", value: "Honey-Golden / Olive Green / Brownish-Yellow" },
        { label: "Chatoyancy", value: "Verified sharp optical eye band effect" },
        { label: "Weight", value: "Customizable (2 to 7+ Ratti / Carat equivalent)" },
        { label: "Size", value: "Customizable (Dimensions & mm sizing)" },
        { label: "Setting", value: "Ring / Pendant / Gemstone Only" },
        { label: "Certification", value: "Available on selected stones" },
        { label: "Divine Offering", value: "Optional (+₹1,100)" },
        { label: "Customization", value: "Available" },
        { label: "Transparency Policy", value: "Full disclosure of natural chatoyancy, clarity, origin & treatments" }
      ]
    }
  ],
  faqs: [
    {
      q: "What are the traditional qualities associated with Cat’s Eye and Ketu?",
      a: "Cat’s Eye (Lahsunia), traditionally known as Lahsunia and Vaidurya, is associated with Ketu in Vedic astrology. Traditional practitioners associate it with focus, introspection, discipline, resilience, and spiritual awareness."
    },
    {
      q: "What is your Cat’s Eye Transparency policy regarding chatoyancy?",
      a: "Cat’s Eye gemstones vary based on the sharpness and symmetry of their chatoyant eye-band, body color, clarity, cut, origin, treatment status, and weight. We strictly disclose verified information regarding natural chatoyancy, origin, and laboratory certification."
    },
    {
      q: "How do I choose the correct Ratti weight for Cat’s Eye (Lahsunia)?",
      a: "In Vedic astrology, Cat’s Eye is traditionally chosen between 3 to 7 Ratti (approx. 2.7 to 6.4 Carats), or as specifically recommended by your Vedic astrologer based on your horoscope."
    },
    {
      q: "Is the Divine Offering mandatory for Cat’s Eye?",
      a: "No. The Divine Offering is completely optional (+₹1,100) and is not required to purchase the Cat’s Eye."
    }
  ],
  tags: ["Ratnas", "Gemstones", "Cat's Eye", "Lahsunia", "Lehsunia", "Vaidurya", "Ketu Gemstone", "Ketu", "Varanasi Sourced"]
};

export const ratnaProducts: Product[] = [rubyProduct, pearlProduct, redCoralProduct, emeraldProduct, yellowSapphireProduct, diamondProduct, blueSapphireProduct, hessoniteProduct, catsEyeProduct];



