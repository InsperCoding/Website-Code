"use client"

import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"

type NavItem = {
  name: string;
  targetId: string;
}

const navItems: NavItem[] = [
  { name: "Início", targetId: "home" },
  { name: "Sobre", targetId: "about" },
  { name: "Serviços", targetId: "services" },
  { name: "Parceiros", targetId: "partners" },
  { name: "Projetos", targetId: "projects" },
  { name: "Contato", targetId: "footer" },
]

export function Header() {
  const [activeSection, setActiveSection] = useState<string>("home")
  const [isScrolled, setIsScrolled] = useState<boolean>(false)

  const scrollToSection = (targetId: string) => {
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }

      for (const { targetId } of navItems) {
        const section = document.getElementById(targetId)
        if (section) {
          const rect = section.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(targetId)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className={`sticky top-0 z-50 w-full flex items-center justify-between px-[5vw] py-[1.5vh] transition-all duration-500 ${isScrolled ? "bg-transparent" : "bg-white"}`}>
      {/* Logo esquerda */}
      <div className={`flex items-center transition-all duration-500 ${isScrolled ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
        <Link href="/" className="relative w-[10vw] h-[5vh] min-w-[80px] min-h-[32px]">
          <Image
            src="/assets/code-logo.png"
            alt="Logo Esquerda"
            fill
            className="object-contain"
          />
        </Link>
      </div>

      {/* Navbar centralizada */}
      <nav className="hidden md:flex items-center bg-gray-100 rounded-full px-2 py-1 drop-shadow-lg">
        {navItems.map(({ name, targetId }) => {
          const isActive = targetId === activeSection
          return (
            <button
              key={name}
              className={`flex items-center px-4 py-2 text-m font-medium transition-colors hover:bg-indigo-100 hover:rounded-full ${
                isActive ? "bg-indigo-100 rounded-full" : ""
              }`}
              onClick={() => scrollToSection(targetId)}
            >
              {name}
            </button>
          )
        })}
      </nav>

      {/* Logo direita */}
      <div className={`flex items-center justify-end transition-all duration-500 ${isScrolled ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
        <Link href="/" className="relative w-[10vw] h-[5vh] min-w-[80px] min-h-[32px]">
          <Image
            src="/assets/code-logo.png"
            alt="Logo Direita"
            fill
            className="object-contain"
          />
        </Link>
      </div>
    </header>
  )
}
