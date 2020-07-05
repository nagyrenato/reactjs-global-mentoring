import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Layout from "./Layout";
import MovieDetailBar from "../components/MovieDetailBar";
import MovieListSection from "../components/MovieListSection";
import Footer from "../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { setMovies } from "../store/actions/movies";

function MovieDetailPage() {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies);

  const [movie, setMovie] = useState({});
  const { movieId } = useParams();

  if (movies.length === 0) {
    fetch("../mock-data.json")
      .then((response) => response.json())
      .then((result) => dispatch(setMovies(result)))
      .catch((error) => dispatch(setMovies([])));
  }

  useEffect(() => {
    let movieById = movies.find((m) => `${movie?.id}` === movieId);
    setMovie(movieById);
  }, [movie, movies, movieId]);

  return (
    <Layout>
      {movie && <MovieDetailBar movie={movie} />}
      <MovieListSection movies={movies} />
      <Footer />
    </Layout>
  );
}

export default MovieDetailPage;
