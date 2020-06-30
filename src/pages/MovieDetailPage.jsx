import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Layout from "./Layout";
import MovieDetailBar from "../components/MovieDetailBar";
import MovieListSection from "../components/MovieListSection";
import Footer from "../components/Footer";

function MovieDetailPage() {
  //TODO use redux for movies
  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();

  useEffect(() => {
    fetch("../mock-data.json")
      .then((response) => response.json())
      .then((result) => setMovies(result));
  }, []);

  useEffect(() => {
    let movieById = movies.find(m => m.id.toString() === movieId);
    setMovie(movieById)
  }, [movies, movieId])

  return (
    <Layout>
      {movie && <MovieDetailBar movie={movie} />}
      <MovieListSection movies={movies} />
      <Footer />
    </Layout>
  );
}

export default MovieDetailPage;
