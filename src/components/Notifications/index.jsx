"use client";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import React, { useEffect, useState } from "react";
import { AnswerNotification, LikeNotification } from "./Notification";
import { Check, ClearAll } from "@mui/icons-material";
import { addDevice, clearNotifications, getNotifications } from "@api";
import { format } from "timeago.js";
import { useDeviceInfo, useNotificationToken } from "@hooks";
import { useSnackbar } from "notistack";
import { isSupported } from "firebase/messaging";

export const NotificationsTab = () => {
	const [notifications, setNotifications] = useState([]);
	const [notificationsPerm, setNotificationsPerm] = useState(true);
	const [loading, setLoading] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [isLoaded, setIsLoaded] = useState(false);

	const { getTokenn } = useNotificationToken();
	const { getInfo } = useDeviceInfo();
	const { enqueueSnackbar } = useSnackbar();

	useEffect(() => {
		setLoading(true);
		async function gettingNoti() {
			const data = await getNotifications();
			setNotifications(data);
		}
		gettingNoti();
		var NotificationIsSupported = !!(
			(
				window.Notification /* W3C Specification */ ||
				window.webkitNotifications /* old WebKit Browsers */ ||
				navigator.mozNotification
			) /* Firefox for Android and Firefox OS */
		);
		if (NotificationIsSupported) {
			setNotificationsPerm(Notification.permission !== "granted");
		}
		setLoading(false);
	}, []);

	const clearAll = async () => {
		setLoading(true);
		await clearNotifications();
		setNotifications([]);
		setLoading(false);
	};

	const getNotiToken = async () => {
		setIsLoading(true);

		const isSupportedBrowser = await isSupported();
		let device;
		if (isSupportedBrowser) {
			const { error, token } = await getTokenn();
			if (token) {
				setIsLoaded(true);
				device = await getInfo(token);
				await addDevice(device);
			}

			if (error) {
				console.log(error);
				enqueueSnackbar("Error getting notification permission", { variant: "error" });
			}
		} else {
			console.log("browser not supported :(");
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
		<Box display={"flex"} flexDirection={"column"} mx={1} px={1} gap={1}>
			<Box display={"flex"} width={"100%"} justifyContent={"flex-end"}>
				{notifications.length !== 0 && (
					<Button
						sx={{
							gap: 1,
							fontSize: 15,
							px: ["auto", 2],
							py: ["auto", 1],
							mx: [0, 2],
							my: ["auto", 1]
						}}
						onClick={clearAll}
					>
						<ClearAll /> Clear All
					</Button>
				)}
			</Box>
			<Box display={"flex"} flexDirection={"column"} gap={[2, 2]}>
				{notifications.length === 0 ? (
					<>
						{notificationsPerm && (
							<Box
								onClick={getNotiToken}
								sx={{
									mt: -3,
									ml: [0, -3],
									width: ["100vw", "96vw"],
									py: 2,
									height: "fit-content",
									bgcolor: "#1D5352",
									padding: "15px",
									position: "fixed",
									zIndex: 999,
									// display: !notification ? 'flex' : 'none',
									display: "flex",
									justifyContent: "space-between",
									flexDirection: ["column", "row"],
									alignItems: "center",
									cursor: "pointer"
								}}
							>
								<Typography
									sx={{
										textAlign: "center",
										mt: 1,
										mb: 1
									}}
								>
									The notifications are blocked, To hide this warning you need to turn on
									the notifications from your browser settings.
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
							</Box>
						)}
						<Typography fontSize={"20px"} mx={"auto"} my={20}>
							You are all set for today!
						</Typography>
					</>
				) : (
					notifications.map((n, i) => (
						<div key={i}>
							{n.type === "reactions" ? (
								<LikeNotification
									title={n.notifyPost.title}
									body={n.notifyPost.description}
									n={n}
									date={format(n.createdAt)}
								/>
							) : (
								<AnswerNotification
									title={n.notifyPost.title}
									n={n}
									date={format(n.createdAt)}
								/>
							)}
						</div>
					))
				)}
			</Box>
		</Box>
	);
};
