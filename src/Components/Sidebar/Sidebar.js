import React, { useContext, useState } from 'react';
import './Sidebar.css';

import logo from '../../assets/Images/logo.svg';
import icon1 from '../../assets/Images/Vector.svg';
import icon2 from '../../assets/Images/Vector-1.svg';
import fb from '../../assets/Images/facebook.svg';
import ln from '../../assets/Images/linkdin.svg';
import tw from '../../assets/Images/twitter.svg';
import { context } from '../../store/store';
import { updateMenu } from '../../store/action';

const Sidebar = () => {
  const [menu, setMenu] = useState(0);
  const { state, dispatch } = useContext(context);
  const changeMenuHandler = val => {
    updateMenu(val)(dispatch);
  };
  return (
    <div className="sidebar">
      <div className="logo">
        <img src={logo} alt="logo" />
        <p>NFTify</p>
      </div>
      <div
        className={`item ${state.menu == 0 && 'active'}`}
        onClick={() => changeMenuHandler(0)}
      >
        <img src={icon2} alt="" />
        <p>Token Address</p>
      </div>
      <div
        className={`item ${state.menu == 1 && 'active'}`}
        onClick={() => changeMenuHandler(1)}
      >
        <img src={icon1} alt="" />
        <p>Pair Address</p>
      </div>
      <div className="social">
        <img src={fb} alt="" />
        <img src={ln} alt="" />
        <img src={tw} alt="" />
      </div>
    </div>
  );
};

export default Sidebar;
