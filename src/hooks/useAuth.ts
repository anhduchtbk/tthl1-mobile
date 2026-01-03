import type { LoginRequest } from '@/api/types/auth';
import { useAuthStore } from '@/store/authStore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useMutation } from '@tanstack/react-query';
import { getMe, login } from '../api/auth';

export const useLogin = () => {
  const setAuth = useAuthStore(state => state.setAuth);

  return useMutation({
    mutationFn: (data: LoginRequest) => login(data),
    onSuccess: async response => {
      // Lưu thông tin user và token vào store
      if (response.data) {
        await AsyncStorage.setItem('token', response.data.token);

        const res = await getMe();

        console.log('ddddd', res);

        setAuth({
          user: res?.data,
          token: response.data.token,
        });
      }
    },
  });
};
