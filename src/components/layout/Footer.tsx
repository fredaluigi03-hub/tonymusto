import React, { useState } from 'react';
import { 
  Scissors, 
  Sparkles, 
  HeartHandshake, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ArrowUp,
  Check
} from 'lucide-react';

export const Footer: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setSubscribed(true);
    setTimeout(() => {
      setSubscribed(false);
      setNewsletterEmail('');
    }, 4000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white text-neutral-700 border-t border-neutral-200 pt-16 pb-12 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-14">
        
        {/* Multi-column Navigation & Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border border-gold/40 flex items-center justify-center bg-pearl-100 text-gold">
                <Scissors className="w-5 h-5 -rotate-45" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-bold tracking-wider text-neutral-950">TONY MUSTO</span>
                <span className="text-[10px] tracking-[0.2em] uppercase text-neutral-500 font-sans font-semibold">
                  Hair Stylist for Passion
                </span>
              </div>
            </div>

            <p className="text-xs text-neutral-600 font-light leading-relaxed">
              Fashion hair — acconciature e make-up for wedding a Montemiletto (AV). Prodotti professionali BEE IT, Bio Organic Curl Up e cura sartoriale del capello.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.instagram.com/tonymustoparrucchieri/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-neutral-200 bg-pearl-100 text-neutral-700 hover:text-gold hover:border-gold flex items-center justify-center transition-colors shadow-2xs"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.79-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://www.facebook.com/tony.mustoparrucchieri"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-neutral-200 bg-pearl-100 text-neutral-700 hover:text-gold hover:border-gold flex items-center justify-center transition-colors shadow-2xs"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.592 0 9 1.592 9 4.615V8z"/>
                </svg>
              </a>
              <a
                href="https://www.youtube.com/results?search_query=tony+musto+parrucchieri"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-neutral-200 bg-pearl-100 text-neutral-700 hover:text-gold hover:border-gold flex items-center justify-center transition-colors shadow-2xs"
                aria-label="YouTube"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif text-sm font-bold text-neutral-950 uppercase tracking-wider">Navigazione</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#servizi" className="text-neutral-600 hover:text-gold transition-colors">Hair Boutique</a></li>
              <li><a href="#shop" className="text-neutral-600 hover:text-gold transition-colors">Shop Online</a></li>
              <li><a href="#prima-dopo" className="text-neutral-600 hover:text-gold transition-colors">Prima & Dopo</a></li>
              <li><a href="#spose" className="text-neutral-600 hover:text-gold transition-colors">My Wedding Page</a></li>
              <li><a href="#awards" className="text-neutral-600 hover:text-gold transition-colors">Awards</a></li>
              <li><a href="#photos" className="text-neutral-600 hover:text-gold transition-colors">Photos</a></li>
              <li><a href="#contatti" className="text-neutral-600 hover:text-gold transition-colors">Contatti</a></li>
            </ul>
          </div>

          {/* Col 3: Real Product Categories */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-sm font-bold text-neutral-950 uppercase tracking-wider">Linee Cosmetiche</h4>
            <ul className="space-y-2 text-xs">
              <li className="flex items-center gap-1.5 text-gold font-medium">
                <HeartHandshake className="w-3.5 h-3.5 text-gold flex-shrink-0" />
                <span>BEE IT — Salva-Api Ecologico</span>
              </li>
              <li><span className="text-neutral-600">Bio Organic Curl Up (Ricci)</span></li>
              <li><span className="text-neutral-600">Argan Me Olio Puro</span></li>
              <li><span className="text-neutral-600">Don't Frizz Me & Style Me</span></li>
              <li><span className="text-neutral-600">Bagnodoccia Sensoriale</span></li>
            </ul>
          </div>

          {/* Col 4: Contacts & Salone */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-sm font-bold text-neutral-950 uppercase tracking-wider">Salone & Orari</h4>
            <div className="space-y-2 text-xs text-neutral-600">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                <span>Via XXIV Maggio 13/14, 83038 Montemiletto (AV)</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-gold flex-shrink-0" />
                <a href="tel:0825968391" className="hover:text-gold font-semibold">0825 968391</a> · <a href="tel:3770293092" className="hover:text-gold">377 0293092</a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-gold flex-shrink-0" />
                <a href="mailto:mustohairdresser@gmail.com" className="hover:text-gold">mustohairdresser@gmail.com</a>
              </p>
              <p className="flex items-start gap-2 pt-1">
                <Clock className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                <span>Mar–Sab: 8:30–19:00 (Lun & Dom Chiuso)</span>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Legal & Back to Top */}
        <div className="pt-8 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div>
            <p>© {new Date().getFullYear()} Tony Musto Parrucchieri. Tutti i diritti riservati.</p>
          </div>

          <div className="flex items-center gap-6">
            <span>P.IVA 02996910649</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-neutral-700 hover:text-gold font-bold transition-colors"
            >
              <span>Torna su</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
