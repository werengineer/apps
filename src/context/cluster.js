"use client";
import { fetchAllEnrolledClusters, fetchClusters } from "@api";
import { completeAchievement } from "@api/achievement";
import { loginModalState } from "@atom";
import { API_URL } from "@constants";
import { getEngineer } from "@cookies";
import { ServerError } from "@lib";
import { achievementID } from "@lib/achievementID";
import axios from "axios";
import { useRouter } from "next/navigation";
import PropTypes from "prop-types";
import React, { createContext, useEffect, useState } from "react";
import { useRecoilState } from "recoil";

export const ClustersContext = createContext();

const ClustersState = ({ children }) => {
	const engineer = getEngineer();
	const [loading, setLoading] = useState(false);
	const [clusters, setClusters] = useState(false);
	const [enrolledClusters, setEnrolledClusters] = useState([]);
	const [completedClusters, setCompletedClusters] = useState([]);
	const [otherClusters, setOtherClusters] = useState([]);
	const [upcomingClusters, setUpcomingClusters] = useState([]);
	const [filter, setFilter] = useState([]);
	const [viewMore, setViewMore] = useState({
		enrolledClusters: false,
		otherClusters: false,
		completedClusters: false,
		upcomingClusters: false
	});
	const [open, setOpen] = useRecoilState(loginModalState);
	const router = useRouter();

	useEffect(() => {
		const bringClusters = async () => {
			// if (engineer) {
			setLoading(true);
			try {
				const res = await fetchClusters();
				console.log(res);
				setClusters(res);
			} catch (error) {
				new ServerError("Server Error");
			} finally {
				setLoading(false);
			}
			// } else {
			//     throw new AuthError('Authorization Error')
			// }

			//These commented lines are to be uncomment if we allow non logged in users to show clusters!
			//TO BE DISCUSSED
		};
		bringClusters();
	}, []);

	useEffect(() => {
		if (clusters.length > 0) {
			const enrolledClusters = clusters?.filter(
				(cluster) =>
					cluster?.inProgress?.includes(engineer?._id) && !cluster.done.includes(engineer?._id)
			);
			setEnrolledClusters(enrolledClusters);

			const completedClusters = clusters?.filter(
				(cluster) =>
					cluster?.done?.includes(engineer?._id) && !cluster.inProgress.includes(engineer?._id)
			);
			setCompletedClusters(completedClusters);

			const upcomingClusters = clusters?.filter(
				(cluster) => cluster?.status?.toLowerCase() === "upcoming"
			);
			setUpcomingClusters(upcomingClusters);

			const otherClusters = clusters?.filter(
				(cluster) =>
					cluster?.status?.toLowerCase() !== "upcoming" &&
					!cluster.inProgress.includes(engineer?._id) &&
					!cluster.done.includes(engineer?._id)
			);
			setOtherClusters(otherClusters);
		}
	}, [clusters]);

	const enrollToCluster = async ({ clusterID, enqueueSnackbar }) => {
		if (!engineer) {
			setOpen(true);
			return;
		}
		try {
			const neededClusterIndex = otherClusters.findIndex((c) => c._id === clusterID);
			if (neededClusterIndex !== -1) {
				const neededCluster = otherClusters[neededClusterIndex];
				const newOtherClusters = [...otherClusters];
				newOtherClusters.splice(neededClusterIndex, 1);

				setOtherClusters(newOtherClusters);
				setEnrolledClusters((prevEnrolledClusters) => [...prevEnrolledClusters, neededCluster]);

				await axios.put(
					`${API_URL}/cluster/enrollCluster/${clusterID}`,
					{},
					{
						headers: {
							Engineer: engineer?._id
						}
					}
				);

				const allClusters = await fetchAllEnrolledClusters(engineer, enqueueSnackbar);
				if(allClusters.length === 1){
					completeAchievement({
						id: achievementID.enrollToFirstCluster,
						enqueueSnackbar: enqueueSnackbar
					}).catch((error) => enqueueSnackbar(error?.message || "server error", {variant: "error"}));
				}
				router.push(`/clusters/${clusterID}`);
			}
		} catch (error) {
			// Throw error here
		}
	};

	const handleViewMoreClick = ({ group }) => {
		if (!engineer) {
			setOpen(true);
			return;
		}
		setViewMore({
			...viewMore,
			[group]: !viewMore[group]
		});
	};

	const handleFilterClick = ({ el }) => {
		const newFilter = filter.filter((val) => val !== el);
		filter.includes(el) ? setFilter(newFilter) : setFilter([...filter, el]);
	};

	const openCluster = ({ path }) => {
		if (!engineer) {
			setOpen(true);
			return;
		}
		router.push(path);
	};

	return (
		<ClustersContext.Provider
			value={{
				loading,
				clusters,
				enrolledClusters,
				completedClusters,
				upcomingClusters,
				otherClusters,
				filter,
				viewMore,
				handleViewMoreClick,
				handleFilterClick,
				enrollToCluster,
				openCluster
			}}
		>
			{children}
		</ClustersContext.Provider>
	);
};

export default ClustersState;

ClustersState.propTypes = {
	children: PropTypes.any
};
