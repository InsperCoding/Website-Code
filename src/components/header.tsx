"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

type NavItem = { name: string; targetId: string };

const navItems: NavItem[] = [
  { name: "Início", targetId: "home" },
  { name: "Sobre", targetId: "about" },
  { name: "Serviços", targetId: "services" },
  { name: "Parceiros", targetId: "partners" },
  { name: "Projetos", targetId: "projects" },
  { name: "Contato", targetId: "contact" },
];

export function Header() {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const scrollToSection = (id: string) => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };
    const handleScroll = () => {
      for (const { targetId } of navItems) {
        const sec = document.getElementById(targetId);
        if (!sec) continue;
        const { top, bottom } = sec.getBoundingClientRect();
        if (top <= 30 && bottom >= 30) {
          setActiveSection(targetId);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  const handleClick = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <header className="relative w-full py-3 px-4 md:px-10">
      <div className="flex justify-between items-center">
        <Link href="/" className="relative w-32 h-12 md:w-40 md:h-14">
          <Image src="/assets/code-logo.png" alt="Insper Code" fill className="object-contain" />
        </Link>

        <button
          className="
          md:hidden fixed top-4 right-4 z-50
          w-12 h-12 flex items-center justify-center
          text-3xl text-[#327DCF]
         bg-white rounded-full shadow
        "
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Abrir menu"
        >
          {mobileOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      <nav
        className="
          hidden md:flex fixed top-3 left-1/2 -translate-x-1/2 z-50
          bg-white rounded-full drop-shadow-lg px-1 py-1
        "
      >
        {navItems.map(({ name, targetId }) => (
          <button
            key={targetId}
            onClick={() => handleClick(targetId)}
            className={`px-4 py-2 font-medium rounded-full hover:bg-[#327DCF]/10 hover:cursor-pointer
              ${activeSection === targetId ? "bg-[#327DCF]/30" : ""}`}
          >
            {name}
          </button>
        ))}
      </nav>

      {mobileOpen && (
        <nav
          className="
            md:hidden fixed inset-0 z-40 bg-white/90 backdrop-blur-sm
            flex flex-col items-center justify-center gap-6 text-xl
          "
        >
          {navItems.map(({ name, targetId }) => (
            <button
              key={targetId}
              onClick={() => handleClick(targetId)}
              className={`px-6 py-3 rounded-lg transition
                ${activeSection === targetId ? "bg-[#327DCF]/20" : "hover:bg-[#327DCF]/10"}`}
            >
              {name}
            </button>
          ))}
        </nav>
      )}
    </header>
  );
}
