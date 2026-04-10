import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { heroSlides } from '../data/siteData';

export default function Hero() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % heroSlides.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section id="home" className="relative h-[60vh] sm:h-[70vh] lg:h-[85vh] overflow-hidden">
      {/* Slides */}
      {heroSlides.map((slide, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-all duration-700 ease-in-out ${
            idx === current ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark/80 via-dark/50 to-transparent" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 w-full">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-secondary/20 backdrop-blur-sm border border-secondary/30 text-secondary-light px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
              Admissions Open 2025-26
            </div>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 md:mb-6"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              {heroSlides[current].title}
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-6 md:mb-8 max-w-xl leading-relaxed">
              {heroSlides[current].subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a href="#admissions" className="btn-secondary justify-center">
                Apply Now
                <ArrowRight size={18} />
              </a>
              <a href="#about" className="btn-outline justify-center">
                Explore Campus
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prev}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12
                   bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center
                   text-white hover:bg-white/25 transition-all border border-white/20"
        aria-label="Previous slide"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={next}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12
                   bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center
                   text-white hover:bg-white/25 transition-all border border-white/20"
        aria-label="Next slide"
      >
        <ChevronRight size={20} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {heroSlides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`h-2 rounded-full transition-all duration-300 ${
              idx === current ? 'w-8 bg-secondary' : 'w-2 bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
