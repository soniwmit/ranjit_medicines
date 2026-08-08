import React, { useEffect } from 'react';
import { BUSINESS_INFO } from '../data/businessData';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  pageType?: 'Home' | 'About' | 'Services' | 'Gallery' | 'Contact';
  faqSchemaData?: { question: string; answer: string }[];
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords,
  canonicalUrl,
  pageType = 'Home',
  faqSchemaData
}) => {
  const fullTitle = title 
    ? `${title} | ${BUSINESS_INFO.name}` 
    : `${BUSINESS_INFO.name} | Genuine Medicines & Healthcare in Paliganj, Bihar`;

  const metaDesc = description || `${BUSINESS_INFO.name} - Your trusted medical store on Sigori-Paliganj Rd, Bihar. 100% genuine medicines, surgical supplies, baby care, and instant WhatsApp orders.`;
  const metaKeywords = keywords || `Ranjit Medicines, Pharmacy in Paliganj, Medical Store Sigodi Bihar, Chemist Paliganj, Buy Medicine Online WhatsApp, Genuine Drugs Sigori`;

  useEffect(() => {
    // Page Title
    document.title = fullTitle;

    // Update meta description
    let metaDescriptionTag = document.querySelector('meta[name="description"]');
    if (!metaDescriptionTag) {
      metaDescriptionTag = document.createElement('meta');
      metaDescriptionTag.setAttribute('name', 'description');
      document.head.appendChild(metaDescriptionTag);
    }
    metaDescriptionTag.setAttribute('content', metaDesc);

    // Update meta keywords
    let metaKeywordsTag = document.querySelector('meta[name="keywords"]');
    if (!metaKeywordsTag) {
      metaKeywordsTag = document.createElement('meta');
      metaKeywordsTag.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywordsTag);
    }
    metaKeywordsTag.setAttribute('content', metaKeywords);

    // LocalBusiness / Pharmacy Schema JSON-LD
    const pharmacySchema = {
      "@context": "https://schema.org",
      "@type": "Pharmacy",
      "name": BUSINESS_INFO.name,
      "image": "https://images.unsplash.com/photo-1586015555751-63bb77f4322a?q=80&w=800",
      "@id": "https://ranjit-medicines.vercel.app/#pharmacy",
      "url": "https://ranjit-medicines.vercel.app",
      "telephone": BUSINESS_INFO.phoneDisplay,
      "priceRange": "₹",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Sigori - Paliganj Rd",
        "addressLocality": "Paliganj, Sigodi",
        "addressRegion": "Bihar",
        "postalCode": "801110",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 25.3524,
        "longitude": 84.8872
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          "opens": "07:00",
          "closes": "22:00"
        }
      ],
      "sameAs": [
        BUSINESS_INFO.socialLinks.facebook,
        BUSINESS_INFO.socialLinks.instagram,
        BUSINESS_INFO.socialLinks.googleProfile
      ]
    };

    // Breadcrumb Schema
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://ranjit-medicines.vercel.app/"
        },
        pageType !== 'Home' ? {
          "@type": "ListItem",
          "position": 2,
          "name": pageType,
          "item": `https://ranjit-medicines.vercel.app/${pageType.toLowerCase()}`
        } : null
      ].filter(Boolean)
    };

    let faqSchema = null;
    if (faqSchemaData && faqSchemaData.length > 0) {
      faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqSchemaData.map(item => ({
          "@type": "Question",
          "name": item.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": item.answer
          }
        }))
      };
    }

    // Append JSON-LD script tags
    const scriptId = 'ranjit-seo-schema';
    let scriptElement = document.getElementById(scriptId) as HTMLScriptElement;
    if (!scriptElement) {
      scriptElement = document.createElement('script');
      scriptElement.id = scriptId;
      scriptElement.type = 'application/ld+json';
      document.head.appendChild(scriptElement);
    }

    const schemas = [pharmacySchema, breadcrumbSchema];
    if (faqSchema) schemas.push(faqSchema as any);

    scriptElement.textContent = JSON.stringify(schemas);

  }, [fullTitle, metaDesc, metaKeywords, pageType, faqSchemaData]);

  return null;
};
