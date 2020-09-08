import React from 'react';
import Axios from 'axios';
import api from '../api';
import { Row, Col, Card, Button } from 'react-bootstrap';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      roasts: [],
      page: 1,
      limit: 30,
      loading: false,
      loaded: false,
    };
  }

  componentDidMount = () => {
    this.setState({ loading: true });

    Axios.get(api.roasts)
      .then(roasts => this.setState({ roasts: roasts.data, loading: false, loaded: true }))
      .catch(_ => { });
  };

  render = () => {
    return (
      <>
        <h1>Homepage</h1>
        <br />
        <Row>
          {this.state.loaded ? this.state.roasts.map(roast => {
            return (
              <Col className="mb-4" lg="4">
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src="images/100px180.svg" />
                  <Card.Body>
                    <Card.Title>{roast.caption}</Card.Title>
                    <Card.Text>Hello world this is a text</Card.Text>
                    <Button variant="primary" size="sm">Expand</Button>
                  </Card.Body>
                </Card>
              </Col>
            );
          }) : <h3>Loading</h3>}
        </Row>
      </>
    );
  }
}

export default Home;