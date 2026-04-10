import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { navLinks } from '../data/siteData';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-white shadow-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 shrink-0">
            <img
              src="/images/logo.png"
              alt="EAST Logo"
              className="h-14 sm:h-16 w-auto object-contain"
            />
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(link.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a
                  href={link.href}
                  className="px-3 xl:px-4 py-2 text-sm font-medium text-gray-700 hover:text-primary
                             transition-colors flex items-center gap-1 rounded-lg hover:bg-primary/5"
                >
                  {link.name}
                  {link.submenu && (
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-200 ${
                        activeDropdown === link.name ? 'rotate-180' : ''
                      }`}
                    />
                  )}
                </a>

                {/* Dropdown */}
                {link.submenu && activeDropdown === link.name && (
                  <div className="absolute top-full left-0 pt-2 min-w-[220px]">
                    <div className="bg-white rounded-xl shadow-xl border border-gray-100 py-2 overflow-hidden">
                      {link.submenu.map((sub) => (
                        <a
                          key={sub.name}
                          href={sub.href}
                          className="block px-4 py-2.5 text-sm text-gray-600 hover:text-primary
                                     hover:bg-primary/5 transition-colors"
                        >
                          {sub.name}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="#admissions"
              className="hidden md:inline-flex btn-primary text-sm !px-5 !py-2.5"
            >
              Apply Now
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 top-20 bg-white z-40 transition-transform duration-300 overflow-y-auto ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-4 space-y-1">
          {navLinks.map((link) => (
            <div key={link.name}>
              <a
                href={link.href}
                onClick={() => {
                  if (!link.submenu) setIsOpen(false);
                  if (link.submenu) {
                    setActiveDropdown(activeDropdown === link.name ? null : link.name);
                  }
                }}
                className="flex items-center justify-between px-4 py-3 text-gray-700
                           hover:text-primary hover:bg-primary/5 rounded-lg font-medium transition-colors"
              >
                {link.name}
                {link.submenu && (
                  <ChevronDown
                    size={16}
                    className={`transition-transform ${
                      activeDropdown === link.name ? 'rotate-180' : ''
                    }`}
                  />
                )}
              </a>
              {link.submenu && activeDropdown === link.name && (
                <div className="ml-4 pl-4 border-l-2 border-primary/20 space-y-1">
                  {link.submenu.map((sub) => (
                    <a
                      key={sub.name}
                      href={sub.href}
                      onClick={() => setIsOpen(false)}
                      className="block px-4 py-2 text-sm text-gray-500 hover:text-primary transition-colors"
                    >
                      {sub.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="pt-4 px-4">
            <a href="#admissions" onClick={() => setIsOpen(false)} className="btn-primary w-full justify-center text-sm">
              Apply Now
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
