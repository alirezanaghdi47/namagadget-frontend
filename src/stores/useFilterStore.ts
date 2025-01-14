// libraries
import { create } from 'zustand';

const initialState: IFilterState = {
  city: '',
  category: '',
};

const useFilterStore = create<IFilterStore>((set) => ({
  filters: initialState,

  changeFilter: (data) =>
    set((state) => ({
      filters: {
        city: data.city ?? state.filters.city,
        category: data.category ?? state.filters.category,
      },
    })),

  clearFilter: () => set({ filters: initialState }),
}));

export default useFilterStore;

interface IFilterState {
  city: string;
  category: string;
}

interface IFilterStore {
  filters: IFilterState;
  changeFilter: (data: IFilterState) => void;
  clearFilter: () => void;
}
