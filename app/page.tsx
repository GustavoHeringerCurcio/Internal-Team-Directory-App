"use client";

import { useState, useEffect } from "react";
import MemberList from "./components/team_table/MemberList";
import RoleButton from "./components/buttons/RoleButton";
import MemberModal from "./components/modals/MemberModal";
import Titles from "./components/Titles/Titles";
import Header from "./components/navbar/Header";

type Member = {
  id: number;
  name: string;
  role: string;
  email: string;
  avatar: string;
  status: "online" | "offline";
  workStart: string; // Exemplo: "09:00"
  workEnd: string;   // Exemplo: "17:00"
  country: string;
  location: string;
  gender: string;
};

type PageProps = {
  setSearchFocused?: (val: boolean) => void;
};

type HeaderProps = {
  visible?: boolean;
};


export default function Page() {

  //use State
  const [members, setMembers] = useState<Member[]>([]);
  const [selectedMember, setSelectedMember] = useState<Member | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [roleFilter, setRoleFilter] = useState("All");
  const [sortAz, setSortAz] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);


  let numberOfTeam = 20;


  function getStatusByWorkTime(workStart: string, workEnd: string): "online" | "offline" {
    // Pegar horário atual em EST
    const estTime = new Date().toLocaleString('en-US', {
      timeZone: 'America/New_York',
      hour12: false,
      hour: '2-digit',
      minute: '2-digit'
    });

    // Compare: estTime >= workStart && estTime < workEnd
    if (estTime >= workStart && estTime < workEnd) {
      return "online";   // Está dentro do horário de trabalho
    } else {
      return "offline";  // Fora do horário de trabalho
    }
  }

  {/* ===== Fetch API using RandomUserAPI ===== */ }
  useEffect(() => {
    async function fetchMembers() {
      try {
        const res = await fetch(`https://randomuser.me/api/?results=${numberOfTeam}&nat=us`);
        const data = await res.json();

        const fetchedMembers: Member[] = data.results.map((user: any, index: number) => {

          const schedules = [
            { start: "08:00", end: "16:00" },
            { start: "16:00", end: "23:59" },
            { start: "00:00", end: "08:00" },
          ];

          const randomSchedule = schedules[Math.floor(Math.random() * schedules.length)];
          const workStart = randomSchedule.start;
          const workEnd = randomSchedule.end;

          return {
            id: index + 1,
            name: `${user.name.first} ${user.name.last}`,
            role: ["Developer", "Marketing", "Support", "👑Team Lead"][Math.floor(Math.random() * 4)],
            email: user.email,
            avatar: user.picture.large,
            workStart,
            workEnd,
            status: getStatusByWorkTime(workStart, workEnd),
            country: user.location.country,
            location: user.location.city + ", " + user.location.country,
            gender: user.gender,
          };

        });

        console.log(fetchedMembers)
        setMembers(fetchedMembers);
      } catch (err) {
        console.error(err);
      }
    }

    fetchMembers();
  }, []);


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
  const roles = ["All", "👑Team Lead", "Developer", "Marketing", "Support", "+"];



  {/* ================== "HTML" ===================*/ }
  return (
    <>
    {/* ===== Header ===== */}
    <Header visible={!searchFocused}></Header>

    <main className="flex flex-col items-start md:items-center mt-6">

      {/* ===== Titles H1 and H2 ===== */}
      <Titles visible={!searchFocused}></Titles>

      {/* ===== Search by Role Buttons ===== */}
      <section className=" w-full ">
        <div className="
            flex gap-3 mt-10
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

        <div className="flex flex-col md:flex-row justify-center items-start w-screen mt-5 gap-2 px-5 md:px-5">

          {/* ===== Search Bar ===== */}
          <div className="relative w-full md:w-[70%] h-16">
            <input
              type="text"
              placeholder="Search by name..."
              className="w-full h-16 border border-gray-300 rounded-full bg-white px-4 pr-28 text-[20px] transition-all duration-200"
              value={searchQuery}

              // 🔹 Controla quando o Header/Titles somem
              onFocus={() => setSearchFocused?.(true)}
              onBlur={() => setSearchFocused?.(false)}

              // 🔹 Atualiza o valor e filtra membros
              onChange={(e) => setSearchQuery(e.target.value)}
            />

            {/* Opcional: ícone de lupa dentro do input */}
            <span className="absolute right-6 top-1/2 transform -translate-y-1/2 text-gray-400">
              🔍
            </span>
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
      <MemberList
        members={sortedMembers}
        selectedMemberId={selectedMember?.id}
        onMemberClick={(member) => setSelectedMember(member)}
      />

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