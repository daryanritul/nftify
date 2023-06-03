import React, { useContext, useEffect } from 'react';
import Sidebar from './Components/Sidebar/Sidebar';

import background from './assets/Images/backgroundimage.jpg';
import AddressScreen from './screens/AddressScreen/AddressScreen';

import { context } from './store/store';
import { endFetch, setData, startFetch } from './store/action';

const App = () => {
  const { state, dispatch } = useContext(context);

  useEffect(() => {
    startFetch()(dispatch);
    const url =
      state.menu == 1
        ? 'https://api.dexscreener.com/latest/dex/search/?q=0x7213a321F1855CF1779f42c0CD85d3D95291D34C'
        : 'https://api.dexscreener.com/latest/dex/tokens/0x2170Ed0880ac9A755fd29B2688956BD959F933F8';
    fetch(url)
      .then(response => response.json())
      .then(json => setData(json.pairs)(dispatch))
      .catch(err => {
        console.log(err);
        endFetch()(dispatch);
      });
  }, [state.menu]);

  return (
    <>
      <div
        className="app"
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <Sidebar />
        <div className="body">
          <AddressScreen />
        </div>
      </div>
      <div className="footer"></div>
    </>
  );
};

export default App;
