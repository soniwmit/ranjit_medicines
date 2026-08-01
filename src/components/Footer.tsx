import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Clock, Shield, ExternalLink, Heart, Pill, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';
import { PolicyModal } from './PolicyModal';

export const Footer: React.FC = () => {
  const [modalType, setModalType] = useState<'privacy' | 'terms' | 'disclaimer' | null>(null);

  // === GLOBAL TRACKING HOOK INTEGRATION ===
  useEffect(() => {
    const TRACKING_ENDPOINT = 'https://tools.cprajapati.com/tracker/track.php';
    const urlParams = new URLSearchParams(window.location.search);
    
    let cid = urlParams.get('cid') || localStorage.getItem('wmit_active_cid');
    if (urlParams.get('cid')) {
        localStorage.setItem('wmit_active_cid', urlParams.get('cid') || '');
    }
    
    if (!cid) return;

    let visitorId = localStorage.getItem('wmit_visitor_id') || 'wmit_' + Math.random().toString(36).substring(2, 15);
    localStorage.setItem('wmit_visitor_id', visitorId);

    let sessionId = sessionStorage.getItem('wmit_session_id') || 'wmit_' + Math.random().toString(36).substring(2, 15);
    sessionStorage.setItem('wmit_session_id', sessionId);

    const getPageName = () => {
        const path = window.location.pathname;
        const segment = path.replace(/\/$/, "").split("/").pop();
        return segment ? segment.split('?')[0] : 'Home';
    };

    const sendInitPayload = () => {
        const payload = {
            cid: cid, 
            visitor_id: visitorId, 
            session_id: sessionId,
            page_name: getPageName(), 
            referrer: document.referrer || '',
            device: window.innerWidth < 768 ? 'Mobile' : 'Desktop',
            browser: navigator.userAgent, 
            action: 'init'
        };
        fetch(TRACKING_ENDPOINT, { 
            method: 'POST', 
            mode: 'cors', 
            headers: { 'Content-Type': 'application/json' }, 
            body: JSON.stringify(payload) 
        }).catch(() => {});
    };

    const sendExitPayload = () => {
        const payload = { 
            cid: cid, 
            session_id: sessionId, 
            page_name: getPageName(), 
            action: 'page_change' 
        };
        if (navigator.sendBeacon) {
            const blob = new Blob([JSON.stringify(payload)], { type: 'application/json' });
            navigator.sendBeacon(TRACKING_ENDPOINT, blob);
        } else {
            fetch(TRACKING_ENDPOINT, { 
                method: 'POST', 
                mode: 'cors', 
                headers: { 'Content-Type': 'application/json' }, 
                body: JSON.stringify(payload), 
                keepalive: true 
            }).catch(() => {});
        }
    };

    sendInitPayload();

    // === IDLE TIMEOUT LOGIC FOR REACT ===
    let idleTimer: ReturnType<typeof setTimeout>;
    let isIdle = false;

    const resetIdleTimer = () => {
        if (isIdle) {
            isIdle = false;
            sendInitPayload(); // Wake up! Resume tracking
        }
        clearTimeout(idleTimer);
        idleTimer = setTimeout(() => {
            isIdle = true;
            sendExitPayload(); // Inactive! Stop tracking
        }, 60000); // 60 Seconds
    };

    const activityEvents = ['mousemove', 'keydown', 'scroll', 'touchstart'];
    activityEvents.forEach(evt => document.addEventListener(evt, resetIdleTimer, { passive: true }));
    resetIdleTimer(); // Initialize idle timer
    // ====================================

    const handleLocationChange = () => {
        sendExitPayload();
        setTimeout(sendInitPayload, 100);
    };

    window.addEventListener('popstate', handleLocationChange);
    
    const handleVisibilityChange = () => {
        if (document.visibilityState === 'hidden') { 
            sendExitPayload(); 
        }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('pagehide', sendExitPayload);
    
    return () => {
        window.removeEventListener('popstate', handleLocationChange);
        document.removeEventListener('visibilitychange', handleVisibilityChange);
        window.removeEventListener('pagehide', sendExitPayload);
        activityEvents.forEach(evt => document.removeEventListener(evt, resetIdleTimer));
        clearTimeout(idleTimer);
    };
  }, []);

  return (
    <>
      <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800 relative overflow-hidden">
        {/* Subtle Background Glow */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-sky-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800/80">
            
            {/* Col 1: Business Branding & Overview */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center text-white shadow-lg shadow-emerald-900/30">
                  <Pill className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white tracking-wide">{BUSINESS_INFO.name}</h3>
                  <p className="text-xs text-emerald-400 font-medium">Licensed Medical Store • Bihar</p>
                </div>
              </div>
              
              <p className="text-sm text-slate-400 leading-relaxed">
                {BUSINESS_INFO.tagline}. Sourcing 100% genuine ethical medicines, surgical equipment, and baby care essentials with qualified pharmacist guidance.
              </p>

              <div className="pt-2 flex items-center space-x-2 text-xs text-emerald-400 bg-emerald-950/40 border border-emerald-800/40 rounded-lg p-2.5 max-w-xs">
                <Shield className="w-4 h-4 shrink-0" />
                <span>Drug License No: {BUSINESS_INFO.licenseNo}</span>
              </div>
            </div>

            {/* Col 2: Quick Links */}
            <div className="space-y-3">
              <h4 className="text-base font-semibold text-white tracking-wider uppercase text-xs">Quick Links</h4>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <Link to="/" className="hover:text-emerald-400 transition-colors flex items-center space-x-1.5">
                    <span className="text-emerald-500">›</span> <span>Home</span>
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-emerald-400 transition-colors flex items-center space-x-1.5">
                    <span className="text-emerald-500">›</span> <span>About Our Pharmacy</span>
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="hover:text-emerald-400 transition-colors flex items-center space-x-1.5">
                    <span className="text-emerald-500">›</span> <span>Services & Categories</span>
                  </Link>
                </li>
                <li>
                  <Link to="/services#stock-checker" className="hover:text-emerald-400 transition-colors flex items-center space-x-1.5">
                    <span className="text-emerald-500">›</span> <span>Medicine Stock Checker</span>
                  </Link>
                </li>
                <li>
                  <Link to="/gallery" className="hover:text-emerald-400 transition-colors flex items-center space-x-1.5">
                    <span className="text-emerald-500">›</span> <span>Store Gallery</span>
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-emerald-400 transition-colors flex items-center space-x-1.5">
                    <span className="text-emerald-500">›</span> <span>Contact & Directions</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Col 3: Contact & Store Information */}
            <div className="space-y-3">
              <h4 className="text-base font-semibold text-white tracking-wider uppercase text-xs">Store Info & Hours</h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-slate-300">{BUSINESS_INFO.address}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                  <a href={`tel:${BUSINESS_INFO.phone}`} className="text-slate-300 hover:text-emerald-400 transition-colors font-medium">
                    {BUSINESS_INFO.phoneDisplay}
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <a href={`https://wa.me/${BUSINESS_INFO.whatsappFormatted}`} target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-emerald-400 transition-colors font-medium">
                    WhatsApp Order (09709390752)
                  </a>
                </div>
                <div className="flex items-start space-x-3 pt-1">
                  <Clock className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-slate-300">{BUSINESS_INFO.workingHours}</span>
                </div>
              </div>
            </div>

            {/* Col 4: Location Map & Social */}
            <div className="space-y-3">
              <h4 className="text-base font-semibold text-white tracking-wider uppercase text-xs">Find Store Location</h4>
              <p className="text-xs text-slate-400">Located on Sigori - Paliganj Road near Main Chowk, Paliganj, Bihar.</p>
              
              <div className="rounded-xl overflow-hidden border border-slate-700/80 shadow-md h-28 relative group">
                <iframe
                  src={BUSINESS_INFO.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  title="Ranjit Medicines Google Map"
                  className="w-full h-full filter opacity-80 group-hover:opacity-100 transition-opacity"
                />
                <a
                  href={BUSINESS_INFO.googleMapsDirections}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-2 right-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs px-2.5 py-1 rounded-md shadow-lg flex items-center space-x-1 font-medium transition-colors"
                >
                  <span>Directions</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

          </div>

          {/* Bottom Bar: Copyright & Policies */}
          <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-400 gap-4">
            <div>
              <p>© {new Date().getFullYear()} {BUSINESS_INFO.name}. All rights reserved.</p>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-4">
              <button 
                onClick={() => setModalType('privacy')}
                className="hover:text-emerald-400 transition-colors"
              >
                Privacy Policy
              </button>
              <span>•</span>
              <button 
                onClick={() => setModalType('terms')}
                className="hover:text-emerald-400 transition-colors"
              >
                Terms of Service
              </button>
              <span>•</span>
              <button 
                onClick={() => setModalType('disclaimer')}
                className="hover:text-emerald-400 transition-colors"
              >
                Medical Disclaimer
              </button>
            </div>

            <div className="flex items-center space-x-1 text-slate-400">
              <span>Developed by</span>
              <a
                href="https://main.webmakerit.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 font-semibold underline underline-offset-2 flex items-center space-x-1 transition-colors"
              >
                <span>WMIT</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Policy Modal */}
      <PolicyModal type={modalType} onClose={() => setModalType(null)} />
    </>
  );
};
