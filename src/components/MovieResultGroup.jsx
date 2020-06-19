import React from "react";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Moment from "react-moment";
import Container from "react-bootstrap/Container";

function MovieResultGroup({ movies }) {
  const movieItems = movies.map((movie) => (
    <>
      <Container
        fluid
        key={movie.id}
        className="bg-dark text-white container-sm"
      >
        <Row>
          <Col>
            <Button>Test</Button>
            <Image
              fluid
              src={movie.poster_path}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  "https://via.placeholder.com/500x750.png&text=No+Picture";
              }}
            />
          </Col>
        </Row>
        <Row>
          <Col>{movie.title}</Col>
          <Col>
            <label>
              <Moment date={movie.release_date} format={"YYYY"}></Moment>
            </label>
          </Col>
        </Row>
        <Row>
          <Col>
            {" "}
            {movie.genres
              .map((genre) => {
                return `${genre}`;
              })
              .reduce((prev, curr) => [prev, ", ", curr])}
          </Col>
        </Row>
      </Container>
    </>
  ));

  function createRows() {
    let rows = [];
    for (let i = 0; i < movieItems.length; i++) {
      rows.push(
        <Row key={"row" + i}>
          <Col>{movieItems[i]}</Col>
          <Col>{movieItems[i + 1]}</Col>
          <Col>{movieItems[i + 2]}</Col>
        </Row>
      );
      i = i + 3;
    }
    return rows;
  }

  function RenderIfNotEmpty() {
    return (
      <Container className={"bg-dark"}>
        <>
          {createRows().map((movieRow) => {
            return movieRow;
          })}
        </>
      </Container>
    );
  }

  return (
    <>
      {movieItems.length === 0 ? (
        <h1>No Movies Found</h1>
      ) : (
        <RenderIfNotEmpty></RenderIfNotEmpty>
      )}
    </>
  );
}

export default MovieResultGroup;
