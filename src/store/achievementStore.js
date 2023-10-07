import { API_URL } from "@constants";
import axios from "axios";
import { create } from "zustand";

const achievementStore = (set) => ({
	achievements: [],
	basicAchievements: [],
	dailyAchievements: [],
	fetchAchievements: async () => {
		console.log("Here");
		const res = await axios.get(`${API_URL}/achievement/get`);
		console.log(res);
		set({
			achievements: res.data
		});
	}
});

export const useAchievementStore = create(achievementStore);
