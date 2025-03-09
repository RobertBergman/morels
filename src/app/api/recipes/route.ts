import { NextRequest, NextResponse } from 'next/server';
import { recipeStore } from '@/lib/db';

// GET /api/recipes - Get all recipes
export async function GET() {
  try {
    const recipes = recipeStore.getAll();
    return NextResponse.json(recipes);
  } catch (error) {
    console.error('Error fetching recipes:', error);
    return NextResponse.json(
      { error: 'Failed to fetch recipes' },
      { status: 500 }
    );
  }
}

// POST /api/recipes - Create a new recipe
export async function POST(request: NextRequest) {
  try {
    const recipe = await request.json();
    
    // Validate required fields
    const requiredFields = ['title', 'description', 'difficulty', 'prepTime', 'cookTime', 'ingredients', 'instructions'];
    const missingFields = requiredFields.filter(field => !recipe[field]);
    
    if (missingFields.length > 0) {
      return NextResponse.json(
        { error: `Missing required fields: ${missingFields.join(', ')}` },
        { status: 400 }
      );
    }
    
    const newRecipe = recipeStore.create(recipe);
    return NextResponse.json(newRecipe, { status: 201 });
  } catch (error) {
    console.error('Error creating recipe:', error);
    return NextResponse.json(
      { error: 'Failed to create recipe' },
      { status: 500 }
    );
  }
}