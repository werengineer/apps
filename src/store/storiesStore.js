import { create } from "zustand";

const storiesStore = (set) => ({
	stories: [],
	setStories: (data) => set(() => ({ stories: data })),
	updateStories: ({ id }) =>
		set((store) => ({ stories: store.stories.filter((story) => story._id !== id) })),
	addStories: ({ data }) => set((store) => ({ stories: [...store.stories, data] }))
});

export const useStoryStore = create(storiesStore);
