import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Habit } from '../types/habit';

interface HabitStore {
  habits: Habit[];
  addHabit: (name: string, color: string) => void;
  toggleHabit: (id: string, date: string) => void;
  deleteHabit: (id: string) => void;
}

export const useHabitStore = create<HabitStore>()(
  persist(
    (set) => ({
      habits: [],

      addHabit: (name, color) =>
        set((state) => ({
          habits: [
            ...state.habits,
            {
              id: Date.now().toString(),
              name,
              color,
              createdAt: new Date().toISOString(),
              completedDates: [],
            },
          ],
        })),

      toggleHabit: (id, date) =>
        set((state) => ({
          habits: state.habits.map((habit) => {
            if (habit.id !== id) return habit;
            const hasDate = habit.completedDates.includes(date);
            return {
              ...habit,
              completedDates: hasDate
                ? habit.completedDates.filter((d) => d !== date)
                : [...habit.completedDates, date],
            };
          }),
        })),

      deleteHabit: (id) =>
        set((state) => ({
          habits: state.habits.filter((habit) => habit.id !== id),
        })),
    }),
    {
      name: 'habit-storage',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
