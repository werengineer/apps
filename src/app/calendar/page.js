"use client";
import { CalendarNTimeline, Navbar } from "@components";
import Box from "@mui/material/Box";
import React, { useState } from "react";

export default function CalendarPage() {
	const [toggle, setToggle] = useState("Calendar");

	return (
		<>
			<CalendarNTimeline />
		</>
	);
}
