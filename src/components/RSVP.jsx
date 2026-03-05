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
    <section className="py-24 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 relative z-10 flex flex-col md:flex-row gap-12 bg-Background/50 p-8 md:p-12 rounded-3xl shadow-xl border border-Background">
        
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2"
        >
          <h4 className="text-sm md:text-base text-Primary font-serif uppercase tracking-widest font-bold mb-4">
            Konfirmasi
          </h4>
          <h2 className="text-4xl md:text-5xl font-script text-Text mb-6">
            RSVP & Ucapan
          </h2>
          <p className="text-Text/70 font-serif leading-relaxed mb-8">
            Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu.
          </p>
        </motion.div>

        <motion.form 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          onSubmit={handleSubmit}
          className="md:w-1/2 space-y-4"
        >
          <div>
            <label className="block text-sm font-sans font-medium text-Text/80 mb-1">Nama Lengkap</label>
            <input 
              type="text" 
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-Primary/30 bg-white focus:outline-none focus:ring-2 focus:ring-Primary transition-all font-sans"
              placeholder="Contoh: John Doe"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-sans font-medium text-Text/80 mb-1">Kehadiran</label>
              <select
                name="attendance"
                value={formData.attendance}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-Primary/30 bg-white focus:outline-none focus:ring-2 focus:ring-Primary transition-all font-sans cursor-pointer"
              >
                <option value="Hadir">Hadir</option>
                <option value="Tidak Hadir">Tidak Hadir</option>
                <option value="Mungkin">Mungkin</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-sans font-medium text-Text/80 mb-1">Jumlah Tamu</label>
              <select
                name="guests"
                value={formData.guests}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-Primary/30 bg-white focus:outline-none focus:ring-2 focus:ring-Primary transition-all font-sans cursor-pointer"
              >
                <option value="1">1 Orang</option>
                <option value="2">2 Orang</option>
                <option value="3+">Lebih dari 2</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-sans font-medium text-Text/80 mb-1">Pesan & Doa Restu</label>
            <textarea 
              name="message"
              required
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="w-full px-4 py-3 rounded-lg border border-Primary/30 bg-white focus:outline-none focus:ring-2 focus:ring-Primary transition-all font-sans resize-none"
              placeholder="Berikan ucapan atau doa restu..."
            ></textarea>
          </div>

          <button 
            type="submit"
            className="w-full flex justify-center items-center gap-2 bg-Primary text-white py-4 rounded-lg font-sans font-semibold tracking-wide hover:bg-opacity-90 transition-colors shadow-lg hover:shadow-xl mt-4"
          >
            <Send size={20} />
            Kirim via WhatsApp
          </button>
        </motion.form>
      </div>
    </section>
  );
}
