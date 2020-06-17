import React from "react";

function ResultCount({ count }) {
  return (
    <p className="text-white">
      {" "}
      {count} <b>{count <= 1 ? "movie" : "movies"}</b> found{" "}
    </p>
  );
}

export default ResultCount;
