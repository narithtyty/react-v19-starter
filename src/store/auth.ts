import { atom } from 'jotai';

interface AuthState {
  isAuthenticated: boolean;
  isLoading: boolean;
}

export const authAtom = atom<AuthState>({
  isAuthenticated: false,
  isLoading: true,
});

// Persist auth token in localStorage
export const tokenAtom = atom<string | null>(
  localStorage.getItem('auth_token')
);

export const setToken = (token: string | null) => {
  if (token) {
    localStorage.setItem('auth_token', token);
  } else {
    localStorage.removeItem('auth_token');
  }
};

export const logout = (setAuth: (value: AuthState) => void) => {
  setToken(null);
  setAuth({
    isAuthenticated: false,
    isLoading: false,
  });
};
