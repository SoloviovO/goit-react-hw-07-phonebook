import { useDispatch, useSelector } from 'react-redux';
import { selectContactsFilter } from 'redux/contacts/contactsSelectors';
import { filterContacts } from 'redux/contacts/contactsSlice';
import css from './Filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectContactsFilter);

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
