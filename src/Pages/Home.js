import React from 'react';
import Axios from 'axios';
import api from '../api';
import Roast from '../components/Roast/Roast';
import Masonry from 'react-masonry-css'
import { Spinner } from 'react-bootstrap';

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
    const breakpointColumnsObj = {
      default: 3,
      500: 2
    };

    const loadingScreen = (
      <div className="text-center pd-10">
        <Spinner size="lg" animation="grow" variant="dark" />
      </div>
    );

    return (
      <>
        {
          this.state.loaded ? null : loadingScreen
        }

        < Masonry
          breakpointCols={breakpointColumnsObj}
          className="masonry-grid"
          columnClassName="masonry-grid_column"
        >
          {
            this.state.loaded ? this.state.roasts.map(roast => {
              return (
                <div className="mb-3">
                  <Roast
                    image={roast.image}
                    caption={roast.caption}
                  />
                </div>
              );
            }) : null
          }
        </Masonry >
      </>
    );
  }
}

export default Home;