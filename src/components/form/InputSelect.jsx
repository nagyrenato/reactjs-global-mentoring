import React from "react";
import Form from "react-bootstrap/Form";
import { Field, ErrorMessage } from "formik";
import MultiSelect from "react-multi-select-component";

//TODO it's not working as expected, but only MultiSelect is in scope now
const SingleSelect = ({ options = [], placeholder = "", ...rest }) => {
  return (
    <Form.Control as="select" className="shadow-none custom-select" {...rest}>
      {placeholder && <option value="">{placeholder}</option>}
      {[...options].map(({ value, label }, index) => (
        <option value={value} key={index}>
          {label}
        </option>
      ))}
    </Form.Control>
  );
};

const InputSelect = ({
  name,
  label,
  options,
  multi = false,
  placeholder = "",
  invalid = false,
  ...rest
}) => {

  const classNameInvalid = invalid ? " is-invalid" : "";

  return (
    <Form.Group>
      <Form.Label>{label}</Form.Label>
      <Field name={name} {...rest}>
        {(props) => {
          return multi ? (
            <MultiSelect
              options={options}
              {...props.field}
              className={"multi-select" + classNameInvalid}
              onChange={(selected) => {
                props.form.setFieldTouched(name);
                props.form.setFieldValue(name, selected, true);
              }}
            />
          ) : (
            <SingleSelect
              options={options}
              placeholder={placeholder}
              {...props.field}
            />
          );
        }}
      </Field>
      <ErrorMessage name={name} type="invalid" component={Form.Control.Feedback} />
    </Form.Group>
  );
};

export default InputSelect;
