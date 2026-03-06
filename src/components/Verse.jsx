import { motion } from 'framer-motion';

export default function Verse() {
  return (
    <section className="relative h-[35vh] flex items-center justify-center px-6 text-center">
      <div className="relative z-10 w-full">
        <motion.p
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="text-white/90 font-serif italic max-w-xl mx-auto text-sm md:text-base leading-relaxed"
        >
          "Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu
          isteri-isteri dari jenismu sendiri, supaya kamu cenderung dan merasa
          tenteram kepadanya."
          <br/>
          <span className="italic opacity-70 block mt-4">(QS. Ar-Rum: 21)</span>
        </motion.p>
      </div>
    </section>
  );
}
