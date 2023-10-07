"use client";
import { Formiz, useForm } from "@formiz/core";
import {
	Add,
	ArrowBack,
	Close,
	PlaylistAddCheckCircle,
	PlaylistAddCircle
} from "@mui/icons-material";
import {
	Box,
	Button,
	Checkbox,
	CircularProgress,
	Divider,
	Drawer,
	Fade,
	FormControlLabel,
	FormGroup,
	IconButton,
	Modal,
	Typography
} from "@mui/material";
import React, { useContext } from "react";
import { useEffect } from "react";
import { useSnackbar } from "notistack";
import {
	fetchListsSever,
	QaddToList,
	SaddToList,
	createList,
	fetchAllListByEngineer
} from "./Functions";
import { ListTag, TitleInput } from "./Inputs";
import { getEngineer } from "@cookies";
import { LoadingButton } from "@mui/lab";
import PropTypes from "prop-types";
// import { AddToList } from "./List/Desktop/AddToList";
import { CreateList } from "./List/Desktop/CreateList";
import { useRecoilState } from "recoil";
import { listModalState } from "@atom";
import { ListModalContext } from "@context/listModal";
import Image from "next/image";
import { useListStore } from "@store/listsStore";
import { completeAchievement } from "@api/achievement";
import { achievementID } from "@lib/achievementID";

export const ListModal = ({ questionId, question, storyId }) => {
	const engineer = getEngineer();
	const { enqueueSnackbar } = useSnackbar();
	const form = useForm();
	const [open, setOpen] = useRecoilState(listModalState);

	const {
		loading,
		setLoading,
		loading1,
		setLoading1,
		lists,
		setLists,
		addLists,
		setAddLists,
		error,
		setError,
		newList,
		setNewList
	} = useContext(ListModalContext);
	const addList = useListStore((state) => state.addList);
	const list1 = useListStore((state) => state.lists);

	const fetchLists = async () => {
		try {
			if (engineer) {
				const res = await fetchListsSever(questionId, question, storyId);
				setLists(res);
			}
		} catch (error) {
			console.log(error);
		} finally {
			setLoading1(false);
		}
	};

	useEffect(() => {
		setLoading1(true);
		fetchLists();
	}, [open]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);
		if (!form?.flatValues?.title) {
			enqueueSnackbar("Title is required to create a list", { variant: "error" });
			setLoading(false);

			return;
		}
		if (!form?.flatValues?.description) {
			enqueueSnackbar("Description is required to create a list", { variant: "error" });
			setLoading(false);

			return;
		}
		if (!form?.flatValues?.tag) {
			enqueueSnackbar("Tag is required to create a list", { variant: "error" });
			setLoading(false);

			return;
		}
		try {
			const res = await createList(form);
			console.log(res);
			addList({ data: res });
			enqueueSnackbar("Successfully created list", { variant: "success" });
			const allLists = await fetchAllListByEngineer(enqueueSnackbar);
			if (allLists?.length === 1) {
				completeAchievement({
					id: achievementID.createList,
					enqueueSnackbar: enqueueSnackbar
				}).catch((error) =>
					enqueueSnackbar(error.message || "Server error", { variant: "error" })
				);
			}
			form.reset();
			setLists((lists) => [...lists, res]);
		} catch (error) {
			enqueueSnackbar(error?.response?.data?.message || "Unknown error occured", {
				variant: "error"
			});
		} finally {
			fetchLists();
			setLoading(false);
			setOpen(false);
		}
		setNewList(false);
		setLoading(false);
	};

	const addToList = async (question, questionId, engineerId, storyId) => {
		console.log(question, questionId, engineerId, storyId);
		setLoading(true);
		if (question) {
			addLists.forEach(async (listId) => {
				try {
					const newLists = lists.filter((id) => id !== listId);
					setLists(newLists);
					await QaddToList(questionId, listId, engineerId);
				} catch (error) {
					setError(error);
				} finally {
					fetchLists();
				}
			});

			if (error) {
				enqueueSnackbar(error?.response?.data?.message || "Unknown error occured", {
					variant: "error"
				});
			} else {
				await fetchLists();
				enqueueSnackbar("Question successfully added to list", { variant: "success" });
			}
			setOpen(false);
			setLoading(false);
			setAddLists([]);
		} else {
			addLists.forEach(async (listId) => {
				try {
					const newLists = lists.filter((id) => id !== listId);
					setLists(newLists);
					await SaddToList(storyId, listId, engineerId);
				} catch (error) {
					setError(error);
				} finally {
					fetchLists();
				}
			});
			if (error) {
				enqueueSnackbar(error?.response?.data?.message || "Unknown error occured", {
					variant: "error"
				});
			} else {
				enqueueSnackbar("Story successfully added to list", { variant: "success" });
			}
			setOpen(false);
			setLoading(false);
			setAddLists([]);
		}
	};

	const pushToList = (e) => {
		if (addLists.includes(e.target.id)) {
			const newAddLists = addLists.filter((id) => id !== e.target.id);
			setAddLists(newAddLists);
		} else {
			setAddLists([...addLists, e.target.id]);
		}
	};

	return (
		<>
			<Modal
				open={open}
				onClose={() => setOpen(false)}
				sx={{
					height: "100vh",
					width: "100vw",
					backgroundColor: "rgba(0, 0, 0, 0.8)",
					display: ["none", "none", "flex"],
					overflowY: "scroll",
					justifyContent: "center",
					alignItems: "center"
				}}
			>
				<Fade in={open}>
					<Box
						sx={{
							width: ["100vw", "60vw", "40vw"],
							maxHeight: ["100vh", "55vh", "90vh"],
							border: ["0px", "1px solid #05D9D7"],
							borderRadius: ["0px", "10px"],
							px: "30px",
							py: "30px",
							display: "flex",
							flexDirection: "column",
							gap: "3vh",
							backgroundColor: "#212121",
							overflowY: "scroll"
						}}
					>
						<>
							<Box
								sx={{
									display: [newList ? "none" : "flex"],
									justifyContent: "space-between",
									alignItems: "center"
								}}
							>
								<Typography
									sx={{
										flexGrow: 1
									}}
								>
									Add To List
								</Typography>
								<IconButton onClick={() => setOpen(false)}>
									<Close
										sx={{
											color: "#05D9D7"
										}}
									/>
								</IconButton>
							</Box>
							<Box
								sx={{
									display: [newList ? "none" : "flex"],
									flexDirection: "column",
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
											ml: 2
										}}
									>
										{lists && lists.length > 0 ? (
											lists.length > 0 &&
											lists?.map((l, i) => (
												<FormControlLabel
													key={i}
													control={
														<Checkbox
															defaultChecked={false}
															onChange={pushToList}
															id={l?._id}
															checked={addLists?.includes(l?._id) || false}
															sx={{
																color: "#05D9D7!important"
															}}
															// defaultChecked={false}
														/>
													}
													label={l?.title}
													sx={{
														maxWidth: "50vw",
														overflowX: "scroll"
													}}
												/>
											))
										) : (
											<Box
												display={"flex"}
												flexDirection={"column"}
												alignSelf={"center"}
												alignItems={"center"}
												justifySelf={"center"}
											>
												<Image
													src="/images/list.svg"
													width={100}
													height={150}
													alt="No list"
												/>
												<Typography
													textAlign={"center"}
													color={"#1D5352"}
													fontSize={15}
												>
													You haven&#39;t created any list yet!
												</Typography>
											</Box>
										)}
									</FormGroup>
								)}
							</Box>
							<Box
								sx={{
									display: [lists?.length === 0 || newList ? "none" : "flex"]
								}}
							>
								<Box flexGrow={1}></Box>
								<LoadingButton
									loading={loading}
									disabled={addLists?.length === 0 || lists?.length === 0 || loading}
									sx={{
										paddingX: "20px",
										border:
											addLists?.length === 0 || lists?.length === 0
												? "1px solid grey"
												: "1px solid white",
										borderRadius: "20px",
										":hover": {
											backgroundColor: "white",
											color: "#212121"
										}
									}}
									// onClick={addToList}
									onClick={() => addToList(question, questionId, engineer?._id, storyId)}
								>
									Add
								</LoadingButton>
							</Box>
						</>
						<Divider
							sx={{
								backgroundColor: "#1D5352",
								my: 1.5,
								display: [newList ? "none" : "flex"]
							}}
						/>
						<Box display={!newList ? "flex" : "none"}>
							<Button
								sx={{
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
									fontWeight: 400,
									borderRadius: "30px"
								}}
								onClick={() => setNewList(true)}
							>
								<Add
									sx={{
										mr: 2
									}}
								/>
								Create New List
							</Button>
						</Box>

						<CreateList
							fetchLists={fetchLists}
							setOpen={setOpen}
							enqueueSnackbar={enqueueSnackbar}
						/>
					</Box>
				</Fade>
			</Modal>

			<Drawer
				open={open}
				anchor="left"
				onClose={() => setNewList(false)}
				sx={{
					width: "100vw",
					display: ["flex", "flex", "none"]
				}}
				PaperProps={{
					sx: {
						width: "100vw",
						backgroundColor: "rgba(0, 0, 0, 0.5)",
						backdropFilter: "blur(5px)"
					}
				}}
			>
				<Box
					sx={{
						dipslay: "flex",
						flexDirection: "column",
						pl: 2.5,
						px: 2.5,
						mt: 9,
						pb: 5,
						maxHeight: "85vh",
						overflowY: "hidden"
					}}
				>
					<Box
						sx={{
							display: newList ? "none" : "flex",
							alignItems: "center",
							justifyContent: "space-between"
						}}
					>
						<IconButton onClick={() => setOpen(false)}>
							<ArrowBack sx={{ color: "#05D9D7" }} />
						</IconButton>
						<LoadingButton
							loading={loading}
							sx={{
								color: "#05D9D7",
								borderRadius: "30px",
								px: "10px",
								py: "2px"
							}}
							onClick={() => addToList(question, questionId, engineer._id, storyId)}
						>
							Add To List
						</LoadingButton>
					</Box>

					<Box
						mt={3}
						maxHeight={"60vh"}
						sx={{
							overflowY: "scroll",
							display: newList ? "none" : "flex",
							flexDirection: "column",
							alignItems: "flex-start"
						}}
					>
						{lists?.length > 0 &&
							lists?.map((l, i) => (
								<Button
									key={i}
									onClick={pushToList}
									id={l?._id}
									sx={{
										color: addLists?.includes(l?._id) ? "#05D9D7" : "white",
										display: "flex",
										gap: "10px",
										borderRadius: "30px"
									}}
								>
									{addLists?.includes(l?._id) ? (
										<PlaylistAddCheckCircle
											id={l?._id}
											sx={{ width: "35px", height: "35px" }}
										/>
									) : (
										<PlaylistAddCircle
											id={l?._id}
											sx={{ width: "35px", height: "35px" }}
										/>
									)}

									<Typography
										sx={{
											color: "white"
										}}
										id={l?._id}
									>
										{l?.title}
									</Typography>
								</Button>
							))}
					</Box>

					<Box mt={"20px"}>
						<Button
							sx={{
								display: newList ? "none" : "flex",
								gap: "15px",
								borderRadius: "30px"
							}}
							onClick={() => setNewList(!newList)}
						>
							<Add />
							<Typography>Create New List</Typography>
						</Button>
					</Box>

					<Fade in={newList}>
						<Box>
							<Box
								sx={{
									display: "flex",
									justifyContent: "space-between",
									alignItems: "center",
									mt: "15px"
								}}
							>
								<Typography
									sx={{
										color: "#05D9D7"
									}}
								>
									Create New List
								</Typography>
								<IconButton onClick={() => setNewList(false)}>
									<Close
										sx={{
											color: "#05D9D7"
										}}
									/>
								</IconButton>
							</Box>
							<form onSubmit={handleSubmit}>
								<Formiz connect={form} onValidSubmit={handleSubmit}>
									<Box
										sx={{
											display: "flex",
											justifyContent: "center",
											mt: 2,
											flexDirection: "column",
											gap: "25px"
										}}
									>
										<TitleInput
											name="title"
											label="Name"
											type="text"
											placeholder="Name"
											required={true}
										/>
										<ListTag name="tag" />
										<TitleInput
											name="description"
											label="Description"
											type="text"
											placeholder="Description"
											required={true}
										/>
									</Box>
									<Box
										sx={{
											display: "flex",
											alignItems: "flex-end",
											justifyContent: "space-between"
										}}
									>
										<Box> </Box>
										<LoadingButton
											// onClick={handleSubmit}
											type={"submit"}
											loading={loading}
											sx={{
												border: "1px solid grey",
												paddingX: "20px",
												borderRadius: "30px",
												mt: "30px",
												backgroundColor: "grey",
												color: "#212121",
												":hover": {
													backgroundColor: "#212121",
													color: "grey"
												}
											}}
										>
											Create List
										</LoadingButton>
									</Box>
								</Formiz>
							</form>
						</Box>
					</Fade>
					<Divider
						sx={{
							mt: 2,
							mb: 2,
							backgroundColor: "#1D5352"
						}}
					/>
				</Box>
			</Drawer>
		</>
	);
};

ListModal.propTypes = {
	open: PropTypes.any,
	setOpen: PropTypes.any,
	questionId: PropTypes.any,
	question: PropTypes.any,
	storyId: PropTypes.any
};
