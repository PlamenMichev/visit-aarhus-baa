import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase';
import { getFavouritesAsync } from '../../services/favouritesService';
import './index.css';

const UserFavourites = () => {
  const [favourites, setFavourites] = useState([]);
  const [user] = useAuthState(auth);

  useEffect(() => {
    const getFavourites = async () => {
      const favourites = await getFavouritesAsync(user.uid);
      // const allPaces = getAllPlaces();

      setFavourites(favourites);
    };

    if (user) {
      getFavourites();
    }
  }, [user]);
  return (
    <h1>
      {favourites.map((x) => (
        <h3 key={x.id}>{x.id}</h3>
      ))}
    </h1>
  );
};

export default UserFavourites;
