import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import sortByOptions from "../utils/sortByOptions";

function SortBy({ defaultSortBy, onChangeSortBy }) {
  return (
    <div className={"justify-content-center align-items-center d-flex"}>
      <span className={"text-uppercase mr-3"}>Sort by</span>
      <DropdownButton
        variant={"none"}
        className={"btn-sort-by"}
        id="dropdown-item-button"
        title={defaultSortBy}
        onSelect={onChangeSortBy}
      >
        {sortByOptions.map((sortByOption, idx) => (
          <Dropdown.Item
            eventKey={sortByOption.value}
            key={idx}
            className={"text-uppercase"}
          >
            {sortByOption.label}
          </Dropdown.Item>
        ))}
      </DropdownButton>
    </div>
  );
}

export default SortBy;
