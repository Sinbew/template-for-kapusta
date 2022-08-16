import { ContactsListItem } from './ContactsListItem';
import styles from './ContactsList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/Contacts/contacts-operations';
import { useEffect } from 'react';
import { getContacts } from 'redux/Contacts/contacts-operations';

export const ContactsList = () => {
  const contacts = useSelector(state => state.contacts.items);

  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  const handlerDelete = id => {
    dispatch(deleteContact(id));
  };

  const filterContacts = () => {
    return contacts.filter(
      contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase()) ||
        contact.number.includes(filter)
    );
  };

  return (
    <ul className={styles.ul}>
      {filterContacts()?.map(({ id, name, number }) => {
        return (
          <ContactsListItem
            key={id}
            id={id}
            name={name}
            number={number}
            deleteContact={handlerDelete}
          />
        );
      })}
    </ul>
  );
};

// ContactsList.propTypes = {
//   filterContacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ),
// };
