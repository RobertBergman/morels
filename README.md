# Morels PNW - Pacific Northwest Morel Hunting Guide

A comprehensive website for finding, identifying, and enjoying morel mushrooms in the Pacific Northwest. Built with Next.js and Tailwind CSS.

## Features

- 🍄 Detailed morel identification guides
- 🗺️ Regional hunting location information
- 📅 Interactive season tracker
- 👨‍🍳 Dynamic recipe management with full CRUD capabilities
- 🧪 RESTful API for recipe data
- 🌙 Dark mode support

## Pages

- **Home**: Landing page with key information and navigation
- **Morel Basics**: Comprehensive guide to morel mushroom identification
- **Finding Spots**: Information on prime hunting locations in the PNW
- **Season Tracker**: Interactive tool showing current morel season status by region
- **Recipes**: Dynamic collection of morel recipes with API integration
- **Recipe Detail**: Individual recipe view with detailed information
- **Submit Recipe**: Form to add new recipes to the collection
- **Contact**: Get in touch form

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Theming**: next-themes for dark/light mode
- **Language**: TypeScript
- **API**: RESTful API with Next.js App Router API routes
- **Data Storage**: In-memory database (can be replaced with a real database)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/morels-pnw.git
   cd morels-pnw
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Project Structure

```
morels-pnw/
├── public/              # Static assets
├── src/
│   ├── app/             # Next.js App Router
│   │   ├── api/         # API routes
│   │   │   └── recipes/ # Recipe API endpoints
│   │   ├── basics/      # Morel basics page
│   │   ├── contact/     # Contact page
│   │   ├── recipes/     # Recipes pages
│   │   │   └── [id]/    # Individual recipe page
│   │   ├── season/      # Season tracker page
│   │   ├── spots/       # Finding spots page
│   │   ├── submit-recipe/ # Recipe submission page
│   │   ├── globals.css  # Global styles
│   │   ├── layout.tsx   # Root layout
│   │   └── page.tsx     # Home page
│   ├── components/      # Reusable components
│   └── lib/             # Utility functions and libraries
│       ├── db.ts        # In-memory database implementation
│       └── recipes.ts   # Recipe types and sample data
├── tailwind.config.js   # Tailwind configuration
├── postcss.config.js    # PostCSS configuration
├── package.json         # Project dependencies
└── tsconfig.json        # TypeScript configuration
```

## API Documentation

The project includes a RESTful API for recipe management:

### Endpoints

- `GET /api/recipes` - Get all recipes
- `POST /api/recipes` - Create a new recipe
- `GET /api/recipes/:id` - Get a recipe by ID
- `PUT /api/recipes/:id` - Update a recipe
- `DELETE /api/recipes/:id` - Delete a recipe

### Data Model

```typescript
interface Recipe {
  id: string;
  title: string;
  description: string;
  difficulty: 'Easy' | 'Medium' | 'Advanced';
  prepTime: string;
  cookTime: string;
  ingredients: string[];
  instructions: string[];
  createdAt?: string;
  updatedAt?: string;
}
```

## Extending the Database

The current implementation uses an in-memory database for simplicity. To use a real database:

1. Replace the implementation in `src/lib/db.ts` with your database of choice (MongoDB, PostgreSQL, etc.)
2. Maintain the same interface for CRUD operations
3. Update environment variables as needed

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Built for mushroom enthusiasts in the Pacific Northwest
- Inspired by the thrill of morel hunting season