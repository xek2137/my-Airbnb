import React, {useState} from 'react';
import styles from './SearchBar.module.scss';
import {Button, Container, Box} from '@chakra-ui/react';
import PropTypes from 'prop-types';


const SearchBar = ({onSearch}) => {
  const [term, setTerm] = useState('');

  const search = () => {
    onSearch(term);
  };

  return (
    <div className={styles.component}>
      <Container maxW="xl" centerContent>
        <Box padding="4" maxW="3xl">
          <input
            className={styles.input}
            placeholder="Search"
            value={term}
            onChange={e => setTerm(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && search()} />
          <Button variant="search" h="32px" onClick={search}>Search</Button>
        </Box>
      </Container>
    </div>
  );
};

SearchBar.propTypes = {
  onSearch: PropTypes.func,
};

export default SearchBar;
