import { Box, Fade, IconButton, Modal, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import { DragNDrop } from "@components/Global";
import { PropTypes } from "prop-types";
import { Close } from "@mui/icons-material";
import { Formiz, useForm } from "@formiz/core";
import { SettingsContext } from "@context/settings";
import { useSnackbar } from "notistack";
import axios from "axios";
import {
	NEXT_PUBLIC_CLOUDINARY_API_KEY,
	NEXT_PUBLIC_CLOUD_BUCKET,
	NEXT_PUBLIC_UPLOAD_PRESET
} from "@constants";
import { LoadingButton } from "@mui/lab";

const DocumentModal = ({ form, open, setOpen }) => {
	// const DocumentForm = useForm();
	const { getBase64, uploadID, setData, data, handleSubmit, setImageUrl } =
		useContext(SettingsContext);
	const [loading, setLoading] = useState(false);
	const { enqueueSnackbar } = useSnackbar();

	const handleSubmit1 = async () => {
		setLoading(true);
		if (form.flatValues.file) {
			try {
				const data1 = await getBase64(form.flatValues.file);
				const uploadFile = await uploadID(data1);
				await handleSubmit(enqueueSnackbar, uploadFile);
				setLoading(false);
				setOpen(false);
			} catch (error) {
				console.log(error);
			}
		}
	};

	return (
		<Modal
			open={open}
			onClose={() => setOpen(false)}
			sx={{
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				backgroundColor: "rgba(0, 0, 0, 0.8)",
				backdropFilter: "blur(10px)"
			}}
			aria-labelledby="full-screen-modal"
			aria-describedby="modal-for-displaying-image-in-full-screen"
		>
			<Box
				sx={{
					boxShadow: 5,
					padding: 2,
					backgroundColor: "#202324",
					maxWidth: "90vw",
					position: "relative",
					height: "auto",
					borderRadius: "5px",
					overflow: "scroll",
					gap: 2,
					display: "flex",
					flexDirection: "column",
					// opacity:'1!important',
					"&:focus": {
						outline: "none"
					}
				}}
			>
				<Typography fontSize={18}>Upload Document</Typography>
				<Formiz connect={form}>
					<DragNDrop form={form} name="file" hidden={false} />
					<LoadingButton
						loading={loading}
						onClick={() => {
							handleSubmit1(enqueueSnackbar);
						}}
					>
						Upload
					</LoadingButton>
				</Formiz>
				<Box
					position={"absolute"}
					top={10}
					right={10}
					mb={3}
					display={"flex"}
					justifyContent={"flex-end"}
				>
					<IconButton onClick={() => setOpen(false)}>
						<Close />
					</IconButton>
				</Box>
			</Box>
		</Modal>
	);
};

export default DocumentModal;

DocumentModal.propTypes = {
	form: PropTypes.any,
	open: PropTypes.any,
	setOpen: PropTypes.any
};
