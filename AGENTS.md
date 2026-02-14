# Agent Guidelines for nextjs-typescript-template

## Overview

This is a Next.js 15 + TypeScript + Tailwind CSS + Jest + Cypress template. It uses React 19, ESLint 9 (flat config), and follows the App Router pattern.

## Commands

### Development

```bash
npm run dev          # Start Next.js development server
npm run build        # Production build
npm run start        # Start production server
npm run clean        # Remove .next directory
```

### Linting & Type Checking

```bash
npm run lint         # Run ESLint
npm run lint:fix     # Run ESLint with auto-fix
npm run lint:tsc     # Run TypeScript type check
npm run lint:tsc:cypress  # Type check Cypress files
```

### Testing

```bash
npm test             # Run Jest tests (single run)
npm test:watch       # Run Jest in watch mode
npm test:ci          # Run Jest with coverage (CI mode)

# Run a single test file
npm test -- src/__tests__/index.test.tsx

# Run tests matching a pattern
npm test -- --testNamePattern="Home"
```

### Cypress E2E Testing

```bash
npm run cypress:open # Open Cypress test runner
```

## Code Style Guidelines

### General

- Use strict TypeScript (`strict: true` in tsconfig.json)
- Use single quotes for strings (`.prettierrc.json` config)
- Use functional components with arrow functions where appropriate
- Prefer `const` over `let`, avoid `var`

### Imports

- Use absolute imports with `src/` prefix (configured in tsconfig.json)
- Group imports in this order: external libs, Next.js, internal components/hooks, styles
- Use `simple-import-sort` plugin - imports are auto-sorted
- Example:

```typescript
import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/Button';
import styles from '@/styles/Home.module.css';
```

### Naming Conventions

- **Files**: Use kebab-case for utilities (`format-date.ts`), PascalCase for components (`HomePage.tsx`)
- **Components**: PascalCase (`export default function HomePage()`)
- **Hooks**: camelCase starting with `use` (`useAuth`, `useCounter`)
- **Variables/functions**: camelCase
- **Constants**: SCREAMING_SNAKE_CASE for config values, camelCase otherwise

### TypeScript

- Always define return types for functions when not obvious
- Use explicit types over `any`
- Use `interface` for object shapes, `type` for unions/intersections
- Avoid `as` type assertions when possible

### React/Next.js

- Use App Router (`src/app/`) over Pages Router
- Use server components by default, add `'use client'` only when needed
- Use `next/image` for images, `next/link` for navigation
- Metadata API via `export const metadata` in layout/page files

### CSS/Styling

- Use CSS Modules (`*.module.css`) or Tailwind CSS classes
- Avoid global CSS except for globals.css
- Tailwind 4 is configured via `@tailwindcss/postcss`

### Error Handling

- Use try/catch for async operations
- Create custom error boundaries for React components
- Log errors appropriately (avoid console.log in production)

### Testing

- Place tests in `src/__tests__/` directory
- Use `@testing-library/react` for component tests
- Use `@testing-library/jest-dom` for DOM assertions
- Follow the `describe`/`it` pattern
- Example:

```typescript
import { render, screen } from '@testing-library/react';
import Home from 'src/app/page';

describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
```

### Git/Commits

- Follow Conventional Commits (enforced by commitlint)
- Commit message format: `type(scope): description`
- Types: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`
- Example: `feat(auth): add login form component`

### Pre-commit Hooks

- Husky runs lint-staged on commit
- Lint-staged runs ESLint fix on `.js`, `.ts`, `.tsx` files
- Lint-staged runs Prettier write on `.css`, `.html`, `.json`, `.md` files

## Project Structure

```
src/
  app/           # Next.js App Router pages
  __tests__/     # Jest tests
  styles/        # CSS modules and global styles
  components/    # Reusable components (create as needed)
  hooks/         # Custom React hooks (create as needed)
  lib/           # Utility functions (create as needed)
cypress/
  e2e/           # Cypress E2E tests
  fixtures/      # Test fixtures
config/          # Configuration files (jest.setup.ts)
```

## Key Dependencies

- Next.js 15.x (App Router)
- React 19.x
- TypeScript 5.x
- Tailwind CSS 4.x
- Jest 30.x
- Cypress 15.x
- ESLint 9.x (flat config)
