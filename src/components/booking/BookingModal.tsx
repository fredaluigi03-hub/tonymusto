import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useBooking } from '../../context/BookingContext';
import { StepService } from './StepService';
import { StepStylist } from './StepStylist';
import { StepDateTime } from './StepDateTime';
import { StepDetails } from './StepDetails';
import { StepConfirmation } from './StepConfirmation';
import { X, Scissors } from 'lucide-react';

export const BookingModal: React.FC = () => {
  const { isModalOpen, closeBooking, currentStep, setStep } = useBooking();

  if (!isModalOpen) return null;

  const stepTitles = ['Servizio', 'Stylist', 'Data & Ora', 'I Tuoi Dati'];

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
          
          {/* Top Header with Progress Bar */}
          <div className="p-6 border-b border-neutral-200 bg-pearl-100 flex items-center justify-between">
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-2xl border border-gold/40 flex items-center justify-center bg-white text-gold shadow-xs">
                <Scissors className="w-5 h-5 -rotate-45" />
              </div>
              <div>
                <h2 className="font-serif text-xl sm:text-2xl text-neutral-950 font-bold tracking-wide">
                  Prenota il tuo Appuntamento
                </h2>
                <p className="text-xs text-neutral-500 uppercase tracking-wider font-semibold">
                  Tony Musto · Montemiletto (AV)
                </p>
              </div>
            </div>

            <button
              onClick={closeBooking}
              className="p-2 text-neutral-500 hover:text-neutral-900 hover:bg-neutral-200/60 rounded-full transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Step Progress Line (Steps 1-4) */}
          {currentStep <= 4 && (
            <div className="bg-white px-6 py-3.5 border-b border-neutral-100">
              <div className="flex items-center justify-between max-w-xl mx-auto">
                {stepTitles.map((title, index) => {
                  const stepNum = index + 1;
                  const isPassed = currentStep > stepNum;
                  const isCurrent = currentStep === stepNum;
                  return (
                    <div key={title} className="flex items-center gap-2">
                      <button
                        type="button"
                        disabled={!isPassed && !isCurrent}
                        onClick={() => isPassed && setStep(stepNum)}
                        className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-mono transition-all font-bold ${
                          isCurrent
                            ? 'bg-neutral-950 text-white shadow-md scale-105'
                            : isPassed
                            ? 'bg-gold/20 text-gold border border-gold/50 hover:bg-gold/30'
                            : 'bg-pearl-200 text-neutral-400'
                        }`}
                      >
                        {stepNum}
                      </button>
                      <span className={`text-xs hidden sm:inline ${isCurrent ? 'text-neutral-950 font-bold' : isPassed ? 'text-neutral-700' : 'text-neutral-400'}`}>
                        {title}
                      </span>
                      {index < stepTitles.length - 1 && (
                        <div className={`w-8 sm:w-16 h-0.5 mx-1.5 ${isPassed ? 'bg-gold' : 'bg-neutral-200'}`} />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Body Content with AnimatePresence step transition */}
          <div className="p-6 sm:p-8 bg-white">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ duration: 0.25 }}
              >
                {currentStep === 1 && <StepService />}
                {currentStep === 2 && <StepStylist />}
                {currentStep === 3 && <StepDateTime />}
                {currentStep === 4 && <StepDetails />}
                {currentStep === 5 && <StepConfirmation />}
              </motion.div>
            </AnimatePresence>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
