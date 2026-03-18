export const ROLES = {
  TEAM_LEAD: "👑Team Lead",
  DEVELOPER: "Developer",
  MARKETING: "Marketing",
  SUPPORT: "Support",
};

export const ROLE_LIST = [
  ROLES.TEAM_LEAD,
  ROLES.DEVELOPER,
  ROLES.MARKETING,
  ROLES.SUPPORT,
];

export const ROLE_COLORS = {
  [ROLES.TEAM_LEAD]: {
    bg: "bg-yellow-100",
    text: "text-yellow-800",
  },
  [ROLES.DEVELOPER]: {
    bg: "bg-blue-100",
    text: "text-blue-800",
  },
  [ROLES.MARKETING]: {
    bg: "bg-cyan-100/50",
    text: "text-cyan-800",
  },
  [ROLES.SUPPORT]: {
    bg: "bg-violet-100",
    text: "text-violet-800",
  },
};

export const ROLE_FILTER_OPTIONS = ["All", ...ROLE_LIST, "+"];

export const getRole = () => ROLE_LIST[Math.floor(Math.random() * ROLE_LIST.length)];

export const getRoleColors = (role) => ROLE_COLORS[role] || { bg: "bg-blue-100", text: "text-blue-700" };
