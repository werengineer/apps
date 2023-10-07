import { create } from "zustand";

const listsStore = (set) => ({
	lists: [],
	setLists: (data) => set(() => ({ lists: data })),
	removeList: ({ id }) =>
		set((store) => ({ lists: store.lists.filter((list) => list._id !== id) })),
	addList: ({ data }) => set((store) => ({ lists: [...store.lists, data] }))
});

export const useListStore = create(listsStore);
