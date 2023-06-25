import { create } from "zustand";
import jobData from "../data/data.json";

interface Job {
  id: number;
  company: string;
  logo: string;
  new: boolean;
  featured: boolean;
  position: string;
  role: string;
  level: string;
  postedAt: string;
  contract: string;
  location: string;
  languages: string[];
  tools: string[];
}

interface StoreState {
  data: Job[];
  activeTab: string[];
  appendToActiveTab: (tab: string) => void;
  removeFromActiveTab: (tab: string) => void;
  clearActiveTab: () => void; // Define the clearActiveTab function in the interface
}

const store = create<StoreState>((set) => ({
  data: jobData,
  activeTab: [],
  appendToActiveTab: (tab: string) => {
    set((state) => ({ activeTab: [...state.activeTab, tab] }));
  },
  removeFromActiveTab: (tab: string) => {
    set((state) => ({
      activeTab: state.activeTab.filter((item) => item !== tab),
    }));
  },
  clearActiveTab: () => {
    set({ activeTab: [] });
  },
}));

export const useStore = store;

