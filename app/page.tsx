"use client";

import MemberList from "./components/team_table/MemberList";
import RoleButton from "./components/buttons/RoleButton";
import MemberModal from "./components/modals/MemberModal";

import { useState } from "react";


type Member = {
  id: number;
  name: string;
  role: string;
  email: string;
  avatar: string;
};

const members: Member[] = [
  {
    id: 1,
    name: "John Smith",
    role: "Developer",
    email: "john.smith@email.com",
    avatar: "https://xsgames.co/randomusers/avatar.php?g=male&u=1"
  },
  {
    id: 2,
    name: "Michael Brown",
    role: "Developer",
    email: "michael.brown@email.com",
    avatar: "https://xsgames.co/randomusers/avatar.php?g=male&u=2"
  },
  {
    id: 3,
    name: "David Lee",
    role: "Support",
    email: "david.lee@email.com",
    avatar: "https://xsgames.co/randomusers/avatar.php?g=male&u=3"
  },
  {
    id: 4,
    name: "James Wilson",
    role: "Marketing",
    email: "james.wilson@email.com",
    avatar: "https://xsgames.co/randomusers/avatar.php?g=male&u=4"
  },
  {
    id: 5,
    name: "Robert Johnson",
    role: "Developer",
    email: "robert.johnson@email.com",
    avatar: "https://xsgames.co/randomusers/avatar.php?g=male&u=5"
  },
  {
    id: 6,
    name: "William Davis",
    role: "Support",
    email: "william.davis@email.com",
    avatar: "https://xsgames.co/randomusers/avatar.php?g=male&u=6"
  },
  {
    id: 7,
    name: "Emily Martinez",
    role: "Marketing",
    email: "emily.martinez@email.com",
    avatar: "https://xsgames.co/randomusers/avatar.php?g=female&u=7"
  },
  {
    id: 8,
    name: "Sophia Taylor",
    role: "Marketing",
    email: "sophia.taylor@email.com",
    avatar: "https://xsgames.co/randomusers/avatar.php?g=female&u=8"
  },
  {
    id: 9,
    name: "Olivia Anderson",
    role: "Developer",
    email: "olivia.anderson@email.com",
    avatar: "https://xsgames.co/randomusers/avatar.php?g=female&u=9"
  },
  {
    id: 10,
    name: "Ava Thomas",
    role: "Support",
    email: "ava.thomas@email.com",
    avatar: "https://xsgames.co/randomusers/avatar.php?g=female&u=10"
  },
];


export default function Page() {

  //use State
  const [selectedMember, setSelectedMember] = useState<Member | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [roleFilter, setRoleFilter] = useState("All");
  const [sortAz, setSortAz] = useState(false);


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
              className="w-full h-16 border border-gray-300 rounded-full bg-white px-4 pr-28 text-[20px]"
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

      {selectedMember && (
        <MemberModal
          member={selectedMember}
          onClose={() => setSelectedMember(null)}
        />
      )}







    </main>
  )
};