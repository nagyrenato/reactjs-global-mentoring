import React, { useCallback, useState } from "react";
import { useSelector } from "react-redux";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MovieListItem from "./MovieListItem";
import MovieEditForm from "./MovieEditForm";
import MovieDeleteForm from "./MovieDeleteForm";
import EmptyMovieResultGroup from "./EmptyMovieResultGroup";
import ResultCount from "./ResultCount";
import { RELEASE_DATE, TITLE, RATING } from "../utils/SortByOptions";

function MovieResultGroup({ movies }) {
  const [showEditForm, setShowEditForm] = useState(false);
  const [showDeleteForm, setShowDeleteForm] = useState(false);
  const [movie, setMovie] = useState({});

  const genre = useSelector((state) => state.genre);
  const sortBy = useSelector((state) => state.sortBy);

  let filteredMovies = movies;

  if (genre !== "All") {
    filteredMovies = movies.filter((movie) => movie.genres.includes(genre));
  }

  /*
   * Well. I had an idea to handle this compare switch dinamically with the following idea:
   * Extend the sortByOptions with a structure that store the JSON parameter for the sorting order and use it like an object property
   * For example: RELEASE_DATE -> movie1[release_date] and so on.
   * But, I decided not to do it for now, I'm sorry for this mess here.
   */
  switch (sortBy) {
    case RELEASE_DATE:
      filteredMovies.sort((movie1, movie2) =>
        movie1.release_date > movie2.release_date ? -1 : 1
      );
      break;
    case TITLE:
      filteredMovies.sort((movie1, movie2) =>
        movie1.title < movie2.title ? -1 : 1
      );
      break;
    case RATING:
      filteredMovies.sort((movie1, movie2) =>
        movie1.vote_average > movie2.vote_average ? -1 : 1
      );
      break;
    default:
      filteredMovies.sort((movie1, movie2) =>
        movie1.release_date > movie2.release_date ? -1 : 1
      );
      break;
  }

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

  if (filteredMovies.length === 0) {
    return <EmptyMovieResultGroup />;
  }

  return (
    <>
      <ResultCount count={filteredMovies.length} />
      <Row>
        {filteredMovies.map((movie, key) => (
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
