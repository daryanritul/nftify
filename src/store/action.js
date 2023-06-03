import { END_FETCH, SET_DATA, START_FETCH, UPDATE_MENU } from './actions.types';

export const updateMenu = value => dispatch => {
  dispatch({
    type: UPDATE_MENU,
    payload: value,
  });
};

export const setSearch = data => dispatch => {
  dispatch({
    type: SET_DATA,
    payload: data,
  });
};
export const setData = data => dispatch => {
  dispatch({
    type: SET_DATA,
    payload: data,
  });
};

export const startFetch = () => dispatch => {
  dispatch({
    type: START_FETCH,
  });
};
export const endFetch = () => dispatch => {
  dispatch({
    type: END_FETCH,
  });
};
