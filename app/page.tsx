"use client";

import { useState, useEffect } from "react";
import MemberList from "./components/team_table/MemberList";
import RoleButton from "./components/buttons/RoleButton";
import MemberModal from "./components/modals/MemberModal";

type Member = {
  id: number;
  name: string;
  role: string;
  email: string;
  avatar: string;
  status: "online" | "offline";
};




export default function Page() {

  //use State
  const [members, setMembers] = useState<Member[]>([]);
  const [selectedMember, setSelectedMember] = useState<Member | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [roleFilter, setRoleFilter] = useState("All");
  const [sortAz, setSortAz] = useState(false);



  let numberOfTeam = 10;

  useEffect(() => {
  async function fetchMembers() {
    try {
      const res = await fetch(`https://randomuser.me/api/?results=10&inc=name,email,picture,login&nat=us`);
      const data = await res.json();

      const fetchedMembers: Member[] = data.results.map((user: any, index: number) => ({
        id: index + 1,
        name: `${user.name.first} ${user.name.last}`,
        role: ["Developer", "Marketing", "Support" ][Math.floor(Math.random() * 3)],
        email: user.email,
        avatar: user.picture.large,
        status: Math.random() < 0.5 ? "online" : "offline" /* === NOTE: CHANGE IT LATER === */
        
      }));

      console.log(fetchedMembers)
      setMembers(fetchedMembers);
    } catch (err) {
      console.error(err);
    }
  }

  fetchMembers();
}, []);



  // 1. Filtrar por nome
  const nameFiltered = members.filter(member =>
    member.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  // 2. Filtrar por cargo
  const roleFiltered = nameFiltered.filter(member =>
    roleFilter === "All" ? true : member.role === roleFilter
  );
  // 3. Ordenar
 const sortedMembers = [...roleFiltered].sort((a, b) =>
  sortAz ? a.name.localeCompare(b.name) : 0
);

  //RoleButton Strings
  const roles = ["All", "Marketing", "Developer", "Support"];



  {/* ================== "HTML" ===================*/}
  return (
    <main className="flex flex-col items-start md:items-center mt-6">

      {/* ===== Titles H1 and H2 ===== */}
      <section className="flex flex-col ml-5">
        <h1 className="font-bold text-5xl">Team Members</h1>
        <p className="text-2xl font-light text-gray-500">Manage your organization members</p>

      </section>

      {/* ===== Search by Role Buttons ===== */}
      <section className=" md:w-screen ">
        <div className="flex flex-row gap-3 mt-10 overflow-x-auto md:overflow-visible md:justify-center ml-5 md:ml-5">
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
              className="w-full h-16 border border-gray-300 rounded-full bg-white px-4 pr-28 text-[20px] outline-none"
              value={searchQuery}


              onChange={(e) => {
                console.log("Input value:", e.target.value);
                setSearchQuery(e.target.value)
              }}
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

      {/* ===== Members list ===== */}


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
  )
};