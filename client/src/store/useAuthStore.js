import { create } from 'zustand';
import { api } from '@/utils';

const useAuthStore = create((set) => ({
  user: null,
  isLoggingIn: false,
  isCheckingAuth: false,

  login: async (data) => {
    set({ isLoggingIn: true });
    try {
      const res = await api.post('/auth/login',data);
      set({ user: res.data });
      console.log(res);
    } catch (error) {
      console.log(error);
    } finally {
      set({ isLoggingIn: false });
    }
  },
}));

export default useAuthStore;
