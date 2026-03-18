# Habit Tracker App

## Stack
- Expo SDK 54 + React Native + TypeScript
- Expo Router for navigation
- Zustand for state management
- AsyncStorage for local data persistence
- React Native StyleSheet for styling (NO NativeWind)

## Project Structure
- /app → all screens (Expo Router)
- /components → reusable UI components
- /store → Zustand state
- /types → TypeScript interfaces
- /utils → helper functions

## Data Model
A Habit has:
- id: string
- name: string
- color: string
- createdAt: string (ISO date)
- completedDates: string[] (array of ISO dates)

## Current Progress
- [x] Home screen (`app/index.tsx`)
- [x] Add habit screen (`app/add-habit.tsx`)
- [x] Toggle & streaks (`components/HabitRow.tsx`)
- [ ] Next: progress/stats screen

## Code Rules
- Always use TypeScript, no "any"
- Every component must have typed props
- Keep components small and single responsibility
- Always handle loading and error states

## Files Created
- app/_layout.tsx → root Stack layout with SafeAreaProvider
- app/index.tsx → home screen with FlatList of habits
- app/add-habit.tsx → form to add new habit (name + color picker)
- components/HabitRow.tsx → single habit row with toggle and streak
- store/habitStore.ts → Zustand store with AsyncStorage persistence
- types/habit.ts → Habit interface

## Key Decisions Made
- No NativeWind (caused dependency conflicts with SDK 54)
- Using StyleSheet only for styling
- SafeAreaView from react-native-safe-area-context (not react-native)
- Streak resets to 0 if today not completed
- Habit ID generated with Date.now().toString()
- AsyncStorage key: "habit-storage"

## Known Issues
- scheme not set in app.json (only matters for production builds)

## Next Task
Build app/progress.tsx that shows:
- Total habits count
- Completion rate for today (X out of Y done)
- Best streak across all habits
- Per-habit stats: total completions and best streak
Add a navigation button from home screen to reach it