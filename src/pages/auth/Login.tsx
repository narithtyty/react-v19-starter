import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAtom } from 'jotai';
import { authAtom } from '@/store/auth';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { setToken } from '@/store/auth';

interface LocationState {
  from?: {
    pathname: string;
  };
}

export default function Login() {
  const [, setAuth] = useAtom(authAtom);
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState('test@gmail.com');
  const [password, setPassword] = useState('password');

  const from = (location.state as LocationState)?.from?.pathname || '/';

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // TODO: Implement your actual login logic here
      // const response = await loginUser(email, password);
      // For demo purposes, we'll simulate a successful login
      const mockToken = 'mock_jwt_token';
      setToken(mockToken);
      
      setAuth({
        user: {
          id: '1',
          email: email,
          name: 'John Doe',
        },
        isAuthenticated: true,
        isLoading: false,
      });
      
      navigate('/', { replace: true });
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <Card className="w-[400px]">
        <CardHeader>
          <CardTitle>Welcome back</CardTitle>
          <CardDescription>Enter your credentials to access your account</CardDescription>
        </CardHeader>
        <form onSubmit={handleLogin}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full">
              Sign In
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
