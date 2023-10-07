import { getGeneralEngineer } from "@api";
import { getEngineer } from "@cookies";

export const getSubscription = () => {
	const engineer = getEngineer();
	const subscription = async () => {
		// return false;
		try {
			const eng = await getGeneralEngineer({ username: engineer.username });
			return eng.subscription;
		} catch (error) {
			console.log(error);
			return false;
		}
	};

	return { subscription };
};
