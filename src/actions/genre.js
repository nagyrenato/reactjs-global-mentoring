import { SET_GENRE } from "../reducers/GenreReducer";

export const setGenre = (payload) => {
  return {
    type: SET_GENRE,
    payload: payload,
  };
};
