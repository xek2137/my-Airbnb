import React from 'react';
import styles from './Header.module.scss';
import PropTypes from 'prop-types';
import withMouseCursor from '../../../hoc/withMouseCursor';

const Header = ({children, mouseX, mouseY}) => {
  const parallaxStyles = {
    transform: `translate(
                  ${mouseX / 100}px,
                  ${mouseY / 100}px)`,
  };

  return (
    <header
      className={`${styles.section} container card`}>
      <div
        className={styles.headerBackground}
        style={parallaxStyles}>
        {children}
      </div>
    </header>
  );
};

Header.propTypes = {
  children: PropTypes.node,
  mouseX: PropTypes.number,
  mouseY: PropTypes.number,
};

export default withMouseCursor(Header);
