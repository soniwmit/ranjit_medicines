import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Phone, Pill, Menu, X, MessageCircle, MapPin, Search } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';
import { DarkThemeToggle } from './DarkThemeToggle';

interface NavbarProps {
  onOpenWhatsAppOrder?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenWhatsAppOrder }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services & Stock', path: '/services' },
    { name: 'Store Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full transition-all">
      {/* Top Notification Bar */}
      <div className="bg-slate-900 text-slate-200 text-xs py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center space-x-4">
            <span className="flex items-center space-x-1">
              <MapPin className="w-3.5 h-3.5 text-emerald-400" />
              <span>Sigori - Paliganj Rd, Sigodi, Bihar</span>
            </span>
            <span className="hidden sm:inline-block text-slate-500">|</span>
            <span className="hidden sm:inline-block">Open Daily 7:00 AM - 10:00 PM</span>
          </div>

          <div className="flex items-center space-x-3 text-xs font-medium">
            <a 
              href={`tel:${BUSINESS_INFO.phone}`} 
              className="hover:text-emerald-400 transition-colors flex items-center space-x-1"
            >
              <Phone className="w-3 h-3 text-emerald-400" />
              <span>{BUSINESS_INFO.phoneDisplay}</span>
            </a>
            <span className="text-slate-600">|</span>
            <a 
              href={`https://wa.me/${BUSINESS_INFO.whatsappFormatted}`} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-emerald-400 hover:text-emerald-300 transition-colors flex items-center space-x-1"
            >
              <MessageCircle className="w-3 h-3" />
              <span>WhatsApp Order</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Glass Navbar */}
      <nav className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 px-4 sm:px-8 py-3.5 sticky top-0 z-50 transition-colors">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-emerald-200 dark:shadow-none group-hover:scale-105 transition-transform">
              <Pill className="w-6 h-6 transform -rotate-45" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-none group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                {BUSINESS_INFO.name}
              </span>
              <span className="text-[10px] uppercase tracking-widest text-emerald-600 dark:text-emerald-400 font-bold mt-1">
                Premium Pharmacy
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600 dark:text-slate-300">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `transition-colors hover:text-emerald-600 font-bold ${
                    isActive
                      ? 'text-emerald-600 dark:text-emerald-400'
                      : 'text-slate-600 dark:text-slate-300'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Right Action Controls */}
          <div className="hidden lg:flex items-center gap-3">
            <DarkThemeToggle />

            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="bg-blue-600 text-white px-5 py-2.5 rounded-full hover:bg-blue-700 shadow-md shadow-blue-200 dark:shadow-none text-xs font-bold flex items-center gap-2 transition-all"
            >
              <Phone className="w-4 h-4" />
              <span>Call Now</span>
            </a>

            <button
              onClick={onOpenWhatsAppOrder}
              className="bg-emerald-600 text-white px-5 py-2.5 rounded-2xl hover:bg-emerald-700 shadow-lg shadow-emerald-200 dark:shadow-none text-xs font-bold flex items-center gap-2 transition-all cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Quick Order</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center gap-2">
            <DarkThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 focus:outline-hidden"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 pt-3 pb-6 space-y-3 animate-fadeIn">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `px-4 py-3 rounded-xl text-base font-semibold transition-colors ${
                      isActive
                        ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/80 dark:text-emerald-400'
                        : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>

            <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onOpenWhatsAppOrder) onOpenWhatsAppOrder();
                }}
                className="w-full py-3 rounded-2xl bg-emerald-600 text-white font-bold text-center flex items-center justify-center gap-2 shadow-md"
              >
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp Order Form</span>
              </button>

              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="w-full py-3 rounded-full bg-blue-600 text-white font-bold text-center flex items-center justify-center gap-2 shadow-md"
              >
                <Phone className="w-5 h-5" />
                <span>Call Store ({BUSINESS_INFO.phoneDisplay})</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
