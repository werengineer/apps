import { API_URL } from "@constants";
import { ServerError } from "@lib";
import axios from "axios";

export const fetchClusters = async () => {
	try {
		const res = await axios.get(`${API_URL}/cluster/getClusters`);
		return res.data;
	} catch (error) {
		throw new ServerError("Server Error");
	}
};

export const fetchBlocks = async ({ clusterID }) => {
	var blocksArray = [];
	try {
		const cluster = await axios.get(`${API_URL}/cluster/getCluster/${clusterID}`);
		const blocks = cluster.data.blocks;

		const promises = blocks.map((el) => {
			return axios.get(`${API_URL}/block/getBlock/${el.id}`);
		});

		// eslint-disable-next-line no-undef
		const results = await Promise.all(promises);

		results.forEach((res, i) => {
			res.data.position = blocks[i].position;
			blocksArray.push(res.data);
		});

		return blocksArray;
	} catch (error) {
		throw new ServerError("Server Error");
	}
};

export const fetchAllEnrolledClusters = async (engineer, enqueueSnackbar) => {
	try {
		const allClustersEnrolled = await axios.get(
			`${API_URL}/cluster/get/engineer/${engineer?._id}`
		);
		return allClustersEnrolled.data;
	} catch (error) {
		enqueueSnackbar(error.message || "Server error", { variant: "error" });
	}
};
