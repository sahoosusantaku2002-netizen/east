import { MapPin, ExternalLink } from 'lucide-react';

const affiliatedLinks = [
  { name: 'BPUT — Biju Patnaik University of Technology', url: 'https://www.bput.ac.in' },
  { name: 'Board of Practical Training (BOPT)', url: 'https://www.bopter.gov.in' },
  { name: 'AICTE — All India Council for Technical Education', url: 'https://www.aicte-india.org' },
];

export default function DirectionAndLinks() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          {/* Direction Map */}
          <div className="animate-on-scroll">
            <div className="card overflow-hidden h-full">
              <div className="bg-primary px-5 py-4 flex items-center gap-3">
                <MapPin size={20} className="text-white" />
                <h3 className="text-white font-bold text-lg">Find Your Way to EAST</h3>
              </div>
              <div className="p-4 sm:p-5">
                <a href="https://maps.google.com/?q=EAST+Phulnakhara+Cuttack" target="_blank" rel="noopener noreferrer" className="block">
                  <img
                    src="/images/direction-map.png"
                    alt="Direction Map to EAST"
                    className="w-full h-auto rounded-xl hover:opacity-90 transition-opacity mb-4"
                  />
                </a>
                <div className="flex items-start gap-3 text-sm text-gray-600">
                  <MapPin size={16} className="text-primary shrink-0 mt-0.5" />
                  <p>Prachi Vihar, Anantapur, Phulnakhara, Cuttack, Odisha — Located on NH between Cuttack and Bhubaneswar</p>
                </div>
              </div>
            </div>
          </div>

          {/* Affiliated Links & Ranking */}
          <div className="space-y-6 animate-on-scroll">
            {/* Affiliated Institutions */}
            <div className="card overflow-hidden">
              <div className="bg-primary px-5 py-4">
                <h3 className="text-white font-bold text-lg">Affiliated & Recognized By</h3>
              </div>
              <div className="p-4 sm:p-5 space-y-3">
                {affiliatedLinks.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between gap-3 p-3 rounded-xl bg-gray-50 hover:bg-primary/5
                               border border-gray-100 hover:border-primary/20 transition-all group"
                  >
                    <span className="text-sm font-medium text-gray-700 group-hover:text-primary transition-colors">
                      {link.name}
                    </span>
                    <ExternalLink size={14} className="text-gray-400 group-hover:text-primary shrink-0" />
                  </a>
                ))}
              </div>
            </div>

            {/* Ranking Certificate */}
            <div className="card overflow-hidden">
              <div className="bg-primary px-5 py-4">
                <h3 className="text-white font-bold text-lg">Ranking & Certification</h3>
              </div>
              <div className="p-4 sm:p-5 flex items-center justify-center">
                <img
                  src="/images/ranking-img.jpg"
                  alt="EAST Ranking Certificate"
                  className="max-h-48 w-auto object-contain rounded-lg shadow-sm"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
