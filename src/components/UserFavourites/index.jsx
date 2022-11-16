import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase';
import { getFavouritesAsync } from '../../services/favouritesService';
import { getAllPlaces } from '../../services/VisitAarhusService';
import Card from '../Card';
import './index.css';

const UserFavourites = () => {
  const [favourites, setFavourites] = useState([]);
  const [user] = useAuthState(auth);

  useEffect(() => {
    const getFavourites = async () => {
      const favourites = await getFavouritesAsync(user.uid);
      const allPlces = await getAllPlaces();

      setFavourites(
        allPlces.filter((x) => favourites.filter((fav) => fav.placeId === x.id).length > 0)
      );
    };

    if (user) {
      getFavourites();
    }
  }, [user]);
  return (
    <h1 className="favorite">
      {favourites.map((place) => (
        <Card key={place.id} favourite={true} loggedIn={false} place={place} />
      ))}
    </h1>
  );
};

export default UserFavourites;
