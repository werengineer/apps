import { ComingSoon } from "@components/Global";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React from "react";

export const ClubsCard = () => {
	return (
		<Box
			width={["92%", "50%"]}
			border={"1px solid #1D5352"}
			borderRadius={"10px"}
			display={"flex"}
			flexDirection={"column"}
			paddingY={"2vh"}
			paddingBottom={"4vh"}
			gap={"2vh"}
			height={["280px", "300px", "240px"]}
			paddingX={["4vw", "2vw"]}
			sx={{
				boxShadow: "1px 3px 10px 0px rgba(0,0,0,0.75)"
			}}
		>
			<Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
				<Typography fontSize={"20px"}>Clubs</Typography>

				{/* <Box display={'flex'} alignItems={'center'} gap={'0.5vw'}>
          <Image width={30} height={30} src={'/icons/Axe.svg'} alt={'Axe Img'} />
          <Typography fontSize={'13px'} color={'grey'}>
            Tools (TPs) +100
          </Typography>
          <Info
            sx={{
              display: ["none", "flex"],
              color: "grey",
            }}
          />
        </Box> */}
			</Box>
			<Box
				display={"flex"}
				alignItems={"center"}
				height={"100%"}
				justifyContent={"space-between"}
			>
				<Box
					display={"flex"}
					justifyContent={"center"}
					alignItems={"center"}
					height={"100%"}
					marginX={"auto"}
					marginY={"auto"}
				>
					<ComingSoon small={true} />
				</Box>
				{/* <Box display={'flex'} alignItems={'center'} gap={'20px'}>
          <Avatar
            sx={{
              fontSize: "12px",
            }}
          >
            WAE
          </Avatar>
          <Box>
            <Typography>WAE College Club</Typography>
            <Typography color={"grey"} fontSize={"12px"}>
              2450 Members
            </Typography>
          </Box>
        </Box>
        <Link
          style={{
            textDecorationLine: "none",
            color: "#05D9D7",
            cursor: "pointer",
          }}
        >
          View Club
        </Link>
      </Box>
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Box display={"flex"} alignItems={"center"} gap={"20px"}>
          <Avatar
            sx={{
              fontSize: "12px",
            }}
          >
            MC
          </Avatar>
          <Box>
            <Typography>Mech Club</Typography>
            <Typography color={"grey"} fontSize={"12px"}>
              2450 Members
            </Typography>
          </Box>
        </Box>
        <Link
          style={{
            textDecorationLine: "none",
            color: "#05D9D7",
            cursor: "pointer",
          }}
        >
          View Club
        </Link>
      </Box>
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Box display={"flex"} alignItems={"center"} gap={"20px"}>
          <Avatar
            sx={{
              fontSize: "12px",
            }}
          >
            TC
          </Avatar>
          <Box>
            <Typography>Tech Club</Typography>
            <Typography color={"grey"} fontSize={"12px"}>
              2450 Members
            </Typography>
          </Box>
        </Box>
        <Link
          style={{
            textDecorationLine: "none",
            color: "#05D9D7",
            cursor: "pointer",
          }}
        >
          View Club
        </Link>*/}
			</Box>
		</Box>
	);
};
