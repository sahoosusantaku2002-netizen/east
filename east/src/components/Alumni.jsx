import { Users } from 'lucide-react';
import { alumni } from '../data/siteData';

export default function Alumni() {
  return (
    <section className="py-16 sm:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center animate-on-scroll">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            <Users size={16} />
            Our Alumni
          </div>
          <h2 className="section-title text-gray-900">
            Proud <span className="text-primary">Alumni</span>
          </h2>
          <p className="section-subtitle">
            Meet some of our distinguished alumni who are making a difference
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 sm:gap-8 max-w-3xl mx-auto animate-on-scroll">
          {alumni.map((person, idx) => (
            <div key={idx} className="card p-6 text-center group">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-primary/20 group-hover:border-primary transition-colors">
                <img
                  src={person.photo}
                  alt={person.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-bold text-gray-900 mb-1">{person.name}</h3>
              <p className="text-sm text-gray-500">{person.branch}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
