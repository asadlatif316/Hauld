import { create } from 'zustand';

export const useUIStore = create((set) => ({
  isSidebarOpen: false,
  view: 'list',
  setView: (value) => set({ view: value }),
  openSidebar: () => set({ isSidebarOpen: true }),
  closeSidebar: () => set({ isSidebarOpen: false }),
}));
