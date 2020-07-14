import React, { useCallback, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import InputGroup from "react-bootstrap/InputGroup";
import MovieEditForm from "./MovieEditForm";
import { useHistory } from "react-router-dom";

function SearchBar() {
  const history = useHistory();

  const [show, setShow] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const hideModal = useCallback(() => setShow(false), [setShow]);
  const showModal = useCallback(() => setShow(true), [setShow]);

  function handleChange(event) {
    setSearchTerm(event.target.value);
  }

  function handleClick() {
    history.push(`/search/${searchTerm}`);
  }

  return (
    <>
      <div className={"search-box mb-3"}>
        <div className={"search-box-background"}></div>
        <div className={"search-box-foreground"}>
          <Row className={"m-4 mb-5 align-items-center"}>
            <Col>
              <h5 className={"logo ml-4"}>
                <strong>netflix</strong>roulette
              </h5>
            </Col>
            <Col className={"text-right"}>
              <Button
                className={"btn-add-movie shadow-none"}
                onClick={showModal}
              >
                + Add movie
              </Button>
            </Col>
          </Row>

          <Container className={"ml-5"}>
            <Col>
              <h1 className={"title mb-4"}>Find your movie</h1>
            </Col>
            <InputGroup className={"align-items-center"}>
              <Col>
                <input
                  className={"input-lg"}
                  value={searchTerm}
                  onChange={handleChange}
                  placeholder={"What do you want to watch?"}
                />
              </Col>
              <Col>
                <Button
                  size={"lg"}
                  onClick={handleClick}
                  className={"ml-2 pl-5 pr-5 shadow-none"}
                >
                  Search
                </Button>
              </Col>
            </InputGroup>
          </Container>
        </div>
      </div>

      {show && <MovieEditForm show={show} handleClose={hideModal} />}
    </>
  );
}

export default SearchBar;
