import s from './Filter.module.css';
import { filterValue } from '../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/selector';

export default function Filter() {
  const dispatch = useDispatch();
  const value = useSelector(getFilter);

  const inputChange = e => {
    const { value } = e.currentTarget;

    dispatch(filterValue(value));
  };
  return (
    <>
      <h3>Find contacts by name</h3>
      <input
        className={s.input}
        name="filter"
        value={value}
        type="input"
        onChange={inputChange}
      ></input>
    </>
  );
}
