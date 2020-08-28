import React from 'react';
// import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';
import Navbar from './components/Navbar';
import Routes from './Routes';
import { BrowserRouter } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>

      <Navbar />

      <Container className="mt-4">
        <Routes />
      </Container>
    </BrowserRouter>
  );
};

export default App;
