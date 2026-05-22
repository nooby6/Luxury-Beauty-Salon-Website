import { Sparkles, Clock, ArrowRight, MessageCircle } from 'lucide-react';
import { Button } from './ui/button';
import { motion } from 'motion/react';

interface Service {
  id: number;
  icon: string;
  title: string;
  description: string;
  duration: string;
  whatsappMessage: string;
}

const services: Service[] = [
  {
    id: 1,
    icon: '👁️',
    title: 'Classic Lash Extensions',
    description: 'Beautiful, natural-looking lash extensions for everyday elegance',
    duration: '90-120 min',
    whatsappMessage: 'Hi! I want to book Classic Lash Extensions',
  },
  {
    id: 2,
    icon: '✨',
    title: 'Volume Lash Extensions',
    description: 'Dramatic, full volume lashes for that glamorous look',
    duration: '120-150 min',
    whatsappMessage: 'Hi! I want to book Volume Lash Extensions',
  },
  {
    id: 3,
    icon: '🎨',
    title: 'Eyebrow Shaping & Tinting',
    description: 'Expert brow shaping and tinting to frame your face perfectly',
    duration: '45-60 min',
    whatsappMessage: 'Hi! I want to book Eyebrow Shaping & Tinting',
  },
  {
    id: 4,
    icon: '💎',
    title: 'Hybrid Lashes',
    description: 'Perfect blend of classic and volume for a textured, fluffy look',
    duration: '120-150 min',
    whatsappMessage: 'Hi! I want to book Hybrid Lashes',
  },
  {
    id: 5,
    icon: '🌟',
    title: 'Lash Lift & Tint',
    description: 'Natural lash enhancement with a beautiful lift and rich tint',
    duration: '60-75 min',
    whatsappMessage: 'Hi! I want to book Lash Lift & Tint',
  },
  {
    id: 6,
    icon: '🎯',
    title: 'Brow Lamination',
    description: 'Achieve fuller, fluffier brows with our lamination treatment',
    duration: '45-60 min',
    whatsappMessage: 'Hi! I want to book Brow Lamination',
  },
];

export function Services() {
  const scrollToBooking = () => {
    const element = document.getElementById('booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-white via-[#F9D5D3]/10 to-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-[#E8A9A9]/20 to-[#F9D5D3]/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-tr from-[#D4A373]/20 to-[#C75C6F]/20 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm shadow-lg mb-4">
            <Sparkles className="w-4 h-4 text-[#C75C6F]" />
            <span className="font-['Inter'] text-sm font-medium text-gray-700">Our Services</span>
          </div>
          <h2 className="font-['Playfair_Display'] font-bold text-4xl sm:text-5xl lg:text-6xl mb-4">
            <span className="bg-gradient-to-r from-[#C75C6F] to-[#D4A373] bg-clip-text text-transparent">
              Brows & Lashes
            </span>
            <br />
            <span className="text-gray-800">Perfected</span>
          </h2>
          <p className="font-['Inter'] text-lg text-gray-600 max-w-2xl mx-auto">
            Expert treatments designed to enhance your natural beauty
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ y: -12, scale: 1.03 }}
              className="group relative"
            >
              <div className="relative h-full bg-white/80 backdrop-blur-xl rounded-[28px] p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/50 overflow-hidden">
                {/* Gradient Border on Hover */}
                <div className="absolute inset-0 rounded-[28px] p-[2px] bg-gradient-to-br from-[#E8A9A9] via-[#F9D5D3] to-[#D4A373] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="h-full w-full bg-white rounded-[26px]" />
                </div>

                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.2 }}
                    transition={{ duration: 0.5 }}
                    className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#E8A9A9] to-[#D4A373] flex items-center justify-center mb-4 shadow-lg group-hover:shadow-xl transition-all"
                  >
                    <span className="text-3xl">{service.icon}</span>
                  </motion.div>

                  {/* Title */}
                  <h3 className="font-['Playfair_Display'] font-bold text-xl text-gray-800 mb-2">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="font-['Inter'] text-sm text-gray-600 mb-4">
                    {service.description}
                  </p>

                  {/* Duration */}
                  <div className="flex items-center gap-2 mb-6">
                    <Clock className="w-4 h-4 text-[#C75C6F]" />
                    <span className="font-['Inter'] text-sm text-gray-600">{service.duration}</span>
                  </div>

                  {/* WhatsApp Button */}
                  <Button
                    onClick={() => window.open(`https://wa.me/254700000000?text=${encodeURIComponent(service.whatsappMessage)}`, '_blank')}
                    className="w-full bg-gradient-to-r from-[#C75C6F] to-[#D4A373] hover:from-[#D4A373] hover:to-[#C75C6F] text-white rounded-full shadow-lg group-hover:shadow-xl transition-all"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Book via WhatsApp
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="font-['Inter'] text-gray-600 mb-4">
            Not sure which service is right for you?
          </p>
          <Button
            onClick={() => window.open('https://wa.me/254700000000?text=Hi! I need help choosing the right service for me', '_blank')}
            className="bg-white hover:bg-gray-50 text-gray-800 rounded-full px-8 shadow-xl border border-gray-200"
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            Chat with Us for Advice
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
