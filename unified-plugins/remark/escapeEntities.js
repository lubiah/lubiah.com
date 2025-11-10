import { visit } from 'unist-util-visit';

/**
 * Encodes all "<>{}" in a string.
 * @param {string} str - The string to encode.
 * @returns {string} The encoded string.
 */
const encodeString = (str) => {
	return str.replace(/[<>{}]/g, (match) => {
		return {
			'<': '&lt;',
			'>': '&gt;',
			'{': '&#123;',
			'}': '&#125;'
		}[match];
	});
};

/**
 * Escapes code in a markdown tree.
 * @returns {(tree:any) => void} A function that escapes code in a markdown tree.
 */
const escapeCode = () => (tree) => {
	visit(tree, 'text', (node) => {
		node.value = encodeString(node.value);
	});
};

export default escapeCode;
