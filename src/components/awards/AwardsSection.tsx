import React from 'react';
import { motion } from 'framer-motion';
import { awardsData, reviewsData } from '../../data/awardsData';
import { 
  Award, 
  Star, 
  Sparkles, 
  Trophy 
} from 'lucide-react';

export const AwardsSection: React.FC = () => {
  return (
    <section id="awards" className="py-24 bg-pearl-100 relative overflow-hidden border-b border-neutral-200">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Awards Header with Real Text from tonymusto.it */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-14 space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-gold/40 text-gold text-xs uppercase tracking-[0.2em] font-bold shadow-2xs">
            <Trophy className="w-3.5 h-3.5" />
            <span>Riconoscimenti Ufficiali</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-neutral-950 tracking-tight">
            Awards & Riconoscimenti
          </h2>
          <p className="text-sm sm:text-base text-neutral-700 font-light leading-relaxed max-w-2xl mx-auto italic border-l-2 border-gold pl-4 py-1 bg-white rounded-r-md">
            "La passione, il piacere e la professionalità mi è stata riconosciuta dalle più prestigiose organizzazioni di settore."
          </p>
        </motion.div>

        {/* Awards Badges 3 Column Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {awardsData.map((award, idx) => (
            <motion.div
              key={award.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.12 }}
              whileHover={{ y: -6 }}
              className="p-7 rounded-3xl bg-white border border-neutral-200 shadow-luxury-white hover:shadow-luxury-card transition-all duration-300 relative overflow-hidden text-center space-y-4"
            >
              <div className="w-16 h-16 mx-auto rounded-2xl bg-pearl-100 border border-gold/40 flex items-center justify-center text-gold shadow-xs">
                <Award className="w-8 h-8" />
              </div>

              <div>
                <span className="text-xs font-mono text-gold tracking-widest uppercase font-bold">
                  {award.year} · {award.organization}
                </span>
                <h3 className="font-serif text-xl font-bold text-neutral-950 mt-1">
                  {award.title}
                </h3>
              </div>

              <p className="text-xs text-neutral-600 font-light leading-relaxed">
                {award.description}
              </p>

              <div className="pt-2">
                <span className="inline-block px-3.5 py-1 rounded-full bg-pearl-100 border border-gold/30 text-gold text-[10px] uppercase tracking-wider font-bold">
                  {award.badge}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Client Testimonials Section */}
        <div className="pt-10 border-t border-neutral-200">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-10 space-y-1"
          >
            <span className="text-xs uppercase tracking-widest text-gold font-mono font-bold">Feedback e Opinioni</span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-neutral-950">
              Cosa Dicono le Nostre Clienti
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviewsData.map((rev, idx) => (
              <motion.div
                key={rev.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -4 }}
                className="p-6 rounded-3xl bg-white border border-neutral-200 hover:border-gold/50 transition-all flex flex-col justify-between space-y-4 shadow-2xs"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-gold">
                      {Array.from({ length: rev.rating }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                      ))}
                    </div>
                    <span className="text-[11px] font-mono text-neutral-400 font-medium">{rev.date}</span>
                  </div>

                  <p className="text-xs text-neutral-700 font-light italic leading-relaxed">
                    "{rev.content}"
                  </p>
                </div>

                <div className="pt-3 border-t border-neutral-100 flex items-center justify-between">
                  <div>
                    <h4 className="font-serif text-sm font-bold text-neutral-900">{rev.author}</h4>
                    <span className="text-[11px] text-neutral-500">{rev.roleOrCity}</span>
                  </div>
                  <span className="text-[10px] text-gold font-mono font-bold bg-pearl-100 px-2.5 py-1 rounded-full border border-gold/30">
                    {rev.service}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
