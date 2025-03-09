import { Recipe, recipes as initialRecipes } from './recipes';

// In-memory store that simulates a database
// In a real app, this would be replaced with a database connection
class RecipeStore {
  private recipes: Recipe[] = [...initialRecipes];
  
  // Get all recipes
  getAll(): Recipe[] {
    return [...this.recipes];
  }
  
  // Get a recipe by ID
  getById(id: string): Recipe | undefined {
    return this.recipes.find(recipe => recipe.id === id);
  }
  
  // Create a new recipe
  create(recipe: Omit<Recipe, 'id' | 'createdAt' | 'updatedAt'>): Recipe {
    const id = this.generateId(recipe.title);
    const now = new Date().toISOString();
    
    const newRecipe: Recipe = {
      ...recipe,
      id,
      createdAt: now,
      updatedAt: now
    };
    
    this.recipes.push(newRecipe);
    return newRecipe;
  }
  
  // Update an existing recipe
  update(id: string, recipeData: Partial<Omit<Recipe, 'id' | 'createdAt' | 'updatedAt'>>): Recipe | null {
    const index = this.recipes.findIndex(recipe => recipe.id === id);
    
    if (index === -1) {
      return null;
    }
    
    const updatedRecipe: Recipe = {
      ...this.recipes[index],
      ...recipeData,
      updatedAt: new Date().toISOString()
    };
    
    this.recipes[index] = updatedRecipe;
    return updatedRecipe;
  }
  
  // Delete a recipe
  delete(id: string): boolean {
    const initialLength = this.recipes.length;
    this.recipes = this.recipes.filter(recipe => recipe.id !== id);
    return this.recipes.length !== initialLength;
  }
  
  // Simple ID generator based on title - in a real app, use UUID or similar
  private generateId(title: string): string {
    return title.toLowerCase()
      .replace(/[^\w\s]/g, '')
      .replace(/\s+/g, '-') + 
      '-' + 
      Math.floor(Math.random() * 10000);
  }
}

// Export a singleton instance
export const recipeStore = new RecipeStore();