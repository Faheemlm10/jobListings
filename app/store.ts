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
  appendToActiveTab: (tab: string) => void; // Define the appendToActiveTab function in the interface
  removeFromActiveTab: (tab:string) => void
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
}));

export const useStore = store;
