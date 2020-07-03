import * as actionTypes from "./actionTypes";

export const setMovies = (movies) => {
    return {
        type: actionTypes.SET_MOVIES,
        payload: movies,
    };
};

export const initMovies = () => {
    return dispatch => {
        fetch(`http://localhost:4000/movies?limit=12`, {
            method: 'get'
        })
            .then((response) => response.json())
            .then((response) => dispatch(setMovies(response.data)))
            .catch((error) => {
                console.log("Error happened: ", error.message);
                dispatch(setMovies([]))
            });
    };
};

export const addMovie = (movie) => {
    return {
        type: actionTypes.ADD_MOVIE,
        payload: movie
    };
};

export const updateMovie = (movie) => {
    return {
        type: actionTypes.UPDATE_MOVIE,
        payload: movie
    };
};

export const deleteMovie = (movieId) => {
    return {
        type: actionTypes.DELETE_MOVIE,
        payload: {
            id: movieId
        }
    };
};

export const deleteMovieFromDb = (movieId) => {
    return dispatch => {
        fetch(`http://localhost:4000/movies/${movieId}`, {
            method: 'delete'
        })
            .then(response => dispatch(deleteMovie(movieId)))
            .catch(error => console.log("Error during delete movie..."));
    }
}