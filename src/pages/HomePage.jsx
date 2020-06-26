import React, { useState, useEffect } from "react";
import ResultCount from "../components/ResultCount";
import MovieResultGroup from "../components/MovieResultGroup";
import Container from "react-bootstrap/Container";
import SearchBar from "../components/SearchBar";
import GenreGroup from "../components/GenreGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Footer from "../components/Footer";
import SortBy from "../components/SortBy";
import EmptyMovieResultGroup from "../components/EmptyMovieResultGroup";
import genreOptions from "../utils/genres";
import sortByOptions from "../utils/sortByOptions";

genreOptions.unshift({ value: "all", label: "All" });
const genres = genreOptions;

function HomePage() {
  const [movies, setMovies] = useState([]);
  const [genreIndex, setGenreIndex] = useState(0);
  const [sortByIndex, setSortByIndex] = useState(0);

  function changeGenre(value) {
    const selectedIndex = genres.findIndex((genre) => genre.label === value);
    console.log(selectedIndex);
    setGenreIndex(selectedIndex);
  }

  function changeSortBy(value) {
    const selectedIndex = sortByOptions.findIndex(
      (sortByOption) => sortByOption.label === value
    );
    setSortByIndex(selectedIndex);
  }

  useEffect(() => {
    fetch("./mock-data.json")
      .then((response) => response.json())
      .then((result) => {
        const moviesResult = result;
        setMovies(moviesResult);
      });
  });

  return (
    <>
      <Container>
        <Row>
          <SearchBar />
        </Row>
        <Row className={"movie-list-background d-grid px-5 py-3"}>
          <Row className={"filter-bar"}>
            <Col className={"col-sm-9"}>
              <GenreGroup genres={genres} onSelect={changeGenre} />
            </Col>
            <Col
              className={
                "col-sm-3 justify-content-end align-items-center d-flex"
              }
            >
              <SortBy
                sortByOptions={sortByOptions}
                indexOfSelectedOption={sortByIndex}
                onChangeSortBy={changeSortBy}
                className={"align-content-end"}
              />
            </Col>
          </Row>
          <Row>
            <ResultCount count={movies.length} />
            <>
              {movies.length === 0 ? (
                <EmptyMovieResultGroup />
              ) : (
                <MovieResultGroup movies={movies} />
              )}
            </>
          </Row>
        </Row>
        <Row>
          <Footer />
        </Row>
      </Container>
    </>
  );
}

export default HomePage;
