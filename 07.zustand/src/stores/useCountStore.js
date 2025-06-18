import { create } from "zustand"
const useCountStore = create((set) => ({
    count: 0,
    increase: () => set((state) => ({
        count: state.count + 1,
    })),
    increaseBy: (number) => set((state) => ({
        count: state.count + number,
    })),
    decrease: () => set((state) => ({
        count: state.count - 1 >= 0 ? state.count - 1 : state.count,
    })),
    decreaseBy: (number) => set((state) => ({
        count: state.count - number >= 0 ? state.count - number : state.count,
    })),
    multiple: (number) => set((state) => ({
        count: state.count * number >= 0 ? state.count * number : state.count,
    })),
    divide: (number) => set((state) => ({
        count: state.count / number >= 0 ? state.count / number : state.count,
    })),
}))

export default useCountStore;