"use client";
import React, { createRef, useEffect, useState } from "react";
import Timeline from "@mui/lab/Timeline";
import { getEvents, getUserReactions, reactEvent } from "@api";
import { getEngineer } from "@cookies";
import { BackToTop } from "@components/Landing";
import Box from "@mui/material/Box";
import { DTimelineButton, DTimelineItem } from "./DesktopTimeline";
import { MTimelineButton, MTimelineItem } from "./MobileTimeline";
import { EventModal } from "./EventModal";
import { LoginModal } from "../LoginModal";
import { Loader } from "@components/Global";

export const TimeLine = () => {
	const [active, setActive] = useState({});
	const [open, setOpen] = useState(false);
	const [event, setEvent] = useState({ day: "", date: "", desc: "", img: "" });
	const [events, setEvents] = useState([]);
	const [allEvents, setAllEvents] = useState([]);
	const [elRefs, setElRefs] = useState([]);
	const [monRefs, setMonRefs] = useState([]);
	const [twoSec, setTwoSec] = useState(1);
	const [loading, setLoading] = useState(false);
	const [engineer, setEngineer] = useState();
	const [reaction, setReaction] = useState();
	const [modalState, setModalState] = useState(false);
	const [activeReaction, setActiveReaction] = useState({});
	// const [isFlipped, setIsFlipped] = useState({}); will add this later

	const months = [
		"Jan",
		"Feb",
		"March",
		"April",
		"May",
		"June",
		"July",
		"Aug",
		"Sep",
		"Oct",
		"Nov",
		"Dec"
	];

	setTimeout(() => {
		setTwoSec(twoSec + 1);
	}, 1000);

	useEffect(() => {
		// add or remove refs
		console.log(allEvents);
		setElRefs((elRefs) =>
			Array(57)
				.fill()
				.map((_, i) => elRefs[i] || createRef())
		);

		setMonRefs((monRefs) =>
			Array(allEvents.length)
				.fill()
				.map((_, i) => monRefs[i] || createRef())
		);
	}, [allEvents]);

	useEffect(() => {
		// fetchEvents();
		// fetch events
		const arr = [];

		if (allEvents.length !== 57) {
			setLoading(true);
			months?.map((m, i) => {
				arr.push({ month: m });
				setActive({ ...active, [i]: false });
				events.map((e) => {
					if (e.monthId === i) {
						arr.push({ mon: m, day: e.event.title, date: e.date, desc: e.event.description });
						setActive({ ...active, [i]: false });
					}
				});
			});
			setAllEvents(arr);
			setLoading(false);
		} else {
			setLoading(false);
		}
		console.log(reaction);
	}, [twoSec]);

	useEffect(() => {
		async function fetchEvents(id) {
			setLoading(true);
			try {
				const eve = await getEvents(id || 12);
				setEvents(eve.data);
			} catch (err) {
				console.log(err);
				setLoading(false);
			}
		}
		fetchEvents();
	}, []);

	const react = async (reactionId, id, monthId, date) => {
		console.log(id);
		if (id !== false) {
			console.log({ reaction: reactionId, id: id, month: monthId, date: date });
			const reaction = await reactEvent(id, reactionId, monthId, date);
			console.log(reaction);
			// userReactions();
			return reaction;
		} else {
			//Setting Modal For Login
			setModalState(true);
		}
	};

	const userReactions = async () => {
		const engineer = getEngineer();
		
		setEngineer(engineer);
		const data = await getUserReactions(engineer._id);
		console.log(data);
		setReaction(data);
	};

	useEffect(() => {
		userReactions();
		let options = {
			rootMargin: "0px",
			threshold: 0
		};
		let cards = document.getElementsByClassName("button-handler");
		const arrs = Array.prototype.slice.call(cards);

		let callback = (entries, observer) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					console.log(entry.target.id);
					console.log(elRefs[entry.target.id]);
					!active[entry.target.id] && elRefs[entry?.target?.id]?.current?.click();
					observer.unobserve(entry.target);
				}
			});
		};

		let observer = new IntersectionObserver(callback, options);
		arrs.forEach((arr) => observer.observe(arr));
	}, [allEvents]);

	return (
		<>
			<BackToTop />
			<Box display={["none", "flex"]} zIndex="-1" pb={["250px"]} overflow={"hidden"}>
				<Timeline position="alternate">
					{allEvents?.map((e, idx) =>
						!e.month ? (
							<DTimelineItem
								key={idx}
								idx={idx}
								e={e}
								elRefs={elRefs}
								setActive={setActive}
								active={active}
								event={event}
								activeReaction={activeReaction}
								setActiveReaction={setActiveReaction}
								reaction={reaction ? reaction[months.indexOf(e.mon)] : false}
								react={react}
								monthId={months.indexOf(e.mon)}
								date={e.date}
								id={engineer ? engineer._id : false}
							/>
						) : (
							<DTimelineButton key={idx} idx={idx} elRefs={elRefs} e={e} />
						)
					)}
				</Timeline>
			</Box>
			<Box display={["flex", "none"]} zIndex="-1" pb={["100px"]}>
				<Timeline
					position="right"
					sx={{
						display: "flex",
						alignItems: "flex-start",
						marginLeft: "-13vw"
					}}
				>
					{allEvents.map((e, idx) =>
						!e.month ? (
							<MTimelineItem
								key={idx}
								idx={idx}
								elRefs={elRefs}
								active={active}
								setActive={setActive}
								event={event}
								setOpen={setOpen}
								e={e}
							/>
						) : (
							<MTimelineButton key={idx} idx={idx} elRefs={elRefs} e={e} />
						)
					)}
				</Timeline>
			</Box>
			<EventModal
				reaction={reaction ? reaction[months.indexOf(event.mon)] : false}
				react={react}
				monthId={months.indexOf(event.mon)}
				date={event.date}
				id={engineer ? engineer._id : false}
				open={open}
				setOpen={setOpen}
				event={event}
				setEvent={setEvent}
			/>
			<LoginModal open={modalState} setModalState={setModalState} />
			<Loader open={loading} />
		</>
	);
};
