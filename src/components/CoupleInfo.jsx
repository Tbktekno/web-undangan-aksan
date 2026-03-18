import { motion } from 'framer-motion';
import { Instagram } from 'lucide-react';

export default function CoupleInfo({ groom, bride }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <section className="bg-background relative">
      {/* Intro Section */}
      <div className="py-24 px-6 text-center max-w-4xl mx-auto">
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-script text-primary mb-8 italic">
            Assalamu’alaikum Warahmatullahi Wabarakatuh
          </h2>

          <p className="text-secondary font-sans text-sm md:text-base max-w-2xl mx-auto leading-relaxed opacity-80 uppercase tracking-widest">
            Maha Suci Allah yang telah menciptakan makhluk-Nya berpasang-pasangan. Ya Allah, perkenankanlah kami merangkai kasih sayang yang Kau ciptakan di antara putra-putri kami:
          </p>
        </motion.div>
      </div>

      {/* Bride Section */}
      <div
        className="relative h-screen bg-cover bg-center flex flex-col justify-end"
        style={{ backgroundImage: `url(${bride.photo})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/10 to-background/90"></div>
        <div className="relative z-10 p-8 md:p-20 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >

            <h4 className="text-lg md:text-2xl font-display text-primary/80 mb-2 uppercase tracking-widest">{bride.fullName}</h4>
            <div className="w-12 h-[1px] bg-white/20 mb-2 mx-auto md:mx-0"></div>
            <p className="text-xs md:text-sm font-sans text-secondary/60 uppercase tracking-widest mb-2">Putri dari:</p>
            <p className="text-sm md:text-lg font-display text-secondary mb-2 tracking-widest uppercase">
              {bride.father} & {bride.mother}
            </p>
            <a href={`https://instagram.com/${bride.instagram.substring(1)}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-primary/60 hover:text-primary transition-colors">
              <Instagram size={18} className='mt-1' />
              <span className="font-sans text-xs tracking-widest uppercase">{bride.instagram}</span>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Separator / Transition */}
      <div className="py-12 bg-background flex justify-center">
        <span className="text-5xl font-script text-primary/20 italic">&</span>
      </div>

      {/* Groom Section */}
      <div
        className="relative h-screen bg-cover bg-center flex flex-col justify-end"
        style={{ backgroundImage: `url(${groom.photo})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background/90"></div>
        <div className="relative z-10 p-8 md:p-20 text-center md:text-right">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >


            <h4 className="text-2xl md:text-2xl font-display text-primary/80 mb-2 uppercase tracking-widest">{groom.fullName}</h4>
            <div className="w-12 h-[1px] bg-white/20 mb-2 mx-auto md:ml-auto md:mr-0"></div>
            <p className="text-xs md:text-sm font-sans text-secondary/60 uppercase tracking-widest mb-2">Putra dari:</p>
            <p className="text-sm md:text-lg font-display text-secondary mb-3 tracking-widest uppercase">
              {groom.father} & {groom.mother}
            </p>
            <a href={`https://instagram.com/${groom.instagram.substring(1)}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-primary/60 hover:text-primary transition-colors">
              <Instagram size={18} className='mt-1' />
              <span className="font-sans text-xs tracking-widest uppercase">{groom.instagram}</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
