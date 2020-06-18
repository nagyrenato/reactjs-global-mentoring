import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Moment from "react-moment";

function MovieResultGroup({ movies }) {
  const movieItems = movies.map((movie) => (
    <ListGroup.Item
      key={movie.id}
      eventKey={movie.id}
      className="bg-transparent text-white"
    >
      <Container>
        <Row>
          <Col>
            <Image src={movie.poster_path} />
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
    </ListGroup.Item>
  ));

  return (
    <>
      <ListGroup>{movieItems}</ListGroup>
    </>
  );
}

export default MovieResultGroup;
