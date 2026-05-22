import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { Button } from './ui/button';
import { motion } from 'motion/react';

export function Contact() {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      detail: '+254 700 000 000',
      action: 'tel:+254700000000',
      gradient: 'from-[#E8A9A9] to-[#F9D5D3]',
    },
    {
      icon: Mail,
      title: 'Email',
      detail: 'hello@pitglam.co.ke',
      action: 'mailto:hello@pitglam.co.ke',
      gradient: 'from-[#D4A373] to-[#E8A9A9]',
    },
    {
      icon: MapPin,
      title: 'Location',
      detail: 'Nairobi, Kenya',
      action: 'https://maps.google.com',
      gradient: 'from-[#C75C6F] to-[#D4A373]',
    },
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-white via-[#F9D5D3]/10 to-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-[#E8A9A9]/20 to-[#F9D5D3]/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-tr from-[#D4A373]/20 to-[#C75C6F]/20 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, type: "spring", stiffness: 80 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm shadow-lg mb-4"
          >
            <MessageCircle className="w-4 h-4 text-[#C75C6F]" />
            <span className="font-['Inter'] text-sm font-medium text-gray-700">Get In Touch</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-['Playfair_Display'] font-bold text-4xl sm:text-5xl lg:text-6xl mb-4"
          >
            <span className="bg-gradient-to-r from-[#C75C6F] to-[#D4A373] bg-clip-text text-transparent">
              Contact Us
            </span>
            <br />
            <span className="text-gray-800">Let's Connect</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="font-['Inter'] text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Reach out for bookings, consultations, or questions about our services
          </motion.p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {contactInfo.map((contact, index) => (
            <motion.a
              key={index}
              href={contact.action}
              target={contact.action.startsWith('http') ? '_blank' : undefined}
              rel={contact.action.startsWith('http') ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: 0.5 + (index * 0.15),
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ y: -12, scale: 1.05 }}
              className="group block"
            >
              <div className="bg-white/90 backdrop-blur-xl rounded-[28px] p-8 shadow-xl hover:shadow-2xl transition-all border border-white/50 text-center">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${contact.gradient} flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all`}>
                  <contact.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-['Playfair_Display'] font-bold text-xl text-gray-800 mb-2">
                  {contact.title}
                </h3>
                <p className="font-['Inter'] text-gray-600">
                  {contact.detail}
                </p>
              </div>
            </motion.a>
          ))}
        </div>

        {/* WhatsApp Support Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-r from-[#25D366] to-[#128C7E] rounded-[32px] p-8 md:p-12 shadow-2xl text-center"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-white text-center md:text-left">
              <h3 className="font-['Playfair_Display'] font-bold text-3xl mb-2">
                Need Instant Assistance?
              </h3>
              <p className="font-['Inter'] text-lg text-white/90">
                Chat with our beauty consultants on WhatsApp
              </p>
            </div>
            <Button
              onClick={() => window.open('https://wa.me/254700000000', '_blank')}
              className="bg-white hover:bg-gray-50 text-[#25D366] rounded-full px-8 py-6 shadow-xl hover:shadow-2xl transition-all hover:scale-105 flex-shrink-0"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Start Chat
            </Button>
          </div>
        </motion.div>

        {/* Operating Hours */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <div className="inline-block bg-white/90 backdrop-blur-xl rounded-[24px] px-8 py-6 shadow-lg border border-white/50">
            <h4 className="font-['Playfair_Display'] font-bold text-xl text-gray-800 mb-3">
              Operating Hours
            </h4>
            <div className="font-['Inter'] text-gray-600 space-y-1">
              <p>Monday - Friday: 9:00 AM - 7:00 PM</p>
              <p>Saturday: 9:00 AM - 8:00 PM</p>
              <p>Sunday: 10:00 AM - 6:00 PM</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
