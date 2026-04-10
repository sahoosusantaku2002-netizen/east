import {
  FileText, Download, BookOpen, Calendar, Shield, Users,
  Phone, HelpCircle, GraduationCap, Newspaper, ClipboardList, Mail,
} from 'lucide-react';

const sections = [
  {
    title: 'Find Your Way',
    icon: GraduationCap,
    color: 'bg-primary',
    links: [
      { name: 'About EAST', href: '#about', icon: BookOpen },
      { name: 'Courses Offered', href: '#courses', icon: GraduationCap },
      { name: 'Admission Process', href: '#admissions', icon: ClipboardList },
      { name: 'Placement Cell', href: '#placements', icon: Users },
      { name: 'Photo Gallery', href: '#gallery', icon: Calendar },
      { name: 'Contact Us', href: '#contact', icon: Phone },
    ],
  },
  {
    title: 'Downloads',
    icon: Download,
    color: 'bg-secondary',
    links: [
      { name: 'Admission Form', href: '#admissions', icon: FileText },
      { name: 'College Prospectus', href: '#about', icon: BookOpen },
      { name: 'Academic Calendar', href: '#', icon: Calendar },
      { name: 'Syllabus & Timetable', href: '#', icon: ClipboardList },
      { name: 'Weekly Newsletter', href: '#', icon: Newspaper },
      { name: 'Mandatory Disclosure', href: '#', icon: Shield },
    ],
  },
  {
    title: 'Help & Support',
    icon: HelpCircle,
    color: 'bg-accent',
    links: [
      { name: 'Anti-Ragging Policy', href: '#', icon: Shield },
      { name: 'Grievance Redressal', href: '#contact', icon: HelpCircle },
      { name: 'Student Feedback', href: '#contact', icon: Mail },
      { name: 'Faculty Evaluation', href: '#', icon: Users },
      { name: 'Alumni Portal', href: '#', icon: Users },
      { name: 'Webmail', href: '#', icon: Mail },
    ],
  },
];

export default function QuickLinksBar() {
  return (
    <section className="py-16 sm:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center animate-on-scroll mb-12">
          <h2 className="section-title text-gray-900">
            Quick <span className="text-primary">Access</span>
          </h2>
          <p className="section-subtitle">
            Everything you need, one click away
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 sm:gap-6 animate-on-scroll">
          {sections.map((section) => {
            const SectionIcon = section.icon;
            return (
              <div key={section.title} className="card overflow-hidden">
                <div className={`${section.color} px-5 py-4 flex items-center gap-3`}>
                  <SectionIcon size={20} className="text-white" />
                  <h3 className="text-white font-bold text-lg">{section.title}</h3>
                </div>
                <div className="p-3 sm:p-4 space-y-1">
                  {section.links.map((link) => {
                    const LinkIcon = link.icon;
                    return (
                      <a
                        key={link.name}
                        href={link.href}
                        className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-gray-700
                                   hover:bg-primary/5 hover:text-primary transition-all group"
                      >
                        <LinkIcon size={15} className="text-gray-400 group-hover:text-primary transition-colors shrink-0" />
                        <span className="font-medium">{link.name}</span>
                      </a>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
