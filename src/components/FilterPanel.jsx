import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SortBy from "./SortBy";
import GenreGroup from "./GenreGroup";
import genreOptions from "../utils/Genres";
import { RELEASE_DATE, TITLE, RATING } from "../utils/SortByOptions";
import { useDispatch, useSelector } from "react-redux";
import { setSortBy } from "../store/actions/sortBy";
import { setGenre } from "../store/actions/genre";
genreOptions.unshift({ value: "all", label: "All" });
const genres = genreOptions;

const FilterPanel = () => {
  const dispatch = useDispatch();
  const title = useSelector((state) => state.sortBy);

  return (
    <Row className="filter-bar">
      <Col sm={9} md={9} lg={9} xl={9}>
        <GenreGroup
          genres={genres}
          onSelect={(value) => dispatch(setGenre(value))}
        />
      </Col>
      <Col
        sm={3}
        md={3}
        lg={3}
        xl={3}
        className="justify-content-end align-items-center d-flex"
      >
        <SortBy
          sortByOptions={[RELEASE_DATE, TITLE, RATING]}
          title={title}
          onChangeSortBy={(value) => {
            dispatch(setSortBy(value));
          }}
          className="align-content-end"
        />
      </Col>
    </Row>
  );
};

export default FilterPanel;
