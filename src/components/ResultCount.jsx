import React from "react";
import PropTypes from "prop-types";

function ResultCount({ count }) {
  return (
    <p className="text-white">
      {" "}
      {count} <b>{count <= 1 ? "movie" : "movies"}</b> found{" "}
    </p>
  );
}

ResultCount.propTypes = {
  name: PropTypes.number,
};

export default ResultCount;
