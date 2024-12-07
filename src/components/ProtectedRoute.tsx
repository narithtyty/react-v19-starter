import { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAtom } from 'jotai';
import { authAtom } from '@/store/auth';

interface ProtectedRouteProps {
  children: ReactNode;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const [auth] = useAtom(authAtom);
  const location = useLocation();

  if (!auth.isAuthenticated) {
    // Redirect to /auth/login with the current location
    return <Navigate to="/auth/login" state={{ from: location }} replace />;
  }

  return <>{children}</>;
}
