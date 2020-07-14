import React from "react";
import InputText from "./InputText";
import InputSelect from "./InputSelect";
import InputTextarea from "./InputTextarea";
import PlainText from "./PlainText";

const FormikFormElement = ({ type, ...rest }) => {
  switch (type) {
    case "plain":
      return <PlainText {...rest} />;
    case "text":
      return <InputText {...rest} />;
    case "select":
      return <InputSelect {...rest} />;
    case "textarea":
      return <InputTextarea {...rest} />;;
    default:
      return null;
  }
};

export default FormikFormElement;
