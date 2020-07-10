import React from "react";
import Form from "react-bootstrap/Form";

const PlainText = ({ label, text, ...rest }) => {
  return (
    <Form.Group>
      <Form.Label>{label}</Form.Label>
      <Form.Text {...rest}>{text}</Form.Text>
    </Form.Group>
  );
};

export default PlainText;
