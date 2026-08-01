import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

interface FloatingWhatsAppProps {
  onOpenOrderModal: () => void;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ onOpenOrderModal }) => {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end space-y-3">
      {/* Quick Phone Call Floating Icon */}
      <a
        href={`tel:${BUSINESS_INFO.phone}`}
        className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white shadow-xl shadow-blue-200 dark:shadow-none hover:bg-blue-700 transition-all transform hover:scale-110"
        aria-label="Call Store"
        title="Call Ranjit Medicines"
      >
        <Phone className="w-5 h-5" />
        <span className="absolute right-14 bg-slate-900 text-white text-xs font-semibold px-2.5 py-1 rounded-lg shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
          Call: {BUSINESS_INFO.phoneDisplay}
        </span>
      </a>

      {/* Floating WhatsApp Button */}
      <button
        onClick={onOpenOrderModal}
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-emerald-500 text-white shadow-2xl hover:bg-emerald-600 transition-all transform hover:scale-110 cursor-pointer"
        aria-label="Order on WhatsApp"
      >
        {/* Animated Pulse Ring */}
        <span className="absolute -inset-1 rounded-full bg-emerald-500/40 animate-ping pointer-events-none" />
        
        <MessageCircle className="w-7 h-7 relative z-10" />

        {/* Hover Tooltip Label */}
        <span className="absolute right-16 bg-emerald-700 text-white text-xs font-bold px-3 py-1.5 rounded-xl shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none flex items-center space-x-1">
          <span>Order Medicines via WhatsApp</span>
        </span>
      </button>
    </div>
  );
};
