import React, { useState } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { toast } from 'sonner-native';
import ProgressOverview from '../components/ProgressOverview';
import DebtCard from '../components/DebtCard';
import AISuggestions from '../components/AISuggestions';
import { Debt, UserProfile, AISuggestion } from '../types/types';

// Mock data
const mockProfile: UserProfile = {
  totalDebt: 45000,
  monthlyIncome: 5000,
  creditScore: 720,
  debtFreeDate: 'Dec 2025',
  savingsRate: 15,
  monthlyDebtPayment: 1200,
  progress: 35,
};

const mockDebts: Debt[] = [
  {
    id: '1',
    name: 'Credit Card A',
    balance: 8000,
    interestRate: 19.99,
    minimumPayment: 200,
    type: 'credit_card',
    dueDate: '2024-03-25',
    lender: 'Chase',
  },
  {
    id: '2',
    name: 'Student Loan',
    balance: 25000,
    interestRate: 5.5,
    minimumPayment: 350,
    type: 'student_loan',
    dueDate: '2024-04-01',
    lender: 'Sallie Mae',
  },
  {
    id: '3',
    name: 'Personal Loan',
    balance: 12000,
    interestRate: 12.5,
    minimumPayment: 300,
    type: 'personal_loan',
    dueDate: '2024-03-30',
    lender: 'Lending Club',
  },
];

const mockSuggestions: AISuggestion[] = [
  {
    id: '1',
    title: 'High Interest Alert',
    description: `Your Credit Card A has a 19.99% APR. Consider a balance transfer to save $1,200 yearly.`,
    impact: -15,
    type: 'warning',
    action: 'View Options',
  },
  {
    id: '2',
    title: 'Payment Milestone',
    description: `Great job! You've paid off 35% of your total debt. Keep up the momentum!`,
    impact: 5,
    type: 'achievement',
  },
  {
    id: '3',
    title: 'Smart Tip',
    description: `Increasing your monthly payment by $100 could help you become debt-free 8 months earlier.`,
    impact: 10,
    type: 'tip',
    action: 'Adjust Payment',
  },
];

export default function HomeScreen() {
  const [profile] = useState(mockProfile);
  const [debts] = useState(mockDebts);
  const [suggestions] = useState(mockSuggestions);

  const handleDebtPress = (debt: Debt) => {
    toast.message(`Selected ${debt.name}`, {
      description: `Balance: $${debt.balance.toLocaleString()}`,
    });
  };

  const handleSuggestionPress = (suggestion: AISuggestion) => {
    toast.message(suggestion.title, {
      description: suggestion.description,
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <ProgressOverview profile={profile} />
        <AISuggestions
          suggestions={suggestions}
          onSuggestionPress={handleSuggestionPress}
        />
        {debts.map((debt) => (
          <DebtCard
            key={debt.id}
            debt={debt}
            onPress={handleDebtPress}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
});