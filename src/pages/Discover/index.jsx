import React, { useEffect, useState } from 'react';
import Card from '../../components/Card';
import { getAllPlaces } from '../../services/VisitAarhusService';
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
  const [shownAllCategory, setShownAllCategory] = useState('');

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

  const categories = [...new Set(places.map((q) => q.category))];

  const renderFilteredPlaces = () => {
    return (
      <div>
        <div className="place-cards">
          {[...filteredPlaces].map((places, i) => {
            return <Card key={i} place={places} />;
          })}
        </div>
      </div>
    );
  };
  console.log(shownAllCategory);
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

      <div id="render">
        {searchInput ? (
          renderFilteredPlaces(filteredPlaces, {})
        ) : (
          <div>
            <div className="introtext-container">
              <p className="introtext-head">Every day wonder of Aarhus</p>
              <p className="introtext-container-child">
                Welcome to Aarhus, the City of Everyday Wonder Get ready for simple pleasures and
                unexpected delights. We are here to make your visit to Aarhus is the most
                wonder-full experience. Before you pack your bags be sure to check out all of ideas
                for visitable places. Ready?{' '}
                <span style={{ color: 'red' }}>Lets get exploring.</span>
              </p>
            </div>
            {categories.map(
              (category, index) =>
                (shownAllCategory === '' || shownAllCategory === category) && (
                  <div key={category + index}>
                    <div className="category-head">
                      <h2>{category}</h2>
                      <button
                        className="changeBtn"
                        onClick={() =>
                          shownAllCategory === ''
                            ? setShownAllCategory(category)
                            : setShownAllCategory('')
                        }>
                        {shownAllCategory === '' ? 'See All' : 'Hide'}
                      </button>
                      <div></div>
                    </div>
                    <div className="place-cards">
                      {places
                        .filter((place) => place.category === category)
                        .splice(0, shownAllCategory === category ? 100000 : 3)
                        .map((places) => {
                          const favourite =
                            favourites?.filter((x) => x.placeId === places.id).length > 0;
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
                )
            )}
          </div>
        )}
      </div>
    </>
  );
}

DiscoverPage.propTypes = {
  place: PropTypes.object
};
