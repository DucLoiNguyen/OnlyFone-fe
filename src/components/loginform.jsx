import { Mail, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import LoginInput from "@/components/logininput";
import useLoginForm from "@/hooks/useloginform";

export default function LoginForm({ onSuccess }) {
  const loginForm = useLoginForm(onSuccess);

  return (
    <form className="space-y-6" onSubmit={loginForm.handleSubmit}>
      {loginForm.error && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-red-800 font-medium">⚠️ {loginForm.error}</p>
        </div>
      )}

      <LoginInput
        icon={Mail}
        type="email"
        label="Email"
        placeholder="example@gmail.com"
        value={loginForm.formData.email}
        onChange={e => loginForm.handleInputChange('email', e.target.value)}
        error={loginForm.formErrors.email}
      />

      <LoginInput
        icon={Lock}
        type="password"
        label="Mật khẩu"
        placeholder="********"
        value={loginForm.formData.password}
        onChange={e => loginForm.handleInputChange('password', e.target.value)}
        error={loginForm.formErrors.password}
      />

      <div className="flex justify-end">
        <a href="#" className="text-sm font-medium">
          Quên mật khẩu?
        </a>
      </div>

      <Button type="submit" disabled={loginForm.loading} className="w-full text-lg py-3">
        {loginForm.loading ? 'Đang đăng nhập...' : 'Đăng nhập'}
      </Button>
    </form>
  );
}