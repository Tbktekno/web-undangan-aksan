import { motion } from 'framer-motion';

export default function Verse() {
  return (
    <section className="relative py-24 flex flex-col items-center justify-center px-6 text-center bg-background">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="max-w-2xl mx-auto space-y-8"
      >
        <div className="w-12 h-[1px] bg-white/20 mx-auto mb-8"></div>
        
        <p className="text-primary font-display text-lg md:text-xl italic leading-relaxed tracking-wide">
          "Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu
          isteri-isteri dari jenismu sendiri, supaya kamu cenderung dan merasa
          tenteram kepadanya."
        </p>
        
        <span className="text-secondary/60 font-sans uppercase tracking-[0.3em] text-[10px] block mt-8">
          QS. Ar-Rum: 21
        </span>

        <div className="w-12 h-[1px] bg-white/20 mx-auto mt-8"></div>
      </motion.div>
    </section>
  );
}
