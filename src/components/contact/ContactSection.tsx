import React from 'react';
import { motion } from 'framer-motion';
import { REVEAL_VIEWPORT } from '../common/Reveal';
import { useBooking } from '../../context/BookingContext';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Calendar, 
  MessageSquare,
  Navigation,
  ArrowRight
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const { openBooking } = useBooking();

  return (
    <section id="contatti" className="py-24 bg-pearl-100 relative overflow-hidden border-b border-neutral-200">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={REVEAL_VIEWPORT}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-14 space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-gold/40 text-gold text-xs uppercase tracking-[0.2em] font-bold shadow-2xs">
            <MapPin className="w-3.5 h-3.5" />
            <span>Contatti & Dove Siamo</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-neutral-950 tracking-tight">
            Vieni a Trovarci in Salone
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 font-light leading-relaxed max-w-2xl mx-auto">
            Siamo a tua disposizione a Montemiletto (AV) per appuntamenti, consulenze sposa e consigli personalizzati.
          </p>
        </motion.div>

        {/* Grid: Details on Left, Map on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Cards */}
          <div className="lg:col-span-6 space-y-4">
            
            {/* Address Card */}
            <div className="p-6 rounded-2xl bg-white border border-neutral-200 shadow-2xs flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-pearl-100 border border-gold/40 flex items-center justify-center text-gold flex-shrink-0 shadow-xs">
                <MapPin className="w-6 h-6" />
              </div>
              <div className="space-y-0.5">
                <span className="text-xs font-mono uppercase tracking-widest text-gold font-bold">Indirizzo</span>
                <h3 className="font-serif text-xl font-bold text-neutral-950">Via XXIV Maggio 13/14</h3>
                <p className="text-xs text-neutral-600">83038 Montemiletto (AV)</p>
              </div>
            </div>

            {/* Opening Hours Table Card */}
            <div className="p-6 rounded-2xl bg-white border border-neutral-200 shadow-2xs space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-pearl-100 border border-gold/40 flex items-center justify-center text-gold shadow-xs">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-gold font-bold">Orario di Lavoro</span>
                  <h4 className="font-serif text-lg font-bold text-neutral-950">Orari Salone</h4>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs border-t border-neutral-100 pt-3">
                <div className="space-y-1.5 text-neutral-600 font-medium">
                  <p>Lunedì:</p>
                  <p className="font-bold text-neutral-900">Martedì – Sabato:</p>
                  <p>Domenica:</p>
                </div>
                <div className="space-y-1.5 text-right font-mono">
                  <p className="text-red-500 font-semibold">Chiuso</p>
                  <p className="font-bold text-gold">8:30 – 19:00</p>
                  <p className="text-red-500 font-semibold">Chiuso</p>
                </div>
              </div>
            </div>

            {/* Phone Numbers */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <a
                href="tel:0825968391"
                className="p-5 rounded-2xl bg-white border border-neutral-200 hover:border-gold transition-all flex items-center gap-3.5 shadow-2xs group"
              >
                <div className="w-10 h-10 rounded-xl bg-pearl-100 border border-gold/30 flex items-center justify-center text-gold group-hover:scale-105 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-mono text-neutral-400 block font-semibold">Telefono Fisso</span>
                  <span className="text-sm font-bold text-neutral-900 group-hover:text-gold transition-colors">0825 968391</span>
                </div>
              </a>

              <a
                href="https://api.whatsapp.com/send?phone=390825968391"
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-2xl bg-white border border-neutral-200 hover:border-emerald-500 transition-all flex items-center gap-3.5 shadow-2xs group"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-300 flex items-center justify-center text-emerald-600 group-hover:scale-105 transition-transform">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-mono text-neutral-400 block font-semibold">WhatsApp & Mobile</span>
                  <span className="text-sm font-bold text-neutral-900 group-hover:text-emerald-600 transition-colors">377 0293092</span>
                </div>
              </a>
            </div>

            {/* Email Card */}
            <a
              href="mailto:mustohairdresser@gmail.com"
              className="p-5 rounded-2xl bg-white border border-neutral-200 hover:border-gold transition-all flex items-center gap-3.5 shadow-2xs group block"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-pearl-100 border border-gold/30 flex items-center justify-center text-gold group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-mono text-neutral-400 block font-semibold">Email</span>
                  <span className="text-sm font-bold text-neutral-900 group-hover:text-gold transition-colors">mustohairdresser@gmail.com</span>
                </div>
              </div>
            </a>

            {/* Booking Quick Action */}
            <div className="pt-1">
              <button
                onClick={() => openBooking()}
                className="w-full py-4 bg-neutral-950 hover:bg-gold text-white hover:text-neutral-950 font-bold text-xs uppercase tracking-widest rounded-md shadow-xs transition-colors flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4 text-gold group-hover:text-neutral-950" />
                <span>Prenota il Tuo Appuntamento Online</span>
              </button>
            </div>

          </div>

          {/* Right Column: Google Maps Embed (Esattamente come in tonymusto.it) */}
          <div className="lg:col-span-6 space-y-4">
            <div className="rounded-3xl overflow-hidden border border-neutral-200 shadow-luxury-card bg-white p-2">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <iframe
                  loading="lazy"
                  className="w-full h-full border-0"
                  src="https://maps.google.com/maps?q=tony%20musto%20montemiletto&t=m&z=17&output=embed&iwloc=near"
                  title="Posizione Tony Musto Parrucchieri Montemiletto"
                  aria-label="Posizione Tony Musto Parrucchieri Montemiletto"
                />
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-neutral-200 text-xs text-neutral-600 space-y-1">
              <strong className="text-neutral-900 font-serif block font-bold">Come Raggiungerci:</strong>
              <p className="font-light leading-relaxed">
                Il salone si trova in Via XXIV Maggio 13/14 nel centro di Montemiletto (AV), comodamente raggiungibile da Avellino Est e dalla SS7 Appia.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
