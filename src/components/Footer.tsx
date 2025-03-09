"use client"

import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-muted py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Morel PNW</h3>
            <p className="text-muted-foreground">
              Your guide to finding, identifying, and enjoying morel mushrooms in the Pacific Northwest.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/basics" className="text-muted-foreground hover:text-primary">
                  Morel Basics
                </Link>
              </li>
              <li>
                <Link href="/spots" className="text-muted-foreground hover:text-primary">
                  Finding Spots
                </Link>
              </li>
              <li>
                <Link href="/season" className="text-muted-foreground hover:text-primary">
                  Season Tracker
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/recipes" className="text-muted-foreground hover:text-primary">
                  Recipes
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary">
                  Contact Us
                </Link>
              </li>
              <li>
                <a href="https://www.fs.usda.gov/visit/passes-permits/recreation-passes-permits" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                  Forest Permits
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
            <p className="text-muted-foreground mb-4">
              Join our newsletter for morel season updates and new spot alerts.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-grow p-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                type="submit"
                className="bg-primary text-primary-foreground px-4 py-2 rounded-r-md hover:bg-primary/90"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border">
          <p className="text-center text-muted-foreground">
            &copy; {new Date().getFullYear()} Morel PNW. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}