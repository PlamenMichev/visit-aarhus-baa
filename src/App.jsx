import DiscoverPage from './pages/Discover';
import LoginPage from './pages/Login';
import GamePage from './pages/Game';
import Nav from './components/Navigation';
import { Routes, Route } from 'react-router-dom';
import { PATHS } from './utils/config';
import './styles.css';

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path={PATHS.DiscoverPage} element={<DiscoverPage />} />
        {/* <Route path="*" element={<Navigate to="/" />} /> */}
        <Route path="/game" element={<GamePage />} />
      </Routes>
    </>
  );
}

export default App;
