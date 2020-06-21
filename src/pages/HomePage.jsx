import React from "react";
import AddMovie from "../components/AddMovie";
import SearchMovie from "../components/SearchMovie";
import ResultCount from "../components/ResultCount";
import MovieResultGroup from "../components/MovieResultGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

class HomePage extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      formDisplay: false,
      sortBy: "releaseDate",
      queryText: "",
      lastIndex: 0,
    };
  }

  componentDidMount() {
    fetch("./mock-data.json")
      .then((response) => response.json())
      .then((result) => {
        const moviesResult = result;
        this.setState({
          movies: moviesResult, // // movies: [] for testing the empty result component
        });
      });
  }

  render() {
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
                <ResultCount count={this.state.movies.length} />
              </Row>
              <Row>
                <MovieResultGroup movies={this.state.movies} />
              </Row>
            </Container>
          </Row>
        </Container>
      </>
    );
  }
}

export default HomePage;
