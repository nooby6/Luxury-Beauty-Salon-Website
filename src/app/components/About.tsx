import { Award, Users, Calendar, Sparkles, Eye } from 'lucide-react';
import { motion } from 'motion/react';

interface AboutProps {
  aboutImage: string;
}

export function About({ aboutImage }: AboutProps) {
  const stats = [
    {
      icon: Calendar,
      value: '5+',
      label: 'Years Experience',
      gradient: 'from-[#E8A9A9] to-[#F9D5D3]',
    },
    {
      icon: Users,
      value: '2k+',
      label: 'Happy Clients',
      gradient: 'from-[#D4A373] to-[#E8A9A9]',
    },
    {
      icon: Eye,
      value: '100%',
      label: 'Satisfaction',
      gradient: 'from-[#C75C6F] to-[#D4A373]',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white via-[#F6E6DA]/10 to-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-[#E8A9A9]/20 to-[#F9D5D3]/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-gradient-to-tr from-[#D4A373]/20 to-[#C75C6F]/20 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, type: "spring", stiffness: 50 }}
            className="relative"
          >
            <div className="relative">
              {/* Decorative Elements */}
              <motion.div
                animate={{
                  rotate: [0, 5, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-br from-[#E8A9A9] to-[#F9D5D3] rounded-[28px] opacity-40 blur-xl"
              />
              <motion.div
                animate={{
                  rotate: [0, -5, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -bottom-6 -right-6 w-40 h-40 bg-gradient-to-tr from-[#D4A373] to-[#C75C6F] rounded-[28px] opacity-40 blur-xl"
              />

              {/* Main Image */}
              <div className="relative rounded-[32px] overflow-hidden shadow-2xl">
                <img
                  src={aboutImage}
                  alt="Pit Glam Lash Extensions Work"
                  className="w-full h-[500px] object-cover"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#C75C6F]/30 to-transparent" />
              </div>

              {/* Floating Stats Cards */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -bottom-6 left-6 right-6 bg-white/90 backdrop-blur-xl rounded-3xl p-6 shadow-2xl border border-white/50"
              >
                <div className="grid grid-cols-3 gap-4">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${stat.gradient} flex items-center justify-center mx-auto mb-2`}>
                        <stat.icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="font-['Playfair_Display'] font-bold text-xl bg-gradient-to-r from-[#C75C6F] to-[#D4A373] bg-clip-text text-transparent">
                        {stat.value}
                      </div>
                      <div className="font-['Inter'] text-xs text-gray-600">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm shadow-lg mb-6"
            >
              <Sparkles className="w-4 h-4 text-[#C75C6F]" />
              <span className="font-['Inter'] text-sm font-medium text-gray-700">About Us</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="font-['Playfair_Display'] font-bold text-4xl sm:text-5xl lg:text-6xl mb-6"
            >
              <span className="bg-gradient-to-r from-[#C75C6F] to-[#D4A373] bg-clip-text text-transparent">
                Where Eyes
              </span>
              <br />
              <span className="text-gray-800">Come Alive</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="font-['Inter'] text-lg text-gray-700 mb-6 leading-relaxed"
            >
              At Pit Glam, we believe that your brows and lashes are more than just features – they're the frame to your most beautiful asset: your eyes. Our expert lash and brow artists bring over 5 years of specialized experience in creating stunning, natural-looking enhancements.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="font-['Inter'] text-lg text-gray-700 mb-8 leading-relaxed"
            >
              We specialize in precision lash extensions, expert brow shaping, and transformative treatments that enhance your natural beauty. Using only premium products and the latest techniques, we ensure every client leaves feeling confident and beautiful.
            </motion.p>

            {/* Feature List */}
            <div className="space-y-4">
              {[
                'Certified lash and brow specialists with advanced training',
                'Premium, hypoallergenic products safe for sensitive eyes',
                'Luxurious, sanitized studio environment',
                'Personalized consultations for your unique eye shape',
                'Flexible appointment times to suit your schedule',
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: 0.7 + (index * 0.1),
                    type: "spring",
                    stiffness: 100
                  }}
                  className="flex items-start gap-3"
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.3 }}
                    className="w-6 h-6 rounded-full bg-gradient-to-br from-[#E8A9A9] to-[#D4A373] flex items-center justify-center flex-shrink-0 mt-1"
                  >
                    <span className="text-white text-xs">✓</span>
                  </motion.div>
                  <span className="font-['Inter'] text-gray-700">{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* Vision Statement */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1.2 }}
              whileHover={{ scale: 1.02 }}
              className="mt-8 p-6 rounded-[24px] bg-gradient-to-br from-[#F9D5D3]/30 to-[#F6E6DA]/30 border border-[#E8A9A9]/20"
            >
              <p className="font-['Playfair_Display'] text-xl text-gray-800 italic">
                "Because your Brows & Lashes Matter – we're dedicated to enhancing your natural beauty and helping you feel confident, one lash at a time."
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
