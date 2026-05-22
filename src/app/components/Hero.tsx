import { Calendar, MessageCircle } from 'lucide-react';
import { Button } from './ui/button';
import { motion } from 'motion/react';
import { FloatingParticles } from './FloatingParticles';

interface HeroProps {
  heroImage: string;
}

export function Hero({ heroImage }: HeroProps) {
  const scrollToBooking = () => {
    const element = document.getElementById('booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F6E6DA] via-[#F9D5D3] to-[#E8A9A9] animate-[gradient_15s_ease_infinite]" />
      
      {/* Floating Blobs */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-[#E8A9A9]/30 to-[#F9D5D3]/30 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          y: [0, 20, 0],
          x: [0, -15, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-40 left-20 w-96 h-96 bg-gradient-to-tr from-[#D4A373]/30 to-[#C75C6F]/30 rounded-full blur-3xl"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm shadow-lg mb-6"
          >
            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#C75C6F] to-[#D4A373] animate-pulse" />
            <span className="font-['Inter'] text-sm font-medium text-gray-700">
              Premium Brows & Lashes Studio
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="font-['Playfair_Display'] font-bold text-5xl sm:text-6xl lg:text-7xl mb-6 leading-tight"
          >
            <span className="bg-gradient-to-r from-[#C75C6F] via-[#E8A9A9] to-[#D4A373] bg-clip-text text-transparent">
              Pit Glam
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="font-['Playfair_Display'] text-2xl sm:text-3xl text-gray-800 mb-8 max-w-xl mx-auto lg:mx-0 italic"
          >
            Because your Brows & Lashes Matter
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <Button
              onClick={scrollToBooking}
              className="bg-gradient-to-r from-[#C75C6F] to-[#D4A373] hover:from-[#D4A373] hover:to-[#C75C6F] text-white rounded-full px-8 py-6 shadow-2xl hover:shadow-[#E8A9A9]/50 transition-all hover:scale-105"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Book Appointment
            </Button>
            <Button
              onClick={() => window.open('https://wa.me/254700000000', '_blank')}
              className="bg-white/90 backdrop-blur-sm text-gray-800 hover:bg-white rounded-full px-8 py-6 shadow-xl hover:shadow-2xl transition-all hover:scale-105 border border-gray-200"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Chat on WhatsApp
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-12 flex gap-8 justify-center lg:justify-start"
          >
            <div>
              <div className="font-['Playfair_Display'] font-bold text-3xl bg-gradient-to-r from-[#C75C6F] to-[#D4A373] bg-clip-text text-transparent">
                5+
              </div>
              <div className="font-['Inter'] text-sm text-gray-600">Years Experience</div>
            </div>
            <div>
              <div className="font-['Playfair_Display'] font-bold text-3xl bg-gradient-to-r from-[#C75C6F] to-[#D4A373] bg-clip-text text-transparent">
                2k+
              </div>
              <div className="font-['Inter'] text-sm text-gray-600">Happy Clients</div>
            </div>
            <div>
              <div className="font-['Playfair_Display'] font-bold text-3xl bg-gradient-to-r from-[#C75C6F] to-[#D4A373] bg-clip-text text-transparent">
                100%
              </div>
              <div className="font-['Inter'] text-sm text-gray-600">Satisfaction</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative">
            {/* Decorative Elements */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-[#E8A9A9] to-[#F9D5D3] rounded-3xl opacity-60 blur-xl" />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-tr from-[#D4A373] to-[#C75C6F] rounded-3xl opacity-60 blur-xl" />
            
            {/* Main Image */}
            <div className="relative rounded-[32px] overflow-hidden shadow-2xl">
              <img
                src={heroImage}
                alt="Beautiful Lash Extensions at Pit Glam"
                className="w-full h-[600px] object-cover"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#C75C6F]/20 to-transparent" />
            </div>

            {/* Floating Card */}
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-xl rounded-3xl p-6 shadow-2xl border border-white/50"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#E8A9A9] to-[#D4A373] flex items-center justify-center">
                  <span className="text-white font-bold">⭐</span>
                </div>
                <div>
                  <div className="font-['Playfair_Display'] font-bold text-gray-800">
                    Expert Lash & Brow Artist
                  </div>
                  <div className="font-['Inter'] text-sm text-gray-600">
                    Precision, artistry, and beauty
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}