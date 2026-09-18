import { create } from 'zustand';
import { api } from '@/utils';
import toast from 'react-hot-toast';

const useAuthStore = create((set) => ({
  user: null,
  isLoggingIn: false,
  isCheckingAuth: true,

  checkAuth: async () => {
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

  logout: async () => {
    try {
      await api.post('/auth/logout');
      set({ user: null });
      toast.success('Logged out');
    } catch (error) {
      console.log(error);
      toast.error('Error in logging out');
    }
  },
}));

export default useAuthStore;
