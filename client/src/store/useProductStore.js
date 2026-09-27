import { create } from 'zustand';
import { api } from '@/utils';
import toast from 'react-hot-toast';

const useProductStore = create((set) => ({
  products: [],
  isProductLoading: false,

  fetchProducts: async () => {
    set({ isProductLoading: true });
    try {
      const products = await api.get('/product');
      set({ products: products.data.products });
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || 'Failed to load products');
    } finally {
      set({ isProductLoading: false });
    }
  },
}));

export default useProductStore;
