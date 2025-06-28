# Tranchify Frontend Homework

A simple authentication and dashboard application built with React, TypeScript, and Ant Design.

## Quick Start:

```bash
# Clone the repository
git clone https://github.com/phoward266/tranchify-homework.git
cd tranchify-homework

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:5173`

## What I Implemented

### Core Features

1. **Authentication System**

   - Login view with username/password fields using Ant Design Form
   - Form validation for required fields
   - User session stored in localStorage
   - Authentication check on protected routes
   - Automatic redirect if already logged in

2. **Dashboard View**

   - Protected route (requires authentication)
   - Ant Design Layout with Header component
   - Welcome message showing logged-in username
   - Data table displaying sample Tranchify information
   - Logout functionality that clears session and redirects

3. **Routing (React Router v7)**

   - `/` - Redirects to dashboard
   - `/login` - Login page (redirects to dashboard if already authenticated)
   - `/dashboard` - Protected dashboard page
   - `*` - 404 Not Found page
   - Smooth SPA navigation without page refreshes

4. **Project Structure**
   ```
   src/
   ├── components/
   │   ├── Auth/
   │   │   ├── ProtectedRoute.tsx
   │   │   └── LoginForm.tsx
   │   ├── Dashboard/
   │   │   └── DataTable.tsx
   │   └── Redirect/
   │       └── Redirect.tsx
   ├── views/
   │   ├── LoginView.tsx
   │   ├── DashboardView.tsx
   │   └── NotFoundView.tsx
   ├── routes/
   │   └── router.tsx
   ├── styles/
   │   └── responsive.css
   ├── utils/
   │   └── auth.ts
   └── App.tsx
   ```

## Tech Stack

- **React** 19.x - UI framework
- **TypeScript** 5.x - Type safety
- **Vite** 6.x - Build tool
- **React Router** 7.x - Client-side routing
- **Ant Design** 5.x - UI component library

## Notes

Login accepts any non-empty username/password (for demo purposes)
User data stored in localStorage (would use secure backend in production...)
Dashboard shows static demo data
