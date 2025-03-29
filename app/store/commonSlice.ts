import { StateCreator } from 'zustand';

export type CountSlice = {
  count: number;
  increment: () => void;
  decrement: () => void;
};

export const createCountSlice: StateCreator<CountSlice> = (set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
});
