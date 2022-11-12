import React, { useEffect, useState } from 'react';
import Card from '../../components/Card';
import './styles.css';

export default function DiscoverPage() {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    async function getPlaces() {
      const url =
        'https://raw.githubusercontent.com/manypossibles/designops/master/assets/data/en/data.json';
      const response = await fetch(url);
      const data = await response.json();
      const filteredrest = [];

      try {
        for (var i = 0; i < data.length; i++) {
          var place = data[i];
          // console.log(place.Name + ' ' + place.MainCategory.Name);
          filteredrest.push(place);
        }
      } catch (error) {
        console.log('Oh come on! These should be easy peeps! What');
      }
      setPlaces(filteredrest);
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
