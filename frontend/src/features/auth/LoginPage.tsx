/**
 * LoginPage.tsx
 * Top-level page: composes the auth card layout + LoginForm.
 * Uses the useLogin hook for all logic; renders only structure and layout.
 */

import React from 'react';
import Logo from '../../components/ui/Logo';
import LoginForm from './components/LoginForm';
import { useLogin } from './hooks/useLogin';
import type { TokenResponse } from '../../services/auth.service';

export interface LoginPageProps {
  /** Called after a successful login with the server response */
  onLoginSuccess?: (data: TokenResponse) => void;
  /** Navigate to signup page */
  onSignupClick?: () => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onLoginSuccess, onSignupClick }) => {
  const { form, isLoading, error, handleChange, handleSubmit } = useLogin(onLoginSuccess);

  return (
    <div
      id="login-page"
      className="relative min-h-screen flex items-center justify-center px-4 bg-[#050e0a] overflow-hidden"
    >
      {/* Background glow orbs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-[#3ddc84]/6 blur-[120px]" />
        <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full bg-[#3ddc84]/4 blur-[120px]" />
      </div>

      {/* Card */}
      <div
        className="relative z-10 w-full max-w-md rounded-2xl border border-white/10
          bg-white/4 backdrop-blur-xl shadow-2xl px-8 py-10"
      >
        {/* Header */}
        <div className="flex flex-col items-center gap-4 mb-8">
          <Logo />
          <div className="text-center">
            <h1 className="text-2xl font-bold text-white">Welcome back</h1>
            <p className="text-white/50 text-sm mt-1">Sign in to your InterXAI account</p>
          </div>
        </div>

        {/* Form */}
        <LoginForm
          form={form}
          isLoading={isLoading}
          error={error}
          onChange={handleChange}
          onSubmit={handleSubmit}
          onSignupClick={onSignupClick}
        />
      </div>

      {/* Footer note */}
      <p className="absolute bottom-6 text-white/20 text-xs text-center px-4">
        By signing in you agree to our{' '}
        <a href="#terms" className="underline hover:text-white/40 transition-colors">Terms</a>{' '}
        and{' '}
        <a href="#privacy" className="underline hover:text-white/40 transition-colors">Privacy Policy</a>.
      </p>
    </div>
  );
};

export default LoginPage;
