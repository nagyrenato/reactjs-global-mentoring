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
            <Button
              className={"btn btn-circle-v2 btn-circle-rounded btn-secondary"}
            >
              <i class="fa fa-ellipsis-v"></i>
            </Button>
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
          <Col className={"col-sm-9"}>
            <h5>{movie.title}</h5>
          </Col>
          <Col className={"col-sm-3"}>
            <p className={"border-info"}>
              <Moment date={movie.release_date} format={"YYYY"}></Moment>
            </p>
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

  function EmptyMovieList() {
    return (
      <Container
        className={
          "bg-dark text-capitalize EmptyMovieList-height d-flex align-items-center justify-content-center"
        }
      >
        <h1 className={"bg-dark text-white"}>No movie found</h1>
      </Container>
    );
  }

  function MovieList() {
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
        <EmptyMovieList></EmptyMovieList>
      ) : (
        <MovieList></MovieList>
      )}
    </>
  );
}

export default MovieResultGroup;
