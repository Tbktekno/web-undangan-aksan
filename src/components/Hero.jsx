import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
export const heroImage = hero;
import hero from '/hero.jpeg';
import bismillah from '/bismillah2.webp';

export default function Hero({ data }) {
  const calculateTimeLeft = () => {
    const difference = +new Date(data.date) - +new Date();
    let timeLeft = { hari: 0, jam: 0, menit: 0, detik: 0 };

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
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, [data.date]);

  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-6 pt-20 pb-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col items-center gap-6"
      >
        <span className="text-white/60 font-script text-2xl">Save the Date</span>
        
        <div className="flex flex-col items-center gap-2">
          <h4 className="text-secondary font-sans tracking-[0.4em] text-xs uppercase opacity-80">The Wedding of</h4>
          <h1 className="text-5xl md:text-8xl text-primary font-display uppercase tracking-widest leading-tight">
            {data.bride.name} <span className="text-2xl lowercase font-script mx-2">&</span> {data.groom.name}
          </h1>
        </div>

        <div className="w-12 h-[1px] bg-white/30 my-4"></div>

        <p className="text-primary font-display tracking-[0.2em] text-lg uppercase">
          {data.date2}
        </p>

        {/* Countdown */}
        <div className="flex gap-6 md:gap-12 mt-10">
          {Object.entries(timeLeft).map(([label, value], index) => (
            <motion.div 
              key={label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center"
            >
              <span className="text-3xl md:text-5xl font-display text-primary">{String(value).padStart(2, '0')}</span>
              <span className="text-[10px] text-secondary font-sans uppercase tracking-widest mt-1 opacity-60">{label}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
