import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin } from 'lucide-react';

const EventSlider = ({ images, direction = 'right' }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images]);

  const slideVariants = {
    enter: (direction) => ({
      x: direction === 'right' ? 300 : -300,
      opacity: 0,
      scale: 1.1,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction === 'right' ? -300 : 300,
      opacity: 0,
      scale: 1.1,
    }),
  };

  return (
    <div className="relative w-full h-80 overflow-hidden md:hidden">
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          key={index}
          src={images[index]}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.8 },
            scale: { duration: 0.8 }
          }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
    </div>
  );
};

export default function EventDetails({ events, gallery }) {
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <section className="py-32 bg-background relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.h4
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-primary font-display tracking-[0.3em] uppercase text-xs mb-4"
          >
            Save the Date
          </motion.h4>
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-4xl md:text-6xl font-display text-primary uppercase tracking-widest"
          >
            Events
          </motion.h2>
        </div>

        <div className="flex flex-col gap-12">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative bg-white rounded-lg overflow-hidden flex flex-col shadow-2xl"
            >
              {/* Image Slider at the very top for Mobile */}
              {gallery && (
                <div className="w-full h-72">
                  <EventSlider
                    images={gallery}
                    direction={index === 0 ? 'right' : 'left'}
                  />
                </div>
              )}

              <div className="relative p-8 md:p-12 md:pl-24 flex flex-col md:flex-row gap-8 md:gap-16 items-center">
                {/* Rotated Title on the side for Desktop */}
                <div className="hidden md:flex absolute left-0 top-0 bottom-0 w-12 bg-background/5 items-center justify-center">
                  <span className="rotate-[-90deg] whitespace-nowrap text-background/10 font-display tracking-[0.5em] uppercase text-sm">
                    {event.title}
                  </span>
                </div>

                {/* Date and Details Container */}
                <div className="w-full flex flex-row gap-2 mt-6 items-center">
                  <div className="w-1/4 self-stretch border-r border-gray-300">
                    <div className="flex items-center justify-center h-full">
                      <span className="text-background font-display text-4xl md:text-5xl leading-none rotate-[-90deg] whitespace-nowrap">{event.title}</span>
                    </div>
                  </div>

                  <div className="w-3/4 flex flex-col items-center justify-center py-6">
                    <div className="flex flex-col items-center justify-center mb-8">
                      <span className="text-background font-display text-7xl md:text-8xl leading-none">{event.date}</span>
                      <div className="w-10 h-[1px] bg-background/10 my-2"></div>
                      <div className="flex flex-col items-center uppercase tracking-[0.2em] text-gray-400 text-[10px] md:text-xs font-semibold">
                        <span>{event.month}</span>
                        <span>{event.year}</span>
                      </div>
                    </div>

                    <div className="space-y-6 text-center">
                      <div className="flex flex-col gap-1">
                        <span className="text-gray-400 text-[10px] uppercase tracking-[0.3em] font-bold">Time</span>
                        <p className="text-background font-display text-lg tracking-widest">{event.time}</p>
                      </div>

                      <div className="flex flex-col gap-1">
                        <span className="text-gray-400 text-[10px] uppercase tracking-[0.3em] font-bold">Location</span>
                        <p className="text-background font-display text-lg tracking-widest mb-1">{event.location}</p>
                        <p className="text-gray-500 font-sans text-[10px] md:text-xs max-w-[200px] leading-relaxed italic">{event.address}</p>
                      </div>

                      <a
                        href={event.mapUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 border border-background/20 px-6 py-2 rounded-full hover:bg-background/5 transition-all text-[10px] md:text-xs tracking-widest uppercase text-background group mt-4"
                      >
                        <MapPin size={12} className="group-hover:text-background transition-colors" />
                        View Map
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
