import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Moment from "react-moment";

function MovieDetailBar({ movieList }) {
  const currentMovie = {
    id: 337167,
    title: "Fifty Shades Freed",
    tagline: "Don't miss the climax",
    vote_average: 6.1,
    vote_count: 1195,
    release_date: "2018-02-07",
    poster_path:
      "https://image.tmdb.org/t/p/w500/3kcEGnYBHDeqmdYf8ZRbKdfmlUy.jpg",
    overview:
      "Believing they have left behind shadowy figures from their past, newlyweds Christian and Ana fully embrace an inextricable connection and shared life of luxury. But just as she steps into her role as Mrs. Grey and he relaxes into an unfamiliar stability, new threats could jeopardize their happy ending before it even begins.",
    budget: 55000000,
    revenue: 136906000,
    genres: ["Drama", "Romance"],
    runtime: 106,
  };

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
              <Button className={"btn-search-movie shadow-none"}>
                <i className="fa fa-search" aria-hidden="true"></i>
              </Button>
            </Col>
          </Row>

          <Container className={"ml-3"}>
            <Row>
              <Col className={"col-4"}>
                <Image
                  height={400}
                  src={currentMovie.poster_path}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://via.placeholder.com/500x750.png&text=No+Picture";
                  }}
                ></Image>
              </Col>
              <Col className={"col-8"}>
                <Row>
                  <h1 className={"title"}>{currentMovie.title}</h1>
                  <h1 className={"rating"}>{currentMovie.vote_average}</h1>
                </Row>
                <Row>
                  <p className={"tagline"}>{currentMovie.tagline}</p>
                </Row>
                <Row>
                  <p className={"year"}>
                    <Moment date={currentMovie.release_date} format={"YYYY"} />
                  </p>
                  <p className={"runtime"}>{currentMovie.runtime} min</p>
                </Row>
                <Row>
                  <p className={"overview"}>{currentMovie.overview}</p>
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
