import { useState, useEffect } from 'react';
import { MessageCircle, Sparkles, Menu, X } from 'lucide-react';
import { Button } from './ui/button';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-xl shadow-lg shadow-[#F9D5D3]/20'
          : 'bg-white/60 backdrop-blur-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection('hero')}>
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#E8A9A9] via-[#F9D5D3] to-[#D4A373] flex items-center justify-center shadow-lg">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="font-['Playfair_Display'] font-bold text-xl bg-gradient-to-r from-[#C75C6F] to-[#D4A373] bg-clip-text text-transparent">
                Nairobi Glam
              </h2>
              <p className="text-xs text-gray-600 font-['Inter'] -mt-1">Lounge</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('hero')}
              className="font-['Inter'] font-medium text-gray-700 hover:text-[#C75C6F] transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="font-['Inter'] font-medium text-gray-700 hover:text-[#C75C6F] transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('booking')}
              className="font-['Inter'] font-medium text-gray-700 hover:text-[#C75C6F] transition-colors"
            >
              Bookings
            </button>
            <button
              onClick={() => scrollToSection('gallery')}
              className="font-['Inter'] font-medium text-gray-700 hover:text-[#C75C6F] transition-colors"
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="font-['Inter'] font-medium text-gray-700 hover:text-[#C75C6F] transition-colors"
            >
              Contact
            </button>
          </div>

          {/* WhatsApp Button - Desktop */}
          <div className="hidden md:block">
            <Button
              onClick={() => window.open('https://wa.me/254700000000', '_blank')}
              className="bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#128C7E] hover:to-[#25D366] text-white rounded-full px-6 shadow-lg hover:shadow-xl transition-all"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection('hero')}
                className="font-['Inter'] font-medium text-gray-700 hover:text-[#C75C6F] transition-colors text-left"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="font-['Inter'] font-medium text-gray-700 hover:text-[#C75C6F] transition-colors text-left"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('booking')}
                className="font-['Inter'] font-medium text-gray-700 hover:text-[#C75C6F] transition-colors text-left"
              >
                Bookings
              </button>
              <button
                onClick={() => scrollToSection('gallery')}
                className="font-['Inter'] font-medium text-gray-700 hover:text-[#C75C6F] transition-colors text-left"
              >
                Gallery
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="font-['Inter'] font-medium text-gray-700 hover:text-[#C75C6F] transition-colors text-left"
              >
                Contact
              </button>
              <Button
                onClick={() => window.open('https://wa.me/254700000000', '_blank')}
                className="bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white rounded-full shadow-lg w-full"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
