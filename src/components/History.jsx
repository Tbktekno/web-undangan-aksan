import { motion } from 'framer-motion';

export default function History({ history }) {
  return (
    <section className="py-32 bg-surface/5 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.h4 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-primary font-display tracking-[0.3em] uppercase text-xs mb-4"
          >
            Our Journey
          </motion.h4>
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-4xl md:text-6xl font-display text-primary uppercase tracking-widest"
          >
            Love Story
          </motion.h2>
        </div>

        {/* Timeline Items */}
        <div className="relative border-l border-white/10 ml-4 md:ml-0 md:flex md:flex-col md:items-center">
          {history.map((item, index) => (
            <div key={index} className="relative mb-24 last:mb-0 w-full md:w-1/2 md:even:self-end md:odd:self-start md:px-12">
              {/* Dot on timeline */}
              <div className="absolute -left-[21px] md:left-auto md:right-[-9px] md:even:left-[-9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-background animate-pulse"></div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className={`flex flex-col gap-6 pt-0 md:pt-4 ${index % 2 === 0 ? 'md:items-end md:text-right' : 'md:items-start md:text-left'}`}
              >
                <div className="overflow-hidden rounded-sm border border-white/5 group shadow-2xl w-full max-w-sm">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                </div>

                <div className="space-y-3">
                  <span className="text-secondary/60 font-display text-[10px] tracking-widest uppercase">{item.date}</span>
                  <h3 className="text-primary font-display text-2xl uppercase tracking-widest">{item.title}</h3>
                  <p className="text-secondary/60 font-sans text-sm leading-relaxed max-w-sm italic">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
