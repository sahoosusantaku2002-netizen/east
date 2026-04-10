import { Award } from 'lucide-react';
import { achievements } from '../data/siteData';

export default function Achievements() {
  return (
    <section id="achievements" className="py-16 sm:py-20 bg-gradient-to-br from-primary-dark via-primary to-primary-light text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center animate-on-scroll">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-1.5 rounded-full text-sm font-semibold mb-4 border border-white/20">
            <Award size={16} />
            Recognition
          </div>
          <h2
            className="text-3xl sm:text-4xl font-bold mb-4"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Awards & Achievements
          </h2>
          <p className="text-blue-100 max-w-2xl mx-auto mb-10 sm:mb-14 text-sm sm:text-base">
            Our commitment to excellence has been recognized at national and state levels
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 sm:gap-6 animate-on-scroll">
          {achievements.map((item, idx) => (
            <div
              key={idx}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 text-center border border-white/20
                         hover:bg-white/20 transition-all duration-300 group"
            >
              <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
              <div className="text-secondary font-bold text-sm mb-2">{item.year}</div>
              <h3 className="text-lg sm:text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-blue-100 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
