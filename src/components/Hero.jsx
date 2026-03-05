import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import hero from '/hero.jpeg'

export default function Hero({ data }) {
  const calculateTimeLeft = () => {
    const difference = +new Date(data.date) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        hari: Math.floor(difference / (1000 * 60 * 60 * 24)),
        jam: Math.floor((difference / (1000 * 60 * 60)) % 24),
        menit: Math.floor((difference / 1000 / 60) % 60),
        detik: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${hero})` }}
    >
      <div className="absolute inset-0 bg-black/40"></div>
      
      <div className="relative text-center z-10 p-6">
        <motion.h4 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className="text-Primary font-serif font-bold tracking-[0.2em] mb-4 text-sm md:text-base uppercase"
        >
          Pernikahan Kami
        </motion.h4>
        
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-6xl md:text-9xl text-white font-script mb-6 drop-shadow-2xl"
        >
          {data.groom.name} & {data.bride.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-white/90 font-serif max-w-lg mx-auto mb-12 text-sm md:text-base leading-relaxed"
        >
          "Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu isteri-isteri dari jenismu sendiri, supaya kamu cenderung dan merasa tenteram kepadanya."
          <br/><span className="italic opacity-70 mt-2 block">(QS. Ar-Rum: 21)</span>
        </motion.p>

        {/* Countdown */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex justify-center gap-4 md:gap-8"
        >
          {Object.keys(timeLeft).map((interval, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-16 h-16 md:w-20 md:h-20 glass-panel flex items-center justify-center mb-2">
                <span className="text-2xl md:text-4xl font-serif text-Primary">
                  {timeLeft[interval] || '0'}
                </span>
              </div>
              <span className="text-white font-serif tracking-wider text-xs md:text-sm uppercase shadow-black drop-shadow-md">
                {interval}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
