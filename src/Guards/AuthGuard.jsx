import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate } from 'react-router-dom';
import { auth } from '../firebase';
import PropTypes from 'prop-types'; // ES6
import Loader from '../components/Loader';
import { PATHS } from '../utils/config';

// eslint-disable-next-line react/prop-types
const AuthGuard = ({ children }) => {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return <Loader />;
  }

  if (!loading && !user) {
    return <Navigate to={PATHS.DiscoverPage} />;
  }

  return <>{children}</>;
};

AuthGuard.propTypes = {
  children: PropTypes.any
};

export default AuthGuard;
