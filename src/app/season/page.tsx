"use client"

import { useState } from 'react'
import Link from 'next/link'

interface RegionData {
  name: string
  status: 'Not Started' | 'Starting' | 'Active Now' | 'Ending' | 'Completed'
  statusColor: string
  progress: number
  elevation: string
  notes: string
  recentSightings: number
}

export default function SeasonTracker() {
  // In a real application, this data would come from an API or database
  const [regionData, setRegionData] = useState<RegionData[]>([
    {
      name: 'Coastal Lowlands',
      status: 'Active Now',
      statusColor: 'green',
      progress: 70,
      elevation: '0-500 ft',
      notes: 'Best around cottonwood stands and river bottoms.',
      recentSightings: 28
    },
    {
      name: 'Willamette Valley',
      status: 'Active Now',
      statusColor: 'green',
      progress: 65,
      elevation: '100-1,000 ft',
      notes: 'Check riparian areas and old orchards.',
      recentSightings: 31
    },
    {
      name: 'Puget Sound',
      status: 'Active Now',
      statusColor: 'green',
      progress: 60,
      elevation: '0-800 ft',
      notes: 'Producing well in deciduous forests and parks.',
      recentSightings: 22
    },
    {
      name: 'Columbia River Gorge',
      status: 'Starting',
      statusColor: 'yellow',
      progress: 35,
      elevation: '100-2,000 ft',
      notes: 'Beginning to fruit at lower elevations.',
      recentSightings: 14
    },
    {
      name: 'Cascade Foothills',
      status: 'Starting',
      statusColor: 'yellow',
      progress: 25,
      elevation: '1,000-2,500 ft',
      notes: 'Just beginning at lower elevations, watch soil temps.',
      recentSightings: 9
    },
    {
      name: 'Olympic Peninsula',
      status: 'Starting',
      statusColor: 'yellow',
      progress: 20,
      elevation: '500-2,000 ft',
      notes: 'Starting to show at lower elevations.',
      recentSightings: 6
    },
    {
      name: 'Eastern Cascades',
      status: 'Not Started',
      statusColor: 'gray',
      progress: 5,
      elevation: '2,000-4,000 ft',
      notes: 'Still too cold at most elevations, snow melt just beginning.',
      recentSightings: 2
    },
    {
      name: 'Mt. Hood / Mt. Rainier',
      status: 'Not Started',
      statusColor: 'gray',
      progress: 0,
      elevation: '3,000-6,000 ft',
      notes: 'Still under snow, expect season to start in late May.',
      recentSightings: 0
    },
    {
      name: 'Blue Mountains',
      status: 'Not Started',
      statusColor: 'gray',
      progress: 0,
      elevation: '3,000-5,500 ft',
      notes: 'Too early, check back in May.',
      recentSightings: 0
    },
  ])
  
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null)
  
  const getStatusBadgeClass = (status: string) => {
    switch(status) {
      case 'Active Now':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100'
      case 'Starting':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100'
      case 'Ending':
        return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-100'
      case 'Completed':
        return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100'
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100'
    }
  }
  
  const getProgressBarColor = (status: string) => {
    switch(status) {
      case 'Active Now':
        return 'bg-green-500'
      case 'Starting':
        return 'bg-yellow-500'
      case 'Ending':
        return 'bg-orange-500'
      case 'Completed':
        return 'bg-red-500'
      default:
        return 'bg-gray-500'
    }
  }

  return (
    <div>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Morel Season Tracker</h1>
        <p className="text-lg mb-8">
          Track the current status of morel season across different regions of the Pacific Northwest.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <div className="space-y-6">
              {regionData.map((region) => (
                <div 
                  key={region.name}
                  className={`bg-card rounded-lg p-4 shadow-sm cursor-pointer transition hover:shadow-md ${selectedRegion === region.name ? 'ring-2 ring-primary' : ''}`}
                  onClick={() => setSelectedRegion(region.name === selectedRegion ? null : region.name)}
                >
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-semibold">{region.name}</h3>
                    <span className={`text-xs px-2 py-1 rounded-full ${getStatusBadgeClass(region.status)}`}>
                      {region.status}
                    </span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2.5 mb-2">
                    <div 
                      className={`${getProgressBarColor(region.status)} h-2.5 rounded-full`} 
                      style={{ width: `${region.progress}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>Elevation: {region.elevation}</span>
                    <span>{region.recentSightings} recent reports</span>
                  </div>
                  
                  {selectedRegion === region.name && (
                    <div className="mt-4 pt-4 border-t border-border">
                      <p className="text-sm mb-3">{region.notes}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-muted-foreground">Updated: April 12, 2025</span>
                        <Link 
                          href={`/spots#${region.name.toLowerCase().replace(/\s+/g, '-')}`}
                          className="text-sm text-primary hover:underline"
                        >
                          View hunting spots
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <div className="bg-card rounded-lg p-6 shadow-sm sticky top-6">
              <h2 className="text-xl font-semibold mb-4">Season Overview</h2>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center mb-1">
                    <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                    <span className="font-medium">Active Now</span>
                  </div>
                  <p className="text-sm text-muted-foreground">These regions are currently producing well.</p>
                </div>
                
                <div>
                  <div className="flex items-center mb-1">
                    <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                    <span className="font-medium">Starting</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Early finds reported, season beginning.</p>
                </div>
                
                <div>
                  <div className="flex items-center mb-1">
                    <div className="w-3 h-3 rounded-full bg-gray-500 mr-2"></div>
                    <span className="font-medium">Not Started</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Too early for these regions.</p>
                </div>
                
                <div>
                  <div className="flex items-center mb-1">
                    <div className="w-3 h-3 rounded-full bg-orange-500 mr-2"></div>
                    <span className="font-medium">Ending</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Season winding down, late finds possible.</p>
                </div>
                
                <div>
                  <div className="flex items-center mb-1">
                    <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                    <span className="font-medium">Completed</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Season over for this region.</p>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-border">
                <h3 className="font-semibold mb-2">Current Weather Impact</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Recent rains across western Washington and Oregon have created excellent conditions for morel fruiting. Soil temperatures in lower elevations have reached the 50-55°F sweet spot.
                </p>
                <span className="text-xs text-muted-foreground">Last updated: April 12, 2025</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 bg-muted rounded-lg p-6 text-center">
          <h2 className="text-2xl font-semibold mb-4">Report Your Finds</h2>
          <p className="mb-6">
            Help the community by reporting your morel finds (without giving away your exact spots).
          </p>
          <Link 
            href="/report" 
            className="bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium hover:bg-primary/90"
          >
            Submit a Report
          </Link>
        </div>
      </div>
    </div>
  )
}