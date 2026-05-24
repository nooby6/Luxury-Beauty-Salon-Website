import { Star, Quote } from 'lucide-react';
import { motion } from 'motion/react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  rating: number;
  text: string;
}

interface TestimonialsProps {
  testimonialImages: string[];
}

export function Testimonials({ testimonialImages }: TestimonialsProps) {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Amara Wanjiku',
      role: 'Entrepreneur',
      image: testimonialImages[0],
      rating: 5,
      text: 'Pit Glam is my go-to beauty destination! The bridal package was absolutely stunning. Every detail was perfect, and I felt like a queen on my special day.',
    },
    {
      id: 2,
      name: 'Chebet Akinyi',
      role: 'Fashion Designer',
      image: testimonialImages[1],
      rating: 5,
      text: 'The signature glow facial is life-changing! My skin has never looked better. The team is professional, and the salon ambiance is so luxurious and relaxing.',
    },
    {
      id: 3,
      name: 'Njeri Otieno',
      role: 'Corporate Executive',
      image: testimonialImages[2],
      rating: 5,
      text: 'I trust Pit Glam with all my beauty needs. From nails to hair, everything is top-tier. The attention to detail and customer service is unmatched!',
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="py-24 bg-gradient-to-b from-white via-[#F9D5D3]/10 to-white relative overflow-hidden">
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
            <Star className="w-4 h-4 text-[#C75C6F] fill-[#C75C6F]" />
            <span className="font-['Inter'] text-sm font-medium text-gray-700">Client Reviews</span>
          </div>
          <h2 className="font-['Playfair_Display'] font-bold text-4xl sm:text-5xl lg:text-6xl mb-4">
            <span className="bg-gradient-to-r from-[#C75C6F] to-[#D4A373] bg-clip-text text-transparent">
              What Our Clients
            </span>
            <br />
            <span className="text-gray-800">Are Saying</span>
          </h2>
          <p className="font-['Inter'] text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied clients
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="testimonials-slider"
        >
          <Slider {...settings}>
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="px-3">
                <div className="bg-white/90 backdrop-blur-xl rounded-[28px] p-8 shadow-xl border border-white/50 h-full">
                  {/* Quote Icon */}
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#E8A9A9] to-[#D4A373] flex items-center justify-center mb-6">
                    <Quote className="w-6 h-6 text-white" />
                  </div>

                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-[#D4A373] fill-[#D4A373]" />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="font-['Inter'] text-gray-700 mb-6 leading-relaxed">
                    "{testimonial.text}"
                  </p>

                  {/* Client Info */}
                  <div className="flex items-center gap-4 pt-4 border-t border-gray-200">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-14 h-14 rounded-full object-cover ring-2 ring-[#F9D5D3]"
                    />
                    <div>
                      <h4 className="font-['Playfair_Display'] font-bold text-gray-800">
                        {testimonial.name}
                      </h4>
                      <p className="font-['Inter'] text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </motion.div>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/90 backdrop-blur-xl shadow-lg">
            <div className="flex -space-x-2">
              {testimonialImages.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`Client ${i + 1}`}
                  className="w-8 h-8 rounded-full object-cover ring-2 ring-white"
                />
              ))}
            </div>
            <span className="font-['Inter'] text-sm text-gray-700">
              Join <span className="font-bold text-[#C75C6F]">10,000+</span> happy clients
            </span>
          </div>
        </motion.div>
      </div>

      <style>{`
        .testimonials-slider .slick-dots {
          bottom: -50px;
        }
        .testimonials-slider .slick-dots li button:before {
          font-size: 12px;
          color: #E8A9A9;
        }
        .testimonials-slider .slick-dots li.slick-active button:before {
          color: #C75C6F;
        }
      `}</style>
    </section>
  );
}
