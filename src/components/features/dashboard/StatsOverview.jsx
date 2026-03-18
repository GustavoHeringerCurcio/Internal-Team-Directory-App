"use client";

import { useState, useEffect } from "react";
import { FaUsers, FaUserTie, FaCheck, FaTimesCircle } from "react-icons/fa";

/**
 * StatsOverview Component
 * Displays key statistics about team members
 */
export default function StatsOverview({
  totalMembers,
  leadersActive,
  membersActive,
  membersAway,
  visible,
}) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (isMobile && !visible) return null;

  const stats = [
    {
      icon: FaUsers,
      label: "Total Members",
      value: totalMembers,
      bgColor: "bg-blue-100",
      iconColor: "text-blue-500",
    },
    {
      icon: FaUserTie,
      label: "Leaders Active",
      value: leadersActive,
      bgColor: "bg-yellow-100",
      iconColor: "text-yellow-500",
    },
    {
      icon: FaCheck,
      label: "Members Active",
      value: membersActive,
      bgColor: "bg-green-100",
      iconColor: "text-green-800",
    },
    {
      icon: FaTimesCircle,
      label: "Members Away",
      value: membersAway,
      bgColor: "bg-red-100",
      iconColor: "text-red-800",
    },
  ];

  return (
    <section className="w-full p-4 lg:px-[20%]">
      <div className="grid grid-cols-2 max-[400px]:grid-cols-1 gap-3 justify-center">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.label}
              className={`w-full min-w-[180px] h-full p-2 bg-white flex flex-row justify-start items-center gap-2 md:gap-5 drop-shadow-lg rounded-lg`}
            >
              <Icon
                className={`min-w-10 min-h-10 ${stat.bgColor} rounded-full text-base lg:text-4xl ${stat.iconColor} mb-2`}
              />
              <div className="flex flex-col">
                <h1 className="font-sm text-base md:text-2xl text-nowrap">{stat.label}</h1>
                <p className="text-xl md:text-5xl font-bold">{stat.value}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
