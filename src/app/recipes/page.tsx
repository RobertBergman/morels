import Link from 'next/link'

interface Recipe {
  id: string
  title: string
  description: string
  difficulty: 'Easy' | 'Medium' | 'Advanced'
  prepTime: string
  cookTime: string
  ingredients: string[]
  instructions: string[]
}

export default function RecipesPage() {
  // In a real application, this data would come from a database or API
  const recipes: Recipe[] = [
    {
      id: 'classic-morel-saute',
      title: 'Classic Morel Sauté',
      description: 'The simplest way to enjoy the full flavor of morels - a simple sauté in butter with just salt and pepper.',
      difficulty: 'Easy',
      prepTime: '5 mins',
      cookTime: '8 mins',
      ingredients: [
        '1/2 pound fresh morel mushrooms, cleaned',
        '3 tablespoons unsalted butter',
        '1 small shallot, minced (optional)',
        '1 clove garlic, minced (optional)',
        'Salt and freshly ground black pepper, to taste',
        'Fresh thyme leaves (optional)',
        'A splash of dry white wine (optional)'
      ],
      instructions: [
        'Clean morels by gently brushing away any dirt or debris. If necessary, rinse very quickly under cold water and pat dry immediately. Cut larger morels in half lengthwise.',
        'Heat butter in a skillet over medium heat until melted and just beginning to foam.',
        'Add morels to the pan in a single layer (work in batches if necessary) and cook without disturbing for 2-3 minutes until they begin to brown.',
        'If using, add shallot and garlic, and cook for another minute, stirring occasionally.',
        'Season with salt and pepper, add optional thyme and wine, and cook for another 2-3 minutes until morels are tender and have released their moisture.',
        'Serve immediately as a side dish or on toast.'
      ]
    },
    {
      id: 'morel-cream-pasta',
      title: 'Morel and Cream Pasta',
      description: 'A luxurious pasta dish showcasing morels in a rich cream sauce.',
      difficulty: 'Medium',
      prepTime: '15 mins',
      cookTime: '20 mins',
      ingredients: [
        '8 oz pasta (preferably fettuccine or tagliatelle)',
        '1/2 pound fresh morel mushrooms, cleaned and halved',
        '2 tablespoons butter',
        '1 small shallot, finely diced',
        '2 cloves garlic, minced',
        '1/3 cup dry white wine',
        '3/4 cup heavy cream',
        '1/4 cup freshly grated Parmesan cheese, plus more for serving',
        'Salt and freshly ground black pepper, to taste',
        '2 tablespoons fresh parsley, chopped',
        '1 teaspoon fresh thyme leaves'
      ],
      instructions: [
        'Bring a large pot of salted water to a boil and cook pasta according to package directions until al dente. Reserve 1/2 cup of pasta water before draining.',
        'Meanwhile, in a large skillet, melt butter over medium heat. Add morels and cook for 3-4 minutes until they begin to brown and release their moisture.',
        'Add shallot and garlic, cooking for another 2 minutes until fragrant.',
        'Pour in the white wine, scraping up any browned bits from the bottom of the pan. Allow wine to reduce by half, about 2-3 minutes.',
        'Lower heat and stir in heavy cream. Simmer gently for 3-4 minutes until slightly thickened.',
        'Add the drained pasta to the skillet along with Parmesan cheese, tossing to coat. If sauce is too thick, add a splash of reserved pasta water.',
        'Season with salt and pepper to taste, and stir in most of the herbs, reserving some for garnish.',
        'Serve immediately with additional Parmesan cheese and the reserved herbs.'
      ]
    },
    {
      id: 'morel-risotto',
      title: 'Wild Morel Risotto',
      description: 'A creamy, decadent risotto highlighting the earthy flavor of morels.',
      difficulty: 'Advanced',
      prepTime: '15 mins',
      cookTime: '30 mins',
      ingredients: [
        '1/2 pound fresh morel mushrooms, cleaned and sliced',
        '6 cups chicken or vegetable broth',
        '2 tablespoons olive oil',
        '2 tablespoons butter, divided',
        '1 medium onion, finely diced',
        '2 cloves garlic, minced',
        '1 1/2 cups Arborio rice',
        '1/2 cup dry white wine',
        '1/2 cup freshly grated Parmesan cheese',
        '2 tablespoons fresh chives, minced',
        'Salt and freshly ground black pepper, to taste',
        '1 teaspoon fresh thyme leaves'
      ],
      instructions: [
        'In a saucepan, bring the broth to a simmer, then reduce heat to low to keep warm.',
        'In a large, wide saucepan or Dutch oven, heat olive oil and 1 tablespoon of butter over medium heat. Add morels and cook until browned and slightly crisp on edges, about 5 minutes. Remove half the morels and set aside for garnish.',
        'Add onion to the pan and cook until soft and translucent, about 3-4 minutes. Add garlic and cook for 30 seconds until fragrant.',
        'Add rice to the pan and stir to coat with oil and butter. Toast rice for 1-2 minutes until edges become translucent.',
        'Pour in wine and stir constantly until absorbed.',
        'Begin adding warm broth one ladle at a time, stirring frequently and waiting until each addition is mostly absorbed before adding more. This process will take about 18-22 minutes.',
        'When rice is tender but still has a slight bite (al dente), remove from heat. Stir in the remaining tablespoon of butter, Parmesan cheese, and half the chives.',
        'Season with salt and pepper to taste. If risotto is too thick, add a small amount of broth to loosen.',
        'Serve immediately, topped with reserved morels, remaining chives, and thyme leaves.'
      ]
    }
  ]

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">Morel Recipes</h1>
      <p className="text-lg mb-8">
        Morels are prized for their rich, nutty flavor. Here are some of our favorite ways to enjoy these Pacific Northwest treasures.
      </p>
      
      <div className="grid grid-cols-1 gap-8 mb-12">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="bg-card rounded-lg overflow-hidden shadow-sm">
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2">{recipe.title}</h2>
              <p className="text-muted-foreground mb-4">{recipe.description}</p>
              
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-primary" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  <span>Prep: {recipe.prepTime}</span>
                </div>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-primary" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  <span>Cook: {recipe.cookTime}</span>
                </div>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-primary" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                  </svg>
                  <span>Difficulty: {recipe.difficulty}</span>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-3">Ingredients</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    {recipe.ingredients.map((ingredient, index) => (
                      <li key={index} className="text-sm">{ingredient}</li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-3">Instructions</h3>
                  <ol className="list-decimal pl-6 space-y-2">
                    {recipe.instructions.map((step, index) => (
                      <li key={index} className="text-sm">{step}</li>
                    ))}
                  </ol>
                </div>
              </div>
              
              <div className="mt-6 pt-4 border-t border-border">
                <p className="text-sm text-muted-foreground italic">
                  Chef's Tip: For the best flavor, use freshly foraged morels. If using dried morels, rehydrate them first in warm water for 20-30 minutes, then use the strained soaking liquid as part of your cooking liquid.
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="bg-muted rounded-lg p-6 text-center">
        <h2 className="text-2xl font-semibold mb-4">Have a Great Morel Recipe?</h2>
        <p className="mb-6">
          Share your favorite morel recipes with our community.
        </p>
        <Link 
          href="/contact" 
          className="bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium hover:bg-primary/90"
        >
          Submit a Recipe
        </Link>
      </div>
    </div>
  )
}