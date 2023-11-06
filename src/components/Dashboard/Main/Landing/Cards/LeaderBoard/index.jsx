import { fetchAllUser } from "@api/leaderboard";
import { dashboardState } from "@atom";
import {
  Avatar,
  Box,
  Button,
  LinearProgress,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Badge
} from "@mui/material";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { getEngineer } from "@cookies";
import { useEffect } from "react";
import { nFormatter } from "@hooks/nFormatter";

export const LeaderBoardCard = () => {
  const router = useRouter();
  const engineer = getEngineer();
  const [allEngineers, setAllEngineers] = useState([]);
  const [dashboard, setDashboard] = useRecoilState(dashboardState);
  const [higherRankUser, setHigherRankUser] = useState();
  const [lowerRankUser, setLowerRankUser] = useState();
  // const [userXp, setUserXp] = useState(0);
  const [cal, setCal] = useState([]);

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
    let currentXP = 10000;
    let previousXP = 0;
    let level = 1;

    while (xp >= currentXP) {
      xp -= currentXP;
      let temp = currentXP;
      currentXP += previousXP;
      previousXP = temp;
      level++;
    }
    cal.push(level - 1, currentXP + previousXP);
    return cal;
  };
  useEffect(() => {
    const calci = calculateLevel(engineer.xp);
    console.log("calci", calci);
    console.log("level", calci[0]);
    const userXp = calci[1];
    console.log("userXp", userXp);
    const levelProgress = userXp > 0 ? (engineer.xp / userXp) * 100 : 0;
    console.log("levelProgress", levelProgress);

    setDashboard((prevDashboard) => ({
      ...prevDashboard,
      level: calci[0],
      progress: levelProgress,
      remXp: calci[1]-engineer.xp
    }));
  }, [engineer.xp]);

  useEffect(() => {
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
      setHigherRankUser(
        allEngineers.find(
          (engineer) => engineer.rank === currentEngineer.rank - 1
        )
      );
      console.log("higherRankUser", higherRankUser);
      setLowerRankUser(
        allEngineers.find(
          (engineer) => engineer.rank === currentEngineer.rank + 1
        )
      );
      console.log("lowerRankUser", lowerRankUser);
    }
  }, [allEngineers]);

  useEffect(() => {
    const specificEngineerId = engineer._id;
    console.log("specificEngineer", specificEngineerId);
    setDashboard((prevDashboard) => ({
      ...prevDashboard,
    }));
  }, []);

  const handleLeaderboardClick = () => {
    setDashboard((prevDashboard) => ({
      ...prevDashboard,
      level: cal[0],
      progress: cal[1] > 0 ? (engineer.xp / cal[1]) * 100 : 0,
      remXp: cal[1]-engineer.xp
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
          {dashboard.remXp}XP for level up
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
          <Typography fontSize={"14px"}>Level {dashboard?.level}</Typography>
          <Typography fontSize={"14px"}>Level {dashboard?.level + 1}</Typography>
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
          <TableContainer sx={{}}>
            <Table>
              <TableBody sx={{}}>
                {higherRankUser ? (
                  <TableRow
                    sx={{
                      border: "0",
                      cursor: "pointer",
                    }}
                    onClick={() => {router.push(`/profile/${higherRankUser?._id}`)}}
                  >
                    <TableCell
                      align="left"
                      sx={{
                        border: "0",
                        display: "flex",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        gap: "1vw",
                      }}
                    >
                      <Avatar src={higherRankUser?.avatar}></Avatar>
                      <Typography>{higherRankUser?.name}</Typography>
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{
                        border: "0",
                      }}
                    >
                      {/* <Avatar src={higherRankUser.avatar}></Avatar>
                    <Typography>{higherRankUser.name}</Typography> */}
                      <Typography>
                        {nFormatter(higherRankUser?.xp, 0)}
                      </Typography>
                    </TableCell>
                    <TableCell
                      align="right"
                      sx={{
                        border: "0",
                      }}
                    >
                      {higherRankUser?.coins}
                    </TableCell>
                  </TableRow>
                ) : (
                  <Typography>...</Typography>
                )}

                <TableRow
                  sx={{
                    backgroundColor: "#1D5352",
                    border: "0",
                    height: "10px",
                  }}
                >
                  <TableCell
                    align="left"
                    sx={{
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "center",
                      gap: "1vw",
                      border: "0",
                      width: ["auto", "20vw"],
                      //   mx: 'auto',
                      //   ml: [0, 35]
                    }}
                  >
                    <Badge
                      overlap="circular"
                      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                      badgeContent={
                        <Typography sx={{bgcolor:"white",color:"black", fontSize:"10px", padding:"4px", borderRadius:"100%"}}>L{dashboard?.level}</Typography>
                      }
                    >
                      <Avatar
                        src={engineer?.avatar}
                      />
                    </Badge>
                    <Typography>{engineer?.name}</Typography>
                  </TableCell>

                  <TableCell
                    align="center"
                    sx={{
                      border: "0",
                    }}
                  >
                    {nFormatter(engineer?.xp, 0)}
                  </TableCell>

                  <TableCell
                    align="right"
                    sx={{
                      border: "0",
                    }}
                  >
                    {engineer?.coins}
                  </TableCell>
                </TableRow>

                {lowerRankUser ? (
                  <TableRow
                    sx={{
                      border: "0",
                      cursor: "pointer",
                    }}
                    onClick={() => {router.push(`/profile/${lowerRankUser?._id}`)}}
                  >
                    <TableCell
                      align="left"
                      sx={{
                        display: "flex",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        width: ["auto", "20vw"],
                        border: "0",
                        gap: "1vw",
                        //   mx: 'auto',
                        //   ml: [0, 35]
                      }}
                    >
                      <Avatar src={lowerRankUser?.avatar}></Avatar>
                      <Typography>{lowerRankUser?.name}</Typography>
                    </TableCell>

                    <TableCell
                      align="center"
                      sx={{
                        border: "0",
                      }}
                    >
                      {nFormatter(lowerRankUser?.xp, 0)}
                    </TableCell>

                    <TableCell
                      align="right"
                      sx={{
                        border: "0",
                      }}
                    >
                      {lowerRankUser?.coins}
                    </TableCell>
                  </TableRow>
                ) : (
                  <Typography>...</Typography>
                )}
              </TableBody>
            </Table>
          </TableContainer>
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
