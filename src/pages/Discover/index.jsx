import React, { useEffect, useState } from 'react';
import Card from '../../components/Card';
import { getAllPlaces } from '../../services/VisitAarhusService';
import SearchBar from '../../components/Search';
import './styles.css';

export default function DiscoverPage() {
  const [places, setPlaces] = useState([]);
  const [originalPlaces, setOriginalPlaces] = useState([]);
  const [filteredPlaces, setFilteredPlaces] = useState([]);
  const [searchInput, setSearchInput] = useState('');

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

  const renderFilteredPlaces = () => {
    return (
      <div className="place-cards">
        {[...filteredPlaces].map((places, i) => {
          return <Card key={i} place={places} />;
        })}
      </div>
    );
  };

  // <div className="dataResult">{renderFilteredPins(selectedCategory, {})}</div>

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
      <h2>Places To Eat</h2>
      <div>
        <div>{renderFilteredPlaces(places)}</div>
      </div>
    </>
  );
}
