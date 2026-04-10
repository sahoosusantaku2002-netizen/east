import { useState } from 'react';
import { Camera, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { galleryImages } from '../data/siteData';

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null);
  const [filter, setFilter] = useState('all');

  const categories = ['all', 'campus', 'facilities', 'events'];
  const filtered = filter === 'all' ? galleryImages : galleryImages.filter((img) => img.category === filter);

  const openLightbox = (idx) => setLightbox(idx);
  const closeLightbox = () => setLightbox(null);

  const nextImage = () => {
    if (lightbox !== null) setLightbox((lightbox + 1) % filtered.length);
  };
  const prevImage = () => {
    if (lightbox !== null) setLightbox((lightbox - 1 + filtered.length) % filtered.length);
  };

  return (
    <section id="gallery" className="py-16 sm:py-20 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center animate-on-scroll">
          <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            <Camera size={16} />
            Photo Gallery
          </div>
          <h2 className="section-title text-gray-900">
            Campus <span className="text-primary">Gallery</span>
          </h2>
          <p className="section-subtitle">
            A glimpse into life at EAST — our campus, facilities, and events
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center gap-2 mb-8 sm:mb-10 flex-wrap animate-on-scroll">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 sm:px-5 py-2 rounded-full text-sm font-medium capitalize transition-all ${
                filter === cat
                  ? 'bg-primary text-white shadow-md'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 animate-on-scroll">
          {filtered.map((img, idx) => (
            <div
              key={idx}
              onClick={() => openLightbox(idx)}
              className="relative group cursor-pointer rounded-2xl overflow-hidden shadow-md aspect-[4/3]"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/60 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity text-white text-center p-4">
                  <Camera size={28} className="mx-auto mb-2" />
                  <p className="font-medium text-sm">{img.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            onClick={(e) => { e.stopPropagation(); closeLightbox(); }}
            className="absolute top-4 right-4 text-white/70 hover:text-white p-2"
            aria-label="Close"
          >
            <X size={28} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            className="absolute left-2 sm:left-6 text-white/70 hover:text-white p-2"
            aria-label="Previous"
          >
            <ChevronLeft size={36} />
          </button>
          <img
            src={filtered[lightbox].src.replace('w=600', 'w=1200')}
            alt={filtered[lightbox].alt}
            className="max-h-[85vh] max-w-[90vw] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            className="absolute right-2 sm:right-6 text-white/70 hover:text-white p-2"
            aria-label="Next"
          >
            <ChevronRight size={36} />
          </button>
          <div className="absolute bottom-4 text-white/70 text-sm">
            {lightbox + 1} / {filtered.length}
          </div>
        </div>
      )}
    </section>
  );
}
