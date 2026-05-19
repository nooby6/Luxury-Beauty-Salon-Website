import { Camera, Instagram } from 'lucide-react';
import { motion } from 'motion/react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

interface GalleryProps {
  galleryImages: string[];
}

export function Gallery({ galleryImages }: GalleryProps) {
  const galleryItems = [
    { image: galleryImages[0], category: 'Makeup', title: 'Glam Transformation' },
    { image: galleryImages[1], category: 'Nails', title: 'Nail Art Design' },
    { image: galleryImages[2], category: 'Hair', title: 'Hair Styling' },
    { image: galleryImages[3], category: 'Bridal', title: 'Bridal Glam' },
    { image: galleryImages[4], category: 'Facial', title: 'Skincare Treatment' },
    { image: galleryImages[5], category: 'Salon', title: 'Luxury Ambiance' },
  ];

  return (
    <section id="gallery" className="py-24 bg-gradient-to-b from-white via-[#F6E6DA]/10 to-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-[#E8A9A9]/20 to-[#F9D5D3]/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-gradient-to-tr from-[#D4A373]/20 to-[#C75C6F]/20 rounded-full blur-3xl" />

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
            <Camera className="w-4 h-4 text-[#C75C6F]" />
            <span className="font-['Inter'] text-sm font-medium text-gray-700">Our Work</span>
          </div>
          <h2 className="font-['Playfair_Display'] font-bold text-4xl sm:text-5xl lg:text-6xl mb-4">
            <span className="bg-gradient-to-r from-[#C75C6F] to-[#D4A373] bg-clip-text text-transparent">
              Beauty Gallery
            </span>
            <br />
            <span className="text-gray-800">Transformations</span>
          </h2>
          <p className="font-['Inter'] text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our portfolio of stunning beauty transformations
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
            <Masonry gutter="1.5rem">
              {galleryItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="group relative cursor-pointer"
                >
                  <div className="relative rounded-[24px] overflow-hidden shadow-xl hover:shadow-2xl transition-all">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-auto object-cover"
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#C75C6F]/90 via-[#C75C6F]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                      <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <span className="inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-['Inter'] mb-2">
                          {item.category}
                        </span>
                        <h3 className="font-['Playfair_Display'] font-bold text-white text-xl">
                          {item.title}
                        </h3>
                      </div>
                    </div>

                    {/* Gradient Border */}
                    <div className="absolute inset-0 rounded-[24px] ring-2 ring-transparent group-hover:ring-[#E8A9A9] transition-all" />
                  </div>
                </motion.div>
              ))}
            </Masonry>
          </ResponsiveMasonry>
        </motion.div>

        {/* Instagram CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="inline-flex flex-col items-center gap-4 px-8 py-6 rounded-[28px] bg-white/90 backdrop-blur-xl shadow-xl border border-white/50">
            <Instagram className="w-12 h-12 text-[#C75C6F]" />
            <div>
              <h3 className="font-['Playfair_Display'] font-bold text-2xl text-gray-800 mb-2">
                Follow Us on Instagram
              </h3>
              <p className="font-['Inter'] text-gray-600 mb-4">
                Stay updated with our latest work and beauty tips
              </p>
              <a
                href="https://instagram.com/nairobiglam"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#C75C6F] to-[#D4A373] hover:from-[#D4A373] hover:to-[#C75C6F] text-white font-['Inter'] font-medium shadow-lg hover:shadow-xl transition-all"
              >
                <Instagram className="w-5 h-5" />
                @nairobiglam
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
