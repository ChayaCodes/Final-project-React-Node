import React from 'react';
import { MdSearch } from 'react-icons/md';
import './search.css';

function Search(payload) {
  return (
    <div className="search-continer">
      <MdSearch size={20} />
      <input type="text" placeholder={payload.placeholder} className="search-input" />
    </div>
  );
}

export default Search;
