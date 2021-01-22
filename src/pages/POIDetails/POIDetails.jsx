import React, { Component } from 'react';
import {getDetailsFromBackend} from '../../services/api-calls'

class POIDetails extends Component {
  state = {
    poiDetails: {},
  };

  //   handleDetailsSearch = async (POIid) => {
  //     console.log(POIid)
  //     const poiDetails = await getDetailsFromBackend();
  //     this.setState({poiDetails});
  //   };
  async componentDidMount() {
    const poiDetails = await getDetailsFromBackend(this.props.match.params.id)
    console.log(poiDetails,'this is poi details')
    this.setState({ poiDetails: poiDetails.results[0] });
  }

  render() {
    
    return (
      <div>
        {this.state.poiDetails.images ? (
          <div>
            <h1 style={{ color: "wheat", textAlign: "center" }}>
              {this.state.poiDetails.name}
            </h1>
            <h2 style={{ textAlign: "center" }}>
              {this.state.poiDetails.snippet}
            </h2>
            <h3>Score: {this.state.poiDetails.score}/10</h3>
            <button>Add To Favorites</button>
            {this.state.poiDetails.images.map((i) => (
              <>
                <img
                  src={i.sizes.medium.url}
                  alt=''
                  height='600px'
                  width='600px'
                />
                <h5>{i.caption}</h5>
              </>
            ))}
          </div>
        ) : (
          <div>
            <p>Loading...</p>
          </div>
        )}
      </div>
    );
  }
}
 
export default POIDetails;