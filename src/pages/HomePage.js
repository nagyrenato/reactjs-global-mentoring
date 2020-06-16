import React from "react";
import "../App.css";
import AddMovie from "../components/AddMovie";
import SearchMovie from "../components/SearchMovie";
import ResultCount from "../components/ResultCount";
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
    </>
  );
}

export default HomePage;
