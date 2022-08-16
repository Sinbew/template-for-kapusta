import { useSelector } from 'react-redux';
import { getUserName } from 'redux/auth/auth-selectors';
import styles from './UserMenu.module.css';
export const UserMenu = () => {
  const user = useSelector(getUserName);

  return (
    <>
      <div className={styles.infoWrapper}>
        <div className={styles.wrapper}>
          <span>{user[0]}</span>
        </div>
        <h2>
          Greetings, <br /> {user}!
        </h2>
      </div>
      <h3 className={styles.user}>{user}</h3>
    </>
  );
};
