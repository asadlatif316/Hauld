import { create } from 'zustand';
import { api } from '@/utils';
import toast from 'react-hot-toast';
import { useUIStore } from './useUIStore';
const useProductStore = create((set, get) => ({
  products: [],
  isProductLoading: false,
  pagination: { currentPage: 1, numberOfPages: 1, totalProducts: 0 },
  isSubmitting: false,

  fetchProducts: async () => {
    set({ isProductLoading: true });
    try {
      const res = await api.get('/product');
      const { products, currentPage, numberOfPages, totalProducts } = res.data;
      set({
        products,
        pagination: { currentPage, numberOfPages, totalProducts },
      });
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || 'Failed to load products');
    } finally {
      set({ isProductLoading: false });
    }
  },
  addProduct: async (data) => {
    set({ isSubmitting: true });
    try {
      const res = await api.post('/product', data);
      toast.success('Published Successfully');
      return res.data;
    } catch (error) {
      toast.error(error.response?.data?.message || 'Could not publish');
    } finally {
      set({ isSubmitting: false });
    }
  },
}));

export default useProductStore;
