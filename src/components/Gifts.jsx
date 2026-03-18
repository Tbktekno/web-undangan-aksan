import { motion } from 'framer-motion';
import { Copy, CreditCard } from 'lucide-react';

export default function Gifts() {
  const accounts = [
    {
      bank: "Bank BCA",
      number: "1234567890",
      owner: "Aksan Jaya"
    },
    {
      bank: "Bank Mandiri",
      number: "0987654321",
      owner: "Tia Rahmawati"
    }
  ];

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert('Account number copied to clipboard!');
  };

  return (
    <section className="py-32 bg-surface/5 relative overflow-hidden flex flex-col items-center">
      <div className="max-w-4xl mx-auto px-6 text-center z-10 w-full">
        <motion.h4 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-primary font-display tracking-[0.3em] uppercase text-xs mb-4"
        >
          Wedding Gift
        </motion.h4>
        <motion.h2 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="text-4xl md:text-6xl font-display text-primary uppercase tracking-widest mb-12"
        >
          Tanda Kasih
        </motion.h2>
        
        <p className="text-secondary/60 font-sans italic max-w-lg mx-auto mb-16 text-sm">
          Doa restu Anda merupakan hadiah terindah bagi kami. Namun, jika Anda ingin memberikan tanda kasih, Anda dapat menyampaikannya melalui:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {accounts.map((acc, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-surface/20 backdrop-blur-sm border border-white/5 p-8 rounded-sm relative flex flex-col items-center group"
            >
              <CreditCard className="text-primary/40 mb-6" size={32} strokeWidth={1} />
              <h3 className="text-primary font-display text-xl uppercase tracking-widest mb-2">{acc.bank}</h3>
              <p className="text-primary font-display text-2xl tracking-[0.1em] mb-1">{acc.number}</p>
              <p className="text-secondary/60 text-xs uppercase tracking-widest mb-8">{acc.owner}</p>
              
              <button 
                onClick={() => copyToClipboard(acc.number)}
                className="btn-outline flex items-center gap-2 group-hover:bg-white/10 transition-colors py-3 text-[10px]"
              >
                <Copy size={14} />
                Copy Number
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
