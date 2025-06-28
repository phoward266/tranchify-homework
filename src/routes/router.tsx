import { createBrowserRouter, Navigate } from 'react-router-dom';
import { LoginView } from '../views/LoginView';
import { DashboardView } from '../views/DashboardView';
import { NotFoundView } from '../views/NotFoundView';
import { ProtectedRoute } from '../components/Auth/ProtectedRoute';
import { Redirect } from '../components/Redirect/Redirect';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/dashboard" replace />,
  },
  {
    path: '/login',
    element: <LoginView />,
  },
  {
    path: '/',
    element: <ProtectedRoute />,
    children: [
      {
        path: 'dashboard',
        element: <DashboardView />,
      },
    ],
  },
  {
    path: '/terms-and-conditions',
    element: <Redirect 
      to="https://tranchify.com/terms-and-conditions/" 
      message="Redirecting to Tranchify Terms and Conditions..."
    />,
  },
  {
    path: '*',
    element: <NotFoundView />,
  },
]);