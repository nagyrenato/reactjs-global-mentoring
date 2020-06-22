import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

class SortBy extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.select = this.select.bind(this);
    this.state = {
      dropdownOpen: false,
      value: "Release date",
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  }

  select(event) {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
      value: event.target.innerText,
    });
  }

  render() {
    return (
      <DropdownButton
        className={"btn-block"}
        id="dropdown-item-button"
        title={this.state.value}
      >
        <Dropdown.Item onClick={this.select}>Release date</Dropdown.Item>
        <Dropdown.Item onClick={this.select}>Title</Dropdown.Item>
      </DropdownButton>
    );
  }
}
export default SortBy;
