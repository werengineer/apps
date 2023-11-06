"use client";
import {
  Box,
  Avatar,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import axios from "axios";
import Image from "next/image";
import { API_URL } from "@constants";
import { getEngineer } from "@cookies";

import React, { useEffect, useState } from "react";
import { fetchAllUser } from "@api/leaderboard";

export const AllOver = ({legDate, API_URL, axios}) => {

	const [last7DaysHistory, setLast7DaysHistory] = useState([]);
	const [rewards, setRewards] = useState([]);
	const [rewardsAll, setRewardsAll] = useState([]);
    const [allUsers, setAllUsers] = useState([]);
	const [last7days, setLast7Days] = useState([]);

	 useEffect(() => {
    function formatDate(date) {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const day = String(date.getDate()).padStart(2, "0");
      return `${year}-${month}-${day}`;
    }

    function getLast7Days() {
      const today = legDate;
      const last7Days = [];

      for (let i = 0; i < 7; i++) {
        const day = new Date(today);
        day.setDate(today.getDate() - i);
        last7Days.unshift(formatDate(day));
      }

      return last7Days;
    }

    const last7DaysArray = getLast7Days();
    setLast7Days(last7DaysArray);
  }, [legDate]);
  console.log("last7days", last7days);
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedUsers = await fetchAllUser();
        setAllUsers(fetchedUsers);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchData();
  }, []);
  console.log("allUsers", allUsers);

	const factor = {
		create_question: 150,
		create_story: 150,
		answer_question: 120,
		comment_story: 120,
		react_question: 75,
		react_story: 75,
		complete_puzzle: 160,
		complete_block: 70,
		complete_cluster: 80,
	  };

	useEffect(() => {
		const fetchTask = async () => {
		  try {
			const response = await axios.get(`${API_URL}/achievement/get`);
			const allTasks = response.data;
			setRewards(allTasks);
		  } catch (error) {
			console.error("Error fetching data:", error);
		  }
		};
	
		fetchTask();
	  }, []);
	  console.log("rewards", rewards);
	
	  useEffect(() => {
		const fetchHistory = async () => {
		  const promises = allUsers.map((user) => {
			const promise = Promise.all(
			  last7days.map((date) =>
				axios.get(`${API_URL}/achievement/get/daily?date=${date}`, {
				  headers: { EngineerID: user._id },
				})
			  )
			);
			//   console.log("promiseUp",promise);
			return {
			  engineer: user._id,
			  avatar: user.avatar,
			  name: user.name,
			  promise: promise,
			};
		  });
		  console.log("promises", promises);
	
		  try {
			const responses = await Promise.all(
			  promises.map((userPromises) => userPromises.promise)
			);
			const allData = responses.map((userResponses, userIndex) => {
			  return {
				engineer: allUsers[userIndex]._id,
				avatar: allUsers[userIndex].avatar,
				name: allUsers[userIndex].name,
				data: userResponses.map((response, dateIndex) => {
				  return {
					data: response.data, 
				  };
				}),
			  };
			});
	
			console.log("all data", allData);
			setLast7DaysHistory(allData);
		  } catch (error) {
			console.error("Error fetching data:", error);
		  }
		};
	
		fetchHistory();
	  }, [last7days, allUsers, rewards]);
	
	  console.log("last7DaysHistory", last7DaysHistory);
	
	  useEffect(() => {
		const calculateTotalCoins = () => {
		  const totalCoinsData = last7DaysHistory.map((userData) => {
			const dailyAchievements = userData.data;
			let totalCoins = 0;
	
			dailyAchievements.forEach((achievement) => {
			  const achievementsData = achievement.data.dailyAchievements;
			  const keys = Object.keys(achievementsData);
			  keys.forEach((key) => {
				totalCoins =
				  totalCoins + (factor[key] * achievementsData[key]) / 100;
			  });
			});
	
			return {
			  engineerId: userData.engineer,
			  engineerAvatar: userData.avatar,
			  engineerName: userData.name,
			  totalCoins: totalCoins,
			};
		  });
	
		  totalCoinsData.sort((a, b) => b.totalCoins - a.totalCoins);
	
		  console.log("Sorted Total Coins Data:", totalCoinsData);
		  setRewardsAll(totalCoinsData);
		};
		calculateTotalCoins();
	  }, [last7DaysHistory]);
	  console.log("rewardsAll", rewardsAll);
	  return rewardsAll;
	
}

export const LastWeek = ({ legDate }) => {
  
  const engineer = getEngineer();
  const rewardsAll = AllOver({legDate, API_URL, axios});
  console.log("rewardsAllMain", rewardsAll);
 
  let date = legDate?.getDate();


 

  return (
    <TableContainer
      component={Box}
      sx={{ overflowY: "auto", maxHeight: "75vh" }}
    >
      <Table>
        <TableHead>
          <TableRow>
            <TableCell
              align="left"
              sx={{
                border: "0px",
              }}
            >
              Rank
            </TableCell>
            <TableCell
              sx={{
                "&:last-child td, &:last-child th": {
                  border: "0px",
                  margin: "0px",
                },
              }}
            >
              User
            </TableCell>
            <TableCell
              align="right"
              sx={{
                border: "0px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  gap: "1vw",
                }}
              >
                <Image
                  width={30}
                  height={30}
                  src={"/icons/Axe.svg"}
                  alt={"axe img"}
                />
                <Typography>Total Coins</Typography>
              </Box>
            </TableCell>
          </TableRow>
        </TableHead>

        <TableBody sx={{}}>
          {rewardsAll?.map((r, i) => (
            <TableRow
              sx={{
                backgroundColor:
                  engineer._id === r.engineerId ? "#1D5352" : "none",
                border: "0",
                height: "10px",
              }}
            >
              <TableCell
                align="left"
                sx={{
                  border: "0",
                }}
              >
                {i + 1}
              </TableCell>

              <TableCell
                align="center"
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  gap: "1vw",
                  border: "0",
                  //bgcolor: 'red',
                  width: ["auto", "20vw"],
                  //   mx: 'auto',
                  //   ml: [0, 35]
                }}
              >
                <Avatar src={r.engineerAvatar}></Avatar>
                <Typography>{r.engineerName}</Typography>
              </TableCell>
              <TableCell
                align="right"
                sx={{
                  border: "0",
                }}
              >
                +{Math.ceil(r.totalCoins)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
