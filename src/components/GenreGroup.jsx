import React from "react";
import ListGroup from "react-bootstrap/ListGroup";

function GenreGroup({ genres, onSelect }) {
  return (
    <>
      <ListGroup
        horizontal
        onSelect={onSelect}
        className={"genre-selector bg-transparent"}
      >
        {genres.map((genre, idx) => (
          <ListGroup.Item
            key={idx}
            eventKey={genre.label}
            action
            className={"bg-transparent text-white"}
          >
            {genre.label}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </>
  );
}

export default GenreGroup;
