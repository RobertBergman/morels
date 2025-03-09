import Link from 'next/link'

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-muted rounded-lg overflow-hidden">
        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Discover Morel Treasures in the Pacific Northwest</h1>
            <p className="text-xl md:text-2xl mb-8">
              Learn where to find, how to identify, and when to hunt for the Pacific Northwest's most prized wild mushroom.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/basics" 
                className="bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium hover:bg-primary/90 text-center"
              >
                Morel Basics
              </Link>
              <Link 
                href="/spots" 
                className="bg-secondary text-secondary-foreground px-6 py-3 rounded-md font-medium hover:bg-secondary/90 text-center"
              >
                Finding Spots
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Hunt for Morels?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-primary">
                  <path d="M12 2a8 8 0 0 0-8 8c0 5 8 12 8 12s8-7 8-12a8 8 0 0 0-8-8zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Prime Locations</h3>
              <p className="text-muted-foreground">
                The Pacific Northwest offers perfect conditions for morels, with a mix of forests, burns, and elevations that produce bountiful harvests each spring.
              </p>
            </div>
            
            <div className="bg-card rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-primary">
                  <path d="M2 9a3 3 0 0 1 0 6h1a3 3 0 0 1 0-6H2z" />
                  <path d="M8 8a5 5 0 0 1 0 8h1a5 5 0 0 1 0-8H8z" />
                  <path d="M14 7a7 7 0 0 1 0 10h1a7 7 0 0 1 0-10h-1z" />
                  <path d="M20 11a7 7 0 0 1 5 0" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Delicious Flavor</h3>
              <p className="text-muted-foreground">
                Prized by chefs worldwide, morels offer a unique nutty, earthy flavor that pairs beautifully with spring dishes and can't be cultivated commercially.
              </p>
            </div>
            
            <div className="bg-card rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-primary">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="8" x2="12" y2="12" />
                  <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Easy Identification</h3>
              <p className="text-muted-foreground">
                Unlike other wild mushrooms, true morels are relatively safe and easy to identify for beginners, making them the perfect entry point to foraging.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Season Tracker Preview */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Track the Morel Season</h2>
              <p className="text-lg mb-6">
                Morel season in the Pacific Northwest typically runs from March through July, moving from lower to higher elevations as temperatures warm.
              </p>
              <p className="text-lg mb-6">
                Use our interactive season tracker to see what's currently fruiting in your area and plan your next hunting trip.
              </p>
              <Link 
                href="/season" 
                className="inline-flex items-center text-primary hover:underline font-medium"
              >
                View Season Tracker
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
            <div className="md:w-1/2 bg-card p-6 rounded-lg shadow-sm">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>Coastal Forests</span>
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full dark:bg-green-900 dark:text-green-100">Active Now</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2.5">
                  <div className="bg-green-500 h-2.5 rounded-full" style={{ width: '75%' }}></div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span>Mid-Elevation Forests</span>
                  <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full dark:bg-yellow-900 dark:text-yellow-100">Starting</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2.5">
                  <div className="bg-yellow-500 h-2.5 rounded-full" style={{ width: '25%' }}></div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span>Mountain Burn Sites</span>
                  <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full dark:bg-gray-800 dark:text-gray-100">Not Started</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2.5">
                  <div className="bg-gray-500 h-2.5 rounded-full" style={{ width: '0%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Finds */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Recent Community Finds</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-card rounded-lg overflow-hidden shadow-sm">
                <div className="h-48 bg-gray-300"></div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-muted-foreground">April 12, 2025</span>
                    <span className="text-sm text-muted-foreground">Olympic Peninsula</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Spring Naturals Found!</h3>
                  <p className="text-muted-foreground mb-4">
                    "Found a great patch of naturals near fallen cottonwoods. Weather was perfect after the recent rains."
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">By: ForageNW22</span>
                    <span className="flex items-center text-sm text-muted-foreground">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      Elevation: 1200 ft
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link 
              href="/community" 
              className="bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium hover:bg-primary/90"
            >
              View All Community Finds
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted rounded-lg">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Morel Journey?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join our community of Pacific Northwest morel hunters and get access to exclusive spots, alerts, and tips.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/basics" 
              className="bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium hover:bg-primary/90"
            >
              Learn Morel Basics
            </Link>
            <Link 
              href="/contact" 
              className="bg-card text-card-foreground px-6 py-3 rounded-md font-medium border border-input hover:bg-muted"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}