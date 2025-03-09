import Link from 'next/link'

export default function FindingSpots() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Prime Morel Hunting Locations</h1>
      <p className="text-lg mb-8">
        The Pacific Northwest offers some of the best morel hunting in the United States. While experienced foragers keep their exact spots secret, we can guide you to the general areas and conditions where morels thrive.
      </p>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Burn Morels</h2>
        <p className="mb-4">
          Forest fires create ideal conditions for certain species of morels, which often fruit abundantly in the years following a burn. Here are some notable burn areas in the Pacific Northwest:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-card rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-3">Washington Burn Sites</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Okanogan-Wenatchee National Forest</strong> - Recent fires in this forest have created excellent morel habitat.</li>
              <li><strong>Mount Baker-Snoqualmie National Forest</strong> - Check forest service reports for recent burns.</li>
              <li><strong>Gifford Pinchot National Forest</strong> - Areas affected by wildfires from the past 1-3 years.</li>
            </ul>
          </div>
          <div className="bg-card rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-3">Oregon Burn Sites</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Mount Hood National Forest</strong> - Check for recent burns and forest service alerts.</li>
              <li><strong>Deschutes National Forest</strong> - Known for productive burn sites.</li>
              <li><strong>Willamette National Forest</strong> - Areas that experienced fires in the past few years.</li>
            </ul>
          </div>
        </div>
        
        <div className="bg-primary/10 rounded-lg p-6 mb-6">
          <h3 className="text-xl font-semibold mb-3 text-primary">Burn Morel Tips</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Focus on burns that are 1-2 years old - these are typically the most productive.</li>
            <li>The burn perimeter (where burned and unburned forest meet) is often most productive.</li>
            <li>South-facing slopes produce earlier, north-facing slopes later in the season.</li>
            <li>Look for areas with moderate burn severity - not completely incinerated, but well-charred.</li>
            <li>Always check if commercial permits are required - many national forests require permits for gathering mushrooms in burn areas.</li>
          </ul>
        </div>
      </section>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Natural Morels</h2>
        <p className="mb-4">
          Outside of burn areas, "natural" morels can be found in various habitats throughout the Pacific Northwest:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-card rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-3">Coastal & Lowland Areas</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>River bottomlands</strong> - Particularly along the Columbia, Willamette, and Snohomish rivers.</li>
              <li><strong>Cottonwood groves</strong> - Especially in flood plains and riparian areas.</li>
              <li><strong>Old orchards</strong> - Abandoned apple and cherry orchards can be productive.</li>
              <li><strong>Urban parks</strong> - City parks with old trees can sometimes yield morels.</li>
            </ul>
          </div>
          <div className="bg-card rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-3">Mountain & Forest Areas</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Mixed conifer forests</strong> - Especially those with pine, spruce, and fir.</li>
              <li><strong>Forest edges</strong> - Where forest meets meadow or clearing.</li>
              <li><strong>Logging areas</strong> - Recently logged areas with disturbed soil.</li>
              <li><strong>Mountain ash stands</strong> - Often productive for certain morel species.</li>
            </ul>
          </div>
        </div>
        
        <div className="bg-primary/10 rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-3 text-primary">Natural Morel Tips</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Focus on tree species associations - learn which trees morels favor in your area.</li>
            <li>Soil disturbance often triggers fruiting - look in areas with recent tree falls.</li>
            <li>Early season (March-April), focus on southerly aspects at lower elevations.</li>
            <li>As the season progresses, move to higher elevations and northeast-facing slopes.</li>
            <li>Pay attention to soil temperature - carry a soil thermometer and look for areas at 50-55°F.</li>
          </ul>
        </div>
      </section>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Regional Hotspots</h2>
        <p className="mb-4">
          While specific locations are closely guarded secrets among foragers, these general regions are known for their morel productivity:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-card rounded-lg p-6 shadow-sm">
            <h3 className="text-lg font-semibold mb-3">Washington</h3>
            <ul className="list-disc pl-6 space-y-1 text-sm">
              <li>Eastern Cascades</li>
              <li>Methow Valley</li>
              <li>Yakima River Valley</li>
              <li>Okanogan Highlands</li>
              <li>Olympic Peninsula</li>
            </ul>
          </div>
          <div className="bg-card rounded-lg p-6 shadow-sm">
            <h3 className="text-lg font-semibold mb-3">Oregon</h3>
            <ul className="list-disc pl-6 space-y-1 text-sm">
              <li>Mt. Hood region</li>
              <li>Cascade Range foothills</li>
              <li>Wallowa Mountains</li>
              <li>Willamette Valley margins</li>
              <li>Blue Mountains</li>
            </ul>
          </div>
          <div className="bg-card rounded-lg p-6 shadow-sm">
            <h3 className="text-lg font-semibold mb-3">Northern Idaho</h3>
            <ul className="list-disc pl-6 space-y-1 text-sm">
              <li>Coeur d'Alene area</li>
              <li>St. Joe National Forest</li>
              <li>Clearwater National Forest</li>
              <li>Kaniksu National Forest</li>
              <li>Priest Lake region</li>
            </ul>
          </div>
        </div>
      </section>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Permits & Regulations</h2>
        <p className="mb-4">
          Before heading out, be aware of the regulations for mushroom harvesting in your target area:
        </p>
        
        <div className="bg-card rounded-lg p-6 shadow-sm mb-6">
          <h3 className="text-xl font-semibold mb-3">Public Lands</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>National Forests</strong> - Most allow personal use collection (typically up to 5 gallons) with a free permit. Commercial collection requires a paid permit.</li>
            <li><strong>BLM Lands</strong> - Similar to National Forests, often require permits for collection.</li>
            <li><strong>State Lands</strong> - Varies by state, check with local DNR offices.</li>
            <li><strong>National Parks</strong> - Generally prohibit mushroom collection of any kind.</li>
          </ul>
        </div>
        
        <div className="bg-destructive/10 rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-3 text-destructive">Important Reminders</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Always check current regulations before heading out - rules change seasonally.</li>
            <li>Respect private property - get permission before hunting on private land.</li>
            <li>Commercial permits are often required for burns - especially after major fires.</li>
            <li>Daily limits are enforced in many areas - know before you go.</li>
            <li>Many areas have roads closed early season - check forest service websites for access information.</li>
          </ul>
        </div>
      </section>
      
      <div className="bg-muted rounded-lg p-6 text-center">
        <h2 className="text-2xl font-semibold mb-4">Track the Season</h2>
        <p className="mb-6">
          Use our interactive season tracker to see what areas are currently producing morels in the Pacific Northwest.
        </p>
        <Link 
          href="/season" 
          className="bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium hover:bg-primary/90"
        >
          Season Tracker
        </Link>
      </div>
    </div>
  )
}