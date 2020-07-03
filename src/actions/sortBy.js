import { SET_SORTBY } from "../reducers/SortByReducer";

export const setSortBy = (payload) => {
  return {
    type: SET_SORTBY,
    payload: payload,
  };
};
