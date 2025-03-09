"use client"

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Recipe } from '@/lib/recipes'

export default function RecipesPage() {
  const [recipes, setRecipes] = useState<Recipe[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch('/api/recipes')
        
        if (!response.ok) {
          throw new Error(`Error fetching recipes: ${response.status}`)
        }
        
        const data = await response.json()
        setRecipes(data)
        setLoading(false)
      } catch (err) {
        console.error('Failed to fetch recipes:', err)
        setError('Failed to load recipes. Please try again later.')
        setLoading(false)
      }
    }

    fetchRecipes()
  }, [])

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto py-8 text-center">
        <div className="animate-pulse flex flex-col items-center space-y-4">
          <div className="h-8 bg-muted rounded w-1/4"></div>
          <div className="h-4 bg-muted rounded w-3/4"></div>
          <div className="h-48 bg-muted rounded w-full"></div>
          <div className="h-48 bg-muted rounded w-full"></div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="max-w-4xl mx-auto py-8">
        <div className="bg-destructive/10 p-6 rounded-lg text-center">
          <h1 className="text-2xl font-bold text-destructive mb-2">Error</h1>
          <p>{error}</p>
          <button 
            onClick={() => window.location.reload()}
            className="mt-4 bg-primary text-primary-foreground px-4 py-2 rounded"
          >
            Try Again
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-2">
        <h1 className="text-3xl font-bold">Morel Recipes</h1>
        <Link 
          href="/submit-recipe" 
          className="bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-medium hover:bg-primary/90"
        >
          + Add Recipe
        </Link>
      </div>
      <p className="text-lg mb-8">
        Morels are prized for their rich, nutty flavor. Here are some of our favorite ways to enjoy these Pacific Northwest treasures.
      </p>
      
      <div className="grid grid-cols-1 gap-8 mb-12">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="bg-card rounded-lg overflow-hidden shadow-sm">
            <div className="p-6">
              <Link href={`/recipes/${recipe.id}`} className="hover:text-primary">
                <h2 className="text-2xl font-semibold mb-2">{recipe.title}</h2>
              </Link>
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
          href="/submit-recipe" 
          className="bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium hover:bg-primary/90"
        >
          Submit a Recipe
        </Link>
      </div>
    </div>
  )
}