import React, { useReducer } from 'react';
import App from './App';
import { context, initialState } from './store/store';
import reducer from './store/reducer';
const RootApp = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <context.Provider
      value={{
        state,
        dispatch,
      }}
    >
      <App />
    </context.Provider>
  );
};

export default RootApp;
