import React from "react";

import Layout from "./Layout";
import MovieDetailBar from "../components/MovieDetailBar";
import MovieListSection from "../components/MovieListSection";
import Footer from "../components/Footer";
import { useSelector } from "react-redux";

function MovieDetailPage() {
  const movies = useSelector((state) => state.movies);

  return (
    <Layout>
      <MovieDetailBar />
      <MovieListSection movies={movies} />
      <Footer />
    </Layout>
  );
}

export default MovieDetailPage;
