import React, { createContext, useContext, useState } from 'react';
import confetti from 'canvas-confetti';

import type { CareerRoleId, ExperienceLevel, Availability } from '../i18n/careers';

export interface ApplicationState {
  role: CareerRoleId | null;
  fullName: string;
  email: string;
  phone: string;
  experience: ExperienceLevel;
  availability: Availability;
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
  experience: 'none',
  availability: 'fullTime',
  portfolio: '',
  message: '',
  cvFileName: '',
  privacyAccepted: false,
};

interface CareersContextType {
  isModalOpen: boolean;
  currentStep: number;
  application: ApplicationState;
  openCareers: (roleId?: CareerRoleId) => void;
  closeCareers: () => void;
  setStep: (step: number) => void;
  selectRole: (role: CareerRoleId) => void;
  updateApplication: (patch: Partial<ApplicationState>) => void;
  submitApplication: () => void;
  resetApplication: () => void;
}

const CareersContext = createContext<CareersContextType | undefined>(undefined);

export const CareersProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [application, setApplication] = useState<ApplicationState>(initialApplication);

  const openCareers = (roleId?: CareerRoleId) => {
    const role = roleId ?? application.role;
    setApplication(prev => ({ ...prev, role }));
    setCurrentStep(role ? 2 : 1);
    setIsModalOpen(true);
  };

  const closeCareers = () => setIsModalOpen(false);

  const selectRole = (role: CareerRoleId) => {
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
