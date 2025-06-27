import { Navigate, Outlet } from 'react-router-dom';
import { auth } from '../../utils/auth';

export const ProtectedRoute = () => {
  if (!auth.isAuthenticated()) {
    // Redirect to login if not authenticated
    return <Navigate to="/login" replace />;
  }

  // Render child routes if authenticated
  return <Outlet />;
};