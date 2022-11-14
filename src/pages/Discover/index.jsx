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
  console.log(filteredPlaces);

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
            .map((places) => (
              <Card key={places.id} place={places} />
            ))}
        </div>
      </div>
    </>
  );
}

DiscoverPage.propTypes = {
  place: PropTypes.object.isRequired
};
