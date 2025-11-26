// LoginInput.jsx
import { Input } from "@/components/ui/input";

export default function LoginInput({
  icon: Icon,
  label,
  error,
  ...props
}) {
  return (
    <div className="space-y-1">
      {label && (
        <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
          {label}
        </label>
      )}

      <div className="
        flex items-center gap-2 px-3 border rounded-md
        bg-gray-50 dark:bg-neutral-800
        border-gray-300 dark:border-neutral-700
        focus-within:ring-2 focus-within:ring-blue-500
      ">
        <Icon size={18} className="text-gray-500 dark:text-gray-400" />
        <Input
          className="border-0 shadow-none focus-visible:ring-0 bg-transparent p-0 text-gray-900 dark:text-gray-100"
          {...props}
        />
      </div>

      {error && (
        <p className="text-sm text-red-600 dark:text-red-500">{error}</p>
      )}
    </div>
  );
}
