import { ContactItem } from 'components/ContactItem/ContactItem';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilteredContacts } from 'redux/contacts/contactsSelectors';
import { fetchContacts } from 'redux/contacts/contactsThunk';
import css from './ContactList.module.css';

export const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ul className={css.list}>
      {filteredContacts.length > 0 ? (
        filteredContacts.map(({ id, name, phone }) => (
          <ContactItem key={id} id={id} name={name} number={phone} />
        ))
      ) : (
        <div className={css.text}>Contacts not found</div>
      )}
    </ul>
  );
};
