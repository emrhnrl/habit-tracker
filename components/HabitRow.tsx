import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Habit } from '../types/habit';

interface HabitRowProps {
  habit: Habit;
  onToggle: () => void;
}

function getStreak(completedDates: string[]): number {
  const dateSet = new Set(completedDates.map((d) => d.slice(0, 10)));
  let streak = 0;
  const date = new Date();
  while (dateSet.has(date.toISOString().slice(0, 10))) {
    streak++;
    date.setDate(date.getDate() - 1);
  }
  return streak;
}

export default function HabitRow({ habit, onToggle }: HabitRowProps) {
  const today = new Date().toISOString().slice(0, 10);
  const isCompletedToday = habit.completedDates.some((d) => d.startsWith(today));
  const streak = getStreak(habit.completedDates);

  return (
    <View style={styles.row}>
      <View style={[styles.circle, { backgroundColor: habit.color }]} />
      <View style={styles.info}>
        <Text style={styles.name}>{habit.name}</Text>
        <Text style={styles.streak}>{streak > 0 ? `🔥 ${streak} day streak` : 'No streak yet'}</Text>
      </View>
      <TouchableOpacity onPress={onToggle} style={styles.toggleButton}>
        <Text style={[styles.toggleText, isCompletedToday && styles.toggleTextDone]}>
          {isCompletedToday ? '✓' : '○'}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 14,
    backgroundColor: '#fff',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#e0e0e0',
  },
  circle: {
    width: 16,
    height: 16,
    borderRadius: 8,
    marginRight: 12,
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1a1a1a',
  },
  streak: {
    fontSize: 12,
    color: '#888',
    marginTop: 2,
  },
  toggleButton: {
    width: 36,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
  },
  toggleText: {
    fontSize: 22,
    color: '#bbb',
  },
  toggleTextDone: {
    color: '#4CAF50',
  },
});
