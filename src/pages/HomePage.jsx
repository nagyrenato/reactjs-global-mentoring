import React, { useState, useEffect } from "react";
import Layout from "./Layout";
import SearchBar from "../components/SearchBar";
import MovieListSection from "../components/MovieListSection";
import Footer from "../components/Footer";
import { useSelector } from "react-redux";

function HomePage() {
  const movies = useSelector((state) => state.movies);

  useEffect(() => {
    fetch("../mock-data.json")
      .then((response) => response.json())
      .then((result) => setMovies(result));
  }, []);

  return (
    <Layout>
      <SearchBar />
      <MovieListSection movies={movies} />
      <Footer />
    </Layout>
  );
}

export default HomePage;
