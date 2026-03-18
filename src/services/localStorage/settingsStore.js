import { STORAGE_KEYS, DEFAULT_TEAM_SIZE } from "@/constants/ui";

/**
 * Settings store for persisting user preferences to localStorage
 */
class SettingsStore {
  getTeamSize() {
    if (typeof window === "undefined") return DEFAULT_TEAM_SIZE;

    const saved = localStorage.getItem(STORAGE_KEYS.TEAM_SIZE);
    return saved ? Number(saved) : DEFAULT_TEAM_SIZE;
  }

  setTeamSize(size) {
    if (typeof window === "undefined") return;
    localStorage.setItem(STORAGE_KEYS.TEAM_SIZE, String(size));
  }

  clear() {
    if (typeof window === "undefined") return;
    localStorage.removeItem(STORAGE_KEYS.TEAM_SIZE);
  }
}

export default new SettingsStore();
