"use client";
import { getEngineer } from "@cookies";
import React, { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useSearchParams, useParams } from "next/navigation";
import { fetchEngineer } from "@components/Profile/Functions";
import axios from "axios";
import { API_URL } from "@constants";
import { NEXT_PUBLIC_CLOUDINARY_API_KEY } from "@constants";
import { NEXT_PUBLIC_UPLOAD_PRESET } from "@constants";
import { useSnackbar } from "notistack";
import { useRecoilState } from "recoil";
import { loginModalState } from "@atom";
import { useRouter } from "next/navigation";
import { follow } from "@api";
import { deleteQuestion } from "@components/Questions/Functions";
import { deleteStory } from "@components/Stories/Functions";
import { completeAchievement } from "@api/achievement";
import { achievementID, werID } from "@lib/achievementID";

export const ProfileContext = createContext();


const ProfileState = (props) => {
	const engineer = getEngineer();
	const [avatar, setAvatar] = useState();
	const [profile, setProfile] = useState();
	const [self, setSelf] = useState();
	const searchParams = useSearchParams();
	const params = useParams();
	const [profileLoader, setProfileLoader] = useState();
	const [followings, setFollowings] = useState([]);
	const [followers, setFollowers] = useState();
	const [open, setOpen] = useState(false);
	const [modalTab, setModalTab] = useState("Following");
	const [tab, setTab] = useState("progress");
	const [questions, setQuestions] = useState([]);
	const [stories, setStories] = useState([]);
	const [qnsLoader, setQnsLoader] = useState(true);
	const [id, setId] = useState(props.id || engineer.id);
	const [skip, setSkip] = useState({ stories: 0, questions: 0 });
	const [completed, setCompleted] = useState({ stories: false, questions: false });
	const [followed, setFollowed] = useState(false);
	const [loginModal, setLoginModal] = useRecoilState(loginModalState);
	const [loading, setLoading] = useState(true);
	const [screenLoading, setScreenLoading] = useState(true);
	const { enqueueSnackbar } = useSnackbar();
	const router = useRouter();

	useEffect(() => {
		
		console.log(searchParams.get("tab"));
	}, [searchParams.get("tab")]);

	// console.log(searchParams.get("tab"));

	useEffect(() => {
		const fetchProfile = async () => {
			if (!engineer) {
				setLoginModal(true);
				router.back();
			}
			var id = params.id || engineer?._id;
			setId(id);
			try {
				const engg = await fetchEngineer({ id: id });
				setAvatar(engg?.avatar);
				setProfile(engg);
				setSelf(engineer?._id === engg._id);
				// setTab(engineer?._id === engg._id ? "progress" : "questions");
				setTab(searchParams.get("tab") || "progress");
				setFollowed(engg?.followers?.includes(engineer?._id));
			} catch (error) {
				//Throw
				console.log(error);
			} finally {
				setScreenLoading(false);
			}
		};

		fetchProfile();
	}, []);

	useEffect(() => {
		const fetchFollowers = async () => {
			if (!open) return;
			try {
				const followers = await Promise.all(
					profile?.followers?.map(async (f) => {
						const res = await axios.get(`${API_URL}/engineer/get?id=${f}`);
						return res.data;
					})
				);
				setFollowers(followers);
			} catch (error) {
				console.log(error);
			}
		};

		fetchFollowers();

		const fetchFollowings = async () => {
			if (!open) return;
			try {
				const followings = await Promise.all(
					profile?.followings?.map(async (f) => {
						const res = await axios.get(`${API_URL}/engineer/get?id=${f}`);
						return res.data;
					})
				);
				setFollowings(followings);
			} catch (error) {
				console.log(error);
			}
		};
		fetchFollowings();
	}, [open]);

	const fetchQuestions = async () => {
		if (!engineer) setLoginModal(true);
		setQnsLoader(true);
		try {
			const res = await axios.get(
				`${API_URL}/question/get?engineer=${id}&skip=${skip.questions}&limit=10`,
				{
					headers: {
						EngineerID: engineer?._id
					}
				}
			);
			if (res.data?.length < 10) {
				setCompleted((completed) => ({ ...completed, questions: true }));
			}
			var data = questions.concat(res.data);
			setQuestions(data);
			setSkip((skip) => ({ ...skip, questions: skip.questions + 10 }));
		} catch (error) {
			//Throw error
		} finally {
			setQnsLoader(false);
			setLoading(false);
		}
	};

	const fetchStories = async () => {
		if (!engineer) setLoginModal(true);
		setQnsLoader(true);
		try {
			const res = await axios.get(
				`${API_URL}/story/get?engineer=${id}&skip=${skip.stories}&limit=10`,
				{
					headers: {
						EngineerID: engineer?._id
					}
				}
			);

			if (res.data?.length < 10) {
				setCompleted((completed) => ({ ...completed, stories: true }));
			}

			var data = stories.concat(res.data);
			setStories(data);
			setSkip((skip) => ({ ...skip, stories: skip.stories + 10 }));
		} catch (error) {
			//Throw error
		} finally {
			setQnsLoader(false);
			setLoading(false);
		}
	};

	useEffect(() => {
		if (questions.length === 0 || stories.length === 0) {
			setQnsLoader(true);
			tab === "questions" && fetchQuestions();
			tab === "stories" && fetchStories();
			setQnsLoader(false);
			setLoading(true);
		}
	}, [tab]);


	const changeProfilePicture = async (e) => {
		var avatarTracker = false;
		if (!engineer) {
			setLoginModal(true);
			return;
		}
		if (!avatar) {
			avatarTracker = true;
		}
		setProfileLoader(true);
		const reader = new FileReader();
		if (e.target.files[0]) {
			reader.readAsDataURL(e.target.files[0]);
		}
		reader.onload = async (readerEvent) => {
			setAvatar(readerEvent.currentTarget.result);
			setProfile((prevProfile) => ({ ...profile, avatar: readerEvent.currentTarget.result }));

			try {
				const response = await axios.post(
					"https://api.cloudinary.com/v1_1/dju1qbtar/image/upload",
					{
						file: readerEvent.currentTarget.result,
						api_key: NEXT_PUBLIC_CLOUDINARY_API_KEY,
						upload_preset: NEXT_PUBLIC_UPLOAD_PRESET
					}
				);

				const newImage = await axios.put(
					`${API_URL}/engineer/update/profilepic`,
					{
						profilePic: response.data.secure_url
					},
					{
						headers: {
							EngineerID: engineer?._id
						}
					}
				);
				enqueueSnackbar("Profile Pic Updated", { variant: "success" });

				if (avatarTracker) {
					completeAchievement({
						id: achievementID.updateProfilePhoto,
						enqueueSnackbar: enqueueSnackbar
					}).catch((error) => enqueueSnackbar(error.message));
				}
			} catch (error) {
				enqueueSnackbar(error?.response?.data?.message || "Unknown Error Occurred", {
					variant: "error"
				});
			} finally {
				setProfileLoader(false);
			}
		};
	};

	const toggleFollowModal = ({ tab }) => {
		if (!engineer) {
			setLoginModal(true);
			return;
		}
		setOpen(!open);
		setModalSelection({ tab: tab });
	};

	const toggleModal = () => {
		setOpen(!open);
	};

	const setModalSelection = ({ tab }) => {
		setModalTab(tab);
	};

	const handleTabClick = ({ tab }) => {
		if (!engineer) {
			setLoginModal(true);
			return;
		}
		setTab(tab);
	};

	const handleFollow = async () => {
		if (!engineer) {
			setLoginModal(true);
			return;
		}
		try {
			if (followed) {
				enqueueSnackbar(`Unfollowed ${profile?.name}`, { variant: "warning" });
				const newFollowers = profile.followers.filter((f) => f !== engineer?._id);
				setProfile((prevProfile) => ({
					...prevProfile,
					followers: newFollowers
				}));
			} else {
				enqueueSnackbar(`Followed ${profile?.name}`, { variant: "success" });
				setProfile((prevProfile) => ({
					...prevProfile,
					followers: [...prevProfile.followers, engineer?._id]
				}));
				if (profile?._id === werID) {
					completeAchievement({
						id: achievementID.followWAE,
						enqueueSnackbar: enqueueSnackbar
					}).catch((error) =>
						enqueueSnackbar(error.message || "Server error", { variant: "error" })
					);
				}
			}
			setFollowed(!followed);
			follow({ profileId: profile?._id, engineerID: engineer?._id });
		} catch (error) {
			//Throw error
			enqueueSnackbar(error?.response?.data?.message || "Some Error Occured", {
				variant: "error"
			});
		}
	};

	const handleRemove = async ({ id, name }) => {
		if (!engineer) {
			setLoginModal(true);
			return;
		}
		enqueueSnackbar(`Removed ${name} from followers`, { variant: "warning" });
		try {
			const newFollowers1 = followers.filter((f) => f?._id !== id);
			setFollowers(newFollowers1);

			const newFollowers = profile.followers.filter((f) => f !== id);
			setProfile((prevProfile) => ({
				...prevProfile,
				followers: newFollowers
			}));

			const res = await axios.put(
				`${API_URL}/engineer/remove?id=${id}`,
				{},
				{
					headers: {
						EngineerID: engineer?._id
					}
				}
			);
		} catch (error) {
			//Throw error
			console.log(error);
		}
	};

	const handleUnfollow = ({ data }) => {
		if (!engineer) {
			setLoginModal(true);
			return;
		}
		if (profile?.followings?.includes(data?._id)) {
			enqueueSnackbar(`Unfollowed ${data?.name}`, { variant: "warning" });
			//Unfollow
			const newFollowings = profile.followings.filter((f) => f !== data?._id);
			setProfile((prevProfile) => ({
				...prevProfile,
				followings: newFollowings
			}));
			const newFollowings1 = followings.filter((f) => f._id !== data?._id);
			// setFollowings(newFollowings1);
		} else {
			enqueueSnackbar(`Followed ${data?.name}`, { variant: "success" });
			//Follow
			setProfile((prevProfile) => ({
				...prevProfile,
				followings: [...prevProfile.followings, data?._id]
			}));
			// setFollowings([...followings, data]);
		}
		try {
			follow({ profileId: data?._id, engineerID: engineer?._id });
		} catch (error) {
			//Throw error
		}
	};

	return (
		<ProfileContext.Provider
			value={{
				profile,
				avatar,
				self,
				changeProfilePicture,
				profileLoader,
				toggleFollowModal,
				setModalSelection,
				modalTab,
				open,
				followers,
				followings,
				tab,
				handleTabClick,
				fetchQuestions,
				fetchStories,
				questions,
				stories,
				qnsLoader,
				handleFollow,
				followed,
				completed,
				toggleModal,
				handleRemove,
				handleUnfollow,
				loading,
				screenLoading
			}}
		>
			{props.children}
		</ProfileContext.Provider>
	);
};

ProfileState.propTypes = {
	children: PropTypes.any,
	id: PropTypes.string
};

export default ProfileState;
