import './styles.css';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prop-types
const Card = ({ place, onButtonClick, loggedIn, favourite }) => {
  const placeholder = './images/placeholder.png';
  return (
    <div className="card-wrapper">
      <p>{place.category}</p>
      {place.pictures === undefined ? (
        <div>
          <img src={placeholder} alt="pic" />
        </div>
      ) : (
        <div>
          <img
            src={place.pictures}
            onError={({ currentTarget }) => {
              currentTarget.onerror = null; // prevents looping
              currentTarget.src = placeholder;
            }}
            alt={place.name}
          />
        </div>
      )}
      <div className="card-name-box">
        {loggedIn && (
          <button onClick={() => onButtonClick()}>
            {!favourite ? 'Add to fav' : 'Remove from fav'}
          </button>
        )}
        <p className="card-name">{place.name}</p>
        <div className="card-description">{place.description}</div>
      </div>
    </div>
  );
};

Card.propTypes = {
  place: PropTypes.object.isRequired
};

export default Card;
