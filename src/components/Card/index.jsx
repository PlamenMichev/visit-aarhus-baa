import './styles.css';
import PropTypes from 'prop-types';

const Card = ({ place, id }) => {
  const placeholder = './images/placeholder.png';
  return (
    <div className="card-wrapper">
      {place.Files[1]?.Uri === undefined ? (
        <div>
          <img src={placeholder} alt="pic" />
        </div>
      ) : (
        <div>
          <img src={place.Files[1]?.Uri} alt="pic" />
        </div>
      )}
      <div className="card-name-box">
        <p className="card-name">{place.Name}</p>
        <div className="card-description">{place.Descriptions[0]?.Text}</div>
      </div>
      <p key={id} style={{ display: 'none' }}></p>
    </div>
  );
};

Card.propTypes = {
  id: PropTypes.number.isRequired,
  place: PropTypes.object.isRequired
};

export default Card;
