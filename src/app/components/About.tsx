import { Award, Users, Calendar, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

interface AboutProps {
  salonImage: string;
}

export function About({ salonImage }: AboutProps) {
  const stats = [
    {
      icon: Calendar,
      value: '8+',
      label: 'Years Experience',
      gradient: 'from-[#E8A9A9] to-[#F9D5D3]',
    },
    {
      icon: Users,
      value: '10k+',
      label: 'Happy Clients',
      gradient: 'from-[#D4A373] to-[#E8A9A9]',
    },
    {
      icon: Award,
      value: '500+',
      label: 'Bridal Sessions',
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
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative">
              {/* Decorative Elements */}
              <motion.div
                animate={{
                  rotate: [0, 5, 0],
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
                  src={salonImage}
                  alt="Nairobi Glam Lounge Interior"
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
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm shadow-lg mb-6">
              <Sparkles className="w-4 h-4 text-[#C75C6F]" />
              <span className="font-['Inter'] text-sm font-medium text-gray-700">About Us</span>
            </div>

            <h2 className="font-['Playfair_Display'] font-bold text-4xl sm:text-5xl lg:text-6xl mb-6">
              <span className="bg-gradient-to-r from-[#C75C6F] to-[#D4A373] bg-clip-text text-transparent">
                Nairobi's Premier
              </span>
              <br />
              <span className="text-gray-800">Beauty Destination</span>
            </h2>

            <p className="font-['Inter'] text-lg text-gray-700 mb-6 leading-relaxed">
              At Nairobi Glam Lounge, we believe every woman deserves to feel beautiful and confident. Our team of expert beauty professionals brings over 8 years of experience in delivering world-class makeup, hair, and nail services.
            </p>

            <p className="font-['Inter'] text-lg text-gray-700 mb-8 leading-relaxed">
              We specialize in creating stunning transformations for modern African women, using premium products and techniques that celebrate your natural beauty while enhancing your unique style.
            </p>

            {/* Feature List */}
            <div className="space-y-4">
              {[
                'Expert beauty professionals with international training',
                'Premium product selection from top global brands',
                'Luxurious and hygienic salon environment',
                'Personalized beauty consultations',
                'Flexible scheduling to fit your lifestyle',
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#E8A9A9] to-[#D4A373] flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="font-['Inter'] text-gray-700">{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* Vision Statement */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-8 p-6 rounded-[24px] bg-gradient-to-br from-[#F9D5D3]/30 to-[#F6E6DA]/30 border border-[#E8A9A9]/20"
            >
              <p className="font-['Playfair_Display'] text-xl text-gray-800 italic">
                "Our mission is to empower every woman who walks through our doors to feel confident, beautiful, and ready to conquer the world."
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
