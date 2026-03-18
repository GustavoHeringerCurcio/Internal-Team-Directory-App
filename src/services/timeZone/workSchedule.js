import { TIMEZONE_EST } from "@/constants/schedules";

/**
 * Determines if a member is online based on their work schedule
 * Checks current time in EST timezone and compares with work start/end times
 * 
 * @param {string} workStart - Work start time (HH:mm format)
 * @param {string} workEnd - Work end time (HH:mm format)
 * @returns {"online" | "offline"} Member's current status
 */
export const getStatusByWorkTime = (workStart, workEnd) => {
  const estTime = new Date().toLocaleString("en-US", {
    timeZone: TIMEZONE_EST,
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
  });

  if (estTime >= workStart && estTime < workEnd) {
    return "online";
  }
  return "offline";
};

/**
 * Formats work schedule time for display
 * 
 * @param {string} time - Time in HH:mm format
 * @returns {string} Formatted time (e.g., "09:00 AM")
 */
export const formatWorkTime = (time) => {
  const [hours, minutes] = time.split(":").map(Number);
  const date = new Date(2000, 0, 1, hours, minutes);
  return date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
};
