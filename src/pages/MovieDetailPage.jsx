import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Layout from "./Layout";
import MovieDetailBar from "../components/MovieDetailBar";
import MovieListSection from "../components/MovieListSection";
import Footer from "../components/Footer";
import { useSelector } from "react-redux";

function MovieDetailPage() {
  const movies = useSelector((state) => state.movies);

  const [movie, setMovie] = useState({});
  const { movieId } = useParams();

  useEffect(() => {
    let movieById = movies.find((movie) => `${movie?.id}` === movieId);
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
