/**
 * Encodes special HTML characters to their equivalent HTML entities
 *
 * @param {string} string - The input string containing special characters to encode
 * @returns {string} The encoded string
 */
export const encodeHtml = (string: string): string => {
	return string.replace(/[\u00A0-\u9999<>&]/g, function (i: string): string {
		return `&#${i.charCodeAt(0)};`;
	});
};
