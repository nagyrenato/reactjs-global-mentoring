import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MovieListItem from "./MovieListItem";

function MovieResultGroup({ movies }) {
  return (
    <>
      <Row>
        {movies.map((movie, key) => (
          <Col key={key} lg={4} md={6} sm={12}>
            <MovieListItem key={movie.id} movie={movie} />
          </Col>
        ))}
      </Row>
    </>
  );
}
export default MovieResultGroup;
