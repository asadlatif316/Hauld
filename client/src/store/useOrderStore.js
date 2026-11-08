import { create } from "zustand";
import { api } from "@/utils";

const useOrderStore = create((set) => ({
    isLoading: true,
    orders:[]
}))

export default useOrderStore