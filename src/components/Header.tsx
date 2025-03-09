"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import ThemeToggle from './ThemeToggle'
import { useState } from 'react'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Morel Basics', href: '/basics' },
  { name: 'Finding Spots', href: '/spots' },
  { name: 'Season Tracker', href: '/season' },
  { name: 'Recipes', href: '/recipes' },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-background shadow">
      <nav className="container mx-auto px-4 flex items-center justify-between py-4">
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-primary">Morel PNW</span>
          </Link>
        </div>
        
        {/* Desktop navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                pathname === item.href ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
        
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          
          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-muted-foreground hover:text-primary focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            {!mobileMenuOpen ? (
              <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            ) : (
              <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            )}
          </button>
        </div>
      </nav>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background shadow-md">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  pathname === item.href ? 'text-primary bg-muted' : 'text-muted-foreground hover:text-primary hover:bg-muted'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}