import { create } from "zustand";

const coinsStore = (set) => ({
	coins: 0,
	setCoins: (data) => set(() => ({ coins: data })),
	addCoins: ({ data }) => set((store) => ({ coins: store.coins + data }))
});

export const useCoinsStore = create(coinsStore);
