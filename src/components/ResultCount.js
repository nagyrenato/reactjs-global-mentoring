import React from "react";

class ResultCount extends React.Component {
  render() {
    return (
      <p className="text-white">
        {this.props.count} <b>{this.props.count <= 1 ? "movie" : "movies"}</b>{" "}
        found
      </p>
    );
  }
}

export default ResultCount;
