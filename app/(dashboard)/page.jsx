"use client";

import { useState } from "react";
import DashboardHeader from "@/components/features/dashboard/DashboardHeader";
import PageTitle from "@/components/common/PageTitle";
import StatsOverview from "@/components/features/dashboard/StatsOverview";
import MemberFilters from "@/components/features/members/MemberFilters";
import MemberList from "@/components/features/members/MemberList";
import MemberModal from "@/components/features/members/MemberModal";
import { useMembers } from "@/hooks/useMembers";
import { useMemberFiltering, useMemberStats } from "@/hooks/useMemberFiltering";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import settingsStore from "@/services/localStorage/settingsStore";
import { DEFAULT_TEAM_SIZE, STORAGE_KEYS } from "@/constants/ui";

/**
 * Dashboard Page
 * Main page displaying team members with filtering, sorting, and member details
 */
export default function Dashboard() {
  // State management
  const [selectedMember, setSelectedMember] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [roleFilter, setRoleFilter] = useState("All");
  const [sortAZ, setSortAZ] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);
  const [teamSize] = useLocalStorage(STORAGE_KEYS.TEAM_SIZE, DEFAULT_TEAM_SIZE);

  // Fetch members with loading state
  const { members, loading } = useMembers(teamSize);

  // Filter and sort members
  const filteredMembers = useMemberFiltering(members, searchQuery, roleFilter, sortAZ);

  // Calculate statistics
  const stats = useMemberStats(members);

  return (
    <>
      {/* Header Navigation */}
      <DashboardHeader visible={!searchFocused} />

      <main className="flex flex-col items-start md:items-center mt-3">
        {/* Page Title */}
        <PageTitle visible={!searchFocused} />

        {/* Statistics Overview */}
        <StatsOverview
          totalMembers={stats.total}
          leadersActive={stats.leadersActive}
          membersActive={stats.membersActive}
          membersAway={stats.membersAway}
          visible={!searchFocused}
        />

        {/* Filters and Search */}
        <MemberFilters
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          roleFilter={roleFilter}
          onRoleChange={setRoleFilter}
          sortAZ={sortAZ}
          onSortChange={setSortAZ}
          onSearchFocusChange={setSearchFocused}
        />

        {/* Members List or Loading State */}
        {loading ? (
          <div className="flex flex-col justify-center items-center mt-20">
            <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            <p className="text-gray-500 text-xl mt-4">Loading members...</p>
          </div>
        ) : (
          <MemberList
            members={filteredMembers}
            selectedMemberId={selectedMember?.id}
            onMemberClick={(member) => setSelectedMember(member)}
          />
        )}

        {/* Member Detail Modal */}
        {selectedMember && (
          <MemberModal
            member={selectedMember}
            onClose={() => setSelectedMember(null)}
          />
        )}
      </main>
    </>
  );
}
