import { createContext, useState, useCallback, useEffect, useContext } from 'react';
import { loginAPI } from '@/api/authapi';

export const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Kiểm tra token khi ứng dụng khởi động
  useEffect(() => {
    const initAuth = () => {
      try {
        // Lấy token từ localStorage
        const savedToken = localStorage.getItem('authToken');
        const savedUser = localStorage.getItem('authUser');

        if (savedToken && savedUser) {
          // Kiểm tra xem token còn hiệu lực không
          const userData = JSON.parse(savedUser);
          const tokenExpiry = localStorage.getItem('tokenExpiry');

          if (tokenExpiry && new Date().getTime() < parseInt(tokenExpiry)) {
            setToken(savedToken);
            setUser(userData);
          } else {
            // Token hết hạn, xoá dữ liệu
            localStorage.removeItem('authToken');
            localStorage.removeItem('authUser');
            localStorage.removeItem('tokenExpiry');
          }
        }
      } catch (err) {
        console.error('Lỗi khi khởi tạo auth:', err);
      } finally {
        setLoading(false);
      }
    };

    initAuth();
  }, []);

  // Login function
  const login = useCallback(async (email, password, rememberMe = false) => {
    setLoading(true);
    setError(null);

    try {
      // Gọi API đăng nhập
      const response = await loginAPI(email, password);

      if (response.success) {
        const userData = {
          id: response.user.id,
          email: response.user.email,
          name: response.user.name,
          avatar: response.user.avatar
        };

        // Lưu token
        setToken(response.token);
        setUser(userData);

        // Lưu vào localStorage
        localStorage.setItem('authToken', response.token);
        localStorage.setItem('authUser', JSON.stringify(userData));

        // Thiết lập thời gian hết hạn (24 giờ)
        const expiryTime = new Date().getTime() + 24 * 60 * 60 * 1000;
        localStorage.setItem('tokenExpiry', expiryTime.toString());

        // Nếu "Ghi nhớ tôi" được chọn
        if (rememberMe) {
          localStorage.setItem('rememberMe', 'true');
        }

        return { success: true, user: userData };
      }
    } catch (err) {
      const errorMessage = err.message || 'Đăng nhập thất bại';
      setError(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setLoading(false);
    }
  }, []);

  // Logout function
  const logout = useCallback(() => {
    setUser(null);
    setToken(null);
    setError(null);

    // Xoá dữ liệu từ localStorage
    localStorage.removeItem('authToken');
    localStorage.removeItem('authUser');
    localStorage.removeItem('tokenExpiry');
    localStorage.removeItem('rememberMe');
  }, []);

  // Refresh token function
  const refreshToken = useCallback(async () => {
    try {
      const response = await refreshTokenAPI(token);

      if (response.success) {
        setToken(response.token);
        localStorage.setItem('authToken', response.token);

        // Cập nhật thời gian hết hạn
        const expiryTime = new Date().getTime() + 24 * 60 * 60 * 1000;
        localStorage.setItem('tokenExpiry', expiryTime.toString());

        return true;
      }
    } catch (err) {
      // Nếu refresh token thất bại, logout
      logout();
      return false;
    }
  }, [token, logout]);

  // Update user function
  const updateUser = useCallback((updatedUser) => {
    setUser(prev => ({ ...prev, ...updatedUser }));
    localStorage.setItem('authUser', JSON.stringify({
      ...user,
      ...updatedUser
    }));
  }, [user]);

  const value = {
    user,
    token,
    loading,
    error,
    isAuthenticated: !!token,
    login,
    logout,
    refreshToken,
    updateUser,
    setError
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth phải được sử dụng trong AuthProvider');
  }
  return context;
}
