import { create } from 'zustand';

type State = {
  address: string;
};

type Actions = {
  handleAddress: (address: string) => void;
};

const initialState: State = {
  address: '',
};

const useAddressStore = create<State & Actions>()(set => ({
  ...initialState,
  handleAddress: address => {
    set({ address });
  },
}));

export const useAddress = () => useAddressStore(state => state.address);
export const useHandleAddress = () => useAddressStore(state => state.handleAddress);
