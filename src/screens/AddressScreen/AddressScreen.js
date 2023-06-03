import React, { useContext } from 'react';
import './AddressScreen.css';

import Searchbar from '../../Components/Searchbar/Searchbar';
import TokenCard from '../../Components/TokenCard/TokenCard';
import { context } from '../../store/store';
const AddressScreen = () => {
  const { state } = useContext(context);
  return (
    <div className="address">
      <Searchbar />
      {state.loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {state.menu == 0 && <p>Token Search Result</p>}
          {state.menu == 1 && <p>Pair Search Result</p>}
        </>
      )}
      <div className="tokenBody">
        {state.pairs.map(pair => (
          <div className="tokens">
            <TokenCard type={1} data={pair} />
            <TokenCard type={2} data={pair} />
            <TokenCard type={3} data={pair} />
            <TokenCard type={4} data={pair} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddressScreen;
