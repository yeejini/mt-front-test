import {create} from "zustand";

interface ISessionStateTypes {
<<<<<<< HEAD
  count: number;
  free: boolean;
  price: number | null;
}
interface ISessionStateMutateTypes extends ISessionStateTypes {
  setCount: (index: number) => void;
  handleCountMinus: () => void;
  handleCountPlus: () => void;
  setFreeTrue: () => void;
  setFreeFalse: () => void;
  setPrice: (i: number | null) => void;
=======
  count: number | null;
}
interface ISessionStateMutateTypes extends ISessionStateTypes {
  setCount: (index: number | null) => void;
  handleCountMinus: () => void;
  handleCountPlus: () => void;
>>>>>>> 98d76b17b73947c8b46b0ee0435e5aa1550db451
}

export const useSessionState = create<ISessionStateMutateTypes>((set) => ({
  count: 1,
<<<<<<< HEAD
  free: true,
  price: 0,
=======
>>>>>>> 98d76b17b73947c8b46b0ee0435e5aa1550db451
  setCount: (index) => set(() => ({count: index})),
  handleCountMinus: () =>
    set(({count}) => ({
      count: Number(count) <= 1 ? 1 : Number(count) - 1,
    })),
  handleCountPlus: () =>
    set(({count}) => ({
      count: Number(count) >= 5 ? 5 : Number(count) + 1,
    })),
<<<<<<< HEAD
  setFreeTrue: () => set(() => ({free: true})),
  setFreeFalse: () => set(() => ({free: false})),
  setPrice: (index) => set(() => ({price: index})),
=======
>>>>>>> 98d76b17b73947c8b46b0ee0435e5aa1550db451
}));
