import React from 'react';
import Axios from 'axios';
import api from '../api';
import Roast from '../components/Roast/Roast';
import Masonry from 'react-masonry-css'

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

    return (
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="masonry-grid"
        columnClassName="masonry-grid_column"
      >
        {this.state.loaded ? this.state.roasts.map(roast => {
          return (
            <div className="mb-3">
              <Roast
                image={roast.image}
                caption={roast.caption}
              />
            </div>
          );
        }) : <h3>Loading</h3>}
      </Masonry>
    );
  }
}

export default Home;