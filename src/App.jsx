import HomePage from './pages/Home';
import RegisterPage from './pages/Register';
import ResetPasswordPage from './pages/ResetPassword';
import LoginPage from './pages/Login';
import { Routes, Route } from 'react-router-dom';
import AuthGuard from './Guards/AuthGuard';
import GuestGuard from './Guards/GuestGuard';

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <AuthGuard>
            <HomePage />
          </AuthGuard>
        }
      />
      <Route
        path="/login"
        element={
          <GuestGuard>
            <LoginPage />
          </GuestGuard>
        }
      />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/password-reset" element={<ResetPasswordPage />} />
    </Routes>
  );
}

export default App;
