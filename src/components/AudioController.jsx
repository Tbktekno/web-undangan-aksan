import { useState, useRef, useEffect } from 'react';
import { PlayCircle, PauseCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function AudioController({ musicUrl, isOpened }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (isOpened && audioRef.current) {
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch((e) => console.log("Audio autoplay prevented", e));
    }
  }, [isOpened]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <audio ref={audioRef} src={musicUrl} loop />
      
      {isOpened && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2, duration: 0.5 }}
          onClick={togglePlay}
          className="fixed bottom-6 right-6 z-40 bg-white/10 backdrop-blur-xl text-white p-3 rounded-full shadow-2xl hover:bg-white/20 transition-all border border-white/20"
        >
          {isPlaying ? (
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
            >
              <PauseCircle size={24} strokeWidth={1} />
            </motion.div>
          ) : (
            <PlayCircle size={24} strokeWidth={1} />
          )}
        </motion.button>
      )}
    </>
  );
}
