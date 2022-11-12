import HomePage from './pages/Home';
import RegisterPage from './pages/Register';
import ResetPasswordPage from './pages/ResetPassword';
import LoginPage from './pages/Login';
import { Routes, Route } from 'react-router-dom';
import GuestGuard from './Guards/GuestGuard';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/login"
        element={
          <GuestGuard>
            <LoginPage />
          </GuestGuard>
        }
      />
      <Route
        path="/register"
        element={
          <GuestGuard>
            <RegisterPage />
          </GuestGuard>
        }
      />
      <Route
        path="/password-reset"
        element={
          <GuestGuard>
            <ResetPasswordPage />
          </GuestGuard>
        }
      />
    </Routes>
  );
}

export default App;
