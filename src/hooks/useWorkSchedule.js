import { useEffect, useState } from "react";
import { getStatusByWorkTime } from "@/services/timeZone/workSchedule";

/**
 * Hook for calculating and updating work schedule status
 * Checks if member is online based on their work hours in EST timezone
 * 
 * @param {string} workStart - Work start time (HH:mm format)
 * @param {string} workEnd - Work end time (HH:mm format)
 * @returns {"online" | "offline"} Member's current status
 */
export const useWorkSchedule = (workStart, workEnd) => {
  const [status, setStatus] = useState(() => getStatusByWorkTime(workStart, workEnd));

  useEffect(() => {
    // Update status immediately
    setStatus(getStatusByWorkTime(workStart, workEnd));

    // Update status every minute to reflect time changes
    const interval = setInterval(() => {
      setStatus(getStatusByWorkTime(workStart, workEnd));
    }, 60000);

    return () => clearInterval(interval);
  }, [workStart, workEnd]);

  return status;
};
