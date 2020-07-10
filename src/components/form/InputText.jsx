import React from "react";
import Form from "react-bootstrap/Form";
import { Field, ErrorMessage } from "formik";

const InputText = ({ name, label, invalid, ...rest }) => {
  return (
    <Form.Group>
      <Form.Label>{label}</Form.Label>
      <Field as={Form.Control} name={name} isInvalid={invalid} {...rest} />
      <ErrorMessage name={name} type="invalid" component={Form.Control.Feedback} />
    </Form.Group>
  );
};

export default InputText;
