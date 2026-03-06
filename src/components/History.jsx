import { motion } from 'framer-motion';

export default function History({ history }) {
  return (
    <section className="py-24 bg-Background overflow-hidden">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h4 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm md:text-base text-Primary font-serif uppercase tracking-widest font-bold mb-4"
          >
            Love Story
          </motion.h4>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-script text-Text"
          >
            Kisah Perjalanan Kami
          </motion.h2>
        </div>

        {/* Timeline Items */}
        <div className="relative">
          {history.map((item, index) => (
            <div key={index} className="relative mb-10 last:mb-0">
              <div className={`flex flex-col ${index % 2 === 0 ? 'items-end text-right' : 'items-start text-left'}`}>
                {/* Image Card */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, rotate: index % 2 === 0 ? -2 : 2 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="relative group w-full max-w-md aspect-[4/3] mb-10"
                >
                  <div className={`absolute inset-0 bg-Primary/10 rounded-2xl ${index % 2 === 0 ? 'rotate-3' : '-rotate-3'} scale-105 transition-transform group-hover:rotate-1`}></div>
                  <div className="relative h-full rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-110" />
                  </div>
                </motion.div>

                {/* Content */}
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="max-w-xl"
                >
                  <div className={`inline-block relative mb-6`}>
                    <span className="text-Primary font-bold font-serif tracking-widest text-sm uppercase">
                      {item.date}
                    </span>
                    <div className={`absolute -bottom-2 ${index % 2 === 0 ? 'right-0' : 'left-0'} w-full h-[1px] bg-Primary/30`}></div>
                  </div>
                  
                  <h3 className="text-2xl md:text-4xl font-script text-Primary mb-4">
                    {item.title}
                  </h3>
                  <div className="relative">
                    <p className="text-Text/80 font-serif leading-relaxed italic text-base md:text-lg">
                      "{item.description}"
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
