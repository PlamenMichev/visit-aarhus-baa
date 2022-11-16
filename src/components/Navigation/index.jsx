import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink } from 'react-router-dom';
import { auth, logout } from '../../firebase';
import { PATHS } from '../../utils/config';
import './styles.css';

export default function Nav() {
  const [user, loading] = useAuthState(auth);

  const logoutFunc = (e) => {
    e.preventDefault();
    e.stopPropagation();
    logout();
  };

  return (
    <nav className="navigation">
      <section className="nav">
        <div className="navText">
          <div className="nav-img">
            <NavLink to={PATHS.DiscoverPage}>
              <img
                className="logo-image"
                alt="flag of denmark with in the shape of a heart"
                src="./images/homebtn.svg"
              />
            </NavLink>
          </div>
          <div className="nav-text">
            <NavLink to={PATHS.GamePage}>Game</NavLink>
            <div>
              {!loading ? (
                user ? (
                  <div className="user-actions">
                    <NavLink to={PATHS.ProfilePage}>
                      <img
                        height="40px"
                        className="logo-img"
                        alt="gender neutral user avatar"
                        src="./images/user-avatar.png"
                      />
                    </NavLink>
                    <NavLink onClick={logoutFunc} to={PATHS.RegisterPage}>
                      Log out
                    </NavLink>
                  </div>
                ) : (
                  <div className="user-actions">
                    <NavLink to={PATHS.LoginPage}>Login</NavLink>{' '}
                    <NavLink to={PATHS.RegisterPage}>Register</NavLink>
                  </div>
                )
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      </section>
    </nav>
  );
}
