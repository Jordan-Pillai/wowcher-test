import React from 'react';

import './styles.css';

const SearchInput = ({ searchTerm, onChange }) => {
  return (
    <div className="search-input">
      <label>Search Products</label>
      <input
        type="text"
        value={searchTerm}
        placeholder="What are you looking for?"
        onChange={onChange}
      />
    </div>
  );
};

export default SearchInput;
