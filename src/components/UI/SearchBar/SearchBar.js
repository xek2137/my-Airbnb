import React, {useEffect, useState, useRef} from 'react';
import styles from './SearchBar.module.scss';
import PropTypes from 'prop-types';

const SearchBar = ({onSearch}) => {
  const [term, setTerm] = useState('');

  const inputRef = useRef(null);

  const search = () => {
    onSearch(term);
  };

  const focusInput = () => {
    inputRef.current.focus();
  };

  useEffect(() => {
    focusInput();
  }, []);

  return (
    <div className="d-flex">
      <input
        ref={inputRef}
        className={styles.input}
        placeholder="Search"
        value={term}
        onChange={e => setTerm(e.target.value)}
        onKeyDown={e => e.key === 'Enter' && search()} />
      <button className="ml-1 btn btn-primary" onClick={search}>
        Search
      </button>
    </div>
  );
};

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchBar;
