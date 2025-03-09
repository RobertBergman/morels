import Link from 'next/link'

export default function MorelBasics() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Morel Basics</h1>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">What Are Morels?</h2>
        <p className="mb-4">
          Morels (Morchella spp.) are wild edible mushrooms highly prized for their distinctive appearance and rich, nutty flavor. They're characterized by a conical cap with a honeycomb pattern of ridges and pits, attached to a hollow stem.
        </p>
        <p className="mb-4">
          In the Pacific Northwest, several species of morels can be found, each with their own unique habitats and appearance:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li><strong>Black Morels (Morchella elata group)</strong> - Often found in coniferous forests, especially in disturbed areas or burn sites.</li>
          <li><strong>Yellow/Blonde Morels (Morchella esculenta group)</strong> - Typically found in deciduous forests, often around cottonwood, aspen, or old apple orchards.</li>
          <li><strong>Gray Morels (Morchella tomentosa)</strong> - Fire morels that appear in recently burned forest areas, typically 1-2 years after a fire.</li>
        </ul>
      </section>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">How to Identify True Morels</h2>
        <p className="mb-4">
          Proper identification is crucial when foraging for wild mushrooms. Here are the key characteristics of true morels:
        </p>
        <div className="bg-card rounded-lg p-6 shadow-sm mb-6">
          <h3 className="text-xl font-semibold mb-3">True Morel Characteristics</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Hollow stem and cap</strong> - Both the stem and cap are completely hollow from bottom to top.</li>
            <li><strong>Cap attached to stem</strong> - The cap is attached to the stem at the base, not hanging free like a skirt.</li>
            <li><strong>Pitted texture</strong> - The cap has a distinctive honeycomb pattern with pits and ridges.</li>
            <li><strong>No cottony stuffing</strong> - The inside is hollow and clean, not filled with cottony fibers.</li>
            <li><strong>Single, unified structure</strong> - The cap and stem form one continuous piece.</li>
          </ul>
        </div>
        
        <div className="bg-destructive/10 rounded-lg p-6 mb-6">
          <h3 className="text-xl font-semibold mb-3 text-destructive">Beware of False Morels</h3>
          <p className="mb-3">
            False morels (Gyromitra and Verpa species) can be mistaken for true morels and are potentially toxic. Here's how to tell them apart:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Brain-like cap</strong> - Instead of pits, false morels often have lobed, brain-like or saddle-shaped caps.</li>
            <li><strong>Stem filled with cottony stuffing</strong> - Not completely hollow like true morels.</li>
            <li><strong>Cap hanging free from stem</strong> - Often attached only at the top, like an umbrella, not fully connected.</li>
            <li><strong>Irregular, chambered interior</strong> - When cut lengthwise, false morels may reveal irregular chambers.</li>
          </ul>
        </div>
        
        <p className="font-medium text-center text-muted-foreground italic">
          Remember: When in doubt, throw it out. Never consume wild mushrooms unless you are 100% confident in your identification.
        </p>
      </section>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">When and Where to Find Morels</h2>
        <p className="mb-4">
          Morel season in the Pacific Northwest typically runs from March through July, depending on elevation and local conditions:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-card rounded-lg p-4 shadow-sm">
            <h4 className="font-semibold mb-2">Early Season (March-April)</h4>
            <ul className="list-disc pl-6 space-y-1 text-sm">
              <li>Low elevations (0-1,500 ft)</li>
              <li>River bottoms</li>
              <li>Cottonwood groves</li>
              <li>Urban parks</li>
            </ul>
          </div>
          <div className="bg-card rounded-lg p-4 shadow-sm">
            <h4 className="font-semibold mb-2">Mid Season (April-May)</h4>
            <ul className="list-disc pl-6 space-y-1 text-sm">
              <li>Mid elevations (1,500-3,000 ft)</li>
              <li>Mixed forests</li>
              <li>Forest edges</li>
              <li>Recent burn sites (1-2 years old)</li>
            </ul>
          </div>
          <div className="bg-card rounded-lg p-4 shadow-sm">
            <h4 className="font-semibold mb-2">Late Season (May-July)</h4>
            <ul className="list-disc pl-6 space-y-1 text-sm">
              <li>High elevations (3,000+ ft)</li>
              <li>Mountain forests</li>
              <li>Areas where snow has recently melted</li>
              <li>Burn sites up to 3 years old</li>
            </ul>
          </div>
        </div>
        
        <h3 className="text-xl font-semibold mb-3">Key Habitat Indicators</h3>
        <p className="mb-4">
          Morels tend to grow in specific habitats with these characteristics:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li><strong>Soil temperature</strong> - Morels typically begin fruiting when soil temperatures reach around 50-55°F (10-13°C).</li>
          <li><strong>Tree associations</strong> - Look near cottonwood, ash, elm, oak, and apple trees for natural morels, or in coniferous forests for burn morels.</li>
          <li><strong>Disturbed ground</strong> - Areas with disturbed soil from logging, flooding, or fires.</li>
          <li><strong>Moisture levels</strong> - Areas with good moisture but not standing water; often after spring rains.</li>
          <li><strong>Sun exposure</strong> - South-facing slopes warm up first in early season, while north-facing slopes retain moisture longer for late season.</li>
        </ul>
        
        <div className="bg-primary/10 rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-3 text-primary">Morel Hunting Tips</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Check soil temperatures - bring a soil thermometer on early season hunts.</li>
            <li>Follow the "progression" - start low and move higher in elevation as the season progresses.</li>
            <li>Look for "indicator species" - when trillium, spring beauty, or fiddlehead ferns emerge, morels are often not far behind.</li>
            <li>Hunt after rain - a few days after a good rainfall is often prime time.</li>
            <li>Scan the ground carefully - morels blend in well with forest debris.</li>
            <li>When you find one, stop and look around - morels often grow in groups.</li>
            <li>Use a mesh bag for collection to allow spores to spread as you walk.</li>
          </ul>
        </div>
      </section>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Harvesting & Preparation</h2>
        <p className="mb-4">
          Properly harvesting and preparing morels ensures the best flavor and safety:
        </p>
        
        <h3 className="text-xl font-semibold mb-3">Sustainable Harvesting</h3>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>Cut or pinch the stem at ground level, rather than pulling up the mycelium.</li>
          <li>Use a knife or scissors to trim the dirty bottom portion of the stem in the field.</li>
          <li>Use a mesh or paper bag to allow spores to spread while collecting.</li>
          <li>Leave some mature specimens to release spores and perpetuate the population.</li>
          <li>Obtain proper permits if collecting on public lands (many areas require a mushroom picking permit).</li>
        </ul>
        
        <h3 className="text-xl font-semibold mb-3">Cleaning & Preparation</h3>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>Never soak morels in water - they absorb water like a sponge.</li>
          <li>Brush off dirt and debris with a soft brush or damp paper towel.</li>
          <li>If necessary, rinse quickly under cold water and pat dry immediately.</li>
          <li>Cut lengthwise to check for hollow interior and to remove any insects.</li>
          <li>Always cook morels thoroughly - they contain hydrazine compounds that can cause stomach upset when raw.</li>
          <li>A light saute in butter for 5-8 minutes is usually sufficient.</li>
          <li>For long-term storage, dry morels on a screen or in a food dehydrator.</li>
        </ul>
      </section>
      
      <div className="bg-muted rounded-lg p-6 text-center">
        <h2 className="text-2xl font-semibold mb-4">Ready to Find Morels?</h2>
        <p className="mb-6">
          Now that you understand the basics, learn where to find these treasures in the Pacific Northwest.
        </p>
        <Link 
          href="/spots" 
          className="bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium hover:bg-primary/90"
        >
          Discover Morel Spots
        </Link>
      </div>
    </div>
  )
}