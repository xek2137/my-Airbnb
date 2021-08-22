import React from 'react';
import styles from './Header.module.scss';
import PropTypes from 'prop-types';

const Header = ({children}) => {

  return (
    <header className={`${styles.section} container card`}>
      {children}
    </header>
  );
};

Header.propTypes = {
  children: PropTypes.node,
};

export default Header;
