export interface Recipe {
  id: string
  title: string
  description: string
  difficulty: 'Easy' | 'Medium' | 'Advanced'
  prepTime: string
  cookTime: string
  ingredients: string[]
  instructions: string[]
  createdAt?: string
  updatedAt?: string
}

// Mock database of recipes - in a real app, this would be stored in a database
export const recipes: Recipe[] = [
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
    ],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
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
    ],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
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
    ],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  }
];