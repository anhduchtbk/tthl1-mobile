import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

export interface User {
  id: number;
  email: string;
  name: string;
  description: string;
}

interface AuthState {
  user: User | null;
  token: string | null;
  setAuth: (data: { user: User; token?: string }) => void;
  clearAuth: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    set => ({
      user: null,
      token: null,
      setAuth: data => {
        if (data.token) {
          set({ user: data.user, token: data.token });
        } else {
          set({ user: data.user });
        }
      },
      clearAuth: async () => {
        console.log('====1');

        await AsyncStorage.removeItem('token');
        set({ user: null, token: null });
      },
    }),
    {
      name: 'auth-storage',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
