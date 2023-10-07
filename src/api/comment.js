import { API_URL } from "@constants";
import axios from "axios";

export const deleteComment = async ({storyID, commentID, engineerID, enqueueSnackbar }) => {
	try {
		const res = await axios.delete(`${API_URL}/comments/delete/${commentID}`, {
			headers: {
				EngineerID: engineerID,
                StoryID: storyID
			}
		});
		enqueueSnackbar("Story deleted successfully");
	} catch (error) {
		console.log(error);
		enqueueSnackbar(error?.response?.data?.message|| "Some Error Occured While Deleting Answer", {variant: "error"});
		return;
	}
};