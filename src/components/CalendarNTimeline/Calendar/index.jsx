"use client";
import { getDay, getUserReactions, reactEvent } from "@api";
import { API_URL } from "@constants";
import { getEngineer } from "@cookies";
import { ArrowBackIos, ArrowForwardIos, Close, FiberManualRecord } from "@mui/icons-material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Grow from "@mui/material/Grow";
import IconButton from "@mui/material/IconButton";
import Modal from "@mui/material/Modal";
import Slide from "@mui/material/Slide";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import axios from "axios";
import dayjs from "dayjs";
import React, { useEffect, useRef, useState } from "react";
import { Badge } from "@mui/base";
import { LoginModal } from "../LoginModal";
import PropTypes from "prop-types";
import { ReactionButtons } from "../ReactionButtons";
import CalendarPicker from "@mui/lab/CalendarPicker";
import PickersDay from "@mui/lab/PickersDay";
import MonthPicker from "@mui/lab/MonthPicker";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";

const minDate = dayjs("2020-01-01T00:00:00.000");
const maxDate = dayjs("2034-01-01T00:00:00.000");

export const Calendar = () => {
	const [date, setDate] = useState(dayjs());
	const monthPicker = useRef();
	const [highlightedDays, setHighlightedDays] = useState([]);
	const [event, setEvent] = useState([]);
	const [forceInActive, setForceInActive] = useState(false);
	const [engineer, setEngineer] = useState();
	const [reaction, setReaction] = useState();
	const [modalState, setModalState] = useState(false);
	const [activeReaction, setActiveReaction] = useState({});

	const monthsForIndex = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December"
	];

	if (monthPicker?.current) {
		monthPicker.current.onwheel = (e) => {
			if (e.wheelDeltaY < 0) {
				setDate((prevDate) => prevDate.add(1, "month"));
			} else if (e.wheelDeltaY > 0) {
				setDate((prevDate) => prevDate.subtract(1, "month"));
			}
		};
	}

	useEffect(() => {
		setForceInActive(false);
		const fetchEvent = async () => {
			try {
				const data = await getDay(date);
				setEvent(data);
			} catch (error) {
				console.log(error);
			}
		};

		fetchEvent();
	}, [date.$D]);

	useEffect(() => {
		const fetchEventDay = async () => {
			try {
				const data = await axios.get(`${API_URL}/calendar/event/month/${date.$M}`);
				// console.log(data.data);
				const highlightDays = [];
				data.data.map((d) => highlightDays.push(d.date));

				setHighlightedDays(highlightDays);

				// console.log(highlightedDays);
			} catch (error) {
				console.log(error);
			}
		};

		fetchEventDay();
	}, [date.$M]);

	function nth(n) {
		return ["st", "nd", "rd"][((((n + 90) % 100) - 10) % 10) - 1] || "th";
	}

	const react = async (reactionId, id, monthId, date) => {
		// console.log(id)
		if (id !== false) {
			// console.log({ reaction: reactionId, id: id, month: monthId, date: date })
			const reaction = await reactEvent(id, reactionId, monthId, date);
			// console.log(reaction);
			userReactions();
			return reaction;
		} else {
			//Setting Modal For Login
			setModalState(true);
		}
	};
	console.log(forceInActive, event);

	const userReactions = async () => {
		const engineer = getEngineer();
		// console.log(engineer)
		setEngineer(engineer);
		const data = await getUserReactions(engineer._id);
		// console.log(data);
		setReaction(data);
	};

	useEffect(() => {
		userReactions();
	}, []);

	return (
		<>
			{/* <NoSsr> */}
			<LocalizationProvider dateAdapter={AdapterDayjs}>
				<Grid
					container
					flexDirection={["column", "row"]}
					spacing={[0, 3]}
					justifyContent={"center"}
				>
					<Grid item xs={4}>
						<Box
							sx={{
								display: ["none", "flex"],
								flexDirection: "column",
								alignItems: "center",
								w: "fit-content",
								width: ["100vw", "100%"],
								paddingY: "0px"
							}}
						>
							{event?.length > 0 && !forceInActive ? (
								<Grow
									in={!forceInActive}
									style={{ transformOrigin: "0 0 0" }}
									{...(!forceInActive ? { timeout: 600 } : {})}
								>
									<Box
										display={["flex"]}
										flexDirection="column"
										p={5}
										gap={3}
										alignItems={"start"}
										direction="column"
									>
										<IconButton
											onClick={() => setForceInActive(true)}
											sx={{ alignSelf: "end" }}
										>
											<Close />
										</IconButton>
										<Typography
											sx={{
												fontSize: "36px",
												lineHeight: "44px",
												fontWeight: 600,
												color: "#50D9D7"
											}}
										>
											{date.$D}
											{nth(date.$D)} {monthsForIndex[date.$M]}
										</Typography>
										<Typography
											sx={{
												fontSize: "30px",
												lineHeight: "44px",
												fontWeight: 600,
												color: "#ffffff"
											}}
										>
											{event[0].event.title}
										</Typography>
										<Typography
											sx={{
												fontSize: "20px",
												lineHeight: "29px",
												fontWeight: 400,
												color: "#ffffff"
											}}
										>
											{event[0].event.description}
										</Typography>
										{/* <ReactionButtons
											activeReaction={activeReaction}
											setActiveReaction={setActiveReaction}
											reaction={reaction ? reaction[date.$M] : false}
											react={react}
											id={engineer ? engineer._id : false}
											date={date.$D}
											monthId={date.$M}
										/> */}
									</Box>
								</Grow>
							) : (
								<Slide
									direction="up"
									in={!event?.length > 0 || forceInActive}
									mountOnEnter
									unmountOnExit
								>
									<Stack p={5} alignItems={"center"} direction="column">
										<Stack
											mb={3}
											direction={"row"}
											spacing={5}
											alignItems="center"
											justifyContent={"center"}
										>
											<IconButton
												onClick={() =>
													setDate((prevDate) => prevDate.subtract(1, "year"))
												}
											>
												<ArrowBackIos sx={{ fontSize: "20px" }} />
											</IconButton>
											<Typography sx={{ fontSize: "24px", color: "#ffffff" }}>
												{date.$y}
											</Typography>
											<IconButton
												onClick={() => setDate((prevDate) => prevDate.add(1, "year"))}
											>
												<ArrowForwardIos sx={{ fontSize: "20px" }} />
											</IconButton>
										</Stack>
										<MonthPicker
											sx={{
												display: ["none", "flex"]
											}}
											date={date}
											minDate={minDate}
											maxDate={maxDate}
											onChange={(newDate) => setDate(newDate)}
											ref={monthPicker}
										/>
									</Stack>
								</Slide>
							)}
						</Box>
						<Box
							width={"100vw"}
							display={["flex", "none"]}
							justifyContent="center"
							alignItems={"center"}
							marginLeft={"1vw"}
							marginTop="3vh"
							marginBottom={"3vh"}
						>
							<Stack
								mb={2}
								direction={"column"}
								spacing={1.5}
								alignItems="center"
								justifyContent={"center"}
							>
								<Stack direction={"row"} paddingX={"10px"} width={"100vw"}>
									<IconButton
										onClick={() => setDate((prevDate) => prevDate.subtract(1, "month"))}
									>
										<ArrowBackIos sx={{ fontSize: "15px", color: "#616161" }} />
									</IconButton>
									<MonthPicker
										sx={{
											display: ["flex", "none"],
											flexDirection: "row",
											maxWidth: "100vw",
											overflowX: "scroll"
										}}
										date={date}
										minDate={minDate}
										maxDate={maxDate}
										onChange={(newDate) => setDate(newDate)}
										ref={monthPicker}
									/>
									<IconButton
										onClick={() => setDate((prevDate) => prevDate.add(1, "month"))}
									>
										<ArrowForwardIos sx={{ fontSize: "15px", color: "#616161" }} />
									</IconButton>
								</Stack>
							</Stack>
						</Box>
					</Grid>
					<Grid item xs={7}>
						<Typography
							sx={{
								fontSize: ["28px", "36px"],
								textAlign: ["center", "left"],
								lineHeight: "44px",
								fontWeight: 600,
								color: "#50D9D7",
								width: ["100vw", "62vw"],
								pl: [0, 14.5],
								pb: 4
							}}
						>
							{date.$D}
							{nth(date.$D)} {monthsForIndex[date.$M]}
						</Typography>
						<Box
							mt={[0, 5]}
							marginLeft="5vw"
							overflow={"hidden"}
							paddingRight={["0vw", "0vw"]}
							display="flex"
							flexDirection={"column"}
							justifyContent="center"
							width={["100vw", "100%"]}
							height="fit-content"
						>
							<CalendarPicker
								renderDay={(day, _value, DayComponentProps) => {
									const isSelected =
										!DayComponentProps.outsideCurrentMonth &&
										highlightedDays.indexOf(day.toDate().getDate()) >= 0;

									return (
										<Badge
											key={day.toString()}
											overlap="circular"
											anchorOrigin={{
												vertical: "bottom",
												horizontal: "left"
											}}
											badgeContent={
												isSelected ? (
													<FiberManualRecord
														sx={{
															zIndex: 1,
															color: "#ffffff",
															fontSize: ["6px", "10px"]
														}}
													/>
												) : undefined
											}
										>
											<PickersDay {...DayComponentProps} />
										</Badge>
									);
								}}
								date={date}
								onChange={(newDate) => setDate(newDate)}
							/>
						</Box>
					</Grid>
				</Grid>
				<LoginModal open={modalState} setModalState={setModalState} />
				{event?.length > 0 && !forceInActive && (
					<CalendarModal
						open={event.length > 0 && !forceInActive}
						toggle={() => setForceInActive(true)}
						d={nth(date.$D)}
						date={date}
						eventDesc={event[0]?.event.description}
						eventTitle={event[0]?.event.title}
						month={monthsForIndex[date?.$M]}
						activeReaction={activeReaction}
						setActiveReaction={setActiveReaction}
						reaction={reaction ? reaction[date.$M] : false}
						react={react}
						id={engineer ? engineer._id : false}
						// date={date.$D}
						// month={date.$M}
					/>
				)}
			</LocalizationProvider>
			{/* </NoSsr> */}
		</>
	);
};

const CalendarModal = ({
	open,
	toggle,
	date,
	eventTitle,
	eventDesc,
	d,
	month,
	activeReaction,
	setActiveReaction,
	reaction,
	react,
	id
}) => (
	<Modal
		open={open}
		onClose={toggle}
		aria-labelledby="modal-modal-title"
		aria-describedby="modal-modal-description"
		sx={{
			zIndex: "1",
			overflow: "scroll",
			filter: blur("10px"),
			display: ["flex", "none"],
			flexDirection: "column",
			backdropFilter: "blur(5px)",
			backgroundColor: "transparent"
		}}
		// closeAfterTransition
	>
		<Box
			zIndex={999}
			display={["flex"]}
			flexDirection="column"
			p={5}
			gap={3}
			alignItems={"start"}
			direction="column"
		>
			<IconButton onClick={toggle} sx={{ alignSelf: "end" }}>
				<Close />
			</IconButton>
			<Typography
				sx={{
					fontSize: "36px",
					lineHeight: "44px",
					fontWeight: 600,
					color: "#50D9D7"
				}}
			>
				{date?.$D}
				{d} {month}
			</Typography>
			<Typography
				sx={{
					fontSize: "30px",
					lineHeight: "44px",
					fontWeight: 600,
					color: "#ffffff"
				}}
			>
				{eventTitle}
			</Typography>
			<Typography
				sx={{
					fontSize: "20px",
					lineHeight: "29px",
					fontWeight: 400,
					color: "#ffffff"
				}}
			>
				{eventDesc}
			</Typography>
			{/* <ReactionButtons
				activeReaction={activeReaction}
				setActiveReaction={setActiveReaction}
				reaction={reaction}
				react={react}
				id={id}
				date={date.$D}
				monthId={date.$M}
			/> */}
		</Box>
		{/* </Fade> */}
	</Modal>
);

CalendarModal.propTypes = {
	open: PropTypes.any,
	toggle: PropTypes.any,
	date: PropTypes.any,
	eventTitle: PropTypes.any,
	eventDesc: PropTypes.any,
	d: PropTypes.any,
	month: PropTypes.any,
	activeReaction: PropTypes.any,
	setActiveReaction: PropTypes.any,
	reaction: PropTypes.any,
	react: PropTypes.any,
	id: PropTypes.any
};
