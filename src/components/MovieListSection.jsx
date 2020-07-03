import React, { useEffect } from "react";
import FilterPanel from "./FilterPanel";
import MovieResultGroup from "./MovieResultGroup";
import { useDispatch, useSelector } from "react-redux";
import { setMovies } from "../actions/movies";

const MovieListSection = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies);

  useEffect(() => {
    if (movies.length === 0) {
      fetch("../mock-data.json")
        .then((response) => response.json())
        .then((result) => {
          dispatch(setMovies(result));
        })
        .catch((error) => dispatch(setMovies([])));
    }
  }, [dispatch, movies]);

  return (
    <div className={"movie-list-background w-100 d-grid px-5 py-3"}>
      <FilterPanel />
      <MovieResultGroup movies={movies} />
    </div>
  );
};

export default MovieListSection;
