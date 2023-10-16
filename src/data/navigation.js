import {
	Assignment,
	AutoStories,
	Bookmark,
	Dashboard,
	EmojiEvents,
	Forum,
	Route
} from "@mui/icons-material";

export const NAVIGATIONS = [
	{
		icon: Dashboard,
		title: "Dashboard",
		link: "/"
	},
	{
		icon: Forum,
		title: "QnA",
		link: "/questions"
	},
	{
		icon: AutoStories,
		title: "Stories",
		link: "/stories"
	},

	{
		icon: Bookmark,
		title: "List",
		link: "/list"
	},
	{
		icon: Assignment,
		title: "Ghostwriting",
		link: "/ghostwriting"
	},
	{
		icon: Route,
		title: "Clusters",
		link: "/clusters"
	},
	{
		icon: EmojiEvents,
		title: "Achievements",
		link: "/achievements"
	}
];
