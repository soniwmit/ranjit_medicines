import React, { useState } from 'react';
import { SEO } from '../components/SEO';
import { 
  MapPin, Phone, MessageCircle, Clock, Mail, ExternalLink, 
  Send, CheckCircle2, ShieldCheck, ChevronDown
} from 'lucide-react';
import { BUSINESS_INFO, FAQS_LIST } from '../data/businessData';

export const Contact: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('General Medicine Inquiry');
  const [message, setMessage] = useState('');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;

    // Send formatted message via WhatsApp
    const textPayload = `Hello ${BUSINESS_INFO.name} Team,\n\n` +
      `*NEW WEBSITE INQUIRY*\n` +
      `---------------------------------\n` +
      `👤 *Name:* ${name}\n` +
      `📞 *Phone:* ${phone}\n` +
      `📧 *Email:* ${email || 'N/A'}\n` +
      `📌 *Subject:* ${subject}\n` +
      `💬 *Message:* ${message || 'Need information regarding medicines stock.'}\n` +
      `---------------------------------`;

    const encoded = encodeURIComponent(textPayload);
    window.open(`https://wa.me/${BUSINESS_INFO.whatsappFormatted}?text=${encoded}`, '_blank');
    setFormSubmitted(true);
  };

  return (
    <div>
      <SEO 
        title="Contact & Store Location"
        description="Contact Ranjit Medicines in Paliganj, Bihar. Get directions, working hours, phone number 09709390752, WhatsApp order link, and submit quick medicine inquiries."
        pageType="Contact"
        faqSchemaData={FAQS_LIST}
      />

      {/* Header Banner */}
      <section className="bg-slate-900 text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl">
          <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest bg-emerald-950/80 px-3.5 py-1 rounded-full border border-emerald-800">
            Contact & Directions
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mt-4">
            Get In Touch With Ranjit Medicines
          </h1>
          <p className="text-sm sm:text-base text-slate-300 mt-3 leading-relaxed">
            We are here to answer your medicine availability queries, process WhatsApp orders, and assist with emergency healthcare needs in Paliganj.
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left: Contact Info Cards */}
            <div className="lg:col-span-5 space-y-6">
              
              <div className="space-y-2">
                <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
                  Store Details
                </span>
                <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white">
                  Visit Our Paliganj Pharmacy
                </h2>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  Conveniently situated on the main Sigori - Paliganj Road, Bihar.
                </p>
              </div>

              {/* Info Cards */}
              <div className="space-y-4">
                
                {/* Address Card */}
                <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white">Store Address</h3>
                    <p className="text-xs text-slate-600 dark:text-slate-300 mt-0.5">{BUSINESS_INFO.address}</p>
                    <p className="text-[11px] text-emerald-600 dark:text-emerald-400 font-medium mt-1">Landmark: {BUSINESS_INFO.landmark}</p>
                  </div>
                </div>

                {/* Phone Card */}
                <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white">Phone & Emergency Line</h3>
                    <a href={`tel:${BUSINESS_INFO.phone}`} className="text-sm font-extrabold text-emerald-600 dark:text-emerald-400 hover:underline block mt-0.5">
                      {BUSINESS_INFO.phoneDisplay}
                    </a>
                    <p className="text-[11px] text-slate-500 mt-0.5">Call directly for urgent medicine queries</p>
                  </div>
                </div>

                {/* WhatsApp Order Card */}
                <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center shrink-0 mt-0.5">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white">WhatsApp Order Number</h3>
                    <a 
                      href={`https://wa.me/${BUSINESS_INFO.whatsappFormatted}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm font-extrabold text-emerald-600 dark:text-emerald-400 hover:underline block mt-0.5"
                    >
                      09709390752 (Click to Chat)
                    </a>
                    <p className="text-[11px] text-slate-500 mt-0.5">Instant prescription upload & stock reservation</p>
                  </div>
                </div>

                {/* Hours Card */}
                <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white">Store Hours</h3>
                    <p className="text-xs text-slate-600 dark:text-slate-300 mt-0.5">{BUSINESS_INFO.workingHours}</p>
                    <p className="text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold mt-1">Open All 7 Days A Week</p>
                  </div>
                </div>

              </div>

              {/* Quick Action Buttons Row */}
              <div className="pt-2 flex flex-wrap gap-3">
                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="flex-1 min-w-[140px] py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold text-center flex items-center justify-center space-x-2 shadow-md transition-all"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Store</span>
                </a>

                <a
                  href={BUSINESS_INFO.googleMapsDirections}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 min-w-[140px] py-3 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold text-center flex items-center justify-center space-x-2 shadow-md transition-all"
                >
                  <MapPin className="w-4 h-4 text-emerald-400" />
                  <span>Get Directions</span>
                </a>
              </div>

            </div>

            {/* Right: Quick Contact Form */}
            <div className="lg:col-span-7">
              <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/80 shadow-lg">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  Send A Quick Inquiry
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 mb-6">
                  Have questions about bulk orders, rare branded medicines, or health equipment? Fill out the form below for an instant response.
                </p>

                {formSubmitted ? (
                  <div className="p-6 bg-emerald-100 dark:bg-emerald-950/80 border border-emerald-300 dark:border-emerald-800 rounded-2xl text-center space-y-3">
                    <CheckCircle2 className="w-12 h-12 text-emerald-600 dark:text-emerald-400 mx-auto" />
                    <h4 className="text-lg font-bold text-emerald-900 dark:text-emerald-200">Inquiry Received!</h4>
                    <p className="text-xs text-emerald-800 dark:text-emerald-300">
                      We have redirected your request to our WhatsApp dispatch desk. Our pharmacist will confirm details shortly.
                    </p>
                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="px-4 py-2 bg-emerald-600 text-white text-xs font-bold rounded-xl"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                          Your Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="e.g. Anand Sharma"
                          className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-emerald-500 outline-hidden"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                          Mobile Number <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="10-digit mobile number"
                          className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-emerald-500 outline-hidden"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                          Email (Optional)
                        </label>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="your.email@gmail.com"
                          className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-emerald-500 outline-hidden"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                          Inquiry Subject
                        </label>
                        <select
                          value={subject}
                          onChange={(e) => setSubject(e.target.value)}
                          className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-emerald-500 outline-hidden"
                        >
                          <option value="General Medicine Inquiry">General Medicine Inquiry</option>
                          <option value="Special Prescription Booking">Special Prescription Booking</option>
                          <option value="Health Device / Equipment Query">Health Device / Equipment Query</option>
                          <option value="Wholesale & Bulk Supply">Wholesale & Bulk Supply</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                        Your Message / Medicine Details
                      </label>
                      <textarea
                        rows={4}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Please write medicine names, brand preference, or required quantities..."
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-emerald-500 outline-hidden"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm flex items-center justify-center space-x-2 shadow-lg shadow-emerald-600/25 transition-all cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit Inquiry via WhatsApp</span>
                    </button>
                  </form>
                )}

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Interactive Google Map Section */}
      <section className="py-12 bg-slate-100 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              Google Maps Navigation
            </h2>
            <p className="text-xs text-slate-500">Sigori - Paliganj Rd, Paliganj, Sigodi, Bihar 801110</p>
          </div>

          <div className="rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-xl h-96 relative">
            <iframe
              src={BUSINESS_INFO.mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer"
              title="Google Map Location of Ranjit Medicines"
              className="w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* Full FAQ Accordion */}
      <section id="faq" className="py-16 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-10">
            <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
              Help Center & FAQs
            </span>
            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white mt-1">
              All Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3">
            {FAQS_LIST.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between text-base font-bold text-slate-900 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors cursor-pointer"
                >
                  <span>{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${openFaqIndex === idx ? 'transform rotate-180 text-emerald-500' : ''}`} />
                </button>

                {openFaqIndex === idx && (
                  <div className="px-5 pb-5 pt-0 text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-200 dark:border-slate-700/60">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
};
