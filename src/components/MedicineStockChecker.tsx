import React, { useState, useMemo } from 'react';
import { Search, Filter, CheckCircle2, AlertTriangle, XCircle, ShoppingBag, ShieldCheck, RefreshCw } from 'lucide-react';
import medicineDataRaw from '../data/medicineStock.json';
import { MedicineItem } from '../types';

interface MedicineStockCheckerProps {
  onOrderMedicine?: (medicineName: string) => void;
  compact?: boolean;
}

export const MedicineStockChecker: React.FC<MedicineStockCheckerProps> = ({
  onOrderMedicine,
  compact = false
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [stockFilter, setStockFilter] = useState<'All' | 'Available' | 'Limited Stock' | 'Out of Stock'>('All');

  const medicinesList = medicineDataRaw as MedicineItem[];

  const categories = useMemo(() => {
    const cats = new Set(medicinesList.map(m => m.category));
    return ['All', ...Array.from(cats)];
  }, [medicinesList]);

  const filteredMedicines = useMemo(() => {
    return medicinesList.filter(item => {
      const matchesSearch = 
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.category.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
      const matchesStock = stockFilter === 'All' || item.status === stockFilter;

      return matchesSearch && matchesCategory && matchesStock;
    });
  }, [medicinesList, searchTerm, selectedCategory, stockFilter]);

  const displayList = compact ? filteredMedicines.slice(0, 6) : filteredMedicines;

  return (
    <div id="stock-checker" className="w-full bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-2xl shadow-slate-200/60 dark:shadow-none p-6 sm:p-8 relative overflow-hidden">
      
      {/* Header Accent Glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Title & Badge */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 relative z-10">
        <div>
          <div className="inline-flex items-center space-x-2 bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-400 text-[10px] font-bold px-3 py-1 rounded-full mb-2 uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Live Inventory • Ranjit Medicines</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Medicine & Healthcare Stock Checker
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
            Search for prescription drugs, health monitors, or baby care items to verify stock availability before visiting.
          </p>
        </div>

        <div className="text-xs font-semibold text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 px-3.5 py-2 rounded-xl flex items-center space-x-2 shrink-0">
          <RefreshCw className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 animate-spin" style={{ animationDuration: '6s' }} />
          <span>Updated Daily at Paliganj Store</span>
        </div>
      </div>

      {/* Search & Filters */}
      <div className="space-y-4 mb-8 relative z-10">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search medicine name, brand (e.g. Mankind, Sun Pharma), or device..."
            className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80 text-slate-900 dark:text-white text-sm focus:outline-hidden focus:ring-2 focus:ring-blue-500 focus:bg-white dark:focus:bg-slate-800 transition-all shadow-xs"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-xs font-bold text-slate-400 hover:text-slate-600"
            >
              Clear
            </button>
          )}
        </div>

        {/* Categories Bar */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-2 scrollbar-none text-xs">
          <span className="text-slate-400 font-medium shrink-0 flex items-center space-x-1 pr-2">
            <Filter className="w-3.5 h-3.5" />
            <span>Category:</span>
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-xl font-semibold whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/20'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Stock Cards Grid */}
      {displayList.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 relative z-10">
          {displayList.map((item) => (
            <div
              key={item.id}
              className="group p-5 rounded-2xl bg-slate-50/80 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 hover:border-emerald-500 dark:hover:border-emerald-500 transition-all shadow-xs hover:shadow-md flex flex-col justify-between"
            >
              <div>
                {/* Status & Expiry Row */}
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                    {item.brand}
                  </span>

                  {item.status === 'Available' && (
                    <span className="inline-flex items-center space-x-1 text-xs font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-950/80 px-2.5 py-0.5 rounded-full">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Available</span>
                    </span>
                  )}
                  {item.status === 'Limited Stock' && (
                    <span className="inline-flex items-center space-x-1 text-xs font-bold text-amber-700 dark:text-amber-400 bg-amber-100 dark:bg-amber-950/80 px-2.5 py-0.5 rounded-full">
                      <AlertTriangle className="w-3.5 h-3.5" />
                      <span>Limited Stock</span>
                    </span>
                  )}
                  {item.status === 'Out of Stock' && (
                    <span className="inline-flex items-center space-x-1 text-xs font-bold text-red-700 dark:text-red-400 bg-red-100 dark:bg-red-950/80 px-2.5 py-0.5 rounded-full">
                      <XCircle className="w-3.5 h-3.5" />
                      <span>Out of Stock</span>
                    </span>
                  )}
                </div>

                {/* Medicine Name */}
                <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors leading-snug">
                  {item.name}
                </h3>

                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  Category: <span className="font-semibold text-slate-700 dark:text-slate-300">{item.category}</span>
                </p>

                {item.dosage && (
                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-2 bg-white dark:bg-slate-900 p-2 rounded-lg border border-slate-200 dark:border-slate-800">
                    💡 {item.dosage}
                  </p>
                )}
              </div>

              {/* Price & Action Button */}
              <div className="mt-4 pt-3 border-t border-slate-200 dark:border-slate-700/80 flex items-center justify-between">
                <div>
                  <span className="text-xs text-slate-400 block">Estimated MRP</span>
                  <span className="text-lg font-extrabold text-slate-900 dark:text-white">
                    ₹{item.mrp.toFixed(2)}
                  </span>
                </div>

                <button
                  onClick={() => onOrderMedicine && onOrderMedicine(item.name)}
                  className="px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold flex items-center space-x-1.5 shadow-sm transition-all cursor-pointer"
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>Reserve via WhatsApp</span>
                </button>
              </div>

            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12 bg-slate-50 dark:bg-slate-800/40 rounded-2xl border border-dashed border-slate-300 dark:border-slate-700 relative z-10">
          <Search className="w-10 h-10 text-slate-400 mx-auto mb-3" />
          <p className="text-base font-bold text-slate-800 dark:text-slate-200">No matching medicines found</p>
          <p className="text-xs text-slate-500 max-w-sm mx-auto mt-1">
            Don't worry! We can order rare or specific branded medicines directly from authorized distributors in Patna.
          </p>
          <button
            onClick={() => onOrderMedicine && onOrderMedicine(searchTerm || 'Special Medicine Request')}
            className="mt-4 px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-xl"
          >
            Request Custom Order on WhatsApp
          </button>
        </div>
      )}

      {compact && filteredMedicines.length > 6 && (
        <div className="mt-6 text-center relative z-10">
          <a
            href="/services#stock-checker"
            className="inline-flex items-center space-x-2 text-emerald-600 dark:text-emerald-400 font-bold text-sm hover:underline"
          >
            <span>View All Stock Items ({filteredMedicines.length} total) →</span>
          </a>
        </div>
      )}

    </div>
  );
};
