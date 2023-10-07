export const convertSentenceCase = (string) => {
	function firstLetterUpper() {
		var newString = string?.toLowerCase().replace(/(^\s*\w|[\\.\\!\\?]\s*\w)/g, function (c) {
			return c.toUpperCase();
		});
		return newString;
	}

	var newText = firstLetterUpper(string);
	return newText;
};
