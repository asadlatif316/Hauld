import { create } from 'zustand';
import { api } from '@/utils';

const useAuthStore = create((set) => ({
  user: null,
  isLoggingIn: false,
  isCheckingAuth: false,

  checkAuth: async () => {
    set({ isCheckingAuth: true });
    try {
      const res = await api.get('/auth/user/me');
      set({ user: res.data });
    } catch (error) {
      set({ user: null });
    } finally {
      set({ isCheckingAuth: false });
    }
  },

  login: async (data) => {
    set({ isLoggingIn: true });
    try {
      const res = await api.post('/auth/login', data);
      set({ user: res.data });
    } catch (error) {
      console.log(error);
    } finally {
      set({ isLoggingIn: false });
    }
  },
}));

export default useAuthStore;
