import MemberRow from "./MemberRow";
import { getRoleColors } from "@/constants/roles";

/**
 * MemberList Component
 * Displays members in mobile/desktop layouts with filtering
 */
export default function MemberList({ members, selectedMemberId, onMemberClick }) {
  return (
    <section className="w-full mt-8 px-5">
      {/* Mobile Layout */}
      <div className="flex flex-col gap-4 md:hidden">
        {members.map((member) => (
          <MemberRow
            key={member.id}
            member={member}
            isSelected={member.id === selectedMemberId}
            onClick={() => onMemberClick?.(member)}
          />
        ))}
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:block max-w-[70%] mx-auto">
        <div className="rounded-4xl shadow-lg mb-10">
          {/* Table Header */}
          <div className="grid grid-cols-[1.5fr_1.5fr_1.5fr_1.5fr] px-6 py-4 text-xs font-semibold text-gray-500 uppercase border border-gray-300 rounded-full">
            <div>Avatar</div>
            <div>Name</div>
            <div>Role</div>
            <div>Email</div>
          </div>

          {/* Table Rows */}
          <div className="divide-y divide-gray-200">
            {members.map((member) => {
              const isSelected = member.id === selectedMemberId;
              const roleColors = getRoleColors(member.role);

              return (
                <div key={member.id} className="px-0.5">
                  <div
                    onClick={() => onMemberClick?.(member)}
                    className={`grid grid-cols-[1.5fr_1.5fr_1.5fr_1.5fr] 
                      items-center justify-items-start px-6 py-3 cursor-pointer transition rounded-full
                      ${isSelected ? "bg-blue-200 ring-2 ring-blue-500" : "hover:bg-blue-50"}
                    `}
                  >
                    {/* Avatar */}
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="w-14 h-14 rounded-full object-cover"
                    />

                    {/* Name + Status */}
                    <div className="flex items-center gap-2">
                      <span
                        className={`h-2.5 w-2.5 rounded-full ${
                          member.status === "online" ? "bg-green-500" : "bg-red-500"
                        }`}
                      />
                      <p className="font-medium text-gray-900">{member.name}</p>
                    </div>

                    {/* Role */}
                    <span className={`text-xs font-medium text-nowrap px-3 py-1 rounded-full ${roleColors.bg} ${roleColors.text}`}>
                      {member.role}
                    </span>

                    {/* Email */}
                    <span className="text-xs text-gray-500 break-all">{member.email}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
