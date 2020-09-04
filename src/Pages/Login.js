import React from './node_modules/react';
import { Form, Row, Col, Button, Alert, Spinner } from './node_modules/react-bootstrap';
import Axios from './node_modules/axios';
import api from '../api';
import { Redirect } from './node_modules/react-router-dom';
import tokenAction from '../actions/tokenAction';
import { loggedInAction } from '../actions/loggedInAction';
import { connect } from './node_modules/react-redux';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      incorrectLogin: false,
      correctLogin: false,
      loginLoading: false,
      token: '',
      redirect: false,
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
    this.setState({ loginLoading: true });

    Axios.post(api.login, { username: this.state.username, password: this.state.password })
      .then(res => {
        this.setState({
          incorrectLogin: false,
          correctLogin: true,
          loginLoading: false,
          token: res.data.token,
          redirect: true
        });
      })
      .catch(err => this.setState({
        incorrectLogin: true,
        correctLogin: false,
        loginLoading: false
      }));

    event.preventDefault();
  }

  renderLoginInfo = () => {
    if (this.state.incorrectLogin) {
      return (
        <Alert variant='danger'>
          Incorrect username or password. Please try again.
        </Alert>
      );
    } else if (this.state.correctLogin) {
      return (
        <Alert variant='success'>
          Awesome! You were logged in successfully.
        </Alert>
      );
    }
  };

  renderLoginBtn = () => {
    if (this.state.loginLoading) {
      return (
        <Button className="mt-3" variant="primary" type="submit" disabled={true}>
          <Spinner size="sm" animation="grow" variant="light" className="mr-2" />
          Login
        </Button>
      );
    } else {
      return (
        <Button className="mt-3" variant="primary" type="submit">
          Login
        </Button>
      );
    }
  };

  redirectIfLoggedIn = () => {
    if (this.state.redirect) {
      localStorage.setItem('token', this.state.token);
      this.props.tokenAction(this.state.token);
      this.props.loggedInAction();
      return <Redirect to="/" />;
    }
  };

  render = () => {
    return (
      <>
        {this.redirectIfLoggedIn()}

        < Row className="justify-content-md-center" >
          <Col md="4">
            <Form onSubmit={this.handleSubmit}>
              <h2 className="mb-4">Login</h2>

              {this.renderLoginInfo()}

              <Form.Group controlId="usename">
                <Form.Label>Username</Form.Label>
                <Form.Control onChange={this.handleUsernameChange} type="text" placeholder="Enter username" />
              </Form.Group>

              <Form.Group controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control onChange={this.handlePasswordChange} type="password" placeholder="Password" />
              </Form.Group>

              {this.renderLoginBtn()}
            </Form>
          </Col>
        </Row >
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    token: state.token,
    loggedIn: state.loggedIn
  };
};

const mapDispatchToProps = () => {
  return {
    tokenAction,
    loggedInAction
  };
};

export default connect(mapStateToProps, mapDispatchToProps())(Login);