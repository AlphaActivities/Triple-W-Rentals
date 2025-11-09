import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#' },
    { label: 'Fleet', href: '#fleet' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Booking', href: '#booking' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 sm:gap-3 shrink-0 hover:opacity-90 transition-opacity duration-300">
            <img
              src="/images/logo/logo.png"
              alt="Triple W Rentals Logo"
              className="h-9 w-auto object-contain md:h-10"
            />
            <span className="text-white font-semibold text-base sm:text-lg tracking-tight whitespace-nowrap">
              Triple W Rentals
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white hover:text-[#00A8FF] transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#booking"
              className="px-6 py-2 bg-[#00A8FF] text-white rounded-lg hover:uv-blue-glow transition-all duration-300"
            >
              Reserve Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black border-t border-gray-800">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block text-white hover:text-[#00A8FF] transition-colors duration-300 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#booking"
              className="block px-6 py-2 bg-[#00A8FF] text-white rounded-lg text-center hover:uv-blue-glow transition-all duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Reserve Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
