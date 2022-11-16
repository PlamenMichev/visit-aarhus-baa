import React, { useEffect, useState } from 'react';
import Card from '../../components/Card';
import { getAllPlaces } from '../../services/VisitAarhusService';
import SearchBar from '../../components/Search';
import PropTypes from 'prop-types';
import './styles.css';

export default function DiscoverPage() {
  const [places, setPlaces] = useState([]);
  const [originalPlaces, setOriginalPlaces] = useState([]);
  const [filteredPlaces, setFilteredPlaces] = useState([]);
  const [searchInput, setSearchInput] = useState('');
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
                        .map((places) => (
                          <Card key={places.id} place={places} />
                        ))}
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
