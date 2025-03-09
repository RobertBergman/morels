"use client"

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

interface FormData {
  title: string
  description: string
  difficulty: 'Easy' | 'Medium' | 'Advanced'
  prepTime: string
  cookTime: string
  ingredients: string[]
  instructions: string[]
}

export default function SubmitRecipePage() {
  const router = useRouter()
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [currentIngredient, setCurrentIngredient] = useState('')
  const [currentInstruction, setCurrentInstruction] = useState('')
  const [formData, setFormData] = useState<FormData>({
    title: '',
    description: '',
    difficulty: 'Medium',
    prepTime: '',
    cookTime: '',
    ingredients: [],
    instructions: []
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const addIngredient = () => {
    if (currentIngredient.trim()) {
      setFormData(prev => ({
        ...prev,
        ingredients: [...prev.ingredients, currentIngredient.trim()]
      }))
      setCurrentIngredient('')
    }
  }

  const removeIngredient = (index: number) => {
    setFormData(prev => ({
      ...prev,
      ingredients: prev.ingredients.filter((_, i) => i !== index)
    }))
  }

  const addInstruction = () => {
    if (currentInstruction.trim()) {
      setFormData(prev => ({
        ...prev,
        instructions: [...prev.instructions, currentInstruction.trim()]
      }))
      setCurrentInstruction('')
    }
  }

  const removeInstruction = (index: number) => {
    setFormData(prev => ({
      ...prev,
      instructions: prev.instructions.filter((_, i) => i !== index)
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validate form
    if (!formData.title || !formData.description || 
        !formData.prepTime || !formData.cookTime || 
        formData.ingredients.length === 0 || 
        formData.instructions.length === 0) {
      setError('Please fill in all fields and add at least one ingredient and instruction.')
      return
    }
    
    setSubmitting(true)
    setError(null)
    
    try {
      const response = await fetch('/api/recipes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
      
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`)
      }
      
      const result = await response.json()
      router.push('/recipes')
    } catch (err) {
      console.error('Failed to submit recipe:', err)
      setError('Failed to submit recipe. Please try again.')
      setSubmitting(false)
    }
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Submit a Morel Recipe</h1>
      
      {error && (
        <div className="bg-destructive/10 text-destructive p-4 rounded-lg mb-6">
          {error}
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="title" className="block font-medium mb-1">Recipe Title</label>
          <input 
            type="text" 
            id="title" 
            name="title" 
            value={formData.title}
            onChange={handleChange}
            className="w-full border rounded p-2"
            required
          />
        </div>
        
        <div>
          <label htmlFor="description" className="block font-medium mb-1">Description</label>
          <textarea 
            id="description" 
            name="description" 
            value={formData.description}
            onChange={handleChange}
            className="w-full border rounded p-2" 
            rows={3}
            required
          ></textarea>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label htmlFor="difficulty" className="block font-medium mb-1">Difficulty</label>
            <select 
              id="difficulty" 
              name="difficulty" 
              value={formData.difficulty}
              onChange={handleChange}
              className="w-full border rounded p-2"
              required
            >
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Advanced">Advanced</option>
            </select>
          </div>
          
          <div>
            <label htmlFor="prepTime" className="block font-medium mb-1">Prep Time</label>
            <input 
              type="text" 
              id="prepTime" 
              name="prepTime" 
              value={formData.prepTime}
              onChange={handleChange}
              placeholder="e.g. 15 mins"
              className="w-full border rounded p-2"
              required
            />
          </div>
          
          <div>
            <label htmlFor="cookTime" className="block font-medium mb-1">Cook Time</label>
            <input 
              type="text" 
              id="cookTime" 
              name="cookTime" 
              value={formData.cookTime}
              onChange={handleChange}
              placeholder="e.g. 30 mins"
              className="w-full border rounded p-2"
              required
            />
          </div>
        </div>
        
        <div>
          <label className="block font-medium mb-1">Ingredients</label>
          <div className="flex gap-2 mb-2">
            <input 
              type="text" 
              value={currentIngredient}
              onChange={(e) => setCurrentIngredient(e.target.value)}
              className="flex-grow border rounded p-2"
              placeholder="Add an ingredient"
            />
            <button 
              type="button" 
              onClick={addIngredient} 
              className="bg-primary text-primary-foreground px-4 py-2 rounded"
            >
              Add
            </button>
          </div>
          
          <ul className="list-disc pl-6 space-y-1 mt-3">
            {formData.ingredients.map((ingredient, index) => (
              <li key={index} className="text-sm flex items-center justify-between">
                <span>{ingredient}</span>
                <button 
                  type="button" 
                  onClick={() => removeIngredient(index)}
                  className="text-destructive hover:text-destructive/80 text-sm"
                >
                  Remove
                </button>
              </li>
            ))}
            {formData.ingredients.length === 0 && (
              <li className="text-muted-foreground italic text-sm">No ingredients added yet</li>
            )}
          </ul>
        </div>
        
        <div>
          <label className="block font-medium mb-1">Instructions</label>
          <div className="flex gap-2 mb-2">
            <textarea 
              value={currentInstruction}
              onChange={(e) => setCurrentInstruction(e.target.value)}
              className="flex-grow border rounded p-2"
              placeholder="Add an instruction step"
              rows={2}
            ></textarea>
            <button 
              type="button" 
              onClick={addInstruction} 
              className="bg-primary text-primary-foreground px-4 py-2 rounded h-fit"
            >
              Add
            </button>
          </div>
          
          <ol className="list-decimal pl-6 space-y-2 mt-3">
            {formData.instructions.map((instruction, index) => (
              <li key={index} className="text-sm">
                <div className="flex items-start justify-between">
                  <span>{instruction}</span>
                  <button 
                    type="button" 
                    onClick={() => removeInstruction(index)}
                    className="text-destructive hover:text-destructive/80 text-sm ml-2"
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
            {formData.instructions.length === 0 && (
              <li className="text-muted-foreground italic text-sm">No instructions added yet</li>
            )}
          </ol>
        </div>
        
        <div className="flex justify-between pt-4">
          <Link 
            href="/recipes" 
            className="border border-input bg-card hover:bg-muted px-4 py-2 rounded"
          >
            Cancel
          </Link>
          <button 
            type="submit" 
            className="bg-primary text-primary-foreground px-6 py-2 rounded"
            disabled={submitting}
          >
            {submitting ? 'Submitting...' : 'Submit Recipe'}
          </button>
        </div>
      </form>
    </div>
  )
}