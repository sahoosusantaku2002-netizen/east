import { GraduationCap, Clock, Users, ArrowRight } from 'lucide-react';
import { courses } from '../data/siteData';

export default function Courses() {
  return (
    <section id="courses" className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center animate-on-scroll">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            <GraduationCap size={16} />
            Academic Programs
          </div>
          <h2 className="section-title text-gray-900">
            Programs We <span className="text-primary">Offer</span>
          </h2>
          <p className="section-subtitle">
            Choose from a wide range of undergraduate and postgraduate programs
            designed to prepare you for a successful career in engineering and technology.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 animate-on-scroll">
          {courses.map((course) => (
            <div key={course.name} className="card group">
              {/* Header */}
              <div className={`bg-gradient-to-br ${course.color} p-5 sm:p-6 text-white`}>
                <div className="text-3xl sm:text-4xl mb-3">{course.icon}</div>
                <h3 className="text-xl sm:text-2xl font-bold mb-1">{course.name}</h3>
                <p className="text-white/80 text-sm">{course.fullName}</p>
              </div>

              {/* Body */}
              <div className="p-5 sm:p-6">
                <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1.5">
                    <Clock size={14} className="text-primary" />
                    {course.duration}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Users size={14} className="text-primary" />
                    Intake: {course.intake}
                  </div>
                </div>

                <div className="space-y-2 mb-5">
                  {course.departments.map((dept) => (
                    <div key={dept} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                      {dept}
                    </div>
                  ))}
                </div>

                <a
                  href="#admissions"
                  className="inline-flex items-center gap-1.5 text-primary font-semibold text-sm
                             group-hover:gap-3 transition-all"
                >
                  Learn More
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Admission Info Banner */}
        <div id="admissions" className="mt-12 sm:mt-16 animate-on-scroll">
          <div className="bg-gradient-to-r from-primary via-primary-dark to-primary rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 text-white text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute -top-20 -right-20 w-60 h-60 bg-white rounded-full" />
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-secondary rounded-full" />
            </div>
            <div className="relative z-10">
              <h3
                className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Admissions Open for 2025-26
              </h3>
              <p className="text-blue-100 mb-6 sm:mb-8 max-w-2xl mx-auto text-sm sm:text-base">
                Join EAST and become part of a legacy of excellence. Admissions through
                JEE (Odisha) for B.Tech and direct admission available for Diploma & +2 Science programs.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <a href="#contact" className="btn-secondary justify-center">
                  Apply Online
                  <ArrowRight size={18} />
                </a>
                <a href="tel:+916712356933" className="btn-outline justify-center">
                  Call for Details
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
