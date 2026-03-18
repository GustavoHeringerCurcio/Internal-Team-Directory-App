"use client";

import { useState, useEffect } from "react";

import Header from "../components/navbar/Header";

export default function Settings() {
  const [teamSize, setTeamSize] = useState(() => {
    if (typeof window === "undefined") return 20;

    const saved = localStorage.getItem("teamSize");
    return saved ? Number(saved) : 20;
  });


  function handleSave() {
    localStorage.setItem("teamSize", String(teamSize));
    console.log(
      "Saved teamSize:",
      localStorage.getItem("teamSize")
    );
  }

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
  setMounted(true);
}, []);

  if (!mounted) return null;

  return (
    <>
      <Header></Header>
      <main className="flex flex-col items-center mt-5 h-full mb-50">
        <section className="md:w-[60%] w-[80%] ">
          <h1 className="font-bold text-3xl md:text-5xl">Settings</h1>
          <p className="text-base md:text-xl text-gray-600">
            Manage your preferences and configurations here.
          </p>
        </section>
        {/* ==================Profile Information Section ============== */}
        <section className="mt-5 mb-5 bg-white p-6 rounded-lg shadow-md w-[80%] md:w-[60%] flex flex-col">
          <h1 className="font-bold text-start">Profile information</h1>
          <h2>Update your personal details and profile picture</h2>

          <div className="flex flex-col mt-5">
            <p className="text-black font-semibold">First Name</p>
            <input type="text" name="Name" id="name" className="bg-gray-200 h-8 px-4 rounded-lg w-full transition" placeholder="First Name" />
          </div>
        </section>
      </main>
    </>
  );
}
