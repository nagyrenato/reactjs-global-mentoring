import React, { useState, useEffect } from "react";
import Layout from "./Layout";
import SearchBar from "../components/SearchBar";
import MovieListSection from "../components/MovieListSection";
import Footer from "../components/Footer";

function HomePage() {
  //TODO use redux for movies
  const [movies, setMovies] = useState([]);

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
