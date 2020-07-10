import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <>
      <div className={"notfound-box-background"}>
        <div className={"notfound-box mb-3"}>
          <h5 className={"logo ml-4"}>
            <strong>netflix</strong>roulette
          </h5>
          <Container className={"text-capitalize empty-movie-list"}>
            <Row className={"d-flex align-items-center justify-content-center"}>
              <p>page not found</p>
            </Row>
            <Row className={"d-flex align-items-center justify-content-center"}>
              <Link to={"/"}>
                <Button className={"btn-go-back-to-main shadow-none"}>
                  go back to home
                </Button>
              </Link>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}
export default NotFound;
