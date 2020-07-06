import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

function SortBy({ options, selected, onChange }) {
  return (
    <div className={"justify-content-center align-items-center d-flex"}>
      <span className={"text-uppercase mr-3"}>Sort by</span>
      <DropdownButton
        variant={"none"}
        className={"btn-sort-by"}
        id="dropdown-item-button"
        title={selected}
        onSelect={onChange}
      >
        {options.map((sortByOption, idx) => (
          <Dropdown.Item
            eventKey={sortByOption}
            key={idx}
            className={"text-uppercase"}
          >
            {sortByOption}
          </Dropdown.Item>
        ))}
      </DropdownButton>
    </div>
  );
}

export default SortBy;
