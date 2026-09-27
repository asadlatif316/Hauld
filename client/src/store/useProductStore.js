import { create } from 'zustand';

const useProductStore = create((set) => ({
  product: 'working',
}));

export default useProductStore;
