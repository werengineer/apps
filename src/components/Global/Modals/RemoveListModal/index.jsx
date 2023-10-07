import { Close } from "@mui/icons-material";
import LoadingButton from "@mui/lab/LoadingButton";
import {
	Box,
	Checkbox,
	CircularProgress,
	Fade,
	FormControlLabel,
	FormGroup,
	IconButton,
	Modal,
	Typography
} from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { getEngineer } from "@cookies";
import { useSnackbar } from "notistack";
import { List, QremovedFromList } from "./Functions";
import { PropTypes } from "prop-types";
import { API_URL } from "@constants";
import { useRecoilState } from "recoil";
import { removeListModalState } from "@atom";

export const RemoveListModal = ({ questionId, question, storyId }) => {
	const [open, setOpen] = useRecoilState(removeListModalState);
	const engineer = getEngineer();
	const [lists, setLists] = useState([]);
	const [removeLists, setRemoveLists] = useState([]);
	const [loading, setLoading] = useState(false);
	const [loading1, setLoading1] = useState(true);
	const [error, setError] = useState();
	const { enqueueSnackbar } = useSnackbar();
	const [newList, setNewList] = useState(false);
	const [counter, setCounter] = useState(1);
	setTimeout(() => {
		setCounter(counter + 1);
	}, 5000);

	const fetchLists = async () => {
		try {
			if (engineer) {
				const res = await List(question, questionId, storyId);
				setLists(res);
			}
		} catch (error) {
			console.log(error);
		} finally {
			setLoading1(false);
		}
	};

	useEffect(() => {
		fetchLists();
		setLoading1(true);
	}, [open]);

	const removeFromList = async (question, questionId, engineerId, storyId) => {
		setLoading(true);
		if (question) {
			removeLists.forEach(async (listId) => {
				try {
					const newLists = lists.filter((id) => id !== listId);
					setLists(newLists);
					const res = await QremovedFromList(questionId, listId, engineerId);
					console.log(res);
					return;
				} catch (error) {
					setError(error);
				}
			});

			if (error) {
				enqueueSnackbar(error || "Unknown error occured", { variant: "error" });
			} else {
				await fetchLists();
				enqueueSnackbar("Question removed from list", { variant: "success" });
			}
			setLoading(false);
			setOpen(false);
			setRemoveLists([]);
		} else {
			removeLists.forEach(async (listId) => {
				try {
					const newLists = lists.filter((id) => id !== listId);

					setLists(newLists);
					const res = await axios.put(
						`${API_URL}/list/removeStoryFromList/${storyId}`,
						{},
						{
							headers: {
								EngineerID: engineerId,
								ListID: listId
							}
						}
					);
				} catch (error) {
					setError(error);
				}
			});
			if (error) {
				enqueueSnackbar(error || "Unknown error occured", { variant: "error" });
			} else {
				enqueueSnackbar("Story removed from list", { variant: "success" });
			}
			setLoading(false);
			setOpen(false);
			setRemoveLists([]);
		}
	};

	const popFromList = (e) => {
		if (removeLists.includes(e.target.id)) {
			const newRemoveLists = removeLists.filter((id) => id !== e.target.id);
			setRemoveLists(newRemoveLists);
		} else {
			setRemoveLists([...removeLists, e.target.id]);
		}
		console.log(removeLists);
	};

	return (
		<Modal
			// open={open}
			open={open}
			onClose={() => setOpen(false)}
			sx={{
				height: "100vh",
				width: "100vw",
				backgroundColor: "rgba(0, 0, 0, 0.8)"
			}}
		>
			<Fade in={open}>
				<Box
					width={["85vw", "85vw", "60vw"]}
					position={"relative"}
					sx={{
						backgroundColor: "#212121",
						border: "1px solid #05D9D7",
						margin: "auto",
						marginTop: "14vh",
						borderRadius: "10px",
						padding: "30px 40px",
						display: "flex",
						flexDirection: "column",
						gap: "2vh"
						// height: 'auto',
						// overflowY: 'scroll'
					}}
				>
					<Box
						sx={{
							display: "flex",
							justifyContent: "space-between",
							alignItems: "center"
						}}
					>
						<Typography
							sx={{
								flexGrow: 1
							}}
						>
							Remove From List
						</Typography>
						<IconButton onClick={() => setOpen(false)}>
							<Close
								sx={{
									color: "#05D9D7"
								}}
							/>
						</IconButton>
					</Box>
					<Box>
						<Box
							sx={{
								maxHeight: !newList ? "40vh" : "12vh",
								overflowY: "scroll"
							}}
						>
							{loading1 ? (
								<Box
									sx={{
										display: "flex",
										width: ["100%", "100%", "100%"],
										height: ["100%", "100%"],
										justifyContent: "center",
										alignItems: "center",
										color: "#1D5352"
									}}
								>
									<CircularProgress color="inherit" />
								</Box>
							) : (
								<FormGroup
									sx={{
										ml: [0, 2],
										overflowX: ["scroll", "none"]
									}}
								>
									{lists.map((l, i) => (
										<FormControlLabel
											key={i}
											control={
												<Checkbox
													defaultChecked={false}
													onChange={popFromList}
													id={l?._id}
													checked={removeLists.includes(l?._id) || false}
													sx={{
														color: "#05D9D7!important"
													}}
													// defaultChecked={false}
												/>
											}
											label={l?.title}
										/>
									))}
								</FormGroup>
							)}
						</Box>
						{lists.length === 0 && (
							<Typography
								sx={{
									color: "#1D5352",
									fontSize: "15px",
									mt: 3
								}}
							>
								This {question ? "Question" : "Story"} has not been added to any list, Add
								to list
							</Typography>
						)}
					</Box>

					<Box
						sx={{
							display: lists.length === 0 ? "none" : "flex"
						}}
					>
						<Box flexGrow={1}></Box>
						<LoadingButton
							loading={loading === true}
							disabled={removeLists.length === 0 || lists.length === 0 || loading}
							sx={{
								display: loading ? "none" : "flex",
								paddingX: "20px",
								border:
									removeLists.length === 0 || lists.length === 0
										? "1px solid grey"
										: "1px solid white",
								borderRadius: "20px",
								":hover": {
									backgroundColor: "white",
									color: "#212121"
								}
							}}
							// onClick={addToList}
							onClick={() => removeFromList(question, questionId, engineer._id, storyId)}
						>
							Remove
						</LoadingButton>

						<LoadingButton
							loading={true}
							disabled={removeLists.length === 0 || lists.length === 0 || loading}
							sx={{
								display: loading ? "flex" : "none",
								paddingX: "20px",
								border:
									removeLists.length === 0 || lists.length === 0
										? "1px solid grey"
										: "1px solid white",
								borderRadius: "20px",
								":hover": {
									backgroundColor: "white",
									color: "#212121"
								}
							}}
							onClick={() => removeFromList(question, questionId, engineer._id, storyId)}
						>
							Remove
						</LoadingButton>
					</Box>
				</Box>
			</Fade>
		</Modal>
	);
};

RemoveListModal.propTypes = {
	open: PropTypes.any,
	setOpen: PropTypes.any,
	questionId: PropTypes.any,
	question: PropTypes.any,
	storyId: PropTypes.any,
	story: PropTypes.any
};
