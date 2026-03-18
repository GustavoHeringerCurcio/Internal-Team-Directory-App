import { API_ENDPOINTS } from "@/constants/urls";

export const fetchMembers = async (limit = 20) => {
  try {
    const response = await fetch(`${API_ENDPOINTS.MEMBERS}?limit=${limit}`);
    if (!response.ok) {
      throw new Error(`API responded with status: ${response.status}`);
    }
    const data = await response.json();
    return data.users || [];
  } catch (error) {
    console.error("Failed to fetch members:", error);
    throw error;
  }
};

export const getMemberById = async (id) => {
  try {
    const response = await fetch(`${API_ENDPOINTS.MEMBERS}/${id}`);
    if (!response.ok) {
      throw new Error(`API responded with status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Failed to fetch member ${id}:`, error);
    throw error;
  }
};
