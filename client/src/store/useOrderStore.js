import { create } from "zustand";
import { api } from "@/utils";

const useOrderStore = create((set) => ({
    isLoading: false,
    orders:[]
}))

export default useOrderStore