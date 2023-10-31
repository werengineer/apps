"use client"
import { Leaderboard } from '@components'
import React from 'react'
import Box from "@mui/material/Box";

function LBoard() {
  return (
    <Box
				display={"flex"}
				sx={{
					mt: [8, 10],
					ml: ["auto", 8],
					maxWidth: "100vw",
					display: "flex",
					overflowY: "hidden"
				}}
			>
				<Box
					sx={{
						width: ["100%", "100%", "75%"],
						pl: [0, 0, 0],
						pr: [0, 0, 0]
					}}
				>
    <Leaderboard />
    </Box>
    </Box>
  )
}

export default LBoard