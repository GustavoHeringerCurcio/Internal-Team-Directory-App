"use client";

import { useState, useEffect, } from "react";

import MemberList from "./components/team_table/MemberList";
import RoleButton from "./components/buttons/RoleButton";
import MemberModal from "./components/modals/MemberModal";
import Titles from "./components/Titles/Titles";
import Header from "./components/navbar/Header";
import Overview from "./components/team_table/Overview";

export default function Page() {

  //use State
  const [members, setMembers] = useState([]);
  const [selectedMember, setSelectedMember] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [roleFilter, setRoleFilter] = useState("All");
  const [sortAz, setSortAz] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);
  const [loading, setLoading] = useState(true);

  //save on localstorage the number of team members
  const [numberOfTeam, setNumberOfTeam] = useState(() => {
    if (typeof window === "undefined") return 20;

    const saved = localStorage.getItem("teamSize");
    return saved ? Number(saved) : 20;
  });


  function getStatusByWorkTime(workStart, workEnd) {

    //get current time in EST
    const estTime = new Date().toLocaleString('en-US', {
      timeZone: 'America/New_York',
      hour12: false,
      hour: '2-digit',
      minute: '2-digit'
    });

    //to compare estTime >= workStart && estTime < workEnd
    if (estTime >= workStart && estTime < workEnd) {
      return "online";   //inside the work time
    } else {
      return "offline";  //outside the work time
    }
  }



  {/* ===== Overview stats ===== */ }
  const totalMembers = members.length;

  // Leaders Active
  const leadersActive = members.filter(m => m.role === "👑Team Lead" && m.status === "online").length;

  // Members Active
  const membersActive = members.filter(m => m.status === "online").length;

  // Members Away
  const membersAway = members.filter(m => m.status === "offline").length;





  {/* ===== Fetch API using DummyJSON API ===== */ }
  useEffect(() => {
    setLoading(true);

    async function fetchMembers() {
      try {
        const res = await fetch(`https://dummyjson.com/users?limit=${numberOfTeam}`);
        const data = await res.json();

        const fetchedMembers = data.users.map((user) => {

          const schedules = [
            { start: "08:00", end: "16:00" },
            { start: "16:00", end: "23:59" },
            { start: "00:00", end: "08:00" },
          ];

          const randomSchedule = schedules[Math.floor(Math.random() * schedules.length)];
          const workStart = randomSchedule.start;
          const workEnd = randomSchedule.end;


          return {
            id: user.id,
            name: `${user.firstName} ${user.lastName}`,
            role: ["Developer", "Marketing", "Support", "👑Team Lead"][Math.floor(Math.random() * 4)], //decide the 4 roles randomly 
            email: user.email,
            avatar: user.image,
            workStart,
            workEnd,
            status: getStatusByWorkTime(workStart, workEnd),
            country: user.address.country,
            location: user.address.city + ", " + user.address.country,
            gender: user.gender,
          };

        });

        console.log(fetchedMembers)
        setMembers(fetchedMembers);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    }

    fetchMembers();
  }, [numberOfTeam]);


  {/* ===== Searching Buttons ===== */ }

  // 1. Filter by name
  const nameFiltered = members.filter(member =>
    member.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  // 2. filter by role
  const roleFiltered = nameFiltered.filter(member =>
    roleFilter === "All" ? true : member.role === roleFilter
  );
  // 3. sort A-Z
  const sortedMembers = [...roleFiltered].sort((a, b) =>
    sortAz ? a.name.localeCompare(b.name) : 0
  );


  //RoleButton Roles(strings)
  const roles = ["All", "👑Team Lead", "Developer", "Marketing", "Support", "+" ];

  {/* ================== "HTML" ===================*/ }
  return (
    <>
      {/* ===== Component.Header ===== */}
      <Header visible={!searchFocused}></Header>

      <main className="flex flex-col items-start md:items-center mt-3">

        {/* ===== Component Titles and Desc ===== */}
        <Titles visible={!searchFocused}></Titles>

        {/* ===== Component.OverView ===== */}
        <Overview
          totalMembers={totalMembers}
          leadersActive={leadersActive}
          membersActive={membersActive}
          membersAway={membersAway}
          visible={!searchFocused}
        />

        {/* ===== Search by Role Buttons ===== */}
        <section className=" w-full ">
          <div className="
            flex gap-3 mt-3
            overflow-x-auto
            whitespace-nowrap
            px-4
            pb-2
            scrollbar-hide
            md:justify-center
            md:overflow-x-visible
            scroll-smooth
            snap-x 
            snap-mandatory
          ">

            {roles.map((role) => (
              <RoleButton
                key={role}
                role={role}
                selectedRole={roleFilter}
                setSelectedRole={setRoleFilter}
              ></RoleButton>
            ))}
          </div>


          <div className="flex flex-col md:flex-row justify-center items-start w-full mt-5 gap-2 px-5 md:px-5">


            <div className="relative w-full md:w-[70%] h-16">
              <input
                type="text"
                placeholder="Search by name..."
                className="w-full h-16 border border-gray-300 rounded-full bg-white px-4 pr-10 text-[20px] transition-all duration-200"
                value={searchQuery}
                onFocus={() => setSearchFocused(true)}
                onBlur={() => setSearchFocused(false)}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>


            {/* ====== A-Z button ===== */}
            <button className="bg-white text-blue-500 border shadow-[0_6px_16px_rgba(43,127,255,0.3)] border-blue-500 px-4 h-10  rounded-full md:w-auto md:h-16 mt-2 md:mt-0 active:bg-blue-100 active:scale-110"
              onClick={() => setSortAz(!sortAz)}
            >
              A→Z
            </button>

          </div>
        </section>

        {/* ===== Members list using sortedMembers ===== */}
        {loading ? (
          <div className="flex flex-col justify-center items-center mt-20">
            {/* loanding effect with tailwind */}
            <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            <p className="text-gray-500 text-xl mt-4">Loading members...</p>
          </div>
          
        ) : (
          <MemberList
            members={sortedMembers}
            selectedMemberId={selectedMember?.id}
            onMemberClick={(member) => setSelectedMember(member)}
          />
        )}

        {/* ===== If Selected ===== */}
        {selectedMember && (
          <MemberModal
            member={selectedMember}
            onClose={() => setSelectedMember(null)}
          />
        )}
      </main>
    </>

  )
};
