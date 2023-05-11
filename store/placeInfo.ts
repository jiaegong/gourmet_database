import { create } from 'zustand';
import { Location } from '../types/post';

type State = {
  address: string;
  location: Location;
};

type Actions = {
  handlePlaceInfo: (address: string, location: Location) => void;
};

const initialState: State = {
  address: '',
  location: {
    x: null,
    y: null,
  },
};

const usePlaceInfoStore = create<State & Actions>()(set => ({
  ...initialState,
  handlePlaceInfo: (address, location) => {
    set({ address, location });
  },
}));

export const usePlaceAddress = () => usePlaceInfoStore(state => state.address);
export const usePlaceLocation = () => usePlaceInfoStore(state => state.location);
export const useHandlePlaceInfo = () => usePlaceInfoStore(state => state.handlePlaceInfo);
