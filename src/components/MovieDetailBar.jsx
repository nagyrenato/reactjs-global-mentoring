import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Moment from "react-moment";
import { Link } from "react-router-dom";

function MovieDetailBar({ movie }) {
  return (
    <>
      <div className={"movie-detail-box mb-3"}>
        <div className={"movie-detail-box-background"}></div>
        <div className={"movie-detail-box-foreground"}>
          <Row className={"m-4 mb-5 align-items-center"}>
            <Col>
              <h5 className={"logo ml-4"}>
                <strong>netflix</strong>roulette
              </h5>
            </Col>
            <Col className={"text-right"}>
              <Link to={"/"}>
                <Button className={"btn-search-movie shadow-none"}>
                  <i className="fa fa-search" aria-hidden="true"></i>
                </Button>
              </Link>
            </Col>
          </Row>

          <Container className={"ml-3"}>
            <Row>
              <Col className={"col-4"}>
                <Image
                  height={400}
                  src={movie.poster_path}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://via.placeholder.com/500x750.png&text=No+Picture";
                  }}
                ></Image>
              </Col>
              <Col className={"col-8"}>
                <Row>
                  <h1 className={"title"}>{movie.title}</h1>
                  <h1 className={"rating"}>{movie.vote_average}</h1>
                </Row>
                <Row>
                  <p className={"tagline"}>{movie.tagline}</p>
                </Row>
                <Row>
                  <p className={"year"}>
                    <Moment date={movie.release_date} format={"YYYY"} />
                  </p>
                  <p className={"runtime"}>{movie.runtime} min</p>
                </Row>
                <Row>
                  <p className={"overview"}>{movie.overview}</p>
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}

export default MovieDetailBar;
