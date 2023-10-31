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

//   export const currentUser = async () => {
//     try {
//       const response = await axios.get(`${API_URL}/engineer/get`);
//       const user = response.data;
//       console.log('User fetched by rank:', response.data);
//       return user;
//     } catch (error) {
//       console.error('Error fetching user by rank:', error);
//       throw error;
//     }
//   }