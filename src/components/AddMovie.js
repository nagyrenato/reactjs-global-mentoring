import React from "react";
import Button from "react-bootstrap/Button";

class AddMovie extends React.Component {
  render() {
    return (
      <>
        <Button className="text-uppercase bg-transparent text-danger">
          <i class="fa fa-plus" aria-hidden="true"></i>
          <span class="ml-1"></span>
          Add movie
        </Button>
      </>
    );
  }
}

export default AddMovie;
