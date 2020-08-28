import React from 'react';
// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <>
      <Navbar />

      <Container className="mt-4">
        <p>Hello world!</p>
      </Container>
    </>
  );
};

export default App;
