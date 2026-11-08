import { create } from "zustand";
import { api } from "@/utils";

const useOrderStore = create((set) => ({
    isLoading: false,
    orders:[1]
}))

export default useOrderStore