import React, { useState } from 'react';
import './Searchbar.css';

import searchIcon from '../../assets/Images/search.svg';

const Searchbar = () => {
  const [searchToken, setSearchToken] = useState('');
  return (
    <div className="search">
      <div className="searchBar">
        <input
          placeholder="Search Here"
          value={searchToken}
          onChange={text => setSearchToken(text)}
        />
        <img src={searchIcon} alt="" />
      </div>
      <div className="connect">Connect</div>
    </div>
  );
};

export default Searchbar;
