import React, { useEffect } from "react";
import FilterPanel from "./FilterPanel";
import MovieResultGroup from "./MovieResultGroup";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../store/actions/movies";
import { RELEASE_DATE, TITLE, RATING } from "../utils/SortByOptions";

const MovieListSection = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies);

  const genre = useSelector((state) => state.genre);
  const sortBy = useSelector((state) => state.sortBy);

  let queryParams = [];
  let queryString = "";

  if (genre !== "All") {
    queryParams.push(`filter=${genre}`);
  }

  switch (sortBy) {
    case RELEASE_DATE:
      queryParams.push("sortBy=release_date&sortOrder=desc");
      break;
    case TITLE:
      queryParams.push("sortBy=title&sortOrder=asc");
      break;
    case RATING:
      queryParams.push("sortBy=vote_average&sortOrder=desc");
      break;
    default:
      queryParams.push("sortBy=release_date&sortOrder=desc");
      break;
  }

  queryString = queryParams.join("&");

  useEffect(() => {
    dispatch(fetchMovies(queryString));
  }, [dispatch, genre, sortBy, queryString]);

  return (
    <div className={"movie-list-background w-100 d-grid px-5 py-3"}>
      <FilterPanel />
      <MovieResultGroup movies={movies} />
    </div>
  );
};

export default MovieListSection;
