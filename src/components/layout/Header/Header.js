import React from 'react';
import SearchBar from './SearchBar/SearchBar';
import styles from './Header.module.scss';
import {Container} from '@chakra-ui/react';
import PropTypes from 'prop-types';

const Header = ({onSearch}) => {

  return (
    <Container size="xxl" centerContent>
      <div className={`card ${styles.section}`}>
        <div className="card-body">
          <SearchBar onSearch={onSearch} />
        </div>
      </div>
    </Container>
  );
};

Header.propTypes = {
  onSearch: PropTypes.func,
};

export default Header;
