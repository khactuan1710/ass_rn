import create from 'zustand';

const useNewsFeedStore = create(set => ({
  //   bears: 0,
  //   increasePopulation: () => set(state => ({bears: state.bears + 1})),
  //   removeAllBears: () => set({bears: 0}),
  isLike: false,
  setIsLike: isLike => set({isLike}),
}));
export default useNewsFeedStore;
