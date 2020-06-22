import React from "react";
import ResultCount from "../components/ResultCount";
import MovieResultGroup from "../components/MovieResultGroup";
import Container from "react-bootstrap/Container";
import SearchBar from "../components/SearchBar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Footer from "../components/Footer";

class HomePage extends React.Component {
    constructor(props) {
        super(props);
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
            <Container>
                <Row>
                    <SearchBar/>
                </Row>
                <Row className={"movie-list-background d-grid px-5 py-3"}>
                    <div>All Documentary Comedy Horror ...</div> {/* TODO fix this*/}
                    <ResultCount count={this.state.movies.length}/>
                    <MovieResultGroup movies={this.state.movies}/>
                </Row>
                <Row>
                    <Footer />
                </Row>
            </Container>
        );
    }
}

export default HomePage;
