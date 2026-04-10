import { Megaphone } from 'lucide-react';

const tickerItems = [
  'Admissions Open for 2025-26 — B.Tech, M.Tech, Diploma & +2 Science — Apply Now!',
  'Webinar: Monitoring of River Pollutants by using Remote Sensing — Guest Lecture Series',
  'Webinar: Failure Analysis With a Case Study — Workshop for Engineering Students',
  'Board of Practical Training operates under Dept. of Human Resource Development, Govt. of India',
  'Smart City GIS Mapping Project — Students contribute to national initiative',
];

export default function NewsTicker() {
  return (
    <div className="bg-secondary text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 flex items-center h-10">
        <div className="flex items-center gap-2 bg-primary px-3 py-1 rounded text-xs font-bold shrink-0 mr-4">
          <Megaphone size={14} />
          <span className="hidden sm:inline">UPDATES</span>
        </div>
        <div className="overflow-hidden flex-1 relative">
          <div className="flex whitespace-nowrap animate-marquee-x">
            {[...tickerItems, ...tickerItems].map((item, idx) => (
              <span key={idx} className="text-sm font-medium mx-8 inline-block">
                {item}
                <span className="mx-4 text-white/50">|</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
