import React from "react";
import FilterPanel from "./FilterPanel";
import MovieResultGroup from "./MovieResultGroup";
import { useSelector } from "react-redux";

const MovieListSection = () => {
  const movies = useSelector((state) => state.movies);

  return (
    <div className={"movie-list-background w-100 d-grid px-5 py-3"}>
      <FilterPanel />
      <MovieResultGroup movies={movies} />
    </div>
  );
};

export default MovieListSection;
