import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

function SortBy({ defaultSortBy, onChangeSortBy }) {
  return (
    <div className={"justify-content-center align-items-center d-flex"}>
      <span className={"text-uppercase mr-3"}>Sort by</span>
      <DropdownButton
        variant={"none"}
        className={"btn-sort-by"}
        id="dropdown-item-button"
        title={defaultSortBy}
      >
        <Dropdown.Item onClick={onChangeSortBy} className={"text-uppercase"}>
          Release date
        </Dropdown.Item>
        <Dropdown.Item onClick={onChangeSortBy} className={"text-uppercase"}>
          Rating
        </Dropdown.Item>
        <Dropdown.Item onClick={onChangeSortBy} className={"text-uppercase"}>
          Genre
        </Dropdown.Item>
      </DropdownButton>
    </div>
  );
}

export default SortBy;
