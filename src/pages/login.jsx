import { useNavigate } from "react-router-dom";
import LeftBanner from "@/components/leftbanner";
import LoginCard from "@/components/logincard";

export default function Login() {
  const navigate = useNavigate();

  const handleloginsuccess = (userData) => {
    console.log('✅ Đăng nhập thành công:', userData);
    navigate('/', { replace: true });
  }

  return (
    <div className="min-h-screen flex bg-gray-50 dark:bg-neutral-900">
      {/* Left side */}
      <div className="hidden lg:flex w-1/2">
        <LeftBanner />
      </div>

      {/* Right side (Centered Login Card) */}
      <div className="flex-1 flex items-center justify-center p-6 lg:p-12">
        <LoginCard onSuccess={handleloginsuccess} />
      </div>
    </div>
  );
}