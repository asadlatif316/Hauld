import { create } from 'zustand';
import { api } from '@/utils';
import toast from 'react-hot-toast';

const useOrderStore = create((set) => ({
  isLoading: false,
  orders: [],
  singleOrder: null,

  fetchOrders: async () => {
    set({ isLoading: true });
    try {
      const orders = await api.get('/order');
      set({ orders: orders.data.orders });
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || 'Failed to load orders');
    } finally {
      set({ isLoading: false });
    }
  },
  fetchSingleOrder: async (id) => {
    set({ isLoading: true });
    try {
      const order = await api.get(`/order/${id}`);
      set({ singleOrder: order.data.order });
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || 'Failed to load orders');
    }
  },
}));

export default useOrderStore;
