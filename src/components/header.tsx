"use client"

import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"
import { ChevronDown } from 'lucide-react'

// Define the navigation items with a new type to handle scroll targets
type NavItem = {
  name: string;
  href: string;
  hasDropdown: boolean;
  isScrollLink?: boolean;
  targetId?: string;
}

// Updated navigation items including the Partners scroll link
const navItems: NavItem[] = [
  { name: "Home", href: "#home", hasDropdown: false, isScrollLink: true, targetId: "home" },
  { name: "Partners", href: "#partners", hasDropdown: false, isScrollLink: true, targetId: "partners" },
  { name: "Contact", href: "#contact", hasDropdown: false, isScrollLink: true, targetId: "footer" },
]

export function Header() {
  const [activeItem, setActiveItem] = useState<string | null>("Home")
  const [activeSection, setActiveSection] = useState<string | null>(null)

  // Function to handle smooth scrolling
  const scrollToSection = (targetId: string) => {
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  // Track scroll position to highlight active section
  useEffect(() => {
    const handleScroll = () => {
      // Get all sections that can be navigated to
      const sections = navItems
        .filter(item => item.isScrollLink && item.targetId)
        .map(item => item.targetId as string)
      
      // Find which section is currently in view
      for (const sectionId of sections) {
        const section = document.getElementById(sectionId)
        if (section) {
          const rect = section.getBoundingClientRect()
          // If the section is in the viewport
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(sectionId)
            break
          }
        }
      }
    }

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll)
    // Initial check
    handleScroll()

    // Clean up
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className="sticky top-0 z-40 bg-white container mx-auto px-4 py-6 flex items-center justify-between">
      <div className="flex items-center">
        <Link href="/" className="flex flex-row justify-center text-2xl font-medium">
           <Image
            src="/favicon.ico"
            alt="Insper Code Icon"
            width={32}
            height={32}
            />
            Insper code
        </Link>
      </div>

      <nav className="hidden md:flex items-center bg-gray-100 rounded-full px-2 py-1">
        {navItems.map((item) => {
          // Determine if this item should be highlighted
          const isActive = 
            item.name === activeItem || 
            (item.isScrollLink && item.targetId === activeSection)
          
          if (item.hasDropdown) {
            return (
              <div key={item.name} className="relative group">
                <button
                  className={`px-4 py-2 text-sm font-medium flex items-center transition-colors hover:bg-indigo-100 hover:rounded-full ${
                    isActive ? "bg-indigo-100 rounded-full" : ""
                  }`}
                  onClick={() => setActiveItem(item.name)}
                >
                  {item.name}
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
              </div>
            )
          }
          
          if (item.isScrollLink) {
            return (
              <button
                key={item.name}
                className={`px-4 py-2 text-sm font-medium transition-colors hover:bg-indigo-100 hover:rounded-full ${
                  isActive ? "bg-indigo-100 rounded-full" : ""
                }`}
                onClick={() => {
                  setActiveItem(item.name)
                  if (item.targetId) {
                    scrollToSection(item.targetId)
                  }
                }}
              >
                {item.name}
              </button>
            )
          }
          
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`px-4 py-2 text-sm font-medium transition-colors hover:bg-indigo-100 hover:rounded-full ${
                isActive ? "bg-indigo-100 rounded-full" : ""
              }`}
              onClick={() => setActiveItem(item.name)}
            >
              {item.name}
            </Link>
          )
        })}
      </nav>

      <div className="flex items-center">
        <Link href="/" className="flex flex-row justify-center text-2xl font-medium">
           <Image
            src="/favicon.ico"
            alt="Insper Code Icon"
            width={32}
            height={32}
            />
            Insper code
        </Link>
      </div>
    </header>
  )
}
