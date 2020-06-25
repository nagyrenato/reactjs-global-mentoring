import React from "react";
import ListGroup from "react-bootstrap/ListGroup";

function GenreGroup({ onSelect }) {
  return (
    <>
      <ListGroup horizontal className={"genre-selector bg-transparent"}>
        {["All", "Documentary", "Comedy", "Horror", "Crime"].map(
          (genre, idx) => (
            <ListGroup.Item
              key={idx}
              action
              onClick={onSelect}
              className={"bg-transparent text-white"}
            >
              {genre}
            </ListGroup.Item>
          )
        )}
      </ListGroup>
    </>
  );
}

export default GenreGroup;
