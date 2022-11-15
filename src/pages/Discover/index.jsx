import React, { useEffect, useState } from 'react';
import Card from '../../components/Card';
import { getAllPlaces } from '../../services/visitAarhusService';
import SearchBar from '../../components/Search';
import PropTypes from 'prop-types';
import './styles.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase';
import {
  addToFavouritesAsync,
  getFavouritesAsync,
  removeFromFavouritesAsync
} from '../../services/favouritesService';

export default function DiscoverPage() {
  const [places, setPlaces] = useState([]);
  const [originalPlaces, setOriginalPlaces] = useState([]);
  const [filteredPlaces, setFilteredPlaces] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [user] = useAuthState(auth);
  const [favourites, setFavourites] = useState([]);
  const [refetch, setRefetch] = useState(true);

  filteredPlaces;
  useEffect(() => {
    async function getPlaces() {
      const data = await getAllPlaces();
      setPlaces(data);

      if (data === false) {
        <p>Server side error, please refresh</p>;
      } else {
        setOriginalPlaces(data);
        setFilteredPlaces(data);
      }
    }
    getPlaces();
  }, []);

  useEffect(() => {
    const getFavourites = async () => {
      const favourites = await getFavouritesAsync(user.uid);

      setFavourites(favourites);
      setRefetch(false);
    };

    if (user && refetch) {
      getFavourites();
    }
  }, [user, refetch]);

  const addToFavourites = async (placeId) => {
    await addToFavouritesAsync(user.uid, placeId);
    setRefetch(true);
  };

  const removeFromFavourites = async (docId) => {
    await removeFromFavouritesAsync(docId);
    setRefetch(true);
  };

  // const renderFilteredPlaces = () => {
  //   return (
  //     <div>
  //       <div className="place-cards">
  //         {[...filteredPlaces].map((places, i) => {
  //           return <Card key={i} place={places} />;
  //         })}
  //       </div>
  //     </div>
  //   );
  // };

  return (
    <>
      <div>
        <img className="header-img" src="./images/header.jpg" alt="Header pic " />
        <SearchBar
          placeholder="Search..."
          originalPlaces={originalPlaces}
          setFilteredPlaces={setFilteredPlaces}
          searchInput={searchInput}
          setSearchInput={setSearchInput}
        />
      </div>

      <div>
        <div className="place-cards">
          {places
            .filter((place) => place.category === 'Events')
            .map((places) => {
              const favourite = favourites?.filter((x) => x.placeId === places.id).length > 0;
              return (
                <Card
                  favourite={favourite}
                  loggedIn={user}
                  addToFavourites={(placeId) => addToFavourites(placeId)}
                  onButtonClick={() =>
                    favourite
                      ? removeFromFavourites(
                          favourites?.filter((x) => x.placeId === places.id)[0].id
                        )
                      : addToFavourites(places.id)
                  }
                  key={places.id}
                  place={places}
                />
              );
            })}
        </div>
      </div>
    </>
  );
}

DiscoverPage.propTypes = {
  place: PropTypes.object.isRequired
};
