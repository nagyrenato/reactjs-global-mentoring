import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Moment from "react-moment";

/** In order to avoid the following error: Warning:
 *  Please use `require("react-router-dom").Link` instead of `require("react-router-dom/Link")`.
 *  Support for the latter will be removed in the next major release.
 */
const Link = require("react-router-dom").Link;

function MovieDetailBar({ movieList, props }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (movieList.length === 0) {
    return null;
  }

  const currentMovie = movieList.find(
    (movie) => movie.id.toString() === props.match.params.movieId
  );

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
