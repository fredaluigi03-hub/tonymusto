import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCareers, careerRoles, CareerRole } from '../../context/CareersContext';
import {
  X,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  Upload,
  FileText,
  CheckCircle2,
  Mail,
  Phone,
  Copy,
  Check,
} from 'lucide-react';

const stepTitles = ['Posizione', 'I Tuoi Dati', 'Motivazione & CV'];

const emailOk = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());
const phoneOk = (v: string) => v.replace(/\D/g, '').length >= 8;

const inputBase =
  'w-full px-4 py-3 rounded-md bg-white border border-neutral-300 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-gold focus:ring-2 focus:ring-gold/25 outline-none transition-all';

const RoleCard: React.FC<{ role: CareerRole; onPick: () => void }> = ({ role, onPick }) => (
  <motion.button
    type="button"
    onClick={onPick}
    whileHover={{ y: -3, scale: 1.01 }}
    whileTap={{ scale: 0.99 }}
    className="text-left p-5 rounded-2xl bg-white border border-neutral-200 hover:border-gold hover:shadow-luxury-card transition-all group"
  >
    <div className="flex items-start justify-between gap-3">
      <div>
        <h4 className="font-serif text-lg font-bold text-neutral-950 group-hover:text-gold transition-colors">
          {role.title}
        </h4>
        <p className="text-[11px] font-mono uppercase tracking-wider text-gold font-bold mt-0.5">
          {role.type}
        </p>
      </div>
      <ArrowRight className="w-4 h-4 text-neutral-300 group-hover:text-gold group-hover:translate-x-1 transition-all shrink-0 mt-1" />
    </div>
    <p className="text-xs text-neutral-600 font-light leading-relaxed mt-2">{role.description}</p>
    <span className="inline-block mt-3 px-2.5 py-1 rounded-full bg-pearl-100 border border-neutral-200 text-[10px] font-semibold uppercase tracking-wider text-neutral-600">
      {role.level}
    </span>
  </motion.button>
);

export const CareersModal: React.FC = () => {
  const {
    isModalOpen,
    closeCareers,
    currentStep,
    setStep,
    application,
    selectRole,
    updateApplication,
    submitApplication,
    resetApplication,
  } = useCareers();

  const fileRef = useRef<HTMLInputElement>(null);
  const [touched, setTouched] = useState(false);
  const [copied, setCopied] = useState(false);

  if (!isModalOpen) return null;

  const detailsValid =
    application.fullName.trim().length >= 2 &&
    emailOk(application.email) &&
    phoneOk(application.phone);

  const finalValid = application.privacyAccepted && application.message.trim().length >= 10;

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    if (!f) return;
    if (f.size > 5 * 1024 * 1024) {
      updateApplication({ cvFileName: '' });
      alert('Il CV deve essere inferiore a 5 MB.');
      return;
    }
    updateApplication({ cvFileName: f.name });
  };

  const copyCode = async () => {
    if (!application.applicationCode) return;
    try {
      await navigator.clipboard.writeText(application.applicationCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard may be blocked; the code is visible on screen anyway
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 15 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-3xl bg-white border border-neutral-200 rounded-3xl shadow-2xl overflow-hidden text-neutral-900 my-6"
        >
          {/* Header */}
          <div className="p-6 border-b border-neutral-200 bg-pearl-100 flex items-center justify-between">
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-2xl border border-gold/40 flex items-center justify-center bg-white text-gold shadow-xs">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h2 className="font-serif text-xl sm:text-2xl text-neutral-950 font-bold tracking-wide">
                  Candidati: Join Our Team
                </h2>
                <p className="text-xs text-neutral-500 uppercase tracking-wider font-semibold">
                  Tony Musto · Montemiletto (AV)
                </p>
              </div>
            </div>
            <button
              onClick={closeCareers}
              aria-label="Chiudi"
              className="p-2 text-neutral-500 hover:text-neutral-900 hover:bg-neutral-200/60 rounded-full transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Progress */}
          {currentStep <= 3 && (
            <div className="bg-white px-6 py-3.5 border-b border-neutral-100">
              <div className="flex items-center justify-between max-w-lg mx-auto">
                {stepTitles.map((title, index) => {
                  const stepNum = index + 1;
                  const isPassed = currentStep > stepNum;
                  const isCurrent = currentStep === stepNum;
                  return (
                    <div key={title} className="flex items-center gap-2">
                      <button
                        type="button"
                        disabled={!isPassed}
                        onClick={() => isPassed && setStep(stepNum)}
                        className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-mono font-bold transition-all ${
                          isCurrent
                            ? 'bg-neutral-950 text-white shadow-md scale-105'
                            : isPassed
                            ? 'bg-gold/20 text-gold border border-gold/50 hover:bg-gold/30'
                            : 'bg-pearl-200 text-neutral-400'
                        }`}
                      >
                        {stepNum}
                      </button>
                      <span
                        className={`text-xs hidden sm:inline ${
                          isCurrent ? 'text-neutral-950 font-bold' : isPassed ? 'text-neutral-700' : 'text-neutral-400'
                        }`}
                      >
                        {title}
                      </span>
                      {index < stepTitles.length - 1 && (
                        <div className={`w-8 sm:w-20 h-0.5 mx-1.5 ${isPassed ? 'bg-gold' : 'bg-neutral-200'}`} />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Body */}
          <div className="p-6 sm:p-8 bg-white">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ duration: 0.25 }}
              >
                {/* STEP 1 — role */}
                {currentStep === 1 && (
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-serif text-xl font-bold text-neutral-950">
                        Per quale posizione ti candidi?
                      </h3>
                      <p className="text-xs text-neutral-500 mt-1">
                        Nel nostro salone la tua esperienza è la nostra priorità — anche se parti da zero.
                      </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {careerRoles.map(role => (
                        <RoleCard key={role.id} role={role} onPick={() => selectRole(role)} />
                      ))}
                    </div>
                  </div>
                )}

                {/* STEP 2 — details */}
                {currentStep === 2 && (
                  <div className="space-y-5">
                    <div>
                      <h3 className="font-serif text-xl font-bold text-neutral-950">I tuoi dati</h3>
                      <p className="text-xs text-neutral-500 mt-1">
                        Posizione scelta:{' '}
                        <span className="text-gold font-bold">{application.role?.title ?? '—'}</span>
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <label className="space-y-1.5 sm:col-span-2">
                        <span className="text-xs font-bold uppercase tracking-wider text-neutral-700">
                          Nome e Cognome *
                        </span>
                        <input
                          className={inputBase}
                          value={application.fullName}
                          onChange={e => updateApplication({ fullName: e.target.value })}
                          placeholder="Es. Maria Rossi"
                          autoComplete="name"
                        />
                      </label>

                      <label className="space-y-1.5">
                        <span className="text-xs font-bold uppercase tracking-wider text-neutral-700">
                          Email *
                        </span>
                        <input
                          type="email"
                          className={inputBase}
                          value={application.email}
                          onChange={e => updateApplication({ email: e.target.value })}
                          placeholder="nome@email.it"
                          autoComplete="email"
                        />
                        {touched && !emailOk(application.email) && (
                          <span className="text-[11px] text-red-500">Inserisci un&apos;email valida.</span>
                        )}
                      </label>

                      <label className="space-y-1.5">
                        <span className="text-xs font-bold uppercase tracking-wider text-neutral-700">
                          Cellulare *
                        </span>
                        <input
                          type="tel"
                          className={inputBase}
                          value={application.phone}
                          onChange={e => updateApplication({ phone: e.target.value })}
                          placeholder="377 0000000"
                          autoComplete="tel"
                        />
                        {touched && !phoneOk(application.phone) && (
                          <span className="text-[11px] text-red-500">Inserisci un numero valido.</span>
                        )}
                      </label>

                      <label className="space-y-1.5">
                        <span className="text-xs font-bold uppercase tracking-wider text-neutral-700">
                          Esperienza
                        </span>
                        <select
                          className={inputBase}
                          value={application.experience}
                          onChange={e => updateApplication({ experience: e.target.value })}
                        >
                          <option>Nessuna esperienza — voglio imparare</option>
                          <option>Meno di 1 anno</option>
                          <option>1 – 3 anni</option>
                          <option>3 – 6 anni</option>
                          <option>Più di 6 anni</option>
                        </select>
                      </label>

                      <label className="space-y-1.5">
                        <span className="text-xs font-bold uppercase tracking-wider text-neutral-700">
                          Disponibilità
                        </span>
                        <select
                          className={inputBase}
                          value={application.availability}
                          onChange={e => updateApplication({ availability: e.target.value })}
                        >
                          <option>Full-time</option>
                          <option>Part-time</option>
                          <option>Weekend</option>
                          <option>Stage / Apprendistato</option>
                        </select>
                      </label>

                      <label className="space-y-1.5 sm:col-span-2">
                        <span className="text-xs font-bold uppercase tracking-wider text-neutral-700">
                          Instagram o portfolio (facoltativo)
                        </span>
                        <input
                          className={inputBase}
                          value={application.portfolio}
                          onChange={e => updateApplication({ portfolio: e.target.value })}
                          placeholder="@iltuoprofilo"
                        />
                      </label>
                    </div>

                    <div className="flex items-center justify-between gap-3 pt-2">
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="px-5 py-3 rounded-md border border-neutral-300 text-neutral-700 hover:text-gold hover:border-gold text-xs uppercase font-bold tracking-wider transition-colors flex items-center gap-2"
                      >
                        <ArrowLeft className="w-3.5 h-3.5" /> Indietro
                      </button>
                      <motion.button
                        whileHover={{ scale: detailsValid ? 1.02 : 1 }}
                        whileTap={{ scale: 0.98 }}
                        type="button"
                        onClick={() => {
                          setTouched(true);
                          if (detailsValid) {
                            setTouched(false);
                            setStep(3);
                          }
                        }}
                        className={`px-7 py-3 rounded-md text-xs uppercase font-bold tracking-wider transition-colors flex items-center gap-2 ${
                          detailsValid
                            ? 'bg-neutral-950 hover:bg-gold text-white hover:text-neutral-950'
                            : 'bg-neutral-200 text-neutral-400 cursor-not-allowed'
                        }`}
                      >
                        Continua <ArrowRight className="w-3.5 h-3.5" />
                      </motion.button>
                    </div>
                  </div>
                )}

                {/* STEP 3 — motivation + CV */}
                {currentStep === 3 && (
                  <div className="space-y-5">
                    <div>
                      <h3 className="font-serif text-xl font-bold text-neutral-950">
                        Raccontaci chi sei
                      </h3>
                      <p className="text-xs text-neutral-500 mt-1">
                        Le persone rappresentano l&apos;identità di questo brand: due righe sincere valgono
                        più di un curriculum perfetto.
                      </p>
                    </div>

                    <label className="space-y-1.5 block">
                      <span className="text-xs font-bold uppercase tracking-wider text-neutral-700">
                        Messaggio / Motivazione *
                      </span>
                      <textarea
                        rows={5}
                        className={`${inputBase} resize-none`}
                        value={application.message}
                        onChange={e => updateApplication({ message: e.target.value })}
                        placeholder="Perché vorresti lavorare da Tony Musto? Cosa ti appassiona di questo mestiere?"
                      />
                      <span className="text-[11px] text-neutral-400">
                        {application.message.trim().length}/10 caratteri minimi
                      </span>
                    </label>

                    {/* CV upload */}
                    <div className="space-y-1.5">
                      <span className="text-xs font-bold uppercase tracking-wider text-neutral-700">
                        Curriculum (facoltativo · PDF o DOC, max 5MB)
                      </span>
                      <input
                        ref={fileRef}
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={handleFile}
                        className="hidden"
                      />
                      <button
                        type="button"
                        onClick={() => fileRef.current?.click()}
                        className="w-full p-5 rounded-2xl border-2 border-dashed border-neutral-300 hover:border-gold bg-pearl-100/60 hover:bg-pearl-100 transition-colors flex items-center justify-center gap-3 text-sm text-neutral-600 hover:text-gold"
                      >
                        {application.cvFileName ? (
                          <>
                            <FileText className="w-5 h-5 text-gold" />
                            <span className="font-semibold text-neutral-900">{application.cvFileName}</span>
                            <span className="text-[11px] text-neutral-400">(clicca per cambiare)</span>
                          </>
                        ) : (
                          <>
                            <Upload className="w-5 h-5" />
                            <span>Carica il tuo CV</span>
                          </>
                        )}
                      </button>
                    </div>

                    <label className="flex items-start gap-3 text-xs text-neutral-600 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={application.privacyAccepted}
                        onChange={e => updateApplication({ privacyAccepted: e.target.checked })}
                        className="mt-0.5 w-4 h-4 accent-[#B8860B]"
                      />
                      <span>
                        Acconsento al trattamento dei miei dati personali per finalità di selezione, ai
                        sensi del Reg. UE 2016/679 (GDPR). *
                      </span>
                    </label>

                    <div className="flex items-center justify-between gap-3 pt-2">
                      <button
                        type="button"
                        onClick={() => setStep(2)}
                        className="px-5 py-3 rounded-md border border-neutral-300 text-neutral-700 hover:text-gold hover:border-gold text-xs uppercase font-bold tracking-wider transition-colors flex items-center gap-2"
                      >
                        <ArrowLeft className="w-3.5 h-3.5" /> Indietro
                      </button>
                      <motion.button
                        whileHover={{ scale: finalValid ? 1.02 : 1 }}
                        whileTap={{ scale: 0.98 }}
                        type="button"
                        disabled={!finalValid}
                        onClick={submitApplication}
                        className={`px-7 py-3 rounded-md text-xs uppercase font-bold tracking-wider transition-colors flex items-center gap-2 ${
                          finalValid
                            ? 'bg-neutral-950 hover:bg-gold text-white hover:text-neutral-950'
                            : 'bg-neutral-200 text-neutral-400 cursor-not-allowed'
                        }`}
                      >
                        Invia Candidatura <Sparkles className="w-3.5 h-3.5" />
                      </motion.button>
                    </div>
                  </div>
                )}

                {/* STEP 4 — confirmation */}
                {currentStep === 4 && (
                  <div className="text-center space-y-5 py-4">
                    <motion.div
                      initial={{ scale: 0, rotate: -30 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ type: 'spring', stiffness: 200, damping: 14 }}
                      className="w-20 h-20 mx-auto rounded-full bg-gold/15 border-2 border-gold flex items-center justify-center text-gold"
                    >
                      <CheckCircle2 className="w-10 h-10" />
                    </motion.div>

                    <div>
                      <h3 className="font-serif text-2xl font-bold text-neutral-950">
                        Candidatura inviata, {application.fullName.split(' ')[0]}!
                      </h3>
                      <p className="text-sm text-neutral-600 font-light mt-2 max-w-md mx-auto">
                        Grazie per aver scelto di far parte del team. Ti ricontattiamo entro 7 giorni per
                        fissare un colloquio conoscitivo in salone.
                      </p>
                    </div>

                    <div className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-pearl-100 border border-gold/40">
                      <div className="text-left">
                        <span className="block text-[10px] uppercase tracking-widest text-neutral-500 font-bold">
                          Codice candidatura
                        </span>
                        <span className="font-mono text-lg font-bold text-gold">
                          {application.applicationCode}
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={copyCode}
                        aria-label="Copia codice"
                        className="p-2 rounded-full bg-white border border-neutral-200 text-neutral-600 hover:text-gold transition-colors"
                      >
                        {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                      </button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-left">
                      <div className="p-4 rounded-2xl bg-white border border-neutral-200 text-xs space-y-1">
                        <span className="text-[10px] uppercase tracking-widest text-gold font-bold">
                          Posizione
                        </span>
                        <p className="font-serif font-bold text-neutral-900 text-sm">
                          {application.role?.title}
                        </p>
                        <p className="text-neutral-500">{application.role?.type}</p>
                      </div>
                      <div className="p-4 rounded-2xl bg-white border border-neutral-200 text-xs space-y-1.5">
                        <span className="text-[10px] uppercase tracking-widest text-gold font-bold">
                          Hai fretta? Scrivici
                        </span>
                        <a
                          href="mailto:mustohairdresser@gmail.com"
                          className="flex items-center gap-2 text-neutral-700 hover:text-gold"
                        >
                          <Mail className="w-3.5 h-3.5 text-gold" /> mustohairdresser@gmail.com
                        </a>
                        <a
                          href="https://api.whatsapp.com/send?phone=393770293092"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-neutral-700 hover:text-gold"
                        >
                          <Phone className="w-3.5 h-3.5 text-gold" /> 377 0293092
                        </a>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-3">
                      <button
                        type="button"
                        onClick={() => {
                          resetApplication();
                          closeCareers();
                        }}
                        className="px-7 py-3 rounded-md bg-neutral-950 hover:bg-gold text-white hover:text-neutral-950 text-xs uppercase font-bold tracking-wider transition-colors"
                      >
                        Chiudi
                      </button>
                      <button
                        type="button"
                        onClick={resetApplication}
                        className="px-5 py-3 rounded-md border border-neutral-300 text-neutral-700 hover:text-gold hover:border-gold text-xs uppercase font-bold tracking-wider transition-colors"
                      >
                        Invia un&apos;altra candidatura
                      </button>
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
