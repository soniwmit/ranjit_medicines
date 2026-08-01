import React, { useState } from 'react';
import { X, MessageCircle, Upload, CheckCircle2, Phone, FileText, Send } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

interface WhatsAppOrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledMedicine?: string;
}

export const WhatsAppOrderModal: React.FC<WhatsAppOrderModalProps> = ({
  isOpen,
  onClose,
  prefilledMedicine = ''
}) => {
  const [customerName, setCustomerName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [medicineName, setMedicineName] = useState(prefilledMedicine);
  const [message, setMessage] = useState('');
  const [preferredTime, setPreferredTime] = useState('As soon as possible');
  const [prescriptionFile, setPrescriptionFile] = useState<File | null>(null);

  React.useEffect(() => {
    if (prefilledMedicine) {
      setMedicineName(prefilledMedicine);
    }
  }, [prefilledMedicine]);

  if (!isOpen) return null;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setPrescriptionFile(e.target.files[0]);
    }
  };

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();

    if (!customerName || !mobileNumber || !medicineName) {
      alert('Please fill in your Name, Mobile Number, and Medicine Name.');
      return;
    }

    const hasPrescription = prescriptionFile ? 'Yes (Will share photo in chat)' : 'No / Will upload in WhatsApp';

    const textPayload = `Hello ${BUSINESS_INFO.name},\n\n` +
      `*NEW MEDICINE ORDER*\n` +
      `---------------------------------\n` +
      `👤 *Customer Name:* ${customerName}\n` +
      `📞 *Phone:* ${mobileNumber}\n` +
      `📧 *Email:* ${email || 'N/A'}\n` +
      `💊 *Medicine Required:* ${medicineName}\n` +
      `📍 *Address:* ${address || 'Paliganj Local Pickup / Delivery'}\n` +
      `📋 *Prescription Attached:* ${hasPrescription}\n` +
      `🕒 *Preferred Time:* ${preferredTime}\n` +
      `💬 *Message/Notes:* ${message || 'None'}\n` +
      `---------------------------------\n` +
      `Sent via Ranjit Medicines Website. Please confirm stock & price!`;

    const encodedText = encodeURIComponent(textPayload);
    const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsappFormatted}?text=${encodedText}`;

    window.open(whatsappUrl, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-md p-4 overflow-y-auto">
      <div className="relative w-full max-w-lg bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 my-6 max-h-[90vh] overflow-y-auto animate-fadeIn">
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-emerald-500 flex items-center justify-center text-white shadow-lg shadow-emerald-500/30 shrink-0">
            <MessageCircle className="w-7 h-7" />
          </div>
          <div>
            <h2 className="text-xl font-extrabold text-slate-900 dark:text-white">
              WhatsApp Medicine Order
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Fast stock verification & doorstep delivery in Paliganj
            </p>
          </div>
        </div>

        <form onSubmit={handleSendWhatsApp} className="space-y-4 text-left">
          {/* Customer Name & Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                Customer Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                placeholder="e.g. Ramesh Kumar"
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-hidden transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                Mobile Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                required
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
                placeholder="10-digit phone"
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-hidden transition-all"
              />
            </div>
          </div>

          {/* Email & Delivery Address */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                Email Address (Optional)
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your.email@gmail.com"
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-hidden transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                Preferred Delivery Time
              </label>
              <select
                value={preferredTime}
                onChange={(e) => setPreferredTime(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-hidden transition-all"
              >
                <option value="As soon as possible">As soon as possible (Urgent)</option>
                <option value="Today Evening">Today Evening (4 PM - 8 PM)</option>
                <option value="Tomorrow Morning">Tomorrow Morning</option>
                <option value="Store Pickup">Store Pickup at Paliganj</option>
              </select>
            </div>
          </div>

          {/* Delivery Address */}
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
              Delivery Address / Area
            </label>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="e.g. Village Sigodi / Main Road Paliganj, Bihar"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-hidden transition-all"
            />
          </div>

          {/* Medicine Required */}
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
              Medicine Required & Quantity <span className="text-red-500">*</span>
            </label>
            <textarea
              required
              rows={2}
              value={medicineName}
              onChange={(e) => setMedicineName(e.target.value)}
              placeholder="e.g. Dolo 650mg - 2 strips, Pan 40 - 1 strip, Accu-Chek strips"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-hidden transition-all"
            />
          </div>

          {/* Upload Prescription */}
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
              Upload Prescription Photo (If Schedule H/Doctor Note)
            </label>
            <div className="relative border-2 border-dashed border-slate-300 dark:border-slate-700 hover:border-emerald-500 dark:hover:border-emerald-400 rounded-xl p-3 text-center bg-slate-50 dark:bg-slate-800/50 transition-colors">
              <input
                type="file"
                accept="image/*,.pdf"
                onChange={handleFileChange}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
              <div className="flex items-center justify-center space-x-2 text-xs text-slate-600 dark:text-slate-300">
                <Upload className="w-4 h-4 text-emerald-500" />
                {prescriptionFile ? (
                  <span className="font-semibold text-emerald-600 dark:text-emerald-400 flex items-center space-x-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>{prescriptionFile.name}</span>
                  </span>
                ) : (
                  <span>Click to attach photo or drag file here</span>
                )}
              </div>
            </div>
            <p className="text-[11px] text-slate-400 mt-1">
              Note: You can also directly send the photo inside WhatsApp chat after opening.
            </p>
          </div>

          {/* Message / Special Instructions */}
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
              Additional Notes / Instructions
            </label>
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="e.g. Please send cold storage pack for insulin"
              className="w-full px-3.5 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-xs focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-hidden"
            />
          </div>

          {/* Action Buttons */}
          <div className="pt-3 flex flex-col sm:flex-row items-center gap-3">
            <button
              type="submit"
              className="w-full sm:flex-1 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm flex items-center justify-center space-x-2 shadow-lg shadow-emerald-600/30 transition-all cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>Send via WhatsApp</span>
            </button>

            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="w-full sm:w-auto px-5 py-3.5 rounded-xl border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 font-bold text-sm flex items-center justify-center space-x-2 transition-colors"
            >
              <Phone className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>Call Now</span>
            </a>
          </div>

        </form>

      </div>
    </div>
  );
};
