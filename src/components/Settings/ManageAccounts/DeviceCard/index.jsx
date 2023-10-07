"use client";
import { getDevices, removeDevice } from "@api";
import { getEngineer } from "@cookies";
import { DesktopMac, DesktopWindows, Phone } from "@mui/icons-material";
import { Box, Button, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

export const DeviceCard = () => {
	const engineer = getEngineer();
	const [devices, setDevices] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		async function get() {
			try {
				const devices = await getDevices(engineer?._id);
				setDevices(devices);
			} catch (error) {
				console.log(error);
			}
		}
		get();
	}, []);
	const removeDevices = async (i) => {
		setLoading(true);
		const confirmation = confirm("Do you want to delete this device?");
		if (confirmation) {
			await removeDevice(i);
		}
		setLoading(false);
	};

	console.log(devices);
	return (
		<Stack
			width="100%"
			sx={{
				flexDirection: "column",
				gap: "3vh"
			}}
		>
			
			{devices.length !== 0 && devices?.map((device, i) => (
				<Box
					key={i}
					sx={{
						display: "flex",
						justifyContent: "space-between"
					}}
				>
					<Box
						sx={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							gap: ["4vw", "1vw"]
						}}
					>
						{device?.platform == "Microsoft Windows" ? (
							<DesktopWindows
								sx={{
									color: "grey"
								}}
							/>
						) : device?.platform == "Mac" ? (
							<DesktopMac
								sx={{
									color: "grey"
								}}
							/>
						) : (
							<Phone
								sx={{
									color: "grey"
								}}
							/>
						)}
						<Box
							sx={{
								display: "flex",
								flexDirection: "column",
								justifyContent: "center",
								alignItems: "flex-start",
								gap: "1vh"
							}}
						>
							<Typography>{device?.os}</Typography>
							<Typography
								sx={{
									color: "grey",
									fontSize: "12px",
									display: ["none", "flex", "flex"]
								}}
							>
								{device?.address}
							</Typography>
						</Box>
					</Box>

					<Button
						sx={{
							color: "red",
							borderRadius: "30px",
							px: "20px",
							backgroundColor: "transparent",
							":hover": {
								backgroundColor: "transparent"
							}
						}}
						onClick={() => removeDevices(i)}
					>
						Remove
					</Button>
				</Box>
			))}

			{/* <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between'
        }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: ['4vw', '1vw']
          }}>
          <Mac
            sx={{
              color: 'grey'
            }}
          />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'flex-start',
              gap: '1vh'
            }}>
            <Typography>Mac</Typography>
            <Typography
              sx={{
                color: 'grey',
                fontSize: '12px',
                display: ['none', 'flex', 'flex']
              }}>
              Last login 23/03/2022 12:45AM
            </Typography>
          </Box>
        </Box>

        <Button
          sx={{
            color: '#05D9D7',
            borderRadius: '30px',
            px: '20px',
            backgroundColor: 'transparent',
            ':hover': {
              backgroundColor: 'transparent'
            }
          }}>
          Remove
        </Button>
        {/* <Mac />
          <Phone /> 
      </Box>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between'
        }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: ['4vw', '1vw']
          }}>
          <Phone
            sx={{
              color: 'grey'
            }}
          />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'flex-start',
              gap: '1vh'
            }}>
            <Typography>Android</Typography>
            <Typography
              sx={{
                color: 'grey',
                fontSize: '12px',
                display: ['none', 'flex', 'inline-flex']
              }}>
              Last login 23/03/2022 12:45AM
            </Typography>
          </Box>
        </Box>

        <Button
          sx={{
            color: '#05D9D7',
            borderRadius: '30px',
            px: '20px',
            backgroundColor: 'transparent',
            ':hover': {
              backgroundColor: 'transparent'
            }
          }}>
          Remove
        </Button>
        {/* <Mac />
          <Phone /> 
      </Box> */}
		</Stack>
	);
};
