"use client";

import { useState, useEffect } from "react";
import { FaUsers, FaUserTie, FaCheck, FaTimesCircle } from "react-icons/fa";

type OverviewProps = {
  totalMembers: number;
  leadersActive: number;
  membersActive: number;
  membersAway: number;
  visible: boolean; // controlado pela outra página
};

export default function Overview({
  totalMembers,
  leadersActive,
  membersActive,
  membersAway,
  visible,
}: OverviewProps) {
  const [isMobile, setIsMobile] = useState(false);

  // Detecta se a tela é mobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // mobile <= 768px
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 🔹 Lógica corrigida:
  // Só retorna null no mobile quando visible === false
  if (isMobile && !visible) return null;

  return (
    <section className="w-full p-4 lg:px-[20%]">
      <div className="grid grid-cols-2 max-[400px]:grid-cols-1 gap-3 justify-center">
        {/* Card1 */}
        <div className="w-full min-w-[180px] h-full p-2 bg-white flex flex-row justify-start items-center gap-2 md:gap-5 drop-shadow-lg rounded-lg">
          <FaUsers className="min-w-10 min-h-10 bg-blue-100 rounded-full text-base lg:text-4xl text-blue-500 mb-2" />
          <div className="flex flex-col">
            <h1 className="font-sm text-base md:text-2xl text-nowrap">Total Members</h1>
            <p className="text-xl md:text-5xl font-bold">{totalMembers}</p>
          </div>
        </div>

        {/* Card2 */}
        <div className="w-full min-w-[180px] h-full p-2 bg-white flex flex-row justify-start items-center gap-2 md:gap-5 drop-shadow-lg rounded-lg">
          <FaUserTie className="min-w-10 min-h-10 bg-yellow-100 rounded-full text-base md:text-4xl text-yellow-500 mb-2" />
          <div className="flex flex-col">
            <h1 className="font-sm text-base md:text-2xl text-nowrap">Leaders Active</h1>
            <p className="text-xl md:text-5xl font-bold">{leadersActive}</p>
          </div>
        </div>

        {/* Card3 */}
        <div className="w-full min-w-[180px] h-full p-2 bg-white flex flex-row justify-start items-center gap-2 md:gap-5 drop-shadow-lg rounded-lg">
          <FaCheck className="min-w-10 min-h-10 bg-green-100 rounded-full text-base md:text-4xl text-green-800 mb-2" />
          <div className="flex flex-col">
            <h1 className="font-sm text-base md:text-2xl text-nowrap">Members Active</h1>
            <p className="text-xl md:text-5xl font-bold">{membersActive}</p>
          </div>
        </div>

        {/* Card4 */}
        <div className="w-full min-w-[180px] h-full p-2 bg-white flex flex-row justify-start items-center gap-2 md:gap-5 drop-shadow-lg rounded-lg">
          <FaTimesCircle className="min-w-10 min-h-10 bg-red-100 rounded-full text-base md:text-4xl text-red-800 mb-2" />
          <div className="flex flex-col">
            <h1 className="font-sm text-base md:text-2xl text-nowrap">Members Away</h1>
            <p className="text-xl md:text-5xl font-bold">{membersAway}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
