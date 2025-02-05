# Portfolio Website Code Style Guide

You are developing a modern portfolio website using Next.js 14, TypeScript, TailwindCSS, and ShadcnUI. Follow these guidelines to maintain consistent, high-quality code throughout the project.

### Project Stack
- Next.js 14 (App Router)
- TypeScript
- TailwindCSS
- ShadcnUI Components
- React Server Components

### Project Structure
├── public
│   ├── next.svg
│   └── vercel.svg
├── src
│   ├── app
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── icon.svg
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components
│   │   ├── ui
│   │   │   ├── avatar.tsx
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── dialog.tsx
│   │   │   ├── drawer.tsx
│   │   │   ├── dropdown-menu.tsx
│   │   │   ├── label.tsx
│   │   │   ├── menubar.tsx
│   │   │   ├── moving-border.tsx
│   │   │   ├── separator.tsx
│   │   │   ├── sheet.tsx
│   │   │   ├── timeline.tsx
│   │   │   └── wavy-background.tsx
│   │   ├── contact.tsx
│   │   ├── experience.tsx
│   │   ├── footer.tsx
│   │   ├── home.tsx
│   │   ├── navbar.tsx
│   │   ├── project.tsx
│   │   ├── skill.tsx
│   │   ├── theme-provider.tsx
│   │   └── toggle.tsx
│   ├── lib
│   │   └── utils.ts
│   └── public
│       └── images
│           ├── athlos.png
│           ├── my-svelte-home.png
│           ├── myuvu.png
│           └── portfolio.png
├── README.md
├── components.json
├── next-env.d.ts
├── next.config.mjs
├── package-lock.json
├── package.json
├── postcss.config.js
├── tailwind.config.ts
└── tsconfig.json

### Code Implementation Guidelines

#### General Principles
- Write clean, readable code over clever optimizations
- Implement proper TypeScript types for all components and functions
- Use Server Components by default, Client Components only when needed
- Follow DRY (Don't Repeat Yourself) principles
- Implement proper error handling and loading states

#### Naming Conventions
- Use descriptive PascalCase for components: `PortfolioCard`, `ProjectGrid`
- Prefix event handlers with "handle": `handleProjectClick`, `handleNavigation`
- Use camelCase for functions and variables: `fetchProjects`, `isLoading`

#### Component Structure
- Implement proper component segregation (layout, features, shared)
- Place components in appropriate directories:
    - `app/` - Route components
    - `components/` - Reusable UI components
    - `lib/` - Utility functions and types
    - `public/` - Static assets

#### Styling Guidelines
- Use TailwindCSS classes exclusively for styling
- Implement responsive design using Tailwind breakpoints
- Use ShadcnUI components for consistent UI elements
- Prefer `className={cn()}` utility for conditional classes

#### Accessibility
- Include proper ARIA labels and roles
- Ensure keyboard navigation support
- Implement proper heading hierarchy
- Add alt text for images and aria-labels for interactive elements

#### Performance
- Use proper image optimization with Next.js Image component
- Implement proper loading states and suspense boundaries
- Optimize metadata for SEO
- Use proper caching strategies

Remember:
- Always write TypeScript instead of JavaScript
- Implement error boundaries where necessary
- Test components for accessibility and responsiveness
- Keep components small and focused

