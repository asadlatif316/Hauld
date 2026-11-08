import { create } from 'zustand';
import { api } from '@/utils';

const useOrderStore = create((set) => ({
  isLoading: false,
  orders: [],

  fetchOrders: async () => {
    set({ isLoading: true });
    try {
      const orders = await api.get('/order');
      set({ orders: orders.data.orders });
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || 'Failed to load products');
    } finally {
      set({ isLoading: false });
    }
  },
}));

export default useOrderStore;
