/**
 * Format a full name from first and last name
 * 
 * @param {string} firstName 
 * @param {string} lastName 
 * @returns {string} Full name
 */
export const formatFullName = (firstName, lastName) => {
  return `${firstName} ${lastName}`.trim();
};

/**
 * Truncate text to a specified length with ellipsis
 * 
 * @param {string} text 
 * @param {number} length 
 * @returns {string} Truncated text
 */
export const truncateText = (text, length = 50) => {
  if (!text || text.length <= length) return text;
  return `${text.substring(0, length)}...`;
};

/**
 * Capitalize the first letter of a string
 * 
 * @param {string} text 
 * @returns {string} Capitalized text
 */
export const capitalize = (text) => {
  if (!text) return "";
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
};
