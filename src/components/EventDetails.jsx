import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Calendar, MapPin, Clock } from 'lucide-react';
import { weddingData } from '../config/data'; // Akses array gallery

export default function EventDetails({ events }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <section className="py-24 bg-Accent relative">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-Primary via-transparent to-transparent"></div>

      <div className="max-w-6xl mx-auto px-0 md:px-4 relative z-10 text-center">
          <div>
          <motion.h4 variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }} className="text-sm md:text-base text-Primary font-serif uppercase tracking-widest font-bold mb-4">
            Rangkaian Acara
          </motion.h4>
          <motion.h2 variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }} className="text-4xl md:text-5xl font-script text-Text mb-12">
            Momen Bahagia
          </motion.h2>

          <div className="grid grid-cols-1 px-4 md:grid-cols-2 gap-8">
            {events.map((event, index) => {
              // Kita buat internal component agar bisa punya state terpisah per EventBox (atau kita gunakan useEffect di parent)
              return (
                <EventBox key={index} event={event} index={index} itemVariants={itemVariants} gallery={weddingData.gallery} />
              )
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

// Internal Component untuk mengatur internal State Slider
function EventBox({ event, index, itemVariants, gallery }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Ambil secukupnya (misal 4 gambar pertama sebagai slideshow event)
  // Untuk variasi, kita bisa ambil slice berbeda-beda berdasarkan `index` section
  const sliderImages = gallery.slice(index * 2, (index * 2) + 4); 

  useEffect(() => {
    // Autoplay slider per 3 detik
    if (sliderImages.length > 0) {
      const timer = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === sliderImages.length - 1 ? 0 : prevIndex + 1
        );
      }, 3000);
      return () => clearInterval(timer);
    }
  }, [sliderImages]);

  return (
    <motion.div 
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      className="bg-white/80 rounded-lg flex flex-col gap-2 w-full backdrop-blur-md p-3 md:p-8 border border-white/40 transition-all overflow-hidden"
    >
      {/* Slider Image Area (Bagian Atas Card) */}
      <div className="relative w-full h-[400px] md:h-64 rounded-xl overflow-hidden shadow-inner group">
        <AnimatePresence mode="popLayout">
          {sliderImages.length > 0 && (
            <motion.img
              key={currentIndex}
              src={sliderImages[currentIndex]}
              initial={{ opacity: 0, x: index % 2 === 1 ? -100 : 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: index % 2 === 1 ? 100 : -100 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full object-cover"
              alt="Event Slide"
            />
          )}
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end justify-center p-4">
          <h3 className="text-3xl md:text-4xl font-serif text-white drop-shadow-lg font-bold">
            {event.title}
          </h3>
        </div>
      </div>

      {/* Rincian Event (Bagian Bawah Card) */}
      <div className="flex flex-row items-center w-full py-6">
        {/* Tanggal (Kiri) */}
        <div className="w-1/3 flex flex-col items-center justify-center p-4 border-r border-r-Primary">
          <span className="text-xl md:text-2xl font-bold font-serif text-Text">{event.day}</span>
          <span className="text-5xl md:text-6xl font-bold font-serif text-Primary my-2">{event.date}</span>
          <span className="text-sm md:text-base font-serif text-Text whitespace-nowrap">{event.month} {event.year}</span>
        </div>

        {/* Waktu & Lokasi (Kanan) */}
        <div className="space-y-4 text-center px-4 flex-1">
          <p className="flex items-center justify-center gap-2 font-serif text-Text/80 font-medium">
            <Clock size={16} className="text-Primary" />
            {event.time}
          </p>
          <div className="flex flex-col items-center justify-center gap-2 font-serif text-Text/80">
            <p className="flex items-center justify-center gap-2 mt-2">
              <MapPin size={16} className="text-Primary flex-shrink-0" />
              <span className="font-bold text-Text">{event.location}</span>
            </p>
            <p className="text-xs md:text-sm font-sans text-Text/60 mt-1 max-w-sm">
              {event.address}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
