import {
  Product,
  ProductVariant,
  SamagriCategory,
  SamagriItem,
  SpecGroup,
  FAQItem,
} from "./types";

export type {
  SamagriItem,
  SamagriCategory,
  SpecGroup,
  FAQItem,
};
export type PujaKitVariant = ProductVariant;
export type PujaKitProduct = Product;

export const pujaKitProducts: Product[] = [
  {
    "id": "pk-satyanarayan-pooja-kit",
    "slug": "satyanarayan-pooja-kit",
    "name": "Satyanarayan Pooja Kit",
    "category": "Puja Kits",
    "image": "/assets/puja-kits/01-satyanarayan-pooja-kit.jpg",
    "badge": "Most Popular",
    "rating": 4.9,
    "reviewCount": 342,
    "tagline": "Complete Vedic Katha Samagri Set",
    "shortDescription": "A premium, hand-curated collection of authentic, non-perishable ritual items sourced directly from Kashi. Designed to invite harmony, prosperity, and Lord Satyanarayan's divine blessings into your home.",
    "detailedOverview": [
      "Perform your auspicious Sri Satyanarayan Vrat Katha with absolute peace of mind and complete ritual purity. The Kashi Prasad Satyanarayan Pooja Kit is a luxurious, hand-compiled collection of authentic ritual materials sourced directly from the spiritual heart of India, Varanasi. Curated under the expert supervision of veteran Kashi temple priests, this kit preserves the ancient Vedic traditions, making it easy for you to invite harmony, abundance, and the blessings of Lord Satyanarayan into your home.",
      "At Kashi Prasad, we understand the sanctity of your home altar. That is why we guarantee a 100% non-perishable samagri set. We strictly exclude any elements that can spoil during shipping, such as fresh fruits, bananas, fresh flowers, or leaves. Instead, we provide dried whole coconut, vacuum-sealed cardamom, cloves, mishri, and top-tier dry fruits. This ensures that every item arrives fresh, pure, and ready for your ritual, regardless of transit time.",
      "Each variant is crafted to cater to your specific congregation size. Whether it's the Basic kit for a quiet family ritual, the Standard kit with upgraded brass vessels and custom organization pouches, or the Premium collection that includes a sacred blowing conch (Shankh), copper lota, natural fragrance oil (Ittar), and a beautiful reusable wooden storage box, Kashi Prasad guarantees absolute devotion and excellence in every package."
    ],
    "tags": [
      "Satyanarayan Puja",
      "Pooja Kit",
      "Varanasi Sourced",
      "Kashi Prasad",
      "Sacred Puja Samagri",
      "Home Pooja Kit",
      "Spiritual Gift"
    ],
    "price": 1899,
    "mrp": 3799,
    "variants": [
      {
        "id": "variant-basic-kit",
        "name": "Basic Kit",
        "price": 1899,
        "mrp": 3799,
        "badge": "Essential Devotion",
        "suitableFor": "2–4 People",
        "description": "Contains all core non-perishable samagri, sacred photos, and Katha book needed for a simple and authentic family Satyanarayan Pooja.",
        "keyHighlights": [
          "Core deities photos & Katha book",
          "Traditional roli, haldi & kumkum",
          "Akshat rice (100g) & premium dry coconut",
          "Janeu, Mauli thread & Supari (11 pcs)",
          "Gangajal (100ml) & sweet batasha/mishri offerings",
          "Steel Kalash, clay diyas & essential pooja cloths"
        ],
        "samagriChecklist": [
          {
            "category": "Murtis, Photos & Books",
            "items": [
              {
                "name": "- Shri Satyanarayan Bhagwan Photo (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Shri Ganesh Ji Photo (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Satyanarayan Vrat Katha Book (×1)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Sacred Ingredients & Herbs",
            "items": [
              {
                "name": "- Roli (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Haldi (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Kumkum (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Chandan Powder (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Akshat Rice (100g)",
                "quantity": "×1"
              },
              {
                "name": "- Supari (×11)",
                "quantity": "×1"
              },
              {
                "name": "- Cloves (×20)",
                "quantity": "×1"
              },
              {
                "name": "- Cardamom (×20)",
                "quantity": "×1"
              },
              {
                "name": "- Dry Coconut (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Panchmewa (Dry Fruits) (100g)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Ritual Cloths & Aasans",
            "items": [
              {
                "name": "- Mauli (Raksha Sutra) (×2)",
                "quantity": "×1"
              },
              {
                "name": "- Janeu (Sacred Thread) (×2)",
                "quantity": "×1"
              },
              {
                "name": "- Red Pooja Cloth (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Yellow Pooja Cloth (×1)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Sacred Metalware & Vessels",
            "items": [
              {
                "name": "- Sealed Gangajal (100ml)",
                "quantity": "×1"
              },
              {
                "name": "- Steel Kalash (×1)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Aroma & Lamps",
            "items": [
              {
                "name": "- Camphor (Kafur) (50g)",
                "quantity": "×1"
              },
              {
                "name": "- Incense Sticks (Agarbatti) (1 Pack)",
                "quantity": "×1"
              },
              {
                "name": "- Dhoop Cone Pack (1 Pack)",
                "quantity": "×1"
              },
              {
                "name": "- Cotton Wicks (×25)",
                "quantity": "×1"
              },
              {
                "name": "- Clay Diyas (×4)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Packaging & Organization",
            "items": [
              {
                "name": "- Mishri (Sugar Candy) (100g)",
                "quantity": "×1"
              },
              {
                "name": "- Batasha (Sugar Drops) (100g)",
                "quantity": "×1"
              }
            ]
          }
        ]
      },
      {
        "id": "variant-standard-kit",
        "name": "Standard Kit",
        "price": 2999,
        "mrp": 5999,
        "badge": "Best Seller • Recommended",
        "suitableFor": "4–8 People",
        "description": "Upgrades your experience with high-quality brass vessels, steel pooja thali, additional samagri, and zip pouches for perfect layout organization.",
        "keyHighlights": [
          "Everything in Basic included",
          "Upgraded Brass Kalash & Brass Diya",
          "Steel Pooja Thali, Bowls & Bell",
          "Pooja Aasan & organic cotton wicks (75 pcs)",
          "Instruction card & zip organizers",
          "Premium gift-box packaging"
        ],
        "samagriChecklist": [
          {
            "category": "Murtis, Photos & Books",
            "items": [
              {
                "name": "- Shri Satyanarayan Bhagwan Photo (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Shri Ganesh Ji Photo (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Satyanarayan Vrat Katha Book (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Premium Satyanarayan Katha Book (×1)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Sacred Ingredients & Herbs",
            "items": [
              {
                "name": "- Roli (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Haldi (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Kumkum (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Chandan Powder (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Premium Chandan (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Sindoor (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Akshat Rice (100g)",
                "quantity": "×1"
              },
              {
                "name": "- Supari (×11)",
                "quantity": "×1"
              },
              {
                "name": "- Cloves (×20)",
                "quantity": "×1"
              },
              {
                "name": "- Cardamom (×20)",
                "quantity": "×1"
              },
              {
                "name": "- Dry Coconut (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Panchmewa (Dry Fruits) (100g)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Ritual Cloths & Aasans",
            "items": [
              {
                "name": "- Mauli (Raksha Sutra) (×4)",
                "quantity": "×1"
              },
              {
                "name": "- Janeu (Sacred Thread) (×6)",
                "quantity": "×1"
              },
              {
                "name": "- Red Pooja Cloth (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Yellow Pooja Cloth (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Pooja Aasan (×1)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Sacred Metalware & Vessels",
            "items": [
              {
                "name": "- Sealed Gangajal (100ml)",
                "quantity": "×1"
              },
              {
                "name": "- Steel Kalash (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Brass Kalash (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Steel Pooja Thali (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Steel Bowls (×2)",
                "quantity": "×1"
              },
              {
                "name": "- Pooja Spoon (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Temple Bell (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Brass Diya (×1)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Aroma & Lamps",
            "items": [
              {
                "name": "- Camphor (Kafur) (150g)",
                "quantity": "×1"
              },
              {
                "name": "- Incense Sticks (Agarbatti) (2 Packs)",
                "quantity": "×1"
              },
              {
                "name": "- Premium Dhoop Cone Pack (1 Pack)",
                "quantity": "×1"
              },
              {
                "name": "- Cotton Wicks (×75)",
                "quantity": "×1"
              },
              {
                "name": "- Clay Diyas (×4)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Packaging & Organization",
            "items": [
              {
                "name": "- Mishri (Sugar Candy) (100g)",
                "quantity": "×1"
              },
              {
                "name": "- Batasha (Sugar Drops) (100g)",
                "quantity": "×1"
              },
              {
                "name": "- Red Cloth Pouch (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Zip Pouches for organization (×5)",
                "quantity": "×1"
              },
              {
                "name": "- Kashi Prasad Instruction Card (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Premium Gift Box Packaging (×1)",
                "quantity": "×1"
              }
            ]
          }
        ]
      },
      {
        "id": "variant-premium-kit",
        "name": "Premium Kit",
        "price": 4899,
        "mrp": 9799,
        "badge": "Luxury Altar Collection",
        "suitableFor": "8–15 People",
        "description": "The ultimate spiritual collection. Features double the quantity of key offerings, premium brassware, conch shankh, copper vessels, natural Kesar, organic Pooja Ittar, and a reusable wooden storage box.",
        "keyHighlights": [
          "Everything in Standard included",
          "Large Brass Kalash & large Brass Diya",
          "Authentic blowing Shankh (Conch)",
          "Copper Lota & Copper Spoon",
          "Pure Kesar (2g) & luxurious Pooja Ittar",
          "Premium wooden storage box & checklist card"
        ],
        "samagriChecklist": [
          {
            "category": "Murtis, Photos & Books",
            "items": [
              {
                "name": "- Shri Satyanarayan Bhagwan Photo (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Shri Ganesh Ji Photo (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Satyanarayan Vrat Katha Book (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Premium Satyanarayan Katha Book (×1)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Sacred Ingredients & Herbs",
            "items": [
              {
                "name": "- Roli (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Haldi (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Kumkum (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Premium Chandan (50g)",
                "quantity": "×1"
              },
              {
                "name": "- Sindoor (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Akshat Rice (100g)",
                "quantity": "×1"
              },
              {
                "name": "- Pure Kesar (Saffron) (2g)",
                "quantity": "×1"
              },
              {
                "name": "- Premium Pooja Ittar (Perfume) (1 Bottle)",
                "quantity": "×1"
              },
              {
                "name": "- Supari (×32)",
                "quantity": "×1"
              },
              {
                "name": "- Cloves (×20)",
                "quantity": "×1"
              },
              {
                "name": "- Cardamom (×20)",
                "quantity": "×1"
              },
              {
                "name": "- Dry Coconut (×3)",
                "quantity": "×1"
              },
              {
                "name": "- Panchmewa (Dry Fruits) (350g)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Ritual Cloths & Aasans",
            "items": [
              {
                "name": "- Mauli (Raksha Sutra) (×9)",
                "quantity": "×1"
              },
              {
                "name": "- Janeu (Sacred Thread) (×16)",
                "quantity": "×1"
              },
              {
                "name": "- Red Pooja Cloth (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Yellow Pooja Cloth (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Red Chowki Cloth (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Yellow Chowki Cloth (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Pooja Aasan (×1)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Sacred Metalware & Vessels",
            "items": [
              {
                "name": "- Sealed Gangajal (100ml)",
                "quantity": "×1"
              },
              {
                "name": "- Steel Kalash (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Brass Kalash (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Large Brass Kalash (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Steel Pooja Thali (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Premium Pooja Thali (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Steel Bowls (×6)",
                "quantity": "×1"
              },
              {
                "name": "- Pooja Spoon (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Temple Bell (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Brass Bell (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Vedic Dakshinavarti Shankh (Conch) (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Copper Lota (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Copper Spoon (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Brass Diya (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Large Brass Diya (×1)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Aroma & Lamps",
            "items": [
              {
                "name": "- Camphor (Kafur) (350g)",
                "quantity": "×1"
              },
              {
                "name": "- Incense Sticks (Agarbatti) (2 Packs)",
                "quantity": "×1"
              },
              {
                "name": "- Premium Incense Packs (2 Packs)",
                "quantity": "×1"
              },
              {
                "name": "- Premium Dhoop Cone Pack (1 Pack)",
                "quantity": "×1"
              },
              {
                "name": "- Premium Dhoop Cones Extra (2 Packs)",
                "quantity": "×1"
              },
              {
                "name": "- Cotton Wicks (×175)",
                "quantity": "×1"
              },
              {
                "name": "- Clay Diyas (×14)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Packaging & Organization",
            "items": [
              {
                "name": "- Mishri (Sugar Candy) (350g)",
                "quantity": "×1"
              },
              {
                "name": "- Batasha (Sugar Drops) (350g)",
                "quantity": "×1"
              },
              {
                "name": "- Red Cloth Pouch (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Zip Pouches for organization (×5)",
                "quantity": "×1"
              },
              {
                "name": "- Kashi Prasad Instruction Card (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Pooja Checklist Card (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Premium Kashi Prasad Gift Packaging (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Reusable Wooden Storage Box (×1)",
                "quantity": "×1"
              }
            ]
          }
        ]
      }
    ],
    "specifications": [
      {
        "groupName": "Material Purity",
        "specs": [
          {
            "label": "Brass Vessels",
            "value": "Grade-A Solid Cast Brass, polished"
          },
          {
            "label": "Copper Vessels",
            "value": "99.2% Pure Copper lota & spoon"
          },
          {
            "label": "Altar Cloths",
            "value": "Premium soft silk with gilded gold borders"
          },
          {
            "label": "Puja Samagri Herbs",
            "value": "100% Organic, additive-free local roots"
          }
        ]
      },
      {
        "groupName": "Origin & Longevity",
        "specs": [
          {
            "label": "Origin Region",
            "value": "Directly compiled & ritually blessed in Varanasi"
          },
          {
            "label": "Non-Perishable Promise",
            "value": "100% guaranteed free of fresh fruits/flowers/dairy"
          },
          {
            "label": "Shelf Life",
            "value": "12 Months (camphor, incense, herbs) / Lifetime (metals)"
          },
          {
            "label": "Weight",
            "value": "Basic: ~1.2kg | Standard: ~2.4kg | Premium: ~4.1kg"
          }
        ]
      }
    ],
    "faqs": [
      {
        "q": "Is everything in the Satyanarayan Pooja Kit authentic?",
        "a": "Yes. Every single item in the kit—from the Gangajal sourced from the mid-stream of the Ganges to the organic Kumkum and Roli—is selected under the direct supervision of temple priests in Varanasi. They are energized and packed with devotion."
      },
      {
        "q": "Does this kit contain any perishable items that can spoil?",
        "a": "No. Kashi Prasad adheres to a strict shipping guideline: we never include fresh fruits, bananas, milk, curd, honey, fresh flowers, mango leaves, or fresh coconuts. All contents are non-perishable (such as dry whole coconut, vacuum-sealed cardamom, cloves, mishri, and pure metal vessels) and are guaranteed to arrive in perfect condition."
      },
      {
        "q": "What is the difference between the Basic, Standard, and Premium variants?",
        "a": "The Basic kit contains all the essential samagri and photos for the ritual, using steel/clay vessels. The Standard kit adds premium brass vessels, a pooja thali, an aasan, extra samagri quantities, and organizer pouches. The Premium kit is our luxury offering, featuring a larger brass Kalash and Diya, a sacred conch (Shankh), copper vessels, pure saffron (Kesar), natural fragrance oil (Ittar), and a reusable wooden storage box."
      },
      {
        "q": "Can I store the remaining items for future Pujas?",
        "a": "Absolutely. Items like the brass/copper vessels, Shankh, bells, wooden box, and book will last a lifetime. The organic herbs, dhoop, camphor, and dry materials are sealed in air-tight pouches and have a shelf life of up to 12 months."
      },
      {
        "q": "How fast is the shipping from Kashi?",
        "a": "We package and dispatch your kit from Varanasi within 24 hours of confirmation. Delivery takes 3–5 business days across India. Tracking information is shared immediately on WhatsApp."
      }
    ],
    "shippingGuarantee": "**Directly Dispatched From Holy Dashashwamedh, Varanasi**\n\nWe handle your sacred consignment with pure devotion. Once you place the order, the items are gathered, checked for structural integrity, packed securely in multi-layered bubble wrap, and dispatched via our premium courier partners. Cash on Delivery is 100% free with zero hidden handling charges.",
    "isPlaceholder": false
  },
  {
    "id": "pk-griha-pravesh-pooja-kit",
    "slug": "griha-pravesh-pooja-kit",
    "name": "Griha Pravesh Pooja Kit",
    "category": "Puja Kits",
    "image": "/assets/puja-kits/02-griha-pravesh-pooja-kit.jpg",
    "badge": "Best Seller",
    "rating": 4.9,
    "reviewCount": 287,
    "tagline": "Complete Housewarming Ceremony Samagri",
    "shortDescription": "A premium, complete collection of sacred, non-perishable samagri and vessels sourced from Varanasi. Ideal for Griha Pravesh, Vastu Shanti, and new home entry blessings.",
    "detailedOverview": [
      "Enter your new home with abundance, harmony, and peace. The Kashi Prasad Griha Pravesh Pooja Kit is a luxurious, comprehensively curated set of authentic ritual materials compiled under the guidance of Varanasi temple priests. Designed to clean and sanctify your home threshold, it ensures your housewarming and Vastu Shanti ceremonies are performed in strict accordance with Vedic protocols.",
      "Adhering to our strict non-perishable shipping policy, this kit is guaranteed 100% free of perishables like fresh mango leaves, fresh flowers, or fresh coconuts. We replace fresh coconuts with mature dry whole coconuts and include sealed dry samagri packs, enabling long shelf lives and pristine delivery to your door.",
      "Choose from our three premium variants. The Basic kit contains all essential samagri, havan wood, and instruction manuals. The Standard kit adds brass vessels, a pooja thali, a bell, vastu stickers, and a brass-plated Vastu Yantra. The Premium kit offers the ultimate altar collection with heavy copper lota/spoon, conch Shankh, pure Kesar, and a reusable wooden pooja box."
    ],
    "tags": [
      "Griha Pravesh",
      "Pooja Kit",
      "Varanasi Sourced",
      "Kashi Prasad",
      "Home Pooja Kit",
      "Housewarming Ceremony",
      "Vastu Shanti"
    ],
    "price": 2199,
    "mrp": 4399,
    "variants": [
      {
        "id": "variant-basic-kit",
        "name": "Basic Kit",
        "price": 2199,
        "mrp": 4399,
        "badge": "Essential Entry",
        "suitableFor": "2–4 People",
        "description": "Contains all core non-perishable samagri, havan wood, Vastu thread, and katha guide books for a quiet family Griha Pravesh ceremony.",
        "keyHighlights": [
          "Shri Ganesh Ji photo & Pooja Vidhi book",
          "Havan Samagri (250g), samidha wood & wooden spoon",
          "Navdhanya grain pack (9 grains) & Vastu Raksha thread",
          "Supari (11 pcs), Mauli threads & Janeu threads",
          "Steel Kalash, clay diyas & essential pooja cloths",
          "Camphor (50g), incense sticks & dhoop cones"
        ],
        "samagriChecklist": [
          {
            "category": "Murtis, Photos & Books",
            "items": [
              {
                "name": "- Shri Ganesh Ji Photo (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Griha Pravesh Pooja Vidhi Book (×1)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Sacred Ingredients & Herbs",
            "items": [
              {
                "name": "- Roli (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Haldi (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Kumkum (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Chandan Powder (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Akshat Rice (100g)",
                "quantity": "×1"
              },
              {
                "name": "- Navdhanya Pack (Nine Grains) (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Supari (×11)",
                "quantity": "×1"
              },
              {
                "name": "- Cloves (×20)",
                "quantity": "×1"
              },
              {
                "name": "- Cardamom (×20)",
                "quantity": "×1"
              },
              {
                "name": "- Dry Coconut (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Panchmewa (Dry Fruits) (100g)",
                "quantity": "×1"
              },
              {
                "name": "- Havan Samidha Wood (1 Pack)",
                "quantity": "×1"
              },
              {
                "name": "- Havan Samagri Pack (250g)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Ritual Cloths & Aasans",
            "items": [
              {
                "name": "- Vastu Raksha Thread (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Mauli (Raksha Sutra) (×2)",
                "quantity": "×1"
              },
              {
                "name": "- Janeu (Sacred Thread) (×2)",
                "quantity": "×1"
              },
              {
                "name": "- Red Pooja Cloth (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Yellow Pooja Cloth (×1)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Sacred Metalware & Vessels",
            "items": [
              {
                "name": "- Sealed Gangajal (100ml)",
                "quantity": "×1"
              },
              {
                "name": "- Steel Kalash (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Wooden Havan Spoon (×1)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Aroma & Lamps",
            "items": [
              {
                "name": "- Camphor (Kafur) (50g)",
                "quantity": "×1"
              },
              {
                "name": "- Incense Sticks (Agarbatti) (1 Pack)",
                "quantity": "×1"
              },
              {
                "name": "- Dhoop Cone Pack (1 Pack)",
                "quantity": "×1"
              },
              {
                "name": "- Cotton Wicks (×25)",
                "quantity": "×1"
              },
              {
                "name": "- Clay Diyas (×6)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Packaging & Organization",
            "items": [
              {
                "name": "- Mishri (Sugar Candy) (100g)",
                "quantity": "×1"
              },
              {
                "name": "- Batasha (Sugar Drops) (100g)",
                "quantity": "×1"
              }
            ]
          }
        ]
      },
      {
        "id": "variant-standard-kit",
        "name": "Standard Kit",
        "price": 3299,
        "mrp": 6599,
        "badge": "Best Seller • Recommended",
        "suitableFor": "4–8 People",
        "description": "Upgrades your experience with high-quality brass vessels, steel pooja thali, Vastu Yantra, Swastik stickers, and custom organization pouches.",
        "keyHighlights": [
          "Everything in Basic included",
          "Upgraded Brass Kalash & Brass Diya",
          "Steel Pooja Thali, Bowls & Bell",
          "Vastu Yantra, Swastik stickers & Shubh Labh set",
          "Pooja Aasan & organic wicks (75 pcs)",
          "Red Cloth Pouch, organizing zip bags & Premium Gift Box"
        ],
        "samagriChecklist": [
          {
            "category": "Murtis, Photos & Books",
            "items": [
              {
                "name": "- Shri Ganesh Ji Photo (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Griha Pravesh Pooja Vidhi Book (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Vastu Yantra (×1)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Sacred Ingredients & Herbs",
            "items": [
              {
                "name": "- Roli (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Haldi (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Kumkum (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Chandan Powder (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Premium Chandan (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Sindoor (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Akshat Rice (100g)",
                "quantity": "×1"
              },
              {
                "name": "- Navdhanya Pack (Nine Grains) (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Supari (×11)",
                "quantity": "×1"
              },
              {
                "name": "- Cloves (×20)",
                "quantity": "×1"
              },
              {
                "name": "- Cardamom (×20)",
                "quantity": "×1"
              },
              {
                "name": "- Dry Coconut (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Panchmewa (Dry Fruits) (100g)",
                "quantity": "×1"
              },
              {
                "name": "- Havan Samidha Wood (1 Pack)",
                "quantity": "×1"
              },
              {
                "name": "- Havan Samagri Pack (250g)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Ritual Cloths & Aasans",
            "items": [
              {
                "name": "- Vastu Raksha Thread (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Mauli (Raksha Sutra) (×4)",
                "quantity": "×1"
              },
              {
                "name": "- Janeu (Sacred Thread) (×6)",
                "quantity": "×1"
              },
              {
                "name": "- Red Pooja Cloth (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Yellow Pooja Cloth (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Pooja Aasan (×1)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Sacred Metalware & Vessels",
            "items": [
              {
                "name": "- Sealed Gangajal (100ml)",
                "quantity": "×1"
              },
              {
                "name": "- Steel Kalash (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Brass Kalash (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Steel Pooja Thali (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Steel Bowls (×2)",
                "quantity": "×1"
              },
              {
                "name": "- Pooja Spoon (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Temple Bell (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Brass Diya (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Wooden Havan Spoon (×1)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Aroma & Lamps",
            "items": [
              {
                "name": "- Camphor (Kafur) (150g)",
                "quantity": "×1"
              },
              {
                "name": "- Incense Sticks (Agarbatti) (2 Packs)",
                "quantity": "×1"
              },
              {
                "name": "- Premium Dhoop Cone Pack (1 Pack)",
                "quantity": "×1"
              },
              {
                "name": "- Cotton Wicks (×75)",
                "quantity": "×1"
              },
              {
                "name": "- Clay Diyas (×6)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Packaging & Organization",
            "items": [
              {
                "name": "- Mishri (Sugar Candy) (100g)",
                "quantity": "×1"
              },
              {
                "name": "- Batasha (Sugar Drops) (100g)",
                "quantity": "×1"
              },
              {
                "name": "- Swastik Stickers (×2)",
                "quantity": "×1"
              },
              {
                "name": "- Shubh Labh Sticker Set (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Red Cloth Pouch (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Zip Pouches for organization (×5)",
                "quantity": "×1"
              },
              {
                "name": "- Kashi Prasad Instruction Card (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Premium Gift Box (×1)",
                "quantity": "×1"
              }
            ]
          }
        ]
      },
      {
        "id": "variant-premium-kit",
        "name": "Premium Kit",
        "price": 5299,
        "mrp": 10599,
        "badge": "Luxury Altar Collection",
        "suitableFor": "8–15 People",
        "description": "The ultimate Vastu Shanti collection. Contains large brass vessels, conch Shankh, copper lota/spoon, natural Kesar, pure Pooja Ittar, copper Swastik plate, and a reusable wooden storage box.",
        "keyHighlights": [
          "Everything in Standard included",
          "Large Brass Kalash & large Brass Diya",
          "Authentic blowing Shankh (Conch)",
          "Copper Lota & Copper Pooja Spoon",
          "Premium copper-etched Vastu Yantra & Copper Swastik",
          "Kesar (2g), Pooja Ittar & wooden box"
        ],
        "samagriChecklist": [
          {
            "category": "Murtis, Photos & Books",
            "items": [
              {
                "name": "- Shri Ganesh Ji Photo (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Griha Pravesh Pooja Vidhi Book (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Premium Vastu Yantra (×1)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Sacred Ingredients & Herbs",
            "items": [
              {
                "name": "- Roli (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Haldi (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Kumkum (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Premium Chandan (50g)",
                "quantity": "×1"
              },
              {
                "name": "- Sindoor (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Akshat Rice (100g)",
                "quantity": "×1"
              },
              {
                "name": "- Pure Kesar (Saffron) (2g)",
                "quantity": "×1"
              },
              {
                "name": "- Pooja Ittar (Fragrance) (1 Bottle)",
                "quantity": "×1"
              },
              {
                "name": "- Navdhanya Pack (Nine Grains) (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Supari (×32)",
                "quantity": "×1"
              },
              {
                "name": "- Cloves (×20)",
                "quantity": "×1"
              },
              {
                "name": "- Cardamom (×20)",
                "quantity": "×1"
              },
              {
                "name": "- Dry Coconut (×3)",
                "quantity": "×1"
              },
              {
                "name": "- Panchmewa (Dry Fruits) (350g)",
                "quantity": "×1"
              },
              {
                "name": "- Havan Samidha Wood (1 Pack)",
                "quantity": "×1"
              },
              {
                "name": "- Havan Samagri Pack (250g)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Ritual Cloths & Aasans",
            "items": [
              {
                "name": "- Vastu Raksha Thread (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Mauli (Raksha Sutra) (×9)",
                "quantity": "×1"
              },
              {
                "name": "- Janeu (Sacred Thread) (×16)",
                "quantity": "×1"
              },
              {
                "name": "- Red Pooja Cloth (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Yellow Pooja Cloth (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Red Chowki Cloth (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Yellow Chowki Cloth (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Pooja Aasan (×1)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Sacred Metalware & Vessels",
            "items": [
              {
                "name": "- Sealed Gangajal (100ml)",
                "quantity": "×1"
              },
              {
                "name": "- Steel Kalash (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Brass Kalash (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Large Brass Kalash (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Steel Pooja Thali (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Premium Pooja Thali (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Steel Bowls (×6)",
                "quantity": "×1"
              },
              {
                "name": "- Pooja Spoon (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Copper Pooja Spoon (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Temple Bell (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Brass Bell (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Vedic Dakshinavarti Shankh (Conch) (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Copper Lota (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Brass Diya (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Large Brass Diya (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Wooden Havan Spoon (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Copper Swastik (×1)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Aroma & Lamps",
            "items": [
              {
                "name": "- Camphor (Kafur) (350g)",
                "quantity": "×1"
              },
              {
                "name": "- Incense Sticks (Agarbatti) (2 Packs)",
                "quantity": "×1"
              },
              {
                "name": "- Premium Incense Packs (2 Packs)",
                "quantity": "×1"
              },
              {
                "name": "- Premium Dhoop Cone Pack (1 Pack)",
                "quantity": "×1"
              },
              {
                "name": "- Premium Dhoop Cones Extra (2 Packs)",
                "quantity": "×1"
              },
              {
                "name": "- Cotton Wicks (×175)",
                "quantity": "×1"
              },
              {
                "name": "- Clay Diyas (×16)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Packaging & Organization",
            "items": [
              {
                "name": "- Mishri (Sugar Candy) (350g)",
                "quantity": "×1"
              },
              {
                "name": "- Batasha (Sugar Drops) (350g)",
                "quantity": "×1"
              },
              {
                "name": "- Swastik Stickers (×2)",
                "quantity": "×1"
              },
              {
                "name": "- Shubh Labh Sticker Set (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Red Cloth Pouch (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Zip Pouches for organization (×5)",
                "quantity": "×1"
              },
              {
                "name": "- Kashi Prasad Instruction Card (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Complete Checklist Card (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Premium Kashi Prasad Gift Packaging (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Reusable Wooden Storage Box (×1)",
                "quantity": "×1"
              }
            ]
          }
        ]
      }
    ],
    "specifications": [
      {
        "groupName": "Vastu & Metal Purity",
        "specs": [
          {
            "label": "Yantra Metal",
            "value": "Premium etched Copper Swastik & Vastu plate"
          },
          {
            "label": "Brass Castings",
            "value": "Grade-A solid Brass Kalash, bell & diya"
          },
          {
            "label": "Havan Utensils",
            "value": "Eco-friendly natural Neem wood spoon"
          },
          {
            "label": "Altar Cloths",
            "value": "Aura silk with hand-woven zari embroidery"
          }
        ]
      },
      {
        "groupName": "Origin & Sourcing",
        "specs": [
          {
            "label": "Compilation Origin",
            "value": "Holy city of Kashi under priestly oversight"
          },
          {
            "label": "Sourcing Assurance",
            "value": "100% Sourced & energized in Varanasi temples"
          },
          {
            "label": "Non-Perishable Promise",
            "value": "Guaranteed free of fresh fruits/flowers/dairy/perishables"
          },
          {
            "label": "Net Weight",
            "value": "Basic: ~1.5kg | Standard: ~2.9kg | Premium: ~4.8kg"
          }
        ]
      }
    ],
    "faqs": [
      {
        "q": "Does the Griha Pravesh Kit include Havan Samagri?",
        "a": "Yes. All variants of the Griha Pravesh Kit include dry Havan Samidha wood, 250g of premium Havan Samagri, camphor, and a custom wooden havan spoon, providing everything required for the housewarming fire ritual."
      },
      {
        "q": "Is the Vastu Yantra included and authentic?",
        "a": "Yes. The Standard kit includes an energized brass-plated Vastu Yantra, and the Premium kit upgrades this to a heavy premium copper-etched Vastu Yantra alongside a copper Swastik. Both are energized in Varanasi temples by priests."
      },
      {
        "q": "Are perishable leaves or fresh coconut included?",
        "a": "No. Under Kashi Prasad's shipping policy, we never include perishable fresh items like mango leaves, betel leaves, fresh coconuts, fresh flowers, or dairy. Instead, we provide dried whole coconut, organic turmeric, and dry ingredients, which have long shelf lives and won't spoil during transit."
      },
      {
        "q": "How do I use the Swastik stickers and Raksha thread?",
        "a": "The Swastik stickers are designed for the main entrance of your new home to attract positive energy. The Vastu Raksha thread is tied around the main door frame or kalash to protect the threshold from negative vibrations. Detailed steps are printed on our included Instruction Card."
      }
    ],
    "shippingGuarantee": "**Sacred Threshold Delivery Sourced from Varanasi**\n\nEvery order is packaged with utmost care and dispatched from Varanasi within 24 hours. We offer free cash on delivery across India.",
    "isPlaceholder": false
  },
  {
    "id": "pk-rudrabhishek-pooja-kit",
    "slug": "rudrabhishek-pooja-kit",
    "name": "Rudrabhishek Pooja Kit",
    "category": "Puja Kits",
    "image": "/assets/puja-kits/03-rudrabhishek-pooja-kit.jpg",
    "badge": "Best Seller",
    "rating": 4.9,
    "reviewCount": 412,
    "tagline": "Sacred Vedic Shiva Abhishekam Samagri",
    "shortDescription": "A premium collection of authentic, non-perishable Shiva Abhishekam items sourced from Varanasi. Blessed under priest supervision, ideal for daily or Shravan prayers.",
    "detailedOverview": [
      "Bring the supreme blessings of Mahadev into your household. The Kashi Prasad Rudrabhishek Pooja Kit is a luxurious, hand-compiled collection of authentic Shiva Abhishekam materials sourced directly from the holy ghats of Varanasi. Curated under the strict supervision of veteran Kashi temple priests, this kit ensures your daily prayers, Shravan Mondays, or major family Rudrabhishek rituals are performed with absolute scriptural correctness.",
      "In line with our strict non-perishable e-commerce shipping guidelines, this kit is guaranteed 100% free of perishables like fresh flowers, banana leaves, milk, curd, or fresh coconut. We replace fresh items with durable dry whole coconuts, natural chandan powder, organic dhoop, and premium camphor. All food-grade sweets (like batasha and mishri) are sealed in air-tight pouches to ensure long shelf lives.",
      "Available in three tailored configurations. The Basic kit contains all essential herbs, Gangajal, photos, and guide books. The Standard kit adds brass vessels, a pooja thali, Bhasma (vibhuti), and a Rudraksha Japa Mala. The Premium kit features a large Nepal Panchmukhi Rudraksha, copper lota/spoon, heavy brassware, pure Kesar, and a reusable wooden storage box."
    ],
    "tags": [
      "Rudrabhishek",
      "Pooja Kit",
      "Varanasi Sourced",
      "Kashi Prasad",
      "Home Pooja Kit",
      "Lord Shiva Puja",
      "Mahadev Blessings"
    ],
    "price": 1999,
    "mrp": 3999,
    "variants": [
      {
        "id": "variant-basic-kit",
        "name": "Basic Kit",
        "price": 1999,
        "mrp": 3999,
        "badge": "Essential Devotion",
        "suitableFor": "2–4 People",
        "description": "Contains all core non-perishable abhishekam samagri, guide books, Gangajal, a symbolic Bel Patra card, and an energized Rudraksha bead.",
        "keyHighlights": [
          "Lord Shiva & Ganesh photos & Pooja Vidhi book",
          "Varanasi-blessed Rudraksha bead & symbolic Bel Patra card",
          "Roli, Haldi, Kumkum, Chandan & Akshat rice",
          "Supari (11 pcs), Cloves & Cardamom (20 pcs each)",
          "Steel Kalash, clay diyas & essential pooja cloths",
          "Havan Samagri (250g), Mauli thread & Janeu wicks"
        ],
        "samagriChecklist": [
          {
            "category": "Murtis, Photos & Books",
            "items": [
              {
                "name": "- Lord Shiva Photo (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Lord Ganesh Photo (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Rudrabhishek Pooja Vidhi Book (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Mahamrityunjaya Mantra Card (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Bel Patra Symbolic Card (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Authentic Rudraksha Bead (×1)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Sacred Ingredients & Herbs",
            "items": [
              {
                "name": "- Roli (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Haldi (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Kumkum (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Chandan Powder (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Akshat Rice (100g)",
                "quantity": "×1"
              },
              {
                "name": "- Supari (×11)",
                "quantity": "×1"
              },
              {
                "name": "- Cloves (×20)",
                "quantity": "×1"
              },
              {
                "name": "- Cardamom (×20)",
                "quantity": "×1"
              },
              {
                "name": "- Dry Coconut (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Havan Samagri (250g)",
                "quantity": "×1"
              },
              {
                "name": "- Panchmewa (Dry Fruits) (100g)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Ritual Cloths & Aasans",
            "items": [
              {
                "name": "- Mauli (Raksha Sutra) (×2)",
                "quantity": "×1"
              },
              {
                "name": "- Janeu (Sacred Thread) (×2)",
                "quantity": "×1"
              },
              {
                "name": "- Red Pooja Cloth (×1)",
                "quantity": "×1"
              },
              {
                "name": "- White Pooja Cloth (×1)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Sacred Metalware & Vessels",
            "items": [
              {
                "name": "- Sealed Gangajal (100ml)",
                "quantity": "×1"
              },
              {
                "name": "- Steel Kalash (×1)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Aroma & Lamps",
            "items": [
              {
                "name": "- Camphor (Kafur) (50g)",
                "quantity": "×1"
              },
              {
                "name": "- Incense Sticks (Agarbatti) (1 Pack)",
                "quantity": "×1"
              },
              {
                "name": "- Dhoop Cone Pack (1 Pack)",
                "quantity": "×1"
              },
              {
                "name": "- Cotton Wicks (×25)",
                "quantity": "×1"
              },
              {
                "name": "- Clay Diyas (×6)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Packaging & Organization",
            "items": [
              {
                "name": "- Mishri (Sugar Candy) (100g)",
                "quantity": "×1"
              },
              {
                "name": "- Batasha (Sugar Drops) (100g)",
                "quantity": "×1"
              }
            ]
          }
        ]
      },
      {
        "id": "variant-standard-kit",
        "name": "Standard Kit",
        "price": 2999,
        "mrp": 5999,
        "badge": "Best Seller • Recommended",
        "suitableFor": "4–8 People",
        "description": "Adds brass altar vessels, steel pooja thali, a sacred Rudraksha Japa Mala, Shiva Yantra, Shiva tilak pack, and vibhuti bhasma.",
        "keyHighlights": [
          "Everything in Basic included",
          "Upgraded Brass Kalash & Brass Diya",
          "Steel Pooja Thali, Bowls & Bell",
          "Rudraksha Japa Mala (108 beads) & Shiva Yantra",
          "Bhasma Vibhuti (20g) & Shiva Tilak pack",
          "Pooja Aasan, Red Pouch, organization bags & Gift Box"
        ],
        "samagriChecklist": [
          {
            "category": "Murtis, Photos & Books",
            "items": [
              {
                "name": "- Lord Shiva Photo (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Lord Ganesh Photo (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Rudrabhishek Pooja Vidhi Book (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Mahamrityunjaya Mantra Card (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Bel Patra Symbolic Card (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Shiva Yantra (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Rudraksha Japa Mala (108 beads) (×1)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Sacred Ingredients & Herbs",
            "items": [
              {
                "name": "- Roli (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Haldi (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Kumkum (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Chandan Powder (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Premium Chandan (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Bhasma / Vibhuti (Sacred Ash) (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Shiva Tilak Pack (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Akshat Rice (100g)",
                "quantity": "×1"
              },
              {
                "name": "- Supari (×11)",
                "quantity": "×1"
              },
              {
                "name": "- Cloves (×20)",
                "quantity": "×1"
              },
              {
                "name": "- Cardamom (×20)",
                "quantity": "×1"
              },
              {
                "name": "- Dry Coconut (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Havan Samagri (250g)",
                "quantity": "×1"
              },
              {
                "name": "- Panchmewa (Dry Fruits) (100g)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Ritual Cloths & Aasans",
            "items": [
              {
                "name": "- Mauli (Raksha Sutra) (×4)",
                "quantity": "×1"
              },
              {
                "name": "- Janeu (Sacred Thread) (×6)",
                "quantity": "×1"
              },
              {
                "name": "- Red Pooja Cloth (×1)",
                "quantity": "×1"
              },
              {
                "name": "- White Pooja Cloth (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Pooja Aasan (×1)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Sacred Metalware & Vessels",
            "items": [
              {
                "name": "- Sealed Gangajal (100ml)",
                "quantity": "×1"
              },
              {
                "name": "- Steel Kalash (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Brass Kalash (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Steel Pooja Thali (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Steel Bowls (×2)",
                "quantity": "×1"
              },
              {
                "name": "- Pooja Spoon (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Temple Bell (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Brass Diya (×1)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Aroma & Lamps",
            "items": [
              {
                "name": "- Camphor (Kafur) (150g)",
                "quantity": "×1"
              },
              {
                "name": "- Incense Sticks (Agarbatti) (2 Packs)",
                "quantity": "×1"
              },
              {
                "name": "- Premium Dhoop Cone Pack (1 Pack)",
                "quantity": "×1"
              },
              {
                "name": "- Cotton Wicks (×75)",
                "quantity": "×1"
              },
              {
                "name": "- Clay Diyas (×6)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Packaging & Organization",
            "items": [
              {
                "name": "- Mishri (Sugar Candy) (100g)",
                "quantity": "×1"
              },
              {
                "name": "- Batasha (Sugar Drops) (100g)",
                "quantity": "×1"
              },
              {
                "name": "- Red Cloth Pouch (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Zip Pouches for organization (×5)",
                "quantity": "×1"
              },
              {
                "name": "- Kashi Prasad Instruction Card (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Premium Gift Box (×1)",
                "quantity": "×1"
              }
            ]
          }
        ]
      },
      {
        "id": "variant-premium-kit",
        "name": "Premium Kit",
        "price": 4999,
        "mrp": 9999,
        "badge": "Luxury Altar Collection",
        "suitableFor": "8–15 People",
        "description": "The ultimate Shiva Abhishekam collection. Features heavy copper lota/spoon, premium brassware, conch Shankh, copper Shiva Yantra, natural Kesar, pure Pooja Ittar, a large Nepal Panchmukhi Rudraksha, and a reusable wooden pooja box.",
        "keyHighlights": [
          "Everything in Standard included",
          "Large Brass Kalash & large Brass Diya",
          "Authentic blowing Shankh (Conch)",
          "Copper Lota & Copper Pooja Spoon",
          "Premium copper-etched Shiva Yantra",
          "Nepal Panchmukhi Rudraksha & premium Japa Mala",
          "Kesar (2g), Pooja Ittar & wooden storage box"
        ],
        "samagriChecklist": [
          {
            "category": "Murtis, Photos & Books",
            "items": [
              {
                "name": "- Lord Shiva Photo (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Lord Ganesh Photo (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Rudrabhishek Pooja Vidhi Book (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Mahamrityunjaya Mantra Card (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Bel Patra Symbolic Card (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Premium Shiva Yantra (Copper-etched) (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Large Nepal Panchmukhi Rudraksha (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Premium Rudraksha Japa Mala (108 beads) (×1)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Sacred Ingredients & Herbs",
            "items": [
              {
                "name": "- Roli (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Haldi (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Kumkum (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Chandan Powder (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Premium Chandan (50g)",
                "quantity": "×1"
              },
              {
                "name": "- Bhasma / Vibhuti (Sacred Ash) (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Shiva Tilak Pack (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Pure Kesar (Saffron) (2g)",
                "quantity": "×1"
              },
              {
                "name": "- Pooja Ittar (Fragrance) (1 Bottle)",
                "quantity": "×1"
              },
              {
                "name": "- Akshat Rice (100g)",
                "quantity": "×1"
              },
              {
                "name": "- Supari (×32)",
                "quantity": "×1"
              },
              {
                "name": "- Cloves (×20)",
                "quantity": "×1"
              },
              {
                "name": "- Cardamom (×20)",
                "quantity": "×1"
              },
              {
                "name": "- Dry Coconut (×3)",
                "quantity": "×1"
              },
              {
                "name": "- Havan Samagri (250g)",
                "quantity": "×1"
              },
              {
                "name": "- Panchmewa (Dry Fruits) (350g)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Ritual Cloths & Aasans",
            "items": [
              {
                "name": "- Mauli (Raksha Sutra) (×9)",
                "quantity": "×1"
              },
              {
                "name": "- Janeu (Sacred Thread) (×16)",
                "quantity": "×1"
              },
              {
                "name": "- Red Pooja Cloth (×1)",
                "quantity": "×1"
              },
              {
                "name": "- White Pooja Cloth (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Red Chowki Cloth (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Yellow Chowki Cloth (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Pooja Aasan (×1)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Sacred Metalware & Vessels",
            "items": [
              {
                "name": "- Sealed Gangajal (100ml)",
                "quantity": "×1"
              },
              {
                "name": "- Steel Kalash (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Brass Kalash (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Large Brass Kalash (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Steel Pooja Thali (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Premium Pooja Thali (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Steel Bowls (×6)",
                "quantity": "×1"
              },
              {
                "name": "- Pooja Spoon (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Copper Pooja Spoon (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Temple Bell (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Brass Bell (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Vedic Dakshinavarti Shankh (Conch) (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Copper Lota (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Brass Diya (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Large Brass Diya (×1)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Aroma & Lamps",
            "items": [
              {
                "name": "- Camphor (Kafur) (350g)",
                "quantity": "×1"
              },
              {
                "name": "- Incense Sticks (Agarbatti) (2 Packs)",
                "quantity": "×1"
              },
              {
                "name": "- Premium Incense Packs (2 Packs)",
                "quantity": "×1"
              },
              {
                "name": "- Premium Dhoop Cone Pack (1 Pack)",
                "quantity": "×1"
              },
              {
                "name": "- Premium Dhoop Cones Extra (2 Packs)",
                "quantity": "×1"
              },
              {
                "name": "- Cotton Wicks (×175)",
                "quantity": "×1"
              },
              {
                "name": "- Clay Diyas (×16)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Packaging & Organization",
            "items": [
              {
                "name": "- Mishri (Sugar Candy) (350g)",
                "quantity": "×1"
              },
              {
                "name": "- Batasha (Sugar Drops) (350g)",
                "quantity": "×1"
              },
              {
                "name": "- Red Cloth Pouch (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Zip Pouches for organization (×5)",
                "quantity": "×1"
              },
              {
                "name": "- Kashi Prasad Instruction Card (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Complete Checklist Card (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Premium Kashi Prasad Gift Packaging (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Reusable Wooden Storage Box (×1)",
                "quantity": "×1"
              }
            ]
          }
        ]
      }
    ],
    "specifications": [
      {
        "groupName": "Shiva Ritual & Metal Purity",
        "specs": [
          {
            "label": "Rudraksha Authenticity",
            "value": "Genuine Nepal Panchmukhi Rudraksha bead & Japa Mala"
          },
          {
            "label": "Ash Purity",
            "value": "Pure organic Bhasma Vibhuti blessed at Varanasi"
          },
          {
            "label": "Brass Castings",
            "value": "Grade-A solid Brass Kalash, bell & abhishekam diya"
          },
          {
            "label": "Copper lota",
            "value": "99.2% Pure copper lota & spoon for gangajal"
          }
        ]
      },
      {
        "groupName": "Origin & Sourcing",
        "specs": [
          {
            "label": "Compilation Origin",
            "value": "Directly compiled & ritually blessed in Kashi/Varanasi"
          },
          {
            "label": "Non-Perishable Promise",
            "value": "100% guaranteed free of fresh fruits/flowers/milk/curd"
          },
          {
            "label": "Shelf Life",
            "value": "12 Months (camphor, incense, bhasma) / Lifetime (metals/beads)"
          },
          {
            "label": "Net Weight",
            "value": "Basic: ~1.4kg | Standard: ~2.7kg | Premium: ~4.5kg"
          }
        ]
      }
    ],
    "faqs": [
      {
        "q": "Does this kit include Panchamrit ingredients?",
        "a": "No. Adhering to Kashi Prasad's strict e-commerce shipping policy, we never include perishable materials like fresh milk, curd, honey, fresh flowers, or fresh leaves. Instead, we provide premium dry offerings, organic chandan, and sealed holy water, which have long shelf lives and arrive in pristine condition."
      },
      {
        "q": "What kind of Rudraksha is included in the kits?",
        "a": "The Basic kit contains an authentic Varanasi-energized Rudraksha bead. The Standard kit includes a hand-knotted Rudraksha Japa Mala (108 beads). The Premium kit features a large, selected Nepal Panchmukhi Rudraksha bead along with a premium hand-knotted Rudraksha Japa Mala for daily meditation."
      },
      {
        "q": "How is the Ganges water collected and stored?",
        "a": "The Gangajal is collected mid-stream from the Ganges in Varanasi during the early morning hours to guarantee the highest spiritual vibrations. It is stored in food-grade, leak-proof sealed containers to retain its purity during transit."
      },
      {
        "q": "Is there a Shiva Yantra included?",
        "a": "Yes. The Standard kit includes an energized brass-plated Shiva Yantra. The Premium kit features a heavy copper-etched Shiva Yantra that represents the absolute geometry of cosmic energies for home altars."
      }
    ],
    "shippingGuarantee": "**Divine Shiva Abhishekam Dispatch Direct from Varanasi**\n\nEvery order is packaged with utmost care and dispatched from Varanasi within 24 hours. We offer free cash on delivery across India.",
    "isPlaceholder": false
  },
  {
    "id": "pk-lakshmi-pooja-kit",
    "slug": "lakshmi-pooja-kit",
    "name": "Lakshmi Pooja Kit",
    "category": "Puja Kits",
    "image": "/assets/puja-kits/06-lakshmi-pooja-kit.jpg",
    "badge": "Best Seller",
    "rating": 4.9,
    "reviewCount": 524,
    "tagline": "Complete Wealth & Prosperity Altar Samagri",
    "shortDescription": "A premium collection of authentic, non-perishable Lakshmi and Kuber Puja items sourced from Varanasi. Blessed under priest supervision, ideal for Diwali, Varalakshmi, or daily altars.",
    "detailedOverview": [
      "Invite wealth, wisdom, and auspicious vibrations into your household. The Kashi Prasad Lakshmi Pooja Kit is a luxurious, hand-compiled collection of authentic ritual materials sourced directly from Varanasi. Curated under the expert guidance of veteran Kashi temple priests, this kit ensures your daily prayers, Varalakshmi Vratam, or grand Diwali Laxmi-Ganesh Puja are performed with absolute Vedic correctness.",
      "Adhering to our strict non-perishable e-commerce shipping policy, this kit contains zero perishable items such as fresh flowers, banana leaves, milk, curd, honey, or fresh coconuts. In their place, we provide mature dry whole coconuts, natural Gomti Chakras, white Cowrie shells, pure chandan powder, organic incense, and sweet batasha. All ingredients are packed in air-tight pouches to ensure maximum longevity.",
      "Choose from three custom configurations. The Basic kit contains all essential samagri, guide books, Ganga water, 11 Gomti Chakras, and 11 Cowrie shells. The Standard kit adds brass vessels, a pooja thali, a bell, brass-plated Lakshmi and Kuber Yantras, and 2 brass diyas. The Premium kit offers the ultimate set with copper lota/spoon, heavy brassware, pure Kesar, 21 Gomti Chakras/Cowries, 21 clay diyas, and a reusable wooden storage box."
    ],
    "tags": [
      "Lakshmi Puja",
      "Pooja Kit",
      "Varanasi Sourced",
      "Kashi Prasad",
      "Home Pooja Kit",
      "Diwali Puja Kit",
      "Wealth & Prosperity"
    ],
    "price": 1899,
    "mrp": 3799,
    "variants": [
      {
        "id": "variant-basic-kit",
        "name": "Basic Kit",
        "price": 1899,
        "mrp": 3799,
        "badge": "Essential Altar Set",
        "suitableFor": "2–4 People",
        "description": "Contains all core non-perishable samagri, Lakshmi/Ganesh photos, 11 Gomti Chakras, 11 Cowries, guide books, and clay diyas for basic family prayers.",
        "keyHighlights": [
          "Goddess Lakshmi & Ganesh photos & Aarti Card",
          "Lakshmi Pooja Vidhi Book & Gangajal (100ml)",
          "Gomti Chakras (11 pcs) & Cowrie Shells (11 pcs)",
          "Roli, Haldi, Kumkum, Chandan & Akshat rice",
          "Supari (11 pcs), Cloves & Cardamom (20 pcs each)",
          "Steel Kalash, clay diyas (11 pcs) & Red/Yellow cloths"
        ],
        "samagriChecklist": [
          {
            "category": "Murtis, Photos & Books",
            "items": [
              {
                "name": "- Goddess Lakshmi Photo (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Lord Ganesha Photo (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Lakshmi Pooja Vidhi Book (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Lakshmi Aarti Card (×1)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Sacred Ingredients & Herbs",
            "items": [
              {
                "name": "- Roli (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Haldi (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Kumkum (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Chandan Powder (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Akshat Rice (100g)",
                "quantity": "×1"
              },
              {
                "name": "- Gomti Chakras (×11)",
                "quantity": "×1"
              },
              {
                "name": "- Cowrie Shells (×11)",
                "quantity": "×1"
              },
              {
                "name": "- Supari (×11)",
                "quantity": "×1"
              },
              {
                "name": "- Cloves (×20)",
                "quantity": "×1"
              },
              {
                "name": "- Cardamom (×20)",
                "quantity": "×1"
              },
              {
                "name": "- Dry Coconut (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Panchmewa (Dry Fruits) (100g)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Ritual Cloths & Aasans",
            "items": [
              {
                "name": "- Mauli (Raksha Sutra) (×2)",
                "quantity": "×1"
              },
              {
                "name": "- Janeu (Sacred Thread) (×2)",
                "quantity": "×1"
              },
              {
                "name": "- Red Pooja Cloth (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Yellow Pooja Cloth (×1)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Sacred Metalware & Vessels",
            "items": [
              {
                "name": "- Sealed Gangajal (100ml)",
                "quantity": "×1"
              },
              {
                "name": "- Steel Kalash (×1)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Aroma & Lamps",
            "items": [
              {
                "name": "- Camphor (Kafur) (50g)",
                "quantity": "×1"
              },
              {
                "name": "- Incense Sticks (Agarbatti) (1 Pack)",
                "quantity": "×1"
              },
              {
                "name": "- Dhoop Cone Pack (1 Pack)",
                "quantity": "×1"
              },
              {
                "name": "- Cotton Wicks (×25)",
                "quantity": "×1"
              },
              {
                "name": "- Clay Diyas (×11)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Packaging & Organization",
            "items": [
              {
                "name": "- Mishri (Sugar Candy) (100g)",
                "quantity": "×1"
              },
              {
                "name": "- Batasha (Sugar Drops) (100g)",
                "quantity": "×1"
              }
            ]
          }
        ]
      },
      {
        "id": "variant-standard-kit",
        "name": "Standard Kit",
        "price": 2999,
        "mrp": 5999,
        "badge": "Best Seller • Recommended",
        "suitableFor": "4–8 People",
        "description": "Adds brass kalash, steel thali, brass-plated Lakshmi and Kuber Yantras, 2 brass diyas, bell, aasan, and custom organization bags.",
        "keyHighlights": [
          "Everything in Basic included",
          "Upgraded Brass Kalash & Brass Diyas (×2)",
          "Steel Pooja Thali, Bowls & Bell",
          "Lakshmi Yantra & Kuber Yantra (Brass-plated)",
          "Pooja Aasan, Premium Chandan & organic wicks (75 pcs)",
          "Red Cloth Pouch, organizing zip bags & Premium Gift Box"
        ],
        "samagriChecklist": [
          {
            "category": "Murtis, Photos & Books",
            "items": [
              {
                "name": "- Goddess Lakshmi Photo (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Lord Ganesha Photo (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Lakshmi Pooja Vidhi Book (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Lakshmi Aarti Card (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Lakshmi Yantra (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Kuber Yantra (×1)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Sacred Ingredients & Herbs",
            "items": [
              {
                "name": "- Roli (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Haldi (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Kumkum (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Chandan Powder (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Premium Chandan (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Akshat Rice (100g)",
                "quantity": "×1"
              },
              {
                "name": "- Gomti Chakras (×11)",
                "quantity": "×1"
              },
              {
                "name": "- Cowrie Shells (×11)",
                "quantity": "×1"
              },
              {
                "name": "- Supari (×11)",
                "quantity": "×1"
              },
              {
                "name": "- Cloves (×20)",
                "quantity": "×1"
              },
              {
                "name": "- Cardamom (×20)",
                "quantity": "×1"
              },
              {
                "name": "- Dry Coconut (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Panchmewa (Dry Fruits) (100g)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Ritual Cloths & Aasans",
            "items": [
              {
                "name": "- Mauli (Raksha Sutra) (×4)",
                "quantity": "×1"
              },
              {
                "name": "- Janeu (Sacred Thread) (×6)",
                "quantity": "×1"
              },
              {
                "name": "- Red Pooja Cloth (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Yellow Pooja Cloth (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Pooja Aasan (×1)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Sacred Metalware & Vessels",
            "items": [
              {
                "name": "- Sealed Gangajal (100ml)",
                "quantity": "×1"
              },
              {
                "name": "- Steel Kalash (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Brass Kalash (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Steel Pooja Thali (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Steel Bowls (×2)",
                "quantity": "×1"
              },
              {
                "name": "- Pooja Spoon (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Temple Bell (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Brass Diya (×2)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Aroma & Lamps",
            "items": [
              {
                "name": "- Camphor (Kafur) (150g)",
                "quantity": "×1"
              },
              {
                "name": "- Incense Sticks (Agarbatti) (2 Packs)",
                "quantity": "×1"
              },
              {
                "name": "- Premium Dhoop Cone Pack (1 Pack)",
                "quantity": "×1"
              },
              {
                "name": "- Cotton Wicks (×75)",
                "quantity": "×1"
              },
              {
                "name": "- Clay Diyas (×11)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Packaging & Organization",
            "items": [
              {
                "name": "- Mishri (Sugar Candy) (100g)",
                "quantity": "×1"
              },
              {
                "name": "- Batasha (Sugar Drops) (100g)",
                "quantity": "×1"
              },
              {
                "name": "- Red Cloth Pouch (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Zip Pouches for organization (×5)",
                "quantity": "×1"
              },
              {
                "name": "- Kashi Prasad Instruction Card (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Premium Gift Box (×1)",
                "quantity": "×1"
              }
            ]
          }
        ]
      },
      {
        "id": "variant-premium-kit",
        "name": "Premium Kit",
        "price": 4899,
        "mrp": 9799,
        "badge": "Luxury Altar Collection",
        "suitableFor": "8–15 People",
        "description": "The ultimate abundance collection. Features heavy copper lota/spoon, premium brassware, copper-etched Lakshmi and Kuber Yantras, pure Kesar, natural Pooja Ittar, 21 Gomti Chakras/Cowries, 21 clay diyas, and a reusable wooden storage box.",
        "keyHighlights": [
          "Everything in Standard included",
          "Large Brass Kalash & large Brass Diyas (×2)",
          "Copper Lota & Copper Pooja Spoon",
          "Premium Copper-etched Lakshmi Yantra & Kuber Yantra",
          "Gomti Chakras (21) & Cowrie Shells (21)",
          "Kesar (2g), Pooja Ittar, 21 Clay Diyas & wooden box"
        ],
        "samagriChecklist": [
          {
            "category": "Murtis, Photos & Books",
            "items": [
              {
                "name": "- Goddess Lakshmi Photo (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Lord Ganesha Photo (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Lakshmi Pooja Vidhi Book (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Lakshmi Aarti Card (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Premium Lakshmi Yantra (Copper-etched) (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Premium Kuber Yantra (Copper-etched) (×1)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Sacred Ingredients & Herbs",
            "items": [
              {
                "name": "- Roli (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Haldi (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Kumkum (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Chandan Powder (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Premium Chandan (50g)",
                "quantity": "×1"
              },
              {
                "name": "- Pure Kesar (Saffron) (2g)",
                "quantity": "×1"
              },
              {
                "name": "- Pooja Ittar (Fragrance) (1 Bottle)",
                "quantity": "×1"
              },
              {
                "name": "- Akshat Rice (100g)",
                "quantity": "×1"
              },
              {
                "name": "- Gomti Chakras (×21)",
                "quantity": "×1"
              },
              {
                "name": "- Cowrie Shells (×21)",
                "quantity": "×1"
              },
              {
                "name": "- Supari (×32)",
                "quantity": "×1"
              },
              {
                "name": "- Cloves (×20)",
                "quantity": "×1"
              },
              {
                "name": "- Cardamom (×20)",
                "quantity": "×1"
              },
              {
                "name": "- Dry Coconut (×3)",
                "quantity": "×1"
              },
              {
                "name": "- Panchmewa (Dry Fruits) (350g)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Ritual Cloths & Aasans",
            "items": [
              {
                "name": "- Mauli (Raksha Sutra) (×9)",
                "quantity": "×1"
              },
              {
                "name": "- Janeu (Sacred Thread) (×16)",
                "quantity": "×1"
              },
              {
                "name": "- Red Pooja Cloth (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Yellow Pooja Cloth (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Red Chowki Cloth (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Yellow Chowki Cloth (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Pooja Aasan (×1)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Sacred Metalware & Vessels",
            "items": [
              {
                "name": "- Sealed Gangajal (100ml)",
                "quantity": "×1"
              },
              {
                "name": "- Steel Kalash (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Brass Kalash (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Large Brass Kalash (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Steel Pooja Thali (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Premium Pooja Thali (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Steel Bowls (×6)",
                "quantity": "×1"
              },
              {
                "name": "- Pooja Spoon (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Copper Spoon (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Temple Bell (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Brass Bell (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Copper Lota (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Brass Diya (×2)",
                "quantity": "×1"
              },
              {
                "name": "- Large Brass Diya (×2)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Aroma & Lamps",
            "items": [
              {
                "name": "- Camphor (Kafur) (350g)",
                "quantity": "×1"
              },
              {
                "name": "- Incense Sticks (Agarbatti) (2 Packs)",
                "quantity": "×1"
              },
              {
                "name": "- Premium Incense Packs (2 Packs)",
                "quantity": "×1"
              },
              {
                "name": "- Premium Dhoop Cone Pack (1 Pack)",
                "quantity": "×1"
              },
              {
                "name": "- Premium Dhoop Cones Extra (2 Packs)",
                "quantity": "×1"
              },
              {
                "name": "- Cotton Wicks (×175)",
                "quantity": "×1"
              },
              {
                "name": "- Clay Diyas (×32)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Packaging & Organization",
            "items": [
              {
                "name": "- Mishri (Sugar Candy) (350g)",
                "quantity": "×1"
              },
              {
                "name": "- Batasha (Sugar Drops) (350g)",
                "quantity": "×1"
              },
              {
                "name": "- Red Cloth Pouch (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Zip Pouches for organization (×5)",
                "quantity": "×1"
              },
              {
                "name": "- Kashi Prasad Instruction Card (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Complete Checklist Card (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Premium Kashi Prasad Gift Packaging (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Reusable Wooden Storage Box (×1)",
                "quantity": "×1"
              }
            ]
          }
        ]
      }
    ],
    "specifications": [
      {
        "groupName": "Abundance & Metal Purity",
        "specs": [
          {
            "label": "Yantras Metal",
            "value": "Premium etched Copper Lakshmi & Kuber Yantras"
          },
          {
            "label": "Brass Castings",
            "value": "Grade-A solid Brass Kalash, bell & abundance diyas"
          },
          {
            "label": "Copper Vessels",
            "value": "99.2% Pure copper lota & spoon for gangajal"
          },
          {
            "label": "Altar Cloths",
            "value": "Luxury soft silk with gilded gold zari embroidery"
          }
        ]
      },
      {
        "groupName": "Origin & Sourcing",
        "specs": [
          {
            "label": "Compilation Origin",
            "value": "Holy city of Kashi under priest supervision"
          },
          {
            "label": "Sourcing Sincerity",
            "value": "100% Sourced & blessed in Varanasi temples"
          },
          {
            "label": "Non-Perishable Promise",
            "value": "Guaranteed free of fresh fruits/flowers/milk/curd"
          },
          {
            "label": "Net Weight",
            "value": "Basic: ~1.4kg | Standard: ~2.8kg | Premium: ~4.6kg"
          }
        ]
      }
    ],
    "faqs": [
      {
        "q": "Are the Gomti Chakras and Cowrie shells real?",
        "a": "Yes. Every single Gomti Chakra and white Cowrie shell in our Lakshmi Pooja Kit is naturally sourced, selected for structural integrity, and energized in Kashi under temple priest guidance to invite wealth and positive energy."
      },
      {
        "q": "Does this kit contain Panchamrit or fresh milk products?",
        "a": "No. Kashi Prasad guarantees 100% non-perishable samagri. We strictly exclude perishables like fresh flowers, mango leaves, betel leaves, milk, curd, or fresh coconuts. In their place, we provide mature dry whole coconuts, premium vacuum-packed dry fruits, organic camphor, and sweet offerings which have long shelf lives."
      },
      {
        "q": "What is the difference between standard and premium Yantras?",
        "a": "The Standard kit includes brass-plated Lakshmi and Kuber Yantras. The Premium kit upgrades these to heavy premium copper-etched Lakshmi and Kuber Yantras, which are mathematically accurate geometric plates energized at Varanasi temples for long-term home altar use."
      },
      {
        "q": "How many clay diyas are included in the variants?",
        "a": "The Basic kit contains 11 clay diyas (auspicious for invoking wealth). The Standard kit includes 2 brass diyas and 11 clay diyas. The Premium kit offers the ultimate set: 2 large brass diyas and 21 clay diyas to illuminate your entire house threshold."
      }
    ],
    "shippingGuarantee": "**Prosperity Dispatch Sourced from Varanasi**\n\nEvery order is packaged with utmost care and dispatched from Varanasi within 24 hours. We offer free cash on delivery across India.",
    "isPlaceholder": false
  },
  {
    "id": "pk-navgraha-pooja-kit",
    "slug": "navgraha-pooja-kit",
    "name": "Navgraha Pooja Kit",
    "category": "Puja Kits",
    "image": "/assets/puja-kits/07-navgraha-pooja-kit.jpg",
    "badge": "Best Seller",
    "rating": 4.9,
    "reviewCount": 318,
    "tagline": "Complete Planetary Alignment & Peace Samagri",
    "shortDescription": "A premium collection of authentic, non-perishable Navgraha Shanti Puja items sourced from Varanasi. Blessed under priest supervision, ideal for planetary pacification and peace.",
    "detailedOverview": [
      "Attain cosmic harmony and neutralize planetary afflictions. The Kashi Prasad Navgraha Pooja Kit is a luxurious, comprehensively compiled collection of authentic Vedic samagri sourced directly from holy Varanasi. Curated under the strict supervision of veteran Kashi temple priests, this kit ensures your Grah Shanti prayers, planetary pacification rituals, or astrological remedies are performed with absolute scriptural correctness.",
      "Adhering to our strict non-perishable e-commerce shipping policy, this kit contains zero perishable items such as fresh flowers, banana leaves, milk, curd, or fresh coconuts. In their place, we provide mature dry whole coconuts, natural Navdhanya grains, organic herbs, pure chandan powder, and sweet batasha. All contents are sealed in air-tight pouches to ensure maximum shelf life and perfect delivery.",
      "Available in three custom configurations. The Basic kit contains all essential herbs, guide books, Ganga water, a Navdhanya grain pack, and 9 clay diyas. The Standard kit adds brass vessels, a pooja thali, a bell, a brass-plated Navgraha Yantra, and a Navgraha Raksha Thread. The Premium kit offers the ultimate set with copper lota/spoon, heavy brassware, pure Kesar, 18 clay diyas, and a reusable wooden storage box."
    ],
    "tags": [
      "Navgraha Puja",
      "Pooja Kit",
      "Varanasi Sourced",
      "Kashi Prasad",
      "Home Pooja Kit",
      "Planetary Peace",
      "Grah Shanti"
    ],
    "price": 1799,
    "mrp": 3599,
    "variants": [
      {
        "id": "variant-basic-kit",
        "name": "Basic Kit",
        "price": 1799,
        "mrp": 3599,
        "badge": "Essential Astrological Set",
        "suitableFor": "2–4 People",
        "description": "Contains all core non-perishable samagri, Navgraha and Ganesh photos, Navdhanya grains, guide books, and 9 clay diyas for planetary peace.",
        "keyHighlights": [
          "Navgraha & Ganesh photos & Mantra Card",
          "Navgraha Pooja Vidhi Book & Gangajal (100ml)",
          "Navdhanya Grain Pack & Navgraha Symbol Card",
          "Roli, Haldi, Kumkum, Chandan & Akshat rice",
          "Supari (11 pcs), Cloves & Cardamom (20 pcs each)",
          "Steel Kalash, clay diyas (9 pcs) & Red/Yellow cloths"
        ],
        "samagriChecklist": [
          {
            "category": "Murtis, Photos & Books",
            "items": [
              {
                "name": "- Navgraha Photo (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Lord Ganesha Photo (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Navgraha Pooja Vidhi Book (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Navgraha Mantra Card (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Navgraha Symbol Card (×1)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Sacred Ingredients & Herbs",
            "items": [
              {
                "name": "- Roli (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Haldi (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Kumkum (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Chandan Powder (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Akshat Rice (100g)",
                "quantity": "×1"
              },
              {
                "name": "- Navdhanya Pack (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Supari (×11)",
                "quantity": "×1"
              },
              {
                "name": "- Cloves (×20)",
                "quantity": "×1"
              },
              {
                "name": "- Cardamom (×20)",
                "quantity": "×1"
              },
              {
                "name": "- Dry Coconut (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Panchmewa (Dry Fruits) (100g)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Ritual Cloths & Aasans",
            "items": [
              {
                "name": "- Mauli (Raksha Sutra) (×2)",
                "quantity": "×1"
              },
              {
                "name": "- Janeu (Sacred Thread) (×2)",
                "quantity": "×1"
              },
              {
                "name": "- Red Pooja Cloth (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Yellow Pooja Cloth (×1)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Sacred Metalware & Vessels",
            "items": [
              {
                "name": "- Sealed Gangajal (100ml)",
                "quantity": "×1"
              },
              {
                "name": "- Steel Kalash (×1)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Aroma & Lamps",
            "items": [
              {
                "name": "- Camphor (Kafur) (50g)",
                "quantity": "×1"
              },
              {
                "name": "- Incense Sticks (Agarbatti) (1 Pack)",
                "quantity": "×1"
              },
              {
                "name": "- Dhoop Cone Pack (1 Pack)",
                "quantity": "×1"
              },
              {
                "name": "- Cotton Wicks (×25)",
                "quantity": "×1"
              },
              {
                "name": "- Clay Diyas (×9)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Packaging & Organization",
            "items": [
              {
                "name": "- Mishri (Sugar Candy) (100g)",
                "quantity": "×1"
              },
              {
                "name": "- Batasha (Sugar Drops) (100g)",
                "quantity": "×1"
              }
            ]
          }
        ]
      },
      {
        "id": "variant-standard-kit",
        "name": "Standard Kit",
        "price": 2799,
        "mrp": 5599,
        "badge": "Best Seller • Recommended",
        "suitableFor": "4–8 People",
        "description": "Adds brass kalash, steel thali, brass-plated Navgraha Yantra, 1 brass diya, bell, aasan, Navgraha Raksha Thread, and custom organization bags.",
        "keyHighlights": [
          "Everything in Basic included",
          "Upgraded Brass Kalash & Brass Diya (×1)",
          "Steel Pooja Thali, Bowls & Bell",
          "Navgraha Yantra (Brass-plated) & Navgraha Raksha Thread",
          "Pooja Aasan, Premium Chandan & organic wicks (75 pcs)",
          "Red Cloth Pouch, organizing zip bags & Premium Gift Box"
        ],
        "samagriChecklist": [
          {
            "category": "Murtis, Photos & Books",
            "items": [
              {
                "name": "- Navgraha Photo (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Lord Ganesha Photo (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Navgraha Pooja Vidhi Book (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Navgraha Mantra Card (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Navgraha Symbol Card (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Navgraha Yantra (×1)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Sacred Ingredients & Herbs",
            "items": [
              {
                "name": "- Roli (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Haldi (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Kumkum (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Chandan Powder (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Premium Chandan (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Akshat Rice (100g)",
                "quantity": "×1"
              },
              {
                "name": "- Navdhanya Pack (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Supari (×11)",
                "quantity": "×1"
              },
              {
                "name": "- Cloves (×20)",
                "quantity": "×1"
              },
              {
                "name": "- Cardamom (×20)",
                "quantity": "×1"
              },
              {
                "name": "- Dry Coconut (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Panchmewa (Dry Fruits) (100g)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Ritual Cloths & Aasans",
            "items": [
              {
                "name": "- Mauli (Raksha Sutra) (×4)",
                "quantity": "×1"
              },
              {
                "name": "- Janeu (Sacred Thread) (×6)",
                "quantity": "×1"
              },
              {
                "name": "- Red Pooja Cloth (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Yellow Pooja Cloth (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Pooja Aasan (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Navgraha Raksha Thread (×1)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Sacred Metalware & Vessels",
            "items": [
              {
                "name": "- Sealed Gangajal (100ml)",
                "quantity": "×1"
              },
              {
                "name": "- Steel Kalash (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Brass Kalash (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Steel Pooja Thali (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Steel Bowls (×2)",
                "quantity": "×1"
              },
              {
                "name": "- Pooja Spoon (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Temple Bell (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Brass Diya (×1)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Aroma & Lamps",
            "items": [
              {
                "name": "- Camphor (Kafur) (150g)",
                "quantity": "×1"
              },
              {
                "name": "- Incense Sticks (Agarbatti) (2 Packs)",
                "quantity": "×1"
              },
              {
                "name": "- Premium Dhoop Cone Pack (1 Pack)",
                "quantity": "×1"
              },
              {
                "name": "- Cotton Wicks (×75)",
                "quantity": "×1"
              },
              {
                "name": "- Clay Diyas (×9)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Packaging & Organization",
            "items": [
              {
                "name": "- Mishri (Sugar Candy) (100g)",
                "quantity": "×1"
              },
              {
                "name": "- Batasha (Sugar Drops) (100g)",
                "quantity": "×1"
              },
              {
                "name": "- Red Cloth Pouch (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Zip Pouches for organization (×5)",
                "quantity": "×1"
              },
              {
                "name": "- Kashi Prasad Instruction Card (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Premium Gift Box (×1)",
                "quantity": "×1"
              }
            ]
          }
        ]
      },
      {
        "id": "variant-premium-kit",
        "name": "Premium Kit",
        "price": 4699,
        "mrp": 9399,
        "badge": "Luxury Altar Collection",
        "suitableFor": "8–15 People",
        "description": "The ultimate cosmic pacification collection. Features heavy copper lota/spoon, premium brassware, copper-etched Navgraha Yantra, pure Kesar, natural Pooja Ittar, 18 clay diyas, and a reusable wooden storage box.",
        "keyHighlights": [
          "Everything in Standard included",
          "Large Brass Kalash & large Brass Diya (×1)",
          "Copper Lota & Copper Pooja Spoon",
          "Premium Copper-etched Navgraha Yantra",
          "Kesar (2g), Pooja Ittar, 18 Clay Diyas & wooden box",
          "Reusable Wooden Storage Box & Complete Checklist Card"
        ],
        "samagriChecklist": [
          {
            "category": "Murtis, Photos & Books",
            "items": [
              {
                "name": "- Navgraha Photo (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Lord Ganesha Photo (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Navgraha Pooja Vidhi Book (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Navgraha Mantra Card (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Navgraha Symbol Card (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Premium Navgraha Yantra (Copper-etched) (×1)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Sacred Ingredients & Herbs",
            "items": [
              {
                "name": "- Roli (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Haldi (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Kumkum (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Chandan Powder (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Premium Chandan (50g)",
                "quantity": "×1"
              },
              {
                "name": "- Pure Kesar (Saffron) (2g)",
                "quantity": "×1"
              },
              {
                "name": "- Pooja Ittar (Fragrance) (1 Bottle)",
                "quantity": "×1"
              },
              {
                "name": "- Akshat Rice (100g)",
                "quantity": "×1"
              },
              {
                "name": "- Navdhanya Pack (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Supari (×32)",
                "quantity": "×1"
              },
              {
                "name": "- Cloves (×20)",
                "quantity": "×1"
              },
              {
                "name": "- Cardamom (×20)",
                "quantity": "×1"
              },
              {
                "name": "- Dry Coconut (×3)",
                "quantity": "×1"
              },
              {
                "name": "- Panchmewa (Dry Fruits) (350g)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Ritual Cloths & Aasans",
            "items": [
              {
                "name": "- Mauli (Raksha Sutra) (×9)",
                "quantity": "×1"
              },
              {
                "name": "- Janeu (Sacred Thread) (×16)",
                "quantity": "×1"
              },
              {
                "name": "- Red Pooja Cloth (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Yellow Pooja Cloth (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Red Chowki Cloth (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Yellow Chowki Cloth (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Pooja Aasan (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Navgraha Raksha Thread (×1)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Sacred Metalware & Vessels",
            "items": [
              {
                "name": "- Sealed Gangajal (100ml)",
                "quantity": "×1"
              },
              {
                "name": "- Steel Kalash (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Brass Kalash (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Large Brass Kalash (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Steel Pooja Thali (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Premium Pooja Thali (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Steel Bowls (×6)",
                "quantity": "×1"
              },
              {
                "name": "- Pooja Spoon (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Copper Spoon (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Temple Bell (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Brass Bell (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Copper Lota (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Brass Diya (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Large Brass Diya (×1)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Aroma & Lamps",
            "items": [
              {
                "name": "- Camphor (Kafur) (350g)",
                "quantity": "×1"
              },
              {
                "name": "- Incense Sticks (Agarbatti) (2 Packs)",
                "quantity": "×1"
              },
              {
                "name": "- Premium Incense Packs (2 Packs)",
                "quantity": "×1"
              },
              {
                "name": "- Premium Dhoop Cone Pack (1 Pack)",
                "quantity": "×1"
              },
              {
                "name": "- Premium Dhoop Cones Extra (2 Packs)",
                "quantity": "×1"
              },
              {
                "name": "- Cotton Wicks (×175)",
                "quantity": "×1"
              },
              {
                "name": "- Clay Diyas (×27)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Packaging & Organization",
            "items": [
              {
                "name": "- Mishri (Sugar Candy) (350g)",
                "quantity": "×1"
              },
              {
                "name": "- Batasha (Sugar Drops) (350g)",
                "quantity": "×1"
              },
              {
                "name": "- Red Cloth Pouch (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Zip Pouches for organization (×5)",
                "quantity": "×1"
              },
              {
                "name": "- Kashi Prasad Instruction Card (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Complete Checklist Card (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Premium Kashi Prasad Gift Packaging (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Reusable Wooden Storage Box (×1)",
                "quantity": "×1"
              }
            ]
          }
        ]
      }
    ],
    "specifications": [
      {
        "groupName": "Planetary Peace & Metal Purity",
        "specs": [
          {
            "label": "Yantras Metal",
            "value": "Premium etched Copper Navgraha Yantra"
          },
          {
            "label": "Brass Castings",
            "value": "Grade-A solid Brass Kalash, bell & shanti diya"
          },
          {
            "label": "Copper Vessels",
            "value": "99.2% Pure copper lota & spoon for gangajal"
          },
          {
            "label": "Grains Origin",
            "value": "Naturally harvested Navdhanya grains from Varanasi"
          }
        ]
      },
      {
        "groupName": "Origin & Sourcing",
        "specs": [
          {
            "label": "Compilation Origin",
            "value": "Holy city of Kashi under priest supervision"
          },
          {
            "label": "Sourcing Sincerity",
            "value": "100% Sourced & energized in Varanasi temples"
          },
          {
            "label": "Non-Perishable Promise",
            "value": "Guaranteed free of fresh fruits/flowers/milk/curd"
          },
          {
            "label": "Net Weight",
            "value": "Basic: ~1.4kg | Standard: ~2.8kg | Premium: ~4.6kg"
          }
        ]
      }
    ],
    "faqs": [
      {
        "q": "What is Navdhanya and why is it included?",
        "a": "Navdhanya represents the nine grains associated with the nine planetary deities (Navgrahas). Sourced from fertile plains around Varanasi, they are offered during the puja to appease cosmic influences and balance astrological transits in your chart."
      },
      {
        "q": "Are the Yantras included in this kit authentic?",
        "a": "Yes. The Standard kit includes an energized brass-plated Navgraha Yantra, and the Premium kit upgrades this to a premium heavy copper-etched Navgraha Yantra. Both are ritually purified and energized in Varanasi temples by Vedic scholars."
      },
      {
        "q": "Does this kit contain any fresh leaves or perishable foods?",
        "a": "No. Under Kashi Prasad's shipping guidelines, we never ship perishable items like fresh banana leaves, mango leaves, fresh flowers, milk, or curd. We provide dried whole coconut, organic herbs, vacuum-sealed grains, and natural sweet offerings that are guaranteed to stay fresh for months."
      },
      {
        "q": "How many diyas are included in the Navgraha variants?",
        "a": "The Basic kit includes 9 clay diyas (one for each planetary deity). The Standard kit adds 1 brass diya and 9 clay diyas. The Premium kit features a large brass diya along with 18 clay diyas to perform full planetary alignment aarti."
      }
    ],
    "shippingGuarantee": "**Planetary Harmony Dispatch Sourced from Varanasi**\n\nEvery order is packaged with utmost care and dispatched from Varanasi within 24 hours. We offer free cash on delivery across India.",
    "isPlaceholder": false
  },
  {
    "id": "pk-ganesh-pooja-kit",
    "slug": "ganesh-pooja-kit",
    "name": "Ganesh Pooja Kit",
    "category": "Puja Kits",
    "image": "/assets/puja-kits/04-ganesh-pooja-kit.jpg",
    "badge": "Best Seller",
    "rating": 4.9,
    "reviewCount": 362,
    "tagline": "Complete Obstacle Removal & Wisdom Samagri",
    "shortDescription": "A premium collection of authentic, non-perishable Ganesh Puja items sourced from Varanasi. Blessed under priest supervision, ideal for Ganesh Chaturthi, home entry, or daily altar prayers.",
    "detailedOverview": [
      "Remove all obstacles and invite wisdom, prosperity, and peace into your home. The Kashi Prasad Ganesh Pooja Kit is a luxurious, hand-compiled collection of authentic ritual materials sourced directly from Varanasi. Curated under the expert guidance of veteran Kashi temple priests, this kit ensures your daily prayers, Ganesh Chaturthi celebrations, or housewarming Ganesha pujas are performed with absolute Vedic correctness.",
      "Adhering to our strict non-perishable e-commerce shipping policy, this kit contains zero perishable items such as fresh flowers, mango leaves, betel leaves, fresh milk, curd, honey, or fresh coconuts. In their place, we provide mature dry whole coconuts, a priest-energized symbolic Durva Grass card, pure chandan powder, organic incense, and sweet batasha. All ingredients are packed in air-tight pouches to ensure maximum shelf life and perfect delivery.",
      "Choose from three custom configurations. The Basic kit contains all essential samagri, guide books, Ganga water, 11 clay diyas, and the symbolic Durva Grass card. The Standard kit adds brass vessels, a pooja thali, a bell, a brass-plated Ganesh Yantra, and a Ganesh Raksha Thread. The Premium kit offers the ultimate set with copper lota/spoon, heavy brassware, pure Kesar, 21 clay diyas, and a reusable wooden storage box."
    ],
    "tags": [
      "Ganesh Puja",
      "Pooja Kit",
      "Varanasi Sourced",
      "Kashi Prasad",
      "Home Pooja Kit",
      "Ganesh Chaturthi",
      "Obstacle Removal"
    ],
    "price": 1699,
    "mrp": 3399,
    "variants": [
      {
        "id": "variant-basic-kit",
        "name": "Basic Kit",
        "price": 1699,
        "mrp": 3399,
        "badge": "Essential Obstacle Removal",
        "suitableFor": "2–4 People",
        "description": "Contains all core non-perishable samagri, Ganesh photo, symbolic Durva Grass card, guide books, and clay diyas for basic family prayers.",
        "keyHighlights": [
          "Lord Ganesha Photo & Aarti Card",
          "Ganesh Pooja Vidhi Book & Gangajal (100ml)",
          "Durva Grass Symbolic Card & Akshat Rice (100g)",
          "Roli, Haldi, Kumkum, Chandan & Akshat rice",
          "Supari (11 pcs), Cloves & Cardamom (20 pcs each)",
          "Steel Kalash, clay diyas (11 pcs) & Red/Yellow cloths"
        ],
        "samagriChecklist": [
          {
            "category": "Murtis, Photos & Books",
            "items": [
              {
                "name": "- Lord Ganesha Photo (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Ganesh Pooja Vidhi Book (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Ganesh Aarti Card (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Durva Grass Symbolic Card (×1)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Sacred Ingredients & Herbs",
            "items": [
              {
                "name": "- Roli (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Haldi (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Kumkum (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Chandan Powder (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Akshat Rice (100g)",
                "quantity": "×1"
              },
              {
                "name": "- Supari (×11)",
                "quantity": "×1"
              },
              {
                "name": "- Cloves (×20)",
                "quantity": "×1"
              },
              {
                "name": "- Cardamom (×20)",
                "quantity": "×1"
              },
              {
                "name": "- Dry Coconut (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Panchmewa (Dry Fruits) (100g)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Ritual Cloths & Aasans",
            "items": [
              {
                "name": "- Mauli (Raksha Sutra) (×2)",
                "quantity": "×1"
              },
              {
                "name": "- Janeu (Sacred Thread) (×2)",
                "quantity": "×1"
              },
              {
                "name": "- Red Pooja Cloth (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Yellow Pooja Cloth (×1)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Sacred Metalware & Vessels",
            "items": [
              {
                "name": "- Sealed Gangajal (100ml)",
                "quantity": "×1"
              },
              {
                "name": "- Steel Kalash (×1)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Aroma & Lamps",
            "items": [
              {
                "name": "- Camphor (Kafur) (50g)",
                "quantity": "×1"
              },
              {
                "name": "- Incense Sticks (Agarbatti) (1 Pack)",
                "quantity": "×1"
              },
              {
                "name": "- Dhoop Cone Pack (1 Pack)",
                "quantity": "×1"
              },
              {
                "name": "- Cotton Wicks (×25)",
                "quantity": "×1"
              },
              {
                "name": "- Clay Diyas (×11)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Packaging & Organization",
            "items": [
              {
                "name": "- Mishri (Sugar Candy) (100g)",
                "quantity": "×1"
              },
              {
                "name": "- Batasha (Sugar Drops) (100g)",
                "quantity": "×1"
              }
            ]
          }
        ]
      },
      {
        "id": "variant-standard-kit",
        "name": "Standard Kit",
        "price": 2699,
        "mrp": 5399,
        "badge": "Best Seller • Recommended",
        "suitableFor": "4–8 People",
        "description": "Adds brass kalash, steel thali, brass-plated Ganesh Yantra, 1 brass diya, bell, aasan, Ganesh Raksha Thread, and custom organization bags.",
        "keyHighlights": [
          "Everything in Basic included",
          "Upgraded Brass Kalash & Brass Diya (×1)",
          "Steel Pooja Thali, Bowls (×2) & Bell",
          "Ganesh Yantra (Brass-plated) & Ganesh Raksha Thread",
          "Pooja Aasan, Premium Chandan & organic wicks (75 pcs)",
          "Red Cloth Pouch, organizing zip bags & Premium Gift Box"
        ],
        "samagriChecklist": [
          {
            "category": "Murtis, Photos & Books",
            "items": [
              {
                "name": "- Lord Ganesha Photo (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Ganesh Pooja Vidhi Book (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Ganesh Aarti Card (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Durva Grass Symbolic Card (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Ganesh Yantra (×1)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Sacred Ingredients & Herbs",
            "items": [
              {
                "name": "- Roli (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Haldi (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Kumkum (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Chandan Powder (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Premium Chandan (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Akshat Rice (100g)",
                "quantity": "×1"
              },
              {
                "name": "- Supari (×11)",
                "quantity": "×1"
              },
              {
                "name": "- Cloves (×20)",
                "quantity": "×1"
              },
              {
                "name": "- Cardamom (×20)",
                "quantity": "×1"
              },
              {
                "name": "- Dry Coconut (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Panchmewa (Dry Fruits) (100g)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Ritual Cloths & Aasans",
            "items": [
              {
                "name": "- Mauli (Raksha Sutra) (×4)",
                "quantity": "×1"
              },
              {
                "name": "- Janeu (Sacred Thread) (×6)",
                "quantity": "×1"
              },
              {
                "name": "- Red Pooja Cloth (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Yellow Pooja Cloth (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Pooja Aasan (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Ganesh Raksha Thread (×1)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Sacred Metalware & Vessels",
            "items": [
              {
                "name": "- Sealed Gangajal (100ml)",
                "quantity": "×1"
              },
              {
                "name": "- Steel Kalash (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Brass Kalash (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Steel Pooja Thali (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Steel Bowls (×2)",
                "quantity": "×1"
              },
              {
                "name": "- Pooja Spoon (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Temple Bell (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Brass Diya (×1)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Aroma & Lamps",
            "items": [
              {
                "name": "- Camphor (Kafur) (150g)",
                "quantity": "×1"
              },
              {
                "name": "- Incense Sticks (Agarbatti) (2 Packs)",
                "quantity": "×1"
              },
              {
                "name": "- Premium Dhoop Cone Pack (1 Pack)",
                "quantity": "×1"
              },
              {
                "name": "- Cotton Wicks (×75)",
                "quantity": "×1"
              },
              {
                "name": "- Clay Diyas (×11)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Packaging & Organization",
            "items": [
              {
                "name": "- Mishri (Sugar Candy) (100g)",
                "quantity": "×1"
              },
              {
                "name": "- Batasha (Sugar Drops) (100g)",
                "quantity": "×1"
              },
              {
                "name": "- Red Cloth Pouch (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Zip Pouches for organization (×5)",
                "quantity": "×1"
              },
              {
                "name": "- Kashi Prasad Instruction Card (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Premium Gift Box (×1)",
                "quantity": "×1"
              }
            ]
          }
        ]
      },
      {
        "id": "variant-premium-kit",
        "name": "Premium Kit",
        "price": 4599,
        "mrp": 9199,
        "badge": "Luxury Altar Collection",
        "suitableFor": "8–15 People",
        "description": "The ultimate obstacle-removal collection. Features heavy copper lota/spoon, premium brassware, copper-etched Ganesh Yantra, pure Kesar, natural Pooja Ittar, 21 clay diyas, and a reusable wooden storage box.",
        "keyHighlights": [
          "Everything in Standard included",
          "Large Brass Kalash & large Brass Diya (×1)",
          "Copper Lota & Copper Pooja Spoon",
          "Premium Copper-etched Ganesh Yantra",
          "Kesar (2g), Pooja Ittar, 21 Clay Diyas & wooden box",
          "Reusable Wooden Storage Box & Complete Checklist Card"
        ],
        "samagriChecklist": [
          {
            "category": "Murtis, Photos & Books",
            "items": [
              {
                "name": "- Lord Ganesha Photo (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Ganesh Pooja Vidhi Book (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Ganesh Aarti Card (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Durva Grass Symbolic Card (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Premium Ganesh Yantra (Copper-etched) (×1)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Sacred Ingredients & Herbs",
            "items": [
              {
                "name": "- Roli (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Haldi (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Kumkum (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Chandan Powder (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Premium Chandan (50g)",
                "quantity": "×1"
              },
              {
                "name": "- Pure Kesar (Saffron) (2g)",
                "quantity": "×1"
              },
              {
                "name": "- Pooja Ittar (Fragrance) (1 Bottle)",
                "quantity": "×1"
              },
              {
                "name": "- Akshat Rice (100g)",
                "quantity": "×1"
              },
              {
                "name": "- Supari (×32)",
                "quantity": "×1"
              },
              {
                "name": "- Cloves (×20)",
                "quantity": "×1"
              },
              {
                "name": "- Cardamom (×20)",
                "quantity": "×1"
              },
              {
                "name": "- Dry Coconut (×3)",
                "quantity": "×1"
              },
              {
                "name": "- Panchmewa (Dry Fruits) (350g)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Ritual Cloths & Aasans",
            "items": [
              {
                "name": "- Mauli (Raksha Sutra) (×9)",
                "quantity": "×1"
              },
              {
                "name": "- Janeu (Sacred Thread) (×16)",
                "quantity": "×1"
              },
              {
                "name": "- Red Pooja Cloth (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Yellow Pooja Cloth (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Red Chowki Cloth (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Yellow Chowki Cloth (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Pooja Aasan (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Ganesh Raksha Thread (×1)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Sacred Metalware & Vessels",
            "items": [
              {
                "name": "- Sealed Gangajal (100ml)",
                "quantity": "×1"
              },
              {
                "name": "- Steel Kalash (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Brass Kalash (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Large Brass Kalash (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Steel Pooja Thali (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Premium Pooja Thali (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Steel Bowls (×6)",
                "quantity": "×1"
              },
              {
                "name": "- Pooja Spoon (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Copper Spoon (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Temple Bell (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Brass Bell (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Copper Lota (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Brass Diya (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Large Brass Diya (×1)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Aroma & Lamps",
            "items": [
              {
                "name": "- Camphor (Kafur) (350g)",
                "quantity": "×1"
              },
              {
                "name": "- Incense Sticks (Agarbatti) (2 Packs)",
                "quantity": "×1"
              },
              {
                "name": "- Premium Incense Packs (2 Packs)",
                "quantity": "×1"
              },
              {
                "name": "- Premium Dhoop Cone Pack (1 Pack)",
                "quantity": "×1"
              },
              {
                "name": "- Premium Dhoop Cones Extra (2 Packs)",
                "quantity": "×1"
              },
              {
                "name": "- Cotton Wicks (×175)",
                "quantity": "×1"
              },
              {
                "name": "- Clay Diyas (×21)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Packaging & Organization",
            "items": [
              {
                "name": "- Mishri (Sugar Candy) (350g)",
                "quantity": "×1"
              },
              {
                "name": "- Batasha (Sugar Drops) (350g)",
                "quantity": "×1"
              },
              {
                "name": "- Red Cloth Pouch (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Zip Pouches for organization (×5)",
                "quantity": "×1"
              },
              {
                "name": "- Kashi Prasad Instruction Card (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Complete Checklist Card (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Premium Kashi Prasad Gift Packaging (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Reusable Wooden Storage Box (×1)",
                "quantity": "×1"
              }
            ]
          }
        ]
      }
    ],
    "specifications": [
      {
        "groupName": "Wisdom & Metal Purity",
        "specs": [
          {
            "label": "Yantras Metal",
            "value": "Premium etched Copper Ganesh Yantra"
          },
          {
            "label": "Brass Castings",
            "value": "Grade-A solid Brass Kalash, bell & shanti diya"
          },
          {
            "label": "Copper Vessels",
            "value": "99.2% Pure copper lota & spoon for gangajal"
          },
          {
            "label": "Altar Cloths",
            "value": "Aura silk with hand-woven zari embroidery"
          }
        ]
      },
      {
        "groupName": "Origin & Sourcing",
        "specs": [
          {
            "label": "Compilation Origin",
            "value": "Holy city of Kashi under priest supervision"
          },
          {
            "label": "Sourcing Sincerity",
            "value": "100% Sourced & energized in Varanasi temples"
          },
          {
            "label": "Non-Perishable Promise",
            "value": "Guaranteed free of fresh fruits/flowers/milk/curd/mango leaves"
          },
          {
            "label": "Net Weight",
            "value": "Basic: ~1.4kg | Standard: ~2.8kg | Premium: ~4.6kg"
          }
        ]
      }
    ],
    "faqs": [
      {
        "q": "Does this kit contain modaks or fresh sweets?",
        "a": "No. In accordance with Kashi Prasad's non-perishable shipping guidelines, we do not ship fresh milk sweets like modak or peda. Instead, we provide sealed high-quality dry sweets (batasha and mishri) and dry fruits (panchmewa) in airtight packages which represent the sweet offerings for Ganesha and have long shelf lives."
      },
      {
        "q": "What is the Durva Grass Symbolic Card?",
        "a": "Durva grass is highly sacred to Lord Ganesha but dries out and decays quickly during transit. To ensure your ritual is complete without sending rotten organic waste, we include a beautifully printed, priest-energized Durva Grass Symbolic Card representing this sacred green herb on your altar."
      },
      {
        "q": "What is the difference between standard and premium Ganesh Yantras?",
        "a": "The Standard kit contains a brass-plated Ganesh Yantra. The Premium kit features a heavy copper-etched Ganesh Yantra. Both are mathematically aligned geometric plates energized in Kashi temples to clear obstacles and bring intellect."
      },
      {
        "q": "Are the clay diyas and wicks sufficient for a complete Chaturthi Pooja?",
        "a": "Yes. The Basic kit contains 11 clay diyas. The Standard kit adds 1 brass diya and 11 clay diyas. The Premium kit includes a large brass diya alongside 21 clay diyas and 175 cotton wicks, providing abundant light for multi-day Ganesh Chaturthi prayers."
      }
    ],
    "shippingGuarantee": "**Sacred Ganesha Blessing Dispatch Direct from Varanasi**\n\nEvery order is packaged with utmost care and dispatched from Varanasi within 24 hours. We offer free cash on delivery across India.",
    "isPlaceholder": false
  },
  {
    "id": "pk-durga-pooja-kit",
    "slug": "durga-pooja-kit",
    "name": "Durga Pooja Kit",
    "category": "Puja Kits",
    "image": "/assets/puja-kits/08-durga-pooja-kit.jpg",
    "badge": "Best Seller",
    "rating": 4.9,
    "reviewCount": 348,
    "tagline": "Complete Divine Mother Protection & Victory Samagri",
    "shortDescription": "A premium collection of authentic, non-perishable Durga and Navratri Puja items sourced from Varanasi. Blessed under priest supervision, ideal for Navratri, Durga Puja, or daily altar prayers.",
    "detailedOverview": [
      "Awaken the supreme feminine power of Maa Durga in your home. The Kashi Prasad Durga Pooja Kit is a luxurious, hand-compiled collection of authentic ritual materials sourced directly from holy Varanasi. Curated under the expert guidance of veteran Kashi temple priests, this kit ensures your daily prayers, Navratri Vratam, or grand Durga Puja are performed with absolute Vedic correctness.",
      "Adhering to our strict non-perishable e-commerce shipping policy, this kit contains zero perishable items such as fresh flowers, banana leaves, milk, curd, honey, or fresh coconuts. In their place, we provide mature dry whole coconuts, a red silk Chunari, pure chandan powder, organic incense, and sweet batasha. All ingredients are packed in air-tight pouches to ensure maximum shelf life and perfect delivery.",
      "Choose from three custom configurations. The Basic kit contains all essential samagri, guide books, Ganga water, 11 clay diyas, and a red Chunari. The Standard kit adds brass vessels, a pooja thali, a bell, a brass-plated Durga Yantra, and a premium aasan. The Premium kit offers the ultimate set with copper lota/spoon, heavy brassware, pure Kesar, 21 clay diyas, a luxury hand-embroidered red Chunari, and a reusable wooden storage box."
    ],
    "tags": [
      "Durga Puja",
      "Pooja Kit",
      "Varanasi Sourced",
      "Kashi Prasad",
      "Home Pooja Kit",
      "Navratri Puja Kit",
      "Divine Victory"
    ],
    "price": 1799,
    "mrp": 3599,
    "variants": [
      {
        "id": "variant-basic-kit",
        "name": "Basic Kit",
        "price": 1799,
        "mrp": 3599,
        "badge": "Essential Mother Protection",
        "suitableFor": "2–4 People",
        "description": "Contains all core non-perishable samagri, Maa Durga photo, red Chunari, Durga Chalisa, guide books, and clay diyas for basic Navratri prayers.",
        "keyHighlights": [
          "Maa Durga & Ganesh photos & Aarti Card & Chalisa",
          "Durga Pooja Vidhi Book & Gangajal (100ml)",
          "Red Chunari & Akshat Rice (100g)",
          "Roli, Haldi, Kumkum, Chandan & Akshat rice",
          "Supari (11 pcs), Cloves & Cardamom (20 pcs each)",
          "Steel Kalash, clay diyas (11 pcs) & Red/Yellow cloths"
        ],
        "samagriChecklist": [
          {
            "category": "Murtis, Photos & Books",
            "items": [
              {
                "name": "- Maa Durga Photo (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Lord Ganesha Photo (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Durga Pooja Vidhi Book (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Durga Aarti Card (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Durga Chalisa (×1)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Ritual Cloths & Aasans",
            "items": [
              {
                "name": "- Red Chunari (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Mauli (Raksha Sutra) (×2)",
                "quantity": "×1"
              },
              {
                "name": "- Janeu (Sacred Thread) (×2)",
                "quantity": "×1"
              },
              {
                "name": "- Red Pooja Cloth (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Yellow Pooja Cloth (×1)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Sacred Ingredients & Herbs",
            "items": [
              {
                "name": "- Roli (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Haldi (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Kumkum (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Chandan Powder (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Akshat Rice (100g)",
                "quantity": "×1"
              },
              {
                "name": "- Supari (×11)",
                "quantity": "×1"
              },
              {
                "name": "- Cloves (×20)",
                "quantity": "×1"
              },
              {
                "name": "- Cardamom (×20)",
                "quantity": "×1"
              },
              {
                "name": "- Dry Coconut (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Panchmewa (Dry Fruits) (100g)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Sacred Metalware & Vessels",
            "items": [
              {
                "name": "- Sealed Gangajal (100ml)",
                "quantity": "×1"
              },
              {
                "name": "- Steel Kalash (×1)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Aroma & Lamps",
            "items": [
              {
                "name": "- Camphor (Kafur) (50g)",
                "quantity": "×1"
              },
              {
                "name": "- Incense Sticks (Agarbatti) (1 Pack)",
                "quantity": "×1"
              },
              {
                "name": "- Dhoop Cone Pack (1 Pack)",
                "quantity": "×1"
              },
              {
                "name": "- Cotton Wicks (×25)",
                "quantity": "×1"
              },
              {
                "name": "- Clay Diyas (×11)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Packaging & Organization",
            "items": [
              {
                "name": "- Mishri (Sugar Candy) (100g)",
                "quantity": "×1"
              },
              {
                "name": "- Batasha (Sugar Drops) (100g)",
                "quantity": "×1"
              }
            ]
          }
        ]
      },
      {
        "id": "variant-standard-kit",
        "name": "Standard Kit",
        "price": 2799,
        "mrp": 5599,
        "badge": "Best Seller • Recommended",
        "suitableFor": "4–8 People",
        "description": "Adds brass kalash, steel thali, brass diya, 11 clay diyas, bell, aasan, brass-plated Durga Yantra, and custom organization bags.",
        "keyHighlights": [
          "Everything in Basic included",
          "Upgraded Brass Kalash & Brass Diya (×1)",
          "Steel Pooja Thali, Bowls (×2) & Bell",
          "Durga Yantra (Brass-plated) & Pooja Aasan",
          "Premium Chandan & organic wicks (75 pcs)",
          "Red Cloth Pouch, organizing zip bags & Premium Gift Box"
        ],
        "samagriChecklist": [
          {
            "category": "Murtis, Photos & Books",
            "items": [
              {
                "name": "- Maa Durga Photo (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Lord Ganesha Photo (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Durga Pooja Vidhi Book (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Durga Aarti Card (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Durga Chalisa (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Durga Yantra (×1)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Ritual Cloths & Aasans",
            "items": [
              {
                "name": "- Red Chunari (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Mauli (Raksha Sutra) (×4)",
                "quantity": "×1"
              },
              {
                "name": "- Janeu (Sacred Thread) (×6)",
                "quantity": "×1"
              },
              {
                "name": "- Red Pooja Cloth (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Yellow Pooja Cloth (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Pooja Aasan (×1)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Sacred Ingredients & Herbs",
            "items": [
              {
                "name": "- Roli (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Haldi (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Kumkum (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Chandan Powder (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Premium Chandan (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Akshat Rice (100g)",
                "quantity": "×1"
              },
              {
                "name": "- Supari (×11)",
                "quantity": "×1"
              },
              {
                "name": "- Cloves (×20)",
                "quantity": "×1"
              },
              {
                "name": "- Cardamom (×20)",
                "quantity": "×1"
              },
              {
                "name": "- Dry Coconut (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Panchmewa (Dry Fruits) (100g)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Sacred Metalware & Vessels",
            "items": [
              {
                "name": "- Sealed Gangajal (100ml)",
                "quantity": "×1"
              },
              {
                "name": "- Steel Kalash (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Brass Kalash (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Steel Pooja Thali (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Steel Bowls (×2)",
                "quantity": "×1"
              },
              {
                "name": "- Pooja Spoon (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Temple Bell (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Brass Diya (×1)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Aroma & Lamps",
            "items": [
              {
                "name": "- Camphor (Kafur) (150g)",
                "quantity": "×1"
              },
              {
                "name": "- Incense Sticks (Agarbatti) (2 Packs)",
                "quantity": "×1"
              },
              {
                "name": "- Premium Dhoop Cone Pack (1 Pack)",
                "quantity": "×1"
              },
              {
                "name": "- Cotton Wicks (×75)",
                "quantity": "×1"
              },
              {
                "name": "- Clay Diyas (×11)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Packaging & Organization",
            "items": [
              {
                "name": "- Mishri (Sugar Candy) (100g)",
                "quantity": "×1"
              },
              {
                "name": "- Batasha (Sugar Drops) (100g)",
                "quantity": "×1"
              },
              {
                "name": "- Red Cloth Pouch (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Zip Pouches for organization (×5)",
                "quantity": "×1"
              },
              {
                "name": "- Kashi Prasad Instruction Card (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Premium Gift Box (×1)",
                "quantity": "×1"
              }
            ]
          }
        ]
      },
      {
        "id": "variant-premium-kit",
        "name": "Premium Kit",
        "price": 4599,
        "mrp": 9199,
        "badge": "Luxury Altar Collection",
        "suitableFor": "8–15 People",
        "description": "The ultimate Navratri collection. Features heavy copper lota/spoon, premium brassware, copper-etched Durga Yantra, pure Kesar, natural Pooja Ittar, 21 clay diyas, luxury hand-embroidered Red Chunari, and a reusable wooden storage box.",
        "keyHighlights": [
          "Everything in Standard included",
          "Large Brass Kalash & large Brass Diya (×1)",
          "Copper Lota & Copper Pooja Spoon",
          "Premium Copper-etched Durga Yantra",
          "Luxury Gilded Red Chunari & pure Kesar (2g)",
          "Pooja Ittar, 21 Clay Diyas, wooden box & Complete Checklist Card"
        ],
        "samagriChecklist": [
          {
            "category": "Murtis, Photos & Books",
            "items": [
              {
                "name": "- Maa Durga Photo (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Lord Ganesha Photo (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Durga Pooja Vidhi Book (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Durga Aarti Card (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Durga Chalisa (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Premium Durga Yantra (Copper-etched) (×1)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Ritual Cloths & Aasans",
            "items": [
              {
                "name": "- Premium Red Chunari (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Mauli (Raksha Sutra) (×9)",
                "quantity": "×1"
              },
              {
                "name": "- Janeu (Sacred Thread) (×16)",
                "quantity": "×1"
              },
              {
                "name": "- Red Pooja Cloth (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Yellow Pooja Cloth (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Red Chowki Cloth (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Yellow Chowki Cloth (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Pooja Aasan (×1)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Sacred Ingredients & Herbs",
            "items": [
              {
                "name": "- Roli (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Haldi (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Kumkum (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Chandan Powder (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Premium Chandan (50g)",
                "quantity": "×1"
              },
              {
                "name": "- Pure Kesar (Saffron) (2g)",
                "quantity": "×1"
              },
              {
                "name": "- Pooja Ittar (Fragrance) (1 Bottle)",
                "quantity": "×1"
              },
              {
                "name": "- Akshat Rice (100g)",
                "quantity": "×1"
              },
              {
                "name": "- Supari (×32)",
                "quantity": "×1"
              },
              {
                "name": "- Cloves (×20)",
                "quantity": "×1"
              },
              {
                "name": "- Cardamom (×20)",
                "quantity": "×1"
              },
              {
                "name": "- Dry Coconut (×3)",
                "quantity": "×1"
              },
              {
                "name": "- Panchmewa (Dry Fruits) (350g)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Sacred Metalware & Vessels",
            "items": [
              {
                "name": "- Sealed Gangajal (100ml)",
                "quantity": "×1"
              },
              {
                "name": "- Steel Kalash (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Brass Kalash (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Large Brass Kalash (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Steel Pooja Thali (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Premium Pooja Thali (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Steel Bowls (×6)",
                "quantity": "×1"
              },
              {
                "name": "- Pooja Spoon (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Copper Spoon (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Temple Bell (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Brass Bell (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Copper Lota (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Brass Diya (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Large Brass Diya (×1)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Aroma & Lamps",
            "items": [
              {
                "name": "- Camphor (Kafur) (350g)",
                "quantity": "×1"
              },
              {
                "name": "- Incense Sticks (Agarbatti) (2 Packs)",
                "quantity": "×1"
              },
              {
                "name": "- Premium Incense Packs (2 Packs)",
                "quantity": "×1"
              },
              {
                "name": "- Premium Dhoop Cone Pack (1 Pack)",
                "quantity": "×1"
              },
              {
                "name": "- Premium Dhoop Cones Extra (2 Packs)",
                "quantity": "×1"
              },
              {
                "name": "- Cotton Wicks (×175)",
                "quantity": "×1"
              },
              {
                "name": "- Clay Diyas (×21)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Packaging & Organization",
            "items": [
              {
                "name": "- Mishri (Sugar Candy) (350g)",
                "quantity": "×1"
              },
              {
                "name": "- Batasha (Sugar Drops) (350g)",
                "quantity": "×1"
              },
              {
                "name": "- Red Cloth Pouch (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Zip Pouches for organization (×5)",
                "quantity": "×1"
              },
              {
                "name": "- Kashi Prasad Instruction Card (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Complete Checklist Card (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Premium Kashi Prasad Gift Packaging (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Reusable Wooden Storage Box (×1)",
                "quantity": "×1"
              }
            ]
          }
        ]
      }
    ],
    "specifications": [
      {
        "groupName": "Victory & Metal Purity",
        "specs": [
          {
            "label": "Yantras Metal",
            "value": "Premium etched Copper Durga Yantra"
          },
          {
            "label": "Brass Castings",
            "value": "Grade-A solid Brass Kalash, bell & shanti diya"
          },
          {
            "label": "Copper Vessels",
            "value": "99.2% Pure copper lota & spoon for gangajal"
          },
          {
            "label": "Altar Cloths",
            "value": "Luxury Red Chunari with hand-woven zari embroidery"
          }
        ]
      },
      {
        "groupName": "Origin & Sourcing",
        "specs": [
          {
            "label": "Compilation Origin",
            "value": "Holy city of Kashi under priest supervision"
          },
          {
            "label": "Sourcing Sincerity",
            "value": "100% Sourced & energized in Varanasi temples"
          },
          {
            "label": "Non-Perishable Promise",
            "value": "Guaranteed free of fresh fruits/flowers/milk/curd/mango leaves"
          },
          {
            "label": "Net Weight",
            "value": "Basic: ~1.4kg | Standard: ~2.8kg | Premium: ~4.6kg"
          }
        ]
      }
    ],
    "faqs": [
      {
        "q": "Is a Red Chunari included in the Durga Pooja Kit?",
        "a": "Yes. The Basic kit includes a high-quality red Chunari with simple golden borders to drape over Maa Durga's photo. The Standard and Premium kits upgrade this to a premium luxury Red Chunari decorated with elaborate gold zari and hand-embroidered lace borders."
      },
      {
        "q": "Are the Yantras included in this kit authentic?",
        "a": "Yes. The Standard kit includes an energized brass-plated Durga Yantra, and the Premium kit upgrades this to a premium copper-etched Durga Yantra. Both are ritually purified and energized in Varanasi temples by priests."
      },
      {
        "q": "Does this kit contain Panchamrit ingredients?",
        "a": "No. In accordance with Kashi Prasad's non-perishable shipping guidelines, we do not ship fresh milk, curd, honey, fresh flowers, or fresh leaves. Instead, we provide mature dry whole coconuts, organic chandan powder, sweet offerings (batasha and mishri), and dry fruits (panchmewa) in airtight packages which have long shelf lives and arrive in pristine condition."
      },
      {
        "q": "How many clay diyas are included in the variants?",
        "a": "The Basic and Standard kits contain 11 clay diyas. The Premium kit features a large brass diya alongside 21 clay diyas and 175 cotton wicks, providing abundant light for Navratri prayers."
      }
    ],
    "shippingGuarantee": "**Sacred Durga Blessing Dispatch Direct from Varanasi**\n\nEvery order is packaged with utmost care and dispatched from Varanasi within 24 hours. We offer free cash on delivery across India.",
    "isPlaceholder": false
  },
  {
    "id": "pk-mahamrityunjaya-jaap-kit",
    "slug": "mahamrityunjaya-jaap-kit",
    "name": "Mahamrityunjaya Jaap Kit",
    "category": "Puja Kits",
    "image": "/assets/puja-kits/05-shiv-pooja-kit.jpg",
    "badge": "Best Seller",
    "rating": 4.9,
    "reviewCount": 294,
    "tagline": "Sacred Vedic Shiva Life-Force Samagri",
    "shortDescription": "A premium collection of authentic, non-perishable Shiva Mahamrityunjaya Jaap items sourced from Varanasi. Blessed under priest supervision, ideal for health, longevity, and peace.",
    "detailedOverview": [
      "Awaken the ultimate life-protecting and healing vibrations of Lord Shiva in your home. The Kashi Prasad Mahamrityunjaya Jaap Kit is a luxurious, hand-compiled collection of authentic ritual materials sourced directly from holy Varanasi. Curated under the expert guidance of veteran Kashi temple priests, this kit ensures your health, longevity, and peaceful prayers are performed with absolute Vedic correctness.",
      "Adhering to our strict non-perishable e-commerce shipping policy, this kit contains zero perishable items such as fresh flowers, banana leaves, milk, curd, honey, or fresh coconuts. In their place, we provide mature dry whole coconuts, pure chandan powder, organic incense, sweet batasha, and dry fruits. All ingredients are packed in air-tight pouches to ensure maximum shelf life and perfect delivery.",
      "Choose from three custom configurations. The Basic kit contains all essential samagri, guide books, Ganga water, 11 clay diyas, an energized Rudraksha bead, and sacred Bhasma. The Standard kit adds brass vessels, a pooja thali, a bell, a brass-plated Mahamrityunjaya Yantra, and a hand-knotted Rudraksha Japa Mala. The Premium kit offers the ultimate set with copper lota/spoon, heavy brassware, pure Kesar, 21 clay diyas, a premium hand-knotted Japa Mala, a large Nepal Panchmukhi Rudraksha, and a reusable wooden storage box."
    ],
    "tags": [
      "Mahamrityunjaya Puja",
      "Pooja Kit",
      "Varanasi Sourced",
      "Kashi Prasad",
      "Home Pooja Kit",
      "Lord Shiva Puja",
      "Health & Longevity"
    ],
    "price": 1899,
    "mrp": 3799,
    "variants": [
      {
        "id": "variant-basic-kit",
        "name": "Basic Kit",
        "price": 1899,
        "mrp": 3799,
        "badge": "Essential Shiva Life-Force",
        "suitableFor": "2–4 People",
        "description": "Contains all core non-perishable samagri, Lord Shiva photo, Mahamrityunjaya mantra card, guide books, clay diyas, and Bhasma for basic prayers.",
        "keyHighlights": [
          "Lord Shiva & Ganesh photos & Aarti Card",
          "Mahamrityunjaya Jaap Vidhi Book & Gangajal (100ml)",
          "Rudraksha Bead & Bhasma (20g) & Akshat Rice",
          "Roli, Haldi, Kumkum, Chandan & Akshat rice",
          "Supari (11 pcs), Cloves & Cardamom (20 pcs each)",
          "Steel Kalash, clay diyas (11 pcs) & Red/White cloths"
        ],
        "samagriChecklist": [
          {
            "category": "Murtis, Photos & Books",
            "items": [
              {
                "name": "- Lord Shiva Photo (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Lord Ganesha Photo (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Mahamrityunjaya Jaap Vidhi Book (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Mahamrityunjaya Mantra Card (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Rudraksha Bead (×1)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Sacred Ingredients & Herbs",
            "items": [
              {
                "name": "- Bhasma (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Roli (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Haldi (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Kumkum (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Chandan Powder (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Akshat Rice (100g)",
                "quantity": "×1"
              },
              {
                "name": "- Supari (×11)",
                "quantity": "×1"
              },
              {
                "name": "- Cloves (×20)",
                "quantity": "×1"
              },
              {
                "name": "- Cardamom (×20)",
                "quantity": "×1"
              },
              {
                "name": "- Dry Coconut (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Panchmewa (Dry Fruits) (100g)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Ritual Cloths & Aasans",
            "items": [
              {
                "name": "- Mauli (Raksha Sutra) (×2)",
                "quantity": "×1"
              },
              {
                "name": "- Janeu (Sacred Thread) (×2)",
                "quantity": "×1"
              },
              {
                "name": "- White Pooja Cloth (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Red Pooja Cloth (×1)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Sacred Metalware & Vessels",
            "items": [
              {
                "name": "- Sealed Gangajal (100ml)",
                "quantity": "×1"
              },
              {
                "name": "- Steel Kalash (×1)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Aroma & Lamps",
            "items": [
              {
                "name": "- Camphor (Kafur) (50g)",
                "quantity": "×1"
              },
              {
                "name": "- Incense Sticks (Agarbatti) (1 Pack)",
                "quantity": "×1"
              },
              {
                "name": "- Dhoop Cone Pack (1 Pack)",
                "quantity": "×1"
              },
              {
                "name": "- Cotton Wicks (×25)",
                "quantity": "×1"
              },
              {
                "name": "- Clay Diyas (×11)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Packaging & Organization",
            "items": [
              {
                "name": "- Mishri (Sugar Candy) (100g)",
                "quantity": "×1"
              },
              {
                "name": "- Batasha (Sugar Drops) (100g)",
                "quantity": "×1"
              }
            ]
          }
        ]
      },
      {
        "id": "variant-standard-kit",
        "name": "Standard Kit",
        "price": 2999,
        "mrp": 5999,
        "badge": "Best Seller • Recommended",
        "suitableFor": "4–8 People",
        "description": "Adds brass kalash, steel thali, brass diya, 11 clay diyas, bell, aasan, brass-plated Mahamrityunjaya Yantra, Rudraksha Japa Mala, and custom organization bags.",
        "keyHighlights": [
          "Everything in Basic included",
          "Upgraded Brass Kalash & Brass Diya (×1)",
          "Steel Pooja Thali, Bowls (×2) & Bell",
          "Mahamrityunjaya Yantra & Rudraksha Japa Mala (108 beads)",
          "Pooja Aasan, Premium Chandan & Premium Bhasma (50g)",
          "Red Cloth Pouch, organizing zip bags & Premium Gift Box"
        ],
        "samagriChecklist": [
          {
            "category": "Murtis, Photos & Books",
            "items": [
              {
                "name": "- Lord Shiva Photo (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Lord Ganesha Photo (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Mahamrityunjaya Jaap Vidhi Book (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Mahamrityunjaya Mantra Card (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Rudraksha Bead (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Mahamrityunjaya Yantra (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Rudraksha Japa Mala (108 beads) (×1)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Sacred Ingredients & Herbs",
            "items": [
              {
                "name": "- Roli (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Haldi (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Kumkum (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Chandan Powder (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Premium Chandan (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Bhasma (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Premium Bhasma (50g)",
                "quantity": "×1"
              },
              {
                "name": "- Akshat Rice (100g)",
                "quantity": "×1"
              },
              {
                "name": "- Supari (×11)",
                "quantity": "×1"
              },
              {
                "name": "- Cloves (×20)",
                "quantity": "×1"
              },
              {
                "name": "- Cardamom (×20)",
                "quantity": "×1"
              },
              {
                "name": "- Dry Coconut (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Panchmewa (Dry Fruits) (100g)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Ritual Cloths & Aasans",
            "items": [
              {
                "name": "- Mauli (Raksha Sutra) (×4)",
                "quantity": "×1"
              },
              {
                "name": "- Janeu (Sacred Thread) (×6)",
                "quantity": "×1"
              },
              {
                "name": "- White Pooja Cloth (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Red Pooja Cloth (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Pooja Aasan (×1)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Sacred Metalware & Vessels",
            "items": [
              {
                "name": "- Sealed Gangajal (100ml)",
                "quantity": "×1"
              },
              {
                "name": "- Steel Kalash (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Brass Kalash (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Steel Pooja Thali (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Steel Bowls (×2)",
                "quantity": "×1"
              },
              {
                "name": "- Pooja Spoon (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Temple Bell (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Brass Diya (×1)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Aroma & Lamps",
            "items": [
              {
                "name": "- Camphor (Kafur) (150g)",
                "quantity": "×1"
              },
              {
                "name": "- Incense Sticks (Agarbatti) (2 Packs)",
                "quantity": "×1"
              },
              {
                "name": "- Premium Dhoop Cone Pack (1 Pack)",
                "quantity": "×1"
              },
              {
                "name": "- Cotton Wicks (×75)",
                "quantity": "×1"
              },
              {
                "name": "- Clay Diyas (×11)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Packaging & Organization",
            "items": [
              {
                "name": "- Mishri (Sugar Candy) (100g)",
                "quantity": "×1"
              },
              {
                "name": "- Batasha (Sugar Drops) (100g)",
                "quantity": "×1"
              },
              {
                "name": "- Red Cloth Pouch (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Zip Pouches for organization (×5)",
                "quantity": "×1"
              },
              {
                "name": "- Kashi Prasad Instruction Card (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Premium Gift Box (×1)",
                "quantity": "×1"
              }
            ]
          }
        ]
      },
      {
        "id": "variant-premium-kit",
        "name": "Premium Kit",
        "price": 4999,
        "mrp": 9999,
        "badge": "Luxury Altar Collection",
        "suitableFor": "8–15 People",
        "description": "The ultimate Shiva Life-Force collection. Features heavy copper lota/spoon, premium brassware, copper-etched Mahamrityunjaya Yantra, pure Kesar, natural Pooja Ittar, 21 clay diyas, large Nepal Panchmukhi Rudraksha, and a reusable wooden storage box.",
        "keyHighlights": [
          "Everything in Standard included",
          "Large Brass Kalash & large Brass Diya (×1)",
          "Copper Lota & Copper Pooja Spoon",
          "Premium Copper-etched Mahamrityunjaya Yantra",
          "Large Nepal Panchmukhi Rudraksha & premium Japa Mala",
          "Kesar (2g), Pooja Ittar, 21 Clay Diyas & wooden box"
        ],
        "samagriChecklist": [
          {
            "category": "Murtis, Photos & Books",
            "items": [
              {
                "name": "- Lord Shiva Photo (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Lord Ganesha Photo (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Mahamrityunjaya Jaap Vidhi Book (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Mahamrityunjaya Mantra Card (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Large Nepal Panchmukhi Rudraksha (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Premium Mahamrityunjaya Yantra (Copper-etched) (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Premium Rudraksha Japa Mala (108 beads) (×1)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Sacred Ingredients & Herbs",
            "items": [
              {
                "name": "- Roli (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Haldi (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Kumkum (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Chandan Powder (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Premium Chandan (50g)",
                "quantity": "×1"
              },
              {
                "name": "- Bhasma (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Premium Bhasma (50g)",
                "quantity": "×1"
              },
              {
                "name": "- Pure Kesar (Saffron) (2g)",
                "quantity": "×1"
              },
              {
                "name": "- Pooja Ittar (Fragrance) (1 Bottle)",
                "quantity": "×1"
              },
              {
                "name": "- Akshat Rice (100g)",
                "quantity": "×1"
              },
              {
                "name": "- Supari (×32)",
                "quantity": "×1"
              },
              {
                "name": "- Cloves (×20)",
                "quantity": "×1"
              },
              {
                "name": "- Cardamom (×20)",
                "quantity": "×1"
              },
              {
                "name": "- Dry Coconut (×3)",
                "quantity": "×1"
              },
              {
                "name": "- Panchmewa (Dry Fruits) (350g)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Ritual Cloths & Aasans",
            "items": [
              {
                "name": "- Mauli (Raksha Sutra) (×9)",
                "quantity": "×1"
              },
              {
                "name": "- Janeu (Sacred Thread) (×16)",
                "quantity": "×1"
              },
              {
                "name": "- White Pooja Cloth (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Red Pooja Cloth (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Red Chowki Cloth (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Yellow Chowki Cloth (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Pooja Aasan (×1)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Sacred Metalware & Vessels",
            "items": [
              {
                "name": "- Sealed Gangajal (100ml)",
                "quantity": "×1"
              },
              {
                "name": "- Steel Kalash (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Brass Kalash (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Large Brass Kalash (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Steel Pooja Thali (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Premium Pooja Thali (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Steel Bowls (×6)",
                "quantity": "×1"
              },
              {
                "name": "- Pooja Spoon (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Copper Spoon (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Temple Bell (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Brass Bell (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Copper Lota (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Brass Diya (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Large Brass Diya (×1)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Aroma & Lamps",
            "items": [
              {
                "name": "- Camphor (Kafur) (350g)",
                "quantity": "×1"
              },
              {
                "name": "- Incense Sticks (Agarbatti) (2 Packs)",
                "quantity": "×1"
              },
              {
                "name": "- Premium Incense Packs (2 Packs)",
                "quantity": "×1"
              },
              {
                "name": "- Premium Dhoop Cone Pack (1 Pack)",
                "quantity": "×1"
              },
              {
                "name": "- Premium Dhoop Cones Extra (2 Packs)",
                "quantity": "×1"
              },
              {
                "name": "- Cotton Wicks (×175)",
                "quantity": "×1"
              },
              {
                "name": "- Clay Diyas (×21)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Packaging & Organization",
            "items": [
              {
                "name": "- Mishri (Sugar Candy) (350g)",
                "quantity": "×1"
              },
              {
                "name": "- Batasha (Sugar Drops) (350g)",
                "quantity": "×1"
              },
              {
                "name": "- Red Cloth Pouch (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Zip Pouches for organization (×5)",
                "quantity": "×1"
              },
              {
                "name": "- Kashi Prasad Instruction Card (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Complete Checklist Card (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Premium Kashi Prasad Gift Packaging (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Reusable Wooden Storage Box (×1)",
                "quantity": "×1"
              }
            ]
          }
        ]
      }
    ],
    "specifications": [
      {
        "groupName": "Life-Force & Metal Purity",
        "specs": [
          {
            "label": "Rudraksha Authenticity",
            "value": "Genuine Nepal Panchmukhi Rudraksha bead & Japa Mala"
          },
          {
            "label": "Yantras Metal",
            "value": "Premium etched Copper Mahamrityunjaya Yantra"
          },
          {
            "label": "Brass Castings",
            "value": "Grade-A solid Brass Kalash, bell & shanti diya"
          },
          {
            "label": "Copper Vessels",
            "value": "99.2% Pure copper lota & spoon for gangajal"
          }
        ]
      },
      {
        "groupName": "Origin & Sourcing",
        "specs": [
          {
            "label": "Compilation Origin",
            "value": "Holy city of Kashi under priest supervision"
          },
          {
            "label": "Sourcing Sincerity",
            "value": "100% Sourced & energized in Varanasi temples"
          },
          {
            "label": "Non-Perishable Promise",
            "value": "Guaranteed free of fresh fruits/flowers/milk/curd/mango leaves"
          },
          {
            "label": "Net Weight",
            "value": "Basic: ~1.4kg | Standard: ~2.8kg | Premium: ~4.6kg"
          }
        ]
      }
    ],
    "faqs": [
      {
        "q": "What Rudraksha items are included in this kit?",
        "a": "The Basic kit includes an authentic, Varanasi-energized Rudraksha bead. The Standard kit includes a hand-knotted Rudraksha Japa Mala (108 beads). The Premium kit upgrades this to a premium hand-knotted Rudraksha Japa Mala alongside a large, selected Nepal Panchmukhi Rudraksha bead for altar worship."
      },
      {
        "q": "Are the Yantras included energized?",
        "a": "Yes. The Standard kit features an energized brass-plated Mahamrityunjaya Yantra, and the Premium kit upgrades this to a premium copper-etched Mahamrityunjaya Yantra. Both are purified and energized in Varanasi temples by priests."
      },
      {
        "q": "Does this kit contain Panchamrit ingredients?",
        "a": "No. In accordance with Kashi Prasad's non-perishable shipping guidelines, we do not ship fresh milk, curd, honey, fresh flowers, or fresh leaves. Instead, we provide mature dry whole coconuts, organic chandan powder, sweet offerings (batasha and mishri), and dry fruits (panchmewa) in airtight packages which have long shelf lives and arrive in pristine condition."
      },
      {
        "q": "How many clay diyas are included in the variants?",
        "a": "The Basic and Standard kits contain 11 clay diyas. The Premium kit features a large brass diya alongside 21 clay diyas and 175 cotton wicks, providing abundant light for Shiva prayers."
      }
    ],
    "shippingGuarantee": "**Sacred Shiva Life-Force Dispatch Direct from Varanasi**\n\nEvery order is packaged with utmost care and dispatched from Varanasi within 24 hours. We offer free cash on delivery across India.",
    "isPlaceholder": false
  },
  {
    "id": "pk-sundarkand-path-kit",
    "slug": "sundarkand-path-kit",
    "name": "Sundarkand Path Kit",
    "category": "Puja Kits",
    "image": "/assets/puja-kits/09-sundarkand-path-kit.jpg",
    "badge": "Best Seller",
    "rating": 4.9,
    "reviewCount": 318,
    "tagline": "Sacred Vedic Hanuman Devotion & Victory Samagri",
    "shortDescription": "A premium collection of authentic, non-perishable Hanuman Sundarkand Path items sourced from Varanasi. Blessed under priest supervision, ideal for devotion, victory, and protection.",
    "detailedOverview": [
      "Invite the supreme, obstacle-destroying power of Lord Hanuman and the grace of Shri Ram into your home. The Kashi Prasad Sundarkand Path Kit is a luxurious, hand-compiled collection of authentic ritual materials sourced directly from holy Varanasi. Curated under the expert guidance of veteran Kashi temple priests, this kit ensures your prayers, Hanuman Jayanti celebrations, or weekly Sundarkand recitations are performed with absolute Vedic correctness.",
      "Adhering to our strict non-perishable e-commerce shipping policy, this kit contains zero perishable items such as fresh flowers, banana leaves, milk, curd, honey, or fresh coconuts. In their place, we provide mature dry whole coconuts, pure chandan powder, orange sindoor, organic incense, and sweet batasha. All ingredients are packed in air-tight pouches to ensure maximum shelf life and perfect delivery.",
      "Choose from three custom configurations. The Basic kit contains all essential samagri, guide books, Ganga water, 11 clay diyas, and orange sindoor. The Standard kit adds brass vessels, a pooja thali, a bell, a brass-plated Hanuman Yantra, a Ram Naam Booklet, and a premium aasan. The Premium kit offers the ultimate set with copper lota/spoon, heavy brassware, pure Kesar, 21 clay diyas, and a reusable wooden storage box."
    ],
    "tags": [
      "Sundarkand Puja",
      "Pooja Kit",
      "Varanasi Sourced",
      "Kashi Prasad",
      "Home Pooja Kit",
      "Lord Hanuman Puja",
      "Victory & Protection"
    ],
    "price": 1699,
    "mrp": 3399,
    "variants": [
      {
        "id": "variant-basic-kit",
        "name": "Basic Kit",
        "price": 1699,
        "mrp": 3399,
        "badge": "Essential Hanuman Devotion",
        "suitableFor": "2–5 People",
        "description": "Contains all core non-perishable samagri, Lord Hanuman and Ram Darbar photos, Sundarkand and Hanuman Chalisa books, clay diyas, and orange Sindoor for basic prayers.",
        "keyHighlights": [
          "Hanuman & Ram Darbar photos & Aarti Card & Chalisa",
          "Sundarkand Book & Gangajal (100ml) & Sindoor (20g)",
          "Roli, Haldi, Kumkum, Chandan & Akshat rice",
          "Supari (11 pcs), Cloves & Cardamom (20 pcs each)",
          "Steel Kalash, clay diyas (11 pcs) & Red/Yellow cloths"
        ],
        "samagriChecklist": [
          {
            "category": "Murtis, Photos & Books",
            "items": [
              {
                "name": "- Lord Hanuman Photo (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Lord Shri Ram Darbar Photo (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Sundarkand Book (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Hanuman Chalisa (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Hanuman Aarti Card (×1)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Sacred Ingredients & Herbs",
            "items": [
              {
                "name": "- Sindoor (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Roli (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Haldi (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Kumkum (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Chandan Powder (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Akshat Rice (100g)",
                "quantity": "×1"
              },
              {
                "name": "- Supari (×11)",
                "quantity": "×1"
              },
              {
                "name": "- Cloves (×20)",
                "quantity": "×1"
              },
              {
                "name": "- Cardamom (×20)",
                "quantity": "×1"
              },
              {
                "name": "- Dry Coconut (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Panchmewa (Dry Fruits) (100g)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Ritual Cloths & Aasans",
            "items": [
              {
                "name": "- Mauli (Raksha Sutra) (×2)",
                "quantity": "×1"
              },
              {
                "name": "- Janeu (Sacred Thread) (×2)",
                "quantity": "×1"
              },
              {
                "name": "- Red Pooja Cloth (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Yellow Pooja Cloth (×1)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Sacred Metalware & Vessels",
            "items": [
              {
                "name": "- Sealed Gangajal (100ml)",
                "quantity": "×1"
              },
              {
                "name": "- Steel Kalash (×1)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Aroma & Lamps",
            "items": [
              {
                "name": "- Camphor (Kafur) (50g)",
                "quantity": "×1"
              },
              {
                "name": "- Incense Sticks (Agarbatti) (1 Pack)",
                "quantity": "×1"
              },
              {
                "name": "- Dhoop Cone Pack (1 Pack)",
                "quantity": "×1"
              },
              {
                "name": "- Cotton Wicks (×25)",
                "quantity": "×1"
              },
              {
                "name": "- Clay Diyas (×11)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Packaging & Organization",
            "items": [
              {
                "name": "- Mishri (Sugar Candy) (100g)",
                "quantity": "×1"
              },
              {
                "name": "- Batasha (Sugar Drops) (100g)",
                "quantity": "×1"
              }
            ]
          }
        ]
      },
      {
        "id": "variant-standard-kit",
        "name": "Standard Kit",
        "price": 2699,
        "mrp": 5399,
        "badge": "Best Seller • Recommended",
        "suitableFor": "4–8 People",
        "description": "Adds brass kalash, steel thali, brass diya, bell, aasan, brass-plated Hanuman Yantra, Ram Naam Booklet, and custom organization bags.",
        "keyHighlights": [
          "Everything in Basic included",
          "Upgraded Brass Kalash & Brass Diya (×1)",
          "Steel Pooja Thali, Bowls (×2) & Bell",
          "Hanuman Yantra & Ram Naam Booklet",
          "Pooja Aasan, Premium Chandan & organic wicks (75 pcs)",
          "Red Cloth Pouch, organizing zip bags & Premium Gift Box"
        ],
        "samagriChecklist": [
          {
            "category": "Murtis, Photos & Books",
            "items": [
              {
                "name": "- Lord Hanuman Photo (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Lord Shri Ram Darbar Photo (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Sundarkand Book (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Hanuman Chalisa (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Hanuman Aarti Card (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Hanuman Yantra (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Ram Naam Booklet (×1)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Sacred Ingredients & Herbs",
            "items": [
              {
                "name": "- Sindoor (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Roli (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Haldi (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Kumkum (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Chandan Powder (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Premium Chandan (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Akshat Rice (100g)",
                "quantity": "×1"
              },
              {
                "name": "- Supari (×11)",
                "quantity": "×1"
              },
              {
                "name": "- Cloves (×20)",
                "quantity": "×1"
              },
              {
                "name": "- Cardamom (×20)",
                "quantity": "×1"
              },
              {
                "name": "- Dry Coconut (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Panchmewa (Dry Fruits) (100g)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Ritual Cloths & Aasans",
            "items": [
              {
                "name": "- Mauli (Raksha Sutra) (×4)",
                "quantity": "×1"
              },
              {
                "name": "- Janeu (Sacred Thread) (×6)",
                "quantity": "×1"
              },
              {
                "name": "- Red Pooja Cloth (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Yellow Pooja Cloth (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Pooja Aasan (×1)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Sacred Metalware & Vessels",
            "items": [
              {
                "name": "- Sealed Gangajal (100ml)",
                "quantity": "×1"
              },
              {
                "name": "- Steel Kalash (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Brass Kalash (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Steel Pooja Thali (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Steel Bowls (×2)",
                "quantity": "×1"
              },
              {
                "name": "- Pooja Spoon (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Temple Bell (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Brass Diya (×1)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Aroma & Lamps",
            "items": [
              {
                "name": "- Camphor (Kafur) (150g)",
                "quantity": "×1"
              },
              {
                "name": "- Incense Sticks (Agarbatti) (2 Packs)",
                "quantity": "×1"
              },
              {
                "name": "- Premium Dhoop Cone Pack (1 Pack)",
                "quantity": "×1"
              },
              {
                "name": "- Cotton Wicks (×75)",
                "quantity": "×1"
              },
              {
                "name": "- Clay Diyas (×11)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Packaging & Organization",
            "items": [
              {
                "name": "- Mishri (Sugar Candy) (100g)",
                "quantity": "×1"
              },
              {
                "name": "- Batasha (Sugar Drops) (100g)",
                "quantity": "×1"
              },
              {
                "name": "- Red Cloth Pouch (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Zip Pouches for organization (×5)",
                "quantity": "×1"
              },
              {
                "name": "- Kashi Prasad Instruction Card (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Premium Gift Box (×1)",
                "quantity": "×1"
              }
            ]
          }
        ]
      },
      {
        "id": "variant-premium-kit",
        "name": "Premium Kit",
        "price": 4599,
        "mrp": 9199,
        "badge": "Luxury Altar Collection",
        "suitableFor": "8–15 People",
        "description": "The ultimate Hanuman Devotion collection. Features heavy copper lota/spoon, premium brassware, copper-etched Hanuman Yantra, pure Kesar, natural Pooja Ittar, 21 clay diyas, and a reusable wooden storage box.",
        "keyHighlights": [
          "Everything in Standard included",
          "Large Brass Kalash & large Brass Diya (×1)",
          "Copper Lota & Copper Pooja Spoon",
          "Premium Copper-etched Hanuman Yantra",
          "Kesar (2g), Pooja Ittar, 21 Clay Diyas & wooden box",
          "Reusable Wooden Storage Box & Complete Checklist Card"
        ],
        "samagriChecklist": [
          {
            "category": "Murtis, Photos & Books",
            "items": [
              {
                "name": "- Lord Hanuman Photo (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Lord Shri Ram Darbar Photo (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Sundarkand Book (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Hanuman Chalisa (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Hanuman Aarti Card (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Premium Hanuman Yantra (Copper-etched) (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Ram Naam Booklet (×1)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Sacred Ingredients & Herbs",
            "items": [
              {
                "name": "- Sindoor (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Roli (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Haldi (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Kumkum (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Chandan Powder (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Premium Chandan (50g)",
                "quantity": "×1"
              },
              {
                "name": "- Pure Kesar (Saffron) (2g)",
                "quantity": "×1"
              },
              {
                "name": "- Pooja Ittar (Fragrance) (1 Bottle)",
                "quantity": "×1"
              },
              {
                "name": "- Akshat Rice (100g)",
                "quantity": "×1"
              },
              {
                "name": "- Supari (×32)",
                "quantity": "×1"
              },
              {
                "name": "- Cloves (×20)",
                "quantity": "×1"
              },
              {
                "name": "- Cardamom (×20)",
                "quantity": "×1"
              },
              {
                "name": "- Dry Coconut (×3)",
                "quantity": "×1"
              },
              {
                "name": "- Panchmewa (Dry Fruits) (350g)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Ritual Cloths & Aasans",
            "items": [
              {
                "name": "- Mauli (Raksha Sutra) (×9)",
                "quantity": "×1"
              },
              {
                "name": "- Janeu (Sacred Thread) (×16)",
                "quantity": "×1"
              },
              {
                "name": "- Red Pooja Cloth (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Yellow Pooja Cloth (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Red Chowki Cloth (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Yellow Chowki Cloth (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Pooja Aasan (×1)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Sacred Metalware & Vessels",
            "items": [
              {
                "name": "- Sealed Gangajal (100ml)",
                "quantity": "×1"
              },
              {
                "name": "- Steel Kalash (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Brass Kalash (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Large Brass Kalash (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Steel Pooja Thali (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Premium Pooja Thali (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Steel Bowls (×6)",
                "quantity": "×1"
              },
              {
                "name": "- Pooja Spoon (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Copper Spoon (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Temple Bell (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Brass Bell (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Copper Lota (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Brass Diya (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Large Brass Diya (×1)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Aroma & Lamps",
            "items": [
              {
                "name": "- Camphor (Kafur) (350g)",
                "quantity": "×1"
              },
              {
                "name": "- Incense Sticks (Agarbatti) (2 Packs)",
                "quantity": "×1"
              },
              {
                "name": "- Premium Incense Packs (2 Packs)",
                "quantity": "×1"
              },
              {
                "name": "- Premium Dhoop Cone Pack (1 Pack)",
                "quantity": "×1"
              },
              {
                "name": "- Premium Dhoop Cones Extra (2 Packs)",
                "quantity": "×1"
              },
              {
                "name": "- Cotton Wicks (×175)",
                "quantity": "×1"
              },
              {
                "name": "- Clay Diyas (×21)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Packaging & Organization",
            "items": [
              {
                "name": "- Mishri (Sugar Candy) (350g)",
                "quantity": "×1"
              },
              {
                "name": "- Batasha (Sugar Drops) (350g)",
                "quantity": "×1"
              },
              {
                "name": "- Red Cloth Pouch (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Zip Pouches for organization (×5)",
                "quantity": "×1"
              },
              {
                "name": "- Kashi Prasad Instruction Card (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Complete Checklist Card (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Premium Kashi Prasad Gift Packaging (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Reusable Wooden Storage Box (×1)",
                "quantity": "×1"
              }
            ]
          }
        ]
      }
    ],
    "specifications": [
      {
        "groupName": "Devotion & Metal Purity",
        "specs": [
          {
            "label": "Yantras Metal",
            "value": "Premium etched Copper Hanuman Yantra"
          },
          {
            "label": "Brass Castings",
            "value": "Grade-A solid Brass Kalash, bell & shanti diya"
          },
          {
            "label": "Copper Vessels",
            "value": "99.2% Pure copper lota & spoon for gangajal"
          },
          {
            "label": "Aura Cloths",
            "value": "Saffron and Red silk with hand-woven borders"
          }
        ]
      },
      {
        "groupName": "Origin & Sourcing",
        "specs": [
          {
            "label": "Compilation Origin",
            "value": "Holy city of Kashi under priest supervision"
          },
          {
            "label": "Sourcing Sincerity",
            "value": "100% Sourced & energized in Varanasi temples"
          },
          {
            "label": "Non-Perishable Promise",
            "value": "Guaranteed free of fresh fruits/flowers/milk/curd/mango leaves"
          },
          {
            "label": "Net Weight",
            "value": "Basic: ~1.4kg | Standard: ~2.8kg | Premium: ~4.6kg"
          }
        ]
      }
    ],
    "faqs": [
      {
        "q": "Is orange Sindoor included for Hanuman worship?",
        "a": "Yes. Basic, Standard, and Premium kits all include pure Hanuman Sindoor (20g) to perform chola offerings to the Bajrangbali photo."
      },
      {
        "q": "Are the Hanuman Yantras included energized?",
        "a": "Yes. The Standard kit features an energized brass-plated Hanuman Yantra, and the Premium kit upgrades this to a premium copper-etched Hanuman Yantra. Both are purified and energized in Hanuman temples in Varanasi by priests."
      },
      {
        "q": "Does this kit contain Panchamrit ingredients?",
        "a": "No. In accordance with Kashi Prasad's non-perishable shipping guidelines, we do not ship fresh milk, curd, honey, fresh flowers, or fresh leaves. Instead, we provide mature dry whole coconuts, organic chandan powder, sweet offerings (batasha and mishri), and dry fruits (panchmewa) in airtight packages which have long shelf lives and arrive in pristine condition."
      },
      {
        "q": "How many clay diyas are included in the variants?",
        "a": "The Basic and Standard kits contain 11 clay diyas. The Premium kit features a large brass diya alongside 21 clay diyas and 175 cotton wicks, providing abundant light for Hanuman prayers."
      }
    ],
    "shippingGuarantee": "**Sacred Hanuman Blessing Dispatch Direct from Varanasi**\n\nEvery order is packaged with utmost care and dispatched from Varanasi within 24 hours. We offer free cash on delivery across India.",
    "isPlaceholder": false
  },
  {
    "id": "pk-hanuman-pooja-kit",
    "slug": "hanuman-pooja-kit",
    "name": "Hanuman Pooja Kit",
    "category": "Puja Kits",
    "image": "/assets/puja-kits/10-hanuman-pooja-kit.jpg",
    "badge": "Best Seller",
    "rating": 4.9,
    "reviewCount": 324,
    "tagline": "Sacred Vedic Hanuman Devotion & Strength Samagri",
    "shortDescription": "A premium collection of authentic, non-perishable Lord Hanuman Pooja items sourced from Varanasi. Blessed under priest supervision, ideal for devotion, strength, and protection.",
    "detailedOverview": [
      "Invite the supreme, obstacle-destroying power of Lord Hanuman and the grace of Shri Ram into your home. The Kashi Prasad Hanuman Pooja Kit is a luxurious, hand-compiled collection of authentic ritual materials sourced directly from holy Varanasi. Curated under the expert guidance of veteran Kashi temple priests, this kit ensures your prayers, Hanuman Jayanti celebrations, or weekly Hanuman recitations are performed with absolute Vedic correctness.",
      "Adhering to our strict non-perishable e-commerce shipping policy, this kit contains zero perishable items such as fresh flowers, banana leaves, milk, curd, honey, or fresh coconuts. In their place, we provide mature dry whole coconuts, pure chandan powder, orange sindoor, organic incense, and sweet batasha. All ingredients are packed in air-tight pouches to ensure maximum shelf life and perfect delivery.",
      "Choose from three custom configurations. The Basic kit contains all essential samagri, guide books, Ganga water, 11 clay diyas, and orange sindoor. The Standard kit adds brass vessels, a pooja thali, a bell, a brass-plated Hanuman Yantra, a Ram Raksha Stotra Booklet, and a premium aasan. The Premium kit offers the ultimate set with copper lota/spoon, heavy brassware, pure Kesar, 21 clay diyas, and a reusable wooden storage box."
    ],
    "tags": [
      "Hanuman Puja",
      "Pooja Kit",
      "Varanasi Sourced",
      "Kashi Prasad",
      "Home Pooja Kit",
      "Lord Hanuman Puja",
      "Strength & Protection"
    ],
    "price": 1699,
    "mrp": 3399,
    "variants": [
      {
        "id": "variant-basic-kit",
        "name": "Basic Kit",
        "price": 1699,
        "mrp": 3399,
        "badge": "Essential Hanuman Devotion",
        "suitableFor": "2–5 People",
        "description": "Contains all core non-perishable samagri, Lord Hanuman and Ram Darbar photos, Hanuman Chalisa and Bajrang Baan books, clay diyas, and orange Sindoor for basic prayers.",
        "keyHighlights": [
          "Hanuman & Ram Darbar photos & Aarti Card & Chalisa",
          "Bajrang Baan Book & Gangajal (100ml) & Sindoor (20g)",
          "Roli, Haldi, Kumkum, Chandan & Akshat rice",
          "Supari (11 pcs), Cloves & Cardamom (20 pcs each)",
          "Steel Kalash, clay diyas (11 pcs) & Red/Yellow cloths"
        ],
        "samagriChecklist": [
          {
            "category": "Murtis, Photos & Books",
            "items": [
              {
                "name": "- Lord Hanuman Photo (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Shri Ram Darbar Photo (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Hanuman Chalisa Book (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Hanuman Aarti Card (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Bajrang Baan Booklet (×1)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Sacred Ingredients & Herbs",
            "items": [
              {
                "name": "- Sindoor (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Roli (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Haldi (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Kumkum (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Chandan Powder (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Akshat Rice (100g)",
                "quantity": "×1"
              },
              {
                "name": "- Supari (×11)",
                "quantity": "×1"
              },
              {
                "name": "- Cloves (×20)",
                "quantity": "×1"
              },
              {
                "name": "- Cardamom (×20)",
                "quantity": "×1"
              },
              {
                "name": "- Dry Coconut (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Panchmewa (Dry Fruits) (100g)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Ritual Cloths & Aasans",
            "items": [
              {
                "name": "- Mauli (Raksha Sutra) (×2)",
                "quantity": "×1"
              },
              {
                "name": "- Janeu (Sacred Thread) (×2)",
                "quantity": "×1"
              },
              {
                "name": "- Red Pooja Cloth (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Yellow Pooja Cloth (×1)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Sacred Metalware & Vessels",
            "items": [
              {
                "name": "- Sealed Gangajal (100ml)",
                "quantity": "×1"
              },
              {
                "name": "- Steel Kalash (×1)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Aroma & Lamps",
            "items": [
              {
                "name": "- Camphor (Kafur) (50g)",
                "quantity": "×1"
              },
              {
                "name": "- Incense Sticks (Agarbatti) (1 Pack)",
                "quantity": "×1"
              },
              {
                "name": "- Dhoop Cone Pack (1 Pack)",
                "quantity": "×1"
              },
              {
                "name": "- Cotton Wicks (×25)",
                "quantity": "×1"
              },
              {
                "name": "- Clay Diyas (×11)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Packaging & Organization",
            "items": [
              {
                "name": "- Mishri (Sugar Candy) (100g)",
                "quantity": "×1"
              },
              {
                "name": "- Batasha (Sugar Drops) (100g)",
                "quantity": "×1"
              }
            ]
          }
        ]
      },
      {
        "id": "variant-standard-kit",
        "name": "Standard Kit",
        "price": 2699,
        "mrp": 5399,
        "badge": "Best Seller • Recommended",
        "suitableFor": "4–8 People",
        "description": "Adds brass kalash, steel thali, brass diya, bell, aasan, brass-plated Hanuman Yantra, Ram Raksha Stotra Booklet, and custom organization bags.",
        "keyHighlights": [
          "Everything in Basic included",
          "Upgraded Brass Kalash & Brass Diya (×1)",
          "Steel Pooja Thali, Bowls (×2) & Bell",
          "Hanuman Yantra & Ram Raksha Stotra Booklet",
          "Pooja Aasan, Premium Chandan & organic wicks (75 pcs)",
          "Red Cloth Pouch, organizing zip bags & Premium Gift Box"
        ],
        "samagriChecklist": [
          {
            "category": "Murtis, Photos & Books",
            "items": [
              {
                "name": "- Lord Hanuman Photo (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Shri Ram Darbar Photo (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Hanuman Chalisa Book (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Hanuman Aarti Card (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Bajrang Baan Booklet (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Hanuman Yantra (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Ram Raksha Stotra Booklet (×1)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Sacred Ingredients & Herbs",
            "items": [
              {
                "name": "- Sindoor (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Roli (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Haldi (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Kumkum (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Chandan Powder (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Premium Chandan (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Akshat Rice (100g)",
                "quantity": "×1"
              },
              {
                "name": "- Supari (×11)",
                "quantity": "×1"
              },
              {
                "name": "- Cloves (×20)",
                "quantity": "×1"
              },
              {
                "name": "- Cardamom (×20)",
                "quantity": "×1"
              },
              {
                "name": "- Dry Coconut (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Panchmewa (Dry Fruits) (100g)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Ritual Cloths & Aasans",
            "items": [
              {
                "name": "- Mauli (Raksha Sutra) (×4)",
                "quantity": "×1"
              },
              {
                "name": "- Janeu (Sacred Thread) (×6)",
                "quantity": "×1"
              },
              {
                "name": "- Red Pooja Cloth (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Yellow Pooja Cloth (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Pooja Aasan (×1)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Sacred Metalware & Vessels",
            "items": [
              {
                "name": "- Sealed Gangajal (100ml)",
                "quantity": "×1"
              },
              {
                "name": "- Steel Kalash (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Brass Kalash (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Steel Pooja Thali (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Steel Bowls (×2)",
                "quantity": "×1"
              },
              {
                "name": "- Pooja Spoon (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Temple Bell (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Brass Diya (×1)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Aroma & Lamps",
            "items": [
              {
                "name": "- Camphor (Kafur) (150g)",
                "quantity": "×1"
              },
              {
                "name": "- Incense Sticks (Agarbatti) (2 Packs)",
                "quantity": "×1"
              },
              {
                "name": "- Premium Dhoop Cone Pack (1 Pack)",
                "quantity": "×1"
              },
              {
                "name": "- Cotton Wicks (×75)",
                "quantity": "×1"
              },
              {
                "name": "- Clay Diyas (×11)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Packaging & Organization",
            "items": [
              {
                "name": "- Mishri (Sugar Candy) (100g)",
                "quantity": "×1"
              },
              {
                "name": "- Batasha (Sugar Drops) (100g)",
                "quantity": "×1"
              },
              {
                "name": "- Red Cloth Pouch (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Zip Pouches for organization (×5)",
                "quantity": "×1"
              },
              {
                "name": "- Kashi Prasad Instruction Card (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Premium Gift Box (×1)",
                "quantity": "×1"
              }
            ]
          }
        ]
      },
      {
        "id": "variant-premium-kit",
        "name": "Premium Kit",
        "price": 4599,
        "mrp": 9199,
        "badge": "Luxury Altar Collection",
        "suitableFor": "8–15 People",
        "description": "The ultimate Hanuman Devotion collection. Features heavy copper lota/spoon, premium brassware, copper-etched Hanuman Yantra, pure Kesar, natural Pooja Ittar, 21 clay diyas, and a reusable wooden storage box.",
        "keyHighlights": [
          "Everything in Standard included",
          "Large Brass Kalash & large Brass Diya (×1)",
          "Copper Lota & Copper Pooja Spoon",
          "Premium Copper-etched Hanuman Yantra",
          "Kesar (2g), Pooja Ittar, 21 Clay Diyas & wooden box",
          "Reusable Wooden Storage Box & Complete Checklist Card"
        ],
        "samagriChecklist": [
          {
            "category": "Murtis, Photos & Books",
            "items": [
              {
                "name": "- Lord Hanuman Photo (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Shri Ram Darbar Photo (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Hanuman Chalisa Book (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Hanuman Aarti Card (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Bajrang Baan Booklet (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Premium Hanuman Yantra (Copper-etched) (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Ram Raksha Stotra Booklet (×1)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Sacred Ingredients & Herbs",
            "items": [
              {
                "name": "- Sindoor (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Roli (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Haldi (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Kumkum (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Chandan Powder (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Premium Chandan (50g)",
                "quantity": "×1"
              },
              {
                "name": "- Pure Kesar (Saffron) (2g)",
                "quantity": "×1"
              },
              {
                "name": "- Pooja Ittar (Fragrance) (1 Bottle)",
                "quantity": "×1"
              },
              {
                "name": "- Akshat Rice (100g)",
                "quantity": "×1"
              },
              {
                "name": "- Supari (×32)",
                "quantity": "×1"
              },
              {
                "name": "- Cloves (×20)",
                "quantity": "×1"
              },
              {
                "name": "- Cardamom (×20)",
                "quantity": "×1"
              },
              {
                "name": "- Dry Coconut (×3)",
                "quantity": "×1"
              },
              {
                "name": "- Panchmewa (Dry Fruits) (350g)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Ritual Cloths & Aasans",
            "items": [
              {
                "name": "- Mauli (Raksha Sutra) (×9)",
                "quantity": "×1"
              },
              {
                "name": "- Janeu (Sacred Thread) (×16)",
                "quantity": "×1"
              },
              {
                "name": "- Red Pooja Cloth (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Yellow Pooja Cloth (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Red Chowki Cloth (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Yellow Chowki Cloth (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Pooja Aasan (×1)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Sacred Metalware & Vessels",
            "items": [
              {
                "name": "- Sealed Gangajal (100ml)",
                "quantity": "×1"
              },
              {
                "name": "- Steel Kalash (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Brass Kalash (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Large Brass Kalash (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Steel Pooja Thali (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Premium Pooja Thali (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Steel Bowls (×6)",
                "quantity": "×1"
              },
              {
                "name": "- Pooja Spoon (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Copper Spoon (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Temple Bell (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Brass Bell (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Copper Lota (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Brass Diya (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Large Brass Diya (×1)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Aroma & Lamps",
            "items": [
              {
                "name": "- Camphor (Kafur) (350g)",
                "quantity": "×1"
              },
              {
                "name": "- Incense Sticks (Agarbatti) (2 Packs)",
                "quantity": "×1"
              },
              {
                "name": "- Premium Incense Packs (2 Packs)",
                "quantity": "×1"
              },
              {
                "name": "- Premium Dhoop Cone Pack (1 Pack)",
                "quantity": "×1"
              },
              {
                "name": "- Premium Dhoop Cones Extra (2 Packs)",
                "quantity": "×1"
              },
              {
                "name": "- Cotton Wicks (×175)",
                "quantity": "×1"
              },
              {
                "name": "- Clay Diyas (×21)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Packaging & Organization",
            "items": [
              {
                "name": "- Mishri (Sugar Candy) (350g)",
                "quantity": "×1"
              },
              {
                "name": "- Batasha (Sugar Drops) (350g)",
                "quantity": "×1"
              },
              {
                "name": "- Red Cloth Pouch (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Zip Pouches for organization (×5)",
                "quantity": "×1"
              },
              {
                "name": "- Kashi Prasad Instruction Card (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Complete Checklist Card (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Premium Kashi Prasad Gift Packaging (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Reusable Wooden Storage Box (×1)",
                "quantity": "×1"
              }
            ]
          }
        ]
      }
    ],
    "specifications": [
      {
        "groupName": "Devotion & Metal Purity",
        "specs": [
          {
            "label": "Yantras Metal",
            "value": "Premium etched Copper Hanuman Yantra"
          },
          {
            "label": "Brass Castings",
            "value": "Grade-A solid Brass Kalash, bell & shanti diya"
          },
          {
            "label": "Copper Vessels",
            "value": "99.2% Pure copper lota & spoon for gangajal"
          },
          {
            "label": "Aura Cloths",
            "value": "Saffron and Red silk with hand-woven borders"
          }
        ]
      },
      {
        "groupName": "Origin & Sourcing",
        "specs": [
          {
            "label": "Compilation Origin",
            "value": "Holy city of Kashi under priest supervision"
          },
          {
            "label": "Sourcing Sincerity",
            "value": "100% Sourced & energized in Varanasi temples"
          },
          {
            "label": "Non-Perishable Promise",
            "value": "Guaranteed free of fresh fruits/flowers/milk/curd/mango leaves"
          },
          {
            "label": "Net Weight",
            "value": "Basic: ~1.4kg | Standard: ~2.8kg | Premium: ~4.6kg"
          }
        ]
      }
    ],
    "faqs": [
      {
        "q": "What is the difference between standard and premium Hanuman Yantras?",
        "a": "The Standard kit features an energized brass-plated Hanuman Yantra, and the Premium kit upgrades this to a premium copper-etched Hanuman Yantra. Both are purified and energized in Sankat Mochan and other Hanuman temples in Varanasi by priests."
      },
      {
        "q": "Is orange Sindoor included for Hanuman worship?",
        "a": "Yes. Basic, Standard, and Premium kits all include pure Hanuman Sindoor (20g) to perform chola offerings to the Bajrangbali photo."
      },
      {
        "q": "Does this kit contain Panchamrit ingredients?",
        "a": "No. In accordance with Kashi Prasad's non-perishable shipping guidelines, we do not ship fresh milk, curd, honey, fresh flowers, or fresh leaves. Instead, we provide mature dry whole coconuts, organic chandan powder, sweet offerings (batasha and mishri), and dry fruits (panchmewa) in airtight packages which have long shelf lives and arrive in pristine condition."
      },
      {
        "q": "How many clay diyas are included in the variants?",
        "a": "The Basic and Standard kits contain 11 clay diyas. The Premium kit features a large brass diya alongside 21 clay diyas and 175 cotton wicks, providing abundant light for Hanuman prayers."
      }
    ],
    "shippingGuarantee": "**Sacred Hanuman Blessing Dispatch Direct from Varanasi**\n\nEvery order is packaged with utmost care and dispatched from Varanasi within 24 hours. We offer free cash on delivery across India.",
    "isPlaceholder": false
  },
  {
    "id": "pk-vishnu-pooja-kit",
    "slug": "vishnu-pooja-kit",
    "name": "Vishnu Pooja Kit",
    "category": "Puja Kits",
    "image": "/assets/puja-kits/11-vishnu-pooja-kit.jpg",
    "badge": "Best Seller",
    "rating": 4.9,
    "reviewCount": 284,
    "tagline": "Sacred Vedic Vishnu Devotion & Wealth Samagri",
    "shortDescription": "A premium collection of authentic, non-perishable Lord Vishnu Pooja items sourced from Varanasi. Blessed under priest supervision, ideal for devotion, wealth, and protection.",
    "detailedOverview": [
      "Invite the supreme, preserving power of Lord Vishnu and the prosperity of Goddess Lakshmi into your home. The Kashi Prasad Vishnu Pooja Kit is a luxurious, hand-compiled collection of authentic ritual materials sourced directly from holy Varanasi. Curated under the expert guidance of veteran Kashi temple priests, this kit ensures your prayers, Vishnu Sahasranama recitations, or daily home pujas are performed with absolute Vedic correctness.",
      "Adhering to our strict non-perishable e-commerce shipping policy, this kit contains zero perishable items such as fresh flowers, banana leaves, milk, curd, honey, or fresh coconuts. In their place, we provide mature dry whole coconuts, pure chandan powder, organic incense, and sweet batasha. All ingredients are packed in air-tight pouches to ensure maximum shelf life and perfect delivery.",
      "Choose from three custom configurations. The Basic kit contains all essential samagri, guide books, Ganga water, 11 clay diyas, and dual altar cloths. The Standard kit adds brass vessels, a pooja thali, a bell, a brass-plated Vishnu Yantra, and a premium aasan. The Premium kit offers the ultimate set with copper lota/spoon, heavy brassware, pure Kesar, 21 clay diyas, and a reusable wooden storage box."
    ],
    "tags": [
      "Vishnu Puja",
      "Pooja Kit",
      "Varanasi Sourced",
      "Kashi Prasad",
      "Home Pooja Kit",
      "Lord Vishnu Puja",
      "Wealth & Protection"
    ],
    "price": 1699,
    "mrp": 3399,
    "variants": [
      {
        "id": "variant-basic-kit",
        "name": "Basic Kit",
        "price": 1699,
        "mrp": 3399,
        "badge": "Essential Vishnu Devotion",
        "suitableFor": "2–5 People",
        "description": "Contains all core non-perishable samagri, Lord Vishnu and Goddess Lakshmi photos, Vishnu Sahasranama book, clay diyas, and cloths for basic prayers.",
        "keyHighlights": [
          "Vishnu & Lakshmi photos & Aarti Card",
          "Vishnu Sahasranama & Pooja Vidhi Book & Gangajal (100ml)",
          "Roli, Haldi, Kumkum, Chandan & Akshat rice",
          "Supari (11 pcs), Cloves & Cardamom (20 pcs each)",
          "Steel Kalash, clay diyas (11 pcs) & Red/Yellow cloths"
        ],
        "samagriChecklist": [
          {
            "category": "Murtis, Photos & Books",
            "items": [
              {
                "name": "- Lord Vishnu Photo (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Goddess Lakshmi Photo (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Vishnu Pooja Vidhi Book (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Vishnu Sahasranama Booklet (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Vishnu Aarti Card (×1)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Sacred Ingredients & Herbs",
            "items": [
              {
                "name": "- Roli (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Haldi (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Kumkum (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Chandan Powder (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Akshat Rice (100g)",
                "quantity": "×1"
              },
              {
                "name": "- Supari (×11)",
                "quantity": "×1"
              },
              {
                "name": "- Cloves (×20)",
                "quantity": "×1"
              },
              {
                "name": "- Cardamom (×20)",
                "quantity": "×1"
              },
              {
                "name": "- Dry Coconut (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Panchmewa (Dry Fruits) (100g)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Ritual Cloths & Aasans",
            "items": [
              {
                "name": "- Mauli (Raksha Sutra) (×2)",
                "quantity": "×1"
              },
              {
                "name": "- Janeu (Sacred Thread) (×2)",
                "quantity": "×1"
              },
              {
                "name": "- Yellow Pooja Cloth (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Red Pooja Cloth (×1)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Sacred Metalware & Vessels",
            "items": [
              {
                "name": "- Sealed Gangajal (100ml)",
                "quantity": "×1"
              },
              {
                "name": "- Steel Kalash (×1)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Aroma & Lamps",
            "items": [
              {
                "name": "- Camphor (Kafur) (50g)",
                "quantity": "×1"
              },
              {
                "name": "- Incense Sticks (Agarbatti) (1 Pack)",
                "quantity": "×1"
              },
              {
                "name": "- Dhoop Cone Pack (1 Pack)",
                "quantity": "×1"
              },
              {
                "name": "- Cotton Wicks (×25)",
                "quantity": "×1"
              },
              {
                "name": "- Clay Diyas (×11)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Packaging & Organization",
            "items": [
              {
                "name": "- Mishri (Sugar Candy) (100g)",
                "quantity": "×1"
              },
              {
                "name": "- Batasha (Sugar Drops) (100g)",
                "quantity": "×1"
              }
            ]
          }
        ]
      },
      {
        "id": "variant-standard-kit",
        "name": "Standard Kit",
        "price": 2699,
        "mrp": 5399,
        "badge": "Best Seller • Recommended",
        "suitableFor": "4–8 People",
        "description": "Adds brass kalash, steel thali, brass diya, bell, aasan, brass-plated Vishnu Yantra, and custom organization bags.",
        "keyHighlights": [
          "Everything in Basic included",
          "Upgraded Brass Kalash & Brass Diya (×1)",
          "Steel Pooja Thali, Bowls (×2) & Bell",
          "Vishnu Yantra (Brass-plated) & Pooja Aasan",
          "Premium Chandan & organic wicks (75 pcs)",
          "Red Cloth Pouch, organizing zip bags & Premium Gift Box"
        ],
        "samagriChecklist": [
          {
            "category": "Murtis, Photos & Books",
            "items": [
              {
                "name": "- Lord Vishnu Photo (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Goddess Lakshmi Photo (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Vishnu Pooja Vidhi Book (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Vishnu Sahasranama Booklet (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Vishnu Aarti Card (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Vishnu Yantra (×1)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Sacred Ingredients & Herbs",
            "items": [
              {
                "name": "- Roli (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Haldi (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Kumkum (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Chandan Powder (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Premium Chandan (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Akshat Rice (100g)",
                "quantity": "×1"
              },
              {
                "name": "- Supari (×11)",
                "quantity": "×1"
              },
              {
                "name": "- Cloves (×20)",
                "quantity": "×1"
              },
              {
                "name": "- Cardamom (×20)",
                "quantity": "×1"
              },
              {
                "name": "- Dry Coconut (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Panchmewa (Dry Fruits) (100g)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Ritual Cloths & Aasans",
            "items": [
              {
                "name": "- Mauli (Raksha Sutra) (×4)",
                "quantity": "×1"
              },
              {
                "name": "- Janeu (Sacred Thread) (×6)",
                "quantity": "×1"
              },
              {
                "name": "- Yellow Pooja Cloth (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Red Pooja Cloth (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Pooja Aasan (×1)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Sacred Metalware & Vessels",
            "items": [
              {
                "name": "- Sealed Gangajal (100ml)",
                "quantity": "×1"
              },
              {
                "name": "- Steel Kalash (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Brass Kalash (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Steel Pooja Thali (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Steel Bowls (×2)",
                "quantity": "×1"
              },
              {
                "name": "- Pooja Spoon (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Temple Bell (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Brass Diya (×1)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Aroma & Lamps",
            "items": [
              {
                "name": "- Camphor (Kafur) (150g)",
                "quantity": "×1"
              },
              {
                "name": "- Incense Sticks (Agarbatti) (2 Packs)",
                "quantity": "×1"
              },
              {
                "name": "- Premium Dhoop Cone Pack (1 Pack)",
                "quantity": "×1"
              },
              {
                "name": "- Cotton Wicks (×75)",
                "quantity": "×1"
              },
              {
                "name": "- Clay Diyas (×11)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Packaging & Organization",
            "items": [
              {
                "name": "- Mishri (Sugar Candy) (100g)",
                "quantity": "×1"
              },
              {
                "name": "- Batasha (Sugar Drops) (100g)",
                "quantity": "×1"
              },
              {
                "name": "- Red Cloth Pouch (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Zip Pouches for organization (×5)",
                "quantity": "×1"
              },
              {
                "name": "- Kashi Prasad Instruction Card (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Premium Gift Box (×1)",
                "quantity": "×1"
              }
            ]
          }
        ]
      },
      {
        "id": "variant-premium-kit",
        "name": "Premium Kit",
        "price": 4599,
        "mrp": 9199,
        "badge": "Luxury Altar Collection",
        "suitableFor": "8–15 People",
        "description": "The ultimate Vishnu Devotion collection. Features heavy copper lota/spoon, premium brassware, copper-etched Vishnu Yantra, pure Kesar, natural Pooja Ittar, 21 clay diyas, and a reusable wooden storage box.",
        "keyHighlights": [
          "Everything in Standard included",
          "Large Brass Kalash & large Brass Diya (×1)",
          "Copper Lota & Copper Pooja Spoon",
          "Premium Copper-etched Vishnu Yantra",
          "Kesar (2g), Pooja Ittar, 21 Clay Diyas & wooden box",
          "Reusable Wooden Storage Box & Complete Checklist Card"
        ],
        "samagriChecklist": [
          {
            "category": "Murtis, Photos & Books",
            "items": [
              {
                "name": "- Lord Vishnu Photo (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Goddess Lakshmi Photo (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Vishnu Pooja Vidhi Book (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Vishnu Sahasranama Booklet (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Vishnu Aarti Card (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Premium Vishnu Yantra (Copper-etched) (×1)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Sacred Ingredients & Herbs",
            "items": [
              {
                "name": "- Roli (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Haldi (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Kumkum (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Chandan Powder (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Premium Chandan (50g)",
                "quantity": "×1"
              },
              {
                "name": "- Pure Kesar (Saffron) (2g)",
                "quantity": "×1"
              },
              {
                "name": "- Pooja Ittar (Fragrance) (1 Bottle)",
                "quantity": "×1"
              },
              {
                "name": "- Akshat Rice (100g)",
                "quantity": "×1"
              },
              {
                "name": "- Supari (×32)",
                "quantity": "×1"
              },
              {
                "name": "- Cloves (×20)",
                "quantity": "×1"
              },
              {
                "name": "- Cardamom (×20)",
                "quantity": "×1"
              },
              {
                "name": "- Dry Coconut (×3)",
                "quantity": "×1"
              },
              {
                "name": "- Panchmewa (Dry Fruits) (350g)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Ritual Cloths & Aasans",
            "items": [
              {
                "name": "- Mauli (Raksha Sutra) (×9)",
                "quantity": "×1"
              },
              {
                "name": "- Janeu (Sacred Thread) (×16)",
                "quantity": "×1"
              },
              {
                "name": "- Yellow Pooja Cloth (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Red Pooja Cloth (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Red Chowki Cloth (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Yellow Chowki Cloth (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Pooja Aasan (×1)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Sacred Metalware & Vessels",
            "items": [
              {
                "name": "- Sealed Gangajal (100ml)",
                "quantity": "×1"
              },
              {
                "name": "- Steel Kalash (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Brass Kalash (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Large Brass Kalash (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Steel Pooja Thali (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Premium Pooja Thali (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Steel Bowls (×6)",
                "quantity": "×1"
              },
              {
                "name": "- Pooja Spoon (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Copper Spoon (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Temple Bell (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Brass Bell (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Copper Lota (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Brass Diya (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Large Brass Diya (×1)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Aroma & Lamps",
            "items": [
              {
                "name": "- Camphor (Kafur) (350g)",
                "quantity": "×1"
              },
              {
                "name": "- Incense Sticks (Agarbatti) (2 Packs)",
                "quantity": "×1"
              },
              {
                "name": "- Premium Incense Packs (2 Packs)",
                "quantity": "×1"
              },
              {
                "name": "- Premium Dhoop Cone Pack (1 Pack)",
                "quantity": "×1"
              },
              {
                "name": "- Premium Dhoop Cones Extra (2 Packs)",
                "quantity": "×1"
              },
              {
                "name": "- Cotton Wicks (×175)",
                "quantity": "×1"
              },
              {
                "name": "- Clay Diyas (×21)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Packaging & Organization",
            "items": [
              {
                "name": "- Mishri (Sugar Candy) (350g)",
                "quantity": "×1"
              },
              {
                "name": "- Batasha (Sugar Drops) (350g)",
                "quantity": "×1"
              },
              {
                "name": "- Red Cloth Pouch (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Zip Pouches for organization (×5)",
                "quantity": "×1"
              },
              {
                "name": "- Kashi Prasad Instruction Card (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Complete Checklist Card (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Premium Kashi Prasad Gift Packaging (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Reusable Wooden Storage Box (×1)",
                "quantity": "×1"
              }
            ]
          }
        ]
      }
    ],
    "specifications": [
      {
        "groupName": "Devotion & Metal Purity",
        "specs": [
          {
            "label": "Yantras Metal",
            "value": "Premium etched Copper Vishnu Yantra"
          },
          {
            "label": "Brass Castings",
            "value": "Grade-A solid Brass Kalash, bell & shanti diya"
          },
          {
            "label": "Copper Vessels",
            "value": "99.2% Pure copper lota & spoon for gangajal"
          },
          {
            "label": "Aura Cloths",
            "value": "Yellow and Red silk with hand-woven borders"
          }
        ]
      },
      {
        "groupName": "Origin & Sourcing",
        "specs": [
          {
            "label": "Compilation Origin",
            "value": "Holy city of Kashi under priest supervision"
          },
          {
            "label": "Sourcing Sincerity",
            "value": "100% Sourced & energized in Varanasi temples"
          },
          {
            "label": "Non-Perishable Promise",
            "value": "Guaranteed free of fresh fruits/flowers/milk/curd/mango leaves"
          },
          {
            "label": "Net Weight",
            "value": "Basic: ~1.4kg | Standard: ~2.8kg | Premium: ~4.6kg"
          }
        ]
      }
    ],
    "faqs": [
      {
        "q": "What is the difference between standard and premium Vishnu Yantras?",
        "a": "The Standard kit features an energized brass-plated Vishnu Yantra, and the Premium kit upgrades this to a premium copper-etched Vishnu Yantra. Both are purified and energized in Vishnu temples in Varanasi by priests."
      },
      {
        "q": "Does this kit contain Panchamrit ingredients?",
        "a": "No. In accordance with Kashi Prasad's non-perishable shipping guidelines, we do not ship fresh milk, curd, honey, fresh flowers, or fresh leaves. Instead, we provide mature dry whole coconuts, organic chandan powder, sweet offerings (batasha and mishri), and dry fruits (panchmewa) in airtight packages which have long shelf lives and arrive in pristine condition."
      },
      {
        "q": "How many clay diyas are included in the variants?",
        "a": "The Basic and Standard kits contain 11 clay diyas. The Premium kit features a large brass diya alongside 21 clay diyas and 175 cotton wicks, providing abundant light for Vishnu prayers."
      }
    ],
    "shippingGuarantee": "**Sacred Vishnu Blessing Dispatch Direct from Varanasi**\n\nEvery order is packaged with utmost care and dispatched from Varanasi within 24 hours. We offer free cash on delivery across India.",
    "isPlaceholder": false
  },
  {
    "id": "pk-saraswati-pooja-kit",
    "slug": "saraswati-pooja-kit",
    "name": "Saraswati Pooja Kit",
    "category": "Puja Kits",
    "image": "/assets/puja-kits/12-saraswati-pooja-kit.jpg",
    "badge": "Best Seller",
    "rating": 4.9,
    "reviewCount": 318,
    "tagline": "Sacred Vedic Saraswati Devotion & Wisdom Samagri",
    "shortDescription": "A premium collection of authentic, non-perishable Goddess Saraswati Pooja items sourced from Varanasi. Blessed under priest supervision, ideal for Basant Panchami, students, or home altar prayers.",
    "detailedOverview": [
      "Invite the supreme, preserving power of Goddess Saraswati and the intellect of Lord Ganesha into your home. The Kashi Prasad Saraswati Pooja Kit is a luxurious, hand-compiled collection of authentic ritual materials sourced directly from holy Varanasi. Curated under the expert guidance of veteran Kashi temple priests, this kit ensures your prayers, Saraswati Vandana recitations, or Basant Panchami home pujas are performed with absolute Vedic correctness.",
      "Adhering to our strict non-perishable e-commerce shipping policy, this kit contains zero perishable items such as fresh flowers, banana leaves, milk, curd, honey, or fresh coconuts. In their place, we provide mature dry whole coconuts, pure chandan powder, organic incense, and sweet batasha. All ingredients are packed in air-tight pouches to ensure maximum shelf life and perfect delivery.",
      "Choose from three custom configurations. The Basic kit contains all essential samagri, guide books, Ganga water, 11 clay diyas, and dual altar cloths. The Standard kit adds brass vessels, a pooja thali, a bell, a brass-plated Saraswati Yantra, and a premium aasan. The Premium kit offers the ultimate set with copper lota/spoon, heavy brassware, pure Kesar, 21 clay diyas, and a reusable wooden storage box."
    ],
    "tags": [
      "Saraswati Puja",
      "Pooja Kit",
      "Varanasi Sourced",
      "Kashi Prasad",
      "Home Pooja Kit",
      "Goddess Saraswati Puja",
      "Wisdom & Intellect"
    ],
    "price": 1699,
    "mrp": 3399,
    "variants": [
      {
        "id": "variant-basic-kit",
        "name": "Basic Kit",
        "price": 1699,
        "mrp": 3399,
        "badge": "Essential Saraswati Devotion",
        "suitableFor": "2–5 People",
        "description": "Contains all core non-perishable samagri, Goddess Saraswati and Lord Ganesha photos, Saraswati Vandana book, clay diyas, and cloths for basic prayers.",
        "keyHighlights": [
          "Saraswati & Ganesha photos & Aarti Card",
          "Saraswati Vandana & Pooja Vidhi Book & Gangajal (100ml)",
          "Roli, Haldi, Kumkum, Chandan & Akshat rice",
          "Supari (11 pcs), Cloves & Cardamom (20 pcs each)",
          "Steel Kalash, clay diyas (11 pcs) & White/Yellow cloths"
        ],
        "samagriChecklist": [
          {
            "category": "Murtis, Photos & Books",
            "items": [
              {
                "name": "- Goddess Saraswati Photo (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Lord Ganesha Photo (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Saraswati Pooja Vidhi Book (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Saraswati Vandana Booklet (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Saraswati Aarti Card (×1)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Sacred Ingredients & Herbs",
            "items": [
              {
                "name": "- Roli (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Haldi (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Kumkum (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Chandan Powder (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Akshat Rice (100g)",
                "quantity": "×1"
              },
              {
                "name": "- Supari (×11)",
                "quantity": "×1"
              },
              {
                "name": "- Cloves (×20)",
                "quantity": "×1"
              },
              {
                "name": "- Cardamom (×20)",
                "quantity": "×1"
              },
              {
                "name": "- Dry Coconut (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Panchmewa (Dry Fruits) (100g)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Ritual Cloths & Aasans",
            "items": [
              {
                "name": "- Mauli (Raksha Sutra) (×2)",
                "quantity": "×1"
              },
              {
                "name": "- Janeu (Sacred Thread) (×2)",
                "quantity": "×1"
              },
              {
                "name": "- White Pooja Cloth (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Yellow Pooja Cloth (×1)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Sacred Metalware & Vessels",
            "items": [
              {
                "name": "- Sealed Gangajal (100ml)",
                "quantity": "×1"
              },
              {
                "name": "- Steel Kalash (×1)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Aroma & Lamps",
            "items": [
              {
                "name": "- Camphor (Kafur) (50g)",
                "quantity": "×1"
              },
              {
                "name": "- Incense Sticks (Agarbatti) (1 Pack)",
                "quantity": "×1"
              },
              {
                "name": "- Dhoop Cone Pack (1 Pack)",
                "quantity": "×1"
              },
              {
                "name": "- Cotton Wicks (×25)",
                "quantity": "×1"
              },
              {
                "name": "- Clay Diyas (×11)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Packaging & Organization",
            "items": [
              {
                "name": "- Mishri (Sugar Candy) (100g)",
                "quantity": "×1"
              },
              {
                "name": "- Batasha (Sugar Drops) (100g)",
                "quantity": "×1"
              }
            ]
          }
        ]
      },
      {
        "id": "variant-standard-kit",
        "name": "Standard Kit",
        "price": 2699,
        "mrp": 5399,
        "badge": "Best Seller • Recommended",
        "suitableFor": "4–8 People",
        "description": "Adds brass kalash, steel thali, brass diya, bell, aasan, brass-plated Saraswati Yantra, and custom organization bags.",
        "keyHighlights": [
          "Everything in Basic included",
          "Upgraded Brass Kalash & Brass Diya (×1)",
          "Steel Pooja Thali, Bowls (×2) & Bell",
          "Saraswati Yantra (Brass-plated) & Pooja Aasan",
          "Premium Chandan & organic wicks (75 pcs)",
          "Red Cloth Pouch, organizing zip bags & Premium Gift Box"
        ],
        "samagriChecklist": [
          {
            "category": "Murtis, Photos & Books",
            "items": [
              {
                "name": "- Goddess Saraswati Photo (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Lord Ganesha Photo (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Saraswati Pooja Vidhi Book (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Saraswati Vandana Booklet (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Goddess Saraswati Aarti Card (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Saraswati Yantra (×1)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Sacred Ingredients & Herbs",
            "items": [
              {
                "name": "- Roli (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Haldi (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Kumkum (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Chandan Powder (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Premium Chandan (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Akshat Rice (100g)",
                "quantity": "×1"
              },
              {
                "name": "- Supari (×11)",
                "quantity": "×1"
              },
              {
                "name": "- Cloves (×20)",
                "quantity": "×1"
              },
              {
                "name": "- Cardamom (×20)",
                "quantity": "×1"
              },
              {
                "name": "- Dry Coconut (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Panchmewa (Dry Fruits) (100g)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Ritual Cloths & Aasans",
            "items": [
              {
                "name": "- Mauli (Raksha Sutra) (×4)",
                "quantity": "×1"
              },
              {
                "name": "- Janeu (Sacred Thread) (×6)",
                "quantity": "×1"
              },
              {
                "name": "- White Pooja Cloth (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Yellow Pooja Cloth (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Pooja Aasan (×1)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Sacred Metalware & Vessels",
            "items": [
              {
                "name": "- Sealed Gangajal (100ml)",
                "quantity": "×1"
              },
              {
                "name": "- Steel Kalash (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Brass Kalash (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Steel Pooja Thali (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Steel Bowls (×2)",
                "quantity": "×1"
              },
              {
                "name": "- Pooja Spoon (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Temple Bell (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Brass Diya (×1)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Aroma & Lamps",
            "items": [
              {
                "name": "- Camphor (Kafur) (150g)",
                "quantity": "×1"
              },
              {
                "name": "- Incense Sticks (Agarbatti) (2 Packs)",
                "quantity": "×1"
              },
              {
                "name": "- Premium Dhoop Cone Pack (1 Pack)",
                "quantity": "×1"
              },
              {
                "name": "- Cotton Wicks (×75)",
                "quantity": "×1"
              },
              {
                "name": "- Clay Diyas (×11)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Packaging & Organization",
            "items": [
              {
                "name": "- Mishri (Sugar Candy) (100g)",
                "quantity": "×1"
              },
              {
                "name": "- Batasha (Sugar Drops) (100g)",
                "quantity": "×1"
              },
              {
                "name": "- Red Cloth Pouch (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Zip Pouches for organization (×5)",
                "quantity": "×1"
              },
              {
                "name": "- Kashi Prasad Instruction Card (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Premium Gift Box (×1)",
                "quantity": "×1"
              }
            ]
          }
        ]
      },
      {
        "id": "variant-premium-kit",
        "name": "Premium Kit",
        "price": 4599,
        "mrp": 9199,
        "badge": "Luxury Altar Collection",
        "suitableFor": "8–15 People",
        "description": "The ultimate Saraswati Devotion collection. Features heavy copper lota/spoon, premium brassware, copper-etched Saraswati Yantra, pure Kesar, natural Pooja Ittar, 21 clay diyas, and a reusable wooden storage box.",
        "keyHighlights": [
          "Everything in Standard included",
          "Large Brass Kalash & large Brass Diya (×1)",
          "Copper Lota & Copper Pooja Spoon",
          "Premium Copper-etched Saraswati Yantra",
          "Kesar (2g), Pooja Ittar, 21 Clay Diyas & wooden box",
          "Reusable Wooden Storage Box & Complete Checklist Card"
        ],
        "samagriChecklist": [
          {
            "category": "Murtis, Photos & Books",
            "items": [
              {
                "name": "- Goddess Saraswati Photo (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Lord Ganesha Photo (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Saraswati Pooja Vidhi Book (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Saraswati Vandana Booklet (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Goddess Saraswati Aarti Card (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Premium Saraswati Yantra (Copper-etched) (×1)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Sacred Ingredients & Herbs",
            "items": [
              {
                "name": "- Roli (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Haldi (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Kumkum (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Chandan Powder (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Premium Chandan (50g)",
                "quantity": "×1"
              },
              {
                "name": "- Pure Kesar (Saffron) (2g)",
                "quantity": "×1"
              },
              {
                "name": "- Pooja Ittar (Fragrance) (1 Bottle)",
                "quantity": "×1"
              },
              {
                "name": "- Akshat Rice (100g)",
                "quantity": "×1"
              },
              {
                "name": "- Supari (×32)",
                "quantity": "×1"
              },
              {
                "name": "- Cloves (×20)",
                "quantity": "×1"
              },
              {
                "name": "- Cardamom (×20)",
                "quantity": "×1"
              },
              {
                "name": "- Dry Coconut (×3)",
                "quantity": "×1"
              },
              {
                "name": "- Panchmewa (Dry Fruits) (350g)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Ritual Cloths & Aasans",
            "items": [
              {
                "name": "- Mauli (Raksha Sutra) (×9)",
                "quantity": "×1"
              },
              {
                "name": "- Janeu (Sacred Thread) (×16)",
                "quantity": "×1"
              },
              {
                "name": "- White Pooja Cloth (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Yellow Pooja Cloth (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Red Chowki Cloth (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Yellow Chowki Cloth (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Pooja Aasan (×1)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Sacred Metalware & Vessels",
            "items": [
              {
                "name": "- Sealed Gangajal (100ml)",
                "quantity": "×1"
              },
              {
                "name": "- Steel Kalash (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Brass Kalash (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Large Brass Kalash (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Steel Pooja Thali (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Premium Pooja Thali (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Steel Bowls (×6)",
                "quantity": "×1"
              },
              {
                "name": "- Pooja Spoon (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Copper Spoon (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Temple Bell (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Brass Bell (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Copper Lota (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Brass Diya (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Large Brass Diya (×1)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Aroma & Lamps",
            "items": [
              {
                "name": "- Camphor (Kafur) (350g)",
                "quantity": "×1"
              },
              {
                "name": "- Incense Sticks (Agarbatti) (2 Packs)",
                "quantity": "×1"
              },
              {
                "name": "- Premium Incense Packs (2 Packs)",
                "quantity": "×1"
              },
              {
                "name": "- Premium Dhoop Cone Pack (1 Pack)",
                "quantity": "×1"
              },
              {
                "name": "- Premium Dhoop Cones Extra (2 Packs)",
                "quantity": "×1"
              },
              {
                "name": "- Cotton Wicks (×175)",
                "quantity": "×1"
              },
              {
                "name": "- Clay Diyas (×21)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Packaging & Organization",
            "items": [
              {
                "name": "- Mishri (Sugar Candy) (350g)",
                "quantity": "×1"
              },
              {
                "name": "- Batasha (Sugar Drops) (350g)",
                "quantity": "×1"
              },
              {
                "name": "- Red Cloth Pouch (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Zip Pouches for organization (×5)",
                "quantity": "×1"
              },
              {
                "name": "- Kashi Prasad Instruction Card (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Complete Checklist Card (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Premium Kashi Prasad Gift Packaging (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Reusable Wooden Storage Box (×1)",
                "quantity": "×1"
              }
            ]
          }
        ]
      }
    ],
    "specifications": [
      {
        "groupName": "Devotion & Metal Purity",
        "specs": [
          {
            "label": "Yantras Metal",
            "value": "Premium etched Copper Saraswati Yantra"
          },
          {
            "label": "Brass Castings",
            "value": "Grade-A solid Brass Kalash, bell & shanti diya"
          },
          {
            "label": "Copper Vessels",
            "value": "99.2% Pure copper lota & spoon for gangajal"
          },
          {
            "label": "Aura Cloths",
            "value": "White and Yellow silk with hand-woven borders"
          }
        ]
      },
      {
        "groupName": "Origin & Sourcing",
        "specs": [
          {
            "label": "Compilation Origin",
            "value": "Holy city of Kashi under priest supervision"
          },
          {
            "label": "Sourcing Sincerity",
            "value": "100% Sourced & energized in Varanasi temples"
          },
          {
            "label": "Non-Perishable Promise",
            "value": "Guaranteed free of fresh fruits/flowers/milk/curd/mango leaves"
          },
          {
            "label": "Net Weight",
            "value": "Basic: ~1.4kg | Standard: ~2.8kg | Premium: ~4.6kg"
          }
        ]
      }
    ],
    "faqs": [
      {
        "q": "What is the difference between standard and premium Saraswati Yantras?",
        "a": "The Standard kit features an energized brass-plated Saraswati Yantra, and the Premium kit upgrades this to a premium copper-etched Saraswati Yantra. Both are purified and energized in Saraswati temples in Varanasi by priests to bring intellect and wisdom."
      },
      {
        "q": "Does this kit contain Panchamrit ingredients?",
        "a": "No. In accordance with Kashi Prasad's non-perishable shipping guidelines, we do not ship fresh milk, curd, honey, fresh flowers, or fresh leaves. Instead, we provide mature dry whole coconuts, organic chandan powder, sweet offerings (batasha and mishri), and dry fruits (panchmewa) in airtight packages which have long shelf lives and arrive in pristine condition."
      },
      {
        "q": "How many clay diyas are included in the variants?",
        "a": "The Basic and Standard kits contain 11 clay diyas. The Premium kit features a large brass diya alongside 21 clay diyas and 175 cotton wicks, providing abundant light for Saraswati prayers."
      }
    ],
    "shippingGuarantee": "**Sacred Saraswati Blessing Dispatch Direct from Varanasi**\n\nEvery order is packaged with utmost care and dispatched from Varanasi within 24 hours. We offer free cash on delivery across India.",
    "isPlaceholder": false
  },
  {
    "id": "pk-shani-dev-pooja-kit",
    "slug": "shani-dev-pooja-kit",
    "name": "Shani Dev Pooja Kit",
    "category": "Puja Kits",
    "image": "/assets/puja-kits/13-shani-dev-pooja-kit.jpg",
    "badge": "Best Seller",
    "rating": 4.9,
    "reviewCount": 298,
    "tagline": "Sacred Vedic Shani Dev Protection & Justice Samagri",
    "shortDescription": "A premium collection of authentic, non-perishable Lord Shani Dev Pooja items sourced from Varanasi. Blessed under priest supervision, ideal for protection and justice.",
    "detailedOverview": [
      "Invite the supreme, preserving power of Lord Shani Dev and the protection of Lord Hanuman into your home. The Kashi Prasad Shani Dev Pooja Kit is a luxurious, hand-compiled collection of authentic ritual materials sourced directly from holy Varanasi. Curated under the expert guidance of veteran Kashi temple priests, this kit ensures your prayers, Shani Chalisa recitations, or Shani Amavasya home pujas are performed with absolute Vedic correctness.",
      "Adhering to our strict non-perishable and leakage-free e-commerce shipping policy, this kit contains zero perishable items or liquids like fresh flowers, banana leaves, milk, curd, honey, mustard oil, or sesame oil. In their place, we provide premium black sesame seeds (kala til), mature dry whole coconuts, pure chandan powder, organic incense, and sweet batasha. All ingredients are packed in air-tight pouches to ensure maximum shelf life and perfect delivery.",
      "Choose from three custom configurations. The Basic kit contains all essential samagri, guide books, Ganga water, 11 clay diyas, and dual altar cloths. The Standard kit adds brass vessels, a pooja thali, a bell, a brass-plated Shani Yantra, and a premium aasan. The Premium kit offers the ultimate set with copper lota/spoon, heavy brassware, pure Kesar, 21 clay diyas, extra sesame seeds, and a reusable wooden storage box."
    ],
    "tags": [
      "Shani Dev Puja",
      "Pooja Kit",
      "Varanasi Sourced",
      "Kashi Prasad",
      "Home Pooja Kit",
      "Lord Shani Puja",
      "Protection & Justice"
    ],
    "price": 1699,
    "mrp": 3399,
    "variants": [
      {
        "id": "variant-basic-kit",
        "name": "Basic Kit",
        "price": 1699,
        "mrp": 3399,
        "badge": "Essential Shani Devotion",
        "suitableFor": "2–5 People",
        "description": "Contains all core non-perishable samagri, Lord Shani Dev and Lord Hanuman photos, Shani Chalisa book, clay diyas, and cloths for basic prayers.",
        "keyHighlights": [
          "Shani Dev & Hanuman photos & Aarti Card",
          "Shani Chalisa & Pooja Vidhi Book & Gangajal (100ml)",
          "Black Sesame Seeds (100g) & Roli, Haldi, Kumkum, Chandan",
          "Supari (11 pcs), Cloves & Cardamom (20 pcs each)",
          "Steel Kalash, clay diyas (11 pcs) & Black/Blue cloths"
        ],
        "samagriChecklist": [
          {
            "category": "Murtis, Photos & Books",
            "items": [
              {
                "name": "- Lord Shani Dev Photo (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Lord Hanuman Photo (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Shani Pooja Vidhi Book (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Shani Chalisa (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Shani Aarti Card (×1)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Sacred Ingredients & Herbs",
            "items": [
              {
                "name": "- Roli (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Haldi (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Kumkum (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Chandan Powder (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Akshat Rice (100g)",
                "quantity": "×1"
              },
              {
                "name": "- Supari (×11)",
                "quantity": "×1"
              },
              {
                "name": "- Black Sesame Seeds (100g)",
                "quantity": "×1"
              },
              {
                "name": "- Cloves (×20)",
                "quantity": "×1"
              },
              {
                "name": "- Cardamom (×20)",
                "quantity": "×1"
              },
              {
                "name": "- Dry Coconut (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Panchmewa (Dry Fruits) (100g)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Ritual Cloths & Aasans",
            "items": [
              {
                "name": "- Mauli (Raksha Sutra) (×2)",
                "quantity": "×1"
              },
              {
                "name": "- Janeu (Sacred Thread) (×2)",
                "quantity": "×1"
              },
              {
                "name": "- Black Pooja Cloth (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Blue Pooja Cloth (×1)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Sacred Metalware & Vessels",
            "items": [
              {
                "name": "- Sealed Gangajal (100ml)",
                "quantity": "×1"
              },
              {
                "name": "- Steel Kalash (×1)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Aroma & Lamps",
            "items": [
              {
                "name": "- Camphor (Kafur) (50g)",
                "quantity": "×1"
              },
              {
                "name": "- Incense Sticks (Agarbatti) (1 Pack)",
                "quantity": "×1"
              },
              {
                "name": "- Dhoop Cone Pack (1 Pack)",
                "quantity": "×1"
              },
              {
                "name": "- Cotton Wicks (×25)",
                "quantity": "×1"
              },
              {
                "name": "- Clay Diyas (×11)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Packaging & Organization",
            "items": [
              {
                "name": "- Mishri (Sugar Candy) (100g)",
                "quantity": "×1"
              },
              {
                "name": "- Batasha (Sugar Drops) (100g)",
                "quantity": "×1"
              }
            ]
          }
        ]
      },
      {
        "id": "variant-standard-kit",
        "name": "Standard Kit",
        "price": 2699,
        "mrp": 5399,
        "badge": "Best Seller • Recommended",
        "suitableFor": "4–8 People",
        "description": "Adds brass kalash, steel thali, brass diya, bell, aasan, brass-plated Shani Yantra, and custom organization bags.",
        "keyHighlights": [
          "Everything in Basic included",
          "Upgraded Brass Kalash & Brass Diya (×1)",
          "Steel Pooja Thali, Bowls (×2) & Bell",
          "Shani Yantra (Brass-plated) & Pooja Aasan",
          "Premium Chandan & organic wicks (75 pcs)",
          "Red Cloth Pouch, organizing zip bags & Premium Gift Box"
        ],
        "samagriChecklist": [
          {
            "category": "Murtis, Photos & Books",
            "items": [
              {
                "name": "- Lord Shani Dev Photo (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Lord Hanuman Photo (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Shani Pooja Vidhi Book (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Shani Chalisa (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Shani Aarti Card (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Shani Yantra (×1)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Sacred Ingredients & Herbs",
            "items": [
              {
                "name": "- Roli (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Haldi (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Kumkum (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Chandan Powder (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Premium Chandan (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Akshat Rice (100g)",
                "quantity": "×1"
              },
              {
                "name": "- Supari (×11)",
                "quantity": "×1"
              },
              {
                "name": "- Black Sesame Seeds (100g)",
                "quantity": "×1"
              },
              {
                "name": "- Cloves (×20)",
                "quantity": "×1"
              },
              {
                "name": "- Cardamom (×20)",
                "quantity": "×1"
              },
              {
                "name": "- Dry Coconut (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Panchmewa (Dry Fruits) (100g)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Ritual Cloths & Aasans",
            "items": [
              {
                "name": "- Mauli (Raksha Sutra) (×4)",
                "quantity": "×1"
              },
              {
                "name": "- Janeu (Sacred Thread) (×6)",
                "quantity": "×1"
              },
              {
                "name": "- Black Pooja Cloth (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Blue Pooja Cloth (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Pooja Aasan (×1)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Sacred Metalware & Vessels",
            "items": [
              {
                "name": "- Sealed Gangajal (100ml)",
                "quantity": "×1"
              },
              {
                "name": "- Steel Kalash (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Brass Kalash (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Steel Pooja Thali (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Steel Bowls (×2)",
                "quantity": "×1"
              },
              {
                "name": "- Pooja Spoon (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Temple Bell (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Brass Diya (×1)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Aroma & Lamps",
            "items": [
              {
                "name": "- Camphor (Kafur) (150g)",
                "quantity": "×1"
              },
              {
                "name": "- Incense Sticks (Agarbatti) (2 Packs)",
                "quantity": "×1"
              },
              {
                "name": "- Premium Dhoop Cone Pack (1 Pack)",
                "quantity": "×1"
              },
              {
                "name": "- Cotton Wicks (×75)",
                "quantity": "×1"
              },
              {
                "name": "- Clay Diyas (×11)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Packaging & Organization",
            "items": [
              {
                "name": "- Mishri (Sugar Candy) (100g)",
                "quantity": "×1"
              },
              {
                "name": "- Batasha (Sugar Drops) (100g)",
                "quantity": "×1"
              },
              {
                "name": "- Black Cloth Pouch (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Zip Pouches for organization (×5)",
                "quantity": "×1"
              },
              {
                "name": "- Kashi Prasad Instruction Card (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Premium Gift Box (×1)",
                "quantity": "×1"
              }
            ]
          }
        ]
      },
      {
        "id": "variant-premium-kit",
        "name": "Premium Kit",
        "price": 4599,
        "mrp": 9199,
        "badge": "Luxury Altar Collection",
        "suitableFor": "8–15 People",
        "description": "The ultimate Shani Dev Devotion collection. Features heavy copper lota/spoon, premium brassware, copper-etched Shani Yantra, pure Kesar, natural Pooja Ittar, 21 clay diyas, extra sesame seeds, and a reusable wooden storage box.",
        "keyHighlights": [
          "Everything in Standard included",
          "Large Brass Kalash & large Brass Diya (×1)",
          "Copper Lota & Copper Pooja Spoon",
          "Premium Copper-etched Shani Yantra",
          "Kesar (2g), Pooja Ittar, 21 Clay Diyas & wooden box",
          "Reusable Wooden Storage Box & Complete Checklist Card"
        ],
        "samagriChecklist": [
          {
            "category": "Murtis, Photos & Books",
            "items": [
              {
                "name": "- Lord Shani Dev Photo (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Lord Hanuman Photo (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Shani Pooja Vidhi Book (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Shani Chalisa (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Shani Aarti Card (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Premium Shani Yantra (Copper-etched) (×1)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Sacred Ingredients & Herbs",
            "items": [
              {
                "name": "- Roli (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Haldi (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Kumkum (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Chandan Powder (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Premium Chandan (50g)",
                "quantity": "×1"
              },
              {
                "name": "- Pure Kesar (Saffron) (2g)",
                "quantity": "×1"
              },
              {
                "name": "- Pooja Ittar (Fragrance) (1 Bottle)",
                "quantity": "×1"
              },
              {
                "name": "- Akshat Rice (100g)",
                "quantity": "×1"
              },
              {
                "name": "- Supari (×32)",
                "quantity": "×1"
              },
              {
                "name": "- Black Sesame Seeds (350g)",
                "quantity": "×1"
              },
              {
                "name": "- Cloves (×20)",
                "quantity": "×1"
              },
              {
                "name": "- Cardamom (×20)",
                "quantity": "×1"
              },
              {
                "name": "- Dry Coconut (×3)",
                "quantity": "×1"
              },
              {
                "name": "- Panchmewa (Dry Fruits) (350g)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Ritual Cloths & Aasans",
            "items": [
              {
                "name": "- Mauli (Raksha Sutra) (×9)",
                "quantity": "×1"
              },
              {
                "name": "- Janeu (Sacred Thread) (×16)",
                "quantity": "×1"
              },
              {
                "name": "- Black Pooja Cloth (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Blue Pooja Cloth (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Red Chowki Cloth (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Yellow Chowki Cloth (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Pooja Aasan (×1)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Sacred Metalware & Vessels",
            "items": [
              {
                "name": "- Sealed Gangajal (100ml)",
                "quantity": "×1"
              },
              {
                "name": "- Steel Kalash (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Brass Kalash (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Large Brass Kalash (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Steel Pooja Thali (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Premium Pooja Thali (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Steel Bowls (×6)",
                "quantity": "×1"
              },
              {
                "name": "- Pooja Spoon (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Copper Spoon (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Temple Bell (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Brass Bell (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Copper Lota (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Brass Diya (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Large Brass Diya (×1)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Aroma & Lamps",
            "items": [
              {
                "name": "- Camphor (Kafur) (350g)",
                "quantity": "×1"
              },
              {
                "name": "- Incense Sticks (Agarbatti) (2 Packs)",
                "quantity": "×1"
              },
              {
                "name": "- Premium Incense Packs (2 Packs)",
                "quantity": "×1"
              },
              {
                "name": "- Premium Dhoop Cone Pack (1 Pack)",
                "quantity": "×1"
              },
              {
                "name": "- Premium Dhoop Cones Extra (2 Packs)",
                "quantity": "×1"
              },
              {
                "name": "- Cotton Wicks (×175)",
                "quantity": "×1"
              },
              {
                "name": "- Clay Diyas (×21)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Packaging & Organization",
            "items": [
              {
                "name": "- Mishri (Sugar Candy) (350g)",
                "quantity": "×1"
              },
              {
                "name": "- Batasha (Sugar Drops) (350g)",
                "quantity": "×1"
              },
              {
                "name": "- Black Cloth Pouch (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Zip Pouches for organization (×5)",
                "quantity": "×1"
              },
              {
                "name": "- Kashi Prasad Instruction Card (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Complete Checklist Card (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Premium Kashi Prasad Gift Packaging (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Reusable Wooden Storage Box (×1)",
                "quantity": "×1"
              }
            ]
          }
        ]
      }
    ],
    "specifications": [
      {
        "groupName": "Devotion & Metal Purity",
        "specs": [
          {
            "label": "Yantras Metal",
            "value": "Premium etched Copper Shani Yantra"
          },
          {
            "label": "Brass Castings",
            "value": "Grade-A solid Brass Kalash, bell & shanti diya"
          },
          {
            "label": "Copper Vessels",
            "value": "99.2% Pure copper lota & spoon for gangajal"
          },
          {
            "label": "Aura Cloths",
            "value": "Black and Blue silk with hand-woven borders"
          }
        ]
      },
      {
        "groupName": "Origin & Sourcing",
        "specs": [
          {
            "label": "Compilation Origin",
            "value": "Holy city of Kashi under priest supervision"
          },
          {
            "label": "Sourcing Sincerity",
            "value": "100% Sourced & energized in Varanasi temples"
          },
          {
            "label": "Non-Perishable Promise",
            "value": "Guaranteed free of fresh fruits/flowers/milk/curd/mango leaves/oils"
          },
          {
            "label": "Net Weight",
            "value": "Basic: ~1.4kg | Standard: ~2.8kg | Premium: ~4.6kg"
          }
        ]
      }
    ],
    "faqs": [
      {
        "q": "What is the difference between standard and premium Shani Yantras?",
        "a": "The Standard kit features an energized brass-plated Shani Yantra, and the Premium kit upgrades this to a premium copper-etched Shani Yantra. Both are purified and energized in Shani Dev temples in Varanasi by priests to invoke protection and ward off malefic planetary effects."
      },
      {
        "q": "Does this kit contain mustard oil or sesame oil?",
        "a": "No. In accordance with Kashi Prasad's non-perishable and leakage-free e-commerce guidelines, we do not ship mustard oil, sesame oil, fresh flowers, or fresh leaves. Instead, we provide black sesame seeds (kala til), dry coconuts, organic chandan powder, sweet offerings (batasha and mishri), and dry fruits (panchmewa) in airtight packages which have long shelf lives and arrive in pristine condition."
      },
      {
        "q": "How many clay diyas are included in the variants?",
        "a": "The Basic and Standard kits contain 11 clay diyas. The Premium kit features a large brass diya alongside 21 clay diyas and 175 cotton wicks, providing abundant light for Shani Dev prayers."
      }
    ],
    "shippingGuarantee": "**Sacred Shani Dev Blessing Dispatch Direct from Varanasi**\n\nEvery order is packaged with utmost care and dispatched from Varanasi within 24 hours. We offer free cash on delivery across India.",
    "isPlaceholder": false
  },
  {
    "id": "pk-surya-dev-pooja-kit",
    "slug": "surya-dev-pooja-kit",
    "name": "Surya Dev Pooja Kit",
    "category": "Puja Kits",
    "image": "/assets/puja-kits/14-surya-dev-pooja-kit.jpg",
    "badge": "Best Seller",
    "rating": 4.9,
    "reviewCount": 284,
    "tagline": "Sacred Vedic Surya Dev Vitality & Health Samagri",
    "shortDescription": "A premium collection of authentic, non-perishable Lord Surya Dev Pooja items sourced from Varanasi. Blessed under priest supervision, ideal for health, vitality, and career success.",
    "detailedOverview": [
      "Invite the supreme, preserving power of Lord Surya Dev and the intelligence of Lord Ganesha into your home. The Kashi Prasad Surya Dev Pooja Kit is a luxurious, hand-compiled collection of authentic ritual materials sourced directly from holy Varanasi. Curated under the expert guidance of veteran Kashi temple priests, this kit ensures your prayers, Aditya Hridaya Stotra recitations, or Sunday home pujas are performed with absolute Vedic correctness.",
      "Adhering to our strict non-perishable e-commerce shipping policy, this kit contains zero perishable items such as fresh flowers, banana leaves, milk, curd, honey, or fresh coconuts. In their place, we provide mature dry whole coconuts, pure chandan powder, organic incense, and sweet batasha. All ingredients are packed in air-tight pouches to ensure maximum shelf life and perfect delivery.",
      "Choose from three custom configurations. The Basic kit contains all essential samagri, guide books, Ganga water, 11 clay diyas, and dual altar cloths. The Standard kit adds brass vessels, a pooja thali, a bell, a brass-plated Surya Yantra, and a premium aasan. The Premium kit offers the ultimate set with copper lota/spoon, heavy brassware, pure Kesar, 21 clay diyas, and a reusable wooden storage box."
    ],
    "tags": [
      "Surya Dev Puja",
      "Pooja Kit",
      "Varanasi Sourced",
      "Kashi Prasad",
      "Home Pooja Kit",
      "Lord Surya Puja",
      "Vitality & Health"
    ],
    "price": 1699,
    "mrp": 3399,
    "variants": [
      {
        "id": "variant-basic-kit",
        "name": "Basic Kit",
        "price": 1699,
        "mrp": 3399,
        "badge": "Essential Surya Devotion",
        "suitableFor": "2–5 People",
        "description": "Contains all core non-perishable samagri, Lord Surya Dev and Lord Ganesha photos, Aditya Hridaya booklet, clay diyas, and cloths for basic prayers.",
        "keyHighlights": [
          "Surya Dev & Ganesha photos & Aarti Card",
          "Aditya Hridaya Stotra & Pooja Vidhi Book & Gangajal (100ml)",
          "Roli, Haldi, Kumkum, Chandan & Akshat rice",
          "Supari (11 pcs), Cloves & Cardamom (20 pcs each)",
          "Steel Kalash, clay diyas (11 pcs) & Red/Yellow cloths"
        ],
        "samagriChecklist": [
          {
            "category": "Murtis, Photos & Books",
            "items": [
              {
                "name": "- Lord Surya Dev Photo (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Lord Ganesha Photo (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Surya Pooja Vidhi Book (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Aditya Hridaya Stotra Booklet (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Surya Aarti Card (×1)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Sacred Ingredients & Herbs",
            "items": [
              {
                "name": "- Roli (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Haldi (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Kumkum (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Chandan Powder (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Akshat Rice (100g)",
                "quantity": "×1"
              },
              {
                "name": "- Supari (×11)",
                "quantity": "×1"
              },
              {
                "name": "- Cloves (×20)",
                "quantity": "×1"
              },
              {
                "name": "- Cardamom (×20)",
                "quantity": "×1"
              },
              {
                "name": "- Dry Coconut (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Panchmewa (Dry Fruits) (100g)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Ritual Cloths & Aasans",
            "items": [
              {
                "name": "- Mauli (Raksha Sutra) (×2)",
                "quantity": "×1"
              },
              {
                "name": "- Janeu (Sacred Thread) (×2)",
                "quantity": "×1"
              },
              {
                "name": "- Red Pooja Cloth (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Yellow Pooja Cloth (×1)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Sacred Metalware & Vessels",
            "items": [
              {
                "name": "- Sealed Gangajal (100ml)",
                "quantity": "×1"
              },
              {
                "name": "- Steel Kalash (×1)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Aroma & Lamps",
            "items": [
              {
                "name": "- Camphor (Kafur) (50g)",
                "quantity": "×1"
              },
              {
                "name": "- Incense Sticks (Agarbatti) (1 Pack)",
                "quantity": "×1"
              },
              {
                "name": "- Dhoop Cone Pack (1 Pack)",
                "quantity": "×1"
              },
              {
                "name": "- Cotton Wicks (×25)",
                "quantity": "×1"
              },
              {
                "name": "- Clay Diyas (×11)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Packaging & Organization",
            "items": [
              {
                "name": "- Mishri (Sugar Candy) (100g)",
                "quantity": "×1"
              },
              {
                "name": "- Batasha (Sugar Drops) (100g)",
                "quantity": "×1"
              }
            ]
          }
        ]
      },
      {
        "id": "variant-standard-kit",
        "name": "Standard Kit",
        "price": 2699,
        "mrp": 5399,
        "badge": "Best Seller • Recommended",
        "suitableFor": "4–8 People",
        "description": "Adds brass kalash, steel thali, brass diya, bell, aasan, brass-plated Surya Yantra, and custom organization bags.",
        "keyHighlights": [
          "Everything in Basic included",
          "Upgraded Brass Kalash & Brass Diya (×1)",
          "Steel Pooja Thali, Bowls (×2) & Bell",
          "Surya Yantra (Brass-plated) & Pooja Aasan & Aditya Hridaya Book",
          "Premium Chandan & organic wicks (75 pcs)",
          "Red Cloth Pouch, organizing zip bags & Premium Gift Box"
        ],
        "samagriChecklist": [
          {
            "category": "Murtis, Photos & Books",
            "items": [
              {
                "name": "- Lord Surya Dev Photo (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Lord Ganesha Photo (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Surya Pooja Vidhi Book (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Aditya Hridaya Stotra Booklet (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Aditya Hridaya Premium Book (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Surya Aarti Card (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Surya Yantra (×1)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Sacred Ingredients & Herbs",
            "items": [
              {
                "name": "- Roli (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Haldi (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Kumkum (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Chandan Powder (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Premium Chandan (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Akshat Rice (100g)",
                "quantity": "×1"
              },
              {
                "name": "- Supari (×11)",
                "quantity": "×1"
              },
              {
                "name": "- Cloves (×20)",
                "quantity": "×1"
              },
              {
                "name": "- Cardamom (×20)",
                "quantity": "×1"
              },
              {
                "name": "- Dry Coconut (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Panchmewa (Dry Fruits) (100g)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Ritual Cloths & Aasans",
            "items": [
              {
                "name": "- Mauli (Raksha Sutra) (×4)",
                "quantity": "×1"
              },
              {
                "name": "- Janeu (Sacred Thread) (×6)",
                "quantity": "×1"
              },
              {
                "name": "- Red Pooja Cloth (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Yellow Pooja Cloth (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Pooja Aasan (×1)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Sacred Metalware & Vessels",
            "items": [
              {
                "name": "- Sealed Gangajal (100ml)",
                "quantity": "×1"
              },
              {
                "name": "- Steel Kalash (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Brass Kalash (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Steel Pooja Thali (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Steel Bowls (×2)",
                "quantity": "×1"
              },
              {
                "name": "- Pooja Spoon (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Temple Bell (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Brass Diya (×1)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Aroma & Lamps",
            "items": [
              {
                "name": "- Camphor (Kafur) (150g)",
                "quantity": "×1"
              },
              {
                "name": "- Incense Sticks (Agarbatti) (2 Packs)",
                "quantity": "×1"
              },
              {
                "name": "- Premium Dhoop Cone Pack (1 Pack)",
                "quantity": "×1"
              },
              {
                "name": "- Cotton Wicks (×75)",
                "quantity": "×1"
              },
              {
                "name": "- Clay Diyas (×11)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Packaging & Organization",
            "items": [
              {
                "name": "- Mishri (Sugar Candy) (100g)",
                "quantity": "×1"
              },
              {
                "name": "- Batasha (Sugar Drops) (100g)",
                "quantity": "×1"
              },
              {
                "name": "- Red Cloth Pouch (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Zip Pouches for organization (×5)",
                "quantity": "×1"
              },
              {
                "name": "- Kashi Prasad Instruction Card (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Premium Gift Box (×1)",
                "quantity": "×1"
              }
            ]
          }
        ]
      },
      {
        "id": "variant-premium-kit",
        "name": "Premium Kit",
        "price": 4599,
        "mrp": 9199,
        "badge": "Luxury Altar Collection",
        "suitableFor": "8–15 People",
        "description": "The ultimate Surya Dev Devotion collection. Features heavy copper lota/spoon, premium brassware, copper-etched Surya Yantra, pure Kesar, natural Pooja Ittar, 21 clay diyas, and a reusable wooden storage box.",
        "keyHighlights": [
          "Everything in Standard included",
          "Large Brass Kalash & large Brass Diya (×1)",
          "Copper Lota & Copper Pooja Spoon",
          "Premium Copper-etched Surya Yantra",
          "Kesar (2g), Pooja Ittar, 21 Clay Diyas & wooden box",
          "Reusable Wooden Storage Box & Complete Checklist Card"
        ],
        "samagriChecklist": [
          {
            "category": "Murtis, Photos & Books",
            "items": [
              {
                "name": "- Lord Surya Dev Photo (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Lord Ganesha Photo (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Surya Pooja Vidhi Book (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Aditya Hridaya Stotra Booklet (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Aditya Hridaya Premium Book (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Surya Aarti Card (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Premium Surya Yantra (Copper-etched) (×1)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Sacred Ingredients & Herbs",
            "items": [
              {
                "name": "- Roli (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Haldi (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Kumkum (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Chandan Powder (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Premium Chandan (50g)",
                "quantity": "×1"
              },
              {
                "name": "- Pure Kesar (Saffron) (2g)",
                "quantity": "×1"
              },
              {
                "name": "- Pooja Ittar (Fragrance) (1 Bottle)",
                "quantity": "×1"
              },
              {
                "name": "- Akshat Rice (100g)",
                "quantity": "×1"
              },
              {
                "name": "- Supari (×32)",
                "quantity": "×1"
              },
              {
                "name": "- Cloves (×20)",
                "quantity": "×1"
              },
              {
                "name": "- Cardamom (×20)",
                "quantity": "×1"
              },
              {
                "name": "- Dry Coconut (×3)",
                "quantity": "×1"
              },
              {
                "name": "- Panchmewa (Dry Fruits) (350g)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Ritual Cloths & Aasans",
            "items": [
              {
                "name": "- Mauli (Raksha Sutra) (×9)",
                "quantity": "×1"
              },
              {
                "name": "- Janeu (Sacred Thread) (×16)",
                "quantity": "×1"
              },
              {
                "name": "- Red Pooja Cloth (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Yellow Pooja Cloth (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Red Chowki Cloth (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Yellow Chowki Cloth (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Pooja Aasan (×1)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Sacred Metalware & Vessels",
            "items": [
              {
                "name": "- Sealed Gangajal (100ml)",
                "quantity": "×1"
              },
              {
                "name": "- Steel Kalash (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Brass Kalash (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Large Brass Kalash (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Steel Pooja Thali (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Premium Pooja Thali (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Steel Bowls (×6)",
                "quantity": "×1"
              },
              {
                "name": "- Pooja Spoon (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Copper Spoon (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Temple Bell (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Brass Bell (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Copper Lota (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Brass Diya (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Large Brass Diya (×1)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Aroma & Lamps",
            "items": [
              {
                "name": "- Camphor (Kafur) (350g)",
                "quantity": "×1"
              },
              {
                "name": "- Incense Sticks (Agarbatti) (2 Packs)",
                "quantity": "×1"
              },
              {
                "name": "- Premium Incense Packs (2 Packs)",
                "quantity": "×1"
              },
              {
                "name": "- Premium Dhoop Cone Pack (1 Pack)",
                "quantity": "×1"
              },
              {
                "name": "- Premium Dhoop Cones Extra (2 Packs)",
                "quantity": "×1"
              },
              {
                "name": "- Cotton Wicks (×175)",
                "quantity": "×1"
              },
              {
                "name": "- Clay Diyas (×21)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Packaging & Organization",
            "items": [
              {
                "name": "- Mishri (Sugar Candy) (350g)",
                "quantity": "×1"
              },
              {
                "name": "- Batasha (Sugar Drops) (350g)",
                "quantity": "×1"
              },
              {
                "name": "- Red Cloth Pouch (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Zip Pouches for organization (×5)",
                "quantity": "×1"
              },
              {
                "name": "- Kashi Prasad Instruction Card (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Complete Checklist Card (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Premium Kashi Prasad Gift Packaging (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Reusable Wooden Storage Box (×1)",
                "quantity": "×1"
              }
            ]
          }
        ]
      }
    ],
    "specifications": [
      {
        "groupName": "Devotion & Metal Purity",
        "specs": [
          {
            "label": "Yantras Metal",
            "value": "Premium etched Copper Surya Yantra"
          },
          {
            "label": "Brass Castings",
            "value": "Grade-A solid Brass Kalash, bell & shanti diya"
          },
          {
            "label": "Copper Vessels",
            "value": "99.2% Pure copper lota & spoon for gangajal"
          },
          {
            "label": "Aura Cloths",
            "value": "Red and Yellow silk with hand-woven borders"
          }
        ]
      },
      {
        "groupName": "Origin & Sourcing",
        "specs": [
          {
            "label": "Compilation Origin",
            "value": "Holy city of Kashi under priest supervision"
          },
          {
            "label": "Sourcing Sincerity",
            "value": "100% Sourced & energized in Varanasi temples"
          },
          {
            "label": "Non-Perishable Promise",
            "value": "Guaranteed free of fresh fruits/flowers/milk/curd/mango leaves"
          },
          {
            "label": "Net Weight",
            "value": "Basic: ~1.4kg | Standard: ~2.8kg | Premium: ~4.6kg"
          }
        ]
      }
    ],
    "faqs": [
      {
        "q": "What is the difference between standard and premium Surya Yantras?",
        "a": "The Standard kit features an energized brass-plated Surya Yantra, and the Premium kit upgrades this to a premium copper-etched Surya Yantra. Both are purified and energized in Surya temples in Varanasi by priests to bring health, vitality, and career success."
      },
      {
        "q": "Does this kit contain Panchamrit ingredients?",
        "a": "No. In accordance with Kashi Prasad's non-perishable shipping guidelines, we do not ship fresh milk, curd, honey, fresh flowers, or fresh leaves. Instead, we provide mature dry whole coconuts, organic chandan powder, sweet offerings (batasha and mishri), and dry fruits (panchmewa) in airtight packages which have long shelf lives and arrive in pristine condition."
      },
      {
        "q": "How many clay diyas are included in the variants?",
        "a": "The Basic and Standard kits contain 11 clay diyas. The Premium kit features a large brass diya alongside 21 clay diyas and 175 cotton wicks, providing abundant light for Surya Dev prayers."
      }
    ],
    "shippingGuarantee": "**Sacred Surya Dev Blessing Dispatch Direct from Varanasi**\n\nEvery order is packaged with utmost care and dispatched from Varanasi within 24 hours. We offer free cash on delivery across India.",
    "isPlaceholder": false
  },
  {
    "id": "pk-sai-baba-pooja-kit",
    "slug": "sai-baba-pooja-kit",
    "name": "Sai Baba Pooja Kit",
    "category": "Puja Kits",
    "image": "/assets/puja-kits/15-sai-baba-pooja-kit.jpg",
    "badge": "Best Seller",
    "rating": 4.9,
    "reviewCount": 298,
    "tagline": "Sacred Vedic Sai Baba Devotion & Peace Samagri",
    "shortDescription": "A premium collection of authentic, non-perishable Sai Baba Pooja items sourced from Varanasi. Blessed under priest supervision, ideal for daily home prayers and Thursday prayers.",
    "detailedOverview": [
      "Invite the supreme, preserving power of Sai Baba and the intelligence of Lord Ganesha into your home. The Kashi Prasad Sai Baba Pooja Kit is a luxurious, hand-compiled collection of authentic ritual materials sourced directly from holy Varanasi. Curated under the expert guidance of veteran Kashi temple priests, this kit ensures your prayers, Sai Naam Jap, or Thursday home pujas are performed with absolute Vedic correctness.",
      "Adhering to our strict non-perishable e-commerce shipping policy, this kit contains zero perishable items such as fresh flowers, banana leaves, milk, curd, honey, or fresh coconuts. In their place, we provide mature dry whole coconuts, pure chandan powder, organic incense, and sweet batasha. All ingredients are packed in air-tight pouches to ensure maximum shelf life and perfect delivery.",
      "Choose from three custom configurations. The Basic kit contains all essential samagri, guide books, Ganga water, 11 clay diyas, and dual altar cloths. The Standard kit adds brass vessels, a pooja thali, a bell, a brass-plated Sai Baba Yantra, and a premium aasan. The Premium kit offers the ultimate set with copper lota/spoon, heavy brassware, pure Kesar, 21 clay diyas, and a reusable wooden storage box."
    ],
    "tags": [
      "Sai Baba Puja",
      "Pooja Kit",
      "Varanasi Sourced",
      "Kashi Prasad",
      "Home Pooja Kit",
      "Sai Baba Puja",
      "Peace & Devotion"
    ],
    "price": 1699,
    "mrp": 3399,
    "variants": [
      {
        "id": "variant-basic-kit",
        "name": "Basic Kit",
        "price": 1699,
        "mrp": 3399,
        "badge": "Essential Sai Devotion",
        "suitableFor": "2–5 People",
        "description": "Contains all core non-perishable samagri, Sai Baba and Lord Ganesha photos, Sai Satcharitra pocket book, clay diyas, and cloths for basic prayers.",
        "keyHighlights": [
          "Sai Baba & Ganesha photos & Aarti Card",
          "Sai Satcharitra & Pooja Vidhi Book & Gangajal (100ml)",
          "Roli, Haldi, Kumkum, Chandan & Akshat rice",
          "Supari (11 pcs), Cloves & Cardamom (20 pcs each)",
          "Steel Kalash, clay diyas (11 pcs) & White/Yellow cloths"
        ],
        "samagriChecklist": [
          {
            "category": "Murtis, Photos & Books",
            "items": [
              {
                "name": "- Sai Baba Photo (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Lord Ganesha Photo (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Sai Baba Pooja Vidhi Book (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Sai Satcharitra (Pocket Edition) (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Sai Baba Aarti Card (×1)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Sacred Ingredients & Herbs",
            "items": [
              {
                "name": "- Roli (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Haldi (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Kumkum (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Chandan Powder (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Akshat Rice (100g)",
                "quantity": "×1"
              },
              {
                "name": "- Supari (×11)",
                "quantity": "×1"
              },
              {
                "name": "- Cloves (×20)",
                "quantity": "×1"
              },
              {
                "name": "- Cardamom (×20)",
                "quantity": "×1"
              },
              {
                "name": "- Dry Coconut (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Panchmewa (Dry Fruits) (100g)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Ritual Cloths & Aasans",
            "items": [
              {
                "name": "- Mauli (Raksha Sutra) (×2)",
                "quantity": "×1"
              },
              {
                "name": "- Janeu (Sacred Thread) (×2)",
                "quantity": "×1"
              },
              {
                "name": "- White Pooja Cloth (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Yellow Pooja Cloth (×1)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Sacred Metalware & Vessels",
            "items": [
              {
                "name": "- Sealed Gangajal (100ml)",
                "quantity": "×1"
              },
              {
                "name": "- Steel Kalash (×1)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Aroma & Lamps",
            "items": [
              {
                "name": "- Camphor (Kafur) (50g)",
                "quantity": "×1"
              },
              {
                "name": "- Incense Sticks (Agarbatti) (1 Pack)",
                "quantity": "×1"
              },
              {
                "name": "- Dhoop Cone Pack (1 Pack)",
                "quantity": "×1"
              },
              {
                "name": "- Cotton Wicks (×25)",
                "quantity": "×1"
              },
              {
                "name": "- Clay Diyas (×11)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Packaging & Organization",
            "items": [
              {
                "name": "- Mishri (Sugar Candy) (100g)",
                "quantity": "×1"
              },
              {
                "name": "- Batasha (Sugar Drops) (100g)",
                "quantity": "×1"
              }
            ]
          }
        ]
      },
      {
        "id": "variant-standard-kit",
        "name": "Standard Kit",
        "price": 2699,
        "mrp": 5399,
        "badge": "Best Seller • Recommended",
        "suitableFor": "4–8 People",
        "description": "Adds brass kalash, steel thali, brass diya, bell, aasan, brass-plated Sai Baba Yantra, and custom organization bags.",
        "keyHighlights": [
          "Everything in Basic included",
          "Upgraded Brass Kalash & Brass Diya (×1)",
          "Steel Pooja Thali, Bowls (×2) & Bell",
          "Sai Baba Yantra (Brass-plated) & Pooja Aasan & Sai Naam Jap Booklet",
          "Premium Chandan & organic wicks (75 pcs)",
          "Red Cloth Pouch, organizing zip bags & Premium Gift Box"
        ],
        "samagriChecklist": [
          {
            "category": "Murtis, Photos & Books",
            "items": [
              {
                "name": "- Sai Baba Photo (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Lord Ganesha Photo (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Sai Baba Pooja Vidhi Book (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Sai Satcharitra (Pocket Edition) (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Sai Baba Aarti Card (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Sai Baba Yantra (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Sai Naam Jap Booklet (×1)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Sacred Ingredients & Herbs",
            "items": [
              {
                "name": "- Roli (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Haldi (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Kumkum (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Chandan Powder (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Premium Chandan (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Akshat Rice (100g)",
                "quantity": "×1"
              },
              {
                "name": "- Supari (×11)",
                "quantity": "×1"
              },
              {
                "name": "- Cloves (×20)",
                "quantity": "×1"
              },
              {
                "name": "- Cardamom (×20)",
                "quantity": "×1"
              },
              {
                "name": "- Dry Coconut (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Panchmewa (Dry Fruits) (100g)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Ritual Cloths & Aasans",
            "items": [
              {
                "name": "- Mauli (Raksha Sutra) (×4)",
                "quantity": "×1"
              },
              {
                "name": "- Janeu (Sacred Thread) (×6)",
                "quantity": "×1"
              },
              {
                "name": "- White Pooja Cloth (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Yellow Pooja Cloth (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Pooja Aasan (×1)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Sacred Metalware & Vessels",
            "items": [
              {
                "name": "- Sealed Gangajal (100ml)",
                "quantity": "×1"
              },
              {
                "name": "- Steel Kalash (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Brass Kalash (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Steel Pooja Thali (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Steel Bowls (×2)",
                "quantity": "×1"
              },
              {
                "name": "- Pooja Spoon (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Temple Bell (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Brass Diya (×1)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Aroma & Lamps",
            "items": [
              {
                "name": "- Camphor (Kafur) (150g)",
                "quantity": "×1"
              },
              {
                "name": "- Incense Sticks (Agarbatti) (2 Packs)",
                "quantity": "×1"
              },
              {
                "name": "- Premium Dhoop Cone Pack (1 Pack)",
                "quantity": "×1"
              },
              {
                "name": "- Cotton Wicks (×75)",
                "quantity": "×1"
              },
              {
                "name": "- Clay Diyas (×11)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Packaging & Organization",
            "items": [
              {
                "name": "- Mishri (Sugar Candy) (100g)",
                "quantity": "×1"
              },
              {
                "name": "- Batasha (Sugar Drops) (100g)",
                "quantity": "×1"
              },
              {
                "name": "- Red Cloth Pouch (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Zip Pouches for organization (×5)",
                "quantity": "×1"
              },
              {
                "name": "- Kashi Prasad Instruction Card (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Premium Gift Box (×1)",
                "quantity": "×1"
              }
            ]
          }
        ]
      },
      {
        "id": "variant-premium-kit",
        "name": "Premium Kit",
        "price": 4599,
        "mrp": 9199,
        "badge": "Luxury Altar Collection",
        "suitableFor": "8–15 People",
        "description": "The ultimate Sai Baba Devotion collection. Features heavy copper lota/spoon, premium brassware, copper-etched Sai Baba Yantra, pure Kesar, natural Pooja Ittar, 21 clay diyas, and a reusable wooden storage box.",
        "keyHighlights": [
          "Everything in Standard included",
          "Large Brass Kalash & large Brass Diya (×1)",
          "Copper Lota & Copper Pooja Spoon",
          "Premium Copper-etched Sai Baba Yantra",
          "Kesar (2g), Pooja Ittar, 21 Clay Diyas & wooden box",
          "Reusable Wooden Storage Box & Complete Checklist Card"
        ],
        "samagriChecklist": [
          {
            "category": "Murtis, Photos & Books",
            "items": [
              {
                "name": "- Sai Baba Photo (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Lord Ganesha Photo (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Sai Baba Pooja Vidhi Book (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Sai Satcharitra (Pocket Edition) (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Sai Baba Aarti Card (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Premium Sai Baba Yantra (Copper-etched) (×1)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Sacred Ingredients & Herbs",
            "items": [
              {
                "name": "- Roli (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Haldi (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Kumkum (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Chandan Powder (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Premium Chandan (50g)",
                "quantity": "×1"
              },
              {
                "name": "- Pure Kesar (Saffron) (2g)",
                "quantity": "×1"
              },
              {
                "name": "- Pooja Ittar (Fragrance) (1 Bottle)",
                "quantity": "×1"
              },
              {
                "name": "- Akshat Rice (100g)",
                "quantity": "×1"
              },
              {
                "name": "- Supari (×32)",
                "quantity": "×1"
              },
              {
                "name": "- Cloves (×20)",
                "quantity": "×1"
              },
              {
                "name": "- Cardamom (×20)",
                "quantity": "×1"
              },
              {
                "name": "- Dry Coconut (×3)",
                "quantity": "×1"
              },
              {
                "name": "- Panchmewa (Dry Fruits) (350g)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Ritual Cloths & Aasans",
            "items": [
              {
                "name": "- Mauli (Raksha Sutra) (×9)",
                "quantity": "×1"
              },
              {
                "name": "- Janeu (Sacred Thread) (×16)",
                "quantity": "×1"
              },
              {
                "name": "- White Pooja Cloth (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Yellow Pooja Cloth (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Red Chowki Cloth (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Yellow Chowki Cloth (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Pooja Aasan (×1)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Sacred Metalware & Vessels",
            "items": [
              {
                "name": "- Sealed Gangajal (100ml)",
                "quantity": "×1"
              },
              {
                "name": "- Steel Kalash (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Brass Kalash (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Large Brass Kalash (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Steel Pooja Thali (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Premium Pooja Thali (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Steel Bowls (×6)",
                "quantity": "×1"
              },
              {
                "name": "- Pooja Spoon (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Copper Spoon (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Temple Bell (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Brass Bell (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Copper Lota (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Brass Diya (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Large Brass Diya (×1)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Aroma & Lamps",
            "items": [
              {
                "name": "- Camphor (Kafur) (350g)",
                "quantity": "×1"
              },
              {
                "name": "- Incense Sticks (Agarbatti) (2 Packs)",
                "quantity": "×1"
              },
              {
                "name": "- Premium Incense Packs (2 Packs)",
                "quantity": "×1"
              },
              {
                "name": "- Premium Dhoop Cone Pack (1 Pack)",
                "quantity": "×1"
              },
              {
                "name": "- Premium Dhoop Cones Extra (2 Packs)",
                "quantity": "×1"
              },
              {
                "name": "- Cotton Wicks (×175)",
                "quantity": "×1"
              },
              {
                "name": "- Clay Diyas (×21)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Packaging & Organization",
            "items": [
              {
                "name": "- Mishri (Sugar Candy) (350g)",
                "quantity": "×1"
              },
              {
                "name": "- Batasha (Sugar Drops) (350g)",
                "quantity": "×1"
              },
              {
                "name": "- Red Cloth Pouch (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Zip Pouches for organization (×5)",
                "quantity": "×1"
              },
              {
                "name": "- Kashi Prasad Instruction Card (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Complete Checklist Card (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Premium Kashi Prasad Gift Packaging (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Reusable Wooden Storage Box (×1)",
                "quantity": "×1"
              }
            ]
          }
        ]
      }
    ],
    "specifications": [
      {
        "groupName": "Devotion & Metal Purity",
        "specs": [
          {
            "label": "Yantras Metal",
            "value": "Premium etched Copper Sai Baba Yantra"
          },
          {
            "label": "Brass Castings",
            "value": "Grade-A solid Brass Kalash, bell & shanti diya"
          },
          {
            "label": "Copper Vessels",
            "value": "99.2% Pure copper lota & spoon for gangajal"
          },
          {
            "label": "Aura Cloths",
            "value": "White and Yellow silk with hand-woven borders"
          }
        ]
      },
      {
        "groupName": "Origin & Sourcing",
        "specs": [
          {
            "label": "Compilation Origin",
            "value": "Holy city of Kashi under priest supervision"
          },
          {
            "label": "Sourcing Sincerity",
            "value": "100% Sourced & energized in Varanasi temples"
          },
          {
            "label": "Non-Perishable Promise",
            "value": "Guaranteed free of fresh fruits/flowers/milk/curd/mango leaves"
          },
          {
            "label": "Net Weight",
            "value": "Basic: ~1.4kg | Standard: ~2.8kg | Premium: ~4.6kg"
          }
        ]
      }
    ],
    "faqs": [
      {
        "q": "What is the difference between standard and premium Sai Baba Yantras?",
        "a": "The Standard kit features an energized brass-plated Sai Baba Yantra, and the Premium kit upgrades this to a premium copper-etched Sai Baba Yantra. Both are purified and energized in Sai Baba temples in Varanasi by priests to bring peace, devotion, and healing."
      },
      {
        "q": "Does this kit contain Panchamrit ingredients?",
        "a": "No. In accordance with Kashi Prasad's non-perishable shipping guidelines, we do not ship fresh milk, curd, honey, fresh flowers, or fresh leaves. Instead, we provide mature dry whole coconuts, organic chandan powder, sweet offerings (batasha and mishri), and dry fruits (panchmewa) in airtight packages which have long shelf lives and arrive in pristine condition."
      },
      {
        "q": "How many clay diyas are included in the variants?",
        "a": "The Basic and Standard kits contain 11 clay diyas. The Premium kit features a large brass diya alongside 21 clay diyas and 175 cotton wicks, providing abundant light for Sai Baba prayers."
      }
    ],
    "shippingGuarantee": "**Sacred Sai Baba Blessing Dispatch Direct from Varanasi**\n\nEvery order is packaged with utmost care and dispatched from Varanasi within 24 hours. We offer free cash on delivery across India.",
    "isPlaceholder": false
  },
  {
    "id": "pk-kali-mata-pooja-kit",
    "slug": "kali-mata-pooja-kit",
    "name": "Kali Mata Pooja Kit",
    "category": "Puja Kits",
    "image": "/assets/puja-kits/16-kali-mata-pooja-kit.jpg",
    "badge": "Best Seller",
    "rating": 4.9,
    "reviewCount": 284,
    "tagline": "Sacred Vedic Kali Devotion & Protection Samagri",
    "shortDescription": "A premium collection of authentic, non-perishable Goddess Kali Pooja items sourced from Varanasi. Blessed under priest supervision, ideal for protection, strength, and daily altar prayers.",
    "detailedOverview": [
      "Invite the supreme, protecting power of Goddess Kali and the intelligence of Lord Ganesha into your home. The Kashi Prasad Kali Mata Pooja Kit is a luxurious, hand-compiled collection of authentic ritual materials sourced directly from holy Varanasi. Curated under the expert guidance of veteran Kashi temple priests, this kit ensures your prayers, Kali Chalisa recitations, or daily home pujas are performed with absolute Vedic correctness.",
      "Adhering to our strict non-perishable e-commerce shipping policy, this kit contains zero perishable items such as fresh flowers, banana leaves, milk, curd, honey, or fresh coconuts. In their place, we provide mature dry whole coconuts, pure chandan powder, organic incense, and sweet batasha. All ingredients are packed in air-tight pouches to ensure maximum shelf life and perfect delivery.",
      "Choose from three custom configurations. The Basic kit contains all essential samagri, guide books, Ganga water, 11 clay diyas, and dual altar cloths. The Standard kit adds brass vessels, a pooja thali, a bell, a brass-plated Kali Yantra, and a premium aasan. The Premium kit offers the ultimate set with copper lota/spoon, heavy brassware, pure Kesar, 21 clay diyas, and a reusable wooden storage box."
    ],
    "tags": [
      "Kali Mata Puja",
      "Pooja Kit",
      "Varanasi Sourced",
      "Kashi Prasad",
      "Home Pooja Kit",
      "Goddess Kali Puja",
      "Protection & Strength"
    ],
    "price": 1699,
    "mrp": 3399,
    "variants": [
      {
        "id": "variant-basic-kit",
        "name": "Basic Kit",
        "price": 1699,
        "mrp": 3399,
        "badge": "Essential Kali Devotion",
        "suitableFor": "2–5 People",
        "description": "Contains all core non-perishable samagri, Maa Kali and Lord Ganesha photos, Kali Chalisa book, clay diyas, and cloths for basic prayers.",
        "keyHighlights": [
          "Maa Kali & Ganesha photos & Aarti Card",
          "Kali Chalisa & Pooja Vidhi Book & Gangajal (100ml)",
          "Roli, Haldi, Kumkum, Chandan & Akshat rice",
          "Supari (11 pcs), Cloves & Cardamom (20 pcs each)",
          "Steel Kalash, clay diyas (11 pcs) & Red/Black cloths"
        ],
        "samagriChecklist": [
          {
            "category": "Murtis, Photos & Books",
            "items": [
              {
                "name": "- Maa Kali Photo (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Lord Ganesha Photo (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Kali Pooja Vidhi Book (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Kali Chalisa (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Kali Aarti Card (×1)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Sacred Ingredients & Herbs",
            "items": [
              {
                "name": "- Roli (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Haldi (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Kumkum (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Chandan Powder (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Akshat Rice (100g)",
                "quantity": "×1"
              },
              {
                "name": "- Supari (×11)",
                "quantity": "×1"
              },
              {
                "name": "- Cloves (×20)",
                "quantity": "×1"
              },
              {
                "name": "- Cardamom (×20)",
                "quantity": "×1"
              },
              {
                "name": "- Dry Coconut (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Panchmewa (Dry Fruits) (100g)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Ritual Cloths & Aasans",
            "items": [
              {
                "name": "- Mauli (Raksha Sutra) (×2)",
                "quantity": "×1"
              },
              {
                "name": "- Janeu (Sacred Thread) (×2)",
                "quantity": "×1"
              },
              {
                "name": "- Red Pooja Cloth (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Black Pooja Cloth (×1)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Sacred Metalware & Vessels",
            "items": [
              {
                "name": "- Sealed Gangajal (100ml)",
                "quantity": "×1"
              },
              {
                "name": "- Steel Kalash (×1)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Aroma & Lamps",
            "items": [
              {
                "name": "- Camphor (Kafur) (50g)",
                "quantity": "×1"
              },
              {
                "name": "- Incense Sticks (Agarbatti) (1 Pack)",
                "quantity": "×1"
              },
              {
                "name": "- Dhoop Cone Pack (1 Pack)",
                "quantity": "×1"
              },
              {
                "name": "- Cotton Wicks (×25)",
                "quantity": "×1"
              },
              {
                "name": "- Clay Diyas (×11)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Packaging & Organization",
            "items": [
              {
                "name": "- Mishri (Sugar Candy) (100g)",
                "quantity": "×1"
              },
              {
                "name": "- Batasha (Sugar Drops) (100g)",
                "quantity": "×1"
              }
            ]
          }
        ]
      },
      {
        "id": "variant-standard-kit",
        "name": "Standard Kit",
        "price": 2699,
        "mrp": 5399,
        "badge": "Best Seller • Recommended",
        "suitableFor": "4–8 People",
        "description": "Adds brass kalash, steel thali, brass diya, bell, aasan, brass-plated Kali Yantra, and custom organization bags.",
        "keyHighlights": [
          "Everything in Basic included",
          "Upgraded Brass Kalash & Brass Diya (×1)",
          "Steel Pooja Thali, Bowls (×2) & Bell",
          "Kali Yantra (Brass-plated) & Pooja Aasan",
          "Premium Chandan & organic wicks (75 pcs)",
          "Red Cloth Pouch, organizing zip bags & Premium Gift Box"
        ],
        "samagriChecklist": [
          {
            "category": "Murtis, Photos & Books",
            "items": [
              {
                "name": "- Maa Kali Photo (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Lord Ganesha Photo (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Kali Pooja Vidhi Book (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Kali Chalisa (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Kali Aarti Card (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Kali Yantra (×1)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Sacred Ingredients & Herbs",
            "items": [
              {
                "name": "- Roli (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Haldi (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Kumkum (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Chandan Powder (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Premium Chandan (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Akshat Rice (100g)",
                "quantity": "×1"
              },
              {
                "name": "- Supari (×11)",
                "quantity": "×1"
              },
              {
                "name": "- Cloves (×20)",
                "quantity": "×1"
              },
              {
                "name": "- Cardamom (×20)",
                "quantity": "×1"
              },
              {
                "name": "- Dry Coconut (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Panchmewa (Dry Fruits) (100g)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Ritual Cloths & Aasans",
            "items": [
              {
                "name": "- Mauli (Raksha Sutra) (×4)",
                "quantity": "×1"
              },
              {
                "name": "- Janeu (Sacred Thread) (×6)",
                "quantity": "×1"
              },
              {
                "name": "- Red Pooja Cloth (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Black Pooja Cloth (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Pooja Aasan (×1)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Sacred Metalware & Vessels",
            "items": [
              {
                "name": "- Sealed Gangajal (100ml)",
                "quantity": "×1"
              },
              {
                "name": "- Steel Kalash (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Brass Kalash (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Steel Pooja Thali (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Steel Bowls (×2)",
                "quantity": "×1"
              },
              {
                "name": "- Pooja Spoon (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Temple Bell (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Brass Diya (×1)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Aroma & Lamps",
            "items": [
              {
                "name": "- Camphor (Kafur) (150g)",
                "quantity": "×1"
              },
              {
                "name": "- Incense Sticks (Agarbatti) (2 Packs)",
                "quantity": "×1"
              },
              {
                "name": "- Premium Dhoop Cone Pack (1 Pack)",
                "quantity": "×1"
              },
              {
                "name": "- Cotton Wicks (×75)",
                "quantity": "×1"
              },
              {
                "name": "- Clay Diyas (×11)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Packaging & Organization",
            "items": [
              {
                "name": "- Mishri (Sugar Candy) (100g)",
                "quantity": "×1"
              },
              {
                "name": "- Batasha (Sugar Drops) (100g)",
                "quantity": "×1"
              },
              {
                "name": "- Red Cloth Pouch (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Zip Pouches for organization (×5)",
                "quantity": "×1"
              },
              {
                "name": "- Kashi Prasad Instruction Card (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Premium Gift Box (×1)",
                "quantity": "×1"
              }
            ]
          }
        ]
      },
      {
        "id": "variant-premium-kit",
        "name": "Premium Kit",
        "price": 4599,
        "mrp": 9199,
        "badge": "Luxury Altar Collection",
        "suitableFor": "8–15 People",
        "description": "The ultimate Kali Devotion collection. Features heavy copper lota/spoon, premium brassware, copper-etched Kali Yantra, pure Kesar, natural Pooja Ittar, 21 clay diyas, and a reusable wooden storage box.",
        "keyHighlights": [
          "Everything in Standard included",
          "Large Brass Kalash & large Brass Diya (×1)",
          "Copper Lota & Copper Pooja Spoon",
          "Premium Copper-etched Kali Yantra",
          "Kesar (2g), Pooja Ittar, 21 Clay Diyas & wooden box",
          "Reusable Wooden Storage Box & Complete Checklist Card"
        ],
        "samagriChecklist": [
          {
            "category": "Murtis, Photos & Books",
            "items": [
              {
                "name": "- Maa Kali Photo (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Lord Ganesha Photo (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Kali Pooja Vidhi Book (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Kali Chalisa (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Kali Aarti Card (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Premium Kali Yantra (Copper-etched) (×1)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Sacred Ingredients & Herbs",
            "items": [
              {
                "name": "- Roli (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Haldi (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Kumkum (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Chandan Powder (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Premium Chandan (50g)",
                "quantity": "×1"
              },
              {
                "name": "- Pure Kesar (Saffron) (2g)",
                "quantity": "×1"
              },
              {
                "name": "- Pooja Ittar (Fragrance) (1 Bottle)",
                "quantity": "×1"
              },
              {
                "name": "- Akshat Rice (100g)",
                "quantity": "×1"
              },
              {
                "name": "- Supari (×32)",
                "quantity": "×1"
              },
              {
                "name": "- Cloves (×20)",
                "quantity": "×1"
              },
              {
                "name": "- Cardamom (×20)",
                "quantity": "×1"
              },
              {
                "name": "- Dry Coconut (×3)",
                "quantity": "×1"
              },
              {
                "name": "- Panchmewa (Dry Fruits) (350g)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Ritual Cloths & Aasans",
            "items": [
              {
                "name": "- Mauli (Raksha Sutra) (×9)",
                "quantity": "×1"
              },
              {
                "name": "- Janeu (Sacred Thread) (×16)",
                "quantity": "×1"
              },
              {
                "name": "- Red Pooja Cloth (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Black Pooja Cloth (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Red Chowki Cloth (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Yellow Chowki Cloth (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Pooja Aasan (×1)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Sacred Metalware & Vessels",
            "items": [
              {
                "name": "- Sealed Gangajal (100ml)",
                "quantity": "×1"
              },
              {
                "name": "- Steel Kalash (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Brass Kalash (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Large Brass Kalash (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Steel Pooja Thali (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Premium Pooja Thali (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Steel Bowls (×6)",
                "quantity": "×1"
              },
              {
                "name": "- Pooja Spoon (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Copper Spoon (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Temple Bell (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Brass Bell (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Copper Lota (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Brass Diya (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Large Brass Diya (×1)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Aroma & Lamps",
            "items": [
              {
                "name": "- Camphor (Kafur) (350g)",
                "quantity": "×1"
              },
              {
                "name": "- Incense Sticks (Agarbatti) (2 Packs)",
                "quantity": "×1"
              },
              {
                "name": "- Premium Incense Packs (2 Packs)",
                "quantity": "×1"
              },
              {
                "name": "- Premium Dhoop Cone Pack (1 Pack)",
                "quantity": "×1"
              },
              {
                "name": "- Premium Dhoop Cones Extra (2 Packs)",
                "quantity": "×1"
              },
              {
                "name": "- Cotton Wicks (×175)",
                "quantity": "×1"
              },
              {
                "name": "- Clay Diyas (×21)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Packaging & Organization",
            "items": [
              {
                "name": "- Mishri (Sugar Candy) (350g)",
                "quantity": "×1"
              },
              {
                "name": "- Batasha (Sugar Drops) (350g)",
                "quantity": "×1"
              },
              {
                "name": "- Red Cloth Pouch (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Zip Pouches for organization (×5)",
                "quantity": "×1"
              },
              {
                "name": "- Kashi Prasad Instruction Card (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Complete Checklist Card (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Premium Kashi Prasad Gift Packaging (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Reusable Wooden Storage Box (×1)",
                "quantity": "×1"
              }
            ]
          }
        ]
      }
    ],
    "specifications": [
      {
        "groupName": "Devotion & Metal Purity",
        "specs": [
          {
            "label": "Yantras Metal",
            "value": "Premium etched Copper Kali Yantra"
          },
          {
            "label": "Brass Castings",
            "value": "Grade-A solid Brass Kalash, bell & shanti diya"
          },
          {
            "label": "Copper Vessels",
            "value": "99.2% Pure copper lota & spoon for gangajal"
          },
          {
            "label": "Aura Cloths",
            "value": "Red and Black silk with hand-woven borders"
          }
        ]
      },
      {
        "groupName": "Origin & Sourcing",
        "specs": [
          {
            "label": "Compilation Origin",
            "value": "Holy city of Kashi under priest supervision"
          },
          {
            "label": "Sourcing Sincerity",
            "value": "100% Sourced & energized in Varanasi temples"
          },
          {
            "label": "Non-Perishable Promise",
            "value": "Guaranteed free of fresh fruits/flowers/milk/curd/mango leaves"
          },
          {
            "label": "Net Weight",
            "value": "Basic: ~1.4kg | Standard: ~2.8kg | Premium: ~4.6kg"
          }
        ]
      }
    ],
    "faqs": [
      {
        "q": "What is the difference between standard and premium Kali Yantras?",
        "a": "The Standard kit features an energized brass-plated Kali Yantra, and the Premium kit upgrades this to a premium copper-etched Kali Yantra. Both are purified and energized in Kali temples in Varanasi by priests to bring protection, courage, and spiritual strength."
      },
      {
        "q": "Does this kit contain Panchamrit ingredients?",
        "a": "No. In accordance with Kashi Prasad's non-perishable shipping guidelines, we do not ship fresh milk, curd, honey, fresh flowers, or fresh leaves. Instead, we provide mature dry whole coconuts, organic chandan powder, sweet offerings (batasha and mishri), and dry fruits (panchmewa) in airtight packages which have long shelf lives and arrive in pristine condition."
      },
      {
        "q": "How many clay diyas are included in the variants?",
        "a": "The Basic and Standard kits contain 11 clay diyas. The Premium kit features a large brass diya alongside 21 clay diyas and 175 cotton wicks, providing abundant light for Maa Kali prayers."
      }
    ],
    "shippingGuarantee": "**Sacred Kali Mata Blessing Dispatch Direct from Varanasi**\n\nEvery order is packaged with utmost care and dispatched from Varanasi within 24 hours. We offer free cash on delivery across India.",
    "isPlaceholder": false
  },
  {
    "id": "pk-vishwakarma-pooja-kit",
    "slug": "vishwakarma-pooja-kit",
    "name": "Vishwakarma Pooja Kit",
    "category": "Puja Kits",
    "image": "/assets/puja-kits/17-vishwakarma-pooja-kit.jpg",
    "badge": "Best Seller",
    "rating": 4.9,
    "reviewCount": 284,
    "tagline": "Sacred Vedic Vishwakarma Devotion & Craftsmanship Samagri",
    "shortDescription": "A premium collection of authentic, non-perishable Lord Vishwakarma Pooja items sourced from Varanasi. Blessed under priest supervision, ideal for home workshops, offices, and tool blessing prayers.",
    "detailedOverview": [
      "Invite the supreme, preserving power of Lord Vishwakarma and the intelligence of Lord Ganesha into your home. The Kashi Prasad Vishwakarma Pooja Kit is a luxurious, hand-compiled collection of authentic ritual materials sourced directly from holy Varanasi. Curated under the expert guidance of veteran Kashi temple priests, this kit ensures your prayers, Vishwakarma Aarti recitations, or workshop tool home pujas are performed with absolute Vedic correctness.",
      "Adhering to our strict non-perishable e-commerce shipping policy, this kit contains zero perishable items such as fresh flowers, banana leaves, milk, curd, honey, or fresh coconuts. In their place, we provide mature dry whole coconuts, pure chandan powder, organic incense, and sweet batasha. All ingredients are packed in air-tight pouches to ensure maximum shelf life and perfect delivery.",
      "Choose from three custom configurations. The Basic kit contains all essential samagri, guide books, Ganga water, 11 clay diyas, and dual altar cloths. The Standard kit adds brass vessels, a pooja thali, a bell, a brass-plated Vishwakarma Yantra, and a premium aasan. The Premium kit offers the ultimate set with copper lota/spoon, heavy brassware, pure Kesar, 21 clay diyas, and a reusable wooden storage box."
    ],
    "tags": [
      "Vishwakarma Puja",
      "Pooja Kit",
      "Varanasi Sourced",
      "Kashi Prasad",
      "Home Pooja Kit",
      "Lord Vishwakarma Puja",
      "Craftsmanship & Success"
    ],
    "price": 1699,
    "mrp": 3399,
    "variants": [
      {
        "id": "variant-basic-kit",
        "name": "Basic Kit",
        "price": 1699,
        "mrp": 3399,
        "badge": "Essential Vishwakarma Devotion",
        "suitableFor": "Small Shops & Home Workshops",
        "description": "Contains all core non-perishable samagri, Lord Vishwakarma and Lord Ganesha photos, Vishwakarma Pooja Vidhi booklet, clay diyas, and cloths for basic prayers.",
        "keyHighlights": [
          "Vishwakarma & Ganesha photos & Aarti Card",
          "Vishwakarma Pooja Vidhi Book & Gangajal (100ml)",
          "Roli, Haldi, Kumkum, Chandan & Akshat rice",
          "Supari (11 pcs), Cloves & Cardamom (20 pcs each)",
          "Steel Kalash, clay diyas (11 pcs) & Red/Yellow cloths"
        ],
        "samagriChecklist": [
          {
            "category": "Murtis, Photos & Books",
            "items": [
              {
                "name": "- Lord Vishwakarma Photo (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Lord Ganesha Photo (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Vishwakarma Pooja Vidhi Book (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Vishwakarma Aarti Card (×1)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Sacred Ingredients & Herbs",
            "items": [
              {
                "name": "- Roli (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Haldi (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Kumkum (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Chandan Powder (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Akshat Rice (100g)",
                "quantity": "×1"
              },
              {
                "name": "- Supari (×11)",
                "quantity": "×1"
              },
              {
                "name": "- Cloves (×20)",
                "quantity": "×1"
              },
              {
                "name": "- Cardamom (×20)",
                "quantity": "×1"
              },
              {
                "name": "- Dry Coconut (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Panchmewa (Dry Fruits) (100g)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Ritual Cloths & Aasans",
            "items": [
              {
                "name": "- Mauli (Raksha Sutra) (×2)",
                "quantity": "×1"
              },
              {
                "name": "- Janeu (Sacred Thread) (×2)",
                "quantity": "×1"
              },
              {
                "name": "- Red Pooja Cloth (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Yellow Pooja Cloth (×1)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Sacred Metalware & Vessels",
            "items": [
              {
                "name": "- Sealed Gangajal (100ml)",
                "quantity": "×1"
              },
              {
                "name": "- Steel Kalash (×1)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Aroma & Lamps",
            "items": [
              {
                "name": "- Camphor (Kafur) (50g)",
                "quantity": "×1"
              },
              {
                "name": "- Incense Sticks (Agarbatti) (1 Pack)",
                "quantity": "×1"
              },
              {
                "name": "- Dhoop Cone Pack (1 Pack)",
                "quantity": "×1"
              },
              {
                "name": "- Cotton Wicks (×25)",
                "quantity": "×1"
              },
              {
                "name": "- Clay Diyas (×11)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Packaging & Organization",
            "items": [
              {
                "name": "- Mishri (Sugar Candy) (100g)",
                "quantity": "×1"
              },
              {
                "name": "- Batasha (Sugar Drops) (100g)",
                "quantity": "×1"
              }
            ]
          }
        ]
      },
      {
        "id": "variant-standard-kit",
        "name": "Standard Kit",
        "price": 2699,
        "mrp": 5399,
        "badge": "Best Seller • Recommended",
        "suitableFor": "4–8 People",
        "description": "Adds brass kalash, steel thali, brass diya, bell, aasan, brass-plated Vishwakarma Yantra, and custom organization bags.",
        "keyHighlights": [
          "Everything in Basic included",
          "Upgraded Brass Kalash & Brass Diya (×1)",
          "Steel Pooja Thali, Bowls (×2) & Bell",
          "Vishwakarma Yantra (Brass-plated) & Pooja Aasan",
          "Premium Chandan & organic wicks (75 pcs)",
          "Red Cloth Pouch, organizing zip bags & Premium Gift Box"
        ],
        "samagriChecklist": [
          {
            "category": "Murtis, Photos & Books",
            "items": [
              {
                "name": "- Lord Vishwakarma Photo (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Lord Ganesha Photo (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Vishwakarma Pooja Vidhi Book (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Vishwakarma Aarti Card (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Vishwakarma Yantra (×1)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Sacred Ingredients & Herbs",
            "items": [
              {
                "name": "- Roli (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Haldi (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Kumkum (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Chandan Powder (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Premium Chandan (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Akshat Rice (100g)",
                "quantity": "×1"
              },
              {
                "name": "- Supari (×11)",
                "quantity": "×1"
              },
              {
                "name": "- Cloves (×20)",
                "quantity": "×1"
              },
              {
                "name": "- Cardamom (×20)",
                "quantity": "×1"
              },
              {
                "name": "- Dry Coconut (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Panchmewa (Dry Fruits) (100g)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Ritual Cloths & Aasans",
            "items": [
              {
                "name": "- Mauli (Raksha Sutra) (×4)",
                "quantity": "×1"
              },
              {
                "name": "- Janeu (Sacred Thread) (×6)",
                "quantity": "×1"
              },
              {
                "name": "- Red Pooja Cloth (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Yellow Pooja Cloth (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Pooja Aasan (×1)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Sacred Metalware & Vessels",
            "items": [
              {
                "name": "- Sealed Gangajal (100ml)",
                "quantity": "×1"
              },
              {
                "name": "- Steel Kalash (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Brass Kalash (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Steel Pooja Thali (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Steel Bowls (×2)",
                "quantity": "×1"
              },
              {
                "name": "- Pooja Spoon (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Temple Bell (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Brass Diya (×1)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Aroma & Lamps",
            "items": [
              {
                "name": "- Camphor (Kafur) (150g)",
                "quantity": "×1"
              },
              {
                "name": "- Incense Sticks (Agarbatti) (2 Packs)",
                "quantity": "×1"
              },
              {
                "name": "- Premium Dhoop Cone Pack (1 Pack)",
                "quantity": "×1"
              },
              {
                "name": "- Cotton Wicks (×75)",
                "quantity": "×1"
              },
              {
                "name": "- Clay Diyas (×11)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Packaging & Organization",
            "items": [
              {
                "name": "- Mishri (Sugar Candy) (100g)",
                "quantity": "×1"
              },
              {
                "name": "- Batasha (Sugar Drops) (100g)",
                "quantity": "×1"
              },
              {
                "name": "- Red Cloth Pouch (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Zip Pouches for organization (×5)",
                "quantity": "×1"
              },
              {
                "name": "- Kashi Prasad Instruction Card (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Premium Gift Box (×1)",
                "quantity": "×1"
              }
            ]
          }
        ]
      },
      {
        "id": "variant-premium-kit",
        "name": "Premium Kit",
        "price": 4599,
        "mrp": 9199,
        "badge": "Luxury Altar Collection",
        "suitableFor": "8–15 People",
        "description": "The ultimate Vishwakarma Devotion collection. Features heavy copper lota/spoon, premium brassware, copper-etched Vishwakarma Yantra, pure Kesar, natural Pooja Ittar, 21 clay diyas, and a reusable wooden storage box.",
        "keyHighlights": [
          "Everything in Standard included",
          "Large Brass Kalash & large Brass Diya (×1)",
          "Copper Lota & Copper Pooja Spoon",
          "Premium Copper-etched Vishwakarma Yantra",
          "Kesar (2g), Pooja Ittar, 21 Clay Diyas & wooden box",
          "Reusable Wooden Storage Box & Complete Checklist Card"
        ],
        "samagriChecklist": [
          {
            "category": "Murtis, Photos & Books",
            "items": [
              {
                "name": "- Lord Vishwakarma Photo (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Lord Ganesha Photo (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Vishwakarma Pooja Vidhi Book (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Vishwakarma Aarti Card (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Premium Vishwakarma Yantra (Copper-etched) (×1)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Sacred Ingredients & Herbs",
            "items": [
              {
                "name": "- Roli (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Haldi (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Kumkum (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Chandan Powder (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Premium Chandan (50g)",
                "quantity": "×1"
              },
              {
                "name": "- Pure Kesar (Saffron) (2g)",
                "quantity": "×1"
              },
              {
                "name": "- Pooja Ittar (Fragrance) (1 Bottle)",
                "quantity": "×1"
              },
              {
                "name": "- Akshat Rice (100g)",
                "quantity": "×1"
              },
              {
                "name": "- Supari (×32)",
                "quantity": "×1"
              },
              {
                "name": "- Cloves (×20)",
                "quantity": "×1"
              },
              {
                "name": "- Cardamom (×20)",
                "quantity": "×1"
              },
              {
                "name": "- Dry Coconut (×3)",
                "quantity": "×1"
              },
              {
                "name": "- Panchmewa (Dry Fruits) (350g)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Ritual Cloths & Aasans",
            "items": [
              {
                "name": "- Mauli (Raksha Sutra) (×9)",
                "quantity": "×1"
              },
              {
                "name": "- Janeu (Sacred Thread) (×16)",
                "quantity": "×1"
              },
              {
                "name": "- Red Pooja Cloth (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Yellow Pooja Cloth (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Red Chowki Cloth (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Yellow Chowki Cloth (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Pooja Aasan (×1)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Sacred Metalware & Vessels",
            "items": [
              {
                "name": "- Sealed Gangajal (100ml)",
                "quantity": "×1"
              },
              {
                "name": "- Steel Kalash (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Brass Kalash (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Large Brass Kalash (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Steel Pooja Thali (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Premium Pooja Thali (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Steel Bowls (×6)",
                "quantity": "×1"
              },
              {
                "name": "- Pooja Spoon (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Copper Spoon (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Temple Bell (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Brass Bell (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Copper Lota (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Brass Diya (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Large Brass Diya (×1)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Aroma & Lamps",
            "items": [
              {
                "name": "- Camphor (Kafur) (350g)",
                "quantity": "×1"
              },
              {
                "name": "- Incense Sticks (Agarbatti) (2 Packs)",
                "quantity": "×1"
              },
              {
                "name": "- Premium Incense Packs (2 Packs)",
                "quantity": "×1"
              },
              {
                "name": "- Premium Dhoop Cone Pack (1 Pack)",
                "quantity": "×1"
              },
              {
                "name": "- Premium Dhoop Cones Extra (2 Packs)",
                "quantity": "×1"
              },
              {
                "name": "- Cotton Wicks (×175)",
                "quantity": "×1"
              },
              {
                "name": "- Clay Diyas (×21)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Packaging & Organization",
            "items": [
              {
                "name": "- Mishri (Sugar Candy) (350g)",
                "quantity": "×1"
              },
              {
                "name": "- Batasha (Sugar Drops) (350g)",
                "quantity": "×1"
              },
              {
                "name": "- Red Cloth Pouch (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Zip Pouches for organization (×5)",
                "quantity": "×1"
              },
              {
                "name": "- Kashi Prasad Instruction Card (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Complete Checklist Card (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Premium Kashi Prasad Gift Packaging (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Reusable Wooden Storage Box (×1)",
                "quantity": "×1"
              }
            ]
          }
        ]
      }
    ],
    "specifications": [
      {
        "groupName": "Devotion & Metal Purity",
        "specs": [
          {
            "label": "Yantras Metal",
            "value": "Premium etched Copper Vishwakarma Yantra"
          },
          {
            "label": "Brass Castings",
            "value": "Grade-A solid Brass Kalash, bell & shanti diya"
          },
          {
            "label": "Copper Vessels",
            "value": "99.2% Pure copper lota & spoon for gangajal"
          },
          {
            "label": "Aura Cloths",
            "value": "Red and Yellow silk with hand-woven borders"
          }
        ]
      },
      {
        "groupName": "Origin & Sourcing",
        "specs": [
          {
            "label": "Compilation Origin",
            "value": "Holy city of Kashi under priest supervision"
          },
          {
            "label": "Sourcing Sincerity",
            "value": "100% Sourced & energized in Varanasi temples"
          },
          {
            "label": "Non-Perishable Promise",
            "value": "Guaranteed free of fresh fruits/flowers/milk/curd/mango leaves"
          },
          {
            "label": "Net Weight",
            "value": "Basic: ~1.4kg | Standard: ~2.8kg | Premium: ~4.6kg"
          }
        ]
      }
    ],
    "faqs": [
      {
        "q": "What is the difference between standard and premium Vishwakarma Yantras?",
        "a": "The Standard kit features an energized brass-plated Vishwakarma Yantra, and the Premium kit upgrades this to a premium copper-etched Vishwakarma Yantra. Both are purified and energized in Vishwakarma temples in Varanasi by priests to bring architectural skill, machine/tool prosperity, and workshop success."
      },
      {
        "q": "Does this kit contain Panchamrit ingredients?",
        "a": "No. In accordance with Kashi Prasad's non-perishable shipping guidelines, we do not ship fresh milk, curd, honey, fresh flowers, or fresh leaves. Instead, we provide mature dry whole coconuts, organic chandan powder, sweet offerings (batasha and mishri), and dry fruits (panchmewa) in airtight packages which have long shelf lives and arrive in pristine condition."
      },
      {
        "q": "How many clay diyas are included in the variants?",
        "a": "The Basic and Standard kits contain 11 clay diyas. The Premium kit features a large brass diya alongside 21 clay diyas and 175 cotton wicks, providing abundant light for Lord Vishwakarma prayers."
      }
    ],
    "shippingGuarantee": "**Sacred Vishwakarma Blessing Dispatch Direct from Varanasi**\n\nEvery order is packaged with utmost care and dispatched from Varanasi within 24 hours. We offer free cash on delivery across India.",
    "isPlaceholder": false
  },
  {
    "id": "pk-vehicle-pooja-kit",
    "slug": "vehicle-pooja-kit",
    "name": "Vehicle Pooja Kit",
    "category": "Puja Kits",
    "image": "/assets/puja-kits/18-vehicle-pooja-kit.jpg",
    "badge": "Best Seller",
    "rating": 4.9,
    "reviewCount": 284,
    "tagline": "Sacred Vedic Vehicle Protection & Ganesha Samagri",
    "shortDescription": "A premium collection of authentic, non-perishable Lord Ganesha and travel protection items sourced from Varanasi. Blessed under priest supervision, ideal for car, bike, scooter, and heavy vehicle blessings.",
    "detailedOverview": [
      "Invite the supreme, protecting power of Lord Ganesha and the travel safety elements into your new automobile. The Kashi Prasad Vehicle Pooja Kit (Vahan Pooja Kit) is a luxurious, hand-compiled collection of authentic ritual materials sourced directly from holy Varanasi. Curated under the expert guidance of veteran Kashi temple priests, this kit ensures your prayers, vehicle blessings, or road trips are started with absolute Vedic correctness.",
      "Adhering to our strict non-perishable e-commerce shipping policy, this kit contains zero perishable items such as fresh flowers, banana leaves, milk, curd, honey, or fresh coconuts. In their place, we provide mature dry whole coconuts, pure chandan powder, organic incense, and sweet batasha. All ingredients are packed in air-tight pouches to ensure maximum shelf life and perfect delivery.",
      "Choose from three custom configurations. The Basic kit contains all essential samagri, guide books, Ganga water, 6 clay diyas, and dual cloths, plus safety stickers. The Standard kit adds brass vessels, a pooja thali, a bell, a brass-plated Ganesha Yantra, a Vehicle Protection Yantra, and a premium aasan. The Premium kit offers the ultimate set with copper lota/spoon, heavy brassware, pure Kesar, 12 clay diyas, and a reusable wooden storage box."
    ],
    "tags": [
      "Vehicle Puja",
      "Pooja Kit",
      "Varanasi Sourced",
      "Kashi Prasad",
      "Home Pooja Kit",
      "Lord Ganesha Puja",
      "Travel Protection & Safety"
    ],
    "price": 1699,
    "mrp": 3399,
    "variants": [
      {
        "id": "variant-basic-kit",
        "name": "Basic Kit",
        "price": 1699,
        "mrp": 3399,
        "badge": "Essential Vehicle Devotion",
        "suitableFor": "Bike, Scooter & Small Vehicle",
        "description": "Contains all core non-perishable samagri, Lord Ganesha photo, Vehicle Pooja Vidhi booklet, clay diyas, Swastik/Om stickers, symbolic lemon & chili protection card, and cloths for basic prayers.",
        "keyHighlights": [
          "Lord Ganesha Photo & Aarti Card",
          "Vehicle Pooja Vidhi Book & Gangajal (100ml)",
          "Roli, Haldi, Kumkum, Chandan & Akshat rice",
          "Supari (11 pcs), Cloves & Cardamom (20 pcs each)",
          "Swastik & Om Stickers (2 pcs each) & Lemon & Chili Symbolic Card",
          "Steel Kalash, clay diyas (6 pcs) & Red/Yellow cloths"
        ],
        "samagriChecklist": [
          {
            "category": "Murtis, Photos & Books",
            "items": [
              {
                "name": "- Lord Ganesha Photo (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Vehicle Pooja Vidhi Book (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Ganesh Aarti Card (×1)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Sacred Ingredients & Herbs",
            "items": [
              {
                "name": "- Roli (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Haldi (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Kumkum (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Chandan Powder (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Akshat Rice (100g)",
                "quantity": "×1"
              },
              {
                "name": "- Supari (×11)",
                "quantity": "×1"
              },
              {
                "name": "- Cloves (×20)",
                "quantity": "×1"
              },
              {
                "name": "- Cardamom (×20)",
                "quantity": "×1"
              },
              {
                "name": "- Dry Coconut (×1)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Ritual Cloths & Aasans",
            "items": [
              {
                "name": "- Mauli (Raksha Sutra) (×2)",
                "quantity": "×1"
              },
              {
                "name": "- Janeu (Sacred Thread) (×2)",
                "quantity": "×1"
              },
              {
                "name": "- Red Pooja Cloth (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Yellow Pooja Cloth (×1)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Sacred Metalware & Vessels",
            "items": [
              {
                "name": "- Sealed Gangajal (100ml)",
                "quantity": "×1"
              },
              {
                "name": "- Steel Kalash (×1)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Aroma & Lamps",
            "items": [
              {
                "name": "- Camphor (Kafur) (50g)",
                "quantity": "×1"
              },
              {
                "name": "- Incense Sticks (Agarbatti) (1 Pack)",
                "quantity": "×1"
              },
              {
                "name": "- Dhoop Cone Pack (1 Pack)",
                "quantity": "×1"
              },
              {
                "name": "- Cotton Wicks (×25)",
                "quantity": "×1"
              },
              {
                "name": "- Clay Diyas (×6)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Packaging & Organization",
            "items": [
              {
                "name": "- Mishri (Sugar Candy) (100g)",
                "quantity": "×1"
              },
              {
                "name": "- Batasha (Sugar Drops) (100g)",
                "quantity": "×1"
              },
              {
                "name": "- Swastik Sticker (×2)",
                "quantity": "×1"
              },
              {
                "name": "- Om Sticker (×2)",
                "quantity": "×1"
              },
              {
                "name": "- Lemon & Chili Symbolic Card (×1)",
                "quantity": "×1"
              }
            ]
          }
        ]
      },
      {
        "id": "variant-standard-kit",
        "name": "Standard Kit",
        "price": 2699,
        "mrp": 5399,
        "badge": "Best Seller • Recommended",
        "suitableFor": "4–8 People",
        "description": "Adds brass kalash, steel thali, brass diya, bell, aasan, brass-plated Ganesha Yantra, Vehicle Protection Yantra, and custom organization bags.",
        "keyHighlights": [
          "Everything in Basic included",
          "Upgraded Brass Kalash & Brass Diya (×1)",
          "Steel Pooja Thali, Bowls (×2) & Bell",
          "Ganesh Yantra & Vehicle Protection Yantra (Brass-plated) & Pooja Aasan",
          "Premium Chandan & organic wicks (75 pcs)",
          "Red Cloth Pouch, organizing zip bags & Premium Gift Box"
        ],
        "samagriChecklist": [
          {
            "category": "Murtis, Photos & Books",
            "items": [
              {
                "name": "- Lord Ganesha Photo (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Vehicle Pooja Vidhi Book (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Ganesh Aarti Card (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Ganesh Yantra (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Vehicle Protection Yantra (×1)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Sacred Ingredients & Herbs",
            "items": [
              {
                "name": "- Roli (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Haldi (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Kumkum (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Chandan Powder (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Premium Chandan (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Akshat Rice (100g)",
                "quantity": "×1"
              },
              {
                "name": "- Supari (×11)",
                "quantity": "×1"
              },
              {
                "name": "- Cloves (×20)",
                "quantity": "×1"
              },
              {
                "name": "- Cardamom (×20)",
                "quantity": "×1"
              },
              {
                "name": "- Dry Coconut (×1)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Ritual Cloths & Aasans",
            "items": [
              {
                "name": "- Mauli (Raksha Sutra) (×4)",
                "quantity": "×1"
              },
              {
                "name": "- Janeu (Sacred Thread) (×6)",
                "quantity": "×1"
              },
              {
                "name": "- Red Pooja Cloth (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Yellow Pooja Cloth (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Pooja Aasan (×1)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Sacred Metalware & Vessels",
            "items": [
              {
                "name": "- Sealed Gangajal (100ml)",
                "quantity": "×1"
              },
              {
                "name": "- Steel Kalash (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Brass Kalash (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Steel Pooja Thali (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Steel Bowls (×2)",
                "quantity": "×1"
              },
              {
                "name": "- Pooja Spoon (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Temple Bell (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Brass Diya (×1)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Aroma & Lamps",
            "items": [
              {
                "name": "- Camphor (Kafur) (150g)",
                "quantity": "×1"
              },
              {
                "name": "- Incense Sticks (Agarbatti) (2 Packs)",
                "quantity": "×1"
              },
              {
                "name": "- Premium Dhoop Cone Pack (1 Pack)",
                "quantity": "×1"
              },
              {
                "name": "- Cotton Wicks (×75)",
                "quantity": "×1"
              },
              {
                "name": "- Clay Diyas (×6)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Packaging & Organization",
            "items": [
              {
                "name": "- Mishri (Sugar Candy) (100g)",
                "quantity": "×1"
              },
              {
                "name": "- Batasha (Sugar Drops) (100g)",
                "quantity": "×1"
              },
              {
                "name": "- Swastik Sticker (×2)",
                "quantity": "×1"
              },
              {
                "name": "- Om Sticker (×2)",
                "quantity": "×1"
              },
              {
                "name": "- Lemon & Chili Symbolic Card (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Red Cloth Pouch (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Zip Pouches for organization (×5)",
                "quantity": "×1"
              },
              {
                "name": "- Kashi Prasad Instruction Card (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Premium Gift Box (×1)",
                "quantity": "×1"
              }
            ]
          }
        ]
      },
      {
        "id": "variant-premium-kit",
        "name": "Premium Kit",
        "price": 4599,
        "mrp": 9199,
        "badge": "Luxury Altar Collection",
        "suitableFor": "8–15 People",
        "description": "The ultimate Vehicle Devotion collection. Features heavy copper lota/spoon, premium brassware, copper-etched Ganesha Yantra, Vehicle Protection Yantra, pure Kesar, natural Pooja Ittar, 12 clay diyas, and a reusable wooden storage box.",
        "keyHighlights": [
          "Everything in Standard included",
          "Large Brass Kalash & large Brass Diya (×1)",
          "Copper Lota & Copper Pooja Spoon",
          "Premium Copper-etched Ganesha Yantra & Vehicle Protection Yantra",
          "Kesar (2g), Pooja Ittar, 12 Clay Diyas & wooden box",
          "Reusable Wooden Storage Box & Complete Checklist Card"
        ],
        "samagriChecklist": [
          {
            "category": "Murtis, Photos & Books",
            "items": [
              {
                "name": "- Lord Ganesha Photo (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Vehicle Pooja Vidhi Book (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Ganesh Aarti Card (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Premium Ganesh Yantra (Copper-etched) (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Premium Vehicle Protection Yantra (Copper-etched) (×1)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Sacred Ingredients & Herbs",
            "items": [
              {
                "name": "- Roli (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Haldi (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Kumkum (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Chandan Powder (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Premium Chandan (50g)",
                "quantity": "×1"
              },
              {
                "name": "- Pure Kesar (Saffron) (2g)",
                "quantity": "×1"
              },
              {
                "name": "- Pooja Ittar (Fragrance) (1 Bottle)",
                "quantity": "×1"
              },
              {
                "name": "- Akshat Rice (100g)",
                "quantity": "×1"
              },
              {
                "name": "- Supari (×32)",
                "quantity": "×1"
              },
              {
                "name": "- Cloves (×20)",
                "quantity": "×1"
              },
              {
                "name": "- Cardamom (×20)",
                "quantity": "×1"
              },
              {
                "name": "- Dry Coconut (×3)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Ritual Cloths & Aasans",
            "items": [
              {
                "name": "- Mauli (Raksha Sutra) (×9)",
                "quantity": "×1"
              },
              {
                "name": "- Janeu (Sacred Thread) (×16)",
                "quantity": "×1"
              },
              {
                "name": "- Red Pooja Cloth (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Yellow Pooja Cloth (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Red Chowki Cloth (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Yellow Chowki Cloth (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Pooja Aasan (×1)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Sacred Metalware & Vessels",
            "items": [
              {
                "name": "- Sealed Gangajal (100ml)",
                "quantity": "×1"
              },
              {
                "name": "- Steel Kalash (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Brass Kalash (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Large Brass Kalash (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Steel Pooja Thali (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Premium Pooja Thali (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Steel Bowls (×6)",
                "quantity": "×1"
              },
              {
                "name": "- Pooja Spoon (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Copper Spoon (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Temple Bell (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Brass Bell (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Copper Lota (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Brass Diya (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Large Brass Diya (×1)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Aroma & Lamps",
            "items": [
              {
                "name": "- Camphor (Kafur) (350g)",
                "quantity": "×1"
              },
              {
                "name": "- Incense Sticks (Agarbatti) (2 Packs)",
                "quantity": "×1"
              },
              {
                "name": "- Premium Incense Packs (2 Packs)",
                "quantity": "×1"
              },
              {
                "name": "- Premium Dhoop Cone Pack (1 Pack)",
                "quantity": "×1"
              },
              {
                "name": "- Premium Dhoop Cones Extra (2 Packs)",
                "quantity": "×1"
              },
              {
                "name": "- Cotton Wicks (×175)",
                "quantity": "×1"
              },
              {
                "name": "- Clay Diyas (×12)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Packaging & Organization",
            "items": [
              {
                "name": "- Mishri (Sugar Candy) (350g)",
                "quantity": "×1"
              },
              {
                "name": "- Batasha (Sugar Drops) (350g)",
                "quantity": "×1"
              },
              {
                "name": "- Swastik Sticker (×2)",
                "quantity": "×1"
              },
              {
                "name": "- Om Sticker (×2)",
                "quantity": "×1"
              },
              {
                "name": "- Lemon & Chili Symbolic Card (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Red Cloth Pouch (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Zip Pouches for organization (×5)",
                "quantity": "×1"
              },
              {
                "name": "- Kashi Prasad Instruction Card (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Complete Checklist Card (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Premium Kashi Prasad Gift Packaging (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Reusable Wooden Storage Box (×1)",
                "quantity": "×1"
              }
            ]
          }
        ]
      }
    ],
    "specifications": [
      {
        "groupName": "Devotion & Metal Purity",
        "specs": [
          {
            "label": "Yantras Metal",
            "value": "Premium etched Copper Ganesha & Protection Yantras"
          },
          {
            "label": "Brass Castings",
            "value": "Grade-A solid Brass Kalash, bell & shanti diya"
          },
          {
            "label": "Copper Vessels",
            "value": "99.2% Pure copper lota & spoon for gangajal"
          },
          {
            "label": "Aura Cloths",
            "value": "Red and Yellow silk with hand-woven borders"
          }
        ]
      },
      {
        "groupName": "Origin & Sourcing",
        "specs": [
          {
            "label": "Compilation Origin",
            "value": "Holy city of Kashi under priest supervision"
          },
          {
            "label": "Sourcing Sincerity",
            "value": "100% Sourced & energized in Varanasi temples"
          },
          {
            "label": "Non-Perishable Promise",
            "value": "Guaranteed free of fresh fruits/flowers/milk/curd/mango leaves"
          },
          {
            "label": "Net Weight",
            "value": "Basic: ~1.2kg | Standard: ~2.6kg | Premium: ~4.4kg"
          }
        ]
      }
    ],
    "faqs": [
      {
        "q": "What is the difference between standard and premium Vehicle Protection Yantras?",
        "a": "The Standard kit features an energized brass-plated Vehicle Protection Yantra, and the Premium kit upgrades this to a premium copper-etched Vehicle Protection Yantra. Both are purified and energized in Ganesha temples in Varanasi by priests to bring safety, protection, and smooth travels."
      },
      {
        "q": "Does this kit contain Panchamrit ingredients?",
        "a": "No. In accordance with Kashi Prasad's non-perishable shipping guidelines, we do not ship fresh milk, curd, honey, fresh flowers, or fresh leaves. Instead, we provide mature dry whole coconuts, organic chandan powder, sweet offerings (batasha and mishri), and dry fruits (panchmewa) in airtight packages which have long shelf lives and arrive in pristine condition."
      },
      {
        "q": "How many clay diyas are included in the variants?",
        "a": "The Basic and Standard kits contain 6 clay diyas (custom sized for quick automobile blessings). The Premium kit features a large brass diya alongside 12 clay diyas and 175 cotton wicks, providing abundant light for Lord Ganesha prayers."
      }
    ],
    "shippingGuarantee": "**Sacred Vehicle Blessing Dispatch Direct from Varanasi**\n\nEvery order is packaged with utmost care and dispatched from Varanasi within 24 hours. We offer free cash on delivery across India.",
    "isPlaceholder": false
  },
  {
    "id": "pk-office-opening-pooja-kit",
    "slug": "office-opening-pooja-kit",
    "name": "Office Opening Pooja Kit",
    "category": "Puja Kits",
    "image": "/assets/puja-kits/19-office-opening-pooja-kit.jpg",
    "badge": "Best Seller",
    "rating": 4.9,
    "reviewCount": 284,
    "tagline": "Sacred Vedic Office Inauguration, Wealth & Growth Samagri",
    "shortDescription": "A premium collection of authentic, non-perishable Goddess Lakshmi and Lord Ganesha inauguration items sourced from Varanasi. Blessed under priest supervision, ideal for new startup, clinic, office, and store openings.",
    "detailedOverview": [
      "Invite the supreme, protecting power of Goddess Lakshmi and Lord Ganesha into your new commercial workplace. The Kashi Prasad Office Opening Pooja Kit is a luxurious, hand-compiled collection of authentic ritual materials sourced directly from holy Varanasi. Curated under the expert guidance of veteran Kashi temple priests, this kit ensures your startup, office, clinic, or showroom inauguration pujas are performed with absolute Vedic correctness.",
      "Adhering to our strict non-perishable e-commerce shipping policy, this kit contains zero perishable items such as fresh flowers, banana leaves, milk, curd, honey, or fresh coconuts. In their place, we provide mature dry whole coconuts, pure chandan powder, organic incense, and sweet batasha. All ingredients are packed in air-tight pouches to ensure maximum shelf life and perfect delivery.",
      "Choose from three custom configurations. The Basic kit contains all essential samagri, guide books, Ganga water, 11 clay diyas, Swastik/Om/Shubh Labh stickers, and dual cloths. The Standard kit adds brass vessels, a pooja thali, a bell, a brass-plated Lakshmi Yantra, a brass-plated Ganesh Yantra, and a premium aasan. The Premium kit offers the ultimate set with copper lota/spoon, heavy brassware, pure Kesar, 21 clay diyas, and a reusable wooden storage box."
    ],
    "tags": [
      "Office Opening Puja",
      "Pooja Kit",
      "Varanasi Sourced",
      "Kashi Prasad",
      "Home Pooja Kit",
      "Inauguration Puja",
      "Wealth & Fortune"
    ],
    "price": 1699,
    "mrp": 3399,
    "variants": [
      {
        "id": "variant-basic-kit",
        "name": "Basic Kit",
        "price": 1699,
        "mrp": 3399,
        "badge": "Essential Office Devotion",
        "suitableFor": "Small Office / Startup / Clinic",
        "description": "Contains all core non-perishable samagri, Ganesha & Lakshmi photos, Office Opening Pooja Vidhi booklet, clay diyas, auspicious stickers, and cloths for basic prayers.",
        "keyHighlights": [
          "Ganesha & Lakshmi photos & Aarti Card",
          "Office Opening Pooja Vidhi Book & Gangajal (100ml)",
          "Roli, Haldi, Kumkum, Chandan & Akshat rice",
          "Supari (11 pcs), Cloves & Cardamom (20 pcs each)",
          "Swastik, Om & Shubh Labh Stickers",
          "Steel Kalash, clay diyas (11 pcs) & Red/Yellow cloths"
        ],
        "samagriChecklist": [
          {
            "category": "Murtis, Photos & Books",
            "items": [
              {
                "name": "- Lord Ganesha Photo (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Goddess Lakshmi Photo (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Office Opening Pooja Vidhi Book (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Office Opening Aarti Card (×1)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Sacred Ingredients & Herbs",
            "items": [
              {
                "name": "- Roli (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Haldi (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Kumkum (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Chandan Powder (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Akshat Rice (100g)",
                "quantity": "×1"
              },
              {
                "name": "- Supari (×11)",
                "quantity": "×1"
              },
              {
                "name": "- Cloves (×20)",
                "quantity": "×1"
              },
              {
                "name": "- Cardamom (×20)",
                "quantity": "×1"
              },
              {
                "name": "- Dry Coconut (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Panchmewa (Dry Fruits) (100g)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Ritual Cloths & Aasans",
            "items": [
              {
                "name": "- Mauli (Raksha Sutra) (×2)",
                "quantity": "×1"
              },
              {
                "name": "- Janeu (Sacred Thread) (×2)",
                "quantity": "×1"
              },
              {
                "name": "- Red Pooja Cloth (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Yellow Pooja Cloth (×1)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Sacred Metalware & Vessels",
            "items": [
              {
                "name": "- Sealed Gangajal (100ml)",
                "quantity": "×1"
              },
              {
                "name": "- Steel Kalash (×1)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Aroma & Lamps",
            "items": [
              {
                "name": "- Camphor (Kafur) (50g)",
                "quantity": "×1"
              },
              {
                "name": "- Incense Sticks (Agarbatti) (1 Pack)",
                "quantity": "×1"
              },
              {
                "name": "- Dhoop Cone Pack (1 Pack)",
                "quantity": "×1"
              },
              {
                "name": "- Cotton Wicks (×25)",
                "quantity": "×1"
              },
              {
                "name": "- Clay Diyas (×11)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Packaging & Organization",
            "items": [
              {
                "name": "- Mishri (Sugar Candy) (100g)",
                "quantity": "×1"
              },
              {
                "name": "- Batasha (Sugar Drops) (100g)",
                "quantity": "×1"
              },
              {
                "name": "- Swastik Sticker (×2)",
                "quantity": "×1"
              },
              {
                "name": "- Om Sticker (×2)",
                "quantity": "×1"
              },
              {
                "name": "- Shubh Labh Sticker Set (×1)",
                "quantity": "×1"
              }
            ]
          }
        ]
      },
      {
        "id": "variant-standard-kit",
        "name": "Standard Kit",
        "price": 2699,
        "mrp": 5399,
        "badge": "Best Seller • Recommended",
        "suitableFor": "4–8 People",
        "description": "Adds brass kalash, steel thali, brass diya, bell, aasan, brass-plated Ganesha & Lakshmi Yantras, and custom organization bags.",
        "keyHighlights": [
          "Everything in Basic included",
          "Upgraded Brass Kalash & Brass Diya (×1)",
          "Steel Pooja Thali, Bowls (×2) & Bell",
          "Ganesh Yantra & Lakshmi Yantra (Brass-plated) & Pooja Aasan",
          "Premium Chandan & organic wicks (75 pcs)",
          "Red Cloth Pouch, organizing zip bags & Premium Gift Box"
        ],
        "samagriChecklist": [
          {
            "category": "Murtis, Photos & Books",
            "items": [
              {
                "name": "- Lord Ganesha Photo (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Goddess Lakshmi Photo (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Office Opening Pooja Vidhi Book (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Office Opening Aarti Card (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Ganesh Yantra (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Lakshmi Yantra (×1)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Sacred Ingredients & Herbs",
            "items": [
              {
                "name": "- Roli (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Haldi (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Kumkum (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Chandan Powder (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Premium Chandan (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Akshat Rice (100g)",
                "quantity": "×1"
              },
              {
                "name": "- Supari (×11)",
                "quantity": "×1"
              },
              {
                "name": "- Cloves (×20)",
                "quantity": "×1"
              },
              {
                "name": "- Cardamom (×20)",
                "quantity": "×1"
              },
              {
                "name": "- Dry Coconut (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Panchmewa (Dry Fruits) (100g)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Ritual Cloths & Aasans",
            "items": [
              {
                "name": "- Mauli (Raksha Sutra) (×4)",
                "quantity": "×1"
              },
              {
                "name": "- Janeu (Sacred Thread) (×6)",
                "quantity": "×1"
              },
              {
                "name": "- Red Pooja Cloth (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Yellow Pooja Cloth (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Pooja Aasan (×1)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Sacred Metalware & Vessels",
            "items": [
              {
                "name": "- Sealed Gangajal (100ml)",
                "quantity": "×1"
              },
              {
                "name": "- Steel Kalash (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Brass Kalash (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Steel Pooja Thali (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Steel Bowls (×2)",
                "quantity": "×1"
              },
              {
                "name": "- Pooja Spoon (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Temple Bell (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Brass Diya (×1)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Aroma & Lamps",
            "items": [
              {
                "name": "- Camphor (Kafur) (150g)",
                "quantity": "×1"
              },
              {
                "name": "- Incense Sticks (Agarbatti) (2 Packs)",
                "quantity": "×1"
              },
              {
                "name": "- Premium Dhoop Cone Pack (1 Pack)",
                "quantity": "×1"
              },
              {
                "name": "- Cotton Wicks (×75)",
                "quantity": "×1"
              },
              {
                "name": "- Clay Diyas (×11)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Packaging & Organization",
            "items": [
              {
                "name": "- Mishri (Sugar Candy) (100g)",
                "quantity": "×1"
              },
              {
                "name": "- Batasha (Sugar Drops) (100g)",
                "quantity": "×1"
              },
              {
                "name": "- Swastik Sticker (×2)",
                "quantity": "×1"
              },
              {
                "name": "- Om Sticker (×2)",
                "quantity": "×1"
              },
              {
                "name": "- Shubh Labh Sticker Set (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Red Cloth Pouch (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Zip Pouches for organization (×5)",
                "quantity": "×1"
              },
              {
                "name": "- Kashi Prasad Instruction Card (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Premium Gift Box (×1)",
                "quantity": "×1"
              }
            ]
          }
        ]
      },
      {
        "id": "variant-premium-kit",
        "name": "Premium Kit",
        "price": 4599,
        "mrp": 9199,
        "badge": "Luxury Altar Collection",
        "suitableFor": "8–15 People",
        "description": "The ultimate Office Opening collection. Features heavy copper lota/spoon, premium brassware, copper-etched Ganesha & Lakshmi Yantras, pure Kesar, natural Pooja Ittar, 21 clay diyas, and a reusable wooden storage box.",
        "keyHighlights": [
          "Everything in Standard included",
          "Large Brass Kalash & large Brass Diya (×1)",
          "Copper Lota & Copper Pooja Spoon",
          "Premium Copper-etched Ganesha Yantra & Lakshmi Yantra",
          "Kesar (2g), Pooja Ittar, 21 Clay Diyas & wooden box",
          "Reusable Wooden Storage Box & Complete Checklist Card"
        ],
        "samagriChecklist": [
          {
            "category": "Murtis, Photos & Books",
            "items": [
              {
                "name": "- Lord Ganesha Photo (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Goddess Lakshmi Photo (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Office Opening Pooja Vidhi Book (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Office Opening Aarti Card (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Premium Ganesh Yantra (Copper-etched) (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Premium Lakshmi Yantra (Copper-etched) (×1)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Sacred Ingredients & Herbs",
            "items": [
              {
                "name": "- Roli (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Haldi (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Kumkum (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Chandan Powder (20g)",
                "quantity": "×1"
              },
              {
                "name": "- Premium Chandan (50g)",
                "quantity": "×1"
              },
              {
                "name": "- Pure Kesar (Saffron) (2g)",
                "quantity": "×1"
              },
              {
                "name": "- Pooja Ittar (Fragrance) (1 Bottle)",
                "quantity": "×1"
              },
              {
                "name": "- Akshat Rice (100g)",
                "quantity": "×1"
              },
              {
                "name": "- Supari (×32)",
                "quantity": "×1"
              },
              {
                "name": "- Cloves (×20)",
                "quantity": "×1"
              },
              {
                "name": "- Cardamom (×20)",
                "quantity": "×1"
              },
              {
                "name": "- Dry Coconut (×3)",
                "quantity": "×1"
              },
              {
                "name": "- Panchmewa (Dry Fruits) (350g)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Ritual Cloths & Aasans",
            "items": [
              {
                "name": "- Mauli (Raksha Sutra) (×9)",
                "quantity": "×1"
              },
              {
                "name": "- Janeu (Sacred Thread) (×16)",
                "quantity": "×1"
              },
              {
                "name": "- Red Pooja Cloth (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Yellow Pooja Cloth (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Red Chowki Cloth (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Yellow Chowki Cloth (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Pooja Aasan (×1)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Sacred Metalware & Vessels",
            "items": [
              {
                "name": "- Sealed Gangajal (100ml)",
                "quantity": "×1"
              },
              {
                "name": "- Steel Kalash (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Brass Kalash (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Large Brass Kalash (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Steel Pooja Thali (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Premium Pooja Thali (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Steel Bowls (×6)",
                "quantity": "×1"
              },
              {
                "name": "- Pooja Spoon (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Copper Spoon (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Temple Bell (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Brass Bell (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Copper Lota (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Brass Diya (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Large Brass Diya (×1)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Aroma & Lamps",
            "items": [
              {
                "name": "- Camphor (Kafur) (350g)",
                "quantity": "×1"
              },
              {
                "name": "- Incense Sticks (Agarbatti) (2 Packs)",
                "quantity": "×1"
              },
              {
                "name": "- Premium Incense Packs (2 Packs)",
                "quantity": "×1"
              },
              {
                "name": "- Premium Dhoop Cone Pack (1 Pack)",
                "quantity": "×1"
              },
              {
                "name": "- Premium Dhoop Cones Extra (2 Packs)",
                "quantity": "×1"
              },
              {
                "name": "- Cotton Wicks (×175)",
                "quantity": "×1"
              },
              {
                "name": "- Clay Diyas (×21)",
                "quantity": "×1"
              }
            ]
          },
          {
            "category": "Packaging & Organization",
            "items": [
              {
                "name": "- Mishri (Sugar Candy) (350g)",
                "quantity": "×1"
              },
              {
                "name": "- Batasha (Sugar Drops) (350g)",
                "quantity": "×1"
              },
              {
                "name": "- Swastik Sticker (×2)",
                "quantity": "×1"
              },
              {
                "name": "- Om Sticker (×2)",
                "quantity": "×1"
              },
              {
                "name": "- Shubh Labh Sticker Set (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Red Cloth Pouch (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Zip Pouches for organization (×5)",
                "quantity": "×1"
              },
              {
                "name": "- Kashi Prasad Instruction Card (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Complete Checklist Card (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Premium Kashi Prasad Gift Packaging (×1)",
                "quantity": "×1"
              },
              {
                "name": "- Reusable Wooden Storage Box (×1)",
                "quantity": "×1"
              }
            ]
          }
        ]
      }
    ],
    "specifications": [
      {
        "groupName": "Devotion & Metal Purity",
        "specs": [
          {
            "label": "Yantras Metal",
            "value": "Premium etched Copper Ganesha & Lakshmi Yantras"
          },
          {
            "label": "Brass Castings",
            "value": "Grade-A solid Brass Kalash, bell & shanti diya"
          },
          {
            "label": "Copper Vessels",
            "value": "99.2% Pure copper lota & spoon for gangajal"
          },
          {
            "label": "Aura Cloths",
            "value": "Red and Yellow silk with hand-woven borders"
          }
        ]
      },
      {
        "groupName": "Origin & Sourcing",
        "specs": [
          {
            "label": "Compilation Origin",
            "value": "Holy city of Kashi under priest supervision"
          },
          {
            "label": "Sourcing Sincerity",
            "value": "100% Sourced & energized in Varanasi temples"
          },
          {
            "label": "Non-Perishable Promise",
            "value": "Guaranteed free of fresh fruits/flowers/milk/curd/mango leaves"
          },
          {
            "label": "Net Weight",
            "value": "Basic: ~1.4kg | Standard: ~2.8kg | Premium: ~4.6kg"
          }
        ]
      }
    ],
    "faqs": [
      {
        "q": "What is the difference between standard and premium Lakshmi & Ganesh Yantras?",
        "a": "The Standard kit features energized brass-plated Lakshmi & Ganesh Yantras, and the Premium kit upgrades both to premium copper-etched Lakshmi & Ganesh Yantras. These are purified and energized in Ganesha & Lakshmi temples in Varanasi by priests to bring wealth, fortune, business growth, and removal of obstacles."
      },
      {
        "q": "Does this kit contain Panchamrit ingredients?",
        "a": "No. In accordance with Kashi Prasad's non-perishable shipping guidelines, we do not ship fresh milk, curd, honey, fresh flowers, or fresh leaves. Instead, we provide mature dry whole coconuts, organic chandan powder, sweet offerings (batasha and mishri), and dry fruits (panchmewa) in airtight packages which have long shelf lives and arrive in pristine condition."
      },
      {
        "q": "How many clay diyas are included in the variants?",
        "a": "The Basic and Standard kits contain 11 clay diyas. The Premium kit features a large brass diya alongside 21 clay diyas and 175 cotton wicks, providing abundant light for your auspicious office inauguration prayers."
      }
    ],
    "shippingGuarantee": "**Sacred Office Opening Blessing Dispatch Direct from Varanasi**\n\nEvery order is packaged with utmost care and dispatched from Varanasi within 24 hours. We offer free cash on delivery across India.",
    "isPlaceholder": false
  }
];
