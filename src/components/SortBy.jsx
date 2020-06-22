import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Row from "react-bootstrap/Row";

class SortBy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownOpen: false,
    };

    this.toggle = this.toggle.bind(this);
    this.select = this.select.bind(this);
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  }

  select(event) {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
    this.props.changeSortBy(event.target.innerText);
  }

  render() {
    return (
      <>
        <Row>
          <p className={"text-uppercase"}>Sort by</p>
          <DropdownButton
            className={"bg-secondary"}
            id="dropdown-item-button"
            title={this.props.defaultSortBy}
          >
            <Dropdown.Item onClick={this.select} className={"text-uppercase"}>
              Release date
            </Dropdown.Item>
            <Dropdown.Item onClick={this.select} className={"text-uppercase"}>
              Title
            </Dropdown.Item>
          </DropdownButton>
        </Row>
      </>
    );
  }
}
export default SortBy;
