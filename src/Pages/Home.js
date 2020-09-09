import React from 'react';
import Axios from 'axios';
import api from '../api';
import { Row, Col } from 'react-bootstrap';
import Roast from '../components/Roast/Roast';

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
        <Row>
          {this.state.loaded ? this.state.roasts.map(roast => {
            return (
              <Col className="mb-4" lg="4">
                <Roast
                  image={roast.image}
                  caption={roast.caption}
                />
              </Col>
            );
          }) : <h3>Loading</h3>}
        </Row>
      </>
    );
  }
}

export default Home;