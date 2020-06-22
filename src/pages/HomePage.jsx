import React from "react";
import ResultCount from "../components/ResultCount";
import MovieResultGroup from "../components/MovieResultGroup";
import Container from "react-bootstrap/Container";
import SearchBar from "../components/SearchBar";
import GenreGroup from "../components/GenreGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Footer from "../components/Footer";
import SortBy from "../components/SortBy";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      formDisplay: false,
      sortBy: "Release Date".toUpperCase(),
      queryText: "",
      lastIndex: 0,
      genre: "All",
    };
    this.changeGenre = this.changeGenre.bind(this);
    this.changeSortBy = this.changeSortBy.bind(this);
  }

  changeGenre(value) {
    this.setState({
      genre: value,
    });
  }

  changeSortBy(value) {
    this.setState({
      sortBy: value,
    });
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
      <Container>
        <Row>
          <SearchBar />
        </Row>
        <Row className={"movie-list-background d-grid px-5 py-3"}>
          <Row>
            <Col className={"col-sm-5"}>
              <GenreGroup changeGenre={this.changeGenre}></GenreGroup>
            </Col>
            <Col className={"col-sm-4"}></Col>
            <Col className={"col-sm-3"}>
              <SortBy
                defaultSortBy={this.state.sortBy}
                changeSortBy={this.changeSortBy}
                className={"align-content-end"}
              ></SortBy>
            </Col>
          </Row>
          <Row>
            <ResultCount count={this.state.movies.length} />
            <MovieResultGroup movies={this.state.movies} />
          </Row>
        </Row>
        <Row>
          <Footer />
        </Row>
      </Container>
    );
  }
}

export default HomePage;
