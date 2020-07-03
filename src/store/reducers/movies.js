import * as actionTypes from "../actions/actionTypes";

const moviesReducer = (movies = [], action) => {
  switch (action.type) {
    
    case actionTypes.SET_MOVIES:
      return [...action.payload];

    case actionTypes.ADD_MOVIE:
      return [...movies].concat(action.payload);

    case actionTypes.UPDATE_MOVIE: {
      const updatedMovies = [...movies];
      const indexOfUpdatedMovie = updatedMovies.findIndex(movie => movie.id === action.payload.id);
      updatedMovies[indexOfUpdatedMovie] = action.payload;
      return updatedMovies;
    }
      
    case actionTypes.DELETE_MOVIE:
      return [...movies].filter(movie => movie.id !== action.payload.id);

    default:
      return movies;
  }
};

export default moviesReducer;
