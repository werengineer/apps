import axios from "axios";

export const useDeviceInfo = () => {
	const getInfo = async (notificationToken) => {
		const { DeviceUUID } = await import("device-uuid");

		const device = new DeviceUUID();

		const { browser, os, platform, source } = device.parse();

		const address = await axios
			.get("https://extreme-ip-lookup.com/json/?key=msGZ9aUnMIIWRmNPL6Ez")
			.then(({ data }) => {
				return [data?.city, data?.region, data?.country, data?.continent].join(", ");
			})
			.catch();

		return {
			notificationToken,
			browser,
			os,
			platform,
			source,
			address
		};
	};

	return { getInfo };
};
