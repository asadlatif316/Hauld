import { create } from 'zustand';

const initialState = {
  name: '',
  description: '',
  image: null,
  category: 'tote',
  price: '',
  stock: 6,
  threshold: 10,
  isActive: true,
  isFeatured: false,
};

export const useUIStore = create((set) => ({
  isSidebarOpen: false,
  view: 'list',
  ...initialState,

  setView: (value) => set({ view: value }),
  openSidebar: () => set({ isSidebarOpen: true }),
  closeSidebar: () => set({ isSidebarOpen: false }),

  update: (field, value) => {
    set({ [field]: value });
  },
  reset: () => set(initialState),
}));
