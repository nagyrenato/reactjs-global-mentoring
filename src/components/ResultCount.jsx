import React from "react";
import PropTypes from "prop-types";

function ResultCount({ count }) {
  return (
    <div className="my-4">
      {" "}
      <b>{count}</b> {count <= 1 ? " movie" : " movies"} found
    </div>
  );
}

ResultCount.propTypes = {
  count: PropTypes.number,
};

export default ResultCount;
