'use client'

import { useState, useEffect } from 'react'
import { Menu, Sun, Moon } from 'lucide-react'
import { useTheme } from 'next-themes'
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('')
  const { theme, setTheme } = useTheme()

  const scrollTo = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'projects', 'skills', 'contact']
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

    return (
    <nav className="fixed top-0 left-0 right-0 bg-gray-100 dark:bg-gray-800 border-b z-50 transition-colors duration-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="text-foreground"
          >
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {['Home', 'Projects', 'Skills', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollTo(item.toLowerCase())}
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    activeSection === item.toLowerCase()
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden text-foreground">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent side="right" className="w-[200px]">
              {['Home', 'Projects', 'Skills', 'Contact'].map((item) => (
                <DropdownMenuItem
                  key={item}
                  onClick={() => scrollTo(item.toLowerCase())}
                  className={`cursor-pointer ${
                    activeSection === item.toLowerCase() ? 'text-blue-600' : ''
                  }`}
                >
                  {item}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  )
}