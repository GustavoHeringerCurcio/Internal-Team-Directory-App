"use client";

import { useState, useEffect } from "react";

import Header from "../components/navbar/Header";

export default function Settings() {
  const [teamSize, setTeamSize] = useState<number>(() => {
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
      <main className="flex flex-col items-center mt-5 ">
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
            <input type="text" name="Name" id="name" className="bg-gray-200 h-8 px-4 rounded-lg w-full transition" defaultValue="Gustavo" />
          </div>
          <div className="flex flex-col mt-5">
            <p className="text-black font-semibold">Last Name</p>
            <input type="text" name="Name" id="name" className="bg-gray-200 h-8 px-4 rounded-lg w-full transition" defaultValue="Curcio" />
          </div>
          <div className="flex flex-col mt-5">
            <p className="text-black font-semibold text-nowrap">Email Address</p>

            <div className="flex flex-col md:flex-row gap-2  md:justify-between">
              <input type="text" name="Name" id="name" className="bg-gray-200 h-8 text-sm md:text-base px-4 rounded-lg w-full transition" defaultValue="heringer.gustavo31@gmail.com" />
              <input type="submit" value="Verify" className=" w-full md:w-[15%] h-8 rounded-lg bg-blue-500 text-white font-semibold
              hover:bg-blue-700 hover:scale-102
              active:bg-blue-300 active:scale-98
              " />
            </div>
          </div>
          <div className="flex flex-col mt-5">
            <p className="text-black font-semibold">location</p>
            <input type="text" name="Name" id="name" className="bg-gray-200 h-8 px-4 rounded-lg w-full transition" defaultValue="Brazil, Volta Redonda" />
          </div>
        </section>



        {/* ================== Dinamic Settings ============== */}
        <section className="mt-5 mb-5 bg-white p-6 rounded-lg shadow-md w-[80%] md:w-[60%] flex flex-col">
          <h1 className="font-bold text-start">Team settings</h1>
          <h2>Update your personal team settings here.</h2>

          <div className="flex flex-col mt-5">
            <p className="text-black font-semibold text-nowrap">Manage the size of your team</p>

            <div className="flex flex-col md:flex-row gap-2  md:justify-start">
              <input
                value={teamSize}
                onChange={(e) => setTeamSize(Number(e.target.value))}
                type="number" name="Name" id="name" className="bg-gray-200 h-8 text-sm md:text-base px-4 rounded-lg w-full md:[w-20%] transition" />

              <input
                type="submit"
                onClick={handleSave}
                value="Save"
                className=" w-full md:w-[15%] h-8 rounded-lg bg-blue-500 text-white font-semibold text-center
              hover:bg-blue-700 hover:scale-102
              active:bg-blue-300 active:scale-98
              " />
            </div>
          </div>

        </section>
      </main>
    </>
  );
}