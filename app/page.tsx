export default function Page() {

  const nome = ["Gustavo Heringer", "name2", "name3"]
  const age = 20;
  const role = "FrontEnd Developer"
  const avatar = "https://dummyimage.com/150x150/ffffff/000000.png&text=Avatar"

  return (
    <main className=" flex flex-col items-start md:items-center mt-6">
      <section className="flex flex-col ml-5">
        <h1 className="font-bold text-5xl">Team Members</h1>
        <p className="text-2xl font-light text-gray-500">Manage your organization members</p>
        
      </section>

      {/* filtros */}
      <section className=" md:w-screen ">
        <div className="flex flex-row gap-3 mt-10 overflow-x-auto md:overflow-visible md:justify-center ml-5 md:ml-5">
          <button className="bg-blue-500 text-white px-4 py-2 border border-gray-400 rounded-full"> All</button>
          <button className="bg-white text-gray-500 px-4 py-2 border border-gray-400 rounded-full"> Marketing</button>
          <button className="bg-white text-gray-500 px-4 py-2 border border-gray-400 rounded-full"> Sales</button>
          <button className="bg-white text-gray-500 px-4 py-2 border border-gray-400 rounded-full"> Developers</button>
          <button className="bg-white text-gray-500 px-4 py-2 border border-gray-400 rounded-full"> Support</button>

        </div>

        <div className="flex flex-col md:flex-row justify-center items-start w-screen mt-5 gap-2 px-5 md:px-5">
          {/* Container do input + botão submit */}
          <div className="relative w-full md:w-[70%] h-16">
            <input
              type="text"
              placeholder="Search by name..."
              className="w-full h-16 border rounded-full bg-gray-200 px-4 pr-28"
            />
            <input
              type="submit"
              value="Search"
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-blue-500 text-white w-26 md:w-50 h-16 rounded-br-full rounded-tr-full"
            />
          </div>

          <button className="bg-white text-blue-500 border shadow-[0_6px_16px_rgba(43,127,255,0.3)] border-blue-500 px-4 h-10  rounded-full md:w-auto md:h-16 mt-2 md:mt-0">
                A→Z
              </button>

          </div>
        
      </section>

       {/* Members list */}

       





    </main>
  )
};