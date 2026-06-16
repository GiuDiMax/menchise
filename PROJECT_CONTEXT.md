# Project Context & Guidelines

This document provides context and guidelines for developing and maintaining the Centro Dentale Menchise website, specifically for AI assistants to avoid re-analyzing the project.

## Technology Stack
- **Framework**: Astro
- **Styling**: Tailwind CSS v4, Shadcn UI (React integration for interactive components)
- **CSS Preprocessing**: Originally SASS/SCSS, now migrated to Tailwind global CSS (`src/styles/global.css`).

## Design System & Colors
The site uses a modern dark-themed aesthetic that reflects a clean, trustworthy dental practice, without distorting the original site's identity.
Colors are defined in `src/styles/global.css` using CSS variables mapped to Tailwind configuration:
- **Background (`--background`)**: `#2e3842` (Dark blue/slate)
- **Foreground (`--foreground`)**: `#ffffff` (White text)
- **Primary Accent (`--primary`)**: `#21b2a6` (Teal)
- **Secondary Accent (`--secondary`)**: `#505393`
- **Destructive**: `#ed4933`

## Assets
- All images are stored in `public/images/`.
- Original `.jpg` images have been converted to modern `.webp` format and renamed logically (e.g., `impianti-1.webp`, `work-1.webp`).
- Do not use old `.jpg` files or long hash names.

## Component Refactoring Strategy
- **Layouts**: Use Tailwind utility classes for responsive design (`md:flex`, `grid`, `space-y`).
- **UI Components**: Use Shadcn UI (e.g., `<Button>`, `<Card>`) from `src/components/ui/` imported in `.astro` files.
- **Images**: Use `.webp` files.
- **Icons**: Use FontAwesome classes (`<i class="fa-solid fa-tooth"></i>`) or standard SVG icons.

## Current Progress
- `index.astro` has been fully refactored to Tailwind + Shadcn.
- Remaining pages to refactor: `impianti.astro`, `intarsi.astro`, `malattiaparodontale.astro`, `servizi.astro`.
- Old SASS files (`public/assets/sass`) and CSS files (`public/assets/css`) are pending deletion once all components are refactored to Tailwind.
