"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false)
    }
    const handleClickOutside = () => setIsOpen(false)

    if (isOpen) {
      document.addEventListener("keydown", handleEscape)
      document.addEventListener("click", handleClickOutside)
    }

    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.removeEventListener("click", handleClickOutside)
    }
  }, [isOpen])

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true
    if (path !== "/" && pathname.startsWith(path)) return true
    return false
  }

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 animate-slide-down ${
        scrolled ? "bg-background/98 backdrop-blur-md shadow-sm" : "bg-background/95 backdrop-blur"
      } supports-[backdrop-filter]:bg-background/60 border-b border-border`}
    >
      <div className="max-w-7xl mx-auto mobile-px">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group touch-target">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-primary rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
              <span className="text-primary-foreground font-heading font-bold text-lg md:text-xl">T</span>
            </div>
            <span className="font-heading font-bold text-xl md:text-2xl text-foreground transition-colors group-hover:text-primary">
              Tsidwi
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className={`relative text-foreground transition-all duration-300 hover:text-primary hover:scale-105 touch-target ${
                isActive("/") ? "text-primary font-medium" : ""
              }`}
            >
              Home
              {isActive("/") && (
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary animate-expand-width" />
              )}
            </Link>
            <Link
              href="/about"
              className={`relative text-foreground transition-all duration-300 hover:text-primary hover:scale-105 touch-target ${
                isActive("/about") ? "text-primary font-medium" : ""
              }`}
            >
              About
              {isActive("/about") && (
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary animate-expand-width" />
              )}
            </Link>
            <Link
              href="/services"
              className={`relative text-foreground transition-all duration-300 hover:text-primary hover:scale-105 touch-target ${
                isActive("/services") ? "text-primary font-medium" : ""
              }`}
            >
              Services
              {isActive("/services") && (
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary animate-expand-width" />
              )}
            </Link>
            <Link
              href="/contact"
              className={`relative text-foreground transition-all duration-300 hover:text-primary hover:scale-105 touch-target ${
                isActive("/contact") ? "text-primary font-medium" : ""
              }`}
            >
              Contact
              {isActive("/contact") && (
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary animate-expand-width" />
              )}
            </Link>
            <Button className="transition-all duration-300 hover:scale-105 hover:shadow-lg animate-pulse-subtle touch-target">
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={(e) => {
                e.stopPropagation()
                setIsOpen(!isOpen)
              }}
              className="transition-all duration-300 hover:scale-110 touch-target"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden animate-slide-down safe-area-bottom" onClick={(e) => e.stopPropagation()}>
            <div className="px-2 pt-2 pb-4 space-y-2 bg-card rounded-lg mt-2 mb-4 border border-border shadow-lg">
              <Link
                href="/"
                className={`block px-4 py-3 transition-all duration-300 hover:bg-accent rounded-md touch-target mobile-body ${
                  isActive("/") ? "text-primary bg-accent font-medium" : "text-foreground hover:text-primary"
                }`}
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className={`block px-4 py-3 transition-all duration-300 hover:bg-accent rounded-md touch-target mobile-body ${
                  isActive("/about") ? "text-primary bg-accent font-medium" : "text-foreground hover:text-primary"
                }`}
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                href="/services"
                className={`block px-4 py-3 transition-all duration-300 hover:bg-accent rounded-md touch-target mobile-body ${
                  isActive("/services") ? "text-primary bg-accent font-medium" : "text-foreground hover:text-primary"
                }`}
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/contact"
                className={`block px-4 py-3 transition-all duration-300 hover:bg-accent rounded-md touch-target mobile-body ${
                  isActive("/contact") ? "text-primary bg-accent font-medium" : "text-foreground hover:text-primary"
                }`}
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <div className="px-2 pt-2">
                <Button
                  className="w-full transition-all duration-300 hover:scale-105 touch-target"
                  onClick={() => setIsOpen(false)}
                >
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation
