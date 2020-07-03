import { combineReducers } from "redux";
import moviesReducer from "./Movies";
import sortByReducer from "./SortByReducer";
import genreReducer from "./GenreReducer";

export const rootReducer = combineReducers({
  movies: moviesReducer,
  sortBy: sortByReducer,
  genre: genreReducer,
});
