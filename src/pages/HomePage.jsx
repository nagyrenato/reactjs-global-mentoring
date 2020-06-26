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

function HomePage() {
  const [movies, setMovies] = useState([]);
  const [genre, setGenre] = useState("All");
  const [sortBy, setSortBy] = useState("Release date");

  function changeGenre(value) {
    setGenre(value);
  }

  function changeSortBy(value) {
    setSortBy(value);
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
              <GenreGroup onSelect={changeGenre} />
            </Col>
            <Col
              className={
                "col-sm-3 justify-content-end align-items-center d-flex"
              }
            >
              <SortBy
                defaultSortBy={sortBy}
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
