"use client";

import { useState } from "react";
import Image from "next/image";
import DashboardNav from "./DashboardNav";

/**
 * DashboardHeader Component
 * Main navigation header with logo and menu
 */
export default function DashboardHeader({ visible = true }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className={`relative border-b border-gray-300 bg-white transition-transform duration-200 z-50 
        ${visible ? "block" : "hidden md:block"}
      `}
    >
      <div className="flex items-center h-18 max-w-7xl mx-auto px-6">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <a href="/" className="flex items-center gap-2">
            <Image src="/images/Logo_Team_Force.png" width={70} height={70} alt="TeamForce Logo" />
            <h2 className="text-blue-500 font-bold text-2xl">TeamForce</h2>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 gap-6 font-bold">
          <DashboardNav href="/" label="Home" />
          <DashboardNav href="/about" label="About" />
          <DashboardNav href="/pricing" label="Pricing" />
          <DashboardNav href="/settings" label="Settings" />
        </nav>

        {/* Mobile Menu Button */}
        <div className="text-2xl text-gray-800 ml-auto md:hidden">
          <button
            aria-label="Toggle menu"
            className="text-2xl"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <nav className="md:hidden bg-white flex flex-col items-center gap-4 p-4 font-bold text-xl border-b border-gray-300">
          <DashboardNav href="/" label="Home" />
          <DashboardNav href="/about" label="About" />
          <DashboardNav href="/pricing" label="Pricing" />
          <DashboardNav href="/settings" label="Settings" />
        </nav>
      )}
    </header>
  );
}
