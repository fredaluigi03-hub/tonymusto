import React from 'react';
import { motion } from 'framer-motion';
import { REVEAL_VIEWPORT } from '../common/Reveal';
import { teamData } from '../../data/teamData';
import { useBooking } from '../../context/BookingContext';
import { Scissors, Calendar, Quote, Sparkles } from 'lucide-react';

export const TeamSection: React.FC = () => {
  const { openBooking } = useBooking();

  return (
    <section id="team" className="py-24 bg-white/91 relative overflow-hidden border-b border-neutral-200">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={REVEAL_VIEWPORT}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-14 space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pearl-100 border border-gold/40 text-gold text-xs uppercase tracking-[0.2em] font-bold shadow-2xs">
            <Scissors className="w-3.5 h-3.5" />
            <span>Gli Specialisti del Salone</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-neutral-950 tracking-tight">
            I Maestri dello Stile
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 font-light leading-relaxed max-w-2xl mx-auto">
            Guidati dall'esperienza e dalla passione di Tony Musto, un team dedicato alla valorizzazione della tua personalità.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamData.map((member, idx) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={REVEAL_VIEWPORT}
              transition={{ duration: 0.6, delay: idx * 0.12 }}
              whileHover={{ y: -6 }}
              className="rounded-3xl bg-pearl-100 border border-neutral-200 hover:border-gold/60 transition-all duration-300 shadow-luxury-white hover:shadow-luxury-card overflow-hidden flex flex-col justify-between"
            >
              <div>
                {/* Photo Frame */}
                <div className="relative aspect-[3/4] overflow-hidden bg-neutral-100">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-all duration-700"
                  />
                  
                  <div className="absolute bottom-3.5 left-3.5 right-3.5 flex items-center justify-between">
                    <span className="px-3.5 py-1 rounded-full bg-white/95 backdrop-blur-md border border-neutral-200 text-neutral-800 text-xs font-mono font-bold shadow-md">
                      {member.experience}
                    </span>
                  </div>
                </div>

                {/* Info & Quote */}
                <div className="p-6 space-y-3">
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-neutral-900">
                      {member.name}
                    </h3>
                    <p className="text-xs uppercase font-mono tracking-widest text-gold font-bold mt-0.5">
                      {member.role}
                    </p>
                  </div>

                  <p className="text-xs text-neutral-600 font-light leading-relaxed">
                    <strong className="text-neutral-900 block font-semibold mb-0.5">Specializzazione:</strong>
                    {member.specialty}
                  </p>

                  <div className="pt-3 border-t border-neutral-200 text-xs text-neutral-600 italic font-light relative pl-4">
                    <Quote className="w-3 h-3 text-gold absolute left-0 top-3.5" />
                    "{member.quote}"
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="p-6 pt-0">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => openBooking(undefined, member.id)}
                  className="w-full py-3 rounded-md bg-neutral-900 hover:bg-gold text-white hover:text-neutral-950 text-xs uppercase tracking-wider font-bold transition-colors flex items-center justify-center gap-2 shadow-xs"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Prenota con {member.name.split(' ')[0]}</span>
                </motion.button>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
