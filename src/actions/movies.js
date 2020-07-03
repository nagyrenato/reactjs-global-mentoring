import { SET_MOVIES } from "../reducers/Movies";

export const setMovies = (payload) => {
  return {
    type: SET_MOVIES,
    payload: payload,
  };
};
