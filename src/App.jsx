import DiscoverPage from './pages/Discover';
import LoginPage from './pages/Login';
import { Routes, Route, Navigate } from 'react-router-dom';
import { PATHS } from './utils/config';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path={PATHS.DiscoverPage} element={<DiscoverPage />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
