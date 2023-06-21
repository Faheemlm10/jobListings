import { create } from "zustand";

type StoreState = {};

const store = create<StoreState>((set) => ({}));

export const useStore = store;
