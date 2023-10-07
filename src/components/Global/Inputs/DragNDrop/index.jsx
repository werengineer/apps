"use client";
import { useField } from "@formiz/core";
import { Close, CloudUpload, Description } from "@mui/icons-material";
import { Box, Button, IconButton, Stack, Typography } from "@mui/material";
import { useSnackbar } from "notistack";
import React from "react";
import { FileUploader } from "react-drag-drop-files";
import PropTypes from "prop-types";

const fileTypes = ["JPG", "PNG", "JPEG"];

export const DragNDrop = (props) => {
	// const [file, setFile] = useState(null);
	const { errorMessage, isValid, isPristine, isSubmitted, setValue, value } = useField(props);
	const { form } = props;

	// const int = 1024000

	const handleChange = (file) => {
		setValue("");
		setValue(file);
		form.setFieldsValues({
			file: file
		});
	};

	const showError = !isValid && (!isPristine || isSubmitted);
	const { enqueueSnackbar } = useSnackbar();
	return (
		<>
			{/* <h1>Hello To Drag & Drop Files</h1> */}
			<FileUploader
				onDrop={handleChange}
				onSelect={handleChange}
				multiple={false}
				handleChange={handleChange}
				maxSize={5}
				onSizeError={() =>
					enqueueSnackbar("The file size cannot be more than 3mb", { variant: "error" })
				}
				types={fileTypes}
			>
				{/* <input name={name} value={value} hidden onChange={handleChange} /> */}
				<Box
					sx={{
						border: "1px dashed #ffffff",
						borderRadius: 3,
						width: ["300px", "400px", "500px"],
						minWidth: ["240px"],
						height: ["250px"],
						// marginX: 'auto',
						// p: 2,
						display: !props.hidden ? "flex" : "none",
						flexDirection: "column",
						justifyContent: "center",
						alignItems: "center",
						gap: 1,
						bgcolor: "#0000003d",
						overflow: "hidden",
						maxWidth: "450px"
					}}
				>
					{value ? (
						<Stack
							onClick={() => setValue("")}
							direction={"column"}
							width={["120%", "120%"]}
							marginY="auto"
							gap={2}
						>
							<Stack
								alignItems={"center"}
								justifyContent="center"
								direction={["column", "column"]}
								gap={1}
							>
								<Description sx={{ fontSize: "44px" }} />
								<Stack
									ml={1}
									direction={["column", "row"]}
									sx={{ gap: 0, alignItems: "center", my: "auto" }}
								>
									<Typography
										sx={{
											color: "#ffffff",
											fontSize: "17px",
											fontWeight: "400"
										}}
									>
										{/* {value?.name?.substring(0, 20)} */}
										{value?.name} -
									</Typography>

									<Typography
										sx={{
											color: "#ffffff",
											fontSize: "15px",
											// lineHeight: '20px',
											fontWeight: "400"
										}}
									>
										{value?.size} KB
									</Typography>
								</Stack>
							</Stack>
							<IconButton
								sx={{
									color: "#ffffff",
									width: "20px",
									height: "20px",
									alignSelf: "center",
									p: 2
								}}
							>
								<Close />
							</IconButton>
						</Stack>
					) : (
						<>
							<CloudUpload sx={{ fontSize: "70px", color: "#ffffff" }} />
							<Button
								sx={{
									display: "flex",
									color: "#212121",
									py: 1,
									px: 4.5,
									fontSize: ["15px", "18px"],
									backgroundColor: "white",
									lineHeight: "24px",
									fontWeight: "500",
									WebkitFontSmoothing: "antialiased",
									"&:hover": {
										backgroundColor: "#d6d6d6"
									}
								}}
							>
								Select File
							</Button>
							<Typography
								sx={{
									color: "#ffffff",
									textAlign: "center",
									fontSize: ["13px", "15px"],
									lineHeight: "24px",
									fontWeight: "400"
								}}
							>
								or drop your college id here
							</Typography>
						</>
					)}
				</Box>
			</FileUploader>
			{showError && (
				<Typography
					sx={{
						color: "red",
						alignSelf: "start",
						mt: -1,
						ml: 13,
						mr: 13,
						whiteSpace: "pre-line"
					}}
				>
					{errorMessage}
				</Typography>
			)}
		</>
	);
};

DragNDrop.propTypes = {
	form: PropTypes.any,
	hidden: PropTypes.any
};
