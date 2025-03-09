import { NextRequest, NextResponse } from 'next/server';
import { recipeStore } from '@/lib/db';

interface Params {
  params: {
    id: string;
  };
}

// GET /api/recipes/[id] - Get a recipe by ID
export async function GET(request: NextRequest, { params }: Params) {
  try {
    const recipe = recipeStore.getById(params.id);
    
    if (!recipe) {
      return NextResponse.json(
        { error: 'Recipe not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json(recipe);
  } catch (error) {
    console.error(`Error fetching recipe ${params.id}:`, error);
    return NextResponse.json(
      { error: 'Failed to fetch recipe' },
      { status: 500 }
    );
  }
}

// PUT /api/recipes/[id] - Update a recipe
export async function PUT(request: NextRequest, { params }: Params) {
  try {
    const recipeData = await request.json();
    const updatedRecipe = recipeStore.update(params.id, recipeData);
    
    if (!updatedRecipe) {
      return NextResponse.json(
        { error: 'Recipe not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json(updatedRecipe);
  } catch (error) {
    console.error(`Error updating recipe ${params.id}:`, error);
    return NextResponse.json(
      { error: 'Failed to update recipe' },
      { status: 500 }
    );
  }
}

// DELETE /api/recipes/[id] - Delete a recipe
export async function DELETE(request: NextRequest, { params }: Params) {
  try {
    const success = recipeStore.delete(params.id);
    
    if (!success) {
      return NextResponse.json(
        { error: 'Recipe not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(`Error deleting recipe ${params.id}:`, error);
    return NextResponse.json(
      { error: 'Failed to delete recipe' },
      { status: 500 }
    );
  }
}