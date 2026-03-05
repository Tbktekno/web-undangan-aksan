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
          className="fixed bottom-6 right-6 z-40 bg-Primary/80 backdrop-blur-md text-white p-3 rounded-full shadow-xl hover:bg-Primary transition-colors border border-white/20"
        >
          {isPlaying ? (
            <PauseCircle size={28} className="animate-pulse" />
          ) : (
            <PlayCircle size={28} />
          )}
        </motion.button>
      )}
    </>
  );
}
