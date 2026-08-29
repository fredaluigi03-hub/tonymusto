import React, { createContext, useContext, useState } from 'react';
import confetti from 'canvas-confetti';

export interface CareerRole {
  id: string;
  title: string;
  type: string;
  level: string;
  description: string;
  perks: string[];
}

export const careerRoles: CareerRole[] = [
  {
    id: 'hair-stylist',
    title: 'Hair Stylist',
    type: 'Full-time · Montemiletto (AV)',
    level: 'Junior o Senior',
    description:
      'Taglio, piega e styling accanto a Tony Musto, con formazione continua sulle tecniche sartoriali del salone.',
    perks: ['Formazione continua interna', 'Affiancamento con Tony Musto', 'Crescita su taglio e styling'],
  },
  {
    id: 'colorista',
    title: 'Colorista & Armocromia',
    type: 'Full-time · Montemiletto (AV)',
    level: 'Esperienza gradita',
    description:
      'Diagnosi del colore, schiariture progressive e consulenza armocromatica su prodotti professionali.',
    perks: ['Corsi colore certificati', 'Prodotti professionali', 'Clientela fidelizzata'],
  },
  {
    id: 'assistente',
    title: 'Assistente di Salone',
    type: 'Full-time o Part-time',
    level: 'Nessuna esperienza richiesta',
    description:
      'Accoglienza cliente, shampoo, supporto tecnico e preparazione dei trattamenti. Ti formiamo noi da zero.',
    perks: ['Percorso formativo da zero', 'Ambiente giovane', 'Possibilità di crescita interna'],
  },
  {
    id: 'apprendista',
    title: 'Apprendista / Stage',
    type: 'Apprendistato · Scuola o prima esperienza',
    level: 'Entry level',
    description:
      'Un percorso strutturato per chi inizia adesso: teoria, pratica in salone e affiancamento quotidiano.',
    perks: ['Tutor dedicato', 'Contratto di apprendistato', 'Certificazione delle competenze'],
  },
  {
    id: 'candidatura-libera',
    title: 'Candidatura Libera',
    type: 'Sempre aperta',
    level: 'Qualsiasi profilo',
    description:
      'Non trovi il tuo ruolo? Raccontaci chi sei: cerchiamo persone ambiziose e di talento, anche senza esperienza.',
    perks: ['Valutiamo ogni profilo', 'Risposta entro 7 giorni', 'Colloquio conoscitivo in salone'],
  },
];

export interface ApplicationState {
  role: CareerRole | null;
  fullName: string;
  email: string;
  phone: string;
  experience: string;
  availability: string;
  portfolio: string;
  message: string;
  cvFileName: string;
  privacyAccepted: boolean;
  applicationCode?: string;
}

const initialApplication: ApplicationState = {
  role: null,
  fullName: '',
  email: '',
  phone: '',
  experience: 'Nessuna esperienza — voglio imparare',
  availability: 'Full-time',
  portfolio: '',
  message: '',
  cvFileName: '',
  privacyAccepted: false,
};

interface CareersContextType {
  isModalOpen: boolean;
  currentStep: number;
  application: ApplicationState;
  openCareers: (roleId?: string) => void;
  closeCareers: () => void;
  setStep: (step: number) => void;
  selectRole: (role: CareerRole) => void;
  updateApplication: (patch: Partial<ApplicationState>) => void;
  submitApplication: () => void;
  resetApplication: () => void;
}

const CareersContext = createContext<CareersContextType | undefined>(undefined);

export const CareersProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [application, setApplication] = useState<ApplicationState>(initialApplication);

  const openCareers = (roleId?: string) => {
    const role = roleId ? careerRoles.find(r => r.id === roleId) ?? null : application.role;
    setApplication(prev => ({ ...prev, role }));
    setCurrentStep(role ? 2 : 1);
    setIsModalOpen(true);
  };

  const closeCareers = () => setIsModalOpen(false);

  const selectRole = (role: CareerRole) => {
    setApplication(prev => ({ ...prev, role }));
    setCurrentStep(2);
  };

  const updateApplication = (patch: Partial<ApplicationState>) =>
    setApplication(prev => ({ ...prev, ...patch }));

  const submitApplication = () => {
    const code = `TM-JOB-${Math.floor(1000 + Math.random() * 9000)}`;
    setApplication(prev => ({ ...prev, applicationCode: code }));
    setCurrentStep(4);
    try {
      confetti({
        particleCount: 80,
        spread: 65,
        origin: { y: 0.6 },
        colors: ['#D4AF37', '#FFF2B2', '#B8BCC2', '#EAD7A1'],
      });
    } catch {
      // confetti is decorative only
    }
  };

  const resetApplication = () => {
    setApplication(initialApplication);
    setCurrentStep(1);
  };

  return (
    <CareersContext.Provider
      value={{
        isModalOpen,
        currentStep,
        application,
        openCareers,
        closeCareers,
        setStep: setCurrentStep,
        selectRole,
        updateApplication,
        submitApplication,
        resetApplication,
      }}
    >
      {children}
    </CareersContext.Provider>
  );
};

export const useCareers = () => {
  const ctx = useContext(CareersContext);
  if (!ctx) throw new Error('useCareers must be used within a CareersProvider');
  return ctx;
};
