import { motion } from 'framer-motion';

export default function Gallery({ images }) {
  return (
    <section className="py-24 bg-Background relative">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h4 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="text-sm md:text-base text-Primary font-serif uppercase tracking-widest font-bold mb-4"
          >
            Memori
          </motion.h4>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-script text-Text"
          >
            Galeri Momen
          </motion.h2>
        </div>

        <div className="columns-2 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((imgSrc, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 0.6 }}
              className="break-inside-avoid relative overflow-hidden rounded-xl shadow-lg group cursor-pointer"
            >
              <img 
                src={imgSrc} 
                alt={`Gallery ${index}`} 
                className="w-full object-cover transform transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
