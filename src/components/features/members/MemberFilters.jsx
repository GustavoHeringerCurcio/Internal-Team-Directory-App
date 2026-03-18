import { ROLE_FILTER_OPTIONS } from "@/constants/roles";
import RoleButton from "@/components/common/RoleButton";

/**
 * MemberFilters Component
 * Search, role filter, and sort controls
 */
export default function MemberFilters({
  searchQuery,
  onSearchChange,
  roleFilter,
  onRoleChange,
  sortAZ,
  onSortChange,
  onSearchFocusChange,
}) {
  return (
    <section className="w-full">
      {/* Role Filter Buttons */}
      <div className="flex gap-3 mt-3 overflow-x-auto whitespace-nowrap px-4 pb-2 scrollbar-hide md:justify-center md:overflow-x-visible scroll-smooth snap-x snap-mandatory">
        {ROLE_FILTER_OPTIONS.map((role) => (
          <RoleButton
            key={role}
            role={role}
            selectedRole={roleFilter}
            setSelectedRole={onRoleChange}
          />
        ))}
      </div>

      {/* Search and Sort */}
      <div className="flex flex-col md:flex-row justify-center items-start w-full mt-5 gap-2 px-5 md:px-5">
        {/* Search Input */}
        <div className="relative w-full md:w-[70%] h-16">
          <input
            type="text"
            placeholder="Search by name..."
            className="w-full h-16 border border-gray-300 rounded-full bg-white px-4 pr-10 text-[20px] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchQuery}
            onFocus={() => onSearchFocusChange(true)}
            onBlur={() => onSearchFocusChange(false)}
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </div>

        {/* A-Z Sort Button */}
        <button
          className="bg-white text-blue-500 border shadow-[0_6px_16px_rgba(43,127,255,0.3)] border-blue-500 px-4 h-10 rounded-full md:w-auto md:h-16 mt-2 md:mt-0 active:bg-blue-100 active:scale-110 transition"
          onClick={() => onSortChange(!sortAZ)}
        >
          A→Z
        </button>
      </div>
    </section>
  );
}
