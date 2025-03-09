# Morels PNW - Pacific Northwest Morel Hunting Guide

A comprehensive website for finding, identifying, and enjoying morel mushrooms in the Pacific Northwest. Built with Next.js and Tailwind CSS.

## Features

- 🍄 Detailed morel identification guides
- 🗺️ Regional hunting location information
- 📅 Interactive season tracker
- 👨‍🍳 Delicious morel recipes
- 🌙 Dark mode support

## Pages

- **Home**: Landing page with key information and navigation
- **Morel Basics**: Comprehensive guide to morel mushroom identification
- **Finding Spots**: Information on prime hunting locations in the PNW
- **Season Tracker**: Interactive tool showing current morel season status by region
- **Recipes**: Collection of morel recipes
- **Contact**: Get in touch form

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Theming**: next-themes for dark/light mode
- **Language**: TypeScript

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
│   │   ├── basics/      # Morel basics page
│   │   ├── contact/     # Contact page
│   │   ├── recipes/     # Recipes page
│   │   ├── season/      # Season tracker page
│   │   ├── spots/       # Finding spots page
│   │   ├── globals.css  # Global styles
│   │   ├── layout.tsx   # Root layout
│   │   └── page.tsx     # Home page
│   ├── components/      # Reusable components
│   └── lib/             # Utility functions and libraries
├── tailwind.config.js   # Tailwind configuration
├── postcss.config.js    # PostCSS configuration
├── package.json         # Project dependencies
└── tsconfig.json        # TypeScript configuration
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Built for mushroom enthusiasts in the Pacific Northwest
- Inspired by the thrill of morel hunting season