export const SET_MOVIES = "SET_MOVIES";
export const ADD_MOVIE = "ADD_MOVIE";
export const UPDATE_MOVIE = "UPDATE_MOVIE";
export const DELETE_MOVIE = "DELETE_MOVIE";

const moviesReducer = (movies = [], action) => {
  switch (action.type) {
    
    case SET_MOVIES: {
      movies = [...action.payload];
      return movies;
    }
    
    case ADD_MOVIE: {
      return [...movies].concat(action.payload);
    }
    
    case UPDATE_MOVIE: {
      const updatedMovies = [...movies];
      const indexOfUpdatedMovie = updatedMovies.findIndex(movie => movie.id === action.payload.id);
      updatedMovies[indexOfUpdatedMovie] = action.payload;
      return updatedMovies;
    }
      
    case DELETE_MOVIE: {
      return [...movies].filter(movie => movie.id !== action.payload.id);
    }
      
    default:
      return movies;
  }
};

export default moviesReducer;
