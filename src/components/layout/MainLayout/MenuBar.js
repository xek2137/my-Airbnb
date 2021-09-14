import React from 'react';
import styles from './MenuBar.module.scss';
import useLogin from '../../../hooks/useLogin';

const MenuBar = () => {
  const [login, setLogin] = useLogin();

  const loginDirect = (e) => {
    e.preventDefault();
    setLogin(true);
  };
  const logoutDirect = (e) => {
    e.preventDefault();
    setLogin(false);
  };

  return (
    <div className={styles.menuContainer}>
      <ul className={styles.menu}>
        <li className={styles.menuItem}>
          <a href="#">Home</a>
        </li>
        <li className={styles.menuItem}>
          {login
            ? <a href="#" onClick={logoutDirect}>Log out</a>
            : <a href="#" onClick={loginDirect}>Log in</a>
          }
        </li>
      </ul>
    </div>
  );
};

export default MenuBar;
