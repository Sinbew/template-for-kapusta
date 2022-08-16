import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { Link, useLocation, useNavigate } from 'react-router-dom';
import { logIn } from 'redux/auth/auth-operations';
import { getIsLogged } from 'redux/auth/auth-selectors';
import { Contacts } from './Contacts';
import Icon from '@mdi/react';
import { mdiBook } from '@mdi/js';
import { TextField } from '@mui/material';

import styles from './Login.module.css';

export const Login = () => {
  const isLogged = useSelector(getIsLogged);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleChange = evt => {
    switch (evt.target.name) {
      case 'email':
        setEmail(evt.target.value);
        break;
      case 'password':
        setPassword(evt.target.value);
        break;
      default:
        return;
    }
  };

  const handleLoginSubmit = async evt => {
    evt.preventDefault();

    const userToEnter = { email, password };

    try {
      await dispatch(logIn(userToEnter)).unwrap();
      //   navigate('/contacts');
    } catch (error) {
      console.log('error');
    }
  };

  return (
    <>
      {!isLogged ? (
        <div className={styles.wrapperLogin}>
          <h1 className={styles.title}>Phonebook</h1>
          {/* <h2 className={styles.titleBackground}>Phonebook</h2> */}
          <Icon
            className={styles.titleBackground}
            path={mdiBook}
            title="User Profile"
            size={30}
            color="black"
          />

          <form onSubmit={handleLoginSubmit}>
            <TextField
              sx={{
                marginBottom: '10px',
              }}
              id="standard-basic"
              label="Email"
              variant="standard"
              onChange={handleChange}
              name="email"
              placeholder="Enter your email"
              type="email"
            />
            <TextField
              id="standard-basic"
              label="Password"
              variant="standard"
              onChange={handleChange}
              name="password"
              placeholder="Enter your password"
              type="password"
            />
            <button type="submit">Log in</button>
          </form>
        </div>
      ) : (
        <Contacts />
        // <h2>Hello, go to your {<Link to="/contacts">Contacts</Link>}</h2>
      )}
    </>
  );
};
