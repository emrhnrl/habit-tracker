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

## Code Rules
- Always use TypeScript, no "any"
- Every component must have typed props
- Keep components small and single responsibility
- Always handle loading and error states
