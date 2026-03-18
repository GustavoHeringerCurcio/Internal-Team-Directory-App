import { getRoleColors } from "@/constants/roles";

/**
 * RoleButton Component
 * Interactive button for filtering members by role
 */
export default function RoleButton({ role, selectedRole, setSelectedRole }) {
  const isSelected = selectedRole === role;

  return (
    <button
      className={`shrink-0 px-4 py-2 rounded-full border border-gray-400 transition-all ${
        isSelected ? "bg-blue-500 text-white" : "bg-white text-gray-500 hover:border-blue-300"
      }`}
      onClick={() => setSelectedRole(role)}
      aria-pressed={isSelected}
      aria-label={`Filter by ${role}`}
    >
      {role}
    </button>
  );
}
