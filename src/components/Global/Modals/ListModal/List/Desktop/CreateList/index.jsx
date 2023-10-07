import { LoadingButton } from "@mui/lab";
import { Box, IconButton, Typography } from "@mui/material";
import React, { useContext } from "react";
import { ListTag, TitleInput } from "../../../Inputs";
import { Formiz, useForm } from "@formiz/core";
import { Close } from "@mui/icons-material";
import { PropTypes } from "prop-types";
import { createList, fetchAllListByEngineer } from "../../../Functions";
import { ListModalContext } from "@context/listModal";
import { completeAchievement } from "@api/achievement";
import { achievementID } from "@lib/achievementID";
import axios from "axios";
import { API_URL } from "@constants";
import { getEngineer } from "@cookies";

export const CreateList = ({ fetchLists, setOpen, enqueueSnackbar }) => {
	const form = useForm();
	const engineer = getEngineer();
	const { loading, setLoading, setLists, lists, newList, setNewList } =
		useContext(ListModalContext);

	const handleSubmit = async () => {
		setLoading(true);
		try {
			console.log("Here");
			const res = await createList(form);
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
			setLists([...lists, res.data]);
		} catch (error) {
			enqueueSnackbar("Internal Server Error Occur!", { variant: "error" });
		} finally {
			await fetchLists();
			setLoading(false);
			setOpen(false);
			setNewList(false);
		}
		setLoading(false);
	};

	return (
		<Box>
			<Box display={newList ? "flex" : "none"} flexDirection={"column"} gap={"1vh"}>
				<Box
					display={"flex"}
					justifyContent={"space-between"}
					alignItems={"center"}
					paddingX={"1vw"}
				>
					<Typography fontSize={20}>Create List</Typography>
					<IconButton onClick={() => setNewList(false)}>
						<Close
							sx={{
								color: "#05D9D7"
							}}
						/>
					</IconButton>
				</Box>

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
					<Box display={"flex"} justifyContent={"end"} mt={[3, 3]}>
						<LoadingButton
							onClick={handleSubmit}
							loading={loading}
							type="submit"
							sx={{
								color: "grey",
								border: "1px solid grey",
								paddingX: "30px",
								borderRadius: "30px",
								zIndex: 999,
								":hover": {
									color: "black",
									backgroundColor: "white",
									border: "1px solid white"
								}
							}}
						>
							Create List
						</LoadingButton>
					</Box>
				</Formiz>
			</Box>
		</Box>
	);
};

CreateList.propTypes = {
	setOpen: PropTypes.any,
	enqueueSnackbar: PropTypes.any,
	fetchLists: PropTypes.any
};
