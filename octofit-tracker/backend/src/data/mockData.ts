export type User = {
  id: string;
  name: string;
  teamId: string;
  points: number;
};

export type Team = {
  id: string;
  name: string;
};

export type Activity = {
  id: string;
  userId: string;
  type: string;
  durationMinutes: number;
  points: number;
};

export type Workout = {
  id: string;
  userId: string;
  title: string;
  intensity: 'low' | 'moderate' | 'high';
};

export const teams: Team[] = [
  { id: 't1', name: 'Octo Sprinters' },
  { id: 't2', name: 'Repo Rangers' },
];

export const users: User[] = [
  { id: 'u1', name: 'Ava', teamId: 't1', points: 120 },
  { id: 'u2', name: 'Noah', teamId: 't1', points: 95 },
  { id: 'u3', name: 'Mia', teamId: 't2', points: 130 },
];

export const activities: Activity[] = [
  { id: 'a1', userId: 'u1', type: 'Run', durationMinutes: 35, points: 35 },
  { id: 'a2', userId: 'u2', type: 'Cycle', durationMinutes: 45, points: 45 },
  { id: 'a3', userId: 'u3', type: 'Yoga', durationMinutes: 50, points: 50 },
];

export const workouts: Workout[] = [
  { id: 'w1', userId: 'u1', title: 'Intervals', intensity: 'high' },
  { id: 'w2', userId: 'u2', title: 'Recovery Ride', intensity: 'low' },
  { id: 'w3', userId: 'u3', title: 'Core Flow', intensity: 'moderate' },
];
