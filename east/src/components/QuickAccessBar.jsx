import { Eye, BookOpen, FlaskConical, Trophy, Camera, FileText } from 'lucide-react';

const items = [
  { name: 'Overview', href: '#about', icon: Eye },
  { name: 'Digital Library', href: '#facilities', icon: BookOpen },
  { name: 'Research', href: '#facilities', icon: FlaskConical },
  { name: 'Achievement', href: '#achievements', icon: Trophy },
  { name: 'Photo Gallery', href: '#gallery', icon: Camera },
  { name: 'Mandatory Disclosure', href: '#', icon: FileText },
];

export default function QuickAccessBar() {
  return (
    <div className="bg-primary-dark">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-3 sm:grid-cols-6">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.name}
                href={item.href}
                className="flex flex-col items-center gap-1.5 py-4 sm:py-5 text-white/80 hover:text-white
                           hover:bg-white/10 transition-all text-center group"
              >
                <Icon size={20} className="group-hover:scale-110 transition-transform" />
                <span className="text-[10px] sm:text-xs font-medium leading-tight">{item.name}</span>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
