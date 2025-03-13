import { View, Text, Pressable, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Debt } from '../types/types';

const DebtTypeIcons = {
  credit_card: 'credit-card',
  student_loan: 'school',
  personal_loan: 'account-cash',
  mortgage: 'home',
  other: 'cash'
} as const;

interface DebtCardProps {
  debt: Debt;
  onPress: (debt: Debt) => void;
}

export default function DebtCard({ debt, onPress }: DebtCardProps) {
  return (
    <Pressable 
      style={styles.card}
      onPress={() => onPress(debt)}
    >
      <View style={styles.header}>
        <MaterialCommunityIcons 
          name={DebtTypeIcons[debt.type]} 
          size={24} 
          color="#6366F1"
        />
        <Text style={styles.name}>{debt.name}</Text>
      </View>
      
      <View style={styles.details}>
        <View style={styles.detailItem}>
          <Text style={styles.label}>Balance</Text>
          <Text style={styles.value}>
            ${debt.balance.toLocaleString()}
          </Text>
        </View>
        
        <View style={styles.detailItem}>
          <Text style={styles.label}>Interest Rate</Text>
          <Text style={styles.value}>{debt.interestRate}%</Text>
        </View>
        
        <View style={styles.detailItem}>
          <Text style={styles.label}>Min. Payment</Text>
          <Text style={styles.value}>
            ${debt.minimumPayment.toLocaleString()}
          </Text>
        </View>
      </View>

      <View style={styles.footer}>
        <Text style={styles.dueDate}>
          Due: {new Date(debt.dueDate).toLocaleDateString()}
        </Text>
        <Text style={styles.lender}>{debt.lender}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 12,
    color: '#1F2937',
  },
  details: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  detailItem: {
    alignItems: 'center',
  },
  label: {
    fontSize: 12,
    color: '#6B7280',
    marginBottom: 4,
  },
  value: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderTopColor: '#F3F4F6',
    paddingTop: 12,
  },
  dueDate: {
    fontSize: 14,
    color: '#EF4444',
  },
  lender: {
    fontSize: 14,
    color: '#6B7280',
  },
});