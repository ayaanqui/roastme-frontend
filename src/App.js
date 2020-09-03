import React from 'react';
import { Container } from 'react-bootstrap';
import Navbar from './components/Navbar';
import Routes from './Routes';
import { BrowserRouter } from 'react-router-dom';
import Axios from 'axios';
import api from './api';
import { connect } from 'react-redux';
import tokenAction from './actions/tokenAction';

class App extends React.Component {
  constructor(props) {
    super();

    this.state = {
      user: {},
      token: '',
      loggedIn: false,
      roasts: {},
    };
  }

  componentDidMount() {
    const token = localStorage.getItem('token');
    if (token) {
      // Check if token is valid
      Axios.get(api.verify, {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      })
        .then(res => {
          if (res.data.loggedIn) {
            this.setState({ token: token, loggedIn: true, });
            this.props.tokenAction(this.state.token);
          }
        })
        .catch(err => { });
    }
  }

  render = () => {
    return (
      <BrowserRouter>
        <Navbar />

        <Container className="mt-4">
          <Routes />
        </Container>
      </BrowserRouter>
    );
  }
};

const mapStateToProps = state => {
  return {
    token: state.token,
  };
};

const mapDispatchToProps = () => {
  return {
    tokenAction,
  };
};

export default connect(mapStateToProps, mapDispatchToProps())(App);
