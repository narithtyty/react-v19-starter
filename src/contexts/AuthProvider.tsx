import { ReactNode, useEffect } from 'react';
import { useAtom } from 'jotai';
import { authAtom, tokenAtom, setToken } from '@/store/auth';
import { useNavigate, useLocation } from 'react-router-dom';
import { LoadingOverlay } from '@/components/ui/loading-overlay';

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
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
            user: {
              id: '1',
              email: 'user@example.com',
              name: 'John Doe',
            },
            isAuthenticated: true,
            isLoading: false,
          });
        } catch (error) {
          setToken(null);
          setAuth({
            user: null,
            isAuthenticated: false,
            isLoading: false,
          });
          navigate('/auth/login', { 
            state: { from: location },
            replace: true 
          });
        }
      } else {
        setAuth({
          user: null,
          isAuthenticated: false,
          isLoading: false,
        });
        if (!location.pathname.startsWith('/auth/')) {
          navigate('/auth/login', { 
            state: { from: location },
            replace: true 
          });
        }
      }
    };

    initAuth();
  }, [token, setAuth, navigate, location]);

  if (auth.isLoading) {
    return <LoadingOverlay message="Initializing application..." />;
  }

  return <>{children}</>;
};
