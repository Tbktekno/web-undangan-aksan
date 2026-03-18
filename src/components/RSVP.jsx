import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { useState } from 'react';

export default function RSVP({ whatsappNumber }) {
  const [formData, setFormData] = useState({
    name: '',
    attendance: 'Hadir',
    guests: '1',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `Halo, saya ${formData.name}.\nKonfirmasi Kehadiran: ${formData.attendance}\nJumlah Tamu: ${formData.guests}\nPesan/Doa: ${formData.message}`;
    const waUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(waUrl, '_blank');
  };

  return (
    <section className="py-32 bg-background relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.h4 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-primary font-display tracking-[0.3em] uppercase text-xs mb-4"
          >
            Reservation
          </motion.h4>
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-4xl md:text-6xl font-display text-primary uppercase tracking-widest mb-6"
          >
            RSVP
          </motion.h2>
          <p className="text-secondary font-sans leading-relaxed max-w-lg italic opacity-60">
            Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu.
          </p>
        </div>

        <motion.form 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto space-y-8 bg-surface/20 backdrop-blur-sm p-8 md:p-12 border border-white/5 rounded-sm shadow-2xl"
        >
          <div className="space-y-6">
            <div className="relative">
              <input 
                type="text" 
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                className="w-full bg-transparent border-b border-white/20 py-3 px-0 text-primary font-display tracking-widest focus:outline-none focus:border-primary transition-colors placeholder:text-white/20"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative">
                <select
                  name="attendance"
                  value={formData.attendance}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-white/20 py-3 px-0 text-primary font-display tracking-widest focus:outline-none focus:border-primary transition-colors cursor-pointer appearance-none uppercase text-xs"
                >
                  <option className="bg-background text-primary" value="Hadir">Will Attend</option>
                  <option className="bg-background text-primary" value="Tidak Hadir">Will Not Attend</option>
                </select>
              </div>
              <div className="relative">
                <select
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-white/20 py-3 px-0 text-primary font-display tracking-widest focus:outline-none focus:border-primary transition-colors cursor-pointer appearance-none uppercase text-xs"
                >
                  <option className="bg-background text-primary" value="1">1 Person</option>
                  <option className="bg-background text-primary" value="2">2 Persons</option>
                  <option className="bg-background text-primary" value="3+">More than 2</option>
                </select>
              </div>
            </div>

            <div className="relative">
              <textarea 
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                rows="4"
                placeholder="Wishes & Prayers"
                className="w-full bg-transparent border-b border-white/20 py-3 px-0 text-primary font-display tracking-widest focus:outline-none focus:border-primary transition-colors resize-none placeholder:text-white/20"
              ></textarea>
            </div>
          </div>

          <button 
            type="submit"
            className="w-full btn-outline flex justify-center items-center gap-3 py-4 mt-8 hover:bg-white/10"
          >
            <Send size={16} />
            Confirm via WhatsApp
          </button>
        </motion.form>
      </div>
    </section>
  );
}
