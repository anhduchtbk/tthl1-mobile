import type { User } from '@/types/user';
import { createMMKV } from 'react-native-mmkv';
import { create } from 'zustand';
import type { StateStorage } from 'zustand/middleware';
import { createJSONStorage, persist } from 'zustand/middleware';
import type { UseBoundStore } from 'zustand/react';
import type { StoreApi } from 'zustand/vanilla';

const BLACKLIST_KEYS = ['actions'];

interface AuthState {
  user: User | null;
  token: string | null;
}

interface AuthActions {
  setAuth: (user: User, token: string) => void;
  updateUser: (user: Partial<User>) => void;
  setToken: (token: string) => void;
  clearAuth: () => void;
}

const initialState: Omit<AuthState & { actions: AuthActions }, 'actions'> = {
  user: null,
  token: null,
};

const authStorage = createMMKV({
  id: 'timeshel-auth-storage',
});

const zustandStorage: StateStorage = {
  setItem: (name: string, value: string) => {
    authStorage.set(name, value);
  },
  getItem: (name: string) => {
    const value = authStorage.getString(name);
    return value ?? null;
  },
  removeItem: (name: string) => {
    authStorage.remove(name);
  },
};

export const useAuthStore: UseBoundStore<
  StoreApi<AuthState & { actions: AuthActions }>
> = create(
  persist(
    set => ({
      ...initialState,
      actions: {
        setAuth: (user, token) => set({ user, token }),
        updateUser: user =>
          set(state => ({
            user: state.user ? { ...state.user, ...user } : (user as User),
          })),
        setToken: token => set({ token }),
        clearAuth: () => set({ user: null, token: null }),
      },
    }),
    {
      name: 'auth-storage',
      storage: createJSONStorage(() => zustandStorage),
      partialize: state =>
        Object.fromEntries(
          Object.entries(state).filter(([key]) => !BLACKLIST_KEYS.includes(key))
        ),
    }
  )
);

export const useAuth = () =>
  useAuthStore(state => ({
    user: state.user,
    token: state.token,
  }));

export const useAuthActions = () => useAuthStore(state => state.actions);
