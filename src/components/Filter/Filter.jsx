import { useDispatch, useSelector } from 'react-redux';
import { filterContacts } from 'redux/contacts/contactsSlice';
import css from './Filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);

  return (
    <label className={css.label}>
      Find contacts by name
      <input
        className={css.input}
        onChange={event => dispatch(filterContacts(event.target.value))}
        value={filter}
        type="text"
        name="filter"
      />
    </label>
  );
};
