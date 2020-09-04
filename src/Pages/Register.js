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
    };
  }

  handleSubmit = event => {
    this.setState({ loading: true });

    Axios.post(api.register, {
      email: this.state.email,
      username: this.state.username,
      password: this.state.password
    })
      .then(res => {
        this.setState({
          loading: false,
          userCreated: true,
        })
      })
      .catch(err => {
        this.setState({
          loading: false,
          error: true,
        })
      });

    event.preventDefault();
  };

  handleEmailChange = event => this.setState({ email: event.target.value });
  handleUsernameChange = event => this.setState({ username: event.target.value });
  handlePasswordChange = event => this.setState({ password: event.target.value });

  renderRegisterBtn = () => {
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
                <Form.Control onChange={this.handleEmailChange} type="text" placeholder="Enter username" />
              </Form.Group>

              <Form.Group controlId="usename">
                <Form.Label>Username</Form.Label>
                <Form.Control onChange={this.handleUsernameChange} type="text" placeholder="Enter username" />
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