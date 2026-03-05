import { motion, AnimatePresence } from 'framer-motion';
import { MailOpen } from 'lucide-react';
import background from '/background.jpeg';

export default function OpeningModal({ isOpened, onOpen, groomName, brideName }) {
  return (
    <AnimatePresence>
      {!isOpened && (
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -1000 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-cover bg-center"
          style={{ backgroundImage: `url(${background})` }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40 backdrop-blur-xs"></div>

          {/* Content */}
          <div className="relative z-10 text-center px-4 flex flex-col items-center justify-center h-full  w-full">
            <motion.h4 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-Primary uppercase tracking-widest text-3xl md:text-5xl mb-16 font-serif font-bold"
            >
              The Wedding Of
            </motion.h4>
            
            <motion.h1 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="text-6xl md:text-8xl text-Background font-script mb-32 drop-shadow-lg"
            >
              {brideName} & {groomName}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="bg-black/40 backdrop-blur-sm md:max-w-sm rounded-2xl p-8 w-full border border-white/20"
            >
              <p className="text-sm text-Background mb-2 font-serif opacity-80">
                Kpd. Bpk/Ibu/Saudara/i
              </p>
              <h3 className="text-xl font-bold font-serif mb-6 text-Accent uppercase">
                Tamu Undangan
              </h3>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onOpen}
                className="mx-auto flex items-center gap-2 bg-Primary text-white py-3 px-8 rounded-full font-serif text-sm tracking-wide shadow-lg hover:shadow-Primary/50 transition-all"
              >
                <MailOpen size={20} />
                Buka Undangan
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
