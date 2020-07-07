import React, { useCallback, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MovieListItem from "./MovieListItem";
import MovieEditForm from "./MovieEditForm";
import MovieDeleteForm from "./MovieDeleteForm";
import EmptyMovieResultGroup from "./EmptyMovieResultGroup";
import ResultCount from "./ResultCount";

function MovieResultGroup({ movies }) {
  const [showEditForm, setShowEditForm] = useState(false);
  const [showDeleteForm, setShowDeleteForm] = useState(false);
  const [movie, setMovie] = useState({});

  const hideEditModal = useCallback(() => setShowEditForm(false), [
    setShowEditForm,
  ]);
  const showEditModal = useCallback(() => setShowEditForm(true), [
    setShowEditForm,
  ]);

  const hideDeleteModal = useCallback(() => setShowDeleteForm(false), [
    setShowDeleteForm,
  ]);
  const showDeleteModal = useCallback(() => setShowDeleteForm(true), [
    setShowDeleteForm,
  ]);

  if (movies.length === 0) {
    return <EmptyMovieResultGroup />;
  }

  return (
    <>
      <ResultCount count={movies.length} />
      <Row>
        {movies.map((movie, key) => (
          <Col key={key} lg={4} md={6} sm={12}>
            <MovieListItem
              key={movie.id}
              movie={movie}
              onEdit={showEditModal}
              onDelete={showDeleteModal}
              setMovie={setMovie}
            />
          </Col>
        ))}
      </Row>

      {showEditForm && (
        <MovieEditForm
          show={showEditForm}
          handleClose={hideEditModal}
          movie={movie}
        />
      )}

      {showDeleteForm && (
        <MovieDeleteForm
          show={showDeleteForm}
          handleClose={hideDeleteModal}
          movie={movie}
        />
      )}
    </>
  );
}
export default MovieResultGroup;
