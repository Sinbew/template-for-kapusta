import { Form } from 'components/Form/Form';
import { ThreeDots } from 'react-loader-spinner';
import { useSelector } from 'react-redux';
import { Filter } from 'components/Filter/Filter';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { getIsLogged } from 'redux/auth/auth-selectors';

import styles from './Contacts.module.css';

export const Contacts = () => {
  const loading = useSelector(state => state.contacts.pending);
  const isLogged = useSelector(getIsLogged);

  return (
    <>
      <div className={styles.wrapper}>
        <span className={styles.span}>Phonebook</span>
        {loading && (
          <ThreeDots
            height="80"
            width="80"
            radius="9"
            color="royalblue"
            ariaLabel="three-dots-loading"
            wrapperStyle={{
              display: 'flex',
              justifyContent: 'center',
            }}
            wrapperClassName=""
            visible={true}
          />
        )}
        <div className={styles.innerWrapperForm}>
          <Form />
        </div>

        <div className={styles.innerWrapperContacts}>
          <Filter />

          {isLogged && <ContactsList />}
        </div>
      </div>
    </>
  );
};

//  <div>
//    <div
//      style={{
//        display: 'flex',
//        justifyContent: 'center',
//        flexWrap: 'wrap',
//      }}
//    >
//      <Form />

//      {loading && (
//        <ThreeDots
//          height="80"
//          width="80"
//          radius="9"
//          color="royalblue"
//          ariaLabel="three-dots-loading"
//          wrapperStyle={{
//            display: 'flex',
//            justifyContent: 'center',
//          }}
//          wrapperClassName=""
//          visible={true}
//        />
//      )}
//    </div>

//    <div
//      style={{
//        marginTop: '50px',
//        backgroundColor: '#e5e5e5',

//        width: '30%',
//        marginLeft: 'auto',
//        marginRight: 'auto',
//      }}
//    >
//      <Filter />

//      <ContactsList />
//    </div>
//  </div>;
