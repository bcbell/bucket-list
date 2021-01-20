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
    <>
  
      {this.state.poiDetails ? (
        <h1 style={{color:'wheat'}}>{this.state.poiDetails.name}</h1>
      ) : (
        <p>Loading...</p>
      )
    }
    </>
    );
  }
}
 
export default POIDetails;