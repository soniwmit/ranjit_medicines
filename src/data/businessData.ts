import { ServiceCategory, FAQItem, ReviewItem, HealthTip, GalleryImage } from '../types';

export const BUSINESS_INFO = {
  name: 'Ranjit Medicines',
  tagline: 'Your Trusted Medical Store for Genuine Medicines & Healthcare Needs',
  category: 'Pharmacy / Retail & Wholesale Medical Store',
  phone: '09709390752',
  phoneDisplay: '+91 97093 90752',
  whatsapp: '09709390752',
  whatsappFormatted: '919709390752',
  address: 'Sigori - Paliganj Rd, Paliganj, Sigodi, Bihar 801110',
  landmark: 'Near Main Road Chowk, Sigori - Paliganj Highway, Bihar',
  workingHours: 'Mon - Sun: 7:00 AM - 10:00 PM (24/7 Emergency Medicine Dispatch)',
  email: 'contact@ranjitmedicines.com',
  website: 'https://ranjitmedicines.com',
  googleMapsDirections: 'https://www.google.com/maps/dir/?api=1&destination=Sigori+-+Paliganj+Rd,+Paliganj,+Sigodi,+Bihar+801110',
  mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3605.340621453412!2d84.8872!3d25.3524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398d3568c0000001%3A0x123456789abcdef!2sPaliganj%2C%20Bihar%20801110!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin',
  yearEstablished: '2012',
  licenseNo: 'BR-PLG-MED-2012-984',
  pharmacist: 'Certified Registered Pharmacist On-Site',
  socialLinks: {
    facebook: 'https://facebook.com/RanjitMedicinesPaliganj',
    instagram: 'https://instagram.com/ranjitmedicines',
    whatsapp: 'https://wa.me/919709390752',
    googleProfile: 'https://maps.google.com/?q=Sigori+-+Paliganj+Rd,+Paliganj,+Sigodi,+Bihar+801110'
  }
};

export const SERVICES_LIST: ServiceCategory[] = [
  {
    id: 'prescription-medicines',
    title: 'Prescription Medicines',
    description: 'Complete stock of genuine ethical pharmaceuticals sourced directly from WHO-GMP certified manufacturers and authorized stockists.',
    iconName: 'Pill',
    items: ['Antibiotics & Anti-Infectives', 'Diabetes & Insulin Care', 'Cardiac & Hypertension Care', 'Gastroenterology & Antacids', 'Neurology & Psychiatric Medications'],
    popularProducts: ['Dolo 650', 'Pan 40', 'Glycomet SR 500', 'Telma 40', 'Azithral 500'],
    badge: '100% Genuine Guaranteed'
  },
  {
    id: 'otc-medicines',
    title: 'OTC Medicines & First Aid',
    description: 'Over-the-counter daily healthcare remedies, pain relievers, fever management, digestive aids, and emergency first-aid supplies.',
    iconName: 'ShieldPlus',
    items: ['Pain Relief Sprays & Ointments', 'Cough & Cold Syrups', 'Antacids & Oral Rehydration (ORS)', 'Antiseptic Creams & Bandages', 'Burn Creams & Wound Dressings'],
    popularProducts: ['Volini Spray', 'Electral ORS', 'Himalaya Koflet', 'Betadine Ointment', 'Combiflam'],
    badge: 'Instant Relief Solutions'
  },
  {
    id: 'health-devices',
    title: 'Health Devices & Testing Equipment',
    description: 'Precision diagnostic instruments and home patient monitoring equipment with manufacturer warranties.',
    iconName: 'Activity',
    items: ['Digital BP Monitors', 'Glucometers & Test Strips', 'Pulse Oximeters & Thermometers', 'Nebulizers & Steam Inhalers', 'Stethoscopes & Weight Scales'],
    popularProducts: ['Omron BP Monitor HEM-7120', 'Accu-Chek Active Strips', 'Dr. Trust Pulse Oximeter', 'Dr. Morepen Nebulizer'],
    badge: 'Calibrated & Certified'
  },
  {
    id: 'surgical-supplies',
    title: 'Surgical Supplies & Dressings',
    description: 'Hospital grade surgical disposables, sterile cotton, syringes, IV sets, and orthopedic supports for clinic & home recovery.',
    iconName: 'Stethoscope',
    items: ['Sterile Bandages & Cotton Rolls', 'Syringes & IV Cannulas', 'Surgical Gloves & Masks', 'Knee Braces & Cervical Collars', 'Catheters & Urine Bags'],
    popularProducts: ['Dynamic Knee Cap', 'Sterile Gauze Swabs', 'DispoVan Syringes 2ml/5ml', 'Micropore Tape'],
    badge: 'Hospital Grade Quality'
  },
  {
    id: 'baby-maternity',
    title: 'Baby Care & Maternity Essentials',
    description: 'Dermatologist tested infant nutrition, baby diapers, gentle skincare products, and pre/post-natal maternal care supplements.',
    iconName: 'Baby',
    items: ['Infant Milk Formula & Baby Cereals', 'Diapers & Sensitive Wipes', 'Baby Lotions & Shampoos', 'Maternal Health Drinks & Supplements', 'Sterilized Feeding Bottles'],
    popularProducts: ['Pampers Diapers', 'Lactogen 1 & 2', 'Himalaya Baby Lotion', 'Mother’s Horlicks', 'Sebamed Baby Cream'],
    badge: 'Pediatrician Recommended'
  },
  {
    id: 'supplements-ayurveda',
    title: 'Health Supplements & Ayurveda',
    description: 'Multivitamins, calcium, protein powders, immunity boosters, and trusted herbal Ayurvedic formulations.',
    iconName: 'Sparkles',
    items: ['Multivitamin & Mineral Capsules', 'Calcium & Vitamin D3', 'Whey & Plant Protein Powders', 'Liver Tonics & Digestive Ayurvedic Oils', 'Immunity Boosters & Chyawanprash'],
    popularProducts: ['Dexorange Syrup', 'Liv.52 Syrup', 'Revital H', 'Shelcal 500', 'Dabur Chyawanprash'],
    badge: 'Holistic Wellness'
  }
];

export const WHY_CHOOSE_US = [
  {
    title: '100% Genuine Medicines',
    description: 'We source exclusively from licensed manufacturers and authorized distributors. Zero compromise on quality or authenticity.',
    iconName: 'BadgeCheck'
  },
  {
    title: 'Qualified Pharmacists On-Site',
    description: 'Our experienced pharmacists check dosage, expiry, and drug interactions before handing over any prescription medication.',
    iconName: 'UserCheck'
  },
  {
    title: 'Fair & Affordable Pricing',
    description: 'Enjoy attractive discounts on monthly chronic care prescriptions and essential health devices for your whole family.',
    iconName: 'Tag'
  },
  {
    title: 'Instant WhatsApp Order',
    description: 'Simply take a photo of your doctor’s prescription and send it on WhatsApp to check stock and reserve your medicines.',
    iconName: 'MessageSquareText'
  },
  {
    title: 'Strict Cold Chain Storage',
    description: 'Insulins, vaccines, and sensitive biologicals are stored in temperature-regulated refrigeration units with 24/7 power backup.',
    iconName: 'ThermometerSnowflake'
  },
  {
    title: 'Fast Local Delivery in Paliganj',
    description: 'Doorstep medicine delivery service across Sigori, Paliganj, Sigodi, and surrounding rural Bihar locations.',
    iconName: 'Truck'
  }
];

export const REVIEWS_LIST: ReviewItem[] = [
  {
    name: 'Rajesh Kumar Sharma',
    location: 'Paliganj Town',
    rating: 5,
    date: '2 weeks ago',
    comment: 'Ranjit Medicines is the most reliable pharmacy in Paliganj. I always get genuine BP and Diabetes medicines at good discounted prices. The staff is polite and helpful.',
    verified: true
  },
  {
    name: 'Pooja Kumari',
    location: 'Sigori, Bihar',
    rating: 5,
    date: '1 month ago',
    comment: 'Very convenient WhatsApp order system! I sent my baby’s prescription image on WhatsApp and picked up the pack in 10 minutes without waiting in line.',
    verified: true
  },
  {
    name: 'Dr. Amit Verma',
    location: 'Sigodi Medical Practitioner',
    rating: 5,
    date: '2 months ago',
    comment: 'As a practicing local doctor, I trust Ranjit Medicines for maintaining strict cold storage for insulin and urgent antibiotic availability in Paliganj region.',
    verified: true
  },
  {
    name: 'Sanjay Yadav',
    location: 'Paliganj Main Market',
    rating: 5,
    date: '3 months ago',
    comment: 'Great availability of surgical equipment and baby products. The store is clean, hygienic, and well organized.',
    verified: true
  }
];

export const FAQS_LIST: FAQItem[] = [
  {
    question: 'How do I order medicines on WhatsApp from Ranjit Medicines?',
    answer: 'Simply click the WhatsApp button on our website or message us at 09709390752. Attach a clear photo of your prescription, specify required quantities and your delivery address in Paliganj. We will confirm availability and total price immediately.',
    category: 'Orders'
  },
  {
    question: 'Are all medicines sold at Ranjit Medicines 100% genuine?',
    answer: 'Yes, absolutely. We source all medications directly from authorized pharma companies and primary stockists with strict GST billing. Every batch is verified for authenticity and expiry date before sale.',
    category: 'Quality'
  },
  {
    question: 'Do you offer home delivery in Sigori and Paliganj?',
    answer: 'Yes! We provide home delivery for urgent medicines, baby care products, and health devices within Paliganj, Sigori, Sigodi, and nearby local areas.',
    category: 'Delivery'
  },
  {
    question: 'What are the store operating hours?',
    answer: 'Our store is open 7 days a week from 7:00 AM to 10:00 PM. For emergency prescription needs outside regular hours, you can reach out via our phone call button.',
    category: 'Store Info'
  },
  {
    question: 'Do you keep insulin and vaccines in temperature controlled cold storage?',
    answer: 'Yes. We maintain specialized medical refrigerators operating strictly between 2°C to 8°C with continuous power backup to safeguard insulin, vaccines, and temperature-sensitive biologicals.',
    category: 'Storage'
  },
  {
    question: 'Can I check medicine stock availability online before coming to the store?',
    answer: 'Yes! Use our exclusive Medicine Stock Checker component on our website or send a quick WhatsApp message to confirm stock instantly.',
    category: 'Stock'
  }
];

export const HEALTH_TIPS: HealthTip[] = [
  {
    id: 'tip-1',
    title: '5 Crucial Rules for Safe Insulin & Temperature-Sensitive Medicine Storage',
    category: 'Medicine Care',
    readTime: '3 min read',
    summary: 'Learn how to store insulin pens, vials, and eye drops safely during hot summer months in Bihar.',
    content: 'Insulin and biological injections lose efficacy if exposed to direct heat above 25°C or freezing temperatures below 2°C. Always store unused vials in the refrigerator door shelf, never in the freezer compartment. When traveling, use insulated cool pouches.',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=800&auto=format&fit=crop',
    date: 'July 2026'
  },
  {
    id: 'tip-2',
    title: 'Understanding Prescription Antibiotic Dosage: Why Completing the Full Course Matters',
    category: 'Health Awareness',
    readTime: '4 min read',
    summary: 'Stopping antibiotics early leads to drug resistance. Discover why sticking to your doctor’s advised duration is essential.',
    content: 'Stopping antibiotics as soon as symptoms disappear allows surviving bacteria to mutate and build resistance. Always complete the entire prescribed course prescribed by your physician even if you feel completely recovered.',
    image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?q=80&w=800&auto=format&fit=crop',
    date: 'June 2026'
  },
  {
    id: 'tip-3',
    title: 'Essential Home First Aid Kit: What Every Family in Paliganj Should Have Ready',
    category: 'First Aid',
    readTime: '3 min read',
    summary: 'A quick checklist of antiseptic ointments, bandages, digital thermometer, and fever relievers for emergency readiness.',
    content: 'Keep an organized waterproof box containing sterile gauze swabs, micropore adhesive tape, antiseptic solution (like Betadine), paracetamol tablets, ORS packets, digital thermometer, and pain relief spray.',
    image: 'https://images.unsplash.com/photo-1603398938378-e54eab446dde?q=80&w=800&auto=format&fit=crop',
    date: 'May 2026'
  }
];

export const GALLERY_PHOTOS: GalleryImage[] = [
  {
    id: 'gal-1',
    title: 'Ranjit Medicines Store Front',
    category: 'Store Front',
    url: 'https://images.unsplash.com/photo-1586015555751-63bb77f4322a?q=80&w=1200&auto=format&fit=crop',
    caption: 'Clean, well-lit medical store located on Sigori - Paliganj Rd, Bihar.'
  },
  {
    id: 'gal-2',
    title: 'Organized Medicine Shelves',
    category: 'Medicines',
    url: 'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?q=80&w=1200&auto=format&fit=crop',
    caption: 'Categorized pharmaceutical inventory sorted by brand and therapeutic class.'
  },
  {
    id: 'gal-3',
    title: 'Health Monitors & Diagnostic Devices',
    category: 'Equipment',
    url: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop',
    caption: 'Omron BP apparatus, Accu-Chek glucometers, and digital thermometers.'
  },
  {
    id: 'gal-4',
    title: 'Baby Care & Skincare Section',
    category: 'Wellness',
    url: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1200&auto=format&fit=crop',
    caption: 'Himalaya, Pampers, and Lactogen baby essentials & maternal health care.'
  },
  {
    id: 'gal-5',
    title: 'Pharmacist Consultation Counter',
    category: 'Store Interior',
    url: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1200&auto=format&fit=crop',
    caption: 'Qualified pharmacist available on-site for prescription verification & advice.'
  },
  {
    id: 'gal-6',
    title: 'Cold Storage & Temperature Controlled Cabinet',
    category: 'Medicines',
    url: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=1200&auto=format&fit=crop',
    caption: 'Monitored refrigeration units for insulin vials, eye drops, and biological vaccines.'
  }
];
