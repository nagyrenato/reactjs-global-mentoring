import React from "react";
import AddMovie from "../components/AddMovie";
import SearchMovie from "../components/SearchMovie";
import ResultCount from "../components/ResultCount";
import MovieResultGroup from "../components/MovieResultGroup";
import MockData from "../mock/mock-data";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

function HomePage() {
  return (
    <>
      <Container>
        <Row>
          <Col className={"text-uppercase text-white"}>
            <h1>Find your movie</h1>
          </Col>
          <Col>
            <AddMovie />
          </Col>
        </Row>
        <Row>
          <Col>
            <SearchMovie />
          </Col>
        </Row>
        <Row>
          <ResultCount count={MockData.length} />
        </Row>
        <Row>
          <MovieResultGroup movies={MockData} />
        </Row>
      </Container>
    </>
  );
}

export default HomePage;
