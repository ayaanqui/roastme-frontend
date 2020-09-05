import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Row, Col, Button, Alert, Spinner } from 'react-bootstrap';
import Axios from 'axios';
import api from '../api';

class Register extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      username: '',
      password: '',
      email: '',
      userCreated: false,
      error: false,

      emailIsValid: false,
      emailIsInvalid: false,
      usernameIsValid: false,
      usernameIsInvalid: false,
      passwordIsValid: false,
      passwordIsInvalid: false,
    };
  }

  handleSubmit = event => {
    this.setState({ loading: true });

    if (this.state.emailIsValid && this.state.usernameIsValid && this.state.passwordIsValid) {
      Axios.post(api.register, {
        email: this.state.email,
        username: this.state.username,
        password: this.state.password
      })
        .then(res => this.setState({ userCreated: true, loading: false }))
        .catch(err => this.setState({ error: true, loading: false }));
    } else {
      this.setState({ loading: false });
    }
    event.preventDefault();
  };

  handleEmailChange = event => {
    const email = event.target.value.toLowerCase().replace(/\s/g, '');

    if (email === '') {
      this.setState({ emailIsValid: false, emailIsInvalid: false })
      return null;
    }

    if (email !== this.state.email) {
      this.setState({ email: email });

      Axios.post(`${api.base}/auth/check-email`, { email: email })
        .then(res => {
          if (res.data.unique)
            this.setState({ emailIsInvalid: false, emailIsValid: true });
          else
            this.setState({ emailIsInvalid: true, emailIsValid: false });
        })
        .catch(() => { });
    }
  };
  handleUsernameChange = event => {
    const username = event.target.value.replace(/\s/g, '');

    if (username === '') {
      this.setState({ usernameIsValid: false, emailIsInvalid: false })
      return null;
    }

    if (username !== this.state.username) {
      this.setState({ username: username });

      Axios.post(`${api.base}/auth/check-username`, { username: username })
        .then(res => {
          if (res.data.unique)
            this.setState({ usernameIsInvalid: false, usernameIsValid: true });
          else
            this.setState({ usernameIsInvalid: true, usernameIsValid: false });
        })
        .catch(() => { });
    }
  };
  handlePasswordChange = event => this.setState({ password: event.target.value, passwordIsInvalid: false, passwordIsValid: true });

  renderRegisterBtn = () => {
    if (!this.state.emailIsValid || !this.state.usernameIsValid || !this.state.passwordIsValid) {
      return (
        <Button className="mt-3" variant="primary" type="submit" disabled={true}>
          Register
        </Button>
      );
    }

    if (this.state.loading) {
      return (
        <Button className="mt-3" variant="primary" type="submit" disabled={true}>
          <Spinner size="sm" animation="grow" variant="light" className="mr-2" />
          Register
        </Button>
      );
    } else {
      return (
        <Button className="mt-3" variant="primary" type="submit">
          Register
        </Button>
      );
    }
  };

  renderRegsiterInfo = () => {
    if (this.state.error) {
      return (
        <Alert variant='danger'>
          Could not create account. Username or Email may have already been taken.
        </Alert>
      );
    } else if (this.state.userCreated) {
      return (
        <Alert variant='success'>
          Awesome! Your account was created. You can now <Link to='/login'>login</Link>
        </Alert>
      );
    }
  };

  render = () => {
    return (
      <>
        <Row className="justify-content-md-center">
          <Col md="4">
            <Form onSubmit={this.handleSubmit}>
              <h2 className="mb-4">Create account</h2>

              {this.renderRegsiterInfo()}

              <Form.Group controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control onChange={this.handleEmailChange} type="email" placeholder="Enter email" isValid={this.state.emailIsValid} isInvalid={this.state.emailIsInvalid} />
                <Form.Control.Feedback type='invalid'>Email is already in use by another user</Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="username">
                <Form.Label>Username</Form.Label>
                <Form.Control onChange={this.handleUsernameChange} type="text" placeholder="Enter username" isValid={this.state.usernameIsValid} isInvalid={this.state.usernameIsInvalid} />
                <Form.Control.Feedback type='invalid'>Username has already been taken</Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control onChange={this.handlePasswordChange} type="password" placeholder="Password" />
              </Form.Group>

              {this.renderRegisterBtn()}
            </Form>
          </Col>
        </Row>
      </>
    );
  };
}

export default Register;