import { ReactNode, useEffect } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { useAtom } from 'jotai';
import { authAtom, tokenAtom, setToken } from '@/store/auth';
import { LoadingOverlay } from '@/components/ui/loading-overlay';

interface ProtectedRouteProps {
  children: ReactNode;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const [auth, setAuth] = useAtom(authAtom);
  const [token] = useAtom(tokenAtom);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const initAuth = async () => {
      if (token) {
        try {
          // TODO: Implement your token validation logic here
          // const user = await validateToken(token);
          // For now, we'll simulate a successful auth
          setAuth({
            isAuthenticated: true,
            isLoading: false,
          });
        } catch (error) {
          setToken(null);
          setAuth({
            isAuthenticated: false,
            isLoading: false,
          });
          navigate('/auth/login', {
            state: { from: location },
            replace: true
          });
        }
      } else {
        setAuth(prev => ({
          ...prev,
          isLoading: false,
        }));
      }
    };

    initAuth();
  }, [token, setAuth, navigate, location]);

  // Show loading overlay while validating token
  if (auth.isLoading) {
    return <LoadingOverlay message="Initializing application..." />;
  }

  // If not authenticated and not on login page, redirect to login
  if (!auth.isAuthenticated && !location.pathname.startsWith('/auth/')) {
    return <Navigate to="/auth/login" state={{ from: location }} replace />;
  }

  // If authenticated and on login page, redirect to home
  if (auth.isAuthenticated && location.pathname.startsWith('/auth/')) {
    const from = (location.state as { from?: Location })?.from?.pathname || '/';
    return <Navigate to={from} replace />;
  }

  return <>{children}</>;
}
