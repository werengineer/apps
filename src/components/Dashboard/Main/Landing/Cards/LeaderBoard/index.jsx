import { fetchAllUser } from "@api/leaderboard";
import { dashboardState } from "@atom";
import { Avatar, Box, Button, LinearProgress, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { getEngineer } from "@cookies";
import { useEffect } from "react";

export const LeaderBoardCard = () => {
  const router = useRouter();
  const engineer = getEngineer();
  const [allEngineers, setAllEngineers] = useState([]);
  const [dashboard, setDashboard] = useRecoilState(dashboardState);
  const [higherRankUser, setHigherRankUser] = useState();
  const [lowerRankUser, setLowerRankUser] = useState();

  console.log("engineer520", engineer);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const engineers = await fetchAllUser();
        console.log("engineers", engineers);
        setAllEngineers(engineers);
        console.log("allEngineers", allEngineers);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData(); // Call the asynchronous function inside useEffect
  }, []);

  const calculateLevel = (xp) => {
    console.log("xp", xp);
    return Math.floor(xp / 10000); // Increase level every 10000 XP
  };

  useEffect(() => {
    const levelProgress = ((engineer.xp % 10000) / 10000) * 100;
    console.log("levelProgress", levelProgress);

    const currentLevel = calculateLevel(engineer.xp);
    console.log("currentLevel", currentLevel);

    setDashboard((prevDashboard) => ({
      ...prevDashboard,
      level: currentLevel,
      progress: levelProgress,
    }));
  }, [engineer.xp]);
  
  useEffect(() => {
    // This code will run every time allEngineers state is updated
    console.log("allEngineers", allEngineers);
    const currentEngineer = allEngineers.find(
      (engineer) => engineer._id === getEngineer()._id
    );
    console.log("currentEngineer", currentEngineer);

    if (currentEngineer) {
      const currentIndex = allEngineers.find(
        (engineer) => engineer.rank === currentEngineer.rank
      );
      console.log("currentIndex", currentIndex.rank);

      // Fetch higher rank user
      setHigherRankUser(
        allEngineers.find(
          (engineer) => engineer.rank === currentEngineer.rank - 1
        )
      );
      console.log("higherRankUser", higherRankUser);

      // Fetch lower rank user
      setLowerRankUser(
        allEngineers.find(
          (engineer) => engineer.rank === currentEngineer.rank + 1
        )
      );
      console.log("lowerRankUser", lowerRankUser);
    }
  }, [allEngineers]);

  useEffect(() => {
    // console.log("allEngineers", allEngineers);
    const specificEngineerId = engineer._id; // Replace with the actual _id you are looking for
    // const specificEngineer = allEngineers.find(engineers => engineers._id === specificEngineerId);
    console.log("specificEngineer", specificEngineerId);
    setDashboard((prevDashboard) => ({
      ...prevDashboard,
      // rank: rank
    }));
  }, []);

  const handleLeaderboardClick = () => {
    setDashboard((prevDashboard) => ({
      ...prevDashboard,
      level: calculateLevel(engineer.xp), // Recalculate level when leaderboard is clicked
      progress: ((engineer.xp % 10000) / 10000) * 100,
    }));
    router.push("/leaderboard");
  };

  return (
    <Box
      sx={{
        width: ["90%", "97.5%"],
        border: "1px solid #1D5352",
        borderRadius: "10px",
        paddingX: ["4vw", "2vw"],
        paddingY: "2vh",
        paddingBottom: "3.5vh",
        display: "flex",
        flexDirection: ["column"],
        gap: ["2vh", "5vh"],
        boxShadow: "1px 3px 10px 0px rgba(0,0,0,0.75)",
      }}
    >
      <Box display={"flex"} flexDirection={"column"} gap={"10px"}>
        <Typography>
          You have {engineer.xp}XP required more{" "}
          {(dashboard.level + 1) * 10000 - engineer.xp}XP for level up
        </Typography>
        <LinearProgress
          value={dashboard.progress}
          variant={"determinate"}
          sx={{
            height: "3vh",
            borderRadius: "20px",
          }}
        />
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          paddingX={"13px"}
          color={"grey"}
        >
          <Typography fontSize={"14px"}>Level {dashboard.level}</Typography>
          <Typography fontSize={"14px"}>Level {dashboard.level + 1}</Typography>
        </Box>
      </Box>

      <Box
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        gap={"20px"}
      >
        <Typography>Your Rank</Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          {higherRankUser ? (
            <Box
              sx={{
                backgroundColor: "#333333",
              borderBottomLeftRadius: "10px",
              borderBottomRightRadius: "10px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              paddingX: "20px",
              paddingY: "10px",
              }}
            >
              <Box display={"flex"} alignItems={"center"} gap={"15px"}>
                <Avatar>{higherRankUser.avatar}</Avatar>
                <Typography>{higherRankUser.name}</Typography>
              </Box>
              <Typography>{higherRankUser.xp}</Typography>
              <Typography>+465</Typography>
            </Box>
          ) : (
            <Typography>Loading...</Typography> // You can customize the loading message
          )}
          <Box
            sx={{
              backgroundColor: "#1D5352",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              paddingX: "20px",
              paddingY: "10px",
            }}
          >
            <Box display={"flex"} alignItems={"center"} gap={"15px"}>
              <Avatar>{engineer.avatar}</Avatar>
              <Typography>{engineer.name}</Typography>
            </Box>
            <Typography>{engineer.xp}</Typography>
            <Typography>+465</Typography>
          </Box>
          {lowerRankUser ? (
            <Box
              sx={{
                backgroundColor: "#333333",
              borderBottomLeftRadius: "10px",
              borderBottomRightRadius: "10px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              paddingX: "20px",
              paddingY: "10px",
              }}
            >
              <Box display={"flex"} alignItems={"center"} gap={"15px"}>
                <Avatar>{lowerRankUser.avatar}</Avatar>
                <Typography>{lowerRankUser.name}</Typography>
              </Box>
              <Typography>{lowerRankUser.xp}</Typography>
              <Typography>+465</Typography>
            </Box>
          ) : (
            <Typography>Loading...</Typography> // You can customize the loading message
          )}
        </Box>
        <Button
          sx={{
            width: ["50vw", "20vw"],
            margin: "auto",
            backgroundColor: "#05D9D7",
            borderRadius: "30px",
            color: "black",
            border: "1px solid #05D9D7",
            ":hover": {
              backgroundColor: "transparent",
              color: "#05D9D7",
            },
          }}
          onClick={() => {
            setDashboard("Landing");
            handleLeaderboardClick();
          }}
        >
          Leaderboard
        </Button>
      </Box>
    </Box>
  );
};
