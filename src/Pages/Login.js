import React from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import Axios from 'axios';
import api from '../api';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      form: '',
    };
  }

  handleUsernameChange = event => {
    let username = event.target.value;
    this.setState({ username: username });
  }

  handlePasswordChange = event => {
    let password = event.target.value;
    this.setState({ password: password });
  }

  handleSubmit = event => {
    Axios.post(api.login, { username: this.state.username, password: this.state.password })
      .then(res => console.log(res.data))
      .catch(err => console.log(err));

    event.preventDefault();
  }

  render() {
    return (
      <Row className="justify-content-md-center">
        <Col md="4">
          <Form onSubmit={this.handleSubmit}>
            <h2 className="mb-4">Login</h2>

            <Form.Group controlId="usename">
              <Form.Label>Username</Form.Label>
              <Form.Control onChange={this.handleUsernameChange} type="text" placeholder="Enter username" />
            </Form.Group>

            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control onChange={this.handlePasswordChange} type="password" placeholder="Password" />
            </Form.Group>

            <Button className="mt-2" variant="primary" type="submit">
              Login
            </Button>
          </Form>
        </Col>
      </Row>
    );
  }
}

export default Login;