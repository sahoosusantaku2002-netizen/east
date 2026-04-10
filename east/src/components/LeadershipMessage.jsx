import { Quote } from 'lucide-react';

export default function LeadershipMessage() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center animate-on-scroll mb-12">
          <h2 className="section-title text-gray-900">
            Messages from <span className="text-primary">Our Leaders</span>
          </h2>
          <p className="section-subtitle">
            Guidance and vision from our esteemed leadership
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 animate-on-scroll">
          {/* Chairman's Message */}
          <div className="card p-6 sm:p-8 relative group">
            <Quote className="absolute top-4 right-4 text-primary/10 group-hover:text-primary/20 transition-colors" size={48} />
            <div className="flex items-center gap-4 mb-5">
              <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-primary/20 shrink-0">
                <img
                  src="/images/chaiman-small.png"
                  alt="Chairman"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-lg">Chairman's Message</h3>
                <p className="text-primary text-sm font-medium">Board of Trust</p>
              </div>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              The board of Trust and the college welcome you to an exciting world where
              educational desire breeds opportunity. At EAST, we believe in nurturing talent
              and creating an environment that fosters innovation, integrity, and excellence
              in every student who walks through our doors.
            </p>
            <a href="#about" className="text-primary font-semibold text-sm hover:underline">
              Read More →
            </a>
          </div>

          {/* President's Message */}
          <div className="card p-6 sm:p-8 relative group">
            <Quote className="absolute top-4 right-4 text-primary/10 group-hover:text-primary/20 transition-colors" size={48} />
            <div className="flex items-center gap-4 mb-5">
              <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-primary/20 shrink-0">
                <img
                  src="/images/president.png"
                  alt="President"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-lg">President's Message</h3>
                <p className="text-primary text-sm font-medium">Founder & President</p>
              </div>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              Founded in 1999 on the land between Cuttack and Bhubaneswar, EAST has grown
              into a premier institution committed to shaping engineers and technocrats of
              the highest caliber. Our dedication to quality education and holistic development
              continues to drive us forward.
            </p>
            <a href="#about" className="text-primary font-semibold text-sm hover:underline">
              Read More →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
