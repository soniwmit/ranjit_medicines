import React from 'react';
import { useOutletContext } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { MedicineStockChecker } from '../components/MedicineStockChecker';
import { 
  Pill, Activity, Stethoscope, Baby, Sparkles, ShieldPlus, 
  ShoppingBag, CheckCircle2, MessageCircle, Phone, Heart, ThermometerSnowflake
} from 'lucide-react';
import { SERVICES_LIST, BUSINESS_INFO } from '../data/businessData';

interface ContextType {
  handleOpenWhatsAppOrder: (medName?: string) => void;
}

export const Services: React.FC = () => {
  const { handleOpenWhatsAppOrder } = useOutletContext<ContextType>();

  return (
    <div>
      <SEO 
        title="Services & Medicine Categories"
        description="Explore comprehensive medical categories at Ranjit Medicines in Paliganj: prescription drugs, OTC medicines, health devices, surgical supplies, and live stock checker."
        pageType="Services"
      />

      {/* Page Header */}
      <section className="bg-slate-900 text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl">
          <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest bg-emerald-950/80 px-3.5 py-1 rounded-full border border-emerald-800">
            Healthcare Services & Inventory
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mt-4">
            Comprehensive Pharmaceutical & Medical Care
          </h1>
          <p className="text-sm sm:text-base text-slate-300 mt-3 leading-relaxed">
            From critical cardiac & diabetes medications to pediatric baby care and home health monitors.
          </p>
        </div>
      </section>

      {/* Exclusive Feature: Live Medicine Stock Checker */}
      <section className="py-12 bg-slate-100 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MedicineStockChecker onOrderMedicine={handleOpenWhatsAppOrder} compact={false} />
        </div>
      </section>

      {/* Category Wise Services Grid */}
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
              Detailed Product Categories
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-1">
              Explore Our Complete Pharmacy Offerings
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES_LIST.map((service) => (
              <div
                key={service.id}
                className="p-7 rounded-3xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 shadow-sm hover:shadow-xl hover:border-emerald-500 transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Badge & Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shadow-md">
                      <Pill className="w-6 h-6" />
                    </div>
                    {service.badge && (
                      <span className="text-[11px] font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-950/80 px-3 py-1 rounded-full">
                        {service.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                    {service.title}
                  </h3>

                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                    {service.description}
                  </p>

                  <div className="space-y-2 mb-4">
                    <p className="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider">
                      Key Items & Sub-categories:
                    </p>
                    <ul className="space-y-1 text-xs text-slate-600 dark:text-slate-300">
                      {service.items.map((item, idx) => (
                        <li key={idx} className="flex items-center space-x-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-2 border-t border-slate-200 dark:border-slate-700">
                    <p className="text-[11px] font-semibold text-slate-400 mb-1">Popular Stocked Items:</p>
                    <div className="flex flex-wrap gap-1">
                      {service.popularProducts.map((p) => (
                        <span key={p} className="text-[10px] bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 px-2 py-0.5 rounded-md border border-slate-200 dark:border-slate-800 font-medium">
                          {p}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-700 flex items-center justify-between">
                  <button
                    onClick={() => handleOpenWhatsAppOrder(service.title)}
                    className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold flex items-center justify-center space-x-2 shadow-md transition-all cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Order {service.title}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Special Cold Storage Highlight Section */}
      <section className="py-12 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 rounded-3xl bg-slate-800/80 border border-slate-700 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center space-x-4">
              <div className="w-14 h-14 rounded-2xl bg-sky-500 text-white flex items-center justify-center shrink-0">
                <ThermometerSnowflake className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Strict 2°C–8°C Cold Chain Biological Storage</h3>
                <p className="text-xs text-slate-300 mt-1 max-w-xl">
                  Insulin injections, vaccines, and specialized biological eye drops require continuous temperature regulation. We run dedicated medical refrigeration units with 24/7 power backup in Paliganj.
                </p>
              </div>
            </div>

            <button
              onClick={() => handleOpenWhatsAppOrder('Insulin & Vaccine Cold Storage Inquiry')}
              className="px-6 py-3.5 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-white text-xs font-bold shrink-0 shadow-lg"
            >
              Inquire About Cold-Storage Medicines
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
