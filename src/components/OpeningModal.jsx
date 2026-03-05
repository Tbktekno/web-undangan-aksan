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
          <div className="relative z-10 text-center flex flex-col items-center justify-center h-full  w-full">
            <div className="h-1/2 flex flex-col items-center pt-14 justify-start">
            <motion.h4 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-Primary uppercase tracking-widest text-xl md:text-5xl mb-6 font-serif font-bold"
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
            </div>
            <div className="h-1/2 w-full flex items-end">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="bg-gradient-to-t from-black via-black/70 to-transparent pt-24 pb-8 px-8 w-full md:max-w-md mx-auto"
            >
              <p className="text-xs text-Background mb-2 font-serif opacity-80">
                Kpd. Bpk/Ibu/Saudara/i
              </p>
              <h3 className="text-lg font-bold font-serif mb-6 text-Accent uppercase">
                Tamu Undangan
              </h3>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onOpen}
                className="mx-auto flex items-center gap-2 bg-Primary text-white py-2 px-6 rounded-full font-serif text-xs tracking-wide shadow-lg hover:shadow-Primary/50 transition-all"
              >
                <MailOpen size={16} />
                Buka Undangan
              </motion.button>
              <p className="text-[8px] text-Background mt-2 font-serif opacity-80">*Mohon Maaf Bila Ada Kesalahan Penulisan Nama / Gelar</p>
            </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
