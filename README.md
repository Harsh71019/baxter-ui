Baxter-UI
A modern, TypeScript-based React component library built with Vite and Storybook.

## Development Guidelines

### Code Style and Quality

- All code must pass ESLint checks
- TypeScript strict mode is enabled
- Follow naming conventions:
  - Interfaces: IMyInterface
  - Types: TMyType
  - Components: PascalCase
  - Functions: camelCase
  - Constants: UPPER_SNAKE_CASE

### Git Commit Convention

Follow conventional commits:
- feat: New feature
- fix: Bug fix
- docs: Documentation changes
- style: Code style changes
- refactor: Code refactoring
- perf: Performance improvements
- test: Adding/updating tests
- build: Build system changes
- ci: CI configuration changes
- chore: General maintenance
- revert: Revert previous changes

Example: `feat(button): add new variant for warning state`

### Pre-commit Checks

The following checks run automatically before commits:
- ESLint
- Prettier
- TypeScript compilation
- Unit tests
- Commit message format

### VS Code Extensions

Install recommended extensions:
- ESLint
- Prettier
- EditorConfig
- StyleLint

📚 Table of Contents

Component Generator
We provide a convenient component generator to scaffold new components with consistent structure. To create a new component:

npm run generate ComponentName

This will create:
Copysrc/components/ComponentName/
├── ComponentName.tsx         # Main component file
├── ComponentName.module.scss # Styles
├── ComponentName.stories.tsx # Storybook stories
├── ComponentName.test.tsx    # Tests
└── index.ts                 # Barrel file

Note: Component names must be in PascalCase (e.g., Button, CardList, NavBar)

Setup
Development Guidelines
Component Creation Rules
Styling Guidelines
Testing Requirements
Documentation Standards
Contributing

Setup
bashCopy# Clone the repository
git clone [repository-url]
cd my-component-lib

# Install dependencies
npm install

# Start Storybook
npm run storybook

# Build the library
npm run build
Development Guidelines
Project Structure
Copysrc/
├── components/
│   ├── ComponentName/
│   │   ├── ComponentName.tsx
│   │   ├── ComponentName.module.scss
│   │   ├── ComponentName.stories.tsx
│   │   ├── ComponentName.test.tsx
│   │   └── index.ts
│   └── index.ts
├── types/
├── utils/
└── styles/
    ├── variables.scss
    └── mixins.scss
Code Style Rules

TypeScript

Enable strict mode
No any types allowed
Use interface for object types
Explicit return types for functions


Component Structure
typescriptCopyimport React from 'react';
import styles from './ComponentName.module.scss';

export interface ComponentNameProps {
  // Props interface
}

export const ComponentName: React.FC<ComponentNameProps> = ({ prop1, prop2 }) => {
  // Component logic
  return (
    // JSX
  );
};

ComponentName.displayName = 'ComponentName';

Naming Conventions

Components: PascalCase
Files: PascalCase for components
Variables/Functions: camelCase
Constants: UPPERCASE_SNAKE_CASE
CSS Classes: camelCase



Component Creation Rules

Component Files

One component per file
Export component as named export
Create barrel file (index.ts) for each component


Props

Use TypeScript interfaces
Document all props with JSDoc
Provide default values where appropriate
Use required props sparingly


Storybook

Create stories for all components
Include different variants and states
Add documentation and controls
Provide usage examples



Example:
typescriptCopy/**
 * Button component with various styles and sizes
 * @param variant - Visual style of the button
 * @param size - Size of the button
 */
export interface ButtonProps {
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
}
Styling Guidelines

CSS Modules

Use .module.scss extension
Follow BEM-like naming
Use variables for common values
Implement responsive design


Variables

Store in styles/variables.scss
Use for colors, spacing, typography
Follow naming convention: $component-element-property



Example:
scssCopy// variables.scss
$button-primary-bg: #1976d2;
$button-padding-medium: 8px 16px;

// ComponentName.module.scss
@import '@/styles/variables';

.componentName {
  padding: $button-padding-medium;
  background: $button-primary-bg;
}
Testing Requirements

Unit Tests

Test all components
Cover all props and variations
Test user interactions
Minimum 80% coverage


Commands

bashCopy# Run tests
npm run test

# Check coverage
npm run test:coverage

# Run linting
npm run lint

# Format code
npm run format
Documentation Standards

Component Documentation

JSDoc comments for components and props
Usage examples
Props table
Common use cases


README Requirements

Component description
Props documentation
Usage examples
Accessibility considerations



Pre-commit Checks
All commits must pass:

TypeScript compilation
ESLint checks
Prettier formatting
Unit tests
Build process

Contributing

Create feature branch from develop
Follow coding standards
Write tests
Update documentation
Submit PR with description

Scripts
bashCopynpm run dev          # Start development
npm run build        # Build library
npm run lint         # Run linter
npm run format       # Format code
npm run test         # Run tests
npm run storybook    # Start Storybook
npm run type-check   # Check types
Version Control Guidelines

Semantic versioning
Conventional commits
Feature branches
Pull request reviews required

Example commit message:
Copyfeat(button): add new variant for warning state

- Add warning color variant
- Update documentation
- Add story for warning state
Release Process

Update version in package.json
Update CHANGELOG.md
Build library
Test build
Publish to npm
Tag release