# replit.md

## Overview

BadWater is a comprehensive creative technology studio website featuring a modern dark, futuristic UI with a complete content management system. The project is a full-stack application built with React frontend, Express backend, and PostgreSQL database, designed to showcase the company's work across multiple domains including operating systems, AI tools, automation, games, films, sound production, and IT services.

The application includes both a public-facing website with sections for about, services, projects, news, and contact forms, as well as a secure admin dashboard for content management. The site emphasizes immersive animations, smooth transitions, and professional presentation of the company's portfolio and capabilities.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development practices
- **Routing**: Wouter for lightweight client-side routing
- **UI Components**: Shadcn/ui component library with Radix UI primitives for accessibility
- **Styling**: Tailwind CSS with custom CSS variables for theming and dark mode support
- **Forms**: React Hook Form with Zod validation for robust form handling
- **State Management**: TanStack Query (React Query) for server state management and caching
- **Animations**: CSS-based animations with custom classes for floating elements and transitions

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Authentication**: Passport.js with local strategy and session-based authentication
- **Session Management**: Express-session with PostgreSQL session store
- **Password Security**: Node.js crypto module with scrypt for secure password hashing
- **API Design**: RESTful endpoints with role-based access control
- **Error Handling**: Centralized error handling middleware with proper HTTP status codes

### Database Layer
- **Database**: PostgreSQL with Neon serverless hosting
- **ORM**: Drizzle ORM for type-safe database operations
- **Schema Management**: Drizzle-kit for migrations and schema management
- **Connection**: Connection pooling with @neondatabase/serverless

### Data Models
- **Users**: Authentication with username/password and role-based permissions (admin/editor)
- **Projects**: Portfolio items with title, description, status, category, tags, images, and featured flag
- **News**: Blog/press releases with title, excerpt, content, category, publication status
- **Submissions**: Contact forms, talent applications, and partnership proposals with JSON data storage

### Security Architecture
- **Authentication**: Session-based with secure cookie handling
- **Authorization**: Role-based access control (admin/editor roles)
- **Password Security**: Salted password hashing with timing-safe comparison
- **Session Security**: Secure session configuration with PostgreSQL session store
- **Input Validation**: Zod schemas for both client and server-side validation

### Build and Development
- **Build Tool**: Vite for fast development and optimized production builds
- **TypeScript**: Full TypeScript support across client, server, and shared code
- **Hot Reload**: Vite HMR for development with Express middleware integration
- **Production Build**: Separate client and server builds with esbuild for server bundling

## External Dependencies

### Database and Hosting
- **Neon Database**: Serverless PostgreSQL hosting with connection pooling
- **Environment Variables**: DATABASE_URL and SESSION_SECRET required for operation

### UI and Design
- **Radix UI**: Comprehensive set of accessible UI primitives for components
- **Tailwind CSS**: Utility-first CSS framework with custom configuration
- **Google Fonts**: Inter and Orbitron fonts for modern typography
- **Unsplash**: External image hosting for placeholder and demo content

### Authentication and Security
- **Passport.js**: Authentication middleware with local strategy support
- **Connect-pg-simple**: PostgreSQL session store for persistent sessions
- **Crypto Module**: Node.js built-in crypto for password hashing

### Development Tools
- **TypeScript**: Type checking and enhanced development experience
- **ESLint/Prettier**: Code quality and formatting (configured but not explicitly shown)
- **Replit Integration**: Special Vite plugins for Replit development environment

### Form Handling and Validation
- **React Hook Form**: Performant forms with minimal re-renders
- **Zod**: Schema validation for both client and server
- **Hookform Resolvers**: Integration between React Hook Form and Zod

### API and State Management
- **TanStack Query**: Server state management with caching and synchronization
- **Fetch API**: Native browser API for HTTP requests with credential handling