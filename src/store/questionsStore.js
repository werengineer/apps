import { create } from "zustand";

const questionStore = (set) => ({
	questions: [],
	setQuestions: (data) => set(() => ({ questions: data })),
	updateQuestions: ({ id }) =>
		set((store) => ({ questions: store.questions.filter((questions) => questions._id !== id) })),
	addQuestion: ({ data }) => set((store) => ({ questions: [...store.questions, data] }))
});

export const useQuestionStore = create(questionStore);
