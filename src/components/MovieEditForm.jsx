import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import genres from "../utils/Genres";
import { useDispatch } from "react-redux";
import { upsertMovie } from "../store/actions/movies";
import * as yup from "yup";
import FormikContainer from "./form/FormikContainer";
import FormikFormElement from "./form/FormikFormElement";

const MovieEditForm = ({ movie = {}, show, handleClose }) => {
  let modalTitle = movie.id ? "Edit movie" : "Add movie";
  let submitText = movie.id ? "Save" : "Submit";

  const validationSchema = yup.object({
    title: yup.string().required("Title is required").max(100),
    release_date: yup.date().typeError("Must be a valid date"),
    poster_path: yup.string().url("Must be a valid URL").required("Movie URL is required"),
    genres: yup.array().min(1, "Genres is required").required("Genres is required"),
    overview: yup.string().max(1000, "Must be less than 1000 characters").required("Overview is required"),
    runtime: yup.number().min(10).max(300).required("Runtime is required").typeError("Must be a number")
  });

  const dispatch = useDispatch();
  const onSubmit = (data) => {
    const selectedGenres = data.genres.map((option) => option.value);
    const movieFromUserInput = {
      ...data,
      genres: selectedGenres,
      runtime: parseInt(data.runtime),
      tagline: data.tagline || "-",
    };
    dispatch(upsertMovie(movieFromUserInput));
    handleClose();
  };

  const initialGenresAsOption = genres.filter((genreOption) => {
    return (movie.genres || []).filter(
      (movieGenre) => movieGenre === genreOption.value
    ).length > 0
      ? genreOption
      : null;
  });

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton />

      <div className="mx-5 mb-4 h2 modal-title">{modalTitle}</div>

      <FormikContainer
        initialValues={{ ...movie, genres: initialGenresAsOption }}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        className="mx-5"
      >
        {movie.id && (
          <FormikFormElement
            type="plain"
            name="id"
            label="Movie id"
            text={movie.id}
            className="movie-id"
          />
        )}
        <FormikFormElement
          type="text"
          name="title"
          label="Title"
          placeholder="Title here"
        />
        <FormikFormElement
          type="text"
          name="release_date"
          label="Release date"
          placeholder="Release date here"
        />
        <FormikFormElement
          type="text"
          name="poster_path"
          label="Movie URL"
          placeholder="Movie URL here"
        />
        <FormikFormElement
          type="select"
          name="genres"
          label="Genres"
          multi={true}
          options={genres}
        />
        <FormikFormElement
          type="textarea"
          name="overview"
          label="Overview"
          placeholder="Overview here"
        />
        <FormikFormElement
          type="text"
          name="runtime"
          label="Runtime"
          placeholder="Runtime here"
        />

        <Modal.Footer className="mb-5">
          <Button className="outline shadow-none" variant="secondary">
            Reset
          </Button>
          <Button className="shadow-none" variant="secondary" type="submit">
            {submitText}
          </Button>
        </Modal.Footer>
      </FormikContainer>
    </Modal>
  );
};

export default MovieEditForm;
