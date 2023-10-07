import React from "react";
import { Calendar } from "./Calendar";
import { useSearchParams } from "next/navigation";
import { TimeLine } from "./Timeline";

export const CalendarNTimeline = () => {
	const query = useSearchParams();
	return (
		<>
			{query.get("tab") === "cal" ? (
				<Calendar />
			) : query.get("tab") === "timeline" ? (
				<TimeLine />
			) : (
				<Calendar />
			)}
			{/* <TimeLine /> */}
		</>
	);
};
