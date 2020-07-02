import { FILL_MOVIES } from "../reducers/movies";

export const fillMovies = (payload) => {
  return {
    type: FILL_MOVIES,
    payload: payload,
  };
};
