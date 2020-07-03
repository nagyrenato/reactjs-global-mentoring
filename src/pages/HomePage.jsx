import React, { useEffect } from "react";
import Layout from "./Layout";
import SearchBar from "../components/SearchBar";
import MovieListSection from "../components/MovieListSection";
import Footer from "../components/Footer";
import { useDispatch } from "react-redux";
import { initMovies } from "../store/actions/movies";

function HomePage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initMovies());
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
