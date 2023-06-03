import React from 'react';
import './TokenCard.css';

import tok1 from '../../assets/Images/tok1.svg';
import tok2 from '../../assets/Images/tok2.svg';
import tok3 from '../../assets/Images/tok3.svg';
import tok4 from '../../assets/Images/tok4.svg';

const TokenCard = ({ type = 1, data }) => {
  var date = new Date(data.pairCreatedAt).toDateString();
  return (
    <div className="token">
      {type == 1 && <h4>Basic Info</h4>}
      {type == 2 && <h4>Basic Token</h4>}
      {type == 3 && <h4>Quote Token</h4>}
      {type == 4 && <h4>Price</h4>}
      {type == 1 && (
        <>
          <div className="tokenText">
            <p>Pair Created at</p>
            <p>{date}</p>
          </div>
          <div className="tokenText">
            <p>Symbol</p>
            <p>{data.baseToken.symbol}</p>
          </div>
          <div className="tokenText">
            <p>DedID</p>
            <p>{data.dexId}</p>
          </div>
          <div className="tokenText">
            <p>Pair Address</p>
            <p>#{data.pairAddress.substring(0, 5)}</p>
          </div>
        </>
      )}
      {type == 2 && (
        <>
          <div className="tokenText">
            <p>Name</p>
            <p>{data.baseToken.name}</p>
          </div>
          <div className="tokenText">
            <p>Symbol</p>
            <p>{data.baseToken.symbol}</p>
          </div>
          <div className="tokenText">
            <p>Address</p>
            <p>#{data.baseToken.address.substring(0, 5)}</p>
          </div>
        </>
      )}
      {type == 3 && (
        <>
          <div className="tokenText">
            <p>Name</p>
            <p>{data.quoteToken.name}</p>
          </div>
          <div className="tokenText">
            <p>Symbol</p>
            <p>{data.quoteToken.symbol}</p>
          </div>
          <div className="tokenText">
            <p>Address</p>
            <p>#{data.quoteToken.address.substring(0, 5)}</p>
          </div>
        </>
      )}
      {type == 4 && (
        <>
          <div className="tokenText">
            <p>Price Native</p>
            <p>{data.priceNative}</p>
          </div>
          <div className="tokenText">
            <p>Price USD</p>
            <p>{data.priceUsd}</p>
          </div>
        </>
      )}
      <div className="iconBubble">
        {type == 1 && <img src={tok1} alt="" />}
        {type == 2 && <img src={tok2} alt="" />}
        {type == 3 && <img src={tok3} alt="" />}
        {type == 4 && <img src={tok4} alt="" />}
      </div>
    </div>
  );
};

export default TokenCard;
