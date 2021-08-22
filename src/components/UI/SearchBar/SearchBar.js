import React, {useState} from 'react';
import styles from './SearchBar.module.scss';
import PropTypes from 'prop-types';

const SearchBar = ({onSearch}) => {
  const [term, setTerm] = useState('');

  const search = () => {
    onSearch(term);
  };

  return (
    <div className="d-flex">
      <input
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
