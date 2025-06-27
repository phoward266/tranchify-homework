import { createBrowserRouter, Navigate } from 'react-router-dom';
import { LoginView } from '../views/LoginView';
import { DashboardView } from '../views/DashboardView';
import { NotFoundView } from '../views/NotFoundView';
import { ProtectedRoute } from '../components/Layout/ProtectedRoute';

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
    path: '*',
    element: <NotFoundView />,
  },
]);