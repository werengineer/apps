export const getPercentageValue = (percentage, total) => {
	const value = total - (percentage / 100) * total;
	return value;
};
