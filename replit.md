# Night Run Korolev - Event Registration System

## Overview

This is a full-stack web application for the "Ночной Забег Королёв" (Night Run Korolev) event registration system. The application features a space-themed design with animated elements and provides functionality for users to register for different race distances. It's built with modern web technologies including React, Express, and TypeScript, with a PostgreSQL database for data persistence.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **Styling**: Tailwind CSS with custom space-themed design variables
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **State Management**: TanStack Query for server state management
- **Form Handling**: React Hook Form with Zod validation
- **Animations**: Framer Motion for smooth animations and transitions
- **Build Tool**: Vite with custom configuration for development and production

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Schema**: Shared schema definitions between client and server
- **API**: RESTful API endpoints for registration management
- **Session Management**: Ready for session-based authentication (infrastructure in place)

### Database Architecture
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Migrations**: Automated database migrations through drizzle-kit
- **Schema Location**: Centralized in `shared/schema.ts` for type safety across the stack
- **Tables**: Users and registrations with proper relationships and constraints

## Key Components

### Frontend Components
1. **Animated Background**: Space-themed background with twinkling stars and floating elements
2. **Hero Section**: Main landing area with animated rocket and event branding
3. **Registration Section**: Form handling with validation for race registration
4. **Program Section**: Event schedule with animated timeline
5. **Partners Section**: Sponsor and partner information display

### Backend Services
1. **Registration Service**: Handles race registration CRUD operations
2. **Storage Layer**: Abstracted storage interface with in-memory fallback
3. **Route Handlers**: RESTful endpoints for registration management
4. **Validation Layer**: Server-side validation using Zod schemas

### Database Schema
1. **Registrations Table**: Stores participant information (name, email, distance, timestamp)
2. **Users Table**: User authentication system (ready for future implementation)
3. **Shared Types**: TypeScript interfaces generated from database schema

## Data Flow

1. **Registration Process**:
   - User fills out registration form in the frontend
   - Form validation occurs client-side using Zod schema
   - Valid data is sent to `/api/registrations` endpoint
   - Server validates data again and stores in PostgreSQL
   - Success/error response sent back to client
   - UI updates with confirmation or error message

2. **Data Persistence**:
   - PostgreSQL database stores all registration data
   - Drizzle ORM handles database operations with type safety
   - Database migrations manage schema changes
   - Environment variable `DATABASE_URL` configures connection

3. **State Management**:
   - TanStack Query manages server state on the frontend
   - React Hook Form handles form state and validation
   - Shared schemas ensure type consistency across the stack

## External Dependencies

### Core Framework Dependencies
- **@neondatabase/serverless**: PostgreSQL database connectivity
- **drizzle-orm**: Type-safe database ORM
- **@tanstack/react-query**: Server state management
- **react-hook-form**: Form handling and validation
- **zod**: Schema validation library

### UI and Styling Dependencies
- **@radix-ui/***: Headless UI component primitives
- **tailwindcss**: Utility-first CSS framework
- **framer-motion**: Animation library
- **lucide-react**: Icon library

### Development Dependencies
- **vite**: Build tool and development server
- **tsx**: TypeScript execution for Node.js
- **esbuild**: JavaScript bundler for production builds
- **@replit/vite-plugin-***: Replit-specific development tools

## Deployment Strategy

### Development Environment
- **Runtime**: Node.js 20 with PostgreSQL 16
- **Development Server**: Vite dev server with HMR on port 5000
- **Database**: PostgreSQL with automatic provisioning
- **Environment**: Replit development environment with file watching

### Production Build Process
1. **Frontend Build**: Vite builds React application to `dist/public`
2. **Backend Build**: esbuild bundles server code to `dist/index.js`
3. **Asset Optimization**: Static assets are optimized and copied
4. **Database Migration**: Schema changes applied via `drizzle-kit push`

### Deployment Configuration
- **Platform**: Replit autoscale deployment
- **Port Mapping**: Internal port 5000 mapped to external port 80
- **Build Command**: `npm run build`
- **Start Command**: `npm run start`
- **Environment Variables**: `DATABASE_URL` for database connection

## Recent Changes

Recent Changes:
- June 16, 2025: Initial setup with basic registration system
- June 16, 2025: Comprehensive redesign with new registration flow:
  - Two-step registration: distance selection tiles (5km/10km) with availability counters
  - Full participant form with personal info, location, contacts, club membership, medical certificate
  - Photo gallery placeholder section for post-event content
  - Updated contact email to korolev@night-run.ru
  - Removed social media sections and phone contact
  - Enhanced space-themed visual design

## User Preferences

Preferred communication style: Simple, everyday language.