import React from "react";
import ListGroup from "react-bootstrap/ListGroup";

function MovieResultGroup({ movies }) {
  console.log(movies);
  const movieItems = movies.map((movie) => (
    <ListGroup.Item as={"li"} width={100} key={movie.id} eventKey={movie.id}>
      Movie id: {movie.id}
      <br />
      Mobie title: {movie.title}
    </ListGroup.Item>
  ));

  return (
    <>
      <ListGroup as={"ul"} sm={1} className="my-2">
        {movieItems}
      </ListGroup>
    </>
  );
}

export default MovieResultGroup;
