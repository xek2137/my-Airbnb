import React from 'react';
import styles from './SearchBar.module.scss';
import { Button, ButtonGroup } from '@chakra-ui/react';
import { Input } from '@chakra-ui/react';

const SearchBar = () => (
  <div className={styles.component}>
    <input className={styles.input} placeholder="Search" />
    <ButtonGroup className={styles.button} variant="outline" spacing="6">
      <Button colorScheme="blue">Search</Button>
    </ButtonGroup>
  </div>
);

export default SearchBar;
