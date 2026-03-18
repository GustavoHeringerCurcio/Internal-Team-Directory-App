"use client";

import { useState, useEffect } from "react";
import DashboardHeader from "@/components/features/dashboard/DashboardHeader";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { STORAGE_KEYS, DEFAULT_TEAM_SIZE } from "@/constants/ui";
import { isValidTeamSize } from "@/utils/validation";

export default function Settings() {
  const [teamSize, setTeamSize, clearTeamSize] = useLocalStorage(STORAGE_KEYS.TEAM_SIZE, DEFAULT_TEAM_SIZE);
  const [inputValue, setInputValue] = useState(String(teamSize));
  const [error, setError] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSave = () => {
    if (!isValidTeamSize(inputValue)) {
      setError("Team size must be between 1 and 500");
      return;
    }
    setTeamSize(Number(inputValue));
    setError("");
    console.log("Saved teamSize:", inputValue);
  };

  if (!mounted) return null;

  return (
    <>
      <DashboardHeader />
      <main className="flex flex-col items-center mt-5 h-full mb-50">
        <section className="md:w-[60%] w-[80%]">
          <h1 className="font-bold text-3xl md:text-5xl">Settings</h1>
          <p className="text-base md:text-xl text-gray-600">
            Manage your preferences and configurations here.
          </p>
        </section>

        {/* Team Size Section */}
        <section className="mt-5 mb-5 bg-white p-6 rounded-lg shadow-md w-[80%] md:w-[60%] flex flex-col">
          <h2 className="font-bold text-start mb-2">Team Size</h2>
          <p className="text-gray-600 mb-4">Adjust the number of team members to display (1-500)</p>

          <div className="flex flex-col gap-3">
            <input
              type="number"
              min="1"
              max="500"
              value={inputValue}
              onChange={(e) => {
                setInputValue(e.target.value);
                setError("");
              }}
              className="bg-gray-200 h-10 px-4 rounded-lg w-full transition border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter team size"
            />
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <div className="flex gap-2">
              <button
                onClick={handleSave}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
              >
                Save
              </button>
              <button
                onClick={clearTeamSize}
                className="bg-gray-400 text-white px-4 py-2 rounded-lg hover:bg-gray-500 transition"
              >
                Reset to Default
              </button>
            </div>
            <p className="text-xs text-gray-500">Current: {teamSize} members</p>
          </div>
        </section>
      </main>
    </>
  );
}
