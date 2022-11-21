import './SearchBox.css'
import React from 'react';


const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div>
      <input
        className='jummy'
        type='search'
        placeholder='search robots'
        onChange={searchChange}
      />
    </div>
  );
}

export default SearchBox;