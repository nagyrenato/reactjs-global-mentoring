import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SortBy from "./SortBy";
import GenreGroup from "./GenreGroup";
import genreOptions from "../utils/genres";
import sortByOptions from "../utils/sortByOptions";

genreOptions.unshift({ value: "all", label: "All" });
const genres = genreOptions;

const FilterPanel = () => {
  return (
    <Row className="filter-bar">
      <Col sm={9} md={9} lg={9} xl={9}>
        <GenreGroup
          genres={genres}
          onSelect={() => console.log("genre selected...")}
        />
      </Col>
      <Col sm={3} md={3} lg={3} xl={3} className="justify-content-end align-items-center d-flex">
        <SortBy
          sortByOptions={sortByOptions}
          indexOfSelectedOption={0}
          onChangeSortBy={() => console.log("sortby changed...")}
          className="align-content-end"
        />
      </Col>
    </Row>
  );
};

export default FilterPanel;
