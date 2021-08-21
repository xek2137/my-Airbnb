import React from 'react';
import SearchBar from '../../UI/SearchBar/SearchBar';
import styles from './Header.module.scss';
import {Container} from '@chakra-ui/react';
import PropTypes from 'prop-types';

const Header = ({children}) => {

  return (
    <Container size="xxl" centerContent>
      <div className={`card ${styles.section}`}>
        <div className="card-body">
          {children}
        </div>
      </div>
    </Container>
  );
};

Header.propTypes = {
  // onSearch: PropTypes.func.isRequired,
  children: PropTypes.node,
};

export default Header;
