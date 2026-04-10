import {
  BookOpen, Wifi, Monitor, Cpu, Wrench, Trophy,
} from 'lucide-react';
import { facilities } from '../data/siteData';

const iconMap = { BookOpen, Wifi, Monitor, Cpu, Wrench, Trophy };

export default function Facilities() {
  return (
    <section id="facilities" className="py-16 sm:py-20 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center animate-on-scroll">
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            <Monitor size={16} />
            Infrastructure
          </div>
          <h2 className="section-title text-gray-900">
            World-Class <span className="text-primary">Facilities</span>
          </h2>
          <p className="section-subtitle">
            Modern infrastructure designed to provide the best learning environment
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 animate-on-scroll">
          {facilities.map((facility) => {
            const Icon = iconMap[facility.icon];
            return (
              <div key={facility.title} className="card p-6 sm:p-8 group text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <Icon className="text-primary group-hover:text-white transition-colors" size={28} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {facility.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {facility.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Features Banner */}
        <div id="features" className="mt-12 sm:mt-16 grid md:grid-cols-2 gap-6 animate-on-scroll">
          <div className="rounded-2xl overflow-hidden shadow-lg relative h-64 sm:h-80">
            <img
              src="/images/gallery/SAM_0111.jpg"
              alt="Estrella 2K17 - Campus Life"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent flex items-end p-6 sm:p-8">
              <div className="text-white">
                <h3 className="text-xl sm:text-2xl font-bold mb-2">Vibrant Campus Life</h3>
                <p className="text-gray-200 text-sm">Cultural events, sports, and student activities</p>
              </div>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg relative h-64 sm:h-80">
            <img
              src="/images/banners/banner-2015.jpg"
              alt="Seminar Inauguration"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent flex items-end p-6 sm:p-8">
              <div className="text-white">
                <h3 className="text-xl sm:text-2xl font-bold mb-2">Expert Seminars & Workshops</h3>
                <p className="text-gray-200 text-sm">Industry experts and guest lectures regularly</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
