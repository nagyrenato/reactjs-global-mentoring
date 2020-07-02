import { combineReducers } from "redux";
import movieList from "./movieList";

const rootReducer = combineReducers({
  movies: movieList,
});

export default rootReducer;
