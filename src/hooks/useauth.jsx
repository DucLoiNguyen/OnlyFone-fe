import { useContext } from 'react';
import { AuthContext } from '@/context/authcontext';

export default function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth phải được sử dụng trong AuthProvider');
  }
  return context;
}