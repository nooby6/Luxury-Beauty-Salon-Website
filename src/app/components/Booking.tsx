import { useState } from 'react';
import { Calendar as CalendarIcon, Send, X } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Calendar } from './ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { motion } from 'motion/react';
import { format } from 'date-fns';

export function Booking() {
  const [date, setDate] = useState<Date>();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    requests: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = `Hello! I'd like to book an appointment at Nairobi Glam Lounge.
    
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Service: ${formData.service}
Date: ${date ? format(date, 'PPP') : 'Not selected'}
Special Requests: ${formData.requests || 'None'}`;

    const whatsappUrl = `https://wa.me/254700000000?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      requests: '',
    });
    setDate(undefined);
  };

  return (
    <section id="booking" className="py-24 bg-gradient-to-b from-white via-[#F6E6DA]/20 to-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-[#E8A9A9]/20 to-[#F9D5D3]/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-gradient-to-tr from-[#D4A373]/20 to-[#C75C6F]/20 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm shadow-lg mb-6">
              <CalendarIcon className="w-4 h-4 text-[#C75C6F]" />
              <span className="font-['Inter'] text-sm font-medium text-gray-700">Book Your Visit</span>
            </div>

            <h2 className="font-['Playfair_Display'] font-bold text-4xl sm:text-5xl lg:text-6xl mb-6">
              <span className="bg-gradient-to-r from-[#C75C6F] to-[#D4A373] bg-clip-text text-transparent">
                Schedule Your
              </span>
              <br />
              <span className="text-gray-800">Beauty Experience</span>
            </h2>

            <p className="font-['Inter'] text-lg text-gray-600 mb-8">
              Reserve your spot at Nairobi's premier beauty destination. Our expert team is ready to pamper you with world-class treatments.
            </p>

            {/* Features */}
            <div className="space-y-4">
              {[
                'Flexible appointment times',
                'Expert beauty professionals',
                'Premium product selection',
                'Luxury salon environment',
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#E8A9A9] to-[#D4A373] flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="font-['Inter'] text-gray-700">{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* Decorative Calendar Illustration */}
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="mt-12 hidden lg:block"
            >
              <div className="w-48 h-48 rounded-3xl bg-gradient-to-br from-[#E8A9A9]/30 to-[#D4A373]/30 flex items-center justify-center backdrop-blur-sm">
                <CalendarIcon className="w-24 h-24 text-[#C75C6F]/50" />
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Booking Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white/90 backdrop-blur-xl rounded-[32px] p-8 shadow-2xl border border-white/50">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Full Name */}
                <div>
                  <Label htmlFor="name" className="font-['Inter'] text-gray-700 mb-2 block">
                    Full Name *
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your full name"
                    className="rounded-2xl border-gray-200 focus:border-[#C75C6F] focus:ring-[#C75C6F]/20"
                  />
                </div>

                {/* Email */}
                <div>
                  <Label htmlFor="email" className="font-['Inter'] text-gray-700 mb-2 block">
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your.email@example.com"
                    className="rounded-2xl border-gray-200 focus:border-[#C75C6F] focus:ring-[#C75C6F]/20"
                  />
                </div>

                {/* Phone */}
                <div>
                  <Label htmlFor="phone" className="font-['Inter'] text-gray-700 mb-2 block">
                    Phone Number *
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+254 700 000 000"
                    className="rounded-2xl border-gray-200 focus:border-[#C75C6F] focus:ring-[#C75C6F]/20"
                  />
                </div>

                {/* Service Selection */}
                <div>
                  <Label htmlFor="service" className="font-['Inter'] text-gray-700 mb-2 block">
                    Select Service *
                  </Label>
                  <Select
                    value={formData.service}
                    onValueChange={(value) => setFormData({ ...formData, service: value })}
                    required
                  >
                    <SelectTrigger className="rounded-2xl border-gray-200">
                      <SelectValue placeholder="Choose a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Signature Glow Facial">Signature Glow Facial - KSh 4,500</SelectItem>
                      <SelectItem value="Gel Manicure & Nail Art">Gel Manicure & Nail Art - KSh 3,000</SelectItem>
                      <SelectItem value="Luxury Hair Styling">Luxury Hair Styling - KSh 5,500</SelectItem>
                      <SelectItem value="Bridal Glam Package">Bridal Glam Package - KSh 12,000</SelectItem>
                      <SelectItem value="Custom Package">Custom Package</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Date Picker */}
                <div>
                  <Label className="font-['Inter'] text-gray-700 mb-2 block">
                    Preferred Date *
                  </Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full justify-start text-left font-normal rounded-2xl border-gray-200"
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, 'PPP') : <span>Pick a date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        disabled={(date) => date < new Date()}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                {/* Special Requests */}
                <div>
                  <Label htmlFor="requests" className="font-['Inter'] text-gray-700 mb-2 block">
                    Special Requests (Optional)
                  </Label>
                  <Textarea
                    id="requests"
                    value={formData.requests}
                    onChange={(e) => setFormData({ ...formData, requests: e.target.value })}
                    placeholder="Any specific requirements or preferences..."
                    className="rounded-2xl border-gray-200 focus:border-[#C75C6F] focus:ring-[#C75C6F]/20 min-h-24"
                  />
                </div>

                {/* Buttons */}
                <div className="flex gap-4">
                  <Button
                    type="submit"
                    className="flex-1 bg-gradient-to-r from-[#C75C6F] to-[#D4A373] hover:from-[#D4A373] hover:to-[#C75C6F] text-white rounded-full py-6 shadow-xl hover:shadow-2xl transition-all"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Confirm Booking
                  </Button>
                  <Button
                    type="button"
                    onClick={handleReset}
                    variant="outline"
                    className="rounded-full px-6 border-gray-200 hover:bg-gray-50"
                  >
                    <X className="w-4 h-4 mr-2" />
                    Cancel
                  </Button>
                </div>

                <p className="text-xs text-center text-gray-500 font-['Inter']">
                  * This will open WhatsApp to confirm your booking
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
