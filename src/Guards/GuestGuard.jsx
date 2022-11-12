import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate } from 'react-router-dom';
import Loader from '../components/Loader';
import { auth } from '../firebase';
import { PATHS } from '../utils/config';

// eslint-disable-next-line react/prop-types
const GuestGuard = ({ children }) => {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return <Loader />;
  }

  if (!loading && user !== null) {
    return <Navigate to={PATHS.DiscoverPage} />;
  }

  return <>{children}</>;
};

export default GuestGuard;
