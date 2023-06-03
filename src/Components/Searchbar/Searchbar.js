import React, { useContext, useState } from 'react';
import './Searchbar.css';

import searchIcon from '../../assets/Images/search.svg';
import { setSearch } from '../../store/action';
import { context } from '../../store/store';
const Searchbar = () => {
  const { dispatch } = useContext(context);
  const [searchToken, setSearchToken] = useState('');
  const searchHandler = () => {
    setSearch(searchToken)(dispatch);
  };
  return (
    <div className="search">
      <div className="searchBar">
        <input
          placeholder="Search Here"
          value={searchToken}
          onChange={text => setSearchToken(text)}
        />
        <img src={searchIcon} alt="" onClick={() => searchHandler()} />
      </div>
      <div className="connect">Connect</div>
    </div>
  );
};

export default Searchbar;
