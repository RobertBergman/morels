"use client"

import { useEffect, useState } from 'react'
import { useRouter, useParams } from 'next/navigation'
import Link from 'next/link'
import { Recipe } from '@/lib/recipes'

export default function RecipeDetailPage() {
  const router = useRouter()
  const params = useParams()
  const [recipe, setRecipe] = useState<Recipe | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await fetch(`/api/recipes/${params.id}`)
        
        if (!response.ok) {
          if (response.status === 404) {
            throw new Error('Recipe not found')
          }
          throw new Error(`Error: ${response.status}`)
        }
        
        const data = await response.json()
        setRecipe(data)
        setLoading(false)
      } catch (err) {
        console.error('Failed to fetch recipe:', err)
        setError(`${err instanceof Error ? err.message : 'Failed to load recipe'}`)
        setLoading(false)
      }
    }

    if (params.id) {
      fetchRecipe()
    }
  }, [params.id])

  const handleDelete = async () => {
    if (!window.confirm('Are you sure you want to delete this recipe?')) {
      return
    }
    
    try {
      const response = await fetch(`/api/recipes/${params.id}`, {
        method: 'DELETE'
      })
      
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`)
      }
      
      router.push('/recipes')
    } catch (err) {
      console.error('Failed to delete recipe:', err)
      alert('Failed to delete recipe. Please try again.')
    }
  }

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto py-8 text-center">
        <div className="animate-pulse flex flex-col items-center space-y-4">
          <div className="h-8 bg-muted rounded w-1/3"></div>
          <div className="h-4 bg-muted rounded w-1/2"></div>
          <div className="h-64 bg-muted rounded w-full"></div>
        </div>
      </div>
    )
  }

  if (error || !recipe) {
    return (
      <div className="max-w-4xl mx-auto py-8">
        <div className="bg-destructive/10 p-6 rounded-lg text-center">
          <h1 className="text-2xl font-bold text-destructive mb-2">Error</h1>
          <p>{error || 'Recipe not found'}</p>
          <Link 
            href="/recipes" 
            className="mt-4 inline-block bg-primary text-primary-foreground px-4 py-2 rounded"
          >
            Back to Recipes
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <Link 
          href="/recipes" 
          className="text-primary hover:underline flex items-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Back to Recipes
        </Link>
        
        <div className="flex gap-2">
          <button 
            onClick={handleDelete}
            className="text-destructive hover:text-destructive/80 px-3 py-1 border border-destructive/30 rounded-md text-sm"
          >
            Delete
          </button>
        </div>
      </div>
      
      <div className="bg-card rounded-lg overflow-hidden shadow-sm">
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-2">{recipe.title}</h1>
          <p className="text-muted-foreground mb-6">{recipe.description}</p>
          
          <div className="flex flex-wrap gap-4 mb-8 border-b pb-6">
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h2 className="text-xl font-semibold mb-4">Ingredients</h2>
              <ul className="list-disc pl-6 space-y-2">
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold mb-4">Instructions</h2>
              <ol className="list-decimal pl-6 space-y-4">
                {recipe.instructions.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ol>
            </div>
          </div>
          
          <div className="bg-muted p-4 rounded-lg text-center">
            <h3 className="font-semibold mb-2">Chef's Tip</h3>
            <p className="text-muted-foreground">
              For the best flavor, use freshly foraged morels. If using dried morels, rehydrate them first in warm water for 20-30 minutes, then use the strained soaking liquid as part of your cooking liquid.
            </p>
          </div>
          
          {recipe.createdAt && (
            <div className="mt-8 pt-4 border-t border-border text-right">
              <p className="text-sm text-muted-foreground">
                Added on {new Date(recipe.createdAt).toLocaleDateString()}
                {recipe.updatedAt && recipe.updatedAt !== recipe.createdAt && (
                  ` · Updated on ${new Date(recipe.updatedAt).toLocaleDateString()}`
                )}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}