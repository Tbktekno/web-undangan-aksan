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
    <section className="py-32 bg-background relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h4 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-primary font-display tracking-[0.3em] uppercase text-xs mb-4"
          >
            Memories
          </motion.h4>
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-4xl md:text-6xl font-display text-primary uppercase tracking-widest"
          >
            Gallery
          </motion.h2>
        </div>

        <div className="columns-2 md:columns-3 gap-4 space-y-4">
          {images.map((imgSrc, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index % 3 * 0.1 }}
              className="break-inside-avoid relative overflow-hidden rounded-sm border border-white/5 group cursor-pointer"
              onClick={() => openLightbox(imgSrc, index)}
            >
              <img 
                src={imgSrc} 
                alt={`Gallery ${index}`} 
                className="w-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <span className="text-white text-[10px] uppercase tracking-widest border border-white/30 px-4 py-2 rounded-full backdrop-blur-sm">View</span>
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
            className="fixed inset-0 z-[999] bg-background/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-12"
          >
            
            <button 
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors z-[1000]"
              onClick={prevImage}
            >
              <ChevronLeft size={48} strokeWidth={1} />
            </button>

            <button 
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors z-[1000]"
              onClick={nextImage}
            >
              <ChevronRight size={48} strokeWidth={1} />
            </button>

            <button 
              className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors z-[1000]"
              onClick={closeLightbox}
            >
              <X size={32} strokeWidth={1} />
            </button>

            <motion.div
              key={selectedIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative max-w-5xl w-full flex items-center justify-center pointer-events-none"
            >
              <img 
                src={selectedImage} 
                alt="Selected" 
                className="max-w-full max-h-[85vh] object-contain shadow-2xl pointer-events-auto"
                onClick={(e) => e.stopPropagation()}
              />
              <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 text-secondary/60 font-display tracking-widest text-xs uppercase">
                {selectedIndex + 1} / {images.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
