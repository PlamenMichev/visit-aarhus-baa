import { NavLink } from 'react-router-dom';
import './styles.css';

export default function Nav() {
  return (
    <nav className="navigation">
      <section className="nav">
        <div className="navText">
          <NavLink to="/">
            <img src="./images/homebtn.svg" />
          </NavLink>

          <NavLink to="/game">Game</NavLink>
        </div>
      </section>
    </nav>
  );
}
