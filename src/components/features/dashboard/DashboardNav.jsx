"use client";

import { usePathname } from "next/navigation";

/**
 * DashboardNav Component
 * Navigation link with active state indication
 */
export default function DashboardNav({ href, label }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <a
      href={href}
      className={`relative px-1 transition
        ${
          isActive ? "text-blue-500 after:w-full font-bold" : "text-gray-600 hover:text-blue-500 hover:transition after:w-0"
        }
        after:absolute after:left-0 after:-bottom-1
        after:h-1 after:bg-blue-500 after:rounded-4xl
        after:transition-all after:duration-300
        md:after:-bottom-6.5
      `}
    >
      {label}
    </a>
  );
}
