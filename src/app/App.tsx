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
import image3 from '../imports/image-3.png';
import image4 from '../imports/image-4.png';
import image5 from '../imports/image-5.png';

/**
 * Pit Glam - Premium Brows & Lashes Studio
 *
 * Slogan: Because your Brows & Lashes Matter
 *
 * Features:
 * - Hero section with animated gradient background
 * - About section with studio information and stats
 * - Services showcase for eyebrows and lashes
 * - Booking form with WhatsApp integration
 * - Testimonials carousel with client reviews
 * - Gallery with masonry layout showcasing brow/lash work
 * - Contact section with multiple contact methods
 * - WhatsApp floating button
 * - Scroll to top button
 * - Loading screen animation
 * - SEO optimization
 * - Fully responsive design
 * - Glassmorphism UI elements
 * - Interactive scroll animations with Motion
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
  // Hero Image - Imported from user's files
  const heroImage = image3;

  // About Section Image
  const aboutImage = image4;

  // Testimonial Images - Using client work images
  const testimonialImages = [
    image3,
    image4,
    image5,
  ];

  // Gallery Images - Showcase of brow and lash work
  const galleryImages = [
    image3,
    image4,
    image5,
    'https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    'https://images.unsplash.com/photo-1457972729786-0411a3b2b626?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
  ];

  return (
    <div className="min-h-screen bg-white font-['Inter'] overflow-x-hidden">
      <Navbar />
      <Hero heroImage={heroImage} />
      <About aboutImage={aboutImage} />
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