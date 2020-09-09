import React from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import api from '../api';
import Axios from 'axios';
import { connect } from 'react-redux';
import tokenAction from '../actions/tokenAction';

class CreateRoast extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedFile: null,
      caption: '',
      description: '',
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    const token = this.props.token;

    let formData = new FormData();

    formData.append('caption', this.state.caption);
    formData.append('description', this.state.description);
    formData.append('image', this.state.selectedFile);

    Axios.post(
      api.roasts,
      formData,
      {
        headers: { Authorization: `Bearer ${token}` }
      }
    )
      .then(roast => console.log(roast))
      .catch(err => console.log(err));
  };

  handleImageChange = event => this.setState({ selectedFile: event.target.files[0] });
  handleCaptionChange = event => this.setState({ caption: event.target.value });

  fileData = () => {
    if (this.state.selectedFile) {
      return (
        <div>
          <h2>File Details:</h2>
          <p>File Name: {this.state.selectedFile.name}</p>
          <p>File Type: {this.state.selectedFile.type}</p>
          <p>
            Last Modified:{" "}
            {this.state.selectedFile.lastModifiedDate.toDateString()}
          </p>
        </div>
      );
    } else {
      return (
        <div>
          <br />
          <h4>Choose before Pressing the Upload button</h4>
        </div>
      );
    }
  };

  render = () => {
    return (
      <>
        <Row className="justify-content-md-center">
          <Col md="4">
            <Form
              onSubmit={this.handleSubmit}
              encType="multipart/form-data"
            >
              <h2 className="mb-4">Create Roast</h2>

              <Form.Group controlId="image">
                <Form.File id="image" label="Upload your roasts" onChange={this.handleImageChange} />
              </Form.Group>

              <Form.Group controlId="caption">
                <Form.Label>Caption</Form.Label>
                <Form.Control placeholder="Caption" onChange={this.handleCaptionChange} />
              </Form.Group>

              <Button className="mt-3" variant="primary" type="submit">
                Post
              </Button>

              <br />
              <br />

              {this.fileData()}
            </Form>
          </Col>
        </Row>
      </>
    );
  };
}

const mapStateToProps = state => {
  return {
    token: state.token,
    loggedIn: state.loggedIn,
  };
};

const mapDispatchToProps = () => {
  return {
    tokenAction,
  };
};

export default connect(mapStateToProps, mapDispatchToProps())(CreateRoast);