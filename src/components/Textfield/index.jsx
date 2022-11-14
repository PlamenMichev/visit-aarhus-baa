import PropTypes from 'prop-types';
import './styles.css';

const TextField = ({ id, label, placeholder, type, onChange, value, isDisabled, isTextArea }) => {
  return (
    <div>
      {/*If label is not empty show it */}
      {label !== '' && (
        <label className="textfield-label" htmlFor={id}>
          {label}
        </label>
      )}

      {isTextArea ? (
        <textarea
          className="textfield-input"
          id={id}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={isDisabled}
          rows={5}
        />
      ) : (
        <div className="searchInput">
          <input
            className="textfield-input"
            id={id}
            placeholder={placeholder}
            type={type}
            value={value}
            onChange={onChange}
            disabled={isDisabled}></input>
        </div>
      )}
    </div>
  );
};

TextField.propTypes = {
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.oneOf(['text', 'email']),
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  onClear: PropTypes.func,
  isDisabled: PropTypes.bool,
  isTextArea: PropTypes.bool
};

TextField.defaultProps = {
  type: 'text',
  isDisabled: false,
  isTextArea: false
};

export default TextField;
