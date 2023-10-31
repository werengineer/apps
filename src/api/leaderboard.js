import { API_URL } from "@constants";
import axios from "axios";

export const fetchAllUser= async () => {
    try {
      const response = await axios.get(`${API_URL}/engineer/get`);
    //   const user = response.data;
      console.log('User fetched by rank:', response.data);
      return response.data;
    } catch (error) {
      console.error('Error fetching user by rank:', error);
      throw error;
    }
  };

export const calculateXp = async () => {
  try {
    const allUsers = await fetchAllUser();

    // Calculate weekly XP
    const currentDate = new Date();
    const oneWeekAgo = new Date();
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

    const weeklyXP = allUsers.reduce((totalXP, user) => {
      const userDate = new Date(user.createdAt);
      if (userDate >= oneWeekAgo && userDate <= currentDate) {
        totalXP += user.xp;
      }
      return totalXP;
    }, 0);

    // Calculate monthly XP
    const currentMonth = currentDate.getMonth();
    const monthlyXP = allUsers.reduce((totalXP, user) => {
      const userDate = new Date(user.createdAt);
      if (userDate.getMonth() === currentMonth) {
        totalXP += user.xp;
      }
      return totalXP;
    }, 0);
    console.log('Weekly XP:', weeklyXP);
    console.log('Monthly XP:', monthlyXP);
    return {
      weeklyXP,
      monthlyXP,
    };
  } catch (error) {
    console.error('Error calculating weekly and monthly XP:', error);
    throw error;
  }
};
