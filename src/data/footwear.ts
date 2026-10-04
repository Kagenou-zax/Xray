import { Product, StepItem, AboutPoint } from '../types';

export const BUSINESS_INFO = {
  name: 'Sole Crafts Creation',
  shortName: 'SCC',
  tagline: 'WE MADE IT, YOU ROCK IT',
  summary: 'Quality, classy and affordable handmade footwear (slides and sandals)',
  phoneDisplay: '0812 900 6150',
  phoneRaw: '08129006150',
  whatsappCountryCode: '234',
  whatsappBaseUrl: 'https://wa.me/2348129006150',
  hours: 'Open 24 hours on WhatsApp',
  delivery: 'We deliver to you',
  colors: {
    heroEspresso: '#2a1a12',
    cream: '#f6efe6',
    burntOrange: '#e8742a',
    burntOrangeHover: '#d0621d',
    espressoDark: '#1b100b',
  },
  products: [
    {
      id: 'black-gold-emblem-slippers',
      name: 'Classic Black Gold Emblem Slippers',
      category: 'Artisan Slippers',
      description: 'Sleek matte black leather toe-post slippers adorned with signature interlocking gold emblem ornaments.',
      priceNgn: 13000,
      priceDisplay: '₦13,000',
      pricingNote: '₦13,000',
      image: '/7e4eaf93-668f-4ecc-9a1a-afc5a5a1fd34.jpeg',
      gradient: 'from-[#212121] via-[#3d3d3d] to-[#141414]',
      primaryTone: '#212121',
      accentDetail: 'Gold Insignia Emblem',
      silhouetteType: 'slipper' as const,
    },
    {
      id: 'crisp-white-gold-buckle',
      name: 'White Cross-Strap Buckle Slides',
      category: 'Boutique Slides',
      description: 'Pristine white leather cross-strap slide with polished gold oval buckle and soft padded insole cushion.',
      priceNgn: 13000,
      priceDisplay: '₦13,000',
      pricingNote: '₦13,000',
      image: '/2d451008-6070-4685-bcf6-e606541469f8.jpeg',
      gradient: 'from-[#6c6158] via-[#8c8075] to-[#403932]',
      primaryTone: '#8c8075',
      accentDetail: 'Polished Oval Buckle',
      silhouetteType: 'slide' as const,
    },
    {
      id: 'black-and-red-slides',
      name: 'Burgundy & Black Cross-Strap Slides',
      category: 'Signature Slides',
      description: 'Handcrafted cross-strap leather slides in rich burgundy with black sole edging and precision contrast stitching.',
      priceNgn: 13000,
      priceDisplay: '₦13,000',
      pricingNote: '₦13,000',
      image: '/2a226750-f0bc-4d15-9322-f7c393c6ea34.jpeg',
      gradient: 'from-[#4a1c24] via-[#6a2632] to-[#250d12]',
      primaryTone: '#6a2632',
      accentDetail: 'Contrast Hand-Stitching',
      silhouetteType: 'slide' as const,
    },
    {
      id: 'sky-blue-double-buckle',
      name: 'Sky Blue Double-Buckle Comfort Slides',
      category: 'Luxury Comfort',
      description: 'Dual-strap baby blue leather slides with silver pin buckles and thick anatomical cushioned footbed.',
      priceNgn: 22000,
      priceDisplay: '₦22,000',
      pricingNote: '₦22,000',
      image: '/fd4095dd-2a82-4701-8c2c-6ac53624cf08.jpeg',
      gradient: 'from-[#2b4c68] via-[#4a7a9e] to-[#1c3347]',
      primaryTone: '#4a7a9e',
      accentDetail: 'Dual Silver Buckles',
      silhouetteType: 'slide' as const,
    },
  ] as Product[],
  steps: [
    {
      number: '01',
      title: 'Place your order',
      description: 'Message us on WhatsApp to select your desired style or start your conversation.',
    },
    {
      number: '02',
      title: 'Choose style & size',
      description: 'Select your preferred leather tone, size (EU 38–46), or send reference photos.',
    },
    {
      number: '03',
      title: 'Crafted with care',
      description: 'Our lead craftsman handcrafts, lines, and quality-checks your footwear in our workshop.',
    },
    {
      number: '04',
      title: 'Delivered to you',
      description: 'Your finished footwear is inspected, carefully packaged, and delivered straight to your location.',
    },
  ] as StepItem[],
  aboutPoints: [
    {
      title: '100% handmade',
      detail: 'Every single cut, edge burnish, and stitch is completed by hand with patience and master artisan technique.',
    },
    {
      title: 'Comfortable fit',
      detail: 'Contoured footbeds with soft leather lining ensure that each step feels natural and light on your feet.',
    },
    {
      title: 'Affordable prices',
      detail: 'Premium workshop-grade footwear directly to you at fair, accessible prices with zero retail middlemen.',
    },
  ] as AboutPoint[],
  createWhatsAppLink: (customMessage?: string) =>
    `https://wa.me/2348129006150?text=${encodeURIComponent(
      customMessage || 'Hello Sole Crafts Creation, I would like to make an inquiry.',
    )}`,
  createProductOrderLink: (productName: string, details?: string) => {
    let msg = `Hello Sole Crafts Creation, I would like to order ${productName}.`;
    if (details) {
      msg += ` (${details})`;
    }
    return `https://wa.me/2348129006150?text=${encodeURIComponent(msg)}`;
  },
};

export const SIZES = ['EU 39', 'EU 40', 'EU 41', 'EU 42', 'EU 43', 'EU 44', 'EU 45'];
export const LEATHER_TONES = ['Original Colorway', 'Warm Tan', 'Espresso Brown', 'Onyx Black'];
