import React from "react";
import ListGroup from "react-bootstrap/ListGroup";

class GenreGroup extends React.Component {
  constructor(props) {
    super(props);
    this.select = this.select.bind(this);
    this.state = {
      value: "All",
    };
  }

  select(event) {
    console.log(event.target.innerText);
    this.setState({
      value: event.target.innerText,
    });
  }

  render() {
    return (
      <ListGroup horizontal className={"bg-transparent"}>
        <ListGroup.Item
          action
          onClick={this.select}
          className={"bg-transparent text-white"}
        >
          All
        </ListGroup.Item>
        <ListGroup.Item
          action
          onClick={this.select}
          className={"bg-transparent text-white"}
        >
          Documentary
        </ListGroup.Item>
        <ListGroup.Item
          action
          onClick={this.select}
          className={"bg-transparent text-white"}
        >
          Comedy
        </ListGroup.Item>
        <ListGroup.Item
          action
          onClick={this.select}
          className={"bg-transparent text-white"}
        >
          Horror
        </ListGroup.Item>
        <ListGroup.Item
          action
          onClick={this.select}
          className={"bg-transparent text-white"}
        >
          Crime
        </ListGroup.Item>
      </ListGroup>
    );
  }
}
export default GenreGroup;
