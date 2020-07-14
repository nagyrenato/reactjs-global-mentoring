import React from "react";
import Form from "react-bootstrap/Form";
import { useFormikContext, useField } from "formik";
import TextareaAutosize from "react-autosize-textarea";
import { useRef } from "react";
import { useEffect } from "react";

const InputTextarea = ({ name, label, invalid, ...rest }) => {

  const { values } = useFormikContext();
  const [field, meta] = useField(name);

  //This magic is needed to set the textarea height properly when load an initial value
  const ref = useRef();
  useEffect(() => {
    if (values[name]) {
      ref.current.focus();
      ref.current.blur();
    }
  }, []);
  
  const classNameInvalid = invalid ? " is-invalid" : "";
  return (
    <Form.Group>
      <Form.Label>{label}</Form.Label>
      <TextareaAutosize
        ref={ref}
        name={name}
        className={"form-control shadow-none" + classNameInvalid}
        {...rest}
        {...field}
      />
      {meta.touched && meta.error && (
        <Form.Control.Feedback name={name} type="invalid">
          {meta.error}
        </Form.Control.Feedback>
      )}
    </Form.Group>
  );
};

export default InputTextarea;
