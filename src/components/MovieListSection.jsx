import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import FilterPanel from "./FilterPanel";
import MovieResultGroup from "./MovieResultGroup";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../store/actions/movies";

const sortByMap = {
  "release date": "sortBy=release_date&sortOrder=desc",
  title: "sortBy=title&sortOrder=asc",
  rating: "sortBy=vote_average&sortOrder=desc",
};

const MovieListSection = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies);

  const genre = useSelector((state) => state.genre);
  const sortBy = useSelector((state) => state.sortBy);

  const { searchTerm } = useParams();

  let queryParams = [];
  let queryString = "";

  if (genre !== "All") {
    if (genre !== null) {
      queryParams.push(`filter=${genre}`);
    }
  }

  queryParams.push(sortByMap[sortBy]);

  if (searchTerm) {
    queryParams.push(`search=${searchTerm}&searchBy=title`);
  }

  queryString = queryParams.join("&");
  console.log(queryString);

  useEffect(() => {
    if (queryString !== "") {
      dispatch(fetchMovies(queryString));
    }
  }, [dispatch, genre, sortBy, queryString]);

  return (
    <div className={"movie-list-background w-100 d-grid px-5 py-3"}>
      <FilterPanel />
      <MovieResultGroup movies={movies} />
    </div>
  );
};

export default MovieListSection;
