import React from "react";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { deleteMovieFromDb } from "../store/actions/movies"

function MovieDeleteForm({ movie, show, handleClose }) {
  const dispatch = useDispatch();

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton />

      <div className={"mx-5 mb-4 h2 modal-title"}>Delete movie</div>
      <Form className={"mx-5"}>
        <Form.Group>
          <Form.Label className={"text-white"}>
            Are you sure you want to delete this movie?
          </Form.Label>
        </Form.Group>
      </Form>

      <Modal.Footer className={"mb-5"}>
        <Button
          className={"shadow-none"}
          variant={"secondary"}
          onClick={() => {
            dispatch(deleteMovieFromDb(movie.id));
            handleClose();
          }}
        >
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MovieDeleteForm;
