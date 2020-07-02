import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import DropdownButton from "react-bootstrap/DropdownButton";
import DropdownItem from "react-bootstrap/DropdownItem";
import Image from "react-bootstrap/Image";
import Moment from "react-moment";
import { Link } from "react-router-dom";

function MovieListItem({ movie, onEdit, onDelete, setMovie }) {
  function handleImageOnClick() {}

  return (
    <Container className={"px-0 mb-5 movie-item"}>
      <Row className={"mb-3"}>
        <Col>
          <DropdownButton id={"movie-menu-" + movie.id} title={""} alignRight>
            <DropdownItem
              onClick={() => {
                onEdit();
                setMovie(movie);
              }}
            >
              Edit
            </DropdownItem>
            <DropdownItem
              onClick={() => {
                onDelete();
                setMovie(movie);
              }}
            >
              Delete
            </DropdownItem>
          </DropdownButton>
          <Link to={"/movies/" + movie.id}>
            <Image
              onClick={handleImageOnClick}
              fluid
              src={movie.poster_path}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  "https://via.placeholder.com/500x750.png&text=No+Picture";
              }}
            />
          </Link>
        </Col>
      </Row>
      <Row className={"mb-2 opacity-4"}>
        <Col lg={9} md={9} sm={9} className={"movie-title"}>
          {movie.title}
        </Col>
        <Col
          lg={3}
          md={3}
          sm={3}
          className={
            "movie-date opacity-4 justify-content-center align-self-center"
          }
        >
          <Moment date={movie.release_date} format={"YYYY"} />
        </Col>
      </Row>
      <Row className={"mb-2 opacity-3"}>
        <Col className={"movie-genres"}>{movie.genres.join(", ")}</Col>
      </Row>
    </Container>
  );
}

export default MovieListItem;
