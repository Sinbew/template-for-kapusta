import styles from './Filter.module.css';

import { useDispatch, useSelector } from 'react-redux';

import { filterContacts } from 'redux/Contacts/contacts-actions';
export const Filter = () => {
  const name = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  const handlerInput = evt => {
    dispatch(filterContacts(evt.target.value));
  };

  return (
    <label className={styles.filterLabel}>
      <span className={styles.span}>Find contacts by name or phone-number</span>
      <input
        className={styles.filterInput}
        placeholder="Search"
        type="text"
        name="filter"
        value={name}
        onChange={handlerInput}
      />
    </label>
  );
};
