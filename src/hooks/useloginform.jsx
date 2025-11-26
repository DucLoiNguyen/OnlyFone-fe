import { useState, useCallback } from "react";
import { useAuth } from "@/context/authcontext";

export default function useLoginForm(onSuccess) {
  const { login, loading, error } = useAuth();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });
  const [formErrors, setFormErrors] = useState({});

  const validateForm = useCallback(() => {
    const newErrors = {};

    if (!formData.email) {
      newErrors.email = 'Email không được để trống';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email không hợp lệ';
    }

    if (!formData.password) {
      newErrors.password = 'Mật khẩu không được để trống';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Mật khẩu phải tối thiểu 6 ký tự';
    }

    setFormErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData.email, formData.password]);

  const handleInputChange = useCallback((field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    if (formErrors[field]) {
      setFormErrors(prev => ({
        ...prev,
        [field]: ''
      }));
    }
  }, [formErrors]);

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const result = await login(formData.email, formData.password, formData.rememberMe);
    if (result.success) {
      onSuccess(result.user);
    }
  }, [formData, validateForm, login, onSuccess]);

  return {
    formData,
    formErrors,
    loading,
    error,
    handleInputChange,
    handleSubmit,
    setFormData
  };
}