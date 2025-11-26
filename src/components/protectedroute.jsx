import { Button } from "./ui/button";
import { useAuth } from "@/context/authcontext";

export default function ProtectedRoute({ children }) {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="text-4xl mb-4">⏳</div>
          <p className="text-gray-600">Đang tải...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center bg-white p-8 rounded-lg shadow-lg">
          <div className="text-4xl mb-4">🔒</div>
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Bạn cần đăng nhập</h1>
          <p className="text-gray-600 mb-6">Vui lòng đăng nhập để truy cập trang này</p>
          <Button className="bg-blue-600 hover:bg-blue-700">Đi tới trang đăng nhập</Button>
        </div>
      </div>
    );
  }

  return children;
}