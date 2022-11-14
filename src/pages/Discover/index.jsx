import React, { useEffect, useState } from 'react';
import Card from '../../components/Card';
import { getAllPlaces } from '../../services/VisitAarhusService';
import './styles.css';

export default function DiscoverPage() {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    async function getPlaces() {
      const data = await getAllPlaces();
      setPlaces(data);
    }
    getPlaces();
  }, []);

  return (
    <>
      <h2>Places To Eat</h2>
      <div className="place-cards">
        {places.map((place) => (
          <Card place={place} key={place.id} />
        ))}
      </div>
    </>
  );
}
