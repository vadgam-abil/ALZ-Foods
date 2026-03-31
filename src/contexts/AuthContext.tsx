import React, { createContext, useContext, useState, useEffect } from 'react';
import { User } from '../types';

interface AuthContextType {
  user: User | null;
  login: (phone: string, pass: string) => Promise<void>;
  signup: (name: string, phone: string, pass: string) => Promise<void>;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(() => {
    const saved = localStorage.getItem('alz_user');
    return saved ? JSON.parse(saved) : null;
  });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (user) {
      localStorage.setItem('alz_user', JSON.stringify(user));
    } else {
      localStorage.removeItem('alz_user');
    }
  }, [user]);

  const login = async (phone: string, pass: string) => {
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 800));
    
    // Mock login logic
    if (phone === '1234567890') {
      setUser({ id: 'admin1', name: 'Admin User', phone, role: 'admin', addresses: [] });
    } else {
      setUser({ id: 'user1', name: 'Test User', phone, role: 'user', addresses: [] });
    }
    setIsLoading(false);
  };

  const signup = async (name: string, phone: string, pass: string) => {
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 800));
    setUser({ id: 'user' + Date.now(), name, phone, role: 'user', addresses: [] });
    setIsLoading(false);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within an AuthProvider');
  return context;
};
