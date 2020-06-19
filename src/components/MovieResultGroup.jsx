import React from "react";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Moment from "react-moment";
import Container from "react-bootstrap/Container";

function MovieResultGroup({ movies }) {
  const movieItems = movies.map((movie) => (
    <>
      <Container key={movie.id} className="bg-dark text-white container-sm">
        <Row>
          <Col>
            <Image
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

  return <div>{movieItems}</div>;
}

export default MovieResultGroup;
