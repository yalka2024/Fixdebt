import { View, Text, Pressable, StyleSheet, FlatList } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AISuggestion } from '../types/types';

interface AISuggestionsProps {
  suggestions: AISuggestion[];
  onSuggestionPress: (suggestion: AISuggestion) => void;
}

const SuggestionIcon = {
  warning: { name: 'alert-circle', color: '#EF4444' },
  tip: { name: 'lightbulb', color: '#10B981' },
  achievement: { name: 'trophy', color: '#F59E0B' },
} as const;

export default function AISuggestions({ suggestions, onSuggestionPress }: AISuggestionsProps) {
  const renderItem = ({ item }: { item: AISuggestion }) => (
    <Pressable
      style={styles.suggestionCard}
      onPress={() => onSuggestionPress(item)}
    >
      <View style={styles.suggestionHeader}>
        <MaterialCommunityIcons
          name={SuggestionIcon[item.type].name}
          size={24}
          color={SuggestionIcon[item.type].color}
        />
        <Text style={styles.suggestionTitle}>{item.title}</Text>
      </View>
      
      <Text style={styles.suggestionDescription}>{item.description}</Text>
      
      <View style={styles.suggestionFooter}>
        <Text style={styles.impactText}>
          Impact: {item.impact > 0 ? '+' : ''}{item.impact}%
        </Text>
        {item.action && (
          <Text style={styles.actionText}>Take Action →</Text>
        )}
      </View>
    </Pressable>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>AI Insights</Text>
        <MaterialCommunityIcons name="robot" size={24} color="#6366F1" />
      </View>

      <FlatList
        data={suggestions}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1F2937',
  },
  listContainer: {
    paddingHorizontal: 8,
  },
  suggestionCard: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 16,
    marginHorizontal: 8,
    width: 300,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  suggestionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  suggestionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
    marginLeft: 12,
    flex: 1,
  },
  suggestionDescription: {
    fontSize: 14,
    color: '#4B5563',
    marginBottom: 12,
  },
  suggestionFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#F3F4F6',
    paddingTop: 12,
  },
  impactText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#10B981',
  },
  actionText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#6366F1',
  },
});