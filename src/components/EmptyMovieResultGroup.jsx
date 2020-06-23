import React from "react";
import Container from "react-bootstrap/Container";

function EmptyMovieResultGroup() {
  return (
    <>
      <Container
        className={
          "text-capitalize empty-movie-list d-flex align-items-center justify-content-center"
        }
      >
        <h1 className={"text-white"}>No movie found</h1>
      </Container>
    </>
  );
}
export default EmptyMovieResultGroup;
