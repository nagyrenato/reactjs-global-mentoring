import React, { useCallback, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MovieListItem from "./MovieListItem";
import MovieEditForm from "./MovieEditForm";

function MovieResultGroup({ movies }) {
  const [show, setShow] = useState(false);
  const [movie, setMovie] = useState({});

  const hideModal = useCallback(() => setShow(false), [setShow]);
  const showModal = useCallback(() => setShow(true), [setShow]);

  return (
    <>
      <Row>
        {movies.map((movie, key) => (
          <Col lg={4} md={6} sm={12}>
            <MovieListItem
              key={key}
              movie={movie}
              onEdit={showModal}
              setMovie={setMovie}
            />
          </Col>
        ))}
      </Row>

      <MovieEditForm show={show} handleClose={hideModal} movie={movie} />
    </>
  );
}
export default MovieResultGroup;
