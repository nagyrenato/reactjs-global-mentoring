import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <>
      <div className={"not-found not-found-box-background"}>
        <div className={"not-found-box mb-3"}>
          <Container className={"empty-movie-list"}>
            <Row className={"m-4 mb-5 align-items-center"}>
              <h5 className={"logo ml-4"}>
                <strong>netflix</strong>roulette
              </h5>
            </Row>
            <Row className={"d-flex align-items-center justify-content-center"}>
              <p className="not-found-page-not-found">page not found</p>
            </Row>
            <Row
              className={
                "not-found-go-back-to-home d-flex align-items-center justify-content-center"
              }
            >
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
