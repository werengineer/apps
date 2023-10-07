import { Box, Fade, Grid, IconButton, Modal, Typography } from "@mui/material";
import React from "react";
import { useRecoilState } from "recoil";
import { contentModalState } from "@atom";
import { Close } from "@mui/icons-material";

export const ContentModal = () => {
	const [open, setOpen] = useRecoilState(contentModalState);

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<Modal
			open={open}
			sx={{
				width: "100vw",
				minHeight: "100vh",
				// backgroundColor: 'rgba(0, 0, 0, 0.8)',
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				backdropFilter: "blur(10px)",
				background:
					"linear-gradient(180deg, rgba(39, 39, 39, 0.94) 0%, rgba(39, 39, 39, 0.83) 0.01%, rgba(39, 39, 39, 0.08) 100%)"
			}}
		>
			<Fade open={open}>
				<Box
					sx={{
						width: "100vw",
						height: "100vh",
						overflowY: "scroll",
						opacity: "1!important",
						visibility: "visible!important",
						pt: "50px",
						px: "20px",
						display: "flex",
						flexDirection: "column",
						alignItems: "flex-start",
						gap: "20px"
					}}
				>
					<Box
						sx={{
							display: "flex",
							justifyContent: "space-between",
							width: "100%"
						}}
					>
						<Typography
							sx={{
								fontSize: "30px",
								fontWeight: 600
							}}
						>
							What is HTML?
						</Typography>

						<IconButton disableRipple onClick={handleClose}>
							<Close
								sx={{
									color: "#05D9D7"
								}}
							/>
						</IconButton>
					</Box>
					<Typography
						sx={{
							color: "#B3B3B3"
						}}
					>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat nostrum assumenda
						rerum obcaecati nesciunt aliquid quia. Exercitationem cumque ex perferendis
						architecto facere debitis esse optio placeat quas! Numquam suscipit ipsam iure,
						cupiditate est iste quam sit delectus ex, ut asperiores facilis impedit quae
						temporibus cum adipisci saepe earum. Illo doloribus sequi quas nisi dolorum
						laudantium quisquam, omnis minus commodi, officiis impedit eos mollitia, optio
						quaerat! Ipsam odit soluta amet distinctio maiores quod iusto, facilis consequatur
						molestiae atque dolore at numquam culpa error. Doloremque assumenda exercitationem
						consectetur optio molestias amet eveniet earum. Rerum totam consequatur, iste
						nihil deserunt impedit eum? Ad!
					</Typography>

					<Box
						sx={{
							mt: "11px",
							display: "flex",
							flexDirection: "column",
							gap: "50px"
						}}
					>
						<Typography>Tasks</Typography>
						<Box
							sx={{
								width: "97vw",
								pl: "20px",
								display: "flex"
							}}
						>
							<Grid
								container
								sx={{
									backgroundColor: "red"
									// width: '100%!important'
								}}
								spacing={2}
								columnSpacing={3}
								rowSpacing={5}
							>
								<Grid item xs={12} md={6}>
									Hello
								</Grid>

								<Grid item xs={12} md={6}>
									Hello
								</Grid>
							</Grid>
						</Box>
					</Box>
				</Box>
			</Fade>
		</Modal>
	);
};
