import React from "react";
import Form from "react-bootstrap/Form";
import { Field, ErrorMessage } from "formik";
import TextareaAutosize from "react-autosize-textarea";
import { useRef } from "react";
import { useEffect } from "react";

const InputTextarea = ({ name, label, invalid, value, ...rest }) => {
  //This magic is needed to set the textarea height properly when load an initial value
  const ref = useRef();
  useEffect(() => {
    if (value) {
      ref.current.focus();
      ref.current.blur();
    }
  }, []);
  const classNameInvalid = invalid ? " is-invalid" : "";
  return (
    <Form.Group>
      <Form.Label>{label}</Form.Label>
      <Field name={name}>
        {({ field }) => {
          return (
            <TextareaAutosize
              ref={ref}
              className={"form-control shadow-none" + classNameInvalid}
              {...rest}
              {...field}
            />
          );
        }}
      </Field>
      <ErrorMessage name={name} type="invalid" component={Form.Control.Feedback} />
    </Form.Group>
  );
};

export default InputTextarea;
