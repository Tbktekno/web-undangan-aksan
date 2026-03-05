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
    <section className="py-24 bg-Background px-4 relative">
      {/* Decorative floral element top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-Primary/10 w-48 h-48 rounded-full blur-3xl"></div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div>
          <motion.h2 
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            className="text-4xl md:text-5xl font-script text-Primary mb-6"
          >
            Bersama Menuju Ridho-Nya
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            className="text-Text/70 font-serif mb-16 text-sm md:text-base max-w-2xl mx-auto leading-relaxed"
          >
            Maha Suci Allah yang telah menciptakan makhluk-Nya berpasang-pasangan. Ya Allah, perkenankanlah kami merangkai kasih sayang yang Kau ciptakan di antara putra-putri kami:
          </motion.p>
        </div>

        <div className="flex flex-col items-center justify-center gap-12 md:gap-16 w-full">
          {/* Bride */}
          <motion.div variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }} className="flex flex-row-reverse items-center justify-center gap-6 md:gap-12 w-full text-right">
            <div className="relative w-48 h-72 md:w-48 md:h-72 flex-shrink-0">
              <div className="absolute inset-0 bg-Accent rounded-t-full rounded-b-md transform rotate-6"></div>
              <img 
                src={bride.photo} 
                alt={bride.name} 
                className="absolute inset-0 w-full h-full object-cover rounded-t-full rounded-b-md border-4 border-white shadow-xl"
              />
            </div>
            <div className="flex flex-col items-end flex-1 max-w-sm">
              <h3 className="text-2xl md:text-3xl font-serif text-Text font-bold mb-2">{bride.fullName}</h3>
              <p className="text-xs md:text-sm font-serif text-Text/60 mb-1">Putri dari:</p>
              <p className="text-sm md:text-base font-serif font-medium text-Text mb-4">
                {bride.father} <br/><span className="text-xs">&</span><br/> {bride.mother}
              </p>
              <a href={`https://instagram.com/${bride.instagram.substring(1)}`} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-Primary hover:text-Text transition-colors justify-end">
                <span className="font-sans text-xs md:text-sm">{bride.instagram}</span>
                <Instagram size={18} />
              </a>
            </div>
          </motion.div>
          

          <motion.div 
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            className="text-5xl font-script text-Primary py-4"
          >
            &
          </motion.div>

          {/* Groom */}
          <motion.div variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }} className="flex flex-row items-center justify-center gap-6 md:gap-12 w-full text-left">
            <div className="relative w-48 h-72 md:w-48 md:h-72 flex-shrink-0">
              <div className="absolute inset-0 bg-Primary rounded-t-full rounded-b-md transform -rotate-6"></div>
              <img 
                src={groom.photo} 
                alt={groom.name} 
                className="absolute inset-0 w-full h-full object-cover rounded-t-full rounded-b-md border-4 border-white shadow-xl"
              />
            </div>
            <div className="flex flex-col items-start flex-1 max-w-sm">
              <h3 className="text-2xl md:text-3xl font-serif text-Text font-bold mb-2">{groom.fullName}</h3>
              <p className="text-xs md:text-sm font-serif text-Text/60 mb-1">Putra dari:</p>
              <p className="text-sm md:text-base font-serif font-medium text-Text mb-4">
                {groom.father} <br/><span className="text-xs">&</span><br/> {groom.mother}
              </p>
              <a href={`https://instagram.com/${groom.instagram.substring(1)}`} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-Primary hover:text-Text transition-colors">
                <Instagram size={18} />
                <span className="font-sans text-xs md:text-sm">{groom.instagram}</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
