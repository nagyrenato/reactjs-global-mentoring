import React from "react";
import AddMovie from "../components/AddMovie";
import SearchMovie from "../components/SearchMovie";
import ResultCount from "../components/ResultCount";
import MovieResultGroup from "../components/MovieResultGroup";
import MockData from "../mock/mock-data-empty";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

function HomePage() {
  return (
    <>
      <Container>
        <Row>
          <Container className="Header-background">
            <Row>
              <Col className={"d-flex justify-content-end"}>
                <AddMovie />
              </Col>
            </Row>
            <Row>
              <Col className={"col-1"}></Col>
              <Col className={"text-uppercase text-white col-10"}>
                <h1>Find your movie</h1>
              </Col>
              <Col className={"col-1"}></Col>
            </Row>
            <Row>
              <Col className={"col-1"}></Col>
              <Col className={"col-10"}>
                <SearchMovie />
              </Col>
              <Col className={"col-1"}></Col>
            </Row>
          </Container>
        </Row>
        <Row>
          <Container className="bg-dark">
            <Row>
              <ResultCount count={MockData.length} />
            </Row>
            <Row>
              <MovieResultGroup movies={MockData} />
            </Row>
          </Container>
        </Row>
      </Container>
    </>
  );
}

export default HomePage;
