export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: 'user' | 'admin';
}

export interface LoanApplication {
  id: string;
  userId: string;
  loanType: 'personal' | 'auto' | 'mortgage' | 'business' | 'credit';
  status: 'draft' | 'submitted' | 'under-review' | 'approved' | 'rejected';
  personalDetails: {
    firstName: string;
    lastName: string;
    middleName?: string;
    dateOfBirth: string;
    ssn: string;
  };
  contactInfo: {
    email: string;
    phone: string;
    address: string;
    city: string;
    state: string;
    zipCode: string;
  };
  employmentInfo: {
    status: string;
    primaryIncomeSource: string;
    annualIncome?: number;
  };
  documents: UploadedDocument[];
  submittedAt?: Date;
  updatedAt: Date;
}

export interface UploadedDocument {
  id: string;
  name: string;
  type: string;
  size: number;
  uploadDate: Date;
  required: boolean;
}

export interface LoanOffer {
  id: string;
  applicationId: string;
  amount: number;
  interestRate: number;
  termMonths: number;
  monthlyPayment: number;
  approved: boolean;
}