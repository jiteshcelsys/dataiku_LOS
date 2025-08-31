import React, { createContext, useContext, useState } from 'react';
import type { LoanApplication, LoanOffer } from '../types';

interface ApplicationContextType {
  applications: LoanApplication[];
  currentApplication: LoanApplication | null;
  offers: LoanOffer[];
  createApplication: (loanType: LoanApplication['loanType']) => void;
  updateApplication: (updates: Partial<LoanApplication>) => void;
  submitApplication: () => void;
  getApplicationById: (id: string) => LoanApplication | undefined;
}

const ApplicationContext = createContext<ApplicationContextType | undefined>(undefined);

export const useApplication = () => {
  const context = useContext(ApplicationContext);
  if (context === undefined) {
    throw new Error('useApplication must be used within an ApplicationProvider');
  }
  return context;
};

export const ApplicationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [applications, setApplications] = useState<LoanApplication[]>([]);
  const [currentApplication, setCurrentApplication] = useState<LoanApplication | null>(null);
  const [offers, setOffers] = useState<LoanOffer[]>([]);

  const createApplication = (loanType: LoanApplication['loanType']) => {
    const newApplication: LoanApplication = {
      id: Date.now().toString(),
      userId: '2', // Mock user ID
      loanType,
      status: 'draft',
      personalDetails: {
        firstName: '',
        lastName: '',
        middleName: '',
        dateOfBirth: '',
        ssn: ''
      },
      contactInfo: {
        email: '',
        phone: '',
        address: '',
        city: '',
        state: '',
        zipCode: ''
      },
      employmentInfo: {
        status: '',
        primaryIncomeSource: ''
      },
      documents: [],
      updatedAt: new Date()
    };
    
    setCurrentApplication(newApplication);
    setApplications(prev => [...prev, newApplication]);
  };

  const updateApplication = (updates: Partial<LoanApplication>) => {
    if (!currentApplication) return;
    
    const updatedApplication = {
      ...currentApplication,
      ...updates,
      updatedAt: new Date()
    };
    
    setCurrentApplication(updatedApplication);
    setApplications(prev => 
      prev.map(app => app.id === updatedApplication.id ? updatedApplication : app)
    );
  };

  const submitApplication = () => {
    if (!currentApplication) return;
    
    const submittedApplication = {
      ...currentApplication,
      status: 'submitted' as const,
      submittedAt: new Date(),
      updatedAt: new Date()
    };
    
    setCurrentApplication(submittedApplication);
    setApplications(prev => 
      prev.map(app => app.id === submittedApplication.id ? submittedApplication : app)
    );

    // Mock loan offer generation
    setTimeout(() => {
      if (submittedApplication.status === 'submitted') {
        const offer: LoanOffer = {
          id: Date.now().toString(),
          applicationId: submittedApplication.id,
          amount: 25000,
          interestRate: 4.5,
          termMonths: 60,
          monthlyPayment: 466.24,
          approved: true
        };
        setOffers(prev => [...prev, offer]);
        
        // Update application status
        updateApplication({ status: 'approved' });
      }
    }, 3000);
  };

  const getApplicationById = (id: string) => {
    return applications.find(app => app.id === id);
  };

  const value = {
    applications,
    currentApplication,
    offers,
    createApplication,
    updateApplication,
    submitApplication,
    getApplicationById
  };

  return (
    <ApplicationContext.Provider value={value}>
      {children}
    </ApplicationContext.Provider>
  );
};