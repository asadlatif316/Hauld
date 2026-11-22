import { create } from 'zustand';
import { api } from '@/utils';
import toast from 'react-hot-toast';
const initialOrder = {
  status: '',
  notes: '',
  customer: {
    name: '',
    email: '',
    phone: '',
    address: { line1: '', city: '', country: 'Pakistan' },
  },
};
const useOrderStore = create((set, get) => ({
  isLoading: false,
  updatingId: null,
  orders: [],
  singleOrder: null,
  draft: initialOrder,
  resetDraft: () => {
    const order = get().singleOrder;
    if (!order) return;

    set({
      draft: {
        status: order.status ?? '',
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

  updateStatus: (value) =>
    set((state) => ({
      draft: { ...state.draft, status: value },
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

  saveDraft: async (id) => {
    const { draft, singleOrder } = get();
    if (!singleOrder) return null;
    const newOrder = {};
    const customerFields = ['name', 'email', 'phone'];
    const addressFields = ['line1', 'city', 'country'];
    if ((singleOrder.notes ?? '') !== draft.notes) {
      newOrder.notes = draft.notes;
    }
    if (draft.status !== singleOrder.status) {
      newOrder.status = draft.status;
    }
    console.log(draft.status);

    const customerChanges = Object.fromEntries(
      customerFields
        .filter((f) => draft.customer[f] !== singleOrder.customer[f])
        .map((f) => [f, draft.customer[f]]),
    );
    const addressChanges = Object.fromEntries(
      addressFields
        .filter(
          (f) => draft.customer.address[f] !== singleOrder.customer.address[f],
        )
        .map((f) => [f, draft.customer[f]]),
    );
    if (Object.keys(addressChanges).length > 0) {
      customerChanges.address = addressChanges;
    }

    if (Object.keys(customerChanges).length > 0) {
      newOrder.customer = customerChanges;
    }

    if (Object.keys(newOrder).length === 0) return;
    set({ isLoading: true, updatingId: id });
    try {
      const res = await api.patch(`/order/${id}`, newOrder);
      const updated = res.data.order;
      set((state) => ({
        singleOrder: updated,
        orders: state.orders.map((o) => (o._id === id ? updated : o)),
      }));
      get().resetDraft();
      toast.success('Order updated!!!');
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.msg || 'Failed to update order');
    } finally {
      set({ isLoading: false, updatingId: null });
    }
  },

  saveStatus: async (id, status) => {
    const payload = {};
    payload.status = status;
    console.log(payload);

    set({ updatingId: id });
    try {
      const res = await api.patch(`/order/${id}`, payload);
      const updated = res.data.order;
      toast.success('Order updated!!!');
      set((state) => ({
        orders: state.orders.map((o) => (o._id === id ? updated : o)),singleOrder: state.singleOrder?._id === id ? updated : state.singleOrder
      }));
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.msg || 'Failed to update order');
    } finally {
      set({ updatingId: null });
    }
  },

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
      get().resetDraft();
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || 'Failed to load orders');
    }
  },

  deleteOrder: async (id) => {
    set({ isLoading: true });
    try {
      await api.delete(`/order/${id}`);
      set({ singleOrder: null, draft: initialOrder });
      set((state) => ({
        orders: state.orders.filter((o) => o._id !== id),
      }));
      toast.success('Order Deleted');
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || 'Failed to delete order');
    } finally {
      set({ isLoading: false });
    }
  },
}));

export default useOrderStore;
