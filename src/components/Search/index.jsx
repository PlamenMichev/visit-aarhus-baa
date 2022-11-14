import PropTypes from 'prop-types';
import React from 'react';
import TextField from '../Textfield';
import './styles.css';

function SearchBar({
  placeholder,
  originalPlaces,
  setFilteredPlaces,
  searchInput,
  setSearchInput
}) {
  const handleFilter = (event) => {
    const wordEntered = event.target.value;
    setSearchInput(wordEntered);

    const newFilter = originalPlaces.filter((value) => {
      return value.name?.toLowerCase().includes(wordEntered.toLowerCase());
    });

    setFilteredPlaces(newFilter);
  };

  const clearInput = () => {
    setSearchInput('');
    setFilteredPlaces(originalPlaces);
  };

  return (
    <TextField
      id="search"
      className="textfield-input"
      onChange={handleFilter}
      onClear={clearInput}
      value={searchInput}
      placeholder={placeholder}
      type="search"
    />
  );
}

SearchBar.propTypes = {
  placeholder: PropTypes.string,
  originalPlaces: PropTypes.array,
  setFilteredPlaces: PropTypes.func,
  searchInput: PropTypes.string,
  setSearchInput: PropTypes.func
};

export default SearchBar;
