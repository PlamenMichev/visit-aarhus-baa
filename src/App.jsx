import DiscoverPage from './pages/Discover';
import RegisterPage from './pages/Register';
import ResetPasswordPage from './pages/ResetPassword';
import LoginPage from './pages/Login';
import { Routes, Route, Navigate } from 'react-router-dom';
import GuestGuard from './Guards/GuestGuard';
import GamePage from './pages/Game';
import Nav from './components/Navigation';
import { PATHS } from './utils/config';
import './styles.css';
import ProfilePage from './pages/Profile';

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path={PATHS.DiscoverPage} element={<DiscoverPage />} />
        <Route
          path={PATHS.LoginPage}
          element={
            <GuestGuard>
              <LoginPage />
            </GuestGuard>
          }
        />
        <Route
          path={PATHS.RegisterPage}
          element={
            <GuestGuard>
              <RegisterPage />
            </GuestGuard>
          }
        />
        <Route
          path={PATHS.ResetPasswordPage}
          element={
            <GuestGuard>
              <ResetPasswordPage />
            </GuestGuard>
          }
        />
        <Route path={PATHS.GamePage} element={<GamePage />} />
        <Route path={PATHS.ProfilePage} element={<ProfilePage />} />
        <Route path="*" element={<Navigate to={PATHS.DiscoverPage} />} />
      </Routes>
    </>
  );
}

export default App;
