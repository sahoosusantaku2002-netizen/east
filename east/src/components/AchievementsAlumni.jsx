import { useState } from 'react';
import { Award, Users } from 'lucide-react';
import { achievements, alumni } from '../data/siteData';

export default function AchievementsAlumni() {
  const [activeTab, setActiveTab] = useState('achievements');

  return (
    <section id="achievements" className="py-16 sm:py-20 bg-gradient-to-br from-primary-dark via-primary to-primary-light text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center animate-on-scroll mb-10">
          <h2
            className="text-3xl sm:text-4xl font-bold mb-4"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Awards & Our People
          </h2>
          <p className="text-blue-100 max-w-2xl mx-auto text-sm sm:text-base">
            Our commitment to excellence recognized nationally, and alumni making us proud
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-2 mb-8 animate-on-scroll">
          <button
            onClick={() => setActiveTab('achievements')}
            className={`flex items-center gap-2 px-5 sm:px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${
              activeTab === 'achievements'
                ? 'bg-white text-primary shadow-lg'
                : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
            }`}
          >
            <Award size={16} />
            Achievements
          </button>
          <button
            onClick={() => setActiveTab('alumni')}
            className={`flex items-center gap-2 px-5 sm:px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${
              activeTab === 'alumni'
                ? 'bg-white text-primary shadow-lg'
                : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
            }`}
          >
            <Users size={16} />
            Alumni
          </button>
        </div>

        {/* Achievements Tab */}
        {activeTab === 'achievements' && (
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
        )}

        {/* Alumni Tab */}
        {activeTab === 'alumni' && (
          <div className="animate-on-scroll">
            <div className="grid sm:grid-cols-3 gap-4 sm:gap-6 max-w-3xl mx-auto">
              {alumni.map((person, idx) => (
                <div
                  key={idx}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 text-center border border-white/20
                             hover:bg-white/20 transition-all duration-300 group"
                >
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-white/30 group-hover:border-secondary transition-colors">
                    <img
                      src={person.photo}
                      alt={person.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-bold text-white mb-1">{person.name}</h3>
                  <p className="text-sm text-blue-100">{person.branch}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-6">
              <a
                href="http://alumni.eastodissa.ac.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary font-semibold text-sm hover:underline"
              >
                Visit Alumni Portal →
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
