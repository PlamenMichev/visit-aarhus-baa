import './styles.css';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prop-types
const Card = ({ place, onButtonClick, loggedIn, favourite }) => {
  const placeholder = './images/placeholder.png';
  return (
    <div className="card-wrapper">
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
        <p className="card-name">{place.name}</p>
        <div className="card-description">{place.description}</div>
        {loggedIn && (
          <img
            style={{ width: '40px', cursor: 'pointer', margin: '10px auto' }}
            onClick={() => onButtonClick()}
            src={!favourite ? './images/empty-heart.png' : './images/filled-heart.png'}
          />
        )}
      </div>
    </div>
  );
};

Card.propTypes = {
  place: PropTypes.object.isRequired
};

export default Card;
