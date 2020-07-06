import React from "react";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Select from "react-select";
import genres from "../utils/Genres";
import useForm from "../hooks/useForm";
import { useDispatch } from "react-redux";
import { upsertMovie } from "../store/actions/movies";

const MovieEditForm = ({ movie = {}, show, handleClose }) => {
  const [formValues, handleChange, resetForm] = useForm({
    title: movie.title,
    releaseDate: movie.release_date,
    url: movie.poster_path,
    genres: findGenresOptions(movie.genres),
    overview: movie.overview,
    runtime: movie.runtime,
  });

  let modalTitle = movie.id ? "Edit movie" : "Add movie";
  let submitText = movie.id ? "Save" : "Submit";

  function findGenresOptions(inputGenres = []) {
    return genres.filter((genre) => {
      return inputGenres.filter((input) => input === genre.value).length > 0
        ? genre
        : null;
    });
  }

  const dispatch = useDispatch();

  const getMovieFromUserInput = () => {
    return {
      ...movie,
      id: movie.id,
      title: formValues.title,
      release_date: formValues.releaseDate,
      poster_path: formValues.url,
      genres: formValues.genres.map((option) => option.label),
      overview: formValues.overview,
      runtime: parseInt(formValues.runtime),
    };
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton />

      <div className={"mx-5 mb-4 h2 modal-title"}>{modalTitle}</div>
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
            name="title"
            value={formValues.title}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Release date</Form.Label>
          <Form.Control
            type="text"
            placeholder="Select date"
            name="releaseDate"
            value={formValues.releaseDate}
            onChange={handleChange}
          />
          {/* TODO add a datepicker or something like that */}
        </Form.Group>
        <Form.Group>
          <Form.Label>Movie URL</Form.Label>
          <Form.Control
            type="text"
            placeholder="Movie URL here"
            name="url"
            value={formValues.url}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Genre</Form.Label>
          <Select
            isMulti={true}
            options={genres}
            classNamePrefix={"select-genre"}
            name="genres"
            onChange={(selectedValues) =>
              handleChange({
                target: { value: selectedValues, name: "genres" },
              })
            }
            value={formValues.genres}
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
            name="overview"
            value={formValues.overview}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Runtime</Form.Label>
          <Form.Control
            type="text"
            placeholder="Runtime here"
            name="runtime"
            value={formValues.runtime}
            onChange={handleChange}
          />
        </Form.Group>
      </Form>

      <Modal.Footer className={"mb-5"}>
        <Button
          className={"outline shadow-none"}
          variant={"secondary"}
          onClick={resetForm}
        >
          Reset
        </Button>
        <Button
          className={"shadow-none"}
          variant={"secondary"}
          onClick={() => {
            dispatch(upsertMovie(getMovieFromUserInput()));
            handleClose();
          }}
        >
          {submitText}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default MovieEditForm;
