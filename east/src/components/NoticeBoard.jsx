import { ClipboardList, Calendar } from 'lucide-react';

const notices = [
  {
    date: '31-08-2021',
    title: 'Webinar on Monitoring of River Pollutants',
    description: 'By using Remote Sensing — Sept 1, 2:00 PM - 3:00 PM',
  },
  {
    date: '16-07-2021',
    title: 'Smart City GIS Mapping Project',
    description: 'Webinar on July 19, 10:30 AM - 12:00 PM',
  },
  {
    date: '20-05-2021',
    title: 'Admissions Open for 2025-26',
    description: 'Free e-admission for +2 Science, Diploma, B.Tech & M.Tech',
  },
];

export default function NoticeBoard() {
  return (
    <section className="py-16 sm:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Notice Board */}
          <div className="lg:col-span-1 animate-on-scroll">
            <div className="card overflow-hidden h-full">
              <div className="bg-primary px-5 py-4 flex items-center gap-3">
                <img src="/images/notice-board.png" alt="" className="h-6 w-6 object-contain brightness-0 invert" />
                <h3 className="text-white font-bold text-lg">Notice Board</h3>
              </div>
              <div className="p-4 sm:p-5 overflow-hidden max-h-[300px]">
                <div className="space-y-4 news-ticker">
                  {[...notices, ...notices].map((notice, idx) => (
                    <div key={idx} className="border-b border-gray-100 pb-3 last:border-0 cursor-pointer hover:bg-gray-50 -mx-2 px-2 rounded transition-colors">
                      <div className="flex items-center gap-2 mb-1">
                        <Calendar size={12} className="text-primary" />
                        <span className="text-xs text-primary font-semibold">{notice.date}</span>
                      </div>
                      <h4 className="text-sm font-semibold text-gray-900 mb-0.5">{notice.title}</h4>
                      <p className="text-xs text-gray-500">{notice.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* EAST PIIE / +2 Science */}
          <div className="lg:col-span-1 animate-on-scroll">
            <div className="card overflow-hidden h-full flex flex-col">
              <div className="bg-primary px-5 py-4">
                <h3 className="text-white font-bold text-lg">EAST PIIE — +2 Science</h3>
              </div>
              <div className="p-4 sm:p-5 flex-1 flex flex-col items-center justify-center text-center">
                <img
                  src="/images/east-piie.png"
                  alt="EAST PIIE +2 Science"
                  className="max-h-40 w-auto object-contain mb-4"
                />
                <p className="text-gray-600 text-sm mb-4">
                  EAST offers +2 Science program with 128 intake capacity for students aspiring to build a strong foundation in science.
                </p>
                <a href="#courses" className="btn-primary text-sm !px-5 !py-2">
                  Learn More
                </a>
              </div>
            </div>
          </div>

          {/* Quick Info Panel */}
          <div className="lg:col-span-1 space-y-4 animate-on-scroll">
            {/* Apply Online */}
            <a href="#admissions" className="card block overflow-hidden group">
              <img
                src="/images/apply-online.png"
                alt="Apply Online"
                className="w-full h-auto object-contain group-hover:scale-105 transition-transform"
              />
            </a>

            {/* 25 Year Celebrating */}
            <div className="card p-4 flex items-center justify-center">
              <img
                src="/images/25-year-celebrating.png"
                alt="25 Years of Excellence"
                className="max-h-24 w-auto object-contain"
              />
            </div>

            {/* Grievance System */}
            <a href="#contact" className="card block p-3 overflow-hidden group">
              <img
                src="/images/grievance-system.png"
                alt="Grievance Redressal System"
                className="w-full h-auto object-contain max-h-16 group-hover:scale-105 transition-transform"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
