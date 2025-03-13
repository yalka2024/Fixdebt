export interface Debt {
  id: string;
  name: string;
  balance: number;
  interestRate: number;
  minimumPayment: number;
  type: 'credit_card' | 'student_loan' | 'personal_loan' | 'mortgage' | 'other';
  dueDate: string;
  lender: string;
}

export interface UserProfile {
  totalDebt: number;
  monthlyIncome: number;
  creditScore: number;
  debtFreeDate: string;
  savingsRate: number;
  monthlyDebtPayment: number;
  progress: number;
}

export interface AISuggestion {
  id: string;
  title: string;
  description: string;
  impact: number;
  type: 'warning' | 'tip' | 'achievement';
  action?: string;
}