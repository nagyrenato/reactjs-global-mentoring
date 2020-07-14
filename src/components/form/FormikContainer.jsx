import React from "react";
import { Formik, Form } from "formik";

const FormikContainer = ({
  initialValues,
  validationSchema,
  onSubmit,
  className,
  children,
}) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => (
        <Form className={className}>
          {[...children].filter(Boolean).map((child, index) => {
            return React.cloneElement(child, {
              key: index,
              invalid: formik.touched[child.props.name] && !!formik.errors[child.props.name]
            });
          })}
        </Form>
      )}
    </Formik>
  );
};

export default FormikContainer;
