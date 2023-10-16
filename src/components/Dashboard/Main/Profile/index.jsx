/* eslint-disable no-undef */
import { Avatar, Button, CircularProgress, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import Image from "next/image";
import Progress from "./Progress";
import Questions from "./Questions";
import Posts from "./Posts";
import Wallet from "./Wallet";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import axios from "axios";
import { useSnackbar } from "notistack";
import { getEngineer } from "../../../../utils/getUserInfo";
import FollowerModal from "./FollowerModal";
import { useEffect } from "react";
import PropTypes from "prop-types";

const Index = ({ profile }) => {
	const [section, setSection] = useState("progress");
	const [avatar, setAvatar] = useState(profile?.avatar);
	const [loading, setLoading] = useState(false);
	const [open, setOpen] = useState(false);
	const [modalSection, setModalSection] = useState("Followers");
	const [engineer, setEngineer] = useState();
	const [followers, setFollowers] = useState([]);
	const [followings, setFollowings] = useState([]);
	const { enqueueSnackbar } = useSnackbar();
	const engg = getEngineer();
	console.log(profile);

	useEffect(() => {
		const fetchEngineer = async () => {
			try {
				const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/engineer/get?id=${engg?._id}`);
				setEngineer(res.data);
			} catch (error) {
				console.log(error);
			}
		};
		fetchEngineer();
	}, []);

	useEffect(() => {
		const fetchFollowers = async () => {
			try {
				const followers = await Promise.all(
					engineer?.followers?.map(async (f) => {
						const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/engineer/get?id=${f}`);
						return res.data;
					})
				);
				console.log("Followers", followers);
				setFollowers(followers);
			} catch (error) {
				console.log(error);
			}
		};

		fetchFollowers();

		const fetchFollowings = async () => {
			try {
				const followings = await Promise.all(
					engineer?.followings?.map(async (f) => {
						const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/engineer/get?id=${f}`);
						return res.data;
					})
				);
				console.log("Followings", followings);
				setFollowings(followings);
			} catch (error) {
				console.log(error);
			}
		};
		fetchFollowings();

	}, [engineer]);



	const handleChange = async (e) => {
		setLoading(true);
		const reader = new FileReader();
		// console.log(e.target.files)
		// setAvatar(e.target.value)
		if (e.target.files[0]) {
			reader.readAsDataURL(e.target.files[0]);
		}
		reader.onload = async (readerEvent) => {
			setAvatar(readerEvent.currentTarget.result);
			console.log(profile?.avatar);
			try {
				const response = await axios.post(
					"https://api.cloudinary.com/v1_1/dju1qbtar/image/upload",
					{
						"file": avatar,
						"api_key": process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
						"upload_preset": process.env.NEXT_PUBLIC_UPLOAD_PRESET,
					}
				);

				console.log(response);

				const newImage = await axios.put(
					`${process.env.NEXT_PUBLIC_API_URL}/engineer/update/profilepic`,
					{
						profilePic: response.data.secure_url
					},
					{
						headers: {
							"EngineerID": engineer?._id
						}
					}

				);
				console.log(newImage);
				enqueueSnackbar("Profile Pic Updated", { variant: "success" });
				setLoading(false);
				// .then((res) => axios.put(
				//     `${process.env.NEXT_PUBLIC_API_URL}/engineer/update/profilepic`,
				//     {
				//         profilePic: res.data.secure_url
				//     },
				//     {
				//         headers: {
				//             "EngineerID": engineer?._id
				//         }
				//     }
				// ).then(() => {enqueueSnackbar('Profile Pic Updated', { variant: 'success' }); setLoading(false)}).catch((error) => { enqueueSnackbar(error || 'Unknown Error Occurred', { variant: 'error' }); setLoading(false) })
				// )
			} catch (error) {
				enqueueSnackbar(error?.response?.data?.message || "Unknown Error Occurred", {
					variant: "error"
				});
				setLoading(false);
			}
		};
	};

	return (
		<Box
			display={"flex"}
			flexDirection={"column"}
			width={"100%"}
			gap={5}
			borderRight={"1px solid grey"}
		>
			<Box
				height={"30vh"}
				weight={"100%"}
				position={"relative"}
			>
				<Image style={{ zIndex: 0, objectFit: "cover" }} src={"/images/Layer1.svg"} fill alt="layer" />
			</Box>

			<Box
				sx={{
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					zIndex: 1,
					mt: ["-15vh", "-16vh", "-14vh"]
				}}
			>
				<Box
					marginBottom={"-15vh"}
					display={"flex"}
					flexDirection={"column"}
					alignItems={"center"}
					position={"relative"}
				>
					<CircularProgress
						sx={{
							position: "absolute",
							zIndex: 1,
							top: "20%",
							display: loading ? "flex" : "none",
							color: "#05D9D7"
						}}
					/>
					<label
						style={{
							position: "absolute",
							top: "0%",
							right: "20%",
							zIndex: 999,
							backgroundColor: "black",
							borderRadius: "30px",
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							padding: "2px",
							width: "30px",
							height: "30px",
							cursor: "pointer",
							border: "3.5px solid #05D9D7"
						}}
						htmlFor='profilePic'
					>
						<ModeEditIcon
							sx={{
								color: "#05D9D7",
								fontSize: "16px"
							}}
						/>
					</label>
					{avatar ?
						<Avatar
							sx={{
								width: "125px",
								height: "125px",
								fontSize: "20px",
								// border: '3.5px solid #05D9D7'
							}}

							src={avatar}
						/>
						:
						<Avatar
							sx={{
								width: "125px",
								height: "125px",
								fontSize: "20px",
								// border: '3.5px solid #05D9D7'
							}}
						>
							{profile.name[0]}{profile.name.split(" ")[1][0]}
						</Avatar>
					}

					<input
						id='profilePic'
						type='file'
						accept="image/png, image/jpeg, image/jpg"
						style={{ display: "none" }}
						onChange={handleChange}
					/>

					<Box
						display={"flex"}
						flexDirection={"column"}
						alignItems={"center"}
					>
						<Typography
							fontSize={25}
						>
							{profile.name}
						</Typography>
						<Typography
							fontSize={17}
							color={"#F5F5F5"}
						>
							{profile.email}
						</Typography>
					</Box>
					<Box
						sx={{
							mt: "2vh",
							display: "flex",
							gap: "1vw"
						}}
					>
						<Button
							sx={{
								backgroundColor: "transparent",
								color: "#05D9D7",
								":hover": {
									backgroundColor: "transparent"
								}
							}}
							onClick={() => { setModalSection("Followings"); setOpen(!open); }}
						>
							{followings?.length} Followings
						</Button>

						<Button
							sx={{
								backgroundColor: "transparent",
								color: "#05D9D7",
								":hover": {
									backgroundColor: "transparent"
								}
							}}
							onClick={() => { setModalSection("Followers"); setOpen(!open); }}
						>
							{followers.length} {followers.length === 1 ? "Follower" : "Followers"}
						</Button>
					</Box>
				</Box>
			</Box>

			<Box
				display={"flex"}
				width={"100%"}
				justifyContent={"space-evenly"}
				alignItems={"flex-end"}
				mt={18}
				gap={"5vw"}
			>
				<Box>
					<Button
						sx={{
							borderBottom: section === "progress" ? "2px solid #05D9D7" : "0px",
							p: 0,
							px: "12px",
							borderRadius: "0px",
							fontSize: ["11px", "15px", "18px"],
							color: section === "progress" ? "white" : "grey",
							borderTopLeftRadius: "10px",
							borderTopRightRadius: "10px"
						}}
						onClick={() => setSection("progress")}
					>
                        Progress
					</Button>
				</Box>

				<Box>
					<Button
						sx={{
							borderBottom: section === "questions" ? "2px solid #05D9D7" : "0px",
							p: 0,
							px: "12px",
							borderRadius: "0px",
							fontSize: ["11px", "15px", "18px"],
							color: section === "questions" ? "white" : "grey",
							borderTopLeftRadius: "10px",
							borderTopRightRadius: "10px"
						}}
						onClick={() => setSection("questions")}

					>
                        Your Questions
					</Button>
				</Box>

				<Box>
					<Button
						sx={{
							borderBottom: section === "posts" ? "2px solid #05D9D7" : "0px",
							p: 0,
							px: "12px",
							borderRadius: "0px",
							fontSize: ["11px", "15px", "18px"],
							color: section === "posts" ? "white" : "grey",
							borderTopLeftRadius: "10px",
							borderTopRightRadius: "10px"
						}}
						onClick={() => setSection("posts")}
					>
                        Your Stories
					</Button>
				</Box>

				<Box>
					<Button
						sx={{
							borderBottom: section === "wallet" ? "2px solid #05D9D7" : "0px",
							p: 0,
							px: "12px",
							borderRadius: "0px",
							fontSize: ["11px", "15px", "18px"],
							color: section === "wallet" ? "white" : "grey",
							borderTopLeftRadius: "10px",
							borderTopRightRadius: "10px"
						}}
						onClick={() => setSection("wallet")}
					>
                        Wallet
					</Button>
				</Box>
			</Box>
			<Box
				sx={{
					px: 3
				}}
			>

				{
					section === "progress" ? <Progress /> :
						section === "wallet" ? <Wallet /> :
							section === "posts" ? <Posts /> :
								section === "questions" ? <Questions /> :
									<></>
				}
			</Box>
			<FollowerModal open={open} setOpen={setOpen} modalSection={modalSection} setModalSection={setModalSection} followers={followers} followings={followings} setFollowers={setFollowers} setFollowings={setFollowings} />
		</Box >
	);
};

export default Index;


Index.propTypes = {
	profile: PropTypes.any
};