import { create } from 'zustand';

type State = {
  clickableMap: boolean;
};

type Actions = {
  handleClickableMap: (clickableMap: boolean) => void;
};

const initialState: State = {
  clickableMap: false,
};

const useClickableMapStore = create<State & Actions>()(set => ({
  ...initialState,
  handleClickableMap: clickableMap => {
    set({ clickableMap });
  },
}));

export const useClickableMap = () => useClickableMapStore(state => state.clickableMap);
export const useHandleClickableMap = () => useClickableMapStore(state => state.handleClickableMap);
