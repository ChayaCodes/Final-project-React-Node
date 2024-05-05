import React from 'react';
import { MdSearch } from 'react-icons/md';
import './search.css';

function Search(payload) {
  return (
    <div className="search-continer-2">
      <MdSearch size={20} />
      <input type="text" placeholder={payload.placeholder} className="search-input" onChange={payload.onChange} />
    </div>
  );
}

export default Search;

