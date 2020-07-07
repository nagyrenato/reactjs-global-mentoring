import React from "react";
import Layout from "./Layout";
import SearchBar from "../components/SearchBar";
import MovieListSection from "../components/MovieListSection";
import Footer from "../components/Footer";

function HomePage() {
  return (
    <Layout>
      <SearchBar />
      <MovieListSection />
      <Footer />
    </Layout>
  );
}

export default HomePage;
