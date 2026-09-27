import { create } from 'zustand';

const useProductStore = create((set) => ({
  products: [],
}));

export default useProductStore;
