import React from 'react';
import './Searchbar.css';

import search from '../../assets/Images/search.svg';

const Searchbar = () => {
  return (
    <div className="search">
      <div className="searchBar">
        <input placeholder="Search Here" />
        <img src={search} alt="" />
      </div>
      <div className="connect">Connect</div>
    </div>
  );
};

export default Searchbar;
