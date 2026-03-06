import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Gallery({ images }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const openLightbox = (imgSrc, index) => {
    setSelectedImage(imgSrc);
    setSelectedIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const nextImage = (e) => {
    e?.stopPropagation();
    const nextIdx = (selectedIndex + 1) % images.length;
    setSelectedIndex(nextIdx);
    setSelectedImage(images[nextIdx]);
  };

  const prevImage = (e) => {
    e?.stopPropagation();
    const prevIdx = (selectedIndex - 1 + images.length) % images.length;
    setSelectedIndex(prevIdx);
    setSelectedImage(images[prevIdx]);
  };

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
              onClick={() => openLightbox(imgSrc, index)}
            >
              <img 
                src={imgSrc} 
                alt={`Gallery ${index}`} 
                className="w-full object-cover transform transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <span className="text-white text-sm font-serif border border-white/50 px-4 py-2 rounded-full backdrop-blur-sm">Lihat Foto</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            className="fixed inset-0 z-[999] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
          >
            <motion.button 
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute top-6 right-6 text-white hover:text-Primary transition-colors z-[1000]"
              onClick={closeLightbox}
            >
              <X size={32} />
            </motion.button>

            <button 
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-Primary transition-colors z-[1000] bg-white/5 p-2 rounded-full"
              onClick={prevImage}
            >
              <ChevronLeft size={48} />
            </button>

            <button 
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-Primary transition-colors z-[1000] bg-white/5 p-2 rounded-full"
              onClick={nextImage}
            >
              <ChevronRight size={48} />
            </button>

            <motion.div
              key={selectedIndex}
              initial={{ opacity: 0, scale: 0.9, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.9, x: -20 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative max-w-5xl w-full flex items-center justify-center pointer-events-none"
            >
              <img 
                src={selectedImage} 
                alt="Selected" 
                className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl pointer-events-auto"
                onClick={(e) => e.stopPropagation()}
              />
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-white/70 font-serif text-sm">
                {selectedIndex + 1} / {images.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
