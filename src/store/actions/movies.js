import * as actionTypes from "./actionTypes";
import { handleResponse, logError } from "../../utils/responseHandler";

export const setMovies = (movies) => {
  return {
    type: actionTypes.SET_MOVIES,
    payload: movies,
  };
};

export const fetchMovies = (queryParams) => {
  let fetchUrlBase = `http://localhost:4000/movies?limit=12`;
  let fetchUrl = [fetchUrlBase, queryParams].filter(Boolean).join("&");
  console.log(fetchUrl);

  return (dispatch) => {
    fetch(fetchUrl, {
      method: "get",
    })
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        return dispatch(setMovies(result.data));
      })
      .catch((error) => {
        console.log("Error happened: ", error.message);
        dispatch(setMovies([]));
      });
  };
};

const addMovie = (movie) => {
  return {
    type: actionTypes.ADD_MOVIE,
    payload: movie,
  };
};

const updateMovie = (movie) => {
  return {
    type: actionTypes.UPDATE_MOVIE,
    payload: movie,
  };
};

const deleteMovie = (movieId) => {
  return {
    type: actionTypes.DELETE_MOVIE,
    payload: {
      id: movieId,
    },
  };
};

export const upsertMovie = (movie) => {
  const method = movie.id ? "put" : "post";
  const dispatchMethod = movie.id ? updateMovie : addMovie;
  return (dispatch) => {
    fetch(`http://localhost:4000/movies`, {
      method: method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(movie),
    })
      .then(handleResponse)
      .then((response) => dispatch(dispatchMethod(response)))
      .catch((error) => logError("Error during movie upsert...", error));
  };
};

export const deleteMovieFromDb = (movieId) => {
  return (dispatch) => {
    fetch(`http://localhost:4000/movies/${movieId}`, {
      method: "delete",
    })
      .then(handleResponse)
      .then((response) => dispatch(deleteMovie(movieId)))
      .catch((error) => logError("Error during movie delete...", error));
  };
};
