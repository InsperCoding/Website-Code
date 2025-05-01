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
          if (rect.top <= 30 && rect.bottom >= 30) {
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
    <header className="relative px-10 py-3 w-full">

      <nav className="fixed top-3 left-1/2 z-50 w-fit flex items-center bg-gray-100 rounded-full px-1 py-1 drop-shadow-lg -translate-x-1/2">
        {navItems.map(({ name, targetId }) => {
          const isActive = targetId === activeSection
          return (
            <button
              key={name}
              className={`flex items-center px-4 py-2 font-medium hover:bg-[#327DCF]/10 hover:rounded-full ${
                isActive ? "bg-[#327DCF]/30 rounded-full" : ""
              }`}
              onClick={() => scrollToSection(targetId)}
            >
              {name}
            </button>
          )
        })}
      </nav>

      <div className="flex flex-row justify-between">
        <div className="flex items-center justify-center">
          <Link href="/" className="relative w-40 h-14">
            <Image
              src="/assets/code-logo.png"
              alt="Logo Esquerda"
              fill
              className="object-contain"
            />
          </Link>
        </div>
        <div className={`flex items-center justify-center`}>
          <Link href="/" className="relative w-40 h-14">
            <Image
              src="/assets/code-logo.png"
              alt="Logo Esquerda"
              fill
              className="object-contain"
            />
          </Link>
        </div>
      </div>

    </header>
  )
}
