import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Reveal } from '../components/common/Reveal';
import { useBooking } from '../context/BookingContext';
import { useCareers } from '../context/CareersContext';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Calendar,
  MessageSquare,
  Navigation,
  ArrowLeft,
  Send,
  Check,
  Sparkles,
  Car,
  ParkingCircle,
} from 'lucide-react';

const hours = [
  { day: 'Lunedì', value: 'Chiuso', closed: true },
  { day: 'Martedì', value: '8:30 – 19:00' },
  { day: 'Mercoledì', value: '8:30 – 19:00' },
  { day: 'Giovedì', value: '8:30 – 19:00' },
  { day: 'Venerdì', value: '8:30 – 19:00' },
  { day: 'Sabato', value: '8:30 – 19:00' },
  { day: 'Domenica', value: 'Chiuso', closed: true },
];

/** lucide-react no longer ships brand marks, so these are inline. */
const brandIcon = (path: string) => {
  const Icon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d={path} />
    </svg>
  );
  return Icon;
};

const Instagram = brandIcon(
  'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.79-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z'
);
const Facebook = brandIcon(
  'M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.592 0 9 1.592 9 4.615V8z'
);
const Youtube = brandIcon(
  'M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z'
);

const socials = [
  {
    name: 'Instagram',
    Icon: Instagram,
    href: 'https://www.instagram.com/tonymustoparrucchieri/',
    handle: '@tonymustoparrucchieri',
  },
  {
    name: 'Facebook',
    Icon: Facebook,
    href: 'https://www.facebook.com/tony.mustoparrucchieri',
    handle: 'Tony Musto Parrucchieri',
  },
  {
    name: 'WhatsApp',
    Icon: MessageSquare,
    href: 'https://api.whatsapp.com/send?phone=393770293092',
    handle: '377 0293092',
  },
  {
    name: 'YouTube',
    Icon: Youtube,
    href: 'https://www.youtube.com/results?search_query=tony+musto+parrucchieri',
    handle: 'Tony Musto',
  },
];

const emailOk = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());

export const ContactPage: React.FC = () => {
  const { openBooking } = useBooking();
  const { openCareers } = useCareers();
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: 'Informazioni generali', message: '' });
  const [sent, setSent] = useState(false);
  const [touched, setTouched] = useState(false);

  const valid = form.name.trim().length >= 2 && emailOk(form.email) && form.message.trim().length >= 10;

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setTouched(true);
    if (!valid) return;
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setForm({ name: '', email: '', phone: '', subject: 'Informazioni generali', message: '' });
      setTouched(false);
    }, 5000);
  };

  const field =
    'w-full px-4 py-3 rounded-md bg-white border border-neutral-300 text-base sm:text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-gold focus:ring-2 focus:ring-gold/25 outline-none transition-all';

  return (
    <main className="bg-pearl-100">
      {/* Page hero */}
      <section className="relative overflow-hidden isolate py-20 sm:py-28 border-b border-neutral-200">
        <img
          src="https://tonymusto.it/wp-content/uploads/2022/06/IMG_6247-scaled.jpeg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 -z-10 w-full h-full object-cover blur-[5px] scale-110"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white/92 via-pearl-100/90 to-pearl-100" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <Reveal>
            <a
              href="#"
              className="inline-flex items-center gap-2 py-2 text-xs uppercase tracking-widest font-bold text-neutral-600 hover:text-gold transition-colors mb-2"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Torna alla Home
            </a>
            <div className="flex justify-center">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-gold/40 text-gold text-xs uppercase tracking-[0.2em] font-bold shadow-2xs">
                <MapPin className="w-3.5 h-3.5" />
                <span>Contatti</span>
              </div>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-neutral-950 tracking-tight mt-4">
              Parliamo dei tuoi capelli
            </h1>
            <p className="text-sm sm:text-base text-neutral-700 font-light leading-relaxed max-w-2xl mx-auto mt-3">
              Siamo a Montemiletto (AV). Chiamaci, scrivici su WhatsApp o passa a trovarci in salone per
              una consulenza personalizzata.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => openBooking()}
              className="px-7 py-4 bg-neutral-950 hover:bg-gold text-white hover:text-neutral-950 font-bold text-xs uppercase tracking-widest rounded-md shadow-md transition-colors flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Prenota Online</span>
            </motion.button>
            <a
              href="https://api.whatsapp.com/send?phone=393770293092"
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-4 rounded-md bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-widest transition-colors flex items-center gap-2 shadow-md"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Scrivici su WhatsApp</span>
            </a>
          </Reveal>
        </div>
      </section>

      {/* Quick contact tiles */}
      <section className="py-16 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            {
              Icon: MapPin,
              label: 'Indirizzo',
              value: 'Via XXIV Maggio 13/14',
              sub: '83038 Montemiletto (AV)',
              href: 'https://maps.google.com/?q=Via+XXIV+Maggio+13,+83038+Montemiletto+AV',
            },
            { Icon: Phone, label: 'Telefono Fisso', value: '0825 968391', sub: 'Salone', href: 'tel:0825968391' },
            { Icon: MessageSquare, label: 'Mobile & WhatsApp', value: '377 0293092', sub: 'Risposta rapida', href: 'tel:3770293092' },
            {
              Icon: Mail,
              label: 'Email',
              value: 'mustohairdresser',
              sub: '@gmail.com',
              href: 'mailto:mustohairdresser@gmail.com',
            },
          ].map((c, i) => (
            <motion.a
              key={c.label}
              href={c.href}
              target={c.href.startsWith('http') ? '_blank' : undefined}
              rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="group p-6 rounded-2xl bg-white border border-neutral-200 hover:border-gold shadow-luxury-white hover:shadow-luxury-card transition-colors space-y-3"
            >
              <div className="w-12 h-12 rounded-xl bg-pearl-100 border border-gold/40 flex items-center justify-center text-gold group-hover:scale-110 transition-transform">
                <c.Icon className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-gold font-bold block">
                  {c.label}
                </span>
                <p className="font-serif text-lg font-bold text-neutral-950 group-hover:text-gold transition-colors break-words">
                  {c.value}
                </p>
                <p className="text-xs text-neutral-500">{c.sub}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      {/* Hours + form */}
      <section className="py-16 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Hours */}
          <Reveal direction="right" className="lg:col-span-5 space-y-5">
            <div className="p-7 rounded-3xl bg-white border border-neutral-200 shadow-luxury-white">
              <div className="flex items-center gap-3 pb-4 border-b border-neutral-200">
                <div className="w-11 h-11 rounded-xl bg-pearl-100 border border-gold/40 flex items-center justify-center text-gold">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-gold font-bold">
                    Orario di Lavoro
                  </span>
                  <h2 className="font-serif text-xl font-bold text-neutral-950">Orari del Salone</h2>
                </div>
              </div>

              <ul className="divide-y divide-neutral-100">
                {hours.map((h, i) => (
                  <motion.li
                    key={h.day}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-center justify-between py-3 text-sm"
                  >
                    <span className={h.closed ? 'text-neutral-400' : 'text-neutral-800 font-medium'}>
                      {h.day}
                    </span>
                    <span
                      className={`font-mono text-xs font-bold ${h.closed ? 'text-red-500' : 'text-gold'}`}
                    >
                      {h.value}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Getting here */}
            <div className="p-7 rounded-3xl bg-white border border-neutral-200 shadow-luxury-white space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-pearl-100 border border-gold/40 flex items-center justify-center text-gold">
                  <Navigation className="w-5 h-5" />
                </div>
                <h2 className="font-serif text-xl font-bold text-neutral-950">Come Raggiungerci</h2>
              </div>
              <div className="space-y-3 text-xs text-neutral-600">
                <p className="flex items-start gap-2.5">
                  <Car className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                  <span>
                    In auto: uscita <strong className="text-neutral-900">Avellino Est</strong>, poi SS7
                    Appia in direzione Montemiletto. Il salone è nel centro del paese.
                  </span>
                </p>
                <p className="flex items-start gap-2.5">
                  <ParkingCircle className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                  <span>Parcheggio disponibile nelle vicinanze di Via XXIV Maggio.</span>
                </p>
              </div>
              <a
                href="https://maps.google.com/?q=Via+XXIV+Maggio+13,+83038+Montemiletto+AV"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-neutral-950 hover:bg-gold text-white hover:text-neutral-950 text-xs uppercase font-bold tracking-wider transition-colors"
              >
                <Navigation className="w-4 h-4" />
                <span>Apri in Google Maps</span>
              </a>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal direction="left" className="lg:col-span-7">
            <form
              onSubmit={submit}
              className="p-7 sm:p-9 rounded-3xl bg-white border border-neutral-200 shadow-luxury-card space-y-5"
            >
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-gold font-bold">
                  Scrivici
                </span>
                <h2 className="font-serif text-2xl font-bold text-neutral-950 mt-1">
                  Inviaci un messaggio
                </h2>
                <p className="text-xs text-neutral-500 mt-1">
                  Ti rispondiamo entro 24 ore nei giorni di apertura.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <label className="space-y-1.5">
                  <span className="text-xs font-bold uppercase tracking-wider text-neutral-700">Nome *</span>
                  <input
                    className={field}
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    placeholder="Il tuo nome"
                    autoComplete="name"
                  />
                </label>

                <label className="space-y-1.5">
                  <span className="text-xs font-bold uppercase tracking-wider text-neutral-700">Email *</span>
                  <input
                    type="email"
                    className={field}
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                    placeholder="nome@email.it"
                    autoComplete="email"
                  />
                  {touched && !emailOk(form.email) && (
                    <span className="text-[11px] text-red-500">Inserisci un&apos;email valida.</span>
                  )}
                </label>

                <label className="space-y-1.5">
                  <span className="text-xs font-bold uppercase tracking-wider text-neutral-700">
                    Cellulare
                  </span>
                  <input
                    type="tel"
                    className={field}
                    value={form.phone}
                    onChange={e => setForm({ ...form, phone: e.target.value })}
                    placeholder="377 0000000"
                    autoComplete="tel"
                  />
                </label>

                <label className="space-y-1.5">
                  <span className="text-xs font-bold uppercase tracking-wider text-neutral-700">
                    Motivo del contatto
                  </span>
                  <select
                    className={field}
                    value={form.subject}
                    onChange={e => setForm({ ...form, subject: e.target.value })}
                  >
                    <option>Informazioni generali</option>
                    <option>Prenotazione appuntamento</option>
                    <option>Consulenza sposa / Wedding</option>
                    <option>Ordine prodotti online</option>
                    <option>Lavora con noi</option>
                  </select>
                </label>

                <label className="space-y-1.5 sm:col-span-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-neutral-700">
                    Messaggio *
                  </span>
                  <textarea
                    rows={5}
                    className={`${field} resize-none`}
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    placeholder="Raccontaci come possiamo aiutarti…"
                  />
                </label>
              </div>

              <motion.button
                whileHover={{ scale: valid ? 1.02 : 1 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className={`w-full py-4 rounded-md text-xs uppercase font-bold tracking-widest transition-colors flex items-center justify-center gap-2 ${
                  sent
                    ? 'bg-emerald-600 text-white'
                    : valid
                    ? 'bg-neutral-950 hover:bg-gold text-white hover:text-neutral-950'
                    : 'bg-neutral-200 text-neutral-400'
                }`}
              >
                {sent ? (
                  <>
                    <Check className="w-4 h-4 stroke-[3]" /> Messaggio inviato — ti ricontattiamo presto!
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" /> Invia Messaggio
                  </>
                )}
              </motion.button>

              <p className="text-[11px] text-neutral-400 text-center">
                Inviando accetti il trattamento dei dati ai sensi del Reg. UE 2016/679 (GDPR).
              </p>
            </form>
          </Reveal>
        </div>
      </section>

      {/* Map */}
      <section className="py-16 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal direction="scale">
            <div className="rounded-3xl overflow-hidden border border-neutral-200 shadow-luxury-card bg-white p-2">
              <div className="aspect-[16/9] rounded-2xl overflow-hidden">
                <iframe
                  loading="lazy"
                  className="w-full h-full border-0"
                  src="https://maps.google.com/maps?q=tony%20musto%20montemiletto&t=m&z=17&output=embed&iwloc=near"
                  title="Posizione Tony Musto Parrucchieri Montemiletto"
                  aria-label="Posizione Tony Musto Parrucchieri Montemiletto"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Socials + careers CTA */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <Reveal className="text-center space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-gold font-bold">
              Seguici su
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-neutral-950">
              Restiamo in contatto
            </h2>
          </Reveal>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {socials.map((s, i) => (
              <motion.a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                whileHover={{ y: -6 }}
                className="group p-6 rounded-2xl bg-white border border-neutral-200 hover:border-gold shadow-luxury-white hover:shadow-luxury-card transition-colors flex flex-col items-center text-center gap-3"
              >
                <div className="w-12 h-12 rounded-full bg-pearl-100 border border-gold/40 flex items-center justify-center text-gold group-hover:scale-110 transition-transform">
                  <s.Icon className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-serif font-bold text-neutral-950 group-hover:text-gold transition-colors">
                    {s.name}
                  </p>
                  <p className="text-[11px] text-neutral-500 break-all">{s.handle}</p>
                </div>
              </motion.a>
            ))}
          </div>

          <Reveal direction="scale">
            <div className="p-8 rounded-3xl bg-neutral-950 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-lg">
              <div className="text-center sm:text-left">
                <span className="text-xs font-mono uppercase tracking-widest text-gold font-bold">
                  Join Our Team Now
                </span>
                <h3 className="font-serif text-2xl font-bold text-white mt-1">
                  Vuoi lavorare con noi?
                </h3>
                <p className="text-sm text-neutral-300 font-light mt-1">
                  Cerchiamo persone ambiziose e di talento. L&apos;esperienza non è richiesta.
                </p>
              </div>
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => openCareers()}
                className="shrink-0 px-7 py-4 rounded-md bg-gold hover:bg-gold-bright text-neutral-950 font-bold text-xs uppercase tracking-widest transition-colors flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>Candidati Ora</span>
              </motion.button>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
};
