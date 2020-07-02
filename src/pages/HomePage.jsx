import React, { useEffect } from "react";
import Layout from "./Layout";
import SearchBar from "../components/SearchBar";
import MovieListSection from "../components/MovieListSection";
import Footer from "../components/Footer";
import { useDispatch } from "react-redux";
import { setMovies } from "../actions/index";

function HomePage() {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("../mock-data.json")
      .then((response) => response.json())
      .then((result) => dispatch(setMovies(result)));
  }, [dispatch]);

  return (
    <Layout>
      <SearchBar />
      <MovieListSection />
      <Footer />
    </Layout>
  );
}

export default HomePage;
