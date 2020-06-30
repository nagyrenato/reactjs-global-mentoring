import React from "react";
import ScrollToTop from "../utils/ScrollToTop";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const Layout = (props) => {
  return (
    <>
      <ScrollToTop />
      <Container>
        {[...props.children].map((child, key) => (
          <Row key={key}>{child}</Row>
        ))}
      </Container>
    </>
  );
};

export default Layout;
