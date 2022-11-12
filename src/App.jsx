import HomePage from './pages/Home';
import LoginPage from './pages/Login';
import GamePage from './pages/Game';
import Nav from './components/Navigation';
import { Routes, Route } from 'react-router-dom';
import './styles.css';

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/game" element={<GamePage />} />
      </Routes>
    </>
  );
}

export default App;
