/**
 * Validate email format
 * 
 * @param {string} email 
 * @returns {boolean} True if valid email format
 */
export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Validate that a value is not empty
 * 
 * @param {string} value 
 * @returns {boolean} True if not empty
 */
export const isNotEmpty = (value) => {
  return value && value.trim() !== "";
};

/**
 * Validate team size (minimum 1, maximum 500)
 * 
 * @param {number} size 
 * @returns {boolean} True if valid team size
 */
export const isValidTeamSize = (size) => {
  const num = Number(size);
  return !isNaN(num) && num >= 1 && num <= 500;
};
