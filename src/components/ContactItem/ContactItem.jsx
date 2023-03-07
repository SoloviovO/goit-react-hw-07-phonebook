import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/contactsThunk';
import css from './ContactItem.module.css';

export const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <li key={id} className={css.item}>
      <p className={css.text}>
        {name}: {number}
      </p>
      <button
        className={css.btn}
        onClick={() => dispatch(deleteContact(id))}
        type="button"
      >
        Delete
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
};
