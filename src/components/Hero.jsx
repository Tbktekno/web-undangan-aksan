import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
export const heroImage = hero;
import hero from '/hero.jpeg';
import bismillah from '/bismillah2.webp';

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
    <section className="relative min-h-screen flex items-end justify-center">
      {/* Content */}
      <div className="relative z-10 text-left px-6 w-full py-10">

    {/* Title */}
    <motion.h4 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-white font-serif font-semibold tracking-[0.3em] mb-6 text-xs md:text-sm uppercase"
    >
      The Wedding Of
    </motion.h4>

    {/* Nama */}
    <motion.h1 
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      className="text-5xl md:text-8xl text-Primary font-script  flex gap-5 drop-shadow-2xl leading-tight"
    >
      {data.bride.name} <span className="text-white/70">&</span> {data.groom.name}
    </motion.h1>

    <motion.h2
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      className="text-sm md:text-8xl text-white font-serif flex gap-5"
    >
      {data.date2}
    </motion.h2>

    {/* Countdown */}
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="flex justify-start gap-4 md:gap-8"
    >
      {Object.keys(timeLeft).map((interval, index) => (
        <div key={index} className="flex mt-4 flex-col items-center">

          <div className="w-16 h-16 md:w-20 md:h-20 
          flex flex-col items-start justify-center">

            <span className="text-2xl md:text-4xl font-bold font-serif text-white">
              {timeLeft[interval] || '0'}
            </span>
            <span className="text-white/80 font-serif tracking-wider text-left text-xs uppercase mt-2">
            {interval}
          </span>
          </div>

          

        </div>
      ))}
    </motion.div>
  </div>
</section>
  );
}
