import { combineReducers } from "redux";
import movies from "./movies";

const rootReducer = combineReducers({
  movies: movies,
});

export default rootReducer;
