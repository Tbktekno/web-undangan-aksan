import { motion, AnimatePresence } from 'framer-motion';
import { MailOpen } from 'lucide-react';
import background from '/background.jpeg';

export default function OpeningModal({ isOpened, onOpen, groomName, brideName }) {
  // Parse dynamic guest name from URL
  const queryParams = new URLSearchParams(window.location.search);
  const guestName = queryParams.get('to') || 'Tamu Undangan';

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
          <div className="absolute inset-0 bg-black/50"></div>

          {/* Content */}
          <div className="relative z-10 text-center flex flex-col items-center justify-between h-full w-full py-20 px-6">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-col items-center gap-4"
            >
              <h4 className="text-white/80 font-script text-3xl mb-2">The Wedding Of</h4>
              <h1 className="text-4xl md:text-7xl text-white font-display tracking-widest uppercase border-y border-white/20 py-4 px-8">
                {brideName} <span className="text-2xl lowercase font-script mx-2">&</span> {groomName}
              </h1>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="flex flex-col items-center w-full max-w-sm mx-auto"
            >
              <p className="text-sm text-secondary mb-2 font-sans opacity-80 uppercase tracking-widest">
                Kpd. Bpk/Ibu/Saudara/i
              </p>
              <h3 className="text-2xl font-display font-bold mb-8 text-primary uppercase tracking-wider">
                {guestName}
              </h3>

              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
                whileTap={{ scale: 0.95 }}
                onClick={onOpen}
                className="btn-outline flex items-center gap-3"
              >
                <MailOpen size={18} />
                Buka Undangan
              </motion.button>
              
              <p className="text-[10px] text-secondary mt-6 font-sans opacity-60 italic whitespace-nowrap">
                *Mohon Maaf Bila Ada Kesalahan Penulisan Nama/Gelar
              </p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
