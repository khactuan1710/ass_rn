import create from 'zustand';

const useHomeStore = create(set => ({
  //   bears: 0,
  //   increasePopulation: () => set(state => ({bears: state.bears + 1})),
  //   removeAllBears: () => set({bears: 0}),
  testZustand: 0,
  setTestZutand: testZustand => set({testZustand}),
}));
export default useHomeStore;
