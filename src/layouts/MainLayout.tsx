import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { FloatingWhatsApp } from '../components/FloatingWhatsApp';
import { WhatsAppOrderModal } from '../components/WhatsAppOrderModal';
import { BackToTop } from '../components/BackToTop';

export const MainLayout: React.FC = () => {
  const [whatsappModalOpen, setWhatsappModalOpen] = useState(false);
  const [prefilledMedicine, setPrefilledMedicine] = useState('');

  const handleOpenWhatsAppOrder = (medName?: string) => {
    if (medName && typeof medName === 'string') {
      setPrefilledMedicine(medName);
    } else {
      setPrefilledMedicine('');
    }
    setWhatsappModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 font-sans selection:bg-emerald-500 selection:text-white transition-colors duration-200">
      
      {/* Header / Navbar */}
      <Navbar onOpenWhatsAppOrder={() => handleOpenWhatsAppOrder()} />

      {/* Main Page View Content */}
      <main className="flex-1">
        <Outlet context={{ handleOpenWhatsAppOrder }} />
      </main>

      {/* Global Footer with Tracking Hook */}
      <Footer />

      {/* Global Floating Action Controls */}
      <FloatingWhatsApp onOpenOrderModal={() => handleOpenWhatsAppOrder()} />
      <BackToTop />

      {/* Global WhatsApp Order Form Modal */}
      <WhatsAppOrderModal
        isOpen={whatsappModalOpen}
        onClose={() => setWhatsappModalOpen(false)}
        prefilledMedicine={prefilledMedicine}
      />

    </div>
  );
};
