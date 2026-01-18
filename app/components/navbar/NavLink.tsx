"use client";

import { usePathname } from "next/navigation";

export default function NavLink({ href, label }: { href: string; label: string }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <a
      href={href}
      className={`relative px-1 transition
        ${
          isActive
            ? "text-blue-600 after:w-full font-bold"
            : "text-gray-600 hover:text-black after:w-0"
        }
        after:absolute after:left-0 after:-bottom-1
        after:h-[2px] after:bg-blue-600
        after:transition-all after:duration-300
      `}
    >
      {label}
    </a>
  );
}
