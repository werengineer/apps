import { addDevice } from "@api";
import { getEngineer } from "@cookies";
import { useDeviceInfo, useNotificationToken } from "@hooks";
import { Check, Close } from "@mui/icons-material";
import { Box, Button, CircularProgress, Fade, IconButton, Modal, Typography } from "@mui/material";
import { isSupported } from "firebase/messaging";
import { useSnackbar } from "notistack";
import React, { useEffect, useState } from "react";

export const AcceptNotificationModal = () => {
	const [open, setOpen] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [isLoaded, setIsLoaded] = useState(false);
	const { getTokenn } = useNotificationToken();
	const { getInfo } = useDeviceInfo();
	const { enqueueSnackbar } = useSnackbar();
	const engineer = getEngineer();
	useEffect(() => {
		var NotificationIsSupported = !!(window.Notification /* W3C Specification */ || window.webkitNotifications /* old WebKit Browsers */ || navigator.mozNotification /* Firefox for Android and Firefox OS */);
		if (NotificationIsSupported) {
			if (Notification.permission === "granted" || !engineer) {
				setOpen(false);
			} else {
				setOpen(true);
			}
		}
	}, []);

	const getNotiToken = async () => {
		setIsLoading(true);
		try {
			
			const isSupportedBrowser = await isSupported();
			let device;
			if (isSupportedBrowser) {
				const { error, token } = await getTokenn();
				if (token) {
					setIsLoaded(true);
					device = await getInfo(token);
					await addDevice(device);
					setOpen(false);
				}

				if (error) {
					console.log(error);
					enqueueSnackbar("Error getting notification permission", { variant: "error" });
				}
			} else {
				console.log("browser not supported :(");
			}
		} catch (error) {
			console.log("An Error Occured", error);
			enqueueSnackbar("Error while getting notification permission", { variant: "error" });
		}
		setIsLoading(false);
	};

	let label = "Receive Notifications";

	if (isLoading) {
		label = "Allowing Notifications";
	} else if (isLoaded) {
		label = "Allowed Notifications";
	}
	return (
		<Modal
			open={open}
			sx={{
				height: "100vh",
				width: "100vw !important ",
				display: ["flex", "flex", "flex"],
				backdropFilter: "blur(20px)",
				justifyContent: "center",
				alignItems: "center",
				overflowY: "scroll"
			}}
		>
			<Fade in={open}>
				<Box
					sx={{
						display: "flex",
						justifyContent: "space-between",
						flexDirection: ["row-reverse", "row"]
					}}
				>
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
					<Box
						sx={{
							width: ["100vw", "70vw", "50vw"],
							height: ["100vh", "55vh", "55vh"],
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
						<Typography fontSize={25} fontWeight={700} mb="2">
							Accept Notification
						</Typography>
						<Typography fontSize={20} mb="2">
							We need you to allow receiving notifications from this website so that we can
							deliver the messages to you when you need them the most.
						</Typography>

						<Typography fontSize={20} my="2">
							After clicking on the &quot;Receive Notifications&quot; button, a popup like in
							the image below would open, click on &quot;Allow&quot;.
						</Typography>

						<Button
							variant="outline"
							colorScheme="teal"
							mb="2"
							onClick={getNotiToken}
							disabled={isLoading || isLoaded}
						>
							{isLoading ? <CircularProgress /> : isLoaded && <Check />}
							{label}
						</Button>

						{/* <Image
					boxSize="full"
					src="/assets/images/allow-notification-ss.png"
					alt="How to allow notifications"
				/> */}
					</Box>
				</Box>
			</Fade>
		</Modal>
	);
};
