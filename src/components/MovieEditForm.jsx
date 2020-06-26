import React from "react";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Select from "react-select";
import genres from "../utils/genres";

function MovieEditForm({ movie = {}, show, handleClose }) {
  let title = movie.id ? "Edit movie" : "Add movie";
  let submitText = movie.id ? "Save" : "Submit";

  function findGenresOptions(inputGenres = []) {
    return genres.filter((genre) => {
      return inputGenres.filter((input) => input === genre.value).length > 0
        ? genre
        : null;
    });
  }

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton />

      <div className={"mx-5 mb-4 h2 modal-title"}>{title}</div>
      <Form className={"mx-5"}>
        {movie.id && (
          <Form.Group>
            <Form.Label>Movie ID</Form.Label>
            <Form.Text className={"movie-id"}>{movie.id}</Form.Text>
          </Form.Group>
        )}
        <Form.Group>
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Title here"
            value={movie.title}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Release date</Form.Label>
          <Form.Control
            type="text"
            placeholder="Select date"
            value={movie.release_date}
          />{" "}
          {/* TODO add a datepicker or something like that */}
        </Form.Group>
        <Form.Group>
          <Form.Label>Movie URL</Form.Label>
          <Form.Control
            type="text"
            placeholder="Movie URL here"
            value={movie.poster_path}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Genre</Form.Label>
          <Select
            isMulti={true}
            options={genres}
            classNamePrefix={"select-genre"}
            defaultValue={findGenresOptions(movie.genres)}
            theme={(theme) => ({
              ...theme,
              borderRadius: 6,
              colors: {
                ...theme.colors,
                primary25: "#555555",
                primary: "#000000",
                neutral0: "#323232",
                neutral70: "#555555",
                danger: "#555555",
                dangerLight: "#cccccc",
              },
            })}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Overview</Form.Label>
          <Form.Control
            type="text"
            placeholder="Overview here"
            value={movie.overview}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Runtime</Form.Label>
          <Form.Control
            type="text"
            placeholder="Runtime here"
            value={movie.runtime}
          />
        </Form.Group>
      </Form>

      <Modal.Footer className={"mb-5"}>
        <Button className={"outline shadow-none"} variant={"secondary"}>
          Reset
        </Button>
        <Button className={"shadow-none"} variant={"secondary"}>
          {submitText}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MovieEditForm;
