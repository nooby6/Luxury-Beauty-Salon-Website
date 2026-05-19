import { Instagram, Facebook, Twitter, Youtube, Sparkles, Heart } from 'lucide-react';

export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialLinks = [
    { icon: Instagram, href: 'https://instagram.com/nairobiglam', label: 'Instagram' },
    { icon: Facebook, href: 'https://facebook.com/nairobiglam', label: 'Facebook' },
    { icon: Twitter, href: 'https://twitter.com/nairobiglam', label: 'Twitter' },
    { icon: Youtube, href: 'https://youtube.com/nairobiglam', label: 'YouTube' },
  ];

  const quickLinks = [
    { label: 'Home', section: 'hero' },
    { label: 'Services', section: 'services' },
    { label: 'Bookings', section: 'booking' },
    { label: 'Gallery', section: 'gallery' },
    { label: 'Contact', section: 'contact' },
  ];

  return (
    <footer className="bg-gradient-to-br from-[#C75C6F] via-[#E8A9A9] to-[#D4A373] text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-lg">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-['Playfair_Display'] font-bold text-2xl">
                  Nairobi Glam Lounge
                </h3>
              </div>
            </div>
            <p className="font-['Inter'] text-white/90 mb-6 max-w-md">
              Your premier destination for luxury beauty experiences in Nairobi. We specialize in makeup, hair, nails, and bridal services crafted for the modern African woman.
            </p>
            
            {/* Social Media */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm flex items-center justify-center transition-all hover:scale-110"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-['Playfair_Display'] font-bold text-lg mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.section)}
                    className="font-['Inter'] text-white/90 hover:text-white transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-['Playfair_Display'] font-bold text-lg mb-4">
              Our Services
            </h4>
            <ul className="font-['Inter'] text-white/90 space-y-2">
              <li>Makeup & Glam</li>
              <li>Hair Styling</li>
              <li>Nail Art</li>
              <li>Bridal Packages</li>
              <li>Facials & Skincare</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-['Inter'] text-white/80 text-sm text-center md:text-left">
              © 2026 Nairobi Glam Lounge. Designed with elegance in Kenya.
            </p>
            <div className="flex items-center gap-2 text-white/80 text-sm">
              <span className="font-['Inter']">Made with</span>
              <Heart className="w-4 h-4 fill-white/80" />
              <span className="font-['Inter']">in Nairobi</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
