import {
  SET_DATA,
  START_FETCH,
  UPDATE_MENU,
  END_FETCH,
  SET_SEARCH,
} from './actions.types';

const reducer = (state, { payload, type }) => {
  switch (type) {
    case UPDATE_MENU:
      return {
        ...state,
        menu: payload,
      };
    case SET_SEARCH:
      return {
        ...state,
        search: payload,
      };
    case SET_DATA:
      return {
        ...state,
        pairs: payload.slice(0, 10),
        loading: false,
      };
    case START_FETCH:
      return {
        ...state,
        loading: true,
      };
    case END_FETCH:
      return {
        ...state,
        loading: false,
      };
  }
};

export default reducer;
