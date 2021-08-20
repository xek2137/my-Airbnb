import React from 'react';
import styles from './MainLayout.module.scss';

const MainLayout = () => (
  <div className={styles.menuContainer}>
    <ul className={styles.menu}>
      <li className={styles.menuItem}>
        <a href="#">Home</a>
      </li>
    </ul>
  </div>
);

export default MainLayout;
