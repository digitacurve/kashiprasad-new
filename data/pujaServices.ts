import { FAQItem } from "./types";

export interface KashiPoojaService {
  id: string;
  slug: string;
  name: string;
  category: "Rudrabhishek" | "Aarti" | "Other Pooja / Seva";
  price: number;
  mrp?: number;
  badge?: string;
  tagline: string;
  description: string;
  priestCount?: string;
  duration?: string;
  timing?: string;
  location: string;
  includes: string[];
  faqs?: FAQItem[];
}

export const kashiPoojaServices: KashiPoojaService[] = [
  // =========================================================================
  // CATEGORY 1 — RUDRABHISHEK (8 Services)
  // =========================================================================
  {
    id: "srv-rudrabhishek-1-shastri",
    slug: "rudrabhishek-1-shastri",
    name: "Rudrabhishek — 1 Shastri",
    category: "Rudrabhishek",
    price: 1450,
    mrp: 2900,
    badge: "Most Popular",
    tagline: "Sacred Vedic Shiva Abhishek at Kashi Vishwanath",
    description:
      "Traditional Vedic Rudrabhishek performed in your name by 1 learned Kashi Shastri with personalized Sankalp and holy temple prasad.",
    priestCount: "1 Learned Shastri",
    duration: "45–60 Minutes",
    location: "Kashi Vishwanath Temple, Varanasi",
    includes: [
      "Personalized Gotra & Family Name Sankalp",
      "Complete Rudri Path Recitation",
      "Panchamrit & Ganga Jal Abhishek",
      "Consecrated Kashi Prasad Dispatched to Home",
      "Digital Photo / Video Proof of Sankalp"
    ]
  },
  {
    id: "srv-rudrabhishek-5-shastri",
    slug: "rudrabhishek-5-shastri",
    name: "Rudrabhishek — 5 Shastri",
    category: "Rudrabhishek",
    price: 4000,
    mrp: 8000,
    badge: "Vedic Chanting",
    tagline: "Synchronized Rudri Recitation by 5 Vedic Priests",
    description:
      "Specialized Rudrabhishek conducted by 5 learned Vedic Shastris with continuous Rudri path, personalized family Sankalp, and sanctified Kashi Prasad.",
    priestCount: "5 Vedic Shastris",
    duration: "1.5–2 Hours",
    location: "Kashi Vishwanath Temple, Varanasi",
    includes: [
      "5 Vedic Shastris Chanting Sri Rudram",
      "Full Vedic Sankalp for Health & Prosperity",
      "Grand Panchamrit & Bilvapatra Archana",
      "Blessed Temple Prasad & Vibhuti Pack",
      "Video Clip of Sankalp Ritual"
    ]
  },
  {
    id: "srv-rudrabhishek-11-shastri",
    slug: "rudrabhishek-11-shastri",
    name: "Rudrabhishek — 11 Shastri",
    category: "Rudrabhishek",
    price: 3600,
    mrp: 7200,
    badge: "Grand Shiva Abhishek",
    tagline: "Powerful Rudra Path by 11 Veteran Kashi Priests",
    description:
      "Powerful Vedic Rudri recitations and sacred abhishekam performed by 11 veteran Kashi Shastris for prosperity, health, and spiritual protection.",
    priestCount: "11 Vedic Shastris",
    duration: "2–2.5 Hours",
    location: "Kashi Vishwanath Temple, Varanasi",
    includes: [
      "11 Priests Chanting in Complete Unison",
      "Mahasankalp for All Family Members",
      "Panchamrit, Honey, Sugarcane & Ganga Jal Abhishek",
      "Sanctified Kashi Vishwanath Dry Fruits Prasad",
      "Digital Recording of Sankalp"
    ]
  },
  {
    id: "srv-laghu-rudra-11-shastri",
    slug: "laghu-rudra-11-shastri",
    name: "Laghu Rudra — 11 Shastri",
    category: "Rudrabhishek",
    price: 6500,
    mrp: 13000,
    badge: "Intensive Anushthan",
    tagline: "121 Recitations of Sri Rudram for Planetary Shanti",
    description:
      "Comprehensive Laghu Rudra ritual featuring 121 recitations of Sri Rudram by 11 consecrated Vedic Shastris for major planetary peace and obstacle removal.",
    priestCount: "11 Consecrated Shastris",
    duration: "3–4 Hours",
    location: "Kashi Vishwanath Temple, Varanasi",
    includes: [
      "121 Complete Sri Rudram Recitations",
      "Specialized Havan & Purnahuti Included",
      "Comprehensive Dosha Shanti Sankalp",
      "Deluxe Consecrated Temple Prasad Box",
      "Complete Ritual Proof Video"
    ]
  },
  {
    id: "srv-maha-rudrabhishek-11-days",
    slug: "maha-rudrabhishek-11-days",
    name: "Maha Rudrabhishek — 11 Days",
    category: "Rudrabhishek",
    price: 65000,
    mrp: 130000,
    badge: "Supreme Anushthan",
    tagline: "11-Day Continuous Vedic Maha Anushthan",
    description:
      "The pinnacle Vedic Shiva anushthan conducted continuously over 11 consecutive days by senior Vedic Acharyas at Kashi Vishwanath with comprehensive daily Sankalp.",
    priestCount: "Vedic Acharyas Council",
    duration: "11 Consecutive Days",
    location: "Kashi Vishwanath Temple, Varanasi",
    includes: [
      "11 Days of Non-Stop Daily Rudrabhishek",
      "Daily Special Sankalp & Bilvapatra Arpan",
      "Grand Purnahuti on the 11th Day",
      "Special Consecrated Silver/Brass Temple Keepsake",
      "Daily Video Updates & Prasad Dispatch"
    ]
  },
  {
    id: "srv-milk-abhishek-21-50-litres",
    slug: "milk-abhishek-21-50-litres",
    name: "Milk Abhishek — 21–50 Litres",
    category: "Rudrabhishek",
    price: 1400,
    mrp: 2800,
    badge: "Pure Dugdhabhishek",
    tagline: "Continuous Pure Desi Cow Milk Abhishekam",
    description:
      "Holy Dugdhabhishek offering using 21 to 50 litres of pure desi cow milk offered to the sacred Jyotirlinga in your family's name.",
    priestCount: "Kashi Priests & Temple Sevaks",
    duration: "30–45 Minutes",
    location: "Kashi Vishwanath Temple, Varanasi",
    includes: [
      "21 to 50 Litres Pure Cow Milk Offering",
      "Name & Gotra Sankalp at the Sanctum",
      "Bilvapatra & Chandan Offering",
      "Kashi Temple Prasad Dispatch",
      "Photo of Milk Offering Ritual"
    ]
  },
  {
    id: "srv-twenty-years-rudrabhishek",
    slug: "twenty-years-rudrabhishek",
    name: "Twenty Years Rudrabhishek",
    category: "Rudrabhishek",
    price: 26000,
    mrp: 52000,
    badge: "20-Year Perpetual",
    tagline: "Annual Recurring Vedic Abhishek for Two Decades",
    description:
      "A perpetual 20-year annual Rudrabhishek pledge performed on your designated auspicious date (e.g. Birthday, Anniversary, or Mahashivratri) every year.",
    priestCount: "Kashi Temple Shastris",
    duration: "20 Years (Annual)",
    location: "Kashi Vishwanath Temple, Varanasi",
    includes: [
      "Annual Rudrabhishek for 20 Consecutive Years",
      "Fixed Auspicious Date of Your Choice",
      "Annual Prasad & Vibhuti Sent to Your Address",
      "Official Perpetual Registration Certificate",
      "Priority Annual Coordination by Team"
    ]
  },
  {
    id: "srv-rudrabhishek-1-shastri-video-conference",
    slug: "rudrabhishek-1-shastri-video-conference",
    name: "Rudrabhishek — 1 Shastri Video Conference",
    category: "Rudrabhishek",
    price: 1700,
    mrp: 3400,
    badge: "Live Interactive",
    tagline: "Live HD Video Call Sankalp with Shastriji",
    description:
      "Personalized 1-on-1 Rudrabhishek where you participate live via high-definition video conference while the Shastri chants the Vedic sankalp directly with you.",
    priestCount: "1 Dedicated Shastri",
    duration: "45–60 Minutes",
    location: "Live Video Conference & Kashi Temple",
    includes: [
      "Interactive 1-on-1 Live Video Link (Google Meet/WhatsApp)",
      "Direct Sanskrit Chanting & Guided Sankalp",
      "Live Darshan of the Consecrated Abhishek",
      "Temple Prasad Box Delivered Home",
      "Recorded Video Copy Provided"
    ]
  },

  // =========================================================================
  // CATEGORY 2 — AARTI (4 Services)
  // =========================================================================
  {
    id: "srv-mangla-aarti",
    slug: "mangla-aarti",
    name: "Mangla Aarti",
    category: "Aarti",
    price: 1500,
    mrp: 3000,
    badge: "Brahma Muhurta",
    tagline: "First Morning Aarti & Divine Awakening (3:00 AM)",
    description:
      "The most auspicious first aarti of the day at Kashi Vishwanath Temple, invoking divine awakening, clarity, and boundless Mahadev blessings.",
    timing: "3:00 AM – 4:00 AM",
    duration: "60 Minutes",
    location: "Kashi Vishwanath Temple, Varanasi",
    includes: [
      "Early Morning First Darshan & Sankalp",
      "Aarti Deepam & Damru Chanting Seva",
      "Holy Bhasma & Sanctified Morning Prasad",
      "Prompt Notification & Digital Verification Proof",
      "Auspicious Start to New Endeavors"
    ]
  },
  {
    id: "srv-mid-day-bhog-aarti",
    slug: "mid-day-bhog-aarti",
    name: "Mid Day Bhog Aarti",
    category: "Aarti",
    price: 1300,
    mrp: 2600,
    badge: "Royal Offering",
    tagline: "Midday Rajbhog Offering & Majestic Aarti (11:30 AM)",
    description:
      "Sacred midday Bhog offering and majestic Aarti performed with royal traditional musical instruments and specialized temple prasad offering.",
    timing: "11:30 AM – 12:30 PM",
    duration: "60 Minutes",
    location: "Kashi Vishwanath Temple, Varanasi",
    includes: [
      "Traditional Rajbhog Archana in Devotee's Name",
      "Chanting of Divine Stotras by Temple Priests",
      "Consecrated Bhog Sweet Prasad Pack",
      "Holy Ganga Jal & Raksha Sutra",
      "Digital Darshan Proof"
    ]
  },
  {
    id: "srv-sapt-rishi-aarti",
    slug: "sapt-rishi-aarti",
    name: "Sapt Rishi Aarti",
    category: "Aarti",
    price: 1300,
    mrp: 2600,
    badge: "Seven Sages Aarti",
    tagline: "Evening High-Energy Aarti by 7 Priests (7:00 PM)",
    description:
      "The historic evening Sapt Rishi Aarti conducted simultaneously by seven priests representing the ancient Seven Sages in high-energy synchronization.",
    timing: "7:00 PM – 8:15 PM",
    duration: "75 Minutes",
    location: "Kashi Vishwanath Temple, Varanasi",
    includes: [
      "Simultaneous 7-Priest High Energy Aarti",
      "Evening Vedic Sankalp on Devotee's Name",
      "Sacred Chandan, Flower & Vibhuti Blessings",
      "Sanctified Kashi Vishwanath Temple Prasad",
      "Digital Darshan Clip"
    ]
  },
  {
    id: "srv-shringaar-bhog-aarti",
    slug: "shringaar-bhog-aarti",
    name: "Shringaar / Bhog Aarti",
    category: "Aarti",
    price: 1300,
    mrp: 2600,
    badge: "Floral Shringaar",
    tagline: "Night Ornamentation & Fragrant Darshan (9:00 PM)",
    description:
      "The mesmerizing Night Shringaar Aarti where the Jyotirlinga is adorned with fragrant flowers, itra, and royal ornaments before night rest.",
    timing: "9:00 PM – 10:15 PM",
    duration: "75 Minutes",
    location: "Kashi Vishwanath Temple, Varanasi",
    includes: [
      "Night Shringaar & Fragrant Floral Alankaram",
      "Bedtime Shayan Aarti Sankalp",
      "Sanctified Night Prasad & Fragrant Bhasma",
      "Protective Temple Silk Cord",
      "Digital Verification Confirmation"
    ]
  },

  // =========================================================================
  // CATEGORY 3 — OTHER POOJA / SEVA (7 Services)
  // =========================================================================
  {
    id: "srv-dainik-sanyasi-bhojan",
    slug: "dainik-sanyasi-bhojan",
    name: "Dainik Sanyasi Bhojan",
    category: "Other Pooja / Seva",
    price: 4000,
    mrp: 8000,
    badge: "Annadanam Seva",
    tagline: "Daily Pure Sattvic Feeding of Kashi Sanyasis",
    description:
      "Sponsor wholesome, pure sattvic meals for revered sanyasis, sadhus, and Vedic scholars residing on the sacred ghats of Varanasi in your name.",
    duration: "Daily Midday Feeding",
    location: "Varanasi Sanyasi Ashrams & Ghats",
    includes: [
      "Pure Desi Ghee Sattvic Full Meal Distribution",
      "Name & Gotra Recitation during Annadanam",
      "Includes Dakshina for 11+ Sadhus",
      "Punya Sankalp Certificate & Prasad Pack",
      "Photographs of Meal Distribution"
    ]
  },
  {
    id: "srv-sanyasi-bhojan-monday",
    slug: "sanyasi-bhojan-monday",
    name: "Sanyasi Bhojan — Monday",
    category: "Other Pooja / Seva",
    price: 5500,
    mrp: 11000,
    badge: "Somwar Mahaprasad",
    tagline: "Auspicious Monday Sanyasi Mahabhojan Feast",
    description:
      "Auspicious Monday (Somwar) special feast distribution and dakshina for sadhus and sanyasis in holy Kashi to earn supreme spiritual merit (Punya).",
    duration: "Monday Midday Feast",
    location: "Varanasi Sanyasi Ashrams & Ghats",
    includes: [
      "Elaborate Monday Sweet & Sattvic Mahaprasad",
      "Special Shiva Somwar Sankalp",
      "Dakshina & Cloth Offering to Sanyasis",
      "Blessed Temple Prasad & Holy Gangajal Sent Home",
      "Full Video Proof of Feeding"
    ]
  },
  {
    id: "srv-dainik-ratri-kalin-shringar-9-pm",
    slug: "dainik-ratri-kalin-shringar-9-pm",
    name: "Dainik Ratri Kalin Shringar — 9 PM",
    category: "Other Pooja / Seva",
    price: 6000,
    mrp: 12000,
    badge: "Grand Shringaar",
    tagline: "Exclusive Night Flower & Crown Shringaar Seva",
    description:
      "Sponsor the grand night floral decoration, belpatra garlands, and sacred adornment of the Jyotirlinga at 9 PM with personalized Sankalp.",
    timing: "9:00 PM Daily",
    duration: "60 Minutes",
    location: "Kashi Vishwanath Temple, Varanasi",
    includes: [
      "Grand Fresh Flower Garlands & Mukut Shringaar",
      "Pure Chandan Lepan & Fragrant Itra Seva",
      "Special Night Archana in Your Family Name",
      "Blessed Flower Petals & Temple Prasad Dispatched",
      "High-Resolution Photo of the Decorated Shringaar"
    ]
  },
  {
    id: "srv-every-purnima-shringaar",
    slug: "every-purnima-shringaar",
    name: "Every Purnima Shringaar",
    category: "Other Pooja / Seva",
    price: 4700,
    mrp: 9400,
    badge: "Full Moon Special",
    tagline: "Full Moon Night Divine Jyotirlinga Adornment",
    description:
      "Special monthly Purnima (Full Moon) Shringaar seva with rare fresh flowers, chandan lepan, and special night archana in your family's name.",
    timing: "Purnima Tithi (Full Moon Night)",
    duration: "90 Minutes",
    location: "Kashi Vishwanath Temple, Varanasi",
    includes: [
      "Special Purnima Tithi Jyotirlinga Adornment",
      "Chandra Dosha Shanti & Lakshmi-Shiva Sankalp",
      "Silver Belpatra Offering & Scented Aarti",
      "Consecrated Purnima Prasad Box Sent Home",
      "Digital Darshan & Verification Video"
    ]
  },
  {
    id: "srv-akhand-deep",
    slug: "akhand-deep",
    name: "Akhand Deep",
    category: "Other Pooja / Seva",
    price: 1700,
    mrp: 3400,
    badge: "Perpetual Flame",
    tagline: "Eternal Cow Ghee Lamp in Sanctum Sanctorum",
    description:
      "Lighting and continuous replenishment of pure cow ghee Akhand Deep (eternal lamp) burning in the sanctum sanctorum for removing inner darkness.",
    duration: "24-Hour Burning Flame",
    location: "Kashi Vishwanath Temple Sanctum",
    includes: [
      "Pure Cow Ghee Akhand Jyoti Lighting",
      "Name & Family Sankalp by Temple Priest",
      "Removes Pitra & Planetary Afflictions",
      "Sanctified Lamp Ash (Bhasma) & Prasad",
      "Photo of Lighted Deepam"
    ]
  },
  {
    id: "srv-satyanarayan-katha",
    slug: "satyanarayan-katha",
    name: "Satyanarayan Katha",
    category: "Other Pooja / Seva",
    price: 1500,
    mrp: 3000,
    badge: "Auspicious Vrat",
    tagline: "Sri Satyanarayan Vrat Katha & Havan by Kashi Pandits",
    description:
      "Auspicious Sri Satyanarayan Vrat Katha recited by senior Kashi priests with full vidhi, Panchamrit, Prasad distribution, and family sankalp.",
    duration: "1.5–2 Hours",
    location: "Kashi Ganga Ghat / Temple Hall",
    includes: [
      "Complete 5-Chapter Vedic Katha Recitation",
      "Sankalp for Family Harmony & Prosperity",
      "Panchamrit, Banana, & Panjiri Mahaprasad",
      "Consecrated Dry Prasad Pack Delivered",
      "Digital Recording of Katha Sankalp"
    ]
  },
  {
    id: "srv-haud-bharai-milk-from-580-litres",
    slug: "haud-bharai-milk-from-580-litres",
    name: "Haud Bharai — Milk, from 580 Litres",
    category: "Other Pooja / Seva",
    price: 3250,
    mrp: 6500,
    badge: "Grand Milk Influx",
    tagline: "580+ Litres Pure Milk Reservoir Offering",
    description:
      "Immense devotional seva of filling the temple sanctum Haud (sacred reservoir) with pure cow milk starting from 580 litres for supreme communal and family blessings.",
    duration: "Special Temple Influx Seva",
    location: "Kashi Vishwanath Temple, Varanasi",
    includes: [
      "580+ Litres Cow Milk Influx into the Sanctum Haud",
      "Grand Rudra Chanting by Temple Shastris",
      "Family Name Maha Sankalp at the Temple Altar",
      "Deluxe Kashi Vishwanath Prasad Package",
      "Video Clip of Haud Milk Influx Seva"
    ]
  }
];

export function getPoojaServiceBySlug(slug: string): KashiPoojaService | undefined {
  return kashiPoojaServices.find((s) => s.slug === slug);
}

export function getPoojaServicesByCategory(category: "Rudrabhishek" | "Aarti" | "Other Pooja / Seva"): KashiPoojaService[] {
  return kashiPoojaServices.filter((s) => s.category === category);
}
