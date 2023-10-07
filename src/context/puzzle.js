"use client";
import { fetchPuzzle } from "@api";
import { incompletePuzzleState } from "@atom";
import { API_URL } from "@constants";
import { getEngineer } from "@cookies";
import { AuthError, ServerError } from "@lib";
import axios from "axios";
import { usePathname, useRouter } from "next/navigation";
import { useSnackbar } from "notistack";
import PropTypes from "prop-types";
import React, { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import { createContext } from "react";
import { useSetRecoilState } from "recoil";

export const PuzzleContext = createContext();

export const PuzzleState = ({ children, parameters }) => {
	const engineer = getEngineer();
	const [block, setBlock] = useState([]);
	const [loading, setLoading] = useState(false);
	const [open, setOpen] = useState(false); //Block Or Puzzle Modal
	const [open1, setOpen1] = useState(false); //Task Modal
	const [index, setIndex] = useState(null);
	const carouselRef = useRef(null);
	const [content, setContent] = useState();
	const [taskData, setTaskData] = useState();
	const setIncompleteModal = useSetRecoilState(incompletePuzzleState);
	const [opacityIndex, setOpacityIndex] = useState(0);
	const [blockModalData, setBlockModalData] = useState();
	const [taskLoading, setTaskLoading] = useState(false);
	const { enqueueSnackbar } = useSnackbar();
	const router = useRouter();

	useEffect(() => {
		const bringPuzzle = async () => {
			if (engineer) {
				setLoading(true);
				try {
					const res = await fetchPuzzle({ blockID: parameters?.blockId });
					var data = res;
					// console.log(data);
					// console.log(data.content);
					// console.log(3)
					data.content.map((el) => {
						el.inProgress.includes(engineer?._id)
							? (el.status = "In Progress")
							: el.done.includes(engineer?._id)
								? (el.status = "Done")
								: (el.status = "Locked");
					});

					setBlock(data);
					setContent(data?.content);
				} catch (error) {
					throw new ServerError("Server Error");
				} finally {
					setLoading(false);
				}
			} else {
				throw new AuthError("Authorization Error");
			}

			// These commented lines are to be uncomment if we allow non logged in users to show clusters!
			// TO BE DISCUSSED
		};

		bringPuzzle();
	}, []);

	useEffect(() => {
		for (var i = 0; i < content?.length; i++) {
			if (content[i]?.status === "In Progress") {
				setOpacityIndex(i + 1);
				break;
			}
		}
	}, [content]);

	const handlePuzzleClick = ({ i }) => {
		if (i >= opacityIndex) {
			setIncompleteModal(true);
			return;
		}
		setIndex(i);
		setBlockModalData(content[i]);
		setOpen(true);
		return;
	};

	const handleTaskClick = ({ data }) => {
		setTaskData(data);
		setOpen1(true);
	};

	const toggleBlockModal = () => {
		setOpen(!open);
	};

	const toggleTaskModal = () => {
		setOpen1(!open1);
	};
	const pathName = usePathname();
	const handleDoneClick = async () => {
		// alert(5)

		const contentPosition = content[index]?.position;
		const taskPosition = taskData?.position;

		const pathArray = pathName.split("/");

		const clusterID = pathArray[2];
		const blockID = pathArray[3];

		if (taskData?.users?.includes(engineer?._id)) {
			//Set done as true
		} else {
			try {
				const res = await axios.put(
					`${API_URL}/block/doneTask?contentPosition=${contentPosition}&taskPosition=${taskPosition}`,
					{},
					{
						headers: {
							Cluster: clusterID,
							Block: blockID,
							Engineer: engineer?._id
						}
					}
				);

				if (res.status === 200) {
					console.log(200);
					if (res.data.task === 1) {
						setOpen1(false);
						const newData = taskData;
						newData?.users?.push(engineer?._id);
						setTaskData(newData);
						console.log("task");
						enqueueSnackbar("Task completed!");
					}
					if (res.data.puzzleBlock === 1) {
						var newContent = content;
						var specifiedIndex = newContent?.findIndex((c) => c.position === contentPosition);
						var specifiedContent = newContent[specifiedIndex];
						specifiedContent?.done?.push(engineer?._id);
						const initialInProgIndex = specifiedContent?.inProgress?.findIndex(
							(c) => c === engineer?._id
						);
						console.log("puzzleBlock");
						specifiedContent?.inProgress.splice(initialInProgIndex, 1);
						newContent[specifiedIndex] = specifiedContent;
						window.location.reload();
						setContent(newContent);
					}
					if (res.data.puzzle === 1) {
						setOpen1(false);
						setOpen(false);
						console.log("puzzle");
						window.location.reload();
						return;
					}
					if (res.data.cluster === 1) {
						setOpen(false);
						setOpen1(false);
						router.push("/clusters");
						console.log("cluster");
						return;
					}
					if (res.data.enrollPuzzleBlock === 1) {
						enqueueSnackbar("New puzzle unlocked");
						setOpen(false);
						setOpen1(false);
						console.log("enroll puzzle block");
						window.location.reload();
						return;
					}
					if (res.data.enrollBlock === 1) {
						router.push(`/clusters/${clusterID}`);
						setOpen(false);
						console.log("enroll block");
						setOpen1(false);
						enqueueSnackbar("Enrolled to new block");
						return;
					}
				} else {
					console.log("something went wrong");
				}
			} catch (error) {
				//Throw error here
				console.log(error);
			}
		}
	};

	return (
		<PuzzleContext.Provider
			value={{
				loading,
				block,
				open,
				open1,
				carouselRef,
				content,
				blockModalData,
				handlePuzzleClick,
				opacityIndex,
				toggleBlockModal,
				toggleTaskModal,
				handleTaskClick,
				taskData,
				taskLoading,
				handleDoneClick
			}}
		>
			{children}
		</PuzzleContext.Provider>
	);
};

PuzzleState.propTypes = {
	children: PropTypes.any,
	parameters: PropTypes.any
};
