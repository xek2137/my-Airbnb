import React from 'react';
import styles from './SearchBar.module.scss';
import { Button, ButtonGroup } from '@chakra-ui/react';

const SearchBar = () => (
  <div className={styles.component}>
    <input className={styles.input} placeholder="Search" />
    <Button bg="secondary" variant="search" h="32px">Search</Button>
  </div>
);

export default SearchBar;
