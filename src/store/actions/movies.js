import * as actionTypes from "./actionTypes";
import { handleResponse, logError } from "../../utils/responseHandler";

export const setMovies = (movies) => {
    return {
        type: actionTypes.SET_MOVIES,
        payload: movies,
    };
};

export const initMovies = () => {
    return dispatch => {
        fetch(`http://localhost:4000/movies?limit=12`)
            .then(handleResponse)
            .then((response) => dispatch(setMovies(response.data)))
            .catch((error) => {
                logError("Unable to load movies...", error);
                dispatch(setMovies([]))
            });
    };
};

const addMovie = (movie) => {
    return {
        type: actionTypes.ADD_MOVIE,
        payload: movie
    };
};

const updateMovie = (movie) => {
    return {
        type: actionTypes.UPDATE_MOVIE,
        payload: movie
    };
};

const deleteMovie = (movieId) => {
    return {
        type: actionTypes.DELETE_MOVIE,
        payload: {
            id: movieId
        }
    };
};

export const upsertMovie = (movie) => {
    const method = movie.id ? "put" : "post";
    const dispatchMethod = movie.id ? updateMovie : addMovie;
    return dispatch => {
        fetch(`http://localhost:4000/movies`, {
            method: method,
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(movie)
        })
            .then(handleResponse)
            .then(response => dispatch(dispatchMethod(response)))
            .catch(error => logError("Error during movie upsert...", error));
    };
};

export const deleteMovieFromDb = (movieId) => {
    return dispatch => {
        fetch(`http://localhost:4000/movies/${movieId}`, {
            method: 'delete'
        })
            .then(handleResponse)
            .then(response => dispatch(deleteMovie(movieId)))
            .catch(error => logError("Error during movie delete...", error));
    };
};