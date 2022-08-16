import { useState } from 'react';

import styles from './Form.module.css';
import { useDispatch, useSelector } from 'react-redux';

import { addContact } from 'redux/Contacts/contacts-operations';

export const Form = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(state => state.contacts.items);
  const dispatch = useDispatch();

  const handleChange = e => {
    switch (e.target.name) {
      case 'name':
        setName(e.target.value);
        break;
      case 'number':
        setNumber(e.target.value);
        break;
      default:
        return;
    }
  };

  const onSubmit = evt => {
    evt.preventDefault();

    const findContact = contacts?.some(
      obj => obj.name.toLowerCase() === name.toLowerCase()
    );

    if (findContact) {
      alert(`Sorry, ${name} is already in contacts`);
      return;
    }

    const user = { name, number };

    dispatch(addContact(user));
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={onSubmit} className={styles.form}>
      <input
        placeholder="Name"
        className={styles.formInput}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={name}
        onChange={handleChange}
      />

      <input
        placeholder="Number"
        className={styles.formInput}
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        value={number}
        onChange={handleChange}
      />

      <button className={styles.btn} type="submit">
        Add contact
      </button>
    </form>
  );
};
