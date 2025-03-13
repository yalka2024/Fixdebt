import { View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { UserProfile } from '../types/types';

interface ProgressOverviewProps {
  profile: UserProfile;
}

export default function ProgressOverview({ profile }: ProgressOverviewProps) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Debt Freedom Progress</Text>
        <MaterialCommunityIcons name="chart-line-variant" size={24} color="#6366F1" />
      </View>

      <View style={styles.progressBar}>
        <View style={[styles.progress, { width: `${profile.progress}%` }]} />
      </View>

      <View style={styles.stats}>
        <View style={styles.statItem}>
          <Text style={styles.statValue}>
            ${profile.totalDebt.toLocaleString()}
          </Text>
          <Text style={styles.statLabel}>Total Debt</Text>
        </View>

        <View style={styles.statItem}>
          <Text style={styles.statValue}>
            ${profile.monthlyDebtPayment.toLocaleString()}
          </Text>
          <Text style={styles.statLabel}>Monthly Payment</Text>
        </View>

        <View style={styles.statItem}>
          <Text style={styles.statValue}>
            {profile.debtFreeDate}
          </Text>
          <Text style={styles.statLabel}>Debt Free Date</Text>
        </View>
      </View>

      <View style={styles.additionalInfo}>
        <View style={styles.infoItem}>
          <MaterialCommunityIcons name="credit-card-check" size={20} color="#10B981" />
          <Text style={styles.infoText}>Credit Score: {profile.creditScore}</Text>
        </View>
        <View style={styles.infoItem}>
          <MaterialCommunityIcons name="piggy-bank" size={20} color="#6366F1" />
          <Text style={styles.infoText}>Savings Rate: {profile.savingsRate}%</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 16,
    margin: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1F2937',
  },
  progressBar: {
    height: 8,
    backgroundColor: '#E5E7EB',
    borderRadius: 4,
    marginBottom: 20,
  },
  progress: {
    height: '100%',
    backgroundColor: '#6366F1',
    borderRadius: 4,
  },
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  statItem: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: '#6B7280',
  },
  additionalInfo: {
    borderTopWidth: 1,
    borderTopColor: '#F3F4F6',
    paddingTop: 16,
    gap: 8,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  infoText: {
    fontSize: 14,
    color: '#4B5563',
  },
});