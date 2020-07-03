import { combineReducers } from "redux";
import moviesReducer from "./Movies";
import sortByReducer from "./SortByReducer";
import genreReducer from "./GenreReducer";

const rootReducer = combineReducers({
  movies: moviesReducer,
  sortBy: sortByReducer,
  genre: genreReducer,
});

export default rootReducer;
