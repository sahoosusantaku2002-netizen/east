import { Briefcase, TrendingUp, Building2 } from 'lucide-react';
import { recruiters } from '../data/siteData';

export default function Placements() {
  return (
    <section id="placements" className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center animate-on-scroll">
          <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary-dark px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            <Briefcase size={16} />
            Career Services
          </div>
          <h2 className="section-title text-gray-900">
            Placement &amp; <span className="text-primary">Career Support</span>
          </h2>
          <p className="section-subtitle">
            Our dedicated placement cell ensures every student gets the best career opportunities
          </p>
        </div>

        {/* Placement Highlights */}
        <div className="grid sm:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16 animate-on-scroll">
          <div className="bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-6 sm:p-8 text-white text-center">
            <TrendingUp size={36} className="mx-auto mb-4 text-secondary" />
            <div className="text-3xl sm:text-4xl font-bold mb-2">90%+</div>
            <div className="text-blue-100 text-sm">Placement Rate</div>
          </div>
          <div className="bg-gradient-to-br from-secondary to-secondary-dark rounded-2xl p-6 sm:p-8 text-white text-center">
            <Building2 size={36} className="mx-auto mb-4" />
            <div className="text-3xl sm:text-4xl font-bold mb-2">50+</div>
            <div className="text-amber-100 text-sm">Recruiting Companies</div>
          </div>
          <div className="bg-gradient-to-br from-accent to-accent-light rounded-2xl p-6 sm:p-8 text-white text-center">
            <Briefcase size={36} className="mx-auto mb-4" />
            <div className="text-3xl sm:text-4xl font-bold mb-2">₹6 LPA</div>
            <div className="text-teal-100 text-sm">Highest Package</div>
          </div>
        </div>

        {/* Recruiters with actual logos */}
        <div className="animate-on-scroll">
          <h3
            className="text-xl sm:text-2xl font-bold text-center text-gray-900 mb-8"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Our Top Recruiters
          </h3>

          {/* Marquee with actual logos */}
          <div className="overflow-hidden rounded-2xl bg-gray-50 p-6 sm:p-8 border border-gray-100">
            <div className="flex items-center marquee-track">
              {[...recruiters, ...recruiters].map((r, idx) => (
                <div
                  key={idx}
                  className="flex-shrink-0 mx-3 sm:mx-5 bg-white rounded-xl shadow-sm border border-gray-100
                             p-4 sm:p-5 flex items-center justify-center hover:shadow-md hover:scale-105
                             transition-all duration-300 cursor-default min-w-[120px] sm:min-w-[150px] h-20 sm:h-24"
                >
                  <img
                    src={r.logo}
                    alt={r.name}
                    className="max-h-12 sm:max-h-16 max-w-[100px] sm:max-w-[120px] object-contain"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Static grid of logos for smaller screens / fallback */}
          <div className="mt-8 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
            {recruiters.map((r, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow-sm border border-gray-100 p-3 sm:p-4
                           flex items-center justify-center hover:shadow-md hover:border-primary/20
                           transition-all duration-300 h-16 sm:h-20"
              >
                <img
                  src={r.logo}
                  alt={r.name}
                  className="max-h-10 sm:max-h-14 max-w-full object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          {/* Placement Services */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8 sm:mt-12">
            {[
              { title: 'Training Programs', desc: 'Soft skills, aptitude & technical training' },
              { title: 'Industry Visits', desc: 'Regular visits to top companies' },
              { title: 'Mock Interviews', desc: 'Preparing students for recruitment drives' },
              { title: 'Career Counseling', desc: 'Guidance for higher education & career' },
            ].map((item) => (
              <div key={item.title} className="bg-gray-50 rounded-xl p-4 sm:p-5 border border-gray-100 hover:border-primary/30 transition-colors">
                <h4 className="font-bold text-gray-900 mb-1 text-sm sm:text-base">{item.title}</h4>
                <p className="text-gray-500 text-xs sm:text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
