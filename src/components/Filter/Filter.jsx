import { useSelector, useDispatch } from 'react-redux';
import styles from './Filter.module.css';
import { filterAction } from 'redux/slice/filterSlice';
import { filterSelector } from 'redux/selectors/index';

export default function Filter() {
  const { filter } = useSelector(filterSelector);
  const dispatch = useDispatch();
  const handleChange = event => dispatch(filterAction(event.target.value));

  return (
    <label className={styles.label}>
      Find contacts by name
      <input
        onChange={handleChange}
        type="text"
        value={filter}
        className={styles.input}
      ></input>
    </label>
  );
}
