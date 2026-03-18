import { useMemo } from "react";

/**
 * Hook for filtering and sorting members
 * Handles search by name, filter by role, and alphabetical sorting
 * 
 * @param {Array} members - Array of member objects
 * @param {string} searchQuery - Search query for name filtering
 * @param {string} roleFilter - Role to filter by (or "All")
 * @param {boolean} sortAZ - Whether to sort alphabetically A→Z
 * @returns {Array} Filtered and sorted member array
 */
export const useMemberFiltering = (members, searchQuery, roleFilter, sortAZ) => {
  const filteredMembers = useMemo(() => {
    // 1. Filter by search query (name)
    const nameFiltered = members.filter((member) =>
      member.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // 2. Filter by role
    const roleFiltered = nameFiltered.filter((member) =>
      roleFilter === "All" ? true : member.role === roleFilter
    );

    // 3. Sort A-Z if enabled
    const sorted = [...roleFiltered].sort((a, b) =>
      sortAZ ? a.name.localeCompare(b.name) : 0
    );

    return sorted;
  }, [members, searchQuery, roleFilter, sortAZ]);

  return filteredMembers;
};

/**
 * Calculate statistics about members
 * 
 * @param {Array} members - Array of member objects
 * @returns {Object} Statistics object with counts
 */
export const useMemberStats = (members) => {
  return {
    total: members.length,
    leadersActive: members.filter((m) => m.role === "👑Team Lead" && m.status === "online").length,
    membersActive: members.filter((m) => m.status === "online").length,
    membersAway: members.filter((m) => m.status === "offline").length,
  };
};
