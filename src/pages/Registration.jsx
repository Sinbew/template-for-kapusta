import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signIn } from 'redux/auth/auth-operations';
import { TextField } from '@mui/material';
import styles from './Registration.module.css';

import Icon from '@mdi/react';
import { mdiBook } from '@mdi/js';

export const Registration = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleChange = evt => {
    switch (evt.target.name) {
      case 'name':
        setName(evt.target.value);
        break;
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

  const handleSubmit = evt => {
    evt.preventDefault();

    const user = { name, email, password };

    dispatch(signIn(user));
  };

  return (
    <div className={styles.wrapperFormRegister}>
      <Icon
        className={styles.titleBackground}
        path={mdiBook}
        title="User Profile"
        size={30}
        color="black"
      />
      <form onSubmit={handleSubmit}>
        <TextField
          sx={{
            marginBottom: '10px',
          }}
          id="standard-basic"
          label="Name"
          variant="standard"
          onChange={handleChange}
          name="name"
          placeholder="Enter your name"
          type="text"
        />
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
          sx={{
            marginBottom: '10px',
          }}
          id="standard-basic"
          label="Password"
          variant="standard"
          onChange={handleChange}
          name="password"
          placeholder="Create a password"
          type="password"
        />
        <button type="submit">Sign in</button>
      </form>
    </div>
  );
};
