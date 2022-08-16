import { UserMenu } from 'components/UserMenu/UserMenu';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logOut } from 'redux/auth/auth-operations';
import { getIsLogged } from 'redux/auth/auth-selectors';

import png from '../../images/main.png';

import styles from './Navigation.module.css';
export const Navigation = () => {
  const isLogged = useSelector(getIsLogged);

  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logOut()).unwrap();
  };

  return (
    <div className={styles.navContainer}>
      {isLogged && <img className={styles.png} src={png} alt="1" />}
      <nav className={styles.nav}>
        {!isLogged && (
          <NavLink
            className={({ isActive }) =>
              isActive ? styles.activeNavLink : styles.navLink
            }
            to="/"
          >
            Sign In
          </NavLink>
        )}
        {!isLogged && (
          <NavLink
            className={({ isActive }) =>
              isActive ? styles.activeNavLink : styles.navLink
            }
            to="/login"
          >
            Log In
          </NavLink>
        )}
        {/* {isLogged ? <p>Here's your contacts</p> : <></>} */}
        {isLogged && <UserMenu />}
        {isLogged && (
          <button className={styles.btn} onClick={handleLogOut}>
            Log Out
          </button>
        )}
      </nav>
    </div>
  );
};
