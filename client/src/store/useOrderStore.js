import { create } from 'zustand';
import { api } from '@/utils';
import toast from 'react-hot-toast';
const initialOrder = {
  notes: '',
  customer: {
    name: '',
    email: '',
    phone: '',
    address: { line1: '', city: '', country: 'Pakistan' },
  },
};
const useOrderStore = create((set) => ({
  isLoading: false,
  orders: [],
  singleOrder: null,
  draft: initialOrder,
  resetDraft: () => {
    const order = get().singleOrder;
    if (!order) return;

    set({
      draft: {
        notes: order.notes ?? '',
        customer: {
          name: order.customer.name,
          email: order.customer.email,
          phone: order.customer.phone,
          address: {
            line1: order.customer.address.line1,
            city: order.customer.address.city,
            country: order.customer.address.country,
          },
        },
      },
    });
  },

  updateNotes: (value) =>
    set((state) => ({
      draft: { ...state.draft, notes: value },
    })),

  updateCustomer: (field, value) =>
    set((state) => ({
      draft: {
        ...state.draft,
        customer: { ...state.draft.customer, [field]: value },
      },
    })),

  updateAddress: (field, value) =>
    set((state) => ({
      draft: {
        ...state.draft,
        customer: {
          ...state.draft.customer,
          address: { ...state.draft.customer.address, [field]: value },
        },
      },
    })),

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
