import { create } from 'zustand';

const useProductStore = create((set) => ({
  products: [],
  isProductLoading: true,
}));

export default useProductStore;
