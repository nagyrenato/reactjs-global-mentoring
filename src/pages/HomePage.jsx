import React, { useEffect } from "react";
import Layout from "./Layout";
import SearchBar from "../components/SearchBar";
import MovieListSection from "../components/MovieListSection";
import Footer from "../components/Footer";
import { useSelector } from "react-redux";

function HomePage() {
  useEffect(() => {
    fetch("../mock-data.json")
      .then((response) => response.json())
      .then((result) => console.log(result));
  }, []);

  return (
    <Layout>
      <SearchBar />
      <MovieListSection movies={[]} />
      <Footer />
    </Layout>
  );
}

export default HomePage;
