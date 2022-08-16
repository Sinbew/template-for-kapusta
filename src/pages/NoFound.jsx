import { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { getIsLogged } from 'redux/auth/auth-selectors';

import styles from './NotFound.module.css';

export const NotFound = () => {
  const isLogged = useSelector(getIsLogged);
  const navigate = useNavigate();

  const [seconds, setSeconds] = useState(3);

  useEffect(() => {
    if (seconds > 0) {
      setTimeout(() => setSeconds(seconds - 1), 1000);
      return;
    }
  }, [seconds]);

  useEffect(() => {
    setTimeout(() => {
      if (isLogged) {
        navigate('/contacts');
        return;
      } else {
        navigate('/login');
        return;
      }
    }, 3000);
  }, [isLogged, navigate]);

  return (
    <>
      <h2 className={styles.error}>404</h2>
      {isLogged ? (
        <h3 className={styles.title}>
          Page not found, you will be redirected to your{' '}
          <NavLink className={styles.span} to="/contacts">
            contacts
          </NavLink>
          in {seconds} seconds...
        </h3>
      ) : (
        <h3 className={styles.title}>
          Page not found, you will be redirected to your{' '}
          <NavLink className={styles.span} to="/login">
            login
          </NavLink>
          page in {seconds} seconds...
        </h3>
      )}
    </>
  );
};
