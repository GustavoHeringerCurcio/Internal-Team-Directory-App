import Header from "./components/navbar/Header"
import MemberRow from "./components/team_table/MemberRow"
import MemberList from "./components/team_table/MemberList";

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
    name: "John Doe",
    role: "Frontend Developer",
    email: "john.doe@email.com",
    avatar: "https://i.pravatar.cc/150?img=1",
  },
  {
    id: 2,
    name: "Sarah Miller",
    role: "Product Designer",
    email: "sarah.miller@email.com",
    avatar: "https://i.pravatar.cc/150?img=2",
  },
  {
    id: 3,
    name: "Carlos Silva",
    role: "Backend Developer",
    email: "carlos.silva@email.com",
    avatar: "https://i.pravatar.cc/150?img=3",
  },
  {
    id: 4,
    name: "Emily Johnson",
    role: "Marketing Manager",
    email: "emily.johnson@email.com",
    avatar: "https://i.pravatar.cc/150?img=4",
  },
];


export default function Page() {



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
          <button className="bg-blue-500 text-white px-4 py-2 border border-gray-400 rounded-full"> All</button>
          <button className="bg-white text-gray-500 px-4 py-2 border border-gray-400 rounded-full"> Marketing</button>
          <button className="bg-white text-gray-500 px-4 py-2 border border-gray-400 rounded-full"> Sales</button>
          <button className="bg-white text-gray-500 px-4 py-2 border border-gray-400 rounded-full"> Developers</button>
          <button className="bg-white text-gray-500 px-4 py-2 border border-gray-400 rounded-full"> Support</button>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-start w-screen mt-5 gap-2 px-5 md:px-5">

          {/* ===== Search Bar ===== */}
          <div className="relative w-full md:w-[70%] h-16">
            <input
              type="text"
              placeholder="Search by name..."
              className="w-full h-16 border border-gray-300 rounded-full bg-white px-4 pr-28"
            />
            <input
              type="submit"
              value="Search"
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-blue-500 text-white w-26 md:w-50 h-16 rounded-br-full rounded-tr-full"
            />
          </div>
            {/* ====== A-Z button ===== */}
          <button className="bg-white text-blue-500 border shadow-[0_6px_16px_rgba(43,127,255,0.3)] border-blue-500 px-4 h-10  rounded-full md:w-auto md:h-16 mt-2 md:mt-0">
                A→Z
              </button>

          </div>
      </section>

      {/* ===== Members list (coming next) ===== */}

    <MemberList members={members} />


      
    </main>
  )
};