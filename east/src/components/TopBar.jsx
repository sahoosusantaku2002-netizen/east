import { Phone, Mail, Clock, MapPin } from 'lucide-react';

export default function TopBar() {
  return (
    <div className="bg-primary text-white text-sm hidden md:block">
      <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
        <div className="flex items-center gap-6">
          <a href="tel:+916712356933" className="flex items-center gap-1.5 hover:text-secondary transition-colors">
            <Phone size={14} />
            <span>+91 671-235 6933</span>
          </a>
          <a href="mailto:info@eastodissa.ac.in" className="flex items-center gap-1.5 hover:text-secondary transition-colors">
            <Mail size={14} />
            <span>info@eastodissa.ac.in</span>
          </a>
        </div>
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-1.5">
            <Clock size={14} />
            <span>Mon - Sat: 8:00 AM - 5:00 PM</span>
          </span>
          <span className="flex items-center gap-1.5">
            <MapPin size={14} />
            <span>Phulnakhara, Cuttack, Odisha</span>
          </span>
        </div>
      </div>
    </div>
  );
}
