import PropTypes from "prop-types";
import React, { useState } from "react";

export const CardFlip = ({ front, back }) => {
	const [isFlipped, setIsFlipped] = useState(false);
	const flip = () => setIsFlipped(!isFlipped);
	return <>{/* <FlipCard /> */}</>;
};

CardFlip.propTypes = {
	front: PropTypes.any,
	back: PropTypes.any
};
