import { API_URL } from "@constants";
import axios from "axios";

export const deleteAnswer = async ({questionId, answerID, engineerID, enqueueSnackbar }) => {
	try {
		const res = await axios.delete(`${API_URL}/answers/delete/${answerID}`, {
			headers: {
				EngineerID: engineerID,
                QuestionID: questionId
			}
		});
		enqueueSnackbar("Answer deleted successfully");
	} catch (error) {
		console.log(error);
		enqueueSnackbar(error?.response?.data?.message|| "Some Error Occured While Deleting Answer", {variant: "error"});
		return;
	}
};
