import React, {useContext} from 'react';
import styles from './MainLayout.module.scss';
import {Container} from '@chakra-ui/react';
import LoggedInContext from '../../../context/loggedInContext';

const MainLayout = () => {
  const login = useContext(LoggedInContext);
  const loginDirect = (e) => {
    e.preventDefault();
    login.login();
  };
  const logoutDirect = (e) => {
    e.preventDefault();
    login.logout();
  };

  return (
    <Container size="xxl" centerContent>
      <div className={styles.menuContainer}>
        <ul className={styles.menu}>
          <li className={styles.menuItem}>
            <a href="#">Home</a>
          </li>
          <li className={styles.menuItem}>
            {login.isLoggedIn
              ? <a href="#" onClick={logoutDirect}>Log out</a>
              : <a href="#" onClick={loginDirect}>Log in</a>
            }
          </li>
        </ul>
      </div>
    </Container>
  );
};

export default MainLayout;
