import { create } from 'zustand';
import { CountSlice, createCountSlice } from './commonSlice';

const useStore = create<CountSlice>((...a) => ({
  ...createCountSlice(...a)
}));

export default useStore;
