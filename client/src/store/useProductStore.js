import { create } from 'zustand';
import { api } from '@/utils';
import toast from 'react-hot-toast';

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

const useProductStore = create((set, get) => ({
  products: [],
  singleProduct: null,
  editDraft: null,
  isProductLoading: false,
  pagination: { currentPage: 1, numberOfPages: 1, totalProducts: 0 },
  isSubmitting: false,
  isDeleting: false,
  isEditing: false,
  ...initialState,

  setIsEditing: (value) => set({ isEditing: value }),

  update: (field, value) => {
    set({ [field]: value });
  },
  reset: () => set(initialState),

  startEdit: () => {
    set({ editDraft: { ...get().singleProduct } })
  },
  updateDraft: (field, value) =>
    set((s) => ({ editDraft: { ...s.editDraft, [field]: value } })),
  cancelEdit: () => {
    set({ editDraft: null });
  },

  handleEdit: () => {
    get().startEdit();
    set({ isEditing: true });
  },

  handleCancelEdit: () => {
    console.log('working');
    
    get().cancelEdit();
    set({ isEditing: false });
  },

  saveChange:()=>{},

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

  deleteProduct: async (id) => {
    set({ isDeleting: true });
    try {
      await api.delete(`/product/${id}`);
      set((state) => ({
        products: state.products.filter((p) => p._id !== id),
      }));
      toast.success('Product Deleted');
    } catch (error) {
      toast.error(error.response?.data?.message || 'Could not delete product');
    } finally {
      set({ isDeleting: false });
    }
  },

  getSingleProduct: async (id) => {
    set({ isProductLoading: true });
    try {
      const product = await api.get(`/product/${id}`, id);
      set({ singleProduct: product.data.product });
    } catch (error) {
      toast.error(error.response?.data?.message || 'Product not exist');
    } finally {
      set({ isProductLoading: false });
    }
  },
}));

export default useProductStore;
