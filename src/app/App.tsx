import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Booking } from './components/Booking';
import { Testimonials } from './components/Testimonials';
import { Gallery } from './components/Gallery';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { ScrollToTop } from './components/ScrollToTop';
import { LoadingScreen } from './components/LoadingScreen';
import { SEO } from './components/SEO';

/**
 * Nairobi Glam Lounge - Premium Beauty Salon Website
 * 
 * Features:
 * - Hero section with animated gradient background
 * - About section with salon information and stats
 * - Services showcase with 4 luxury beauty services
 * - Booking form with WhatsApp integration
 * - Testimonials carousel with client reviews
 * - Gallery with masonry layout
 * - Contact section with multiple contact methods
 * - WhatsApp floating button
 * - Scroll to top button
 * - Loading screen animation
 * - SEO optimization
 * - Fully responsive design
 * - Glassmorphism UI elements
 * - Smooth animations with Motion
 * 
 * Color Palette:
 * - Rose Gold: #E8A9A9
 * - Soft Pink: #F9D5D3
 * - Nude Beige: #F6E6DA
 * - Deep Rose: #C75C6F
 * - Warm Gold: #D4A373
 * 
 * Typography:
 * - Headings: Playfair Display
 * - Body: Inter
 */

export default function App() {
  // Hero Image
  const heroImage = 'https://images.unsplash.com/photo-1613876215075-276fd62c89a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwa2VueWFuJTIwd29tYW4lMjBnbGFtb3JvdXMlMjBtYWtldXAlMjBiZWF1dHl8ZW58MXx8fHwxNzc5MDk2MjMwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral';

  // Salon Interior Image
  const salonImage = 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBiZWF1dHklMjBzYWxvbiUyMGludGVyaW9yJTIwYWZyaWNhbnxlbnwxfHx8fDE3NzkwOTY0NTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral';

  // Testimonial Images
  const testimonialImages = [
    'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrZW55YW4lMjB3b21hbiUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc3OTA5NjMzMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    'https://images.unsplash.com/photo-1666867540898-aaa1993ffabc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwYnVzaW5lc3N3b21hbiUyMHNtaWxpbmd8ZW58MXx8fHwxNzc5MDk2MzMxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    'https://images.unsplash.com/photo-1534470717-233b39a41c54?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrZW55YW4lMjBmZW1hbGUlMjBlbnRyZXByZW5ldXJ8ZW58MXx8fHwxNzc5MDk2MzMxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  ];

  // Gallery Images
  const galleryImages = [
    'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWtldXAlMjBhcnRpc3QlMjBiZWF1dHklMjBjb3NtZXRpY3N8ZW58MXx8fHwxNzc5MDk2MzY1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    'https://images.unsplash.com/photo-1571290274554-6a2eaa771e5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYWlsJTIwYXJ0JTIwbWFuaWN1cmUlMjBkZXNpZ258ZW58MXx8fHwxNzc5MDk2MzY2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    'https://images.unsplash.com/photo-1628682814595-a3f0816b25ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWlyJTIwc2Fsb24lMjBzdHlsaW5nJTIwYWZyaWNhbnxlbnwxfHx8fDE3NzkwOTYzNjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    'https://images.unsplash.com/photo-1600685890506-593fdf55949b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmlkYWwlMjBtYWtldXAlMjB3ZWRkaW5nJTIwZ2xhbXxlbnwxfHx8fDE3NzkwOTYzNjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dHklMjBmYWNpYWwlMjBza2luY2FyZSUyMHRyZWF0bWVudHxlbnwxfHx8fDE3NzkwOTYzNjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    'https://images.unsplash.com/photo-1600948836101-f9ffda59d250?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzYWxvbiUyMGludGVyaW9yJTIwYmVhdXR5fGVufDF8fHx8MTc3OTA5NjM2N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  ];

  return (
    <div className="min-h-screen bg-white font-['Inter'] overflow-x-hidden">
      <Navbar />
      <Hero heroImage={heroImage} />
      <About salonImage={salonImage} />
      <Services />
      <Booking />
      <Testimonials testimonialImages={testimonialImages} />
      <Gallery galleryImages={galleryImages} />
      <Contact />
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
      <LoadingScreen />
      <SEO />
    </div>
  );
}