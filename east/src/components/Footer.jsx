import { MapPin, Phone, Mail, Globe, ArrowUp } from 'lucide-react';
import { footerLinks, contactInfo } from '../data/siteData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-dark text-gray-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-12 sm:py-16">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
          {/* 4 Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4 sm:mb-5">
                {title}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white text-sm transition-colors hover:pl-1 inline-block"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* 5th Column - Contact Us */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4 sm:mb-5">
              Contact Us
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <Phone size={14} className="text-primary shrink-0 mt-0.5" />
                <a href={`tel:${contactInfo.phone}`} className="text-gray-400 hover:text-white transition-colors">
                  {contactInfo.phone}
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin size={14} className="text-primary shrink-0 mt-0.5" />
                <span className="text-gray-400">{contactInfo.address}</span>
              </div>
              <div className="flex items-start gap-2">
                <Mail size={14} className="text-primary shrink-0 mt-0.5" />
                <a href={`mailto:${contactInfo.email}`} className="text-gray-400 hover:text-white transition-colors">
                  {contactInfo.email}
                </a>
              </div>
              <div className="flex items-start gap-2">
                <Globe size={14} className="text-primary shrink-0 mt-0.5" />
                <span className="text-gray-400">{contactInfo.website}</span>
              </div>
            </div>
            {/* Logo */}
            <div className="mt-5">
              <img
                src="/images/logo.png"
                alt="EAST Logo"
                className="h-12 w-auto object-contain brightness-0 invert opacity-60"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700/50">
        <div className="max-w-7xl mx-auto px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm text-gray-500 text-center sm:text-left">
            &copy; 2016 Eastern Academy of Science & Technology. All Rights Reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-500">
              Powered by — <span className="text-gray-400">All India Online&reg;</span>
            </span>
            <button
              onClick={scrollToTop}
              className="w-9 h-9 bg-primary/20 hover:bg-primary rounded-lg flex items-center justify-center
                         text-primary hover:text-white transition-all"
              aria-label="Top"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
