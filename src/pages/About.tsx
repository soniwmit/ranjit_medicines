import React from 'react';
import { SEO } from '../components/SEO';
import { 
  ShieldCheck, Award, Heart, Users, Clock, MapPin, 
  CheckCircle2, ThermometerSnowflake, Sparkles, Building, Pill
} from 'lucide-react';
import { BUSINESS_INFO, WHY_CHOOSE_US } from '../data/businessData';

export const About: React.FC = () => {
  const milestones = [
    { year: '2012', title: 'Grand Opening in Paliganj', desc: 'Ranjit Medicines opened its doors on Sigori - Paliganj Rd with a single mission: bringing authentic medicines to rural Bihar.' },
    { year: '2016', title: 'Expanded Surgical & Device Stocks', desc: 'Introduced digital BP monitors, glucometers, nebulizers, and hospital surgical dressings at wholesale rates.' },
    { year: '2019', title: 'Cold-Chain Refrigeration Setup', desc: 'Installed dedicated 2°C–8°C medical refrigerators with generator backup for insulins and vaccines.' },
    { year: '2022', title: 'WhatsApp Express Ordering', desc: 'Pioneered digital prescription pickup & home delivery across Sigodi, Sigori, and Paliganj villages.' },
    { year: '2026', title: 'Online Medicine Stock Portal', desc: 'Launched full inventory availability checker for seamless customer convenience and transparent MRP pricing.' }
  ];

  return (
    <div>
      <SEO 
        title="About Our Pharmacy"
        description="Learn about Ranjit Medicines heritage, certified pharmacist team, cold storage facilities, and commitment to genuine healthcare in Paliganj, Bihar."
        pageType="About"
      />

      {/* Page Header Banner */}
      <section className="bg-slate-900 text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl">
          <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest bg-emerald-950/80 px-3.5 py-1 rounded-full border border-emerald-800">
            About Ranjit Medicines
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mt-4">
            Serving Paliganj & Sigodi With Genuine Care Since 2012
          </h1>
          <p className="text-sm sm:text-base text-slate-300 mt-3 leading-relaxed">
            Your neighborhood pharmacy committed to 100% genuine pharmaceuticals, ethical pricing, and certified pharmacist guidance.
          </p>
        </div>
      </section>

      {/* Business Story */}
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
                Our Heritage & Mission
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Built On Trust, Authentic Sourcing & Patient Care
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                Founded in 2012 in the heart of Paliganj, Bihar, <strong>Ranjit Medicines</strong> was established to bridge the gap in rural healthcare accessibility. Before our inception, patients in surrounding villages frequently faced issues with counterfeit drugs, improper storage of insulins, or lack of critical antibiotics.
              </p>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                Over the past 14 years, under strict compliance with Bihar State Drug Control guidelines, we have built direct partnerships with top pharmaceutical manufacturers including Sun Pharma, Alkem, Mankind, Cipla, GSK, and Micro Labs.
              </p>

              <div className="pt-2 grid grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                  <p className="text-xs font-bold text-slate-500 uppercase">Registered License</p>
                  <p className="text-sm font-extrabold text-slate-900 dark:text-white mt-1">{BUSINESS_INFO.licenseNo}</p>
                </div>
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                  <p className="text-xs font-bold text-slate-500 uppercase">On-Site Staff</p>
                  <p className="text-sm font-extrabold text-slate-900 dark:text-white mt-1">Qualified Pharmacists</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-200 dark:border-slate-800">
                <img
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800&auto=format&fit=crop"
                  alt="Pharmacist Consultation Counter"
                  referrerPolicy="no-referrer"
                  className="w-full h-96 object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Mission, Vision, Core Values */}
      <section className="py-16 bg-slate-50 dark:bg-slate-950 border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500 text-white flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Our Mission</h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                To make 100% genuine medicines, life-saving drugs, and medical equipment easily accessible and affordable for every family in Paliganj, Sigori, and nearby rural communities.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-sky-500 text-white flex items-center justify-center">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Our Vision</h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                To be recognized as the gold standard for pharmaceutical retail and patient safety in Bihar through modern cold-chain infrastructure, digital ordering, and compassionate care.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-teal-500 text-white flex items-center justify-center">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Core Values</h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Zero tolerance for fake or expired drugs, patient-first dosage advice, fair MRP pricing, and dedicated emergency support 365 days a year.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Owner / Management Message */}
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-emerald-900 to-slate-900 text-white shadow-2xl relative overflow-hidden border border-emerald-800/50">
            <div className="relative z-10 space-y-4">
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest">
                Message From Store Management
              </span>
              <h3 className="text-2xl font-extrabold text-white">
                "Healthcare Is Not Just Business, It Is Our Sacred Service To Paliganj"
              </h3>
              <p className="text-sm text-slate-200 leading-relaxed italic">
                "When a doctor writes a prescription, the patient places their complete trust in the pharmacy to dispense the exact, authentic medication needed for recovery. At Ranjit Medicines, we take this responsibility with utmost sanctity. Every tablet, syrup, and injection in our shop is batch-verified and stored under optimal temperature."
              </p>
              <div className="pt-3 border-t border-emerald-800/80 flex items-center justify-between text-xs text-emerald-300">
                <span className="font-bold text-white">— Management & Pharmacy Team, Ranjit Medicines</span>
                <span>Paliganj, Bihar</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Timeline */}
      <section className="py-16 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12">
            <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
              Our Journey
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-1">
              Key Milestones in Our Growth
            </h2>
          </div>

          <div className="relative border-l-2 border-emerald-500/30 ml-4 sm:ml-8 space-y-8">
            {milestones.map((m) => (
              <div key={m.year} className="relative pl-6 sm:pl-8 group">
                <div className="absolute -left-3 top-1.5 w-6 h-6 rounded-full bg-emerald-600 border-4 border-white dark:border-slate-950 group-hover:scale-125 transition-transform" />
                <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
                  <span className="text-xs font-extrabold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">{m.year}</span>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white mt-1">{m.title}</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
};
