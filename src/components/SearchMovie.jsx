import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";

class SearchMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
    console.log("A change was handeled " + event.target.value);
  }

  handleSubmit(event) {
    console.log("A search was submitted: " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <>
        <Form>
          <Form.Group controlId="searcForm">
            <Form.Row>
              <Col className={"col-10"}>
                <Form.Control
                  className="text-danger bg-transparent"
                  placeholder="What do you want to watch"
                  value={this.state.value}
                  onChange={this.handleChange}
                />
              </Col>
              <Col>
                <Button
                  className="btn-danger text-uppercase"
                  variant="primary"
                  type="submit"
                  onSubmit={this.handleSubmit}
                  onClick={this.handleSubmit}
                >
                  Search
                </Button>
              </Col>
            </Form.Row>
          </Form.Group>
        </Form>
      </>
    );
  }
}

export default SearchMovie;
