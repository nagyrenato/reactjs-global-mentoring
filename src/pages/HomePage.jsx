import React from "react";
import AddMovie from "../components/AddMovie";
import SearchMovie from "../components/SearchMovie";
import ResultCount from "../components/ResultCount";
import MovieResultGroup from "../components/MovieResultGroup";
import MockData from "../mock/mock-data";

function HomePage() {
  return (
    <>
      <AddMovie />
      <br />
      <br />
      <SearchMovie />
      <br />
      <br />
      <ResultCount count={MockData.length} />
      <br />
      <br />
      <MovieResultGroup movies={MockData} />
    </>
  );
}

export default HomePage;
