import React from 'react';
import { Container } from 'react-bootstrap';
import Navbar from './components/Navbar';
import Routes from './Routes';
import { BrowserRouter } from 'react-router-dom';

class App extends React.Component {
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

export default App;
