import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import ListCard from "./ListCard";
import Image from "next/image";
import { ListModal } from "@components/Global";
import PropTypes from "prop-types";

const Index = ({ lists }) => {
	const [open, setOpen] = useState(false);
	return (
		<>
			<Box display={"flex"} flexDirection={"column"} gap={2} width={"100%"} minHeight={"100px"}>
				{lists && lists.length > 0 ? (
					<>
						{lists?.map((l, i) => (
							<ListCard key={i} data={l} />
						))}
						<Box display={"flex"} justifyContent={"center"}>
							<Button
								sx={{ color: "#50D9D7", px: 2, py: 1, borderRadius: 3 }}
								onClick={() => setOpen(true)}
							>
								Create new list
							</Button>
						</Box>
					</>
				) : (
					<Box
						display={"flex"}
						flexDirection={"column"}
						alignSelf={"center"}
						alignItems={"center"}
						justifySelf={"center"}
					>
						<Image src="/images/list.svg" width={200} height={300} alt="No list" />
						<Typography textAlign={"center"} fontSize="23px">
							You haven&#39;t created any list yet!
						</Typography>
						<Button
							alignSelf={"center"}
							sx={{ color: "#50D9D7" }}
							onClick={() => setOpen(true)}
						>
							Create new list
						</Button>
					</Box>
				)}
			</Box>
			<ListModal setOpen={setOpen} open={open} />
		</>
	);
};

export default Index;

Index.propTypes = {
	lists: PropTypes.any
};
