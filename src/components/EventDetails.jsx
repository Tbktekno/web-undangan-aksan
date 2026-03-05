import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock } from 'lucide-react';

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

      <div className="max-w-6xl mx-auto px-4 relative z-10 text-center">
          <div>
          <motion.h4 variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }} className="text-sm md:text-base text-Primary font-serif uppercase tracking-widest font-bold mb-4">
            Rangkaian Acara
          </motion.h4>
          <motion.h2 variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }} className="text-4xl md:text-5xl font-script text-Text mb-12">
            Momen Bahagia
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {events.map((event, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                className="bg-white/80 backdrop-blur-md p-8 md:p-12 rounded-3xl shadow-xl border border-white/40 flex flex-col items-center group hover:shadow-2xl transition-all"
              >
                <div className="w-16 h-16 bg-Primary/10 rounded-full flex items-center justify-center mb-6 text-Primary group-hover:scale-110 transition-transform">
                  <Calendar size={32} />
                </div>
                
                <h3 className="text-3xl font-serif text-Text font-bold mb-4">{event.title}</h3>
                <div className="w-12 h-1 bg-Primary mb-6"></div>

                <div className="space-y-4 text-center mb-8 flex-1">
                  <p className="flex items-center justify-center gap-2 font-serif text-Text/80">
                    <Calendar size={18} className="text-Primary" />
                    {event.date}
                  </p>
                  <p className="flex items-center justify-center gap-2 font-serif text-Text/80">
                    <Clock size={18} className="text-Primary" />
                    {event.time}
                  </p>
                  <p className="flex items-center justify-center gap-2 font-serif text-Text/80 mt-4">
                    <MapPin size={18} className="text-Primary flex-shrink-0" />
                    <span className="font-bold">{event.location}</span>
                  </p>
                  <p className="text-sm font-sans text-Text/60 mt-1 max-w-sm">
                    {event.address}
                  </p>
                </div>

                <a 
                  href={event.mapUrl} 
                  target="_blank" 
                  rel="noreferrer"
                  className="bg-Primary text-white py-3 px-8 rounded-full font-sans text-sm tracking-wide shadow-md hover:bg-opacity-90 transition-colors w-full md:w-auto text-center"
                >
                  Buka di Google Maps
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
