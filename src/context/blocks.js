"use client";
import { fetchBlocks } from "@api";
import { API_URL } from "@constants";
import { getEngineer } from "@cookies";
import { AuthError, ServerError } from "@lib";
import axios from "axios";
import PropTypes from "prop-types";
import { useState } from "react";
import { useEffect } from "react";
import React, { createContext } from "react";

export const BlocksContext = createContext();

export const BlocksState = ({ children, parameters }) => {
	const engineer = getEngineer();
	const [blocks, setBlocks] = useState([]);
	const [loading, setLoading] = useState(true);
	const [currentBlock, setCurrentBlock] = useState([]);
	const [completedBlocks, setCompletedBlocks] = useState([]);
	const [nextBlocks, setNextBlocks] = useState([]);

	useEffect(() => {
		const bringBlocks = async () => {
			if (engineer) {
				if (parameters?.id !== undefined) {
					console.log(parameters?.id);
					setLoading(true);
					try {
						const res = await fetchBlocks({ clusterID: parameters?.id });
						setBlocks(res);
					} catch (error) {
						console.log(error);
						throw new ServerError("Server Error");
					} finally {
						setLoading(false);
					}
				} else {
					setBlocks([]);
				}
			} else {
				throw new AuthError("Authorization Error");
			}

			//These commented lines are to be uncomment if we allow non logged in users to show clusters!
			//TO BE DISCUSSED
		};
		bringBlocks();
	}, []);

	useEffect(() => {
		setCurrentBlock(blocks?.filter((b) => b?.inProgress?.includes(engineer?._id)));
		setCompletedBlocks(blocks?.filter((b) => b?.done?.includes(engineer?._id)));
		setNextBlocks(
			blocks?.filter(
				(b) => !b?.inProgress?.includes(engineer?._id) && !b?.done?.includes(engineer?._id)
			)
		);

		if (currentBlock?.length === 0 && nextBlocks?.length > 0) {
			const completedBlockArray = completedBlocks;
			completedBlockArray.sort((a, b) => parseInt(a?.position) - parseInt(b?.position));
			const pos = completedBlockArray.pop().position;
			nextBlocks.forEach((b) => console.log(parseInt(b?.position), parseInt(pos) + 1));
			const nextBlock = nextBlocks.filter((b) => parseInt(b.position) === parseInt(pos) + 1);

			const enrollToBlock = async () => {
				try {
					await axios.put(
						`${API_URL}/block/enrollBlock/${nextBlock[0]?._id}`,
						{},
						{
							headers: {
								Engineer: engineer?._id
							}
						}
					);

					const newNextBlocks = nextBlocks.filter((b) => b?._id !== nextBlock[0]?._id);
					setNextBlocks(newNextBlocks);
					setCurrentBlock(nextBlock);
				} catch (error) {
					console.log(error);
				}
			};
			enrollToBlock();
		}
	}, [blocks]);

	return (
		<BlocksContext.Provider
			value={{
				loading,
				currentBlock,
				nextBlocks,
				completedBlocks,
				blocks
			}}
		>
			{children}
		</BlocksContext.Provider>
	);
};

BlocksState.propTypes = {
	children: PropTypes.any,
	parameters: PropTypes.any
};
