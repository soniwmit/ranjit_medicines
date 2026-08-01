import React, { useState } from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import { 
  Phone, MessageCircle, MapPin, ShieldCheck, ChevronRight, 
  Pill, Activity, Stethoscope, Baby, Sparkles, Heart, 
  BadgeCheck, UserCheck, Tag, ThermometerSnowflake, Truck, 
  Clock, ArrowRight, HelpCircle, ChevronDown, Check, Star, Mail
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { MedicineStockChecker } from '../components/MedicineStockChecker';
import { BUSINESS_INFO, SERVICES_LIST, WHY_CHOOSE_US, REVIEWS_LIST, FAQS_LIST, HEALTH_TIPS } from '../data/businessData';

interface ContextType {
  handleOpenWhatsAppOrder: (medName?: string) => void;
}

export const Home: React.FC = () => {
  const { handleOpenWhatsAppOrder } = useOutletContext<ContextType>();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setNewsletterEmail('');
    }
  };

  return (
    <div>
      <SEO pageType="Home" faqSchemaData={FAQS_LIST.slice(0, 4)} />

      {/* 1. HERO BANNER - Sleek Interface Theme */}
      <section className="relative bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 py-12 sm:py-16 lg:py-20 transition-colors border-b border-slate-200 dark:border-slate-800 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Hero Left Content */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Badge */}
              <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider border border-emerald-200 dark:border-emerald-800">
                ✓ 100% Genuine Medicines
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white leading-[1.1] tracking-tight">
                Trusted Healthcare <br />
                <span className="text-blue-600 dark:text-blue-400">at Paliganj.</span>
              </h1>

              {/* Description */}
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-xl leading-relaxed">
                Providing genuine medicines, baby care, and surgical supplies since 2012. Experience fast delivery and professional consultation in Sigodi.
              </p>

              {/* Hero Action Buttons */}
              <div className="flex flex-wrap gap-4 pt-2">
                <button
                  onClick={() => handleOpenWhatsAppOrder()}
                  className="flex items-center gap-2 bg-emerald-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-emerald-700 shadow-xl shadow-emerald-200 dark:shadow-none transition-all cursor-pointer transform hover:-translate-y-0.5"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>WhatsApp Order</span>
                </button>

                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-blue-700 shadow-xl shadow-blue-200 dark:shadow-none transition-all"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call Store</span>
                </a>

                <a
                  href={BUSINESS_INFO.googleMapsDirections}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 px-6 py-4 rounded-2xl font-bold hover:bg-slate-100 dark:hover:bg-slate-800 transition-all shadow-xs"
                >
                  <MapPin className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                  <span>Get Directions</span>
                </a>
              </div>

              {/* Stat Cards Grid */}
              <div className="grid grid-cols-3 gap-4 pt-4 sm:pt-6">
                <div className="p-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm">
                  <p className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">15k+</p>
                  <p className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 uppercase font-bold mt-0.5">Medicines</p>
                </div>
                <div className="p-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm">
                  <p className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">24h</p>
                  <p className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 uppercase font-bold mt-0.5">Support</p>
                </div>
                <div className="p-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm">
                  <p className="text-2xl sm:text-3xl font-extrabold text-emerald-600 dark:text-emerald-400">100%</p>
                  <p className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 uppercase font-bold mt-0.5">Genuine</p>
                </div>
              </div>

            </div>

            {/* Hero Right Column: Stock Checker & Prescription Upload */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              
              {/* Prescription Upload Card */}
              <div className="bg-blue-600 rounded-3xl p-6 sm:p-7 text-white relative overflow-hidden shadow-2xl shadow-blue-200 dark:shadow-none">
                <div className="relative z-10">
                  <span className="inline-block px-2.5 py-0.5 bg-white/20 text-white text-[10px] font-bold uppercase rounded-full mb-3">
                    Instant Consultation
                  </span>
                  <h4 className="font-extrabold text-xl sm:text-2xl mb-1">Prescription Upload</h4>
                  <p className="text-blue-100 text-sm mb-5 leading-relaxed">
                    Simply send a photo on WhatsApp and we'll confirm stock availability & price instantly.
                  </p>
                  <button
                    onClick={() => handleOpenWhatsAppOrder()}
                    className="bg-white text-blue-600 hover:bg-slate-100 px-6 py-3.5 rounded-2xl text-sm font-bold flex items-center gap-2 shadow-lg transition-all cursor-pointer"
                  >
                    <MessageCircle className="w-5 h-5 text-emerald-600" />
                    <span>Upload Prescription Image</span>
                  </button>
                </div>
                <div className="absolute -right-4 -bottom-4 w-32 h-32 bg-white/10 rounded-full blur-2xl pointer-events-none" />
              </div>

              {/* Quick Info Card */}
              <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-xl shadow-slate-200/60 dark:shadow-none border border-slate-100 dark:border-slate-800">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <Pill className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                    <span>Paliganj Pharmacy Desk</span>
                  </h3>
                  <span className="text-[10px] bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-400 px-2.5 py-0.5 rounded-full font-bold uppercase">
                    Live Support
                  </span>
                </div>

                <div className="space-y-3 text-xs text-slate-600 dark:text-slate-300">
                  <div className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700">
                    <div>
                      <p className="text-xs font-bold text-slate-900 dark:text-white">Sigori - Paliganj Rd</p>
                      <p className="text-[10px] text-slate-500">Bihar 801110</p>
                    </div>
                    <span className="text-[10px] text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-950 px-2 py-1 rounded font-bold">OPEN TODAY</span>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700">
                    <div>
                      <p className="text-xs font-bold text-slate-900 dark:text-white">Cold Storage Insulin</p>
                      <p className="text-[10px] text-slate-500">2°C–8°C Medical Refrigerator</p>
                    </div>
                    <span className="text-[10px] text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-950 px-2 py-1 rounded font-bold">ACTIVE</span>
                  </div>
                </div>

                <a
                  href="/services#stock-checker"
                  className="w-full mt-4 py-3 bg-slate-900 dark:bg-emerald-600 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 hover:bg-slate-800 transition-all"
                >
                  <span>Search Full Medicine Stock</span>
                  <ArrowRight className="w-4 h-4 text-emerald-400 dark:text-white" />
                </a>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 2. SHORT ABOUT PREVIEW */}
      <section className="py-16 sm:py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Store Image */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800">
                <img
                  src="https://images.unsplash.com/photo-1631549916768-4119b2e5f926?q=80&w=800&auto=format&fit=crop"
                  alt="Ranjit Medicines Store Shelves"
                  referrerPolicy="no-referrer"
                  className="w-full h-80 sm:h-96 object-cover"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950/80 via-slate-950/40 to-transparent p-6 text-white">
                  <p className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">Store Overview</p>
                  <p className="text-lg font-bold">Serving Paliganj & Sigori Since 2012</p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
                About Ranjit Medicines
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Dedicated Healthcare Service in Paliganj & Sigodi
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                Ranjit Medicines is a premier, fully licensed retail and wholesale pharmacy situated on Sigori - Paliganj Road in Bihar. Founded with a commitment to patient wellbeing, we ensure that local families always have access to 100% genuine pharmaceutical drugs, health monitors, and baby care essentials.
              </p>
              
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80">
                  <p className="text-2xl font-extrabold text-emerald-600 dark:text-emerald-400">14+ Years</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Trusted Pharmacy Experience</p>
                </div>
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80">
                  <p className="text-2xl font-extrabold text-emerald-600 dark:text-emerald-400">10,000+</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Satisfied Local Customers</p>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/about"
                  className="inline-flex items-center space-x-2 px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-emerald-600 dark:hover:bg-emerald-500 text-white text-sm font-bold shadow-md transition-all"
                >
                  <span>Learn More About Us</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. FEATURED SERVICES (MAXIMUM 6) */}
      <section className="py-16 bg-slate-50 dark:bg-slate-950 border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
              Our Core Offerings
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-1">
              Complete Healthcare & Medical Solutions
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
              From chronic condition care to medical equipment and baby health, we carry comprehensive pharmaceutical stocks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES_LIST.slice(0, 6).map((service) => (
              <div
                key={service.id}
                className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-lg hover:border-emerald-500 dark:hover:border-emerald-500 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-4">
                    <Pill className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                    {service.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {service.popularProducts.map((p) => (
                      <span key={p} className="text-[11px] bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-2.5 py-0.5 rounded-md font-medium">
                        {p}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <button
                    onClick={() => handleOpenWhatsAppOrder(service.title)}
                    className="text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline flex items-center space-x-1"
                  >
                    <span>Order via WhatsApp</span>
                  </button>
                  <Link to="/services" className="text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
                    Details →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/services"
              className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-md transition-all"
            >
              <span>Explore All Categories & Full Services</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

      {/* 4. WHY CHOOSE US */}
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
              Why Choose Ranjit Medicines
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-1">
              Your Health & Safety Is Our Absolute Priority
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_CHOOSE_US.map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700/80 hover:bg-white dark:hover:bg-slate-800 transition-all shadow-xs"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center mb-4 shadow-sm">
                  <BadgeCheck className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. MEDICINE STOCK CHECKER PREVIEW */}
      <section className="py-16 bg-slate-100 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MedicineStockChecker onOrderMedicine={handleOpenWhatsAppOrder} compact={true} />
        </div>
      </section>

      {/* 6. CUSTOMER REVIEWS PREVIEW */}
      <section className="py-16 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
              Community Trust & Feedback
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-1">
              Trusted by Patients Across Paliganj & Sigodi
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {REVIEWS_LIST.map((rev) => (
              <div
                key={rev.name}
                className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 space-y-3"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1 text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-xs text-slate-400">{rev.date}</span>
                </div>

                <p className="text-sm text-slate-700 dark:text-slate-200 italic leading-relaxed">
                  "{rev.comment}"
                </p>

                <div className="pt-2 border-t border-slate-200 dark:border-slate-700/60 flex items-center justify-between text-xs">
                  <div>
                    <span className="font-bold text-slate-900 dark:text-white block">{rev.name}</span>
                    <span className="text-slate-500">{rev.location}</span>
                  </div>
                  {rev.verified && (
                    <span className="text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold flex items-center space-x-1">
                      <Check className="w-3.5 h-3.5" />
                      <span>Verified Local Customer</span>
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 7. FAQ PREVIEW */}
      <section className="py-16 bg-slate-50 dark:bg-slate-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-10">
            <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
              Frequently Asked Questions
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-1">
              Common Questions About Orders & Delivery
            </h2>
          </div>

          <div className="space-y-3">
            {FAQS_LIST.slice(0, 4).map((faq, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden shadow-xs"
              >
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between text-base font-bold text-slate-900 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors cursor-pointer"
                >
                  <span>{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${openFaqIndex === idx ? 'transform rotate-180 text-emerald-500' : ''}`} />
                </button>

                {openFaqIndex === idx && (
                  <div className="px-5 pb-5 pt-0 text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800/80">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              to="/contact#faq"
              className="text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline"
            >
              Have More Questions? Visit Contact Page →
            </Link>
          </div>

        </div>
      </section>

      {/* 8. LATEST HEALTH TIPS PREVIEW */}
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
              Healthcare Guidance
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-1">
              Essential Health & Medicine Tips
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {HEALTH_TIPS.map((tip) => (
              <article
                key={tip.id}
                className="rounded-3xl overflow-hidden bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 flex flex-col justify-between shadow-xs hover:shadow-md transition-all"
              >
                <div>
                  <img
                    src={tip.image}
                    alt={tip.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-44 object-cover"
                  />
                  <div className="p-5 space-y-2">
                    <div className="flex items-center justify-between text-xs text-slate-400">
                      <span className="text-emerald-600 dark:text-emerald-400 font-bold">{tip.category}</span>
                      <span>{tip.readTime}</span>
                    </div>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white leading-snug">
                      {tip.title}
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      {tip.summary}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 block pt-2 border-t border-slate-200 dark:border-slate-700">
                    Date: {tip.date}
                  </span>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* 9. CTA & NEWSLETTER */}
      <section className="py-16 bg-gradient-to-r from-emerald-700 via-emerald-600 to-teal-700 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-3">
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                Need Urgent Prescription Medicines in Paliganj?
              </h2>
              <p className="text-sm text-emerald-100 max-w-xl">
                Send your prescription image on WhatsApp for quick stock confirmation, fair pricing, and prompt delivery options.
              </p>
            </div>

            <div className="lg:col-span-5 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => handleOpenWhatsAppOrder()}
                className="w-full sm:w-auto px-6 py-4 rounded-2xl bg-slate-900 hover:bg-slate-950 text-white font-bold text-sm flex items-center justify-center space-x-2 shadow-xl"
              >
                <MessageCircle className="w-5 h-5 text-emerald-400" />
                <span>WhatsApp Order</span>
              </button>

              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="w-full sm:w-auto px-6 py-4 rounded-2xl bg-white text-emerald-900 hover:bg-slate-100 font-bold text-sm flex items-center justify-center space-x-2 shadow-xl"
              >
                <Phone className="w-5 h-5 text-emerald-600" />
                <span>Call Store</span>
              </a>
            </div>

          </div>

          {/* Newsletter Box */}
          <div className="mt-12 pt-8 border-t border-emerald-500/50 max-w-2xl mx-auto text-center">
            <h3 className="text-base font-bold text-white mb-2 flex items-center justify-center space-x-2">
              <Mail className="w-4 h-4" />
              <span>Subscribe for Health Alerts & Discount Stock Updates</span>
            </h3>

            {subscribed ? (
              <div className="p-3 bg-emerald-900/60 rounded-xl text-xs font-semibold text-emerald-200 inline-block border border-emerald-400/40">
                ✓ Thank you! You have subscribed to Ranjit Medicines health updates.
              </div>
            ) : (
              <form onSubmit={handleNewsletter} className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-2.5 rounded-xl text-slate-900 bg-white text-sm outline-hidden"
                />
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-950 text-white font-bold text-sm"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>

        </div>
      </section>

    </div>
  );
};
