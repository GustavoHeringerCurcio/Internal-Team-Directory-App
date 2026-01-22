"use client";

import { useState } from "react";
import Image from "next/image";
import Logo from "../../src/images/Logo_Team_Force.png";
import NavLink from "./NavLink";

type HeaderProps = {
  visible?: boolean;
};


export default function Header({ visible = true}: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  //if (!visible) return null;

  return (

    <header className={`relative border-b border-gray-300 bg-white transition-transform duration-200 z-50 
      ${visible ? "block" : "hidden md:block"

      }`}
    >
      <div className="flex items-center h-18 max-w-7xl mx-auto px-6">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image src={Logo} width={70} height={70} alt="TeamForce Logo" />
          <h2 className="text-blue-500 font-bold text-2xl">TeamForce</h2>
        </div>

        {/* Navbar desktop CENTRALIZADA */}
        <nav className="hidden md:flex absolute left-1/2 top-1/2 
                        -translate-x-1/2 -translate-y-1/2 
                        gap-6 font-bold">
          <NavLink href="/" label="Home" />
          <NavLink href="/about" label="About" />
          <NavLink href="/pricing" label="Pricing" />
          <NavLink href="/settings" label="Settings" />
        </nav>

        {/* Botão mobile */}
        <div className="text-2xl text-gray-800 ml-auto md:hidden">
          <button
            aria-label="Toggle menu"
            className="text-2xl"
            onClick={() => setMenuOpen(prev => !prev)}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      {menuOpen && (
        <>
        <nav className="md:hidden bg-white flex flex-row justify-center w-full z-20">

          <div className=" flex flex-col items-center gap-4 p-4 font-bold text-xl border-b border-gray-300 w-full z-21">
            <NavLink href="/" label="Home" />
            <NavLink href="/about" label="About" />
            <NavLink href="/pricing" label="Pricing" />
            <NavLink href="/settings" label="Settings" />
          </div>
        </nav>
        </>
      )}
    </header>
  );
}