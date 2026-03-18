import { useEffect, useState } from "react";
import { fetchMembers } from "@/services/api/memberService";
import { getStatusByWorkTime } from "@/services/timeZone/workSchedule";
import { getRandomSchedule } from "@/constants/schedules";
import { getRole } from "@/constants/roles";

/**
 * Hook for fetching and transforming member data from API
 * Handles loading state and error handling
 * 
 * @param {number} limit - Number of members to fetch
 * @returns {Object} { members, loading, error }
 */
export const useMembers = (limit) => {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadMembers = async () => {
      try {
        setLoading(true);
        setError(null);

        const data = await fetchMembers(limit);

        // Transform API data to app format
        const transformedMembers = data.map((user) => {
          const schedule = getRandomSchedule();
          const workStart = schedule.start;
          const workEnd = schedule.end;

          return {
            id: user.id,
            name: `${user.firstName} ${user.lastName}`,
            role: getRole(),
            email: user.email,
            avatar: user.image,
            workStart,
            workEnd,
            status: getStatusByWorkTime(workStart, workEnd),
            country: user.address.country,
            location: `${user.address.city}, ${user.address.country}`,
            gender: user.gender,
          };
        });

        setMembers(transformedMembers);
      } catch (err) {
        console.error("Error loading members:", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    loadMembers();
  }, [limit]);

  return { members, loading, error };
};
