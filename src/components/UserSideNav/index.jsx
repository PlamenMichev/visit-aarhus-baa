import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, logout } from '../../firebase';
import { NavLink, useNavigate } from 'react-router-dom';
import './index.css';
import { PATHS } from '../../utils/config';
import Loader from '../Loader';
import { PROFILE_TABS } from '../../pages/Profile';

// eslint-disable-next-line react/prop-types
const UserSideNav = ({ setCurrentTab }) => {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  return loading ? (
    <Loader />
  ) : (
    <div className="side-nav-wrapper-inner">
      <div className="avatar-wrapper">
        <img
          height="40px"
          className="logo-image-profile"
          alt="gender neutral user avatar"
          src="./images/user-avatar.png"
        />
        <h3>{user.email}</h3>
      </div>

      <div className="nav-links">
        <NavLink onClick={() => setCurrentTab(PROFILE_TABS[0])} className="user-profile-link">
          Favourites
        </NavLink>
      </div>

      <div className="user-actions-nav">
        <NavLink
          className="user-profile-link"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            logout();
            navigate(PATHS.DiscoverPage);
          }}>
          Log out
        </NavLink>
      </div>
    </div>
  );
};

export default UserSideNav;
