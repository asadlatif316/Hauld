import { create } from 'zustand';
import { api } from '@/utils';
import toast from 'react-hot-toast';

const useProductStore = create((set) => ({
  products: [],
  isProductLoading: false,
  pagination: { currentPage: 1, numberOfPages: 1, totalProducts: 0 },

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
}));

export default useProductStore;
