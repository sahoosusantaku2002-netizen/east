import { Award, Users, BookOpen, Target, CheckCircle } from 'lucide-react';

const highlights = [
  'Approved by AICTE, New Delhi',
  'Affiliated to BPUT, Odisha',
  'ISO 9001:2015 Certified',
  '25+ Years of Academic Excellence',
  'DELNET & Digital Library Access',
  'International MoU Collaborations',
];

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left - Image Grid */}
          <div className="animate-on-scroll">
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="space-y-3 sm:space-y-4">
                <img
                  src="/images/banners/banner5.jpg"
                  alt="EAST Classroom"
                  className="rounded-2xl w-full h-40 sm:h-52 object-cover shadow-lg"
                />
                <img
                  src="/images/banners/banner7.jpg"
                  alt="Digital Library"
                  className="rounded-2xl w-full h-28 sm:h-36 object-cover shadow-lg"
                />
              </div>
              <div className="space-y-3 sm:space-y-4 pt-6 sm:pt-8">
                <img
                  src="/images/banners/banner4.jpg"
                  alt="Computer Lab"
                  className="rounded-2xl w-full h-28 sm:h-36 object-cover shadow-lg"
                />
                <div className="rounded-2xl overflow-hidden shadow-lg bg-white flex items-center justify-center p-3">
                  <img
                    src="/images/25-year-celebrating.png"
                    alt="25 Years of Excellence"
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="animate-on-scroll">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-4 sm:mb-6">
              <Award size={16} />
              About EAST
            </div>
            <h2
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Shaping Future Engineers on the{' '}
              <span className="text-primary">Banks of Prachi</span>
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
              Eastern Academy of Science &amp; Technology (EAST) stands as a beacon of quality
              technical education in Odisha. Founded with a vision to mould the future of
              youth, our campus on the beautiful banks of the Prachi river offers a nurturing
              environment for academic and personal growth.
            </p>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8">
              Our core values of Quality Education, Honest Personality, Immaculate Integrity,
              Dazzling Dignity, and Noble Nationalism guide every student toward a bright future
              in engineering and technology.
            </p>

            {/* Highlights Grid */}
            <div className="grid sm:grid-cols-2 gap-2 sm:gap-3 mb-6 sm:mb-8">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm sm:text-base">
                  <CheckCircle className="text-accent shrink-0" size={18} />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>

            <a href="#courses" className="btn-primary text-sm sm:text-base">
              Explore Programs
            </a>
          </div>
        </div>

        {/* Mission & Vision */}
        <div id="mission" className="mt-16 sm:mt-20 grid md:grid-cols-3 gap-6 sm:gap-8 animate-on-scroll">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-2xl p-6 sm:p-8 text-center border border-blue-100">
            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Target className="text-primary" size={28} />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">Our Mission</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              To provide quality technical education that fosters innovation, critical thinking,
              and professional competence, preparing students to excel in a rapidly evolving
              technological landscape.
            </p>
          </div>
          <div className="bg-gradient-to-br from-amber-50 to-amber-100/50 rounded-2xl p-6 sm:p-8 text-center border border-amber-100">
            <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
              <BookOpen className="text-secondary" size={28} />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">Our Vision</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              To be a centre of excellence in technical education, recognized nationally and
              internationally for producing competent engineers and technocrats who contribute
              meaningfully to society.
            </p>
          </div>
          <div className="bg-gradient-to-br from-teal-50 to-teal-100/50 rounded-2xl p-6 sm:p-8 text-center border border-teal-100">
            <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Users className="text-accent" size={28} />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">Our Values</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Quality Education, Honest Personality, Immaculate Integrity, Dazzling Dignity,
              and Noble Nationalism — these five pillars guide our commitment to shaping
              future leaders.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
