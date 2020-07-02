import { SET_MOVIES } from "../reducers/movies";

export const setMovies = (payload) => {
  return {
    type: SET_MOVIES,
    payload: payload,
  };
};
