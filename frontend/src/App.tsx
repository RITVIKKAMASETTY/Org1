import { useState } from 'react';
import LandingPage from './features/LandingPage';
import LoginPage from './features/auth/LoginPage';
import type { TokenResponse } from './services/auth.service';

type Page = 'landing' | 'login' | 'dashboard';

function App() {
  const [page, setPage] = useState<Page>('landing');

  const handleLoginSuccess = (data: TokenResponse) => {
    console.log('Logged in as:', data.user.username);
    // TODO: redirect to dashboard / protected route
    setPage('dashboard');
  };

  if (page === 'login') {
    return (
      <LoginPage
        onLoginSuccess={handleLoginSuccess}
        onSignupClick={() => setPage('landing')}
      />
    );
  }

  if (page === 'dashboard') {
    return (
      <div className="min-h-screen bg-[#050e0a] flex items-center justify-center text-white text-xl font-semibold">
        ✅ Logged in successfully! Dashboard coming soon.
      </div>
    );
  }

  // Default: landing page — pass navigateTo so CTA can go to login
  return <LandingPage onLoginClick={() => setPage('login')} />;
}

export default App;
