import PropTypes from 'prop-types';
import styles from './Button.module.css';

const Button = ({ handleDeleteCard }) => {
  return (
    <button type="button" onClick={handleDeleteCard} className={styles.button}>
      Delete
    </button>
  );
};
Button.propTypes = {
  handleDeleteCard: PropTypes.func,
};

export default Button;
