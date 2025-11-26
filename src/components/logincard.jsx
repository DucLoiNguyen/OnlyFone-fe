import { Smartphone } from "lucide-react";
import LoginForm from "@/components/loginform";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

export default function LoginCard({ onSuccess }) {
  return (
    <Card className="
      w-full max-w-md p-6 backdrop-blur-lg 
      bg-white/80 dark:bg-neutral-800/80 
      border border-gray-200/60 dark:border-neutral-700
      shadow-xl rounded-xl
    ">
      <CardHeader className="text-center">
        <div className="flex justify-center items-center gap-2 mb-2">
          <Smartphone className="" size={32} />
          <span className="text-3xl font-bold">
            OnlyFone
          </span>
        </div>

        <CardTitle className="text-2xl font-bold text-gray-900 dark:text-gray-100">
          Đăng nhập
        </CardTitle>
        <CardDescription className="text-gray-600 dark:text-gray-300">
          Chào mừng bạn quay trở lại
        </CardDescription>
      </CardHeader>

      <CardContent>
        <LoginForm onSuccess={onSuccess} />
      </CardContent>
    </Card>
  );
}