import React from 'react';
import { X, ShieldCheck, FileText, AlertTriangle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

interface PolicyModalProps {
  type: 'privacy' | 'terms' | 'disclaimer' | null;
  onClose: () => void;
}

export const PolicyModal: React.FC<PolicyModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4 overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 p-6 md:p-8 my-8 max-h-[85vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {type === 'privacy' && (
          <div>
            <div className="flex items-center space-x-3 mb-4 text-emerald-600 dark:text-emerald-400">
              <ShieldCheck className="w-7 h-7" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Privacy Policy</h2>
            </div>
            <div className="space-y-4 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              <p>At <strong>{BUSINESS_INFO.name}</strong>, customer privacy and medical data confidentiality are paramount. We strictly handle all customer information in compliance with Indian healthcare standards and data privacy guidelines.</p>
              <h3 className="text-base font-semibold text-slate-800 dark:text-slate-100 mt-3">1. Collection of Prescription Data</h3>
              <p>When you send a prescription photo or medicine inquiry through WhatsApp or our website form, your contact details and prescription information are solely used to verify medication stock, check dosage accuracy, and process your order.</p>
              <h3 className="text-base font-semibold text-slate-800 dark:text-slate-100 mt-3">2. Data Confidentiality</h3>
              <p>We do not sell, rent, or share your personal health information or phone number with third-party advertising companies. Your records are securely handled by certified pharmacy personnel.</p>
              <h3 className="text-base font-semibold text-slate-800 dark:text-slate-100 mt-3">3. Contact Us</h3>
              <p>For any privacy related queries, please visit our store at {BUSINESS_INFO.address} or contact us via WhatsApp at {BUSINESS_INFO.phoneDisplay}.</p>
            </div>
          </div>
        )}

        {type === 'terms' && (
          <div>
            <div className="flex items-center space-x-3 mb-4 text-sky-600 dark:text-sky-400">
              <FileText className="w-7 h-7" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Terms of Service</h2>
            </div>
            <div className="space-y-4 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              <p>Welcome to <strong>{BUSINESS_INFO.name}</strong>. By using our website or ordering via WhatsApp, you agree to the following terms:</p>
              <h3 className="text-base font-semibold text-slate-800 dark:text-slate-100 mt-3">1. Prescription Requirement</h3>
              <p>Prescription drugs (Schedule H & H1 medications) strictly require a valid doctor's prescription issued by a licensed medical practitioner before dispensing. Our pharmacist reserves the right to reject orders without valid doctor authorization.</p>
              <h3 className="text-base font-semibold text-slate-800 dark:text-slate-100 mt-3">2. Stock & Pricing</h3>
              <p>All prices listed on our stock checker reflect MRP with applicable local pharmacy discounts. Prices are subject to batch variation and official drug pricing control guidelines (NPPA).</p>
              <h3 className="text-base font-semibold text-slate-800 dark:text-slate-100 mt-3">3. Quality Assurance</h3>
              <p>Every medicine sold at Ranjit Medicines is 100% genuine and sourced from licensed stockists. Cold-chain items are maintained under 2°C–8°C storage.</p>
            </div>
          </div>
        )}

        {type === 'disclaimer' && (
          <div>
            <div className="flex items-center space-x-3 mb-4 text-amber-600 dark:text-amber-400">
              <AlertTriangle className="w-7 h-7" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Medical Disclaimer</h2>
            </div>
            <div className="space-y-4 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              <p>The information provided on this website, including health tips, medicine dosage notes, and stock descriptions, is intended strictly for general educational purposes and inventory status checking.</p>
              <p className="p-3 bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/60 rounded-xl text-amber-900 dark:text-amber-200">
                <strong>Important:</strong> Information on this site does NOT constitute medical advice, diagnosis, or treatment. Never self-medicate or alter your doctor's prescribed dosage without consulting a registered medical practitioner.
              </p>
              <p>For medical emergencies, immediately contact local emergency healthcare services or visit the nearest government hospital/clinic in Paliganj or Patna.</p>
            </div>
          </div>
        )}

        <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 bg-slate-900 dark:bg-emerald-600 hover:bg-slate-800 dark:hover:bg-emerald-500 text-white text-sm font-medium rounded-xl transition-colors"
          >
            I Understand
          </button>
        </div>
      </div>
    </div>
  );
};
