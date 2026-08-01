import React, { useState } from 'react';
import { SEO } from '../components/SEO';
import { X, ZoomIn, Filter, Camera, ChevronLeft, ChevronRight } from 'lucide-react';
import { GALLERY_PHOTOS } from '../data/businessData';
import { GalleryImage } from '../types';

export const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryImage | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const categories = ['All', 'Store Front', 'Medicines', 'Equipment', 'Wellness', 'Store Interior'];

  const filteredPhotos = GALLERY_PHOTOS.filter(photo => {
    return activeCategory === 'All' || photo.category === activeCategory;
  });

  const openLightbox = (photo: GalleryImage, index: number) => {
    setSelectedPhoto(photo);
    setSelectedIndex(index);
  };

  const handleNext = () => {
    const nextIdx = (selectedIndex + 1) % filteredPhotos.length;
    setSelectedPhoto(filteredPhotos[nextIdx]);
    setSelectedIndex(nextIdx);
  };

  const handlePrev = () => {
    const prevIdx = (selectedIndex - 1 + filteredPhotos.length) % filteredPhotos.length;
    setSelectedPhoto(filteredPhotos[prevIdx]);
    setSelectedIndex(prevIdx);
  };

  return (
    <div>
      <SEO 
        title="Store Gallery & Facilities"
        description="View photos of Ranjit Medicines store interior, medicine shelves, surgical equipment, baby care section, and cold chain storage facility in Paliganj, Bihar."
        pageType="Gallery"
      />

      {/* Header Banner */}
      <section className="bg-slate-900 text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl">
          <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest bg-emerald-950/80 px-3.5 py-1 rounded-full border border-emerald-800">
            Ranjit Medicines Visual Tour
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mt-4">
            Store Gallery & Healthcare Facilities
          </h1>
          <p className="text-sm sm:text-base text-slate-300 mt-3 leading-relaxed">
            Take a look inside our modern, well-maintained medical store located on Sigori - Paliganj Rd, Bihar.
          </p>
        </div>
      </section>

      {/* Filter Tabs & Photos Grid */}
      <section className="py-16 bg-slate-50 dark:bg-slate-950 min-h-[60vh]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Category Filter Buttons */}
          <div className="flex items-center justify-center space-x-2 overflow-x-auto pb-6 scrollbar-none text-xs">
            <span className="text-slate-400 font-medium shrink-0 flex items-center space-x-1 pr-2">
              <Filter className="w-3.5 h-3.5" />
              <span>Filter:</span>
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl font-bold whitespace-nowrap transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/20'
                    : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Photo Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPhotos.map((photo, idx) => (
              <div
                key={photo.id}
                onClick={() => openLightbox(photo, idx)}
                className="group relative rounded-3xl overflow-hidden bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-2xl transition-all cursor-pointer"
              >
                <div className="aspect-4/3 relative overflow-hidden bg-slate-100 dark:bg-slate-800">
                  <img
                    src={photo.url}
                    alt={photo.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="p-3 rounded-full bg-white/20 backdrop-blur-md text-white">
                      <ZoomIn className="w-6 h-6" />
                    </span>
                  </div>
                  <span className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wider bg-slate-900/80 text-emerald-400 backdrop-blur-md px-2.5 py-1 rounded-md border border-slate-700">
                    {photo.category}
                  </span>
                </div>

                <div className="p-5">
                  <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    {photo.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    {photo.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Lightbox / Popup Modal */}
      {selectedPhoto && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 backdrop-blur-lg p-4">
          <button
            onClick={() => setSelectedPhoto(null)}
            className="absolute top-5 right-5 p-3 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors z-50"
            aria-label="Close photo"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors z-50"
            aria-label="Previous photo"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors z-50"
            aria-label="Next photo"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="max-w-4xl w-full bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 shadow-2xl">
            <div className="relative max-h-[70vh] overflow-hidden bg-black flex items-center justify-center">
              <img
                src={selectedPhoto.url}
                alt={selectedPhoto.title}
                referrerPolicy="no-referrer"
                className="max-h-[70vh] w-auto object-contain"
              />
            </div>
            <div className="p-6 text-white bg-slate-900">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest">{selectedPhoto.category}</span>
                <span className="text-xs text-slate-400">{selectedIndex + 1} of {filteredPhotos.length}</span>
              </div>
              <h3 className="text-xl font-bold text-white">{selectedPhoto.title}</h3>
              <p className="text-sm text-slate-300 mt-1">{selectedPhoto.caption}</p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
