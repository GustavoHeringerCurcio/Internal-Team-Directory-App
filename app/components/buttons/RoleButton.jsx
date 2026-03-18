export default function RoleButton({ role, selectedRole, setSelectedRole }) {
  return (
    <button
      className={`shrink-0 px-4 py-2 rounded-full border border-gray-400 ${
        selectedRole === role ? "bg-blue-500 text-white" : "bg-white text-gray-500"
      }`}
      onClick={() => setSelectedRole(role)}
    >
      {role}
    </button>
  );
}
