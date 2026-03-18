const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://dummyjson.com";

export const API_ENDPOINTS = {
  MEMBERS: `${API_URL}/users`,
};

export const API_TIMEOUT = parseInt(process.env.NEXT_PUBLIC_API_TIMEOUT || "10000", 10);

export const DEFAULT_MEMBERS_LIMIT = 20;
