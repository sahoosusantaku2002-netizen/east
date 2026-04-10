import { Bell, Calendar, Megaphone, Trophy } from 'lucide-react';
import { announcements } from '../data/siteData';

const typeConfig = {
  admission: { icon: Megaphone, color: 'bg-green-100 text-green-700', badge: 'bg-green-500' },
  event: { icon: Calendar, color: 'bg-blue-100 text-blue-700', badge: 'bg-blue-500' },
  achievement: { icon: Trophy, color: 'bg-amber-100 text-amber-700', badge: 'bg-amber-500' },
};

export default function Announcements() {
  return (
    <section className="py-16 sm:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center animate-on-scroll">
          <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            <Bell size={16} />
            Latest Updates
          </div>
          <h2 className="section-title text-gray-900">
            News & <span className="text-primary">Announcements</span>
          </h2>
          <p className="section-subtitle">
            Stay updated with the latest happenings at EAST
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 animate-on-scroll">
          {announcements.map((item, idx) => {
            const config = typeConfig[item.type];
            const Icon = config.icon;
            return (
              <div
                key={idx}
                className="card p-5 sm:p-6 group cursor-pointer"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${config.color}`}>
                    <Icon size={20} />
                  </div>
                  <span className={`text-xs px-2.5 py-1 rounded-full text-white font-medium ${config.badge}`}>
                    {item.date}
                  </span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors text-sm sm:text-base">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
