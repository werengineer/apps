import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Image from "next/image";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import CheckIcon from "@mui/icons-material/Check";
import { DateCalendar, LocalizationProvider } from "@mui/x-date-pickers-pro";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import { ComingSoon } from "@components/Global";

const Achievement = () => {
	return (
		<Box
			marginX={"10px"}
			display={"flex"}
			justifyContent={"space-between"}
			border={"1px solid rgba(29, 83, 82, 1)"}
			borderRadius={"10px"}
			padding={"20px"}
		>
			<Box
				display={"flex"}
				gap={"10px"}
			>
				<Box
					display={"flex"}
					sx={{
						backgroundColor: "rgba(29, 83, 82, 1)",
						padding: "5px",
						borderRadius: "100%"
					}}
				>
					<EmojiEventsIcon sx={{
						fontSize: "15px",
						color: "rgba(80, 217, 215, 1)"
					}} />
				</Box>
				<Typography>
                    Create today s post
				</Typography>
			</Box>
			<Box
				display={"flex"}
				gap={"10px"}
				alignItems={"center"}
			>
				<Box
					display={"flex"}
					gap={"17px"}
				>
					<Image width={25} height={25} src={"/icons/Axe.svg"} alt={"axe img"} />
					<Typography>
                        10TPs
					</Typography>
				</Box>
			</Box>
		</Box>
	);
};

const Index = () => {
	return (
		<Box display={"flex"} flexDirection={"column"} alignItems={"center"} gap={2} marginY={5}>
			{/* <Box
                sx={{
                    height: '50vh'
                }}
            >
                <LocalizationProvider
                    dateAdapter={AdapterDayjs}
                >
                    <DateCalendar sx={{height: }} showDaysOutsideCurrentMonth fixedWeekNumber={6} />
                </LocalizationProvider>
            </Box> */}

			{/* <Box
                display={'flex'}
                flexDirection={'column'}
                gap={2}
            >
                <Typography>Lastest Achievements</Typography>
                <Achievement />
                <Achievement />
                <Achievement />
            </Box>
            <Box
                display={'flex'}
                overflow={'hidden'}
                width={'100%'}
                alignItems={'center'}
                justifyContent={'center'}
            >
                <Button variant="contained"
                    sx={{
                        borderRadius: 8,
                        backgroundColor: '#50D9D7',
                        "&:hover": {
                            backgroundColor: '#50D9D7'
                        }
                    }}
                >View All Achivements</Button>
            </Box> */}
			<ComingSoon />
		</Box>
	);
};

export default Index;